import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, DollarSign, Users, Globe, Rocket, Star, Award } from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const investmentHighlights = [
    {
      title: "Revolutionary Technology",
      description: "AI consciousness, quantum computing, and autonomous systems",
      icon: <Rocket className="w-8 h-8" />,
      value: "Market Leader"
    },
    {
      title: "Global Market Reach",
      description: "250+ countries served with scalable technology solutions",
      icon: <Globe className="w-8 h-8" />,
      value: "Worldwide"
    },
    {
      title: "Revenue Growth",
      description: "Consistent year-over-year growth in emerging markets",
      icon: <TrendingUp className="w-8 h-8" />,
      value: "300%+"
    },
    {
      title: "Technology Portfolio",
      description: "3000+ revolutionary services and solutions",
      icon: <Star className="w-8 h-8" />,
      value: "Industry Leading"
    }
  ];

  const financialMetrics = [
    {
      metric: "Market Cap",
      value: "$2.5B+",
      change: "+45%",
      period: "YoY"
    },
    {
      metric: "Revenue Growth",
      value: "300%+",
      change: "+150%",
      period: "YoY"
    },
    {
      metric: "Customer Base",
      value: "10,000+",
      change: "+200%",
      period: "YoY"
    },
    {
      metric: "Global Presence",
      value: "250+",
      change: "+50",
      period: "Countries"
    }
  ];

  const growthAreas = [
    {
      title: "AI Consciousness Platform",
      description: "Next-generation AI with emotional intelligence and consciousness",
      marketSize: "$150B",
      growthRate: "45% CAGR"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Quantum-powered applications for enterprise and research",
      marketSize: "$65B",
      growthRate: "38% CAGR"
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing business intelligence and operations",
      marketSize: "$85B",
      growthRate: "42% CAGR"
    },
    {
      title: "Space Technology",
      description: "AI-powered space resource intelligence and exploration",
      marketSize: "$100B",
      growthRate: "50% CAGR"
    }
  ];

  return (
    <Layout 
      title="Investor Relations - Zion Tech Group"
      description="Discover investment opportunities in Zion Tech Group, a revolutionary technology company pioneering AI consciousness, quantum computing, and autonomous systems."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Investor Relations
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Invest in the future of technology with Zion Tech Group. We're pioneering revolutionary 
                AI consciousness, quantum computing, and autonomous systems that are transforming industries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Investor Relations
                </a>
                <a
                  href="#financial-metrics"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Financial Data
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Highlights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Investment Highlights</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key factors that make Zion Tech Group an attractive investment opportunity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 mb-3">{highlight.description}</p>
                  <div className="text-cyan-400 font-semibold">{highlight.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Metrics Section */}
        <section id="financial-metrics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Financial Performance</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strong financial metrics demonstrating our market leadership and growth potential
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {financialMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
                >
                  <h3 className="text-lg font-medium text-gray-400 mb-2">{metric.metric}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-green-400 font-semibold">{metric.change}</div>
                  <div className="text-sm text-gray-500">{metric.period}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Areas Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Growth Areas</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strategic focus areas with massive market potential and strong growth trajectories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {growthAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Market Size</div>
                      <div className="text-xl font-semibold text-cyan-400">{area.marketSize}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Growth Rate</div>
                      <div className="text-xl font-semibold text-green-400">{area.growthRate}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Competitive Advantages</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                What sets Zion Tech Group apart in the competitive technology landscape
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-6">Technology Leadership</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>AI Consciousness:</strong> First-mover advantage in emotional AI and consciousness systems
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Quantum Computing:</strong> Proprietary algorithms and quantum-resistant security
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Autonomous Systems:</strong> Self-managing business intelligence and operations
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-6">Market Position</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Global Reach:</strong> 250+ countries with localized solutions and support
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Customer Base:</strong> 10,000+ enterprise customers across industries
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Innovation Pipeline:</strong> 3000+ revolutionary services and solutions
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Opportunities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Investment Opportunities</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multiple ways to invest in Zion Tech Group's revolutionary technology vision
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Series C Funding",
                  description: "Join our latest funding round to accelerate global expansion and product development",
                  amount: "$100M",
                  status: "Open"
                },
                {
                  title: "Strategic Partnerships",
                  description: "Collaborate on joint ventures and technology development initiatives",
                  amount: "Flexible",
                  status: "Ongoing"
                },
                {
                  title: "Technology Licensing",
                  description: "License our revolutionary AI and quantum computing technologies",
                  amount: "Variable",
                  status: "Available"
                }
              ].map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      opportunity.status === 'Open' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      opportunity.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {opportunity.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{opportunity.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{opportunity.amount}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Invest in the Future?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us in revolutionizing technology and creating unprecedented value for investors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Investor Relations
                </a>
                <a
                  href="mailto:investors@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Email Investors Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InvestorsPage;