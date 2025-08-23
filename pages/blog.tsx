import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, BookOpen, Globe, Shield, TrendingUp, Building, Star, Calendar, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Latest Insights
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Blog
                </span>
                <br />
                <span className="text-white">Insights from the Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Explore the latest developments in AI consciousness, quantum computing, 
                and autonomous systems. Stay ahead of the curve with expert insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe to Updates
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Browse Categories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most popular and insightful articles on cutting-edge 
                technology and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "The Future of AI Consciousness: Beyond Traditional Machine Learning",
                  excerpt: "Exploring how AI consciousness differs from conventional AI and what it means for the future of technology and humanity.",
                  author: "Dr. Sarah Chen",
                  date: "March 15, 2025",
                  readTime: "8 min read",
                  category: "AI Consciousness",
                  image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Quantum Computing Breakthroughs: Solving Previously Impossible Problems",
                  excerpt: "How quantum computing is revolutionizing fields from cryptography to drug discovery, and what's coming next.",
                  author: "Prof. Michael Rodriguez",
                  date: "March 12, 2025",
                  readTime: "12 min read",
                  category: "Quantum Computing",
                  image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((post, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-full h-48 ${post.image} rounded-xl mb-6 flex items-center justify-center`}>
                    <BookOpen className="w-16 h-16 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-sm rounded-full`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-gray-400 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <button className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent insights and discoveries in 
                technology and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Autonomous Systems: The Next Generation of Self-Managing Technology",
                  excerpt: "How autonomous systems are evolving beyond simple automation to truly intelligent, self-organizing networks.",
                  author: "Alex Thompson",
                  date: "March 10, 2025",
                  readTime: "6 min read",
                  category: "Autonomous Systems",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Ethical AI: Building Trust in Artificial Intelligence",
                  excerpt: "The importance of ethical frameworks in AI development and how to implement responsible AI practices.",
                  author: "Dr. Emily Watson",
                  date: "March 8, 2025",
                  readTime: "10 min read",
                  category: "AI Ethics",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Quantum Internet: The Future of Secure Communication",
                  excerpt: "Exploring quantum internet infrastructure and its potential to revolutionize cybersecurity and data transmission.",
                  author: "Dr. James Kim",
                  date: "March 5, 2025",
                  readTime: "9 min read",
                  category: "Quantum Technology",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "AI in Healthcare: Transforming Patient Care and Medical Research",
                  excerpt: "Real-world applications of AI in healthcare and the future of personalized medicine.",
                  author: "Dr. Lisa Park",
                  date: "March 3, 2025",
                  readTime: "7 min read",
                  category: "Healthcare AI",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  title: "Space Technology: AI-Powered Exploration and Resource Mining",
                  excerpt: "How AI and autonomous systems are enabling the next era of space exploration and commercialization.",
                  author: "Capt. Robert Chen",
                  date: "March 1, 2025",
                  readTime: "11 min read",
                  category: "Space Tech",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  title: "The Future of Work: AI Augmentation and Human-Machine Collaboration",
                  excerpt: "How AI will transform the workplace and create new opportunities for human creativity and innovation.",
                  author: "Dr. Maria Garcia",
                  date: "February 28, 2025",
                  readTime: "8 min read",
                  category: "Future of Work",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((post, index) => (
                <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-sm rounded-full`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-white text-xs font-medium">{post.author}</p>
                    </div>
                    <p className="text-gray-400 text-xs">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find articles that match your interests and expertise areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "AI Consciousness",
                  count: "24 articles",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  name: "Quantum Computing",
                  count: "18 articles",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Autonomous Systems",
                  count: "15 articles",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  name: "Ethics & Governance",
                  count: "12 articles",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-orange-500 to-red-500"
                }
              ].map((category, index) => (
                <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{category.name}</h3>
                  <p className="text-gray-400 text-sm text-center">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get the latest insights delivered to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}