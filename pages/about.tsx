import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Shield, Users, 
  Target, Award, Clock, MapPin, Phone, Mail, Globe,
  CheckCircle, Star, TrendingUp, Zap
} from 'lucide-react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-8 h-8 text-blue-400" /> },
    { number: '4.9/5', label: 'Client Satisfaction', icon: <Star className="w-8 h-8 text-yellow-400" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Zap className="w-8 h-8 text-purple-400" /> }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies.',
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve transformative results.',
      icon: <Target className="w-12 h-12 text-purple-400" />
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project and interaction.',
      icon: <Award className="w-12 h-12 text-yellow-400" />
    },
    {
      title: 'Future-Focused',
      description: 'We build solutions that not only solve today\'s problems but prepare for tomorrow\'s challenges.',
      icon: <Rocket className="w-12 h-12 text-pink-400" />
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: <Brain className="w-8 h-8" />, color: 'text-cyan-400' },
    { name: 'Quantum Computing', icon: <Atom className="w-8 h-8" />, color: 'text-blue-400' },
    { name: 'Space Technology', icon: <Rocket className="w-8 h-8" />, color: 'text-purple-400' },
    { name: 'Cybersecurity', icon: <Shield className="w-8 h-8" />, color: 'text-green-400' }
  ];

  return (
    <Layout>
      <SEO 
        title="About Us | Zion Tech Group"
        description="Learn about Zion Tech Group, a leading technology company pioneering AI, quantum computing, space technology, and enterprise solutions. Discover our mission, values, and commitment to innovation."
        keywords={["about us", "Zion Tech Group", "technology company", "AI innovation", "quantum computing", "space technology", "enterprise solutions"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Zion Tech Group
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                Pioneering the future of technology with innovative AI, quantum computing, and space technology solutions that transform businesses and drive human progress.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  To accelerate human progress through cutting-edge technology solutions that solve the world's most complex challenges.
                </p>
                <p className="text-white/70">
                  We believe that technology should serve humanity, not the other way around. Our solutions are designed to enhance human capabilities, improve lives, and create a more sustainable future.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
                <p className="text-lg text-white/80 mb-6">
                  To be the global leader in next-generation technology solutions, driving innovation across AI, quantum computing, and space technology.
                </p>
                <p className="text-white/70">
                  We envision a world where technology seamlessly integrates with human potential, creating unprecedented opportunities for growth, discovery, and advancement.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Our Core Values</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Focus */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Technology Focus Areas</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We specialize in the most cutting-edge technologies that will define the future.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`flex justify-center mb-4 ${tech.color}`}>{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-white">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Ready to explore how our innovative solutions can transform your business?
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10"
              >
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <a href="tel:+1 302 464 0950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10"
              >
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10"
              >
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                <p className="text-white/70 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Globe className="w-5 h-5 mr-2" />
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;