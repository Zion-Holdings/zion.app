import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Eye, Heart, Tag, ArrowRight, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
  likes: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 'quantum-ai-future-business',
    title: 'The Future of Business Intelligence: How Quantum AI is Revolutionizing Data Analytics',
    excerpt: 'Explore how quantum computing combined with artificial intelligence is creating unprecedented opportunities for business intelligence and predictive analytics.',
    content: 'In the rapidly evolving landscape of business intelligence, quantum AI represents a paradigm shift that promises to unlock insights previously thought impossible...',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Technology Officer',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    tags: ['Quantum Computing', 'AI', 'Business Intelligence', 'Data Analytics'],
    image: '🧬',
    featured: true,
    views: 2847,
    likes: 156
  },
  {
    id: 'autonomous-devops-guide',
    title: 'Complete Guide to Autonomous DevOps: Self-Healing Infrastructure in 2024',
    excerpt: 'Learn how autonomous DevOps platforms are transforming software deployment with self-healing systems and zero-downtime operations.',
    content: 'The evolution of DevOps has reached a critical juncture where manual intervention is becoming obsolete. Autonomous DevOps represents the next frontier...',
    author: 'Marcus Rodriguez',
    authorRole: 'Head of Engineering',
    publishDate: '2024-01-12',
    readTime: '12 min read',
    category: 'DevOps & Infrastructure',
    tags: ['DevOps', 'Automation', 'Infrastructure', 'Cloud Computing'],
    image: '🤖',
    featured: true,
    views: 1923,
    likes: 98
  },
  {
    id: 'cybersecurity-threats-2024',
    title: 'Cybersecurity Threats in 2024: AI-Powered Defense Strategies',
    excerpt: 'Discover the latest cybersecurity threats and how AI-powered defense systems are helping organizations stay ahead of attackers.',
    content: 'As cyber threats become more sophisticated, traditional security measures are proving inadequate. AI-powered cybersecurity solutions offer new hope...',
    author: 'Emily Watson',
    authorRole: 'VP of Client Success',
    publishDate: '2024-01-10',
    readTime: '10 min read',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'AI Defense', 'Threat Detection', 'Security Analytics'],
    image: '🛡️',
    featured: false,
    views: 1654,
    likes: 87
  },
  {
    id: 'metaverse-commerce-trends',
    title: 'Metaverse Commerce: Building Virtual Storefronts That Actually Convert',
    excerpt: 'Practical insights into creating successful virtual commerce experiences that drive real revenue in the metaverse.',
    content: 'The metaverse represents a new frontier for e-commerce, but creating successful virtual storefronts requires a deep understanding of user behavior...',
    author: 'Kleber Santos',
    authorRole: 'Founder & CEO',
    publishDate: '2024-01-08',
    readTime: '15 min read',
    category: 'Metaverse & VR',
    tags: ['Metaverse', 'E-commerce', 'Virtual Reality', 'Digital Transformation'],
    image: '🌐',
    featured: false,
    views: 2156,
    likes: 134
  },
  {
    id: 'micro-saas-scaling-strategies',
    title: 'Scaling Micro SaaS: From MVP to Market Leader in 12 Months',
    excerpt: 'A comprehensive guide to scaling micro SaaS applications with proven strategies and real-world case studies.',
    content: 'Scaling a micro SaaS application from concept to market leadership requires strategic planning, technical excellence, and market understanding...',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Technology Officer',
    publishDate: '2024-01-05',
    readTime: '18 min read',
    category: 'Business Strategy',
    tags: ['Micro SaaS', 'Scaling', 'Product Development', 'Market Strategy'],
    image: '🚀',
    featured: false,
    views: 3421,
    likes: 198
  },
  {
    id: 'healthcare-ai-diagnostics',
    title: 'AI in Healthcare: Revolutionizing Medical Diagnostics with Machine Learning',
    excerpt: 'How AI-powered diagnostic tools are improving accuracy, reducing costs, and saving lives in healthcare institutions worldwide.',
    content: 'The integration of artificial intelligence in healthcare diagnostics is transforming patient care and medical decision-making...',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Technology Officer',
    publishDate: '2024-01-03',
    readTime: '14 min read',
    category: 'Healthcare & AI',
    tags: ['Healthcare', 'AI', 'Machine Learning', 'Medical Diagnostics'],
    image: '🏥',
    featured: false,
    views: 1892,
    likes: 145
  }
];

const categories = ['All', 'AI & Technology', 'DevOps & Infrastructure', 'Cybersecurity', 'Metaverse & VR', 'Business Strategy', 'Healthcare & AI'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <>
      <SEO
        title="Blog"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from our team of experts."
        keywords="technology blog, AI insights, quantum computing, cybersecurity, DevOps, Zion Tech Group"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Insights & Innovation
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
                and the technologies shaping the future of business.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-zion-slate-light">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zion-cyan" />
                  Weekly Updates
                </span>
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-zion-cyan" />
                  6 Categories
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-zion-cyan" />
                  15k+ Views
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-zion-cyan" />
                  800+ Likes
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-16 px-6 bg-zion-blue">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Search Articles</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                    <input
                      type="text"
                      placeholder="Search by title, content, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 px-6 bg-zion-blue-dark">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-6">Featured Articles</h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Our most popular and insightful articles on cutting-edge technology trends and innovations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="text-6xl mb-6">{post.image}</div>
                    <div className="mb-4">
                      <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatNumber(post.views)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {formatNumber(post.likes)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-zion-slate-light">
                        <div className="font-semibold text-white">{post.author}</div>
                        <div>{post.authorRole}</div>
                      </div>
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-6 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center gap-2 group-hover:scale-105">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-20 px-6 bg-zion-blue">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">All Articles</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Explore our complete collection of technology insights, tutorials, and industry analysis.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="mb-3">
                    <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-sm text-zion-slate-light mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-zion-slate-light">
                      <div className="font-semibold text-white">{post.author}</div>
                    </div>
                    <button className="bg-zion-cyan text-white font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan-dark transition-all duration-300 flex items-center gap-2 group-hover:scale-105">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-zion-slate-light text-lg mb-4">No articles found matching your criteria</div>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                  }}
                  className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-zion-purple to-zion-cyan">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our Insights</h2>
              <p className="text-xl text-white/90 mb-8">
                Get the latest technology insights, industry trends, and expert analysis delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}