import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, User, Tag, ArrowRight,
  Search, Filter, TrendingUp, Lightbulb, Zap,
  Brain, Rocket, Shield, Globe, ChevronRight,
  CheckCircle, Star, Award, Target, Users,
  Download, ExternalLink, FileText, Video, Play
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const ResourcesPage: React.FC = () => {
  const featuredResources = [
    {
      id: 1,
      title: 'AI Transformation Guide 2025',
      type: 'White Paper',
      category: 'AI & Machine Learning',
      description: 'Comprehensive guide to implementing AI solutions in enterprise environments',
      author: 'Zion Tech Group AI Team',
      date: '2025-01-15',
      readTime: '45 min read',
      downloads: '2,450',
      image: '🧠',
      featured: true,
      link: '/resources/ai-transformation-guide-2025'
    },
    {
      id: 2,
      title: 'Quantum Computing Roadmap',
      type: 'Research Paper',
      category: 'Quantum Computing',
      description: 'Future of quantum computing and its impact on business applications',
      author: 'Quantum Research Division',
      date: '2025-01-10',
      readTime: '30 min read',
      downloads: '1,890',
      image: '⚛️',
      featured: true,
      link: '/resources/quantum-computing-roadmap'
    },
    {
      id: 3,
      title: 'Space Technology Innovation Report',
      type: 'Industry Report',
      category: 'Space Technology',
      description: 'Latest developments in space technology and commercial applications',
      author: 'Space Technology Team',
      date: '2025-01-05',
      readTime: '25 min read',
      downloads: '1,230',
      image: '🚀',
      featured: true,
      link: '/resources/space-technology-innovation-report'
    }
  ];

  const resourceCategories = [
    {
      name: 'White Papers',
      count: 25,
      icon: <FileText className="w-6 h-6" />,
      description: 'In-depth research and analysis papers',
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Case Studies',
      count: 18,
      icon: <Target className="w-6 h-6" />,
      description: 'Real-world implementation success stories',
      color: 'from-green-600 to-blue-600'
    },
    {
      name: 'Research Papers',
      count: 32,
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Academic and technical research publications',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Industry Reports',
      count: 15,
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Market analysis and industry insights',
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Video Tutorials',
      count: 45,
      icon: <Video className="w-6 h-6" />,
      description: 'Step-by-step video guides and demonstrations',
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Webinars',
      count: 28,
      icon: <Play className="w-6 h-6" />,
      description: 'Educational webinars and presentations',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const latestResources = [
    {
      id: 4,
      title: 'Cybersecurity Best Practices 2025',
      type: 'Guide',
      category: 'Cybersecurity',
      description: 'Essential security practices for modern enterprises',
      author: 'Security Team',
      date: '2025-01-12',
      readTime: '20 min read',
      downloads: '890',
      image: '🛡️'
    },
    {
      id: 5,
      title: 'DevOps Automation Handbook',
      type: 'Technical Guide',
      category: 'DevOps',
      description: 'Complete guide to DevOps automation and best practices',
      author: 'DevOps Team',
      date: '2025-01-08',
      readTime: '35 min read',
      downloads: '1,120',
      image: '⚙️'
    },
    {
      id: 6,
      title: 'Cloud Migration Strategies',
      type: 'White Paper',
      category: 'Cloud Computing',
      description: 'Strategic approaches to cloud migration and optimization',
      author: 'Cloud Solutions Team',
      date: '2025-01-03',
      readTime: '40 min read',
      downloads: '950',
      image: '☁️'
    },
    {
      id: 7,
      title: 'AI Ethics Framework',
      type: 'Policy Document',
      category: 'AI & Machine Learning',
      description: 'Ethical guidelines for AI development and deployment',
      author: 'AI Ethics Committee',
      date: '2024-12-28',
      readTime: '25 min read',
      downloads: '780',
      image: '⚖️'
    },
    {
      id: 8,
      title: 'Quantum Security Protocols',
      type: 'Technical Paper',
      category: 'Quantum Computing',
      description: 'Advanced quantum security protocols and implementations',
      author: 'Quantum Security Team',
      date: '2024-12-25',
      readTime: '50 min read',
      downloads: '650',
      image: '🔐'
    }
  ];

  const topics = [
    'AI & Machine Learning', 'Quantum Computing', 'Space Technology', 'Cybersecurity',
    'Cloud Computing', 'DevOps', 'Enterprise IT', 'Digital Transformation',
    'Innovation', 'Technology Trends', 'Business Solutions', 'Research'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <BookOpen className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Knowledge <span className="text-blue-400">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive library of white papers, case studies, research, 
                and educational content to stay ahead in technology innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full sm:w-80"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
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
                Our most popular and impactful resources for technology professionals
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{resource.image}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        {resource.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{resource.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {resource.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 inline" />
                        {new Date(resource.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">{resource.readTime}</span>
                      <span className="text-sm text-gray-400">{resource.downloads} downloads</span>
                    </div>
                    <Link 
                      href={resource.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Download Resource
                      <Download className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                Explore our resources organized by type and topic area
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{category.name}</h3>
                  <p className="text-gray-300 text-center mb-4">{category.description}</p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-400">{category.count}</span>
                    <p className="text-sm text-gray-400">Resources</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Latest Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our newest publications and research
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {latestResources.map((resource, index) => (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex gap-6">
                    <div className="text-4xl flex-shrink-0">{resource.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                          {resource.type}
                        </span>
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-400">
                          <User className="w-4 h-4 mr-2" />
                          {resource.author}
                        </div>
                        <div className="text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2 inline" />
                          {new Date(resource.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{resource.readTime}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                        <Link 
                          href={`/resources/${resource.id}`}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                        >
                          View Resource
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Load More Resources
              </button>
            </motion.div>
          </div>
        </section>

        {/* Topics & Tags */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Browse by Topic</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find resources by specific topics and areas of interest
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic, index) => (
                <motion.button
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gray-800/50 hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  {topic}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated with Our Resources
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified about new resources, research, and insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;