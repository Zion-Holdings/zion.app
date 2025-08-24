import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, 
  Calendar, Clock, User, Search,
  FileText, Download
} from 'lucide-react';

const WhitepapersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Whitepapers', icon: FileText, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business & Innovation', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const whitepapers = [
    {
      id: 1,
      title: "AI Consciousness Evolution: A Comprehensive Framework for 2040",
      excerpt: "This groundbreaking whitepaper presents a comprehensive framework for developing AI consciousness, including ethical considerations, technical implementation, and future implications for humanity.",
      category: "ai",
      author: "Dr. Sarah Chen",
      authorRole: "AI Consciousness Research Lead",
      publishDate: "2024-12-01",
      readTime: "45 min read",
      pages: 67,
      downloads: 1247,
      featured: true,
      tags: ["AI Consciousness", "Ethics", "Framework", "2040 Vision"],
      color: "from-purple-500 to-pink-500",
      pdfUrl: "/whitepapers/ai-consciousness-evolution-2040.pdf"
    },
    {
      id: 2,
      title: "Quantum Neural Ecosystems: The Future of Computing Intelligence",
      excerpt: "Explore the revolutionary concept of quantum neural ecosystems that combine quantum computing with artificial intelligence to solve previously impossible computational challenges.",
      category: "quantum",
      author: "Prof. Michael Rodriguez",
      authorRole: "Quantum Computing Specialist",
      publishDate: "2024-11-25",
      readTime: "38 min read",
      pages: 52,
      downloads: 892,
      featured: true,
      tags: ["Quantum Computing", "Neural Networks", "AI", "Computing"],
      color: "from-blue-500 to-cyan-500",
      pdfUrl: "/whitepapers/quantum-neural-ecosystems.pdf"
    },
    {
      id: 3,
      title: "Space Resource Intelligence: Autonomous AI Systems for Cosmic Exploration",
      excerpt: "A comprehensive analysis of AI-powered space exploration systems, autonomous resource identification, and the future of space technology commercialization.",
      category: "space",
      author: "Dr. Elena Petrova",
      authorRole: "Space Technology Lead",
      publishDate: "2024-11-20",
      readTime: "42 min read",
      pages: 58,
      downloads: 756,
      featured: true,
      tags: ["Space Technology", "AI Navigation", "Resource Mining", "Autonomous Systems"],
      color: "from-indigo-500 to-purple-500",
      pdfUrl: "/whitepapers/space-resource-intelligence.pdf"
    },
    {
      id: 4,
      title: "Quantum-Resistant Cybersecurity: Preparing for the Post-Quantum Era",
      excerpt: "An in-depth analysis of quantum threats to current encryption methods and comprehensive strategies for implementing quantum-resistant security solutions.",
      category: "security",
      author: "Alex Thompson",
      authorRole: "Cybersecurity Expert",
      publishDate: "2024-11-15",
      readTime: "35 min read",
      pages: 45,
      downloads: 634,
      featured: false,
      tags: ["Cybersecurity", "Quantum Encryption", "Post-Quantum", "Security"],
      color: "from-red-500 to-orange-500",
      pdfUrl: "/whitepapers/quantum-resistant-cybersecurity.pdf"
    },
    {
      id: 5,
      title: "Autonomous Business Intelligence: The Future of Enterprise Decision Making",
      excerpt: "How AI-powered autonomous systems are revolutionizing business operations, from predictive analytics to automated strategic decision-making processes.",
      category: "business",
      author: "Dr. James Wilson",
      authorRole: "Business Intelligence Director",
      publishDate: "2024-11-10",
      readTime: "40 min read",
      pages: 48,
      downloads: 543,
      featured: false,
      tags: ["Business Intelligence", "Automation", "Predictive Analytics", "AI"],
      color: "from-emerald-500 to-teal-500",
      pdfUrl: "/whitepapers/autonomous-business-intelligence.pdf"
    },
    {
      id: 6,
      title: "Brain-Computer Interface Technology: Merging Human Consciousness with AI",
      excerpt: "A comprehensive study of brain-computer interface developments, neural integration technologies, and the future of human-AI consciousness convergence.",
      category: "ai",
      author: "Dr. Lisa Chang",
      authorRole: "Neural Interface Researcher",
      publishDate: "2024-11-05",
      readTime: "50 min read",
      pages: 72,
      downloads: 478,
      featured: false,
      tags: ["Brain-Computer Interface", "Neural Networks", "Human-AI", "Consciousness"],
      color: "from-purple-500 to-pink-500",
      pdfUrl: "/whitepapers/brain-computer-interface.pdf"
    },
    {
      id: 7,
      title: "Quantum Materials Discovery: AI-Driven Innovation in Materials Science",
      excerpt: "How artificial intelligence is accelerating the discovery of new materials with revolutionary properties for quantum computing and advanced technologies.",
      category: "quantum",
      author: "Dr. Robert Kim",
      authorRole: "Materials Science Researcher",
      publishDate: "2024-10-30",
      readTime: "32 min read",
      pages: 41,
      downloads: 389,
      featured: false,
      tags: ["Quantum Materials", "AI Discovery", "Materials Science", "Innovation"],
      color: "from-blue-500 to-cyan-500",
      pdfUrl: "/whitepapers/quantum-materials-discovery.pdf"
    },
    {
      id: 8,
      title: "AI Ethics and Governance: A Framework for Responsible Innovation",
      excerpt: "A comprehensive framework for ethical AI development, including governance structures, accountability mechanisms, and responsible innovation practices.",
      category: "ai",
      author: "Dr. Maria Santos",
      authorRole: "AI Ethics Specialist",
      publishDate: "2024-10-25",
      readTime: "55 min read",
      pages: 78,
      downloads: 456,
      featured: false,
      tags: ["AI Ethics", "Consciousness", "Responsibility", "Governance"],
      color: "from-purple-500 to-pink-500",
      pdfUrl: "/whitepapers/ai-ethics-governance.pdf"
    }
  ];

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPapers = whitepapers.filter(paper => paper.featured);
  const regularPapers = filteredWhitepapers.filter(paper => !paper.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDownload = (paper: { title: string; pdfUrl: string }) => {
    // In a real application, this would trigger a download
    console.log(`Downloading: ${paper.title}`);
    // You could also track downloads or redirect to a download page
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Research Whitepapers
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Access cutting-edge research and comprehensive technical documentation on 
                AI consciousness, quantum computing, space technology, and revolutionary innovations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#featured-papers"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  View Featured Papers
                </a>
                <a
                  href="#all-papers"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Browse All Papers
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search whitepapers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Whitepapers */}
        <section id="featured-papers" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Whitepapers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important and groundbreaking research publications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPapers.map((paper, index) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold">
                        Featured
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-r ${paper.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-16 h-16 text-white opacity-60" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(paper.publishDate)}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {paper.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {paper.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {paper.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{paper.author}</div>
                            <div className="text-xs text-gray-400">{paper.authorRole}</div>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          {paper.pages} pages
                        </span>
                        <span className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          {paper.downloads} downloads
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Download Button */}
                      <button
                        onClick={() => handleDownload(paper)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Whitepapers */}
        <section id="all-papers" className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Whitepapers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of research and technical documentation
              </p>
            </motion.div>

            {regularPapers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPapers.map((paper, index) => (
                  <motion.article
                    key={paper.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-r ${paper.color} opacity-80`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FileText className="w-12 h-12 text-white opacity-60" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(paper.publishDate)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {paper.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {paper.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                          {paper.excerpt}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                              <User className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-xs text-gray-400">{paper.author}</div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {paper.pages} pages
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {paper.downloads}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {paper.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Download Button */}
                        <button
                          onClick={() => handleDownload(paper)}
                          className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-sm"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 p-6">
                  <FileText className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No whitepapers found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our research team can conduct custom studies and create whitepapers tailored to your specific needs and industry requirements.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Request Custom Research
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Research Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default WhitepapersPage;