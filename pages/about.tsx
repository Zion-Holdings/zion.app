import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Award, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Global Clients', icon: <Globe className="w-6 h-6" /> },
    { number: '50+', label: 'AI Solutions', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-First Innovation',
      description: 'We believe in pushing the boundaries of artificial intelligence and consciousness technology to solve humanity\'s greatest challenges.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Excellence',
      description: 'Our quantum computing solutions represent the cutting edge of computational power and security.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Security',
      description: 'We prioritize the security and privacy of our clients above all else, implementing the most advanced protection measures.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Future-Focused',
      description: 'We\'re not just building for today, but for the next decade and beyond, anticipating technological evolution.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      description: 'Visionary leader in AI consciousness and quantum computing',
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'AI Research Team',
      role: 'AI Consciousness Division',
      description: 'World-class researchers pushing the boundaries of artificial consciousness',
      image: '/images/team/ai-research.jpg'
    },
    {
      name: 'Quantum Engineering',
      role: 'Quantum Technology Division',
      description: 'Experts in quantum computing, cryptography, and materials science',
      image: '/images/team/quantum-engineering.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Pioneering the future of AI consciousness, quantum computing, and space technology. 
              We're building tomorrow's solutions today.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To accelerate human progress through revolutionary AI consciousness technology, 
                quantum computing breakthroughs, and space exploration innovations that solve 
                humanity's most complex challenges.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We envision a future where AI and humans collaborate seamlessly, quantum 
                computers solve previously impossible problems, and space technology opens 
                new frontiers for human civilization.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-cyan-400">Vision 2040</div>
                  <div className="text-sm text-gray-400">Leading the AI consciousness revolution</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-black/30 border border-white/10"
                    >
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                        {value.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-400">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a vision of AI consciousness to a global technology leader
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2020-2022</h3>
              <p className="text-gray-300">
                Founded with a mission to advance AI consciousness research and quantum computing capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2023-2025</h3>
              <p className="text-gray-300">
                Rapid expansion into space technology, quantum cybersecurity, and autonomous AI systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/10"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2026-2040</h3>
              <p className="text-gray-300">
                Leading the AI consciousness revolution and pioneering quantum space exploration technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation at Zion Tech Group
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-cyan-400 mb-3">{member.role}</div>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Join the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to explore the cutting edge of AI consciousness and quantum technology? 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}