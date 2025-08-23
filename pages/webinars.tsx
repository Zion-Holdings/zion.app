import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Video, Calendar, Clock, Users, ArrowRight, CheckCircle, 
  Star, Play, ExternalLink, Filter, Search, Brain, Atom,
  Shield, Rocket, Globe, Zap
} from 'lucide-react';
import Link from 'next/link';

const Webinars: React.FC = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "The Future of AI Consciousness: Beyond 2025",
      description: "Join Dr. Sarah Chen for an exclusive deep-dive into the next generation of AI consciousness evolution and what it means for humanity.",
      speaker: "Dr. Sarah Chen",
      speakerRole: "AI Research Director",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "90 minutes",
      category: "AI Consciousness",
      level: "Advanced",
      attendees: "1,247",
      image: "/api/placeholder/600/400",
      tags: ["AI Consciousness", "Future Tech", "Research", "Ethics"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: Real-World Applications",
      description: "Discover how quantum computing is solving previously impossible problems in cryptography, drug discovery, and optimization.",
      speaker: "Dr. Michael Rodriguez",
      speakerRole: "Quantum Computing Lead",
      date: "2024-02-22",
      time: "1:00 PM EST",
      duration: "75 minutes",
      category: "Quantum Computing",
      level: "Intermediate",
      attendees: "892",
      image: "/api/placeholder/600/400",
      tags: ["Quantum Computing", "Cryptography", "Drug Discovery", "Optimization"]
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats, New Defenses",
      description: "Learn about the evolving cybersecurity landscape and how AI-powered systems are staying ahead of sophisticated threats.",
      speaker: "Jennifer Park",
      speakerRole: "Cybersecurity Expert",
      date: "2024-03-01",
      time: "3:00 PM EST",
      duration: "60 minutes",
      category: "Cybersecurity",
      level: "All Levels",
      attendees: "1,156",
      image: "/api/placeholder/600/400",
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Defense"]
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "AI Consciousness Evolution: From Theory to Practice",
      description: "A comprehensive overview of how we're implementing consciousness evolution in real AI systems.",
      speaker: "Dr. Sarah Chen",
      speakerRole: "AI Research Director",
      date: "2024-01-20",
      duration: "80 minutes",
      category: "AI Consciousness",
      level: "Intermediate",
      attendees: "2,341",
      recording: "https://ziontechgroup.com/webinars/ai-consciousness-evolution",
      slides: "https://ziontechgroup.com/webinars/ai-consciousness-evolution-slides",
      tags: ["AI Consciousness", "Implementation", "Case Studies"]
    },
    {
      id: 5,
      title: "Space Technology Revolution: Autonomous Exploration Systems",
      description: "How AI and autonomous systems are transforming space exploration and resource discovery.",
      speaker: "Alex Thompson",
      speakerRole: "Space Technology Specialist",
      date: "2024-01-15",
      duration: "70 minutes",
      category: "Space Technology",
      level: "All Levels",
      attendees: "1,892",
      recording: "https://ziontechgroup.com/webinars/space-technology-revolution",
      slides: "https://ziontechgroup.com/webinars/space-technology-revolution-slides",
      tags: ["Space Technology", "Autonomous Systems", "Exploration"]
    },
    {
      id: 6,
      title: "Business Intelligence in the AI Era: Real ROI Stories",
      description: "Real-world examples of how AI-powered business intelligence is driving measurable results.",
      speaker: "David Kim",
      speakerRole: "Business Strategy Director",
      date: "2024-01-10",
      duration: "65 minutes",
      category: "Business Intelligence",
      level: "All Levels",
      attendees: "1,567",
      recording: "https://ziontechgroup.com/webinars/business-intelligence-ai-era",
      slides: "https://ziontechgroup.com/webinars/business-intelligence-ai-era-slides",
      tags: ["Business Intelligence", "ROI", "Case Studies", "AI"]
    }
  ];

  const categories = [
    { name: "AI Consciousness", count: 8, icon: Brain, color: "from-purple-500 to-pink-600" },
    { name: "Quantum Computing", count: 6, icon: Atom, color: "from-blue-500 to-cyan-600" },
    { name: "Cybersecurity", count: 5, icon: Shield, color: "from-green-500 to-emerald-600" },
    { name: "Space Technology", count: 4, icon: Rocket, color: "from-orange-500 to-red-600" },
    { name: "Business Intelligence", count: 3, icon: Globe, color: "from-indigo-500 to-purple-600" }
  ];

  const featuredSpeakers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      expertise: ["AI Consciousness", "Machine Learning", "Ethics"],
      image: "/api/placeholder/200/200",
      webinars: 12
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Quantum Computing Lead",
      expertise: ["Quantum Computing", "Algorithm Design", "Cryptography"],
      image: "/api/placeholder/200/200",
      webinars: 8
    },
    {
      name: "Jennifer Park",
      role: "Cybersecurity Expert",
      expertise: ["AI Security", "Threat Intelligence", "Risk Management"],
      image: "/api/placeholder/200/200",
      webinars: 10
    }
  ];

  return (
    <Layout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on AI consciousness, quantum computing, cybersecurity, and the future of technology."
      keywords="webinars, AI consciousness, quantum computing, cybersecurity, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Webinars & Events
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Learn from industry experts and thought leaders
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Join our live webinars and access recordings from past events covering the latest 
                developments in AI consciousness, quantum computing, and revolutionary technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Register for our upcoming live sessions and secure your spot
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.article
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center relative">
                    <div className="text-center">
                      <Video className="w-16 h-16 text-purple-400/50 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Live Webinar</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30">
                        Live
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                        {webinar.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {webinar.attendees} registered
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {webinar.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold text-sm">{webinar.speaker}</div>
                        <div className="text-gray-400 text-xs">{webinar.speakerRole}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">
                          {new Date(webinar.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="text-gray-400 text-xs">{webinar.time}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {webinar.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                        Register Now
                        <ArrowRight className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find webinars in your area of interest
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {category.count} webinars
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300 justify-center">
                    Browse Webinars
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Past Webinars
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Access recordings and resources from our previous sessions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.article
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center relative">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-blue-400/50 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Recording Available</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                        Available
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                        {webinar.level}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {webinar.attendees} attended
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {webinar.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold text-sm">{webinar.speaker}</div>
                        <div className="text-gray-400 text-xs">{webinar.speakerRole}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">
                          {new Date(webinar.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {webinar.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <a
                          href={webinar.recording}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1"
                        >
                          <Play className="w-4 h-4" />
                          Watch
                        </a>
                        <a
                          href={webinar.slides}
                          className="text-gray-400 hover:text-gray-300 transition-colors duration-300 flex items-center gap-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Slides
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Speakers */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Meet Our Speakers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Learn from industry experts and thought leaders
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                  <div className="text-purple-400 font-semibold mb-3">{speaker.role}</div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {speaker.webinars} webinars delivered
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get notified about upcoming webinars and access to exclusive content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Learn More?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Explore our comprehensive resources and discover how Zion Tech Group is shaping the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Read Our Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Webinars;