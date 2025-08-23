import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, ExternalLink, Search, Filter, BookOpen, Video, Award, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  speaker: string;
  speakerTitle: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  isFeatured: boolean;
  isUpcoming: boolean;
  thumbnail: string;
  registrationUrl: string;
  tags: string[];
}

const webinarsData: Webinar[] = [
  {
    id: '1',
    title: 'AI Consciousness: The Next Frontier',
    description: 'Explore the cutting-edge developments in artificial consciousness and what it means for the future of technology.',
    date: '2024-12-15',
    time: '14:00',
    duration: '90 min',
    speaker: 'Dr. Sarah Chen',
    speakerTitle: 'Chief AI Research Scientist',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    isFeatured: true,
    isUpcoming: true,
    thumbnail: '/api/placeholder/400/250',
    registrationUrl: '#',
    tags: ['AI', 'Consciousness', 'Research', 'Future Tech']
  },
  {
    id: '2',
    title: 'Quantum Computing in Enterprise',
    description: 'Learn how quantum computing is revolutionizing business operations and what you need to know to get started.',
    date: '2024-12-20',
    time: '15:30',
    duration: '75 min',
    speaker: 'Michael Rodriguez',
    speakerTitle: 'Quantum Solutions Architect',
    category: 'Quantum Computing',
    level: 'Intermediate',
    isFeatured: true,
    isUpcoming: true,
    thumbnail: '/api/placeholder/400/250',
    registrationUrl: '#',
    tags: ['Quantum', 'Enterprise', 'Business', 'Technology']
  },
  {
    id: '3',
    title: 'Cybersecurity in the Age of AI',
    description: 'Discover how AI is both a threat and a solution in modern cybersecurity strategies.',
    date: '2024-12-10',
    time: '13:00',
    duration: '60 min',
    speaker: 'Alex Thompson',
    speakerTitle: 'Cybersecurity Director',
    category: 'Cybersecurity',
    level: 'Intermediate',
    isFeatured: false,
    isUpcoming: false,
    thumbnail: '/api/placeholder/400/250',
    registrationUrl: '#',
    tags: ['Cybersecurity', 'AI', 'Security', 'Threats']
  },
  {
    id: '4',
    title: 'Space Technology Innovations',
    description: 'From satellite networks to Mars missions, explore the latest breakthroughs in space technology.',
    date: '2024-12-25',
    time: '16:00',
    duration: '80 min',
    speaker: 'Dr. Emily Watson',
    speakerTitle: 'Space Systems Engineer',
    category: 'Space Technology',
    level: 'Advanced',
    isFeatured: true,
    isUpcoming: true,
    thumbnail: '/api/placeholder/400/250',
    registrationUrl: '#',
    tags: ['Space', 'Satellites', 'Innovation', 'Engineering']
  },
  {
    id: '5',
    title: 'Cloud Infrastructure Best Practices',
    description: 'Master the fundamentals of modern cloud architecture and deployment strategies.',
    date: '2024-12-05',
    time: '11:00',
    duration: '45 min',
    speaker: 'David Kim',
    speakerTitle: 'Cloud Solutions Lead',
    category: 'Cloud Infrastructure',
    level: 'Beginner',
    isFeatured: false,
    isUpcoming: false,
    thumbnail: '/api/placeholder/400/250',
    registrationUrl: '#',
    tags: ['Cloud', 'Infrastructure', 'Best Practices', 'Architecture']
  },
  {
    id: '6',
    title: 'Micro SAAS Platform Development',
    description: 'Learn how to build and scale micro SAAS platforms for maximum efficiency and profitability.',
    date: '2024-12-30',
    time: '10:00',
    duration: '70 min',
    speaker: 'Lisa Park',
    speakerTitle: 'Product Strategy Director',
    category: 'Micro SAAS',
    level: 'Intermediate',
    isFeatured: false,
    isUpcoming: true,
    thumbnail: '/api/placeholder/400/250',
    registrationUrl: '#',
    tags: ['SAAS', 'Platform', 'Development', 'Strategy']
  }
];

const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Space Technology', 'Cloud Infrastructure', 'Micro SAAS'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const WebinarsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredWebinars = webinarsData.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || webinar.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const upcomingWebinars = filteredWebinars.filter(w => w.isUpcoming);
  const pastWebinars = filteredWebinars.filter(w => !w.isUpcoming);
  const featuredWebinars = webinarsData.filter(w => w.isFeatured);

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Expert Webinars
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Dive deep into cutting-edge technology with industry experts. 
                Learn, connect, and stay ahead of the curve.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Live & Recorded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>Expert Speakers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-pink-400" />
                  <span>Certificates</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Webinars */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Webinars
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Don't miss these must-attend sessions with industry leaders
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
                >
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-xl flex items-center justify-center">
                      <Play className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="absolute top-3 right-3 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {webinar.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{webinar.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{webinar.description}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{webinar.speaker}, {webinar.speakerTitle}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold py-3 px-6 rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-16 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search Webinars</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by title, speaker, or topic..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Webinar Tabs */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-800/50 rounded-2xl p-2 border border-gray-700/50">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'upcoming'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Upcoming Webinars
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'past'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Past Webinars
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeTab === 'upcoming' ? upcomingWebinars : pastWebinars).map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
                >
                  <div className="relative mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-xl flex items-center justify-center">
                      <Play className="w-12 h-12 text-cyan-400" />
                    </div>
                    {activeTab === 'upcoming' && (
                      <div className="absolute top-3 right-3 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Live
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {webinar.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2 text-white">{webinar.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{webinar.description}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {activeTab === 'upcoming' ? (
                      <button className="flex-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold py-2 px-4 rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
                        Register
                      </button>
                    ) : (
                      <button className="flex-1 bg-gray-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-gray-500 transition-all duration-300">
                        Watch Recording
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                      Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredWebinars.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No webinars found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or check back later for new webinars.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified about upcoming webinars and exclusive content from our technology experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WebinarsPage;