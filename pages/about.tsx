import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pioneering cutting-edge technology solutions that transform industries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Delivering world-class quality and reliability in everything we do",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients to achieve extraordinary results",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive change across industries and communities worldwide",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Zap },
    { number: "99.99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const team = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation and strategic growth"
    },
    {
      name: "AI Team",
      role: "AI & Consciousness",
      description: "Experts in next-generation artificial intelligence and consciousness systems"
    },
    {
      name: "Quantum Team",
      role: "Quantum Technology",
      description: "Pioneers in quantum computing and quantum-resistant solutions"
    },
    {
      name: "Space Team",
      role: "Space Technology",
      description: "Innovators in space exploration and resource intelligence"
    }
  ];

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
                <Sparkles className="w-4 h-4 mr-2" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are Zion Tech Group, a revolutionary technology company pioneering the future 
                with AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To revolutionize the world through cutting-edge technology that enhances human potential, 
                  accelerates innovation, and creates sustainable solutions for the challenges of tomorrow.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We believe in the power of technology to transform lives and businesses. Our commitment 
                  to excellence, innovation, and client success drives everything we do.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl p-8 border border-blue-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">What We Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    AI Consciousness Evolution & Autonomous Systems
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    Quantum Computing & Cybersecurity Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    Space Technology & Resource Intelligence
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    Autonomous IT & DevOps Platforms
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These fundamental principles guide our decisions, shape our culture, 
                and drive our success in everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionary leaders and experts who are driving innovation 
                and shaping the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
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
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution and discover how our innovative technology solutions 
                can transform your business and accelerate your success.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <Users className="w-6 h-6 mr-3" />
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;