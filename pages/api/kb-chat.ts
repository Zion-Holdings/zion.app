import type { NextApiRequest, NextApiResponse } from 'next';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

interface ChatResponse {
  response: string;
  confidence: number;
}

function getKnowledgeBaseResponse(userMessage: string): string {
  // Simple knowledge base lookup - replace with actual KB system
  const knowledgeBase: Record<string, string> = {
    'hello': 'Hello! How can I help you today?',
    'help': 'I can help you with various topics. What would you like to know?',
    'contact': 'You can contact us at support@example.com',
    'pricing': 'Our pricing varies by plan. Please check our pricing page for details.',
  };

  const message = userMessage.toLowerCase();
  
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (message.includes(key)) {
      return value;
    }
  }

  return 'I\'m sorry, I don\'t have information about that. Please contact support for assistance.';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages }: ChatRequest = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const lastUserMessage = messages[messages.length - 1];
    
    if (lastUserMessage.role !== 'user') {
      return res.status(400).json({ error: 'Last message must be from user' });
    }

    const responses = getKnowledgeBaseResponse(lastUserMessage.content);
    
    const response: ChatResponse = {
      response: responses,
      confidence: 0.8 // Mock confidence score
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('KB Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}