import React from 'react';
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
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
import Link from 'next/link';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      featured: true
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Technical documentation, API references, and implementation guides',
      href: '/docs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Webinars',
      description: 'Educational webinars and training sessions on cutting-edge technologies',
      href: '/webinars',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
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
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
      ]
    }
  ];

  const quickLinks = [
    { label: 'API Documentation', href: '/docs/api', icon: Code },
    { label: 'SDK Downloads', href: '/docs/sdks', icon: Download },
    { label: 'Video Tutorials', href: '/docs/tutorials', icon: Video },
    { label: 'Community Forum', href: '/community', icon: User },
    { label: 'Support Center', href: '/support', icon: Shield },
    { label: 'Developer Blog', href: '/blog', icon: BookOpen }
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
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
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
              </p>
            </header>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(resources).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources[activeTab].map((resource, index) => renderResourceCard(resource, index))}
            </div>
            
            {/* Additional Resources Section */}
            <section className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Join thousands of developers and organizations already building the future with autonomous systems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl border border-cyan-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Free Learning Path</h3>
                  <p className="text-white/80 mb-4">
                    Start with our comprehensive learning path designed for beginners
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Start Learning
                  </Link>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl border border-purple-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Join Community</h3>
                  <p className="text-white/80 mb-4">
                    Connect with like-minded professionals and share knowledge
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  >
                    Join Now
                  </Link>
                </div>
                
                <div className="text-center p-8 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl border border-green-400/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Get Support</h3>
                  <p className="text-white/80 mb-4">
                    Need help? Our experts are here to support your automation journey
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these essential guides and resources to get up and running quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
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
                  </a>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
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
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">{category.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Explore</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and valuable resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={resource.href}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${resource.color} text-white rounded-full`}>
                            {resource.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-6">{resource.description}</p>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-medium">Read More</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
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
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
