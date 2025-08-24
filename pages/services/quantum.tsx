import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Cpu, Shield, Target, Zap, Users, CheckCircle, 
  ArrowRight, ChevronRight, Globe, Brain, Rocket
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function QuantumComputingPage() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Algorithms",
      description: "Custom quantum algorithms optimized for specific computational problems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Quantum Software",
      description: "Quantum programming frameworks and development tools",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Quantum-resistant encryption and secure communication protocols",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Quantum Machine Learning",
      description: "AI algorithms enhanced with quantum computing capabilities",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Quantum Simulation",
      description: "Complex system modeling and optimization using quantum principles",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Quantum Consulting",
      description: "Strategic guidance on quantum computing implementation",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const applications = [
    {
      title: "Financial Modeling",
      description: "Portfolio optimization, risk assessment, and market simulation",
      icon: Target,
      examples: ["Option pricing", "Risk management", "Algorithmic trading"]
    },
    {
      title: "Drug Discovery",
      description: "Molecular simulation and chemical compound analysis",
      icon: Atom,
      examples: ["Protein folding", "Drug interaction", "Material design"]
    },
    {
      title: "Logistics & Supply Chain",
      description: "Route optimization and complex scheduling problems",
      icon: Globe,
      examples: ["Vehicle routing", "Inventory management", "Scheduling optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Post-quantum cryptography and threat detection",
      icon: Shield,
      examples: ["Encryption standards", "Threat analysis", "Security protocols"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Quantum Computing Services — Zion Tech Group</title>
        <meta name="description" content="Unlock the future of computing with our quantum computing solutions. Quantum algorithms, cryptography, and AI integration for next-generation applications." />
        <meta property="og:title" content="Quantum Computing Services — Zion Tech Group" />
        <meta property="og:description" content="Unlock the future of computing with our quantum computing solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum" />
      
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"Quantum Computing Services — Zion Tech Group","url":"https://ziontechgroup.com/services/quantum","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script></Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 mx-auto mb-8 flex items-center justify-center">
              <Atom className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Unlock the future of computing with quantum-powered solutions that solve previously impossible problems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              From quantum algorithms to post-quantum cryptography, our solutions harness the power of quantum mechanics to revolutionize computation and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our quantum computing services span the full spectrum of quantum technologies and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-blue-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
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
              Quantum Applications
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving complex computational challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3 flex items-center justify-center">
                    <application.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{application.title}</h3>
                    <p className="text-white/70">{application.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {application.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-white/80">{example}</span>
                    </div>
                  ))}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's explore how quantum computing can revolutionize your computational capabilities and solve previously impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Start Your Quantum Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Our Quantum Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}