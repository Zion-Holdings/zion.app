import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  DollarSign, TrendingUp, TrendingDown, Target, Star, Sparkles, Zap, Users, Award, 
  Clock, CheckCircle, Globe, Code, ChevronRight, ExternalLink, 
  BarChart3, Lock, Eye, FileText, Settings, Monitor, Smartphone,
  Activity, Target as TargetIcon, Zap as ZapIcon, Rocket, Brain, Shield, Server, Atom,
  Play, BarChart, PieChart, LineChart, Calculator, Scale, Award as AwardIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function MarketPricingPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('global');

  const marketAnalysis = {
    global: {
      aiServices: { average: 2500, zion: 1999, savings: 20 },
      cybersecurity: { average: 3200, zion: 2499, savings: 22 },
      infrastructure: { average: 1800, zion: 1499, savings: 17 },
      quantum: { average: 4500, zion: 3999, savings: 11 }
    },
    northAmerica: {
      aiServices: { average: 2800, zion: 1999, savings: 29 },
      cybersecurity: { average: 3500, zion: 2499, savings: 29 },
      infrastructure: { average: 2000, zion: 1499, savings: 25 },
      quantum: { average: 5000, zion: 3999, savings: 20 }
    },
    europe: {
      aiServices: { average: 2600, zion: 1999, savings: 23 },
      cybersecurity: { average: 3300, zion: 2499, savings: 24 },
      infrastructure: { average: 1900, zion: 1499, savings: 21 },
      quantum: { average: 4700, zion: 3999, savings: 15 }
    },
    asiaPacific: {
      aiServices: { average: 2200, zion: 1999, savings: 9 },
      cybersecurity: { average: 2800, zion: 2499, savings: 11 },
      infrastructure: { average: 1600, zion: 1499, savings: 6 },
      quantum: { average: 4000, zion: 3999, savings: 0 }
    }
  };

  const competitiveAnalysis = [
    {
      competitor: 'Traditional IT Providers',
      pricing: 'High',
      features: 'Limited',
      innovation: 'Low',
      support: 'Standard',
      zionAdvantage: 'Advanced AI capabilities, 40% cost savings'
    },
    {
      competitor: 'Big Tech Companies',
      pricing: 'Very High',
      features: 'Comprehensive',
      innovation: 'High',
      support: 'Enterprise',
      zionAdvantage: 'Specialized solutions, personalized support, competitive pricing'
    },
    {
      competitor: 'Startup Solutions',
      pricing: 'Variable',
      features: 'Basic',
      innovation: 'Medium',
      support: 'Limited',
      zionAdvantage: 'Proven track record, enterprise-grade reliability, comprehensive support'
    },
    {
      competitor: 'Consulting Firms',
      pricing: 'Premium',
      features: 'Custom',
      innovation: 'Medium',
      support: 'High',
      zionAdvantage: 'Technology-first approach, faster implementation, lower total cost'
    }
  ];

  const pricingTiers = [
    {
      tier: 'Starter',
      price: '$599/month',
      target: 'Small businesses & startups',
      features: [
        'Core AI capabilities',
        'Basic security features',
        'Standard support',
        'Cloud deployment',
        'Up to 5 users'
      ],
      marketPosition: 'Most competitive in segment'
    },
    {
      tier: 'Professional',
      price: '$1,999/month',
      target: 'Growing companies & enterprises',
      features: [
        'Advanced AI & ML features',
        'Comprehensive security',
        'Priority support',
        'Custom integrations',
        'Unlimited users',
        'Advanced analytics'
      ],
      marketPosition: 'Best value for mid-market'
    },
    {
      tier: 'Enterprise',
      price: '$3,999/month',
      target: 'Large enterprises & corporations',
      features: [
        'Custom AI solutions',
        'Quantum security',
        'Dedicated support team',
        'On-premise options',
        'SLA guarantees',
        'White-label solutions'
      ],
      marketPosition: 'Premium enterprise solution'
    }
  ];

  const industryPricing = [
    {
      industry: 'Healthcare',
      averageMarketPrice: '$3,200/month',
      zionPrice: '$2,499/month',
      savings: '22%',
      features: ['HIPAA compliance', 'AI diagnostics', 'Patient data security']
    },
    {
      industry: 'Finance',
      averageMarketPrice: '$4,100/month',
      zionPrice: '$3,199/month',
      savings: '22%',
      features: ['Regulatory compliance', 'Quantum security', 'Real-time analytics']
    },
    {
      industry: 'Manufacturing',
      averageMarketPrice: '$2,800/month',
      zionPrice: '$2,199/month',
      savings: '21%',
      features: ['IoT integration', 'Predictive maintenance', 'Quality control AI']
    },
    {
      industry: 'Retail',
      averageMarketPrice: '$2,200/month',
      zionPrice: '$1,799/month',
      savings: '18%',
      features: ['Customer analytics', 'Inventory optimization', 'Personalization AI']
    }
  ];

  const valuePropositions = [
    {
      title: 'Cost Efficiency',
      description: 'Average 20-30% cost savings compared to market alternatives',
      icon: DollarSign,
      metrics: ['20-30% cost reduction', 'Faster ROI', 'Lower TCO']
    },
    {
      title: 'Innovation Leadership',
      description: 'Cutting-edge AI and quantum technologies ahead of competitors',
      icon: Brain,
      metrics: ['Latest AI models', 'Quantum computing', 'Advanced algorithms']
    },
    {
      title: 'Implementation Speed',
      description: '3x faster deployment compared to traditional solutions',
      icon: Zap,
      metrics: ['Rapid deployment', 'Agile methodology', 'Continuous updates']
    },
    {
      title: 'Support Excellence',
      description: 'Superior customer support and technical assistance',
      icon: Users,
      metrics: ['24/7 support', 'Dedicated teams', 'Expert consultation']
    }
  ];

  return (
    <>
      <Head>
        <title>Market Pricing - Zion Tech Group | Competitive Pricing Analysis</title>
        <meta name="description" content="Discover how Zion Tech Group&apos;s pricing compares to the market. Competitive analysis, cost savings, and value propositions for AI, cybersecurity, and IT infrastructure services." />
        <meta name="keywords" content="market pricing, competitive pricing, cost comparison, pricing analysis, Zion Tech Group pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/market-pricing" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Market Pricing Analysis
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto"
            >
              See how Zion Tech Group&apos;s competitive pricing delivers exceptional value while maintaining industry-leading innovation and support quality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                View Our Pricing
                <DollarSign className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Get Custom Quote
                <Calculator className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Market Comparison Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Market Price Comparison</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How our pricing compares to industry standards across different service categories.
              </p>
            </motion.div>

            {/* Region Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-lg p-1 border border-gray-700/50">
                {['global', 'northAmerica', 'europe', 'asiaPacific'].map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      selectedRegion === region
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {region === 'global' ? 'Global' : 
                     region === 'northAmerica' ? 'North America' :
                     region === 'europe' ? 'Europe' : 'Asia Pacific'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(marketAnalysis[selectedRegion as keyof typeof marketAnalysis]).map(([service, data], index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                    {service.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Market Average</span>
                      <span className="text-gray-300 font-semibold">${data.average}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 text-sm">Zion Price</span>
                      <span className="text-cyan-400 font-semibold">${data.zion}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 text-sm">Savings</span>
                      <span className="text-green-400 font-semibold">{data.savings}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Analysis Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Competitive Analysis</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How we stack up against different types of competitors in the market.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left p-6 text-white font-semibold">Competitor Type</th>
                    <th className="text-left p-6 text-white font-semibold">Pricing</th>
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-left p-6 text-white font-semibold">Innovation</th>
                    <th className="text-left p-6 text-white font-semibold">Support</th>
                    <th className="text-left p-6 text-white font-semibold">Zion Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {competitiveAnalysis.map((competitor, index) => (
                    <motion.tr
                      key={competitor.competitor}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-gray-700/30 hover:bg-gray-700/30 transition-colors duration-200"
                    >
                      <td className="p-6 text-white font-medium">{competitor.competitor}</td>
                      <td className="p-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          competitor.pricing === 'High' || competitor.pricing === 'Very High' || competitor.pricing === 'Premium'
                            ? 'bg-red-500/20 text-red-400'
                            : competitor.pricing === 'Variable'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {competitor.pricing}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          competitor.features === 'Comprehensive' || competitor.features === 'Custom'
                            ? 'bg-green-500/20 text-green-400'
                            : competitor.features === 'Basic'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {competitor.features}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          competitor.innovation === 'High'
                            ? 'bg-green-500/20 text-green-400'
                            : competitor.innovation === 'Low'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {competitor.innovation}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          competitor.support === 'Enterprise' || competitor.support === 'High'
                            ? 'bg-green-500/20 text-green-400'
                            : competitor.support === 'Limited'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {competitor.support}
                        </span>
                      </td>
                      <td className="p-6 text-cyan-400 text-sm max-w-xs">{competitor.zionAdvantage}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industry-Specific Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Pricing</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tailored pricing for different industries with specialized features and compliance requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryPricing.map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{industry.industry}</h3>
                    <span className="text-green-400 font-bold text-lg">{industry.savings} Savings</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Market Average</span>
                      <span className="text-gray-300 font-semibold">{industry.averageMarketPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400">Zion Price</span>
                      <span className="text-cyan-400 font-semibold">{industry.zionPrice}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-medium mb-2">Key Features:</h4>
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our competitive advantages that deliver exceptional value beyond just pricing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valuePropositions.map((proposition, index) => (
                <motion.div
                  key={proposition.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-4">
                      <proposition.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{proposition.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{proposition.description}</p>
                  <ul className="space-y-2">
                    {proposition.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Pricing Tiers</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Transparent pricing designed to scale with your business needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                    tier.tier === 'Professional'
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                      : 'border-gray-700/50 hover:border-cyan-500/50'
                  }`}
                >
                  {tier.tier === 'Professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Best Value
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                    <p className="text-gray-400 text-sm">{tier.target}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      {tier.marketPosition}
                    </span>
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      tier.tier === 'Professional'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700/50 text-white border border-gray-600/50 hover:bg-gray-600/50 hover:border-cyan-500/50'
                    }`}
                  >
                    {tier.tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Experience the Zion Advantage?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the companies already saving 20-30% while getting superior technology and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <Rocket className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  View Full Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}