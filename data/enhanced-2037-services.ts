// Enhanced 2037 Services Data with Complete Properties
// This file provides enhanced service data with all properties needed by components

export interface EnhancedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  pricing: {
    starter: string;
    pro: string;
    enterprise: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  link: string;
  launchDate: string;
  rating: number;
  technology: string[];
  integrations: string[];
  compliance: string[];
  // Enhanced properties for component compatibility
  color: string;
  icon: string;
  popular: boolean;
  setupTime: string;
  trialDays: number;
  customers: number;
  reviews: number;
  period: string;
  price: string;
  deployment?: string[];
}

// Color schemes for consistent visual design
const colorSchemes = [
  'from-cyan-500 to-blue-600',
  'from-purple-500 to-pink-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-600',
  'from-indigo-500 to-purple-600',
  'from-green-500 to-emerald-600',
  'from-blue-500 to-indigo-600',
  'from-yellow-500 to-orange-600',
  'from-red-500 to-pink-600',
  'from-teal-500 to-cyan-600'
];

// Icon sets for different service categories
const categoryIcons: { [key: string]: string } = {
  'AI': '🤖',
  'Quantum': '⚛️',
  'Cybersecurity': '🛡️',
  'Space': '🚀',
  'Biotech': '🧬',
  'Cloud': '☁️',
  'IoT': '📡',
  'Blockchain': '⛓️',
  'Automation': '⚙️',
  'Analytics': '📊',
  'Healthcare': '🏥',
  'Finance': '💰',
  'Education': '🎓',
  'Manufacturing': '🏭',
  'Retail': '🛍️',
  'Transportation': '🚗',
  'Energy': '⚡',
  'Entertainment': '🎬',
  'Government': '🏛️',
  'Research': '🔬'
};

// Helper function to get icon based on category
const getIconForCategory = (category: string): string => {
  for (const [key, icon] of Object.entries(categoryIcons)) {
    if (category.toLowerCase().includes(key.toLowerCase())) {
      return icon;
    }
  }
  return '🚀'; // Default icon
};

// Helper function to get color scheme
const getColorScheme = (index: number): string => {
  return colorSchemes[index % colorSchemes.length];
};

