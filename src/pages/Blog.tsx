
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  User, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  Clock,
  Eye,
  Share2,
  Bookmark,
  TrendingUp,
  Lightbulb,
  Shield,
  Cloud,
  Brain,
  Zap
} from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: FileText, count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 4 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 3 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 3 },
    { id: 'transformation', name: 'Digital Transformation', icon: Zap, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2025',
      excerpt: 'Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI-driven economy.',
      category: 'ai',
      author: 'Kleber Santos',
      date: '2025-01-15',
      readTime: '8 min read',
      views: '2.4k',
      tags: ['AI', 'Business Trends', 'Innovation'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices for Multi-Cloud Environments',
      excerpt: 'Learn essential security strategies for managing multiple cloud providers while maintaining robust protection for your data and applications.',
      category: 'security',
      author: 'Zion Tech Team',
      date: '2025-01-12',
      readTime: '6 min read',
      views: '1.8k',
      tags: ['Cloud Security', 'Multi-Cloud', 'Best Practices'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Explore real-world examples of successful digital transformations and the key factors that contributed to their success.',
      category: 'transformation',
      author: 'Kleber Santos',
      date: '2025-01-10',
      readTime: '10 min read',
      views: '3.1k',
      tags: ['Digital Transformation', 'Case Studies', 'Success Stories'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Building Scalable Cloud Infrastructure: A Comprehensive Guide',
      excerpt: 'Master the fundamentals of designing and implementing cloud infrastructure that grows with your business needs.',
      category: 'cloud',
      author: 'Zion Tech Team',
      date: '2025-01-08',
      readTime: '12 min read',
      views: '2.7k',
      tags: ['Cloud Infrastructure', 'Scalability', 'Architecture'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Cybersecurity Threats in 2025: What Businesses Need to Know',
      excerpt: 'Stay ahead of emerging cybersecurity threats with our comprehensive analysis of the latest attack vectors and defense strategies.',
      category: 'security',
      author: 'Kleber Santos',
      date: '2025-01-05',
      readTime: '9 min read',
      views: '2.9k',
      tags: ['Cybersecurity', 'Threat Intelligence', 'Security Trends'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Machine Learning Implementation: From Concept to Production',
      excerpt: 'A step-by-step guide to successfully implementing machine learning solutions in enterprise environments.',
      category: 'ai',
      author: 'Zion Tech Team',
      date: '2025-01-03',
      readTime: '15 min read',
      views: '2.2k',
      tags: ['Machine Learning', 'Implementation', 'Enterprise'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 7,
      title: 'The Rise of Edge Computing: Transforming Data Processing',
      excerpt: 'Explore how edge computing is revolutionizing data processing and enabling new possibilities for IoT and real-time applications.',
      category: 'cloud',
      author: 'Kleber Santos',
      date: '2024-12-30',
      readTime: '7 min read',
      views: '1.9k',
      tags: ['Edge Computing', 'IoT', 'Data Processing'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 8,
      title: 'Zero Trust Security: The Future of Network Protection',
      excerpt: 'Understand the principles of zero trust security and how to implement this modern approach to network security.',
      category: 'security',
      author: 'Zion Tech Team',
      date: '2024-12-28',
      readTime: '11 min read',
      views: '2.5k',
      tags: ['Zero Trust', 'Network Security', 'Modern Security'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 9,
      title: 'AI-Powered Customer Experience: Revolutionizing Business Interactions',
      excerpt: 'Discover how AI is transforming customer service and creating personalized experiences that drive business growth.',
      category: 'ai',
      author: 'Kleber Santos',
      date: '2024-12-25',
      readTime: '8 min read',
      views: '2.1k',
      tags: ['AI', 'Customer Experience', 'Personalization'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 10,
      title: 'Cloud Cost Optimization: Strategies for Reducing Cloud Spending',
      excerpt: 'Learn proven strategies to optimize your cloud costs without compromising performance or functionality.',
      category: 'cloud',
      author: 'Zion Tech Team',
      date: '2024-12-22',
      readTime: '9 min read',
      views: '2.3k',
      tags: ['Cloud Cost', 'Optimization', 'Cost Management'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 11,
      title: 'The Impact of Digital Transformation on Employee Productivity',
      excerpt: 'Explore how digital transformation initiatives can boost employee productivity and create a more engaged workforce.',
      category: 'transformation',
      author: 'Kleber Santos',
      date: '2024-12-20',
      readTime: '6 min read',
      views: '1.7k',
      tags: ['Digital Transformation', 'Employee Productivity', 'Workplace'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 12,
      title: 'Emerging AI Technologies: What\'s Next in 2025 and Beyond',
      excerpt: 'Get insights into the cutting-edge AI technologies that will shape the future of business and technology.',
      category: 'ai',
      author: 'Zion Tech Team',
      date: '2024-12-18',
      readTime: '13 min read',
      views: '2.8k',
      tags: ['AI', 'Emerging Technologies', 'Future Trends'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Insights &
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Expert Knowledge
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, 
              and digital transformation from Zion Tech Group's thought leaders.
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-gray-300">Must-read insights from our experts</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-200">
                    <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs rounded-full">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">Stay updated with the latest industry insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-200">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs rounded-full">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights delivered to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

