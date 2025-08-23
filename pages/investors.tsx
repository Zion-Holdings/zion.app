import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  Rocket, 
  Brain, 
  Atom, 
  Shield,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';

export default function Investors() {

  const financialMetrics = [
    {
      id: 'revenue',
      name: 'Annual Revenue',
      value: '$45.2M',
      growth: '+156%',
      trend: 'up',
      description: 'Strong growth driven by AI and quantum solutions'
    },
    {
      id: 'customers',
      name: 'Active Customers',
      value: '500+',
      growth: '+89%',
      trend: 'up',
      description: 'Expanding global customer base across industries'
    },
    {
      id: 'margins',
      name: 'Gross Margins',
      value: '78%',
      growth: '+12%',
      trend: 'up',
      description: 'High-margin recurring revenue model'
    },
    {
      id: 'growth',
      name: 'YoY Growth',
      value: '156%',
      growth: '+89%',
      trend: 'up',
      description: 'Accelerating market adoption and expansion'
    }
  ];

  const marketOpportunities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      marketSize: '$500B+',
      growth: '35% CAGR',
      description: 'Rapid adoption of AI solutions across industries'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Computing',
      marketSize: '$65B+',
      growth: '42% CAGR',
      description: 'Breakthrough quantum technologies and applications'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology',
      marketSize: '$469B+',
      growth: '28% CAGR',
      description: 'Space exploration and resource mining solutions'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      marketSize: '$300B+',
      growth: '31% CAGR',
      description: 'Advanced security and compliance solutions'
    }
  ];

  const competitiveAdvantages = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Consciousness Leadership',
      description: 'Pioneering AI consciousness and emotional intelligence technologies'
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Quantum Innovation',
      description: 'Breakthrough quantum computing and cryptography solutions'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Technology',
      description: 'Revolutionary space resource mining and satellite systems'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'World-class researchers and engineers with deep expertise'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Established presence in 50+ countries with local expertise'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Track Record',
      description: '15+ years of successful technology innovation and delivery'
    }
  ];

  const investmentHighlights = [
    {
      year: '2023',
      milestone: 'Series A Funding',
      amount: '$25M',
      investors: 'Leading VC firms and strategic partners',
      use: 'Product development and market expansion'
    },
    {
      year: '2024',
      milestone: 'Revenue Milestone',
      amount: '$45M+',
      investors: 'Organic growth and customer expansion',
      use: 'Scaling operations and R&D investment'
    },
    {
      year: '2025',
      milestone: 'Series B Target',
      amount: '$100M+',
      investors: 'Growth equity and strategic investors',
      use: 'Global expansion and acquisition opportunities'
    }
  ];

  const teamHighlights = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Chief Technology Officer',
      experience: '15+ years in AI and emerging technologies',
      expertise: ['AI Strategy', 'Quantum Computing', 'Technology Innovation']
    },
    {
      name: 'AI Research Division',
      role: 'Advanced AI Development',
      experience: 'World-class AI researchers and engineers',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics']
    },
    {
      name: 'Quantum Engineering',
      role: 'Quantum Technology Specialists',
      experience: 'Leading quantum computing experts',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Quantum Infrastructure']
    }
  ];

  return (
    <>
      <Head>
        <title>Investors - Zion Tech Group | Investment Opportunities</title>
        <meta name="description" content="Invest in Zion Tech Group's revolutionary AI, quantum computing, and space technology solutions. Learn about our growth, market opportunities, and investment highlights." />
        <meta name="keywords" content="investors Zion Tech Group, investment opportunities, AI technology investment, quantum computing investment, technology startup funding" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/investors" />
        <meta property="og:title" content="Investors - Zion Tech Group" />
        <meta property="og:description" content="Invest in Zion Tech Group's revolutionary AI, quantum computing, and space technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/investors" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Investors - Zion Tech Group" />
        <meta name="twitter:description" content="Invest in Zion Tech Group's revolutionary AI, quantum computing, and space technology solutions." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Investor Relations
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Invest in the future of technology with Zion Tech Group. We're revolutionizing AI consciousness, quantum computing, and space technology while delivering exceptional returns for our investors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#investment-highlights" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  View Investment Highlights
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Contact Investor Relations
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Financial Metrics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Financial Performance
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Strong financial performance driven by market-leading technology solutions and expanding global customer base.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {financialMetrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 mb-2">
                    {metric.name}
                  </div>
                  <div className={`text-sm font-medium mb-3 ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.growth} YoY
                  </div>
                  <p className="text-gray-400 text-sm">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunities Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Market Opportunities
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We operate in high-growth markets with massive addressable opportunities and strong competitive advantages.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {marketOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-cyan-400">
                    {opportunity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {opportunity.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-cyan-400 font-semibold">
                        Market: {opportunity.marketSize}
                      </span>
                      <span className="text-green-400 font-semibold">
                        Growth: {opportunity.growth}
                      </span>
                    </div>
                    <p className="text-gray-400">
                      {opportunity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Competitive Advantages
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our unique position in the market is built on breakthrough technologies, world-class expertise, and proven execution capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Highlights Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50" id="investment-highlights">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Investment Highlights
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Track our funding journey and growth milestones as we scale our revolutionary technology solutions.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              <div className="space-y-12">
                {investmentHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          {highlight.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {highlight.milestone}
                        </h3>
                        <div className="text-2xl font-bold text-green-400 mb-2">
                          {highlight.amount}
                        </div>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Investors:</strong> {highlight.investors}
                        </p>
                        <p className="text-gray-300 text-sm">
                          <strong>Use of Funds:</strong> {highlight.use}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experienced leadership team with deep expertise in AI, quantum computing, and emerging technologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamHighlights.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-300 mb-4">
                    {member.experience}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Thesis Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Investment Thesis
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our investment thesis is built on the convergence of breakthrough technologies and massive market opportunities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="text-xl font-semibold mb-4 text-white">Technology Leadership</h3>
                  <p className="text-gray-300 mb-4">
                    We're at the forefront of AI consciousness, quantum computing, and space technology - three of the most transformative technologies of our time.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Pioneering AI consciousness research</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Breakthrough quantum algorithms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Revolutionary space technologies</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-semibold mb-4 text-white">Market Opportunity</h3>
                  <p className="text-gray-300 mb-4">
                    Operating in trillion-dollar markets with accelerating growth rates and strong competitive moats.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">$1.5T+ total addressable market</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">35%+ compound annual growth</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">High-margin recurring revenue</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Invest in the Future?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in revolutionizing technology and creating exceptional returns for our investors. Contact our investor relations team to learn more about investment opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Contact Investor Relations
                </a>
                <a href="/about" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}