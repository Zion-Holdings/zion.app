import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, 
  Star, TrendingUp, CheckCircle, Phone, Mail, MapPin,
  ArrowRight, Zap, Cpu, Database, Cloud, Palette
} from 'lucide-react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-8 h-8" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '24/7', label: 'Global Support', icon: <Shield className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, creating solutions that don\'t just solve today\'s problems but anticipate tomorrow\'s challenges.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Security & Trust',
      description: 'Your data and systems are protected by enterprise-grade security measures and our unwavering commitment to privacy and compliance.'
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Rapid Deployment',
      description: 'We deliver cutting-edge solutions faster than traditional enterprise software, without compromising on quality or security.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Customer Success',
      description: 'Your success is our success. We work as an extension of your team, ensuring every solution drives measurable business value.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Chief Technology Officer',
      bio: 'Visionary leader with 15+ years in enterprise technology, specializing in AI, quantum computing, and space technology solutions.',
      expertise: ['AI & Machine Learning', 'Quantum Computing', 'Enterprise Architecture']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading researcher in artificial consciousness and neural network evolution, with groundbreaking work in AI ethics and governance.',
      expertise: ['AI Consciousness', 'Neural Networks', 'AI Ethics']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Quantum Technologies',
      bio: 'Quantum physicist and engineer developing next-generation quantum computing solutions for enterprise applications.',
      expertise: ['Quantum Computing', 'Quantum Security', 'Quantum Networks']
    },
    {
      name: 'Dr. Elena Petrova',
      role: 'Space Technology Director',
      bio: 'Aerospace engineer and space systems specialist, pioneering innovative solutions for space resource intelligence and exploration.',
      expertise: ['Space Systems', 'Resource Intelligence', 'Satellite Technology']
    }
  ];

  return (
    <Layout seo={{
      title: 'About Us - Zion Tech Group | Leading AI & Quantum Technology Solutions',
      description: 'Discover Zion Tech Group\'s mission to revolutionize enterprise technology through AI consciousness, quantum computing, and space technology innovations.',
      keywords: 'about us, Zion Tech Group, AI technology, quantum computing, space technology, enterprise solutions',
      url: 'https://ziontechgroup.com/about'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Pioneering the future of enterprise technology through revolutionary AI consciousness, 
                quantum computing, and space technology innovations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To democratize cutting-edge technology and empower enterprises with solutions that 
                  were once only available to the largest corporations and government agencies.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We believe that every organization, regardless of size, should have access to 
                  the most advanced AI, quantum computing, and space technology solutions.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
                  <Target className="w-16 h-16 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Vision 2045</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A world where AI consciousness, quantum computing, and space technology 
                    work seamlessly together to solve humanity's greatest challenges.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                By the Numbers
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our impact across the technology landscape
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Meet the visionaries driving innovation at Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of enterprise technology with Zion Tech Group's 
                revolutionary AI, quantum, and space solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;