import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Play, Mail, Phone, MapPin, Crown, Sparkles, CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: {
        monthly: 29,
        yearly: 290
      },
      features: [
        'Up to 3 services',
        'Basic support',
        'Standard features',
        '14-day trial',
        'Email support'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: {
        monthly: 99,
        yearly: 990
      },
      features: [
        'Up to 10 services',
        'Priority support',
        'Advanced features',
        '14-day trial',
        'Phone & email support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: {
        monthly: 299,
        yearly: 2990
      },
      features: [
        'Unlimited services',
        '24/7 dedicated support',
        'All features included',
        '14-day trial',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-600/10'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      price: 49,
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
      category: 'Content & Marketing',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Cloud Cost Optimizer',
      price: 99,
      period: '/month',
      description: 'Intelligent cloud cost management and optimization. Reduce cloud spending by 30%.',
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
      category: 'Development & DevOps',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI Code Review Assistant',
      price: 79,
      period: '/month',
      description: 'Automated code review with AI-powered security scanning and performance analysis.',
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
      category: 'Development & DevOps',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'API Documentation Generator',
      price: 59,
      period: '/month',
      description: 'Generate comprehensive API documentation automatically from your source code.',
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
      category: 'Development & DevOps',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Database Performance Monitor',
      price: 89,
      period: '/month',
      description: 'Monitor and optimize database performance across multiple database types.',
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
      category: 'Development & DevOps',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI Sales Assistant',
      price: 89,
      period: '/month',
      description: 'AI-powered sales automation that helps close more deals.',
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
      category: 'Sales & CRM',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI Legal Assistant',
      price: 149,
      period: '/month',
      description: 'Generate legal documents and contracts with AI assistance.',
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
      category: 'Legal & Compliance',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI HR Assistant',
      price: 69,
      period: '/month',
      description: 'Automate HR processes with AI-powered tools.',
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
      category: 'Human Resources',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Business Intelligence Hub',
      price: 99,
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics.',
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
      category: 'Analytics & Data',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI Video Editor Pro',
      price: 79,
      period: '/month',
      description: 'Create stunning videos with AI-powered editing tools.',
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
      category: 'Content & Marketing',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Email Marketing Automation',
      price: 29,
      period: '/month',
      description: 'Create personalized email campaigns with AI-powered automation.',
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
      category: 'Content & Marketing',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Social Media Scheduler',
      price: 19,
      period: '/month',
      description: 'Schedule and automate your social media posts across multiple platforms.',
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
      category: 'Content & Marketing',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Invoice & Billing Manager',
      price: 39,
      period: '/month',
      description: 'Automate invoicing, payment tracking, and financial reporting.',
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
      category: 'Finance & Accounting',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Project Management Suite',
      price: 69,
      period: '/month',
      description: 'Complete project management solution with task tracking and team collaboration.',
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
      category: 'Project Management',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'Customer Support Hub',
      price: 49,
      period: '/month',
      description: 'Centralized customer support platform with ticket management and knowledge base.',
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
      category: 'Customer Experience',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI SEO Optimizer',
      price: 89,
      period: '/month',
      description: 'AI-powered SEO optimization that improves your search rankings.',
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
      category: 'Content & Marketing',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI Chatbot Platform',
      price: 59,
      period: '/month',
      description: 'Build AI-powered chatbots that provide 24/7 customer support.',
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
      category: 'Customer Experience',
      realService: true,
      savings: 'Save 20% with yearly billing'
    },
    {
      name: 'AI Fraud Detection',
      price: 199,
      period: '/month',
      description: 'Advanced AI-powered fraud detection that identifies and prevents fraudulent activities.',
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
      category: 'Security & Compliance',
      realService: true,
      savings: 'Save 20% with yearly billing'
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

  const yearlyDiscount = 0.2; // 20% discount for yearly billing

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <title>Pricing & Plans | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for all our micro SaaS services. Choose from flexible plans starting at $19/month. Start your 14-day free trial today." />
        <meta name="keywords" content="pricing, plans, micro SaaS, subscription, Zion Tech Group, business solutions" />
        <meta name="author" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pricing & Plans | Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for all our micro SaaS services. Choose from flexible plans starting at $19/month." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing & Plans | Zion Tech Group" />
        <meta name="twitter:description" content="Transparent pricing for all our micro SaaS services. Choose from flexible plans starting at $19/month." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="particles-bg opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <DollarSign className="w-4 h-4 text-blue-300 mr-2" />
            <span className="text-sm font-medium text-blue-300">
              Transparent Pricing
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose the plan that fits your business needs. All plans include a 14-day free trial 
            and our commitment to helping you succeed.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-1 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with what you need, scale as you grow. All plans include our core features and 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                variant={tier.popular ? 'holographic' : 'glass'}
                size="xl"
                hover
                className={`relative text-center ${tier.popular ? 'scale-105 border-2 border-purple-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      <Crown className="w-4 h-4 inline mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'yearly' ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {billingCycle === 'yearly' ? '/year' : '/month'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-600 mt-2">
                      Save ${Math.round(tier.price.monthly * 12 * yearlyDiscount)} per year
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button
                  variant={tier.popular ? 'futuristic' : 'primary'}
                  size="lg"
                  href="/contact"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  fullWidth
                  glow={tier.popular}
                  className="py-4"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Individual Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pay only for what you need. Each service is available individually or as part of our plans.
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
                      <Star className="w-3 h-3 inline mr-1" />
                      Popular
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
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      ${billingCycle === 'yearly' ? Math.round(service.price * 12 * (1 - yearlyDiscount)) : service.price}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {billingCycle === 'yearly' ? '/year' : service.period}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-600">
                      {service.savings}
                    </p>
                  )}
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card variant="glass" size="lg" className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's included in the free trial?
              </h3>
              <p className="text-gray-600">
                All features of the service are available during the 14-day free trial. No credit card required to start.
              </p>
            </Card>
            
            <Card variant="glass" size="lg" className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.
              </p>
            </Card>
            
            <Card variant="glass" size="lg" className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer volume discounts?
              </h3>
              <p className="text-gray-600">
                Yes, we offer custom pricing for enterprise customers with 100+ users. Contact our sales team for details.
              </p>
            </Card>
            
            <Card variant="glass" size="lg" className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="holographic" size="xl" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required, no setup fees.
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
                href="/micro-saas"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                glow
                className="min-w-[200px]"
              >
                Explore Services
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}