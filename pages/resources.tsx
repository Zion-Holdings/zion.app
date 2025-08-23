import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Video, Globe, ArrowRight,
  Brain, Atom, Shield, Rocket, Users, Target
} from 'lucide-react';
import Link from 'next/link';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Blog',
      description: 'Technology insights, industry updates, and thought leadership articles',
      href: '/blog',
      color: 'from-blue-500 to-cyan-500',
      featured: true
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
      description: 'Real-world success stories and implementation examples',
      href: '/case-studies',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const featuredResources = [
    {
      title: 'AI Consciousness Evolution Guide',
      description: 'Comprehensive guide to understanding and implementing AI consciousness',
      category: 'AI & Machine Learning',
      href: '/ai-consciousness-evolution-2043',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles and applications',
      category: 'Quantum Technology',
      href: '/quantum-services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices for modern organizations',
      category: 'Security',
      href: '/cybersecurity',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Resources - Zion Tech Group Knowledge Hub"
        description="Access comprehensive resources including blog posts, documentation, webinars, and case studies from Zion Tech Group."
        keywords={["resources", "blog", "documentation", "webinars", "case studies", "knowledge hub"]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access comprehensive knowledge, insights, and resources to accelerate your 
              technology journey with Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources organized by category
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
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
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
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
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Need More Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for personalized resources and guidance
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;