import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductListing } from '@/types/listings';

// Mock personalized equipment recommendations
const mockRecommendations: ProductListing[] = [
  {
    id: 'rec-server-1',
    title: 'Recommended: HP ProLiant DL380 Gen10',
    description: 'Based on your browsing history, this server matches your enterprise requirements with excellent scalability and reliability.',
    category: 'Equipment',
    subcategory: 'Servers',
    price: 7500,
    currency: '$',
    tags: ['Server', 'HP', 'Recommended', 'Enterprise'],
    author: {
      name: 'AI Hardware Advisor',
      id: 'ai-advisor',
      avatarUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-03-10T12:00:00.000Z',
    rating: 4.7,
    reviewCount: 19,
    featured: true,
    location: 'Global',
    availability: '1-2 Weeks',
    brand: 'HP',
    specifications: ['2U Rack', 'Intel Xeon Gold', '64GB RAM', '1TB SSD']
  },
  {
    id: 'rec-storage-1',
    title: 'AI Pick: Dell EMC Unity 380',
    description: 'Perfect storage solution for your workload based on our analysis of similar deployments.',
    category: 'Equipment',
    subcategory: 'Storage',
    price: 25000,
    currency: '$',
    tags: ['Storage', 'Dell EMC', 'AI Recommended', 'Flash'],
    author: {
      name: 'AI Hardware Advisor',
      id: 'ai-advisor',
      avatarUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=100&h=100',
    },
    images: ['https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500'],
    createdAt: '2024-03-10T12:15:00.000Z',
    rating: 4.8,
    reviewCount: 14,
    location: 'Global',
    availability: '3-4 Weeks',
    brand: 'Dell EMC',
    specifications: ['All-Flash', '10TB Capacity', 'Unified Storage', 'Cloud Ready']
  }
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductListing[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const userId = (req.query as any).userId as string;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required for recommendations' });
    }

    console.log(`Fetching recommendations for user: ${userId}`);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return res.status(200).json(mockRecommendations);
  } catch (error) {
    console.error('Recommendations API error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error: Failed to fetch recommendations' 
    });
  }
} 