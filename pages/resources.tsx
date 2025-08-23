import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Users, MessageCircle, GraduationCap, Star, Brain, Atom, Rocket, Shield } from 'lucide-react';
import Link from 'next/link';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      name: 'Documentation',
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      description: 'Comprehensive technical documentation and guides',
      resources: [
        { name: 'API Documentation', href: '/api-docs', description: 'Complete API reference and examples' },
        { name: 'Developer Resources', href: '/developer-resources', description: 'Tools and resources for developers' },
        { name: 'Technical Guides', href: '/docs', description: 'Step-by-step implementation guides' },
        { name: 'Integration Examples', href: '/api-documentation', description: 'Real-world integration examples' }
      ]
    },
    {
      name: 'Blog & Insights',
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      description: 'Latest insights, trends, and thought leadership',
      resources: [
        { name: 'AI Automation Trends 2025', href: '/blog/ai-automation-trends-2025', description: 'Latest trends in AI automation' },
        { name: 'Future of Work', href: '/blog/future-of-work', description: 'How AI is reshaping the workplace' },
        { name: 'AI Ethics & Automation', href: '/blog/ai-ethics-automation', description: 'Ethical considerations in AI' },
        { name: 'Cloud Native Automation', href: '/blog/cloud-native-automation', description: 'Modern cloud automation strategies' },
        { name: 'Performance Optimization', href: '/blog/performance-optimization', description: 'Tips for optimal performance' }
      ]
    },
    {
      name: 'Case Studies',
      icon: <Users className="w-8 h-8 text-purple-400" />,
      description: 'Real-world success stories and implementations',
      resources: [
        { name: 'Enterprise AI Transformation', href: '/case-studies', description: 'Large-scale AI implementations' },
        { name: 'Quantum Computing Success', href: '/case-studies', description: 'Quantum computing breakthroughs' },
        { name: 'Space Technology Applications', href: '/case-studies', description: 'Space tech innovations' },
        { name: 'Cybersecurity Solutions', href: '/case-studies', description: 'Security transformation stories' }
      ]
    },
    {
      name: 'Support & Training',
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      description: 'Technical support and learning resources',
      resources: [
        { name: 'Technical Support', href: '/support', description: 'Get help with technical issues' },
        { name: 'Training Programs', href: '/training', description: 'Learn from our experts' },
        { name: 'Webinars', href: '/webinars', description: 'Live educational sessions' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' }
      ]
    },
    {
      name: 'Research & Development',
      icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
      description: 'Cutting-edge research and innovation insights',
      resources: [
        { name: 'AI Research', href: '/research-development', description: 'Latest AI research findings' },
        { name: 'Quantum Computing Research', href: '/research-development', description: 'Quantum computing breakthroughs' },
        { name: 'Space Technology Research', href: '/research-development', description: 'Space exploration innovations' },
        { name: 'Emerging Technologies', href: '/emerging-tech', description: 'Future technology trends' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Consciousness Evolution 2029',
      description: 'Revolutionary AI consciousness development platform',
      href: '/ai-consciousness-evolution-2029',
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      category: 'AI & Machine Learning'
    },
    {
      title: 'Quantum Neural Network Platform',
      description: 'Advanced quantum neural computing solutions',
      href: '/quantum-neural-network-platform',
      icon: <Atom className="w-12 h-12 text-blue-400" />,
      category: 'Quantum Computing'
    },
    {
      title: 'Space Resource Mining Platform',
      description: 'Cutting-edge space exploration technology',
      href: '/space-resource-mining-platform',
      icon: <Rocket className="w-12 h-12 text-purple-400" />,
      category: 'Space Technology'
    },
    {
      title: 'Zero Trust Security Platform',
      description: 'Advanced enterprise security architecture',
      href: '/zero-trust-security-platform',
      icon: <Shield className="w-12 h-12 text-green-400" />,
      category: 'Enterprise Security'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="w-16 h-16 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Resources
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Access comprehensive documentation, insights, case studies, and support to help you 
                maximize the value of Zion Tech Group's technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative solutions that are transforming industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={resource.href}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full">
                      <div className="flex justify-center mb-4">{resource.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 text-sm text-center mb-3">
                        {resource.description}
                      </p>
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {resource.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Resource Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by category to help you 
                find exactly what you need.
              </p>
            </motion.div>

            <div className="space-y-16">
              {resourceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <motion.div
                        key={resource.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: resourceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={resource.href}>
                          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full">
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                              {resource.name}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {resource.description}
                            </p>
                            <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                              Access Resource
                              <Star className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quick Access</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get immediate access to the most commonly requested resources and support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Contact Support', href: '/contact', icon: <MessageCircle className="w-8 h-8" />, color: 'from-cyan-500 to-blue-600' },
                { name: 'View Services', href: '/services', icon: <Star className="w-8 h-8" />, color: 'from-blue-500 to-purple-600' },
                { name: 'Check Pricing', href: '/pricing', icon: <BookOpen className="w-8 h-8" />, color: 'from-purple-500 to-pink-600' },
                { name: 'Read Blog', href: '/blog', icon: <FileText className="w-8 h-8" />, color: 'from-pink-500 to-red-600' },
                { name: 'Case Studies', href: '/case-studies', icon: <Users className="w-8 h-8" />, color: 'from-red-500 to-orange-600' },
                { name: 'Training', href: '/training', icon: <GraduationCap className="w-8 h-8" />, color: 'from-orange-500 to-yellow-600' }
              ].map((quickAccess, index) => (
                <motion.div
                  key={quickAccess.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={quickAccess.href}>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full text-center">
                      <div className="flex justify-center mb-4 text-white group-hover:text-cyan-400 transition-colors">
                        {quickAccess.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {quickAccess.name}
                      </h3>
                      <button className={`px-6 py-3 bg-gradient-to-r ${quickAccess.color} text-white font-semibold rounded-lg hover:scale-105 transition-transform`}>
                        Access Now
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Finding Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you find the right resources and get the most 
                out of our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Contact Support
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    Explore Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;