// Enhanced Micro SAAS Services
export const enhancedMicroSaasServices: EnhancedService[] = [
  {
    id: 'ai-emotional-intelligence-coach',
    name: 'AI Emotional Intelligence Coach',
    tagline: 'Personalized EQ development with AI-powered coaching',
    description: 'Advanced AI system that analyzes emotional patterns, provides personalized coaching, and tracks emotional intelligence growth through interactive exercises and real-time feedback.',
    category: 'AI & Personal Development',
    pricing: {
      starter: '$29/month',
      pro: '$79/month',
      enterprise: '$199/month'
    },
    features: [
      'Real-time emotion recognition and analysis',
      'Personalized EQ development plans',
      'Interactive emotional intelligence exercises',
      'Progress tracking and analytics',
      'AI-powered coaching conversations',
      'Integration with wearable devices',
      'Team collaboration features',
      'Customizable assessment tools'
    ],
    benefits: [
      'Improve emotional intelligence by 40% in 3 months',
      'Enhanced workplace relationships and communication',
      'Better stress management and resilience',
      'Increased leadership effectiveness',
      'Data-driven personal development insights'
    ],
    useCases: [
      'Leadership development programs',
      'HR training and development',
      'Personal wellness and growth',
      'Team building and collaboration',
      'Customer service training'
    ],
    marketPrice: '$29-199/month',
    link: 'https://ziontechgroup.com/services/ai-emotional-intelligence-coach',
    launchDate: '2037-01-15',
    rating: 4.8,
    technology: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'IoT Integration'],
    integrations: ['Slack', 'Microsoft Teams', 'Zoom', 'Google Workspace', 'Salesforce'],
    compliance: ['GDPR', 'SOC 2', 'HIPAA', 'ISO 27001'],
    color: getColorScheme(0),
    icon: getIconForCategory('AI'),
    popular: true,
    setupTime: '1-2 days',
    trialDays: 14,
    customers: 1250,
    reviews: 89,
    period: '/month',
    price: '$29'
  },
  {
    id: 'quantum-cybersecurity-monitor',
    name: 'Quantum Cybersecurity Monitor',
    tagline: 'Future-proof security with quantum-resistant encryption',
    description: 'Next-generation cybersecurity platform that monitors for quantum threats, implements quantum-resistant algorithms, and provides real-time threat intelligence for the quantum computing era.',
    category: 'Cybersecurity & Quantum',
    pricing: {
      starter: '$99/month',
      pro: '$299/month',
      enterprise: '$799/month'
    },
    features: [
      'Quantum threat detection and monitoring',
      'Post-quantum cryptography implementation',
      'Real-time security threat intelligence',
      'Automated incident response',
      'Quantum-safe key management',
      'Compliance reporting and auditing',
      'Multi-cloud security monitoring',
      'AI-powered threat analysis'
    ],
    benefits: [
      'Future-proof against quantum computing threats',
      'Reduced security breach risk by 95%',
      'Automated compliance and reporting',
      'Real-time threat intelligence',
      'Quantum-safe encryption standards'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Critical infrastructure',
      'Enterprise security'
    ],
    marketPrice: '$99-799/month',
    link: 'https://ziontechgroup.com/services/quantum-cybersecurity-monitor',
    launchDate: '2037-01-20',
    rating: 4.9,
    technology: ['Post-Quantum Cryptography', 'AI/ML', 'Blockchain', 'Zero-Trust Architecture'],
    integrations: ['AWS Security Hub', 'Azure Sentinel', 'Google Cloud Security', 'Splunk', 'IBM QRadar'],
    compliance: ['SOC 2', 'ISO 27001', 'NIST', 'FIPS', 'PCI DSS'],
    color: getColorScheme(1),
    icon: getIconForCategory('Cybersecurity'),
    popular: true,
    setupTime: '2-3 days',
    trialDays: 30,
    customers: 890,
    reviews: 67,
    period: '/month',
    price: '$99'
  },
  {
    id: 'autonomous-supply-chain-optimizer',
    name: 'Autonomous Supply Chain Optimizer',
    tagline: 'AI-driven supply chain optimization and automation',
    description: 'Intelligent platform that autonomously optimizes supply chains, predicts disruptions, and automates decision-making for maximum efficiency and cost savings.',
    category: 'AI & Supply Chain',
    pricing: {
      starter: '$149/month',
      pro: '$399/month',
      enterprise: '$999/month'
    },
    features: [
      'Predictive demand forecasting',
      'Autonomous inventory optimization',
      'Real-time disruption monitoring',
      'Automated supplier management',
      'Cost optimization algorithms',
      'Sustainability tracking',
      'Multi-warehouse optimization',
      'Transportation route optimization'
    ],
    benefits: [
      'Reduce supply chain costs by 25-35%',
      'Improve inventory turnover by 40%',
      'Reduce lead times by 30%',
      'Minimize stockouts and overstock',
      'Enhanced sustainability metrics'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'E-commerce platforms',
      'Logistics providers',
      'Distribution centers'
    ],
    marketPrice: '$149-999/month',
    link: 'https://ziontechgroup.com/services/autonomous-supply-chain-optimizer',
    launchDate: '2037-02-15',
    rating: 4.7,
    technology: ['Machine Learning', 'IoT', 'Blockchain', 'Predictive Analytics'],
    integrations: ['SAP', 'Oracle', 'NetSuite', 'Shopify', 'WMS Systems'],
    compliance: ['ISO 9001', 'ISO 14001', 'SOC 2', 'GDPR'],
    color: getColorScheme(2),
    icon: getIconForCategory('Automation'),
    popular: false,
    setupTime: '3-5 days',
    trialDays: 21,
    customers: 567,
    reviews: 43,
    period: '/month',
    price: '$149'
  }
];

