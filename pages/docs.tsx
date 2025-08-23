import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Code, 
  FileText, 
  Play,
  Download,
  ExternalLink,
  ArrowRight,
  ChevronRight,
  Star,
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Users,
  Settings,
  Database,
  Server,
  Clock
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'api-reference', name: 'API Reference', count: 15 },
    { id: 'guides', name: 'Guides & Tutorials', count: 12 },
    { id: 'sdks', name: 'SDKs & Libraries', count: 6 },
    { id: 'examples', name: 'Code Examples', count: 4 }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions for all our platforms',
      icon: <Play className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group platforms in minutes',
          difficulty: 'Beginner',
          time: '5 min read',
          link: '/docs/getting-started/quick-start',
          featured: true
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          difficulty: 'Beginner',
          time: '10 min read',
          link: '/docs/getting-started/installation',
          featured: false
        },
        {
          title: 'Configuration',
          description: 'Configure your environment and settings for optimal performance',
          difficulty: 'Beginner',
          time: '8 min read',
          link: '/docs/getting-started/configuration',
          featured: false
        },
        {
          title: 'First Project',
          description: 'Create your first project with our step-by-step tutorial',
          difficulty: 'Beginner',
          time: '15 min read',
          link: '/docs/getting-started/first-project',
          featured: false
        }
      ]
    },
    {
      id: 'ai-platform',
      title: 'AI Consciousness Platform',
      description: 'Documentation for our AI consciousness and emotional intelligence platform',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Consciousness API',
          description: 'Complete API reference for consciousness and emotional intelligence features',
          difficulty: 'Advanced',
          time: '25 min read',
          link: '/docs/ai-platform/api-reference',
          featured: true
        },
        {
          title: 'Neural Network Architecture',
          description: 'Deep dive into our neural network design and consciousness algorithms',
          difficulty: 'Advanced',
          time: '30 min read',
          link: '/docs/ai-platform/neural-architecture',
          featured: false
        },
        {
          title: 'Emotional Intelligence Models',
          description: 'Understanding and implementing emotional intelligence in AI systems',
          difficulty: 'Intermediate',
          time: '20 min read',
          link: '/docs/ai-platform/emotional-intelligence',
          featured: false
        },
        {
          title: 'Consciousness Training',
          description: 'Guide to training and fine-tuning consciousness models',
          difficulty: 'Advanced',
          time: '35 min read',
          link: '/docs/ai-platform/consciousness-training',
          featured: false
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Platform',
      description: 'Documentation for quantum algorithms, cryptography, and computing',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      items: [
        {
          title: 'Quantum Algorithms',
          description: 'Implementation guide for quantum algorithms and optimization',
          difficulty: 'Advanced',
          time: '40 min read',
          link: '/docs/quantum-computing/algorithms',
          featured: true
        },
        {
          title: 'Quantum Cryptography',
          description: 'Quantum-resistant cryptography and security protocols',
          difficulty: 'Advanced',
          time: '30 min read',
          link: '/docs/quantum-computing/cryptography',
          featured: false
        },
        {
          title: 'Quantum Error Correction',
          description: 'Implementing error correction in quantum computing systems',
          difficulty: 'Advanced',
          time: '35 min read',
          link: '/docs/quantum-computing/error-correction',
          featured: false
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Combining quantum computing with machine learning algorithms',
          difficulty: 'Advanced',
          time: '45 min read',
          link: '/docs/quantum-computing/quantum-ml',
          featured: false
        }
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology Platform',
      description: 'Documentation for space resource intelligence and exploration systems',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'Satellite Data API',
          description: 'Access and analyze satellite data for resource intelligence',
          difficulty: 'Intermediate',
          time: '20 min read',
          link: '/docs/space-technology/satellite-api',
          featured: true
        },
        {
          title: 'Resource Intelligence',
          description: 'Building intelligent systems for space resource analysis',
          difficulty: 'Intermediate',
          time: '25 min read',
          link: '/docs/space-technology/resource-intelligence',
          featured: false
        },
        {
          title: 'Orbital Mechanics',
          description: 'Understanding orbital dynamics and space navigation',
          difficulty: 'Advanced',
          time: '30 min read',
          link: '/docs/space-technology/orbital-mechanics',
          featured: false
        },
        {
          title: 'Space Mining Systems',
          description: 'Designing autonomous systems for space resource extraction',
          difficulty: 'Advanced',
          time: '35 min read',
          link: '/docs/space-technology/mining-systems',
          featured: false
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Platform',
      description: 'Documentation for zero-trust security and threat detection',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Zero Trust Architecture',
          description: 'Implementing zero-trust security principles',
          difficulty: 'Intermediate',
          time: '25 min read',
          link: '/docs/cybersecurity/zero-trust',
          featured: true
        },
        {
          title: 'Threat Detection',
          description: 'AI-powered threat detection and response systems',
          difficulty: 'Intermediate',
          time: '20 min read',
          link: '/docs/cybersecurity/threat-detection',
          featured: false
        },
        {
          title: 'Quantum Security',
          description: 'Quantum-resistant security protocols and implementations',
          difficulty: 'Advanced',
          time: '30 min read',
          link: '/docs/cybersecurity/quantum-security',
          featured: false
        },
        {
          title: 'Compliance Frameworks',
          description: 'Meeting security compliance requirements and standards',
          difficulty: 'Intermediate',
          time: '15 min read',
          link: '/docs/cybersecurity/compliance',
          featured: false
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Documentation for cloud platforms and infrastructure management',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      items: [
        {
          title: 'Multi-Cloud Management',
          description: 'Managing infrastructure across multiple cloud providers',
          difficulty: 'Intermediate',
          time: '25 min read',
          link: '/docs/cloud-infrastructure/multi-cloud',
          featured: true
        },
        {
          title: 'DevOps Automation',
          description: 'Automating deployment and infrastructure management',
          difficulty: 'Intermediate',
          time: '20 min read',
          link: '/docs/cloud-infrastructure/devops',
          featured: false
        },
        {
          title: 'Edge Computing',
          description: 'Implementing edge computing solutions for low latency',
          difficulty: 'Advanced',
          time: '30 min read',
          link: '/docs/cloud-infrastructure/edge-computing',
          featured: false
        },
        {
          title: 'Serverless Architecture',
          description: 'Building serverless applications and microservices',
          difficulty: 'Intermediate',
          time: '25 min read',
          link: '/docs/cloud-infrastructure/serverless',
          featured: false
        }
      ]
    }
  ];

  const filteredSections = documentationSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.items.some(item => 
                           item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    const matchesCategory = selectedCategory === 'all' || section.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  const popularDocs = [
    {
      title: 'AI Consciousness Quick Start',
      description: 'Get started with AI consciousness in under 10 minutes',
      views: '15.2K',
      rating: 4.9,
      link: '/docs/ai-platform/quick-start'
    },
    {
      title: 'Quantum Algorithm Implementation',
      description: 'Step-by-step guide to implementing quantum algorithms',
      views: '12.8K',
      rating: 4.8,
      link: '/docs/quantum-computing/algorithms'
    },
    {
      title: 'Zero Trust Security Setup',
      description: 'Complete zero-trust security implementation guide',
      views: '11.5K',
      rating: 4.7,
      link: '/docs/cybersecurity/zero-trust'
    },
    {
      title: 'Space Resource Intelligence API',
      description: 'Comprehensive API reference for space technology',
      views: '9.3K',
      rating: 4.6,
      link: '/docs/space-technology/satellite-api'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Documentation | Zion Tech Group" 
        description="Comprehensive documentation, API references, and guides for Zion Tech Group's AI consciousness, quantum computing, and space technology platforms."
        canonical="https://ziontechgroup.com/docs/"
      />
      
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
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Documentation</span> Hub
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to build with our AI consciousness, quantum computing, 
                and space technology platforms. From quick starts to advanced implementations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Documentation Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Most Popular Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these highly-rated guides and tutorials
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(doc.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{doc.rating}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {doc.views} views
                    </span>
                  </div>
                  
                  <a
                    href={doc.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read Guide
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Documentation by Platform</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive guides and references for each of our technology platforms
              </p>
            </motion.div>

            <div className="space-y-12">
              {filteredSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white`}>
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                        <p className="text-gray-300 text-lg">{section.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: itemIndex * 0.1 }}
                          className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {item.title}
                            </h4>
                            {item.featured && (
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <span className={`px-2 py-1 text-xs rounded-full border ${getDifficultyColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {item.time}
                            </span>
                          </div>
                          
                          <a
                            href={item.link}
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                          >
                            Read Documentation
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredSections.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No documentation found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-6 py-2 bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/30 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Additional Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tools, libraries, and resources to help you build amazing applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: 'SDKs & Libraries',
                  description: 'Official SDKs and client libraries for all platforms',
                  link: '/docs/sdks',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: 'API Reference',
                  description: 'Complete API documentation with examples',
                  link: '/docs/api-reference',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: <Play className="w-8 h-8" />,
                  title: 'Video Tutorials',
                  description: 'Step-by-step video guides and walkthroughs',
                  link: '/docs/video-tutorials',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: <Download className="w-8 h-8" />,
                  title: 'Sample Projects',
                  description: 'Ready-to-use sample projects and templates',
                  link: '/docs/sample-projects',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Community Forum',
                  description: 'Connect with developers and get help',
                  link: '/docs/community',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: 'Configuration Guide',
                  description: 'Advanced configuration and optimization',
                  link: '/docs/configuration',
                  color: 'from-cyan-500 to-blue-500'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {resource.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {resource.description}
                  </p>
                  
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you succeed. Get in touch for personalized support 
                and guidance with your implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Get Support
                </a>
                <a
                  href="/docs/getting-started/quick-start"
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Quick Start Guide
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;