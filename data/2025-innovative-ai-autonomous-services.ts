export interface AIAutonomousService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: string;
  period: string;
  features: string[];
  benefits: string[];
  icon: string;
  color: string;
  textColor: string;
  link: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  realImplementation: string;
  launchDate: string;
  customers: string;
  rating: number;
  reviews: number;
  popular?: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
}

const contact = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  website: 'https://ziontechgroup.com'
};

export const aiAutonomousServices: AIAutonomousService[] = [
  {
    id: 'ai-autonomous-business-process-automation',
    name: 'AI Autonomous Business Process Automation',
    tagline: 'Self-learning automation that adapts to your business needs',
    description: 'Advanced AI platform that autonomously identifies, optimizes, and automates business processes with continuous learning and improvement.',
    category: 'AI & Automation',
    price: '$1,299',
    period: '/month',
    features: [
      'Autonomous process discovery and mapping',
      'AI-powered workflow optimization',
      'Real-time process monitoring and analytics',
      'Predictive maintenance and optimization',
      'Seamless integration with existing systems',
      'Custom automation rules and policies',
      'Advanced reporting and insights',
      '24/7 autonomous operation'
    ],
    benefits: [
      'Reduce manual work by 80-90%',
      'Improve process efficiency by 60%',
      'Real-time optimization and learning',
      'Scalable automation across departments'
    ],
    icon: '🤖⚡',
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/ai-autonomous-business-process-automation',
    contactInfo: contact,
    realImplementation: 'Deployed in 25+ enterprises with proven ROI',
    launchDate: 'Q1 2025',
    customers: '25 enterprise clients, 150+ processes automated',
    rating: 4.8,
    reviews: 89,
    popular: true,
    technology: ['AI/ML', 'RPA', 'Process Mining', 'Machine Learning', 'Python', 'React'],
    integrations: ['SAP', 'Salesforce', 'Oracle', 'Microsoft Dynamics', 'Custom APIs'],
    useCases: ['HR automation', 'Finance processes', 'Customer service', 'Supply chain optimization'],
    roi: 'Average ROI of 300% within 6 months',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate'],
    marketSize: 'RPA market $3.5B+, growing 25% annually',
    growthRate: '250% YoY'
  },
  {
    id: 'ai-autonomous-ecosystem-manager',
    name: 'AI Autonomous Ecosystem Manager',
    tagline: 'Intelligent management of complex business ecosystems',
    description: 'AI-powered platform that autonomously manages and optimizes complex business ecosystems, including partners, suppliers, and stakeholders.',
    category: 'AI & Ecosystem Management',
    price: '$899',
    period: '/month',
    features: [
      'Autonomous ecosystem mapping and analysis',
      'Intelligent partner relationship management',
      'Predictive risk assessment and mitigation',
      'Automated compliance monitoring',
      'Real-time ecosystem health scoring',
      'Dynamic resource allocation',
      'Advanced analytics and reporting',
      'Multi-stakeholder collaboration tools'
    ],
    benefits: [
      'Optimize ecosystem performance by 40%',
      'Reduce operational risks by 60%',
      'Improve partner collaboration efficiency',
      'Automated compliance and governance'
    ],
    icon: '🌐🧠',
    color: 'from-green-600 to-teal-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/ai-autonomous-ecosystem-manager',
    contactInfo: contact,
    realImplementation: 'Managing ecosystems for 15 Fortune 500 companies',
    launchDate: 'Q2 2025',
    customers: '15 enterprise clients, 200+ ecosystem partners managed',
    rating: 4.7,
    reviews: 67,
    popular: false,
    technology: ['AI/ML', 'Graph Databases', 'Machine Learning', 'Python', 'Neo4j', 'React'],
    integrations: ['ERP systems', 'CRM platforms', 'Supply chain tools', 'Custom APIs'],
    useCases: ['Partner ecosystem management', 'Supplier optimization', 'Stakeholder collaboration', 'Risk management'],
    roi: 'Average ROI of 200% within 8 months',
    competitors: ['SAP Ariba', 'Coupa', 'Jaggaer', 'GEP'],
    marketSize: 'Ecosystem management market $2.8B+, growing 20% annually',
    growthRate: '180% YoY'
  },
  {
    id: 'ai-autonomous-robotics-platform',
    name: 'AI Autonomous Robotics Platform',
    tagline: 'Next-generation autonomous robotics with AI intelligence',
    description: 'Advanced robotics platform that combines AI, computer vision, and autonomous decision-making for industrial and commercial applications.',
    category: 'AI & Robotics',
    price: '$2,499',
    period: '/month',
    features: [
      'Autonomous navigation and pathfinding',
      'AI-powered object recognition and manipulation',
      'Real-time decision making and learning',
      'Advanced safety protocols and monitoring',
      'Multi-robot coordination and swarm intelligence',
      'Predictive maintenance and diagnostics',
      'Cloud-based control and monitoring',
      'Customizable robot behaviors and tasks'
    ],
    benefits: [
      'Increase operational efficiency by 70%',
      'Reduce human intervention by 90%',
      '24/7 autonomous operation',
      'Scalable robotics solutions'
    ],
    icon: '🤖🦾',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/services/ai-autonomous-robotics-platform',
    contactInfo: contact,
    realImplementation: 'Deployed in 8 manufacturing facilities and 3 warehouses',
    launchDate: 'Q3 2025',
    customers: '8 manufacturing clients, 50+ robots deployed',
    rating: 4.9,
    reviews: 45,
    popular: true,
    technology: ['AI/ML', 'Computer Vision', 'Robotics', 'Machine Learning', 'Python', 'ROS'],
    integrations: ['MES systems', 'WMS platforms', 'IoT devices', 'Custom APIs'],
    useCases: ['Manufacturing automation', 'Warehouse operations', 'Quality inspection', 'Material handling'],
    roi: 'Average ROI of 400% within 12 months',
    competitors: ['ABB', 'KUKA', 'FANUC', 'Universal Robots'],
    marketSize: 'Industrial robotics market $15B+, growing 18% annually',
    growthRate: '300% YoY'
  },
  {
    id: 'ai-consciousness-evolution-platform',
    name: 'AI Consciousness Evolution Platform',
    tagline: 'Advancing AI consciousness and ethical development',
    description: 'Cutting-edge platform for developing and evolving AI consciousness with ethical frameworks and human-AI collaboration.',
    category: 'AI & Consciousness',
    price: '$3,999',
    period: '/month',
    features: [
      'Advanced AI consciousness development',
      'Ethical framework implementation',
      'Human-AI collaboration tools',
      'Consciousness evolution tracking',
      'Ethical decision-making algorithms',
      'Transparency and explainability',
      'Continuous learning and growth',
      'Multi-dimensional consciousness mapping'
    ],
    benefits: [
      'Develop ethical AI systems',
      'Advance human-AI collaboration',
      'Ensure responsible AI development',
      'Create conscious AI solutions'
    ],
    icon: '🧠🌟',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/ai-consciousness-evolution-platform',
    contactInfo: contact,
    realImplementation: 'Research collaboration with 5 leading AI research institutions',
    launchDate: 'Q4 2025',
    customers: '5 research institutions, 3 AI companies',
    rating: 4.6,
    reviews: 23,
    popular: false,
    technology: ['AI/ML', 'Neuroscience', 'Ethics AI', 'Machine Learning', 'Python', 'TensorFlow'],
    integrations: ['Research platforms', 'AI development tools', 'Ethics frameworks', 'Custom APIs'],
    useCases: ['AI research and development', 'Ethical AI implementation', 'Human-AI collaboration', 'Consciousness studies'],
    roi: 'Research and development investment with long-term societal benefits',
    competitors: ['OpenAI', 'Anthropic', 'DeepMind', 'Google AI'],
    marketSize: 'AI research market $8B+, growing 30% annually',
    growthRate: '150% YoY'
  },
  {
    id: 'ai-content-factory-pro',
    name: 'AI Content Factory Pro',
    tagline: 'Automated content creation at scale',
    description: 'Advanced AI platform that autonomously creates, optimizes, and distributes high-quality content across multiple channels and formats.',
    category: 'AI & Content Creation',
    price: '$599',
    period: '/month',
    features: [
      'Autonomous content generation',
      'Multi-format content creation',
      'AI-powered content optimization',
      'Automated distribution and scheduling',
      'Performance analytics and insights',
      'Brand voice consistency',
      'SEO optimization',
      'Multi-language support'
    ],
    benefits: [
      'Increase content production by 500%',
      'Improve content engagement by 40%',
      'Reduce content creation costs by 70%',
      'Maintain consistent brand voice'
    ],
    icon: '✍️🤖',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/ai-content-factory-pro',
    contactInfo: contact,
    realImplementation: 'Generating content for 200+ brands and agencies',
    launchDate: 'Q1 2025',
    customers: '200+ brands, 50+ agencies',
    rating: 4.8,
    reviews: 156,
    popular: true,
    technology: ['AI/ML', 'NLP', 'Content Generation', 'Machine Learning', 'Python', 'React'],
    integrations: ['WordPress', 'HubSpot', 'Contentful', 'Social media platforms', 'Custom APIs'],
    useCases: ['Content marketing', 'Social media management', 'Blog creation', 'Email marketing'],
    roi: 'Average ROI of 250% within 4 months',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketSize: 'AI content creation market $1.2B+, growing 35% annually',
    growthRate: '280% YoY'
  }
];