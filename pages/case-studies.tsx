import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Award, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, BarChart3
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudyCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Success stories in artificial intelligence and automation',
      count: '15+ case studies',
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Breakthrough implementations in quantum technology',
      count: '8+ case studies',
      icon: <Atom className="w-8 h-8" />
    },
    {
      id: 'space-technology',
      name: 'Space Technology',
      description: 'Innovative space exploration and resource solutions',
      count: '6+ case studies',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security transformation and threat prevention',
      count: '12+ case studies',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'enterprise-it',
      name: 'Enterprise IT',
      description: 'Large-scale IT infrastructure transformations',
      count: '20+ case studies',
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      description: 'Cutting-edge technology implementations',
      count: '18+ case studies',
      icon: <Lightbulb className="w-8 h-8" />
    }
  ];

  const featuredCaseStudies = [
    {
      id: 'ai-consciousness-evolution',
      title: 'AI Consciousness Evolution Platform',
      client: 'Global Tech Corporation',
      industry: 'Technology',
      challenge: 'Developed an AI system with emotional intelligence and consciousness capabilities for customer service',
      solution: 'Implemented advanced neural networks with consciousness simulation and ethical AI framework',
      results: [
        '40% improvement in customer satisfaction',
        '60% reduction in customer service escalations',
        '$2.5M annual cost savings',
        'Industry recognition and awards'
      ],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'quantum-financial-trading',
      title: 'Quantum Financial Trading Platform',
      client: 'Quantum Capital Markets',
      industry: 'Financial Services',
      challenge: 'Created a quantum-powered algorithmic trading system for complex market analysis',
      solution: 'Developed quantum neural networks with real-time market prediction and risk assessment',
      results: [
        '25% increase in trading performance',
        '90% faster market analysis',
        '$15M additional revenue',
        'Patent-pending technology'
      ],
      image: '/api/placeholder/400/250'
    },
    {
      id: 'space-resource-mining',
      title: 'Space Resource Mining Operations',
      client: 'Asteroid Mining Corp',
      industry: 'Space & Resources',
      challenge: 'Established autonomous mining operations for extraterrestrial resource extraction',
      solution: 'Implemented AI-powered autonomous systems with advanced robotics and resource processing',
      results: [
        'First successful asteroid mining operation',
        '100% autonomous operation capability',
        '$50M resource value extracted',
        'Revolutionary space technology'
      ],
      image: '/api/placeholder/400/250'
    }
  ];

  const recentCaseStudies = [
    {
      id: 'cybersecurity-transformation',
      title: 'Zero Trust Security Implementation',
      client: 'Fortune 500 Bank',
      industry: 'Financial Services',
      challenge: 'Modernize security infrastructure with zero trust architecture',
      solution: 'Implemented comprehensive zero trust framework with AI-powered threat detection',
      results: ['99.9% threat prevention rate', 'Zero security breaches', '50% reduction in security costs']
    },
    {
      id: 'cloud-migration',
      title: 'Multi-Cloud Migration Strategy',
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'Migrate legacy systems to multi-cloud infrastructure',
      solution: 'Designed and executed comprehensive cloud migration with automation',
      results: ['60% infrastructure cost reduction', '99.9% uptime achieved', '3x faster deployment']
    },
    {
      id: 'ai-automation',
      title: 'AI-Powered Process Automation',
      client: 'Manufacturing Giant',
      industry: 'Manufacturing',
      challenge: 'Automate complex manufacturing processes with AI',
      solution: 'Implemented intelligent automation with predictive maintenance and quality control',
      results: ['80% process automation', '30% productivity increase', '25% defect reduction']
    },
    {
      id: 'quantum-optimization',
      title: 'Quantum Supply Chain Optimization',
      client: 'Global Logistics Company',
      industry: 'Logistics',
      challenge: 'Optimize complex supply chain networks using quantum computing',
      solution: 'Developed quantum algorithms for route optimization and resource allocation',
      results: ['35% cost reduction', '50% faster delivery times', '20% carbon footprint reduction']
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementations of our technology solutions across various industries."
        keywords="case studies, success stories, AI implementation, quantum computing, space technology, cybersecurity, enterprise IT"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Explore real-world success stories and implementations of our technology solutions across various industries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#featured" 
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Case Studies
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-lg hover:bg-violet-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Categories */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Case Study Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore success stories across different technology domains
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudyCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-violet-500 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-violet-500/20 rounded-full mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="text-violet-400 font-semibold">{category.count}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section id="featured" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful and innovative implementations
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {featuredCaseStudies.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-violet-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="aspect-video bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                      <Award className="w-16 h-16 text-violet-400" />
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-violet-400 font-semibold">{caseStudy.industry}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{caseStudy.client}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {caseStudy.title}
                      </h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-violet-400 mb-1">Challenge</h4>
                          <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-violet-400 mb-1">Solution</h4>
                          <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-violet-400 mb-2">Results</h4>
                        <ul className="space-y-1">
                          {caseStudy.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Case Studies */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Recent Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest implementations and success stories
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentCaseStudies.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-violet-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-violet-400 font-semibold">{caseStudy.industry}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-gray-400">{caseStudy.client}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {caseStudy.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-violet-400 mb-1">Challenge</h4>
                      <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-violet-400 mb-1">Solution</h4>
                      <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-violet-400 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let us help you implement innovative technology solutions that drive real business results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-lg hover:bg-violet-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CaseStudiesPage;