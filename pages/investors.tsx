import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, ChartBar, Target, 
  ArrowRight, Star, Sparkles, Building, 
  CheckCircle, Globe, Users, Rocket, Shield,
  BarChart3, PieChart, LineChart, Activity,
  Award, Lightbulb, Zap, Cpu, Brain, Atom
} from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const investmentHighlights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Market Growth',
      value: '300%',
      description: 'Year-over-year revenue growth'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Customer Base',
      value: '500+',
      description: 'Enterprise clients worldwide'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Reach',
      value: '25+',
      description: 'Countries served'
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      title: 'Innovation Pipeline',
      value: '50+',
      description: 'Patents and technologies'
    }
  ];

  const marketOpportunities = [
    {
      title: 'AI & Machine Learning',
      marketSize: '$500B+',
      growth: '25% CAGR',
      description: 'Rapidly expanding AI market with enterprise adoption accelerating',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Quantum Computing',
      marketSize: '$65B+',
      growth: '30% CAGR',
      description: 'Emerging quantum market with first-mover advantage opportunities',
      icon: <Atom className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Business Automation',
      marketSize: '$200B+',
      growth: '20% CAGR',
      description: 'Growing demand for intelligent process automation solutions',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Cybersecurity',
      marketSize: '$300B+',
      growth: '15% CAGR',
      description: 'Increasing security threats driving market expansion',
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  const competitiveAdvantages = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'First-Mover Advantage',
      description: 'Early leadership in AI consciousness and quantum computing'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: 'Proprietary Technology',
      description: 'Unique AI algorithms and quantum computing frameworks'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Expert Team',
      description: 'World-class researchers and engineers with deep expertise'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Partnerships',
      description: 'Strategic alliances with leading technology companies'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'IP Portfolio',
      description: 'Strong intellectual property protection and patents'
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      title: 'Scalable Platform',
      description: 'Cloud-native architecture supporting rapid global expansion'
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
      description: 'High-margin SaaS model'
    },
    {
      metric: 'Customer Retention',
      value: '98%',
      period: 'Annual',
      trend: 'up',
      description: 'Exceptional customer loyalty'
    },
    {
      metric: 'Market Expansion',
      value: '15',
      period: 'New Markets',
      trend: 'up',
      description: 'Geographic growth'
    }
  ];

  return (
    <Layout>
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Investor Relations
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in building the future of technology. Discover investment opportunities in the next generation of AI, quantum computing, and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Investment Inquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#financial-overview"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View Financials
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Investment Highlights
              </h2>
              <p className="text-xl text-gray-300">
                Key metrics demonstrating our growth and market position
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunities */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Market Opportunities
              </h2>
              <p className="text-xl text-gray-300">
                Massive addressable markets with strong growth trajectories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {marketOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex items-center mb-6">
                    {opportunity.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{opportunity.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                      <div className="text-2xl font-bold text-cyan-400">{opportunity.marketSize}</div>
                      <div className="text-sm text-gray-400">Market Size</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                      <div className="text-2xl font-bold text-purple-400">{opportunity.growth}</div>
                      <div className="text-sm text-gray-400">Growth Rate</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{opportunity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Competitive Advantages
              </h2>
              <p className="text-xl text-gray-300">
                Unique strengths that position us for market leadership
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Overview */}
        <section id="financial-overview" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Financial Performance
              </h2>
              <p className="text-xl text-gray-300">
                Strong financial metrics demonstrating sustainable growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {financialMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                  <p className="text-gray-400 text-sm mb-2">{metric.period}</p>
                  <p className="text-gray-300 text-xs">{metric.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Financial Charts Placeholder */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                  Revenue Growth Trend
                </h3>
                <div className="h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                    <p>Revenue growth visualization</p>
                    <p className="text-sm">300% YoY growth</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <PieChart className="w-6 h-6 text-purple-400 mr-2" />
                  Market Share Analysis
                </h3>
                <div className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <PieChart className="w-16 h-16 mx-auto mb-4" />
                    <p>Market position visualization</p>
                    <p className="text-sm">Growing market share</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Investment Opportunities
              </h2>
              <p className="text-xl text-gray-300">
                Multiple ways to participate in our growth story
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Series A Funding',
                  amount: '$10M - $25M',
                  use: 'Product development and market expansion',
                  timeline: 'Q2 2025',
                  icon: <DollarSign className="w-12 h-12 text-green-400" />
                },
                {
                  title: 'Strategic Investment',
                  amount: '$5M - $15M',
                  use: 'Partnership development and technology acquisition',
                  timeline: 'Ongoing',
                  icon: <Target className="w-12 h-12 text-blue-400" />
                },
                {
                  title: 'Growth Capital',
                  amount: '$20M - $50M',
                  use: 'International expansion and R&D acceleration',
                  timeline: 'Q4 2025',
                  icon: <Rocket className="w-12 h-12 text-purple-400" />
                }
              ].map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 text-center"
                >
                  <div className="flex justify-center mb-6">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{opportunity.title}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{opportunity.amount}</div>
                  <p className="text-gray-300 mb-4">{opportunity.use}</p>
                  <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                    {opportunity.timeline}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Invest in the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in revolutionizing technology and creating exceptional returns for our investors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Schedule Investment Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default InvestorsPage;