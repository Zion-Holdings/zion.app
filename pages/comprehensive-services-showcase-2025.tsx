import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Atom, Rocket, Shield, Zap, Target, Star } from 'lucide-react';
import Link from 'next/link';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      description: 'Revolutionary AI solutions from consciousness evolution to autonomous operations',
      services: [
        { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', featured: true },
        { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations-platform', featured: true },
        { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', featured: true },
        { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite' },
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' }
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      description: 'Breakthrough quantum solutions for previously impossible problems',
      services: [
        { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform', featured: true },
        { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', featured: true },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', featured: true },
        { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
        { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' }
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Space Technology',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      description: 'Cutting-edge space exploration and resource mining solutions',
      services: [
        { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform', featured: true },
        { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', featured: true },
        { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform' },
        { name: 'Space Colonization Services', href: '/space-colonization-services' }
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Enterprise IT Solutions',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      description: 'Advanced enterprise infrastructure and security solutions',
      services: [
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', featured: true },
        { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation', featured: true },
        { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' },
        { name: 'Multi-Cloud Disaster Recovery', href: '/multi-cloud-disaster-recovery' },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
        { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Industry Solutions',
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      description: 'Specialized solutions for healthcare, finance, manufacturing, and more',
      services: [
        { name: 'Healthcare AI Solutions', href: '/healthcare-ai-solutions', featured: true },
        { name: 'Financial Solutions', href: '/financial-solutions', featured: true },
        { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions', featured: true },
        { name: 'Retail Technology Solutions', href: '/retail-technology-solutions' },
        { name: 'Government Technology Solutions', href: '/government-technology-solutions' },
        { name: 'Energy & Utilities Solutions', href: '/energy-utilities-solutions' }
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Micro SAAS & Innovation',
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      description: 'Innovative business solutions and emerging technology platforms',
      services: [
        { name: 'Ultimate 2025 Micro SAAS Showcase', href: '/ultimate-2025-micro-saas-showcase', featured: true },
        { name: 'Innovative Services Showcase', href: '/innovative-services-showcase', featured: true },
        { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
        { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
        { name: 'AI Dream Interpreter Platform', href: '/ai-dream-interpreter-platform' },
        { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro' }
      ],
      color: 'from-pink-500 to-red-600'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Star className="w-16 h-16 text-yellow-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Comprehensive Services Showcase 2025
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover the complete spectrum of Zion Tech Group's revolutionary technology solutions. 
                From AI consciousness to quantum computing, space technology to enterprise security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Complete Service Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive suite of services covers every aspect of modern technology needs, 
                from foundational infrastructure to cutting-edge innovations.
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={service.href}>
                          <div className={`p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full ${
                            service.featured ? 'ring-2 ring-cyan-400/30 bg-gradient-to-br from-cyan-500/5 to-blue-500/5' : ''
                          }`}>
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </h4>
                              {service.featured && (
                                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                              Learn More
                              <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solutions Grid */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most innovative and transformative solutions that are reshaping industries 
                and driving the future of technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Consciousness Evolution 2029',
                  description: 'Revolutionary AI consciousness development platform',
                  href: '/ai-consciousness-evolution-2029',
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  title: 'Quantum Neural Network Platform',
                  description: 'Advanced quantum neural computing solutions',
                  href: '/quantum-neural-network-platform',
                  icon: <Atom className="w-12 h-12 text-blue-400" />,
                  color: 'from-blue-500 to-purple-600'
                },
                {
                  title: 'Space Resource Mining Platform',
                  description: 'Cutting-edge space exploration technology',
                  href: '/space-resource-mining-platform',
                  icon: <Rocket className="w-12 h-12 text-purple-400" />,
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  title: 'Zero Trust Security Platform',
                  description: 'Advanced enterprise security architecture',
                  href: '/zero-trust-security-platform',
                  icon: <Shield className="w-12 h-12 text-green-400" />,
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  title: 'Healthcare AI Solutions',
                  description: 'AI-powered healthcare diagnostics and analytics',
                  href: '/healthcare-ai-solutions',
                  icon: <Target className="w-12 h-12 text-yellow-400" />,
                  color: 'from-yellow-500 to-orange-600'
                },
                {
                  title: 'Ultimate 2025 Micro SAAS Showcase',
                  description: 'Innovative business solutions showcase',
                  href: '/ultimate-2025-micro-saas-showcase',
                  icon: <Zap className="w-12 h-12 text-pink-400" />,
                  color: 'from-pink-500 to-red-600'
                }
              ].map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={solution.href}>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full">
                      <div className="flex justify-center mb-6">{solution.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-300 text-center mb-6">
                        {solution.description}
                      </p>
                      <div className="flex justify-center">
                        <button className={`px-6 py-3 bg-gradient-to-r ${solution.color} text-white font-semibold rounded-lg hover:scale-105 transition-transform`}>
                          Learn More
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Explore Our Complete Portfolio?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how our comprehensive technology solutions can transform your business 
                and drive innovation across all areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    View Pricing
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025;