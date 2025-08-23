import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, Clock, User, Tag, 
  ArrowRight, ExternalLink, TrendingUp, 
  BookOpen, Globe, Video
} from 'lucide-react';
import Link from 'next/link';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'ai', name: 'AI & Consciousness', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'enterprise', name: 'Enterprise IT', count: 5 },
    { id: 'research', name: 'Research & Development', count: 3 },
    { id: 'industry', name: 'Industry Insights', count: 2 }
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest breakthrough in artificial consciousness technology promises to revolutionize how businesses interact with AI systems, enabling unprecedented levels of understanding and collaboration.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/images/news/ai-consciousness-launch.jpg',
      featured: true,
      tags: ['AI Consciousness', 'Platform Launch', 'Innovation']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Achieving 1000+ Qubit Stability',
      excerpt: 'Our quantum research team has achieved a major milestone in quantum computing stability, opening new possibilities for complex computational problems.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/images/news/quantum-breakthrough.jpg',
      featured: true,
      tags: ['Quantum Computing', 'Research', 'Breakthrough']
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: 'Enterprise AI Adoption: Trends and Best Practices for 2024',
      excerpt: 'Discover the key trends driving AI adoption in enterprise environments and learn best practices for successful implementation.',
      category: 'enterprise',
      author: 'Jennifer Kim',
      date: '2024-01-10',
      readTime: '4 min read',
      image: '/images/news/enterprise-ai-trends.jpg',
      tags: ['Enterprise AI', 'Best Practices', '2024 Trends']
    },
    {
      id: 4,
      title: 'The Future of Autonomous Business Systems',
      excerpt: 'Exploring how autonomous systems are reshaping business operations and what this means for the future of work.',
      category: 'research',
      author: 'Dr. Alex Thompson',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/images/news/autonomous-systems.jpg',
      tags: ['Autonomous Systems', 'Future of Work', 'Innovation']
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new cybersecurity challenges and providing innovative solutions to protect digital assets.',
      category: 'enterprise',
      author: 'Marcus Johnson',
      date: '2024-01-05',
      readTime: '5 min read',
      image: '/images/news/ai-cybersecurity.jpg',
      tags: ['Cybersecurity', 'AI Security', 'Digital Protection']
    },
    {
      id: 6,
      title: 'Quantum Machine Learning: Bridging Two Revolutionary Technologies',
      excerpt: 'Our research team explores the intersection of quantum computing and machine learning, revealing exciting possibilities for the future.',
      category: 'quantum',
      author: 'Dr. Elena Petrova',
      date: '2024-01-03',
      readTime: '8 min read',
      image: '/images/news/quantum-ml.jpg',
      tags: ['Quantum ML', 'Research', 'Technology Convergence']
    }
  ];

  const industryInsights = [
    {
      id: 7,
      title: 'The Rise of Conscious AI: Ethical Considerations and Business Impact',
      excerpt: 'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.',
      category: 'industry',
      author: 'Dr. Robert Chang',
      date: '2024-01-01',
      readTime: '6 min read',
      tags: ['AI Ethics', 'Business Impact', 'Consciousness']
    },
    {
      id: 8,
      title: 'Micro-SaaS Revolution: How Small Teams Are Building Big Solutions',
      excerpt: 'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.',
      category: 'industry',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '4 min read',
      tags: ['Micro-SaaS', 'Startups', 'Software Industry']
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Consciousness Summit 2024',
      type: 'Conference',
      date: '2024-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco, CA',
      description: 'Join industry leaders and researchers for a deep dive into the future of AI consciousness technology.',
      registration: 'https://ziontechgroup.com/events/ai-consciousness-summit-2024'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      type: 'Workshop',
      date: '2024-02-22',
      time: '1:00 PM - 5:00 PM',
      location: 'Virtual',
      description: 'Hands-on workshop covering quantum computing fundamentals and practical applications.',
      registration: 'https://ziontechgroup.com/events/quantum-workshop'
    }
  ];

  const filteredNews = [...featuredNews, ...latestNews, ...industryInsights].filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'from-cyan-500 to-blue-500',
      quantum: 'from-purple-500 to-pink-500',
      enterprise: 'from-green-500 to-emerald-500',
      research: 'from-orange-500 to-red-500',
      industry: 'from-indigo-500 to-purple-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Stay updated with the latest developments in AI consciousness, quantum computing, 
            and emerging technologies from Zion Tech Group.
          </motion.p>
          
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Stories
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Featured Article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Latest News
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(2, 8).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Upcoming Events
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {event.type === 'Conference' ? <Globe className="w-8 h-8" /> : <Video className="w-8 h-8" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)} at {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    
                    <a
                      href={event.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news, insights, and updates delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stay Informed?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our latest research, industry insights, and technology breakthroughs 
              that are shaping the future of AI and quantum computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}