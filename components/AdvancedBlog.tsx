import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Code,
  Database,
  Smartphone
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: 'ai' | 'cloud' | 'security' | 'innovation' | 'web' | 'mobile' | 'data' | 'trends';
  tags: string[];
  featured: boolean;
  image: string;
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-revolution-2025',
    title: 'The AI Revolution: How 2025 is Transforming Business Technology',
    excerpt: 'Discover how artificial intelligence is reshaping industries and creating new opportunities for innovation and growth in the digital age.',
    content: 'Artificial intelligence has evolved from a futuristic concept to a practical business tool that\'s transforming every industry. In 2025, we\'re seeing unprecedented adoption of AI technologies across sectors, from healthcare to finance, manufacturing to retail. This comprehensive guide explores the key trends, implementation strategies, and business impact of AI adoption.',
    author: 'Dr. Sarah Chen',
    publishDate: '2025-01-27',
    readTime: '8 min read',
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'Business Transformation', 'Innovation'],
    featured: true,
    image: 'AI',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-native-future',
    title: 'Cloud-Native Architecture: Building for the Future',
    excerpt: 'Explore the principles of cloud-native development and how they\'re revolutionizing software architecture and deployment strategies.',
    content: 'Cloud-native architecture represents a fundamental shift in how we build and deploy applications. This approach leverages cloud computing capabilities to create scalable, resilient, and maintainable systems. Learn about microservices, containerization, and the principles that make cloud-native applications the future of software development.',
    author: 'Michael Rodriguez',
    publishDate: '2025-01-25',
    readTime: '6 min read',
    category: 'cloud',
    tags: ['Cloud Computing', 'Microservices', 'Docker', 'Kubernetes'],
    featured: true,
    image: 'CL',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'cybersecurity-trends',
    title: 'Cybersecurity Trends 2025: Protecting Digital Assets',
    excerpt: 'Stay ahead of emerging cyber threats with our analysis of the latest security trends and best practices for 2025.',
    content: 'As technology evolves, so do cyber threats. 2025 brings new challenges in cybersecurity, from AI-powered attacks to sophisticated social engineering. This article covers the latest threats, emerging defense strategies, and how organizations can build robust security postures in an increasingly complex digital landscape.',
    author: 'Alex Thompson',
    publishDate: '2025-01-23',
    readTime: '7 min read',
    category: 'security',
    tags: ['Cybersecurity', 'Threat Intelligence', 'AI Security', 'Best Practices'],
    featured: false,
    image: 'CS',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'next-gen-web-development',
    title: 'Next-Generation Web Development: Beyond React and Vue',
    excerpt: 'Discover the cutting-edge technologies and frameworks that are shaping the future of web development.',
    content: 'Web development is evolving rapidly, with new frameworks, tools, and methodologies emerging constantly. This exploration covers the latest trends in web development, from WebAssembly and Progressive Web Apps to modern CSS techniques and performance optimization strategies.',
    author: 'Jennifer Lee',
    publishDate: '2025-01-21',
    readTime: '9 min read',
    category: 'web',
    tags: ['Web Development', 'React', 'Vue', 'WebAssembly', 'PWA'],
    featured: false,
    image: 'WD',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'mobile-app-future',
    title: 'The Future of Mobile App Development: Trends and Predictions',
    excerpt: 'Explore the emerging trends in mobile app development and what the future holds for iOS and Android platforms.',
    content: 'Mobile app development is entering a new era with cross-platform frameworks, AI integration, and advanced user experience design. This comprehensive overview examines the current state of mobile development and predicts the technologies and approaches that will dominate the industry in the coming years.',
    author: 'David Kim',
    publishDate: '2025-01-19',
    readTime: '5 min read',
    category: 'mobile',
    tags: ['Mobile Development', 'React Native', 'Flutter', 'AI Integration'],
    featured: false,
    image: 'MD',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'data-analytics-revolution',
    title: 'Data Analytics Revolution: From Big Data to Actionable Insights',
    excerpt: 'Learn how modern data analytics is transforming business decision-making and creating competitive advantages.',
    content: 'Data analytics has evolved far beyond simple reporting to become a strategic business tool. This article explores how organizations are leveraging advanced analytics, machine learning, and real-time data processing to gain insights, predict trends, and make data-driven decisions that drive growth and innovation.',
    author: 'Dr. Emily Watson',
    publishDate: '2025-01-17',
    readTime: '10 min read',
    category: 'data',
    tags: ['Data Analytics', 'Big Data', 'Machine Learning', 'Business Intelligence'],
    featured: false,
    image: 'DA',
    color: 'from-yellow-500 to-orange-500'
  }
];

const categories = [
  { id: 'all', label: 'All Articles', icon: TrendingUp, color: 'from-blue-500 to-purple-500' },
  { id: 'ai', label: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { id: 'cloud', label: 'Cloud', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
  { id: 'security', label: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
  { id: 'innovation', label: 'Innovation', icon: Rocket, color: 'from-emerald-500 to-green-500' },
  { id: 'web', label: 'Web Dev', icon: Code, color: 'from-green-500 to-emerald-500' },
  { id: 'mobile', label: 'Mobile', icon: Smartphone, color: 'from-indigo-500 to-purple-500' },
  { id: 'data', label: 'Data', icon: Database, color: 'from-yellow-500 to-orange-500' },
  { id: 'trends', label: 'Trends', icon: Zap, color: 'from-blue-500 to-purple-500' }
];

const AdvancedBlog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest Insights & News
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest technology trends, industry insights, and expert analysis 
            from our team of technology professionals and thought leaders.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {categories.slice(0, 5).map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <motion.div
                    className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm"
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="p-8">
                      {/* Category Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs rounded-full font-medium`}>
                          {post.category.toUpperCase()}
                        </span>
                        {post.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full font-medium">
                            FEATURED
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {post.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        <span className="font-medium">Read Article</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <motion.div
                  className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm"
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs rounded-full font-medium`}>
                        {post.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="font-medium text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest technology insights, industry trends, and expert analysis 
              delivered directly to your inbox every week.
            </p>
            <motion.a
              href="#newsletter"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${selectedPost.color} text-white text-sm rounded-full font-medium`}>
                        {selectedPost.category.toUpperCase()}
                      </span>
                      {selectedPost.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full font-medium">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedPost.title}</h2>
                    <div className="flex items-center gap-6 text-gray-400 text-sm">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {selectedPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(selectedPost.publishDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {selectedPost.readTime}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">{selectedPost.excerpt}</p>
                  <p className="text-gray-300 leading-relaxed">{selectedPost.content}</p>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedBlog;