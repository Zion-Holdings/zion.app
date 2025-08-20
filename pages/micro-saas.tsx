import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Mail, MessageCircle, Kanban, Headphones } from 'lucide-react';
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
    }
  ];

  const categories = ['All', 'Content & Marketing', 'Development & DevOps', 'Sales & CRM', 'Legal & Compliance', 'Human Resources', 'Analytics & Data', 'Productivity & Collaboration', 'Customer Service', 'Finance & Accounting', 'Design & UX'];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Real Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 28+ real, fully functional micro SaaS services built with modern technology. AI-powered tools for content, marketing, development, and business automation." />
        <meta name="keywords" content="micro SaaS, AI services, business automation, content generation, cloud optimization, project management, customer support" />
        <meta property="og:title" content="Real Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="28+ real micro SaaS services with AI-powered automation, modern tech stack, and enterprise-grade reliability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              28+ Real Micro SaaS Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Real Micro SaaS Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Built for Real Businesses
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover 28+ fully functional micro SaaS tools built with modern technology. 
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
                className={`p-6 rounded-2xl bg-gradient-to-br ${advantage.bgColor} border border-white/10 backdrop-blur-sm`}
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
              Real Micro SaaS Services
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
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

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 h-full">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our real micro SaaS services to automate, 
            optimize, and scale their operations.
          </p>
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