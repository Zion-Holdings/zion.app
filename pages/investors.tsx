import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, ChartBar, Globe, 
  Users, Rocket, Brain, Atom, Shield,
  Mail, FileText, Calendar, CheckCircle,
  ArrowRight, Star, Target, Award
} from 'lucide-react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

const InvestorsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const companyMetrics = [
    { label: 'Market Cap', value: '$2.5B+', change: '+45%', trend: 'up' },
    { label: 'Revenue Growth', value: '156%', change: 'YoY', trend: 'up' },
    { label: 'Customer Base', value: '500+', change: '+23%', trend: 'up' },
    { label: 'Global Presence', value: '25+', change: 'Countries', trend: 'stable' }
  ];

  const investmentHighlights = [
    {
      title: 'AI & Quantum Leadership',
      description: 'Leading position in AI consciousness evolution and quantum computing solutions',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      metrics: ['$500M+ AI market', '40% market share', '25 patents']
    },
    {
      title: 'Space Technology Innovation',
      description: 'Pioneering space resource mining and autonomous space systems',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      metrics: ['$300M+ space market', '15 space contracts', '3 space partnerships']
    },
    {
      title: 'Enterprise Growth',
      description: 'Rapid expansion in enterprise IT and cybersecurity solutions',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      metrics: ['$800M+ enterprise market', '200+ enterprise clients', '99.9% uptime SLA']
    },
    {
      title: 'Global Expansion',
      description: 'Strategic expansion into emerging markets and new territories',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      metrics: ['25+ countries', '15 regional offices', 'Multi-language support']
    }
  ];

  const financialHighlights = [
    {
      year: '2024',
      revenue: '$450M',
      growth: '156%',
      customers: '450+',
      markets: '20+'
    },
    {
      year: '2023',
      revenue: '$175M',
      growth: '89%',
      customers: '280+',
      markets: '15+'
    },
    {
      year: '2022',
      revenue: '$92M',
      growth: '67%',
      customers: '180+',
      markets: '12+'
    }
  ];

  const investmentOpportunities = [
    {
      type: 'Series C Funding',
      amount: '$500M',
      use: 'Global expansion, R&D acceleration, strategic acquisitions',
      timeline: 'Q2 2025',
      status: 'Open'
    },
    {
      type: 'Strategic Partnership',
      amount: 'Variable',
      use: 'Joint ventures, technology licensing, market access',
      timeline: 'Ongoing',
      status: 'Open'
    },
    {
      type: 'IPO Preparation',
      amount: '$2B+',
      use: 'Public market listing, liquidity for early investors',
      timeline: '2026',
      status: 'Planning'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Company Overview', icon: <ChartBar className="w-5 h-5" /> },
    { id: 'financials', label: 'Financial Performance', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'opportunities', label: 'Investment Opportunities', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'contact', label: 'Investor Relations', icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <Layout>
      <SEO 
        title="Investors | Zion Tech Group"
        description="Invest in Zion Tech Group, a leading technology company pioneering AI, quantum computing, and space technology solutions. Explore investment opportunities and company performance."
        keywords={["investors", "investment", "Zion Tech Group", "AI technology", "quantum computing", "space technology", "financial performance", "IPO"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Investor Relations
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                Invest in the future of technology. Zion Tech Group is pioneering breakthrough solutions in AI consciousness, 
                quantum computing, and space technology that will transform industries and create unprecedented value.
              </p>
              
              {/* Company Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {companyMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-white/60 mb-1">{metric.label}</div>
                    <div className={`text-xs ${metric.trend === 'up' ? 'text-green-400' : 'text-blue-400'}`}>
                      {metric.change}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-gradient-to-r from-gray-900/50 to-black/50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                    selectedTab === tab.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Company Overview Tab */}
            {selectedTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">Company Overview</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Zion Tech Group is at the forefront of technological innovation, driving the future of AI, quantum computing, and space technology.
                  </p>
                </div>

                {/* Investment Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {investmentHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        {highlight.icon}
                        <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                      </div>
                      <p className="text-white/70 mb-4">{highlight.description}</p>
                      <div className="space-y-2">
                        {highlight.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-white/80">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Company Vision */}
                <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Vision</h3>
                  <p className="text-lg text-white/80 mb-6 max-w-3xl mx-auto">
                    To be the global leader in next-generation technology solutions, driving innovation across AI, quantum computing, 
                    and space technology while creating sustainable value for our investors and stakeholders.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Market Leadership</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                      <Award className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Innovation Excellence</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-4 py-2">
                      <Globe className="w-5 h-5 text-indigo-400" />
                      <span className="text-white">Global Impact</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Financial Performance Tab */}
            {selectedTab === 'financials' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">Financial Performance</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Strong financial performance driven by innovative technology solutions and expanding market presence.
                  </p>
                </div>

                {/* Financial Highlights Table */}
                <div className="overflow-x-auto">
                  <table className="w-full bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-6 text-white font-semibold">Year</th>
                        <th className="text-left p-6 text-white font-semibold">Revenue</th>
                        <th className="text-left p-6 text-white font-semibold">Growth</th>
                        <th className="text-left p-6 text-white font-semibold">Customers</th>
                        <th className="text-left p-6 text-white font-semibold">Markets</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financialHighlights.map((year, index) => (
                        <tr key={year.year} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-6 text-white font-semibold">{year.year}</td>
                          <td className="p-6 text-cyan-400 font-bold">{year.revenue}</td>
                          <td className="p-6 text-green-400">{year.growth}</td>
                          <td className="p-6 text-white/80">{year.customers}</td>
                          <td className="p-6 text-white/80">{year.markets}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Key Financial Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl text-center">
                    <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Revenue Growth</h3>
                    <p className="text-3xl font-bold text-green-400 mb-2">156%</p>
                    <p className="text-white/70">Year-over-year growth</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl text-center">
                    <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Customer Growth</h3>
                    <p className="text-3xl font-bold text-blue-400 mb-2">78%</p>
                    <p className="text-white/70">New customers acquired</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl text-center">
                    <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Market Expansion</h3>
                    <p className="text-3xl font-bold text-purple-400 mb-2">67%</p>
                    <p className="text-white/70">New markets entered</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Investment Opportunities Tab */}
            {selectedTab === 'opportunities' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">Investment Opportunities</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Join us in shaping the future of technology through strategic investment opportunities.
                  </p>
                </div>

                {/* Investment Options */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {investmentOpportunities.map((opportunity, index) => (
                    <motion.div
                      key={opportunity.type}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{opportunity.type}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          opportunity.status === 'Open' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {opportunity.status}
                        </span>
                      </div>
                      
                      <div className="text-2xl font-bold text-cyan-400 mb-3">{opportunity.amount}</div>
                      <p className="text-white/70 mb-4">{opportunity.use}</p>
                      
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <span>Timeline: {opportunity.timeline}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Investment Benefits */}
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Why Invest in Zion Tech Group?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white">Market Leadership</h4>
                          <p className="text-white/70">Leading position in emerging technology markets with significant growth potential</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white">Strong Growth</h4>
                          <p className="text-white/70">Consistent revenue growth and expanding customer base across global markets</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Brain className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white">Innovation Pipeline</h4>
                          <p className="text-white/70">Robust R&D pipeline with breakthrough technologies in AI and quantum computing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-white">Global Expansion</h4>
                          <p className="text-white/70">Strategic expansion into emerging markets with high growth potential</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Investor Relations Tab */}
            {selectedTab === 'contact' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">Investor Relations</h2>
                  <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Connect with our investor relations team to learn more about investment opportunities and company performance.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-cyan-400">Get in Touch</h3>
                    <p className="text-white/80">
                      Our investor relations team is here to answer your questions and provide detailed information about 
                      investment opportunities with Zion Tech Group.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <a href="mailto:investors@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          investors@ziontechgroup.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-purple-400" />
                        <span className="text-white/80">Financial reports available quarterly</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-green-400" />
                        <span className="text-white/80">Earnings calls scheduled quarterly</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Request Information</h3>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company/Organization"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Investment Interest or Questions"
                          rows={4}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                      >
                        Send Request
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InvestorsPage;