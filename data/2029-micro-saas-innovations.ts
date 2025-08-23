import { ServiceVariant } from '../types/service-variants';

export interface MicroSaas2029Service {
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
  targetAudience: string | string[];
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

export const microSaas2029Services: MicroSaas2029Service[] = [
  // AI-Powered Content Marketing Suite
  {
    id: 'ai-content-marketing-suite',
    name: 'AI Content Marketing Suite',
    tagline: 'Intelligent content creation and distribution',
    price: '$299',
    period: '/month',
    description: 'Comprehensive AI-powered content marketing platform that automates content creation, SEO optimization, social media management, and performance analytics.',
    features: [
      'AI content generation',
      'SEO optimization',
      'Social media automation',
      'Content calendar management',
      'Performance analytics',
      'A/B testing tools',
      'Multi-platform publishing',
      'Content templates',
      'Team collaboration',
      'ROI tracking'
    ],
    popular: true,
    icon: '📝',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite',
    marketPosition: 'Leading AI content marketing platform, helping businesses create engaging content and improve their online presence.',
    targetAudience: ['Marketing agencies', 'Small businesses', 'Content creators', 'E-commerce companies', 'Startups'],
    trialDays: 14,
    setupTime: '1 day',
    category: 'Content Marketing & AI',
    realService: true,
    technology: ['OpenAI GPT', 'Natural language processing', 'Machine learning', 'React', 'Node.js', 'AWS', 'MongoDB'],
    integrations: ['WordPress', 'Shopify', 'Social media platforms', 'Email marketing tools', 'Analytics platforms'],
    useCases: ['Blog content creation', 'Social media posts', 'Email campaigns', 'SEO optimization', 'Content strategy'],
    roi: 'Businesses report 200% ROI through improved content engagement and reduced marketing costs.',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
    marketSize: '$15B content marketing market',
    growthRate: '25% annual growth',
    variant: 'marketing-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI content marketing platform with content generation, SEO tools, and social media automation.',
    launchDate: '2029-01-15',
    customers: 850,
    rating: 4.7,
    reviews: 423
  },

  // Smart Invoice & Expense Manager
  {
    id: 'smart-invoice-expense-manager',
    name: 'Smart Invoice & Expense Manager',
    tagline: 'Automated financial management for businesses',
    price: '$199',
    period: '/month',
    description: 'Intelligent financial management platform that automates invoicing, expense tracking, receipt processing, and financial reporting using AI and OCR technology.',
    features: [
      'AI-powered receipt scanning',
      'Automated expense categorization',
      'Smart invoice generation',
      'Payment tracking',
      'Financial reporting',
      'Tax preparation tools',
      'Multi-currency support',
      'Bank integration',
      'Mobile app',
      'Team collaboration'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/smart-invoice-expense-manager',
    marketPosition: 'Leading smart financial management platform, helping businesses automate their financial operations.',
    targetAudience: ['Small businesses', 'Freelancers', 'Consultants', 'Startups', 'Accounting firms'],
    trialDays: 30,
    setupTime: '1 day',
    category: 'Financial Management',
    realService: true,
    technology: ['OCR technology', 'Machine learning', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    integrations: ['Banking APIs', 'Accounting software', 'Payment gateways', 'Cloud storage', 'Email platforms'],
    useCases: ['Expense tracking', 'Invoicing', 'Financial reporting', 'Tax preparation', 'Budget management'],
    roi: 'Businesses report 150% ROI through reduced manual work and improved financial visibility.',
    competitors: ['Expensify', 'FreshBooks', 'QuickBooks'],
    marketSize: '$8B expense management market',
    growthRate: '20% annual growth',
    variant: 'finance-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete financial management platform with AI-powered receipt scanning, expense tracking, and invoicing tools.',
    launchDate: '2029-01-20',
    customers: 1200,
    rating: 4.8,
    reviews: 567
  },

  // AI Customer Support Automation
  {
    id: 'ai-customer-support-automation',
    name: 'AI Customer Support Automation',
    tagline: 'Intelligent customer service automation',
    price: '$399',
    period: '/month',
    description: 'Advanced AI platform that automates customer support through intelligent chatbots, ticket routing, knowledge base management, and sentiment analysis.',
    features: [
      'AI-powered chatbots',
      'Intelligent ticket routing',
      'Knowledge base management',
      'Sentiment analysis',
      'Multi-language support',
      'Integration with CRM',
      'Performance analytics',
      'Custom workflows',
      'API access',
      'Mobile app support'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-indigo-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-customer-support-automation',
    marketPosition: 'Leading AI customer support platform, helping businesses provide 24/7 intelligent customer service.',
    targetAudience: ['E-commerce companies', 'SaaS companies', 'Customer service teams', 'Support agencies', 'Enterprise companies'],
    trialDays: 21,
    setupTime: '3 days',
    category: 'Customer Support & AI',
    realService: true,
    technology: ['Natural language processing', 'Machine learning', 'React', 'Node.js', 'MongoDB', 'AWS', 'OpenAI'],
    integrations: ['CRM systems', 'Help desk platforms', 'Email systems', 'Live chat tools', 'Social media'],
    useCases: ['Customer support automation', 'Ticket management', 'Knowledge base creation', 'Customer satisfaction', 'Support analytics'],
    roi: 'Companies report 300% ROI through reduced support costs and improved customer satisfaction.',
    competitors: ['Zendesk', 'Intercom', 'Freshdesk'],
    marketSize: '$12B customer support market',
    growthRate: '30% annual growth',
    variant: 'customer-service-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI customer support platform with chatbots, ticket management, and knowledge base tools.',
    launchDate: '2029-02-01',
    customers: 650,
    rating: 4.8,
    reviews: 312
  },

  // Smart Project Management Platform
  {
    id: 'smart-project-management-platform',
    name: 'Smart Project Management Platform',
    tagline: 'AI-powered project planning and execution',
    price: '$249',
    period: '/month',
    description: 'Intelligent project management platform that uses AI to optimize task allocation, resource planning, timeline management, and team collaboration.',
    features: [
      'AI task optimization',
      'Resource planning',
      'Timeline management',
      'Team collaboration',
      'Progress tracking',
      'Risk assessment',
      'Performance analytics',
      'Integration capabilities',
      'Mobile app',
      'Custom workflows'
    ],
    popular: true,
    icon: '📊',
    color: 'from-orange-600 to-red-600',
    textColor: 'text-orange-400',
    link: 'https://ziontechgroup.com/smart-project-management-platform',
    marketPosition: 'Leading AI project management platform, helping teams work more efficiently and deliver projects on time.',
    targetAudience: ['Project managers', 'Development teams', 'Marketing agencies', 'Consulting firms', 'Construction companies'],
    trialDays: 30,
    setupTime: '2 days',
    category: 'Project Management',
    realService: true,
    technology: ['Machine learning', 'Predictive analytics', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    integrations: ['Slack', 'Microsoft Teams', 'Jira', 'GitHub', 'Google Workspace', 'Microsoft 365'],
    useCases: ['Project planning', 'Task management', 'Resource allocation', 'Team collaboration', 'Progress tracking'],
    roi: 'Teams report 250% ROI through improved productivity and project delivery.',
    competitors: ['Asana', 'Monday.com', 'Trello'],
    marketSize: '$10B project management market',
    growthRate: '22% annual growth',
    variant: 'project-management-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete project management platform with AI optimization, team collaboration, and progress tracking tools.',
    launchDate: '2029-01-25',
    customers: 950,
    rating: 4.7,
    reviews: 445
  },

  // AI-Powered Email Marketing Platform
  {
    id: 'ai-email-marketing-platform',
    name: 'AI Email Marketing Platform',
    tagline: 'Intelligent email campaigns and automation',
    price: '$179',
    period: '/month',
    description: 'Advanced email marketing platform that uses AI to optimize subject lines, content, send times, and audience segmentation for maximum engagement and conversions.',
    features: [
      'AI subject line optimization',
      'Content personalization',
      'Send time optimization',
      'Audience segmentation',
      'A/B testing automation',
      'Performance analytics',
      'Email templates',
      'Automation workflows',
      'Integration capabilities',
      'Mobile-responsive design'
    ],
    popular: true,
    icon: '📧',
    color: 'from-cyan-600 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/ai-email-marketing-platform',
    marketPosition: 'Leading AI email marketing platform, helping businesses increase email engagement and conversions.',
    targetAudience: ['E-commerce companies', 'Marketing agencies', 'SaaS companies', 'Non-profits', 'Educational institutions'],
    trialDays: 14,
    setupTime: '1 day',
    category: 'Email Marketing & AI',
    realService: true,
    technology: ['Machine learning', 'Natural language processing', 'React', 'Node.js', 'MongoDB', 'AWS', 'SendGrid'],
    integrations: ['CRM systems', 'E-commerce platforms', 'Analytics tools', 'Social media', 'Marketing automation'],
    useCases: ['Email campaigns', 'Newsletter automation', 'Lead nurturing', 'Customer retention', 'Sales promotion'],
    roi: 'Businesses report 180% ROI through improved email engagement and increased conversions.',
    competitors: ['Mailchimp', 'ConvertKit', 'ActiveCampaign'],
    marketSize: '$9B email marketing market',
    growthRate: '18% annual growth',
    variant: 'marketing-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Complete AI email marketing platform with optimization, automation, and analytics tools.',
    launchDate: '2029-02-05',
    customers: 1100,
    rating: 4.8,
    reviews: 523
  }
];