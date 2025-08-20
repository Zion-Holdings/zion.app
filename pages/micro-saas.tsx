import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      tagline: 'Professional AI-powered content creation',
      price: '$49',
      period: '/month',
      description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant.',
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
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators'
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation and team collaboration.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools',
        'Version control & history',
        'Design system analytics',
        'Integration with Figma, Sketch, Adobe XD'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://ziontechgroup.com/design-system-builder',
      marketPosition: 'Competitive with Zeroheight ($0-200), Frontify ($0-200), and InVision DSM ($0-100)',
      targetAudience: 'Design teams, product managers, and design system architects'
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights.',
      features: [
        'Performance metrics tracking',
        'Error monitoring & alerting',
        'User experience analytics',
        'Automated optimization',
        'Custom dashboards',
        'Real-time alerts',
        'Performance budgets',
        'Integration with popular frameworks'
      ],
      popular: false,
      icon: '📱',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://ziontechgroup.com/app-performance-monitor',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99)',
      targetAudience: 'Developers, DevOps teams, and product managers'
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Comprehensive SEO automation',
      price: '$89',
      period: '/month',
      description: 'Automate your SEO workflow with advanced tools for keyword research, optimization, and reporting.',
      features: [
        'Keyword research automation',
        'On-page optimization',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking',
        'Automated reporting',
        'SEO score monitoring',
        'Integration with Google Analytics & Search Console'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/seo-automation-suite',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and agencies'
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent conversational AI',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and user engagement.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Analytics & insights',
        'Custom training data',
        '24/7 availability',
        'Multi-language support',
        'Conversation flow builder',
        'Integration with popular platforms'
      ],
      popular: false,
      icon: '💬',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      link: 'https://ziontechgroup.com/ai-chatbot-platform',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($0-2500), and ManyChat ($0-15)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses'
    },
    {
      name: 'Business Intelligence Hub',
      tagline: 'Data-driven insights platform',
      price: '$99',
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics and automated reporting.',
      features: [
        'Data visualization tools',
        'Automated reporting',
        'KPI dashboards',
        'Predictive analytics',
        'Data integration',
        'Real-time data processing',
        'Custom metrics & calculations',
        'Team collaboration features'
      ],
      popular: false,
      icon: '📊',
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      link: 'https://ziontechgroup.com/business-intelligence-hub',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, and executives'
    },
    {
      name: 'Email Marketing Automation',
      tagline: 'Advanced email campaign management',
      price: '$59',
      period: '/month',
      description: 'Create, automate, and optimize email marketing campaigns with AI-powered personalization.',
      features: [
        'AI-powered personalization',
        'Advanced segmentation',
        'A/B testing automation',
        'Behavioral triggers',
        'Email template library',
        'Analytics & reporting',
        'GDPR compliance tools',
        'Integration with major platforms'
      ],
      popular: true,
      icon: '📧',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/email-marketing-automation',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($29-59), and ActiveCampaign ($29-259)',
      targetAudience: 'Digital marketers, e-commerce businesses, and content creators'
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Intelligent social media management',
      price: '$39',
      period: '/month',
      description: 'Schedule, analyze, and optimize your social media presence across all platforms.',
      features: [
        'Multi-platform scheduling',
        'AI-powered content suggestions',
        'Best time to post optimization',
        'Content calendar management',
        'Performance analytics',
        'Hashtag optimization',
        'Team collaboration tools',
        'Automated responses'
      ],
      popular: false,
      icon: '📱',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/social-media-scheduler',
      marketPosition: 'Competitive with Buffer ($15-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, influencers, and marketing teams'
    },
    {
      name: 'Customer Feedback Analytics',
      tagline: 'Actionable customer insights platform',
      price: '$79',
      period: '/month',
      description: 'Collect, analyze, and act on customer feedback to improve your products and services.',
      features: [
        'Multi-channel feedback collection',
        'Sentiment analysis',
        'Feedback categorization',
        'Action item tracking',
        'Customer satisfaction metrics',
        'Integration with CRM systems',
        'Automated reporting',
        'Team collaboration tools'
      ],
      popular: false,
      icon: '💡',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/customer-feedback-analytics',
      marketPosition: 'Competitive with UserVoice ($15-500), Productboard ($20-2000), and Canny ($50-400)',
      targetAudience: 'Product managers, customer success teams, and UX researchers'
    },
    {
      name: 'Invoice & Billing Manager',
      tagline: 'Streamlined financial operations',
      price: '$49',
      period: '/month',
      description: 'Automate invoicing, payment processing, and financial reporting for your business.',
      features: [
        'Automated invoicing',
        'Payment processing integration',
        'Recurring billing',
        'Financial reporting',
        'Tax calculation',
        'Multi-currency support',
        'Client portal',
        'Accounting software integration'
      ],
      popular: false,
      icon: '💰',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/invoice-billing-manager',
      marketPosition: 'Competitive with FreshBooks ($15-55), Wave (Free), and QuickBooks ($30-200)',
      targetAudience: 'Freelancers, small businesses, and accounting professionals'
    },
    {
      name: 'Project Management Hub',
      tagline: 'Collaborative project management platform',
      price: '$69',
      period: '/month',
      description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
      features: [
        'Task management & tracking',
        'Team collaboration tools',
        'Project templates',
        'Time tracking',
        'Resource allocation',
        'Progress reporting',
        'Integration with popular tools',
        'Mobile app access'
      ],
      popular: false,
      icon: '📋',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/project-management-hub',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, development teams, and creative agencies'
    },
    {
      name: 'API Gateway & Management',
      tagline: 'Enterprise API infrastructure',
      price: '$129',
      period: '/month',
      description: 'Build, deploy, and manage APIs with advanced security, monitoring, and developer tools.',
      features: [
        'API design & documentation',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'API analytics & monitoring',
        'Developer portal',
        'Version management',
        'Security & compliance',
        'Integration with CI/CD'
      ],
      popular: false,
      icon: '🔌',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      link: 'https://ziontechgroup.com/api-gateway-management',
      marketPosition: 'Competitive with Kong ($250-500), AWS API Gateway ($3.50/million calls), and Azure API Management ($0.50-4.00)',
      targetAudience: 'Developers, DevOps engineers, and platform architects'
    },
    {
      name: 'AI Video Generator',
      tagline: 'Professional video creation with AI',
      price: '$89',
      period: '/month',
      description: 'Create engaging videos for marketing, training, and social media with AI-powered tools.',
      features: [
        'AI script generation',
        'Text-to-speech synthesis',
        'Video template library',
        'Auto-subtitle generation',
        'Background music selection',
        'Multi-format export',
        'Collaboration tools',
        'Analytics dashboard'
      ],
      popular: true,
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-video-generator',
      marketPosition: 'Competitive with Synthesia ($30-99), Lumen5 ($19-79), and InVideo ($15-39)',
      targetAudience: 'Content creators, marketers, educators, and social media managers'
    },
    {
      name: 'E-commerce Analytics Platform',
      tagline: 'Comprehensive e-commerce insights',
      price: '$79',
      period: '/month',
      description: 'Track, analyze, and optimize your e-commerce performance with advanced analytics and AI insights.',
      features: [
        'Sales funnel analysis',
        'Customer behavior tracking',
        'Product performance metrics',
        'Conversion optimization',
        'Inventory forecasting',
        'Customer lifetime value',
        'A/B testing tools',
        'Integration with major platforms'
      ],
      popular: false,
      icon: '🛒',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ecommerce-analytics-platform',
      marketPosition: 'Competitive with Google Analytics 4 (Free), Hotjar ($32-500), and Crazy Egg ($24-99)',
      targetAudience: 'E-commerce businesses, online retailers, and digital marketers'
    },
    {
      name: 'Legal Document Generator',
      tagline: 'AI-powered legal document creation',
      price: '$59',
      period: '/month',
      description: 'Generate professional legal documents, contracts, and agreements with AI assistance.',
      features: [
        'Legal document templates',
        'AI-powered customization',
        'Compliance checking',
        'Electronic signatures',
        'Document storage',
        'Version control',
        'Legal expert review',
        'Multi-jurisdiction support'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://ziontechgroup.com/legal-document-generator',
      marketPosition: 'Competitive with LegalZoom ($0-299), Rocket Lawyer ($39.99-99.99), and DocuSign ($10-25)',
      targetAudience: 'Small businesses, freelancers, legal professionals, and startups'
    },
    {
      name: 'HR Management Suite',
      tagline: 'Complete HR automation platform',
      price: '$99',
      period: '/month',
      description: 'Streamline HR processes with automated recruitment, employee management, and performance tracking.',
      features: [
        'Applicant tracking system',
        'Employee onboarding',
        'Performance management',
        'Time & attendance tracking',
        'Payroll integration',
        'Benefits administration',
        'Compliance reporting',
        'Employee self-service portal'
      ],
      popular: false,
      icon: '👥',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      link: 'https://ziontechgroup.com/hr-management-suite',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Gusto ($40-80), and Zenefits ($8-27)',
      targetAudience: 'HR professionals, small to medium businesses, and growing companies'
    },
    {
      name: 'AI Customer Support',
      tagline: 'Intelligent customer service automation',
      price: '$69',
      period: '/month',
      description: 'Automate customer support with AI-powered chatbots, ticket routing, and knowledge base management.',
      features: [
        'AI chatbot integration',
        'Smart ticket routing',
        'Knowledge base management',
        'Customer satisfaction surveys',
        'Multi-channel support',
        'Analytics & reporting',
        'Integration with CRM',
        '24/7 availability'
      ],
      popular: true,
      icon: '🎧',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-customer-support',
      marketPosition: 'Competitive with Zendesk ($49-215), Freshdesk ($15-79), and Intercom ($39-499)',
      targetAudience: 'Customer support teams, e-commerce businesses, and service companies'
    },
    {
      name: 'Data Backup & Recovery',
      tagline: 'Enterprise-grade data protection',
      price: '$49',
      period: '/month',
      description: 'Secure cloud backup and disaster recovery solution for businesses of all sizes.',
      features: [
        'Automated cloud backup',
        'Incremental backup',
        'Data encryption',
        'Disaster recovery',
        'File versioning',
        'Cross-platform support',
        'Compliance certifications',
        '24/7 monitoring'
      ],
      popular: false,
      icon: '💾',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/data-backup-recovery',
      marketPosition: 'Competitive with Backblaze ($7-70), Carbonite ($6-24), and Acronis ($69-99)',
      targetAudience: 'Businesses, IT professionals, and organizations requiring data protection'
    },
    // New enhanced services
    {
      name: 'AI Code Assistant Pro',
      tagline: 'Intelligent coding companion',
      price: '$79',
      period: '/month',
      description: 'AI-powered code completion, refactoring, and debugging assistance for developers.',
      features: [
        'Intelligent code completion',
        'AI-powered refactoring',
        'Bug detection & fixes',
        'Code documentation generation',
        'Multi-language support',
        'IDE integration',
        'Team collaboration features',
        'Code review assistance'
      ],
      popular: true,
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/ai-code-assistant',
      marketPosition: 'Competitive with GitHub Copilot ($10-19), Tabnine ($12-39), and Kite (Free-$99)',
      targetAudience: 'Software developers, engineering teams, and coding bootcamps'
    },
    {
      name: 'Cybersecurity Threat Monitor',
      tagline: 'Real-time security threat detection',
      price: '$89',
      period: '/month',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and automated response.',
      features: [
        'Real-time threat detection',
        'AI-powered risk assessment',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Security analytics dashboard',
        '24/7 security operations',
        'Integration with SIEM tools'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/cybersecurity-threat-monitor',
      marketPosition: 'Competitive with CrowdStrike ($8.99-15.99), SentinelOne ($2.99-6.99), and Carbon Black ($6.99-12.99)',
      targetAudience: 'IT security teams, cybersecurity professionals, and compliance officers'
    },
    {
      name: 'Supply Chain Analytics',
      tagline: 'End-to-end supply chain optimization',
      price: '$119',
      period: '/month',
      description: 'Comprehensive supply chain analytics with predictive modeling and optimization recommendations.',
      features: [
        'Supply chain mapping',
        'Demand forecasting',
        'Inventory optimization',
        'Supplier performance tracking',
        'Risk assessment & mitigation',
        'Cost optimization analysis',
        'Real-time monitoring',
        'Integration with ERP systems'
      ],
      popular: false,
      icon: '🚚',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/supply-chain-analytics',
      marketPosition: 'Competitive with SAP Ariba ($0-1000+), Oracle SCM ($0-500+), and Kinaxis ($0-500+)',
      targetAudience: 'Supply chain managers, logistics professionals, and manufacturing companies'
    },
    {
      name: 'AI Market Research Platform',
      tagline: 'Intelligent market intelligence',
      price: '$99',
      period: '/month',
      description: 'AI-powered market research with competitor analysis, trend prediction, and consumer insights.',
      features: [
        'Competitor intelligence',
        'Market trend analysis',
        'Consumer behavior insights',
        'AI-powered predictions',
        'Custom research reports',
        'Data visualization tools',
        'Real-time market updates',
        'Export & sharing capabilities'
      ],
      popular: false,
      icon: '🔬',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-market-research',
      marketPosition: 'Competitive with SimilarWeb ($125-833), SEMrush ($119-449), and Ahrefs ($99-999)',
      targetAudience: 'Market researchers, business strategists, and product managers'
    },
    {
      name: 'Financial Planning & Forecasting',
      tagline: 'AI-powered financial intelligence',
      price: '$89',
      period: '/month',
      description: 'Advanced financial planning with AI-powered forecasting, budgeting, and scenario analysis.',
      features: [
        'AI-powered forecasting',
        'Budget planning & tracking',
        'Scenario analysis',
        'Cash flow management',
        'Financial modeling',
        'Risk assessment',
        'Compliance reporting',
        'Integration with accounting systems'
      ],
      popular: false,
      icon: '📈',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/financial-planning-forecasting',
      marketPosition: 'Competitive with Adaptive Insights ($9-50), Anaplan ($0-1000+), and Planful ($0-1000+)',
      targetAudience: 'Financial analysts, CFOs, and business consultants'
    },
    {
      name: 'AI-Powered CRM',
      tagline: 'Intelligent customer relationship management',
      price: '$79',
      period: '/month',
      description: 'Next-generation CRM with AI-powered lead scoring, sales forecasting, and customer insights.',
      features: [
        'AI lead scoring',
        'Sales forecasting',
        'Customer behavior analysis',
        'Automated follow-ups',
        'Pipeline management',
        'Performance analytics',
        'Mobile app access',
        'Integration with popular tools'
      ],
      popular: true,
      icon: '🤝',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/ai-powered-crm',
      marketPosition: 'Competitive with Salesforce ($25-300), HubSpot ($45-1200), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, business development professionals, and customer success managers'
    },
    {
      name: 'Learning Management System',
      tagline: 'AI-powered corporate learning platform',
      price: '$69',
      period: '/month',
      description: 'Modern LMS with AI-powered content recommendations, adaptive learning, and progress tracking.',
      features: [
        'AI content recommendations',
        'Adaptive learning paths',
        'Progress tracking',
        'Interactive assessments',
        'Mobile learning',
        'Analytics & reporting',
        'Integration with HR systems',
        'Multi-language support'
      ],
      popular: false,
      icon: '🎓',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/learning-management-system',
      marketPosition: 'Competitive with Cornerstone ($0-1000+), Saba ($0-1000+), and Docebo ($0-1000+)',
      targetAudience: 'HR professionals, training managers, and corporate educators'
    },
    {
      name: 'IoT Device Management',
      tagline: 'Enterprise IoT platform',
      price: '$129',
      period: '/month',
      description: 'Comprehensive IoT device management with monitoring, analytics, and automation capabilities.',
      features: [
        'Device provisioning & management',
        'Real-time monitoring',
        'Data analytics & insights',
        'Automated alerts',
        'Security & compliance',
        'Integration with cloud platforms',
        'Scalable architecture',
        'API access for developers'
      ],
      popular: false,
      icon: '🌐',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://ziontechgroup.com/iot-device-management',
      marketPosition: 'Competitive with AWS IoT ($0-5), Azure IoT Hub ($0-50), and Google Cloud IoT ($0-50)',
      targetAudience: 'IoT developers, system integrators, and enterprise IoT deployments'
    },
    {
      name: 'AI-Powered Analytics Dashboard',
      tagline: 'Intelligent business intelligence',
      price: '$89',
      period: '/month',
      description: 'AI-powered analytics dashboard with automated insights, predictive analytics, and custom reporting.',
      features: [
        'AI-powered insights',
        'Predictive analytics',
        'Custom dashboards',
        'Real-time data processing',
        'Automated reporting',
        'Data visualization',
        'Integration with data sources',
        'Mobile-responsive design'
      ],
      popular: false,
      icon: '📊',
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      link: 'https://ziontechgroup.com/ai-powered-analytics-dashboard',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, and executives'
    },
    {
      name: 'Customer Relationship Management',
      tagline: 'Complete CRM solution for modern businesses',
      price: '$89',
      period: '/month',
      description: 'Comprehensive CRM platform with lead management, sales tracking, and customer lifecycle management.',
      features: [
        'Lead management & scoring',
        'Sales pipeline tracking',
        'Contact management',
        'Email integration',
        'Reporting & analytics',
        'Mobile app access',
        'Integration with popular tools',
        'Custom workflows'
      ],
      popular: false,
      icon: '👥',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/customer-relationship-management',
      marketPosition: 'Competitive with Salesforce ($25-300), HubSpot ($45-1200), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, business development professionals, and customer success managers'
    },
    {
      name: 'Business Process Automation',
      tagline: 'Streamline workflows with intelligent automation',
      price: '$79',
      period: '/month',
      description: 'Automate repetitive business processes with AI-powered workflow automation and intelligent routing.',
      features: [
        'Workflow automation',
        'Process mapping',
        'AI-powered routing',
        'Approval workflows',
        'Integration with business systems',
        'Performance analytics',
        'Custom automation rules',
        'Mobile workflow access'
      ],
      popular: false,
      icon: '⚙️',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/business-process-automation',
      marketPosition: 'Competitive with Zapier ($19.99-599), Microsoft Power Automate ($15-40), and UiPath ($0-1000+)',
      targetAudience: 'Operations managers, business analysts, and process improvement teams'
    },
    {
      name: 'Digital Asset Management',
      tagline: 'Centralized digital asset organization',
      price: '$69',
      period: '/month',
      description: 'Organize, manage, and distribute digital assets with advanced metadata and collaboration tools.',
      features: [
        'Centralized asset storage',
        'Advanced metadata management',
        'Version control',
        'Collaboration tools',
        'Asset search & discovery',
        'Access control & permissions',
        'Integration with design tools',
        'Analytics & usage tracking'
      ],
      popular: false,
      icon: '🗂️',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/digital-asset-management',
      marketPosition: 'Competitive with Bynder ($450-2000), Widen ($0-1000+), and Canto ($0-1000+)',
      targetAudience: 'Marketing teams, creative agencies, and brand managers'
    }
  ];

  // Market analysis data
  const marketAnalysis = {
    "Content & Marketing": {
      marketSize: "$18.7B",
      growthRate: "15.2%",
      keyTrends: ["AI-powered content creation", "Video marketing automation", "Multi-channel personalization"]
    },
    "Design & Development": {
      marketSize: "$12.3B",
      growthRate: "18.4%",
      keyTrends: ["Design system automation", "Low-code platforms", "AI-assisted development"]
    },
    "Business Operations": {
      marketSize: "$28.9B",
      growthRate: "12.8%",
      keyTrends: ["Process automation", "AI-powered insights", "Remote work optimization"]
    },
    "Customer Experience": {
      marketSize: "$24.6B",
      growthRate: "14.3%",
      keyTrends: ["AI chatbots", "Omnichannel support", "Predictive customer service"]
    },
    "Data & Analytics": {
      marketSize: "$16.8B",
      growthRate: "17.9%",
      keyTrends: ["Real-time analytics", "AI-powered insights", "Predictive modeling"]
    },
    "E-commerce & Sales": {
      marketSize: "$22.1B",
      growthRate: "13.7%",
      keyTrends: ["Conversion optimization", "Customer behavior analytics", "AI-powered recommendations"]
    },
    "Cybersecurity & Compliance": {
      marketSize: "$15.2B",
      growthRate: "21.3%",
      keyTrends: ["AI-powered threat detection", "Zero-trust security", "Compliance automation"]
    },
    "Supply Chain & Logistics": {
      marketSize: "$19.8B",
      growthRate: "16.7%",
      keyTrends: ["Predictive analytics", "Real-time tracking", "AI optimization"]
    },
    "Financial Technology": {
      marketSize: "$25.4B",
      growthRate: "19.2%",
      keyTrends: ["AI-powered forecasting", "Automated compliance", "Real-time analytics"]
    },
    "Learning & Development": {
      marketSize: "$13.6B",
      growthRate: "14.8%",
      keyTrends: ["Adaptive learning", "AI content recommendations", "Mobile-first platforms"]
    },
    "IoT & Edge Computing": {
      marketSize: "$11.9B",
      growthRate: "23.1%",
      keyTrends: ["Edge AI", "Real-time processing", "Scalable architectures"]
    }
  };

  // Competitive advantages
  const competitiveAdvantages = [
    {
      title: "Specialized Focus",
      description: "Each of our 30 services is designed for a specific business need, ensuring deep functionality and expertise without feature bloat.",
      icon: "🎯"
    },
    {
      title: "AI Integration",
      description: "Advanced AI capabilities across all services for automation, intelligent insights, and predictive analytics.",
      icon: "🤖"
    },
    {
      title: "Seamless Integration",
      description: "All services work together seamlessly with unified authentication, data sharing, and cross-service workflows.",
      icon: "🔗"
    },
    {
      title: "Transparent Pricing",
      description: "Clear, predictable pricing with no hidden fees, complex tier structures, or surprise charges.",
      icon: "💰"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, regular security audits, and enterprise-grade infrastructure.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support with dedicated success managers and comprehensive documentation.",
      icon: "🔄"
    },
    {
      title: "Rapid Implementation",
      description: "Get up and running in minutes with our pre-built templates, integrations, and guided setup processes.",
      icon: "⚡"
    },
    {
      title: "Scalable Architecture",
      description: "Built for growth with auto-scaling, performance optimization, and enterprise-grade reliability.",
      icon: "📈"
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Specialized Business Solutions</title>
        <meta name="description" content="Discover our specialized micro SaaS solutions for content creation, design systems, performance monitoring, SEO automation, chatbots, and business intelligence. Competitive pricing with 14-day free trials." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Specialized business solutions with competitive pricing and free trials." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Micro SaaS Solutions
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Specialized Tools for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Every Business Need</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-12">
              30 specialized micro SaaS solutions covering content creation, video generation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, API infrastructure, e-commerce analytics, legal document generation, 
              HR management, AI customer support, data backup, AI code assistance, cybersecurity monitoring, supply chain analytics, 
              market research, financial planning, CRM systems, learning management, IoT management, and analytics dashboards. 
              Focused, affordable solutions that deliver specific value 
              without the complexity of enterprise platforms. Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Services Highlight */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our top-performing solutions that customers love for their reliability, ease of use, and exceptional value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.filter(service => service.popular).map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.tagline}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>
                    <p className="text-sm text-green-400 font-medium">✓ 14-day free trial</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  <Button
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-400 mb-6">
                All popular services include enterprise features, priority support, and advanced analytics.
              </p>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                View All 30 Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Understand the advantages of our focused approach and competitive market positioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{advantage.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                    {advantage.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Categories */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Solutions for Every Business Need
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our micro SaaS portfolio is organized into key business categories, ensuring you find the right solution for your specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: 'Content & Marketing',
                  services: ['AI Content Generator Pro', 'AI Video Generator', 'Email Marketing Automation', 'Social Media Scheduler', 'SEO Automation Suite'],
                  icon: '📢',
                  color: 'from-pink-500 to-rose-600'
                },
                {
                  category: 'Design & Development',
                  services: ['Design System Builder', 'App Performance Monitor', 'API Gateway & Management', 'Project Management Hub'],
                  icon: '⚡',
                  color: 'from-violet-500 to-purple-600'
                },
                {
                  category: 'Analytics & Intelligence',
                  services: ['Business Intelligence Hub', 'Customer Feedback Analytics', 'E-commerce Analytics Platform', 'Data Backup & Recovery'],
                  icon: '📊',
                  color: 'from-emerald-500 to-green-600'
                },
                {
                  category: 'Business Operations',
                  services: ['Invoice & Billing Manager', 'AI Chatbot Platform', 'AI Customer Support', 'HR Management Suite', 'Legal Document Generator'],
                  icon: '🏢',
                  color: 'from-blue-500 to-indigo-600'
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-400 text-sm flex items-center">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Our Micro SaaS Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our portfolio of 30 specialized solutions covers the most critical business needs, from content creation 
                and video generation to API management and data protection. Each solution is designed to solve a specific 
                business problem with deep functionality and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-${service.textColor.split('-')[1]}-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-${service.textColor.split('-')[1]}-500/10`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mr-4`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-gray-400">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>
                    <p className="text-sm text-gray-500">14-day free trial included</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <Button
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}
                    >
                      Start Free Trial
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Market Position</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{service.marketPosition}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Target Audience</p>
                      <p className="text-sm text-gray-400">{service.targetAudience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services on ZionTechGroup.com Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Services Available on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ZionTechGroup.com</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Access our complete portfolio of micro SaaS solutions through our main platform. Each service is optimized 
                for performance, security, and user experience with enterprise-grade infrastructure.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {microSaasServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                    <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">{service.name}</h4>
                      <p className="text-xs text-gray-400 truncate">{service.price}{service.period}</p>
                    </div>
                    <a 
                      href={service.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Visit ZionTechGroup.com
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Market Analysis & Trends
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the micro SaaS landscape and positioning our services for maximum impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {Object.entries(marketAnalysis).map(([category, data], index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-2xl font-bold text-blue-400">{data.marketSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Growth Rate:</span>
                      <span className="text-xl font-bold text-green-400">{data.growthRate}</span>
                    </div>
                    <div className="pt-4">
                      <span className="text-gray-400 text-sm">Key Trends:</span>
                      <ul className="mt-2 space-y-1">
                        {data.keyTrends.map((trend, trendIndex) => (
                          <li key={trendIndex} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {trend}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Market Positioning Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Competitive Pricing & Market Positioning
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our micro SaaS solutions are priced competitively while offering enterprise-grade features. 
                Compare our pricing with industry leaders and see why businesses choose Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Our Pricing Strategy</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Starting Price Range:</span>
                    <span className="text-xl font-bold text-green-400">$39 - $129/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-xl font-bold text-blue-400">14 Days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">No Setup Fees:</span>
                    <span className="text-xl font-bold text-green-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Enterprise Features:</span>
                    <span className="text-xl font-bold text-blue-400">Included</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Market Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Enterprise Platforms:</span>
                    <span className="text-xl font-bold text-red-400">$500 - $5000/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Mid-Market Solutions:</span>
                    <span className="text-xl font-bold text-yellow-400">$200 - $800/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Our Solutions:</span>
                    <span className="text-xl font-bold text-green-400">$39 - $129/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Savings:</span>
                    <span className="text-xl font-bold text-green-400">60-90%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                All services include enterprise-grade security, 24/7 support, and seamless integration capabilities.
              </p>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                View Detailed Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <div className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the unique advantages that set our specialized solutions apart from complex enterprise platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose from our portfolio of 30 specialized solutions. All services include comprehensive documentation, 
              dedicated support, enterprise-grade reliability, and 14-day free trials. Start with one solution 
              and add more as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
              >
                View All Pricing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}