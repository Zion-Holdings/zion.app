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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
import Link from 'next/link';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      featured: true
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Resources Hub
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Access comprehensive documentation, tutorials, case studies, and insights 
                to help you succeed with Zion Tech Group technologies.
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
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
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
