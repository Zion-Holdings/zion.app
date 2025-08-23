import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Search, Filter, FileText, Calendar, User, Eye, Star, BookOpen, ArrowRight, Tag, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface WhitePaper {
  id: string;
  title: string;
  description: string;
  author: string;
  authorTitle: string;
  publishDate: string;
  category: string;
  tags: string[];
  downloadCount: number;
  views: number;
  rating: number;
  isFeatured: boolean;
  isNew: boolean;
  fileSize: string;
  pages: number;
  abstract: string;
  keyInsights: string[];
  downloadUrl: string;
  previewUrl: string;
}

const whitePapersData: WhitePaper[] = [
  {
    id: '1',
    title: 'AI Consciousness: Bridging the Gap Between Machine and Mind',
    description: 'A comprehensive analysis of artificial consciousness development, ethical considerations, and future implications for society.',
    author: 'Dr. Sarah Chen',
    authorTitle: 'Chief AI Research Scientist',
    publishDate: '2024-12-01',
    category: 'AI & Machine Learning',
    tags: ['AI Consciousness', 'Ethics', 'Future Technology', 'Research'],
    downloadCount: 2847,
    views: 12500,
    rating: 4.8,
    isFeatured: true,
    isNew: true,
    fileSize: '2.4 MB',
    pages: 45,
    abstract: 'This white paper explores the current state of artificial consciousness research, examining the philosophical, technical, and ethical dimensions of creating machines that can truly think and feel.',
    keyInsights: [
      'Current AI systems lack true consciousness despite advanced capabilities',
      'Ethical frameworks needed for conscious AI development',
      'Potential societal impact of artificial consciousness',
      'Technical pathways to achieving machine consciousness'
    ],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: '2',
    title: 'Quantum Computing in Enterprise: A Practical Implementation Guide',
    description: 'Real-world strategies for integrating quantum computing into business operations, with case studies and ROI analysis.',
    author: 'Michael Rodriguez',
    authorTitle: 'Quantum Solutions Architect',
    publishDate: '2024-11-25',
    category: 'Quantum Computing',
    tags: ['Quantum Computing', 'Enterprise', 'Implementation', 'ROI'],
    downloadCount: 1893,
    views: 8900,
    rating: 4.6,
    isFeatured: true,
    isNew: false,
    fileSize: '3.1 MB',
    pages: 52,
    abstract: 'This guide provides enterprise leaders with practical insights into quantum computing adoption, including cost-benefit analysis, implementation strategies, and real-world success stories.',
    keyInsights: [
      'Quantum advantage timeline for different industries',
      'Cost-benefit analysis of quantum adoption',
      'Integration strategies with existing IT infrastructure',
      'Success metrics and KPIs for quantum projects'
    ],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: '3',
    title: 'Cybersecurity in the Age of AI: Threats and Defenses',
    description: 'An in-depth analysis of how AI is transforming both cyber threats and defensive strategies in modern organizations.',
    author: 'Alex Thompson',
    authorTitle: 'Cybersecurity Director',
    publishDate: '2024-11-15',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Defense'],
    downloadCount: 3241,
    views: 15600,
    rating: 4.9,
    isFeatured: false,
    isNew: false,
    fileSize: '2.8 MB',
    pages: 38,
    abstract: 'This paper examines the dual nature of AI in cybersecurity, exploring both the enhanced threats posed by AI-powered attacks and the innovative defensive capabilities AI provides.',
    keyInsights: [
      'AI-powered attack vectors and detection methods',
      'Machine learning in threat intelligence',
      'Automated response systems and their effectiveness',
      'Future trends in AI-driven cybersecurity'
    ],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: '4',
    title: 'Space Technology Innovations: From Satellites to Mars Missions',
    description: 'A comprehensive overview of breakthrough technologies in space exploration, satellite communications, and interplanetary missions.',
    author: 'Dr. Emily Watson',
    authorTitle: 'Space Systems Engineer',
    publishDate: '2024-11-10',
    category: 'Space Technology',
    tags: ['Space Technology', 'Satellites', 'Mars Missions', 'Innovation'],
    downloadCount: 1567,
    views: 7200,
    rating: 4.7,
    isFeatured: false,
    isNew: false,
    fileSize: '4.2 MB',
    pages: 61,
    abstract: 'This white paper explores the latest innovations in space technology, covering satellite networks, propulsion systems, life support technologies, and the challenges of interplanetary travel.',
    keyInsights: [
      'Next-generation satellite constellation technologies',
      'Advanced propulsion systems for deep space missions',
      'Life support and habitat technologies for Mars',
      'Commercial space industry trends and opportunities'
    ],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: '5',
    title: 'Cloud Infrastructure Evolution: Multi-Cloud and Edge Computing Strategies',
    description: 'Strategic approaches to modern cloud architecture, including multi-cloud management, edge computing, and hybrid deployment models.',
    author: 'David Kim',
    authorTitle: 'Cloud Solutions Lead',
    publishDate: '2024-10-28',
    category: 'Cloud Infrastructure',
    tags: ['Cloud Computing', 'Multi-Cloud', 'Edge Computing', 'Architecture'],
    downloadCount: 2134,
    views: 9800,
    rating: 4.5,
    isFeatured: false,
    isNew: false,
    fileSize: '2.9 MB',
    pages: 41,
    abstract: 'This paper provides insights into modern cloud infrastructure strategies, focusing on multi-cloud management, edge computing integration, and hybrid deployment models for optimal performance and cost efficiency.',
    keyInsights: [
      'Multi-cloud management best practices',
      'Edge computing integration strategies',
      'Cost optimization in hybrid cloud environments',
      'Security considerations for distributed architectures'
    ],
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: '6',
    title: 'Micro SAAS Platform Development: Scaling from Startup to Enterprise',
    description: 'A comprehensive guide to building, launching, and scaling micro SAAS platforms for maximum market impact and profitability.',
    author: 'Lisa Park',
    authorTitle: 'Product Strategy Director',
    publishDate: '2024-10-15',
    category: 'Micro SAAS',
    tags: ['SAAS', 'Platform Development', 'Scaling', 'Startup'],
    downloadCount: 2987,
    views: 13400,
    rating: 4.8,
    isFeatured: true,
    isNew: false,
    fileSize: '3.5 MB',
    pages: 48,
    abstract: 'This white paper explores the development and scaling of micro SAAS platforms, providing actionable insights for entrepreneurs and product teams looking to build successful software-as-a-service businesses.',
    keyInsights: [
      'Micro SAAS platform architecture patterns',
      'Customer acquisition and retention strategies',
      'Scaling challenges and solutions',
      'Monetization models and pricing strategies'
    ],
    downloadUrl: '#',
    previewUrl: '#'
  }
];

