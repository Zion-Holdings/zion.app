import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, ChartBar, Users, Globe, Rocket, Star, ArrowRight, CheckCircle, Award, Target, Zap, Brain } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function Investors() {
  const investmentHighlights = [
    {
      title: 'AI & Quantum Technology',
      description: 'Leading edge in artificial intelligence and quantum computing',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      metrics: ['$50M+ R&D investment', '15+ AI patents', 'Quantum advantage achieved']
    },
    {
      title: 'Space Technology',
      description: 'Revolutionary space exploration and resource mining',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      metrics: ['$30M+ space initiatives', '3 space missions planned', 'Resource mining technology']
    },
    {
      title: 'Market Growth',
      description: 'Expanding market presence and customer base',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      metrics: ['300% YoY growth', '500+ enterprise clients', 'Global expansion']
    },
    {
      title: 'Revenue Generation',
      description: 'Strong financial performance and profitability',
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      metrics: ['$25M+ annual revenue', '40% profit margins', 'Recurring revenue model']
    }
  ];

  const financialMetrics = [
    { label: 'Annual Revenue', value: '$25M+', change: '+300%', trend: 'up' },
    { label: 'Customer Growth', value: '500+', change: '+150%', trend: 'up' },
    { label: 'Market Cap', value: '$500M+', change: '+400%', trend: 'up' },
    { label: 'R&D Investment', value: '$80M+', change: '+200%', trend: 'up' },
    { label: 'Global Presence', value: '25+ countries', change: '+100%', trend: 'up' },
    { label: 'Patent Portfolio', value: '25+ patents', change: '+150%', trend: 'up' }
  ];

  const investmentOpportunities = [
    {
      title: 'Series B Funding',
      amount: '$50M',
      use: 'Product development and market expansion',
      timeline: 'Q2 2025',
      status: 'Open'
    },
    {
      title: 'Strategic Partnership',
      amount: '$100M+',
      use: 'Joint ventures and technology licensing',
      timeline: 'Ongoing',
      status: 'Open'
    },
    {
      title: 'IPO Preparation',
      amount: '$200M+',
      use: 'Public market readiness and scaling',
      timeline: '2026',
      status: 'Planning'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <TrendingUp className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Investor Relations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join us in building the future of technology with AI, quantum computing, and space exploration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#financial-overview" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 text-lg">
                View Financial Overview
              </Button>
              <Button href="/contact" variant="outline" className="border-green-500 text-green-400 px-8 py-4 text-lg">
                Contact Investment Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Investment Highlights
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key areas driving our growth and market leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                <p className="text-gray-400 mb-6">{highlight.description}</p>
                <ul className="space-y-2">
                  {highlight.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Metrics */}
      <section id="financial-overview" className="py-20 bg-gradient-to-r from-green-900/10 via-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Financial Performance
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strong financial metrics demonstrating our growth and market position
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <ChartBar className="w-12 h-12 text-green-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
                <p className="text-gray-400 mb-4">{metric.label}</p>
                <div className="flex items-center justify-center">
                  <TrendingUp className={`w-5 h-5 mr-2 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`} />
                  <span className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Investment Opportunities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Current and upcoming investment opportunities for strategic partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <DollarSign className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{opportunity.title}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-3xl font-bold text-green-400">{opportunity.amount}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Use of Funds:</h4>
                    <p className="text-gray-400">{opportunity.use}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Timeline:</h4>
                    <p className="text-gray-400">{opportunity.timeline}</p>
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      opportunity.status === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {opportunity.status}
                    </span>
                  </div>
                </div>
                <Button href="/contact" className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white">
                  Express Interest
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20 bg-gradient-to-r from-green-900/10 via-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Invest in Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic advantages that make us an attractive investment opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center"
            >
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Market Leadership</h3>
              <p className="text-gray-400">Leading position in AI, quantum computing, and space technology markets</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center"
            >
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Pipeline</h3>
              <p className="text-gray-400">Strong R&D pipeline with 25+ patents and breakthrough technologies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center"
            >
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Global Expansion</h3>
              <p className="text-gray-400">Expanding presence in 25+ countries with growing customer base</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Invest in the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in building revolutionary technologies that will transform industries and create significant value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 text-lg">
                Schedule Investment Meeting
              </Button>
              <Button href="/about" variant="outline" className="border-green-500 text-green-400 px-10 py-4 text-lg">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}