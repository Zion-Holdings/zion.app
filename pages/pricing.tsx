import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, TrendingUp, Clock, DollarSign, Target, ArrowRight, X } from 'lucide-react';
import Button from '../components/ui/Button';

export default function PricingPage() {
  const microSaasPlans = [
    {
      name: 'Social Media Analytics',
      icon: '📊',
      description: 'AI-powered social media performance tracking and insights',
      plans: [
        {
          name: 'Starter',
          price: '$49',
          period: '/month',
          description: 'Perfect for small businesses and creators',
          features: [
            'Up to 5 social media accounts',
            'Basic analytics & reporting',
            'AI sentiment analysis',
            'Email support',
            'Basic competitor analysis',
            'Monthly reports'
          ],
          popular: false,
          color: 'from-blue-500 to-indigo-600',
          cta: 'Start Free Trial'
        },
        {
          name: 'Professional',
          price: '$149',
          period: '/month',
          description: 'Ideal for growing businesses and agencies',
          features: [
            'Up to 25 social media accounts',
            'Advanced AI insights',
            'Real-time monitoring',
            'Priority support',
            'Advanced competitor analysis',
            'Custom dashboards',
            'API access',
            'Team collaboration'
          ],
          popular: true,
          color: 'from-blue-600 to-indigo-700',
          cta: 'Start Free Trial'
        },
        {
          name: 'Enterprise',
          price: '$399',
          period: '/month',
          description: 'For large organizations with custom needs',
          features: [
            'Unlimited social media accounts',
            'Custom AI models',
            'White-label solutions',
            '24/7 dedicated support',
            'Advanced security & compliance',
            'Custom integrations',
            'SLA guarantees',
            'On-premise options'
          ],
          popular: false,
          color: 'from-blue-700 to-indigo-800',
          cta: 'Contact Sales'
        }
      ],
      competitors: ['Hootsuite', 'Buffer', 'Sprout Social'],
      marketSize: '$23.4B',
      growthRate: '13.2%'
    },
    {
      name: 'SEO Content Optimization',
      icon: '🔍',
      description: 'AI-powered content optimization for better search rankings',
      plans: [
        {
          name: 'Starter',
          price: '$39',
          period: '/month',
          description: 'Perfect for bloggers and small websites',
          features: [
            'Up to 10 content analyses/month',
            'Basic SEO scoring',
            'Keyword suggestions',
            'Email support',
            'Basic reporting',
            'Content templates'
          ],
          popular: false,
          color: 'from-green-500 to-emerald-600',
          cta: 'Try for Free'
        },
        {
          name: 'Professional',
          price: '$99',
          period: '/month',
          description: 'Ideal for content marketers and agencies',
          features: [
            'Up to 100 content analyses/month',
            'Advanced AI optimization',
            'Competitor research',
            'Priority support',
            'Advanced analytics',
            'Custom workflows',
            'API access',
            'Team collaboration'
          ],
          popular: true,
          color: 'from-green-600 to-emerald-700',
          cta: 'Try for Free'
        },
        {
          name: 'Enterprise',
          price: '$249',
          period: '/month',
          description: 'For large content teams and enterprises',
          features: [
            'Unlimited content analyses',
            'Custom AI models',
            'White-label solutions',
            '24/7 dedicated support',
            'Advanced security',
            'Custom integrations',
            'SLA guarantees',
            'On-premise options'
          ],
          popular: false,
          color: 'from-green-700 to-emerald-800',
          cta: 'Contact Sales'
        }
      ],
      competitors: ['Clearscope', 'MarketMuse', 'Surfer SEO'],
      marketSize: '$1.2B',
      growthRate: '18.7%'
    },
    {
      name: 'Email Marketing Automation',
      icon: '📧',
      description: 'Intelligent email marketing with AI-powered automation',
      plans: [
        {
          name: 'Starter',
          price: '$29',
          period: '/month',
          description: 'Perfect for small businesses and newsletters',
          features: [
            'Up to 2,500 subscribers',
            'Basic automation',
            'Email templates',
            'Email support',
            'Basic analytics',
            'GDPR compliance'
          ],
          popular: false,
          color: 'from-purple-500 to-pink-600',
          cta: 'Get Started'
        },
        {
          name: 'Professional',
          price: '$79',
          period: '/month',
          description: 'Ideal for growing businesses and teams',
          features: [
            'Up to 25,000 subscribers',
            'Advanced AI automation',
            'A/B testing',
            'Priority support',
            'Advanced analytics',
            'Custom integrations',
            'API access',
            'Team collaboration'
          ],
          popular: true,
          color: 'from-purple-600 to-pink-700',
          cta: 'Get Started'
        },
        {
          name: 'Enterprise',
          price: '$199',
          period: '/month',
          description: 'For large organizations with complex needs',
          features: [
            'Unlimited subscribers',
            'Custom AI models',
            'White-label solutions',
            '24/7 dedicated support',
            'Advanced security',
            'Custom integrations',
            'SLA guarantees',
            'On-premise options'
          ],
          popular: false,
          color: 'from-purple-700 to-pink-800',
          cta: 'Contact Sales'
        }
      ],
      competitors: ['Mailchimp', 'ConvertKit', 'ActiveCampaign'],
      marketSize: '$7.5B',
      growthRate: '15.3%'
    }
  ];

  const comparisonTable = [
    {
      feature: 'AI-Powered Insights',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Custom'
    },
    {
      feature: 'API Access',
      starter: 'Limited',
      professional: 'Full',
      enterprise: 'Unlimited'
    },
    {
      feature: 'Team Collaboration',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Enterprise'
    },
    {
      feature: 'Custom Integrations',
      starter: 'Pre-built',
      professional: 'Custom',
      enterprise: 'White-label'
    },
    {
      feature: 'Support Response',
      starter: '24-48 hours',
      professional: '4-8 hours',
      enterprise: '1-2 hours'
    },
    {
      feature: 'SLA Guarantees',
      starter: 'Standard',
      professional: 'Enhanced',
      enterprise: '99.9% uptime'
    }
  ];

  const marketInsights = [
    {
      category: 'Social Media Tools',
      insight: 'Market growing at 13.2% annually with increasing demand for AI-powered insights',
      opportunity: 'Our AI-first approach gives us a competitive edge in this crowded market'
    },
    {
      category: 'SEO Tools',
      insight: 'High growth market (18.7%) with increasing focus on AI and automation',
      opportunity: 'Real-time optimization and AI suggestions differentiate us from traditional tools'
    },
    {
      category: 'Email Marketing',
      insight: 'Mature market with strong growth (15.3%) and high customer retention',
      opportunity: 'AI segmentation and automation workflows provide clear value proposition'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group Micro SaaS Services</title>
        <meta name="description" content="Transparent pricing for our micro SaaS services. Compare plans, features, and pricing for AI-powered social media analytics, SEO optimization, and email marketing automation." />
        <meta property="og:title" content="Pricing - Zion Tech Group Micro SaaS Services" />
        <meta property="og:description" content="Competitive pricing for AI-powered micro SaaS services. Start with free trials and scale as you grow." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Header Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Transparent Pricing
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Choose Your Micro SaaS Plan
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Competitive pricing with enterprise-grade features. All plans include a 14-day free trial with no credit card required.
            </p>
          </div>
        </section>

        {/* Service Pricing Sections */}
        {microSaasPlans.map((service, serviceIndex) => (
          <section key={serviceIndex} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Service Header */}
              <div className="text-center mb-16">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {service.name}
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                    Market Size: {service.marketSize}
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                    Growth: {service.growthRate}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-purple-400" />
                    Competes with: {service.competitors.join(', ')}
                  </div>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`relative rounded-2xl p-8 transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-br ${plan.color} border-2 border-blue-500 scale-105`
                        : 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        plan.popular ? 'text-white' : 'text-white'
                      }`}>
                        {plan.name}
                      </h3>
                      <p className={`text-sm ${
                        plan.popular ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {plan.description}
                      </p>
                    </div>

                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className={`text-4xl font-bold ${
                          plan.popular ? 'text-white' : 'text-white'
                        }`}>
                          {plan.price}
                        </span>
                        <span className={`text-lg ml-1 ${
                          plan.popular ? 'text-blue-100' : 'text-gray-400'
                        }`}>
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                            plan.popular ? 'text-white' : 'text-blue-400'
                          }`} />
                          <span className={`text-sm ${
                            plan.popular ? 'text-blue-100' : 'text-gray-300'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <Button
                        href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                        variant={plan.popular ? 'secondary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Feature Comparison Table */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Feature Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Compare features across all plans to find the perfect fit for your business needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 text-white font-semibold">Feature</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Starter</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Professional</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-6 text-gray-300 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-400">{row.starter}</td>
                      <td className="py-4 px-6 text-center text-blue-400 font-medium">{row.professional}</td>
                      <td className="py-4 px-6 text-center text-green-400 font-medium">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Market Insights & Opportunities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the market landscape helps us deliver better value and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">{insight.category}</h3>
                  <p className="text-gray-400 mb-6">{insight.insight}</p>
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Our Opportunity</h4>
                    <p className="text-gray-300 text-sm">{insight.opportunity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Start your 14-day free trial today. No credit card required. Experience the power of AI-powered micro SaaS services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}