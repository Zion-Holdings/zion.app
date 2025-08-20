import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target } from 'lucide-react';
import Button from '../components/ui/Button';

export default function MicroSaasPage() {
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
      link: 'https://contentgen.ziontechgroup.com',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
      trialDays: 14,
      setupTime: '5 minutes'
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation and team collaboration. Streamline your design workflow.',
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
      link: 'https://design.ziontechgroup.com',
      marketPosition: 'Competitive with Zeroheight ($0-200), Frontify ($0-200), and InVision DSM ($0-100)',
      targetAudience: 'Design teams, product managers, and design system architects',
      trialDays: 14,
      setupTime: '15 minutes'
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights. Catch issues before they affect users.',
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
      link: 'https://monitor.ziontechgroup.com',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99)',
      targetAudience: 'Developers, DevOps teams, and product managers',
      trialDays: 14,
      setupTime: '10 minutes'
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Comprehensive SEO automation',
      price: '$89',
      period: '/month',
      description: 'Automate your SEO workflow with advanced tools for keyword research, optimization, and reporting. Boost your search rankings.',
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
      link: 'https://seo.ziontechgroup.com',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599)',
      targetAudience: 'SEO specialists, digital marketers, and agencies',
      trialDays: 14,
      setupTime: '20 minutes'
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent conversational AI',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and user engagement. Reduce support costs and improve customer satisfaction.',
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
      link: 'https://chatbot.ziontechgroup.com',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($0-2500), and ManyChat ($0-15)',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses',
      trialDays: 14,
      setupTime: '30 minutes'
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
      link: 'https://bi.ziontechgroup.com',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000)',
      targetAudience: 'Data analysts, business intelligence teams, and executives',
      trialDays: 14,
      setupTime: '45 minutes'
    },
    // New Real Micro SaaS Services
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
      link: 'https://email.ziontechgroup.com',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($9-29), and ActiveCampaign ($9-49)',
      targetAudience: 'Small businesses, marketers, and e-commerce stores',
      trialDays: 14,
      setupTime: '15 minutes'
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
      link: 'https://social.ziontechgroup.com',
      marketPosition: 'Competitive with Buffer ($6-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, small businesses, and influencers',
      trialDays: 14,
      setupTime: '10 minutes'
    },
    {
      name: 'Invoice & Billing Manager',
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
      link: 'https://billing.ziontechgroup.com',
      marketPosition: 'Competitive with FreshBooks ($17-55), Wave (Free), and Zoho Invoice ($9-29)',
      targetAudience: 'Freelancers, small businesses, and consultants',
      trialDays: 14,
      setupTime: '20 minutes'
    },
    {
      name: 'Project Management Hub',
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
      link: 'https://projects.ziontechgroup.com',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Trello ($5-17.50), and Monday.com ($8-16)',
      targetAudience: 'Project managers, development teams, and creative agencies',
      trialDays: 14,
      setupTime: '25 minutes'
    },
    {
      name: 'Customer Support Ticketing',
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
      link: 'https://support.ziontechgroup.com',
      marketPosition: 'Competitive with Zendesk ($49-99), Freshdesk ($15-99), and Help Scout ($20-65)',
      targetAudience: 'Customer support teams, SaaS companies, and e-commerce businesses',
      trialDays: 14,
      setupTime: '30 minutes'
    },
    {
      name: 'Analytics Dashboard',
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
      link: 'https://analytics.ziontechgroup.com',
      marketPosition: 'Competitive with Grafana ($0-49), Metabase ($0-85), and Tableau ($70-70)',
      targetAudience: 'Data analysts, business users, and product teams',
      trialDays: 14,
      setupTime: '35 minutes'
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
      title: 'Competitive Pricing',
      description: 'Our pricing strategy positions us competitively in the market while maintaining high value and quality standards.',
      stats: '15-40% below market average',
      icon: Target
    },
    {
      title: 'Quick Setup & ROI',
      description: 'Unlike complex enterprise solutions, our micro SaaS tools can be set up in minutes and deliver immediate value.',
      stats: '3x faster time-to-value',
      icon: Clock
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
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-400 mb-8">
                All services are hosted on enterprise-grade infrastructure with 99.9% uptime guarantee
              </p>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-lg font-medium">
                <Shield className="w-5 h-5 mr-2" />
                Enterprise-grade security & reliability
              </div>
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