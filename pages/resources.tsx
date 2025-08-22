import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail,
  BookOpen, Download, ExternalLink, Search, Filter, FileText,
  Video, Headphones, Code, Database, Network, Server, Monitor,
  Smartphone, Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  ArrowRight, ChevronRight, Play, FileCode, Book, GraduationCap
} from 'lucide-react';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const resourceCategories = [
    { id: 'all', name: 'All Resources', count: 156 },
    { id: 'documentation', name: 'Documentation', count: 45 },
    { id: 'guides', name: 'Guides & Tutorials', count: 38 },
    { id: 'tools', name: 'Tools & SDKs', count: 25 },
    { id: 'webinars', name: 'Webinars & Videos', count: 32 },
    { id: 'research', name: 'Research Papers', count: 16 }
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'AI Consciousness Platform Developer Guide',
      description: 'Comprehensive guide to building AI consciousness applications using our revolutionary platform.',
      category: 'documentation',
      type: 'PDF',
      size: '15.2 MB',
      downloads: '2.4K',
      featured: true,
      icon: <BookOpen className="w-12 h-12" />,
      tags: ['AI Consciousness', 'Developer Guide', 'Platform', 'Documentation']
    },
    {
      id: 2,
      title: 'Quantum Computing Implementation Handbook',
      description: 'Step-by-step guide to implementing quantum computing solutions in enterprise environments.',
      category: 'guides',
      type: 'PDF',
      size: '8.7 MB',
      downloads: '1.8K',
      featured: true,
      icon: <Atom className="w-12 h-12" />,
      tags: ['Quantum Computing', 'Implementation', 'Enterprise', 'Handbook']
    },
    {
      id: 3,
      title: 'AI SDK for Python - Complete Reference',
      description: 'Full API reference and examples for our Python SDK with advanced AI capabilities.',
      category: 'tools',
      type: 'ZIP',
      size: '45.3 MB',
      downloads: '3.1K',
      featured: true,
      icon: <Code className="w-12 h-12" />,
      tags: ['Python SDK', 'AI Development', 'API Reference', 'Examples']
    }
  ];

  const documentationResources = [
    {
      title: 'AI Consciousness API Reference',
      description: 'Complete API documentation for AI consciousness platform endpoints and methods.',
      category: 'documentation',
      type: 'HTML',
      size: 'Online',
      downloads: '5.2K',
      icon: <FileCode className="w-8 h-8" />,
      tags: ['API', 'Documentation', 'AI Consciousness', 'Reference']
    },
    {
      title: 'Quantum Security Implementation Guide',
      description: 'Security best practices and implementation patterns for quantum computing solutions.',
      category: 'documentation',
      type: 'PDF',
      size: '12.1 MB',
      downloads: '2.8K',
      icon: <Shield className="w-8 h-8" />,
      tags: ['Quantum Security', 'Implementation', 'Best Practices', 'Cybersecurity']
    },
    {
      title: 'Autonomous Operations Architecture',
      description: 'Technical architecture documentation for building autonomous business operations.',
      category: 'documentation',
      type: 'PDF',
      size: '18.9 MB',
      downloads: '1.9K',
      icon: <Rocket className="w-8 h-8" />,
      tags: ['Autonomous Operations', 'Architecture', 'Technical Documentation', 'Business Operations']
    },
    {
      title: 'AI Ethics Framework Documentation',
      description: 'Comprehensive framework for implementing ethical AI practices in enterprise applications.',
      category: 'documentation',
      type: 'PDF',
      size: '9.3 MB',
      downloads: '3.4K',
      icon: <Brain className="w-8 h-8" />,
      tags: ['AI Ethics', 'Framework', 'Enterprise', 'Responsible AI']
    }
  ];

  const guidesAndTutorials = [
    {
      title: 'Getting Started with AI Consciousness',
      description: 'Beginner-friendly tutorial for building your first AI consciousness application.',
      category: 'guides',
      type: 'Video',
      size: '45 min',
      downloads: '4.1K',
      icon: <Play className="w-8 h-8" />,
      tags: ['AI Consciousness', 'Tutorial', 'Beginner', 'Getting Started']
    },
    {
      title: 'Quantum Computing for Beginners',
      description: 'Introduction to quantum computing concepts and practical applications.',
      category: 'guides',
      type: 'PDF',
      size: '6.8 MB',
      downloads: '2.7K',
      icon: <GraduationCap className="w-8 h-8" />,
      tags: ['Quantum Computing', 'Beginner', 'Concepts', 'Practical Applications']
    },
    {
      title: 'Building Autonomous Business Systems',
      description: 'Step-by-step guide to implementing autonomous operations in your organization.',
      category: 'guides',
      type: 'PDF',
      size: '14.2 MB',
      downloads: '1.6K',
      icon: <Zap className="w-8 h-8" />,
      tags: ['Autonomous Systems', 'Business Operations', 'Implementation', 'Guide']
    },
    {
      title: 'AI-Powered DevOps Best Practices',
      description: 'Best practices for implementing AI-driven DevOps and automation.',
      category: 'guides',
      type: 'PDF',
      size: '11.5 MB',
      downloads: '2.3K',
      icon: <Server className="w-8 h-8" />,
      tags: ['AI DevOps', 'Best Practices', 'Automation', 'DevOps']
    }
  ];

  const toolsAndSDKs = [
    {
      title: 'AI Consciousness JavaScript SDK',
      description: 'Complete JavaScript SDK for building AI consciousness web applications.',
      category: 'tools',
      type: 'NPM',
      size: 'Package',
      downloads: '8.9K',
      icon: <Code className="w-8 h-8" />,
      tags: ['JavaScript SDK', 'AI Consciousness', 'Web Applications', 'Development']
    },
    {
      title: 'Quantum Computing Simulator',
      description: 'Interactive quantum computing simulator for testing and learning.',
      category: 'tools',
      type: 'Web App',
      size: 'Online',
      downloads: '12.3K',
      icon: <Atom className="w-8 h-8" />,
      tags: ['Quantum Simulator', 'Interactive', 'Testing', 'Learning']
    },
    {
      title: 'AI Model Training Toolkit',
      description: 'Comprehensive toolkit for training and fine-tuning AI models.',
      category: 'tools',
      type: 'ZIP',
      size: '67.8 MB',
      downloads: '3.7K',
      icon: <Brain className="w-8 h-8" />,
      tags: ['AI Training', 'Model Training', 'Toolkit', 'Fine-tuning']
    },
    {
      title: 'Business Process Automation Engine',
      description: 'Engine for automating complex business processes with AI.',
      category: 'tools',
      type: 'Docker',
      size: 'Container',
      downloads: '2.1K',
      icon: <Zap className="w-8 h-8" />,
      tags: ['Process Automation', 'Business Processes', 'AI Engine', 'Automation']
    }
  ];

  const webinarsAndVideos = [
    {
      title: 'The Future of AI Consciousness',
      description: 'Expert panel discussion on the evolution of AI consciousness technology.',
      category: 'webinars',
      type: 'Video',
      size: '90 min',
      downloads: '15.2K',
      icon: <Video className="w-8 h-8" />,
      tags: ['AI Consciousness', 'Future', 'Expert Panel', 'Technology Evolution']
    },
    {
      title: 'Quantum Computing in Practice',
      description: 'Real-world applications and case studies of quantum computing.',
      category: 'webinars',
      type: 'Video',
      size: '75 min',
      downloads: '8.7K',
      icon: <Play className="w-8 h-8" />,
      tags: ['Quantum Computing', 'Real-world', 'Case Studies', 'Applications']
    },
    {
      title: 'Building Autonomous Enterprises',
      description: 'How leading companies are implementing autonomous operations.',
      category: 'webinars',
      type: 'Video',
      size: '60 min',
      downloads: '6.4K',
      icon: <Building className="w-8 h-8" />,
      tags: ['Autonomous Enterprises', 'Implementation', 'Leading Companies', 'Operations']
    },
    {
      title: 'AI Ethics and Governance',
      description: 'Framework for responsible AI development and deployment.',
      category: 'webinars',
      type: 'Video',
      size: '45 min',
      downloads: '9.1K',
      icon: <Shield className="w-8 h-8" />,
      tags: ['AI Ethics', 'Governance', 'Responsible AI', 'Development']
    }
  ];

  const researchPapers = [
    {
      title: 'Advances in AI Consciousness Research',
      description: 'Breakthrough research on artificial consciousness and emotional intelligence.',
      category: 'research',
      type: 'PDF',
      size: '3.2 MB',
      downloads: '4.8K',
      icon: <BookOpenCheck className="w-8 h-8" />,
      tags: ['AI Consciousness', 'Research', 'Breakthrough', 'Emotional Intelligence']
    },
    {
      title: 'Quantum Neural Networks for Drug Discovery',
      description: 'Research on quantum computing applications in pharmaceutical research.',
      category: 'research',
      type: 'PDF',
      size: '5.7 MB',
      downloads: '3.2K',
      icon: <Atom className="w-8 h-8" />,
      tags: ['Quantum Neural Networks', 'Drug Discovery', 'Pharmaceutical', 'Research']
    },
    {
      title: 'Autonomous Business Operations Framework',
      description: 'Framework for implementing fully autonomous business systems.',
      category: 'research',
      type: 'PDF',
      size: '4.1 MB',
      downloads: '2.9K',
      icon: <Rocket className="w-8 h-8" />,
      tags: ['Autonomous Operations', 'Framework', 'Business Systems', 'Implementation']
    },
    {
      title: 'AI Ethics and Governance Models',
      description: 'Comprehensive models for ethical AI development and deployment.',
      category: 'research',
      type: 'PDF',
      size: '6.3 MB',
      downloads: '3.8K',
      icon: <Brain className="w-8 h-8" />,
      tags: ['AI Ethics', 'Governance Models', 'Ethical AI', 'Development']
    }
  ];

  const allResources = [
    ...documentationResources,
    ...guidesAndTutorials,
    ...toolsAndSDKs,
    ...webinarsAndVideos,
    ...researchPapers
  ];

  const filteredResources = allResources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
    const searchMatch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const getCategoryIcon = (category: string) => {
    const icons = {
      documentation: <FileText className="w-6 h-6" />,
      guides: <Book className="w-6 h-6" />,
      tools: <Code className="w-6 h-6" />,
      webinars: <Video className="w-6 h-6" />,
      research: <BookOpenCheck className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <FileText className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      documentation: 'cyan',
      guides: 'blue',
      tools: 'purple',
      webinars: 'green',
      research: 'yellow'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  return (
    <Layout>
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access comprehensive documentation, guides, tools, and educational resources for AI consciousness, quantum computing, and autonomous operations. Everything you need to succeed with our technology."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Resources & Tools
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Everything you need to succeed with our revolutionary AI consciousness, quantum computing, and autonomous operations technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <span>SDKs & Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span>Guides & Videos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {resourceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-400">
                Essential resources to get you started
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    {resource.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-${getCategoryColor(resource.category)}-500/20 text-${getCategoryColor(resource.category)}-400 rounded-full text-sm border border-${getCategoryColor(resource.category)}-500/30`}>
                        {resource.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{resource.size}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags?.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      Download Resource
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-400">
                Find the resources you need across different categories
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: 'Documentation',
                  description: 'Complete API references, architecture guides, and technical specifications.',
                  resources: documentationResources,
                  icon: <FileText className="w-12 h-12" />,
                  color: 'cyan'
                },
                {
                  title: 'Guides & Tutorials',
                  description: 'Step-by-step guides, best practices, and learning resources.',
                  resources: guidesAndTutorials,
                  icon: <Book className="w-12 h-12" />,
                  color: 'blue'
                },
                {
                  title: 'Tools & SDKs',
                  description: 'Development kits, libraries, and interactive tools for building applications.',
                  resources: toolsAndSDKs,
                  icon: <Code className="w-12 h-12" />,
                  color: 'purple'
                },
                {
                  title: 'Webinars & Videos',
                  description: 'Educational content, expert discussions, and practical demonstrations.',
                  resources: webinarsAndVideos,
                  icon: <Video className="w-12 h-12" />,
                  color: 'green'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-${category.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.resources.slice(0, 3).map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                        <div className="text-cyan-400">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm line-clamp-1">
                            {resource.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>{resource.type}</span>
                            <span>•</span>
                            <span>{resource.size}</span>
                            <span>•</span>
                            <span>{resource.downloads} downloads</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 text-${category.color}-400 hover:text-${category.color}-300 transition-colors duration-300 font-medium`}
                    >
                      View All {category.title}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All Resources
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive collection of all available resources
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 bg-${getCategoryColor(resource.category)}-500/20 text-${getCategoryColor(resource.category)}-400 rounded text-xs border border-${getCategoryColor(resource.category)}-500/30`}>
                        {resource.category}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{resource.size}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No resources match your current filters. Try adjusting your search or category selection.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team of experts is here to help you succeed with our revolutionary technology. Get personalized guidance and support for your implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Expert Support
                </a>
                <a
                  href="/training"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Training Programs
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}