import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, Database, Server, Shield, Brain, Atom, Rocket,
  FileText, Video, Headphones, HelpCircle, Search, Download,
  ExternalLink, ArrowRight, BookOpenCheck, Settings, Cpu, Globe
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';

const documentationCategories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and tutorials for new users',
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-500',
    links: [
      { name: 'Quick Start Guide', href: '/docs/quick-start', description: 'Get up and running in minutes' },
      { name: 'Installation Guide', href: '/docs/installation', description: 'Step-by-step installation instructions' },
      { name: 'First Project', href: '/docs/first-project', description: 'Build your first project with Zion Tech' },
      { name: 'API Overview', href: '/docs/api-overview', description: 'Understanding our API structure' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Documentation for AI services and ML platforms',
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Platform', href: '/docs/ai-consciousness', description: 'AI consciousness evolution guide' },
      { name: 'Machine Learning Models', href: '/docs/ml-models', description: 'Pre-trained models and custom training' },
      { name: 'Neural Network API', href: '/docs/neural-network-api', description: 'Building and deploying neural networks' },
      { name: 'AI Ethics Framework', href: '/docs/ai-ethics', description: 'Ethical AI development guidelines' }
    ]
  },
  {
    title: 'Quantum Computing',
    description: 'Quantum computing solutions and algorithms',
    icon: <Atom className="w-8 h-8 text-blue-400" />,
    color: 'from-blue-500 to-indigo-500',
    links: [
      { name: 'Quantum Algorithms', href: '/docs/quantum-algorithms', description: 'Quantum algorithm implementations' },
      { name: 'Quantum Security', href: '/docs/quantum-security', description: 'Quantum-resistant cryptography' },
      { name: 'Quantum Neural Networks', href: '/docs/quantum-neural', description: 'Quantum neural network platform' },
      { name: 'Quantum Materials', href: '/docs/quantum-materials', description: 'Materials discovery platform' }
    ]
  },
  {
    title: 'Enterprise Solutions',
    description: 'Enterprise IT infrastructure and security',
    icon: <Shield className="w-8 h-8 text-green-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'Zero Trust Security', href: '/docs/zero-trust', description: 'Zero trust security implementation' },
      { name: 'SOC 2 Compliance', href: '/docs/soc2-compliance', description: 'Compliance automation guide' },
      { name: 'IT Asset Management', href: '/docs/it-assets', description: 'AI-powered asset discovery' },
      { name: 'Cybersecurity Platform', href: '/docs/cybersecurity', description: 'Advanced threat protection' }
    ]
  },
  {
    title: 'Space Technology',
    description: 'Space exploration and resource mining',
    icon: <Globe className="w-8 h-8 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'Space Resource Mining', href: '/docs/space-mining', description: 'Resource extraction platform' },
      { name: 'Satellite Technology', href: '/docs/satellite-tech', description: 'Satellite communication systems' },
      { name: 'Space AI Platform', href: '/docs/space-ai', description: 'AI-powered space exploration' },
      { name: 'Orbital Mechanics', href: '/docs/orbital-mechanics', description: 'Space navigation algorithms' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Business automation and productivity tools',
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    color: 'from-indigo-500 to-purple-500',
    links: [
      { name: 'Content Automation', href: '/docs/content-automation', description: 'AI content generation platform' },
      { name: 'HR Analytics', href: '/docs/hr-analytics', description: 'Intelligent HR insights' },
      { name: 'Supply Chain Optimization', href: '/docs/supply-chain', description: 'AI-powered logistics' },
      { name: 'Financial Planning', href: '/docs/financial-planning', description: 'AI financial advisor' }
    ]
  }
];

const quickLinks = [
  { name: 'API Reference', href: '/docs/api', icon: <Code className="w-5 h-5" /> },
  { name: 'SDKs & Libraries', href: '/docs/sdks', icon: <Download className="w-5 h-5" /> },
  { name: 'Video Tutorials', href: '/docs/tutorials', icon: <Video className="w-5 h-5" /> },
  { name: 'Community Forum', href: '/docs/community', icon: <HelpCircle className="w-5 h-5" /> },
  { name: 'Release Notes', href: '/docs/releases', icon: <BookOpenCheck className="w-5 h-5" /> },
  { name: 'Support Center', href: '/support', icon: <Headphones className="w-5 h-5" /> }
];

export default function Documentation() {
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
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive guides, tutorials, and reference materials for all Zion Tech Group platforms and services
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
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
              <p className="text-gray-300">Popular documentation sections and resources</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 text-center group"
                  >
                    <div className="flex justify-center mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
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
              <p className="text-xl text-gray-300">Organized by technology area and use case</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="block p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-sm text-gray-400 mt-1">{link.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Support Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}