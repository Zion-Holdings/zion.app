import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Shield, Brain, Zap, ArrowRight, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'AI-Powered Healthcare Diagnostics',
      company: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Reducing diagnostic errors and improving patient outcomes',
      solution: 'Implemented AI-powered diagnostic platform with 95% accuracy',
      results: ['40% reduction in diagnostic errors', '30% faster diagnosis times', 'Improved patient satisfaction scores'],
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      featured: true
    },
    {
      title: 'Quantum Cybersecurity Implementation',
      company: 'Financial Services Corporation',
      industry: 'Finance',
      challenge: 'Protecting against quantum computing threats',
      solution: 'Deployed quantum-resistant encryption and security protocols',
      results: ['99.9% threat detection rate', 'Zero security breaches', 'Compliance with new regulations'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Manufacturing AI Optimization',
      company: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Improving production efficiency and reducing waste',
      solution: 'AI-powered predictive maintenance and quality control',
      results: ['25% increase in production efficiency', '15% reduction in waste', '50% fewer equipment failures'],
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Government Digital Transformation',
      company: 'State Government Agency',
      industry: 'Government',
      challenge: 'Modernizing legacy systems and improving citizen services',
      solution: 'Cloud-based digital transformation with AI integration',
      results: ['60% faster service delivery', 'Improved citizen satisfaction', 'Reduced operational costs'],
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Retail Technology Innovation',
      company: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Enhancing customer experience and increasing sales',
      solution: 'AI-powered personalization and inventory management',
      results: ['35% increase in customer engagement', '20% boost in sales', 'Optimized inventory levels'],
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Space Technology Platform',
      company: 'Aerospace Research Institute',
      industry: 'Aerospace',
      challenge: 'Developing advanced space exploration capabilities',
      solution: 'AI and quantum computing integration for space missions',
      results: ['Enhanced mission success rates', 'Improved data processing', 'Advanced navigation systems'],
      icon: <Star className="w-8 h-8 text-orange-400" />
    }
  ];

  const industries = ['Healthcare', 'Finance', 'Manufacturing', 'Government', 'Retail', 'Aerospace', 'Technology', 'Education'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Award className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing how our technology solutions transform businesses and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 text-lg">
                Start Your Success Story
              </Button>
              <Button href="/solutions" variant="outline" className="border-purple-500 text-purple-400 px-8 py-4 text-lg">
                View All Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our solutions have delivered measurable results across diverse industries and use cases
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {industries.map((industry, index) => (
              <motion.button
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full text-gray-300 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Success Story
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we transformed healthcare diagnostics with AI technology
            </p>
          </motion.div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-semibold">Featured Case Study</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  AI-Powered Healthcare Diagnostics
                </h3>
                <p className="text-gray-300 mb-6">
                  A major healthcare network achieved breakthrough results in diagnostic accuracy and patient outcomes through our AI-powered diagnostic platform.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-400">Reducing diagnostic errors and improving patient outcomes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-400">Implemented AI-powered diagnostic platform with 95% accuracy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        40% reduction in diagnostic errors
                      </li>
                      <li className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        30% faster diagnosis times
                      </li>
                      <li className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Improved patient satisfaction scores
                      </li>
                    </ul>
                  </div>
                </div>
                <Button href="/contact" className="mt-8 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  Start Your Success Story
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <Brain className="w-32 h-32 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive collection of case studies across different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {study.icon}
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm">{study.company}</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white text-sm">Challenge:</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our technology experts help you achieve similar results and transform your business
            </p>
            <Button href="/contact" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-10 py-4 text-lg">
              Start Your Transformation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}