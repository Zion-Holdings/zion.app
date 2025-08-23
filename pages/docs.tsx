import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  Code, 
  Database, 
  Server, 
  Shield,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FileText,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Play className="w-5 h-5" />,
      color: 'text-blue-400',
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group solutions in minutes',
          difficulty: 'Beginner',
          time: '5 min read',
          href: '/docs/quick-start'
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          difficulty: 'Beginner',
          time: '10 min read',
          href: '/docs/installation'
        },
        {
          title: 'Configuration Basics',
          description: 'Learn the essential configuration options',
          difficulty: 'Beginner',
          time: '8 min read',
          href: '/docs/configuration'
        }
      ]
    },
    {
      id: 'ai-platforms',
      title: 'AI Platforms',
      icon: <Zap className="w-5 h-5" />,
      color: 'text-purple-400',
      articles: [
        {
          title: 'AI Consciousness Evolution Platform',
          description: 'Complete guide to our revolutionary AI consciousness platform',
          difficulty: 'Advanced',
          time: '25 min read',
          href: '/docs/ai-consciousness'
        },
        {
          title: 'AI Autonomous Research Assistant',
          description: 'How to leverage autonomous AI research capabilities',
          difficulty: 'Intermediate',
          time: '20 min read',
          href: '/docs/ai-research'
        },
        {
          title: 'AI Emotional Intelligence Training',
          description: 'Implementing emotional intelligence in AI systems',
          difficulty: 'Advanced',
          time: '30 min read',
          href: '/docs/ai-emotional-intelligence'
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: <Server className="w-5 h-5" />,
      color: 'text-cyan-400',
      articles: [
        {
          title: 'Quantum Cybersecurity Sentinel',
          description: 'Implementing quantum-resistant security solutions',
          difficulty: 'Advanced',
          time: '35 min read',
          href: '/docs/quantum-cybersecurity'
        },
        {
          title: 'Quantum Supply Chain Optimization',
          description: 'Optimizing supply chains with quantum algorithms',
          difficulty: 'Intermediate',
          time: '22 min read',
          href: '/docs/quantum-supply-chain'
        },
        {
          title: 'Quantum Edge Computing Platform',
          description: 'Building quantum-enhanced edge computing solutions',
          difficulty: 'Advanced',
          time: '28 min read',
          href: '/docs/quantum-edge-computing'
        }
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology',
      icon: <Shield className="w-5 h-5" />,
      color: 'text-green-400',
      articles: [
        {
          title: 'Space Resource Mining Platform',
          description: 'Autonomous space resource identification and extraction',
          difficulty: 'Advanced',
          time: '40 min read',
          href: '/docs/space-mining'
        },
        {
          title: 'AI-Powered Space Technology',
          description: 'Integrating AI with space exploration systems',
          difficulty: 'Intermediate',
          time: '25 min read',
          href: '/docs/ai-space-tech'
        }
      ]
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      icon: <Database className="w-5 h-5" />,
      color: 'text-orange-400',
      articles: [
        {
          title: 'Autonomous Cloud Orchestrator',
          description: 'Managing cloud infrastructure with autonomous systems',
          difficulty: 'Intermediate',
          time: '20 min read',
          href: '/docs/cloud-orchestrator'
        },
        {
          title: 'Zero Trust Security Platform',
          description: 'Implementing comprehensive zero trust security',
          difficulty: 'Advanced',
          time: '30 min read',
          href: '/docs/zero-trust'
        },
        {
          title: 'AI-Powered DevOps Platform',
          description: 'Automating development and operations with AI',
          difficulty: 'Intermediate',
          time: '18 min read',
          href: '/docs/ai-devops'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code className="w-5 h-5" />,
      color: 'text-yellow-400',
      articles: [
        {
          title: 'REST API Documentation',
          description: 'Complete API reference with examples',
          difficulty: 'Intermediate',
          time: '45 min read',
          href: '/docs/api-rest'
        },
        {
          title: 'GraphQL API Guide',
          description: 'Using our GraphQL API for advanced queries',
          difficulty: 'Advanced',
          time: '35 min read',
          href: '/docs/api-graphql'
        },
        {
          title: 'Webhook Integration',
          description: 'Setting up webhooks for real-time updates',
          difficulty: 'Intermediate',
          time: '15 min read',
          href: '/docs/webhooks'
        }
      ]
    }
  ];

  const filteredSections = documentationSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.articles.some(article => 
                           article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    return matchesSearch;
  });

  const popularArticles = [
    {
      title: 'AI Consciousness Evolution: A Complete Guide',
      description: 'Master the fundamentals of AI consciousness development',
      views: 15420,
      rating: 4.9,
      href: '/docs/ai-consciousness-guide'
    },
    {
      title: 'Quantum Security Implementation',
      description: 'Step-by-step quantum cybersecurity setup',
      views: 12850,
      rating: 4.8,
      href: '/docs/quantum-security-implementation'
    },
    {
      title: 'Autonomous Systems Architecture',
      description: 'Building self-managing infrastructure systems',
      views: 11230,
      rating: 4.7,
      href: '/docs/autonomous-architecture'
    }
  ];

  return (
    <Layout>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent"
            >
              Documentation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive guides, tutorials, and API references for all Zion Tech Group solutions.
            </motion.p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>
              <p className="text-gray-400">Most viewed and highly rated documentation</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span>{article.views.toLocaleString()} views</span>
                    <div className="flex items-center gap-1">
                      <span>★</span>
                      <span>{article.rating}</span>
                    </div>
                  </div>
                  
                  <a
                    href={article.href}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Documentation Sections</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Organized by topic and difficulty level for easy navigation
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-700/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className={section.color}>
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700/50 bg-gray-900/30"
                    >
                      <div className="p-6 space-y-4">
                        {section.articles.map((article, articleIndex) => (
                          <div
                            key={articleIndex}
                            className="p-4 rounded-lg bg-gray-800/30 border border-gray-600/30 hover:border-indigo-500/50 transition-all duration-300"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white mb-2">{article.title}</h4>
                                <p className="text-gray-300 mb-3">{article.description}</p>
                                
                                <div className="flex items-center gap-4 text-sm">
                                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full">
                                    {article.difficulty}
                                  </span>
                                  <span className="text-gray-400 flex items-center gap-1">
                                    <FileText className="w-3 h-3" />
                                    {article.time}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2 ml-4">
                                <a
                                  href={article.href}
                                  className="p-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                                  title="Read Article"
                                >
                                  <BookOpen className="w-4 h-4" />
                                </a>
                                <a
                                  href={`${article.href}/download`}
                                  className="p-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                                  title="Download PDF"
                                >
                                  <Download className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quick Links</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Fast access to commonly needed resources
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'API Playground',
                  description: 'Test our APIs interactively',
                  icon: <Code className="w-8 h-8" />,
                  color: 'text-blue-400',
                  href: '/docs/api-playground'
                },
                {
                  title: 'SDK Downloads',
                  description: 'Get our official SDKs and libraries',
                  icon: <Download className="w-8 h-8" />,
                  color: 'text-green-400',
                  href: '/docs/sdks'
                },
                {
                  title: 'Code Examples',
                  description: 'Ready-to-use code snippets',
                  icon: <FileText className="w-8 h-8" />,
                  color: 'text-purple-400',
                  href: '/docs/examples'
                },
                {
                  title: 'Community Forum',
                  description: 'Connect with other developers',
                  icon: <ExternalLink className="w-8 h-8" />,
                  color: 'text-orange-400',
                  href: '/community'
                }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 text-center group"
                >
                  <div className={`flex justify-center mb-4 ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </motion.a>
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
              <h2 className="text-4xl font-bold text-white mb-6">Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Contact Support
                </a>
                <a
                  href="/community"
                  className="px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Join Community
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