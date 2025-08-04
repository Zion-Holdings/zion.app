import { NextApiRequest, NextApiResponse } from 'next';

interface UserProfile {
  preferences: string[];
  budget: string;
  timeline: string;
  expertise: string;
  projectType: string;
}

interface Recommendation {
  id: string;
  type: 'service' | 'talent' | 'equipment' | 'product';
  title: string;
  description: string;
  matchScore: number;
  price: string;
  rating: number;
  tags: string[];
  image: string;
  link: string;
  aiInsights: string[];
}

// Mock database of available services, talents, and equipment
const availableItems: Recommendation[] = [
  // AI/ML Services
  {
    id: 'ai-model-dev',
    type: 'service',
    title: 'AI Model Development',
    description: 'Custom AI model development with advanced machine learning algorithms',
    matchScore: 0,
    price: '$2,500 - $15,000',
    rating: 4.9,
    tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
    image: '/api/placeholder/300/200',
    link: '/services/ai-model-development',
    aiInsights: []
  },
  {
    id: 'data-analytics',
    type: 'service',
    title: 'Data Analytics & BI',
    description: 'Comprehensive data analysis and business intelligence solutions',
    matchScore: 0,
    price: '$1,500 - $10,000',
    rating: 4.8,
    tags: ['Data Analytics', 'BI', 'SQL', 'PowerBI'],
    image: '/api/placeholder/300/200',
    link: '/services/data-analytics',
    aiInsights: []
  },
  {
    id: 'cloud-migration',
    type: 'service',
    title: 'Cloud Migration Services',
    description: 'Complete cloud infrastructure setup and migration',
    matchScore: 0,
    price: '$3,000 - $25,000',
    rating: 4.6,
    tags: ['Cloud', 'AWS', 'Azure', 'DevOps'],
    image: '/api/placeholder/300/200',
    link: '/services/cloud-migration',
    aiInsights: []
  },
  {
    id: 'web-development',
    type: 'service',
    title: 'Full-Stack Web Development',
    description: 'Complete web application development with modern technologies',
    matchScore: 0,
    price: '$5,000 - $50,000',
    rating: 4.7,
    tags: ['Web Development', 'React', 'Node.js', 'Full-Stack'],
    image: '/api/placeholder/300/200',
    link: '/services/web-development',
    aiInsights: []
  },
  // AI Talents
  {
    id: 'dr-sarah-chen',
    type: 'talent',
    title: 'Dr. Sarah Chen - ML Expert',
    description: 'Senior Machine Learning Engineer with PhD in Computer Science',
    matchScore: 0,
    price: '$150/hr',
    rating: 4.8,
    tags: ['Machine Learning', 'PhD', 'Research', 'AI'],
    image: '/api/placeholder/300/200',
    link: '/talents/dr-sarah-chen',
    aiInsights: []
  },
  {
    id: 'alex-rodriguez',
    type: 'talent',
    title: 'Alex Rodriguez - Full-Stack Developer',
    description: 'Experienced full-stack developer with 8+ years in web development',
    matchScore: 0,
    price: '$120/hr',
    rating: 4.9,
    tags: ['Full-Stack', 'React', 'Node.js', 'TypeScript'],
    image: '/api/placeholder/300/200',
    link: '/talents/alex-rodriguez',
    aiInsights: []
  },
  {
    id: 'emma-thompson',
    type: 'talent',
    title: 'Emma Thompson - Data Scientist',
    description: 'Senior Data Scientist specializing in predictive analytics',
    matchScore: 0,
    price: '$140/hr',
    rating: 4.7,
    tags: ['Data Science', 'Python', 'R', 'Statistics'],
    image: '/api/placeholder/300/200',
    link: '/talents/emma-thompson',
    aiInsights: []
  },
  // Equipment
  {
    id: 'gpu-cluster-rtx4090',
    type: 'equipment',
    title: 'GPU Cluster - RTX 4090',
    description: 'High-performance GPU cluster for AI training and inference',
    matchScore: 0,
    price: '$5,000/month',
    rating: 4.7,
    tags: ['GPU', 'AI Training', 'High Performance', 'Cloud'],
    image: '/api/placeholder/300/200',
    link: '/equipment/gpu-cluster-rtx4090',
    aiInsights: []
  },
  {
    id: 'quantum-computer',
    type: 'equipment',
    title: 'Quantum Computing Access',
    description: 'Access to quantum computing resources for advanced research',
    matchScore: 0,
    price: '$10,000/month',
    rating: 4.5,
    tags: ['Quantum Computing', 'Research', 'Advanced', 'IBM'],
    image: '/api/placeholder/300/200',
    link: '/equipment/quantum-computer',
    aiInsights: []
  },
  {
    id: 'edge-computing',
    type: 'equipment',
    title: 'Edge Computing Devices',
    description: 'IoT and edge processing solutions for real-time applications',
    matchScore: 0,
    price: '$1,000 - $10,000',
    rating: 4.6,
    tags: ['IoT', 'Edge Computing', 'Real-time', 'Hardware'],
    image: '/api/placeholder/300/200',
    link: '/equipment/edge-computing',
    aiInsights: []
  }
];

