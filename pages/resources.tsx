import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Download, Code, Video, FileText, 
  Search, Filter, ArrowRight, Brain, Atom, 
  Rocket, Shield, Zap, Users, Star, TrendingUp,
  ExternalLink, Github, Globe, Database, Network, HelpCircle, MessageCircle
} from 'lucide-react';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resourceCategories = [
    {
      id: 'documentation',
      name: 'Documentation',
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      description: 'Comprehensive guides and API references',
      count: 45
    },
    {
      id: 'sdks',
      name: 'SDKs & Libraries',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      description: 'Client libraries and development tools',
      count: 12
    },
    {
      id: 'guides',
      name: 'How-to Guides',
      icon: <FileText className="w-8 h-8 text-green-400" />,
      description: 'Step-by-step tutorials and best practices',
      count: 28
    },
    {
      id: 'videos',
      name: 'Video Tutorials',
      icon: <Video className="w-8 h-8 text-blue-400" />,
      description: 'Visual learning and demonstrations',
      count: 35
    },
    {
      id: 'examples',
      name: 'Code Examples',
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      description: 'Sample code and implementation patterns',
      count: 62
    },
    {
      id: 'community',
      name: 'Community',
      icon: <Users className="w-8 h-8 text-orange-400" />,
      description: 'Forums, discussions, and collaboration',
      count: 18
    }
  ];

  const featuredResources = [
    {
      title: 'AI Consciousness Platform SDK',
      category: 'SDKs & Libraries',
      description: 'Complete SDK for building AI consciousness applications with emotional intelligence and self-awareness capabilities.',
      type: 'SDK',
      language: 'Python, JavaScript, Go',
      downloads: '15.2k',
      rating: '4.9',
      featured: true,
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Quantum Computing Implementation Guide',
      category: 'How-to Guides',
      description: 'Comprehensive guide to implementing quantum-secure infrastructure and quantum algorithms.',
      type: 'Guide',
      language: 'Python, Qiskit',
      downloads: '8.7k',
      rating: '4.8',
      featured: true,
      icon: <Atom className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Autonomous Systems Architecture',
      category: 'Documentation',
      description: 'Complete architecture documentation for building self-managing and self-optimizing business systems.',
      type: 'Documentation',
      language: 'Architecture',
      downloads: '12.1k',
      rating: '4.7',
      featured: true,
      icon: <Rocket className="w-8 h-8 text-green-400" />
    }
  ];

  const recentResources = [
    {
      title: 'AI Emotional Intelligence Training Guide',
      category: 'How-to Guides',
      type: 'Guide',
      language: 'Python',
      date: '2025-01-15',
      downloads: '3.2k'
    },
    {
      title: 'Quantum Internet Security Implementation',
      category: 'Code Examples',
      type: 'Example',
      language: 'Python, Qiskit',
      date: '2025-01-12',
      downloads: '2.8k'
    },
    {
      title: 'Autonomous DevOps Pipeline Setup',
      category: 'Documentation',
      type: 'Documentation',
      language: 'YAML, Python',
      date: '2025-01-10',
      downloads: '4.1k'
    },
    {
      title: 'AI Content Generation API Reference',
      category: 'Documentation',
      type: 'API Reference',
      language: 'REST API',
      date: '2025-01-08',
      downloads: '5.6k'
    },
    {
      title: 'Quantum Materials Discovery Examples',
      category: 'Code Examples',
      type: 'Example',
      language: 'Python, NumPy',
      date: '2025-01-05',
      downloads: '1.9k'
    }
  ];

  const learningPaths = [
    {
      title: 'AI Consciousness Fundamentals',
      description: 'Learn the basics of AI consciousness and emotional intelligence',
      duration: '8 weeks',
      level: 'Beginner',
      modules: 12,
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Quantum Computing Mastery',
      description: 'Master quantum algorithms and quantum-secure infrastructure',
      duration: '12 weeks',
      level: 'Advanced',
      modules: 18,
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Autonomous Systems Engineering',
      description: 'Build self-managing and self-optimizing business operations',
      duration: '10 weeks',
      level: 'Intermediate',
      modules: 15,
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Enterprise AI Integration',
      description: 'Integrate AI solutions into enterprise infrastructure',
      duration: '6 weeks',
      level: 'Intermediate',
      modules: 10,
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? resourceCategories 
    : resourceCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Resources Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Access comprehensive documentation, SDKs, guides, and learning materials 
              for our revolutionary AI consciousness, quantum computing, and autonomous systems.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, documentation, and guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <BookOpen className="w-6 h-6" />
                <span>Documentation</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Code className="w-6 h-6" />
                <span>SDKs & Libraries</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Video className="w-6 h-6" />
                <span>Video Tutorials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-400">Our most popular and essential resources</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">{resource.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {resource.type}
                        </span>
                        <span className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                          {resource.language}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{resource.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {resource.downloads}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {resource.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="font-medium">Download</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Browse Resources
            </h2>
            <p className="text-xl text-gray-400">Find what you need organized by category</p>
          </motion.div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                All Categories
              </button>
              {resourceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-sm text-gray-400">{category.count} resources</span>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Browse</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-400">Structured learning journeys for mastering our technologies</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">{path.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {path.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{path.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-lg font-bold text-white">{path.duration}</div>
                      <div className="text-xs text-gray-400">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-lg font-bold text-white">{path.level}</div>
                      <div className="text-xs text-gray-400">Level</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-lg font-bold text-white">{path.modules}</div>
                      <div className="text-xs text-gray-400">Modules</div>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${path.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    Start Learning Path
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Resources */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Recently Added
            </h2>
            <p className="text-xl text-gray-400">Latest resources and updates</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {recentResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {resource.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Code className="w-4 h-4" />
                          {resource.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {resource.language}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {resource.downloads}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">View</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Join Our Community
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect with developers, share knowledge, and get help from our 
                community of AI consciousness and quantum computing enthusiasts.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Github className="w-6 h-6 text-gray-300" />
                  <span className="text-white">Open Source Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-gray-300" />
                  <span className="text-white">Developer Forums</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-gray-300" />
                  <span className="text-white">Live Q&A Sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-gray-300" />
                  <span className="text-white">Knowledge Sharing</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Need Help?</h3>
                <p className="text-gray-300 mb-6">
                  Can't find what you're looking for? Our support team and community 
                  are here to help you succeed.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="/support"
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                  >
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Support Center</span>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Contact Support</span>
                  </a>
                  <a
                    href="/blog"
                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                  >
                    <FileText className="w-5 h-5 text-green-400" />
                    <span className="text-white">Blog & Updates</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive resources and start building the future with 
              AI consciousness, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-started"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}