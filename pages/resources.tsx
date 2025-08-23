import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  ArrowRight,
  Search, 
  Video,
  Headphones,
  Calendar,
  Users,
  Star,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Book,
  Code
} from 'lucide-react';
import Link from 'next/link';

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, color: 'from-cyan-400 to-purple-600' },
    { id: 'ai-consciousness', name: 'AI Consciousness', icon: Brain, color: 'from-purple-400 to-pink-600' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-blue-400 to-cyan-600' },
    { id: 'space-technology', name: 'Space Technology', icon: Rocket, color: 'from-indigo-400 to-purple-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-400 to-orange-600' },
    { id: 'cloud-computing', name: 'Cloud Computing', icon: Cloud, color: 'from-emerald-400 to-teal-600' }
  ];

  const types = [
    { id: 'all', name: 'All Types', icon: FileText, color: 'from-cyan-400 to-purple-600' },
    { id: 'whitepapers', name: 'Whitepapers', icon: FileText, color: 'from-blue-400 to-cyan-600' },
    { id: 'research', name: 'Research Papers', icon: Book, color: 'from-purple-400 to-pink-600' },
    { id: 'webinars', name: 'Webinars', icon: Video, color: 'from-green-400 to-emerald-600' },
    { id: 'podcasts', name: 'Podcasts', icon: Headphones, color: 'from-yellow-400 to-orange-600' },
    { id: 'tools', name: 'Tools & Calculators', icon: Code, color: 'from-red-400 to-pink-600' }
  ];

  const whitepapers = [
    {
      id: 1,
      title: "The Future of AI Consciousness: Beyond Traditional Machine Learning",
      description: "Explore the revolutionary advancements in AI consciousness and emotional intelligence that are reshaping human-computer interaction.",
      category: "ai-consciousness",
      type: "whitepapers",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "45 min",
      downloads: "2.8K",
      rating: 4.9,
      featured: true,
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      tags: ["AI Consciousness", "Emotional Intelligence", "Machine Learning", "Future Tech"]
    },
    {
      id: 2,
      title: "Quantum Computing in Enterprise: A Practical Implementation Guide",
      description: "Comprehensive guide to implementing quantum computing solutions in enterprise environments with real-world case studies.",
      category: "quantum-computing",
      type: "whitepapers",
      author: "Dr. Michael Rodriguez",
      date: "2024-01-10",
      readTime: "60 min",
      downloads: "1.9K",
      rating: 4.8,
      featured: true,
      icon: Atom,
      color: "from-blue-400 to-cyan-600",
      tags: ["Quantum Computing", "Enterprise", "Implementation", "Case Studies"]
    },
    {
      id: 3,
      title: "Space Resource Intelligence: The Next Frontier of Economic Growth",
      description: "Analysis of space resource intelligence and its potential to revolutionize global economics and resource management.",
      category: "space-technology",
      type: "whitepapers",
      author: "Dr. Emily Watson",
      date: "2024-01-05",
      readTime: "50 min",
      downloads: "1.5K",
      rating: 4.7,
      featured: true,
      icon: Rocket,
      color: "from-indigo-400 to-purple-600",
      tags: ["Space Technology", "Resource Intelligence", "Economic Growth", "Innovation"]
    }
  ];

  const researchPapers = [
    {
      id: 1,
      title: "Neural Architecture for Emotional Intelligence in AI Systems",
      description: "Research paper on developing neural architectures that enable AI systems to understand and respond to human emotions.",
      category: "ai-consciousness",
      type: "research",
      author: "Dr. James Wilson",
      date: "2024-01-20",
      readTime: "90 min",
      downloads: "1.2K",
      rating: 4.9,
      featured: false,
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      tags: ["Neural Networks", "Emotional Intelligence", "AI Research", "Psychology"]
    },
    {
      id: 2,
      title: "Quantum Machine Learning Algorithms for Drug Discovery",
      description: "Novel quantum algorithms that accelerate drug discovery processes by orders of magnitude.",
      category: "quantum-computing",
      type: "research",
      author: "Dr. Lisa Park",
      date: "2024-01-18",
      readTime: "75 min",
      downloads: "980",
      rating: 4.8,
      featured: false,
      icon: Atom,
      color: "from-blue-400 to-cyan-600",
      tags: ["Quantum ML", "Drug Discovery", "Healthcare", "Algorithms"]
    },
    {
      id: 3,
      title: "Satellite Constellation Optimization for Global Coverage",
      description: "Advanced algorithms for optimizing satellite constellations to provide seamless global coverage and connectivity.",
      category: "space-technology",
      type: "research",
      author: "Dr. Robert Kim",
      date: "2024-01-12",
      readTime: "65 min",
      downloads: "750",
      rating: 4.6,
      featured: false,
      icon: Rocket,
      color: "from-indigo-400 to-purple-600",
      tags: ["Satellite Technology", "Optimization", "Global Coverage", "Connectivity"]
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "AI Consciousness: The Next Revolution in Human-Computer Interaction",
      description: "Join our experts as they discuss the latest breakthroughs in AI consciousness and what it means for the future.",
      category: "ai-consciousness",
      type: "webinars",
      author: "Dr. Sarah Chen & Dr. David Thompson",
      date: "2024-02-15",
      duration: "60 min",
      attendees: "2.5K",
      rating: 4.9,
      featured: true,
      icon: Video,
      color: "from-purple-400 to-pink-600",
      tags: ["AI Consciousness", "Human-Computer Interaction", "Future Tech", "Expert Panel"]
    },
    {
      id: 2,
      title: "Quantum Computing in Practice: Real-World Applications",
      description: "Learn how leading companies are implementing quantum computing solutions to solve complex business problems.",
      category: "quantum-computing",
      type: "webinars",
      author: "Dr. Michael Rodriguez & Industry Leaders",
      date: "2024-02-20",
      duration: "75 min",
      attendees: "1.8K",
      rating: 4.8,
      featured: true,
      icon: Video,
      color: "from-blue-400 to-cyan-600",
      tags: ["Quantum Computing", "Business Applications", "Case Studies", "Industry Leaders"]
    },
    {
      id: 3,
      title: "Space Technology Trends: What's Next in 2024",
      description: "Explore the latest trends in space technology and how they're shaping the future of space exploration and commerce.",
      category: "space-technology",
      type: "webinars",
      author: "Dr. Emily Watson & Space Industry Experts",
      date: "2024-02-25",
      duration: "90 min",
      attendees: "1.2K",
      rating: 4.7,
      featured: true,
      icon: Video,
      color: "from-indigo-400 to-purple-600",
      tags: ["Space Technology", "Trends 2024", "Space Exploration", "Industry Insights"]
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "The Future of AI: Consciousness and Beyond",
      description: "Weekly podcast exploring the latest developments in AI consciousness and what it means for humanity.",
      category: "ai-consciousness",
      type: "podcasts",
      host: "Dr. Sarah Chen",
      episodes: 45,
      duration: "30-45 min",
      listeners: "15K",
      rating: 4.9,
      featured: true,
      icon: Headphones,
      color: "from-purple-400 to-pink-600",
      tags: ["AI Consciousness", "Weekly Updates", "Expert Interviews", "Future Tech"]
    },
    {
      id: 2,
      title: "Quantum Insights: Computing Beyond Classical Limits",
      description: "Deep dives into quantum computing breakthroughs, applications, and the future of computational power.",
      category: "quantum-computing",
      type: "podcasts",
      host: "Dr. Michael Rodriguez",
      episodes: 32,
      duration: "40-60 min",
      listeners: "12K",
      rating: 4.8,
      featured: true,
      icon: Headphones,
      color: "from-blue-400 to-cyan-600",
      tags: ["Quantum Computing", "Deep Dives", "Breakthroughs", "Computational Power"]
    },
    {
      id: 3,
      title: "Space Frontiers: Technology and Innovation",
      description: "Exploring the cutting-edge of space technology and its impact on Earth and beyond.",
      category: "space-technology",
      type: "podcasts",
      host: "Dr. Emily Watson",
      episodes: 28,
      duration: "35-50 min",
      listeners: "8K",
      rating: 4.7,
      featured: true,
      icon: Headphones,
      color: "from-indigo-400 to-purple-600",
      tags: ["Space Technology", "Innovation", "Space Exploration", "Technology Impact"]
    }
  ];

  const tools = [
    {
      id: 1,
      title: "AI Consciousness Assessment Tool",
      description: "Evaluate the emotional intelligence and consciousness capabilities of your AI systems with our comprehensive assessment tool.",
      category: "ai-consciousness",
      type: "tools",
      author: "Zion Tech Group",
      version: "2.1.0",
      downloads: "5.2K",
      rating: 4.9,
      featured: true,
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      tags: ["AI Assessment", "Emotional Intelligence", "Consciousness", "Evaluation"]
    },
    {
      id: 2,
      title: "Quantum Circuit Simulator",
      description: "Interactive quantum circuit simulator for designing and testing quantum algorithms before deployment.",
      category: "quantum-computing",
      type: "tools",
      author: "Zion Tech Group",
      version: "1.8.0",
      downloads: "3.8K",
      rating: 4.8,
      featured: true,
      icon: Atom,
      color: "from-blue-400 to-cyan-600",
      tags: ["Quantum Simulator", "Circuit Design", "Algorithm Testing", "Interactive"]
    },
    {
      id: 3,
      title: "Space Resource Calculator",
      description: "Advanced calculator for estimating space resource values, extraction costs, and economic feasibility.",
      category: "space-technology",
      type: "tools",
      author: "Zion Tech Group",
      version: "1.5.0",
      downloads: "2.1K",
      rating: 4.7,
      featured: true,
      icon: Rocket,
      color: "from-indigo-400 to-purple-600",
      tags: ["Resource Calculator", "Space Economics", "Extraction Costs", "Feasibility"]
    },
    {
      id: 4,
      title: "Cybersecurity Risk Assessment",
      description: "Comprehensive cybersecurity risk assessment tool with quantum-resistant security recommendations.",
      category: "cybersecurity",
      type: "tools",
      author: "Zion Tech Group",
      version: "2.0.0",
      downloads: "4.5K",
      rating: 4.9,
      featured: true,
      icon: Shield,
      color: "from-red-400 to-orange-600",
      tags: ["Cybersecurity", "Risk Assessment", "Quantum-Resistant", "Security"]
    }
  ];

  const allResources = [...whitepapers, ...researchPapers, ...webinars, ...podcasts, ...tools];

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredResources = allResources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'whitepapers': return FileText;
      case 'research': return Book;
      case 'webinars': return Video;
      case 'podcasts': return Headphones;
      case 'tools': return Code;
      default: return FileText;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'whitepapers': return 'from-blue-400 to-cyan-600';
      case 'research': return 'from-purple-400 to-pink-600';
      case 'webinars': return 'from-green-400 to-emerald-600';
      case 'podcasts': return 'from-yellow-400 to-orange-600';
      case 'tools': return 'from-red-400 to-pink-600';
      default: return 'from-cyan-400 to-purple-600';
    }
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Resources & Insights
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Access our comprehensive library of whitepapers, research papers, webinars, 
                    podcasts, and tools to stay ahead in the world of AI consciousness and quantum computing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-400/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                {types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedType === type.id
                        ? `bg-gradient-to-r ${type.color} text-white border-transparent`
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-400/50'
                    }`}
                  >
                    <type.icon className="w-4 h-4" />
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our most popular and impactful resources, carefully curated to help you stay ahead of the curve.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredResources.slice(0, 6).map((resource, index) => (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/resources/${resource.type}/${resource.id}`}>
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl">
                            <resource.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/30">
                              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                            </span>
                            <div className="flex items-center space-x-1 text-sm text-gray-400">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{resource.rating}</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {resource.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {resource.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{resource.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(resource.date)}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            {resource.readTime && (
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{resource.readTime}</span>
                              </div>
                            )}
                            {resource.duration && (
                              <div className="flex items-center space-x-1">
                                <Play className="w-4 h-4" />
                                <span>{resource.duration}</span>
                              </div>
                            )}
                            {resource.downloads && (
                              <div className="flex items-center space-x-1">
                                <Download className="w-4 h-4" />
                                <span>{resource.downloads}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                            <span className="font-semibold">View Resource</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Dive deep into specific areas of interest with our categorized resource collections.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.filter(cat => cat.id !== 'all').map((category, index) => {
                const categoryResources = allResources.filter(resource => resource.category === category.id);
                const featuredCategoryResource = categoryResources.find(resource => resource.featured);
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/resources/category/${category.id}`}>
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                        <div className="p-8">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                            <category.icon className="w-8 h-8 text-white" />
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {category.name}
                          </h3>

                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {categoryResources.length} resources available
                          </p>

                          {featuredCategoryResource && (
                            <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                              <h4 className="font-semibold text-white mb-2">Featured:</h4>
                              <p className="text-sm text-gray-300 line-clamp-2">
                                {featuredCategoryResource.title}
                              </p>
                            </div>
                          )}

                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                            <span className="font-semibold">Explore Category</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Latest Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Stay updated with our newest whitepapers, research, and insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularResources.slice(0, 9).map((resource, index) => (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/resources/${resource.type}/${resource.id}`}>
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl">
                            {(() => {
                              const IconComponent = getResourceIcon(resource.type);
                              return <IconComponent className="w-5 h-5 text-white" />;
                            })()}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            resource.type === 'whitepapers' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            resource.type === 'research' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                            resource.type === 'webinars' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            resource.type === 'podcasts' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}>
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {resource.title}
                        </h3>

                        <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                          {resource.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{resource.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(resource.date)}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-xs text-gray-400">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm">
                            <span className="font-semibold">View</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about new resources, research breakthroughs, and industry insights 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Custom Research or Insights?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our research team can conduct custom studies and provide tailored insights 
                for your specific industry or use case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Research
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services/research"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Research Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ResourcesPage;