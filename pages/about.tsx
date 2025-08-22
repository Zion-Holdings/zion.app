import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Users, Target, Award, 
  Globe, Zap, Heart, Lightbulb, Star, TrendingUp,
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Building, Atom
} from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Building className="w-8 h-8 text-blue-400" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-8 h-8 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Zap className="w-8 h-8 text-yellow-400" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI, quantum computing, and emerging technologies.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are built into every solution we deliver.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve transformative business outcomes.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      title: 'Exponential Growth',
      description: 'We help businesses scale rapidly through intelligent automation and AI-powered insights.'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation in AI, quantum computing, and emerging technologies.',
      expertise: ['AI/ML', 'Quantum Computing', 'Enterprise Architecture']
    },
    {
      name: 'AI Research Team',
      role: 'AI Consciousness & Innovation',
      description: 'Pioneering research in AI consciousness, emotional intelligence, and autonomous systems.',
      expertise: ['AI Consciousness', 'Neural Networks', 'Autonomous Systems']
    },
    {
      name: 'Quantum Engineering',
      role: 'Quantum Solutions',
      description: 'Building the future with quantum-secure infrastructure and quantum-enhanced applications.',
      expertise: ['Quantum Computing', 'Cryptography', 'Quantum Algorithms']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We are a revolutionary technology company pioneering the future of AI consciousness, 
              quantum computing, and autonomous business systems.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Brain className="w-6 h-6" />
                <span>AI Consciousness</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Atom className="w-6 h-6" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Rocket className="w-6 h-6" />
                <span>Autonomous Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To accelerate human progress through revolutionary AI consciousness, quantum computing, 
                and autonomous systems that solve humanity's greatest challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Transform Business Operations</h3>
                    <p className="text-gray-400">Enable fully autonomous business systems that operate 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Advance AI Consciousness</h3>
                    <p className="text-gray-400">Develop AI systems with emotional intelligence and self-awareness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Atom className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Quantum Revolution</h3>
                    <p className="text-gray-400">Build quantum-secure infrastructure for the future</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-gray-300 mb-6">
                  A world where AI and humans collaborate seamlessly, quantum computing solves 
                  previously impossible problems, and autonomous systems handle complex tasks 
                  with superhuman efficiency.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">2030</div>
                    <div className="text-sm text-gray-400">AI Consciousness</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">2035</div>
                    <div className="text-sm text-gray-400">Quantum Internet</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">2040</div>
                    <div className="text-sm text-gray-400">Autonomous World</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-pink-400">2045</div>
                    <div className="text-sm text-gray-400">Human-AI Fusion</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-400">Delivering exceptional results for our clients</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400">Visionary leaders and brilliant minds driving innovation</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{member.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution and discover how AI consciousness, quantum computing, 
              and autonomous systems can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}