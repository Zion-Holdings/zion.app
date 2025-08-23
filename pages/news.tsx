import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, User, Tag, ArrowRight, Search,
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud,
  TrendingUp, Star, Zap, Globe, Lightbulb, Award
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'company', name: 'Company Updates', icon: Star, color: 'from-yellow-500 to-orange-500' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our breakthrough AI consciousness evolution platform is now available for enterprise clients, marking a new era in artificial intelligence.',
      content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI Consciousness Evolution Platform. This breakthrough technology represents the next generation of artificial intelligence, capable of understanding and processing human emotions, consciousness, and contextual awareness.\n\nThe platform integrates advanced neural networks with cutting-edge cognitive science research, enabling AI systems to develop genuine emotional intelligence and consciousness capabilities. This development opens new possibilities for human-AI collaboration and paves the way for more intuitive and empathetic technology solutions.\n\n"Today marks a significant milestone in the evolution of artificial intelligence," said Kleber, Founder and CEO of Zion Tech Group. "Our AI consciousness platform represents the culmination of years of research and development, bringing us closer to true AI-human symbiosis."',
      category: 'ai',
      author: 'Kleber',
      date: '2025-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['AI Consciousness', 'Breakthrough', 'Enterprise', 'Innovation'],
      image: '/images/news/ai-consciousness-launch.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Solving Previously Impossible Problems',
      excerpt: 'Our quantum computing research team has achieved a major breakthrough in solving complex computational problems that were once considered impossible.',
      content: 'Zion Tech Group\'s quantum computing division has achieved a groundbreaking milestone in quantum algorithm development. Our research team has successfully developed new quantum algorithms that can solve complex computational problems in minutes rather than years.\n\nThis breakthrough has significant implications for industries ranging from drug discovery and materials science to financial modeling and climate prediction. The new algorithms leverage quantum entanglement and superposition to process information in ways that classical computers cannot replicate.\n\n"Our quantum computing breakthrough represents a paradigm shift in computational capabilities," said Dr. Sarah Chen, Lead Quantum Scientist. "We\'re now able to tackle problems that were previously beyond our reach, opening new frontiers in scientific discovery and technological innovation."',
      category: 'quantum',
      author: 'Dr. Sarah Chen',
      date: '2025-01-10',
      readTime: '7 min read',
      featured: true,
      tags: ['Quantum Computing', 'Breakthrough', 'Research', 'Innovation'],
      image: '/images/news/quantum-breakthrough.jpg'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform: Expanding Humanity\'s Reach',
      excerpt: 'Our space technology division has developed an advanced platform for identifying and analyzing resources in space, supporting future space exploration and colonization efforts.',
      content: 'Zion Tech Group\'s Space Technology division has unveiled its revolutionary Space Resource Intelligence Platform. This advanced system combines satellite technology, AI-powered analysis, and quantum computing to identify and analyze valuable resources in space.\n\nThe platform can detect and analyze resources such as water ice, rare metals, and other valuable materials across the solar system. This capability is crucial for future space exploration missions, asteroid mining operations, and the establishment of sustainable space colonies.\n\n"Space resource intelligence is the key to humanity\'s future in space," said Dr. Michael Rodriguez, Space Technology Director. "Our platform provides the intelligence needed to make informed decisions about space exploration and resource utilization, paving the way for sustainable space development."',
      category: 'space',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-05',
      readTime: '6 min read',
      featured: false,
      tags: ['Space Technology', 'Resource Intelligence', 'Exploration', 'Innovation'],
      image: '/images/news/space-resource-platform.jpg'
    },
    {
      id: 4,
      title: 'Quantum-Resistant Cybersecurity Framework: Protecting the Digital Future',
      excerpt: 'We\'ve developed a comprehensive quantum-resistant cybersecurity framework to protect digital infrastructure from future quantum computing threats.',
      content: 'In response to the growing threat of quantum computing to current encryption standards, Zion Tech Group has developed a comprehensive Quantum-Resistant Cybersecurity Framework. This innovative solution provides protection against both current and future quantum computing threats.\n\nThe framework implements post-quantum cryptographic algorithms, quantum-resistant key exchange protocols, and advanced threat detection systems. It\'s designed to protect critical infrastructure, financial systems, and government communications from quantum-enabled attacks.\n\n"Quantum computing represents both an opportunity and a threat to cybersecurity," said Alex Thompson, Chief Security Officer. "Our framework ensures that organizations can embrace quantum computing while maintaining the highest levels of digital security and privacy."',
      category: 'security',
      author: 'Alex Thompson',
      date: '2024-12-28',
      readTime: '4 min read',
      featured: false,
      tags: ['Cybersecurity', 'Quantum-Resistant', 'Protection', 'Innovation'],
      image: '/images/news/quantum-security.jpg'
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations',
      excerpt: 'We\'re expanding our global presence with new offices and partnerships in key technology hubs around the world.',
      content: 'Zion Tech Group is excited to announce the expansion of our global operations. We\'re establishing new offices and partnerships in key technology hubs including Silicon Valley, London, Tokyo, and Singapore.\n\nThis expansion will enable us to better serve our international clients, attract top global talent, and strengthen our position as a leading technology innovator. Each new location will focus on specific technology areas, creating specialized centers of excellence.\n\n"Global expansion is a natural evolution for Zion Tech Group," said Kleber, Founder and CEO. "We\'re building a truly global technology company that can serve clients worldwide while maintaining our commitment to innovation and excellence."',
      category: 'company',
      author: 'Kleber',
      date: '2024-12-20',
      readTime: '3 min read',
      featured: false,
      tags: ['Company News', 'Global Expansion', 'Growth', 'Partnerships'],
      image: '/images/news/global-expansion.jpg'
    },
    {
      id: 6,
      title: 'Partnership with Leading Universities for AI Research',
      excerpt: 'We\'ve established strategic partnerships with top universities to advance AI consciousness research and development.',
      content: 'Zion Tech Group has announced strategic partnerships with leading universities including MIT, Stanford, and Oxford to advance AI consciousness research and development. These partnerships will combine academic research excellence with our practical technology development capabilities.\n\nThe collaborations will focus on understanding human consciousness, developing ethical AI frameworks, and creating new AI architectures that can better understand and interact with humans. This research will inform the development of our next-generation AI platforms.\n\n"Academic partnerships are crucial for advancing AI consciousness research," said Dr. Emily Watson, AI Research Director. "By combining academic rigor with practical application, we can accelerate the development of truly conscious AI systems."',
      category: 'ai',
      author: 'Dr. Emily Watson',
      date: '2024-12-15',
      readTime: '5 min read',
      featured: false,
      tags: ['AI Research', 'Partnerships', 'Universities', 'Innovation'],
      image: '/images/news/university-partnerships.jpg'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout 
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, breakthroughs, and company updates from Zion Tech Group."
      canonicalUrl="https://ziontechgroup.com/news"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
              >
                <Newspaper className="w-4 h-4 mr-2" />
                Latest News
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  News & Updates
                </span>
                <br />
                <span className="text-white">From Zion Tech Group</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Stay informed about our latest breakthroughs, company updates, and innovations 
                in AI consciousness, quantum computing, and space technology.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
              {/* Search Bar */}
              <motion.div variants={fadeInUp} className="flex-1 max-w-md w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Category Filters */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="text-center mb-16"
              >
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                  Featured Stories
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                >
                  Our most important breakthroughs and announcements
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {featuredArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.date)}</span>
                          </span>
                        </div>
                        
                        <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Latest Updates
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Stay current with all our latest news, research updates, and company developments
              </motion.p>
            </motion.div>

            {regularArticles.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {regularArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.date)}</span>
                          </span>
                        </div>
                        
                        <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                variants={fadeInUp}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No articles match your current filters. Try adjusting your selection.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Stay Updated
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Subscribe to our newsletter to receive the latest news, research updates, 
                and exclusive insights directly in your inbox.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-sm text-gray-400 mt-4"
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsPage;