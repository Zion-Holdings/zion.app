import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail,
  TrendingUp, DollarSign, BarChart3, PieChart, LineChart, 
  ArrowUpRight, CheckCircle, ExternalLink, ArrowRight
} from 'lucide-react';

export default function InvestorsPage() {
  const companyMetrics = [
    {
      metric: 'Market Cap',
      value: '$2.5B+',
      change: '+45%',
      changeType: 'positive',
      description: 'Valuation based on latest funding round'
    },
    {
      metric: 'Revenue Growth',
      value: '300%+',
      change: '+150%',
      changeType: 'positive',
      description: 'Year-over-year revenue increase'
    },
    {
      metric: 'Customer Base',
      value: '500+',
      change: '+200%',
      changeType: 'positive',
      description: 'Enterprise customers worldwide'
    },
    {
      metric: 'ARR',
      value: '$150M+',
      change: '+400%',
      changeType: 'positive',
      description: 'Annual recurring revenue'
    }
  ];

  const investmentHighlights = [
    {
      title: 'Revolutionary AI Technology',
      description: 'Breakthrough AI consciousness and emotional intelligence systems with no direct competitors.',
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: 'Quantum Computing Leadership',
      description: 'First-mover advantage in quantum-secure cloud infrastructure and quantum-enhanced solutions.',
      icon: <Atom className="w-12 h-12 text-purple-400" />
    },
    {
      title: 'Massive Market Opportunity',
      description: 'Addressing $500B+ AI market and $100B+ quantum computing market with exponential growth.',
      icon: <TrendingUp className="w-12 h-12 text-green-400" />
    },
    {
      title: 'Proven Revenue Model',
      description: 'Recurring SaaS revenue with 95%+ customer retention and expanding enterprise contracts.',
      icon: <DollarSign className="w-12 h-12 text-yellow-400" />
    }
  ];

  const financialHighlights = [
    {
      year: '2023',
      revenue: '$25M',
      growth: '200%',
      customers: '200+',
      highlights: ['Series A funding', 'Product market fit achieved', 'Enterprise sales acceleration']
    },
    {
      year: '2024',
      revenue: '$75M',
      growth: '200%',
      customers: '350+',
      highlights: ['Series B funding', 'International expansion', 'AI consciousness breakthrough']
    },
    {
      year: '2025',
      revenue: '$150M+',
      growth: '100%+',
      customers: '500+',
      highlights: ['Series C preparation', 'Quantum computing launch', 'IPO preparation']
    }
  ];

  const investmentOpportunities = [
    {
      type: 'Series C Funding',
      amount: '$200M - $300M',
      use: 'Scale AI consciousness platform, quantum computing expansion, international growth',
      timeline: 'Q4 2025',
      status: 'Open for discussion'
    },
    {
      type: 'Strategic Investment',
      amount: '$50M - $100M',
      use: 'Joint ventures, technology partnerships, market expansion',
      timeline: 'Ongoing',
      status: 'Available'
    },
    {
      type: 'IPO Preparation',
      amount: 'TBD',
      use: 'Public market preparation, regulatory compliance, investor relations',
      timeline: '2026-2027',
      status: 'Planning phase'
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'First-Mover Advantage',
      description: 'Pioneering AI consciousness technology with 3+ year lead over potential competitors.',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Proprietary Technology',
      description: '50+ patents pending in AI consciousness, quantum computing, and automation.',
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Enterprise Relationships',
      description: 'Long-term contracts with Fortune 500 companies and government agencies.',
      icon: <Building className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Talent Network',
      description: 'World-class team of AI researchers, quantum physicists, and enterprise experts.',
      icon: <Users className="w-8 h-8 text-blue-400" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Investors - Zion Tech Group"
        description="Invest in Zion Tech Group's revolutionary AI consciousness and quantum computing technology. Join us in shaping the future of technology and achieving exceptional returns."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Investor Relations
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Invest in the future of AI consciousness, quantum computing, and revolutionary technology solutions. Join us in building the next generation of intelligent systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>300%+ Revenue Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  <span>$150M+ ARR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Market Leader</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Company Performance
              </h2>
              <p className="text-xl text-gray-400">
                Exceptional growth and market leadership metrics
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg text-gray-400 mb-3">
                    {metric.metric}
                  </div>
                  <div className={`text-sm font-medium mb-3 ${
                    metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Investment Highlights
              </h2>
              <p className="text-xl text-gray-400">
                Why Zion Tech Group represents an exceptional investment opportunity
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {investmentHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Performance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Financial Performance
              </h2>
              <p className="text-xl text-gray-400">
                Consistent exponential growth and strong financial fundamentals
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {financialHighlights.map((year, index) => (
                <motion.div
                  key={year.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      {year.year}
                    </div>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {year.revenue}
                    </div>
                    <div className="text-green-400 font-medium">
                      {year.growth} Growth
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                      {year.customers} Customers
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {year.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Investment Opportunities
              </h2>
              <p className="text-xl text-gray-400">
                Current and upcoming investment opportunities
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {investmentOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {opportunity.type}
                    </h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {opportunity.amount}
                    </div>
                    <div className="text-green-400 font-medium mb-2">
                      {opportunity.status}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Timeline: {opportunity.timeline}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use of Funds:</h4>
                    <p className="text-gray-300">
                      {opportunity.use}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Competitive Advantages
              </h2>
              <p className="text-xl text-gray-400">
                Sustainable competitive moats and market positioning
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-300">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Invest in the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in revolutionizing technology and achieving exceptional returns. Contact our investor relations team to learn more about investment opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Investor Relations
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}