export interface MicroSaasService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  popular?: boolean;
  price: string;
  period: string;
  setupTime: string;
  customers: number;
  trialDays: number;
  rating: number;
  reviews: number;
  benefits: string[];
  capabilities: string[];
  pricing: {
    monthly: string;
    yearly: string;
  };
  features: string[];
  roi: string;
  marketSize: string;
  growthRate: string;
  link: string;
  contactInfo: {
    email: string;
    mobile: string;
    address: string;
    website: string;
  };
}

export const enhancedMicroSaasServices: MicroSaasService[] = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence',
    tagline: 'Transform data into actionable insights',
    description: 'Advanced AI-powered analytics platform that helps businesses make data-driven decisions with real-time insights and predictive analytics.',
    category: 'AI & Machine Learning',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
    popular: true,
    price: '$99',
    period: '/month',
    setupTime: '24 hours',
    customers: 500,
    trialDays: 14,
    rating: 4.8,
    reviews: 127,
    benefits: [
      'Real-time data analytics',
      'Predictive insights',
      'Custom dashboards',
      'Automated reporting'
    ],
    capabilities: [
      'Machine learning algorithms',
      'Data visualization',
      'API integration',
      'Cloud deployment'
    ],
    pricing: {
      monthly: '$99',
      yearly: '$990'
    },
    features: [
      'Advanced analytics',
      'Custom dashboards',
      'API access',
      '24/7 support'
    ],
    roi: '300% average ROI within 6 months',
    marketSize: '$25B',
    growthRate: '25% YoY',
    link: '#',
    contactInfo: {
      email: 'ai@ziontechgroup.com',
      mobile: '+1 (555) 123-4567',
      address: '123 AI Street, Tech City, TC 12345',
      website: 'https://ai.ziontechgroup.com'
    }
  },
  {
    id: 'quantum-cybersecurity',
    name: 'Quantum Cybersecurity',
    tagline: 'Future-proof security solutions',
    description: 'Next-generation cybersecurity platform leveraging quantum-resistant algorithms and AI-powered threat detection.',
    category: 'Security',
    icon: '🔒',
    color: 'from-red-500 to-orange-500',
    popular: false,
    price: '$149',
    period: '/month',
    setupTime: '48 hours',
    customers: 250,
    trialDays: 7,
    rating: 4.9,
    reviews: 89,
    benefits: [
      'Quantum-resistant encryption',
      'AI threat detection',
      'Real-time monitoring',
      'Compliance ready'
    ],
    capabilities: [
      'Advanced encryption',
      'Threat intelligence',
      'Incident response',
      'Security audits'
    ],
    pricing: {
      monthly: '$149',
      yearly: '$1490'
    },
    features: [
      'Quantum encryption',
      'AI monitoring',
      'Compliance tools',
      'Security consulting'
    ],
    roi: '400% average ROI within 8 months',
    marketSize: '$150B',
    growthRate: '30% YoY',
    link: '#',
    contactInfo: {
      email: 'security@ziontechgroup.com',
      mobile: '+1 (555) 123-4568',
      address: '456 Security Ave, Cyber City, CC 67890',
      website: 'https://security.ziontechgroup.com'
    }
  },
  {
    id: 'space-resource-intelligence',
    name: 'Space Resource Intelligence',
    tagline: 'Optimize space utilization',
    description: 'AI-powered platform for optimizing office space, meeting rooms, and resource allocation in modern workplaces.',
    category: 'Workplace Optimization',
    icon: '🚀',
    color: 'from-indigo-500 to-purple-500',
    popular: false,
    price: '$79',
    period: '/month',
    setupTime: '72 hours',
    customers: 150,
    trialDays: 21,
    rating: 4.7,
    reviews: 56,
    benefits: [
      'Space optimization',
      'Cost reduction',
      'Employee satisfaction',
      'Data insights'
    ],
    capabilities: [
      'Space analytics',
      'Resource scheduling',
      'Occupancy tracking',
      'Performance metrics'
    ],
    pricing: {
      monthly: '$79',
      yearly: '$790'
    },
    features: [
      'Space analytics',
      'Scheduling tools',
      'Occupancy tracking',
      'Reporting dashboard'
    ],
    roi: '250% average ROI within 4 months',
    marketSize: '$8B',
    growthRate: '20% YoY',
    link: '#',
    contactInfo: {
      email: 'workplace@ziontechgroup.com',
      mobile: '+1 (555) 123-4569',
      address: '789 Workplace Blvd, Office City, OC 11111',
      website: 'https://workplace.ziontechgroup.com'
    }
  }
];