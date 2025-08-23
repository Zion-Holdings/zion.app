import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Target, 
  ArrowRight,
  Star,
  CheckCircle,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Globe,
  Zap
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Global Bank AI Transformation',
      client: 'Fortune 500 Financial Institution',
      industry: 'Banking & Finance',
      challenge: 'Legacy systems struggling with fraud detection and customer service demands',
      solution: 'Implemented AI-powered fraud detection system and intelligent customer service platform',
      results: [
        '99.7% fraud detection accuracy',
        '40% reduction in false positives',
        '60% improvement in customer satisfaction',
        '$50M annual cost savings'
      ],
      technologies: ['AI/ML', 'Machine Learning', 'Natural Language Processing'],
      duration: '18 months',
      teamSize: '25 engineers',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum-Safe Cybersecurity Platform',
      client: 'Government Defense Agency',
      industry: 'Government & Defense',
      challenge: 'Need for quantum-resistant encryption to protect classified communications',
      solution: 'Developed quantum-safe cryptographic platform with post-quantum algorithms',
      results: [
        'Quantum-resistant encryption implemented',
        'Zero security breaches in 2+ years',
        '99.99% uptime achieved',
        'Compliance with all security standards'
      ],
      technologies: ['Quantum Computing', 'Cryptography', 'Post-Quantum Algorithms'],
      duration: '24 months',
      teamSize: '30 engineers',
      featured: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform',
      client: 'Space Mining Corporation',
      industry: 'Space Technology',
      challenge: 'Inefficient satellite data analysis for resource identification',
      solution: 'AI-powered satellite data processing platform for space resource detection',
      results: [
        '85% improvement in resource detection accuracy',
        '70% faster data processing',
        '$200M in new resource discoveries',
        'Reduced satellite operation costs by 40%'
      ],
      technologies: ['AI/ML', 'Satellite Technology', 'Data Analytics', 'Computer Vision'],
      duration: '16 months',
      teamSize: '20 engineers',
      featured: false,
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Multi-Cloud Infrastructure Management',
      client: 'E-commerce Giant',
      industry: 'Retail & E-commerce',
      challenge: 'Complex multi-cloud environment causing performance issues and high costs',
      solution: 'Intelligent cloud orchestration platform with automated optimization',
      results: [
        '35% reduction in cloud costs',
        '50% improvement in application performance',
        '99.9% uptime across all regions',
        'Automated scaling reduced manual work by 80%'
      ],
      technologies: ['Cloud Computing', 'Multi-Cloud', 'DevOps', 'Automation'],
      duration: '12 months',
      teamSize: '18 engineers',
      featured: false,
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'AI-Powered Manufacturing Optimization',
      client: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-driven predictive maintenance and quality control system',
      results: [
        '25% increase in production efficiency',
        '90% reduction in quality defects',
        '30% decrease in maintenance costs',
        'Real-time quality monitoring achieved'
      ],
      technologies: ['AI/ML', 'IoT', 'Predictive Analytics', 'Computer Vision'],
      duration: '14 months',
      teamSize: '22 engineers',
      featured: false,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Healthcare AI Diagnostic Platform',
      client: 'Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Slow and inaccurate diagnostic processes affecting patient care',
      solution: 'AI-powered medical imaging analysis and diagnostic support system',
      results: [
        '95% diagnostic accuracy rate',
        '60% faster diagnosis time',
        'Improved patient outcomes by 40%',
        'Reduced radiologist workload by 30%'
      ],
      technologies: ['AI/ML', 'Medical Imaging', 'Computer Vision', 'Healthcare AI'],
      duration: '20 months',
      teamSize: '28 engineers',
      featured: false,
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      image: '/api/placeholder/600/400'
    }
  ];

  const industries = [
    'All Industries',
    'Banking & Finance',
    'Government & Defense',
    'Space Technology',
    'Retail & E-commerce',
    'Manufacturing',
    'Healthcare'
  ];

  const technologies = [
    'AI/ML',
    'Quantum Computing',
    'Space Technology',
    'Cybersecurity',
    'Cloud Computing',
    'IoT',
    'Healthcare AI'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world transformations powered by Zion Tech Group's cutting-edge technology solutions. 
                See how we've helped organizations achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Clients Worldwide</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">$2B+</div>
                <div className="text-gray-400">Value Delivered</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-400">Projects Completed</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Featured Success Stories</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our most impactful transformations that showcase the power of innovative technology
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${study.color} rounded-lg`}>
                          <study.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <p className="text-gray-300 mb-4">
                          <span className="font-semibold text-white">Client:</span> {study.client}
                        </p>
                        <p className="text-gray-300 mb-4">
                          <span className="font-semibold text-white">Challenge:</span> {study.challenge}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">Solution:</span> {study.solution}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                        <div className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>Duration: {study.duration}</span>
                        <span>Team: {study.teamSize}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center p-8">
                      <div className="text-center">
                        <Star className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-400 font-medium">Featured Case Study</p>
                        <p className="text-sm text-gray-500">Industry Leader</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">More Success Stories</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore additional case studies across various industries and technologies
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${study.color} rounded-lg`}>
                        <study.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      <span className="font-semibold text-white">Client:</span> {study.client}
                    </p>
                    
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        <span>{study.duration}</span>
                      </div>
                      
                      <button className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Industries We Transform</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From finance to healthcare, we've delivered innovative solutions across diverse sectors
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industries.slice(1).map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    {industry}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Join the hundreds of organizations that have transformed their business with Zion Tech Group's 
                innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;