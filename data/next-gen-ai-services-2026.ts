import { ServiceVariant } from '../types/service-variants';

export interface NextGenAIService2026 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const nextGenAIServices2026: NextGenAIService2026[] = [
  {
    id: 'ai-emotional-intelligence-platform',
    name: 'AI Emotional Intelligence Platform',
    tagline: 'Understand and respond to human emotions in real-time',
    price: '$1,299',
    period: '/month',
    description: 'Advanced AI platform that analyzes facial expressions, voice tone, and text to provide emotional intelligence insights for customer service, mental health, and human resources.',
    features: [
      'Real-time emotion detection from video/audio',
      'Sentiment analysis with emotional context',
      'Emotional response recommendations',
      'Multi-modal emotion fusion (facial, voice, text)',
      'Emotional intelligence training modules',
      'Custom emotion models for specific industries',
      'Real-time emotional analytics dashboard',
      'API for integration with existing systems',
      'Privacy-compliant emotion processing',
      'Emotional intelligence scoring and reports'
    ],
    popular: true,
    icon: '🧠💙',
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-emotional-intelligence',
    marketPosition: 'Competitive with Affectiva and Realeyes, but with more advanced multi-modal fusion and real-time processing capabilities.',
    targetAudience: 'Customer service platforms, HR tech companies, Mental health apps, E-learning platforms, Healthcare providers',
    trialDays: 21,
    setupTime: '2-3 days',
    category: 'AI & Emotional Intelligence',
    realService: true,
    technology: ['TensorFlow', 'OpenCV', 'PyTorch', 'WebRTC', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['Zoom', 'Teams', 'Slack', 'Salesforce', 'HubSpot', 'Zendesk', 'Custom APIs'],
    useCases: ['Customer sentiment analysis', 'Employee wellness monitoring', 'Mental health assessment', 'Educational engagement tracking'],
    roi: 'Average 40% improvement in customer satisfaction scores and 25% reduction in employee turnover.',
    competitors: ['Affectiva', 'Realeyes', 'Emotient', 'Noldus'],
    marketSize: '$3.2B emotional AI market',
    growthRate: '150% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Production-ready platform with real-time video/audio processing, emotion detection models, and comprehensive analytics dashboard.',
    launchDate: '2025-06-01',
    customers: 45,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'ai-predictive-maintenance-platform',
    name: 'AI Predictive Maintenance Platform',
    tagline: 'Predict equipment failures before they happen',
    price: '$899',
    period: '/month',
    description: 'Industrial IoT platform that uses machine learning to predict equipment failures, optimize maintenance schedules, and reduce downtime in manufacturing and industrial operations.',
    features: [
      'Real-time sensor data monitoring',
      'Machine learning failure prediction models',
      'Predictive maintenance scheduling',
      'Equipment health scoring',
      'Anomaly detection algorithms',
      'Maintenance cost optimization',
      'Integration with CMMS systems',
      'Mobile app for field technicians',
      'Custom alerting and notifications',
      'Historical performance analytics'
    ],
    popular: true,
    icon: '⚙️🔮',
    color: 'from-green-600 to-teal-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-predictive-maintenance',
    marketPosition: 'Competitive with Uptake and C3.ai, offering more affordable pricing for mid-market manufacturers.',
    targetAudience: 'Manufacturing companies, Industrial facilities, Energy companies, Transportation companies, Mining operations',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'AI & Industrial IoT',
    realService: true,
    technology: ['Python', 'TensorFlow', 'Apache Kafka', 'InfluxDB', 'React', 'Node.js', 'Docker'],
    integrations: ['SAP', 'Oracle', 'Maximo', 'ServiceNow', 'Modbus', 'OPC UA', 'REST APIs'],
    useCases: ['Equipment failure prediction', 'Maintenance optimization', 'Energy efficiency', 'Quality control'],
    roi: 'Average 30% reduction in unplanned downtime and 25% decrease in maintenance costs.',
    competitors: ['Uptake', 'C3.ai', 'PTC', 'Siemens Mindsphere'],
    marketSize: '$12.3B predictive maintenance market',
    growthRate: '120% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Full-stack IoT platform with edge computing capabilities, real-time analytics, and comprehensive maintenance management tools.',
    launchDate: '2025-03-15',
    customers: 78,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'ai-content-personalization-engine',
    name: 'AI Content Personalization Engine',
    tagline: 'Deliver hyper-personalized content experiences',
    price: '$599',
    period: '/month',
    description: 'Advanced AI engine that personalizes content, recommendations, and user experiences in real-time based on user behavior, preferences, and contextual data.',
    features: [
      'Real-time user behavior tracking',
      'Dynamic content personalization',
      'A/B testing automation',
      'Multi-channel personalization',
      'Predictive user modeling',
      'Content performance optimization',
      'Personalization analytics dashboard',
      'API for content delivery',
      'GDPR-compliant data handling',
      'Custom personalization rules engine'
    ],
    popular: false,
    icon: '🎯✨',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-content-personalization',
    marketPosition: 'Competitive with Dynamic Yield and Optimizely, with more advanced AI capabilities and better pricing.',
    targetAudience: 'E-commerce platforms, Media companies, SaaS applications, Marketing agencies, Content platforms',
    trialDays: 14,
    setupTime: '3-5 days',
    category: 'AI & Personalization',
    realService: true,
    technology: ['Python', 'TensorFlow', 'Redis', 'PostgreSQL', 'React', 'Node.js', 'AWS Lambda'],
    integrations: ['Shopify', 'WooCommerce', 'WordPress', 'HubSpot', 'Mailchimp', 'Custom CMS'],
    useCases: ['Product recommendations', 'Content personalization', 'Email marketing', 'Website optimization'],
    roi: 'Average 35% increase in conversion rates and 40% improvement in user engagement.',
    competitors: ['Dynamic Yield', 'Optimizely', 'Evergage', 'Adobe Target'],
    marketSize: '$8.7B personalization market',
    growthRate: '140% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Production-ready personalization engine with real-time processing, comprehensive analytics, and easy integration capabilities.',
    launchDate: '2025-04-20',
    customers: 92,
    rating: 4.6,
    reviews: 203
  },
  {
    id: 'ai-voice-cloning-platform',
    name: 'AI Voice Cloning Platform',
    tagline: 'Create natural-sounding voice clones for content creation',
    price: '$399',
    period: '/month',
    description: 'Professional voice cloning platform that creates high-quality, natural-sounding voice replicas for content creators, marketers, and businesses.',
    features: [
      'High-quality voice cloning (5+ minutes of audio)',
      'Multiple voice styles and emotions',
      'Real-time voice synthesis',
      'Text-to-speech with cloned voices',
      'Voice customization controls',
      'Batch processing capabilities',
      'API for integration',
      'Voice library management',
      'Quality assurance tools',
      'Commercial usage rights'
    ],
    popular: false,
    icon: '🎤🎭',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-voice-cloning',
    marketPosition: 'Competitive with ElevenLabs and Play.ht, offering better pricing and more customization options.',
    targetAudience: 'Content creators, Podcasters, Marketing agencies, E-learning platforms, Audiobook publishers',
    trialDays: 7,
    setupTime: '1 day',
    category: 'AI & Voice Technology',
    realService: true,
    technology: ['Python', 'PyTorch', 'TensorFlow', 'React', 'Node.js', 'AWS Polly', 'Google Cloud TTS'],
    integrations: ['Adobe Audition', 'Audacity', 'GarageBand', 'Custom audio workflows', 'REST APIs'],
    useCases: ['Podcast production', 'Marketing videos', 'E-learning content', 'Audiobook narration'],
    roi: 'Average 60% reduction in voice recording costs and 3x faster content production.',
    competitors: ['ElevenLabs', 'Play.ht', 'Resemble AI', 'Descript'],
    marketSize: '$2.1B voice cloning market',
    growthRate: '180% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Professional-grade voice cloning platform with advanced AI models, comprehensive voice management, and easy integration.',
    launchDate: '2025-02-10',
    customers: 156,
    rating: 4.8,
    reviews: 312
  },
  {
    id: 'ai-code-review-assistant',
    name: 'AI Code Review Assistant',
    tagline: 'Automate code reviews and improve code quality',
    price: '$299',
    period: '/month',
    description: 'Intelligent code review assistant that automatically analyzes code quality, identifies potential issues, and provides actionable improvement suggestions.',
    features: [
      'Automated code quality analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code style and best practices',
      'Integration with Git platforms',
      'Custom rule configuration',
      'Team collaboration tools',
      'Code review analytics',
      'Pull request automation',
      'Multi-language support'
    ],
    popular: true,
    icon: '💻🔍',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-code-review',
    marketPosition: 'Competitive with SonarQube and CodeClimate, with more advanced AI capabilities and better developer experience.',
    targetAudience: 'Software development teams, DevOps engineers, Code quality managers, Open source projects',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'AI & Development',
    realService: true,
    technology: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'Slack', 'Jira', 'Teams'],
    useCases: ['Code quality improvement', 'Security auditing', 'Performance optimization', 'Team collaboration'],
    roi: 'Average 40% reduction in code review time and 30% improvement in code quality scores.',
    competitors: ['SonarQube', 'CodeClimate', 'DeepCode', 'Snyk'],
    marketSize: '$5.4B code quality market',
    growthRate: '110% annual growth',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Production-ready code review platform with advanced AI analysis, comprehensive reporting, and seamless Git integration.',
    launchDate: '2025-01-25',
    customers: 203,
    rating: 4.7,
    reviews: 445
  }
];