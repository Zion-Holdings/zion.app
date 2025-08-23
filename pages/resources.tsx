import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, BookOpen, Video, FileText, 
  ArrowRight, ExternalLink, Search, Filter,
  Calendar, Clock, User, Tag, Star, 
  TrendingUp, Globe, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 45 },
    { id: 'whitepapers', name: 'White Papers', count: 12 },
    { id: 'guides', name: 'Guides & Tutorials', count: 18 },
    { id: 'webinars', name: 'Webinars', count: 8 },
    { id: 'tools', name: 'Tools & Templates', count: 7 }
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'AI Consciousness Implementation Guide',
      description: 'Comprehensive guide to implementing AI consciousness systems in enterprise environments, including best practices, architecture patterns, and case studies.',
      category: 'guides',
      type: 'PDF Guide',
      size: '2.4 MB',
      downloads: 1247,
      views: 0,
      usage: 0,
      rating: 4.9,
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      featured: true,
      tags: ['AI Consciousness', 'Implementation', 'Enterprise', 'Best Practices']
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals Whitepaper',
      description: 'Deep dive into quantum computing principles, applications, and business implications for technology leaders and decision makers.',
      category: 'whitepapers',
      type: 'Whitepaper',
      size: '5.1 MB',
      downloads: 892,
      views: 0,
      usage: 0,
      rating: 4.8,
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-08',
      featured: true,
      tags: ['Quantum Computing', 'Fundamentals', 'Business Impact', 'Technology']
    }
  ];

  const whitepapers = [
    {
      id: 3,
      title: 'The Future of Autonomous Business Systems',
      description: 'Exploring how autonomous systems are reshaping business operations and what this means for the future of work and productivity.',
      category: 'whitepapers',
      type: 'Whitepaper',
      size: '3.2 MB',
      downloads: 567,
      views: 0,
      usage: 0,
      rating: 4.7,
      author: 'Dr. Alex Thompson',
      date: '2024-01-05',
      tags: ['Autonomous Systems', 'Future of Work', 'Business Automation']
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI',
      description: 'Comprehensive analysis of AI-powered cybersecurity threats and the innovative solutions being developed to counter them.',
      category: 'whitepapers',
      type: 'Whitepaper',
      size: '4.8 MB',
      downloads: 423,
      views: 0,
      usage: 0,
      rating: 4.6,
      author: 'Marcus Johnson',
      date: '2024-01-03',
      tags: ['Cybersecurity', 'AI Security', 'Threat Analysis']
    },
    {
      id: 5,
      title: 'Micro-SaaS Architecture Patterns',
      description: 'Detailed guide to building scalable micro-SaaS applications with modern cloud-native technologies and best practices.',
      category: 'whitepapers',
      type: 'Whitepaper',
      size: '2.9 MB',
      downloads: 345,
      views: 0,
      usage: 0,
      rating: 4.5,
      author: 'Lisa Wang',
      date: '2023-12-28',
      tags: ['Micro-SaaS', 'Architecture', 'Cloud Native', 'Scalability']
    }
  ];

  const guides = [
    {
      id: 6,
      title: 'Getting Started with AI Consciousness APIs',
      description: 'Step-by-step tutorial for developers to integrate AI consciousness capabilities into their applications.',
      category: 'guides',
      type: 'Tutorial',
      size: '1.8 MB',
      downloads: 789,
      views: 0,
      usage: 0,
      rating: 4.8,
      author: 'David Kim',
      date: '2024-01-02',
      tags: ['API Integration', 'AI Consciousness', 'Developer Guide', 'Tutorial']
    },
    {
      id: 7,
      title: 'Quantum Machine Learning Implementation',
      description: 'Practical guide to implementing quantum machine learning algorithms and integrating them with classical ML workflows.',
      category: 'guides',
      type: 'Guide',
      size: '3.5 MB',
      downloads: 456,
      views: 0,
      usage: 0,
      rating: 4.7,
      author: 'Dr. Elena Petrova',
      date: '2023-12-30',
      tags: ['Quantum ML', 'Machine Learning', 'Implementation', 'Algorithms']
    },
    {
      id: 8,
      title: 'Enterprise AI Governance Framework',
      description: 'Comprehensive framework for implementing responsible AI governance in enterprise environments.',
      category: 'guides',
      type: 'Framework',
      size: '2.1 MB',
      downloads: 678,
      views: 0,
      usage: 0,
      rating: 4.9,
      author: 'Dr. Robert Chang',
      date: '2023-12-25',
      tags: ['AI Governance', 'Enterprise', 'Ethics', 'Compliance']
    }
  ];

  const webinars = [
    {
      id: 9,
      title: 'AI Consciousness: From Theory to Practice',
      description: 'Join our experts as they demonstrate real-world applications of AI consciousness technology.',
      category: 'webinars',
      type: 'Webinar',
      duration: '60 min',
      downloads: 0,
      views: 1245,
      usage: 0,
      rating: 4.8,
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      tags: ['AI Consciousness', 'Live Demo', 'Expert Panel', 'Q&A']
    },
    {
      id: 10,
      title: 'Quantum Computing for Business Leaders',
      description: 'Executive overview of quantum computing opportunities and strategic implications for business.',
      category: 'webinars',
      type: 'Webinar',
      duration: '45 min',
      downloads: 0,
      views: 892,
      usage: 0,
      rating: 4.7,
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      tags: ['Executive Overview', 'Strategic Planning', 'Business Impact']
    }
  ];

  const tools = [
    {
      id: 11,
      title: 'AI Consciousness Assessment Tool',
      description: 'Interactive tool to evaluate your organization\'s readiness for AI consciousness implementation.',
      category: 'tools',
      type: 'Interactive Tool',
      size: 'Web App',
      downloads: 0,
      views: 0,
      usage: 2341,
      rating: 4.9,
      author: 'Zion Tech Team',
      date: '2024-01-01',
      tags: ['Assessment', 'Readiness', 'Interactive', 'Evaluation']
    },
    {
      id: 12,
      title: 'Quantum Computing ROI Calculator',
      description: 'Calculate the potential return on investment for quantum computing projects in your organization.',
      category: 'tools',
      type: 'Calculator',
      size: 'Web App',
      downloads: 0,
      views: 0,
      usage: 1567,
      rating: 4.6,
      author: 'Finance Team',
      date: '2023-12-20',
      tags: ['ROI Calculator', 'Financial Planning', 'Investment Analysis']
    }
  ];

  const allResources = [...featuredResources, ...whitepapers, ...guides, ...webinars, ...tools];

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
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
      whitepapers: 'from-purple-500 to-pink-500',
      guides: 'from-cyan-500 to-blue-500',
      webinars: 'from-green-500 to-emerald-500',
      tools: 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf guide':
      case 'guide':
      case 'framework':
        return <FileText className="w-5 h-5" />;
      case 'whitepaper':
        return <BookOpen className="w-5 h-5" />;
      case 'tutorial':
        return <Video className="w-5 h-5" />;
      case 'webinar':
        return <Video className="w-5 h-5" />;
      case 'interactive tool':
      case 'calculator':
        return <Zap className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
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
            Resources & Tools
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Access our comprehensive library of whitepapers, guides, webinars, and tools 
            to accelerate your AI consciousness and quantum computing journey.
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
                placeholder="Search resources, guides, and tools..."
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

      {/* Featured Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Resources
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(resource.category)} text-white`}>
                        {categories.find(c => c.id === resource.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(resource.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {resource.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {resource.downloads || resource.views || resource.usage} {resource.downloads ? 'downloads' : resource.views ? 'views' : 'users'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {resource.rating}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-cyan-400">
                        {getTypeIcon(resource.type)}
                        <span className="text-sm font-medium">{resource.type}</span>
                      </div>
                      
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                        Download
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Browse by Category
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => {
              const categoryResources = allResources.filter(r => r.category === category.id);
              const topResource = categoryResources[0];
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <div className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(category.id)} rounded-full flex items-center justify-center mb-4`}>
                        {getTypeIcon(topResource?.type || 'guide')}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {category.id === 'whitepapers' && 'In-depth research papers and technical analysis'}
                        {category.id === 'guides' && 'Step-by-step tutorials and implementation guides'}
                        {category.id === 'webinars' && 'Live and recorded educational sessions'}
                        {category.id === 'tools' && 'Interactive tools, calculators, and templates'}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          {category.count} resources
                        </span>
                        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Resources Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            All Resources
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(resource.category)} text-white`}>
                        {categories.find(c => c.id === resource.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {resource.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        {resource.rating}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-cyan-400 text-sm">
                        {getTypeIcon(resource.type)}
                        <span>{resource.type}</span>
                      </div>
                      
                      <button className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        Download
                      </button>
                    </div>
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
              Get New Resources First
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be the first to access our latest whitepapers, guides, and tools. 
              Subscribe to our resource updates.
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
              Get notified about new resources, exclusive content, and early access to tools.
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
              Need Custom Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team can create custom whitepapers, 
              guides, and tools tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}