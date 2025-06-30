import type { NextApiRequest, NextApiResponse } from 'next';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
}

const FALLBACK_CATEGORIES: Category[] = [
  { id: '1', name: 'AI Services', slug: 'ai-services', icon: '🤖', description: 'Advanced AI and machine learning services' },
  { id: '2', name: 'Machine Learning', slug: 'machine-learning', icon: '🧠', description: 'Custom ML models and algorithms' },
  { id: '3', name: 'Data Analytics', slug: 'data-analytics', icon: '📊', description: 'Data analysis and visualization solutions' },
  { id: '4', name: 'Cloud Computing', slug: 'cloud-computing', icon: '☁️', description: 'Cloud infrastructure and services' },
  { id: '5', name: 'IoT Solutions', slug: 'iot-solutions', icon: '🌐', description: 'Internet of Things implementations' },
  { id: '6', name: 'Cybersecurity', slug: 'cybersecurity', icon: '🔒', description: 'Security consulting and solutions' },
  { id: '7', name: 'Web Development', slug: 'web-development', icon: '💻', description: 'Full-stack web application development' },
  { id: '8', name: 'Mobile Development', slug: 'mobile-development', icon: '📱', description: 'iOS and Android app development' },
  { id: '9', name: 'DevOps', slug: 'devops', icon: '⚙️', description: 'CI/CD and infrastructure automation' },
  { id: '10', name: 'Blockchain', slug: 'blockchain', icon: '⛓️', description: 'Blockchain and cryptocurrency solutions' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    logInfo('Marketplace categories API called');
    
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Return categories data
    return res.status(200).json(FALLBACK_CATEGORIES);
  } catch (error) {
    logErrorToProduction('Error in marketplace categories API:', { data: error });
    
    // Return fallback empty array instead of error
    return res.status(200).json([]);
  }
} 