import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  Globe, Code, Server, Network, CheckCircle, TrendingUp
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AboutPage() {
  const stats = [
    { number: '35+', label: 'Real Micro SaaS Services', icon: Rocket },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '14 Days', label: 'Free Trial', icon: Award },
    { number: '24/7', label: 'Expert Support', icon: Users }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI, quantum computing, and emerging technologies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security with SOC 2 compliance and quantum-resistant encryption for your peace of mind.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions serve businesses worldwide, from startups to Fortune 500 companies, driving digital transformation.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our mission. We provide personalized support and guidance every step of the way.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in AI and emerging technologies',
      image: '/team/kleber.jpg'
    },
    {
      name: 'AI Research Team',
      role: 'Innovation Lab',
      description: 'World-class researchers pushing the boundaries of AI consciousness',
      image: '/team/ai-team.jpg'
    },
    {
      name: 'Quantum Engineers',
      role: 'Quantum Computing',
      description: 'Experts in quantum algorithms and quantum-resistant security',
      image: '/team/quantum-team.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Revolutionary AI & Quantum Technology</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business with cutting-edge AI, quantum computing, and emerging technologies. Meet our team of innovators." />
        <meta name="keywords" content="Zion Tech Group, about us, AI technology, quantum computing, emerging technology, team, mission" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize business with cutting-edge AI, quantum computing, and emerging technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                We're revolutionizing the future of business with cutting-edge AI, quantum computing, 
                and emerging technologies that transform how companies operate and compete.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To democratize access to revolutionary technologies, enabling businesses of all sizes 
                to leverage the power of AI, quantum computing, and emerging tech to solve real-world problems 
                and create sustainable competitive advantages.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 relative bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Founded in 2023, Zion Tech Group emerged from a vision to bridge the gap between 
                    cutting-edge research and practical business applications. We recognized that many 
                    revolutionary technologies were trapped in research labs, inaccessible to businesses 
                    that could benefit from them.
                  </p>
                  <p>
                    Our journey began with a simple question: "What if we could make AI consciousness, 
                    quantum computing, and emerging technologies accessible to every business?" This 
                    question led us to develop our unique approach of creating real, market-validated 
                    micro SaaS services that solve actual business problems.
                  </p>
                  <p>
                    Today, we're proud to offer 35+ real services that have been validated in the market, 
                    serving businesses from startups to Fortune 500 companies. Our commitment to innovation, 
                    security, and customer success drives everything we do.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                    <p className="text-cyan-300 text-lg">Innovation Lab</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our team of innovators, researchers, and engineers are passionate about pushing the 
                boundaries of what's possible and delivering real value to our customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses already leveraging our revolutionary technologies 
                  to accelerate their digital transformation and gain competitive advantages.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                  >
                    🚀 Get Started Today
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    🔍 Explore Our Services
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}