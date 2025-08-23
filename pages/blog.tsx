import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Award, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code,
  Calendar, Clock, Tag, Search, Filter
} from 'lucide-react';

export default function BlogPage() {
  const featuredPosts = [
    {
      title: 'The Future of AI Consciousness: Beyond 2040',
      excerpt: 'Exploring the next frontier of artificial intelligence where machines develop true consciousness and emotional intelligence.',
      category: 'AI & Consciousness',
      author: 'Dr. Kleber Santos',
      date: '2025-01-15',
      readTime: '8 min read',
      image: '/images/blog/ai-consciousness-future.jpg',
      slug: 'ai-consciousness-future-2040',
      featured: true
    },
    {
      title: 'Quantum Computing Breakthroughs: What\'s Next?',
      excerpt: 'Discover the latest developments in quantum computing and how they\'re revolutionizing AI and cryptography.',
      category: 'Quantum Technology',
      author: 'Quantum Research Team',
      date: '2025-01-12',
      readTime: '6 min read',
      image: '/images/blog/quantum-breakthroughs.jpg',
      slug: 'quantum-computing-breakthroughs-2025',
      featured: true
    },
    {
      title: 'Space Resource Intelligence: Mining the Cosmos',
      excerpt: 'How AI-powered space technology is enabling sustainable resource extraction from asteroids and other celestial bodies.',
      category: 'Space Technology',
      author: 'Space Innovation Team',
      date: '2025-01-10',
      readTime: '7 min read',
      image: '/images/blog/space-resource-mining.jpg',
      slug: 'space-resource-intelligence-mining',
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: 'Autonomous Business Intelligence: The Future of Decision Making',
      excerpt: 'How AI consciousness is transforming business intelligence and decision-making processes.',
      category: 'Enterprise AI',
      author: 'AI Solutions Team',
      date: '2025-01-08',
      readTime: '5 min read',
      image: '/images/blog/autonomous-bi.jpg',
      slug: 'autonomous-business-intelligence-future'
    },
    {
      title: 'Quantum Cybersecurity: Protecting Against Future Threats',
      excerpt: 'Understanding quantum-resistant cryptography and the future of cybersecurity.',
      category: 'Quantum Security',
      author: 'Security Research Team',
      date: '2025-01-05',
      readTime: '6 min read',
      image: '/images/blog/quantum-cybersecurity.jpg',
      slug: 'quantum-cybersecurity-future-threats'
    },
    {
      title: 'Brain-Computer Interfaces: Merging Human and AI Intelligence',
      excerpt: 'The latest developments in neural interface technology and consciousness-AI integration.',
      category: 'Emerging Tech',
      author: 'Neural Interface Team',
      date: '2025-01-03',
      readTime: '7 min read',
      image: '/images/blog/brain-computer-interface.jpg',
      slug: 'brain-computer-interfaces-ai-integration'
    },
    {
      title: 'AI Ethics and Governance: Building Responsible AI Systems',
      excerpt: 'Essential frameworks for developing ethical and responsible artificial intelligence.',
      category: 'AI Ethics',
      author: 'Ethics & Governance Team',
      date: '2024-12-30',
      readTime: '8 min read',
      image: '/images/blog/ai-ethics-governance.jpg',
      slug: 'ai-ethics-governance-frameworks'
    },
    {
      title: 'The Evolution of Autonomous Systems: From Automation to Consciousness',
      excerpt: 'How autonomous systems are evolving from simple automation to conscious decision-making.',
      category: 'Autonomous Systems',
      author: 'Autonomy Research Team',
      date: '2024-12-28',
      readTime: '6 min read',
      image: '/images/blog/autonomous-systems-evolution.jpg',
      slug: 'autonomous-systems-evolution-consciousness'
    },
    {
      title: 'Quantum Neural Networks: The Next Generation of AI',
      excerpt: 'Exploring the intersection of quantum computing and neural networks for unprecedented AI capabilities.',
      category: 'Quantum AI',
      author: 'Quantum AI Team',
      date: '2024-12-25',
      readTime: '7 min read',
      image: '/images/blog/quantum-neural-networks.jpg',
      slug: 'quantum-neural-networks-next-gen-ai'
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 15, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Technology', count: 12, color: 'from-blue-500 to-cyan-500' },
    { name: 'Space Technology', count: 8, color: 'from-indigo-500 to-purple-500' },
    { name: 'Enterprise AI', count: 10, color: 'from-emerald-500 to-teal-500' },
    { name: 'Emerging Tech', count: 14, color: 'from-yellow-500 to-orange-500' },
    { name: 'AI Ethics', count: 6, color: 'from-red-500 to-pink-500' }
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Insights, breakthroughs, and perspectives on the future of AI consciousness, 
              quantum computing, and space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most important insights and breakthrough discoveries
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{post.author}</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find articles in your areas of interest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-400">{category.count} articles</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest insights and discoveries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{post.author}</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights on AI consciousness, quantum computing, and space technology 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contribute to Our Blog
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have insights to share? We welcome contributions from researchers, practitioners, 
              and thought leaders in AI, quantum computing, and space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Submit Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:blog@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Editorial Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}