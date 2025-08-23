import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, Search, Calendar, User, Clock, ArrowRight, 
  Star, TrendingUp, Brain, Rocket, Globe, Shield,
  Filter, Eye, Share2, Bookmark, Play, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const Webinars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Webinars', icon: <Video className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'metaverse', name: 'Metaverse & VR', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      description: 'Join us for an in-depth exploration of AI consciousness evolution and its implications for the future of technology.',
      category: 'ai',
      speaker: 'Dr. Sarah Chen',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      featured: true,
      image: 'AI-Consciousness-Webinar',
      tags: ['AI', 'Machine Learning', 'Consciousness', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum Computing in Practice: Real-World Applications',
      description: 'Discover how quantum computing is solving complex problems in finance, healthcare, and cryptography.',
      category: 'quantum',
      speaker: 'Dr. Michael Rodriguez',
      date: '2024-02-20',
      time: '1:00 PM EST',
      duration: '75 minutes',
      featured: false,
      image: 'Quantum-Computing-Webinar',
      tags: ['Quantum Computing', 'Applications', 'Finance', 'Healthcare']
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: Mining the Final Frontier',
      description: 'Learn about our advanced satellite technology and how it\'s revolutionizing space resource discovery.',
      category: 'space',
      speaker: 'Dr. Emily Watson',
      date: '2024-02-25',
      time: '3:00 PM EST',
      duration: '60 minutes',
      featured: false,
      image: 'Space-Intelligence-Webinar',
      tags: ['Space Technology', 'Satellites', 'Mining', 'Resources']
    },
    {
      id: 4,
      title: 'Building the Metaverse: From Concept to Reality',
      description: 'Explore the technical challenges and solutions in creating immersive virtual worlds.',
      category: 'metaverse',
      speaker: 'Alex Thompson',
      date: '2024-03-01',
      time: '2:30 PM EST',
      duration: '80 minutes',
      featured: false,
      image: 'Metaverse-Development-Webinar',
      tags: ['Metaverse', 'VR/AR', '3D Graphics', 'Virtual Worlds']
    }
  ];

  const pastWebinars = [
    {
      id: 5,
      title: 'AI-Powered Cybersecurity: Defending Against Quantum Threats',
      description: 'How artificial intelligence is revolutionizing cybersecurity in the quantum era.',
      category: 'security',
      speaker: 'Dr. James Kim',
      date: '2024-01-30',
      duration: '70 minutes',
      views: '2.5k',
      recording: true,
      image: 'AI-Cybersecurity-Webinar',
      tags: ['AI', 'Cybersecurity', 'Quantum', 'Threats']
    },
    {
      id: 6,
      title: 'Quantum Neural Networks: The Next Generation of AI',
      description: 'Exploring the intersection of quantum computing and neural network architectures.',
      category: 'quantum',
      speaker: 'Dr. Lisa Park',
      date: '2024-01-25',
      duration: '85 minutes',
      views: '1.8k',
      recording: true,
      image: 'Quantum-Neural-Webinar',
      tags: ['Quantum Computing', 'Neural Networks', 'AI', 'Architecture']
    },
    {
      id: 7,
      title: 'Space Data Analytics: From Satellites to Insights',
      description: 'How we process and analyze massive amounts of space data for actionable insights.',
      category: 'space',
      speaker: 'Dr. Robert Chen',
      date: '2024-01-20',
      duration: '65 minutes',
      views: '1.2k',
      recording: true,
      image: 'Space-Analytics-Webinar',
      tags: ['Space Technology', 'Data Analytics', 'Satellites', 'Insights']
    },
    {
      id: 8,
      title: 'The Business Case for AI Transformation',
      description: 'Real-world examples of how AI is transforming businesses and creating value.',
      category: 'ai',
      speaker: 'Maria Schmidt',
      date: '2024-01-15',
      duration: '60 minutes',
      views: '3.1k',
      recording: true,
      image: 'AI-Business-Webinar',
      tags: ['AI', 'Business', 'Transformation', 'ROI']
    }
  ];

  const filteredUpcoming = upcomingWebinars.filter(webinar => {
    if (selectedCategory === 'all') return true;
    return webinar.category === selectedCategory;
  });

  const filteredPast = pastWebinars.filter(webinar => {
    if (selectedCategory === 'all') return true;
    return webinar.category === selectedCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'from-blue-500 to-cyan-500';
      case 'quantum': return 'from-purple-500 to-pink-500';
      case 'space': return 'from-green-500 to-emerald-500';
      case 'metaverse': return 'from-orange-500 to-red-500';
      case 'security': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Webinars
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join our expert-led webinars to explore cutting-edge technologies, 
              industry insights, and practical applications of AI, quantum computing, and space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#upcoming" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View Upcoming
              </Link>
              <Link href="#past" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Recordings
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Video className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Brain className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Rocket className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-cyan-500/20 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Register for our upcoming expert-led sessions on cutting-edge technologies
            </p>
          </motion.div>

          {filteredUpcoming.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredUpcoming.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 ${
                    webinar.featured ? 'border-cyan-500/50 scale-105' : 'border-cyan-500/20'
                  }`}
                >
                  {webinar.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(webinar.category)} text-white text-xs font-semibold rounded-full`}>
                        {categories.find(c => c.id === webinar.category)?.name}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {webinar.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{webinar.speaker}</p>
                        <p className="text-gray-400 text-sm">{formatDate(webinar.date)} at {webinar.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {webinar.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                        Register Now
                      </button>
                      
                      <div className="flex items-center space-x-3">
                        <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                          <Bookmark className="w-5 h-5 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                          <Share2 className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-4">No upcoming webinars match your current filters.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Webinars */}
      <section id="past" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch recordings of our previous webinars and learn from industry experts
            </p>
          </motion.div>

          {filteredPast.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPast.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(webinar.category)} text-white text-xs font-semibold rounded-full`}>
                        {categories.find(c => c.id === webinar.category)?.name}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Eye className="w-4 h-4" />
                        {webinar.views}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="text-gray-400 text-sm">{webinar.speaker}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm">{formatDate(webinar.date)}</span>
                      <span className="text-gray-400 text-sm">{webinar.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Recording
                      </button>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                          <Bookmark className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-4">No past webinars match your current filters.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our webinar notifications and never miss an opportunity 
              to learn from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Host a Webinar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Are you an expert in AI, quantum computing, or space technology? 
              We'd love to feature your insights in our webinar series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;