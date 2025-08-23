import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Award, 
  Download, 
  ExternalLink,
  ArrowRight,
  ChevronRight,
  Search,
  Filter,
  Star,
  Clock,
  User,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Code
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Getting Started Guide',
          description: 'Complete setup and configuration guide',
          type: 'Guide',
          difficulty: 'Beginner',
          time: '15 min',
          link: '/docs/getting-started'
        },
        {
          title: 'API Reference',
          description: 'Complete API documentation with examples',
          type: 'Reference',
          difficulty: 'Intermediate',
          time: '30 min',
          link: '/docs/api'
        },
        {
          title: 'SDK Documentation',
          description: 'Client libraries and SDK guides',
          type: 'Reference',
          difficulty: 'Intermediate',
          time: '20 min',
          link: '/docs/sdks'
        }
      ]
    },
    {
      title: 'Blog & Insights',
      description: 'Latest articles, insights, and industry trends',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Consciousness Deep Dive',
          description: 'Technical exploration of AI consciousness',
          type: 'Article',
          difficulty: 'Advanced',
          time: '12 min',
          link: '/blog/ai-consciousness'
        },
        {
          title: 'Quantum Computing Trends',
          description: 'Latest developments in quantum technology',
          type: 'Article',
          difficulty: 'Intermediate',
          time: '8 min',
          link: '/blog/quantum-trends'
        },
        {
          title: 'Space Technology Revolution',
          description: 'Innovations in space exploration',
          type: 'Article',
          difficulty: 'Intermediate',
          time: '10 min',
          link: '/blog/space-revolution'
        }
      ]
    },
    {
      title: 'Webinars & Training',
      description: 'Educational content and live sessions',
      icon: Video,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'AI Implementation Workshop',
          description: 'Hands-on AI integration workshop',
          type: 'Webinar',
          difficulty: 'Intermediate',
          time: '90 min',
          link: '/webinars/ai-workshop'
        },
        {
          title: 'Quantum Security Training',
          description: 'Quantum-resistant security practices',
          type: 'Training',
          difficulty: 'Advanced',
          time: '120 min',
          link: '/training/quantum-security'
        },
        {
          title: 'Space Data Analysis',
          description: 'Working with satellite and space data',
          type: 'Webinar',
          difficulty: 'Intermediate',
          time: '60 min',
          link: '/webinars/space-data'
        }
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real-world implementations and success stories',
      icon: Award,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'Healthcare AI Transformation',
          description: 'AI-powered patient care system',
          type: 'Case Study',
          difficulty: 'All Levels',
          time: '15 min',
          link: '/case-studies/healthcare-ai'
        },
        {
          title: 'Financial Services Innovation',
          description: 'Quantum computing in fintech',
          type: 'Case Study',
          difficulty: 'All Levels',
          time: '12 min',
          link: '/case-studies/fintech-quantum'
        },
        {
          title: 'Manufacturing IoT Success',
          description: 'Smart factory implementation',
          type: 'Case Study',
          difficulty: 'All Levels',
          time: '18 min',
          link: '/case-studies/manufacturing-iot'
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Consciousness Platform Guide',
      description: 'Complete guide to implementing AI consciousness in your applications',
      category: 'Documentation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      link: '/docs/ai-consciousness'
    },
    {
      title: 'Quantum Computing Primer',
      description: 'Essential concepts and practical applications of quantum computing',
      category: 'Guide',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: '/docs/quantum-primer'
    },
    {
      title: 'Space Technology Handbook',
      description: 'Comprehensive guide to space technology and satellite solutions',
      category: 'Reference',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      link: '/docs/space-handbook'
    }
  ];

  const quickLinks = [
    { label: 'API Documentation', href: '/docs/api', icon: Code },
    { label: 'SDK Downloads', href: '/docs/sdks', icon: Download },
    { label: 'Video Tutorials', href: '/docs/tutorials', icon: Video },
    { label: 'Community Forum', href: '/community', icon: User },
    { label: 'Support Center', href: '/support', icon: Shield },
    { label: 'Developer Blog', href: '/blog', icon: BookOpen }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Resources Hub
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Access comprehensive documentation, tutorials, case studies, and insights 
                to help you succeed with Zion Tech Group technologies.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources, guides, or topics..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Quick Access
              </h2>
              <p className="text-xl text-gray-300">
                Popular resources and frequently accessed content
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center group"
                >
                  <link.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these essential guides and resources to get up and running quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                      {resource.category}
                    </span>
                  </div>
                  
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by topic and type.
              </p>
            </motion.div>

            <div className="space-y-12">
              {resourceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === 'Guide' ? 'bg-blue-500/20 text-blue-400' :
                            item.type === 'Reference' ? 'bg-purple-500/20 text-purple-400' :
                            item.type === 'Article' ? 'bg-green-500/20 text-green-400' :
                            item.type === 'Webinar' ? 'bg-orange-500/20 text-orange-400' :
                            item.type === 'Training' ? 'bg-red-500/20 text-red-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {item.type}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {item.difficulty}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.time}
                          </div>
                          <a
                            href={item.link}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Help Finding Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team is here to help you find the right resources and get the most 
                out of our technology platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Browse Documentation
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