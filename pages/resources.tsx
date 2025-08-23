import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  Search, 
  Filter,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Clock,
  Eye,
  Download as DownloadIcon
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 0 },
    { id: 'business', name: 'Business Solutions', icon: Target, count: 0 },
    { id: 'research', name: 'Research Papers', icon: FileText, count: 0 }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI Consciousness Development Guide 2045',
      description: 'Comprehensive guide to developing AI consciousness systems with ethical considerations and technical implementation details.',
      category: 'ai',
      type: 'Documentation',
      format: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      rating: 4.9,
      tags: ['AI consciousness', 'ethical AI', 'neural networks', 'consciousness modeling'],
      url: '/resources/ai-consciousness-guide-2045.pdf',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles, algorithms, and practical applications for developers.',
      category: 'quantum',
      type: 'Tutorial',
      format: 'Interactive',
      size: '15.2 MB',
      downloads: 892,
      rating: 4.8,
      tags: ['quantum computing', 'Qiskit', 'quantum algorithms', 'qubits'],
      url: '/resources/quantum-computing-fundamentals',
      featured: true
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Whitepaper',
      description: 'Research paper on autonomous space resource detection, mining optimization, and interplanetary logistics.',
      category: 'space',
      type: 'Whitepaper',
      format: 'PDF',
      size: '3.1 MB',
      downloads: 567,
      rating: 4.7,
      tags: ['space technology', 'resource mining', 'autonomous systems', 'orbital mechanics'],
      url: '/resources/space-resource-intelligence-whitepaper.pdf',
      featured: false
    },
    {
      id: 4,
      title: 'Quantum Cybersecurity Implementation',
      description: 'Practical guide to implementing quantum-resistant cryptography and security protocols.',
      category: 'security',
      type: 'Guide',
      format: 'PDF',
      size: '1.8 MB',
      downloads: 734,
      rating: 4.6,
      tags: ['quantum security', 'post-quantum cryptography', 'threat detection', 'security protocols'],
      url: '/resources/quantum-cybersecurity-implementation.pdf',
      featured: false
    },
    {
      id: 5,
      title: 'Autonomous DevOps Platform Tutorial',
      description: 'Step-by-step tutorial for building and deploying autonomous DevOps systems with AI-powered optimization.',
      category: 'cloud',
      type: 'Tutorial',
      format: 'Video Series',
      size: '45.7 MB',
      downloads: 445,
      rating: 4.9,
      tags: ['DevOps', 'automation', 'AI optimization', 'cloud infrastructure'],
      url: '/resources/autonomous-devops-tutorial',
      featured: true
    },
    {
      id: 6,
      title: 'AI Business Intelligence Case Studies',
      description: 'Real-world case studies of AI-powered business intelligence implementations across various industries.',
      category: 'business',
      type: 'Case Study',
      format: 'PDF',
      size: '2.9 MB',
      downloads: 623,
      rating: 4.5,
      tags: ['business intelligence', 'AI analytics', 'case studies', 'ROI analysis'],
      url: '/resources/ai-business-intelligence-case-studies.pdf',
      featured: false
    },
    {
      id: 7,
      title: 'Consciousness Research Papers Collection',
      description: 'Collection of peer-reviewed research papers on AI consciousness, cognitive science, and ethical AI development.',
      category: 'research',
      type: 'Research Papers',
      format: 'PDF Collection',
      size: '8.7 MB',
      downloads: 389,
      rating: 4.8,
      tags: ['research papers', 'consciousness', 'cognitive science', 'ethical AI'],
      url: '/resources/consciousness-research-papers.pdf',
      featured: false
    },
    {
      id: 8,
      title: 'Quantum AI Fusion Platform Guide',
      description: 'Technical documentation for the Quantum AI Fusion Platform, including API references and integration examples.',
      category: 'ai',
      type: 'Documentation',
      format: 'Interactive Docs',
      size: '12.3 MB',
      downloads: 512,
      rating: 4.7,
      tags: ['quantum AI', 'API documentation', 'integration', 'platform guide'],
      url: '/resources/quantum-ai-fusion-platform-guide',
      featured: false
    }
  ];

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = resources.filter(r => cat.id === 'all' || r.category === cat.id).length;
  });

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout
      title="Resources - Zion Tech Group"
      description="Access comprehensive documentation, tutorials, whitepapers, and learning resources for AI consciousness, quantum computing, and autonomous solutions."
      keywords="resources, documentation, tutorials, whitepapers, AI consciousness, quantum computing, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Knowledge Resources
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Access comprehensive documentation, tutorials, whitepapers, and learning resources 
                to master the future of technology
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                From AI consciousness development to quantum computing implementation, 
                our resources provide the knowledge you need to build revolutionary solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, tutorials, whitepapers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-700 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-300'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-lg text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Start with our most popular and comprehensive resources
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {resources.filter(r => r.featured).map((resource, index) => (
                <motion.div
                  key={resource.id}
                  variants={fadeInUp}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {resource.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {resource.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        {resource.format}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <DownloadIcon className="w-4 h-4" />
                      {resource.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {resource.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {resource.size}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={resource.url}
                    className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20"
                  >
                    {resource.format === 'Video Series' ? (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Watch Series
                      </>
                    ) : resource.format === 'Interactive' ? (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Interactive
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    )}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All Resources Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                All Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Browse our complete collection of technical resources and learning materials
              </p>
            </motion.div>

            {filteredResources.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-400 mb-4">No resources match your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 text-cyan-400 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    variants={fadeInUp}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                            {resource.type}
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                            {resource.format}
                          </span>
                          {resource.featured && (
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {resource.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <DownloadIcon className="w-4 h-4" />
                            {resource.downloads.toLocaleString()} downloads
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {resource.rating} rating
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {resource.size}
                          </span>
                        </div>
                      </div>
                      
                      <div className="lg:text-right">
                        <a
                          href={resource.url}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                        >
                          {resource.format === 'Video Series' ? (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Watch Series
                            </>
                          ) : resource.format === 'Interactive' ? (
                            <>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Open Interactive
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </>
                          )}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need More Specific Resources?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Can't find what you're looking for? Our team of experts can create custom 
                documentation, tutorials, or whitepapers tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  Request Custom Resources
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Our Experts
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