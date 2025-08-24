import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  MapPin, Phone, Mail, Globe as GlobeIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring emerging technologies and novel approaches to solve complex problems."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Security is built into every solution we create, ensuring our clients' data and systems remain protected in an ever-evolving threat landscape."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We work closely with clients to understand their unique challenges and deliver solutions that drive real business value."
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "We don't just solve today's problems—we build solutions that will scale and adapt to tomorrow's challenges and opportunities."
    }
  ];

  const team = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation in AI, quantum computing, and autonomous systems.",
      expertise: ["AI Strategy", "Quantum Computing", "Business Innovation"]
    },
    {
      name: "AI Team",
      role: "Artificial Intelligence Specialists",
      description: "Experts in machine learning, neural networks, and autonomous AI systems.",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"]
    },
    {
      name: "Quantum Team",
      role: "Quantum Computing Engineers",
      description: "Pioneers in quantum algorithms, quantum cryptography, and quantum machine learning.",
      expertise: ["Quantum Algorithms", "Quantum Cryptography", "Quantum ML"]
    },
    {
      name: "Security Team",
      role: "Cybersecurity Experts",
      description: "Specialists in quantum-resistant security, threat detection, and compliance automation.",
      expertise: ["Quantum Security", "Threat Detection", "Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>About Us — Zion Tech Group | Leading-Edge Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and autonomous innovation. Discover our team, values, and commitment to client success." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation platform" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of autonomous technology and AI-driven innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                To revolutionize how businesses operate by creating autonomous, intelligent systems that drive innovation, 
                efficiency, and growth. We believe in a future where technology works seamlessly with human creativity 
                to solve the world's most complex challenges.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Through cutting-edge AI, quantum computing, and autonomous systems, we're building the foundation 
                for the next generation of business technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="text-center">
                  <Brain className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-4">Vision 2030</h3>
                  <p className="text-white/80">
                    A world where autonomous AI systems handle complex business operations, 
                    quantum computing solves previously unsolvable problems, and human creativity 
                    is amplified by intelligent technology.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Delivering exceptional results and building lasting partnerships with forward-thinking organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/30"
              >
                <value.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Meet the brilliant minds behind our innovative solutions and cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/30"
              >
                <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                <p className="text-white/80 leading-relaxed mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
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

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}