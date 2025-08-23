import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  Star,
  CheckCircle,
  DollarSign,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Briefcase,
  Network,
  Gift,
  Headphones,
  FileText,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function Investors() {
  const investmentHighlights = [
    {
      metric: '$50M+',
      label: 'Revenue Run Rate',
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      growth: '+150% YoY'
    },
    {
      metric: '500+',
      label: 'Enterprise Clients',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      growth: '+200% YoY'
    },
    {
      metric: '99.9%',
      label: 'Customer Retention',
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      growth: 'Industry Leading'
    },
    {
      metric: '50+',
      label: 'Countries Served',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      growth: '+25% YoY'
    }
  ];

  const marketOpportunity = [
    {
      sector: 'AI & Machine Learning',
      marketSize: '$500B+',
      growth: '25% CAGR',
      description: 'Rapid adoption of AI across industries driving unprecedented growth'
    },
    {
      sector: 'Quantum Computing',
      marketSize: '$65B+',
      growth: '30% CAGR',
      description: 'Breakthrough quantum technologies creating new market opportunities'
    },
    {
      sector: 'Edge Computing',
      marketSize: '$200B+',
      growth: '20% CAGR',
      description: 'Growing demand for real-time processing and low-latency solutions'
    },
    {
      sector: 'Cybersecurity',
      marketSize: '$300B+',
      growth: '15% CAGR',
      description: 'Increasing security threats driving investment in advanced protection'
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'First-Mover Advantage',
      description: 'Pioneering AI consciousness and quantum-AI convergence technologies',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Proprietary Technology',
      description: 'Unique AI algorithms and quantum computing breakthroughs',
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Strong IP Portfolio',
      description: 'Extensive patents and trade secrets protecting our innovations',
      icon: <Shield className="w-8 h-8 text-emerald-400" />
    },
    {
      title: 'Global Talent Network',
      description: 'World-class team with expertise in cutting-edge technologies',
      icon: <Users className="w-8 h-8 text-blue-400" />
    }
  ];

  const financialMetrics = [
    {
      period: '2023',
      revenue: '$25M',
      growth: '120%',
      customers: '250',
      retention: '98%'
    },
    {
      period: '2024',
      revenue: '$45M',
      growth: '80%',
      customers: '400',
      retention: '99%'
    },
    {
      period: '2025 (Projected)',
      revenue: '$75M',
      growth: '67%',
      customers: '600',
      retention: '99.5%'
    }
  ];

  const investmentRounds = [
    {
      round: 'Series A',
      amount: '$10M',
      date: '2022',
      investors: 'Leading VCs and Angel Investors',
      use: 'Product development and team expansion'
    },
    {
      round: 'Series B',
      amount: '$25M',
      date: '2023',
      investors: 'Strategic investors and growth funds',
      use: 'Market expansion and R&D acceleration'
    },
    {
      round: 'Series C',
      amount: '$50M',
      date: '2024',
      investors: 'Institutional investors and strategic partners',
      use: 'Global expansion and quantum computing infrastructure'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Investor Relations
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Join us in building the future of AI, quantum computing, and emerging technologies. 
              Discover exceptional growth opportunities in the most innovative technology sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Contact Investor Relations
              </Link>
              <Link href="#financial-overview" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                View Financials
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Investment Highlights</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Exceptional growth metrics and market leadership position us for continued success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{highlight.metric}</div>
                <div className="text-white/70 mb-2">{highlight.label}</div>
                <div className="text-cyan-400 text-sm font-semibold">{highlight.growth}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Massive Market Opportunity</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Operating in the fastest-growing technology sectors with trillion-dollar market potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketOpportunity.map((opportunity, index) => (
              <motion.div
                key={opportunity.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{opportunity.sector}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{opportunity.marketSize}</div>
                    <div className="text-white/70 text-sm">Market Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">{opportunity.growth}</div>
                    <div className="text-white/70 text-sm">Growth Rate</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Competitive Advantages</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Unique positioning and proprietary technology create sustainable competitive moats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-white/70 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Overview */}
      <section id="financial-overview" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Financial Performance</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Consistent revenue growth and strong unit economics demonstrate our business model's strength.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-6 text-white font-semibold">Period</th>
                  <th className="py-4 px-6 text-white font-semibold">Revenue</th>
                  <th className="py-4 px-6 text-white font-semibold">Growth</th>
                  <th className="py-4 px-6 text-white font-semibold">Customers</th>
                  <th className="py-4 px-6 text-white font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody>
                {financialMetrics.map((metric, index) => (
                  <motion.tr
                    key={metric.period}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                  >
                    <td className="py-4 px-6 text-white font-medium">{metric.period}</td>
                    <td className="py-4 px-6 text-cyan-400 font-bold">{metric.revenue}</td>
                    <td className="py-4 px-6 text-green-400 font-semibold">{metric.growth}</td>
                    <td className="py-4 px-6 text-white">{metric.customers}</td>
                    <td className="py-4 px-6 text-emerald-400 font-semibold">{metric.retention}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Rounds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Investment History</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Strong investor confidence and strategic funding rounds fuel our growth trajectory.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentRounds.map((round, index) => (
              <motion.div
                key={round.round}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{round.round}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{round.amount}</div>
                  <div className="text-white/70 text-sm">{round.date}</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-white/70 text-sm mb-1">Investors</div>
                    <div className="text-white text-sm">{round.investors}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-sm mb-1">Use of Funds</div>
                    <div className="text-white text-sm">{round.use}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Invest in the Future?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Join our mission to revolutionize technology and create exceptional returns for our investors.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                <span className="text-white">Investor Package</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Schedule Investor Call
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}