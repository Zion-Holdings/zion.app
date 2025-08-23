import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Brain, Shield, Rocket, Zap, ArrowRight, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'AI-Powered Healthcare Diagnosis Platform',
      client: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Reduce diagnostic errors and improve patient outcomes through intelligent AI assistance.',
      solution: 'Developed a comprehensive AI platform that analyzes medical imaging, patient data, and clinical notes to provide accurate diagnostic recommendations.',
      results: [
        '40% reduction in diagnostic errors',
        '60% faster diagnosis turnaround time',
        'Improved patient satisfaction scores by 35%',
        'ROI of 300% within 18 months'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Cloud Infrastructure'],
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Quantum-Secure Financial Trading System',
      client: 'Global Investment Bank',
      industry: 'Finance',
      challenge: 'Implement quantum-resistant encryption for high-frequency trading while maintaining performance.',
      solution: 'Built a quantum-safe trading platform using post-quantum cryptography and AI-powered threat detection.',
      results: [
        'Zero security breaches in 2+ years',
        '99.99% system uptime',
        '50% reduction in trading latency',
        'Compliance with all regulatory requirements'
      ],
      technologies: ['Quantum Cryptography', 'AI Security', 'High-Performance Computing', 'Blockchain'],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Autonomous Space Resource Mining Platform',
      client: 'Space Exploration Company',
      industry: 'Space Technology',
      challenge: 'Create an autonomous system for mining resources from asteroids and lunar surfaces.',
      solution: 'Developed an AI-powered autonomous mining platform with robotic systems, computer vision, and predictive analytics.',
      results: [
        'Successfully extracted resources from 3 asteroid missions',
        '90% automation rate achieved',
        'Reduced mission costs by 70%',
        'Pioneered new space mining techniques'
      ],
      technologies: ['AI Robotics', 'Computer Vision', 'Predictive Analytics', 'Space Systems'],
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Enterprise AI Automation Suite',
      client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Automate complex manufacturing processes and improve operational efficiency.',
      solution: 'Implemented a comprehensive AI automation suite covering production planning, quality control, and predictive maintenance.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in operational costs',
        '99.5% quality control accuracy',
        'Predictive maintenance reduced downtime by 40%'
      ],
      technologies: ['Machine Learning', 'IoT Integration', 'Predictive Analytics', 'Process Automation'],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Zero-Trust Cybersecurity Implementation',
      client: 'Government Agency',
      industry: 'Government',
      challenge: 'Implement comprehensive zero-trust security architecture for sensitive government systems.',
      solution: 'Designed and deployed a zero-trust security framework with AI-powered threat detection and automated response systems.',
      results: [
        '100% compliance with security standards',
        'Real-time threat detection and response',
        'Zero successful cyber attacks',
        'Reduced security incident response time by 80%'
      ],
      technologies: ['Zero Trust Architecture', 'AI Security', 'Identity Management', 'Threat Intelligence'],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'AI-Powered Customer Service Platform',
      client: 'E-commerce Giant',
      industry: 'Retail',
      challenge: 'Scale customer service operations while maintaining high customer satisfaction.',
      solution: 'Built an intelligent customer service platform with natural language processing and automated problem resolution.',
      results: [
        '80% of customer inquiries resolved automatically',
        'Customer satisfaction increased by 45%',
        'Reduced support costs by 60%',
        '24/7 customer service availability'
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'Chatbots', 'Sentiment Analysis'],
      icon: <Brain className="w-8 h-8" />
    }
  ];

  const industries = [
    { name: 'Healthcare', count: 1, icon: <Brain className="w-4 h-4" /> },
    { name: 'Finance', count: 1, icon: <Shield className="w-4 h-4" /> },
    { name: 'Space Technology', count: 1, icon: <Rocket className="w-4 h-4" /> },
    { name: 'Manufacturing', count: 1, icon: <Zap className="w-4 h-4" /> },
    { name: 'Government', count: 1, icon: <Shield className="w-4 h-4" /> },
    { name: 'Retail', count: 1, icon: <Brain className="w-4 h-4" /> }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world success stories showcasing how Zion Tech Group transforms businesses 
                through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">$2B+</div>
                <div className="text-gray-300">Value Delivered</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-gray-300">Transforming businesses across diverse sectors</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 text-center cursor-pointer"
                >
                  <div className="flex items-center justify-center mb-2 text-cyan-400">
                    {industry.icon}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{industry.name}</div>
                  <div className="text-xs text-gray-400">{industry.count} case study</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-xl text-gray-300">Discover how we've transformed businesses with innovative solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-cyan-400">
                        {study.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {study.client}
                          </span>
                          <span className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            {study.industry}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <Star className="w-3 h-3 text-cyan-400" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real feedback from satisfied customers</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="p-6 rounded-lg bg-gray-800/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Zion Tech Group transformed our healthcare operations with their AI platform. 
                  The results exceeded our expectations, and the team was incredibly professional throughout."
                </p>
                <div className="text-sm text-gray-400">
                  <div className="font-semibold text-white">Dr. Sarah Johnson</div>
                  <div>Chief Medical Officer, Healthcare Network</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="p-6 rounded-lg bg-gray-800/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "The quantum-secure trading system they built for us is revolutionary. 
                  We've seen significant improvements in both security and performance."
                </p>
                <div className="text-sm text-gray-400">
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div>CTO, Global Investment Bank</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}