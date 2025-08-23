import { ProductListing } from '@/types/listings';

// IT and AI Service Categories with market data
const SERVICE_CATEGORIES = {
  'AI Development': {
    priceRange: { min: 8000, max: 50000 },
    averageRating: 4.6,
    services: [
      'Custom AI Model Development',
      'Machine Learning Pipeline',
      'Computer Vision Solutions',
      'Natural Language Processing',
      'AI Chatbot Development',
      'Predictive Analytics Platform',
      'AI-Powered Automation',
      'Deep Learning Solutions'
    ]
  },
  'Cloud Services': {
    priceRange: { min: 2500, max: 25000 },
    averageRating: 4.5,
    services: [
      'Cloud Migration Services',
      'AWS Infrastructure Setup',
      'Azure Cloud Solutions',
      'Multi-Cloud Management',
      'Cloud Security Implementation',
      'DevOps Pipeline Setup',
      'Serverless Architecture',
      'Container Orchestration'
    ]
  },
  'Cybersecurity': {
    priceRange: { min: 5000, max: 35000 },
    averageRating: 4.7,
    services: [
      'Security Assessment & Audit',
      'Penetration Testing',
      'Zero Trust Implementation',
      'SOC as a Service',
      'Compliance Management',
      'Incident Response Planning',
      'Identity Access Management',
      'Threat Intelligence'
    ]
  },
  'Data Analytics': {
    priceRange: { min: 4000, max: 30000 },
    averageRating: 4.4,
    services: [
      'Business Intelligence Setup',
      'Data Warehouse Design',
      'Real-time Analytics',
      'ETL Pipeline Development',
      'Data Visualization Dashboard',
      'Big Data Processing',
      'Predictive Modeling',
      'Data Governance Strategy'
    ]
  },
  'Software Development': {
    priceRange: { min: 6000, max: 40000 },
    averageRating: 4.5,
    services: [
      'Custom Web Applications',
      'Mobile App Development',
      'API Development & Integration',
      'Microservices Architecture',
      'Legacy System Modernization',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Enterprise Software'
    ]
  },
  'IT Consulting': {
    priceRange: { min: 3000, max: 20000 },
    averageRating: 4.3,
    services: [
      'Digital Transformation Strategy',
      'IT Infrastructure Assessment',
      'Technology Roadmap Planning',
      'Vendor Selection & Management',
      'Change Management',
      'ITIL Implementation',
      'Agile Transformation',
      'IT Cost Optimization'
    ]
  },
  'Automation': {
    priceRange: { min: 4500, max: 28000 },
    averageRating: 4.6,
    services: [
      'Robotic Process Automation',
      'Workflow Automation',
      'Infrastructure as Code',
      'Test Automation Framework',
      'Business Process Automation',
      'CI/CD Pipeline Setup',
      'Monitoring & Alerting',
      'Database Automation'
    ]
  }
};

// Professional service providers
const SERVICE_PROVIDERS = [
  'TechSolutions Inc.',
  'CloudPro Experts',
  'DataMind Solutions',
  'SecureNet Team',
  'AI Future Consulting',
  'Pipeline Pros',
  'ModernizeIT Consulting',
  'Digital Innovators',
  'SmartTech Partners',
  'Enterprise Solutions Co.',
  'DevOps Masters',
  'CyberGuard Services',
  'Analytics First',
  'Cloud Architects',
  'AI Specialists',
  'Automation Experts'
];

// Generate realistic service pricing using normal distribution
function generateServicePrice(category: string): number {
  const categoryData = SERVICE_CATEGORIES[category as keyof typeof SERVICE_CATEGORIES];
  if (!categoryData) return 5000;
  
  const { min, max } = categoryData.priceRange;
  const mean = (min + max) / 2;
  const stdDev = (max - min) / 6; // 99.7% within range
  
  // Box-Muller transform for normal distribution
  const u1 = Math.random();
  const u2 = Math.random();
  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  
  let price = mean + stdDev * z0;
  price = Math.max(min, Math.min(max, price)); // Clamp to range
  
  // Round to nearest 500 for realistic pricing
  return Math.round(price / 500) * 500;
}

