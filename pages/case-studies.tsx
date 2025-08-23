import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, Users, Zap, Star, ArrowRight, 
  CheckCircle, TrendingUp, Globe, Building,
  Clock, DollarSign, Target
} from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Customer Success Platform',
    company: 'TechCorp Solutions',
    industry: 'SaaS',
    description: 'Implemented an AI-driven customer success platform that increased customer retention by 40% and reduced churn by 60%.',
    results: [
      '40% increase in customer retention',
      '60% reduction in customer churn',
      '35% improvement in customer satisfaction scores',
      '50% reduction in support ticket volume'
    ],
    technologies: ['AI Consciousness Platform', 'Machine Learning', 'Predictive Analytics'],
    duration: '6 months',
    roi: '300%',
    featured: true,
    href: '/case-studies/ai-customer-success-platform'
  },
  {
    title: 'Quantum Financial Trading System',
    company: 'Global Finance Group',
    industry: 'Financial Services',
    description: 'Deployed quantum computing algorithms for high-frequency trading, achieving 25% better performance than traditional systems.',
    results: [
      '25% improvement in trading performance',
      '15% reduction in transaction costs',
      '30% faster market analysis',
      '20% increase in profitable trades'
    ],
    technologies: ['Quantum Computing', 'Financial Algorithms', 'Real-time Processing'],
    duration: '12 months',
    roi: '450%',
    featured: true,
    href: '/case-studies/quantum-financial-trading'
  },
  {
    title: 'Autonomous IT Operations Center',
    company: 'Enterprise Solutions Inc.',
    industry: 'Technology',
    description: 'Built a fully autonomous IT operations center that reduced downtime by 80% and operational costs by 45%.',
    results: [
      '80% reduction in system downtime',
      '45% decrease in operational costs',
      '90% automation of routine tasks',
      '70% faster incident response'
    ],
    technologies: ['AI Autonomous Systems', 'IT Infrastructure', 'Machine Learning'],
    duration: '8 months',
    roi: '280%',
    featured: false,
    href: '/case-studies/autonomous-it-operations'
  },
  {
    title: 'Space Resource Mining Platform',
    company: 'Asteroid Mining Corp',
    industry: 'Space Technology',
    description: 'Developed an AI-powered platform for asteroid resource identification and mining operations planning.',
    results: [
      '60% improvement in resource identification accuracy',
      '40% reduction in exploration costs',
      '50% faster mission planning',
      '30% increase in resource yield'
    ],
    technologies: ['AI Space Technology', 'Remote Sensing', 'Autonomous Systems'],
    duration: '18 months',
    roi: '520%',
    featured: false,
    href: '/case-studies/space-resource-mining'
  },
  {
    title: 'Quantum Neural Network Research',
    company: 'Advanced Research Institute',
    industry: 'Research & Development',
    description: 'Implemented quantum neural networks for drug discovery, accelerating research by 10x and reducing costs by 70%.',
    results: [
      '10x acceleration in drug discovery',
      '70% reduction in research costs',
      '85% improvement in prediction accuracy',
      '50% faster clinical trial preparation'
    ],
    technologies: ['Quantum Neural Networks', 'Bioinformatics', 'AI Research'],
    duration: '24 months',
    roi: '600%',
    featured: false,
    href: '/case-studies/quantum-neural-networks'
  },
  {
    title: 'AI Content Personalization Engine',
    company: 'MediaCorp Entertainment',
    industry: 'Entertainment',
    description: 'Created an AI-powered content personalization system that increased user engagement by 65% and subscription retention by 45%.',
    results: [
      '65% increase in user engagement',
      '45% improvement in subscription retention',
      '55% reduction in content production costs',
      '40% increase in advertising revenue'
    ],
    technologies: ['AI Content Engine', 'Machine Learning', 'Personalization'],
    duration: '10 months',
    roi: '320%',
    featured: false,
    href: '/case-studies/ai-content-personalization'
  }
];

const industries = [
  'All Industries',
  'SaaS',
  'Financial Services',
  'Technology',
  'Space Technology',
  'Research & Development',
  'Entertainment',
  'Healthcare',
  'Manufacturing',
  'Retail'
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real-world success stories showcasing how our revolutionary AI, quantum, and space technology solutions transform businesses
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Filter by Industry</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.button
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  industry === 'All Industries'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border border-gray-700 hover:border-green-500/50'
                }`}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Highlighted case studies demonstrating exceptional results and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                <p className="text-gray-400 mb-4">{caseStudy.company} • {caseStudy.industry}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{caseStudy.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <DollarSign className="w-4 h-4" />
                    <span>{caseStudy.roi} ROI</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                  <div className="space-y-2">
                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={caseStudy.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive collection of success stories across all industries and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded-full">
                    {caseStudy.industry}
                  </span>
                  {caseStudy.featured && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{caseStudy.company}</p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{caseStudy.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-400 font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{caseStudy.roi} ROI</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                  <div className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={caseStudy.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Success Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results across all our technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '300%', label: 'Average ROI', icon: <TrendingUp className="w-8 h-8" /> },
              { metric: '80%', label: 'Cost Reduction', icon: <DollarSign className="w-8 h-8" /> },
              { metric: '60%', label: 'Performance Improvement', icon: <Zap className="w-8 h-8" /> },
              { metric: '95%', label: 'Customer Satisfaction', icon: <Star className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the ranks of successful companies that have transformed their business with our revolutionary technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}