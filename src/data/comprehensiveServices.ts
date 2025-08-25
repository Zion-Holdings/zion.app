export interface ComprehensiveService {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    type: 'one-time' | 'monthly' | 'hourly' | 'project-based';
    amount: number;
    currency: string;
    description: string;
  }[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  contactInfo: {
    email: string;
    phone: string;
    website?: string;
  };
  status: 'available' | 'coming-soon' | 'beta';
  tags: string[];
  supportLevel: 'basic' | 'premium' | 'enterprise';
  marketPrice: {
    min: number;
    max: number;
    average: number;
    currency: string;
  };
}

export const serviceCategories = [
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Data Analytics',
  'Digital Transformation',
  'E-commerce Solutions',
  'Mobile Development',
  'Web Development',
  'Business Process Automation',
  'IT Consulting'
];

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  {
    id: 'ai-ml-platform',
    title: 'AI & Machine Learning Platform',
    description: 'Enterprise-grade AI and machine learning platform for predictive analytics, natural language processing, and computer vision applications.',
    category: 'AI & Machine Learning',
    features: [
      'Custom ML model development',
      'Data preprocessing & feature engineering',
      'Model training & optimization',
      'Real-time inference API',
      'Model monitoring & retraining',
      'AutoML capabilities',
      'Integration with existing systems',
      'Scalable cloud infrastructure'
    ],
    pricing: [
      {
        type: 'project-based',
        amount: 25000,
        currency: 'USD',
        description: 'Custom AI solution development'
      },
      {
        type: 'monthly',
        amount: 5000,
        currency: 'USD',
        description: 'Platform hosting & maintenance'
      },
      {
        type: 'hourly',
        amount: 150,
        currency: 'USD',
        description: 'Consulting & support'
      }
    ],
    benefits: [
      'Automate complex decision-making processes',
      'Improve prediction accuracy by 40%',
      'Reduce operational costs through automation',
      'Gain competitive advantage with AI insights',
      'Scale AI capabilities as business grows'
    ],
    useCases: [
      'Customer behavior prediction',
      'Fraud detection systems',
      'Supply chain optimization',
      'Quality control automation',
      'Predictive maintenance'
    ],
    targetAudience: ['Enterprises', 'Financial services', 'Healthcare', 'Manufacturing', 'Retail'],
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    status: 'available',
    tags: ['AI', 'Machine Learning', 'Predictive Analytics', 'NLP', 'Computer Vision'],
    supportLevel: 'enterprise',
    marketPrice: {
      min: 20000,
      max: 100000,
      average: 50000,
      currency: 'USD'
    }
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Infrastructure',
    description: 'Comprehensive cloud migration services including strategy, implementation, and ongoing management for optimal performance and cost efficiency.',
    category: 'Cloud & Infrastructure',
    features: [
      'Cloud readiness assessment',
      'Migration strategy & planning',
      'Data migration & synchronization',
      'Application modernization',
      'Performance optimization',
      'Cost optimization & monitoring',
      'Security & compliance setup',
      '24/7 infrastructure management'
    ],
    pricing: [
      {
        type: 'project-based',
        amount: 15000,
        currency: 'USD',
        description: 'Migration planning & strategy'
      },
      {
        type: 'project-based',
        amount: 50000,
        currency: 'USD',
        description: 'Full migration implementation'
      },
      {
        type: 'monthly',
        amount: 3000,
        currency: 'USD',
        description: 'Ongoing management & support'
      }
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve scalability and flexibility',
      'Enhanced security and compliance',
      'Better disaster recovery capabilities',
      'Access to latest cloud technologies'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center consolidation',
      'Multi-cloud strategy implementation',
      'Disaster recovery setup',
      'Performance optimization'
    ],
    targetAudience: ['Enterprises', 'SMBs', 'Healthcare', 'Finance', 'Education'],
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    status: 'available',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'GCP', 'DevOps', 'Infrastructure'],
    supportLevel: 'premium',
    marketPrice: {
      min: 10000,
      max: 100000,
      average: 40000,
      currency: 'USD'
    }
  }
];

export default COMPREHENSIVE_SERVICES;