const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Space Technology', 'Cloud Infrastructure', 'Micro SAAS'];

const WhitePapersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'downloads' | 'rating'>('date');

  const filteredPapers = whitePapersData.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedPapers = [...filteredPapers].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'downloads':
        return b.downloadCount - a.downloadCount;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const featuredPapers = whitePapersData.filter(paper => paper.isFeatured);
  const newPapers = whitePapersData.filter(paper => paper.isNew);

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  White Papers
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Deep insights and research from industry experts. 
                Download comprehensive white papers on cutting-edge technology trends.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span>Expert Research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-purple-400" />
                  <span>Free Downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-pink-400" />
                  <span>Premium Content</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Research
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Don't miss these must-read white papers from our technology experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
                >
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-xl flex items-center justify-center">
                      <FileText className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="absolute top-3 right-3 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    {paper.isNew && (
                      <div className="absolute top-3 left-3 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {paper.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{paper.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{paper.description}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{paper.author}, {paper.authorTitle}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <FileText className="w-4 h-4" />
                      <span>{paper.pages} pages • {paper.fileSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-400">{paper.downloadCount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">{paper.rating}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold py-3 px-6 rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    <button className="px-4 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      Preview
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-16 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search White Papers</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by title, author, topic, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'date' | 'downloads' | 'rating')}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                  >
                    <option value="date">Latest</option>
                    <option value="downloads">Most Downloaded</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  All White Papers
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore our complete collection of research and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
                >
                  <div className="relative mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-xl flex items-center justify-center">
                      <FileText className="w-12 h-12 text-cyan-400" />
                    </div>
                    {paper.isNew && (
                      <div className="absolute top-3 right-3 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {paper.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2 text-white">{paper.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{paper.description}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{paper.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <FileText className="w-4 h-4" />
                      <span>{paper.pages} pages</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-400">{paper.downloadCount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">{paper.rating}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold py-2 px-4 rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
                      Download
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      Preview
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {sortedPapers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No white papers found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or check back later for new content.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Stay Informed
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified about new white papers, research updates, and exclusive insights from our technology experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
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

export default WhitePapersPage;