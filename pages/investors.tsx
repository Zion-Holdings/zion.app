import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, BarChart3, Target, CheckCircle, ArrowRight, 
  Star, Users, Building, Cpu, Shield, Rocket, Brain,
  Cloud, Database, Network, Zap, Globe, Award, Handshake
} from 'lucide-react';
import Link from 'next/link';

const Investors: React.FC = () => {
  const investmentHighlights = [
    {
      title: 'AI & Quantum Computing',
      description: 'Leading the revolution in artificial intelligence and quantum computing technologies',
      metrics: ['$50M+ R&D Investment', '15+ Patents Filed', 'Industry-Leading AI Models'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Technology',
      description: 'Pioneering space resource intelligence and satellite technology solutions',
      metrics: ['$30M+ Space Projects', '10+ Satellite Deployments', 'Global Space Network'],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Metaverse Development',
      description: 'Building the next generation of virtual and augmented reality experiences',
      metrics: ['$25M+ Platform Development', '5+ Metaverse Projects', 'VR/AR Innovation'],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Quantum-resistant security and advanced threat protection systems',
      metrics: ['$20M+ Security R&D', '100+ Enterprise Clients', 'Zero-Breach Track Record'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const financialMetrics = [
    {
      number: '$150M+',
      label: 'Total Funding Raised',
      description: 'Series A through Series C funding rounds',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      number: '500%',
      label: 'Revenue Growth',
      description: 'Year-over-year revenue increase',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      number: '200+',
      label: 'Enterprise Clients',
      description: 'Fortune 500 and government organizations',
      icon: <Building className="w-6 h-6" />
    },
    {
      number: '25+',
      label: 'Countries Served',
      description: 'Global market presence and expansion',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const marketOpportunity = [
    {
      title: 'AI Market',
      size: '$500B+',
      growth: '35% CAGR',
      description: 'Artificial Intelligence and Machine Learning market opportunity',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Quantum Computing',
      size: '$65B+',
      growth: '50% CAGR',
      description: 'Quantum computing and quantum software market',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Space Technology',
      size: '$400B+',
      growth: '40% CAGR',
      description: 'Space economy and satellite technology market',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Metaverse',
      size: '$800B+',
      growth: '45% CAGR',
      description: 'Virtual and augmented reality market opportunity',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'First-Mover Advantage',
      description: 'Established market position in emerging technology sectors',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Proprietary Technology',
      description: 'Unique AI algorithms and quantum computing solutions',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Expert Team',
      description: 'World-class engineers and researchers from top institutions',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Strategic Partnerships',
      description: 'Strong relationships with government and enterprise clients',
      icon: <Handshake className="w-6 h-6" />
    },
    {
      title: 'Global Infrastructure',
      description: 'Worldwide data centers and edge computing network',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'IP Portfolio',
      description: 'Extensive patent portfolio and trade secrets',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const investmentUse = [
    'R&D and Product Development',
    'Global Market Expansion',
    'Strategic Acquisitions',
    'Talent Acquisition',
    'Infrastructure Scaling',
    'Marketing and Sales'
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with focus on AI and quantum computing'
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $25M for AI consciousness platform development'
    },
    {
      year: '2022',
      title: 'Series B Funding',
      description: 'Secured $50M for space technology and metaverse expansion'
    },
    {
      year: '2023',
      title: 'Series C Funding',
      description: 'Raised $75M for global expansion and product scaling'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Established as leader in AI, quantum, and space technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Investors
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join us in building the future of technology. Zion Tech Group is leading the revolution 
              in AI, quantum computing, space technology, and the metaverse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#highlights" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Investment Highlights
              </Link>
              <Link href="/contact" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <TrendingUp className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <DollarSign className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <BarChart3 className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover why Zion Tech Group represents a unique investment opportunity in emerging technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center`}>
                      {highlight.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{highlight.description}</p>
                  
                  <div className="space-y-3">
                    {highlight.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Financial Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strong financial metrics demonstrating our growth and market position
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{metric.label}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Massive addressable markets with exponential growth potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketOpportunity.map((market, index) => (
              <motion.div
                key={market.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    {market.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{market.title}</h3>
                    <p className="text-cyan-400 text-sm">{market.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{market.size}</div>
                    <div className="text-gray-400 text-sm">Market Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{market.growth}</div>
                    <div className="text-gray-400 text-sm">Growth Rate</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Competitive Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key differentiators that position us for market leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Use */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment Use of Funds
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic allocation of capital to accelerate growth and market expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {investmentUse.map((use, index) => (
              <motion.div
                key={use}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-gray-300 text-sm">{use}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Company Milestones
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key achievements and growth milestones since our founding
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center space-x-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {milestone.year}
                  </div>
                </div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Invest in the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in building the next generation of technology. Contact our investment team 
              to learn more about investment opportunities and partnership possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contact Investment Team
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;