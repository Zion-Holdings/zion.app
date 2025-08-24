=======
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  Target, Star, Globe, Code, Server, Zap, Heart, Eye, Lightbulb
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Shield
} from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building long-term relationships based on reliability and transparency.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering the highest quality solutions that exceed expectations.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize business technology.'
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level AI solution.'
    },
    {
      year: '2018',
      title: 'Cloud Division Launch',
      description: 'Expanded into cloud architecture and infrastructure services.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and served clients worldwide.'
    },
    {
      year: '2022',
      title: 'Innovation Hub',
      description: 'Launched our research and development center for emerging technologies.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a top technology solutions provider in the industry.'
=======
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology should serve humanity, enhancing human capabilities and improving quality of life.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that address global challenges and benefit communities worldwide.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and performance in everything we deliver.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our business relationships.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to revolutionize technology through AI and quantum computing."
    },
    {
      year: "2021",
      title: "First AI Solutions",
      description: "Successfully deployed our first autonomous AI systems for enterprise clients."
    },
    {
      year: "2022",
      title: "Quantum Breakthrough",
      description: "Achieved significant milestones in quantum computing research and development."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across North America, Europe, and Asia."
    },
    {
      year: "2024",
      title: "Space Technology",
      description: "Launched our space resource intelligence platform and autonomous operations systems."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to push boundaries in AI consciousness, quantum neural networks, and autonomous systems."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      expertise: "AI Research, Quantum Computing, Strategic Leadership",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      expertise: "Quantum Algorithms, Cybersecurity, System Architecture",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Elena Petrova",
      role: "Chief Research Officer",
      expertise: "AI Consciousness, Neural Networks, Advanced Research",
      avatar: "👩‍🔬"
    },
    {
      name: "David Kim",
      role: "Chief Operations Officer",
      expertise: "Autonomous Systems, DevOps, Process Optimization",
      avatar: "👨‍💼"
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Security Officer",
      expertise: "Quantum Cryptography, Threat Intelligence, Compliance",
      avatar: "👨‍🔒"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Innovation Officer",
      expertise: "Emerging Technologies, Product Strategy, Innovation",
      avatar: "👩‍🚀"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, values, and the team behind our revolutionary AI and quantum computing solutions." />
        <meta name="robots" content="index, follow" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-8">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Pioneering the future of technology through revolutionary AI, quantum computing, and autonomous systems that transform how businesses operate and innovate.
              </p>
            </motion.div>

            {/* Company Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-white/70">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-white/70">AI Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-white/70">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-white/70">Uptime</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To democratize access to cutting-edge AI and quantum computing technologies, enabling organizations of all sizes to harness the power of autonomous systems and drive unprecedented innovation.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To create a world where AI and quantum technologies work seamlessly with human intelligence, solving complex global challenges and unlocking new possibilities for human advancement.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The principles that guide our decisions, shape our culture, and drive our success in everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From a bold vision to a global technology leader, discover the milestones that shaped Zion Tech Group.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                        <p className="text-white/70">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Meet the visionary leaders driving innovation and shaping the future of technology at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the companies already leveraging our revolutionary AI and quantum computing solutions to stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Get Started Today
                </button>
                <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800/80 rounded-full font-semibold text-white border border-white/20 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <EnhancedFooter />
    </>
  );
};

export default AboutPage;
