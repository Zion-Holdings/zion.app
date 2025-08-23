import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Award, Zap, Shield, Brain, Rocket, Globe, 
  ArrowRight, Star, Users, TrendingUp, CheckCircle,
  Clock, DollarSign, Target, Lightbulb
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Revolution',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Complex medical diagnosis with 95% accuracy requirements',
      solution: 'Implemented our AI Consciousness Platform with custom medical training models',
      results: [
        '99.2% diagnosis accuracy achieved',
        '40% reduction in diagnosis time',
        '$2.3M annual cost savings',
        'Enhanced patient outcomes'
      ],
      technologies: ['AI Consciousness Platform', 'Machine Learning', 'Medical Imaging AI'],
      duration: '8 months',
      investment: '$850K',
      roi: '270%',
      image: '/api/placeholder/600/400',
      category: 'AI & Machine Learning'
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Network',
      company: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Secure cross-border transactions with quantum-resistant encryption',
      solution: 'Deployed our Quantum Cybersecurity Suite across 12 countries',
      results: [
        'Zero security breaches in 18 months',
        '60% faster transaction processing',
        'Compliance with all international regulations',
        '$5.1M in prevented fraud'
      ],
      technologies: ['Quantum Cybersecurity Suite', 'Blockchain Integration', 'Advanced Encryption'],
      duration: '12 months',
      investment: '$1.2M',
      roi: '425%',
      image: '/api/placeholder/600/400',
      category: 'Cybersecurity'
    },
    {
      id: 3,
      title: 'Space Data Analytics Platform',
      company: 'Satellite Solutions Inc',
      industry: 'Aerospace',
      challenge: 'Real-time processing of satellite data for climate monitoring',
      solution: 'Built custom space data analytics platform with edge computing',
      results: [
        'Real-time data processing achieved',
        '85% improvement in prediction accuracy',
        'Reduced infrastructure costs by 30%',
        'Enhanced climate modeling capabilities'
      ],
      technologies: ['Space Data Analytics', 'Edge Computing', 'Real-time Processing'],
      duration: '10 months',
      teamSize: '10 data scientists + 5 engineers',
      featured: false
    },
    {
      id: 'retail-automation-revolution',
      title: 'Retail Automation Revolution',
      company: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'High operational costs, inventory management inefficiencies, and poor customer experience',
      solution: 'Implemented comprehensive retail automation including smart inventory, automated checkout, and AI-powered customer insights',
      results: [
        '45% reduction in operational costs',
        '70% improvement in inventory accuracy',
        '60% faster checkout process',
        '35% increase in customer satisfaction'
      ],
      technologies: ['Computer Vision', 'IoT Sensors', 'Machine Learning', 'Robotic Process Automation'],
      duration: '12 months',
      teamSize: '12 engineers + 6 retail specialists',
      featured: true
    },
    {
      id: 'energy-grid-optimization',
      title: 'Smart Energy Grid Optimization',
      company: 'Municipal Energy Company',
      industry: 'Energy',
      challenge: 'Inefficient energy distribution, high maintenance costs, and inability to handle renewable energy integration',
      solution: 'Built AI-powered smart grid system with predictive maintenance and dynamic load balancing',
      results: [
        '25% reduction in energy losses',
        '40% decrease in maintenance costs',
        '90% improvement in renewable energy integration',
        'Real-time grid monitoring and control'
      ],
      technologies: ['IoT Sensors', 'Predictive Analytics', 'Machine Learning', 'Real-time Control Systems'],
      duration: '18 months',
      teamSize: '15 engineers + 8 energy specialists',
      featured: false
    },
    {
      id: 'logistics-automation-platform',
      title: 'Intelligent Logistics Automation Platform',
      company: 'International Shipping Company',
      industry: 'Logistics',
      challenge: 'Complex supply chain management, high transportation costs, and delivery delays',
      solution: 'Developed AI-powered logistics platform with route optimization, demand forecasting, and automated scheduling',
      results: [
        '30% reduction in transportation costs',
        '50% improvement in delivery accuracy',
        '25% faster order processing',
        'Real-time shipment tracking and optimization'
      ],
      technologies: ['Route Optimization', 'Demand Forecasting', 'Machine Learning', 'Real-time Analytics'],
      duration: '14 months',
      teamSize: '9 engineers + 5 logistics specialists',
      featured: false
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover how leading organizations are transforming their operations 
                with Zion Tech Group's cutting-edge technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  View All Case Studies
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  Submit Your Story
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Success Metrics
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Proven results that speak for themselves
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-cyan-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">
                    {metric.label}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real-world examples of our technology in action
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full">
                          {study.category}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {study.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                          The Challenge
                        </h4>
                        <p className="text-gray-300">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                          Our Solution
                        </h4>
                        <p className="text-gray-300">
                          {study.solution}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white ml-2">{study.duration}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Investment:</span>
                          <span className="text-white ml-2">${study.investment}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">ROI:</span>
                          <span className="text-green-400 ml-2">{study.roi}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Company:</span>
                          <span className="text-white ml-2">{study.company}</span>
                        </div>
                      </div>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                        Read Full Case Study
                      </button>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Building className="w-12 h-12 text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Technologies Used
                        </h4>
                        <div className="space-y-2">
                          {study.technologies.map((tech, techIndex) => (
                            <div key={techIndex} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Find case studies relevant to your industry and technology needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudyCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">
                      {category.count} case studies
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Direct feedback from the organizations we've helped transform
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
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technologies can transform your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Your Project
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
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
};

export default CaseStudies;