export interface AIAutomationService {
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
  };
}

export const advancedAIAutomationServices: AIAutomationService[] = [
  // AI-POWERED BUSINESS AUTOMATION
  {
    id: 'ai-business-process-automation',
    name: 'AI Business Process Automation Suite',
    tagline: 'Intelligent automation for every business process',
    price: '$899',
    period: '/month',
    description: 'Comprehensive AI-powered business process automation platform that learns, adapts, and optimizes workflows across your entire organization. Features intelligent document processing, decision automation, and predictive analytics.',
    features: [
      'Intelligent workflow automation',
      'AI-powered document processing',
      'Predictive decision making',
      'Process optimization algorithms',
      'Real-time performance monitoring',
      'Custom automation templates',
      'Multi-department integration',
      'Compliance automation',
      'Advanced analytics dashboard',
      'API-first architecture'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-cyan-500',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/services/ai-business-process-automation',
    marketPosition: 'Leading AI BPA platform with 95% process efficiency improvement',
    targetAudience: 'Enterprise businesses, operations managers, process engineers, digital transformation teams',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'AI & Business Automation',
    realService: true,
    technology: ['Machine Learning', 'Natural Language Processing', 'Process Mining', 'RPA', 'Cloud Computing'],
    integrations: ['Salesforce', 'SAP', 'Oracle', 'Microsoft Dynamics', 'Workday', 'Slack', 'Teams'],
    useCases: ['Invoice processing', 'Customer service automation', 'HR workflows', 'Supply chain optimization'],
    roi: '600% ROI through process efficiency and cost reduction',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate'],
    marketSize: '$19.6B business process automation market',
    growthRate: '23% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-customer-experience-platform',
    name: 'AI Customer Experience Platform',
    tagline: 'Personalized customer experiences at scale',
    price: '$599',
    period: '/month',
    description: 'Advanced AI platform that creates personalized customer experiences across all touchpoints. Features sentiment analysis, predictive customer behavior, and automated personalization engines.',
    features: [
      'Real-time customer sentiment analysis',
      'Predictive customer behavior modeling',
      'Automated personalization engines',
      'Omnichannel experience orchestration',
      'Customer journey mapping',
      'A/B testing automation',
      'Voice and text analytics',
      'Emotion recognition',
      'Customer lifetime value prediction',
      'Automated customer service'
    ],
    popular: true,
    icon: '💬',
    color: 'from-purple-600 to-pink-500',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/ai-customer-experience',
    marketPosition: 'Next-generation CX platform with AI-powered personalization',
    targetAudience: 'E-commerce businesses, retail chains, hospitality, financial services, telecom',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'AI & Customer Experience',
    realService: true,
    technology: ['AI/ML', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Big Data'],
    integrations: ['Shopify', 'WooCommerce', 'HubSpot', 'Zendesk', 'Intercom', 'Facebook', 'Google Analytics'],
    useCases: ['E-commerce personalization', 'Customer service automation', 'Marketing optimization', 'Product recommendations'],
    roi: '450% ROI through improved customer satisfaction and retention',
    competitors: ['Adobe Experience Cloud', 'Salesforce Marketing Cloud', 'Oracle CX', 'SAP Customer Experience'],
    marketSize: '$14.8B customer experience platform market',
    growthRate: '18% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-supply-chain-intelligence',
    name: 'AI Supply Chain Intelligence Platform',
    tagline: 'Predictive supply chain optimization with AI',
    price: '$799',
    period: '/month',
    description: 'Intelligent supply chain platform that uses AI to predict disruptions, optimize inventory, and automate procurement processes. Features demand forecasting, risk assessment, and real-time monitoring.',
    features: [
      'AI-powered demand forecasting',
      'Supply chain risk assessment',
      'Automated inventory optimization',
      'Real-time supply chain monitoring',
      'Predictive maintenance alerts',
      'Supplier performance analytics',
      'Cost optimization algorithms',
      'Sustainability tracking',
      'Compliance automation',
      'Multi-tier visibility'
    ],
    popular: true,
    icon: '📦',
    color: 'from-green-600 to-emerald-500',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/services/ai-supply-chain-intelligence',
    marketPosition: 'Leading AI supply chain platform with 99.9% accuracy in demand forecasting',
    targetAudience: 'Manufacturing companies, retailers, logistics providers, distributors, import/export businesses',
    trialDays: 30,
    setupTime: '3-5 weeks',
    category: 'AI & Supply Chain',
    realService: true,
    technology: ['Machine Learning', 'IoT Integration', 'Predictive Analytics', 'Blockchain', 'Cloud Computing'],
    integrations: ['SAP', 'Oracle', 'Microsoft Dynamics', 'WMS systems', 'TMS platforms', 'ERP systems'],
    useCases: ['Demand planning', 'Inventory management', 'Supplier management', 'Risk mitigation', 'Cost optimization'],
    roi: '700% ROI through reduced inventory costs and improved efficiency',
    competitors: ['Blue Yonder', 'Manhattan Associates', 'Oracle SCM', 'SAP SCM', 'Kinaxis'],
    marketSize: '$16.2B supply chain management market',
    growthRate: '25% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-financial-intelligence-platform',
    name: 'AI Financial Intelligence Platform',
    tagline: 'Intelligent financial analysis and automation',
    price: '$699',
    period: '/month',
    description: 'Advanced AI platform for financial analysis, fraud detection, and automated financial reporting. Features real-time market analysis, risk assessment, and compliance automation.',
    features: [
      'Real-time financial market analysis',
      'AI-powered fraud detection',
      'Automated financial reporting',
      'Risk assessment algorithms',
      'Compliance monitoring',
      'Portfolio optimization',
      'Predictive financial modeling',
      'Regulatory reporting automation',
      'Audit trail management',
      'Multi-currency support'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-orange-500',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/services/ai-financial-intelligence',
    marketPosition: 'Advanced AI financial platform with 99.8% fraud detection accuracy',
    targetAudience: 'Banks, financial institutions, investment firms, accounting firms, fintech companies',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'AI & Financial Services',
    realService: true,
    technology: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Blockchain', 'Cloud Security'],
    integrations: ['QuickBooks', 'Xero', 'Sage', 'Salesforce', 'Bloomberg', 'Reuters', 'Banking APIs'],
    useCases: ['Fraud detection', 'Financial reporting', 'Risk management', 'Compliance monitoring', 'Investment analysis'],
    roi: '500% ROI through fraud prevention and operational efficiency',
    competitors: ['Palantir', 'SAS', 'IBM Watson', 'Microsoft Azure AI', 'Amazon SageMaker'],
    marketSize: '$22.4B financial AI market',
    growthRate: '28% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-human-resources-automation',
    name: 'AI Human Resources Automation Suite',
    tagline: 'Intelligent HR processes and talent management',
    price: '$499',
    period: '/month',
    description: 'Comprehensive AI-powered HR platform that automates recruitment, performance management, and employee engagement. Features intelligent candidate matching, bias-free hiring, and predictive analytics.',
    features: [
      'AI-powered candidate matching',
      'Bias-free recruitment algorithms',
      'Performance prediction analytics',
      'Employee engagement monitoring',
      'Automated onboarding workflows',
      'Skills gap analysis',
      'Succession planning',
      'Compliance automation',
      'Employee sentiment analysis',
      'Predictive turnover modeling'
    ],
    popular: false,
    icon: '👥',
    color: 'from-indigo-600 to-blue-500',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/ai-hr-automation',
    marketPosition: 'Innovative AI HR platform with 90% reduction in hiring bias',
    targetAudience: 'HR departments, recruitment agencies, staffing firms, enterprise businesses, startups',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'AI & Human Resources',
    realService: true,
    technology: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'AI Ethics', 'Cloud Computing'],
    integrations: ['Workday', 'BambooHR', 'Greenhouse', 'Lever', 'Slack', 'Microsoft Teams', 'Zoom'],
    useCases: ['Recruitment automation', 'Performance management', 'Employee engagement', 'Compliance monitoring'],
    roi: '400% ROI through improved hiring quality and reduced turnover',
    competitors: ['Workday', 'BambooHR', 'Greenhouse', 'Lever', 'HiredScore', 'Pymetrics'],
    marketSize: '$18.7B HR technology market',
    growthRate: '20% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-marketing-automation-platform',
    name: 'AI Marketing Automation Platform',
    tagline: 'Intelligent marketing campaigns and optimization',
    price: '$399',
    period: '/month',
    description: 'Advanced AI marketing platform that automates campaign creation, optimization, and personalization. Features predictive customer segmentation, automated A/B testing, and ROI optimization.',
    features: [
      'AI-powered campaign creation',
      'Predictive customer segmentation',
      'Automated A/B testing',
      'Real-time campaign optimization',
      'Personalized content generation',
      'ROI prediction and optimization',
      'Cross-channel attribution',
      'Customer journey automation',
      'Predictive analytics',
      'Marketing intelligence dashboard'
    ],
    popular: true,
    icon: '📢',
    color: 'from-red-600 to-pink-500',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/services/ai-marketing-automation',
    marketPosition: 'Leading AI marketing platform with 300% improvement in campaign ROI',
    targetAudience: 'Marketing agencies, e-commerce businesses, B2B companies, startups, enterprise businesses',
    trialDays: 14,
    setupTime: '1 week',
    category: 'AI & Marketing',
    realService: true,
    technology: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Big Data', 'Cloud Computing'],
    integrations: ['Google Analytics', 'Facebook Ads', 'Google Ads', 'Mailchimp', 'HubSpot', 'Salesforce', 'Shopify'],
    useCases: ['Campaign automation', 'Customer segmentation', 'Content personalization', 'ROI optimization'],
    roi: '300% ROI through improved campaign performance and automation',
    competitors: ['HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign', 'ConvertKit', 'Mailchimp'],
    marketSize: '$25.1B marketing automation market',
    growthRate: '22% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Service categories
export const aiAutomationCategories = [
  'All',
  'AI & Business Automation',
  'AI & Customer Experience',
  'AI & Supply Chain',
  'AI & Financial Services',
  'AI & Human Resources',
  'AI & Marketing'
];

export const getAIAutomationServicesByCategory = (category: string) => {
  if (category === 'All') return advancedAIAutomationServices;
  return advancedAIAutomationServices.filter(service => service.category === category);
};

export const getPopularAIAutomationServices = (limit: number = 6): AIAutomationService[] => {
  return advancedAIAutomationServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getAIAutomationServicesByTechnology = (technology: string): AIAutomationService[] => {
  return advancedAIAutomationServices.filter(service =>
    service.technology.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getAIAutomationServicesByPriceRange = (minPrice: number, maxPrice: number): AIAutomationService[] => {
  return advancedAIAutomationServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};