import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

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
      bgColor: 'from-blue-500/10 to-blue-500/10'
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
      realService: true
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
      realService: true
    },
    {
      name: 'AI Code Review Assistant',
      tagline: 'Intelligent code analysis and optimization',
      price: '$79',
      period: '/month',
      description: 'Automated code review with AI-powered security scanning, performance analysis, and best practice recommendations. Support for 10+ programming languages.',
      features: [
        'Multi-language support (JS, TS, Python, Java, C#, Go, Rust)',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality metrics',
        'Automated issue prioritization',
        'Integration with Git workflows',
        'Custom rule configuration',
        'Team collaboration features'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-code-review',
      marketPosition: 'Competitive with SonarQube ($0-150), CodeClimate ($0-200), and Snyk ($0-400)',
      targetAudience: 'Development teams, DevOps engineers, and software architects',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Development & DevOps',
      realService: true
    },
    {
      name: 'API Documentation Generator',
      tagline: 'Automated API documentation from code',
      price: '$59',
      period: '/month',
      description: 'Generate comprehensive API documentation automatically from your source code, OpenAPI specs, and runtime analysis. Support for multiple frameworks.',
      features: [
        'Multi-framework support (Express, Django, Spring, FastAPI)',
        'Automatic endpoint discovery',
        'Interactive documentation',
        'Multiple export formats (HTML, Markdown, PDF, OpenAPI)',
        'Version control integration',
        'Custom branding options',
        'API testing tools',
        'Documentation analytics'
      ],
      popular: false,
      icon: '📚',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://ziontechgroup.com/api-doc-generator',
      marketPosition: 'Competitive with Swagger ($0-100), Postman ($0-99), and ReadMe ($0-99)',
      targetAudience: 'API developers, technical writers, and development teams',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Development & DevOps',
      realService: true
    },
    {
      name: 'Database Performance Monitor',
      tagline: 'Real-time database optimization insights',
      price: '$89',
      period: '/month',
      description: 'Monitor and optimize database performance across PostgreSQL, MySQL, MongoDB, Redis, and more. Get actionable insights and automated recommendations.',
      features: [
        'Multi-database support (PostgreSQL, MySQL, MongoDB, Redis)',
        'Real-time query monitoring',
        'Performance bottleneck detection',
        'Automated index recommendations',
        'Query execution plan analysis',
        'Performance trend analysis',
        'Alert system',
        'Capacity planning tools'
      ],
      popular: false,
      icon: '📊',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://ziontechgroup.com/database-monitor',
      marketPosition: 'Competitive with DataDog ($0-15), New Relic ($0-99), and SolarWinds ($0-1000)',
      targetAudience: 'Database administrators, DevOps engineers, and system architects',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Development & DevOps',
      realService: true
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
      realService: true
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
      realService: true
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
      realService: true
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
      realService: true
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
      realService: true
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
      realService: true
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
      realService: true
    },
    {
      name: 'Invoice & Billing Manager',
      tagline: 'Streamline your invoicing process',
      price: '$39',
      period: '/month',
      description: 'Automate invoicing, payment tracking, and financial reporting. Get paid faster with professional invoicing tools.',
      features: [
        'Automated invoice generation',
        'Payment tracking & reminders',
        'Multiple payment gateways',
        'Recurring billing',
        'Financial reporting',
        'Client portal',
        'Tax calculation',
        'Integration with accounting software'
      ],
      popular: false,
      icon: '🧾',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/invoice-billing-manager',
      marketPosition: 'Competitive with FreshBooks ($15-50), QuickBooks ($25-150), and Wave ($0-35)',
      targetAudience: 'Freelancers, small businesses, and service providers',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Finance & Accounting',
      realService: true
    },
    {
      name: 'Project Management Suite',
      tagline: 'Collaborate and deliver projects on time',
      price: '$69',
      period: '/month',
      description: 'Complete project management solution with task tracking, team collaboration, and project analytics.',
      features: [
        'Task & project tracking',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Resource management',
        'Gantt charts & timelines',
        'File sharing & storage',
        'Mobile app access',
        'Integration with popular tools'
      ],
      popular: false,
      icon: '📋',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/project-management-suite',
      marketPosition: 'Competitive with Asana ($0-24.99), Monday.com ($0-16), and ClickUp ($0-12)',
      targetAudience: 'Project managers, development teams, and creative agencies',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Project Management',
      realService: true
    },
    {
      name: 'Customer Support Hub',
      tagline: 'Deliver exceptional customer experiences',
      price: '$49',
      period: '/month',
      description: 'Centralized customer support platform with ticket management, knowledge base, and customer analytics.',
      features: [
        'Ticket management system',
        'Knowledge base creation',
        'Live chat support',
        'Customer self-service portal',
        'Support analytics',
        'Multi-channel support',
        'Automated workflows',
        'Integration with CRM systems'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/customer-support-hub',
      marketPosition: 'Competitive with Zendesk ($19-99), Freshdesk ($15-99), and Intercom ($39-499)',
      targetAudience: 'Customer support teams, e-commerce businesses, and SaaS companies',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Customer Experience',
      realService: true
    },
    {
      name: 'AI SEO Optimizer',
      tagline: 'Automate your SEO strategy',
      price: '$89',
      period: '/month',
      description: 'AI-powered SEO optimization that improves your search rankings and drives organic traffic growth.',
      features: [
        'Keyword research automation',
        'Technical SEO audits',
        'Content optimization suggestions',
        'Competitor analysis',
        'Ranking tracking',
        'Backlink monitoring',
        'Local SEO optimization',
        'Performance reporting'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and website owners',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Content & Marketing',
      realService: true
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent customer conversations',
      price: '$59',
      period: '/month',
      description: 'Build AI-powered chatbots that provide 24/7 customer support and lead generation.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with popular platforms',
        'Analytics & insights',
        'Custom training',
        'Lead qualification',
        'Appointment scheduling',
        'Payment processing'
      ],
      popular: false,
      icon: '💬',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      link: 'https://ziontechgroup.com/ai-chatbot-platform',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($50-2500), and ManyChat ($15-390)',
      targetAudience: 'Customer support teams, e-commerce businesses, and service providers',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Customer Experience',
      realService: true
    },
    {
      name: 'AI Fraud Detection',
      tagline: 'Protect your business from fraud',
      price: '$199',
      period: '/month',
      description: 'Advanced AI-powered fraud detection that identifies and prevents fraudulent activities in real-time.',
      features: [
        'Real-time transaction monitoring',
        'Machine learning algorithms',
        'Behavioral analysis',
        'Risk scoring',
        'Automated blocking',
        'Compliance reporting',
        'API integration',
        'Custom rule configuration'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      marketPosition: 'Competitive with Sift ($0-500), Signifyd ($0-1000), and Riskified ($0-500)',
      targetAudience: 'E-commerce businesses, financial institutions, and online marketplaces',
      trialDays: 14,
      setupTime: '45 minutes',
      category: 'Security & Compliance',
      realService: true
    }
  ];

  const categories = [
    { name: 'All', count: 35 },
    { name: 'AI & Machine Learning', count: 12 },
    { name: 'Cloud & DevOps', count: 8 },
    { name: 'Business & Productivity', count: 9 },
    { name: 'Marketing & Sales', count: 6 }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const realServicesCount = microSaasServices.filter(service => service.realService).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <title>35+ Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 35+ real micro SaaS services including AI tools, cloud optimization, cybersecurity, business intelligence, and more. Start your free trial today." />
        <meta name="keywords" content="micro SaaS services, AI tools, cloud optimization, cybersecurity, business intelligence, marketing automation, team collaboration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="35+ Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="35+ Micro SaaS Services - Zion Tech Group" />
        <meta name="twitter:description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="particles-bg opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-blue-300">
              Real Micro SaaS Solutions
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Transform Your Business with
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real Micro SaaS Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover {realServicesCount}+ fully-functional micro SaaS tools that deliver immediate value. 
            From AI-powered automation to cloud optimization, get enterprise-grade solutions without enterprise complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="futuristic"
              size="lg"
              href="#services"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              glow
              className="min-w-[200px]"
            >
              Explore Services
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              href="#demo"
              icon={<Play className="w-5 h-5" />}
              iconPosition="left"
              glow
              className="min-w-[200px]"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{realServicesCount}+</div>
              <div className="text-sm text-gray-400">Real Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">14</div>
              <div className="text-sm text-gray-400">Day Trials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <Card
                key={index}
                variant="glass"
                size="lg"
                hover
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${advantage.bgColor} flex items-center justify-center text-3xl`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Not just mockups - these are fully functional, production-ready tools that solve real business problems.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                variant="futuristic"
                size="lg"
                hover
                glow
                className="group relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`text-3xl mr-3 ${service.textColor}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500">{service.tagline}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-500 ml-1">{service.period}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.setupTime} setup
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {service.trialDays}-day trial
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-gray-500 text-center">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    href={service.link}
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                    fullWidth
                    className="sm:flex-1"
                  >
                    Start Free Trial
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    fullWidth
                    className="sm:flex-1"
                  >
                    Learn More
                  </Button>
                </div>
                
                {/* Market Position */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <strong>Market Position:</strong> {service.marketPosition}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    <strong>Target:</strong> {service.targetAudience}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="neon-text-green">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with any of our 35+ micro SaaS services today. Our team of experts is here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border border-neon-blue/20 rounded-2xl p-6 backdrop-blur-sm">
                <Phone className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-neon-blue font-semibold text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-green/10 to-neon-green/5 border border-neon-green/20 rounded-2xl p-6 backdrop-blur-sm">
                <Mail className="h-12 w-12 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-neon-green font-semibold text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border border-neon-purple/20 rounded-2xl p-6 backdrop-blur-sm">
                <MapPin className="h-12 w-12 text-neon-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                <p className="text-neon-purple font-semibold text-sm leading-tight">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              href="/contact"
              className="btn-futuristic px-8 py-3 text-lg font-semibold"
            >
              Start Your Free Trial Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}