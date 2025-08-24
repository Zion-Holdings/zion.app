import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Target, Zap, Users, CheckCircle, 
  ArrowRight, ChevronRight, Globe, Brain, Rocket
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function CybersecurityPage() {
  const features = [
    {
      icon: Shield,
      title: "Threat Detection",
      description: "Advanced AI-powered threat detection and response systems",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Lock,
      title: "Encryption & PKI",
      description: "Quantum-resistant encryption and public key infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security operations center and incident response",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Target,
      title: "Vulnerability Assessment",
      description: "Comprehensive security testing and penetration testing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Zero Trust Security",
      description: "Modern security architecture for distributed environments",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Employee security awareness and training programs",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const solutions = [
    {
      title: "Cloud Security",
      description: "Multi-cloud security and compliance management",
      icon: Globe,
      examples: ["Identity management", "Data protection", "Compliance monitoring"]
    },
    {
      title: "Network Security",
      description: "Advanced firewall and network protection solutions",
      icon: Shield,
      examples: ["Intrusion prevention", "DDoS protection", "Traffic analysis"]
    },
    {
      title: "Application Security",
      description: "Secure software development and testing",
      icon: Lock,
      examples: ["Code analysis", "Security testing", "API protection"]
    },
    {
      title: "Data Protection",
      description: "Comprehensive data security and privacy solutions",
      icon: Eye,
      examples: ["Data encryption", "Access control", "Privacy compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Cybersecurity Services — Zion Tech Group</title>
        <meta name="description" content="Protect your digital assets with our comprehensive cybersecurity solutions. AI-powered threat detection, quantum-resistant encryption, and 24/7 security monitoring." />
        <meta property="og:title" content="Cybersecurity Services — Zion Tech Group" />
        <meta property="og:description" content="Protect your digital assets with our comprehensive cybersecurity solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
      </Head>

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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-5 mx-auto mb-8 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Protect your digital assets with cutting-edge cybersecurity solutions that stay ahead of evolving threats
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              From AI-powered threat detection to quantum-resistant encryption, our security solutions provide comprehensive protection for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Secure Your Business
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Security Assessment
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our cybersecurity services cover every aspect of digital protection and threat prevention
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
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-red-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-red-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
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

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Security Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tailored security solutions for every aspect of your digital infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 p-3 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-white/70">{solution.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {solution.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive cybersecurity solutions can protect your digital assets and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Get Security Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Security Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}