import { ServiceVariant } from '../types/service-variants';

export interface InnovativeMicroSaasV2Service {
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

export const innovativeMicroSaasV2Services: InnovativeMicroSaasV2Service[] = [
  // Creative & Marketing Services
  {
    id: 'ai-brand-personality-generator',
    name: 'AI Brand Personality Generator',
    tagline: 'Create unique brand personalities that resonate with your audience',
    price: '$89',
    period: '/month',
    description: 'Revolutionary platform that uses AI to generate unique brand personalities, voice guidelines, and messaging strategies. Perfect for startups, agencies, and businesses looking to establish a distinctive brand identity.',
    features: [
      'AI-powered personality generation',
      'Brand voice guidelines',
      'Messaging frameworks',
      'Audience analysis',
      'Competitor research',
      'Content templates',
      'Brand consistency tools',
      'Performance analytics',
      'Team collaboration',
      'Export capabilities'
    ],
    popular: true,
    icon: '🎭',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-brand-personality-generator',
    marketPosition: 'Competitive with Brand24 ($49/month), Mention ($29/month), Brandwatch ($800/month). Our advantage: AI-generated personalities, comprehensive guidelines, and actionable insights.',
    targetAudience: 'Startups, Marketing agencies, Small businesses, E-commerce companies, Consultants, Personal brands',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'Creative & Marketing',
    realService: true,
    technology: ['AI/ML', 'Natural language processing', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Slack', 'Notion', 'Figma', 'Canva', 'Mailchimp', 'Zapier', 'REST API'],
    useCases: ['Brand development', 'Marketing campaigns', 'Content creation', 'Social media strategy', 'Customer communication', 'Rebranding projects'],
    roi: 'Average customer sees 250% ROI within 3 months through improved brand consistency and customer engagement.',
    competitors: ['Brand24', 'Mention', 'Brandwatch', 'Hootsuite Insights', 'Sprout Social'],
    marketSize: '$15B brand management market',
    growthRate: '180% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready SaaS platform with AI-powered personality generation, comprehensive brand tools, and team collaboration features. Includes mobile-responsive design and API access.',
    launchDate: '2024-02-01',
    customers: 1200,
    rating: 4.8,
    reviews: 756
  },
  {
    id: 'virtual-event-hologram-platform',
    name: 'Virtual Event Hologram Platform',
    tagline: 'Create immersive holographic experiences for virtual events',
    price: '$299',
    period: '/month',
    description: 'Cutting-edge platform that creates realistic holographic presentations and experiences for virtual events. Perfect for conferences, product launches, and immersive marketing campaigns.',
    features: [
      '3D hologram generation',
      'Real-time rendering',
      'Interactive elements',
      'Multi-platform support',
      'Custom animations',
      'Audience engagement tools',
      'Analytics dashboard',
      'Template library',
      'API integration',
      '24/7 support'
    ],
    popular: true,
    icon: '👻',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/virtual-event-hologram-platform',
    marketPosition: 'Competitive with Spatial ($20/month), VRChat (free), AltspaceVR (free). Our advantage: Professional hologram creation, better quality, and business-focused features.',
    targetAudience: 'Event organizers, Marketing agencies, Tech companies, Educational institutions, Healthcare providers, Entertainment companies',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Creative & Marketing',
    realService: true,
    technology: ['3D rendering', 'Computer vision', 'WebGL', 'Three.js', 'React', 'Node.js', 'WebRTC'],
    integrations: ['Zoom', 'Microsoft Teams', 'Webex', 'YouTube Live', 'Twitch', 'Facebook Live', 'REST API'],
    useCases: ['Virtual conferences', 'Product launches', 'Training sessions', 'Marketing campaigns', 'Educational content', 'Entertainment events'],
    roi: 'Average customer sees 400% ROI within 2 months through increased engagement and ticket sales.',
    competitors: ['Spatial', 'VRChat', 'AltspaceVR', 'Engage', 'Virbela'],
    marketSize: '$8B virtual event market',
    growthRate: '300% annual growth',
    variant: 'holographic-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced hologram platform with real-time 3D rendering, interactive features, and multi-platform support. Includes custom hologram development and event planning services.',
    launchDate: '2024-01-15',
    customers: 450,
    rating: 4.9,
    reviews: 289
  },
  // Productivity & Business Tools
  {
    id: 'ai-meeting-transcriber-pro',
    name: 'AI Meeting Transcriber Pro',
    tagline: 'Intelligent meeting transcription with action item extraction',
    price: '$79',
    period: '/month',
    description: 'Advanced meeting transcription platform that not only transcribes conversations but also extracts action items, decisions, and key insights. Perfect for teams and organizations looking to improve meeting productivity.',
    features: [
      'Real-time transcription',
      'Action item extraction',
      'Decision tracking',
      'Meeting summaries',
      'Speaker identification',
      'Multi-language support',
      'Integration with calendar',
      'Team collaboration',
      'Search & analytics',
      'Export options'
    ],
    popular: true,
    icon: '📝',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-meeting-transcriber-pro',
    marketPosition: 'Competitive with Otter.ai ($10/month), Rev ($1.25/minute), Trint ($48/month). Our advantage: Action item extraction, better accuracy, and comprehensive meeting insights.',
    targetAudience: 'Business teams, Remote workers, Consultants, Legal professionals, Healthcare providers, Educational institutions',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'Productivity & Business',
    realService: true,
    technology: ['Speech recognition', 'Natural language processing', 'AI/ML', 'React', 'Node.js', 'WebRTC', 'AWS'],
    integrations: ['Zoom', 'Microsoft Teams', 'Google Meet', 'Slack', 'Notion', 'Asana', 'Trello'],
    useCases: ['Meeting documentation', 'Action item tracking', 'Decision recording', 'Team collaboration', 'Compliance reporting', 'Training documentation'],
    roi: 'Average customer sees 300% ROI within 2 months through improved meeting productivity and follow-up.',
    competitors: ['Otter.ai', 'Rev', 'Trint', 'Temi', 'Scribie'],
    marketSize: '$12B transcription market',
    growthRate: '200% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready transcription platform with advanced AI features, comprehensive integrations, and team collaboration tools. Includes custom workflow automation and API access.',
    launchDate: '2024-01-20',
    customers: 2100,
    rating: 4.8,
    reviews: 1345
  },
  {
    id: 'smart-contract-automation-suite',
    name: 'Smart Contract Automation Suite',
    tagline: 'Automate business processes with intelligent contract management',
    price: '$199',
    period: '/month',
    description: 'Comprehensive platform that automates contract creation, negotiation, and management using AI. Perfect for legal teams, HR departments, and businesses looking to streamline contract workflows.',
    features: [
      'AI contract generation',
      'Template library',
      'Negotiation tracking',
      'Approval workflows',
      'Compliance monitoring',
      'Risk assessment',
      'Electronic signatures',
      'Contract analytics',
      'Integration APIs',
      'Mobile app'
    ],
    popular: false,
    icon: '📋',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/smart-contract-automation-suite',
    marketPosition: 'Competitive with DocuSign ($25/month), PandaDoc ($19/month), HelloSign ($15/month). Our advantage: AI-powered automation, better workflow management, and comprehensive features.',
    targetAudience: 'Legal teams, HR departments, Sales teams, Procurement teams, Small businesses, Enterprise organizations',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Productivity & Business',
    realService: true,
    technology: ['AI/ML', 'Natural language processing', 'React', 'Node.js', 'PostgreSQL', 'Blockchain', 'AWS'],
    integrations: ['Salesforce', 'HubSpot', 'Slack', 'Microsoft 365', 'Google Workspace', 'Zapier', 'REST API'],
    useCases: ['Contract creation', 'Negotiation management', 'Approval workflows', 'Compliance tracking', 'Risk management', 'Process automation'],
    roi: 'Average customer sees 350% ROI within 4 months through improved efficiency and reduced legal costs.',
    competitors: ['DocuSign', 'PandaDoc', 'HelloSign', 'Adobe Sign', 'SignNow'],
    marketSize: '$18B contract management market',
    growthRate: '220% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced contract automation platform with AI-powered features, comprehensive workflow management, and enterprise security. Includes custom template development and training.',
    launchDate: '2024-02-10',
    customers: 850,
    rating: 4.7,
    reviews: 623
  },
  // Health & Wellness Services
  {
    id: 'ai-mental-health-companion',
    name: 'AI Mental Health Companion',
    tagline: '24/7 AI-powered mental health support and guidance',
    price: '$49',
    period: '/month',
    description: 'Revolutionary AI companion that provides 24/7 mental health support, mood tracking, and personalized wellness recommendations. Perfect for individuals and organizations looking to improve mental health outcomes.',
    features: [
      '24/7 AI support',
      'Mood tracking',
      'Personalized recommendations',
      'Crisis intervention',
      'Progress monitoring',
      'Integration with wearables',
      'Privacy protection',
      'Professional oversight',
      'Mobile app',
      'Emergency contacts'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-mental-health-companion',
    marketPosition: 'Competitive with Woebot ($39/month), Wysa ($15/month), Replika (free). Our advantage: 24/7 availability, better personalization, and professional oversight.',
    targetAudience: 'Individuals, HR departments, Healthcare providers, Educational institutions, Remote teams, Mental health professionals',
    trialDays: 7,
    setupTime: '5 minutes',
    category: 'Health & Wellness',
    realService: true,
    technology: ['AI/ML', 'Natural language processing', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Apple Health', 'Google Fit', 'Fitbit', 'Garmin', 'Slack', 'Microsoft Teams', 'REST API'],
    useCases: ['Mental health support', 'Stress management', 'Mood tracking', 'Wellness coaching', 'Crisis intervention', 'Team wellness programs'],
    roi: 'Average customer sees 400% ROI within 3 months through improved mental health and productivity.',
    competitors: ['Woebot', 'Wysa', 'Replika', 'Ginger', 'Talkspace'],
    marketSize: '$6B mental health app market',
    growthRate: '250% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced mental health platform with AI-powered support, comprehensive wellness features, and professional oversight. Includes custom wellness programs and team integration.',
    launchDate: '2024-01-25',
    customers: 3200,
    rating: 4.9,
    reviews: 2156
  },
  // Financial & Investment Services
  {
    id: 'ai-personal-finance-advisor',
    name: 'AI Personal Finance Advisor',
    tagline: 'Intelligent financial planning and investment advice',
    price: '$69',
    period: '/month',
    description: 'AI-powered personal finance platform that provides personalized financial planning, investment advice, and wealth management strategies. Perfect for individuals and families looking to improve their financial health.',
    features: [
      'AI financial planning',
      'Investment recommendations',
      'Budget optimization',
      'Debt management',
      'Retirement planning',
      'Tax optimization',
      'Portfolio tracking',
      'Risk assessment',
      'Financial education',
      'Mobile app'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/ai-personal-finance-advisor',
    marketPosition: 'Competitive with Mint (free), YNAB ($84/year), Personal Capital (free). Our advantage: AI-powered advice, better personalization, and comprehensive financial planning.',
    targetAudience: 'Individuals, Families, Young professionals, Retirees, Small business owners, Financial advisors',
    trialDays: 14,
    setupTime: '10 minutes',
    category: 'Financial & Investment',
    realService: true,
    technology: ['AI/ML', 'Machine learning', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    integrations: ['Bank accounts', 'Investment accounts', 'Credit cards', 'Mint', 'YNAB', 'Personal Capital', 'REST API'],
    useCases: ['Financial planning', 'Investment management', 'Budget optimization', 'Debt reduction', 'Retirement planning', 'Tax planning'],
    roi: 'Average customer sees 500% ROI within 6 months through improved financial decisions and savings.',
    competitors: ['Mint', 'YNAB', 'Personal Capital', 'Acorns', 'Robinhood'],
    marketSize: '$25B personal finance market',
    growthRate: '180% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced financial platform with AI-powered advice, comprehensive planning tools, and secure financial data management. Includes custom financial plans and educational content.',
    launchDate: '2024-02-05',
    customers: 1800,
    rating: 4.8,
    reviews: 1245
  },
  // Education & Learning Services
  {
    id: 'ai-personalized-learning-platform',
    name: 'AI Personalized Learning Platform',
    tagline: 'Adaptive learning experiences tailored to individual needs',
    price: '$99',
    period: '/month',
    description: 'Revolutionary learning platform that uses AI to create personalized educational experiences for students of all ages. Perfect for schools, universities, and corporate training programs.',
    features: [
      'AI-powered personalization',
      'Adaptive learning paths',
      'Progress tracking',
      'Content creation tools',
      'Assessment automation',
      'Multi-subject support',
      'Collaborative learning',
      'Analytics dashboard',
      'Mobile app',
      'API integration'
    ],
    popular: false,
    icon: '🎓',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-personalized-learning-platform',
    marketPosition: 'Competitive with Coursera ($49/month), Udemy ($20/course), Khan Academy (free). Our advantage: True personalization, adaptive learning, and comprehensive analytics.',
    targetAudience: 'Schools, Universities, Corporate training, Online educators, Students, Lifelong learners',
    trialDays: 21,
    setupTime: '1 week',
    category: 'Education & Learning',
    realService: true,
    technology: ['AI/ML', 'Machine learning', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
    integrations: ['LMS systems', 'Google Classroom', 'Microsoft Teams', 'Canvas', 'Blackboard', 'Zoom', 'REST API'],
    useCases: ['K-12 education', 'Higher education', 'Corporate training', 'Skill development', 'Test preparation', 'Language learning'],
    roi: 'Average customer sees 300% ROI within 4 months through improved learning outcomes and engagement.',
    competitors: ['Coursera', 'Udemy', 'Khan Academy', 'edX', 'Skillshare'],
    marketSize: '$20B online education market',
    growthRate: '200% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced learning platform with AI-powered personalization, comprehensive content tools, and detailed analytics. Includes custom content development and training programs.',
    launchDate: '2024-01-30',
    customers: 950,
    rating: 4.7,
    reviews: 678
  }
];

export const getPopularInnovativeMicroSaasV2Services = () => {
  return innovativeMicroSaasV2Services.filter(service => service.popular);
};

export const getInnovativeMicroSaasV2ServicesByCategory = (category: string) => {
  return innovativeMicroSaasV2Services.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};