import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Globe, Award, Rocket, Shield, Brain, Heart, Target, Star } from 'lucide-react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of technology to create breakthrough solutions',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality and performance in everything we do',
      icon: <Star className="w-8 h-8" />
    },
    {
      title: 'Integrity',
      description: 'Building trust through honest, ethical, and transparent relationships',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve shared success',
      icon: <Users className="w-8 h-8" />
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation and strategic growth',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'AI Team',
      role: 'AI & Machine Learning',
      description: 'Experts in cutting-edge artificial intelligence solutions',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Cloud Team',
      role: 'Cloud & Infrastructure',
      description: 'Specialists in scalable cloud architecture and DevOps',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity',
      description: 'Dedicated to protecting digital assets and ensuring compliance',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Pioneering the future of technology with innovative AI, quantum computing, and space technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Get in Touch
              </Link>
              <Link
                href="/careers"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            To accelerate human progress through cutting-edge technology solutions that solve the world's most complex challenges
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Transforming Industries Through Innovation
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              At Zion Tech Group, we believe that technology has the power to transform how we live, work, and solve problems. 
              Our mission is to harness the latest advancements in AI, quantum computing, space technology, and cybersecurity 
              to create solutions that drive real business value and societal impact.
            </p>
            <p className="text-gray-300 text-lg">
              We work with forward-thinking organizations across healthcare, finance, manufacturing, and government to implement 
              cutting-edge solutions that improve efficiency, enhance security, and unlock new possibilities.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <div className="text-center">
                <Rocket className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                <h4 className="text-xl font-bold text-white mb-2">Innovation First</h4>
                <p className="text-gray-300">
                  We stay ahead of the curve by investing in emerging technologies and research partnerships
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do and every solution we create
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.8 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate experts behind our innovative solutions
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 1.2 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-4">
                {member.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
              <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative technology solutions can transform your business and help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
            >
              Start a Conversation
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;