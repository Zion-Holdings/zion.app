import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, Users, Play, ExternalLink, Download, 
  Star, Tag, ArrowRight, ArrowLeft, Search, Filter,
  Video, Headphones, BookOpen, Globe, TrendingUp,
  CheckCircle, Clock as TimeIcon, MapPin, Mail, Brain, Atom, Rocket, Shield
} from 'lucide-react';
import Link from 'next/link';

const WebinarsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('upcoming');

  const categories = [
    { id: 'all', name: 'All Categories', count: 24 },
    { id: 'ai', name: 'AI & Consciousness', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 6 },
    { id: 'space', name: 'Space Technology', count: 4 },
    { id: 'enterprise', name: 'Enterprise IT', count: 6 }
  ];

  const timeframes = [
    { id: 'upcoming', name: 'Upcoming', count: 12 },
    { id: 'past', name: 'Past Webinars', count: 12 },
    { id: 'live', name: 'Live Now', count: 1 }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Machine Learning',
      description: 'Explore the next frontier of artificial intelligence where machines develop true consciousness and emotional intelligence.',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '90 minutes',
      category: 'ai',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief AI Scientist',
      speakerAvatar: '/avatars/sarah-chen.jpg',
      attendees: 1247,
      maxAttendees: 2000,
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      featured: true,
      registrationOpen: true
    },
    {
      id: 2,
      title: 'Quantum Computing in Enterprise: Real-World Applications',
      description: 'Discover how quantum computing is transforming business operations and solving previously impossible problems.',
      date: '2024-02-20',
      time: '15:30 EST',
      duration: '75 minutes',
      category: 'quantum',
      speaker: 'Prof. Michael Rodriguez',
      speakerTitle: 'Quantum Research Director',
      speakerAvatar: '/avatars/michael-rodriguez.jpg',
      attendees: 892,
      maxAttendees: 1500,
      tags: ['Quantum Computing', 'Enterprise', 'Business Applications'],
      featured: false,
      registrationOpen: true
    },
    {
      id: 3,
      title: 'Space Technology for Resource Intelligence',
      description: 'Learn how satellite technology and space data are revolutionizing resource management and environmental monitoring.',
      date: '2024-02-25',
      time: '13:00 EST',
      duration: '60 minutes',
      category: 'space',
      speaker: 'Dr. Emily Watson',
      speakerTitle: 'Space Technology Lead',
      speakerAvatar: '/avatars/emily-watson.jpg',
      attendees: 567,
      maxAttendees: 1000,
      tags: ['Space Tech', 'Resource Management', 'Environmental'],
      featured: false,
      registrationOpen: true
    },
    {
      id: 4,
      title: 'Digital Transformation: Building the Future Enterprise',
      description: 'Comprehensive guide to modernizing your organization with cutting-edge technology and processes.',
      date: '2024-03-01',
      time: '16:00 EST',
      duration: '120 minutes',
      category: 'enterprise',
      speaker: 'James Thompson',
      speakerTitle: 'Digital Transformation Expert',
      speakerAvatar: '/avatars/james-thompson.jpg',
      attendees: 1103,
      maxAttendees: 2000,
      tags: ['Digital Transformation', 'Enterprise', 'Modernization'],
      featured: false,
      registrationOpen: true
    }
  ];

  const pastWebinars = [
    {
      id: 5,
      title: 'AI Ethics and Responsible Development',
      description: 'Exploring the ethical implications of AI development and how to build responsible AI systems.',
      date: '2024-01-20',
      time: '14:00 EST',
      duration: '90 minutes',
      category: 'ai',
      speaker: 'Dr. Lisa Park',
      speakerTitle: 'AI Ethics Researcher',
      speakerAvatar: '/avatars/lisa-park.jpg',
      attendees: 1856,
      recording: true,
      slides: true,
      tags: ['AI Ethics', 'Responsible AI', 'Development'],
      rating: 4.8,
      reviews: 127
    },
    {
      id: 6,
      title: 'Quantum Cryptography: The Future of Security',
      description: 'Understanding quantum-resistant cryptography and its role in securing the digital future.',
      date: '2024-01-15',
      time: '15:30 EST',
      duration: '75 minutes',
      category: 'quantum',
      speaker: 'Dr. Robert Kim',
      speakerTitle: 'Security Architect',
      speakerAvatar: '/avatars/robert-kim.jpg',
      attendees: 1342,
      recording: true,
      slides: true,
      tags: ['Quantum Security', 'Cryptography', 'Cybersecurity'],
      rating: 4.9,
      reviews: 89
    }
  ];

  const liveWebinars = [
    {
      id: 7,
      title: 'Live Q&A: AI Implementation Strategies',
      description: 'Join us for a live interactive session where we answer your questions about AI implementation.',
      date: '2024-02-10',
      time: 'Live Now',
      duration: '60 minutes',
      category: 'ai',
      speaker: 'Kleber Santos',
      speakerTitle: 'CEO & Founder',
      speakerAvatar: '/avatars/kleber-santos.jpg',
      attendees: 2341,
      maxAttendees: 5000,
      tags: ['Live Q&A', 'AI Implementation', 'Interactive'],
      featured: true,
      isLive: true
    }
  ];

  const filteredWebinars = () => {
    let webinars = [];
    
    if (selectedTimeframe === 'upcoming') {
      webinars = upcomingWebinars;
    } else if (selectedTimeframe === 'past') {
      webinars = pastWebinars;
    } else if (selectedTimeframe === 'live') {
      webinars = liveWebinars;
    }

    if (selectedCategory !== 'all') {
      webinars = webinars.filter(webinar => webinar.category === selectedCategory);
    }

    if (searchQuery) {
      webinars = webinars.filter(webinar => 
        webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return webinars;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'from-cyan-500 to-blue-500',
      quantum: 'from-purple-500 to-pink-500',
      space: 'from-blue-500 to-cyan-500',
      enterprise: 'from-green-500 to-emerald-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      ai: <Brain className="w-4 h-4" />,
      quantum: <Atom className="w-4 h-4" />,
      space: <Rocket className="w-4 h-4" />,
      enterprise: <Shield className="w-4 h-4" />
    };
    return icons[category as keyof typeof icons] || <Tag className="w-4 h-4" />;
  };

  return (
    <Layout seo={{
      title: 'Webinars - Zion Tech Group | AI, Quantum & Space Technology Education',
      description: 'Join our expert-led webinars on AI consciousness, quantum computing, space technology, and enterprise IT. Register for upcoming sessions and access past recordings.',
      keywords: 'webinars, AI consciousness, quantum computing, space technology, enterprise IT, Zion Tech Group, technology education',
      url: 'https://ziontechgroup.com/webinars'
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
                Expert Webinars
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Join our technology experts for in-depth sessions on AI consciousness, 
                quantum computing, space technology, and enterprise transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#upcoming" className="btn-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  View Upcoming
                </Link>
                <Link href="#past" className="btn-secondary">
                  <Video className="w-5 h-5 mr-2" />
                  Past Recordings
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Live Webinar Alert */}
        {liveWebinars.length > 0 && (
          <section className="py-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-b border-red-500/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/20 rounded-full border border-red-500/30">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 font-semibold">
                    🔴 LIVE NOW: {liveWebinars[0].title}
                  </span>
                  <Link href={`#webinar-${liveWebinars[0].id}`} className="btn-primary text-sm">
                    Join Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search webinars by title, speaker, or topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              {/* Timeframe Tabs */}
              <div className="flex justify-center mb-8">
                <div className="flex bg-gray-800/50 rounded-xl p-1 border border-gray-700/50">
                  {timeframes.map((timeframe) => (
                    <button
                      key={timeframe.id}
                      onClick={() => setSelectedTimeframe(timeframe.id)}
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedTimeframe === timeframe.id
                          ? 'bg-cyan-500 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      {timeframe.name} ({timeframe.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
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
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-20 bg-black">
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
                  {selectedTimeframe === 'upcoming' && 'Upcoming Webinars'}
                  {selectedTimeframe === 'past' && 'Past Webinars'}
                  {selectedTimeframe === 'live' && 'Live Webinars'}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  {selectedTimeframe === 'upcoming' && 'Register for our upcoming expert-led sessions and secure your spot.'}
                  {selectedTimeframe === 'past' && 'Access recordings and materials from our previous webinars.'}
                  {selectedTimeframe === 'live' && 'Join our live sessions happening right now.'}
                </p>
              </motion.div>

              {/* Webinars Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredWebinars().map((webinar, index) => (
                  <motion.div
                    key={webinar.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    id={`webinar-${webinar.id}`}
                    className={`p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${
                      webinar.featured ? 'ring-2 ring-cyan-500/30' : ''
                    }`}
                  >
                    {/* Featured Badge */}
                    {webinar.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                        <Star className="w-4 h-4" />
                        Featured Webinar
                      </div>
                    )}

                    {/* Live Badge */}
                    {webinar.isLive && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-4">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Live Now
                      </div>
                    )}

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-8 h-8 bg-gradient-to-r ${getCategoryColor(webinar.category)} rounded-lg flex items-center justify-center text-white`}>
                        {getCategoryIcon(webinar.category)}
                      </div>
                      <span className="text-sm text-gray-400 capitalize">{webinar.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {webinar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {webinar.description}
                    </p>

                    {/* Speaker Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {webinar.speaker.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{webinar.speaker}</p>
                        <p className="text-gray-400 text-sm">{webinar.speakerTitle}</p>
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{webinar.time}</span>
                      </div>
                    </div>

                    {/* Duration and Attendees */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <TimeIcon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">
                          {webinar.attendees}
                          {webinar.maxAttendees && ` / ${webinar.maxAttendees}`}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {webinar.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {webinar.isLive ? (
                        <Link href="/contact" className="btn-primary">
                          <Play className="w-4 h-4 mr-2" />
                          Join Live
                        </Link>
                      ) : webinar.registrationOpen ? (
                        <Link href="/contact" className="btn-primary">
                          <Calendar className="w-4 h-4 mr-2" />
                          Register Now
                        </Link>
                      ) : (
                        <div className="flex gap-3">
                          {webinar.recording && (
                            <button className="btn-secondary">
                              <Video className="w-4 h-4 mr-2" />
                              Watch Recording
                            </button>
                          )}
                          {webinar.slides && (
                            <button className="btn-secondary">
                              <Download className="w-4 h-4 mr-2" />
                              Download Slides
                            </button>
                          )}
                        </div>
                      )}
                      
                      <Link href="/contact" className="btn-outline">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Speaker
                      </Link>
                    </div>

                    {/* Rating for Past Webinars */}
                    {webinar.rating && (
                      <div className="mt-4 pt-4 border-t border-gray-700/30">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(webinar.rating!)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">
                            {webinar.rating} ({webinar.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredWebinars().length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Webinars Found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search criteria or browse all webinars.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedTimeframe('upcoming');
                    }}
                    className="btn-primary"
                  >
                    View All Webinars
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Never Miss a Webinar
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get notified about upcoming webinars, 
                  exclusive content, and technology insights.
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
                Ready to Learn More?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is ready to help you 
                discover the perfect learning opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Our Team
                </Link>
                <Link href="/resources" className="btn-secondary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WebinarsPage;