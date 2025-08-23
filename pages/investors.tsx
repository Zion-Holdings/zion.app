import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  DollarSign, TrendingUp, Globe, Target, Star, ArrowRight,
  CheckCircle, Play, BookOpen, MessageCircle, Phone,
  Building, Award, Zap, Shield, Brain, Rocket, BarChart3, Users
} from 'lucide-react';
import Link from 'next/link';

const Investors: React.FC = () => {
  const investmentHighlights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Rapid Growth',
      description: 'Consistent 300%+ year-over-year revenue growth across all business segments.',
      metric: '300%+ YoY'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Market',
      description: 'Expanding presence in 25+ countries with $50B+ addressable market.',
      metric: '$50B+ TAM'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Technology Leadership',
      description: '200+ patents and cutting-edge innovations in AI, quantum, and space tech.',
      metric: '200+ Patents'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Base',
      description: '500+ enterprise clients including Fortune 100 companies.',
      metric: '500+ Clients'
    }
  ];

  const investmentOpportunities = [
    {
      type: 'Series B',
      amount: '$50M',
      use: 'Product Development & Market Expansion',
      timeline: 'Q4 2024',
      status: 'Open'
    },
    {
      type: 'Strategic Investment',
      amount: '$25M',
      use: 'Quantum Computing R&D',
      timeline: 'Q1 2025',
      status: 'Open'
    },
    {
      type: 'Series C',
      amount: '$100M',
      use: 'Global Expansion & Acquisitions',
      timeline: 'Q2 2025',
      status: 'Planning'
    }
  ];

  const financialMetrics = [
    {
      label: 'Annual Recurring Revenue',
      value: '$25M+',
      growth: '+300%',
      period: 'YoY'
    },
    {
      label: 'Gross Margin',
      value: '85%',
      growth: '+5%',
      period: 'YoY'
    },
    {
      label: 'Customer Acquisition Cost',
      value: '$15K',
      growth: '-25%',
      period: 'YoY'
    },
    {
      label: 'Customer Lifetime Value',
      value: '$150K',
      growth: '+200%',
      period: 'YoY'
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
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Investment Opportunities
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Invest in the Future of Technology
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join Zion Tech Group's mission to revolutionize AI, quantum computing, space technology, 
                and beyond. Exceptional returns await forward-thinking investors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Request Investor Package
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Investor Presentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Highlights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Invest in Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Exceptional growth, market leadership, and breakthrough innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-cyan-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {highlight.description}
                  </p>
                  <div className="text-2xl font-bold text-cyan-400">
                    {highlight.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Financial Performance
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Strong fundamentals and exceptional growth metrics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {financialMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-medium text-gray-300 mb-4">
                    {metric.label}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-cyan-400">
                    {metric.growth} {metric.period}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Opportunities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Current Investment Opportunities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join our next funding rounds and accelerate our growth trajectory
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {opportunity.type}
                      </h3>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {opportunity.amount}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      opportunity.status === 'Open' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {opportunity.status}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm">Use of Funds</p>
                      <p className="text-white">{opportunity.use}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Timeline</p>
                      <p className="text-white">{opportunity.timeline}</p>
                    </div>
                  </div>

                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                    Express Interest
                  </button>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Invest in the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our mission to revolutionize technology and achieve exceptional returns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Request Investor Package
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Investment Team
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