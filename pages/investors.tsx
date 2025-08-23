import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, BarChart3, Users, 
  ArrowRight, CheckCircle, Globe, Brain, Atom,
  Shield, Rocket, Target, Award, Star
} from 'lucide-react';
import Link from 'next/link';

const Investors: React.FC = () => {
  const investmentHighlights = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Rapid Growth',
      value: '300%+',
      description: 'Year-over-year revenue growth',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Market',
      value: '$110B+',
      description: 'Total addressable market by 2045',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Base',
      value: '500+',
      description: 'Enterprise clients worldwide',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Patents',
      value: '25+',
      description: 'Proprietary technologies',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const marketOpportunities = [
    {
      title: 'AI & Machine Learning',
      marketSize: '$110B by 2045',
      growth: '35% CAGR',
      description: 'Advanced AI consciousness and emotional intelligence platforms',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Quantum Computing',
      marketSize: '$65B by 2045',
      growth: '40% CAGR',
      description: 'Next-generation quantum computing solutions for enterprise',
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Cybersecurity',
      marketSize: '$450B by 2045',
      growth: '25% CAGR',
      description: 'AI-powered security and compliance automation',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Space Technology',
      marketSize: '$1.4T by 2045',
      growth: '45% CAGR',
      description: 'Space resource intelligence and exploration platforms',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const financialMetrics = [
    {
      metric: 'Revenue Growth',
      value: '300%',
      period: 'YoY',
      trend: 'up',
      description: 'Consistent triple-digit growth'
    },
    {
      metric: 'Gross Margin',
      value: '85%',
      period: 'Current',
      trend: 'up',
      description: 'High-margin software business'
    },
    {
      metric: 'Customer Retention',
      value: '98%',
      period: 'Annual',
      trend: 'up',
      description: 'Exceptional customer loyalty'
    },
    {
      metric: 'Market Share',
      value: '2.5%',
      period: 'Target 2025',
      trend: 'up',
      description: 'Growing market presence'
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'First-Mover Advantage',
      description: 'Pioneering AI consciousness and quantum computing technologies',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Proprietary Technology',
      description: '25+ patents and trade secrets in core technologies',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Expert Team',
      description: 'World-class scientists and engineers from leading institutions',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Strategic Partnerships',
      description: 'Alliances with major technology companies and research institutions',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const investmentUse = [
    {
      category: 'Research & Development',
      percentage: '40%',
      description: 'Accelerate AI consciousness and quantum computing breakthroughs',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Market Expansion',
      percentage: '30%',
      description: 'Enter new markets and expand global presence',
      color: 'from-purple-500 to-pink-600'
    },
    {
      category: 'Talent Acquisition',
      percentage: '20%',
      description: 'Recruit top scientists and engineers',
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Infrastructure',
      percentage: '10%',
      description: 'Scale cloud infrastructure and security systems',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const teamHighlights = [
    {
      name: 'Dr. Kleber M. Santos',
      role: 'CEO & Chief Scientist',
      background: 'PhD in AI Consciousness, 20+ years in quantum computing',
      expertise: 'AI, Quantum Computing, Consciousness Theory'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & Head of Research',
      background: 'PhD in Computer Science, Former Google AI researcher',
      expertise: 'Machine Learning, Neural Networks, Quantum Algorithms'
    },
    {
      name: 'Dr. Marcus Rodriguez',
      role: 'Chief Security Officer',
      background: 'PhD in Cybersecurity, Former NSA technical director',
      expertise: 'Cybersecurity, Compliance, Threat Intelligence'
    }
  ];

  return (
    <Layout
      title="Investors - Zion Tech Group"
      description="Investment opportunities in cutting-edge AI, quantum computing, and space technology. Join us in shaping the future."
      keywords="investors, investment, funding, Zion Tech Group, AI, quantum computing, technology investment"
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
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Investors
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Invest in the future of technology
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Join us in revolutionizing AI consciousness, quantum computing, and space technology. 
                Be part of the next technological breakthrough that will transform industries worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Investment Highlights */}
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
                Investment Highlights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key metrics that demonstrate our growth and potential
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {highlight.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunities */}
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
                Market Opportunities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Massive addressable markets with exponential growth potential
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-3">
                      {opportunity.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{opportunity.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{opportunity.marketSize}</div>
                      <div className="text-sm text-gray-400">Market Size</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">{opportunity.growth}</div>
                      <div className="text-sm text-gray-400">Growth Rate</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{opportunity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Metrics */}
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
                Financial Performance
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strong financial fundamentals driving sustainable growth
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{metric.metric}</h3>
                  <div className="text-sm text-gray-400 mb-3">{metric.period}</div>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
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
                Competitive Advantages
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                What sets Zion Tech Group apart from the competition
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Use */}
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
                Investment Use of Funds
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strategic allocation to accelerate growth and market leadership
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {investmentUse.map((use, index) => (
                <motion.div
                  key={use.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{use.category}</h3>
                    <div className={`w-16 h-8 bg-gradient-to-br ${use.color} rounded-xl flex items-center justify-center text-white font-bold`}>
                      {use.percentage}
                    </div>
                  </div>
                  <p className="text-gray-300">{use.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Highlights */}
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
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                World-class expertise driving innovation and growth
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamHighlights.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-purple-400 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-300 text-sm mb-3">{member.background}</p>
                  <div className="text-xs text-cyan-400">{member.expertise}</div>
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
                Ready to Invest in the Future?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join us in building the technologies that will define the next decade. 
                Contact our investment team to learn more about opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Investment Meeting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="mailto:investors@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Investor Relations
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Investors;