// Generate service descriptions
function generateServiceDescription(category: string, serviceName: string): string {
  const descriptions = {
    'AI Development': [
      `Advanced ${serviceName.toLowerCase()} leveraging cutting-edge machine learning algorithms and deep learning frameworks.`,
      `Professional ${serviceName.toLowerCase()} service with proven expertise in AI implementation and optimization.`,
      `Enterprise-grade ${serviceName.toLowerCase()} designed to transform your business operations with intelligent automation.`
    ],
    'Cloud Services': [
      `Comprehensive ${serviceName.toLowerCase()} with 24/7 support and enterprise-grade security.`,
      `Scalable ${serviceName.toLowerCase()} built on industry best practices and cloud-native architecture.`,
      `Professional ${serviceName.toLowerCase()} ensuring high availability and cost optimization.`
    ],
    'Cybersecurity': [
      `Expert ${serviceName.toLowerCase()} to protect your organization from advanced persistent threats.`,
      `Comprehensive ${serviceName.toLowerCase()} following industry standards and compliance requirements.`,
      `Professional ${serviceName.toLowerCase()} with continuous monitoring and threat detection.`
    ],
    'Data Analytics': [
      `Advanced ${serviceName.toLowerCase()} transforming raw data into actionable business insights.`,
      `Professional ${serviceName.toLowerCase()} with real-time processing and visualization capabilities.`,
      `Enterprise ${serviceName.toLowerCase()} enabling data-driven decision making across your organization.`
    ],
    'Software Development': [
      `Custom ${serviceName.toLowerCase()} built with modern frameworks and scalable architecture.`,
      `Professional ${serviceName.toLowerCase()} following agile methodologies and best practices.`,
      `Enterprise-ready ${serviceName.toLowerCase()} with comprehensive testing and documentation.`
    ],
    'IT Consulting': [
      `Strategic ${serviceName.toLowerCase()} to align technology with your business objectives.`,
      `Expert ${serviceName.toLowerCase()} providing actionable recommendations and implementation roadmaps.`,
      `Comprehensive ${serviceName.toLowerCase()} to optimize your IT operations and reduce costs.`
    ],
    'Automation': [
      `Intelligent ${serviceName.toLowerCase()} to streamline operations and increase efficiency.`,
      `Advanced ${serviceName.toLowerCase()} reducing manual work and operational overhead.`,
      `Professional ${serviceName.toLowerCase()} with seamless integration and monitoring capabilities.`
    ]
  };
  
  const categoryDescriptions = descriptions[category as keyof typeof descriptions] || descriptions['IT Consulting'];
  return categoryDescriptions[Math.floor(Math.random() * categoryDescriptions.length)] || 'Professional service with expert implementation and support.';
}

