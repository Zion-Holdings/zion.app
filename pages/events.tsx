import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Star,
  Play,
  ExternalLink,
  Filter,
  Search,
  Tag,
  Globe,
  Video,
  Award
} from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const EventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'AI Consciousness Summit 2025',
      description: 'Join us for the most comprehensive AI consciousness conference of the year. Learn from industry leaders about the future of AI and its impact on business.',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM PST',
      location: 'San Francisco Convention Center',
      type: 'Conference',
      attendees: '500+',
      price: 'Free',
      featured: true,
      href: '/events/ai-consciousness-summit-2025'
    },
    {
      title: 'Quantum Computing Workshop',
      description: 'Hands-on workshop on quantum computing fundamentals and practical applications for enterprise solutions.',
      date: 'March 25, 2025',
      time: '10:00 AM - 4:00 PM PST',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: '100',
      price: '$299',
      featured: false,
      href: '/events/quantum-computing-workshop'
    },
    {
      title: 'Space Technology Innovation Forum',
      description: 'Explore the latest developments in space technology and how they\'re transforming industries on Earth.',
      date: 'April 5, 2025',
      time: '1:00 PM - 5:00 PM PST',
      location: 'Los Angeles Tech Hub',
      type: 'Forum',
      attendees: '200+',
      price: 'Free',
      featured: false,
      href: '/events/space-technology-innovation-forum'
    }
  ];

  const pastEvents = [
    {
      title: 'AI Consciousness Evolution 2024',
      description: 'Our flagship event that showcased the latest breakthroughs in AI consciousness technology.',
      date: 'December 10-12, 2024',
      type: 'Conference',
      attendees: '450+',
      recording: true,
      href: '/events/ai-consciousness-evolution-2024'
    },
    {
      title: 'Quantum Computing Masterclass',
      description: 'Advanced quantum computing techniques and their applications in cryptography and optimization.',
      date: 'November 20, 2024',
      type: 'Masterclass',
      attendees: '75',
      recording: true,
      href: '/events/quantum-computing-masterclass'
    },
    {
      title: 'Cybersecurity Innovation Summit',
      description: 'Exploring next-generation cybersecurity solutions powered by AI and quantum technologies.',
      date: 'October 15, 2024',
      type: 'Summit',
      attendees: '300+',
      recording: true,
      href: '/events/cybersecurity-innovation-summit'
    }
  ];

  const eventCategories = [
    { name: 'All Events', count: 6, active: true },
    { name: 'Conferences', count: 2, active: false },
    { name: 'Workshops', count: 1, active: false },
    { name: 'Forums', count: 1, active: false },
    { name: 'Masterclasses', count: 1, active: false },
    { name: 'Summits', count: 1, active: false }
  ];

  const stats = [
    { label: 'Total Events', value: '50+', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Global Attendees', value: '10k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries', value: '25+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Events - Zion Tech Group | Conferences, Workshops & Innovation Forums" 
          description="Join Zion Tech Group at our cutting-edge events, conferences, and workshops. Learn about AI consciousness, quantum computing, and revolutionary technology solutions." 
          canonical="https://ziontechgroup.com/events/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Events & Conferences
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join us at the forefront of technology innovation. Connect with industry leaders, learn from experts, and discover the future of AI consciousness and quantum computing.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events by title, description, or location..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Filter */}
              <div className="flex flex-wrap gap-2">
                {eventCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                      category.active
                        ? 'bg-cyan-500 text-white border-cyan-500'
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-500/50 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't miss these exciting opportunities to learn, network, and discover the future of technology.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    event.featured ? 'ring-2 ring-cyan-500/30' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  {event.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Featured Event
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400 font-medium">{event.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{event.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-cyan-400">{event.price}</div>
                    <a
                      href={event.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Relive the knowledge and insights from our previous events. Many recordings are available for on-demand viewing.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {event.type}
                    </span>
                    {event.recording && (
                      <div className="flex items-center text-green-400 text-sm">
                        <Video className="w-4 h-4 mr-1" />
                        Recording Available
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <a
                    href={event.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    {event.recording ? 'Watch Recording' : 'View Details'} <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Stay Connected</h2>
              <p className="text-xl text-gray-300 mb-8">
                Never miss an event! Subscribe to our newsletter and get notified about upcoming events, early bird pricing, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default EventsPage;