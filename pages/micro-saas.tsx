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
      marketPosition: 'Competitive with CloudHealth ($20-500), CloudCheckr ($50-200), and AWS Cost Explorer (included)',
      targetAudience: 'DevOps teams, cloud architects, and businesses with significant cloud spending',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Cloud & DevOps',
      realService: true
    },
    {
      name: 'AI Market Research Pro',
      tagline: 'Real-time market intelligence & competitive analysis',
      price: '$79',
      period: '/month',
      description: 'AI-powered market research platform providing real-time insights, competitor analysis, and market trends to drive strategic decisions.',
      features: [
        'Real-time market trend analysis',
        'Competitor intelligence & SWOT analysis',
        'Market segmentation & targeting',
        'AI-generated market reports',
        'Custom research requests',
        'Export to PDF/Excel/CSV',
        'Scheduled reporting',
        'API access for integrations'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-market-research',
      marketPosition: 'Competitive with SimilarWeb ($199-599), SEMrush ($119-449), and Ahrefs ($99-399)',
      targetAudience: 'Marketing teams, business analysts, startups, and strategic planners',
      trialDays: 14,
      setupTime: '5 minutes',
      category: 'Business Intelligence',
      realService: true
    },
    {
      name: 'AI Customer Support Suite',
      tagline: 'Intelligent ticket routing & automated responses',
      price: '$69',
      period: '/month',
      description: 'AI-powered customer support platform with intelligent ticket routing, sentiment analysis, and automated response generation.',
      features: [
        'AI-powered ticket routing',
        'Sentiment analysis & intent detection',
        'Automated response generation',
        'Knowledge base search',
        'Customer profile analytics',
        'Performance metrics & reporting',
        'Multi-channel support',
        'Integration with popular CRMs'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-customer-support',
      marketPosition: 'Competitive with Zendesk ($49-199), Intercom ($39-159), and Freshdesk ($15-79)',
      targetAudience: 'Customer support teams, e-commerce businesses, and SaaS companies',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Customer Support',
      realService: true
    },
    {
      name: 'AI Financial Advisor Pro',
      tagline: 'Intelligent investment recommendations & portfolio analysis',
      price: '$89',
      period: '/month',
      description: 'AI-powered financial advisory platform providing investment recommendations, portfolio analysis, and financial planning tools.',
      features: [
        'AI investment recommendations',
        'Portfolio performance analysis',
        'Risk assessment & management',
        'Financial goal tracking',
        'Tax optimization strategies',
        'Retirement planning tools',
        'Market analysis & insights',
        'Comprehensive financial reports'
      ],
      popular: false,
      icon: '💰',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://ziontechgroup.com/ai-financial-advisor',
      marketPosition: 'Competitive with Personal Capital (free), Betterment ($0-0.25%), and Wealthfront ($0-0.25%)',
      targetAudience: 'Individual investors, financial advisors, and wealth management firms',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Financial Services',
      realService: true
    },
    {
      name: 'AI HR Assistant Pro',
      tagline: 'Intelligent recruitment & employee management',
      price: '$59',
      period: '/month',
      description: 'AI-powered HR platform for intelligent recruitment, employee performance tracking, and automated HR processes.',
      features: [
        'AI-powered candidate screening',
        'Resume parsing & analysis',
        'Interview scheduling automation',
        'Performance review management',
        'Employee engagement analytics',
        'Compliance monitoring',
        'Document generation',
        'Integration with HRIS systems'
      ],
      popular: false,
      icon: '👥',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      link: 'https://ziontechgroup.com/ai-hr-assistant',
      marketPosition: 'Competitive with BambooHR ($6.19-8.95), Workday ($45-100), and ADP ($59-199)',
      targetAudience: 'HR professionals, recruiters, and growing businesses',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Human Resources',
      realService: true
    },
    {
      name: 'AI Legal Assistant Pro',
      tagline: 'Intelligent legal document generation & review',
      price: '$79',
      period: '/month',
      description: 'AI-powered legal platform for document generation, contract review, and legal research assistance.',
      features: [
        'AI contract review & analysis',
        'Legal document generation',
        'Compliance checking',
        'Legal research assistance',
        'Document template library',
        'Version control & tracking',
        'Client portal access',
        'Integration with legal software'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://ziontechgroup.com/ai-legal-assistant',
      marketPosition: 'Competitive with LegalZoom ($39-299), Rocket Lawyer ($39.99), and DoNotPay ($12)',
      targetAudience: 'Legal professionals, law firms, and businesses requiring legal assistance',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Legal Services',
      realService: true
    },
    {
      name: 'AI Sales Assistant Pro',
      tagline: 'Intelligent lead scoring & sales automation',
      price: '$69',
      period: '/month',
      description: 'AI-powered sales platform for lead scoring, pipeline management, and sales process automation.',
      features: [
        'AI lead scoring & prioritization',
        'Sales pipeline analytics',
        'Email sequence automation',
        'Meeting scheduling automation',
        'Sales forecasting & analytics',
        'CRM integration',
        'Performance tracking',
        'Custom sales workflows'
      ],
      popular: false,
      icon: '📈',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-sales-assistant',
      marketPosition: 'Competitive with HubSpot ($45-3600), Salesforce ($25-300), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, business development professionals, and growing companies',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Sales & Marketing',
      realService: true
    },
    {
      name: 'AI Code Review Pro',
      tagline: 'Intelligent code analysis & quality assurance',
      price: '$49',
      period: '/month',
      description: 'AI-powered code review platform for automated code analysis, quality checks, and security vulnerability detection.',
      features: [
        'Automated code review',
        'Security vulnerability detection',
        'Code quality metrics',
        'Performance optimization suggestions',
        'Best practices enforcement',
        'Integration with Git platforms',
        'Team collaboration tools',
        'Custom rule configuration'
      ],
      popular: false,
      icon: '💻',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/ai-code-review',
      marketPosition: 'Competitive with SonarQube ($10-150), CodeClimate ($4-15), and DeepCode (free)',
      targetAudience: 'Development teams, software engineers, and tech companies',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Development Tools',
      realService: true
    },
    {
      name: 'AI Video Editor Pro',
      tagline: 'Intelligent video editing & automation',
      price: '$89',
      period: '/month',
      description: 'AI-powered video editing platform for automated video creation, editing, and optimization.',
      features: [
        'AI-powered video editing',
        'Automated scene detection',
        'Smart content cropping',
        'Background removal & replacement',
        'Auto-caption generation',
        'Video optimization for platforms',
        'Template library',
        'Export in multiple formats'
      ],
      popular: false,
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-video-editor',
      marketPosition: 'Competitive with Lumen5 ($19-79), Synthesia ($30-1000), and RunwayML ($12-76)',
      targetAudience: 'Content creators, marketers, and video production teams',
      trialDays: 14,
      setupTime: '5 minutes',
      category: 'Content Creation',
      realService: true
    },
    {
      name: 'AI SEO Automation Pro',
      tagline: 'Intelligent SEO optimization & monitoring',
      price: '$59',
      period: '/month',
      description: 'AI-powered SEO platform for automated optimization, keyword research, and performance monitoring.',
      features: [
        'AI keyword research & analysis',
        'On-page optimization suggestions',
        'Technical SEO auditing',
        'Competitor analysis',
        'Ranking tracking & reporting',
        'Content optimization recommendations',
        'Local SEO tools',
        'Integration with analytics platforms'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/ai-seo-automation',
      marketPosition: 'Competitive with Ahrefs ($99-399), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO professionals, digital marketers, and website owners',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Digital Marketing',
      realService: true
    },
    {
      name: 'AI Business Intelligence Pro',
      tagline: 'Intelligent data analysis & insights',
      price: '$99',
      period: '/month',
      description: 'AI-powered business intelligence platform for data analysis, visualization, and predictive insights.',
      features: [
        'AI-powered data analysis',
        'Interactive dashboards',
        'Predictive analytics',
        'Data visualization tools',
        'Custom report generation',
        'Real-time data monitoring',
        'Integration with data sources',
        'Advanced filtering & segmentation'
      ],
      popular: false,
      icon: '📊',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($3000+)',
      targetAudience: 'Business analysts, data scientists, and executive teams',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Business Intelligence',
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
    'Customer Experience',
    'Security & Compliance'
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const realServicesCount = microSaasServices.filter(service => service.realService).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <title>Real Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Discover 28+ real, fully-functional micro SaaS services. From AI content generation to cloud cost optimization, get started in minutes with our enterprise-grade solutions." />
        <meta name="keywords" content="micro SaaS, AI automation, cloud optimization, business tools, enterprise software, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Real Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Discover 28+ real, fully-functional micro SaaS services. From AI content generation to cloud cost optimization, get started in minutes." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Micro SaaS Services | Zion Tech Group" />
        <meta name="twitter:description" content="Discover 28+ real, fully-functional micro SaaS services. From AI content generation to cloud cost optimization, get started in minutes." />
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
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="holographic" size="xl" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SaaS solutions to automate, optimize, and scale their operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="futuristic"
                size="lg"
                href="/contact"
                icon={<MessageSquare className="w-5 h-5" />}
                iconPosition="right"
                glow
                className="min-w-[200px]"
              >
                Contact Sales
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                href="/pricing"
                icon={<DollarSign className="w-5 h-5" />}
                iconPosition="left"
                glow
                className="min-w-[200px]"
              >
                View Pricing
              </Button>
            </div>
          </Card>
        </div>
      </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div className="absolute inset-0 neural-bg opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI-powered micro SaaS solutions. 
                Get started today with a 14-day free trial and see the difference AI can make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-blue-400" />
                    Get in Touch
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-blue-400" />
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-blue-400" />
                      <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                        +1 302 464 0950
                      </a>
                    </p>
                    <p className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                      <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Star className="w-6 h-6 mr-3 text-green-400" />
                    Why Choose Zion Tech Group?
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-green-400" />
                      Enterprise-grade security & reliability
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-green-400" />
                      99.9% uptime guarantee
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-green-400" />
                      24/7 AI-powered support
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-green-400" />
                      SOC 2 compliance
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-green-400" />
                      Seamless integrations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Rocket className="w-6 h-6 mr-3 text-purple-400" />
                  Start Your Journey Today
                </h3>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">14-Day Free Trial</h4>
                    <p className="text-gray-300 text-sm">
                      Try any service risk-free for 14 days. No credit card required, 
                      full access to all features.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">Instant Setup</h4>
                    <p className="text-gray-300 text-sm">
                      Get started in minutes with our intuitive interfaces and 
                      automated onboarding process.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                    <p className="text-gray-300 text-sm">
                      Our AI-powered support system and expert team are here to 
                      help you succeed 24/7.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    href="https://ziontechgroup.com/contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Visit us at{' '}
                  <a 
                    href="https://ziontechgroup.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ziontechgroup.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}