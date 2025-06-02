import type { NextApiRequest, NextApiResponse } from 'next';

interface Message {
  role: string;
  content: string;
}

interface KBChatRequestBody {
  messages: Message[];
}

// Assuming a structure for the internal order API response
interface OrderResponse {
  id: string;
  status: string;
  // Add other fields if relevant
}

// Simplified structure for OpenAI's chat completion response
interface OpenAIChoice {
  message?: {
    content: string;
  };
  finish_reason?: string;
}
interface OpenAIResponse {
  choices?: OpenAIChoice[];
  // Add other fields if necessary, e.g., error object
  error?: { message: string };
}

interface KBChatSuccessResponse {
  message: string;
  confidence: number;
}

interface ErrorResponse {
  error: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<KBChatSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { messages } = req.body as KBChatRequestBody;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Request body must include a non-empty array of messages.' });
    }

    const lastMessageContent = messages[messages.length - 1]?.content || '';
    const orderMatch = lastMessageContent.match(/order\s*(?:status)?\s*#?(\d+)/i);

    if (/order status/i.test(lastMessageContent) && orderMatch) {
      const orderId = orderMatch[1];
      const base = req.headers.origin || `http://${req.headers.host}`; // Ensure origin or host is available
      
      try {
        const orderRes = await fetch(`${base}/api/orders/${orderId}`);
        if (orderRes.ok) {
          const order = await orderRes.json() as OrderResponse; // Type assertion
          return res.status(200).json({ message: `Order ${order.id} status is ${order.status}.`, confidence: 1 });
        } else {
          console.warn(`Internal order status check for #${orderId} failed with status: ${orderRes.status}`);
          // Fall through to OpenAI if internal lookup fails non-critically
        }
      } catch (fetchError) {
        console.error(`Error fetching internal order status for #${orderId}:`, fetchError);
        // Fall through to OpenAI if internal lookup fails
      }
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        console.error("OPENAI_API_KEY is not set.");
        return res.status(500).json({ error: "AI service is not configured." });
    }

    const openRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o', // Consider making this configurable
        messages,
        temperature: 0.3
      })
    });

    if (!openRes.ok) {
      const errorData = await openRes.json() as OpenAIResponse; // Type assertion for error response
      console.error('OpenAI API Error:', errorData);
      return res.status(openRes.status).json({ error: errorData.error?.message || 'Failed to get response from AI service.' });
    }
    
    const data = await openRes.json() as OpenAIResponse; // Type assertion for success response
    const answer = data.choices?.[0]?.message?.content || 'Sorry, I am not sure.';
    const confidence = data.choices?.[0]?.finish_reason === 'stop' ? 0.8 : 0.5;
    
    if (confidence < 0.6) {
      // Placeholder for escalation logic
      console.log('Escalating to Zendesk (simulated)');
    }
    
    return res.status(200).json({ message: answer, confidence });

  } catch (e: unknown) {
    let message = 'An unexpected error occurred.';
    if (e instanceof Error) {
      message = e.message;
    } else if (typeof e === 'string') {
      message = e;
    }
    console.error('KB Chat Error:', e);
    return res.status(500).json({ error: message });
  }
}
