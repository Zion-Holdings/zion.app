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
      description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant. Supports 15+ languages and includes plagiarism detection.',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (15+ languages)',
        'Brand voice customization',
        'Content templates library (100+ templates)',
        'Plagiarism-free writing guarantee',
        'Advanced content analytics',
        'Team collaboration tools',
        'API access for integrations',
        'Real-time collaboration',
        'Version control & history'
      ],
      popular: true,
      icon: '📝',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      link: 'https://contentgen.ziontechgroup.com',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100). Our pricing is 20-30% below market average.',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators'
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation, team collaboration, and seamless design-to-code workflow.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools',
        'Version control & history',
        'Design system analytics',
        'Integration with Figma, Sketch, Adobe XD',
        'Automated documentation',
        'Design system health monitoring'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://design.ziontechgroup.com',
      marketPosition: 'Competitive with Zeroheight ($0-200), Frontify ($0-200), and InVision DSM ($0-100). Premium features at mid-tier pricing.',
      targetAudience: 'Design teams, product managers, and design system architects'
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights, error tracking, and automated optimization recommendations.',
      features: [
        'Performance metrics tracking',
        'Error monitoring & alerting',
        'User experience analytics',
        'Automated optimization',
        'Custom dashboards',
        'Real-time alerts',
        'Performance budgets',
        'Integration with popular frameworks',
        'Core Web Vitals monitoring',
        'Performance regression detection'
      ],
      popular: false,
      icon: '📱',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://monitor.ziontechgroup.com',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99). 50% more affordable than LogRocket.',
      targetAudience: 'Developers, DevOps teams, and product managers'
    },
    {
      name: 'SEO Automation Suite',
      tagline: 'Comprehensive SEO automation',
      price: '$89',
      period: '/month',
      description: 'Automate your SEO workflow with advanced tools for keyword research, optimization, technical audits, and comprehensive reporting.',
      features: [
        'Keyword research automation',
        'On-page optimization',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking',
        'Automated reporting',
        'SEO score monitoring',
        'Integration with Google Analytics & Search Console',
        'Local SEO optimization',
        'Schema markup generator'
      ],
      popular: false,
      icon: '🔍',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      link: 'https://seo.ziontechgroup.com',
      marketPosition: 'Competitive with Ahrefs ($99-999), SEMrush ($119-449), and Moz ($99-599). 10-20% below market average with comparable features.',
      targetAudience: 'SEO specialists, digital marketers, and agencies'
    },
    {
      name: 'AI Chatbot Platform',
      tagline: 'Intelligent conversational AI',
      price: '$69',
      period: '/month',
      description: 'Build intelligent chatbots for customer support, lead generation, and user engagement with advanced NLP and multi-channel integration.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Analytics & insights',
        'Custom training data',
        '24/7 availability',
        'Multi-language support',
        'Conversation flow builder',
        'Integration with popular platforms',
        'Sentiment analysis',
        'Automated escalation to humans'
      ],
      popular: false,
      icon: '💬',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      link: 'https://chatbot.ziontechgroup.com',
      marketPosition: 'Competitive with Intercom ($39-499), Drift ($0-2500), and ManyChat ($0-15). Premium features at affordable pricing.',
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses'
    },
    {
      name: 'Business Intelligence Hub',
      tagline: 'Data-driven insights platform',
      price: '$99',
      period: '/month',
      description: 'Transform your data into actionable insights with advanced analytics, automated reporting, and predictive analytics capabilities.',
      features: [
        'Data visualization tools',
        'Automated reporting',
        'KPI dashboards',
        'Predictive analytics',
        'Data integration',
        'Real-time data processing',
        'Custom metrics & calculations',
        'Team collaboration features',
        'Data governance tools',
        'Advanced filtering & segmentation'
      ],
      popular: false,
      icon: '📊',
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      link: 'https://bi.ziontechgroup.com',
      marketPosition: 'Competitive with Tableau ($70-70), Power BI ($9.99-20), and Looker ($500-5000). Enterprise features at SMB pricing.',
      targetAudience: 'Data analysts, business intelligence teams, and executives'
    },
    {
      name: 'Email Marketing Automation',
      tagline: 'Advanced email campaign management',
      price: '$59',
      period: '/month',
      description: 'Create, automate, and optimize email marketing campaigns with advanced segmentation, A/B testing, and comprehensive analytics.',
      features: [
        'Drag-and-drop email builder',
        'Advanced segmentation',
        'A/B testing automation',
        'Behavioral triggers',
        'Email deliverability tools',
        'Comprehensive analytics',
        'Template library (200+ templates)',
        'Integration with popular platforms',
        'GDPR compliance tools',
        'Advanced personalization'
      ],
      popular: true,
      icon: '📧',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://email.ziontechgroup.com',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($9-25), and ActiveCampaign ($9-49). 30% more features at similar pricing.',
      targetAudience: 'Marketers, e-commerce businesses, and content creators'
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Intelligent social media management',
      price: '$39',
      period: '/month',
      description: 'Schedule, publish, and analyze social media content across multiple platforms with AI-powered content optimization.',
      features: [
        'Multi-platform scheduling',
        'AI content optimization',
        'Visual content calendar',
        'Hashtag research tools',
        'Performance analytics',
        'Team collaboration',
        'Content recycling',
        'Best time to post analysis',
        'Social listening tools',
        'Competitor analysis'
      ],
      popular: false,
      icon: '📱',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://social.ziontechgroup.com',
      marketPosition: 'Competitive with Buffer ($6-99), Hootsuite ($29-599), and Later ($18-40). 40% more affordable with premium features.',
      targetAudience: 'Social media managers, marketers, and small businesses'
    },
    {
      name: 'Customer Feedback Platform',
      tagline: 'Comprehensive feedback collection',
      price: '$49',
      period: '/month',
      description: 'Collect, analyze, and act on customer feedback with surveys, NPS tracking, and sentiment analysis tools.',
      features: [
        'Survey builder & templates',
        'NPS & CSAT tracking',
        'Sentiment analysis',
        'Feedback analytics',
        'Automated follow-ups',
        'Integration with CRM',
        'Real-time notifications',
        'Custom branding',
        'Multi-language support',
        'Advanced reporting'
      ],
      popular: false,
      icon: '💭',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://feedback.ziontechgroup.com',
      marketPosition: 'Competitive with SurveyMonkey ($25-75), Typeform ($0-70), and Qualtrics ($150-500). 50% more affordable with enterprise features.',
      targetAudience: 'Product managers, customer success teams, and researchers'
    },
    {
      name: 'Project Management Hub',
      tagline: 'Streamlined project collaboration',
      price: '$69',
      period: '/month',
      description: 'Manage projects, tasks, and team collaboration with intuitive tools, time tracking, and comprehensive reporting.',
      features: [
        'Task & project management',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Gantt charts & timelines',
        'File sharing & storage',
        'Custom workflows',
        'Mobile applications',
        'Integration with popular tools',
        'Resource allocation',
        'Performance analytics'
      ],
      popular: false,
      icon: '📋',
      color: 'from-lime-500 to-green-600',
      textColor: 'text-lime-400',
      link: 'https://projects.ziontechgroup.com',
      marketPosition: 'Competitive with Asana ($0-24.99), Monday.com ($0-20), and ClickUp ($0-12). 25% more features at competitive pricing.',
      targetAudience: 'Project managers, teams, and small businesses'
    },
    {
      name: 'Invoice & Billing System',
      tagline: 'Professional invoicing & payment',
      price: '$29',
      period: '/month',
      description: 'Create professional invoices, track payments, and manage your business finances with automated billing and payment processing.',
      features: [
        'Professional invoice templates',
        'Automated payment reminders',
        'Multiple payment gateways',
        'Expense tracking',
        'Financial reporting',
        'Tax calculation tools',
        'Client portal',
        'Recurring billing',
        'Multi-currency support',
        'Integration with accounting software'
      ],
      popular: false,
      icon: '💰',
      color: 'from-yellow-500 to-amber-600',
      textColor: 'text-yellow-400',
      link: 'https://billing.ziontechgroup.com',
      marketPosition: 'Competitive with FreshBooks ($7.50-55), QuickBooks ($12.50-90), and Wave (Free). 60% more affordable than QuickBooks.',
      targetAudience: 'Freelancers, small businesses, and consultants'
    },
    {
      name: 'HR Management Suite',
      tagline: 'Complete HR operations platform',
      price: '$79',
      period: '/month',
      description: 'Streamline HR operations with employee management, time tracking, payroll integration, and performance management tools.',
      features: [
        'Employee database management',
        'Time & attendance tracking',
        'Leave management',
        'Performance reviews',
        'Payroll integration',
        'Benefits administration',
        'Compliance monitoring',
        'Employee self-service portal',
        'Reporting & analytics',
        'Integration with popular HR tools'
      ],
      popular: false,
      icon: '👥',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://hr.ziontechgroup.com',
      marketPosition: 'Competitive with BambooHR ($6.19-8.95), Gusto ($40-160), and Zenefits ($8-27). 20% more features at similar pricing.',
      targetAudience: 'HR professionals, small businesses, and growing companies'
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
      description: 'Our pricing strategy positions us 15-60% below market average while maintaining premium features and enterprise-grade quality standards.',
      stats: '15-60% below market average'
    },
    {
      title: 'Focus on Specialization',
      description: 'Unlike broad platforms, our 12 micro SaaS solutions focus on specific use cases, delivering deeper functionality and better user experience.',
      stats: '3x faster time-to-value'
    },
    {
      title: 'Comprehensive Coverage',
      description: 'From content creation to HR management, we cover the essential business operations that growing companies need to succeed.',
      stats: '12 specialized solutions'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Specialized Business Solutions</title>
        <meta name="description" content="Discover our 12 specialized micro SaaS solutions covering content creation, design systems, performance monitoring, SEO automation, chatbots, business intelligence, email marketing, social media, customer feedback, project management, billing, and HR operations. Competitive pricing with 14-day free trials." />
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
              Discover 12 specialized micro SaaS solutions covering content creation, design systems, performance monitoring, 
              SEO automation, chatbots, business intelligence, email marketing, social media, customer feedback, project management, 
              billing, and HR operations. Focused, affordable solutions that deliver specific value without the complexity of enterprise platforms. 
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
                Twelve specialized solutions covering every essential business operation. Each solution is designed to solve a specific business problem 
                with deep functionality, competitive pricing, and enterprise-grade reliability.
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

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose from 12 specialized solutions that fit your business needs. All services include comprehensive documentation, 
              dedicated support, enterprise-grade reliability, and 14-day free trials. Start with one solution and add more as you grow.
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