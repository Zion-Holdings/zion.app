import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon } from 'lucide-react';
import Button from '../components/ui/Button';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
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
      bgColor: 'from-purple-500/10 to-purple-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-teal-500/10'
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
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Development & DevOps',
    'Sales & CRM',
    'Legal & Compliance',
    'Human Resources',
    'Analytics & Data',
    'Finance & Accounting',
    'Project Management',
    'Customer Experience'
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const realServicesCount = microSaasServices.filter(service => service.realService).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <title>Pricing - Real Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for 28+ real micro SaaS services. Start your free trial today with competitive pricing that's 15-40% below market average." />
        <meta name="keywords" content="micro SaaS pricing, affordable business tools, SaaS pricing, business software pricing" />
        <meta property="og:title" content="Pricing - Real Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for 28+ real micro SaaS services. Start your free trial today." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <span className="text-green-400 text-sm font-medium">✨ {realServicesCount}+ Real Services</span>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                <span className="text-blue-400 text-sm font-medium">💰 15-40% Below Market</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs. 
              All services include 14-day free trials and enterprise-grade support.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${selectedPlan === 'monthly' ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
              <button
                onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  selectedPlan === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    selectedPlan === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${selectedPlan === 'yearly' ? 'text-white' : 'text-blue-200'}`}>
                Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-300">{realServicesCount}+</div>
                <div className="text-blue-200 text-sm">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-300">15-40%</div>
                <div className="text-green-200 text-sm">Below Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-300">14</div>
                <div className="text-purple-200 text-sm">Day Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-300">24/7</div>
                <div className="text-orange-200 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Our Pricing Wins
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions at micro SaaS prices, with transparent pricing that scales with your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="group">
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${advantage.bgColor} border border-gray-200/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service listed below is fully functional and ready for production use. 
              Start your free trial today and see the difference.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200/50 overflow-hidden">
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-br ${service.color} text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                          Most Popular
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedPlan === 'yearly' 
                          ? `$${Math.round(parseInt(service.price.replace('$', '')) * 0.8)}`
                          : service.price
                        }
                        <span className="text-lg text-gray-500">
                          {selectedPlan === 'yearly' ? '/month' : service.period}
                        </span>
                      </div>
                      {selectedPlan === 'yearly' && (
                        <div className="text-sm text-green-600 font-medium">
                          Billed annually (Save 20%)
                        </div>
                      )}
                      <div className="text-sm text-gray-500">
                        {service.trialDays}-day free trial
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-gray-500 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Market Position */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-900">Market Position</span>
                      </div>
                      <p className="text-xs text-blue-700 leading-relaxed">{service.marketPosition}</p>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <Button 
                        href={service.link}
                        className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        href={`${service.link}/pricing`}
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-xl"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For larger organizations requiring custom solutions, dedicated support, and enterprise features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Enterprise */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Enterprise</h3>
                <p className="text-gray-600">Perfect for growing teams</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">$299</div>
                <div className="text-gray-500">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Up to 50 users
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Advanced analytics
                </li>
              </ul>

              <Button 
                href="https://ziontechgroup.com/contact"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
              >
                Contact Sales
              </Button>
            </div>

            {/* Professional Enterprise */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Enterprise</h3>
                <p className="text-gray-600">For established businesses</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">$599</div>
                <div className="text-gray-500">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Up to 200 users
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  SLA guarantees
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  On-premise options
                </li>
              </ul>

              <Button 
                href="https://ziontechgroup.com/contact"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl"
              >
                Contact Sales
              </Button>
            </div>

            {/* Enterprise Plus */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Plus</h3>
                <p className="text-gray-600">For large organizations</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                <div className="text-gray-500">pricing</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Custom solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  Compliance certifications
                </li>
              </ul>

              <Button 
                href="https://ziontechgroup.com/contact"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What's included in the free trial?
              </h3>
              <p className="text-gray-600">
                All services include a 14-day free trial with full access to all features. No credit card required to start. 
                You can upgrade to a paid plan at any time during or after the trial period.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. 
                You'll continue to have access until the end of your current billing period.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you offer volume discounts?
              </h3>
              <p className="text-gray-600">
                Yes, we offer volume discounts for teams and organizations. Contact our sales team for custom pricing 
                on enterprise plans with 50+ users or multiple service subscriptions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. 
                All payments are processed securely through Stripe.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600">
                No setup fees! All our services are designed to be self-service with instant activation. 
                If you need help with setup, our support team is available 24/7 at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and experience the difference that real micro SaaS services can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="https://ziontechgroup.com/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              href="https://ziontechgroup.com/demo"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}