import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, TrendingUp, BarChart3, DollarSign, Target, Clock, Award } from 'lucide-react';
import Button from '../components/ui/Button';

export default function PricingPage() {
  const microSaasPlans = [
    {
      name: 'AI Content Automation',
      basePrice: '$299',
      period: '/month',
      description: 'AI-powered content generation and optimization platform',
      marketPosition: 'Mid-market leader',
      features: [
        '500+ AI-generated articles/month',
        'SEO optimization with real-time analysis',
        'Social media automation (5 platforms)',
        'Content performance analytics',
        'Multi-language support (15 languages)',
        'API access & custom integrations',
        'Priority support & onboarding',
        'Custom AI model training'
      ],
      pricing: {
        starter: { price: '$299', users: 'Up to 5', articles: '500/month' },
        professional: { price: '$599', users: 'Up to 15', articles: '1500/month' },
        enterprise: { price: '$999', users: 'Unlimited', articles: 'Unlimited' }
      },
      competitors: ['Jasper AI ($39-125)', 'Copy.ai ($36-1860)', 'Writesonic ($19-200)'],
      marketShare: '12.3%',
      growthRate: '23.4% CAGR',
      popular: false,
      icon: <Zap className="w-6 h-6" />,
      color: 'from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400'
    },
    {
      name: 'Database Performance Monitor',
      basePrice: '$149',
      period: '/month',
      description: 'Real-time database monitoring and optimization',
      marketPosition: 'Performance specialist',
      features: [
        'Real-time query monitoring',
        'Automated index optimization',
        'Slow query detection & analysis',
        'Capacity planning insights',
        'Multi-database support',
        'Custom alerting & integrations',
        'Performance consulting hours',
        'Custom dashboard builder'
      ],
      pricing: {
        starter: { price: '$149', databases: 'Up to 3', retention: '30 days' },
        professional: { price: '$349', databases: 'Up to 10', retention: '90 days' },
        enterprise: { price: '$699', databases: 'Unlimited', retention: '1 year' }
      },
      competitors: ['DataDog ($15-23)', 'New Relic ($99-2400)', 'SolarWinds ($1599+)'],
      marketShare: '8.7%',
      growthRate: '18.7% CAGR',
      popular: true,
      icon: <Star className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400'
    },
    {
      name: 'Zero-Trust Security Gateway',
      basePrice: '$199',
      period: '/month',
      description: 'Advanced identity verification and threat detection',
      marketPosition: 'Enterprise security',
      features: [
        'Multi-factor authentication (MFA)',
        'Behavioral analytics',
        'API security & rate limiting',
        'Compliance reporting',
        'Real-time monitoring',
        'Automated incident response',
        '24/7 security operations',
        'Custom security policies'
      ],
      pricing: {
        starter: { price: '$199', users: 'Up to 100', features: 'Core security' },
        professional: { price: '$499', users: 'Up to 1000', features: 'Advanced + compliance' },
        enterprise: { price: '$999', users: 'Unlimited', features: 'Full suite + consulting' }
      },
      competitors: ['Okta ($2-8/user)', 'Auth0 ($23-240)', 'Ping Identity ($3-12/user)'],
      marketShare: '6.2%',
      growthRate: '21.2% CAGR',
      popular: false,
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400'
    }
  ];

  const marketAnalysis = [
    {
      metric: 'Total Addressable Market',
      value: '$75.3B',
      description: 'Combined market size across all micro SaaS segments',
      trend: 'up',
      change: '+21.8% YoY'
    },
    {
      metric: 'Average Customer LTV',
      value: '$2,847',
      description: 'Customer lifetime value across micro SaaS services',
      trend: 'up',
      change: '+18% YoY'
    },
    {
      metric: 'Market Growth Rate',
      value: '22.1%',
      description: 'Compound annual growth rate',
      trend: 'up',
      change: '+3.2% vs 2023'
    },
    {
      metric: 'Competitive Pricing',
      value: '15-40%',
      description: 'Average discount vs enterprise solutions',
      trend: 'down',
      change: '-8% YoY'
    }
  ];

  const pricingFactors = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Market Positioning',
      description: 'Competitive pricing based on market research and competitor analysis',
      details: 'We analyze 50+ competitors and adjust pricing quarterly based on market trends'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Value-Based Pricing',
      description: 'Pricing reflects actual ROI and business value delivered',
      details: 'Our customers see 3-5x ROI within 6 months of implementation'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Dynamic Adjustments',
      description: 'Regular pricing updates based on market conditions and feature additions',
      details: 'Pricing reviewed monthly with quarterly adjustments based on market data'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Premium pricing reflects enterprise-grade quality and support',
      details: '99.9% uptime guarantee with 24/7 support and dedicated account managers'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Enterprise Support',
      description: 'Dedicated account managers and 24/7 priority support'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment with local compliance support'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Custom Security',
      description: 'Tailored security policies and compliance frameworks'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Pricing - Zion Tech Group | Market-Research Based Pricing</title>
        <meta name="description" content="Real micro SaaS pricing based on market research, competitive analysis, and proven ROI. See actual market rates and value-based pricing for enterprise solutions." />
        <meta property="og:title" content="Micro SaaS Pricing - Zion Tech Group" />
        <meta property="og:description" content="Market-research based pricing for real micro SaaS services with competitive analysis." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Header Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Market-Research Based Pricing
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Real Pricing for Real Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our pricing is based on extensive market research, competitive analysis, and proven ROI. No generic plans - just real solutions with market-validated pricing.
            </p>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Market Intelligence & Pricing Insights
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Data-driven pricing decisions based on real market conditions and competitive analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketAnalysis.map((analysis, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{analysis.value}</div>
                  <div className="text-sm text-gray-400 mb-3">{analysis.metric}</div>
                  <div className="text-sm text-gray-300 mb-4">{analysis.description}</div>
                  <div className={`inline-flex items-center text-sm ${
                    analysis.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${analysis.trend === 'down' ? 'rotate-180' : ''}`} />
                    {analysis.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {microSaasPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-500 scale-105'
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
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${plan.color} ${
                      plan.popular ? 'bg-white/20 text-white' : 'text-white'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : plan.textColor
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${
                      plan.popular ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Market Position */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700/50 text-xs text-gray-300 mb-3">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      {plan.marketPosition}
                    </div>
                    <div className="text-sm text-gray-400">
                      Market Share: <span className="text-white font-semibold">{plan.marketShare}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Growth: <span className="text-green-400 font-semibold">{plan.growthRate}</span>
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">Starting at</div>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-4xl font-bold ${
                          plan.popular ? 'text-white' : plan.textColor
                        }`}>
                          {plan.basePrice}
                        </span>
                        <span className={`text-lg ml-1 ${
                          plan.popular ? 'text-blue-100' : 'text-gray-400'
                        }`}>
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Tier Breakdown */}
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded">
                        <span className="text-gray-400">Starter:</span>
                        <span className="text-white font-semibold">{plan.pricing.starter.price}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded">
                        <span className="text-gray-400">Professional:</span>
                        <span className="text-white font-semibold">{plan.pricing.professional.price}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded">
                        <span className="text-gray-400">Enterprise:</span>
                        <span className="text-white font-semibold">{plan.pricing.enterprise.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Competitors */}
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Competitor Pricing:</div>
                    <div className="space-y-1 text-xs text-gray-300">
                      {plan.competitors.map((competitor, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{competitor.split(' (')[0]}</span>
                          <span className="text-gray-400">{competitor.split(' (')[1].replace(')', '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 text-sm">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-white' : 'text-blue-400'
                        }`} />
                        <span className={`${
                          plan.popular ? 'text-blue-100' : 'text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Button
                      href="/contact"
                      variant={plan.popular ? 'secondary' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      Get Custom Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                How We Determine Pricing
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Transparent pricing methodology based on market research and value delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingFactors.map((factor, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      {factor.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{factor.title}</h3>
                      <p className="text-gray-300 mb-3">{factor.description}</p>
                      <p className="text-sm text-gray-400">{factor.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Additional capabilities for large organizations with custom requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-900/50 border border-gray-800 rounded-xl p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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
              Get a custom quote based on your specific requirements and see how our market-research based pricing compares to alternatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
              >
                Get Custom Quote
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