import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Shield, Users, Globe, Award, 
  Target, TrendingUp, CheckCircle, ArrowRight,
  Building, MapPin, Phone, Mail, Clock
} from 'lucide-react';

export default function AboutPage() {
  const companyStats = [
    { value: '200+', label: 'Services Available', icon: Rocket, color: 'text-blue-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'text-green-400' },
    { value: '24/7', label: 'Support Available', icon: Users, color: 'text-purple-400' },
    { value: '21', label: 'Day Free Trial', icon: Award, color: 'text-yellow-400' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology solutions.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.',
      icon: Target,
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Quality & Reliability',
      description: 'We maintain the highest standards of quality and reliability in everything we do.',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Continuous Growth',
      description: 'We believe in continuous learning and improvement to stay ahead of industry trends.',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with over 15 years of experience in technology and business innovation.',
      expertise: ['Strategic Planning', 'Technology Leadership', 'Business Development'],
      image: '/team/kleber.jpg'
    },
    {
      name: 'Technology Team',
      role: 'Engineering Excellence',
      description: 'Our team of certified professionals brings expertise in cutting-edge technologies.',
      expertise: ['Software Development', 'AI/ML', 'Cloud Infrastructure', 'Cybersecurity'],
      image: '/team/engineering.jpg'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated professionals committed to ensuring your success with our solutions.',
      expertise: ['Technical Support', 'Customer Success', 'Training', 'Consulting'],
      image: '/team/support.jpg'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology solutions.'
    },
    {
      year: '2021',
      title: 'First 100 Clients',
      description: 'Reached our first milestone of serving 100 satisfied clients.'
    },
    {
      year: '2022',
      title: 'AI Services Launch',
      description: 'Expanded our portfolio to include cutting-edge AI and machine learning services.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Extended our services to clients worldwide with 24/7 support.'
    },
    {
      year: '2024',
      title: '200+ Services',
      description: 'Achieved our goal of offering 200+ comprehensive technology services.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and lead the industry with next-generation solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>About Us - Zion Tech Group | Our Story & Mission</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative technology solutions. Discover our story and meet our team." />
        <meta name="keywords" content="about Zion Tech Group, company mission, technology company, Delaware tech company, team, values" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about our mission and commitment to innovation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              We are a forward-thinking technology company dedicated to transforming businesses through 
              innovative solutions, cutting-edge AI, and exceptional customer service.
            </motion.p>

            {/* Company Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth. We believe that every organization deserves access to 
                world-class technology that transforms their operations and accelerates their success.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Through our comprehensive suite of services, from micro SaaS solutions to advanced AI, 
                we help companies navigate the digital landscape and achieve their full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To be the leading provider of innovative technology solutions, recognized for our 
                commitment to excellence, customer success, and technological advancement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Global technology leadership</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Customer-centric innovation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Sustainable growth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.color} mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated professionals committed to delivering exceptional technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.description}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-gray-400">
                      • {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones that have shaped our company and our commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Company <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Information</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn more about our company structure and how to get in touch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700"
            >
              <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Company</h3>
              <p className="text-gray-300">Zion Tech Group LLC</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700"
            >
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Middletown, DE</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700"
            >
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700"
            >
              <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Let&apos;s discuss how our technology solutions can transform your business
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}