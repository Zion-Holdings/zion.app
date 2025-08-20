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
    // New enhanced services
    {
      name: 'AI Meeting Transcription Pro',
      tagline: 'Transform meetings into actionable insights',
      price: '$59',
      period: '/month',
      description: 'AI-powered meeting transcription and summarization with action item extraction.',
      features: [
        'Real-time transcription (15+ languages)',
        'AI-powered meeting summaries',
        'Action item & task extraction',
        'Speaker identification',
        'Integration with calendar & video platforms',
        'Custom vocabulary training',
        'Export to multiple formats',
        'Team collaboration features'
      ],
      popular: false,
      icon: '🎤',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ai-meeting-transcription',
      marketPosition: 'Competitive with Otter.ai ($10-20), Rev ($1.25-1.50), and Trint ($60-120)',
      targetAudience: 'Business professionals, consultants, and remote teams'
    },
    {
      name: 'Automated Invoice Processing',
      tagline: 'Streamline financial operations',
      price: '$89',
      period: '/month',
      description: 'AI-powered invoice automation with approval workflows and fraud detection.',
      features: [
        'AI-powered data extraction',
        'Automated approval workflows',
        'Payment processing integration',
        'Fraud detection & validation',
        'Compliance & audit trails',
        'Multi-currency support',
        'Real-time reporting',
        'ERP system integration'
      ],
      popular: false,
      icon: '🧾',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/automated-invoice-processing',
      marketPosition: 'Competitive with Bill.com ($39-99), Tipalti ($149-599), and AvidXchange ($0-500)',
      targetAudience: 'Finance teams, accounting firms, and businesses with high invoice volume'
    },
    {
      name: 'Customer Churn Prediction',
      tagline: 'Predict and prevent customer churn',
      price: '$79',
      period: '/month',
      description: 'AI-powered analytics to predict customer churn and implement retention strategies.',
      features: [
        'AI-powered churn prediction',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Automated retention campaigns',
        'ROI tracking & reporting',
        'Customer segmentation',
        'Real-time alerts',
        'Integration with CRM systems'
      ],
      popular: false,
      icon: '📉',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/customer-churn-prediction',
      marketPosition: 'Competitive with Gainsight ($0-500), ChurnZero ($0-500), and Totango ($0-500)',
      targetAudience: 'SaaS companies, subscription businesses, and customer success teams'
    },
    {
      name: 'API Rate Limiter',
      tagline: 'Protect your APIs from abuse',
      price: '$29',
      period: '/month',
      description: 'Advanced API protection with intelligent rate limiting and security features.',
      features: [
        'Intelligent rate limiting',
        'DDoS protection',
        'API key management',
        'Real-time monitoring',
        'Custom rules & policies',
        'Geographic restrictions',
        'Analytics & reporting',
        'Webhook notifications'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/api-rate-limiter',
      marketPosition: 'Competitive with Cloudflare ($20-200), AWS API Gateway ($3.50-12), and Kong ($0-250)',
      targetAudience: 'Developers, API providers, and platform companies'
    },
    {
      name: 'Email Validation Service',
      tagline: 'Real-time email verification',
      price: '$19',
      period: '/month',
      description: 'Verify email addresses in real-time to improve deliverability and reduce bounces.',
      features: [
        'Real-time validation',
        'Syntax checking',
        'Domain verification',
        'Disposable email detection',
        'Bulk validation',
        'API integration',
        'Detailed reporting',
        'Webhook support'
      ],
      popular: false,
      icon: '✅',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/email-validation-service',
      marketPosition: 'Competitive with Zero Bounce ($15-99), NeverBounce ($0.008-0.016), and Kickbox ($0.008-0.016)',
      targetAudience: 'Email marketers, sales teams, and lead generation companies'
    },
    {
      name: 'Form Builder Pro',
      tagline: 'Create powerful forms without coding',
      price: '$25',
      period: '/month',
      description: 'Drag-and-drop form builder with advanced features and integrations.',
      features: [
        'Drag-and-drop builder',
        '100+ form templates',
        'Advanced validation',
        'File uploads',
        'Payment integration',
        'Multi-step forms',
        'Analytics & reporting',
        'Zapier integration'
      ],
      popular: false,
      icon: '📋',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/form-builder-pro',
      marketPosition: 'Competitive with Typeform ($25-120), JotForm ($34-99), and Formstack ($50-199)',
      targetAudience: 'Business owners, marketers, and web developers'
    },
    {
      name: 'Invoice Generator',
      tagline: 'Professional invoicing made simple',
      price: '$15',
      period: '/month',
      description: 'Create and send professional invoices with automated payment tracking.',
      features: [
        'Professional templates',
        'Automated numbering',
        'Payment tracking',
        'Multiple currencies',
        'Tax calculations',
        'Client management',
        'Recurring invoices',
        'Payment gateway integration'
      ],
      popular: false,
      icon: '🧾',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/invoice-generator',
      marketPosition: 'Competitive with FreshBooks ($15-55), Wave (Free), and Zoho Invoice ($9-29)',
      targetAudience: 'Freelancers, small businesses, and consultants'
    },
    {
      name: 'Screenshot API',
      tagline: 'Convert websites to images',
      price: '$12',
      period: '/month',
      description: 'Capture high-quality screenshots of any website with advanced options.',
      features: [
        'High-resolution screenshots',
        'Custom viewport sizes',
        'JavaScript rendering',
        'PDF generation',
        'Batch processing',
        'API access',
        'Webhook support',
        'CDN delivery'
      ],
      popular: false,
      icon: '📸',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      link: 'https://ziontechgroup.com/screenshot-api',
      marketPosition: 'Competitive with Browserless ($0.0015-0.003), Puppeteer ($0.001-0.002), and Screenshotapi.net ($0.001-0.002)',
      targetAudience: 'Developers, QA teams, and content creators'
    },
    {
      name: 'AI Video Editor Pro',
      tagline: 'Professional video editing with AI',
      price: '$79',
      period: '/month',
      description: 'AI-powered video editing with automated enhancement and professional tools.',
      features: [
        'AI-powered editing',
        'Auto-caption generation',
        'Background removal',
        'Video enhancement',
        'Template library',
        'Multi-format export',
        'Cloud rendering',
        'Team collaboration'
      ],
      popular: false,
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-video-editor-pro',
      marketPosition: 'Competitive with Runway ($12-76), Synthesia ($22-67), and Lumen5 ($19-79)',
      targetAudience: 'Content creators, marketers, and video professionals'
    },
    {
      name: 'Cloud Cost Optimizer',
      tagline: 'Reduce cloud spending by 30%',
      price: '$99',
      period: '/month',
      description: 'Intelligent cloud cost management with automated optimization recommendations.',
      features: [
        'Cost analysis & tracking',
        'Automated optimization',
        'Reserved instance management',
        'Spot instance automation',
        'Cost alerts & budgets',
        'Multi-cloud support',
        'ROI reporting',
        'Integration with major clouds'
      ],
      popular: false,
      icon: '☁️',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      marketPosition: 'Competitive with CloudHealth ($0-500), CloudCheckr ($0-500), and AWS Cost Explorer (Free)',
      targetAudience: 'DevOps teams, cloud architects, and IT managers'
    },
    {
      name: 'Legal Document Generator',
      tagline: 'AI-powered legal document creation',
      price: '$69',
      period: '/month',
      description: 'Generate legal documents with AI assistance and compliance checking.',
      features: [
        'Document templates',
        'AI-powered customization',
        'Compliance checking',
        'E-signature integration',
        'Version control',
        'Legal research tools',
        'Client portal',
        'Billing integration'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/legal-document-generator',
      marketPosition: 'Competitive with Rocket Lawyer ($39.99-99.99), LegalZoom ($0-299), and LawDepot ($0-39.99)',
      targetAudience: 'Lawyers, legal professionals, and small businesses'
    },
    {
      name: 'HR Automation Suite',
      tagline: 'Streamline HR operations',
      price: '$89',
      period: '/month',
      description: 'Comprehensive HR automation for recruitment, onboarding, and employee management.',
      features: [
        'Applicant tracking',
        'Automated onboarding',
        'Performance management',
        'Time tracking',
        'Payroll integration',
        'Compliance monitoring',
        'Employee self-service',
        'Analytics & reporting'
      ],
      popular: false,
      icon: '👥',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/hr-automation-suite',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Workday ($0-100), and ADP ($0-200)',
      targetAudience: 'HR professionals, small businesses, and growing companies'
    },
    {
      name: 'AI Customer Onboarding',
      tagline: 'Personalized customer onboarding',
      price: '$79',
      period: '/month',
      description: 'AI-powered customer onboarding with personalized experiences and progress tracking.',
      features: [
        'Personalized onboarding flows',
        'Progress tracking',
        'Interactive tutorials',
        'Success metrics',
        'Automated follow-ups',
        'Integration with CRMs',
        'Multi-language support',
        'Analytics dashboard'
      ],
      popular: false,
      icon: '🚀',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-customer-onboarding',
      marketPosition: 'Competitive with Appcues ($0-249), WalkMe ($0-500), and Pendo ($0-2000)',
      targetAudience: 'SaaS companies, product managers, and customer success teams'
    },
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
    },
    {
      name: 'AI-Powered Lead Scoring',
      tagline: 'Intelligent lead qualification',
      price: '$69',
      period: '/month',
      description: 'Automate lead qualification with AI-powered scoring, behavioral analysis, and conversion prediction.',
      features: [
        'AI-powered lead scoring',
        'Behavioral pattern analysis',
        'Conversion probability prediction',
        'Automated lead routing',
        'Real-time scoring updates',
        'Integration with marketing & sales tools',
        'Custom scoring models',
        'Performance analytics'
      ],
      popular: false,
      icon: '🎯',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-powered-lead-scoring',
      marketPosition: 'Competitive with HubSpot ($45-1200), Marketo ($0-1000+), and Pardot ($0-1000+)',
      targetAudience: 'Sales teams, marketing professionals, and B2B companies'
    },
    {
      name: 'Real-Time Customer Analytics',
      tagline: 'Live customer behavior insights',
      price: '$94',
      period: '/month',
      description: 'Monitor customer behavior in real-time with advanced analytics, heatmaps, and conversion optimization.',
      features: [
        'Real-time user behavior tracking',
        'Advanced heatmap analytics',
        'Conversion funnel analysis',
        'A/B testing automation',
        'Customer journey mapping',
        'Mobile app analytics',
        'Integration with major platforms',
        'Custom event tracking'
      ],
      popular: false,
      icon: '📱',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      link: 'https://ziontechgroup.com/real-time-customer-analytics',
      marketPosition: 'Competitive with Hotjar ($32-500), Crazy Egg ($24-99), and FullStory ($0-1000+)',
      targetAudience: 'UX researchers, product managers, and digital marketers'
    },
    {
      name: 'AI Content Optimization',
      tagline: 'Intelligent content performance',
      price: '$74',
      period: '/month',
      description: 'Optimize content performance with AI-powered recommendations, SEO analysis, and engagement prediction.',
      features: [
        'AI-powered content recommendations',
        'SEO performance analysis',
        'Engagement prediction',
        'Content gap analysis',
        'Competitor content tracking',
        'Performance benchmarking',
        'Integration with CMS platforms',
        'Automated optimization suggestions'
      ],
      popular: false,
      icon: '📝',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-content-optimization',
      marketPosition: 'Competitive with Clearscope ($170-350), MarketMuse ($0-1000+), and Frase ($44.95-114.95)',
      targetAudience: 'Content marketers, SEO specialists, and digital publishers'
    },
    {
      name: 'Predictive Maintenance Platform',
      tagline: 'AI-powered equipment monitoring',
      price: '$149',
      period: '/month',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and real-time monitoring.',
      features: [
        'AI-powered failure prediction',
        'Real-time equipment monitoring',
        'Predictive maintenance scheduling',
        'Performance analytics',
        'Integration with IoT sensors',
        'Maintenance cost optimization',
        'Compliance reporting',
        'Mobile app access'
      ],
      popular: false,
      icon: '🔧',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      link: 'https://ziontechgroup.com/predictive-maintenance-platform',
      marketPosition: 'Competitive with PTC ThingWorx ($0-1000+), GE Predix ($0-1000+), and Siemens Mindsphere ($0-1000+)',
      targetAudience: 'Manufacturing companies, facility managers, and industrial operations'
    },
    {
      name: 'AI-Powered Email Security',
      tagline: 'Advanced threat protection',
      price: '$84',
      period: '/month',
      description: 'Protect against email threats with AI-powered detection, phishing prevention, and advanced security.',
      features: [
        'AI-powered threat detection',
        'Phishing & malware protection',
        'Advanced spam filtering',
        'Email encryption',
        'Compliance monitoring',
        'Real-time threat intelligence',
        'Integration with email platforms',
        'Security analytics dashboard'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/ai-powered-email-security',
      marketPosition: 'Competitive with Proofpoint ($0-1000+), Mimecast ($0-1000+), and Barracuda ($0-1000+)',
      targetAudience: 'IT security teams, compliance officers, and enterprise organizations'
    },
    {
      name: 'Dynamic Pricing Engine',
      tagline: 'AI-powered pricing optimization',
      price: '$119',
      period: '/month',
      description: 'Optimize pricing strategies with AI-powered dynamic pricing, competitor analysis, and demand forecasting.',
      features: [
        'AI-powered pricing optimization',
        'Competitor price monitoring',
        'Demand forecasting',
        'Dynamic pricing rules',
        'Revenue optimization',
        'Price elasticity analysis',
        'Integration with e-commerce platforms',
        'Real-time price updates'
      ],
      popular: false,
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/dynamic-pricing-engine',
      marketPosition: 'Competitive with Pricefx ($0-1000+), Vendavo ($0-1000+), and PROS ($0-1000+)',
      targetAudience: 'E-commerce businesses, retail companies, and pricing strategists'
    },
    {
      name: 'AI-Powered Customer Segmentation',
      tagline: 'Intelligent customer targeting platform',
      price: '$89',
      period: '/month',
      description: 'Create precise customer segments with AI-powered behavioral analysis and predictive modeling.',
      features: [
        'AI-powered segmentation',
        'Behavioral pattern analysis',
        'Predictive customer modeling',
        'Dynamic segment updates',
        'Cross-channel data integration',
        'Segmentation performance analytics',
        'Integration with marketing tools',
        'Automated campaign targeting'
      ],
      popular: false,
      icon: '🎯',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/ai-powered-customer-segmentation',
      marketPosition: 'Competitive with Segment ($0-1000+), Amplitude ($0-1000+), and Mixpanel ($0-1000+)',
      targetAudience: 'Marketing teams, data analysts, and customer experience professionals'
    },
    // New enhanced services
    {
      name: 'AI Landing Page Builder',
      tagline: 'Convert visitors to customers',
      price: '$59',
      period: '/month',
      description: 'AI-powered landing page creation with conversion optimization and A/B testing capabilities.',
      features: [
        'AI-powered page generation',
        'Conversion optimization',
        'A/B testing automation',
        'Mobile-responsive templates',
        'SEO optimization',
        'Analytics & heatmaps',
        'Integration with marketing tools',
        'Custom domain support'
      ],
      popular: true,
      icon: '🚀',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ai-landing-page-builder',
      marketPosition: 'Competitive with Unbounce ($80-160), Leadpages ($37-199), and Instapage ($199-999)',
      targetAudience: 'Marketers, agencies, and e-commerce businesses'
    },
    {
      name: 'AI Website Optimizer',
      tagline: 'Boost your website performance',
      price: '$49',
      period: '/month',
      description: 'AI-powered website optimization for speed, SEO, and conversion rate improvement.',
      features: [
        'Performance optimization',
        'SEO enhancement',
        'Conversion rate optimization',
        'Mobile optimization',
        'Core Web Vitals monitoring',
        'Automated fixes',
        'Performance reporting',
        'Integration with analytics'
      ],
      popular: false,
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/ai-website-optimizer',
      marketPosition: 'Competitive with GTmetrix (Free-$15), PageSpeed Insights (Free), and WebPageTest (Free)',
      targetAudience: 'Web developers, digital marketers, and business owners'
    },
    {
      name: 'AI Churn Prediction Pro',
      tagline: 'Predict and prevent customer churn',
      price: '$89',
      period: '/month',
      description: 'Advanced AI-powered churn prediction with automated retention strategies and customer insights.',
      features: [
        'AI churn prediction models',
        'Behavioral pattern analysis',
        'Automated retention campaigns',
        'Customer health scoring',
        'Real-time alerts',
        'ROI tracking',
        'Integration with CRMs',
        'Custom prediction models'
      ],
      popular: false,
      icon: '📉',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-churn-prediction-pro',
      marketPosition: 'Competitive with Gainsight ($0-500), ChurnZero ($0-500), and Totango ($0-500)',
      targetAudience: 'SaaS companies, subscription businesses, and customer success teams'
    },
    {
      name: 'AI Email Deliverability Monitor',
      tagline: 'Ensure your emails reach inboxes',
      price: '$39',
      period: '/month',
      description: 'Monitor and improve email deliverability with AI-powered insights and automated optimization.',
      features: [
        'Deliverability monitoring',
        'Sender reputation tracking',
        'Spam score analysis',
        'Automated optimization',
        'Blacklist monitoring',
        'Performance analytics',
        'Integration with ESPs',
        'Real-time alerts'
      ],
      popular: false,
      icon: '📧',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-email-deliverability',
      marketPosition: 'Competitive with 250ok ($0-500), GlockApps ($0-100), and Sender Score (Free)',
      targetAudience: 'Email marketers, sales teams, and marketing agencies'
    },
    {
      name: 'AI Customer Journey Mapper',
      tagline: 'Map and optimize customer experiences',
      price: '$79',
      period: '/month',
      description: 'AI-powered customer journey mapping with behavioral analysis and optimization recommendations.',
      features: [
        'Journey mapping automation',
        'Behavioral analysis',
        'Touchpoint optimization',
        'Conversion funnel analysis',
        'Customer segmentation',
        'Journey analytics',
        'Integration with analytics tools',
        'Custom journey templates'
      ],
      popular: false,
      icon: '🗺️',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-customer-journey',
      marketPosition: 'Competitive with FullStory ($0-1000+), Hotjar ($0-99), and Crazy Egg ($24-99)',
      targetAudience: 'UX designers, product managers, and customer experience teams'
    },
    {
      name: 'AI Contract Analysis Platform',
      tagline: 'Intelligent contract review and analysis',
      price: '$99',
      period: '/month',
      description: 'AI-powered contract analysis with risk assessment, compliance checking, and automated insights.',
      features: [
        'AI contract review',
        'Risk assessment',
        'Compliance checking',
        'Automated insights',
        'Contract templates',
        'Version control',
        'Integration with legal tools',
        'Custom analysis rules'
      ],
      popular: false,
      icon: '📄',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/ai-contract-analysis',
      marketPosition: 'Competitive with DocuSign ($10-25), ContractPodAi ($0-1000+), and Evisort ($0-1000+)',
      targetAudience: 'Legal professionals, contract managers, and compliance officers'
    },
    {
      name: 'AI Sales Forecasting Engine',
      tagline: 'Predict sales with AI accuracy',
      price: '$89',
      period: '/month',
      description: 'AI-powered sales forecasting with predictive analytics and revenue optimization insights.',
      features: [
        'AI sales forecasting',
        'Predictive analytics',
        'Revenue optimization',
        'Pipeline analysis',
        'Performance tracking',
        'Custom forecasting models',
        'Integration with CRMs',
        'Real-time insights'
      ],
      popular: false,
      icon: '📊',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ai-sales-forecasting',
      marketPosition: 'Competitive with Clari ($0-1000+), Gong ($0-1000+), and Chorus ($0-1000+)',
      targetAudience: 'Sales managers, revenue operations teams, and business analysts'
    },
    {
      name: 'AI Customer Service Analytics',
      tagline: 'Optimize customer service performance',
      price: '$69',
      period: '/month',
      description: 'AI-powered analytics for customer service optimization and performance improvement.',
      features: [
        'Service performance analytics',
        'Customer satisfaction tracking',
        'Response time optimization',
        'Agent performance metrics',
        'Automated insights',
        'Integration with help desks',
        'Custom reporting',
        'Real-time monitoring'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/ai-customer-service-analytics',
      marketPosition: 'Competitive with Zendesk ($49-215), Freshdesk ($15-79), and Intercom ($39-499)',
      targetAudience: 'Customer service managers, support teams, and operations managers'
    },
    {
      name: 'AI Product Recommendation Engine',
      tagline: 'Boost sales with intelligent recommendations',
      price: '$79',
      period: '/month',
      description: 'AI-powered product recommendation engine for e-commerce and content platforms.',
      features: [
        'AI recommendation algorithms',
        'Personalized suggestions',
        'Behavioral analysis',
        'A/B testing',
        'Performance analytics',
        'Integration with e-commerce platforms',
        'Custom recommendation rules',
        'Real-time optimization'
      ],
      popular: false,
      icon: '🎯',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-product-recommendations',
      marketPosition: 'Competitive with Algolia ($1-1000+), Elasticsearch ($0-1000+), and Amazon Personalize ($0-1000+)',
      targetAudience: 'E-commerce businesses, content platforms, and digital marketers'
    },
    {
      name: 'AI Fraud Detection System',
      tagline: 'Protect your business from fraud',
      price: '$119',
      period: '/month',
      description: 'AI-powered fraud detection with real-time monitoring and automated prevention measures.',
      features: [
        'Real-time fraud detection',
        'AI risk assessment',
        'Automated prevention',
        'Transaction monitoring',
        'Custom fraud rules',
        'Performance analytics',
        'Integration with payment systems',
        '24/7 monitoring'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      marketPosition: 'Competitive with Sift ($0-1000+), Signifyd ($0-1000+), and Riskified ($0-1000+)',
      targetAudience: 'E-commerce businesses, financial institutions, and online platforms'
    },
    {
      name: 'AI Inventory Forecasting',
      tagline: 'Optimize inventory with AI predictions',
      price: '$89',
      period: '/month',
      description: 'AI-powered inventory forecasting with demand prediction and optimization recommendations.',
      features: [
        'AI demand forecasting',
        'Inventory optimization',
        'Seasonal trend analysis',
        'Automated reordering',
        'Cost optimization',
        'Integration with ERP systems',
        'Custom forecasting models',
        'Real-time insights'
      ],
      popular: false,
      icon: '📦',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-inventory-forecasting',
      marketPosition: 'Competitive with TradeGecko ($0-1000+), Zoho Inventory ($0-1000+), and Fishbowl ($0-1000+)',
      targetAudience: 'Retail businesses, manufacturers, and supply chain managers'
    },
    {
      name: 'AI Social Media Automation',
      tagline: 'Automate your social media presence',
      price: '$49',
      period: '/month',
      description: 'AI-powered social media automation with content scheduling and engagement optimization.',
      features: [
        'AI content scheduling',
        'Engagement optimization',
        'Multi-platform management',
        'Content calendar',
        'Performance analytics',
        'Hashtag optimization',
        'Integration with design tools',
        'Automated responses'
      ],
      popular: false,
      icon: '📱',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ai-social-media-automation',
      marketPosition: 'Competitive with Buffer ($15-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, marketers, and content creators'
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
      description: "Each of our 65+ services is designed for a specific business need, ensuring deep functionality and expertise without feature bloat.",
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
              65+ specialized micro SaaS solutions covering AI-powered content creation, video generation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, API infrastructure, e-commerce analytics, legal document generation, 
              HR management, AI customer support, data backup, AI code assistance, cybersecurity monitoring, supply chain analytics, 
              market research, financial planning, CRM systems, learning management, IoT management, analytics dashboards, 
              meeting transcription, invoice automation, churn prediction, lead scoring, real-time analytics, content optimization, 
              predictive maintenance, email security, dynamic pricing, customer segmentation, sales intelligence, content calendar optimization, 
              email deliverability, landing page building, customer journey mapping, contract analysis, sales forecasting, customer service analytics,
              product recommendations, fraud detection, inventory forecasting, customer onboarding, social media automation, fraud detection, 
              inventory forecasting, and more. Focused, affordable solutions that deliver specific value 
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
                View All 55 Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* New Services Highlight */}
        <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Latest Additions to Our Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Discover our newest specialized solutions designed to address emerging business challenges with cutting-edge AI technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'AI Meeting Transcription Pro',
                  description: 'Transform meetings into actionable insights with AI-powered transcription and summarization.',
                  price: '$59/month',
                  icon: '🎤',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  name: 'Automated Invoice Processing',
                  description: 'Streamline financial operations with AI-powered invoice automation and approval workflows.',
                  price: '$89/month',
                  icon: '🧾',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  name: 'Customer Churn Prediction',
                  description: 'Predict and prevent customer churn with AI-powered analytics and retention strategies.',
                  price: '$79/month',
                  icon: '📉',
                  color: 'from-red-500 to-pink-600'
                },
                {
                  name: 'AI-Powered Lead Scoring',
                  description: 'Automate lead qualification with intelligent scoring and conversion prediction.',
                  price: '$69/month',
                  icon: '🎯',
                  color: 'from-purple-500 to-violet-600'
                },
                {
                  name: 'Real-Time Customer Analytics',
                  description: 'Monitor customer behavior in real-time with advanced analytics and heatmaps.',
                  price: '$94/month',
                  icon: '📱',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  name: 'Predictive Maintenance Platform',
                  description: 'Prevent equipment failures with AI-powered predictive maintenance and monitoring.',
                  price: '$149/month',
                  icon: '🔧',
                  color: 'from-gray-500 to-slate-600'
                }
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl`}>
                      {service.icon}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                      New
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <p className="text-sm text-blue-400 font-medium">✓ 14-day free trial</p>
                  </div>

                  <Button
                    href="#services"
                    variant="outline"
                    size="lg"
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-400 mb-6">
                All new services include enterprise features, priority support, and comprehensive documentation.
              </p>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                Explore All New Services
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
                  services: ['AI Content Generator Pro', 'AI Video Generator', 'Email Marketing Automation', 'Social Media Scheduler', 'SEO Automation Suite', 'AI Content Optimization'],
                  icon: '📢',
                  color: 'from-pink-500 to-rose-600'
                },
                {
                  category: 'Design & Development',
                  services: ['Design System Builder', 'App Performance Monitor', 'API Gateway & Management', 'Project Management Hub', 'AI Code Assistant Pro'],
                  icon: '⚡',
                  color: 'from-violet-500 to-purple-600'
                },
                {
                  category: 'Analytics & Intelligence',
                  services: ['Business Intelligence Hub', 'Customer Feedback Analytics', 'E-commerce Analytics Platform', 'Data Backup & Recovery', 'Real-Time Customer Analytics', 'AI-Powered Customer Segmentation'],
                  icon: '📊',
                  color: 'from-emerald-500 to-green-600'
                },
                {
                  category: 'Business Operations',
                  services: ['Invoice & Billing Manager', 'AI Chatbot Platform', 'AI Customer Support', 'HR Management Suite', 'Legal Document Generator', 'Automated Invoice Processing'],
                  icon: '🏢',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  category: 'AI & Automation',
                  services: ['AI Meeting Transcription Pro', 'AI-Powered Lead Scoring', 'Customer Churn Prediction', 'Predictive Maintenance Platform', 'Dynamic Pricing Engine'],
                  icon: '🤖',
                  color: 'from-purple-500 to-violet-600'
                },
                {
                  category: 'Security & Compliance',
                  services: ['Cybersecurity Threat Monitor', 'AI-Powered Email Security', 'Data Backup & Recovery'],
                  icon: '🔒',
                  color: 'from-red-500 to-pink-600'
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
              Our portfolio of 55 specialized solutions covers the most critical business needs, from content creation 
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

        {/* Business Value & ROI Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                Proven Business Value
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real ROI for Real Businesses
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our micro SaaS solutions deliver measurable business impact with proven ROI, competitive pricing, 
                and enterprise-grade features that scale with your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Cost Savings */}
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cost Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">vs Enterprise Platforms:</span>
                    <span className="text-2xl font-bold text-emerald-400">60-90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">vs Mid-Market Solutions:</span>
                    <span className="text-xl font-bold text-blue-400">40-70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Setup Fees:</span>
                    <span className="text-xl font-bold text-green-400">$0</span>
                  </div>
                </div>
              </div>

              {/* Time to Value */}
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Time to Value</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Implementation:</span>
                    <span className="text-2xl font-bold text-emerald-400">Hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">vs Enterprise:</span>
                    <span className="text-xl font-bold text-red-400">Weeks/Months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-xl font-bold text-green-400">14 Days</span>
                  </div>
                </div>
              </div>

              {/* Business Impact */}
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-white mb-4">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">ROI Timeline:</span>
                    <span className="text-2xl font-bold text-emerald-400">30-90 Days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Scalability:</span>
                    <span className="text-xl font-bold text-blue-400">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Support:</span>
                    <span className="text-xl font-bold text-green-400">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                All services include enterprise-grade security, comprehensive documentation, and dedicated customer success support.
              </p>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
              >
                Get ROI Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

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

        {/* Latest AI-Powered Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Latest AI-Powered Services
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
                Cutting-Edge AI Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Our newest AI-powered micro SaaS services designed to give you a competitive edge with intelligent automation, 
                predictive analytics, and advanced insights that transform how you do business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Sales Intelligence */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      💼
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Sales Intelligence</h3>
                      <p className="text-blue-400 text-sm font-medium">$99/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-driven sales intelligence for lead generation, prospect research, and sales automation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-sales-intelligence"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Landing Page Builder */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🏠
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Landing Page Builder</h3>
                      <p className="text-orange-400 text-sm font-medium">$69/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-driven landing page builder with automated A/B testing and conversion optimization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-landing-page-builder"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Website Performance Optimizer */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Website Optimizer</h3>
                      <p className="text-yellow-400 text-sm font-medium">$89/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-driven website performance optimization with automated testing and speed improvements.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-website-optimizer"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Customer Churn Prediction */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      📉
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Churn Prediction</h3>
                      <p className="text-red-400 text-sm font-medium">$89/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered customer churn prediction with automated alerts and retention strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-churn-prediction"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Email Deliverability */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      📮
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Email Deliverability</h3>
                      <p className="text-green-400 text-sm font-medium">$79/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered email deliverability optimization with real-time monitoring and improvements.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-email-deliverability"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Customer Journey Mapping */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🗺️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Customer Journey</h3>
                      <p className="text-teal-400 text-sm font-medium">$99/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered customer journey mapping with automated insights and optimization recommendations.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-customer-journey"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                All new AI-powered services include advanced machine learning models, real-time optimization, and enterprise-grade security.
              </p>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                View All AI Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* New Real Micro SaaS Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                New Real Business Solutions
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
                Practical Solutions for Real Business Challenges
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Discover our latest micro SaaS services designed to solve actual business problems with proven ROI, 
                competitive pricing, and enterprise-grade features that scale with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Contract Analysis */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      ⚖️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Contract Analysis</h3>
                      <p className="text-indigo-400 text-sm font-medium">$129/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered contract analysis with risk assessment, compliance checking, and automated legal review.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-contract-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Sales Forecasting */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      📈
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Sales Forecasting</h3>
                      <p className="text-blue-400 text-sm font-medium">$149/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered sales forecasting with predictive analytics, pipeline optimization, and revenue prediction.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-sales-forecasting"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Product Recommendations */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Product Recommendations</h3>
                      <p className="text-purple-400 text-sm font-medium">$119/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered product recommendation engine with personalized suggestions and conversion optimization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-product-recommendations"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Fraud Detection */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🛡️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Fraud Detection</h3>
                      <p className="text-red-400 text-sm font-medium">$199/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered fraud detection with real-time monitoring, risk assessment, and automated threat response.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-fraud-detection"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Inventory Forecasting */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      📦
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Inventory Forecasting</h3>
                      <p className="text-green-400 text-sm font-medium">$139/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered inventory forecasting with demand prediction, optimization recommendations, and automated reordering.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-inventory-forecasting"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Customer Onboarding */}
              <div className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                      🚀
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Customer Onboarding</h3>
                      <p className="text-orange-400 text-sm font-medium">$79/month</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    AI-powered customer onboarding with personalized experiences, progress tracking, and activation optimization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">14-day free trial</span>
                    <Button
                      href="https://ziontechgroup.com/ai-customer-onboarding"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    >
                      Try Free
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                All new services include enterprise features, priority support, comprehensive documentation, and competitive pricing.
              </p>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                Explore All New Services
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
              Choose from our portfolio of 55+ specialized solutions. All services include comprehensive documentation, 
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