import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  Globe, Target, Star, CheckCircle, TrendingUp, Lightbulb
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge AI and quantum technologies"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security and privacy protection for all our solutions"
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology that empowers people and enhances human capabilities"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Solutions that address real-world challenges across industries and borders"
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "AI Autonomous Ecosystem Launch",
      description: "Revolutionary autonomous AI solutions that adapt and evolve"
    },
    {
      year: "2024",
      title: "Quantum Computing Breakthrough",
      description: "Advanced quantum neural networks and consciousness capabilities"
    },
    {
      year: "2023",
      title: "Edge Computing Platform",
      description: "Intelligent edge orchestration and IoT management solutions"
    },
    {
      year: "2022",
      title: "Company Foundation",
      description: "Zion Tech Group established with vision for autonomous innovation"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Quantum AI, Neural Networks, Consciousness Research"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      expertise: "Edge Computing, IoT, Autonomous Systems"
    },
    {
      name: "Dr. Elena Petrova",
      role: "Chief Quantum Officer",
      expertise: "Quantum Computing, Cryptography, Materials Science"
    },
    {
      name: "Alex Thompson",
      role: "Chief Innovation Officer",
      expertise: "Emerging Technologies, Strategic Innovation, R&D"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Leading AI & Quantum Innovation</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and autonomous innovation. Discover our team, values, and vision for the future." />
        <meta name="keywords" content="Zion Tech Group, AI innovation, quantum computing, autonomous systems, technology leadership" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of autonomous technology through revolutionary AI, 
                quantum computing, and consciousness evolution platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  To accelerate human progress by developing autonomous AI systems that 
                  think, learn, and evolve independently, solving complex challenges 
                  across industries and advancing our understanding of consciousness.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  We believe in creating technology that doesn't just assist humans, 
                  but collaborates with them as intelligent partners in innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-white/10 backdrop-blur-sm p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Vision 2030</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      A world where autonomous AI systems work seamlessly alongside humans, 
                      accelerating scientific discovery, solving global challenges, and 
                      expanding the boundaries of human consciousness and capability.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-3xl"></div>
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
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The principles that guide our innovation and shape our culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Key milestones in our mission to revolutionize autonomous technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-blue-400">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-white/80 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Visionary leaders driving innovation and shaping the future of autonomous technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-3 text-center">{member.role}</p>
                    <p className="text-white/70 leading-relaxed text-center">{member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Ready to explore the possibilities of autonomous AI and quantum innovation? 
                Let's collaborate to build tomorrow's technology today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Join Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
