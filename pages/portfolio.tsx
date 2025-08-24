import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, ExternalLink, Github, Calendar, Users, Award, 
  Filter, Code, Database, Shield, Cpu, Globe, Brain
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Briefcase },
    { id: 'ai-ml', name: 'AI & ML', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu },
    { id: 'web-development', name: 'Web Development', icon: Code },
    { id: 'data-analytics', name: 'Data Analytics', icon: Database }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Fraud Detection System',
      category: 'ai-ml',
      description: 'Machine learning system that reduced fraud by 95% for a major financial institution',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      client: 'Fortune 500 Bank',
      year: 2024,
      results: ['95% fraud reduction', '50% faster processing', '$2M annual savings'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Quantum Encryption Platform',
      category: 'quantum',
      description: 'Quantum-resistant encryption solution for government communications',
      image: '/api/placeholder/600/400',
      technologies: ['Qiskit', 'Python', 'Quantum Circuits', 'Cryptography'],
      client: 'Government Agency',
      year: 2024,
      results: ['Quantum-safe security', '99.99% uptime', 'Zero breaches'],
      link: '#',
      github: null
    },
    {
      id: 3,
      title: 'Smart City IoT Platform',
      category: 'data-analytics',
      description: 'Comprehensive IoT platform managing 10,000+ sensors across metropolitan area',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'InfluxDB', 'Kubernetes'],
      client: 'Metropolitan Government',
      year: 2023,
      results: ['30% energy savings', '50% traffic improvement', '10k+ sensors managed'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Zero-Trust Security Framework',
      category: 'cybersecurity',
      description: 'Enterprise-grade zero-trust security implementation for global corporation',
      image: '/api/placeholder/600/400',
      technologies: ['Microsoft Azure', 'Okta', 'Sentinel', 'PowerShell'],
      client: 'Global Technology Corp',
      year: 2023,
      results: ['100% endpoint coverage', '80% breach prevention', '24/7 monitoring'],
      link: '#',
      github: null
    },
    {
      id: 5,
      title: 'E-commerce Platform Redesign',
      category: 'web-development',
      description: 'Complete e-commerce platform overhaul resulting in 200% conversion increase',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Vercel'],
      client: 'Retail Startup',
      year: 2023,
      results: ['200% conversion increase', '60% faster load times', '500k+ users'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Healthcare Data Analytics',
      category: 'data-analytics',
      description: 'HIPAA-compliant analytics platform for patient outcome prediction',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Apache Spark', 'Tableau', 'HIPAA'],
      client: 'Healthcare Network',
      year: 2022,
      results: ['25% better outcomes', 'HIPAA compliant', '1M+ patient records'],
      link: '#',
      github: null
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Portfolio | Zion Tech Group</title>
        <meta name="description" content="Explore our portfolio of successful technology projects including AI solutions, cybersecurity implementations, and quantum computing applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <Briefcase className="w-16 h-16 text-cyan-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Our Portfolio
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how we&apos;ve helped organizations transform their operations with cutting-edge technology solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-4 gap-6 mt-12"
            >
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Industry Awards</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Value Generated</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-slate-800/50 border-white/10 text-gray-300 hover:border-cyan-500/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">
                          {categories.find(c => c.id === project.category)?.icon && 
                            React.createElement(categories.find(c => c.id === project.category)!.icon)
                          }
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 text-sm text-cyan-400">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex space-x-2">
                          {project.github && (
                            <a 
                              href={project.github}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          <a 
                            href={project.link}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Client:</div>
                        <div className="text-white font-medium">{project.client}</div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <div className="text-sm text-gray-400 mb-2">Key Results:</div>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-sm text-gray-300 flex items-start">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let&apos;s discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Start a Project
                </a>
                <a
                  href="/services"
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 border border-white/10 flex items-center justify-center"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <EnhancedFooter />
      </div>
    </>
  );
}