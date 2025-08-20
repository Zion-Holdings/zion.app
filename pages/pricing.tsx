import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, DollarSign } from 'lucide-react';
import Button from '../components/ui/Button';

export default function PricingPage() {
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
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
      marketSize: '$15.8B content marketing industry',
      growthRate: '16.1% CAGR expected through 2030',
      savings: 'Save 30-50% vs competitors'
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
      targetAudience: 'Design teams, product managers, and design system architects',
      marketSize: '$8.2B design tools market',
      growthRate: '12.3% CAGR expected through 2030',
      savings: 'Save 40-60% vs competitors'
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
      targetAudience: 'Developers, DevOps teams, and product managers',
      marketSize: '$4.1B application performance monitoring market',
      growthRate: '18.7% CAGR expected through 2030',
      savings: 'Save 20-60% vs competitors'
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
      targetAudience: 'SEO specialists, digital marketers, and agencies',
      marketSize: '$68.8B SEO industry',
      growthRate: '14.2% CAGR expected through 2030',
      savings: 'Save 10-80% vs competitors'
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
      targetAudience: 'Customer support teams, marketers, and e-commerce businesses',
      marketSize: '$12.7B chatbot market',
      growthRate: '23.5% CAGR expected through 2030',
      savings: 'Save 30-70% vs competitors'
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
      targetAudience: 'Data analysts, business intelligence teams, and executives',
      marketSize: '$29.5B business intelligence market',
      growthRate: '13.2% CAGR expected through 2030',
      savings: 'Save 50-90% vs competitors'
    },
    {
      name: 'Email Marketing Automation',
      tagline: 'Advanced email campaign management',
      price: '$59',
      period: '/month',
      description: 'Create, automate, and optimize email marketing campaigns with AI-powered personalization.',
      features: [
        'AI-powered subject line optimization',
        'Behavioral email triggers',
        'A/B testing automation',
        'Advanced segmentation',
        'Email template builder',
        'Performance analytics',
        'GDPR compliance tools',
        'Integration with major CRMs'
      ],
      popular: false,
      icon: '📧',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      link: 'https://email.zion.app',
      marketPosition: 'Competitive with Mailchimp ($13-350), ConvertKit ($29-59), and ActiveCampaign ($9-49)',
      targetAudience: 'Email marketers, e-commerce businesses, and marketing agencies',
      marketSize: '$22.2B email marketing market',
      growthRate: '15.7% CAGR expected through 2030',
      savings: 'Save 20-40% vs competitors'
    },
    {
      name: 'Social Media Scheduler',
      tagline: 'Intelligent social media management',
      price: '$44',
      period: '/month',
      description: 'Schedule, analyze, and optimize your social media presence across all platforms.',
      features: [
        'Multi-platform scheduling',
        'AI-powered content optimization',
        'Best time to post analysis',
        'Content calendar management',
        'Social media analytics',
        'Hashtag research tools',
        'Team collaboration',
        'Automated responses'
      ],
      popular: false,
      icon: '📱',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      link: 'https://social.zion.app',
      marketPosition: 'Competitive with Buffer ($6-99), Hootsuite ($29-599), and Later ($18-40)',
      targetAudience: 'Social media managers, influencers, and businesses',
      marketSize: '$17.9B social media management market',
      growthRate: '19.8% CAGR expected through 2030',
      savings: 'Save 25-50% vs competitors'
    },
    {
      name: 'Invoice & Billing Manager',
      tagline: 'Streamlined financial operations',
      price: '$34',
      period: '/month',
      description: 'Automate invoicing, payment processing, and financial reporting for small businesses.',
      features: [
        'Automated invoice generation',
        'Payment gateway integration',
        'Recurring billing setup',
        'Expense tracking',
        'Financial reporting',
        'Tax calculation',
        'Multi-currency support',
        'Client portal access'
      ],
      popular: false,
      icon: '💰',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://billing.zion.app',
      marketPosition: 'Competitive with FreshBooks ($15-55), QuickBooks ($30-200), and Wave (Free)',
      targetAudience: 'Freelancers, small businesses, and accounting professionals',
      marketSize: '$4.8B accounting software market',
      growthRate: '11.9% CAGR expected through 2030',
      savings: 'Save 20-60% vs competitors'
    },
    {
      name: 'Project Management Hub',
      tagline: 'Collaborative project organization',
      price: '$54',
      period: '/month',
      description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
      features: [
        'Kanban and Gantt views',
        'Time tracking integration',
        'Team collaboration tools',
        'Resource allocation',
        'Progress reporting',
        'File sharing & storage',
        'Mobile app access',
        'API integrations'
      ],
      popular: false,
      icon: '📋',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      link: 'https://projects.zion.app',
      marketPosition: 'Competitive with Asana ($10.99-24.99), Monday.com ($8-16), and ClickUp ($5-12)',
      targetAudience: 'Project managers, development teams, and creative agencies',
      marketSize: '$6.8B project management software market',
      growthRate: '17.4% CAGR expected through 2030',
      savings: 'Save 30-70% vs competitors'
    },
    {
      name: 'Customer Support Suite',
      tagline: 'Comprehensive support management',
      price: '$74',
      period: '/month',
      description: 'Manage customer inquiries, tickets, and support operations with AI-powered automation.',
      features: [
        'Ticket management system',
        'AI-powered response suggestions',
        'Knowledge base builder',
        'Live chat integration',
        'Customer satisfaction surveys',
        'Support analytics',
        'Multi-language support',
        'Integration with popular platforms'
      ],
      popular: false,
      icon: '🎧',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      link: 'https://support.zion.app',
      marketPosition: 'Competitive with Zendesk ($49-99), Freshdesk ($15-99), and Help Scout ($20-40)',
      targetAudience: 'Customer support teams, SaaS companies, and e-commerce businesses',
      marketSize: '$11.2B customer service software market',
      growthRate: '21.3% CAGR expected through 2030',
      savings: 'Save 25-50% vs competitors'
    },
    {
      name: 'HR Management Platform',
      tagline: 'Streamlined human resources',
      price: '$64',
      period: '/month',
      description: 'Simplify HR operations with employee management, payroll, and performance tracking.',
      features: [
        'Employee onboarding automation',
        'Time and attendance tracking',
        'Performance management',
        'Payroll integration',
        'Benefits administration',
        'Compliance monitoring',
        'Employee self-service portal',
        'Reporting and analytics'
      ],
      popular: false,
      icon: '👥',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      link: 'https://hr.zion.app',
      marketPosition: 'Competitive with BambooHR ($6.19-8.75), Gusto ($40-80), and Zenefits ($8-27)',
      targetAudience: 'HR professionals, small businesses, and growing companies',
      marketSize: '$15.8B HR software market',
      growthRate: '14.8% CAGR expected through 2030',
      savings: 'Save 20-60% vs competitors'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams getting started',
      features: [
        'Up to 3 team members',
        'Basic features',
        'Email support',
        '14-day free trial',
        'Standard integrations'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 10 team members',
        'Advanced features',
        'Priority support',
        '14-day free trial',
        'Advanced integrations',
        'Custom branding',
        'Analytics dashboard'
      ],
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'All features included',
        '24/7 dedicated support',
        '14-day free trial',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'SLA guarantees'
      ],
      color: 'from-purple-500 to-purple-600',
      popular: false
    }
  ];

  const marketInsights = [
    {
      title: 'Competitive Pricing Strategy',
      description: 'Our pricing is strategically positioned 15-40% below market average while maintaining premium quality.',
      stats: '15-40% savings'
    },
    {
      title: 'Market Validation',
      description: 'All services are based on validated market needs with proven demand and competitive positioning.',
      stats: '12 validated solutions'
    },
    {
      title: 'Growth Potential',
      description: 'Targeting high-growth markets with strong CAGR projections through 2030.',
      stats: '12-23% CAGR markets'
    },
    {
      title: 'Value Proposition',
      description: 'Focus on specialized functionality rather than broad, complex enterprise platforms.',
      stats: '3x faster time-to-value'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your team. Transparent pricing with enterprise-grade features." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Header Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Simple Pricing
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with enterprise-grade features. Scale as you grow with our flexible plans.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-500 scale-105'
                      : 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                      tier.popular ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      tier.popular ? 'text-white' : 'text-white'
                    }`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${
                      tier.popular ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold ${
                        tier.popular ? 'text-white' : 'text-white'
                      }`}>
                        {tier.price}
                      </span>
                      <span className={`text-lg ml-1 ${
                        tier.popular ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          tier.popular ? 'text-white' : 'text-blue-400'
                        }`} />
                        <span className={`text-sm ${
                          tier.popular ? 'text-blue-100' : 'text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    {tier.name === 'Enterprise' ? (
                      <Button
                        href="/contact"
                        variant={tier.popular ? 'secondary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        Contact Sales
                      </Button>
                    ) : (
                      <Button
                        href="/contact"
                        variant={tier.popular ? 'secondary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Understand the advantages of our focused approach and competitive market positioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Micro SaaS Services */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Micro SaaS Solutions
              </div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Specialized Tools for Every Business Need
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Focused solutions with competitive pricing, market validation, and proven demand. All services include 14-day free trials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-${service.textColor.split('-')[1]}-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-${service.textColor.split('-')[1]}-500/10`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 mb-4">{service.tagline}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      <span className="text-lg text-gray-400 ml-1">{service.period}</span>
                    </div>
                    {service.popular && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <div className="text-center">
                      <Button
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}
                      >
                        Start Free Trial
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Market Position</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{service.marketPosition}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Savings vs Competitors</p>
                      <p className="text-sm text-green-400 font-medium">{service.savings}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Market Size</p>
                        <p className="text-sm text-gray-400 font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Growth Rate</p>
                        <p className="text-sm text-gray-400 font-medium">{service.growthRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
                All micro SaaS services include 14-day free trials, comprehensive documentation, 
                and dedicated support. Enterprise customers receive volume discounts and custom integrations.
              </p>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Contact Sales for Enterprise
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-400">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to start.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-400">
                  We accept all major credit cards, PayPal, and wire transfers for enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers and teams already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}