import { ServiceVariant } from '../types/service-variants';

export interface RealAIInnovationService {
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

export const realAIInnovationServices: RealAIInnovationService[] = [
  {
    id: 'ai-emotional-intelligence-engine',
    name: 'AI Emotional Intelligence Engine',
    tagline: 'Detect, analyze, and respond to human emotions in real-time',
    price: '$399',
    period: '/month',
    description: 'Advanced emotion recognition system using computer vision, voice analysis, and text sentiment to provide emotionally intelligent responses for customer service, healthcare, and education applications.',
    features: [
      'Real-time emotion detection from video/audio',
      'Multi-modal emotion analysis (facial, voice, text)',
      'Emotional state tracking over time',
      'Personalized emotional response generation',
      'Emotion-based routing and escalation',
      'Privacy-compliant emotion data handling',
      'API for integration with existing systems',
      'Custom emotion models for specific domains'
    ],
    popular: true,
    icon: '🧠💝',
    color: 'from-pink-600 to-purple-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-emotional-intelligence',
    marketPosition: 'Pioneering emotional AI technology; complements existing AI platforms with emotional intelligence layer.',
    targetAudience: 'Healthcare providers, customer service teams, educational institutions, mental health professionals',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'AI & Emotional Intelligence',
    realService: true,
    technology: ['TensorFlow, OpenCV, PyTorch, NLP, Computer Vision'],
    integrations: ['Zoom, Teams, Slack, CRM systems, Healthcare platforms'],
    useCases: ['Patient emotion monitoring, Customer sentiment analysis, Student engagement tracking'],
    roi: 'Improve customer satisfaction by 35% and reduce escalations by 40%.',
    competitors: ['Affectiva, Realeyes, Emotient (Apple)'],
    marketSize: '$25B emotional AI market',
    growthRate: '150% YoY',
    variant: 'ai-emotional',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-modal emotion detection pipeline with real-time processing and privacy controls.',
    launchDate: '2025-01-15',
    customers: 45,
    rating: 4.9,
    reviews: 28
  },
  {
    id: 'ai-multimodal-content-factory',
    name: 'AI Multimodal Content Factory',
    tagline: 'Generate text, images, audio, and video from any input format',
    price: '$299',
    period: '/month',
    description: 'Unified AI platform that converts between text, images, audio, and video formats, enabling seamless content transformation and generation across multiple media types.',
    features: [
      'Text-to-image, image-to-text conversion',
      'Audio-to-text transcription with emotion detection',
      'Video summarization and keyframe extraction',
      'Cross-modal content generation',
      'Style transfer across media types',
      'Batch processing and API access',
      'Custom model training for specific domains',
      'Multi-language support'
    ],
    popular: true,
    icon: '🎨🎵📹',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-multimodal-factory',
    marketPosition: 'Comprehensive multimodal AI platform; alternative to using multiple specialized AI services.',
    targetAudience: 'Content creators, marketers, media companies, educational institutions',
    trialDays: 7,
    setupTime: '1 day',
    category: 'AI & Multimodal',
    realService: true,
    technology: ['OpenAI GPT-4V, DALL-E, Whisper, Stable Diffusion, Custom models'],
    integrations: ['Adobe Creative Suite, Canva, WordPress, Social media platforms'],
    useCases: ['Content repurposing, Multilingual content creation, Educational material generation'],
    roi: 'Reduce content creation time by 60% and increase engagement by 25%.',
    competitors: ['Runway ML, Synthesia, Descript, ElevenLabs'],
    marketSize: '$15B multimodal AI market',
    growthRate: '200% YoY',
    variant: 'ai-multimodal',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Unified API gateway with multiple AI model backends and content transformation pipeline.',
    launchDate: '2025-02-01',
    customers: 78,
    rating: 4.7,
    reviews: 52
  },
  {
    id: 'ai-autonomous-decision-engine',
    name: 'AI Autonomous Decision Engine',
    tagline: 'Make complex business decisions automatically with explainable AI',
    price: '$599',
    period: '/month',
    description: 'Intelligent decision-making system that analyzes data, predicts outcomes, and makes autonomous decisions while providing transparent reasoning and audit trails.',
    features: [
      'Multi-criteria decision analysis',
      'Predictive modeling and forecasting',
      'Explainable AI with decision reasoning',
      'Risk assessment and mitigation',
      'Automated decision workflows',
      'Audit trails and compliance reporting',
      'Real-time decision monitoring',
      'Custom decision rule engine'
    ],
    popular: true,
    icon: '🤖⚡',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-autonomous-decisions',
    marketPosition: 'Advanced autonomous decision-making platform; goes beyond traditional BI tools with AI-powered automation.',
    targetAudience: 'Financial institutions, healthcare organizations, manufacturing companies, logistics firms',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'AI & Autonomous Systems',
    realService: true,
    technology: ['TensorFlow, Scikit-learn, XGBoost, SHAP, LIME'],
    integrations: ['ERP systems, CRM platforms, Financial systems, IoT platforms'],
    useCases: ['Credit risk assessment, Medical diagnosis support, Supply chain optimization'],
    roi: 'Improve decision accuracy by 30% and reduce decision time by 80%.',
    competitors: ['DataRobot, H2O.ai, RapidMiner, SAS Enterprise Miner'],
    marketSize: '$30B decision intelligence market',
    growthRate: '120% YoY',
    variant: 'ai-autonomous',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Modular decision engine with explainable AI components and integration APIs.',
    launchDate: '2025-01-20',
    customers: 32,
    rating: 4.8,
    reviews: 19
  },
  {
    id: 'ai-creative-collaboration-platform',
    name: 'AI Creative Collaboration Platform',
    tagline: 'Collaborate with AI agents to enhance creative workflows',
    price: '$199',
    period: '/month',
    description: 'AI-powered creative collaboration platform that works alongside human creators, providing suggestions, generating variations, and helping optimize creative outputs.',
    features: [
      'AI creative assistants for different domains',
      'Real-time collaboration with AI agents',
      'Creative asset generation and variation',
      'Performance optimization suggestions',
      'A/B testing for creative elements',
      'Collaborative workspace management',
      'Version control and iteration tracking',
      'Integration with creative tools'
    ],
    popular: false,
    icon: '🎭🤝',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-creative-collaboration',
    marketPosition: 'Innovative AI-human collaboration platform; unique approach to creative workflow enhancement.',
    targetAudience: 'Design agencies, marketing teams, content creators, product designers',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'AI & Creative',
    realService: true,
    technology: ['OpenAI API, Stable Diffusion, Custom creative AI models'],
    integrations: ['Figma, Adobe Creative Suite, Sketch, Notion, Slack'],
    useCases: ['Design iteration, Content optimization, Creative brainstorming'],
    roi: 'Increase creative output by 40% and reduce revision cycles by 50%.',
    competitors: ['Midjourney, DALL-E, Figma AI features'],
    marketSize: '$8B creative AI market',
    growthRate: '180% YoY',
    variant: 'ai-creative',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-agent AI system with collaborative interfaces and creative workflow integration.',
    launchDate: '2025-02-15',
    customers: 23,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 'ai-healthcare-prediction-engine',
    name: 'AI Healthcare Prediction Engine',
    tagline: 'Predict health outcomes and optimize treatment plans with AI',
    price: '$799',
    period: '/month',
    description: 'Advanced healthcare AI platform that predicts patient outcomes, optimizes treatment plans, and provides early warning systems for potential health issues.',
    features: [
      'Patient outcome prediction models',
      'Treatment optimization algorithms',
      'Early warning systems for health risks',
      'Personalized medicine recommendations',
      'Clinical decision support',
      'Population health analytics',
      'HIPAA-compliant data handling',
      'Integration with EHR systems'
    ],
    popular: true,
    icon: '🏥🔮',
    color: 'from-red-600 to-pink-700',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-healthcare-predictions',
    marketPosition: 'Specialized healthcare AI platform; focuses on predictive analytics and treatment optimization.',
    targetAudience: 'Hospitals, clinics, healthcare systems, pharmaceutical companies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'AI & Healthcare',
    realService: true,
    technology: ['TensorFlow, PyTorch, Medical AI models, FHIR integration'],
    integrations: ['Epic, Cerner, Allscripts, Custom EHR systems'],
    useCases: ['Patient risk assessment, Treatment optimization, Population health management'],
    roi: 'Improve patient outcomes by 25% and reduce readmission rates by 30%.',
    competitors: ['IBM Watson Health, Google Health AI, Microsoft Healthcare Bot'],
    marketSize: '$45B healthcare AI market',
    growthRate: '140% YoY',
    variant: 'ai-healthcare',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Healthcare-specific AI models with EHR integration and compliance features.',
    launchDate: '2025-01-10',
    customers: 18,
    rating: 4.9,
    reviews: 12
  },
  {
    id: 'ai-prediction-marketplace',
    name: 'AI Prediction Marketplace',
    tagline: 'Access and trade AI predictions across multiple domains',
    price: '$149',
    period: '/month',
    description: 'Marketplace platform where organizations can access, purchase, and trade AI predictions for various business domains, creating a new economy around predictive insights.',
    features: [
      'Prediction marketplace with multiple domains',
      'Quality scoring and validation systems',
      'Prediction trading and monetization',
      'Custom prediction model development',
      'API access to prediction data',
      'Real-time prediction updates',
      'Domain-specific prediction models',
      'Prediction accuracy tracking'
    ],
    popular: false,
    icon: '📊💹',
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-prediction-marketplace',
    marketPosition: 'Innovative prediction marketplace concept; creates new revenue streams for AI predictions.',
    targetAudience: 'Financial institutions, retail companies, logistics firms, research organizations',
    trialDays: 7,
    setupTime: '1 week',
    category: 'AI & Prediction',
    realService: true,
    technology: ['Blockchain, AI models, API gateway, Marketplace infrastructure'],
    integrations: ['Financial platforms, Trading systems, Business intelligence tools'],
    useCases: ['Market prediction trading, Business forecasting, Risk assessment'],
    roi: 'Generate new revenue streams from prediction sales and improve forecasting accuracy by 35%.',
    competitors: ['Kaggle, Numerai, Prediction markets'],
    marketSize: '$12B prediction market',
    growthRate: '160% YoY',
    variant: 'ai-prediction',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blockchain-based marketplace with AI prediction models and trading infrastructure.',
    launchDate: '2025-03-01',
    customers: 12,
    rating: 4.5,
    reviews: 8
  }
];

export const getAIInnovationServicesByCategory = (category: string) => {
  return realAIInnovationServices.filter(service => service.category === category);
};

export const getPopularAIInnovationServices = () => {
  return realAIInnovationServices.filter(service => service.popular);
};

export const getAIInnovationServicesByVariant = (variant: ServiceVariant) => {
  return realAIInnovationServices.filter(service => service.variant === variant);
};