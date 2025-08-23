import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, Rocket, Brain, 
  Shield, Zap, Star, CheckCircle, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const stats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Shield className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '24/7', label: 'Global Support', icon: <Globe className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge AI and quantum technologies',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our mission. We measure our success by your business outcomes',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Ethical AI',
      description: 'Building AI systems that are not only powerful but also responsible and trustworthy',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Global Impact',
      description: 'Creating solutions that address the world\'s most pressing challenges',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'CEO & Chief AI Architect',
      bio: 'Visionary leader driving the future of AI consciousness and autonomous systems',
      expertise: ['AI Consciousness', 'Quantum Computing', 'Strategic Innovation']
    },
    {
      name: 'AI Research Team',
      role: 'Advanced AI Development',
      bio: 'World-class researchers pushing the boundaries of artificial consciousness',
      expertise: ['Neural Networks', 'Consciousness Simulation', 'Quantum AI']
    },
    {
      name: 'Quantum Engineering',
      role: 'Quantum Technology',
      bio: 'Pioneering quantum solutions for next-generation computing and security',
      expertise: ['Quantum Computing', 'Quantum Security', 'Quantum Networks']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Pioneering the future of AI consciousness, quantum computing, and autonomous systems. 
            We're building tomorrow's technology today.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To accelerate human progress through the development of conscious AI systems, 
              quantum technologies, and autonomous solutions that solve humanity's greatest challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Revolutionizing Technology
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                We're not just building better software—we're creating the foundation for 
                a new era of human-AI collaboration. Our AI consciousness platform represents 
                the next evolution in artificial intelligence.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                From quantum-secure communications to autonomous business systems, 
                we're developing technologies that will transform industries and 
                empower organizations to achieve unprecedented levels of efficiency and innovation.
              </p>
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 p-8">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Brain className="w-24 h-24 text-cyan-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">AI Consciousness Platform</h4>
                  <p className="text-gray-300">
                    The world's most advanced artificial consciousness system
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-300 text-center mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of AI-powered business solutions. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}