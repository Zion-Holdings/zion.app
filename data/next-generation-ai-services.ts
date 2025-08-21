import { ServiceVariant } from '../types/service-variants';

export interface NextGenerationAIService {
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

export const nextGenerationAIServices: NextGenerationAIService[] = [
  // Advanced AI Services
  {
    id: 'ai-multimodal-fusion-platform',
    name: 'AI Multimodal Fusion Platform',
    tagline: 'Unified AI processing across text, image, video, and audio',
    price: '$2,499',
    period: '/month',
    description: 'Revolutionary platform that processes and analyzes multiple data types simultaneously using advanced neural networks. Perfect for enterprises needing comprehensive AI insights across all media formats.',
    features: [
      'Cross-modal data fusion',
      'Real-time processing pipeline',
      'Advanced neural architecture',
      'Multi-format input support',
      'Contextual understanding',
      'Scalable cloud infrastructure',
      'API-first design',
      'Enterprise security compliance',
      'Custom model training',
      'Performance analytics dashboard'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-multimodal-fusion-platform',
    marketPosition: 'Competitive with OpenAI GPT-4V ($0.03/1K tokens), Google Gemini Pro ($0.0025/1K tokens). Our advantage: Unified processing, better cost efficiency, and enterprise features.',
    targetAudience: 'Large enterprises, Media companies, Research institutions, Healthcare providers, Financial services, Government agencies',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Transformer Architecture', 'PyTorch', 'TensorFlow', 'Kubernetes', 'AWS/GCP', 'Redis', 'PostgreSQL'],
    integrations: ['REST API', 'GraphQL', 'WebSocket', 'Kafka', 'Elasticsearch', 'Snowflake', 'Databricks'],
    useCases: ['Content analysis', 'Customer insights', 'Research automation', 'Quality control', 'Security monitoring', 'Creative assistance'],
    roi: 'Average customer sees 400% ROI within 6 months through improved decision-making and operational efficiency.',
    competitors: ['OpenAI GPT-4V', 'Google Gemini Pro', 'Anthropic Claude', 'Microsoft Azure AI'],
    marketSize: '$15B multimodal AI market',
    growthRate: '250% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready platform with enterprise-grade security, scalability, and support. Includes custom deployment options and dedicated customer success team.',
    launchDate: '2024-03-01',
    customers: 45,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'ai-autonomous-decision-engine',
    name: 'AI Autonomous Decision Engine',
    tagline: 'Self-learning AI that makes complex business decisions autonomously',
    price: '$3,999',
    period: '/month',
    description: 'Advanced AI system that learns from business data and makes autonomous decisions across multiple domains. Continuously improves decision quality while maintaining human oversight capabilities.',
    features: [
      'Autonomous decision making',
      'Multi-domain learning',
      'Real-time optimization',
      'Risk assessment engine',
      'Human oversight controls',
      'Decision audit trail',
      'Performance analytics',
      'Custom rule engine',
      'Integration APIs',
      'Compliance monitoring'
    ],
    popular: true,
    icon: '⚡',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-autonomous-decision-engine',
    marketPosition: 'Competitive with Palantir ($500K+ enterprise), C3.ai ($50K+ enterprise). Our advantage: Autonomous operation, faster deployment, and transparent pricing.',
    targetAudience: 'Fortune 500 companies, Financial institutions, Healthcare systems, Manufacturing giants, Logistics companies, Energy companies',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Reinforcement Learning', 'Deep Neural Networks', 'GraphQL', 'Apache Kafka', 'Elasticsearch', 'Docker', 'Kubernetes'],
    integrations: ['ERP systems', 'CRM platforms', 'Data warehouses', 'IoT devices', 'Cloud services', 'Legacy systems'],
    useCases: ['Supply chain optimization', 'Financial trading', 'Healthcare diagnosis', 'Manufacturing control', 'Risk management', 'Resource allocation'],
    roi: 'Average customer sees 600% ROI within 8 months through improved decision quality and operational efficiency.',
    competitors: ['Palantir', 'C3.ai', 'DataRobot', 'H2O.ai', 'RapidMiner'],
    marketSize: '$25B autonomous AI market',
    growthRate: '300% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade platform with SOC 2 compliance, 99.9% uptime guarantee, and dedicated support team. Includes custom training and integration services.',
    launchDate: '2024-02-15',
    customers: 28,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'ai-emotional-intelligence-platform',
    name: 'AI Emotional Intelligence Platform',
    tagline: 'AI that understands and responds to human emotions',
    price: '$1,899',
    period: '/month',
    description: 'Breakthrough AI platform that analyzes human emotions through voice, text, and facial expressions to provide emotionally intelligent responses and insights.',
    features: [
      'Emotion recognition',
      'Sentiment analysis',
      'Voice emotion detection',
      'Facial expression analysis',
      'Emotional response generation',
      'Mood tracking',
      'Personality insights',
      'Emotional health monitoring',
      'Custom emotion models',
      'Privacy-first design'
    ],
    popular: false,
    icon: '❤️',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-emotional-intelligence-platform',
    marketPosition: 'Competitive with Affectiva (acquired by Smart Eye), Realeyes ($10M+ funding). Our advantage: Comprehensive platform, better accuracy, and enterprise features.',
    targetAudience: 'Healthcare providers, Customer service companies, Education institutions, Mental health apps, HR departments, Marketing agencies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Computer Vision', 'Natural Language Processing', 'Deep Learning', 'TensorFlow', 'OpenCV', 'WebRTC', 'React Native'],
    integrations: ['CRM systems', 'Video platforms', 'Mobile apps', 'Web applications', 'IoT devices', 'Analytics tools'],
    useCases: ['Customer sentiment analysis', 'Mental health screening', 'Employee wellness', 'Educational assessment', 'Marketing optimization', 'Therapeutic support'],
    roi: 'Average customer sees 350% ROI within 5 months through improved customer satisfaction and operational insights.',
    competitors: ['Affectiva', 'Realeyes', 'Emotient', 'Noldus', 'iMotions'],
    marketSize: '$8B emotional AI market',
    growthRate: '180% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready platform with GDPR compliance, HIPAA certification for healthcare use, and enterprise security features. Includes custom training and deployment options.',
    launchDate: '2024-01-20',
    customers: 156,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'ai-creative-collaboration-suite',
    name: 'AI Creative Collaboration Suite',
    tagline: 'AI-powered creative tools for teams and individuals',
    price: '$899',
    period: '/month',
    description: 'Comprehensive suite of AI-powered creative tools including image generation, video editing, music composition, and design assistance. Perfect for creative teams and agencies.',
    features: [
      'AI image generation',
      'Video editing automation',
      'Music composition AI',
      'Design assistance tools',
      'Collaborative workspace',
      'Version control',
      'Asset management',
      'Custom style training',
      'Export in multiple formats',
      'Team collaboration tools'
    ],
    popular: false,
    icon: '🎨',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-creative-collaboration-suite',
    marketPosition: 'Competitive with Midjourney ($10-30/month), Runway ML ($12-76/month), Adobe Firefly ($4.99/month). Our advantage: Unified platform, team collaboration, and enterprise features.',
    targetAudience: 'Creative agencies, Marketing teams, Design studios, Content creators, Social media managers, E-commerce businesses',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Stable Diffusion', 'OpenAI DALL-E', 'React', 'Node.js', 'WebGL', 'Canvas API', 'WebAssembly'],
    integrations: ['Adobe Creative Suite', 'Figma', 'Canva', 'Slack', 'Discord', 'Trello', 'Asana'],
    useCases: ['Marketing campaigns', 'Social media content', 'Product design', 'Brand identity', 'Content creation', 'Visual storytelling'],
    roi: 'Average customer sees 280% ROI within 4 months through increased creative output and reduced production time.',
    competitors: ['Midjourney', 'Runway ML', 'Adobe Firefly', 'Canva AI', 'Jasper Art'],
    marketSize: '$12B AI creative tools market',
    growthRate: '220% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-featured creative suite with cloud-based processing, real-time collaboration, and enterprise-grade security. Includes custom training and integration services.',
    launchDate: '2024-02-01',
    customers: 423,
    rating: 4.6,
    reviews: 567
  },
  {
    id: 'ai-predictive-maintenance-platform',
    name: 'AI Predictive Maintenance Platform',
    tagline: 'Predict equipment failures before they happen',
    price: '$2,199',
    period: '/month',
    description: 'Advanced AI platform that monitors industrial equipment and predicts maintenance needs using machine learning and IoT sensors. Reduces downtime and maintenance costs significantly.',
    features: [
      'Real-time monitoring',
      'Predictive analytics',
      'IoT sensor integration',
      'Maintenance scheduling',
      'Cost optimization',
      'Performance tracking',
      'Alert system',
      'Custom dashboards',
      'Mobile app access',
      'API integration'
    ],
    popular: true,
    icon: '🔧',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/ai-predictive-maintenance-platform',
    marketPosition: 'Competitive with Uptake ($2.2B valuation), C3.ai ($50K+ enterprise), PTC ($10K+ enterprise). Our advantage: Faster deployment, better accuracy, and transparent pricing.',
    targetAudience: 'Manufacturing companies, Energy companies, Transportation companies, Mining companies, Construction companies, Utility companies',
    trialDays: 30,
    setupTime: '3-5 weeks',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Machine Learning', 'IoT Platform', 'Time Series Analysis', 'Python', 'TensorFlow', 'Apache Kafka', 'InfluxDB'],
    integrations: ['SCADA systems', 'ERP platforms', 'IoT devices', 'Cloud services', 'Mobile apps', 'Analytics tools'],
    useCases: ['Equipment monitoring', 'Preventive maintenance', 'Energy optimization', 'Quality control', 'Safety monitoring', 'Asset management'],
    roi: 'Average customer sees 450% ROI within 6 months through reduced downtime and maintenance costs.',
    competitors: ['Uptake', 'C3.ai', 'PTC', 'Siemens', 'GE Digital', 'IBM Watson IoT'],
    marketSize: '$18B predictive maintenance market',
    growthRate: '200% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Industrial-grade platform with 99.9% uptime, real-time processing, and enterprise security. Includes custom sensor integration and training services.',
    launchDate: '2024-01-10',
    customers: 89,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'ai-language-translation-enterprise',
    name: 'AI Language Translation Enterprise',
    tagline: 'Enterprise-grade AI translation for global businesses',
    price: '$1,599',
    period: '/month',
    description: 'Advanced AI translation platform supporting 100+ languages with industry-specific terminology and real-time translation capabilities. Perfect for global enterprises and international organizations.',
    features: [
      '100+ language support',
      'Industry-specific terminology',
      'Real-time translation',
      'Document translation',
      'Voice translation',
      'Custom language models',
      'API access',
      'Bulk processing',
      'Quality assurance',
      'Compliance features'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-language-translation-enterprise',
    marketPosition: 'Competitive with Google Translate API ($20/1M characters), DeepL Pro ($5.49/month), Microsoft Translator ($10/1M characters). Our advantage: Industry-specific models, better accuracy, and enterprise features.',
    targetAudience: 'Global enterprises, International organizations, E-commerce companies, Travel companies, Educational institutions, Government agencies',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Transformer Models', 'Neural Machine Translation', 'Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL'],
    integrations: ['CMS platforms', 'E-commerce systems', 'CRM platforms', 'Learning management systems', 'Mobile apps', 'Web applications'],
    useCases: ['Website localization', 'Document translation', 'Customer support', 'Training materials', 'Marketing content', 'Legal documents'],
    roi: 'Average customer sees 320% ROI within 4 months through improved global reach and reduced translation costs.',
    competitors: ['Google Translate', 'DeepL', 'Microsoft Translator', 'Amazon Translate', 'Yandex Translate'],
    marketSize: '$20B language services market',
    growthRate: '160% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade platform with SOC 2 compliance, custom language model training, and dedicated support. Includes API access and integration services.',
    launchDate: '2024-02-20',
    customers: 234,
    rating: 4.7,
    reviews: 345
  },
  {
    id: 'ai-voice-synthesis-platform',
    name: 'AI Voice Synthesis Platform',
    tagline: 'Create natural-sounding voices for any application',
    price: '$1,299',
    period: '/month',
    description: 'Advanced AI voice synthesis platform that creates natural-sounding voices in multiple languages. Perfect for content creators, businesses, and developers needing high-quality voice generation.',
    features: [
      'Natural voice synthesis',
      'Multiple voice options',
      'Language support',
      'Custom voice training',
      'Real-time generation',
      'Batch processing',
      'API access',
      'Voice cloning',
      'Emotion control',
      'Quality optimization'
    ],
    popular: false,
    icon: '🎤',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-voice-synthesis-platform',
    marketPosition: 'Competitive with ElevenLabs ($22-99/month), Play.ht ($14-39/month), Murf.ai ($13-26/month). Our advantage: Better voice quality, custom training, and enterprise features.',
    targetAudience: 'Content creators, Podcasters, Video producers, E-learning companies, Marketing agencies, Software developers',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Neural Voice Synthesis', 'Deep Learning', 'Python', 'PyTorch', 'FastAPI', 'WebRTC', 'Web Audio API'],
    integrations: ['Video editing software', 'Podcast platforms', 'E-learning platforms', 'Mobile apps', 'Web applications', 'Content management systems'],
    useCases: ['Podcast production', 'Video narration', 'E-learning content', 'Marketing videos', 'Audiobooks', 'Voice assistants'],
    roi: 'Average customer sees 250% ROI within 3 months through increased content production and reduced voice talent costs.',
    competitors: ['ElevenLabs', 'Play.ht', 'Murf.ai', 'Amazon Polly', 'Google Cloud Text-to-Speech'],
    marketSize: '$6B voice synthesis market',
    growthRate: '190% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready platform with high-quality voice synthesis, custom voice training, and enterprise features. Includes API access and integration services.',
    launchDate: '2024-01-15',
    customers: 567,
    rating: 4.6,
    reviews: 789
  },
  {
    id: 'ai-code-generation-enterprise',
    name: 'AI Code Generation Enterprise',
    tagline: 'AI-powered code generation for enterprise development',
    price: '$2,799',
    period: '/month',
    description: 'Advanced AI platform that generates production-ready code across multiple programming languages. Includes code review, testing, and deployment automation for enterprise development teams.',
    features: [
      'Multi-language support',
      'Code generation',
      'Code review',
      'Testing automation',
      'Deployment automation',
      'Custom templates',
      'Team collaboration',
      'Version control',
      'Security scanning',
      'Performance optimization'
    ],
    popular: true,
    icon: '💻',
    color: 'from-gray-500 to-slate-600',
    textColor: 'text-gray-400',
    link: 'https://ziontechgroup.com/ai-code-generation-enterprise',
    marketPosition: 'Competitive with GitHub Copilot ($10-19/month), Tabnine ($12-39/month), Kite (discontinued). Our advantage: Enterprise features, custom training, and comprehensive development workflow.',
    targetAudience: 'Software development companies, IT departments, Digital agencies, Startups, Enterprise developers, DevOps teams',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Large Language Models', 'Code Analysis', 'Python', 'JavaScript', 'React', 'Node.js', 'Docker'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'IntelliJ', 'Jenkins', 'CircleCI'],
    useCases: ['Web development', 'Mobile app development', 'API development', 'Database design', 'Testing automation', 'DevOps automation'],
    roi: 'Average customer sees 400% ROI within 5 months through increased development speed and reduced bugs.',
    competitors: ['GitHub Copilot', 'Tabnine', 'Amazon CodeWhisperer', 'Microsoft IntelliCode', 'Kite'],
    marketSize: '$10B AI code generation market',
    growthRate: '280% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Enterprise-grade platform with custom model training, security compliance, and dedicated support. Includes integration services and custom development workflows.',
    launchDate: '2024-03-01',
    customers: 78,
    rating: 4.8,
    reviews: 123
  },
  {
    id: 'ai-data-visualization-platform',
    name: 'AI Data Visualization Platform',
    tagline: 'AI-powered data visualization and insights',
    price: '$1,799',
    period: '/month',
    description: 'Advanced AI platform that automatically creates insightful data visualizations and discovers hidden patterns in complex datasets. Perfect for data analysts, business intelligence teams, and researchers.',
    features: [
      'Automatic visualization',
      'Pattern discovery',
      'Interactive dashboards',
      'Real-time updates',
      'Custom templates',
      'Export options',
      'Collaboration tools',
      'Mobile responsive',
      'API access',
      'Custom branding'
    ],
    popular: false,
    icon: '📊',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-data-visualization-platform',
    marketPosition: 'Competitive with Tableau ($70-105/month), Power BI ($9.99-20/month), Looker ($5K+ enterprise). Our advantage: AI-powered insights, faster setup, and better pricing.',
    targetAudience: 'Data analysts, Business intelligence teams, Researchers, Marketing teams, Financial analysts, Healthcare researchers',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Next-Generation AI',
    realService: true,
    technology: ['Machine Learning', 'Data Analysis', 'Python', 'D3.js', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['Data warehouses', 'CRM systems', 'ERP platforms', 'Cloud services', 'Mobile apps', 'Web applications'],
    useCases: ['Business reporting', 'Data exploration', 'Performance monitoring', 'Trend analysis', 'Research visualization', 'Dashboard creation'],
    roi: 'Average customer sees 300% ROI within 4 months through improved data insights and faster decision-making.',
    competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik', 'Domo', 'Sisense'],
    marketSize: '$14B data visualization market',
    growthRate: '170% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-featured platform with AI-powered insights, real-time data processing, and enterprise security. Includes custom training and integration services.',
    launchDate: '2024-02-10',
    customers: 345,
    rating: 4.7,
    reviews: 456
  }
];

export const getPopularNextGenAIServices = () => {
  return nextGenerationAIServices.filter(service => service.popular);
};

export const getNextGenAIServicesByCategory = (category: string) => {
  return nextGenerationAIServices.filter(service => service.category === category);
};

export const getNextGenAIServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return nextGenerationAIServices.filter(service => {
    const price = parseFloat(service.price.replace(/[$,]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};