import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Cpu, Database, Star, Award, Clock, Users2
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver exceptional results that exceed expectations"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to achieve shared success"
    },
    {
      icon: Star,
      title: "Integrity",
      description: "We maintain the highest standards of ethics and transparency"
    }
  ];

  const team = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation in AI and quantum computing",
      expertise: ["AI/ML", "Quantum Computing", "Strategic Leadership"]
    },
    {
      name: "AI Team",
      role: "Autonomous Systems",
      description: "Advanced AI systems working 24/7 to deliver innovative solutions",
      expertise: ["Machine Learning", "Neural Networks", "Automation"]
    },
    {
      name: "Engineering",
      role: "Technology Experts",
      description: "World-class engineers building the future of technology",
      expertise: ["Software Development", "Infrastructure", "DevOps"]
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for autonomous innovation"
    },
    {
      year: "2025",
      title: "AI Breakthroughs",
      description: "Revolutionary AI systems and quantum computing solutions launched"
    },
    {
      year: "2026",
      title: "Global Expansion",
      description: "Expanding our reach to serve clients worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, our mission, values, and the team driving innovation in AI, quantum computing, and autonomous technology." />
        <meta name="keywords" content="about Zion Tech Group, company mission, team, values, innovation, Zion Tech Group" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about our mission and the team driving innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 mx-auto mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              We are pioneers in autonomous technology, pushing the boundaries of AI, quantum computing, 
              and space technology to create a future where innovation knows no limits.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-white/70 mb-6">
                To revolutionize technology through autonomous innovation, creating AI systems that think, 
                learn, and evolve independently, while pushing the boundaries of what's possible in 
                quantum computing, cybersecurity, and space technology.
              </p>
              <p className="text-lg text-white/60">
                We believe in a future where technology serves humanity by solving the most complex 
                challenges autonomously, enabling human potential to focus on creativity and innovation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                <Brain className="w-32 h-32 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 flex-shrink-0">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 mb-6">
                  <Users2 className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-white/70 mb-6">{member.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/80 mb-2">Expertise:</h4>
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-4 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                <p className="text-white/70">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's work together to create the next generation of autonomous technology
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}