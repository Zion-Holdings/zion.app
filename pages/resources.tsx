import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Download, FileText, Video, BookOpen, Code, 
  Search, Filter, ArrowRight, Star, Clock, 
  Users, Tag, ExternalLink, Play, Headphones,
  Database, Cloud, Shield, Brain, Atom, Rocket,
  Calendar, Mail, Share2, Bookmark, Eye
} from 'lucide-react';
import Link from 'next/link';

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Categories', count: 156 },
    { id: 'ai', name: 'AI & Consciousness', count: 42 },
    { id: 'quantum', name: 'Quantum Computing', count: 28 },
    { id: 'space', name: 'Space Technology', count: 19 },
    { id: 'enterprise', name: 'Enterprise IT', count: 35 },
    { id: 'security', name: 'Cybersecurity', count: 22 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 10 }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: 156 },
    { id: 'whitepaper', name: 'Whitepapers', count: 23 },
    { id: 'guide', name: 'Guides', count: 45 },
    { id: 'case-study', name: 'Case Studies', count: 18 },
    { id: 'video', name: 'Videos', count: 34 },
    { id: 'webinar', name: 'Webinars', count: 12 },
    { id: 'tool', name: 'Tools', count: 14 }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI Consciousness Implementation Guide',
      description: 'Comprehensive guide to implementing AI consciousness systems in enterprise environments. Covers architecture, best practices, and real-world applications.',
      category: 'ai',
      type: 'guide',
      format: 'PDF',
      size: '2.4 MB',
      pages: 45,
      author: 'Dr. Sarah Chen',
      authorTitle: 'Chief AI Scientist',
      publishDate: '2024-01-15',
      downloads: 2847,
      rating: 4.9,
      reviews: 156,
      tags: ['AI Consciousness', 'Implementation', 'Enterprise', 'Best Practices'],
      featured: true,
      free: true,
      preview: true
    },
    {
      id: 2,
      title: 'Quantum Computing Security Whitepaper',
      description: 'In-depth analysis of quantum-resistant cryptography and security protocols for the quantum computing era.',
      category: 'quantum',
      type: 'whitepaper',
      format: 'PDF',
      size: '1.8 MB',
      pages: 32,
      author: 'Prof. Michael Rodriguez',
      authorTitle: 'Quantum Research Director',
      publishDate: '2024-01-10',
      downloads: 1892,
      rating: 4.8,
      reviews: 89,
      tags: ['Quantum Security', 'Cryptography', 'Cybersecurity', 'Research'],
      featured: false,
      free: true,
      preview: true
    },
    {
      id: 3,
      title: 'Space Technology Resource Intelligence Report',
      description: 'Analysis of how satellite technology and space data are transforming resource management and environmental monitoring.',
      category: 'space',
      type: 'whitepaper',
      format: 'PDF',
      size: '3.1 MB',
      pages: 28,
      author: 'Dr. Emily Watson',
      authorTitle: 'Space Technology Lead',
      publishDate: '2024-01-08',
      downloads: 1247,
      rating: 4.7,
      reviews: 67,
      tags: ['Space Tech', 'Resource Management', 'Environmental', 'Satellite'],
      featured: false,
      free: true,
      preview: true
    },
    {
      id: 4,
      title: 'Digital Transformation Playbook',
      description: 'Step-by-step guide to modernizing your organization with cutting-edge technology and processes.',
      category: 'enterprise',
      type: 'guide',
      format: 'PDF',
      size: '4.2 MB',
      pages: 67,
      author: 'James Thompson',
      authorTitle: 'Digital Transformation Expert',
      publishDate: '2024-01-05',
      downloads: 3156,
      rating: 4.9,
      reviews: 203,
      tags: ['Digital Transformation', 'Enterprise', 'Modernization', 'Strategy'],
      featured: true,
      free: true,
      preview: true
    },
    {
      id: 5,
      title: 'AI Ethics Framework Implementation',
      description: 'Practical framework for implementing ethical AI practices in your organization.',
      category: 'ai',
      type: 'guide',
      format: 'PDF',
      size: '2.1 MB',
      pages: 38,
      author: 'Dr. Lisa Park',
      authorTitle: 'AI Ethics Researcher',
      publishDate: '2024-01-03',
      downloads: 1987,
      rating: 4.8,
      reviews: 134,
      tags: ['AI Ethics', 'Responsible AI', 'Framework', 'Implementation'],
      featured: false,
      free: true,
      preview: true
    },
    {
      id: 6,
      title: 'Cloud-Native Architecture Patterns',
      description: 'Modern cloud architecture patterns for scalable and resilient applications.',
      category: 'cloud',
      type: 'guide',
      format: 'PDF',
      size: '2.8 MB',
      pages: 41,
      author: 'Alex Chen',
      authorTitle: 'Cloud Architect',
      publishDate: '2024-01-01',
      downloads: 2341,
      rating: 4.7,
      reviews: 98,
      tags: ['Cloud Architecture', 'Microservices', 'Scalability', 'DevOps'],
      featured: false,
      free: true,
      preview: true
    },
    {
      id: 7,
      title: 'Cybersecurity Threat Intelligence Report 2024',
      description: 'Comprehensive analysis of emerging cybersecurity threats and mitigation strategies.',
      category: 'security',
      type: 'whitepaper',
      format: 'PDF',
      size: '3.5 MB',
      pages: 52,
      author: 'Sarah Johnson',
      authorTitle: 'Security Analyst',
      publishDate: '2023-12-28',
      downloads: 4123,
      rating: 4.9,
      reviews: 287,
      tags: ['Cybersecurity', 'Threat Intelligence', 'Security', '2024'],
      featured: true,
      free: true,
      preview: true
    },
    {
      id: 8,
      title: 'Quantum Algorithm Development Tutorial',
      description: 'Hands-on tutorial for developing quantum algorithms using our quantum computing platform.',
      category: 'quantum',
      type: 'guide',
      format: 'Video Series',
      size: '2.3 GB',
      duration: '3 hours',
      author: 'Dr. Robert Kim',
      authorTitle: 'Quantum Developer Advocate',
      publishDate: '2023-12-25',
      downloads: 1567,
      rating: 4.8,
      reviews: 112,
      tags: ['Quantum Algorithms', 'Tutorial', 'Development', 'Hands-on'],
      featured: false,
      free: true,
      preview: true
    }
  ];

  const filteredResources = () => {
    let filtered = resources;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(resource => resource.type === selectedType);
    }

    if (searchQuery) {
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort resources
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'recent':
        filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'from-cyan-500 to-blue-500',
      quantum: 'from-purple-500 to-pink-500',
      space: 'from-blue-500 to-cyan-500',
      enterprise: 'from-green-500 to-emerald-500',
      security: 'from-red-500 to-pink-500',
      cloud: 'from-indigo-500 to-purple-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      ai: <Brain className="w-4 h-4" />,
      quantum: <Atom className="w-4 h-4" />,
      space: <Rocket className="w-4 h-4" />,
      enterprise: <Shield className="w-4 h-4" />,
      security: <Shield className="w-4 h-4" />,
      cloud: <Cloud className="w-4 h-4" />
    };
    return icons[category as keyof typeof icons] || <Tag className="w-4 h-4" />;
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      whitepaper: <FileText className="w-5 h-5" />,
      guide: <BookOpen className="w-5 h-5" />,
      'case-study': <Database className="w-5 h-5" />,
      video: <Video className="w-5 h-5" />,
      webinar: <Play className="w-5 h-5" />,
      tool: <Code className="w-5 h-5" />
    };
    return icons[type as keyof typeof icons] || <FileText className="w-5 h-5" />;
  };

  return (
    <Layout seo={{
      title: 'Resources - Zion Tech Group | AI, Quantum & Space Technology Resources',
      description: 'Access comprehensive resources including whitepapers, guides, case studies, and tools on AI consciousness, quantum computing, space technology, and enterprise IT.',
      keywords: 'resources, whitepapers, guides, case studies, AI consciousness, quantum computing, space technology, enterprise IT, Zion Tech Group',
      url: 'https://ziontechgroup.com/resources'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Knowledge Resources
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Access our comprehensive library of whitepapers, guides, case studies, 
                and tools to accelerate your technology transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#resources" className="btn-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Resources
                </Link>
                <Link href="/webinars" className="btn-secondary">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Webinars
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">156+</div>
                  <div className="text-gray-400">Resources Available</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">45+</div>
                  <div className="text-gray-400">Expert Authors</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25K+</div>
                  <div className="text-gray-400">Downloads</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">4.8</div>
                  <div className="text-gray-400">Average Rating</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources by title, author, or topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              {/* Filters Row */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white border-cyan-500'
                          : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-500/50 hover:text-white'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Type and Sort Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Type Filter */}
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        selectedType === type.id
                          ? 'bg-purple-500 text-white border-purple-500'
                          : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-purple-500/50 hover:text-white'
                      }`}
                    >
                      {type.name} ({type.count})
                    </button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="popular">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section id="resources" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Resources
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Discover our most popular and highly-rated resources to accelerate your technology journey.
                </p>
              </motion.div>

              {/* Resources Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredResources().map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${
                      resource.featured ? 'ring-2 ring-cyan-500/30' : ''
                    }`}
                  >
                    {/* Featured Badge */}
                    {resource.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                        <Star className="w-4 h-4" />
                        Featured Resource
                      </div>
                    )}

                    {/* Resource Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 bg-gradient-to-r ${getCategoryColor(resource.category)} rounded-lg flex items-center justify-center text-white`}>
                          {getCategoryIcon(resource.category)}
                        </div>
                        <span className="text-sm text-gray-400 capitalize">{resource.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                          {getTypeIcon(resource.type)}
                        </div>
                        <span className="text-sm text-gray-400 capitalize">{resource.type.replace('-', ' ')}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {resource.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{resource.author}</p>
                        <p className="text-gray-400 text-sm">{resource.authorTitle}</p>
                      </div>
                    </div>

                    {/* Resource Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{formatDate(resource.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Download className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{resource.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Format and Size */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FileText className="w-4 h-4 text-purple-400" />
                        <span className="text-sm">{resource.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        {resource.pages ? (
                          <>
                            <BookOpen className="w-4 h-4 text-purple-400" />
                            <span className="text-sm">{resource.pages} pages</span>
                          </>
                        ) : resource.duration ? (
                          <>
                            <Clock className="w-4 h-4 text-purple-400" />
                            <span className="text-sm">{resource.duration}</span>
                          </>
                        ) : (
                          <>
                            <Database className="w-4 h-4 text-purple-400" />
                            <span className="text-sm">{resource.size}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {resource.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(resource.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {resource.rating} ({resource.reviews} reviews)
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button className="btn-primary">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </button>
                      
                      {resource.preview && (
                        <button className="btn-secondary">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </button>
                      )}
                      
                      <button className="btn-outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                      
                      <button className="btn-outline">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredResources().length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Resources Found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search criteria or browse all resources.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedType('all');
                    }}
                    className="btn-primary"
                  >
                    View All Resources
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get notified about new resources, exclusive content, and the latest 
                  technology insights from our experts.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Need Custom Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team can create custom 
                resources tailored to your specific needs and requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Custom Resource
                </Link>
                <Link href="/webinars" className="btn-secondary">
                  <Play className="w-5 h-5 mr-2" />
                  Join Live Sessions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;