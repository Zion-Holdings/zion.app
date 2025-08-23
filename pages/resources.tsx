import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Headphones, Download, ExternalLink, ArrowRight, Brain, Rocket, Shield, Zap, Target, Award, Globe, Users, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2, Palette, Music, Film, BookOpenCheck, Building, MessageCircle, Github, Globe as GlobeIcon, BookOpen as BookOpenIcon, Video as VideoIcon, Headphones as HeadphonesIcon } from 'lucide-react';
import { Layout } from '../components/layout/Layout';

const resourceCategories = [
  {
    id: 'documentation',
    title: 'Documentation',
    description: 'Comprehensive guides, API references, and technical documentation',
    icon: <FileText className="w-12 h-12 text-cyan-400" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    resources: [
      {
        title: 'AI Services API Reference',
        description: 'Complete API documentation for all AI consciousness and automation services',
        type: 'API Docs',
        link: '/docs/ai-services-api',
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: 'Quantum Computing Guide',
        description: 'Introduction to quantum computing concepts and our quantum services',
        type: 'Guide',
        link: '/docs/quantum-computing',
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: 'Autonomous Systems Manual',
        description: 'How to implement and manage autonomous IT infrastructure',
        type: 'Manual',
        link: '/docs/autonomous-systems',
        icon: <Shield className="w-6 h-6" />
      },
      {
        title: 'Security Best Practices',
        description: 'Security guidelines and best practices for enterprise deployments',
        type: 'Guide',
        link: '/docs/security-best-practices',
        icon: <Shield className="w-6 h-6" />
      }
    ]
  },
  {
    id: 'sdks',
    title: 'SDKs & Libraries',
    description: 'Client libraries and development tools for easy integration',
    icon: <Code className="w-12 h-12 text-blue-400" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    resources: [
      {
        title: 'Python SDK',
        description: 'Official Python client library for Zion Tech Group services',
        type: 'SDK',
        link: 'https://github.com/ziontechgroup/python-sdk',
        icon: <Code className="w-6 h-6" />,
        external: true
      },
      {
        title: 'JavaScript SDK',
        description: 'Node.js and browser JavaScript client library',
        type: 'SDK',
        link: 'https://github.com/ziontechgroup/javascript-sdk',
        icon: <Code className="w-6 h-6" />,
        external: true
      },
      {
        title: 'Go SDK',
        description: 'Go client library for high-performance applications',
        type: 'SDK',
        link: 'https://github.com/ziontechgroup/go-sdk',
        icon: <Code className="w-6 h-6" />,
        external: true
      },
      {
        title: 'REST API Client',
        description: 'Lightweight REST API client for any programming language',
        type: 'Client',
        link: '/docs/rest-api-client',
        icon: <Code className="w-6 h-6" />
      }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Tools and utilities to accelerate development and testing',
    icon: <Zap className="w-12 h-12 text-purple-400" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    resources: [
      {
        title: 'AI Model Testing Suite',
        description: 'Comprehensive testing framework for AI models and services',
        type: 'Tool',
        link: '/tools/ai-testing-suite',
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: 'Quantum Simulator',
        description: 'Local quantum computing simulator for development and testing',
        type: 'Tool',
        link: '/tools/quantum-simulator',
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: 'Performance Monitor',
        description: 'Real-time performance monitoring and optimization tools',
        type: 'Tool',
        link: '/tools/performance-monitor',
        icon: <Monitor className="w-6 h-6" />
      },
      {
        title: 'Security Scanner',
        description: 'Automated security vulnerability scanning and assessment',
        type: 'Tool',
        link: '/tools/security-scanner',
        icon: <Shield className="w-6 h-6" />
      }
    ]
  },
  {
    id: 'learning',
    title: 'Learning Resources',
    description: 'Tutorials, courses, and educational content',
    icon: <BookOpen className="w-12 h-12 text-green-400" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    resources: [
      {
        title: 'AI Consciousness Course',
        description: 'Learn about AI consciousness and emotional intelligence',
        type: 'Course',
        link: '/learning/ai-consciousness',
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: 'Quantum Computing Fundamentals',
        description: 'Introduction to quantum computing principles and applications',
        type: 'Course',
        link: '/learning/quantum-computing',
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: 'Autonomous Systems Workshop',
        description: 'Hands-on workshop for building autonomous IT infrastructure',
        type: 'Workshop',
        link: '/learning/autonomous-systems',
        icon: <Shield className="w-6 h-6" />
      },
      {
        title: 'Space Technology Primer',
        description: 'Overview of space technology and resource mining concepts',
        type: 'Guide',
        link: '/learning/space-technology',
        icon: <Globe className="w-6 h-6" />
      }
    ]
  }
];

const featuredResources = [
  {
    title: 'Getting Started Guide',
    description: 'Quick start guide for new users to get up and running with our services',
    type: 'Guide',
    link: '/docs/getting-started',
    icon: <BookOpenIcon className="w-8 h-8" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10'
  },
  {
    title: 'API Playground',
    description: 'Interactive API testing environment to explore our services',
    type: 'Tool',
    link: '/tools/api-playground',
    icon: <Code className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video tutorials for common use cases',
    type: 'Videos',
    link: '/resources/videos',
    icon: <VideoIcon className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other developers and get help from our team',
    type: 'Community',
    link: '/community',
    icon: <Users className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10'
  }
];

const quickLinks = [
  { name: 'API Reference', href: '/docs/api', icon: <FileText className="w-5 h-5" /> },
  { name: 'SDK Downloads', href: '/downloads', icon: <Download className="w-5 h-5" /> },
  { name: 'Support Center', href: '/support', icon: <MessageCircle className="w-5 h-5" /> },
  { name: 'GitHub Repos', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, external: true },
  { name: 'Status Page', href: '/status', icon: <Monitor className="w-5 h-5" /> },
  { name: 'Blog', href: '/blog', icon: <BookOpen className="w-5 h-5" /> }
];

export default function Resources() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Resources Hub
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to build with our revolutionary AI consciousness, quantum computing, 
                and autonomous systems. From documentation to tools, we've got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 px-6 py-3 bg-black/40 border border-gray-800 rounded-full text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                >
                  {link.icon}
                  <span>{link.name}</span>
                  {link.external && <ExternalLink className="w-4 h-4" />}
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Resources</h2>
              <p className="text-xl text-gray-300">Essential tools and guides to get you started</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <a href={resource.link}>
                    <div className={`p-6 rounded-2xl border border-gray-800 bg-black/40 hover:bg-black/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10`}>
                      <div className={`${resource.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                        <div className={resource.color}>{resource.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-cyan-400 font-medium">{resource.type}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Resource Categories</h2>
              <p className="text-xl text-gray-300">Organized resources to help you find what you need</p>
            </motion.div>

            <div className="space-y-12">
              {resourceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 + categoryIndex * 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`${category.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`text-3xl font-bold ${category.color}`}>{category.title}</h3>
                      <p className="text-xl text-gray-300">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <motion.div
                        key={resourceIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 + categoryIndex * 0.2 + resourceIndex * 0.1 }}
                        className="group"
                      >
                        <a
                          href={resource.link}
                          target={resource.external ? '_blank' : undefined}
                          rel={resource.external ? 'noopener noreferrer' : undefined}
                        >
                          <div className="p-6 bg-black/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-black/60">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="text-cyan-400">{resource.icon}</div>
                                <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded-full">
                                  {resource.type}
                                </span>
                              </div>
                              {resource.external && <ExternalLink className="w-4 h-4 text-gray-400" />}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {resource.title}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {resource.description}
                            </p>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community & Support */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Community & Support</h2>
              <p className="text-xl text-gray-300">Connect with developers and get the help you need</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Developer Community',
                  description: 'Join our community of developers building the future with AI and quantum computing',
                  icon: <Users className="w-12 h-12 text-cyan-400" />,
                  link: '/community',
                  features: ['Discussion forums', 'Code sharing', 'Project showcases', 'Networking events']
                },
                {
                  title: 'Technical Support',
                  description: 'Get expert help with implementation, troubleshooting, and optimization',
                  icon: <MessageCircle className="w-12 h-12 text-blue-400" />,
                  link: '/support',
                  features: ['24/7 support', 'Expert engineers', 'Documentation updates', 'Best practices']
                },
                {
                  title: 'Training & Workshops',
                  description: 'Hands-on training sessions and workshops for teams and organizations',
                  icon: <BookOpen className="w-12 h-12 text-purple-400" />,
                  link: '/training',
                  features: ['Custom training', 'Workshop materials', 'Certification programs', 'Team building']
                }
              ].map((community, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{community.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{community.title}</h3>
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">{community.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {community.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={community.link}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Need Something Specific?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you get the resources you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Visit Support Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}