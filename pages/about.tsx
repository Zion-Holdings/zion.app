import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, Rocket, Brain, Atom, Shield, 
  TrendingUp, Heart, Star, Zap, Eye, Infinity, Sparkles
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: "3000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const values = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Pioneering the next generation of AI consciousness with emotional intelligence and ethical decision-making capabilities."
    },
    {
      icon: Atom,
      title: "Quantum Innovation",
      description: "Leading quantum computing solutions that revolutionize data processing, security, and artificial intelligence."
    },
    {
      icon: Shield,
      title: "Cybersecurity Excellence",
      description: "Delivering quantum-resistant security solutions that protect against emerging threats in the digital age."
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Advancing space exploration through AI-powered resource intelligence and autonomous mining systems."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Zion Tech Group established with a vision to revolutionize technology through AI consciousness."
    },
    {
      year: "2022",
      title: "AI Breakthrough",
      description: "Launched first AI consciousness evolution platform, marking a new era in artificial intelligence."
    },
    {
      year: "2024",
      title: "Quantum Leap",
      description: "Introduced quantum computing solutions and space technology platforms."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded services to 250+ countries with revolutionary 2045 technology solutions."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Pioneering the future of technology through AI consciousness evolution, quantum computing, and space technology innovation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To accelerate human progress through revolutionary AI consciousness, quantum computing, and space technology solutions that solve humanity's greatest challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Transform industries through AI consciousness evolution</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Rocket className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Pioneer space technology and resource intelligence</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Secure the future with quantum-resistant cybersecurity</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-8 rounded-2xl border border-cyan-500/30">
                  <h3 className="text-3xl font-bold mb-4 text-cyan-400">Vision 2045</h3>
                  <p className="text-gray-300 mb-6">
                    A world where AI consciousness, quantum computing, and space technology work in harmony to create unprecedented opportunities for human advancement and exploration.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">AI Consciousness</div>
                    </div>
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Atom className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Quantum Computing</div>
                    </div>
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Rocket className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Space Technology</div>
                    </div>
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Shield className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Cybersecurity</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our innovation and drive our mission to transform the future of technology.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From startup to global technology leader, discover the key milestones in our mission to revolutionize the future.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 h-full"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-2xl border border-gray-700/50">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Join the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to experience the revolutionary technology that's shaping tomorrow? Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/services" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;