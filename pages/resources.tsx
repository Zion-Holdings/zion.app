import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Video, Download, 
  ExternalLink, Search, Filter, ChevronDown,
  Brain, Atom, Shield, Rocket, Star,
  ArrowRight, Users, Award, Globe
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'documentation', name: 'Documentation' },
    { id: 'whitepapers', name: 'White Papers' },
    { id: 'webinars', name: 'Webinars' },
    { id: 'tools', name: 'Tools & APIs' },
    { id: 'guides', name: 'Guides & Tutorials' },
    { id: 'research', name: 'Research Papers' }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI Consciousness Development Guide',
      category: 'documentation',
      description: 'Comprehensive guide to developing AI consciousness and emotional intelligence systems.',
      type: 'PDF Guide',
      size: '2.4 MB',
      downloads: 15420,
      rating: 4.8,
      tags: ['AI', 'Consciousness', 'Machine Learning', 'Guide'],
      featured: true,
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      downloadUrl: '/api/download/ai-consciousness-guide',
      previewUrl: '/api/preview/ai-consciousness-guide'
    },
    {
      id: 2,
      title: 'Quantum Computing Implementation Handbook',
      category: 'documentation',
      description: 'Step-by-step handbook for implementing quantum computing solutions in enterprise environments.',
      type: 'PDF Guide',
      size: '3.1 MB',
      downloads: 12850,
      rating: 4.9,
      tags: ['Quantum Computing', 'Implementation', 'Enterprise', 'Handbook'],
      featured: true,
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      downloadUrl: '/api/download/quantum-implementation-handbook',
      previewUrl: '/api/preview/quantum-implementation-handbook'
    },
    {
      id: 3,
      title: 'Space Technology Innovation Report 2025',
      category: 'whitepapers',
      description: 'Comprehensive analysis of emerging space technologies and their commercial applications.',
      type: 'White Paper',
      size: '5.2 MB',
      downloads: 9870,
      rating: 4.7,
      tags: ['Space Technology', 'Innovation', 'Commercial Applications', '2025'],
      featured: false,
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      downloadUrl: '/api/download/space-tech-innovation-2025',
      previewUrl: '/api/preview/space-tech-innovation-2025'
    },
    {
      id: 4,
      title: 'Zero-Trust Security Architecture Guide',
      category: 'guides',
      description: 'Complete guide to implementing zero-trust security architecture in modern enterprises.',
      type: 'Interactive Guide',
      size: '1.8 MB',
      downloads: 11230,
      rating: 4.6,
      tags: ['Cybersecurity', 'Zero Trust', 'Architecture', 'Security'],
      featured: false,
      icon: <Shield className="w-8 h-8 text-red-400" />,
      downloadUrl: '/api/download/zero-trust-security-guide',
      previewUrl: '/api/preview/zero-trust-security-guide'
    },
    {
      id: 5,
      title: 'AI-Powered DevOps Best Practices',
      category: 'documentation',
      description: 'Best practices for implementing AI-powered DevOps and automation in software development.',
      type: 'Technical Guide',
      size: '2.7 MB',
      downloads: 8760,
      rating: 4.5,
      tags: ['AI', 'DevOps', 'Automation', 'Best Practices'],
      featured: false,
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      downloadUrl: '/api/download/ai-devops-best-practices',
      previewUrl: '/api/preview/ai-devops-best-practices'
    },
    {
      id: 6,
      title: 'Quantum Cryptography Research Paper',
      category: 'research',
      description: 'Advanced research on quantum-resistant cryptography and post-quantum security.',
      type: 'Research Paper',
      size: '4.1 MB',
      downloads: 6540,
      rating: 4.9,
      tags: ['Quantum Cryptography', 'Research', 'Security', 'Post-Quantum'],
      featured: false,
      icon: <Atom className="w-8 h-8 text-indigo-400" />,
      downloadUrl: '/api/download/quantum-cryptography-research',
      previewUrl: '/api/preview/quantum-cryptography-research'
    },
    {
      id: 7,
      title: 'Micro SaaS Development Framework',
      category: 'tools',
      description: 'Complete framework for building and scaling micro SaaS applications.',
      type: 'Development Kit',
      size: '15.2 MB',
      downloads: 5430,
      rating: 4.8,
      tags: ['Micro SaaS', 'Development', 'Framework', 'Scaling'],
      featured: false,
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      downloadUrl: '/api/download/micro-saas-framework',
      previewUrl: '/api/preview/micro-saas-framework'
    },
    {
      id: 8,
      title: 'AI Ethics and Governance Framework',
      category: 'whitepapers',
      description: 'Comprehensive framework for implementing ethical AI and governance in enterprise systems.',
      type: 'White Paper',
      size: '3.8 MB',
      downloads: 7890,
      rating: 4.7,
      tags: ['AI Ethics', 'Governance', 'Enterprise', 'Framework'],
      featured: false,
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      downloadUrl: '/api/download/ai-ethics-governance-framework',
      previewUrl: '/api/preview/ai-ethics-governance-framework'
    }
  ];

  const webinars = [
    {
      id: 1,
      title: 'The Future of AI Consciousness',
      date: '2025-01-20',
      duration: '60 min',
      speaker: 'Dr. Kleber Santos',
      description: 'Exploring the next frontier of artificial intelligence and consciousness development.',
      attendees: 2500,
      recordingUrl: '/api/webinar/ai-consciousness-future',
      slidesUrl: '/api/download/ai-consciousness-webinar-slides'
    },
    {
      id: 2,
      title: 'Quantum Computing in Enterprise',
      date: '2025-01-15',
      duration: '45 min',
      speaker: 'Quantum Research Team',
      description: 'Practical applications of quantum computing in enterprise environments.',
      attendees: 1800,
      recordingUrl: '/api/webinar/quantum-computing-enterprise',
      slidesUrl: '/api/download/quantum-enterprise-webinar-slides'
    },
    {
      id: 3,
      title: 'Space Technology Commercialization',
      date: '2025-01-10',
      duration: '75 min',
      speaker: 'Space Technology Team',
      description: 'Commercial opportunities in space technology and resource mining.',
      attendees: 1200,
      recordingUrl: '/api/webinar/space-tech-commercialization',
      slidesUrl: '/api/download/space-tech-webinar-slides'
    }
  ];

  const tools = [
    {
      id: 1,
      name: 'AI Performance Testing Suite',
      description: 'Comprehensive testing tools for AI model performance and accuracy evaluation.',
      category: 'AI Tools',
      access: 'Free Trial',
      url: '/api/tools/ai-performance-testing'
    },
    {
      id: 2,
      name: 'Quantum Algorithm Simulator',
      description: 'Interactive simulator for testing and validating quantum computing algorithms.',
      category: 'Quantum Tools',
      access: 'Free',
      url: '/api/tools/quantum-algorithm-simulator'
    },
    {
      id: 3,
      name: 'Security Assessment Toolkit',
      description: 'Complete toolkit for cybersecurity assessment and vulnerability testing.',
      category: 'Security Tools',
      access: 'Enterprise',
      url: '/api/tools/security-assessment-toolkit'
    }
  ];

  const filteredResources = resources.filter(resource => 
    (selectedCategory === 'all' || resource.category === selectedCategory) &&
    (searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const featuredResources = filteredResources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  return (
    <Layout seo={{
      title: 'Resources - Zion Tech Group | Documentation, Tools & Learning Materials',
      description: 'Access comprehensive resources including documentation, white papers, webinars, and tools from Zion Tech Group.',
      keywords: 'resources, documentation, white papers, webinars, tools, Zion Tech Group',
      url: 'https://ziontechgroup.com/resources'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Knowledge & Tools Hub
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Access comprehensive resources, documentation, and tools to accelerate your 
                journey with AI, quantum computing, and space technology.
              </p>
              
              {/* Search and Filters */}
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources, topics, or tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 pr-10"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Featured Resources
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our most popular and comprehensive resources for mastering cutting-edge technologies.
                </p>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{resource.title}</h3>
                          <p className="text-gray-300 leading-relaxed mb-3">{resource.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center space-x-2">
                              <FileText className="w-4 h-4" />
                              <span>{resource.type}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                              <Download className="w-4 h-4" />
                              <span>{resource.size}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{resource.rating}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          {resource.downloads.toLocaleString()} downloads
                        </div>
                        <div className="flex space-x-3">
                          <a
                            href={resource.previewUrl}
                            className="px-4 py-2 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                          >
                            Preview
                          </a>
                          <a
                            href={resource.downloadUrl}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Webinars Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Latest Webinars
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch expert presentations and learn from industry leaders on cutting-edge technology topics.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                        Webinar
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{webinar.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.speaker}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4" />
                        <span>{webinar.duration} • {new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>{webinar.attendees.toLocaleString()} attendees</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={webinar.recordingUrl}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Watch Recording
                      </a>
                      <a
                        href={webinar.slidesUrl}
                        className="px-4 py-2 border border-gray-600 text-white rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & APIs */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Tools & APIs
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Access powerful tools and APIs to accelerate your development and testing processes.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-500/30">
                        {tool.access}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{tool.description}</p>
                    
                    <div className="mb-4">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded border border-blue-500/30">
                        {tool.category}
                      </span>
                    </div>
                    
                    <a
                      href={tool.url}
                      className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Access Tool</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Resources */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                All Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Browse our complete collection of resources, guides, and documentation.
              </p>
            </motion.div>
            
            {regularResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                          {resource.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{resource.title}</h3>
                          <p className="text-gray-400 text-xs">{resource.type}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span>{resource.size}</span>
                        <span className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{resource.rating}</span>
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">
                          {resource.downloads.toLocaleString()} downloads
                        </div>
                        <a
                          href={resource.downloadUrl}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No resources found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or category filters.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Custom Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team can create custom documentation, 
                guides, and tools tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Resources
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:resources@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                >
                  Contact Resources Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;