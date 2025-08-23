import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Sparkles, Target, TrendingUp, BarChart3, 
  ArrowRight, CheckCircle, Users, Globe, Brain, Atom,
  Shield, Rocket, Star, Megaphone, Eye, MousePointer, Mail
} from 'lucide-react';
import Link from 'next/link';

const ServicesAdvertising: React.FC = () => {
  const advertisingServices = [
    {
      title: 'AI-Powered Ad Targeting',
      description: 'Advanced machine learning algorithms for precise audience segmentation and targeting',
      features: [
        'Behavioral analysis',
        'Predictive modeling',
        'Real-time optimization',
        'Cross-platform targeting'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Quantum Marketing Analytics',
      description: 'Next-generation analytics using quantum computing for deeper insights',
      features: [
        'Quantum pattern recognition',
        'Multi-dimensional analysis',
        'Predictive market modeling',
        'Real-time performance tracking'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Consciousness-Based Marketing',
      description: 'Revolutionary approach using AI consciousness for emotional connection',
      features: [
        'Emotional intelligence',
        'Cultural sensitivity',
        'Personalized messaging',
        'Brand authenticity'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const marketingChannels = [
    {
      channel: 'Digital Advertising',
      platforms: ['Google Ads', 'Facebook/Instagram', 'LinkedIn', 'TikTok'],
      reach: 'Global',
      targeting: 'Advanced AI',
      icon: <Globe className="w-6 h-6" />
    },
    {
      channel: 'Content Marketing',
      platforms: ['SEO', 'Blog', 'Video', 'Social Media'],
      reach: 'Organic',
      targeting: 'Intent-based',
      icon: <Megaphone className="w-6 h-6" />
    },
    {
      channel: 'Email Marketing',
      platforms: ['Automation', 'Segmentation', 'A/B Testing', 'Analytics'],
      reach: 'Direct',
      targeting: 'Behavioral',
      icon: <Mail className="w-6 h-6" />
    },
    {
      channel: 'Influencer Marketing',
      platforms: ['Micro-influencers', 'Celebrities', 'Industry experts', 'Brand ambassadors'],
      reach: 'Niche',
      targeting: 'Audience match',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const advertisingTechnologies = [
    {
      technology: 'AI-Powered Optimization',
      description: 'Machine learning algorithms that continuously optimize ad performance',
      benefits: [
        'Higher conversion rates',
        'Lower cost per acquisition',
        'Real-time adjustments',
        'Predictive analytics'
      ],
      icon: <Brain className="w-6 h-6" />
    },
    {
      technology: 'Quantum Computing',
      description: 'Advanced computing power for complex marketing calculations',
      benefits: [
        'Faster data processing',
        'Complex pattern recognition',
        'Multi-variable optimization',
        'Future trend prediction'
      ],
      icon: <Atom className="w-6 h-6" />
    },
    {
      technology: 'Blockchain Advertising',
      description: 'Transparent and verifiable advertising transactions',
      benefits: [
        'Ad fraud prevention',
        'Transparent reporting',
        'Smart contracts',
        'Decentralized verification'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      technology: 'AR/VR Marketing',
      description: 'Immersive advertising experiences for deeper engagement',
      benefits: [
        'Higher engagement rates',
        'Memorable experiences',
        'Interactive storytelling',
        'Brand differentiation'
      ],
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const successMetrics = [
    {
      metric: 'ROI Improvement',
      current: '25%',
      target: '40%',
      description: 'Return on advertising investment'
    },
    {
      metric: 'Conversion Rate',
      current: '3.2%',
      target: '5.0%',
      description: 'Website visitor to customer conversion'
    },
    {
      metric: 'Cost Per Acquisition',
      current: '$45',
      target: '$30',
      description: 'Cost to acquire new customers'
    },
    {
      metric: 'Brand Awareness',
      current: '68%',
      target: '85%',
      description: 'Target audience brand recognition'
    }
  ];

  const caseStudies = [
    {
      client: 'Tech Startup',
      industry: 'SaaS',
      challenge: 'Low brand awareness in competitive market',
      solution: 'AI-powered content marketing and influencer partnerships',
      results: '300% increase in organic traffic, 150% growth in qualified leads'
    },
    {
      client: 'E-commerce Brand',
      industry: 'Retail',
      challenge: 'High customer acquisition costs',
      solution: 'Quantum analytics for audience targeting and retargeting campaigns',
      results: '40% reduction in CAC, 200% increase in customer lifetime value'
    },
    {
      client: 'B2B Company',
      industry: 'Manufacturing',
      challenge: 'Complex sales cycle and long decision-making process',
      solution: 'Consciousness-based marketing with personalized content strategy',
      results: '60% faster sales cycle, 80% improvement in lead quality'
    }
  ];

  const pricingTiers = [
    {
      tier: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses starting their advertising journey',
      features: [
        'Basic AI targeting',
        '2 marketing channels',
        'Monthly reporting',
        'Email support'
      ],
      bestFor: 'Small businesses, startups'
    },
    {
      tier: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive advertising solutions for growing companies',
      features: [
        'Advanced AI optimization',
        '5 marketing channels',
        'Weekly reporting',
        'Priority support',
        'A/B testing'
      ],
      bestFor: 'Growing companies, mid-market'
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-service advertising with dedicated team and custom solutions',
      features: [
        'Full AI consciousness suite',
        'Unlimited channels',
        'Real-time reporting',
        'Dedicated manager',
        'Custom integrations'
      ],
      bestFor: 'Large enterprises, Fortune 500'
    }
  ];

  return (
    <Layout
      title="Services Advertising - Zion Tech Group"
      description="Revolutionary advertising and marketing services powered by AI consciousness and quantum computing. Transform your brand with cutting-edge technology."
      keywords="advertising services, marketing services, AI advertising, quantum marketing, consciousness-based marketing, Zion Tech Group"
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
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Services Advertising
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary advertising powered by AI consciousness and quantum computing
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Transform your brand with cutting-edge marketing technology that understands 
                your audience at a deeper level than ever before.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Advertising Services */}
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
                Revolutionary Advertising Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Leveraging the latest in AI consciousness and quantum computing for unprecedented results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advertisingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
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
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Channels */}
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
                Multi-Channel Marketing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive coverage across all major advertising platforms
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketingChannels.map((channel, index) => (
                <motion.div
                  key={channel.channel}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-3">
                      {channel.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{channel.channel}</h3>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-2">Platforms:</div>
                    <div className="flex flex-wrap gap-2">
                      {channel.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Reach</div>
                      <div className="text-white font-semibold">{channel.reach}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Targeting</div>
                      <div className="text-white font-semibold">{channel.targeting}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advertising Technologies */}
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
                Cutting-Edge Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The latest innovations powering our advertising solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advertisingTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.technology}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{tech.technology}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
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
                Measurable Results
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Track your advertising success with comprehensive metrics and analytics
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{metric.metric}</h3>
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-blue-400">{metric.current}</div>
                    <div className="text-sm text-gray-400">Current</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-green-400">{metric.target}</div>
                    <div className="text-sm text-gray-400">Target</div>
                  </div>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
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
                Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real results from real clients using our revolutionary advertising services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="text-sm text-orange-400 font-semibold">{study.industry}</div>
                    <h3 className="text-xl font-bold text-white">{study.client}</h3>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-1">Challenge:</div>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-1">Solution:</div>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Results:</div>
                    <p className="text-green-400 text-sm font-semibold">{study.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
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
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the plan that fits your business needs and budget
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border transition-all duration-300 ${
                    tier.tier === 'Professional' 
                      ? 'border-purple-500/50 scale-105' 
                      : 'border-gray-700/30 hover:border-purple-500/50'
                  }`}
                >
                  {tier.tier === 'Professional' && (
                    <div className="text-center mb-4">
                      <span className="px-4 py-2 bg-purple-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{tier.tier}</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-center mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mb-6">
                    <div className="text-gray-400 text-sm">Best for:</div>
                    <div className="text-white font-semibold">{tier.bestFor}</div>
                  </div>
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 font-semibold rounded-2xl transition-all duration-300 ${
                      tier.tier === 'Professional'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Advertising?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join the future of advertising with AI consciousness and quantum computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Speak to an Expert
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesAdvertising;