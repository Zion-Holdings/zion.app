import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, ArrowRight, 
  ExternalLink, TrendingUp, Sparkles, Globe,
  Zap, Brain, Rocket, Shield, Star
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const featuredNews = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      excerpt: "Our latest breakthrough in AI consciousness evolution is set to transform how businesses interact with artificial intelligence, enabling unprecedented levels of understanding and collaboration.",
      category: "AI Innovation",
      date: "2024-12-15",
      author: "Dr. Sarah Chen",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Cybersecurity Breakthrough: Unbreakable Encryption Achieved",
      excerpt: "Our quantum-resistant security platform has achieved a major milestone, providing enterprise-grade protection against even the most sophisticated cyber threats.",
      category: "Cybersecurity",
      date: "2024-12-12",
      author: "Marcus Rodriguez",
      readTime: "4 min read",
      image: "/api/placeholder/600/400",
      featured: true
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: "Autonomous DevOps Platform Reduces Deployment Time by 90%",
      excerpt: "Enterprise clients report unprecedented efficiency gains with our fully autonomous DevOps solution, enabling faster time-to-market and improved reliability.",
      category: "DevOps",
      date: "2024-12-10",
      author: "Alex Thompson",
      readTime: "3 min read",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Space Resource Intelligence: Mapping the Future of Space Exploration",
      excerpt: "Our AI-powered space intelligence platform is helping organizations identify and optimize resource extraction opportunities in near-Earth space.",
      category: "Space Tech",
      date: "2024-12-08",
      author: "Dr. Elena Petrova",
      readTime: "6 min read",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Quantum Neural Networks: The ArrowRight Frontier in Machine Learning",
      excerpt: "Our quantum neural network platform demonstrates 1000x performance improvements over classical approaches for complex optimization problems.",
      category: "Quantum Computing",
      date: "2024-12-05",
      author: "Dr. James Wilson",
      readTime: "7 min read",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Autonomous Customer Success: AI That Understands Human Emotions",
      excerpt: "Revolutionary emotional intelligence capabilities in our customer success platform are delivering personalized support that exceeds human capabilities.",
      category: "Customer Experience",
      date: "2024-12-03",
      author: "Lisa Chang",
      readTime: "4 min read",
      image: "/api/placeholder/400/300"
    },
    {
      id: 7,
      title: "Quantum Cloud Infrastructure: Performance Meets Security",
      excerpt: "Our quantum-enhanced cloud platform delivers enterprise-grade performance while maintaining the highest security standards in the industry.",
      category: "Cloud Computing",
      date: "2024-11-30",
      author: "Michael Chen",
      readTime: "5 min read",
      image: "/api/placeholder/400/300"
    },
    {
      id: 8,
      title: "Autonomous Network Management: Self-Healing Networks of the Future",
      excerpt: "Our autonomous network management system continuously optimizes performance and security without human intervention, reducing downtime by 99.9%.",
      category: "Network Management",
      date: "2024-11-28",
      author: "David Kim",
      readTime: "4 min read",
      image: "/api/placeholder/400/300"
    }
  ];

  const categories = [
    { name: "All", count: 8, icon: Globe },
    { name: "AI Innovation", count: 2, icon: Brain },
    { name: "Cybersecurity", count: 1, icon: Shield },
    { name: "DevOps", count: 1, icon: Zap },
    { name: "Space Tech", count: 1, icon: Rocket },
    { name: "Quantum Computing", count: 1, icon: Star },
    { name: "Customer Experience", count: 1, icon: Sparkles },
    { name: "Cloud Computing", count: 1, icon: Globe }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Latest Updates & Insights
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                News & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest breakthroughs, innovations, and insights 
                from Zion Tech Group's cutting-edge technology research and development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center px-6 py-3 rounded-full bg-gray-800/30 hover:bg-purple-500/20 border border-gray-700/50 hover:border-purple-500/50 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-400 group-hover:bg-purple-500/50 group-hover:text-white transition-all duration-300">
                    {category.count}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important breakthroughs and innovations that are shaping 
                the future of technology and business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="relative h-64 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-500/80 text-white text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        {formatDate(article.date)}
                      </div>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay current with our latest developments, research findings, 
                and industry insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-purple-500/80 text-white text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        {formatDate(article.date)}
                      </div>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest news, insights, and breakthroughs delivered directly 
                to your inbox. Never miss an important update.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsPage;