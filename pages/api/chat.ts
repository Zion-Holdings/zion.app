import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Marketplace knowledge base
const marketplaceData = {
  services: [
    {
      name: 'AI Development Services',
      category: 'AI Talent',
      description: 'Expert AI developers for machine learning, deep learning, and AI integration',
      price: '$150-500/hr',
      rating: 4.9,
      link: '/services/ai-model-development'
    },
    {
      name: 'Cloud Infrastructure Setup',
      category: 'IT Services',
      description: 'Complete cloud infrastructure design and implementation',
      price: '$2000-15000',
      rating: 4.8,
      link: '/services/cloud-migration-services'
    },
    {
      name: 'Security Auditing',
      category: 'IT Services',
      description: 'Comprehensive security assessments and penetration testing',
      price: '$1000-8000',
      rating: 4.9,
      link: '/services/security-auditing'
    },
    {
      name: 'Performance Optimization',
      category: 'IT Services',
      description: 'System and application optimization for better performance',
      price: '$800-3000',
      rating: 4.7,
      link: '/services/performance-optimization'
    },
    {
      name: 'Blockchain Development',
      category: 'Innovation',
      description: 'Decentralized applications and smart contracts',
      price: '$200-600/hr',
      rating: 4.8,
      link: '/services/blockchain-supply-chain'
    },
    {
      name: 'IoT Integration',
      category: 'Innovation',
      description: 'Internet of Things implementation and management',
      price: '$150-400/hr',
      rating: 4.7,
      link: '/services/edge-ai-implementation'
    }
  ],
  talents: [
    {
      name: 'Dr. Sarah Chen',
      specialization: 'Machine Learning Expert',
      experience: '8+ years',
      rating: 4.9,
      link: '/talents'
    },
    {
      name: 'Alex Rodriguez',
      specialization: 'Deep Learning Specialist',
      experience: '6+ years',
      rating: 4.8,
      link: '/talents'
    },
    {
      name: 'Dr. Michael Kim',
      specialization: 'AI Research Scientist',
      experience: '10+ years',
      rating: 4.9,
      link: '/talents'
    }
  ],
  equipment: [
    {
      name: 'GPU Clusters',
      description: 'High-performance computing for AI workloads',
      price: '$5000-50000',
      link: '/equipment'
    },
    {
      name: 'Quantum Computers',
      description: 'Next-generation quantum processing',
      price: '$100000+',
      link: '/equipment'
    },
    {
      name: 'Edge Computing Devices',
      description: 'IoT and edge processing solutions',
      price: '$1000-10000',
      link: '/equipment'
    }
  ],
  categories: [
    { name: 'IT Services', link: '/services', icon: '💻' },
    { name: 'AI Talent', link: '/talents', icon: '🤖' },
    { name: 'Equipment', link: '/equipment', icon: '⚙️' },
    { name: 'Innovation', link: '/products', icon: '🚀' }
  ]
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create system prompt with marketplace context
    const systemPrompt = `You are Zion, an AI-powered virtual assistant for the Zion marketplace. You help users navigate our high-tech marketplace that offers:

${JSON.stringify(marketplaceData, null, 2)}

Your capabilities:
1. Product/Service Recommendations: Suggest relevant services, talents, or equipment based on user needs
2. Marketplace Navigation: Guide users to different sections and categories
3. Pricing Information: Provide pricing details for services and products
4. Expert Recommendations: Connect users with appropriate AI talents and IT services
5. Technical Guidance: Offer advice on technology solutions and implementations
6. Quote Requests: Help users understand how to request quotes for projects

Always be helpful, professional, and provide specific recommendations with links when possible. If a user asks about specific needs, suggest relevant services or talents from our marketplace.`;

    // Create conversation context
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I\'m having trouble processing your request right now. Please try again.';

    res.status(200).json({ 
      response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      response: "I'm sorry, I'm experiencing technical difficulties right now. Please try again in a moment."
    });
  }
}