import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Zion AI Marketplace knowledge base
const ZION_KNOWLEDGE = `
Zion AI Marketplace is a comprehensive platform for AI tools and services. Here are the key features and information:

PLATFORM FEATURES:
- AI Tool Marketplace: Browse and discover various AI tools and services
- User Authentication: Secure login and registration system
- Tool Categories: Organized by different AI capabilities and use cases
- User Profiles: Personalized dashboards and settings
- Search and Filter: Find specific AI tools based on your needs
- Reviews and Ratings: User feedback and recommendations
- Integration Support: Easy integration with existing workflows

COMMON QUESTIONS:
- How to browse AI tools: Use the search and filter options on the homepage
- How to create an account: Click the "Sign Up" button and follow the registration process
- How to find specific tools: Use the search bar or browse categories
- How to get support: Contact our support team or use this chat assistant
- Pricing information: Check individual tool pages for pricing details
- Integration help: Each tool page includes integration documentation

PLATFORM POLICIES:
- All tools are vetted for quality and security
- User data is protected and never shared without consent
- Regular updates and new tools are added frequently
- Customer support is available 24/7
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Prepare conversation context
    const messages = [
      {
        role: 'system' as const,
        content: `You are a helpful AI assistant for the Zion AI Marketplace. You help users navigate the platform, answer questions about AI tools, and provide guidance on using the marketplace effectively.

${ZION_KNOWLEDGE}

IMPORTANT GUIDELINES:
- Always be helpful, friendly, and professional
- Provide accurate information about the Zion AI Marketplace
- If you don't know something specific, suggest contacting support
- Keep responses concise but informative
- Encourage users to explore the platform features
- Be conversational and engaging
- If asked about pricing, direct users to individual tool pages
- If asked about technical issues, suggest contacting support
- Always maintain a positive and helpful tone`
      },
      ...conversationHistory,
      {
        role: 'user' as const,
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I\'m having trouble processing your request right now. Please try again.';

    res.status(200).json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle specific OpenAI errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return res.status(500).json({ 
          error: 'OpenAI API configuration error. Please contact support.' 
        });
      }
      if (error.message.includes('rate limit')) {
        return res.status(429).json({ 
          error: 'Too many requests. Please try again in a moment.' 
        });
      }
    }

    res.status(500).json({ 
      error: 'An error occurred while processing your request. Please try again.' 
    });
  }
} 