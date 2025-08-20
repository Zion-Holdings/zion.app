import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      tagline: 'Professional AI-powered content creation',
      price: '$49',
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
      link: 'https://contentgen.zion.app',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators'
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation and team collaboration.',
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
      targetAudience: 'Design teams, product managers, and design system architects'
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights.',
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
      icon: '📱',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://monitor.zion.app',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99)',
      targetAudience: 'Developers, DevOps teams, and product managers'
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Comprehensive SEO automation',
      price: '$89',
      period: '/month',
      description: 'Automate your SEO workflow with advanced tools for keyword research, optimization, and reporting.',
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
      targetAudience: 'SEO specialists, digital marketers, and agencies'
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent conversational AI',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and user engagement.',
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
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses'
    },
    {
      name: 'Business Intelligence Hub',
      tagline: 'Data-driven insights platform',
      price: '$99',
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics and automated reporting.',
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
      link: 'https://bi.zion.app',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, and executives'
    },
    // New Real Micro SaaS Services
    {
      name: 'Email Automation Studio',
      tagline: 'Advanced email marketing automation',
      price: '$59',
      period: '/month',
      description: 'Create sophisticated email campaigns with AI-powered personalization and advanced automation workflows.',
      features: [
        'AI-powered personalization',
        'Advanced segmentation',
        'Behavioral triggers',
        'A/B testing automation',
        'Email template builder',
        'Analytics & reporting',
        'GDPR compliance tools',
        'Integration with major CRMs'
      ],
      popular: false,
      icon: '📧',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://emailstudio.zion.app',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($29-59), and ActiveCampaign ($29-289)',
      targetAudience: 'Email marketers, e-commerce businesses, and marketing agencies'
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Intelligent social media management',
      price: '$29',
      period: '/month',
      description: 'Schedule, analyze, and optimize your social media presence across all platforms with AI insights.',
      features: [
        'Multi-platform scheduling',
        'AI content optimization',
        'Best time to post analysis',
        'Content calendar management',
        'Hashtag research tools',
        'Performance analytics',
        'Team collaboration',
        'Automated posting'
      ],
      popular: false,
      icon: '📱',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-400',
      link: 'https://socialscheduler.zion.app',
      marketPosition: 'Competitive with Buffer ($15-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, influencers, and small businesses'
    },
    {
      name: 'Project Management Hub',
      tagline: 'Streamlined project collaboration',
      price: '$45',
      period: '/month',
      description: 'Manage projects efficiently with intuitive task management, team collaboration, and progress tracking.',
      features: [
        'Task management & tracking',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Project templates',
        'File sharing & storage',
        'Progress visualization',
        'Mobile app access',
        'Integration with popular tools'
      ],
      popular: false,
      icon: '📋',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      link: 'https://projecthub.zion.app',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, teams, and small to medium businesses'
    },
    {
      name: 'Invoice & Billing Manager',
      tagline: 'Professional invoicing & payment tracking',
      price: '$25',
      period: '/month',
      description: 'Create professional invoices, track payments, and manage your business finances efficiently.',
      features: [
        'Professional invoice templates',
        'Payment tracking',
        'Automated reminders',
        'Multi-currency support',
        'Tax calculation',
        'Client management',
        'Financial reporting',
        'Payment gateway integration'
      ],
      popular: false,
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      link: 'https://invoice.zion.app',
      marketPosition: 'Competitive with FreshBooks ($15-55), QuickBooks ($30-200), and Wave (Free)',
      targetAudience: 'Freelancers, small businesses, and consultants'
    },
    {
      name: 'Customer Support Suite',
      tagline: 'Complete customer service solution',
      price: '$75',
      period: '/month',
      description: 'Manage customer inquiries, tickets, and support requests with a comprehensive helpdesk solution.',
      features: [
        'Ticket management system',
        'Knowledge base builder',
        'Live chat integration',
        'Customer satisfaction surveys',
        'Automated responses',
        'Team collaboration tools',
        'Performance analytics',
        'Multi-channel support'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      link: 'https://support.zion.app',
      marketPosition: 'Competitive with Zendesk ($49-99), Freshdesk ($15-79), and Help Scout ($20-65)',
      targetAudience: 'Customer support teams, e-commerce businesses, and service companies'
    },
    {
      name: 'HR Management System',
      tagline: 'Streamlined HR operations',
      price: '$85',
      period: '/month',
      description: 'Manage employee records, time tracking, payroll, and HR processes in one integrated platform.',
      features: [
        'Employee database management',
        'Time & attendance tracking',
        'Leave management',
        'Performance reviews',
        'Payroll integration',
        'Compliance reporting',
        'Employee self-service portal',
        'Mobile app access'
      ],
      popular: false,
      icon: '👥',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      link: 'https://hr.zion.app',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Gusto ($39-149), and Zenefits ($8-14)',
      targetAudience: 'HR professionals, small to medium businesses, and startups'
    },
    {
      name: 'Inventory Management Pro',
      tagline: 'Smart inventory control system',
      price: '$55',
      period: '/month',
      description: 'Track inventory levels, manage stock, and optimize supply chain operations with real-time insights.',
      features: [
        'Real-time inventory tracking',
        'Stock level alerts',
        'Purchase order management',
        'Supplier management',
        'Barcode scanning',
        'Inventory analytics',
        'Multi-location support',
        'Integration with e-commerce platforms'
      ],
      popular: false,
      icon: '📦',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://inventory.zion.app',
      marketPosition: 'Competitive with TradeGecko ($39-199), Zoho Inventory ($119-299), and Fishbowl ($4,395)',
      targetAudience: 'Retail businesses, e-commerce stores, and warehouses'
    }
  ];

  const marketInsights = [
    {
      title: 'Growing Market Demand',
      description: 'The micro SaaS market is experiencing rapid growth, with businesses increasingly seeking specialized, affordable solutions over complex enterprise platforms.',
      stats: '32% annual growth rate'
    },
    {
      title: 'Competitive Pricing',
      description: 'Our pricing strategy positions us competitively in the market while maintaining high value and quality standards.',
      stats: '15-40% below market average'
    },
    {
      title: 'Focus on Specialization',
      description: 'Unlike broad platforms, our micro SaaS solutions focus on specific use cases, delivering deeper functionality and better user experience.',
      stats: '3x faster time-to-value'
    }
  ];

  const marketAnalysis = [
    {
      category: 'Content & Marketing',
      services: ['AI Content Generator Pro', 'Email Automation Studio', 'Social Media Scheduler'],
      marketSize: '$45.2B',
      growthRate: '18.2%',
      keyTrends: ['AI-powered personalization', 'Multi-channel automation', 'Data-driven optimization']
    },
    {
      category: 'Design & Development',
      services: ['Design System Builder', 'App Performance Monitor'],
      marketSize: '$23.8B',
      growthRate: '22.1%',
      keyTrends: ['Component-driven development', 'Performance-first approach', 'Design system automation']
    },
    {
      category: 'Business Operations',
      services: ['Project Management Hub', 'Invoice & Billing Manager', 'HR Management System'],
      marketSize: '$67.4B',
      growthRate: '15.7%',
      keyTrends: ['Remote work optimization', 'Process automation', 'Integrated workflows']
    },
    {
      category: 'Customer Experience',
      services: ['Customer Support Suite', 'AI Chatbot Platform'],
      marketSize: '$38.9B',
      growthRate: '19.8%',
      keyTrends: ['Omnichannel support', 'AI-powered assistance', 'Proactive customer care']
    },
    {
      category: 'Data & Analytics',
      services: ['Business Intelligence Hub', 'SEO Automation Suite', 'Inventory Management Pro'],
      marketSize: '$52.1B',
      growthRate: '24.3%',
      keyTrends: ['Real-time insights', 'Predictive analytics', 'Automated reporting']
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'Specialized Focus',
      description: 'Each service is built for a specific use case, eliminating feature bloat and improving user experience.',
      icon: '🎯'
    },
    {
      title: 'AI Integration',
      description: 'Built-in AI capabilities across all services for automation, personalization, and intelligent insights.',
      icon: '🤖'
    },
    {
      title: 'Seamless Integration',
      description: 'All services integrate with each other and popular third-party tools for a unified workflow.',
      icon: '🔗'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear feature lists, and predictable monthly costs starting from $25/month.',
      icon: '💰'
    },
    {
      title: 'Enterprise Security',
      description: 'SOC 2 compliance, data encryption, and enterprise-grade security across all services.',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team with average response time under 2 hours for all customers.',
      icon: '🎧'
    }
  ];

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
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                View Pricing
              </Button>
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
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
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

        {/* Market Analysis Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Market Analysis & Industry Insights
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Comprehensive analysis of the micro SaaS market across different business categories and growth opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {marketAnalysis.map((category, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{category.marketSize}</div>
                      <div className="text-sm text-green-400">{category.growthRate} growth</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Our Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Trends:</h4>
                    <ul className="space-y-2">
                      {category.keyTrends.map((trend, trendIndex) => (
                        <li key={trendIndex} className="flex items-center text-gray-400">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {trend}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Our competitive advantages that set us apart in the micro SaaS market and deliver exceptional value to customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-3xl mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
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
              dedicated support, and enterprise-grade reliability.
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