import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, DollarSign, Target, 
  ArrowRight, CheckCircle, Globe, Brain, Atom,
  Shield, Rocket, Star, Users, Award
} from 'lucide-react';
import Link from 'next/link';

const MarketPricing: React.FC = () => {
  const marketSegments = [
    {
      title: 'Startup & SMB',
      companySize: '1-100 employees',
      revenue: '$1M - $50M',
      pricing: 'Competitive',
      features: [
        'Essential AI tools',
        'Basic security',
        'Cloud migration',
        'Email support'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Mid-Market',
      companySize: '100-1000 employees',
      revenue: '$50M - $500M',
      pricing: 'Market Rate',
      features: [
        'Advanced AI platforms',
        'Comprehensive security',
        'Custom integrations',
        'Priority support'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Enterprise',
      companySize: '1000+ employees',
      revenue: '$500M+',
      pricing: 'Premium',
      features: [
        'Full AI consciousness suite',
        'Enterprise security',
        'Custom development',
        'Dedicated support'
      ],
      icon: <Award className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const competitiveAnalysis = [
    {
      competitor: 'Traditional AI Companies',
      pricing: 'High',
      features: 'Limited',
      innovation: 'Moderate',
      advantage: 'First-mover in AI consciousness',
      icon: <Brain className="w-6 h-6" />
    },
    {
      competitor: 'Quantum Computing Firms',
      pricing: 'Very High',
      features: 'Specialized',
      innovation: 'High',
      advantage: 'Hybrid quantum-classical approach',
      icon: <Atom className="w-6 h-6" />
    },
    {
      competitor: 'Cybersecurity Vendors',
      pricing: 'High',
      features: 'Standard',
      innovation: 'Moderate',
      advantage: 'AI-powered security automation',
      icon: <Shield className="w-6 h-6" />
    },
    {
      competitor: 'Cloud Providers',
      pricing: 'Variable',
      features: 'Comprehensive',
      innovation: 'High',
      advantage: 'Integrated AI + Cloud solutions',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const pricingFactors = [
    {
      factor: 'Market Demand',
      impact: 'High',
      description: 'Growing demand for AI and quantum solutions drives competitive pricing',
      trend: 'Increasing',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      factor: 'Technology Innovation',
      impact: 'High',
      description: 'Cutting-edge technology commands premium pricing in the market',
      trend: 'Stable',
      icon: <Star className="w-6 h-6" />
    },
    {
      factor: 'Competition',
      impact: 'Medium',
      description: 'Competitive landscape influences pricing strategy and positioning',
      trend: 'Increasing',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      factor: 'Customer Value',
      impact: 'High',
      description: 'ROI and business impact justify premium pricing models',
      trend: 'Stable',
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const marketTrends = [
    {
      trend: 'AI Market Growth',
      current: '$110B',
      projected: '$1.8T by 2030',
      growth: '35% CAGR',
      description: 'Rapid expansion of AI market creates pricing opportunities'
    },
    {
      trend: 'Quantum Computing',
      current: '$1.3B',
      projected: '$65B by 2045',
      growth: '40% CAGR',
      description: 'Emerging quantum market allows premium pricing strategies'
    },
    {
      trend: 'Cybersecurity',
      current: '$200B',
      projected: '$450B by 2045',
      growth: '25% CAGR',
      description: 'Growing security needs support competitive pricing'
    },
    {
      trend: 'Space Technology',
      current: '$469B',
      projected: '$1.4T by 2045',
      growth: '45% CAGR',
      description: 'Space sector expansion enables innovative pricing models'
    }
  ];

  const pricingStrategy = [
    {
      strategy: 'Value-Based Pricing',
      description: 'Price based on customer value and ROI, not just costs',
      benefits: [
        'Higher profit margins',
        'Customer satisfaction',
        'Market differentiation',
        'Sustainable growth'
      ]
    },
    {
      strategy: 'Tiered Pricing',
      description: 'Multiple service tiers to capture different market segments',
      benefits: [
        'Market penetration',
        'Revenue optimization',
        'Customer choice',
        'Scalable growth'
      ]
    },
    {
      strategy: 'Dynamic Pricing',
      description: 'Adjust pricing based on market conditions and demand',
      benefits: [
        'Market responsiveness',
        'Revenue maximization',
        'Competitive advantage',
        'Flexible positioning'
      ]
    }
  ];

  return (
    <Layout
      title="Market Pricing - Zion Tech Group"
      description="Understand our market-based pricing strategy and competitive positioning in AI, quantum computing, and cybersecurity markets."
      keywords="market pricing, competitive pricing, AI pricing, quantum computing pricing, cybersecurity pricing, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Market Pricing
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Competitive pricing aligned with market value and innovation
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our pricing strategy reflects the market value of our cutting-edge technologies 
                while ensuring accessibility across different business segments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Market Segments */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Market-Based Segmentation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored pricing for different business sizes and needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {segment.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{segment.title}</h3>
                  <div className="space-y-3 mb-6 text-center">
                    <div>
                      <div className="text-gray-400 text-sm">Company Size</div>
                      <div className="text-white font-semibold">{segment.companySize}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Revenue Range</div>
                      <div className="text-white font-semibold">{segment.revenue}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Pricing Level</div>
                      <div className="text-purple-400 font-semibold">{segment.pricing}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {segment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Competitive Analysis
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                How we position ourselves against market competitors
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitiveAnalysis.map((competitor, index) => (
                <motion.div
                  key={competitor.competitor}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-3">
                      {competitor.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{competitor.competitor}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-400">Pricing</div>
                      <div className="text-white font-semibold">{competitor.pricing}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Features</div>
                      <div className="text-white font-semibold">{competitor.features}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Innovation</div>
                      <div className="text-white font-semibold">{competitor.innovation}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Our Advantage:</div>
                    <div className="text-blue-400 text-sm">{competitor.advantage}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Pricing Factors
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key factors that influence our market-based pricing strategy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingFactors.map((factor, index) => (
                <motion.div
                  key={factor.factor}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{factor.factor}</h3>
                  <div className="text-sm text-gray-400 mb-3">Impact: {factor.impact}</div>
                  <p className="text-gray-300 text-sm mb-3">{factor.description}</p>
                  <div className="text-xs text-green-400 font-semibold">Trend: {factor.trend}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Market Trends & Growth
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding market dynamics that influence pricing strategies
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketTrends.map((trend, index) => (
                <motion.div
                  key={trend.trend}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{trend.trend}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{trend.current}</div>
                      <div className="text-sm text-gray-400">Current Market</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">{trend.projected}</div>
                      <div className="text-sm text-gray-400">Projected</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-purple-400 mb-3">{trend.growth}</div>
                  <p className="text-gray-300 text-sm">{trend.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Strategy */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Pricing Strategy
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strategic approach to market positioning and value delivery
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingStrategy.map((strategy, index) => (
                <motion.div
                  key={strategy.strategy}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.strategy}</h3>
                  <p className="text-gray-300 mb-4">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Market-Competitive Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Contact us for a customized quote that reflects your business needs and market positioning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Call for Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MarketPricing;