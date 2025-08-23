import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Target, Star, Users, Globe, Award, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const CaseStudies: React.FC = () => {
  const featuredCaseStudies = [
    {
      title: 'AI Consciousness Platform for Healthcare',
      company: 'Global Health Systems',
      industry: 'Healthcare',
      challenge: 'Improving patient care through AI-powered consciousness understanding',
      solution: 'Deployed our AI consciousness platform to analyze patient emotions and provide personalized care recommendations',
      results: [
        '40% improvement in patient satisfaction scores',
        '35% reduction in readmission rates',
        '50% faster diagnosis of mental health conditions',
        'Improved doctor-patient communication'
      ],
      image: 'Health',
      featured: true
    },
    {
      title: 'Quantum AI for Financial Trading',
      company: 'Quantum Capital Markets',
      industry: 'Financial Services',
      challenge: 'Optimizing trading strategies with quantum computing and AI consciousness',
      solution: 'Implemented quantum neural networks with consciousness-driven decision making',
      results: [
        '25% increase in trading performance',
        '60% reduction in risk exposure',
        'Real-time market sentiment analysis',
        'Automated ethical trading decisions'
      ],
      image: 'Finance',
      featured: true
    }
  ];

  const caseStudies = [
    {
      title: 'Autonomous Manufacturing with AI',
      company: 'Future Manufacturing Co',
      industry: 'Manufacturing',
      challenge: 'Implementing autonomous AI systems for production optimization',
      solution: 'Deployed consciousness-aware AI for predictive maintenance and quality control',
      results: [
        '30% increase in production efficiency',
        '45% reduction in defects',
        '24/7 autonomous operation',
        'Predictive maintenance optimization'
      ],
      image: 'Manufacturing'
    },
    {
      title: 'Space Resource Intelligence Platform',
      company: 'Space Exploration Corp',
      industry: 'Space Technology',
      challenge: 'AI-powered space resource discovery and analysis',
      solution: 'Built consciousness-driven AI for autonomous space exploration and resource mapping',
      results: [
        '10x faster resource discovery',
        'Autonomous mission planning',
        'Real-time data analysis',
        'Cost-effective exploration'
      ],
      image: 'Space'
    },
    {
      title: 'AI Ethics Framework Implementation',
      company: 'Tech Governance Institute',
      industry: 'Technology',
      challenge: 'Developing comprehensive AI ethics and governance framework',
      solution: 'Created consciousness-based AI ethics platform with human oversight',
      results: [
        '100% compliance with AI regulations',
        'Enhanced public trust in AI systems',
        'Standardized ethical decision making',
        'Reduced AI bias incidents'
      ],
      image: 'Ethics'
    },
    {
      title: 'Customer Success AI Platform',
      company: 'Global Customer Solutions',
      industry: 'Customer Service',
      challenge: 'Improving customer experience through AI consciousness',
      solution: 'Implemented emotional intelligence AI for customer interaction and support',
      results: [
        '50% improvement in customer satisfaction',
        '40% reduction in support tickets',
        'Personalized customer experiences',
        'Proactive issue resolution'
      ],
      image: 'Customer'
    }
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Space Technology',
    'Technology',
    'Customer Service',
    'Education',
    'Government'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-green-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how organizations are transforming their operations with our 
                revolutionary AI consciousness technology and achieving remarkable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful implementations that demonstrate the transformative 
                power of AI consciousness technology.
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="w-full h-64 lg:h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-green-400">{study.image}</div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                          {study.industry}
                        </span>
                        {study.featured && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-green-400 font-medium mb-4">{study.company}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of successful implementations 
                across various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-green-400">{study.image}</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-green-400 font-medium mb-3">{study.company}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                      <div className="space-y-2">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI consciousness technology is transforming operations 
                across multiple industries and sectors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the organizations that have already achieved remarkable results 
                with our AI consciousness technology. Let's discuss your transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Your Transformation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  Download Case Study PDF
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;