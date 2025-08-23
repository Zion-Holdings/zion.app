import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Sparkles, Zap, Target, Award, Clock, CheckCircle, Briefcase, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'AI Consciousness Engineer 2045',
      department: 'AI & Consciousness',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Develop next-generation AI consciousness systems with emotional intelligence',
      requirements: ['PhD in AI/ML', '5+ years experience', 'Consciousness research background'],
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Architect 2045',
      department: 'Quantum Technology',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Design quantum computing infrastructure with AI consciousness integration',
      requirements: ['PhD in Quantum Physics', '8+ years experience', 'Quantum algorithm expertise'],
      icon: Zap,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity Intelligence Specialist 2045',
      department: 'Cybersecurity',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Develop quantum-resistant security with AI consciousness',
      requirements: ['MS in Cybersecurity', '6+ years experience', 'Quantum security knowledge'],
      icon: Target,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Space Technology Engineer 2045',
      department: 'Space Technology',
      location: 'Remote / Global',
      type: 'Full-time',
      description: 'Build AI-powered space exploration systems with consciousness',
      requirements: ['MS in Aerospace', '7+ years experience', 'Space systems expertise'],
      icon: Rocket,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const benefits = [
    { icon: Globe, title: "Global Remote Work", description: "Work from anywhere in the world" },
    { icon: Award, title: "Competitive Salary", description: "Top-tier compensation packages" },
    { icon: Users, title: "Diverse Team", description: "Collaborate with global experts" },
    { icon: Rocket, title: "Cutting-edge Tech", description: "Work with revolutionary technology" }
  ];

  const values = [
    { icon: Sparkles, title: "Innovation", description: "Pushing the boundaries of what's possible" },
    { icon: Users, title: "Collaboration", description: "Working together to achieve greatness" },
    { icon: Target, title: "Excellence", description: "Striving for perfection in everything we do" },
    { icon: Globe, title: "Global Impact", description: "Making a difference worldwide" }
  ];

  return (
    <Layout 
      title="Careers - Zion Tech Group"
      description="Join the future of technology with Zion Tech Group. Explore career opportunities in AI consciousness, quantum computing, cybersecurity, and space technology."
      keywords="careers, jobs, employment, AI consciousness, quantum computing, cybersecurity, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Join the
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Future of Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Be part of the revolution in AI consciousness, quantum computing, cybersecurity, 
                and space technology. Transform the world with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#positions"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                  <Briefcase className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're driven by innovation, collaboration, excellence, and global impact. 
                Join us in shaping the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We offer competitive benefits and opportunities to work with cutting-edge technology 
                that's transforming the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="positions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our revolutionary team and help shape the future of technology. 
                Explore our current openings below.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center`}>
                      <position.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-gray-400 mb-4">{position.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {position.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Globe className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Don't see a position that fits? We're always looking for talented individuals 
                who are passionate about transforming the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Us Your Resume
                  <Briefcase className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;