// AI matching algorithm
function calculateMatchScore(item: Recommendation, profile: UserProfile): number {
  let score = 0;
  
  // Project type matching
  if (profile.projectType) {
    const projectType = profile.projectType.toLowerCase();
    if (projectType.includes('ai') || projectType.includes('ml')) {
      if (item.tags.some(tag => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('machine learning'))) {
        score += 30;
      }
    } else if (projectType.includes('web')) {
      if (item.tags.some(tag => tag.toLowerCase().includes('web') || tag.toLowerCase().includes('react'))) {
        score += 30;
      }
    } else if (projectType.includes('data')) {
      if (item.tags.some(tag => tag.toLowerCase().includes('data') || tag.toLowerCase().includes('analytics'))) {
        score += 30;
      }
    } else if (projectType.includes('cloud')) {
      if (item.tags.some(tag => tag.toLowerCase().includes('cloud') || tag.toLowerCase().includes('aws'))) {
        score += 30;
      }
    }
  }
  
  // Budget matching
  if (profile.budget) {
    const budget = profile.budget.toLowerCase();
    const itemPrice = item.price.toLowerCase();
    
    if (budget.includes('under $1,000') && itemPrice.includes('$1,000')) {
      score += 20;
    } else if (budget.includes('$1,000 - $5,000') && 
               (itemPrice.includes('$1,500') || itemPrice.includes('$2,500') || itemPrice.includes('$3,000'))) {
      score += 20;
    } else if (budget.includes('$5,000 - $15,000') && 
               (itemPrice.includes('$5,000') || itemPrice.includes('$10,000'))) {
      score += 20;
    } else if (budget.includes('$15,000 - $50,000') && 
               (itemPrice.includes('$15,000') || itemPrice.includes('$25,000'))) {
      score += 20;
    } else if (budget.includes('$50,000+') && itemPrice.includes('$50,000')) {
      score += 20;
    }
  }
  
  // Timeline matching
  if (profile.timeline) {
    const timeline = profile.timeline.toLowerCase();
    if (timeline.includes('1-2 weeks') && item.type === 'talent') {
      score += 15; // Talents can start quickly
    } else if (timeline.includes('1-2 months') && item.type === 'service') {
      score += 15; // Services fit this timeline
    } else if (timeline.includes('3-6 months') && item.type === 'equipment') {
      score += 15; // Equipment for longer projects
    }
  }
  
  // Expertise level matching
  if (profile.expertise) {
    const expertise = profile.expertise.toLowerCase();
    if (expertise === 'beginner' && item.type === 'service') {
      score += 10; // Services are good for beginners
    } else if (expertise === 'expert' && item.type === 'talent') {
      score += 10; // Expert talents for expert users
    }
  }
  
  // Rating bonus
  score += (item.rating - 4.0) * 10;
  
  // Ensure score is between 0 and 100
  return Math.min(Math.max(score, 0), 100);
}

// Generate AI insights based on match
function generateAIInsights(item: Recommendation, profile: UserProfile): string[] {
  const insights: string[] = [];
  
  // Project type insights
  if (profile.projectType) {
    const projectType = profile.projectType.toLowerCase();
    if (projectType.includes('ai') || projectType.includes('ml')) {
      if (item.tags.some(tag => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('machine learning'))) {
        insights.push('Perfect match for your AI project requirements');
      }
    } else if (projectType.includes('web')) {
      if (item.tags.some(tag => tag.toLowerCase().includes('web') || tag.toLowerCase().includes('react'))) {
        insights.push('Ideal for your web development needs');
      }
    }
  }
  
  // Budget insights
  if (profile.budget) {
    const budget = profile.budget.toLowerCase();
    if (budget.includes('under $1,000') && item.price.includes('$1,000')) {
      insights.push('Fits within your budget constraints');
    } else if (budget.includes('$5,000 - $15,000') && item.price.includes('$5,000')) {
      insights.push('Cost-effective for your budget range');
    }
  }
  
  // Timeline insights
  if (profile.timeline) {
    const timeline = profile.timeline.toLowerCase();
    if (timeline.includes('1-2 weeks') && item.type === 'talent') {
      insights.push('Available for your immediate timeline');
    } else if (timeline.includes('1-2 months') && item.type === 'service') {
      insights.push('Perfect timeline for your project duration');
    }
  }
  
  // Expertise insights
  if (profile.expertise) {
    const expertise = profile.expertise.toLowerCase();
    if (expertise === 'beginner' && item.type === 'service') {
      insights.push('Great for beginners with comprehensive support');
    } else if (expertise === 'expert' && item.type === 'talent') {
      insights.push('Expert-level collaboration available');
    }
  }
  
  // Rating insights
  if (item.rating >= 4.8) {
    insights.push('Excellent client satisfaction rate');
  } else if (item.rating >= 4.5) {
    insights.push('High success rate with clients');
  }
  
  // Experience insights
  if (item.tags.includes('PhD') || item.tags.includes('Research')) {
    insights.push('Strong academic and research background');
  }
  
  // Technology insights
  if (item.tags.some(tag => ['React', 'Node.js', 'Python', 'TensorFlow'].includes(tag))) {
    insights.push('Uses modern, in-demand technologies');
  }
  
  return insights.length > 0 ? insights : ['Good match for your project requirements'];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userProfile }: { userProfile: UserProfile } = req.body;

    if (!userProfile) {
      return res.status(400).json({ error: 'User profile is required' });
    }

    // Calculate match scores for all items
    const recommendationsWithScores = availableItems.map(item => {
      const matchScore = calculateMatchScore(item, userProfile);
      const aiInsights = generateAIInsights(item, userProfile);
      
      return {
        ...item,
        matchScore,
        aiInsights
      };
    });

    // Sort by match score (highest first) and take top 8
    const topRecommendations = recommendationsWithScores
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 8);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({
      success: true,
      recommendations: topRecommendations,
      totalAnalyzed: availableItems.length,
      analysisTimestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('AI Recommendations API Error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to generate AI recommendations'
    });
  }
} 