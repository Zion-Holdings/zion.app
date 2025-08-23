import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  FileText, 
  Code, 
  GraduationCap,
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides, API references, and technical documentation for all our services and solutions.',
      icon: <BookOpen className="w-12 h-12" />,
      href: '/resources/documentation',
      color: 'from-blue-500 to-cyan-500',
      count: '500+',
      features: ['API References', 'Integration Guides', 'Best Practices', 'Code Examples']
    },
    {
      title: 'Webinars',
      description: 'Live and recorded webinars covering the latest technology trends, product updates, and industry insights.',
      icon: <Play className="w-12 h-12" />,
      href: '/webinars',
      color: 'from-purple-500 to-pink-500',
      count: '100+',
      features: ['Live Sessions', 'Expert Speakers', 'Q&A Sessions', 'Recordings Available']
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples of how our solutions have transformed businesses across various industries.',
      icon: <FileText className="w-12 h-12" />,
      href: '/resources/case-studies',
      color: 'from-green-500 to-emerald-500',
      count: '200+',
      features: ['Success Stories', 'ROI Metrics', 'Implementation Details', 'Industry Insights']
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with endpoints, parameters, authentication, and code samples.',
      icon: <Code className="w-12 h-12" />,
      href: '/resources/api',
      color: 'from-yellow-500 to-orange-500',
      count: '50+',
      features: ['REST APIs', 'GraphQL', 'SDKs', 'Testing Tools']
    },
    {
      title: 'Training',
      description: 'Comprehensive training programs and certifications to help your team master our technologies.',
      icon: <GraduationCap className="w-12 h-12" />,
      href: '/training',
      color: 'from-red-500 to-pink-500',
      count: '25+',
      features: ['Online Courses', 'Certifications', 'Workshops', 'Hands-on Labs']
    }
  ];

  const featuredResources = [
    {
      title: 'Getting Started with AI Solutions',
      type: 'Guide',
      duration: '15 min read',
      rating: 4.9,
      views: '2.5k',
      href: '/resources/documentation/ai-getting-started'
    },
    {
      title: 'Quantum Computing Fundamentals',
      type: 'Webinar',
      duration: '45 min',
      rating: 4.8,
      views: '1.8k',
      href: '/webinars/quantum-computing-fundamentals'
    },
    {
      title: 'Enterprise Security Implementation',
      type: 'Case Study',
      duration: '10 min read',
      rating: 4.7,
      views: '3.2k',
      href: '/resources/case-studies/enterprise-security'
    }
  ];

  const stats = [
    { label: 'Total Resources', value: '1,000+', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Active Users', value: '50k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Monthly Views', value: '100k+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Average Rating', value: '4.8/5', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Resources - Zion Tech Group | Documentation, Webinars, Case Studies & More" 
          description="Access comprehensive resources including documentation, webinars, case studies, API references, and training materials to help you succeed with Zion Tech Group solutions." 
          canonical="https://ziontechgroup.com/resources/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Resources Hub
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access comprehensive documentation, webinars, case studies, and training materials to accelerate your success with our revolutionary technology solutions.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources, documentation, webinars..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Resource Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by category to find exactly what you need.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{category.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{category.description}</p>
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {category.count} Resources
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={category.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Explore {category.title} <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and highly-rated resources to get started quickly.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {resource.type}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-white">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {resource.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {resource.views}
                    </div>
                  </div>
                  
                  <a
                    href={resource.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Need Help Getting Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you navigate our resources and find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support/help"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default ResourcesPage;