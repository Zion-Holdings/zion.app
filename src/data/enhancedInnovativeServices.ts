export interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: 'AI & ML' | 'IT Infrastructure' | 'Cybersecurity' | 'Cloud Services' | 'Digital Transformation' | 'Emerging Tech' | 'Business Intelligence' | 'Automation' | 'DevOps' | 'Data Services';
  subcategory: string;
  price: {
    monthly?: number;
    yearly?: number;
    oneTime?: number;
    currency: string;
    pricingModel: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  marketPrice: string;
  competitiveAdvantage: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  aiScore?: number;
}

export const INNOVATIVE_SERVICES: InnovativeService[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-voice-cloning-platform',
    title: 'Zion AI Voice Cloning Platform',
    description: 'Advanced AI-powered voice cloning and synthesis platform for content creators, marketers, and businesses requiring custom voice solutions.',
    category: 'AI & ML',
    subcategory: 'Voice Technology',
    price: {
      monthly: 79,
      yearly: 790,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'High-quality voice cloning in 10+ languages',
      'Emotion and tone control',
      'Real-time voice synthesis',
      'Custom voice training',
      'API integration for developers',
      'Voice watermarking and security',
      'Batch processing capabilities',
      'Mobile app support'
    ],
    benefits: [
      'Reduce content production costs by 60%',
      'Create consistent brand voice across all content',
      'Scale voice content production instantly',
      'Access to professional-quality voices 24/7',
      'Multilingual content creation'
    ],
    useCases: [
      'Podcast and video content creation',
      'Marketing and advertising campaigns',
      'E-learning and training materials',
      'Customer service automation',
      'Audiobook production',
      'Voice assistant development'
    ],
    targetAudience: [
      'Content creators and influencers',
      'Marketing agencies',
      'E-learning platforms',
      'Podcast producers',
      'Video content creators',
      'Customer service teams'
    ],
    marketPrice: '$79 - $299/month',
    competitiveAdvantage: 'Superior voice quality, multilingual support, and enterprise-grade security features',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-voice-cloning',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 234,
    launchDate: '2024-03-01',
    status: 'Active',
    aiScore: 95
  },

  {
    id: 'ai-video-generation-suite',
    title: 'Zion AI Video Generation Suite',
    description: 'Comprehensive AI video creation platform that generates professional-quality videos from text, images, and audio inputs.',
    category: 'AI & ML',
    subcategory: 'Video Generation',
    price: {
      monthly: 149,
      yearly: 1490,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Text-to-video generation',
      'Image-to-video conversion',
      'AI-powered video editing',
      'Custom animation templates',
      'Multi-format export options',
      'Collaborative editing tools',
      'Stock footage integration',
      'Advanced motion graphics'
    ],
    benefits: [
      'Create videos 10x faster than traditional methods',
      'Reduce video production costs by 80%',
      'Maintain consistent brand style',
      'Scale video content production',
      'Professional-quality output'
    ],
    useCases: [
      'Marketing and advertising videos',
      'Social media content',
      'Product demonstrations',
      'Training and educational videos',
      'Event promotions',
      'Brand storytelling'
    ],
    targetAudience: [
      'Marketing teams',
      'Content creators',
      'Small businesses',
      'E-commerce companies',
      'Educational institutions',
      'Event organizers'
    ],
    marketPrice: '$149 - $499/month',
    competitiveAdvantage: 'Advanced AI algorithms, extensive template library, and professional-grade output quality',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-video-generation',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 189,
    launchDate: '2024-02-15',
    status: 'Active',
    aiScore: 92
  },

  // Cybersecurity Services
  {
    id: 'ai-threat-intelligence-platform',
    title: 'Zion AI Threat Intelligence Platform',
    description: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, analysis, and automated response capabilities.',
    category: 'Cybersecurity',
    subcategory: 'Threat Intelligence',
    price: {
      monthly: 299,
      yearly: 2990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Real-time threat detection and analysis',
      'AI-powered behavioral analytics',
      'Automated incident response',
      'Threat hunting capabilities',
      'Vulnerability assessment',
      'Compliance reporting (SOC2, ISO27001)',
      'Dark web monitoring',
      'Security awareness training'
    ],
    benefits: [
      'Reduce security incidents by 90%',
      '24/7 automated threat monitoring',
      'Compliance with industry standards',
      'Proactive threat prevention',
      'Reduced security team workload'
    ],
    useCases: [
      'Enterprise security operations',
      'Financial services security',
      'Healthcare data protection',
      'Government cybersecurity',
      'E-commerce security',
      'Critical infrastructure protection'
    ],
    targetAudience: [
      'Large enterprises',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'E-commerce platforms'
    ],
    marketPrice: '$299 - $999/month',
    competitiveAdvantage: 'Advanced AI algorithms, real-time response capabilities, and comprehensive compliance features',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-threat-intelligence',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 156,
    launchDate: '2024-01-01',
    status: 'Active',
    aiScore: 96
  },

  // Cloud Services
  {
    id: 'multi-cloud-orchestration-platform',
    title: 'Zion Multi-Cloud Orchestration Platform',
    description: 'Intelligent multi-cloud management platform that optimizes costs, performance, and security across AWS, Azure, Google Cloud, and private clouds.',
    category: 'Cloud Services',
    subcategory: 'Cloud Management',
    price: {
      monthly: 199,
      yearly: 1990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Unified cloud dashboard',
      'Cost optimization algorithms',
      'Performance monitoring and alerting',
      'Security policy management',
      'Automated resource scaling',
      'Multi-cloud backup solutions',
      'Compliance monitoring',
      'API integration hub'
    ],
    benefits: [
      'Reduce cloud costs by 25-40%',
      'Improve application performance',
      'Centralized security management',
      'Simplified compliance reporting',
      'Automated resource optimization'
    ],
    useCases: [
      'Multi-cloud infrastructure management',
      'Cost optimization and governance',
      'Performance monitoring and optimization',
      'Security and compliance management',
      'Disaster recovery planning',
      'Resource automation'
    ],
    targetAudience: [
      'Enterprise IT teams',
      'Cloud architects',
      'DevOps engineers',
      'Financial services',
      'Healthcare organizations',
      'Technology companies'
    ],
    marketPrice: '$199 - $799/month',
    competitiveAdvantage: 'Intelligent cost optimization, unified management interface, and advanced automation capabilities',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/multi-cloud-orchestration',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 203,
    launchDate: '2023-12-01',
    status: 'Active',
    aiScore: 91
  },

  // Emerging Technology Services
  {
    id: 'quantum-ready-encryption-suite',
    title: 'Zion Quantum-Ready Encryption Suite',
    description: 'Future-proof encryption solutions designed to protect data against both classical and quantum computing threats.',
    category: 'Emerging Tech',
    subcategory: 'Quantum Security',
    price: {
      monthly: 399,
      yearly: 3990,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Post-quantum cryptography algorithms',
      'Hybrid encryption systems',
      'Quantum key distribution',
      'Advanced threat modeling',
      'Compliance with NIST standards',
      'Performance optimization',
      'API and SDK support',
      'Expert consultation services'
    ],
    benefits: [
      'Future-proof security against quantum threats',
      'Compliance with emerging standards',
      'Enhanced data protection',
      'Competitive security advantage',
      'Long-term investment protection'
    ],
    useCases: [
      'Government and defense',
      'Financial services',
      'Healthcare data protection',
      'Critical infrastructure',
      'Long-term data storage',
      'High-security applications'
    ],
    targetAudience: [
      'Government agencies',
      'Financial institutions',
      'Healthcare organizations',
      'Defense contractors',
      'Technology companies',
      'Research institutions'
    ],
    marketPrice: '$399 - $1,299/month',
    competitiveAdvantage: 'Early adoption of quantum-resistant algorithms, NIST compliance, and expert quantum security consultation',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/quantum-encryption',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.9,
    reviewCount: 89,
    launchDate: '2024-01-15',
    status: 'Active',
    aiScore: 94
  },

  // Business Intelligence Services
  {
    id: 'ai-business-intelligence-platform',
    title: 'Zion AI Business Intelligence Platform',
    description: 'Intelligent business intelligence platform that automatically discovers insights, generates reports, and provides predictive analytics.',
    category: 'Business Intelligence',
    subcategory: 'Analytics',
    price: {
      monthly: 129,
      yearly: 1290,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Automated insight discovery',
      'Natural language querying',
      'Predictive analytics models',
      'Custom dashboard builder',
      'Real-time data processing',
      'Advanced visualization options',
      'Data storytelling tools',
      'Mobile BI applications'
    ],
    benefits: [
      'Make data-driven decisions faster',
      'Identify hidden business opportunities',
      'Reduce manual reporting time',
      'Improve forecasting accuracy',
      'Democratize data access'
    ],
    useCases: [
      'Sales performance analysis',
      'Customer behavior insights',
      'Financial forecasting',
      'Operational efficiency metrics',
      'Market trend analysis',
      'Competitive intelligence'
    ],
    targetAudience: [
      'Business analysts',
      'Executives and managers',
      'Data scientists',
      'Marketing teams',
      'Sales teams',
      'Operations managers'
    ],
    marketPrice: '$129 - $499/month',
    competitiveAdvantage: 'Advanced AI algorithms, natural language processing, and automated insight generation',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-business-intelligence',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 267,
    launchDate: '2023-11-01',
    status: 'Active',
    aiScore: 93
  },

  // DevOps Services
  {
    id: 'ai-powered-devops-automation',
    title: 'Zion AI-Powered DevOps Automation',
    description: 'Intelligent DevOps automation platform that optimizes software development, testing, and deployment processes.',
    category: 'DevOps',
    subcategory: 'Automation',
    price: {
      monthly: 179,
      yearly: 1790,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Intelligent CI/CD pipeline optimization',
      'Automated testing and quality assurance',
      'Performance monitoring and alerting',
      'Security scanning integration',
      'Infrastructure as code automation',
      'Deployment strategy optimization',
      'Team collaboration tools',
      'Analytics and reporting'
    ],
    benefits: [
      'Reduce deployment time by 70%',
      'Improve code quality and reliability',
      'Automate repetitive tasks',
      'Enhance team productivity',
      'Reduce production incidents'
    ],
    useCases: [
      'Software development teams',
      'DevOps engineering',
      'Quality assurance',
      'System administration',
      'Cloud infrastructure management',
      'Microservices deployment'
    ],
    targetAudience: [
      'Development teams',
      'DevOps engineers',
      'System administrators',
      'Quality assurance teams',
      'IT operations',
      'Technology companies'
    ],
    marketPrice: '$179 - $599/month',
    competitiveAdvantage: 'AI-powered optimization, comprehensive automation, and intelligent pipeline management',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-devops-automation',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 145,
    launchDate: '2024-02-01',
    status: 'Active',
    aiScore: 90
  },

  // Data Services
  {
    id: 'ai-data-governance-platform',
    title: 'Zion AI Data Governance Platform',
    description: 'Comprehensive data governance platform that ensures data quality, compliance, and security across your organization.',
    category: 'Data Services',
    subcategory: 'Data Governance',
    price: {
      monthly: 249,
      yearly: 2490,
      currency: '$',
      pricingModel: 'subscription'
    },
    features: [
      'Automated data quality monitoring',
      'Compliance tracking (GDPR, CCPA, HIPAA)',
      'Data lineage and cataloging',
      'Privacy impact assessments',
      'Data access controls',
      'Audit trail and reporting',
      'Data classification automation',
      'Integration with existing systems'
    ],
    benefits: [
      'Ensure regulatory compliance',
      'Improve data quality and reliability',
      'Reduce data-related risks',
      'Build customer trust',
      'Streamline audit processes'
    ],
    useCases: [
      'Regulatory compliance',
      'Data quality management',
      'Privacy protection',
      'Risk management',
      'Audit preparation',
      'Data strategy planning'
    ],
    targetAudience: [
      'Compliance officers',
      'Data governance teams',
      'Legal departments',
      'Risk management teams',
      'IT security teams',
      'Business executives'
    ],
    marketPrice: '$249 - $899/month',
    competitiveAdvantage: 'Comprehensive compliance coverage, AI-powered automation, and enterprise-grade security',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-data-governance',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 178,
    launchDate: '2023-10-01',
    status: 'Active',
    aiScore: 92
  }
];

export const getInnovativeServiceByCategory = (category: string) => {
  return INNOVATIVE_SERVICES.filter(service => service.category === category);
};

export const getInnovativeServiceBySubcategory = (subcategory: string) => {
  return INNOVATIVE_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedInnovativeServices = () => {
  return INNOVATIVE_SERVICES.filter(service => service.rating >= 4.7).slice(0, 8);
};

export const getServicesByAIScore = (minScore: number) => {
  return INNOVATIVE_SERVICES.filter(service => service.aiScore && service.aiScore >= minScore);
};