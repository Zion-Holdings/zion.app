import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Globe as GlobeIcon } from 'lucide-react';
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
      name: 'AI-Powered CRM',
      tagline: 'Intelligent customer relationship management',
      price: '$79',
      period: '/month',
      description: 'Next-generation CRM with AI-powered lead scoring, automated follow-ups, and predictive analytics. Boost your sales pipeline with intelligent insights.',
      features: [
        'AI lead scoring & prioritization',
        'Automated follow-up sequences',
        'Predictive sales analytics',
        'Email & call tracking',
        'Pipeline management',
        'Custom deal stages',
        'Mobile app access',
        'Integration with popular tools'
      ],
      popular: true,
      icon: '🤝',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/ai-powered-crm',
      marketPosition: 'Competitive with HubSpot ($45-4500), Salesforce ($25-300), and Pipedrive ($12.50-99)',
      targetAudience: 'Sales teams, small businesses, and startups',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Sales & CRM'
    },
    {
      name: 'AI Marketing Automation Suite',
      tagline: 'Automate your entire marketing funnel',
      price: '$99',
      period: '/month',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization, lead nurturing, and ROI tracking. Scale your marketing efforts efficiently.',
      features: [
        'Multi-channel automation',
        'AI campaign optimization',
        'Lead scoring & nurturing',
        'A/B testing tools',
        'ROI tracking & analytics',
        'Email marketing automation',
        'Social media scheduling',
        'CRM integration'
      ],
      popular: true,
      icon: '🚀',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-marketing-automation-suite',
      marketPosition: 'Competitive with Marketo ($895-2000), HubSpot ($45-4500), and ActiveCampaign ($9-49)',
      targetAudience: 'Marketing teams, agencies, and growth-focused businesses',
      trialDays: 14,
      setupTime: '25 minutes',
      category: 'Marketing & Growth'
    },
    {
      name: 'Cloud Cost Optimizer',
      tagline: 'Reduce cloud spending by 30%',
      price: '$99',
      period: '/month',
      description: 'Intelligent cloud cost management and optimization. Identify waste, right-size resources, and automate cost controls.',
      features: [
        'Real-time cost monitoring',
        'Automated resource optimization',
        'Cost anomaly detection',
        'Multi-cloud support',
        'Budget alerts & controls',
        'Cost allocation tracking',
        'Optimization recommendations',
        'Integration with AWS, Azure, GCP'
      ],
      popular: false,
      icon: '☁️',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      marketPosition: 'Competitive with CloudHealth ($0-500), CloudCheckr ($0-500), and Flexera ($0-1000)',
      targetAudience: 'DevOps teams, cloud architects, and IT managers',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Development & DevOps'
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
      category: 'Legal & Compliance'
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
      category: 'Sales & CRM'
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
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-hr-assistant',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Workday ($45-100), and Zenefits ($8-27)',
      targetAudience: 'HR professionals, small businesses, and growing companies',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'HR & Operations'
    },
    {
      name: 'AI Website Builder',
      tagline: 'Build professional websites in minutes',
      price: '$59',
      period: '/month',
      description: 'Create stunning, responsive websites with AI-powered design suggestions, SEO optimization, and e-commerce capabilities. No coding required.',
      features: [
        'AI-powered design suggestions',
        'Responsive templates (100+)',
        'SEO optimization tools',
        'E-commerce integration',
        'Custom domain support',
        'Analytics dashboard',
        'Mobile-first design',
        '24/7 hosting included'
      ],
      popular: false,
      icon: '🌐',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/ai-website-builder',
      marketPosition: 'Competitive with Wix ($16-159), Squarespace ($16-49), and Webflow ($14-39)',
      targetAudience: 'Small businesses, entrepreneurs, and agencies',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Web Development'
    },
    {
      name: 'AI Data Analytics Platform',
      tagline: 'Transform data into actionable insights',
      price: '$89',
      period: '/month',
      description: 'Advanced analytics platform with AI-powered data processing, real-time dashboards, and predictive modeling. Make data-driven decisions with confidence.',
      features: [
        'Real-time data processing',
        'AI-powered insights',
        'Custom dashboards',
        'Predictive analytics',
        'Data visualization tools',
        'Automated reporting',
        'API integrations',
        'Advanced security features'
      ],
      popular: false,
      icon: '📈',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-data-analytics-platform',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, and executives',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Analytics & Data'
    },
    {
      name: 'AI Fraud Detection',
      tagline: 'Protect your business from fraud',
      price: '$199',
      period: '/month',
      description: 'Advanced AI-powered fraud detection with real-time monitoring, risk assessment, and automated threat response.',
      features: [
        'Real-time fraud monitoring',
        'AI risk assessment',
        'Automated threat response',
        'Multi-channel protection',
        'Advanced analytics',
        'Compliance reporting',
        '24/7 monitoring',
        'Custom rule configuration'
      ],
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      marketPosition: 'Competitive with Sift ($0-500), Signifyd ($0-500), and Forter ($0-1000)',
      targetAudience: 'E-commerce businesses, financial services, and online platforms',
      trialDays: 14,
      setupTime: '45 minutes',
      category: 'Security & Compliance'
    },
    {
      name: 'AI Inventory Forecasting',
      tagline: 'Optimize inventory with AI predictions',
      price: '$139',
      period: '/month',
      description: 'AI-powered inventory forecasting with demand prediction, optimization recommendations, and automated reordering.',
      features: [
        'AI demand forecasting',
        'Inventory optimization',
        'Automated reordering',
        'Supplier management',
        'Real-time tracking',
        'Analytics dashboard',
        'Mobile app access',
        'Integration with ERPs'
      ],
      popular: false,
      icon: '📦',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/ai-inventory-forecasting',
      marketPosition: 'Competitive with TradeGecko ($0-299), Zoho Inventory ($0-239), and Fishbowl ($0-500)',
      targetAudience: 'E-commerce businesses, retailers, and manufacturers',
      trialDays: 14,
      setupTime: '30 minutes',
      category: 'Finance & Operations'
    },
    {
      name: 'AI Customer Onboarding',
      tagline: 'Streamline customer activation',
      price: '$79',
      period: '/month',
      description: 'AI-powered customer onboarding with personalized experiences, progress tracking, and activation optimization.',
      features: [
        'Personalized onboarding flows',
        'Progress tracking',
        'Activation optimization',
        'Customer success scoring',
        'Automated workflows',
        'Analytics & insights',
        'Integration with CRMs',
        'Mobile app support'
      ],
      popular: false,
      icon: '🚀',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://ziontechgroup.com/ai-customer-onboarding',
      marketPosition: 'Competitive with Appcues ($0-249), Userflow ($0-400), and Intercom ($39-499)',
      targetAudience: 'SaaS companies, product teams, and customer success managers',
      trialDays: 14,
      setupTime: '20 minutes',
      category: 'Customer Experience'
    }
  ];

  const categories = ['All', 'Content & Marketing', 'Sales & CRM', 'Development & DevOps', 'Analytics & Data', 'Security & Compliance', 'Finance & Operations', 'Customer Experience', 'Web Development', 'HR & Operations', 'Legal & Compliance', 'Marketing & Growth'];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Micro SaaS Services — Zion Tech Group | 60+ Real AI-Powered Business Solutions</title>
        <meta name="description" content="Discover 60+ real micro SaaS services powered by AI. From content generation to fraud detection, each service solves specific business problems with transparent pricing and immediate value." />
        <meta property="og:title" content="Micro SaaS Services — Zion Tech Group | 60+ Real AI-Powered Business Solutions" />
        <meta property="og:description" content="Discover 60+ real micro SaaS services powered by AI. From content generation to fraud detection, each service solves specific business problems with transparent pricing and immediate value." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <GlobeIcon className="w-4 h-4 mr-2" />
                All Services on ziontechgroup.com
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                60+ Real Micro SaaS
                <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Discover specialized AI-powered solutions that solve real business problems. 
                Each service is fully functional, immediately valuable, and accessible through our unified platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button
                  href="#services"
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-2xl shadow-blue-500/25"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:border-white/40 hover:bg-white/5"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Platform
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">60+</div>
                  <div className="text-gray-400 text-sm">Real Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">14</div>
                  <div className="text-gray-400 text-sm">Day Trials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {selectedCategory === 'All' ? 'All Micro SaaS Services' : `${selectedCategory} Services`}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {selectedCategory === 'All' 
                  ? 'Choose from our comprehensive portfolio of specialized solutions'
                  : `Focused solutions for ${selectedCategory.toLowerCase()} needs`
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group">
                  <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700 hover:border-${service.color.split('-')[1]}-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </div>
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    {/* Service Info */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                      <div className="text-xs text-gray-400 mb-2">Market Position:</div>
                      <div className="text-sm text-gray-300">{service.marketPosition}</div>
                    </div>

                    {/* Trial & Setup */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.trialDays}-day trial
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Zap className="w-4 h-4 mr-1" />
                        {service.setupTime} setup
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${service.color} hover:from-${service.color.split('-')[1]}-600 hover:to-${service.color.split('-')[3]}-700 text-white shadow-lg`}
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
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

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose from our portfolio of 60+ specialized solutions. All services include comprehensive documentation, 
              dedicated support, enterprise-grade reliability, and 14-day free trials. Start with one solution 
              and add more as your business grows.
            </p>
            
            {/* Domain Integration Highlight */}
            <div className="bg-white/10 rounded-2xl p-6 mb-12 max-w-4xl mx-auto border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <GlobeIcon className="w-6 h-6 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">All Services on Zion Tech Group Domain</h3>
              </div>
              <p className="text-green-100 mb-4">
                Access all 60+ micro SaaS tools through <strong className="text-white">ziontechgroup.com</strong> for a unified experience, 
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