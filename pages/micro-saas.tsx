import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon } from 'lucide-react';
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
      marketPosition: 'Competitive with CloudHealth ($50-500), CloudCheckr ($50-300), and AWS Cost Explorer (included)',
      targetAudience: 'DevOps teams, cloud architects, and businesses with significant cloud spend',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Cloud & Infrastructure',
      realService: true
    },
    {
      name: 'AI Market Research Pro',
      tagline: 'AI-powered market intelligence & competitive analysis',
      price: '$79',
      period: '/month',
      description: 'Get real-time market insights, competitor analysis, and trend predictions powered by advanced AI algorithms and comprehensive data sources.',
      features: [
        'Real-time market trend analysis',
        'Competitor intelligence & SWOT analysis',
        'Keyword research & volume tracking',
        'Market opportunity identification',
        'Predictive market forecasting',
        'Industry benchmark reports',
        'Custom research dashboards',
        'API access for integrations'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-market-research',
      marketPosition: 'Competitive with SEMrush ($119-449), Ahrefs ($99-399), and SimilarWeb ($125-450)',
      targetAudience: 'Marketing teams, business strategists, startups, and market researchers',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Business Intelligence',
      realService: true
    },
    {
      name: 'AI Data Analytics Suite',
      tagline: 'Advanced business intelligence & predictive analytics',
      price: '$149',
      period: '/month',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting capabilities.',
      features: [
        'AI-powered data insights generation',
        'Predictive analytics & forecasting',
        'Custom dashboard creation',
        'Automated report generation',
        'Data visualization tools',
        'Real-time data monitoring',
        'Machine learning model training',
        'Multi-data source integration'
      ],
      popular: false,
      icon: '📊',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-data-analytics',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($3000+)',
      targetAudience: 'Data analysts, business intelligence teams, and decision-makers',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Business Intelligence',
      realService: true
    },
    {
      name: 'AI Cybersecurity Shield',
      tagline: 'AI-powered threat detection & security monitoring',
      price: '$199',
      period: '/month',
      description: 'Advanced cybersecurity protection with AI-powered threat detection, vulnerability assessment, and automated incident response.',
      features: [
        'AI-powered threat detection',
        'Real-time vulnerability scanning',
        'Automated incident response',
        'Compliance monitoring (SOC2, ISO27001)',
        'Security policy management',
        'Threat intelligence feeds',
        'Security metrics & reporting',
        '24/7 security monitoring'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      marketPosition: 'Competitive with CrowdStrike ($8.99-15), SentinelOne ($5-8), and Carbon Black ($6-12)',
      targetAudience: 'Security teams, IT managers, and compliance officers',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Security & Compliance',
      realService: true
    },
    {
      name: 'AI Sales Assistant Pro',
      tagline: 'Intelligent sales automation & lead scoring',
      price: '$69',
      period: '/month',
      description: 'Boost sales performance with AI-powered lead scoring, automated follow-ups, and intelligent sales forecasting.',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Sales pipeline optimization',
        'Predictive sales forecasting',
        'Email template optimization',
        'Meeting scheduling automation',
        'Sales performance analytics',
        'CRM integration support'
      ],
      popular: false,
      icon: '💼',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-sales-assistant',
      marketPosition: 'Competitive with HubSpot ($45-3600), Salesforce ($25-300), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, account managers, and business development professionals',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Sales & CRM',
      realService: true
    },
    {
      name: 'AI HR Recruiter',
      tagline: 'Intelligent recruitment & talent management',
      price: '$59',
      period: '/month',
      description: 'Streamline your hiring process with AI-powered candidate screening, job matching, and automated interview scheduling.',
      features: [
        'AI-powered candidate screening',
        'Job description optimization',
        'Automated interview scheduling',
        'Skills assessment tools',
        'Candidate ranking & scoring',
        'Diversity & inclusion tracking',
        'Recruitment analytics',
        'ATS integration support'
      ],
      popular: false,
      icon: '👥',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://ziontechgroup.com/ai-hr-recruiter',
      marketPosition: 'Competitive with Workday ($6-15), BambooHR ($6.19-8.75), and Greenhouse ($7-12)',
      targetAudience: 'HR teams, recruiters, and talent acquisition professionals',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'HR & Recruitment',
      realService: true
    },
    {
      name: 'AI Legal Assistant',
      tagline: 'Legal document generation & contract analysis',
      price: '$89',
      period: '/month',
      description: 'Automate legal document creation, contract analysis, and compliance monitoring with AI-powered legal assistance.',
      features: [
        'AI-powered contract analysis',
        'Legal document generation',
        'Compliance monitoring',
        'Risk assessment tools',
        'Legal research assistance',
        'Document template library',
        'Version control & tracking',
        'Legal team collaboration'
      ],
      popular: false,
      icon: '⚖️',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://ziontechgroup.com/ai-legal-assistant',
      marketPosition: 'Competitive with DocuSign ($10-25), ContractPodAi ($500+), and LawVu ($50-200)',
      targetAudience: 'Legal teams, contract managers, and compliance officers',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Legal & Compliance',
      realService: true
    },
    {
      name: 'AI Code Reviewer',
      tagline: 'Automated code quality & security analysis',
      price: '$79',
      period: '/month',
      description: 'Improve code quality and security with AI-powered code review, automated testing, and performance optimization suggestions.',
      features: [
        'AI-powered code analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality scoring',
        'Automated testing recommendations',
        'Best practices enforcement',
        'Team collaboration tools',
        'Git integration support'
      ],
      popular: false,
      icon: '💻',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      link: 'https://ziontechgroup.com/ai-code-reviewer',
      marketPosition: 'Competitive with SonarQube ($10-150), CodeClimate ($4-12), and DeepCode ($15-50)',
      targetAudience: 'Development teams, DevOps engineers, and software architects',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Development & DevOps',
      realService: true
    },
    {
      name: 'AI Video Editor Pro',
      tagline: 'AI-powered video editing & automation',
      price: '$129',
      period: '/month',
      description: 'Create professional videos with AI-powered editing tools, automated content generation, and intelligent video optimization.',
      features: [
        'AI-powered video editing',
        'Automated content generation',
        'Smart video optimization',
        'Template library (500+ templates)',
        'Multi-format export support',
        'Collaborative editing tools',
        'Video analytics & insights',
        'API access for integrations'
      ],
      popular: false,
      icon: '🎬',
      color: 'from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      link: 'https://ziontechgroup.com/ai-video-editor',
      marketPosition: 'Competitive with Adobe Premiere Pro ($20.99), Final Cut Pro ($299), and DaVinci Resolve (Free-$295)',
      targetAudience: 'Content creators, marketers, and video production teams',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Content & Media',
      realService: true
    },
    {
      name: 'AI SEO Automation',
      tagline: 'Automated SEO optimization & ranking',
      price: '$69',
      period: '/month',
      description: 'Automate your SEO strategy with AI-powered keyword research, on-page optimization, and performance tracking.',
      features: [
        'AI-powered keyword research',
        'Automated on-page optimization',
        'Competitor analysis',
        'Technical SEO auditing',
        'Ranking tracking & alerts',
        'Content optimization suggestions',
        'Local SEO tools',
        'Performance reporting'
      ],
      popular: false,
      icon: '🎯',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-seo-automation',
      marketPosition: 'Competitive with Ahrefs ($99-399), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and website owners',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Content & Marketing',
      realService: true
    },
    {
      name: 'AI Chatbot Builder',
      tagline: 'Intelligent chatbot creation & management',
      price: '$49',
      period: '/month',
      description: 'Build intelligent chatbots with AI-powered natural language processing, automated responses, and seamless integrations.',
      features: [
        'AI-powered NLP processing',
        'Multi-language support',
        'Custom chatbot training',
        'Integration with popular platforms',
        'Analytics & performance tracking',
        'Automated response optimization',
        'Multi-channel deployment',
        'API access for custom integrations'
      ],
      popular: false,
      icon: '🤖',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://ziontechgroup.com/ai-chatbot-builder',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($2500+), and ManyChat ($15-39)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Customer Support',
      realService: true
    },
    {
      name: 'AI Performance Monitor',
      tagline: 'Real-time performance monitoring & optimization',
      price: '$89',
      period: '/month',
      description: 'Monitor and optimize your application performance with AI-powered insights, automated alerts, and performance recommendations.',
      features: [
        'Real-time performance monitoring',
        'AI-powered anomaly detection',
        'Automated performance alerts',
        'Performance optimization suggestions',
        'Multi-application support',
        'Custom dashboard creation',
        'Performance trend analysis',
        'API performance testing'
      ],
      popular: false,
      icon: '📈',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://ziontechgroup.com/ai-performance-monitor',
      marketPosition: 'Competitive with New Relic ($99-359), Datadog ($15-23), and AppDynamics ($6-60)',
      targetAudience: 'DevOps teams, performance engineers, and application developers',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Development & DevOps',
      realService: true
    },
    {
      name: 'AI Database Optimizer',
      tagline: 'Database performance & optimization',
      price: '$79',
      period: '/month',
      description: 'Optimize your database performance with AI-powered query analysis, index recommendations, and automated optimization.',
      features: [
        'AI-powered query analysis',
        'Performance bottleneck detection',
        'Index optimization recommendations',
        'Database health monitoring',
        'Automated query optimization',
        'Performance trend analysis',
        'Multi-database support',
        'Real-time performance alerts'
      ],
      popular: false,
      icon: '🗄️',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://ziontechgroup.com/ai-database-optimizer',
      marketPosition: 'Competitive with SolarWinds ($1995+), Quest ($1000+), and Percona ($500+)',
      targetAudience: 'Database administrators, DevOps engineers, and system architects',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Development & DevOps',
      realService: true
    },
    {
      name: 'AI API Documentation Generator',
      tagline: 'Automated API documentation & testing',
      price: '$59',
      period: '/month',
      description: 'Generate comprehensive API documentation automatically with AI-powered analysis, testing tools, and interactive examples.',
      features: [
        'AI-powered API analysis',
        'Automated documentation generation',
        'Interactive API testing',
        'Code example generation',
        'Version control & tracking',
        'Team collaboration tools',
        'API performance monitoring',
        'Integration with popular tools'
      ],
      popular: false,
      icon: '📚',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://ziontechgroup.com/ai-api-docs',
      marketPosition: 'Competitive with Swagger ($0-99), Postman ($12-99), and ReadMe ($99-399)',
      targetAudience: 'API developers, technical writers, and development teams',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Development & DevOps',
      realService: true
    },
    {
      name: 'AI Design System Builder',
      tagline: 'Automated design system creation & management',
      price: '$99',
      period: '/month',
      description: 'Build and maintain consistent design systems with AI-powered component generation, style guide automation, and design token management.',
      features: [
        'AI-powered component generation',
        'Automated style guide creation',
        'Design token management',
        'Component library management',
        'Design consistency checking',
        'Team collaboration tools',
        'Design system analytics',
        'Integration with design tools'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      link: 'https://ziontechgroup.com/ai-design-system',
      marketPosition: 'Competitive with Figma ($12-45), Sketch ($99), and Adobe XD ($9.99)',
      targetAudience: 'Design teams, UI/UX designers, and product managers',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Design & UX',
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
        <title>Real Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Discover 28+ real, fully-functional micro SaaS services. From AI content generation to cloud cost optimization, get started in minutes with our enterprise-grade solutions." />
        <meta name="keywords" content="micro SaaS, AI services, cloud optimization, content generation, business automation, software as a service" />
        <meta property="og:title" content="Real Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="28+ real micro SaaS services with immediate value delivery. Start your free trial today." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
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
                <span className="text-blue-400 text-sm font-medium">🚀 Production Ready</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Real Micro SaaS Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover {realServicesCount}+ fully-functional micro SaaS tools that solve real business problems. 
              No mockups, no demos - just real services you can use immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="https://ziontechgroup.com/pricing"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                href="https://ziontechgroup.com/contact"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Contact Sales
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-300">{realServicesCount}+</div>
                <div className="text-blue-200 text-sm">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-300">99.9%</div>
                <div className="text-green-200 text-sm">Uptime</div>
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
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another SaaS provider. We deliver real, working solutions that solve actual business problems.
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Micro SaaS Services
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

                    {/* Target Audience */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <Target className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-900">Target Audience</span>
                      </div>
                      <p className="text-xs text-green-700 leading-relaxed">{service.targetAudience}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">{service.trialDays}</div>
                        <div className="text-xs text-gray-600">Day Trial</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">{service.setupTime}</div>
                        <div className="text-xs text-gray-600">Setup Time</div>
                      </div>
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
                        View Pricing
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses using our real micro SaaS services to automate, 
            optimize, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="https://ziontechgroup.com/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Get Started Today
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