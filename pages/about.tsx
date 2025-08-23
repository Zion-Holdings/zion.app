import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, Users, Target, Award, Globe, Rocket, 
  Brain, Shield, Zap, Star, CheckCircle, ArrowRight,
  Phone, Mail, MapPin, Linkedin, Github, Twitter
} from 'lucide-react';

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: <CheckCircle className="w-8 h-8 text-cyan-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Building className="w-8 h-8 text-purple-400" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-8 h-8 text-green-400" /> },
    { number: '24/7', label: 'Support', icon: <Zap className="w-8 h-8 text-yellow-400" /> }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'Pushing the boundaries of technology to create breakthrough solutions',
      icon: <Rocket className="w-12 h-12 text-cyan-400" />
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project and service',
      icon: <Award className="w-12 h-12 text-purple-400" />
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and ethical business practices',
      icon: <Shield className="w-12 h-12 text-green-400" />
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success',
      icon: <Users className="w-12 h-12 text-blue-400" />
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business strategy',
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      bio: 'Expert team specializing in AI, ML, and deep learning solutions',
      image: '/images/team/ai-team.jpg'
    },
    {
      name: 'Quantum Research Team',
      role: 'Quantum Computing Specialists',
      bio: 'Pioneering quantum technology research and development',
      image: '/images/team/quantum-team.jpg'
    },
    {
      name: 'Space Technology Team',
      role: 'Aerospace Engineers',
      bio: 'Advancing space exploration and satellite technology',
      image: '/images/team/space-team.jpg'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Zion Tech Group established with focus on emerging technologies' },
    { year: '2021', title: 'AI Services Launch', description: 'Launched comprehensive AI and machine learning services' },
    { year: '2022', title: 'Quantum Division', description: 'Established quantum computing research and development division' },
    { year: '2023', title: 'Space Technology', description: 'Expanded into space technology and satellite solutions' },
    { year: '2024', title: 'Global Expansion', description: 'Opened offices in multiple countries and regions' },
    { year: '2025', title: 'Future Vision', description: 'Leading the way in next-generation technology solutions' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Pioneering the future of technology through innovation, excellence, and unwavering commitment to our clients' success.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/services" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Our Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To accelerate human progress through cutting-edge technology solutions that solve the world's most complex challenges.
              </p>
              <p className="text-lg text-gray-400">
                We believe in the power of technology to transform industries, enhance human capabilities, and create a better future for all.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To be the global leader in next-generation technology solutions, driving innovation across AI, quantum computing, space technology, and beyond.
              </p>
              <p className="text-lg text-gray-400">
                We envision a world where technology seamlessly integrates with human potential, creating unprecedented opportunities for growth and discovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds driving innovation and shaping the future of technology.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize technology.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/services" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}