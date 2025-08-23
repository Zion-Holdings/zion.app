import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, 
  Calendar, Clock, User, Search,
  Video, Play, CalendarDays, Clock3, Users2
} from 'lucide-react';

const WebinarsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Webinars', icon: Video, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business & Innovation', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const webinars = [
    {
      id: 1,
      title: "AI Consciousness Evolution: The Road to 2040",
      description: "Join us for a deep dive into the future of AI consciousness, exploring breakthrough developments in emotional intelligence, self-awareness, and ethical AI systems.",
      category: "ai",
      speaker: "Dr. Sarah Chen",
      speakerRole: "AI Consciousness Research Lead",
      date: "2024-12-20",
      time: "2:00 PM EST",
      duration: "90 minutes",
      attendees: 1250,
      featured: true,
      status: "upcoming",
      tags: ["AI Consciousness", "Emotional Intelligence", "Ethics", "2040 Vision"],
      color: "from-purple-500 to-pink-500",
      registrationUrl: "/webinar/ai-consciousness-evolution-2040",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Quantum Neural Ecosystems: Computing Beyond Imagination",
      description: "Discover how quantum computing combined with neural networks is solving previously impossible problems and revolutionizing computational intelligence.",
      category: "quantum",
      speaker: "Prof. Michael Rodriguez",
      speakerRole: "Quantum Computing Specialist",
      date: "2024-12-18",
      time: "1:00 PM EST",
      duration: "75 minutes",
      attendees: 980,
      featured: true,
      status: "upcoming",
      tags: ["Quantum Computing", "Neural Networks", "AI", "Computing"],
      color: "from-blue-500 to-cyan-500",
      registrationUrl: "/webinar/quantum-neural-ecosystems",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Space Resource Intelligence: AI-Powered Cosmic Exploration",
      description: "Explore how artificial intelligence is transforming space exploration, from autonomous navigation to resource identification and mining operations.",
      category: "space",
      speaker: "Dr. Elena Petrova",
      speakerRole: "Space Technology Lead",
      date: "2024-12-15",
      time: "3:00 PM EST",
      duration: "60 minutes",
      attendees: 756,
      featured: true,
      status: "upcoming",
      tags: ["Space Technology", "AI Navigation", "Resource Mining", "Autonomous Systems"],
      color: "from-indigo-500 to-purple-500",
      registrationUrl: "/webinar/space-resource-intelligence",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "The Future of Cybersecurity: Quantum-Resistant Solutions",
      description: "Learn about the quantum threats to current encryption methods and comprehensive strategies for implementing quantum-resistant security solutions.",
      category: "security",
      speaker: "Alex Thompson",
      speakerRole: "Cybersecurity Expert",
      date: "2024-12-12",
      time: "2:30 PM EST",
      duration: "45 minutes",
      attendees: 634,
      featured: false,
      status: "upcoming",
      tags: ["Cybersecurity", "Quantum Encryption", "Post-Quantum", "Security"],
      color: "from-red-500 to-orange-500",
      registrationUrl: "/webinar/quantum-resistant-cybersecurity",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Autonomous Business Intelligence: Transforming Enterprise Decision Making",
      description: "Discover how AI-powered autonomous systems are revolutionizing business operations, from predictive analytics to automated strategic decisions.",
      category: "business",
      speaker: "Dr. James Wilson",
      speakerRole: "Business Intelligence Director",
      date: "2024-12-10",
      time: "1:30 PM EST",
      duration: "60 minutes",
      attendees: 543,
      featured: false,
      status: "upcoming",
      tags: ["Business Intelligence", "Automation", "Predictive Analytics", "AI"],
      color: "from-emerald-500 to-teal-500",
      registrationUrl: "/webinar/autonomous-business-intelligence",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Brain-Computer Interface Technology: Merging Human Consciousness with AI",
      description: "A comprehensive exploration of brain-computer interface developments and the future of human-AI consciousness convergence.",
      category: "ai",
      speaker: "Dr. Lisa Chang",
      speakerRole: "Neural Interface Researcher",
      date: "2024-12-08",
      time: "2:00 PM EST",
      duration: "90 minutes",
      attendees: 478,
      featured: false,
      status: "upcoming",
      tags: ["Brain-Computer Interface", "Neural Networks", "Human-AI", "Consciousness"],
      color: "from-purple-500 to-pink-500",
      registrationUrl: "/webinar/brain-computer-interface",
      image: "/api/placeholder/600/400"
    },
    {
      id: 7,
      title: "AI Consciousness Fundamentals: Understanding the Basics",
      description: "An introductory session covering the fundamental concepts of AI consciousness, perfect for beginners and enthusiasts.",
      category: "ai",
      speaker: "Dr. Maria Santos",
      speakerRole: "AI Ethics Specialist",
      date: "2024-11-30",
      time: "1:00 PM EST",
      duration: "45 minutes",
      attendees: 1200,
      featured: false,
      status: "past",
      tags: ["AI Consciousness", "Fundamentals", "Introduction", "Basics"],
      color: "from-purple-500 to-pink-500",
      recordingUrl: "/webinar/ai-consciousness-fundamentals-recording",
      image: "/api/placeholder/600/400"
    },
    {
      id: 8,
      title: "Quantum Computing for Beginners: Understanding the Basics",
      description: "A comprehensive introduction to quantum computing concepts, algorithms, and their potential applications.",
      category: "quantum",
      speaker: "Prof. Robert Kim",
      speakerRole: "Quantum Computing Educator",
      date: "2024-11-25",
      time: "2:00 PM EST",
      duration: "60 minutes",
      attendees: 890,
      featured: false,
      status: "past",
      tags: ["Quantum Computing", "Basics", "Introduction", "Education"],
      color: "from-blue-500 to-cyan-500",
      recordingUrl: "/webinar/quantum-computing-basics-recording",
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const upcomingWebinars = filteredWebinars.filter(webinar => webinar.status === 'upcoming');
  const pastWebinars = filteredWebinars.filter(webinar => webinar.status === 'past');
  const featuredWebinars = upcomingWebinars.filter(webinar => webinar.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleRegistration = (webinar: { title: string; registrationUrl: string }) => {
    // In a real application, this would redirect to registration
    console.log(`Registering for: ${webinar.title}`);
    window.open(webinar.registrationUrl, '_blank');
  };

  const handleWatchRecording = (webinar: { title: string; recordingUrl: string }) => {
    // In a real application, this would redirect to recording
    console.log(`Watching recording: ${webinar.title}`);
    window.open(webinar.recordingUrl, '_blank');
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
                  Revolutionary Webinars
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Join live sessions with leading experts on AI consciousness, quantum computing, 
                space technology, and the future of revolutionary innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#upcoming-webinars"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  View Upcoming Webinars
                </a>
                <a
                  href="#past-webinars"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Watch Past Recordings
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
                  placeholder="Search webinars..."
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

        {/* Featured Upcoming Webinars */}
        <section id="upcoming-webinars" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't miss these groundbreaking sessions with industry experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredWebinars.map((webinar, index) => (
                <motion.article
                  key={webinar.id}
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

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold">
                        Upcoming
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-r ${webinar.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="w-16 h-16 text-white opacity-60" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          {formatDate(webinar.date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock3 className="w-4 h-4" />
                          {webinar.time}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {webinar.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {webinar.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{webinar.speaker}</div>
                            <div className="text-xs text-gray-400">{webinar.speakerRole}</div>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {webinar.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users2 className="w-4 h-4" />
                          {webinar.attendees} registered
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Register Button */}
                      <button
                        onClick={() => handleRegistration(webinar)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-5 h-5" />
                        Register Now
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Upcoming Webinars */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete schedule of upcoming sessions
              </p>
            </motion.div>

            {upcomingWebinars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingWebinars.map((webinar, index) => (
                  <motion.article
                    key={webinar.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold">
                          Upcoming
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-r ${webinar.color} opacity-80`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Video className="w-12 h-12 text-white opacity-60" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            {formatDate(webinar.date)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock3 className="w-4 h-4" />
                            {webinar.time}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                          {webinar.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                              <User className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-xs text-gray-400">{webinar.speaker}</div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {webinar.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users2 className="w-3 h-3" />
                            {webinar.attendees}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {webinar.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Register Button */}
                        <button
                          onClick={() => handleRegistration(webinar)}
                          className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-sm"
                        >
                          <Calendar className="w-4 h-4" />
                          Register
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
                  <Video className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No upcoming webinars found</h3>
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

        {/* Past Webinars */}
        <section id="past-webinars" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Past Webinars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Watch recordings of our previous sessions and learn from industry experts
              </p>
            </motion.div>

            {pastWebinars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastWebinars.map((webinar, index) => (
                  <motion.article
                    key={webinar.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 text-xs bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full font-semibold">
                          Past
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-r ${webinar.color} opacity-80`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white opacity-60" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            {formatDate(webinar.date)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock3 className="w-4 h-4" />
                            {webinar.time}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                          {webinar.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                              <User className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-xs text-gray-400">{webinar.speaker}</div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {webinar.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users2 className="w-3 h-3" />
                            {webinar.attendees} attended
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {webinar.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Watch Recording Button */}
                        <button
                          onClick={() => handleWatchRecording(webinar)}
                          className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 text-sm"
                        >
                          <Play className="w-4 h-4" />
                          Watch Recording
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
                  <Video className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No past webinars found</h3>
                <p className="text-gray-300 mb-6">
                  Check back later for recordings of our sessions.
                </p>
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
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Are you an expert in AI consciousness, quantum computing, or emerging technologies? 
                Let's collaborate on creating engaging content for our community.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Propose a Webinar
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default WebinarsPage;