import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon } from 'lucide-react';
import Button from '../components/ui/Button';

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
      bgColor: 'from-rose-500/10 to-pink-500/10'
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
      category: 'Content & Marketing'
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
      category: 'Development & DevOps'
    },
    {
      name: 'AI Code Review Assistant',
      tagline: 'Intelligent code review automation',
      price: '$59',
      period: '/month',
      description: 'Automate code reviews with AI-powered analysis. Catch bugs, security issues, and maintain code quality standards.',
      features: [
        'AI-powered code analysis',
        'Security vulnerability detection',
        'Code quality scoring',
        'Automated review comments',
        'Integration with GitHub, GitLab',
        'Custom rule configuration',
        'Team collaboration tools',
        'Performance optimization suggestions'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/ai-code-review-assistant',
      marketPosition: 'Competitive with SonarQube ($0-150), CodeClimate ($0-100), and DeepCode ($0-50)',
      targetAudience: 'Development teams, DevOps engineers, and code quality managers',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Development & DevOps'
    },
    {
      name: 'API Documentation Generator',
      tagline: 'Automated API documentation',
      price: '$39',
      period: '/month',
      description: 'Generate comprehensive API documentation automatically from your code. Keep docs in sync with your API changes.',
      features: [
        'Auto-generated API docs',
        'Interactive API explorer',
        'Multiple format support (OpenAPI, Postman)',
        'Version control integration',
        'Custom branding & themes',
        'Team collaboration tools',
        'API testing integration',
        'Analytics & usage tracking'
      ],
      popular: false,
      icon: '📚',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/api-documentation-generator',
      marketPosition: 'Competitive with Swagger ($0-50), ReadMe ($0-99), and Stoplight ($0-50)',
      targetAudience: 'API developers, technical writers, and product managers',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Development & DevOps'
    },
    {
      name: 'Database Performance Monitor',
      tagline: 'Real-time database optimization',
      price: '$79',
      period: '/month',
      description: 'Monitor and optimize your database performance with intelligent insights and automated recommendations.',
      features: [
        'Real-time performance monitoring',
        'Query optimization suggestions',
        'Index optimization',
        'Performance bottleneck detection',
        'Automated alerting',
        'Multi-database support',
        'Historical performance tracking',
        'Integration with popular databases'
      ],
      popular: false,
      icon: '🗄️',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/database-performance-monitor',
      marketPosition: 'Competitive with SolarWinds ($0-200), Percona ($0-100), and DataDog ($15-23)',
      targetAudience: 'Database administrators, DevOps teams, and system architects',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Development & DevOps'
    },
    {
      name: 'AI Customer Feedback Analyzer',
      tagline: 'Intelligent feedback insights',
      price: '$49',
      period: '/month',
      description: 'Analyze customer feedback with AI to extract actionable insights and improve customer satisfaction.',
      features: [
        'AI-powered sentiment analysis',
        'Feedback categorization',
        'Trend identification',
        'Customer satisfaction scoring',
        'Automated reporting',
        'Integration with support tools',
        'Real-time alerts',
        'Custom dashboard creation'
      ],
      popular: false,
      icon: '💬',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-customer-feedback-analyzer',
      marketPosition: 'Competitive with Qualtrics ($0-500), SurveyMonkey ($0-75), and Typeform ($0-70)',
      targetAudience: 'Product managers, customer success teams, and marketing professionals',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Customer Experience'
    },
    {
      name: 'AI-Powered SEO Suite',
      tagline: 'Complete SEO automation platform',
      price: '$89',
      period: '/month',
      description: 'Comprehensive SEO tools with AI-powered optimization, keyword research, and performance tracking.',
      features: [
        'AI keyword research & analysis',
        'On-page optimization recommendations',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking & alerts',
        'Content optimization suggestions',
        'Local SEO tools',
        'Advanced reporting & analytics'
      ],
      popular: true,
      icon: '🔍',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-seo-suite',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and content creators',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Content & Marketing'
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
      category: 'Content & Marketing'
    },
    {
      name: 'AI Sales Intelligence Platform',
      tagline: 'Boost sales with intelligent automation',
      price: '$99',
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
      popular: true,
      icon: '💼',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-sales-intelligence',
      marketPosition: 'Competitive with HubSpot ($45-4500), Salesforce ($25-300), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, B2B companies, and sales managers',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Sales & CRM'
    },
    {
      name: 'AI Legal Document Generator',
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
      link: 'https://ziontechgroup.com/ai-legal-document-generator',
      marketPosition: 'Competitive with DocuSign ($10-25), LegalZoom ($0-299), and Rocket Lawyer ($39.99-99.99)',
      targetAudience: 'Law firms, legal professionals, and businesses',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Legal & Compliance'
    },
    {
      name: 'AI HR Assistant Pro',
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
      link: 'https://ziontechgroup.com/ai-hr-assistant-pro',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Workday ($45-100), and ADP ($59-199)',
      targetAudience: 'HR teams, small to medium businesses, and HR managers',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Human Resources'
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
      category: 'Analytics & Data'
    },
    {
      name: 'Email Marketing Automation Pro',
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
      link: 'https://ziontechgroup.com/email-marketing-automation-pro',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($9-29), and ActiveCampaign ($9-49)',
      targetAudience: 'Small businesses, marketers, and e-commerce stores',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Content & Marketing'
    },
    {
      name: 'Social Media Scheduler Pro',
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
      link: 'https://ziontechgroup.com/social-media-scheduler-pro',
      marketPosition: 'Competitive with Buffer ($6-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, small businesses, and influencers',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Content & Marketing'
    },
    {
      name: 'Invoice & Billing Manager Pro',
      tagline: 'Streamline your invoicing process',
      price: '$25',
      period: '/month',
      description: 'Create professional invoices, track payments, and manage your billing workflow. Get paid faster with automated reminders.',
      features: [
        'Professional invoice templates',
        'Automated payment reminders',
        'Multiple payment gateways',
        'Expense tracking',
        'Financial reporting',
        'Client portal',
        'Tax calculations',
        'Integration with accounting software'
      ],
      popular: false,
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/invoice-billing-manager-pro',
      marketPosition: 'Competitive with FreshBooks ($17-55), Wave (Free), and Zoho Invoice ($9-29)',
      targetAudience: 'Freelancers, small businesses, and consultants',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Finance & Operations'
    },
    {
      name: 'Project Management Hub Pro',
      tagline: 'Simple project management for teams',
      price: '$35',
      period: '/month',
      description: 'Manage projects, tasks, and team collaboration with an intuitive interface. Perfect for small to medium teams.',
      features: [
        'Task management & tracking',
        'Team collaboration tools',
        'Time tracking',
        'File sharing & storage',
        'Project templates',
        'Progress reporting',
        'Mobile app access',
        'Integration with popular tools'
      ],
      popular: false,
      icon: '📋',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/project-management-hub-pro',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Trello ($5-17.50), and Monday.com ($8-16)',
      targetAudience: 'Project managers, development teams, and creative agencies',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Productivity & Collaboration'
    },
    {
      name: 'Customer Support Ticketing Pro',
      tagline: 'Organized customer support system',
      price: '$45',
      period: '/month',
      description: 'Manage customer inquiries efficiently with a powerful ticketing system. Improve response times and customer satisfaction.',
      features: [
        'Ticket management system',
        'Knowledge base creation',
        'Automated responses',
        'Customer satisfaction surveys',
        'Performance analytics',
        'Multi-channel support',
        'Team collaboration tools',
        'Integration with popular platforms'
      ],
      popular: false,
      icon: '🎫',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/customer-support-ticketing-pro',
      marketPosition: 'Competitive with Zendesk ($49-99), Freshdesk ($15-99), and Help Scout ($20-65)',
      targetAudience: 'Customer support teams, SaaS companies, and e-commerce businesses',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Customer Experience'
    },
    {
      name: 'Analytics Dashboard Pro',
      tagline: 'Beautiful data visualization',
      price: '$55',
      period: '/month',
      description: 'Create stunning dashboards and reports with drag-and-drop simplicity. Connect to your data sources and visualize insights.',
      features: [
        'Drag-and-drop dashboard builder',
        '100+ chart types',
        'Real-time data connections',
        'Custom branding',
        'Team sharing & collaboration',
        'Automated reporting',
        'Mobile-responsive design',
        'API access for custom integrations'
      ],
      popular: false,
      icon: '📈',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/analytics-dashboard-pro',
      marketPosition: 'Competitive with Grafana ($0-49), Metabase ($0-85), and Tableau ($70-70)',
      targetAudience: 'Data analysts, business users, and product teams',
      trialDays: 14,
      setupTime: '35 minutes',
      category: 'Analytics & Data'
    },
    {
      name: 'AI Financial Advisor Pro',
      tagline: 'Intelligent financial planning',
      price: '$89',
      period: '/month',
      description: 'AI-powered financial planning and investment advice for individuals and businesses.',
      features: [
        'Personalized financial planning',
        'Investment portfolio analysis',
        'Risk assessment & management',
        'Tax optimization strategies',
        'Retirement planning tools',
        'Real-time market data',
        'Financial goal tracking',
        'Expert consultation access'
      ],
      popular: false,
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/ai-financial-advisor-pro',
      marketPosition: 'Competitive with Personal Capital (Free), Betterment ($0-0.40%), and Wealthfront ($0-0.25%)',
      targetAudience: 'Individuals, small businesses, and financial advisors',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Finance & Operations'
    },
    {
      name: 'AI Design System Builder Pro',
      tagline: 'Automated design system creation',
      price: '$79',
      period: '/month',
      description: 'Create and maintain consistent design systems with automated component generation and team collaboration.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools',
        'Version control integration',
        'Design system analytics',
        'Integration with design tools'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://ziontechgroup.com/ai-design-system-builder-pro',
      marketPosition: 'Competitive with Figma ($0-75), Sketch ($99/year), and Adobe XD ($9.99/month)',
      targetAudience: 'Design teams, UI/UX designers, and product managers',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Design & Creative'
    },
    {
      name: 'AI Performance Monitor Pro',
      tagline: 'Real-time application monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights.',
      features: [
        'Real-time performance monitoring',
        'Error tracking & alerting',
        'User experience analytics',
        'Performance optimization suggestions',
        'Custom dashboards',
        'API performance monitoring',
        'Mobile app monitoring',
        'Integration with popular tools'
      ],
      popular: false,
      icon: '📱',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://ziontechgroup.com/ai-performance-monitor-pro',
      marketPosition: 'Competitive with New Relic ($0-99), DataDog ($15-23), and AppDynamics ($6-60)',
      targetAudience: 'Developers, DevOps teams, and product managers',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Development & DevOps'
    },
    {
      name: 'AI Chatbot Platform Pro',
      tagline: 'Intelligent customer support automation',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and business automation.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Custom training data',
        'Analytics & insights',
        '24/7 availability',
        'Integration with CRMs',
        'Multi-language support',
        'Advanced conversation flows'
      ],
      popular: false,
      icon: '💬',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      link: 'https://ziontechgroup.com/ai-chatbot-platform-pro',
      marketPosition: 'Competitive with Intercom ($74-499), Drift ($0-2500), and Zendesk ($49-99)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Customer Experience'
    },
    {
      name: 'AI Security Monitor Pro',
      tagline: 'Intelligent threat detection',
      price: '$129',
      period: '/month',
      description: 'Advanced security monitoring with AI-powered threat detection and automated response systems.',
      features: [
        'AI-powered threat detection',
        'Real-time security monitoring',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance reporting',
        'Security analytics dashboard',
        'Integration with security tools',
        '24/7 security operations'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-security-monitor-pro',
      marketPosition: 'Competitive with CrowdStrike ($8.99-15.99), SentinelOne ($2.67-5.00), and Carbon Black ($6.50-8.00)',
      targetAudience: 'Security teams, IT managers, and compliance officers',
      trialDays: 14,
      setupTime: '45 minutes',
      category: 'Security & Compliance'
    }
  ];

  const marketInsights = [
    {
      title: 'Growing Market Demand',
      description: 'The micro SaaS market is experiencing rapid growth, with businesses increasingly seeking specialized, affordable solutions over complex enterprise platforms.',
      stats: '32% annual growth rate',
      icon: TrendingUp
    },
    {
      title: 'Competitive Pricing Strategy',
      description: 'Our pricing is strategically positioned 15-40% below market average while maintaining enterprise-grade quality and features.',
      stats: '15-40% below market average',
      icon: Target
    },
    {
      title: 'Rapid Setup & ROI',
      description: 'Unlike complex enterprise solutions, our micro SaaS tools can be set up in 5-45 minutes and deliver immediate value.',
      stats: '3x faster time-to-value',
      icon: Clock
    },
    {
      title: 'Zion Tech Group Infrastructure',
      description: 'All services are hosted on ziontechgroup.com with enterprise-grade infrastructure, 99.9% uptime guarantee, and SOC 2 compliance.',
      stats: '99.9% uptime guarantee',
      icon: Shield
    },
    {
      title: 'Unified Support Experience',
      description: 'Every service includes dedicated support through ziontechgroup.com, comprehensive documentation, and regular feature updates.',
      stats: '24/7 dedicated support',
      icon: Users
    },
    {
      title: 'Domain Integration Benefits',
      description: 'All services accessible through ziontechgroup.com for unified billing, single sign-on, and seamless integration between tools.',
      stats: 'Single domain access',
      icon: Globe
    },
    {
      title: 'Real Market Validation',
      description: 'All services are based on real business needs and market research, with competitive analysis against established players.',
      stats: 'Market-validated solutions',
      icon: Award
    },
    {
      title: 'Continuous Innovation',
      description: 'Regular feature updates and new service additions based on customer feedback and market trends.',
      stats: 'Monthly updates',
      icon: Rocket
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

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
              75+ specialized micro SaaS solutions covering AI-powered content creation, video generation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media management, 
              customer feedback, billing, project management, API infrastructure, e-commerce analytics, legal document generation, 
              HR management, AI customer support, data backup, AI code assistance, cybersecurity monitoring, supply chain analytics, 
              market research, financial planning, CRM systems, learning management, IoT management, analytics dashboards, 
              meeting transcription, invoice automation, churn prediction, lead scoring, real-time analytics, content optimization, 
              predictive maintenance, email security, dynamic pricing, customer segmentation, sales intelligence, content calendar optimization, 
              email deliverability, landing page building, customer journey mapping, contract analysis, sales forecasting, customer service analytics,
              product recommendations, fraud detection, inventory forecasting, customer onboarding, social media automation, financial planning,
              HR recruitment, content calendar optimization, SEO optimization, video generation, support chatbots, data quality monitoring,
              API testing, database performance monitoring, and cloud cost optimization. Focused, affordable solutions that deliver specific value 
              without the complexity of enterprise platforms. Start with a free trial and scale as you grow.
            </p>
            
            {/* Domain Information */}
                          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 mb-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">All 75+ Services Available on Zion Tech Group Domain</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Every micro SaaS service is accessible through our main domain <strong className="text-green-400">ziontechgroup.com</strong>, 
                  ensuring consistent branding, unified billing, and seamless integration across all tools. No more juggling multiple accounts or domains.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-4">
                  <div className="flex items-center text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Unified user dashboard</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Single sign-on access</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Consistent support experience</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Integrated billing & usage</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Seamless tool integration</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Enterprise-grade security</span>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/30 transition-colors"
                  >
                    Explore ziontechgroup.com
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="#services"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 shadow-2xl"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Zion Tech Group Domain Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Powered by Zion Tech Group
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                All our micro SaaS services are built and hosted on our enterprise-grade infrastructure at ziontechgroup.com
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-6 mx-auto">
                  <Building className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Infrastructure</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-center">
                  Built on enterprise-grade cloud infrastructure with 99.9% uptime guarantee and global CDN distribution.
                </p>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-colors"
                  >
                    Visit ziontechgroup.com
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-center">
                  SOC 2 Type II compliant with enterprise-grade security, encryption, and compliance standards.
                </p>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com/security" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                  >
                    Security Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Dedicated Support</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-center">
                  24/7 enterprise support with dedicated account managers and technical expertise for all services.
                </p>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com/support" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium hover:bg-purple-500/20 transition-colors"
                  >
                    Get Support
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
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
                View All 75 Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Market Research & Competitive Analysis */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Market-Validated Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Every service is backed by real market research, competitive analysis, and proven business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4">
                    <Search className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Market Research</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Each service is developed based on extensive market research, analyzing real business pain points, 
                  competitor offerings, and market gaps. We don't build solutions in isolation - we solve actual problems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Customer interviews and surveys</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Competitor feature analysis</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Market size and growth potential</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Pricing strategy research</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Competitive Analysis</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Every service includes detailed competitive analysis against established market players, 
                  ensuring our pricing, features, and positioning deliver real value to customers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Feature comparison matrices</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Pricing strategy analysis</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Market positioning research</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Customer satisfaction analysis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Real Market Data</h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  Our services are positioned based on real market data, not assumptions. We analyze pricing from 
                  competitors like Stripe, AWS, DataDog, and others to ensure our solutions provide exceptional value.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">15-40%</div>
                    <div className="text-gray-300">Below market average pricing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">60+</div>
                    <div className="text-gray-300">Market-validated services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300">Expert support included</div>
                  </div>
                </div>
              </div>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketInsights.map((insight, index) => {
                const IconComponent = insight.icon;
                return (
                  <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-6 mx-auto">
                      <IconComponent className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{insight.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-center">{insight.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mx-auto block">
                      {insight.stats}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Filter by Category</h2>
              <p className="text-gray-400">Find the perfect solution for your specific business needs</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                className="px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
                onClick={() => window.location.hash = '#services'}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button 
                  key={category}
                  className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => window.location.hash = '#services'}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Comprehensive Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Choose from our extensive collection of specialized tools, all designed to solve specific business challenges 
                with AI-powered automation and enterprise-grade reliability.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Trending Services Highlight */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">🔥 Trending & Most Popular Services</h3>
                <p className="text-gray-400">These services are currently in high demand and receiving excellent user feedback</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {microSaasServices
                  .filter(service => service.popular)
                  .slice(0, 6)
                  .map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 group">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl mr-3 group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.tagline}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline mb-2">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400 ml-1 text-sm">{service.period}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span>{service.trialDays}-day free trial</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-400 text-sm">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span>Trending</span>
                      </div>
                      <Button
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        className={`bg-gradient-to-r ${service.color} hover:opacity-90`}
                      >
                        Try Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-400 text-sm mb-4">All services include enterprise-grade security, 99.9% uptime, and dedicated support</p>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm font-medium hover:bg-green-500/20 transition-colors"
                >
                  Explore All Services on ziontechgroup.com
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
                          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Our portfolio of 55 specialized solutions covers the most critical business needs, from content creation 
              and video generation to API management and data protection. Each solution is designed to solve a specific 
              business problem with deep functionality and competitive pricing.
            </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {microSaasServices
                .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
                .map((service, index) => (
                <div key={index} className={`bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-${service.textColor.split('-')[1]}-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-${service.textColor.split('-')[1]}-500/10`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mr-4`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-gray-400">{service.tagline}</p>
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-medium mt-2">
                          {service.category}
                        </div>
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
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{service.trialDays}-day free trial</span>
                      <span>Setup: {service.setupTime}</span>
                    </div>
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

        {/* Pricing Comparison Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Competitive Market Positioning
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                See how our micro SaaS solutions compare to industry leaders in pricing and value. 
                All services are hosted on <strong className="text-green-400">ziontechgroup.com</strong> with enterprise-grade infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-green-400">
                    <Check className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Focused, specialized solutions</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">15-40% below market average pricing</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Setup in minutes, not days</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated support for all plans</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">14-day free trial on all services</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-blue-400">
                    <Zap className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">3x faster time-to-value</span>
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Zap className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">No complex enterprise setup</span>
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Zap className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Pay only for what you need</span>
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Zap className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Scalable as your business grows</span>
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Zap className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Regular feature updates</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Domain Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-purple-400">
                    <Globe className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">All services on ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Globe className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Unified user experience</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Globe className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Single billing & support</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Globe className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Seamless tool integration</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Globe className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Consistent branding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-green-400 mb-2">45+</div>
                <div className="text-gray-300 text-sm">Specialized Services</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">15-40%</div>
                <div className="text-gray-300 text-sm">Below Market Pricing</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-orange-400 mb-2">14 Days</div>
                <div className="text-gray-300 text-sm">Free Trial</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1 Domain</div>
                <div className="text-gray-300 text-sm">ziontechgroup.com</div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                🚀 Most Innovative & Cutting-Edge Services
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Experience the future of business automation with our most advanced AI-powered solutions. 
                These services represent the cutting edge of what's possible in micro SaaS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasServices
                .filter(service => 
                  service.name.includes('AI') && 
                  (service.name.includes('Assistant') || service.name.includes('Platform') || service.name.includes('Hub'))
                )
                .slice(0, 6)
                .map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 group">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.tagline}</p>
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mt-2">
                        AI-Powered
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">{service.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1 text-sm">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span>{service.trialDays}-day free trial</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}
                    >
                      Experience Innovation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Category</p>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group for Innovation?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center text-green-400">
                      <Rocket className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Cutting-edge AI technology</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Cpu className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Advanced machine learning models</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Zap className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Real-time processing capabilities</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-green-400">
                      <Shield className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Database className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Scalable infrastructure</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Users className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Expert support team</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/30 transition-colors"
                  >
                    Explore Innovation on ziontechgroup.com
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Integration & Service Access */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                All Services on <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">ziontechgroup.com</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Every micro SaaS service is accessible through our unified domain, providing seamless integration, 
                single billing, and consistent user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-6 mx-auto">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Unified Domain Access</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  All 60+ services accessible through <strong className="text-blue-400">ziontechgroup.com</strong> 
                  with consistent navigation and branding.
                </p>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                  >
                    Visit Main Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-6 mx-auto">
                  <CreditCard className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Single Billing Platform</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Manage all subscriptions from one account with unified billing, 
                  usage tracking, and consolidated invoices.
                </p>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com/billing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-colors"
                  >
                    Manage Billing
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Unified Support</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Get support for any service through our centralized help desk, 
                  knowledge base, and dedicated support team.
                </p>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com/support" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium hover:bg-purple-500/20 transition-colors"
                  >
                    Get Support
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Service Access Examples</h3>
                <p className="text-gray-300 mb-6 max-w-4xl mx-auto">
                  Here are some examples of how our services are accessible through the ziontechgroup.com domain:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-green-400 font-semibold mb-2">AI Content Generator</div>
                    <div className="text-gray-300">content.ziontechgroup.com</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-blue-400 font-semibold mb-2">API Gateway</div>
                    <div className="text-gray-300">api.ziontechgroup.com</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-purple-400 font-semibold mb-2">DevOps Platform</div>
                    <div className="text-gray-300">devops.ziontechgroup.com</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-orange-400 font-semibold mb-2">Analytics Hub</div>
                    <div className="text-gray-300">analytics.ziontechgroup.com</div>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://ziontechgroup.com/services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/30 transition-colors"
                  >
                    View All Services
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
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

        {/* Enhanced Service Categories Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Comprehensive Service Categories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solutions for Every Business Function
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our 75+ micro SaaS services are organized into specialized categories, each addressing specific business challenges with proven solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* AI & Machine Learning */}
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  25+ AI-powered solutions for content generation, customer analysis, fraud detection, and business intelligence
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                    From $29/month
                  </span>
                </div>
              </div>

              {/* Business Operations */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Business Operations</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  20+ tools for project management, HR automation, financial planning, and supply chain optimization
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                    From $19/month
                  </span>
                </div>
              </div>

              {/* Marketing & Growth */}
              <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Marketing & Growth</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  18+ solutions for email marketing, social media management, SEO optimization, and customer acquisition
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                    From $15/month
                  </span>
                </div>
              </div>

              {/* Development & DevOps */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Development & DevOps</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  15+ tools for API testing, database monitoring, cloud optimization, and performance monitoring
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full">
                    From $39/month
                  </span>
                </div>
              </div>

              {/* Customer Experience */}
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Customer Experience</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  12+ solutions for customer support, feedback analysis, journey mapping, and onboarding optimization
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 text-sm rounded-full">
                    From $25/month
                  </span>
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Data & Analytics</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  10+ tools for data quality monitoring, business intelligence, performance analytics, and reporting automation
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-400 text-sm rounded-full">
                    From $49/month
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                Each category includes enterprise-grade features, comprehensive documentation, and dedicated support
              </p>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                Explore All Categories
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
                <div key={index} className="group">
                  <div className={`bg-gradient-to-br ${advantage.bgColor} border border-gray-700 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-${advantage.color.split('-')[1]}-500/50`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{advantage.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI & Business Impact Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                Proven Business Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Measurable Results & ROI
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our micro SaaS solutions deliver quantifiable business value with rapid implementation and immediate impact
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* ROI Metrics */}
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Return on Investment</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">💰</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Cost Reduction</h4>
                        <p className="text-gray-400 text-sm">Average 30-50% savings</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">30-50%</div>
                      <div className="text-xs text-gray-500">vs enterprise</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Time to Value</h4>
                        <p className="text-gray-400 text-sm">Immediate implementation</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">5-45 min</div>
                      <div className="text-xs text-gray-500">setup time</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Productivity Gain</h4>
                        <p className="text-gray-400 text-sm">Automated workflows</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">3-5x</div>
                      <div className="text-xs text-gray-500">efficiency boost</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Impact */}
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Customer Acquisition</h4>
                        <p className="text-gray-400 text-sm">Improved conversion rates</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-400">25-40%</div>
                      <div className="text-xs text-gray-500">increase</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Operational Efficiency</h4>
                        <p className="text-gray-400 text-sm">Streamlined processes</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-teal-400">40-60%</div>
                      <div className="text-xs text-gray-500">time savings</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-rose-500/10 rounded-xl border border-rose-500/20">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">📈</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Revenue Growth</h4>
                        <p className="text-gray-400 text-sm">Optimized sales & marketing</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-rose-400">20-35%</div>
                      <div className="text-xs text-gray-500">revenue boost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                All services include comprehensive analytics, performance tracking, and ROI measurement tools
              </p>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
              >
                Calculate Your ROI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose from our portfolio of 75+ specialized solutions. All services include comprehensive documentation, 
              dedicated support, enterprise-grade reliability, and 14-day free trials. Start with one solution 
              and add more as your business grows.
            </p>
            
            {/* Domain Integration Highlight */}
            <div className="bg-white/10 rounded-2xl p-6 mb-12 max-w-4xl mx-auto border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">All Services on Zion Tech Group Domain</h3>
              </div>
              <p className="text-green-100 mb-4">
                Access all 75+ micro SaaS tools through <strong className="text-white">ziontechgroup.com</strong> for a unified experience, 
                single billing, and seamless integration between services. No need to manage multiple accounts or domains.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-4">
                <div className="flex items-center text-green-200">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-green-100">Single sign-on access</span>
                </div>
                <div className="flex items-center text-green-200">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-green-100">Unified dashboard</span>
                </div>
                <div className="flex items-center text-green-200">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-green-100">Integrated billing</span>
                </div>
                <div className="flex items-center text-green-200">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-green-100">Consistent support</span>
                </div>
                <div className="flex items-center text-green-200">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-green-100">Seamless tool integration</span>
                </div>
                <div className="flex items-center text-green-200">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-green-100">Enterprise security</span>
                </div>
              </div>
              <div className="text-center">
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors"
                >
                  Visit ziontechgroup.com
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

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
            
            <div className="mt-12 text-center">
              <p className="text-green-200 text-sm mb-4">Trusted by businesses worldwide</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="text-white text-lg font-semibold">Enterprise Security</div>
                <div className="text-white text-lg font-semibold">99.9% Uptime</div>
                <div className="text-white text-lg font-semibold">24/7 Support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}