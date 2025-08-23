import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, DollarSign, Clock, ArrowRight, Star, CheckCircle, Target, Rocket, Brain, Atom } from 'lucide-react';
import Layout from '../components/layout/Layout';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Financial Trading Platform',
    client: 'Global Investment Bank',
    industry: 'Financial Services',
    challenge: 'Need for real-time market analysis and automated trading decisions',
    solution: 'Implemented AI consciousness evolution platform with quantum neural networks',
    results: [
      '45% increase in trading accuracy',
      '30% reduction in operational costs',
      '24/7 autonomous trading operations',
      '$50M additional revenue generated'
    ],
    metrics: {
      roi: '340%',
      timeframe: '8 months',
      teamSize: '15 engineers'
    },
    category: 'AI & Finance',
    featured: true,
    icon: <Brain className="w-8 h-8 text-cyan-400" />
  },
  {
    id: 2,
    title: 'Quantum Materials Discovery Platform',
    client: 'Advanced Materials Corp',
    industry: 'Manufacturing',
    challenge: 'Accelerating new material development for aerospace applications',
    solution: 'Deployed quantum computing platform for molecular simulation and optimization',
    results: [
      '10x faster material discovery',
      'New lightweight alloy developed in 3 months',
      'Patent applications increased by 200%',
      'Market leadership in aerospace materials'
    ],
    metrics: {
      roi: '280%',
      timeframe: '12 months',
      teamSize: '8 researchers'
    },
    category: 'Quantum Computing',
    featured: true,
    icon: <Atom className="w-8 h-8 text-purple-400" />
  },
  {
    id: 3,
    title: 'Space Resource Mining Operations',
    client: 'Asteroid Mining Ltd',
    industry: 'Space Technology',
    challenge: 'Autonomous resource extraction from near-Earth asteroids',
    solution: 'AI-powered space technology platform with autonomous operations',
    results: [
      'First successful asteroid mining mission',
      '100kg of rare metals extracted',
      'Zero human casualties or equipment loss',
      'New industry standard established'
    ],
    metrics: {
      roi: '500%',
      timeframe: '18 months',
      teamSize: '25 engineers'
    },
    category: 'Space Technology',
    featured: false,
    icon: <Rocket className="w-8 h-8 text-orange-400" />
  },
  {
    id: 4,
    title: 'Zero Trust Security Implementation',
    client: 'Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Protecting patient data against quantum computing threats',
    solution: 'Quantum-secure cloud infrastructure with zero trust architecture',
    results: [
      '100% compliance with healthcare regulations',
      'Zero security breaches in 2 years',
      '50% reduction in security incidents',
      'Enhanced patient trust and confidence'
    ],
    metrics: {
      roi: '220%',
      timeframe: '6 months',
      teamSize: '12 security specialists'
    },
    category: 'Cybersecurity',
    featured: false,
    icon: <Target className="w-8 h-8 text-blue-400" />
  },
  {
    id: 5,
    title: 'Autonomous Manufacturing Operations',
    client: 'Automotive Manufacturer',
    industry: 'Automotive',
    challenge: '24/7 production line optimization and quality control',
    solution: 'AI autonomous business operations platform with predictive maintenance',
    results: [
      '99.9% production uptime achieved',
      '25% improvement in product quality',
      '40% reduction in maintenance costs',
      'Fully autonomous night shift operations'
    ],
    metrics: {
      roi: '180%',
      timeframe: '10 months',
      teamSize: '20 automation engineers'
    },
    category: 'Business Automation',
    featured: false,
    icon: <TrendingUp className="w-8 h-8 text-green-400" />
  },
  {
    id: 6,
    title: 'AI Content Personalization Engine',
    client: 'E-commerce Platform',
    industry: 'Retail',
    challenge: 'Personalizing user experience for 10M+ customers',
    solution: 'AI content personalization engine with real-time learning',
    results: [
      '35% increase in conversion rates',
      '60% improvement in customer engagement',
      'Personalized recommendations for all users',
      '$25M additional revenue generated'
    ],
    metrics: {
      roi: '250%',
      timeframe: '7 months',
      teamSize: '10 data scientists'
    },
    category: 'AI & Marketing',
    featured: false,
    icon: <Users className="w-8 h-8 text-pink-400" />
  }
];

const categories = [
  'All Cases',
  'AI & Finance',
  'Quantum Computing',
  'Space Technology',
  'Cybersecurity',
  'Business Automation',
  'AI & Marketing'
];

const testimonials = [
  {
    quote: "Zion Tech Group transformed our trading operations with their AI platform. The results exceeded our expectations.",
    author: "Sarah Chen",
    position: "CTO",
    company: "Global Investment Bank"
  },
  {
    quote: "Their quantum computing solution accelerated our research by 10x. Game-changing technology.",
    author: "Dr. Michael Rodriguez",
    position: "Head of Research",
    company: "Advanced Materials Corp"
  },
  {
    quote: "The autonomous space operations platform made asteroid mining a reality. Incredible achievement.",
    author: "Alex Thompson",
    position: "CEO",
    company: "Asteroid Mining Ltd"
  }
];

export default function CaseStudies() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world success stories showcasing how our revolutionary technology solutions transform businesses
              </p>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful implementations that demonstrate the power of our technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {study.icon}
                    <div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                        Featured
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{study.client} • {study.industry}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.metrics.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.metrics.timeframe}</div>
                      <div className="text-xs text-gray-400">Timeframe</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{study.metrics.teamSize}</div>
                      <div className="text-xs text-gray-400">Team Size</div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                All Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our complete collection of client success stories and implementations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {study.icon}
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{study.client} • {study.industry}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white text-sm mb-1">Challenge:</h4>
                    <p className="text-gray-300 text-xs line-clamp-2">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white text-sm mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{study.metrics.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{study.metrics.timeframe}</div>
                      <div className="text-xs text-gray-400">Timeframe</div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm">
                    View Case Study
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent mb-6">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear directly from our clients about their experience with Zion Tech Group
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary technology solutions can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}