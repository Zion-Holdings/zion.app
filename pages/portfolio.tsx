import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  Target, Star, Globe, Code, Server, Zap, Heart, Eye, Lightbulb,
  ChevronRight, ArrowRight, CheckCircle, Clock, TrendingUp, ExternalLink, Building
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioCategories = [
    { id: 'all', name: 'All Projects', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'enterprise', name: 'Enterprise', icon: Building, color: 'from-yellow-500 to-orange-500' }
  ];

  const portfolioProjects = [
    // AI & Machine Learning Projects
    {
      id: 'ai-autonomous-ecosystem',
      title: 'AI Autonomous Ecosystem Platform',
      category: 'ai',
      description: 'Revolutionary autonomous AI platform that manages and optimizes business operations independently',
      client: 'Fortune 500 Technology Company',
      duration: '8 months',
      team: '15 engineers',
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'AWS', 'React'],
      results: ['40% reduction in operational costs', '99.9% uptime achieved', 'Real-time decision making'],
      image: '/api/placeholder/600/400',
      featured: true,
      link: '#'
    },
    {
      id: 'quantum-ai-neural-networks',
      title: 'Quantum AI Neural Networks',
      category: 'ai',
      description: 'Quantum-powered AI system with advanced consciousness capabilities for research institutions',
      client: 'Leading Research University',
      duration: '12 months',
      team: '20 researchers',
      technologies: ['Qiskit', 'Python', 'Quantum Algorithms', 'CUDA', 'Docker'],
      results: ['1000x faster processing', 'Breakthrough in AI consciousness', 'Published in Nature'],
      image: '/api/placeholder/600/400',
      featured: true,
      link: '#'
    },
    {
      id: 'ai-powered-automation',
      title: 'Intelligent Business Automation',
      category: 'ai',
      description: 'AI-powered automation system that streamlines business processes across multiple departments',
      client: 'Global Manufacturing Company',
      duration: '6 months',
      team: '8 engineers',
      technologies: ['Python', 'OpenAI API', 'PostgreSQL', 'Node.js', 'Vue.js'],
      results: ['60% process efficiency improvement', '24/7 automated operations', '$2M annual savings'],
      image: '/api/placeholder/600/400',
      featured: false,
      link: '#'
    },

    // Quantum Computing Projects
    {
      id: 'quantum-cryptography',
      title: 'Quantum-Resistant Cryptography',
      category: 'quantum',
      description: 'Post-quantum cryptography solution for securing communications in the quantum era',
      client: 'Government Defense Agency',
      duration: '18 months',
      team: '25 security experts',
      technologies: ['C++', 'Quantum Algorithms', 'Cryptography', 'Linux', 'Hardware Security'],
      results: ['Quantum-resistant encryption', 'Military-grade security', 'Future-proof solution'],
      image: '/api/placeholder/600/400',
      featured: true,
      link: '#'
    },
    {
      id: 'quantum-optimization',
      title: 'Quantum Optimization Engine',
      category: 'quantum',
      description: 'Quantum computing solution for complex optimization problems in logistics and finance',
      client: 'Global Logistics Company',
      duration: '10 months',
      team: '12 engineers',
      technologies: ['Qiskit', 'Python', 'Quantum Algorithms', 'AWS', 'React'],
      results: ['90% faster optimization', '$5M cost savings', 'Real-time route planning'],
      image: '/api/placeholder/600/400',
      featured: false,
      link: '#'
    },

    // Cybersecurity Projects
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Advanced threat detection and quantum-resistant security system for enterprise clients',
      client: 'Major Financial Institution',
      duration: '14 months',
      team: '18 security engineers',
      technologies: ['Python', 'Machine Learning', 'Quantum Cryptography', 'Kubernetes', 'Elasticsearch'],
      results: ['99.99% threat detection rate', 'Zero security breaches', 'Compliance certified'],
      image: '/api/placeholder/600/400',
      featured: true,
      link: '#'
    },
    {
      id: 'ai-threat-detection',
      title: 'AI-Powered Threat Intelligence',
      category: 'cybersecurity',
      description: 'Intelligent security monitoring system that predicts and prevents cyber attacks',
      client: 'Healthcare Technology Company',
      duration: '9 months',
      team: '10 engineers',
      technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Docker', 'Vue.js'],
      results: ['95% attack prevention', 'Real-time threat analysis', 'HIPAA compliant'],
      image: '/api/placeholder/600/400',
      featured: false,
      link: '#'
    },

    // Cloud & DevOps Projects
    {
      id: 'autonomous-devops',
      title: 'Autonomous DevOps Platform',
      category: 'cloud',
      description: 'AI-powered DevOps automation platform that manages infrastructure and deployments',
      client: 'E-commerce Giant',
      duration: '7 months',
      team: '14 DevOps engineers',
      technologies: ['Kubernetes', 'Terraform', 'Python', 'AWS', 'React'],
      results: ['80% faster deployments', '99.9% uptime', 'Zero manual intervention'],
      image: '/api/placeholder/600/400',
      featured: false,
      link: '#'
    },
    {
      id: 'multi-cloud-orchestration',
      title: 'Multi-Cloud Orchestration',
      category: 'cloud',
      description: 'Intelligent cloud management platform that optimizes costs across multiple providers',
      client: 'Global Retail Chain',
      duration: '11 months',
      team: '16 cloud engineers',
      technologies: ['Terraform', 'Kubernetes', 'Python', 'AWS', 'Azure', 'GCP'],
      results: ['30% cost reduction', 'Unified cloud management', 'Auto-scaling'],
      image: '/api/placeholder/600/400',
      featured: false,
      link: '#'
    },

    // Enterprise Projects
    {
      id: 'digital-transformation',
      title: 'Enterprise Digital Transformation',
      category: 'enterprise',
      description: 'Comprehensive digital transformation solution for legacy enterprise systems',
      client: 'Traditional Manufacturing Company',
      duration: '24 months',
      team: '30 consultants',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Kubernetes'],
      results: ['Complete digital overhaul', '50% efficiency improvement', 'Modern architecture'],
      image: '/api/placeholder/600/400',
      featured: true,
      link: '#'
    },
    {
      id: 'data-analytics-platform',
      title: 'Enterprise Data Analytics Platform',
      category: 'enterprise',
      description: 'Big data processing and analytics platform for enterprise decision making',
      client: 'Financial Services Company',
      duration: '16 months',
      team: '22 data engineers',
      technologies: ['Apache Spark', 'Python', 'PostgreSQL', 'React', 'Docker'],
      results: ['Real-time analytics', 'Data-driven decisions', 'Scalable architecture'],
      image: '/api/placeholder/600/400',
      featured: false,
      link: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeCategory);

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: CheckCircle, color: 'text-cyan-400' },
    { number: '50+', label: 'Enterprise Clients', icon: Building, color: 'text-green-400' },
    { number: '99.9%', label: 'Client Satisfaction', icon: Heart, color: 'text-purple-400' },
    { number: '$500M+', label: 'Value Delivered', icon: TrendingUp, color: 'text-yellow-400' }
  ];

  return (
    <>
      <Head>
        <title>Portfolio - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's portfolio of successful projects, case studies, and achievements in AI, quantum computing, cybersecurity, and enterprise solutions." />
        <meta name="robots" content="index, follow" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-8">
                Our Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover how we've transformed businesses across industries with revolutionary AI, 
                quantum computing, and autonomous systems solutions.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Categories */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Project Categories</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore our diverse portfolio across multiple technology domains
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {portfolioCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.filter(p => p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-6xl">🚀</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-white/50">Client:</span>
                          <div className="text-white font-medium">{project.client}</div>
                        </div>
                        <div>
                          <span className="text-white/50">Duration:</span>
                          <div className="text-white font-medium">{project.duration}</div>
                        </div>
                        <div>
                          <span className="text-white/50">Team:</span>
                          <div className="text-white font-medium">{project.team}</div>
                        </div>
                        <div>
                          <span className="text-white/50">Category:</span>
                          <div className="text-white font-medium capitalize">{project.category}</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <span className="text-white/50 text-sm">Technologies:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.slice(0, 5).map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-white/80 text-xs">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="px-3 py-1 bg-slate-700/50 rounded-full text-white/60 text-xs">
                              +{project.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <span className="text-white/50 text-sm">Key Results:</span>
                        <ul className="mt-2 space-y-1">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-white/80">
                              <CheckCircle className="w-4 h-4 text-cyan-400" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group">
                        <span>View Case Study</span>
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Projects Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">All Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.filter(p => !p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-4xl">⚡</div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                        <div>
                          <span className="text-white/50">Client:</span>
                          <div className="text-white font-medium truncate">{project.client}</div>
                        </div>
                        <div>
                          <span className="text-white/50">Duration:</span>
                          <div className="text-white font-medium">{project.duration}</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded-full text-white/80 text-xs">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-slate-700/50 rounded-full text-white/60 text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Client Success Stories</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Real results from real clients across diverse industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  client: 'Fortune 500 Tech Company',
                  industry: 'Technology',
                  challenge: 'Complex operational inefficiencies and high costs',
                  solution: 'AI Autonomous Ecosystem Platform',
                  results: ['40% cost reduction', '99.9% uptime', 'Real-time optimization'],
                  testimonial: '"Zion Tech Group transformed our operations with their revolutionary AI platform. The results exceeded our expectations."'
                },
                {
                  client: 'Leading Research University',
                  industry: 'Education & Research',
                  challenge: 'Need for advanced AI consciousness research capabilities',
                  solution: 'Quantum AI Neural Networks',
                  results: ['1000x faster processing', 'Breakthrough discoveries', 'Published research'],
                  testimonial: '"The quantum AI system opened new frontiers in our research that were previously impossible."'
                },
                {
                  client: 'Major Financial Institution',
                  industry: 'Finance',
                  challenge: 'Increasing cybersecurity threats and compliance requirements',
                  solution: 'Quantum Cybersecurity Platform',
                  results: ['99.99% threat detection', 'Zero breaches', 'Full compliance'],
                  testimonial: '"Our security posture has never been stronger. Zion Tech Group delivered exactly what we needed."'
                }
              ].map((story, index) => (
                <motion.div
                  key={story.client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{story.client}</h3>
                    <span className="text-cyan-400 text-sm font-medium">{story.industry}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Challenge:</h4>
                    <p className="text-white/70 text-sm">{story.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Solution:</h4>
                    <p className="text-white/70 text-sm">{story.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-white/80">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <blockquote className="text-white/80 text-sm italic">
                      "{story.testimonial}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your business with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800/80 rounded-full font-semibold text-white border border-white/20 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <EnhancedFooter />
    </>
  );
};

export default PortfolioPage;