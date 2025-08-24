import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, User, Tag, ArrowRight, 
  Clock, BookOpen, TrendingUp, Lightbulb
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'innovation', name: 'Innovation', count: 5 },
    { id: 'technology', name: 'Technology Trends', count: 4 },
    { id: 'business', name: 'Business Insights', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous AI: Beyond Human Supervision",
      excerpt: "Exploring how autonomous AI systems are evolving to make independent decisions and drive innovation across industries.",
      category: "ai",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      featured: true,
      tags: ["AI", "Autonomous Systems", "Innovation"],
      image: "🧠"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What's Next?",
      excerpt: "Recent developments in quantum computing and their implications for cryptography, drug discovery, and optimization problems.",
      category: "quantum",
      author: "Dr. Elena Petrova",
      date: "2025-01-12",
      readTime: "6 min read",
      featured: true,
      tags: ["Quantum Computing", "Research", "Technology"],
      image: "🔬"
    },
    {
      id: 3,
      title: "Edge Computing Revolution: Bringing AI to the Edge",
      excerpt: "How edge computing is transforming AI deployment and enabling real-time decision making in IoT and mobile applications.",
      category: "technology",
      author: "Marcus Rodriguez",
      date: "2025-01-10",
      readTime: "7 min read",
      featured: false,
      tags: ["Edge Computing", "AI", "IoT"],
      image: "⚡"
    },
    {
      id: 4,
      title: "AI Ethics and Governance: Building Trust in Autonomous Systems",
      excerpt: "The importance of ethical AI development and governance frameworks for ensuring responsible AI deployment.",
      category: "ai",
      author: "Alex Thompson",
      date: "2025-01-08",
      readTime: "9 min read",
      featured: false,
      tags: ["AI Ethics", "Governance", "Responsible AI"],
      image: "🛡️"
    },
    {
      id: 5,
      title: "Space Technology and AI: The Next Frontier",
      excerpt: "How AI is revolutionizing space exploration, satellite operations, and interplanetary research.",
      category: "innovation",
      author: "Dr. Sarah Chen",
      date: "2025-01-05",
      readTime: "10 min read",
      featured: false,
      tags: ["Space Technology", "AI", "Exploration"],
      image: "🚀"
    },
    {
      id: 6,
      title: "The Rise of Quantum Neural Networks",
      excerpt: "Exploring the intersection of quantum computing and neural networks for unprecedented AI capabilities.",
      category: "quantum",
      author: "Dr. Elena Petrova",
      date: "2025-01-03",
      readTime: "8 min read",
      featured: false,
      tags: ["Quantum Computing", "Neural Networks", "AI"],
      image: "🧠"
    },
    {
      id: 7,
      title: "AI-Powered Business Transformation: Real Success Stories",
      excerpt: "Case studies of companies that have successfully transformed their operations using AI and machine learning.",
      category: "business",
      author: "Marcus Rodriguez",
      date: "2024-12-30",
      readTime: "12 min read",
      featured: false,
      tags: ["Business", "AI", "Transformation"],
      image: "💼"
    },
    {
      id: 8,
      title: "The Future of Work: AI Collaboration and Human Augmentation",
      excerpt: "How AI is augmenting human capabilities and creating new collaboration models in the workplace.",
      category: "innovation",
      author: "Alex Thompson",
      date: "2024-12-28",
      readTime: "7 min read",
      featured: false,
      tags: ["Future of Work", "AI", "Collaboration"],
      image: "👥"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights in AI, quantum computing, and autonomous technology. Expert analysis and thought leadership from Zion Tech Group." />
        <meta name="keywords" content="Zion Tech Group blog, AI insights, quantum computing blog, technology trends, innovation blog" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights and analysis in AI and technology innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Insights & Analysis
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                Stay ahead of the curve with expert insights on AI, quantum computing, 
                and the future of autonomous technology.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        : 'bg-slate-700/50 text-white/70 hover:bg-slate-700/70 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 px-6 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Featured Articles
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Our most important insights and breakthrough discoveries
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">{post.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                              {categories.find(c => c.id === post.category)?.name}
                            </span>
                            <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                              Featured
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/80 mb-6 leading-relaxed">{post.excerpt}</p>

                      <div className="flex flex-wrap items-center gap-4 mb-6 text-white/60 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-600/50 text-white/70 text-sm rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Latest Articles
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Stay updated with our latest insights and analysis
              </p>
            </motion.div>

            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl">{post.image}</div>
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center gap-4 mb-4 text-white/60 text-sm">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-600/50 text-white/70 text-xs rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white/70 mb-2">No articles found</h3>
                <p className="text-white/50">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Stay Updated
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Get the latest insights delivered to your inbox. Join thousands of 
                technology leaders staying ahead of the curve.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
