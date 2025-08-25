import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ExternalLink, Video, Star, TrendingUp } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Digital Transformation Summit 2025",
      description: "Join industry leaders and technology experts for a comprehensive exploration of AI-driven business transformation strategies.",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      type: "Conference",
      attendees: "500+",
      price: "$1,299",
      featured: true,
      registrationUrl: "#",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cybersecurity Workshop: Quantum Threats & Solutions",
      description: "Hands-on workshop covering quantum-resistant cryptography and advanced security protocols for enterprise environments.",
      date: "March 25, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Zion Tech Group HQ, Austin",
      type: "Workshop",
      attendees: "50",
      price: "$299",
      featured: false,
      registrationUrl: "#",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Micro-SaaS Development Bootcamp",
      description: "Intensive 3-day bootcamp teaching modern SaaS development practices, deployment strategies, and scaling techniques.",
      date: "April 5-7, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      type: "Bootcamp",
      attendees: "100",
      price: "$599",
      featured: true,
      registrationUrl: "#",
      image: "/api/placeholder/400/250"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Tech Innovation Conference 2024",
      description: "Our flagship annual conference featuring cutting-edge technology demonstrations and industry insights.",
      date: "December 10-12, 2024",
      location: "Las Vegas Convention Center",
      type: "Conference",
      attendees: "800+",
      highlights: ["AI demonstrations", "Networking sessions", "Startup showcase"],
      recordingsUrl: "#",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Cloud Infrastructure Masterclass",
      description: "Advanced workshop on cloud-native architecture and infrastructure automation.",
      date: "November 20, 2024",
      location: "Virtual Event",
      type: "Masterclass",
      attendees: "75",
      highlights: ["Hands-on labs", "Expert Q&A", "Resource materials"],
      recordingsUrl: "#",
      image: "/api/placeholder/400/250"
    }
  ];

  const eventTypes = ["All", "Conference", "Workshop", "Bootcamp", "Masterclass", "Webinar"];

  return (
    <>
      <Helmet>
        <title>Events - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's upcoming events, conferences, workshops, and bootcamps. Network with industry leaders and learn about cutting-edge technologies." />
        <meta name="keywords" content="tech events, conferences, workshops, AI summit, cybersecurity workshop, Zion Tech Group events" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Events & Conferences
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Join us for cutting-edge technology events, hands-on workshops, and networking opportunities 
              with industry leaders and innovators.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {eventTypes.map((type, index) => (
                <button
                  key={type}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {type}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Upcoming Events Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300">
              Don't miss out on these exciting opportunities to learn, network, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 ${
                  event.featured 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'border-gray-700/50 hover:border-purple-500/50'
                }`}
              >
                {event.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Featured Event</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full border ${
                    event.type === 'Conference' ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' :
                    event.type === 'Workshop' ? 'bg-green-600/20 text-green-400 border-green-500/30' :
                    event.type === 'Bootcamp' ? 'bg-purple-600/20 text-purple-400 border-purple-500/30' :
                    'bg-orange-600/20 text-orange-400 border-orange-500/30'
                  }`}>
                    {event.type}
                  </span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white hover:text-purple-400 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    {event.attendees} attendees
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">{event.price}</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Events Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Past Events
            </h2>
            <p className="text-xl text-gray-300">
              Relive the highlights and access recordings from our previous events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full border ${
                    event.type === 'Conference' ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' :
                    event.type === 'Workshop' ? 'bg-green-600/20 text-green-400 border-green-500/30' :
                    event.type === 'Bootcamp' ? 'bg-purple-600/20 text-purple-400 border-purple-500/30' :
                    'bg-orange-600/20 text-orange-400 border-orange-500/30'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white hover:text-purple-400 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    {event.attendees} attendees
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight) => (
                      <span key={highlight} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  <Video className="w-4 h-4" />
                  Watch Recordings
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Host Your Event with Us
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Looking to host a technology event, workshop, or conference? Partner with Zion Tech Group 
              to create impactful learning experiences for your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Partner with Us
              </button>
              <button className="px-8 py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                Contact Events Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Events;