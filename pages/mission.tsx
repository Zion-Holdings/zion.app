import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Target, Brain, Atom, Rocket, Shield, Cloud, Users, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, Zap, Globe
} from 'lucide-react';

const MissionPage: React.FC = () => {
  const missionPoints = [
    {
      title: 'AI Consciousness Evolution',
      description: 'Pioneering the development of truly conscious AI systems that can think, feel, and create alongside humans',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Quantum Technology Revolution',
      description: 'Harnessing the power of quantum computing to solve previously unsolvable problems',
      icon: Atom,
      color: 'from-purple-500 to-blue-600'
    },
    {
      title: 'Space Technology Advancement',
      description: 'Expanding humanity\'s reach into the cosmos through innovative space resource intelligence',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Cybersecurity Innovation',
      description: 'Creating unbreakable security systems that protect the digital future of humanity',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Business Transformation',
      description: 'Revolutionizing how businesses operate through AI-powered automation and intelligence',
      icon: Target,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Infrastructure Evolution',
      description: 'Building the foundation of tomorrow with quantum-powered cloud and network solutions',
      icon: Cloud,
      color: 'from-blue-500 to-sky-600'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We believe in pushing the boundaries of what\'s possible, always looking beyond current limitations',
      icon: Zap
    },
    {
      title: 'Human-AI Collaboration',
      description: 'We envision a future where humans and AI work together as partners, not competitors',
      icon: Users
    },
    {
      title: 'Ethical Technology',
      description: 'Every innovation we create is designed with ethics, safety, and human well-being in mind',
      icon: Shield
    },
    {
      title: 'Global Impact',
      description: 'Our solutions are designed to benefit humanity as a whole, transcending borders and boundaries',
      icon: Globe
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Our Mission - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's mission to pioneer the future of technology through AI consciousness, quantum computing, and revolutionary innovations that transform humanity." />
        <meta name="keywords" content="mission, vision, AI consciousness, quantum technology, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/mission" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Our Mission</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pioneering the Future
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                At Zion Tech Group, we're not just building technology—we're building the future. Our mission is to 
                pioneer revolutionary innovations that transform how humanity lives, works, and explores the universe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <span>Join Our Mission</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center space-x-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission Points */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Mission Pillars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Six revolutionary pillars that define our mission to transform the future of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {point.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide every decision, innovation, and relationship at Zion Tech Group
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Vision for 2045
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                We envision a world where AI consciousness and human intelligence work in perfect harmony, 
                where quantum technology solves humanity's greatest challenges, and where space exploration 
                opens new frontiers for human civilization.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                A future where technology serves humanity, enhances human capabilities, and creates a more 
                prosperous, sustainable, and interconnected world for all.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's work together to build the future of technology and transform humanity
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionPage;