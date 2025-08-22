import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, Clock, User, 
  ArrowRight, Star, Eye, MessageCircle, Tag,
  Brain, Atom, Shield, Rocket
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <Eye className="w-4 h-4" />, count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" />, count: 6 },
    { id: 'enterprise', name: 'Enterprise IT', icon: <Shield className="w-4 h-4" />, count: 7 },
    { id: 'innovation', name: 'Innovation', icon: <Rocket className="w-4 h-4" />, count: 4 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Consciousness: Beyond Traditional Machine Learning",
      excerpt: "Exploring how AI systems are evolving from pattern recognition to genuine consciousness and emotional intelligence.",
      category: "ai",
      author: "Dr. Kleber Vasconcelos",
      date: "2025-01-15",
      readTime: "8 min read",
      views: 1247,
      comments: 23,
      featured: true,
      tags: ["AI Consciousness", "Machine Learning", "Future Tech"]
    },
    {
      id: 2,
      title: "Quantum Computing in Enterprise: Real-World Applications and ROI",
      excerpt: "How quantum computing is transforming enterprise operations and delivering measurable business value.",
      category: "quantum",
      author: "Sarah Chen",
      date: "2025-01-12",
      readTime: "12 min read",
      views: 892,
      comments: 15,
      featured: true,
      tags: ["Quantum Computing", "Enterprise", "ROI"]
    },
    {
      id: 3,
      title: "Zero Trust Security: The New Standard for Enterprise Protection",
      excerpt: "Implementing zero trust architecture to protect against modern cyber threats and data breaches.",
      category: "enterprise",
      author: "Michael Rodriguez",
      date: "2025-01-10",
      readTime: "10 min read",
      views: 756,
      comments: 18,
      featured: false,
      tags: ["Cybersecurity", "Zero Trust", "Enterprise"]
    },
    {
      id: 4,
      title: "Micro SAAS Revolution: Building Scalable Business Solutions",
      excerpt: "How micro SAAS platforms are disrupting traditional enterprise software and enabling rapid innovation.",
      category: "innovation",
      author: "Dr. Kleber Vasconcelos",
      date: "2025-01-08",
      readTime: "6 min read",
      views: 634,
      comments: 12,
      featured: false,
      tags: ["Micro SAAS", "Innovation", "Business"]
    },
    {
      id: 5,
      title: "AI-Powered DevOps: Automating the Software Development Lifecycle",
      excerpt: "Leveraging artificial intelligence to streamline development, testing, and deployment processes.",
      category: "ai",
      author: "Alex Thompson",
      date: "2025-01-05",
      readTime: "9 min read",
      views: 543,
      comments: 9,
      featured: false,
      tags: ["AI", "DevOps", "Automation"]
    },
    {
      id: 6,
      title: "Space Technology and AI: The Next Frontier of Innovation",
      excerpt: "Combining space technology with artificial intelligence to unlock new possibilities in exploration and resource utilization.",
      category: "innovation",
      author: "Dr. Kleber Vasconcelos",
      date: "2025-01-03",
      readTime: "11 min read",
      views: 478,
      comments: 7,
      featured: false,
      tags: ["Space Tech", "AI", "Innovation"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights, updates, and thought leadership on AI, quantum computing, enterprise technology, and innovation from Zion Tech Group." />
        <meta name="keywords" content="blog, Zion Tech Group, AI insights, quantum computing, enterprise technology, innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay ahead of the curve with insights, updates, and thought leadership on the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                        : 'border-gray-600/50 text-gray-300 hover:border-gray-500 hover:text-gray-200'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-white mb-4">No posts found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                      post.featured ? 'ring-2 ring-blue-500/30' : ''
                    }`}
                  >
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                          post.category === 'ai' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                          post.category === 'quantum' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          post.category === 'enterprise' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}>
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </span>
                        </div>
                        
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 text-lg mb-6">
                Get the latest insights on AI, quantum computing, and enterprise technology delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;