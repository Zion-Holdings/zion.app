import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Zap, Shield, Globe, Rocket, 
  Target, Users, Award, Star, Lock, Cpu, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function QuantumComputing() {
  const seoConfig = {
    title: "Quantum Computing Solutions - Zion Tech Group",
    description: "Revolutionary quantum computing solutions for enterprise. Quantum AI, quantum cybersecurity, and quantum cloud infrastructure that transforms business operations.",
    keywords: "quantum computing, quantum AI, quantum cybersecurity, quantum cloud, Zion Tech Group, enterprise solutions",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com/quantum-computing",
    type: "website"
  };

  const quantumServices = [
    {
      title: "Quantum AI & Machine Learning",
      description: "Revolutionary AI systems powered by quantum computing for unprecedented processing capabilities",
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      href: "/ai-quantum-hybrid-computing",
      features: ["Quantum Neural Networks", "Quantum Pattern Recognition", "Quantum Optimization Algorithms"]
    },
    {
      title: "Quantum Cybersecurity",
      description: "Next-generation security solutions leveraging quantum-resistant cryptography and quantum key distribution",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      href: "/quantum-cybersecurity",
      features: ["Quantum Key Distribution", "Post-Quantum Cryptography", "Quantum Threat Detection"]
    },
    {
      title: "Quantum Cloud Infrastructure",
      description: "Scalable quantum computing platforms accessible through cloud services",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      href: "/quantum-cloud-infrastructure",
      features: ["Quantum-as-a-Service", "Hybrid Classical-Quantum Systems", "Quantum Resource Management"]
    },
    {
      title: "Quantum Financial Intelligence",
      description: "Advanced financial modeling and risk assessment using quantum algorithms",
      icon: <Target className="w-8 h-8 text-green-400" />,
      href: "/quantum-financial-trading",
      features: ["Portfolio Optimization", "Risk Assessment", "Market Prediction Models"]
    },
    {
      title: "Quantum Bio-Computing",
      description: "Revolutionary biological computing platforms for drug discovery and genetic research",
      icon: <Atom className="w-8 h-8 text-pink-400" />,
      href: "/quantum-bio-computing-platform",
      features: ["Drug Discovery", "Genetic Analysis", "Protein Folding"]
    },
    {
      title: "Quantum Internet Security",
      description: "Secure quantum communication networks for the future internet",
      icon: <Lock className="w-8 h-8 text-yellow-400" />,
      href: "/quantum-internet-security-platform",
      features: ["Quantum Networks", "Secure Communication", "Quantum Internet Protocols"]
    }
  ];

  const benefits = [
    {
      title: "Exponential Speed",
      description: "Solve complex problems in minutes that would take classical computers years",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Quantum Advantage",
      description: "Achieve computational superiority in specific domains like cryptography and optimization",
      icon: <Star className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Future-Proof Security",
      description: "Implement quantum-resistant cryptography to protect against future threats",
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the competition with cutting-edge quantum technologies",
      icon: <Rocket className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <Layout seo={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Atom className="w-16 h-16 text-cyan-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionizing business operations with quantum computing technology. 
                Experience exponential speed, enhanced security, and computational superiority.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Quantum Computing?</h2>
              <p className="text-xl text-gray-300">Transform your business with the power of quantum technology</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Services</h2>
              <p className="text-xl text-gray-300">Comprehensive quantum solutions for every industry</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with the power of quantum technology. 
                Contact our experts to get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}