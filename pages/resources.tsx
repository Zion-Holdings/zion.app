import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, BarChart3, Headphones, 
  Search, Download, Play, Star, ArrowRight,
  CheckCircle, Users, Globe, Zap
} from 'lucide-react';

const resourceCategories = [
  {
    title: 'Documentation',
    description: 'Comprehensive technical documentation and guides',
    icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
    href: '/docs',
    features: [
      'API Reference Guides',
      'Integration Tutorials',
      'Best Practices',
      'Code Examples',
      'Architecture Diagrams',
      'Troubleshooting Guides'
    ]
  },
  {
    title: 'Blog & Insights',
    description: 'Latest industry insights and technical articles',
    icon: <FileText className="w-8 h-8 text-purple-400" />,
    href: '/blog',
    features: [
      'Industry Trends',
      'Technical Deep Dives',
      'Case Studies',
      'Expert Interviews',
      'Product Updates',
      'Thought Leadership'
    ]
  },
  {
    title: 'Case Studies',
    description: 'Real-world success stories and implementations',
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    href: '/case-studies',
    features: [
      'Success Metrics',
      'Implementation Details',
      'ROI Analysis',
      'Customer Stories',
      'Technical Challenges',
      'Solutions Applied'
    ]
  },
  {
    title: 'Support Center',
    description: 'Technical support and troubleshooting resources',
    icon: <Headphones className="w-8 h-8 text-blue-400" />,
    href: '/support',
    features: [
      'Knowledge Base',
      'Live Chat Support',
      'Ticket System',
      'Video Tutorials',
      'Community Forum',
      'Priority Support'
    ]
  }
];

const featuredResources = [
  {
    title: 'Getting Started Guide',
    description: 'Complete onboarding guide for new users',
    type: 'Guide',
    href: '/docs/getting-started',
    icon: <Play className="w-5 h-5" />
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    type: 'Documentation',
    href: '/docs/api',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: 'Best Practices',
    description: 'Industry best practices and recommendations',
    type: 'Guide',
    href: '/docs/best-practices',
    icon: <Star className="w-5 h-5" />
  },
  {
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    type: 'Support',
    href: '/support/troubleshooting',
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const quickLinks = [
  { name: 'Pricing', href: '/pricing', icon: <Star className="w-4 h-4" /> },
  { name: 'Services', href: '/services', icon: <Zap className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Users className="w-4 h-4" /> },
  { name: 'About', href: '/about', icon: <Globe className="w-4 h-4" /> }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive knowledge base, documentation, and support resources to help you succeed with Zion Tech Group solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, documentation, and support..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Support
              </Link>
              <Link 
                href="/docs"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Browse Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential resources to get you started and help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  {resource.icon}
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                <Link 
                  href={resource.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                >
                  Access Resource <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organized resources to help you find exactly what you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={category.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Explore {category.title} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quick Access
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fast access to the most important pages and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <Link 
                  href={link.href}
                  className="block p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our support team is here to help you find the resources you need
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link 
                href="/support"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Support Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}