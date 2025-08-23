import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  ArrowRight,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Cpu,
  Calendar,
  User,
  Eye,
  Star
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const WhitePapersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: <FileText className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" /> }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'AI Consciousness: The Next Frontier in Artificial Intelligence',
      description: 'A comprehensive analysis of AI consciousness evolution, neural network architecture, and ethical implications for enterprise applications.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      authorTitle: 'Chief AI Scientist',
      publishDate: '2025-01-15',
      pages: 45,
      size: '2.4 MB',
      downloads: 2847,
      rating: 4.9,
      featured: true,
      tags: ['AI Consciousness', 'Neural Networks', 'Ethics', 'Enterprise AI']
    },
    {
      id: 2,
      title: 'Quantum Computing Security: Preparing for the Quantum Era',
      description: 'In-depth analysis of quantum-resistant cryptography, post-quantum security protocols, and implementation strategies for organizations.',
      category: 'quantum',
      author: 'Prof. Michael Rodriguez',
      authorTitle: 'Quantum Research Director',
      publishDate: '2025-01-10',
      pages: 32,
      size: '1.8 MB',
      downloads: 1892,
      rating: 4.8,
      featured: false,
      tags: ['Quantum Security', 'Cryptography', 'Post-Quantum', 'Implementation']
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: Technologies and Applications',
      description: 'Analysis of satellite technology, space data processing, and resource intelligence applications for environmental and commercial use.',
      category: 'space',
      author: 'Dr. Emily Watson',
      authorTitle: 'Space Technology Lead',
      publishDate: '2025-01-08',
      pages: 28,
      size: '3.1 MB',
      downloads: 1247,
      rating: 4.7,
      featured: false,
      tags: ['Space Tech', 'Resource Intelligence', 'Satellite', 'Environmental']
    },
    {
      id: 4,
      title: 'Zero Trust Security Architecture: Implementation Guide',
      description: 'Comprehensive guide to implementing zero trust security principles in modern enterprise environments.',
      category: 'security',
      author: 'Security Team',
      authorTitle: 'Cybersecurity Experts',
      publishDate: '2025-01-05',
      pages: 38,
      size: '2.1 MB',
      downloads: 2156,
      rating: 4.9,
      featured: true,
      tags: ['Zero Trust', 'Cybersecurity', 'Enterprise Security', 'Implementation']
    },
    {
      id: 5,
      title: 'Cloud-Native Architecture: Best Practices for 2025',
      description: 'Modern cloud architecture patterns, microservices design, and DevOps practices for scalable applications.',
      category: 'cloud',
      author: 'Engineering Team',
      authorTitle: 'Cloud Architecture Specialists',
      publishDate: '2025-01-03',
      pages: 42,
      size: '2.8 MB',
      downloads: 1678,
      rating: 4.8,
      featured: false,
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability']
    },
    {
      id: 6,
      title: 'AI-Powered Business Process Automation',
      description: 'How artificial intelligence is transforming business processes and creating new opportunities for automation.',
      category: 'ai',
      author: 'Dr. Alex Thompson',
      authorTitle: 'AI Business Strategist',
      publishDate: '2024-12-28',
      pages: 35,
      size: '2.2 MB',
      downloads: 1987,
      rating: 4.7,
      featured: false,
      tags: ['Business Process', 'Automation', 'AI Strategy', 'Digital Transformation']
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Download in-depth research papers and technical guidance on AI consciousness, quantum computing, space technology, and cybersecurity from Zion Tech Group."
        keywords={["white papers", "research papers", "technical guidance", "AI consciousness", "quantum computing", "space technology", "cybersecurity", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                White Papers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Download in-depth research papers and technical guidance on cutting-edge technologies 
                from our team of experts.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search white papers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                          selectedCategory === category.id
                            ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                            : 'border-gray-700 text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        {category.icon}
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    paper.featured ? 'border-cyan-400/50' : 'border-gray-700 hover:border-cyan-400/50'
                  }`}
                >
                  {paper.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-2" />
                      Featured
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{paper.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{paper.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {paper.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(paper.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {paper.pages} pages
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      {paper.downloads} downloads
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {paper.rating}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Download White Paper
                  </button>
                </motion.div>
              ))}
            </div>
            
            {filteredPapers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No white papers found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our research team can conduct custom studies and create white papers tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Research
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Research Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhitePapersPage;