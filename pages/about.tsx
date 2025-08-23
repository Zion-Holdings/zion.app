import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Globe, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  Star,
  CheckCircle,
  TrendingUp,
  Zap,
  Heart
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const stats = [
    { number: '500+', label: 'Clients Served', icon: <Users className="w-8 h-8 text-cyan-400" /> },
    { number: '50+', label: 'Countries', icon: <Globe className="w-8 h-8 text-purple-400" /> },
    { number: '99.9%', label: 'Uptime', icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
    { number: '24/7', label: 'Support', icon: <Zap className="w-8 h-8 text-yellow-400" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI, quantum computing, and emerging technologies.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Trust & Security',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: 'Customer Success',
      description: 'We measure our success by your success, providing dedicated support and continuous optimization.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-emerald-400" />,
      title: 'Excellence',
      description: 'We strive for excellence in every solution, every interaction, and every outcome.'
    }
  ];

  const team = [
    {
      name: 'Kleber Oliveira',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and enterprise solutions.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Enterprise Architecture']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & Chief AI Officer',
      bio: 'Leading researcher in artificial intelligence and machine learning with PhD from MIT.',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      bio: 'Expert in scalable systems and cloud infrastructure with experience at major tech companies.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Dr. James Kim',
      role: 'Head of Quantum Research',
      bio: 'Quantum physicist and researcher specializing in quantum computing applications.',
      expertise: ['Quantum Computing', 'Quantum Algorithms', 'Quantum Security']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Pioneering the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform businesses and industries worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Get in Touch
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-cyan-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-white/80 mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to leverage the power of AI, quantum computing, and emerging technologies to solve complex challenges and drive innovation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Accelerate digital transformation
                </li>
                <li className="flex items-center text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Enable AI-powered decision making
                </li>
                <li className="flex items-center text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Secure quantum-ready infrastructure
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-purple-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-white/80 mb-6">
                To be the global leader in next-generation technology solutions, creating a future where AI and quantum computing work seamlessly together to solve humanity's greatest challenges and unlock unprecedented opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/70">
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />
                  Pioneer quantum-AI convergence
                </li>
                <li className="flex items-center text-white/70">
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />
                  Enable sustainable innovation
                </li>
                <li className="flex items-center text-white/70">
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />
                  Transform industries globally
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
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
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experienced professionals passionate about innovation and committed to delivering exceptional value to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 mr-2 mb-2">
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
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Start Your Journey
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}