// Generate service tags
function generateServiceTags(category: string, serviceName: string): string[] {
  const baseTags = {
    'AI Development': ['AI', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
    'Cloud Services': ['AWS', 'Azure', 'Cloud', 'DevOps', 'Kubernetes'],
    'Cybersecurity': ['Security', 'Compliance', 'Penetration Testing', 'SOC', 'Zero Trust'],
    'Data Analytics': ['Big Data', 'Analytics', 'BI', 'Data Science', 'Visualization'],
    'Software Development': ['Full Stack', 'API', 'Microservices', 'React', 'Node.js'],
    'IT Consulting': ['Strategy', 'Digital Transformation', 'ITIL', 'Agile', 'Planning'],
    'Automation': ['RPA', 'Workflow', 'CI/CD', 'Infrastructure', 'Process Automation']
  };
  
  const categoryTags = baseTags[category as keyof typeof baseTags] || baseTags['IT Consulting'];
  const selectedTags = categoryTags.slice(0, 3 + Math.floor(Math.random() * 2));
  
  // Add service-specific tags
  if (serviceName.includes('AI')) selectedTags.push('Artificial Intelligence');
  if (serviceName.includes('Cloud')) selectedTags.push('Cloud Computing');
  if (serviceName.includes('Security')) selectedTags.push('Information Security');
  if (serviceName.includes('Mobile')) selectedTags.push('Mobile Development');
  
  return [...new Set(selectedTags)]; // Remove duplicates
}

// Generate professional IT/AI services
export function generateITServices(count: number, startId: number = 0): ProductListing[] {
  const services: ProductListing[] = [];
  const categories = Object.keys(SERVICE_CATEGORIES);
  
  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)] || 'IT Consulting';
    const categoryData = SERVICE_CATEGORIES[category as keyof typeof SERVICE_CATEGORIES];
    const serviceName = categoryData.services[Math.floor(Math.random() * categoryData.services.length)] || 'IT Consulting Service';
    const provider = SERVICE_PROVIDERS[Math.floor(Math.random() * SERVICE_PROVIDERS.length)] || 'Professional Services Inc.';
    const price = generateServicePrice(category || 'IT Consulting');
    
    // Generate realistic ratings with slight bias toward category average
    const baseRating = categoryData.averageRating;
    const rating = Math.max(3.5, Math.min(5.0, baseRating + (Math.random() - 0.5) * 0.8));
    
    // Generate review count based on price (higher price = more established = more reviews)
    const reviewCount = Math.floor(20 + (price / 1000) * 3 + Math.random() * 50);
    
    // Generate AI score based on category and price
    let aiScore = 75 + Math.random() * 20; // Base 75-95
    if (category === 'AI Development') aiScore = Math.max(aiScore, 85);
    if (category === 'Automation') aiScore = Math.max(aiScore, 80);
    if (price > 20000) aiScore += 5; // Premium services tend to have higher AI scores
    
    const service: ProductListing = {
      id: `service-${startId + i + 1}`,
      title: serviceName,
      description: generateServiceDescription(category, serviceName),
      category,
      price: price,
      currency: '$',
      tags: generateServiceTags(category, serviceName),
      author: {
        name: provider,
        id: provider.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        avatarUrl: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?auto=format&fit=crop&w=100&h=100`
      },
      images: [
        `https://images.unsplash.com/photo-${1580000000000 + Math.floor(Math.random() * 50000000)}?auto=format&fit=crop&w=800&h=500`
      ],
      createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(), // Random date within last 90 days
      aiScore: Math.round(aiScore),
      rating: Math.round(rating * 10) / 10,
      reviewCount: reviewCount,
      availability: Math.random() > 0.3 ? 'Available' : Math.random() > 0.5 ? '2-3 Weeks' : 'Consultation Required'
    };
    
    services.push(service);
  }
  
  return services;
}

// Calculate market statistics for services
export function getServicesMarketStats(services: ProductListing[]) {
  if (services.length === 0) return null;
  
  const prices = services.map(s => s.price || 0);
  const ratings = services.map(s => s.rating || 0);
  const aiScores = services.map(s => s.aiScore || 0);
  
  const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
  const avgRating = Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10;
  const avgAIScore = Math.round(aiScores.reduce((a, b) => a + b, 0) / aiScores.length);
  
  const availableCount = services.filter(s => s.availability === 'Available').length;
  const premiumCount = services.filter(s => (s.price || 0) > 15000).length;
  
  // Category distribution
  const categoryStats = services.reduce((acc: any, service) => {
    const cat = service.category || 'Other';
    if (!acc[cat]) acc[cat] = { count: 0, avgPrice: 0, prices: [] };
    acc[cat].count += 1;
    acc[cat].prices.push(service.price || 0);
    return acc;
  }, {});
  
  // Calculate average prices per category
  Object.keys(categoryStats).forEach(cat => {
    const prices = categoryStats[cat].prices;
    categoryStats[cat].avgPrice = Math.round(prices.reduce((a: number, b: number) => a + b, 0) / prices.length);
    delete categoryStats[cat].prices; // Clean up
  });
  
  return {
    averagePrice: avgPrice,
    averageRating: avgRating,
    averageAIScore: avgAIScore,
    totalServices: services.length,
    availableServices: availableCount,
    premiumServices: premiumCount,
    categoryBreakdown: categoryStats,
    priceRange: {
      min: Math.min(...prices),
      max: Math.max(...prices)
    }
  };
}

// Get recommended services (high rating and AI score)
export function getRecommendedServices(services: ProductListing[]): ProductListing[] {
  return services.filter(service => {
    const rating = service.rating || 0;
    const aiScore = service.aiScore || 0;
    return rating >= 4.4 && aiScore >= 85;
  });
}

// Service pricing by category (for reference)
export const SERVICE_PRICING_GUIDE = {
  'AI Development': '$8k-50k',
  'Cloud Services': '$2.5k-25k',
  'Cybersecurity': '$5k-35k',
  'Data Analytics': '$4k-30k',
  'Software Development': '$6k-40k',
  'IT Consulting': '$3k-20k',
  'Automation': '$4.5k-28k'
}; 