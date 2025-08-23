import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, User, Tag, ArrowRight, 
  TrendingUp, Globe, Brain, Zap, Shield
} from 'lucide-react';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary Quantum AI Platform",
      excerpt: "Our latest quantum AI platform combines quantum computing with artificial intelligence to deliver unprecedented performance and capabilities for enterprise applications.",
      category: "Product Launch",
      author: "Zion Tech Group Team",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/images/news/quantum-ai-launch.jpg",
      tags: ["Quantum Computing", "AI", "Product Launch"]
    },
    {
      id: 2,
      title: "New Partnership with Global Healthcare Consortium",
      excerpt: "We're excited to announce our strategic partnership with the Global Healthcare Consortium to revolutionize medical diagnostics using our AI-powered healthcare solutions.",
      category: "Partnership",
      author: "Business Development",
      date: "2025-01-12",
      readTime: "4 min read",
      image: "/images/news/healthcare-partnership.jpg",
      tags: ["Healthcare", "Partnership", "AI"]
    },
    {
      id: 3,
      title: "Breakthrough in Autonomous Cybersecurity Systems",
      excerpt: "Our research team has achieved a major breakthrough in autonomous cybersecurity, developing systems that can detect and respond to threats in real-time without human intervention.",
      category: "Research",
      author: "Research Team",
      date: "2025-01-10",
      readTime: "6 min read",
      image: "/images/news/cybersecurity-breakthrough.jpg",
      tags: ["Cybersecurity", "Research", "Autonomous Systems"]
    },
    {
      id: 4,
      title: "Space Technology Division Expands Operations",
      excerpt: "Our space technology division is expanding operations to support growing demand for satellite operations, space resource mining, and orbital analytics services.",
      category: "Company News",
      author: "Space Technology Team",
      date: "2025-01-08",
      readTime: "3 min read",
      image: "/images/news/space-expansion.jpg",
      tags: ["Space Technology", "Expansion", "Satellites"]
    },
    {
      id: 5,
      title: "AI Ethics and Governance Framework Released",
      excerpt: "We've published our comprehensive AI ethics and governance framework, setting new standards for responsible AI development and deployment in enterprise environments.",
      category: "Policy",
      author: "AI Ethics Team",
      date: "2025-01-05",
      readTime: "7 min read",
      image: "/images/news/ai-ethics-framework.jpg",
      tags: ["AI Ethics", "Governance", "Policy"]
    },
    {
      id: 6,
      title: "Financial Services Innovation Award Winner",
      excerpt: "Zion Tech Group has been recognized as the winner of the Financial Services Innovation Award for our quantum financial modeling and risk assessment platforms.",
      category: "Awards",
      author: "Marketing Team",
      date: "2025-01-03",
      readTime: "3 min read",
      image: "/images/news/financial-award.jpg",
      tags: ["Awards", "Financial Services", "Quantum Computing"]
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Partnership",
    "Research",
    "Company News",
    "Policy",
    "Awards"
  ];

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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest developments, breakthroughs, and innovations 
                from Zion Tech Group and the technology industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    category === "All News"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Stories</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the most important developments and innovations from our team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <Newspaper className="w-16 h-16 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">News Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`/news/${article.id}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Trends */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Industry Trends</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay ahead of the curve with insights into emerging technology trends 
                and industry developments.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Evolution</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Explore the latest developments in artificial intelligence, 
                  from large language models to autonomous systems.
                </p>
                <a href="/resources?category=ai-trends" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quantum Computing</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Discover breakthroughs in quantum computing and their 
                  implications for cryptography and optimization.
                </p>
                <a href="/resources?category=quantum-trends" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cybersecurity</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Stay informed about the latest cybersecurity threats, 
                  defense strategies, and regulatory changes.
                </p>
                <a href="/resources?category=cybersecurity-trends" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest news, insights, and 
                technology updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}