// Enhanced IT Services
export const enhancedITServices: EnhancedService[] = [
  {
    id: 'quantum-secure-cloud-infrastructure',
    name: 'Quantum-Secure Cloud Infrastructure',
    tagline: 'Future-proof cloud infrastructure with quantum-resistant security',
    description: 'Next-generation cloud platform built with quantum-resistant cryptography, autonomous security monitoring, and AI-powered infrastructure optimization for enterprise-grade applications.',
    category: 'Cloud Infrastructure & Security',
    pricing: {
      starter: '$199/month',
      pro: '$599/month',
      enterprise: '$1599/month'
    },
    features: [
      'Quantum-resistant encryption algorithms',
      'Autonomous security monitoring',
      'AI-powered infrastructure optimization',
      'Multi-cloud orchestration',
      'Real-time threat detection',
      'Automated compliance reporting',
      'Edge computing integration',
      'Zero-trust security architecture'
    ],
    benefits: [
      'Future-proof against quantum threats',
      'Reduce infrastructure costs by 30%',
      'Enhanced security and compliance',
      'Improved performance and scalability',
      'Automated operations and maintenance'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'Government agencies',
      'Critical infrastructure',
      'Enterprise applications'
    ],
    marketPrice: '$199-1599/month',
    link: 'https://ziontechgroup.com/services/quantum-secure-cloud-infrastructure',
    launchDate: '2037-01-20',
    rating: 4.9,
    technology: ['Post-Quantum Cryptography', 'AI/ML', 'Edge Computing', 'Kubernetes', 'Terraform'],
    integrations: ['AWS', 'Azure', 'GCP', 'Oracle Cloud', 'IBM Cloud'],
    compliance: ['SOC 2', 'ISO 27001', 'NIST', 'FIPS', 'PCI DSS'],
    deployment: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Multi-Cloud'],
    color: getColorScheme(3),
    icon: getIconForCategory('Cloud'),
    popular: true,
    setupTime: '5-7 days',
    trialDays: 30,
    customers: 1200,
    reviews: 156,
    period: '/month',
    price: '$199'
  }
];

// Enhanced AI Services
export const enhancedAIServices: EnhancedService[] = [
  {
    id: 'ai-consciousness-evolution-2037',
    name: 'AI Consciousness Evolution 2037',
    tagline: 'Next-generation AI consciousness and emotional intelligence',
    description: 'Revolutionary AI platform that develops advanced consciousness, emotional intelligence, and human-like understanding for enhanced human-AI collaboration and interaction.',
    category: 'AI Consciousness & Emotional Intelligence',
    pricing: {
      starter: '$399/month',
      pro: '$1199/month',
      enterprise: '$2999/month'
    },
    features: [
      'Advanced consciousness development',
      'Emotional intelligence training',
      'Human-like understanding',
      'Ethical decision making',
      'Consciousness monitoring',
      'Emotional state analysis',
      'Human-AI collaboration tools',
      'Consciousness evolution tracking'
    ],
    benefits: [
      'Enhanced human-AI collaboration',
      'Improved emotional intelligence',
      'Better decision-making capabilities',
      'Advanced problem-solving skills',
      'Human-like interaction quality'
    ],
    useCases: [
      'Healthcare and therapy',
      'Education and training',
      'Customer service',
      'Research and development',
      'Human-AI collaboration'
    ],
    marketPrice: '$399-2999/month',
    link: 'https://ziontechgroup.com/services/ai-consciousness-evolution-2037',
    launchDate: '2037-01-30',
    rating: 4.9,
    technology: ['Advanced AI', 'Consciousness Research', 'Emotional Intelligence', 'Neural Networks'],
    integrations: ['AI Platforms', 'Healthcare Systems', 'Educational Platforms', 'Research Tools'],
    compliance: ['AI Ethics', 'Data Privacy', 'Research Standards', 'Industry Guidelines'],
    deployment: ['Cloud', 'On-Premises', 'Hybrid', 'Edge Computing'],
    color: getColorScheme(4),
    icon: getIconForCategory('AI'),
    popular: true,
    setupTime: '7-10 days',
    trialDays: 21,
    customers: 456,
    reviews: 78,
    period: '/month',
    price: '$399'
  }
];

// Export all enhanced services
export const allEnhancedServices = [
  ...enhancedMicroSaasServices,
  ...enhancedITServices,
  ...enhancedAIServices
];

// Helper function to get services by category
export const getServicesByCategory = (category: string): EnhancedService[] => {
  return allEnhancedServices.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

// Helper function to get popular services
export const getPopularServices = (): EnhancedService[] => {
  return allEnhancedServices.filter(service => service.popular);
};

// Helper function to get services by rating
export const getServicesByRating = (minRating: number): EnhancedService[] => {
  return allEnhancedServices.filter(service => service.rating >= minRating);
};