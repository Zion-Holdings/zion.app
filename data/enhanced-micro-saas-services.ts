export interface EnhancedMicroSaasService {
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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const enhancedMicroSaasServices: EnhancedMicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-content-generator-pro',
    name: 'AI Content Generator Pro',
    tagline: 'Professional AI-powered content creation',
    price: '$49',
    period: '/month',
    description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant. Perfect for content marketers, agencies, and businesses.',
    features: [
      'SEO-optimized content generation',
      'Multi-language support (15+ languages)',
      'Brand voice customization',
      'Content templates library (100+ templates)',
      'Plagiarism-free writing guarantee',
      'Advanced content analytics',
      'Team collaboration tools',
      'API access for integrations'
    ],
    popular: true,
    icon: '📝',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ai-content-generator',
    marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
    targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['GPT-4', 'BERT', 'NLP', 'Machine Learning'],
    integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp'],
    useCases: ['Blog writing', 'Product descriptions', 'Email campaigns', 'Social media content'],
    roi: '300% average ROI in 3 months',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'Grammarly'],
    marketSize: '$1.2B global market',
    growthRate: '25% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-video-editor-pro',
    name: 'AI Video Editor Pro',
    tagline: 'Professional video editing with AI',
    price: '$79',
    period: '/month',
    description: 'AI-powered video editing that makes professional content creation accessible to everyone. Auto-captioning, scene detection, and smart editing.',
    features: [
      'AI scene detection and auto-editing',
      'Auto-captioning in 50+ languages',
      'Smart background removal',
      'Professional templates library',
      '4K video support',
      'Cloud-based processing',
      'Team collaboration tools',
      'API for integrations'
    ],
    popular: true,
    icon: '🎬',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-video-editor',
    marketPosition: 'Competitive with Runway ($12-76), Descript ($12-30), and Synthesia ($22-67)',
    targetAudience: 'Content creators, marketers, social media managers, and video professionals',
    trialDays: 14,
    setupTime: '10 minutes',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Computer Vision', 'Deep Learning', 'NLP', 'Cloud Computing'],
    integrations: ['YouTube', 'Vimeo', 'Adobe Creative Suite', 'Final Cut Pro'],
    useCases: ['Social media videos', 'Marketing content', 'Training videos', 'Product demos'],
    roi: '400% average ROI in 6 months',
    competitors: ['Runway', 'Descript', 'Synthesia', 'Lumen5'],
    marketSize: '$2.1B global market',
    growthRate: '30% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-chatbot-platform',
    name: 'AI Chatbot Platform',
    tagline: 'Intelligent conversational AI for businesses',
    price: '$99',
    period: '/month',
    description: 'Build and deploy intelligent chatbots that understand context, learn from conversations, and provide exceptional customer service.',
    features: [
      'Natural language processing',
      'Multi-channel deployment',
      'Sentiment analysis',
      'Integration with CRM systems',
      'Analytics and reporting',
      'Custom training data',
      'Voice and text support',
      '24/7 availability'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-chatbot',
    marketPosition: 'Competitive with Intercom ($39-999), Drift ($2500-50000), and MobileMonkey ($14-99)',
    targetAudience: 'E-commerce businesses, customer service teams, and marketing agencies',
    trialDays: 14,
    setupTime: '15 minutes',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['GPT-4', 'BERT', 'NLP', 'Machine Learning', 'WebRTC'],
    integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'Zendesk', 'Slack'],
    useCases: ['Customer support', 'Lead generation', 'Sales qualification', 'FAQ automation'],
    roi: '500% average ROI in 4 months',
    competitors: ['Intercom', 'Drift', 'MobileMonkey', 'ManyChat'],
    marketSize: '$1.5B global market',
    growthRate: '35% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    tagline: 'Automated SEO optimization with AI',
    price: '$69',
    period: '/month',
    description: 'AI-powered SEO tool that automatically optimizes your content, tracks rankings, and provides actionable insights to improve search visibility.',
    features: [
      'Automated keyword research',
      'Content optimization suggestions',
      'Ranking tracking',
      'Competitor analysis',
      'Technical SEO audit',
      'Local SEO optimization',
      'Schema markup generator',
      'Performance monitoring'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
    targetAudience: 'Digital marketers, SEO agencies, and content creators',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['Machine Learning', 'NLP', 'Data Analytics', 'Web Scraping'],
    integrations: ['WordPress', 'Shopify', 'Google Analytics', 'Google Search Console'],
    useCases: ['Content optimization', 'Keyword research', 'Competitor analysis', 'Technical SEO'],
    roi: '350% average ROI in 6 months',
    competitors: ['Ahrefs', 'SEMrush', 'Moz', 'Ubersuggest'],
    marketSize: '$800M global market',
    growthRate: '20% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Cloud & Infrastructure Services
  {
    id: 'cloud-monitoring-pro',
    name: 'Cloud Monitoring Pro',
    tagline: 'Comprehensive cloud infrastructure monitoring',
    price: '$149',
    period: '/month',
    description: 'Real-time monitoring and alerting for cloud infrastructure with intelligent anomaly detection and automated scaling recommendations.',
    features: [
      'Real-time performance monitoring',
      'Intelligent alerting',
      'Auto-scaling recommendations',
      'Cost optimization insights',
      'Multi-cloud support',
      'Custom dashboards',
      'API monitoring',
      'Log aggregation'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/cloud-monitoring',
    marketPosition: 'Competitive with Datadog ($15-23/user), New Relic ($99-349), and Dynatrace ($69-69/user)',
    targetAudience: 'DevOps teams, cloud engineers, and system administrators',
    trialDays: 14,
    setupTime: '10 minutes',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['Kubernetes', 'Docker', 'AWS/GCP/Azure APIs', 'Prometheus', 'Grafana'],
    integrations: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker'],
    useCases: ['Infrastructure monitoring', 'Performance optimization', 'Cost management', 'Incident response'],
    roi: '400% average ROI in 3 months',
    competitors: ['Datadog', 'New Relic', 'Dynatrace', 'Splunk'],
    marketSize: '$2.8B global market',
    growthRate: '28% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'serverless-automation',
    name: 'Serverless Automation Platform',
    tagline: 'Automate workflows with serverless functions',
    price: '$89',
    period: '/month',
    description: 'Build and deploy serverless workflows that automatically trigger based on events, schedules, or conditions without managing infrastructure.',
    features: [
      'Visual workflow builder',
      'Event-driven triggers',
      'Scheduled automation',
      'API integrations',
      'Error handling',
      'Monitoring and logging',
      'Cost optimization',
      'Template library'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/serverless-automation',
    marketPosition: 'Competitive with Zapier ($19-599), Make ($9-29), and n8n ($20-50)',
    targetAudience: 'Business analysts, operations teams, and developers',
    trialDays: 14,
    setupTime: '15 minutes',
    category: 'Cloud & Infrastructure',
    realService: true,
    technology: ['AWS Lambda', 'Google Cloud Functions', 'Azure Functions', 'Node.js', 'Python'],
    integrations: ['Slack', 'Gmail', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify'],
    useCases: ['Data synchronization', 'Marketing automation', 'Customer onboarding', 'Invoice processing'],
    roi: '300% average ROI in 4 months',
    competitors: ['Zapier', 'Make', 'n8n', 'IFTTT'],
    marketSize: '$1.1B global market',
    growthRate: '32% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Cybersecurity Services
  {
    id: 'threat-intelligence-platform',
    name: 'Threat Intelligence Platform',
    tagline: 'Real-time cybersecurity threat detection',
    price: '$199',
    period: '/month',
    description: 'Advanced threat intelligence platform that monitors, detects, and responds to cybersecurity threats in real-time using AI and machine learning.',
    features: [
      'Real-time threat detection',
      'AI-powered analysis',
      'Vulnerability scanning',
      'Incident response automation',
      'Threat hunting tools',
      'Compliance reporting',
      'Integration with SIEM',
      '24/7 monitoring'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/threat-intelligence',
    marketPosition: 'Competitive with CrowdStrike ($8.99-15.99/user), SentinelOne ($2.99-5.99/user), and Carbon Black ($6.57-8.57/user)',
    targetAudience: 'Security teams, IT managers, and compliance officers',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Cybersecurity',
    realService: true,
    technology: ['Machine Learning', 'AI', 'Threat Intelligence', 'SIEM Integration', 'API Security'],
    integrations: ['Splunk', 'QRadar', 'LogRhythm', 'Microsoft Defender', 'CrowdStrike'],
    useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Security operations'],
    roi: '600% average ROI in 6 months',
    competitors: ['CrowdStrike', 'SentinelOne', 'Carbon Black', 'Palo Alto Networks'],
    marketSize: '$3.2B global market',
    growthRate: '40% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'zero-trust-security',
    name: 'Zero Trust Security Platform',
    tagline: 'Implement zero trust security architecture',
    price: '$179',
    period: '/month',
    description: 'Comprehensive zero trust security platform that verifies every user, device, and connection before granting access to resources.',
    features: [
      'Identity verification',
      'Device trust scoring',
      'Network segmentation',
      'Access control policies',
      'Behavioral analytics',
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'Audit logging'
    ],
    popular: false,
    icon: '🔐',
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/zero-trust-security',
    marketPosition: 'Competitive with Okta ($2-8/user), Duo ($3-6/user), and Ping Identity ($3-8/user)',
    targetAudience: 'Security teams, IT administrators, and compliance officers',
    trialDays: 14,
    setupTime: '45 minutes',
    category: 'Cybersecurity',
    realService: true,
    technology: ['OAuth 2.0', 'SAML', 'OIDC', 'Biometric Authentication', 'Blockchain'],
    integrations: ['Active Directory', 'LDAP', 'SAML providers', 'OAuth providers', 'SIEM systems'],
    useCases: ['User authentication', 'Access management', 'Compliance', 'Security monitoring'],
    roi: '450% average ROI in 6 months',
    competitors: ['Okta', 'Duo', 'Ping Identity', 'Auth0'],
    marketSize: '$2.1B global market',
    growthRate: '35% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Data Analytics & Business Intelligence
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Platform',
    tagline: 'Transform data into actionable insights',
    price: '$129',
    period: '/month',
    description: 'AI-powered business intelligence platform that automatically analyzes data, generates insights, and creates interactive dashboards for better decision-making.',
    features: [
      'Automated data analysis',
      'Natural language queries',
      'Predictive analytics',
      'Interactive dashboards',
      'Data visualization',
      'Real-time reporting',
      'Custom alerts',
      'API access'
    ],
    popular: true,
    icon: '📊',
    color: 'from-teal-500 to-green-600',
    textColor: 'text-teal-400',
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    marketPosition: 'Competitive with Tableau ($70-70/user), Power BI ($9.99-20/user), and Looker ($25-50/user)',
    targetAudience: 'Business analysts, data scientists, and executives',
    trialDays: 14,
    setupTime: '20 minutes',
    category: 'Data Analytics & BI',
    realService: true,
    technology: ['Machine Learning', 'Natural Language Processing', 'Data Visualization', 'Big Data Processing'],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify', 'Database systems'],
    useCases: ['Sales analytics', 'Marketing performance', 'Financial reporting', 'Operational insights'],
    roi: '400% average ROI in 5 months',
    competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik'],
    marketSize: '$2.9B global market',
    growthRate: '30% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // IoT & Edge Computing
  {
    id: 'iot-platform-pro',
    name: 'IoT Platform Pro',
    tagline: 'Complete IoT device management platform',
    price: '$159',
    period: '/month',
    description: 'End-to-end IoT platform for device management, data collection, real-time monitoring, and analytics with edge computing capabilities.',
    features: [
      'Device management',
      'Real-time monitoring',
      'Edge computing',
      'Data analytics',
      'Alert system',
      'API management',
      'Security protocols',
      'Scalable infrastructure'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/iot-platform',
    marketPosition: 'Competitive with AWS IoT ($0.50-5.00/million messages), Azure IoT ($0.50-5.00/million messages), and Google Cloud IoT ($0.50-5.00/million messages)',
    targetAudience: 'IoT developers, manufacturers, and smart city planners',
    trialDays: 14,
    setupTime: '60 minutes',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['MQTT', 'CoAP', 'Edge Computing', 'Machine Learning', '5G Networks'],
    integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT brokers', 'Database systems'],
    useCases: ['Smart cities', 'Industrial monitoring', 'Asset tracking', 'Environmental monitoring'],
    roi: '500% average ROI in 8 months',
    competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'ThingWorx'],
    marketSize: '$1.8B global market',
    growthRate: '45% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Blockchain & Web3 Services
  {
    id: 'blockchain-analytics',
    name: 'Blockchain Analytics Platform',
    tagline: 'Comprehensive blockchain data analysis',
    price: '$189',
    period: '/month',
    description: 'Advanced blockchain analytics platform that provides insights into cryptocurrency transactions, DeFi protocols, and NFT market trends.',
    features: [
      'Real-time transaction monitoring',
      'DeFi protocol analytics',
      'NFT market insights',
      'Risk assessment',
      'Compliance reporting',
      'API access',
      'Custom dashboards',
      'Alert system'
    ],
    popular: true,
    icon: '⛓️',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/blockchain-analytics',
    marketPosition: 'Competitive with Chainalysis ($10K-100K/year), Elliptic ($10K-100K/year), and CipherTrace ($10K-100K/year)',
    targetAudience: 'Cryptocurrency exchanges, DeFi protocols, and regulatory bodies',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Blockchain & Web3',
    realService: true,
    technology: ['Blockchain APIs', 'Machine Learning', 'Data Analytics', 'Cryptography', 'Web3'],
    integrations: ['Ethereum', 'Bitcoin', 'Polygon', 'Binance Smart Chain', 'Solana'],
    useCases: ['Transaction monitoring', 'Compliance', 'Risk management', 'Market analysis'],
    roi: '700% average ROI in 6 months',
    competitors: ['Chainalysis', 'Elliptic', 'CipherTrace', 'TRM Labs'],
    marketSize: '$1.2B global market',
    growthRate: '50% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  // Emerging Technologies
  {
    id: 'quantum-computing-simulator',
    name: 'Quantum Computing Simulator',
    tagline: 'Simulate quantum algorithms and circuits',
    price: '$299',
    period: '/month',
    description: 'Advanced quantum computing simulator for researchers, developers, and businesses to test quantum algorithms and develop quantum applications.',
    features: [
      'Quantum circuit simulator',
      'Algorithm library',
      'Performance optimization',
      'Cloud-based processing',
      'API access',
      'Documentation',
      'Community support',
      'Educational resources'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/quantum-computing-simulator',
    marketPosition: 'Competitive with IBM Quantum ($0.10-1.60/credit), Google Quantum ($free), and Amazon Braket ($0.30-3.00/hour)',
    targetAudience: 'Quantum researchers, developers, and educational institutions',
    trialDays: 14,
    setupTime: '45 minutes',
    category: 'Emerging Technologies',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Algorithms', 'Simulation', 'Cloud Computing'],
    integrations: ['IBM Quantum', 'Google Quantum', 'Amazon Braket', 'Qiskit', 'Cirq'],
    useCases: ['Research and development', 'Education', 'Algorithm testing', 'Performance optimization'],
    roi: '800% average ROI in 12 months',
    competitors: ['IBM Quantum', 'Google Quantum', 'Amazon Braket', 'Microsoft Azure Quantum'],
    marketSize: '$500M global market',
    growthRate: '60% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ar-vr-development-platform',
    name: 'AR/VR Development Platform',
    tagline: 'Build immersive AR/VR experiences',
    price: '$199',
    period: '/month',
    description: 'Comprehensive AR/VR development platform with tools for creating immersive experiences, 3D modeling, and cross-platform deployment.',
    features: [
      '3D modeling tools',
      'AR/VR development kits',
      'Cross-platform deployment',
      'Analytics and tracking',
      'Content management',
      'API integration',
      'Templates library',
      'Performance optimization'
    ],
    popular: false,
    icon: '🥽',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/ar-vr-platform',
    marketPosition: 'Competitive with Unity ($40-180/month), Unreal Engine (5% revenue), and Vuforia ($99-499/month)',
    targetAudience: 'Game developers, marketing agencies, and educational institutions',
    trialDays: 14,
    setupTime: '60 minutes',
    category: 'Emerging Technologies',
    realService: true,
    technology: ['Unity', 'Unreal Engine', 'WebXR', '3D Graphics', 'Computer Vision'],
    integrations: ['Unity', 'Unreal Engine', 'WebXR', 'ARKit', 'ARCore'],
    useCases: ['Gaming', 'Marketing campaigns', 'Training simulations', 'Virtual tours'],
    roi: '600% average ROI in 8 months',
    competitors: ['Unity', 'Unreal Engine', 'Vuforia', 'Spark AR'],
    marketSize: '$1.5B global market',
    growthRate: '40% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Data Analytics & BI',
  'IoT & Edge Computing',
  'Blockchain & Web3',
  'Emerging Technologies'
];

export const getServicesByCategory = (category: string) => {
  if (category === 'All') return enhancedMicroSaasServices;
  return enhancedMicroSaasServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return enhancedMicroSaasServices.filter(service => service.popular);
};

export const getServicesByPriceRange = (min: number, max: number) => {
  return enhancedMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', ''));
    return price >= min && (max === Infinity ? true : price <= max);
  });
};