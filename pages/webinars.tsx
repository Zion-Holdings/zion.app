import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Video, Calendar, Clock, Users, Play, ArrowRight,
  Brain, Atom, Shield, Rocket, Globe, Target
} from 'lucide-react';
import Link from 'next/link';

const WebinarsPage: React.FC = () => {
  const upcomingWebinars = [
    {
      title: 'AI Consciousness Evolution: The Future of AI',
      description: 'Explore the next generation of AI consciousness and its implications for business and society',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 min',
      speaker: 'Dr. Kleber Oliveira',
      category: 'AI & Machine Learning',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'Quantum Computing Fundamentals for Developers',
      description: 'Learn the basics of quantum computing and how to implement quantum algorithms',
      date: '2024-02-22',
      time: '3:00 PM EST',
      duration: '90 min',
      speaker: 'Quantum Team',
      category: 'Quantum Computing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity in the Quantum Era',
      description: 'Understanding quantum-resistant security and preparing for the quantum future',
      date: '2024-03-01',
      time: '1:00 PM EST',
      duration: '75 min',
      speaker: 'Security Team',
      category: 'Cybersecurity',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const pastWebinars = [
    {
      title: 'Introduction to Space Resource Intelligence',
      description: 'Learn about AI-powered space resource management and autonomous operations',
      date: '2024-01-20',
      duration: '60 min',
      speaker: 'Space Technology Team',
      category: 'Space Technology',
      color: 'from-indigo-500 to-purple-500',
      recording: '/webinars/space-resource-intelligence'
    },
    {
      title: 'Building Autonomous Customer Success Systems',
      description: 'Implement AI-powered customer success automation and optimization',
      date: '2024-01-15',
      duration: '75 min',
      speaker: 'AI Solutions Team',
      category: 'AI & Machine Learning',
      color: 'from-green-500 to-emerald-500',
      recording: '/webinars/autonomous-customer-success'
    }
  ];

  const webinarCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Webinars on AI consciousness, neural networks, and machine learning',
      color: 'from-purple-500 to-pink-500',
      count: 8
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Computing',
      description: 'Quantum computing fundamentals, algorithms, and applications',
      color: 'from-blue-500 to-cyan-500',
      count: 6
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Security best practices, quantum-resistant encryption, and threat detection',
      color: 'from-red-500 to-orange-500',
      count: 5
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Space resource management, autonomous operations, and exploration',
      color: 'from-indigo-500 to-purple-500',
      count: 4
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Webinars - Zion Tech Group Educational Sessions"
        description="Join our educational webinars on AI consciousness, quantum computing, cybersecurity, and space technology. Learn from industry experts."
        keywords={["webinars", "AI consciousness", "quantum computing", "cybersecurity", "space technology", "educational content"]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-blue-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Webinars
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join our educational webinars and learn from industry experts about cutting-edge 
              technologies and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Register for our upcoming educational sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${webinar.color} text-white rounded-full`}>
                          {webinar.category}
                        </span>
                        {webinar.featured && (
                          <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                        {webinar.title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">{webinar.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{webinar.speaker}</span>
                        </div>
                      </div>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Webinar Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore webinars organized by technology category
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {webinarCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{category.count} webinars</span>
                  <div className="flex items-center text-green-400 hover:text-green-300 transition-colors cursor-pointer">
                    <span className="font-medium">Browse</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch recordings of our previous educational sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={webinar.recording}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${webinar.color} p-4 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Play className="w-8 h-8" />
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${webinar.color} text-white rounded-full mb-4 inline-block`}>
                      {webinar.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">{webinar.description}</p>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.speaker}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                      <span className="font-medium">Watch Recording</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about upcoming webinars and new content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25"
                >
                  Subscribe to Updates
                </motion.button>
              </Link>
              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
                >
                  View All Resources
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;