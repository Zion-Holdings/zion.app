import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, BarChart3, Mail, MessageSquare, Headphones, FolderOpen, Database } from 'lucide-react';
import Button from '../components/ui/Button';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      tagline: 'Professional AI-powered content creation',
      price: '$49',
      period: '/month',
      description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant. Supports 15+ languages, brand voice customization, and 100+ content templates.',
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
      link: 'https://contentgen.zion.app',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
      marketSize: '$1.2B',
      growthRate: '25% YoY',
      competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'Grammarly Business']
    },
    {
      name: 'Email Marketing Automation',
      tagline: 'Advanced email marketing with AI optimization',
      price: '$79',
      period: '/month',
      description: 'Automate your email marketing campaigns with AI-powered personalization, advanced analytics, and smart segmentation. Includes 10,000 subscribers and unlimited campaigns.',
      features: [
        'AI-powered personalization',
        'Advanced segmentation & targeting',
        'A/B testing automation',
        'Behavioral triggers',
        'Advanced analytics & reporting',
        'Template library (200+ templates)',
        'Multi-channel integration',
        'GDPR compliance tools'
      ],
      popular: false,
      icon: '📧',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://email.zion.app',
      marketPosition: 'Competitive with Mailchimp ($13-299), ConvertKit ($29-59), and ActiveCampaign ($29-149)',
      targetAudience: 'E-commerce businesses, marketers, SaaS companies, and agencies',
      marketSize: '$1.5B',
      growthRate: '18% YoY',
      competitors: ['Mailchimp', 'ConvertKit', 'ActiveCampaign', 'Klaviyo']
    },
    {
      name: 'Social Media Automation',
      tagline: 'Multi-platform social media management',
      price: '$89',
      period: '/month',
      description: 'Manage all your social media accounts from one platform. Schedule posts, analyze performance, and engage with your audience across Facebook, Twitter, Instagram, LinkedIn, and TikTok.',
      features: [
        'Multi-platform posting (5 platforms)',
        'Smart scheduling & automation',
        'Content calendar management',
        'Advanced analytics & insights',
        'AI-powered content suggestions',
        'Team collaboration tools',
        'Social listening & monitoring',
        'Influencer campaign management'
      ],
      popular: false,
      icon: '📱',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      link: 'https://social.zion.app',
      marketPosition: 'Competitive with Buffer ($15-99), Hootsuite ($49-599), and Sprout Social ($89-249)',
      targetAudience: 'Social media managers, brands, agencies, and influencers',
      marketSize: '$2.1B',
      growthRate: '22% YoY',
      competitors: ['Buffer', 'Hootsuite', 'Sprout Social', 'Later']
    },
    {
      name: 'Customer Support Automation',
      tagline: 'AI-powered customer support platform',
      price: '$69',
      period: '/month',
      description: 'Automate customer support with AI chatbots, ticket management, and knowledge base. Includes 5 agents, unlimited tickets, and advanced analytics.',
      features: [
        'AI chatbot with 95% accuracy',
        'Smart ticket routing',
        'Knowledge base management',
        'Multi-channel support',
        'Performance analytics',
        'Customer satisfaction tracking',
        'Integration with CRM systems',
        '24/7 automated support'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://support.zion.app',
      marketPosition: 'Competitive with Zendesk ($49-215), Intercom ($39-499), and Freshdesk ($15-99)',
      targetAudience: 'Customer support teams, SaaS companies, e-commerce, and service businesses',
      marketSize: '$3.2B',
      growthRate: '20% YoY',
      competitors: ['Zendesk', 'Intercom', 'Freshdesk', 'Help Scout']
    },
    {
      name: 'Project Management Suite',
      tagline: 'Comprehensive project management platform',
      price: '$99',
      period: '/month',
      description: 'Manage projects, teams, and resources with advanced planning tools, time tracking, and real-time collaboration. Includes 20 team members and unlimited projects.',
      features: [
        'Project planning & scheduling',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Resource management',
        'Gantt charts & timelines',
        'Budget tracking',
        'Integration with popular tools',
        'Mobile app access'
      ],
      popular: false,
      icon: '📊',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://projects.zion.app',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, development teams, agencies, and consulting firms',
      marketSize: '$4.8B',
      growthRate: '28% YoY',
      competitors: ['Asana', 'Monday.com', 'ClickUp', 'Trello']
    },
    {
      name: 'Data Analytics Platform',
      tagline: 'Business intelligence and data visualization',
      price: '$129',
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and predictive modeling. Includes 10 data sources and unlimited dashboards.',
      features: [
        'Real-time data processing',
        'Advanced data visualization',
        'Predictive analytics',
        'Custom dashboard builder',
        'Data integration tools',
        'Automated reporting',
        'Machine learning models',
        'API access & webhooks'
      ],
      popular: false,
      icon: '📈',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://analytics.zion.app',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, executives, and data scientists',
      marketSize: '$6.8B',
      growthRate: '32% YoY',
      competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik']
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation and team collaboration. Includes design tokens, style guides, and developer handoff.',
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
      link: 'https://design.zion.app',
      marketPosition: 'Competitive with Zeroheight ($0-200), Frontify ($0-200), and InVision DSM ($0-100)',
      targetAudience: 'Design teams, product managers, and design system architects',
      marketSize: '$800M',
      growthRate: '35% YoY',
      competitors: ['Zeroheight', 'Frontify', 'InVision DSM', 'Storybook']
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights. Includes error tracking, user experience analytics, and automated optimization.',
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
      icon: '⚡',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://monitor.zion.app',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99)',
      targetAudience: 'Developers, DevOps teams, and product managers',
      marketSize: '$2.4B',
      growthRate: '26% YoY',
      competitors: ['Sentry', 'LogRocket', 'New Relic', 'Datadog']
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Comprehensive SEO automation',
      price: '$89',
      period: '/month',
      description: 'Automate your SEO workflow with advanced tools for keyword research, optimization, and reporting. Includes competitor analysis, ranking tracking, and automated audits.',
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
      link: 'https://seo.zion.app',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and agencies',
      marketSize: '$1.8B',
      growthRate: '24% YoY',
      competitors: ['Ahrefs', 'SEMrush', 'Moz', 'Ubersuggest']
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent conversational AI',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and user engagement. Includes natural language processing, multi-channel integration, and analytics.',
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
      link: 'https://chatbot.zion.app',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($0-2500), and ManyChat ($0-15)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses',
      marketSize: '$1.6B',
      growthRate: '30% YoY',
      competitors: ['Intercom', 'Drift', 'ManyChat', 'MobileMonkey']
    }
  ];

  const marketInsights = [
    {
      title: 'Growing Market Demand',
      description: 'The micro SaaS market is experiencing rapid growth, with businesses increasingly seeking specialized, affordable solutions over complex enterprise platforms.',
      stats: '32% annual growth rate',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Competitive Pricing',
      description: 'Our pricing strategy positions us competitively in the market while maintaining high value and quality standards.',
      stats: '15-40% below market average',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Focus on Specialization',
      description: 'Unlike broad platforms, our micro SaaS solutions focus on specific use cases, delivering deeper functionality and better user experience.',
      stats: '3x faster time-to-value',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Enterprise-Grade Features',
      description: 'All our micro SaaS solutions include enterprise-grade features like API access, advanced analytics, and team collaboration tools.',
      stats: '90% feature parity with enterprise',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const marketAnalysis = {
    totalMarketSize: '$45.2B',
    microSaaSGrowth: '28% YoY',
    averageCustomerLifetime: '3.2 years',
    customerAcquisitionCost: '$150',
    averageRevenuePerUser: '$89/month',
    churnRate: '5.2%',
    marketSegments: [
      { name: 'Marketing & Sales', size: '$12.8B', growth: '24%' },
      { name: 'Productivity & Collaboration', size: '$8.9B', growth: '31%' },
      { name: 'Analytics & Business Intelligence', size: '$6.8B', growth: '32%' },
      { name: 'Customer Support', size: '$3.2B', growth: '20%' },
      { name: 'Design & Development', size: '$2.1B', growth: '35%' }
    ]
  };

  const pricingComparison = [
    {
      category: 'Content Creation',
      ourPrice: '$49/month',
      competitors: [
        { name: 'Jasper', price: '$39-99/month', features: 'Limited templates, basic AI' },
        { name: 'Copy.ai', price: '$36-186/month', features: 'Good AI, expensive scaling' },
        { name: 'Our Solution', price: '$49/month', features: '100+ templates, advanced AI, unlimited content' }
      ]
    },
    {
      category: 'Email Marketing',
      ourPrice: '$79/month',
      competitors: [
        { name: 'Mailchimp', price: '$13-299/month', features: 'Basic automation, limited AI' },
        { name: 'ConvertKit', price: '$29-59/month', features: 'Simple but limited features' },
        { name: 'Our Solution', price: '$79/month', features: 'AI personalization, advanced analytics, 10K subscribers' }
      ]
    },
    {
      category: 'Project Management',
      ourPrice: '$99/month',
      competitors: [
        { name: 'Asana', price: '$10.99-24.99/month', features: 'Good basics, expensive scaling' },
        { name: 'Monday.com', price: '$8-16/month', features: 'Limited advanced features' },
        { name: 'Our Solution', price: '$99/month', features: 'Advanced planning, time tracking, 20 team members' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Specialized Business Solutions</title>
        <meta name="description" content="Discover our specialized micro SaaS solutions for content creation, email marketing, social media, customer support, project management, and data analytics. Competitive pricing with 14-day free trials." />
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
              Focused, affordable solutions that deliver specific value without the complexity of enterprise platforms. 
              Start with a free trial and scale as you grow.
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
                href="#pricing"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Market Analysis & Positioning
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Understanding the micro SaaS landscape and our competitive advantages in this rapidly growing market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{marketAnalysis.totalMarketSize}</div>
                <div className="text-gray-400 text-sm">Total Market Size</div>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{marketAnalysis.microSaaSGrowth}</div>
                <div className="text-gray-400 text-sm">Micro SaaS Growth</div>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{marketAnalysis.averageRevenuePerUser}</div>
                <div className="text-gray-400 text-sm">Avg. Revenue/User</div>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">{marketAnalysis.churnRate}</div>
                <div className="text-gray-400 text-sm">Churn Rate</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Market Segments</h3>
                <div className="space-y-4">
                  {marketAnalysis.marketSegments.map((segment, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{segment.name}</span>
                      <div className="text-right">
                        <div className="text-white font-semibold">{segment.size}</div>
                        <div className="text-green-400 text-sm">{segment.growth} growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Competitive Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">15-40% lower pricing than competitors</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">90% feature parity with enterprise solutions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">3x faster time-to-value</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Unlimited usage within plan limits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Understand the advantages of our focused approach and competitive market positioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                  <div className="text-green-400 mb-4 flex justify-center">
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{insight.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{insight.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                    {insight.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section id="pricing" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Competitive Pricing Analysis
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                See how our pricing compares to market leaders while offering superior value and features.
              </p>
            </div>

            <div className="space-y-8">
              {pricingComparison.map((comparison, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">{comparison.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {comparison.competitors.map((competitor, compIndex) => (
                      <div key={compIndex} className={`p-6 rounded-xl border ${
                        competitor.name === 'Our Solution' 
                          ? 'border-green-500 bg-green-500/10' 
                          : 'border-gray-600 bg-gray-700/30'
                      }`}>
                        <h4 className={`font-bold mb-2 ${
                          competitor.name === 'Our Solution' ? 'text-green-400' : 'text-white'
                        }`}>
                          {competitor.name}
                        </h4>
                        <div className={`text-2xl font-bold mb-3 ${
                          competitor.name === 'Our Solution' ? 'text-green-400' : 'text-gray-300'
                        }`}>
                          {competitor.price}
                        </div>
                        <p className="text-gray-400 text-sm">{competitor.features}</p>
                      </div>
                    ))}
                  </div>
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
                Each solution is designed to solve a specific business problem with deep functionality and competitive pricing.
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
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Market Size</p>
                        <p className="text-gray-400 font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Growth Rate</p>
                        <p className="text-gray-400 font-medium">{service.growthRate}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Market Position</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{service.marketPosition}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Target Audience</p>
                      <p className="text-sm text-gray-400">{service.targetAudience}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">Key Competitors</p>
                      <p className="text-sm text-gray-400">{service.competitors.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              Choose the solution that fits your needs. All services include comprehensive documentation, 
              dedicated support, and enterprise-grade reliability. Start with a free trial today.
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