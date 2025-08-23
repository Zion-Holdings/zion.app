import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, Video, Users, Globe, 
  ArrowRight, Clock, MapPin, ExternalLink, 
  Star, CheckCircle, Play, Download,
  Filter, Search, Tag, Building, Award,
  BookOpen, Code, Brain, Rocket, Shield
} from 'lucide-react';

const EventsWebinarsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Consciousness Evolution 2045: The Future of Artificial Intelligence',
      type: 'Webinar',
      date: '2024-12-20',
      time: '14:00 EST',
      duration: '90 minutes',
      category: 'AI & Consciousness',
      featured: true,
      description: 'Join our AI experts as they explore the next generation of consciousness systems and their implications for business and society.',
      speakers: ['Dr. Sarah Chen', 'Dr. Marcus Rodriguez'],
      registration: 'https://ziontechgroup.com/webinars/ai-consciousness-2045',
      recording: null
    },
    {
      id: 2,
      title: 'Quantum Computing in Cybersecurity: Preparing for the Future',
      type: 'Conference',
      date: '2024-12-25',
      time: '09:00 EST',
      duration: 'Full Day',
      category: 'Quantum & Cybersecurity',
      featured: true,
      description: 'A comprehensive conference on quantum-resistant cybersecurity solutions and the future of digital security.',
      speakers: ['Dr. Elena Petrova', 'Dr. James Wilson', 'Dr. Lisa Thompson'],
      registration: 'https://ziontechgroup.com/conferences/quantum-cybersecurity-2024',
      recording: null
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: Mapping the Cosmos',
      type: 'Workshop',
      date: '2024-12-28',
      time: '13:00 EST',
      duration: '4 hours',
      category: 'Space Technology',
      featured: false,
      description: 'Hands-on workshop exploring our space resource mapping technologies and their applications.',
      speakers: ['Dr. Alex Kim', 'Dr. Maria Santos'],
      registration: 'https://ziontechgroup.com/workshops/space-resource-intelligence',
      recording: null
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'The Future of Autonomous Systems: From AI to Robotics',
      type: 'Webinar',
      date: '2024-11-15',
      time: '15:00 EST',
      duration: '75 minutes',
      category: 'AI & Robotics',
      featured: false,
      description: 'Exploring the convergence of AI and robotics in creating truly autonomous systems.',
      speakers: ['Dr. Robert Chen', 'Dr. Amanda Foster'],
      registration: null,
      recording: 'https://ziontechgroup.com/recordings/autonomous-systems-2024'
    },
    {
      id: 5,
      title: 'Edge Computing Revolution: Bringing AI to the Edge',
      type: 'Conference',
      date: '2024-10-20',
      time: '09:00 EST',
      duration: 'Full Day',
      category: 'Edge Computing',
      featured: false,
      description: 'Comprehensive coverage of edge computing technologies and their transformative impact.',
      speakers: ['Dr. David Park', 'Dr. Sarah Johnson', 'Dr. Michael Brown'],
      registration: null,
      recording: 'https://ziontechgroup.com/recordings/edge-computing-2024'
    },
    {
      id: 6,
      title: 'Cloud-Native Architecture: Building for Scale',
      type: 'Workshop',
      date: '2024-09-30',
      time: '14:00 EST',
      duration: '6 hours',
      category: 'Cloud Computing',
      featured: false,
      description: 'Deep dive into cloud-native architecture patterns and best practices.',
      speakers: ['Dr. Jennifer Lee', 'Dr. Carlos Mendez'],
      registration: null,
      recording: 'https://ziontechgroup.com/workshops/cloud-native-architecture'
    }
  ];

  const allEvents = [...upcomingEvents, ...pastEvents];

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-consciousness', name: 'AI & Consciousness', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum-cybersecurity', name: 'Quantum & Cybersecurity', icon: Shield, color: 'from-emerald-500 to-teal-500' },
    { id: 'space-technology', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'edge-computing', name: 'Edge Computing', icon: Code, color: 'from-orange-500 to-red-500' },
    { id: 'cloud-computing', name: 'Cloud Computing', icon: Globe, color: 'from-blue-500 to-indigo-500' }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.category.toLowerCase().includes(activeFilter.replace('-', ' '));
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: any } = {
      'AI & Consciousness': Brain,
      'Quantum & Cybersecurity': Shield,
      'Space Technology': Rocket,
      'AI & Robotics': Brain,
      'Edge Computing': Code,
      'Cloud Computing': Globe
    };
    return categoryMap[category] || Calendar;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Consciousness': 'from-purple-500 to-pink-500',
      'Quantum & Cybersecurity': 'from-emerald-500 to-teal-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'AI & Robotics': 'from-purple-500 to-pink-500',
      'Edge Computing': 'from-orange-500 to-red-500',
      'Cloud Computing': 'from-blue-500 to-indigo-500'
    };
    return colorMap[category] || 'from-blue-500 to-cyan-500';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Events & Webinars
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Join the Revolution
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover cutting-edge insights, learn from industry experts, and connect with fellow innovators 
                at our exclusive events, webinars, and workshops.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search events, webinars, or topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`inline-flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                        activeFilter === category.id
                          ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                          : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-blue-500/50'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Upcoming Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't miss our upcoming webinars, conferences, and workshops. Register now to secure your spot!
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.filter(event => {
                const matchesFilter = activeFilter === 'all' || event.category.toLowerCase().includes(activeFilter.replace('-', ' '));
                const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                     event.description.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesFilter && matchesSearch;
              }).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {event.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Featured Event
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(event.category)}`}>
                        {React.createElement(getCategoryIcon(event.category), { className: 'w-6 h-6 text-white' })}
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">{event.type}</span>
                        <div className="text-lg font-semibold text-white">{event.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{event.date}</div>
                      <div className="text-sm text-gray-400">{event.time}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {event.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      Speakers: {event.speakers.join(', ')}
                    </div>
                  </div>
                  
                  <a
                    href={event.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Past Events & Recordings</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Missed an event? Catch up with our recorded sessions and access valuable insights on-demand.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {pastEvents.filter(event => {
                const matchesFilter = activeFilter === 'all' || event.category.toLowerCase().includes(activeFilter.replace('-', ' '));
                const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                     event.description.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesFilter && matchesSearch;
              }).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${getCategoryColor(event.category)}`}>
                          {React.createElement(getCategoryIcon(event.category), { className: 'w-5 h-5 text-white' })}
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">{event.type}</span>
                          <div className="text-sm font-medium text-white">{event.category}</div>
                        </div>
                        <span className="text-sm text-gray-500">{event.date}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3">{event.title}</h4>
                      <p className="text-gray-400 mb-4">{event.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {event.speakers.join(', ')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="ml-6">
                      <a
                        href={event.recording}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Recording
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Types of Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer various event formats to suit different learning styles and schedules.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Video,
                  title: 'Webinars',
                  description: 'Live online sessions with Q&A opportunities',
                  color: 'from-blue-500 to-cyan-500',
                  features: ['Live Q&A', 'Interactive polls', 'Expert insights', 'Flexible scheduling']
                },
                {
                  icon: Users,
                  title: 'Conferences',
                  description: 'Multi-track events with networking opportunities',
                  color: 'from-purple-500 to-pink-500',
                  features: ['Multiple sessions', 'Networking breaks', 'Exhibition area', 'Panel discussions']
                },
                {
                  icon: BookOpen,
                  title: 'Workshops',
                  description: 'Hands-on learning with practical exercises',
                  color: 'from-emerald-500 to-teal-500',
                  features: ['Practical exercises', 'Small groups', 'Hands-on learning', 'Take-home materials']
                },
                {
                  icon: Building,
                  title: 'Corporate Events',
                  description: 'Custom events for organizations and teams',
                  color: 'from-orange-500 to-red-500',
                  features: ['Custom content', 'Team building', 'Industry focus', 'Flexible format']
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${type.color} mb-6`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2 text-left">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Never miss an event! Subscribe to our newsletter for updates on upcoming events, 
                exclusive content, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:events@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Contact Events Team
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Users className="w-5 h-5 mr-2" />
                  General Inquiries
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EventsWebinarsPage;