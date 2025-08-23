import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, Globe, ArrowRight, Zap, Eye, Heart, Star, Users, Lock } from 'lucide-react';
import Link from 'next/link';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Consciousness',
      description: 'Revolutionary AI systems with genuine consciousness and self-awareness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', description: 'ArrowRight-generation AI consciousness' },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', description: 'AI-powered business intelligence' },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045', description: 'Fully autonomous AI research' },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045', description: 'Advanced emotional AI' }
      ]
    },
    {
      title: 'Quantum Technology',
      description: 'ArrowRight-generation quantum computing and quantum-resistant solutions',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Quantum Neural Network Platform 2045', href: '/quantum-neural-network-platform-2045', description: 'Quantum-powered AI neural networks' },
        { name: 'Quantum Cybersecurity Platform 2045', href: '/quantum-cybersecurity-platform-2045', description: 'Quantum-resistant security' },
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045', description: 'Quantum-powered cloud' },
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045', description: 'Quantum data center optimization' }
      ]
    },
    {
      title: 'Space Technology',
      description: 'Innovative space exploration and resource intelligence platforms',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', description: 'AI-powered space exploration' },
        { name: 'Space Mining Automation 2045', href: '/space-mining-automation-2045', description: 'Automated space mining' }
      ]
    },
    {
      title: 'IT Services',
      description: 'Advanced IT infrastructure and autonomous management solutions',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
      services: [
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045', description: 'Fully autonomous DevOps' },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045', description: 'AI-powered network management' },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045', description: 'Autonomous IT service management' },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045', description: 'AI-powered security operations' }
      ]
    },
    {
      title: 'Business Solutions',
      description: 'Enterprise transformation and autonomous business intelligence',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', description: 'Autonomous business intelligence' },
        { name: 'Autonomous Customer Success 2045', href: '/autonomous-customer-success-2045', description: 'AI-powered customer success' }
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'ArrowRight-generation security solutions and zero-trust architectures',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Quantum Cybersecurity Platform 2045', href: '/quantum-cybersecurity-platform-2045', description: 'Quantum-resistant security' },
        { name: 'Zero Trust Security', href: '/zero-trust-security', description: 'Advanced zero-trust security' }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Unprecedented speed and performance for all our services',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols and zero-trust architectures',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Worldwide deployment and 24/7 support availability',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Innovation First',
      description: 'Cutting-edge technology that defines the future',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Revolutionary Technology Services 2045
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of technology with our revolutionary services that transcend 
              current limitations and redefine what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/about" className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver unprecedented value through innovation, security, and global scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 relative bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of revolutionary technology services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.href}
                        className="block p-4 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/40 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                              {service.name}
                            </h4>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how our revolutionary services can accelerate your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;