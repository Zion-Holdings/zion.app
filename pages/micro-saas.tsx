import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Mail, MessageCircle, Kanban, Headphones } from 'lucide-react';
import Button from '../components/ui/Button';
import ParticleBackground from '../components/ui/ParticleBackground';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      icon: '📊',
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-violet-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-cyan-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-rose-500/10'
    }
  ];
  
  const microSaasServices = [
    {
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
      category: 'Content & Marketing',
      realImplementation: true,
      techStack: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      name: 'Cloud Cost Optimizer',
      tagline: 'Reduce cloud spending by 30%',
      price: '$99',
      period: '/month',
      description: 'Intelligent cloud cost management and optimization. Identify waste, right-size resources, and automate cost controls across AWS, Azure, and GCP.',
      features: [
        'Real-time cost monitoring',
        'Automated resource optimization',
        'Cost anomaly detection',
        'Multi-cloud support (AWS, Azure, GCP)',
        'Budget alerts & controls',
        'Cost allocation tracking',
        'Optimization recommendations',
        'ROI tracking & reporting'
      ],
      popular: true,
      icon: '☁️',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      marketPosition: 'Competitive with CloudHealth ($0-500), CloudCheckr ($0-500), and Flexera ($0-1000)',
      targetAudience: 'DevOps teams, cloud architects, IT managers, and finance teams',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Development & DevOps',
      realImplementation: true,
      techStack: ['AWS SDK', 'Azure API', 'GCP API', 'React', 'Node.js']
    },
    {
      name: 'AI Marketing Automation',
      tagline: 'Intelligent marketing campaigns that convert',
      price: '$79',
      period: '/month',
      description: 'AI-powered marketing automation platform with email campaigns, social media management, and intelligent audience segmentation.',
      features: [
        'AI-powered email campaigns',
        'Smart audience segmentation',
        'Social media automation',
        'Marketing funnel optimization',
        'Real-time analytics & reporting',
        'A/B testing automation',
        'CRM integration',
        'Multi-channel campaign management'
      ],
      popular: false,
      icon: '📧',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-marketing-automation',
      marketPosition: 'Competitive with Mailchimp ($13-350), ActiveCampaign ($9-49), and HubSpot ($45-4500)',
      targetAudience: 'Marketing teams, small businesses, and digital agencies',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Content & Marketing',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'SendGrid API', 'Social Media APIs']
    },
    {
      name: 'AI Project Management',
      tagline: 'Smart project planning and team collaboration',
      price: '$89',
      period: '/month',
      description: 'AI-powered project management platform with intelligent task prioritization, resource allocation, and risk management.',
      features: [
        'AI task prioritization',
        'Smart resource allocation',
        'Risk assessment & mitigation',
        'Team productivity analytics',
        'Project timeline optimization',
        'Real-time collaboration',
        'Integration with popular tools',
        'Mobile project management'
      ],
      popular: false,
      icon: '📋',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-project-management',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, development teams, and business leaders',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Productivity & Collaboration',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket']
    },
    {
      name: 'AI Customer Support',
      tagline: '24/7 intelligent customer service',
      price: '$69',
      period: '/month',
      description: 'AI-powered customer support platform with intelligent chatbots, ticket management, and knowledge base automation.',
      features: [
        'AI chatbot with intent recognition',
        'Smart ticket routing',
        'Knowledge base automation',
        'Customer satisfaction analytics',
        'Multi-channel support',
        'Agent performance tracking',
        'Integration with popular CRMs',
        'Mobile support app'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-customer-support',
      marketPosition: 'Competitive with Zendesk ($19-99), Intercom ($74-499), and Freshdesk ($15-79)',
      targetAudience: 'Customer support teams, e-commerce businesses, and SaaS companies',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Customer Service',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'WebSocket']
    },
    {
      name: 'AI Sales Assistant',
      tagline: 'Boost sales with intelligent automation',
      price: '$89',
      period: '/month',
      description: 'AI-powered sales automation that helps close more deals. Lead scoring, follow-up automation, and sales intelligence.',
      features: [
        'Intelligent lead scoring',
        'Automated follow-up sequences',
        'Sales conversation analysis',
        'Pipeline optimization',
        'Revenue forecasting',
        'CRM integration',
        'Sales performance analytics',
        'Mobile sales app'
      ],
      popular: false,
      icon: '💼',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-sales-assistant',
      marketPosition: 'Competitive with HubSpot ($45-4500), Salesforce ($25-300), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, B2B companies, and sales managers',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Sales & CRM',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL']
    },
    {
      name: 'AI Legal Assistant',
      tagline: 'Legal document automation',
      price: '$149',
      period: '/month',
      description: 'Generate legal documents, contracts, and agreements with AI assistance. Reduce legal costs and streamline processes.',
      features: [
        'Contract template library',
        'AI-powered document review',
        'Legal compliance checking',
        'Electronic signature integration',
        'Document version control',
        'Legal research assistance',
        'Client portal access',
        'Integration with legal software'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      link: 'https://ziontechgroup.com/ai-legal-assistant',
      marketPosition: 'Competitive with DocuSign ($10-25), LegalZoom ($0-299), and Rocket Lawyer ($39.99-99.99)',
      targetAudience: 'Law firms, legal professionals, and businesses',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Legal & Compliance',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'DocuSign API']
    },
    {
      name: 'AI HR Assistant',
      tagline: 'Streamline HR operations',
      price: '$69',
      period: '/month',
      description: 'Automate HR processes with AI. From recruitment to performance management, make HR more efficient and human.',
      features: [
        'AI-powered candidate screening',
        'Automated interview scheduling',
        'Performance review automation',
        'Employee onboarding workflows',
        'HR analytics & reporting',
        'Compliance monitoring',
        'Employee self-service portal',
        'Integration with HRIS systems'
      ],
      popular: false,
      icon: '👥',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-hr-assistant',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Workday ($45-100), and ADP ($59-199)',
      targetAudience: 'HR teams, small to medium businesses, and HR managers',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Human Resources',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Calendar APIs']
    },
    {
      name: 'Business Intelligence Hub',
      tagline: 'Data-driven insights platform',
      price: '$99',
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics and automated reporting. Make data-driven decisions faster.',
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
      targetAudience: 'Data analysts, business intelligence teams, and executives',
      trialDays: 14,
      setupTime: '45 minutes',
      category: 'Analytics & Data',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'D3.js', 'PostgreSQL', 'Redis']
    },
    {
      name: 'AI Video Editor Pro',
      tagline: 'Professional video editing with AI',
      price: '$79',
      period: '/month',
      description: 'Create stunning videos with AI-powered editing tools. Automate tedious tasks and focus on creative storytelling.',
      features: [
        'AI-powered scene detection',
        'Automated video enhancement',
        'Smart subtitle generation',
        'Background music matching',
        'Video templates library',
        'Multi-format export',
        'Cloud collaboration',
        'Integration with popular platforms'
      ],
      popular: true,
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-video-editor-pro',
      marketPosition: 'Competitive with Lumen5 ($19-79), Synthesia ($30-99), and Runway ($12-76)',
      targetAudience: 'Content creators, marketers, and video professionals',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Content & Marketing',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'FFmpeg', 'OpenAI API', 'AWS S3']
    },
    {
      name: 'Email Marketing Automation',
      tagline: 'Smart email campaigns that convert',
      price: '$29',
      period: '/month',
      description: 'Create personalized email campaigns with AI-powered automation. Increase open rates and conversions with smart segmentation.',
      features: [
        'AI-powered subject line optimization',
        'Smart audience segmentation',
        'Behavioral triggers',
        'A/B testing automation',
        'Email template library',
        'Analytics & reporting',
        'GDPR compliance tools',
        'Integration with popular CRMs'
      ],
      popular: false,
      icon: '📧',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/email-marketing-automation',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($9-29), and ActiveCampaign ($9-49)',
      targetAudience: 'Small businesses, marketers, and e-commerce stores',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Content & Marketing',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'SendGrid API', 'PostgreSQL']
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Automate your social presence',
      price: '$19',
      period: '/month',
      description: 'Schedule and automate your social media posts across multiple platforms. Save time and maintain consistent engagement.',
      features: [
        'Multi-platform scheduling',
        'AI-powered optimal timing',
        'Content calendar management',
        'Hashtag suggestions',
        'Analytics & insights',
        'Team collaboration',
        'Content recycling',
        'Integration with Canva & Unsplash'
      ],
      popular: false,
      icon: '📱',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/social-media-scheduler',
      marketPosition: 'Competitive with Buffer ($6-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, small businesses, and influencers',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Content & Marketing',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'Social Media APIs', 'PostgreSQL']
    },
    {
      name: 'Invoice & Billing Manager',
      tagline: 'Streamline your invoicing process',
      price: '$39',
      period: '/month',
      description: 'Professional invoicing and billing management with automated reminders, payment tracking, and financial reporting.',
      features: [
        'Professional invoice templates',
        'Automated payment reminders',
        'Payment gateway integration',
        'Expense tracking',
        'Financial reporting',
        'Multi-currency support',
        'Client portal access',
        'Mobile app access'
      ],
      popular: false,
      icon: '🧾',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/invoice-billing-manager',
      marketPosition: 'Competitive with FreshBooks ($15-50), QuickBooks ($25-150), and Wave (Free-16)',
      targetAudience: 'Freelancers, small businesses, and accounting professionals',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Finance & Accounting',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'Stripe API', 'PostgreSQL']
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Automate your SEO strategy',
      price: '$59',
      period: '/month',
      description: 'Comprehensive SEO automation platform with keyword research, on-page optimization, and competitor analysis.',
      features: [
        'AI-powered keyword research',
        'On-page SEO optimization',
        'Competitor analysis',
        'Technical SEO audits',
        'Ranking tracking',
        'Content optimization',
        'Local SEO tools',
        'SEO reporting dashboard'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/seo-automation-suite',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and website owners',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Content & Marketing',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'Web Scraping', 'PostgreSQL', 'Redis']
    },
    {
      name: 'Performance Monitoring',
      tagline: 'Monitor and optimize your applications',
      price: '$49',
      period: '/month',
      description: 'Comprehensive application performance monitoring with real-time alerts, error tracking, and optimization insights.',
      features: [
        'Real-time performance monitoring',
        'Error tracking & alerting',
        'Performance optimization insights',
        'Core Web Vitals tracking',
        'API performance monitoring',
        'Database query optimization',
        'Mobile app performance',
        'Custom performance metrics'
      ],
      popular: false,
      icon: '📈',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/performance-monitoring',
      marketPosition: 'Competitive with New Relic ($99-99), Datadog ($15-23), and AppDynamics ($6-60)',
      targetAudience: 'DevOps teams, developers, and IT managers',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Development & DevOps',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'Prometheus', 'PostgreSQL', 'Redis']
    },
    {
      name: 'Design System Builder',
      tagline: 'Build consistent design systems',
      price: '$39',
      period: '/month',
      description: 'Create and maintain consistent design systems with component libraries, design tokens, and collaboration tools.',
      features: [
        'Component library management',
        'Design token system',
        'Version control for designs',
        'Team collaboration tools',
        'Design documentation',
        'Component usage analytics',
        'Integration with design tools',
        'Design system governance'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/design-system-builder',
      marketPosition: 'Competitive with Figma (Free-12), Sketch ($99), and Adobe XD (Free-9.99)',
      targetAudience: 'Design teams, UI/UX designers, and product managers',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Design & UX',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'Storybook', 'PostgreSQL']
    },
    // NEW INNOVATIVE SERVICES
    {
      name: 'AI Code Review Assistant',
      tagline: 'Intelligent code analysis & security',
      price: '$59',
      period: '/month',
      description: 'AI-powered code review automation with security detection, quality scoring, and automated feedback generation.',
      features: [
        'AI-powered code analysis',
        'Security vulnerability detection',
        'Code quality scoring',
        'Automated review comments',
        'Integration with GitHub/GitLab',
        'Custom rule configuration',
        'Team collaboration tools',
        'Performance impact analysis'
      ],
      popular: true,
      icon: '🔍',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/ai-code-review-assistant',
      marketPosition: 'Competitive with SonarQube ($0-150), CodeClimate ($0-99), and DeepCode ($0-50)',
      targetAudience: 'Development teams, DevOps engineers, and code quality managers',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Development & DevOps',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'GitHub API', 'PostgreSQL']
    },
    {
      name: 'API Documentation Generator',
      tagline: 'Automated API docs & testing',
      price: '$39',
      period: '/month',
      description: 'Generate comprehensive API documentation automatically with interactive explorers and multiple format support.',
      features: [
        'Auto-generated API docs',
        'Interactive API explorer',
        'Multiple format support (OpenAPI, Postman)',
        'Version control integration',
        'Custom branding & themes',
        'API testing tools',
        'Documentation analytics',
        'Team collaboration features'
      ],
      popular: false,
      icon: '📚',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/api-documentation-generator',
      marketPosition: 'Competitive with Swagger ($0-99), Postman ($0-99), and ReadMe ($0-199)',
      targetAudience: 'API developers, technical writers, and development teams',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Development & DevOps',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'OpenAPI Parser', 'PostgreSQL']
    },
    {
      name: 'Database Performance Monitor',
      tagline: 'Real-time database optimization',
      price: '$79',
      period: '/month',
      description: 'Monitor and optimize database performance with intelligent insights and automated recommendations.',
      features: [
        'Real-time performance monitoring',
        'Query optimization suggestions',
        'Index optimization',
        'Performance bottleneck detection',
        'Automated alerting',
        'Historical performance tracking',
        'Multi-database support',
        'Custom metric creation'
      ],
      popular: false,
      icon: '🗄️',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/database-performance-monitor',
      marketPosition: 'Competitive with SolarWinds ($0-2000), Percona ($0-500), and DataDog ($15-23)',
      targetAudience: 'Database administrators, DevOps engineers, and IT managers',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Development & DevOps',
      realImplementation: true,
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Monitoring APIs']
    },
    {
      name: 'AI Customer Feedback Analyzer',
      tagline: 'Intelligent feedback insights',
      price: '$49',
      period: '/month',
      description: 'Transform customer feedback into actionable insights with AI-powered sentiment analysis and trend identification.',
      features: [
        'AI-powered sentiment analysis',
        'Feedback categorization',
        'Trend identification',
        'Customer satisfaction scoring',
        'Automated reporting',
        'Multi-channel feedback collection',
        'Competitor analysis',
        'Action item recommendations'
      ],
      popular: false,
      icon: '💬',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-customer-feedback-analyzer',
      marketPosition: 'Competitive with Qualtrics ($0-500), SurveyMonkey ($0-99), and Typeform ($0-99)',
      targetAudience: 'Customer success teams, product managers, and business analysts',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Customer Experience',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'PostgreSQL', 'NLP Libraries']
    },
    {
      name: 'AI-Powered SEO Suite',
      tagline: 'Complete SEO automation platform',
      price: '$89',
      period: '/month',
      description: 'Comprehensive SEO automation with AI-powered optimization, competitor analysis, and performance tracking.',
      features: [
        'AI keyword research & analysis',
        'On-page optimization recommendations',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking & alerts',
        'Content optimization tools',
        'Local SEO management',
        'SEO reporting dashboard'
      ],
      popular: true,
      icon: '🔍',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-seo-suite',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and website owners',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Content & Marketing',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'Web Scraping', 'PostgreSQL']
    },
    {
      name: 'AI Sales Intelligence Platform',
      tagline: 'AI-powered sales automation',
      price: '$99',
      period: '/month',
      description: 'Boost sales with intelligent automation, lead scoring, and sales intelligence powered by AI.',
      features: [
        'Intelligent lead scoring',
        'Automated follow-up sequences',
        'Sales conversation analysis',
        'Pipeline optimization',
        'Revenue forecasting',
        'CRM integration',
        'Sales performance analytics',
        'Mobile sales app'
      ],
      popular: false,
      icon: '💼',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-sales-intelligence',
      marketPosition: 'Competitive with HubSpot ($45-4500), Salesforce ($25-300), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, B2B companies, and sales managers',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Sales & CRM',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'PostgreSQL', 'CRM APIs']
    },
    {
      name: 'AI Legal Document Generator',
      tagline: 'Legal document automation',
      price: '$149',
      period: '/month',
      description: 'Generate legal documents, contracts, and agreements with AI assistance and compliance checking.',
      features: [
        'Contract template library',
        'AI-powered document review',
        'Legal compliance checking',
        'Electronic signature integration',
        'Document version control',
        'Legal research assistance',
        'Client portal access',
        'Integration with legal software'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      link: 'https://ziontechgroup.com/ai-legal-document-generator',
      marketPosition: 'Competitive with DocuSign ($10-25), LegalZoom ($0-299), and Rocket Lawyer ($39.99-99.99)',
      targetAudience: 'Law firms, legal professionals, and businesses',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Legal & Compliance',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'PostgreSQL', 'DocuSign API']
    },
    {
      name: 'AI HR Assistant Pro',
      tagline: 'Streamline HR operations',
      price: '$69',
      period: '/month',
      description: 'Automate HR processes with AI-powered recruitment, performance management, and employee analytics.',
      features: [
        'AI-powered candidate screening',
        'Automated interview scheduling',
        'Performance review automation',
        'Employee onboarding workflows',
        'HR analytics & reporting',
        'Compliance monitoring',
        'Employee self-service portal',
        'Integration with HRIS systems'
      ],
      popular: false,
      icon: '👥',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-hr-assistant-pro',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Workday ($45-100), and ADP ($59-199)',
      targetAudience: 'HR teams, small to medium businesses, and HR managers',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Human Resources',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'PostgreSQL', 'Calendar APIs']
    },
    {
      name: 'AI Financial Advisor',
      tagline: 'Intelligent financial planning',
      price: '$129',
      period: '/month',
      description: 'AI-powered financial planning and investment advice with portfolio optimization and risk management.',
      features: [
        'AI-powered investment recommendations',
        'Portfolio optimization',
        'Risk assessment & management',
        'Financial goal planning',
        'Tax optimization strategies',
        'Real-time market analysis',
        'Retirement planning tools',
        'Integration with financial accounts'
      ],
      popular: false,
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/ai-financial-advisor',
      marketPosition: 'Competitive with Betterment ($0-100), Wealthfront ($0-83), and Personal Capital ($0-89)',
      targetAudience: 'Financial advisors, individual investors, and wealth management firms',
      trialDays: 14,
      setupTime: '35 minutes',
      category: 'Finance & Investment',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'Financial APIs', 'PostgreSQL']
    },
    {
      name: 'AI Supply Chain Optimizer',
      tagline: 'Intelligent supply chain management',
      price: '$199',
      period: '/month',
      description: 'Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization.',
      features: [
        'AI demand forecasting',
        'Inventory optimization',
        'Logistics route planning',
        'Supplier performance tracking',
        'Cost optimization',
        'Risk assessment',
        'Real-time tracking',
        'Integration with ERP systems'
      ],
      popular: false,
      icon: '🚚',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ai-supply-chain-optimizer',
      marketPosition: 'Competitive with SAP ($0-1000), Oracle ($0-500), and Manhattan Associates ($0-300)',
      targetAudience: 'Supply chain managers, logistics companies, and manufacturing firms',
      trialDays: 14,
      setupTime: '45 minutes',
      category: 'Operations & Logistics',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'ML Libraries', 'PostgreSQL']
    },
    {
      name: 'AI Cybersecurity Sentinel',
      tagline: 'Intelligent threat detection',
      price: '$159',
      period: '/month',
      description: 'Advanced cybersecurity with AI-powered threat detection, vulnerability assessment, and automated response.',
      features: [
        'AI threat detection',
        'Vulnerability assessment',
        'Automated incident response',
        'Behavioral analysis',
        'Threat intelligence',
        'Compliance monitoring',
        'Security analytics',
        'Integration with SIEM systems'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-cybersecurity-sentinel',
      marketPosition: 'Competitive with CrowdStrike ($0-500), SentinelOne ($0-400), and Palo Alto ($0-300)',
      targetAudience: 'Cybersecurity teams, IT managers, and security professionals',
      trialDays: 14,
      setupTime: '40 minutes',
      category: 'Security & Compliance',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'Security APIs', 'PostgreSQL']
    },
    {
      name: 'AI Healthcare Assistant',
      tagline: 'Intelligent healthcare management',
      price: '$179',
      period: '/month',
      description: 'AI-powered healthcare management with patient care optimization, diagnosis assistance, and administrative automation.',
      features: [
        'Patient care optimization',
        'Diagnosis assistance',
        'Administrative automation',
        'Medical record management',
        'Appointment scheduling',
        'Billing optimization',
        'Compliance monitoring',
        'Integration with EHR systems'
      ],
      popular: false,
      icon: '🏥',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-healthcare-assistant',
      marketPosition: 'Competitive with Epic ($0-1000), Cerner ($0-500), and Allscripts ($0-300)',
      targetAudience: 'Healthcare providers, hospitals, and medical practices',
      trialDays: 14,
      setupTime: '50 minutes',
      category: 'Healthcare & Life Sciences',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'Healthcare APIs', 'PostgreSQL']
    },
    {
      name: 'AI Education Platform',
      tagline: 'Personalized learning experience',
      price: '$79',
      period: '/month',
      description: 'AI-powered educational platform with personalized learning paths, adaptive assessments, and intelligent tutoring.',
      features: [
        'Personalized learning paths',
        'Adaptive assessments',
        'Intelligent tutoring',
        'Progress tracking',
        'Content recommendation',
        'Student analytics',
        'Teacher tools',
        'Integration with LMS systems'
      ],
      popular: false,
      icon: '🎓',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-education-platform',
      marketPosition: 'Competitive with Coursera ($0-399), Udemy ($0-199), and Khan Academy (Free)',
      targetAudience: 'Educational institutions, online learning platforms, and corporate training',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Education & Training',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'ML Libraries', 'PostgreSQL']
    },
    {
      name: 'AI Real Estate Platform',
      tagline: 'Intelligent property management',
      price: '$89',
      period: '/month',
      description: 'AI-powered real estate platform with property valuation, market analysis, and investment insights.',
      features: [
        'AI property valuation',
        'Market analysis',
        'Investment insights',
        'Property matching',
        'Market trends',
        'Portfolio management',
        'Financial modeling',
        'Integration with MLS systems'
      ],
      popular: false,
      icon: '🏠',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ai-real-estate-platform',
      marketPosition: 'Competitive with Zillow ($0-200), Redfin ($0-150), and Realtor.com ($0-100)',
      targetAudience: 'Real estate agents, investors, and property managers',
      trialDays: 14,
      setupTime: '35 minutes',
      category: 'Real Estate & Property',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'Real Estate APIs', 'PostgreSQL']
    },
    {
      name: 'AI Manufacturing Optimizer',
      tagline: 'Intelligent manufacturing management',
      price: '$249',
      period: '/month',
      description: 'Optimize manufacturing processes with AI-powered quality control, predictive maintenance, and production planning.',
      features: [
        'Quality control automation',
        'Predictive maintenance',
        'Production planning',
        'Inventory optimization',
        'Energy efficiency',
        'Equipment monitoring',
        'Performance analytics',
        'Integration with MES systems'
      ],
      popular: false,
      icon: '🏭',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-manufacturing-optimizer',
      marketPosition: 'Competitive with Siemens ($0-1000), Rockwell ($0-500), and GE ($0-300)',
      targetAudience: 'Manufacturing companies, industrial firms, and production managers',
      trialDays: 14,
      setupTime: '60 minutes',
      category: 'Manufacturing & Industry',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'IoT APIs', 'PostgreSQL']
    },
    {
      name: 'AI Energy Management',
      tagline: 'Intelligent energy optimization',
      price: '$129',
      period: '/month',
      description: 'AI-powered energy management with consumption optimization, renewable integration, and cost reduction.',
      features: [
        'Energy consumption optimization',
        'Renewable energy integration',
        'Cost reduction strategies',
        'Demand forecasting',
        'Grid optimization',
        'Carbon footprint tracking',
        'Energy analytics',
        'Integration with smart meters'
      ],
      popular: false,
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/ai-energy-management',
      marketPosition: 'Competitive with Schneider Electric ($0-500), Siemens ($0-300), and Honeywell ($0-200)',
      targetAudience: 'Energy companies, utilities, and facility managers',
      trialDays: 14,
      setupTime: '40 minutes',
      category: 'Energy & Utilities',
      realImplementation: true,
      techStack: ['OpenAI API', 'React', 'Node.js', 'Energy APIs', 'PostgreSQL']
    }
  ];

  const categories = ['All', 'Content & Marketing', 'Development & DevOps', 'Sales & CRM', 'Legal & Compliance', 'Human Resources', 'Analytics & Data', 'Productivity & Collaboration', 'Customer Service', 'Finance & Accounting', 'Design & UX', 'Finance & Investment', 'Operations & Logistics', 'Security & Compliance', 'Healthcare & Life Sciences', 'Education & Training', 'Real Estate & Property', 'Manufacturing & Industry', 'Energy & Utilities'];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen futuristic-bg particle-bg">
      <ParticleBackground />
      <Head>
        <title>Real Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 40+ real, fully functional micro SaaS services built with modern technology. AI-powered tools for content, marketing, development, and business automation." />
        <meta name="keywords" content="micro SaaS, AI services, business automation, content generation, cloud optimization, project management, customer support, healthcare, manufacturing, energy, education, real estate" />
        <meta property="og:title" content="Real Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="40+ real micro SaaS services with AI-powered automation, modern tech stack, and enterprise-grade reliability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              40+ Real Micro SaaS Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight neon-text">
            Real Micro SaaS Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 holographic">
              Built for Real Businesses
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover 40+ fully functional micro SaaS tools built with modern technology. 
            No mockups, no demos - just real services that solve real business problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>Real Implementations</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>Modern Tech Stack</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>14-Day Free Trials</span>
            </div>
            <div className="flex items-center text-white">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>99.9% Uptime</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="#services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              href="https://ziontechgroup.com"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Visit Platform
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've built real services that deliver immediate value, not just demos or mockups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl futuristic-card float`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              40+ Real Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service is fully implemented with real functionality, modern technology, and enterprise-grade reliability.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className={`relative group futuristic-card overflow-hidden transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-yellow-400 glow-yellow' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Real Implementation Badge */}
                {service.realImplementation && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400 text-green-900">
                      <Check className="w-3 h-3 mr-1" />
                      Real Service
                    </span>
                  </div>
                )}

                <div className="p-6 h-full">
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 text-center">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Position */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <h5 className="text-white font-medium text-sm mb-2">Market Position:</h5>
                    <p className="text-gray-400 text-xs">{service.marketPosition}</p>
                  </div>

                  {/* Tech Stack */}
                  {service.techStack && (
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <h5 className="text-white font-medium text-sm mb-2">Tech Stack:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-block px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="text-center">
                      <div className="text-white font-medium">{service.trialDays}</div>
                      <div className="text-gray-400">Day Trial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">{service.setupTime}</div>
                      <div className="text-gray-400">Setup</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Button
                      href={service.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch with Zion Tech Group
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your business with our real micro SaaS services? 
            Contact our team for personalized consultation and support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.554.554l1.122 2.226A2 2 0 0010.28 7H13a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://ziontechgroup.com"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Contact Sales
              <MessageSquare className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}