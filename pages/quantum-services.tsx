import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Lock, 
  TrendingUp, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Network,
  Key
} from 'lucide-react';
import Link from 'next/link';

export default function QuantumServices() {
  const services = [
    {
      title: "Quantum Computing Solutions",
      description: "Advanced quantum computing platforms for complex problem solving",
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      features: ["Quantum algorithms", "Optimization problems", "Simulation capabilities", "Quantum advantage"],
      href: "/quantum-computing-platform"
    },
    {
      title: "Quantum Cybersecurity",
      description: "Next-generation security using quantum-resistant cryptography",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ["Post-quantum cryptography", "Quantum key distribution", "Threat detection", "Secure communications"],
      href: "/quantum-cybersecurity"
    },
    {
      title: "Quantum AI & Machine Learning",
      description: "Hybrid quantum-classical AI systems for enhanced performance",
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ["Quantum neural networks", "Hybrid algorithms", "Enhanced optimization", "Quantum advantage"],
      href: "/quantum-ai-cognitive"
    },
    {
      title: "Quantum Internet & Networking",
      description: "Secure quantum communication networks and protocols",
      icon: <Network className="w-8 h-8 text-blue-400" />,
      features: ["Quantum entanglement", "Secure channels", "Global networks", "Quantum repeaters"],
      href: "/quantum-internet-security-platform"
    },
    {
      title: "Quantum Financial Solutions",
      description: "Quantum algorithms for financial modeling and trading",
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      features: ["Portfolio optimization", "Risk assessment", "Market prediction", "Algorithmic trading"],
      href: "/quantum-financial-trading"
    },
    {
      title: "Quantum IoT & Edge Computing",
      description: "Quantum-enhanced IoT systems and edge computing solutions",
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      features: ["Quantum sensors", "Edge AI", "Real-time processing", "Secure IoT"],
      href: "/quantum-iot"
    }
  ];

  const benefits = [
    "Exponential computational power for complex problems",
    "Unbreakable encryption and security",
    "Revolutionary AI and machine learning capabilities",
    "Future-proof technology investment",
    "Competitive advantage in innovation",
    "Access to cutting-edge research and development"
  ];

  const industries = [
    "Financial Services",
    "Healthcare & Pharmaceuticals",
    "Cybersecurity",
    "Logistics & Supply Chain",
    "Energy & Utilities",
    "Research & Development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Quantum Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with our cutting-edge quantum technology solutions. 
              From quantum computing to quantum cybersecurity, we're pioneering the next generation of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Quantum Solutions
              </Link>
              <Link href="/case-studies" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum solutions designed to solve previously unsolvable problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Quantum Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock unprecedented computational power and security with quantum technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantum technology is revolutionizing multiple industries with unprecedented capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to harness the power of quantum technology and gain a competitive edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Quantum Journey
              </Link>
              <Link href="/pricing" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}