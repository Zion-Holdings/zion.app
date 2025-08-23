import type { NextApiRequest, NextApiResponse } from 'next';
import { applyCorsHeaders } from '@/middleware/cors';
import {logErrorToProduction} from '@/utils/productionLogger';


interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatResponse {
  choices: Array<{
    message: {
      content: string;
      role: 'assistant';
    };
  }>;
  usage?: {
    total_tokens: number;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse | { error: string }>
) {
  // Apply CORS headers
  applyCorsHeaders(req, res as NextApiResponse<unknown>);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { messages } = req.body as { messages?: unknown };

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Get the last user message
    const lastUserMessage = messages
      .filter((msg: ChatMessage) => msg.role === 'user')
      .pop();

    if (!lastUserMessage) {
      return res.status(400).json({ error: 'No user message found' });
    }

    // Simple knowledge base responses
    const responses = getKnowledgeBaseResponse(lastUserMessage.content);

    // Return in OpenAI-compatible format
    const response: ChatResponse = {
      choices: [
        {
          message: {
            content: responses,
            role: 'assistant' as const,
          },
        },
      ],
      usage: {
        total_tokens: 100, // Mock usage
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    logErrorToProduction('KB Chat API error:', { data: error });
    return res.status(500).json({ error: 'Internal server error' });
  }
}

function getKnowledgeBaseResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Simple keyword-based responses
  if (message.includes('pricing') || message.includes('price') || message.includes('cost')) {
    return "Our pricing varies by service. You can view detailed pricing on our marketplace or contact sales@ziontechgroup.com for custom quotes.";
  }

  if (message.includes('hire') || message.includes('talent') || message.includes('freelancer')) {
    return "To hire talent on Zion, browse our talent directory, review profiles, and submit project requests. Our matching system will connect you with qualified professionals.";
  }

  if (message.includes('api') || message.includes('integration')) {
    return "Our API documentation is available at /docs/api. For integration support, contact developers@ziontechgroup.com.";
  }

  if (message.includes('support') || message.includes('help') || message.includes('contact')) {
    return "For support, you can:\n• Email us at support@ziontechgroup.com\n• Browse our help center\n• Use this chat for quick questions\n• Schedule a call with our team";
  }

  if (message.includes('account') || message.includes('login') || message.includes('signup')) {
    return "To create an account, click 'Sign Up' in the top right corner. If you're having login issues, try resetting your password or contact support@ziontechgroup.com.";
  }

  if (message.includes('marketplace') || message.includes('services') || message.includes('product')) {
    return "Our marketplace offers AI services, talent, equipment, and more. Browse categories to find what you need, or use our search function for specific requirements.";
  }

  // Default response
  return "I'm here to help with questions about Zion's services, pricing, talent hiring, and platform features. For specific technical support, please contact support@ziontechgroup.com.";
} 