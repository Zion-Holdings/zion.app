import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, Database, Shield, Zap, 
  Brain, Rocket, Users, FileText, Video, Download,
  Search, ArrowRight, Star, CheckCircle, Clock,
  Globe, Settings, Cpu
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const documentationCategories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and tutorials for new users',
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20',
    guides: [
      { name: 'Quick Start Guide', href: '/docs/quick-start', duration: '15 min', level: 'Beginner' },
      { name: 'Installation Guide', href: '/docs/installation', duration: '10 min', level: 'Beginner' },
      { name: 'First Project Setup', href: '/docs/first-project', duration: '20 min', level: 'Beginner' },
      { name: 'Basic Configuration', href: '/docs/configuration', duration: '25 min', level: 'Beginner' }
    ]
  },
  {
    title: 'API Documentation',
    description: 'Complete API reference and integration guides',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20',
    guides: [
      { name: 'API Overview', href: '/api-documentation', duration: '30 min', level: 'Intermediate' },
      { name: 'Authentication', href: '/docs/auth', duration: '20 min', level: 'Intermediate' },
      { name: 'Rate Limits', href: '/docs/rate-limits', duration: '15 min', level: 'Intermediate' },
      { name: 'Error Handling', href: '/docs/error-handling', duration: '25 min', level: 'Intermediate' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'AI platform documentation and ML model guides',
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20',
    guides: [
      { name: 'AI Platform Overview', href: '/docs/ai-platform', duration: '45 min', level: 'Intermediate' },
      { name: 'Model Training', href: '/docs/model-training', duration: '60 min', level: 'Advanced' },
      { name: 'API Integration', href: '/docs/ai-api', duration: '30 min', level: 'Intermediate' },
      { name: 'Best Practices', href: '/docs/ai-best-practices', duration: '40 min', level: 'Advanced' }
    ]
  },
  {
    title: 'Quantum Computing',
    description: 'Quantum platform documentation and algorithms',
    icon: <Zap className="w-8 h-8 text-green-400" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20',
    guides: [
      { name: 'Quantum Platform Intro', href: '/docs/quantum-platform', duration: '50 min', level: 'Advanced' },
      { name: 'Quantum Algorithms', href: '/docs/quantum-algorithms', duration: '90 min', level: 'Expert' },
      { name: 'Quantum Simulators', href: '/docs/quantum-simulators', duration: '40 min', level: 'Advanced' },
      { name: 'Quantum Security', href: '/docs/quantum-security', duration: '60 min', level: 'Expert' }
    ]
  },
  {
    title: 'Enterprise Solutions',
    description: 'Enterprise deployment and configuration guides',
    icon: <Shield className="w-8 h-8 text-orange-400" />,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/20',
    guides: [
      { name: 'Enterprise Setup', href: '/docs/enterprise-setup', duration: '120 min', level: 'Advanced' },
      { name: 'Security Configuration', href: '/docs/security-config', duration: '90 min', level: 'Advanced' },
      { name: 'High Availability', href: '/docs/ha-setup', duration: '180 min', level: 'Expert' },
      { name: 'Monitoring & Logging', href: '/docs/monitoring', duration: '60 min', level: 'Intermediate' }
    ]
  },
  {
    title: 'Developer Tools',
    description: 'SDKs, CLI tools, and development utilities',
    icon: <Code className="w-8 h-8 text-pink-400" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    borderColor: 'border-pink-400/20',
    guides: [
      { name: 'SDK Documentation', href: '/docs/sdk', duration: '45 min', level: 'Intermediate' },
      { name: 'CLI Reference', href: '/docs/cli', duration: '30 min', level: 'Intermediate' },
      { name: 'IDE Extensions', href: '/docs/ide-extensions', duration: '20 min', level: 'Beginner' },
      { name: 'Debugging Tools', href: '/docs/debugging', duration: '35 min', level: 'Intermediate' }
    ]
  }
];

const quickLinks = [
  { name: 'API Reference', href: '/api-documentation', icon: <Globe className="w-5 h-5" /> },
  { name: 'SDK Downloads', href: '/docs/sdk-downloads', icon: <Download className="w-5 h-5" /> },
  { name: 'Code Examples', href: '/docs/examples', icon: <Code className="w-5 h-5" /> },
  { name: 'Video Tutorials', href: '/docs/videos', icon: <Video className="w-5 h-5" /> },
  { name: 'Community Forum', href: '/community', icon: <Users className="w-5 h-5" /> },
  { name: 'Support Center', href: '/support', icon: <Users className="w-5 h-5" /> }
];

const recentUpdates = [
  { title: 'AI Platform v2.1 Released', date: '2025-08-15', type: 'Release Notes' },
  { title: 'New Quantum Algorithms Guide', date: '2025-08-10', type: 'Documentation' },
  { title: 'API Rate Limiting Updated', date: '2025-08-05', type: 'API Changes' },
  { title: 'Enterprise Security Whitepaper', date: '2025-08-01', type: 'Resources' }
];

export default function DocsPage() {
  return (
    <Layout>
      <Head>
        <title>Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI, quantum, and enterprise technology platforms. Get started with guides, API references, and tutorials." />
        <meta name="keywords" content="documentation, API, guides, tutorials, Zion Tech Group, AI, quantum computing" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>

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
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Everything you need to integrate and build with Zion Tech Group's revolutionary AI, quantum, and enterprise technology platforms.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quick Access</h2>
              <p className="text-gray-300">Get started quickly with our most popular resources</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group"
                >
                  <div className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Documentation Categories</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by technology area and skill level
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className={`p-6 rounded-xl border ${category.borderColor} ${category.bgColor} backdrop-blur-sm`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {category.icon}
                    <h3 className={`text-xl font-bold ${category.color}`}>{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.guides.map((guide) => (
                      <a
                        key={guide.name}
                        href={guide.href}
                        className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {guide.name}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{guide.duration}</span>
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            guide.level === 'Beginner' ? 'bg-green-400/20 text-green-400' :
                            guide.level === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                            guide.level === 'Advanced' ? 'bg-orange-400/20 text-orange-400' :
                            'bg-red-400/20 text-red-400'
                          }`}>
                            {guide.level}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Recent Updates</h2>
              <p className="text-gray-300">Stay up to date with the latest documentation changes and releases</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentUpdates.map((update, index) => (
                <motion.div
                  key={update.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-semibold">{update.title}</h3>
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                      {update.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{update.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you succeed with our platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/support" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Get Support
                </a>
                <a href="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Contact Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}