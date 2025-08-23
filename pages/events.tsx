import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Users, Video, Globe, 
  Star, Award, Zap, Target, Building, ExternalLink
} from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'AI & Quantum Computing Summit 2025',
      date: 'September 15-17, 2025',
      time: '9:00 AM - 6:00 PM EST',
      location: 'Virtual Event',
      type: 'Conference',
      description: 'Join industry leaders and researchers for three days of cutting-edge discussions on AI and quantum computing breakthroughs.',
      attendees: '500+',
      featured: true,
      registration: 'Open',
      price: 'Free',
      tags: ['AI', 'Quantum Computing', 'Research', 'Networking']
    },
    {
      title: 'Developer Workshop: Building AI-Powered Applications',
      date: 'September 25, 2025',
      time: '2:00 PM - 5:00 PM EST',
      location: 'Virtual Workshop',
      type: 'Workshop',
      description: 'Hands-on workshop teaching developers how to integrate AI capabilities into their applications using our latest tools.',
      attendees: '100',
      featured: true,
      registration: 'Open',
      price: '$99',
      tags: ['AI', 'Development', 'Workshop', 'Hands-on']
    },
    {
      title: 'Space Technology Innovation Forum',
      date: 'October 5, 2025',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Virtual Event',
      type: 'Forum',
      description: 'Explore the future of space technology with experts in space mining, exploration, and sustainable space operations.',
      attendees: '300+',
      featured: false,
      registration: 'Open',
      price: 'Free',
      tags: ['Space Technology', 'Innovation', 'Forum', 'Networking']
    },
    {
      title: 'Community Hackathon: AI for Good',
      date: 'October 10-12, 2025',
      time: '48 Hours',
      location: 'Virtual Event',
      type: 'Hackathon',
      description: 'Collaborate with fellow developers to build AI solutions that address real-world challenges and make a positive impact.',
      attendees: '200+',
      featured: false,
      registration: 'Open',
      price: 'Free',
      tags: ['AI', 'Hackathon', 'Collaboration', 'Innovation']
    },
    {
      title: 'Cybersecurity Best Practices Webinar',
      date: 'October 20, 2025',
      time: '1:00 PM - 2:30 PM EST',
      location: 'Virtual Webinar',
      type: 'Webinar',
      description: 'Learn about the latest cybersecurity threats and best practices to protect your organization from emerging risks.',
      attendees: '150',
      featured: false,
      registration: 'Open',
      price: 'Free',
      tags: ['Cybersecurity', 'Webinar', 'Best Practices', 'Security']
    },
    {
      title: 'Quantum Materials Discovery Workshop',
      date: 'November 5, 2025',
      time: '9:00 AM - 3:00 PM EST',
      location: 'Virtual Workshop',
      type: 'Workshop',
      description: 'Deep dive into quantum materials discovery and its applications in pharmaceuticals, renewable energy, and more.',
      attendees: '75',
      featured: false,
      registration: 'Open',
      price: '$149',
      tags: ['Quantum', 'Materials', 'Workshop', 'Research']
    }
  ];

  const eventTypes = [
    'All Events',
    'Conference',
    'Workshop',
    'Webinar',
    'Forum',
    'Hackathon',
    'Networking'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Events & Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us for cutting-edge technology events, workshops, and networking opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  View All Events
                </button>
                <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Host an Event
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Type Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {eventTypes.map((type, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    index === 0
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-transparent text-gray-300 border-gray-600 hover:border-green-400 hover:text-green-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Featured Events
              </h2>
              <p className="text-lg text-gray-300">
                Don't miss these must-attend events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {upcomingEvents.filter(event => event.featured).map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      {event.type}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {event.registration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 hover:text-green-400 transition-colors cursor-pointer">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users className="w-4 h-4 text-yellow-400" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-green-400">
                      {event.price}
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Events Grid */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                All Upcoming Events
              </h2>
              <p className="text-lg text-gray-300">
                Complete calendar of our events and activities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      {event.type}
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                      {event.registration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-green-400">
                      {event.price}
                    </div>
                    <button className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm">
                      Register
                    </button>
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Want to Host an Event?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to host technology events, workshops, or conferences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Partner With Us
                </button>
                <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Contact Events Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;