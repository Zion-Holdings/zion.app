import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';

const Homepage2025: React.FC = () => {
  const featuredServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      tagline: 'Transform data into actionable insights',
      description: 'Advanced AI-powered business intelligence platform that provides real-time analytics, predictive insights, and automated reporting.',
      price: '$2,499',
      period: 'month',
      features: ['Real-time analytics', 'AI predictions', 'Automated reporting', 'Custom dashboards'],
      popular: true,
      category: 'AI & Analytics',
      icon: '📊'
    },
    {
      id: 'quantum-secure-communication',
      name: 'Quantum-Secure Communication',
      tagline: 'Unbreakable communication for the quantum era',
      description: 'Next-generation quantum-secure communication platform using quantum key distribution and post-quantum cryptography.',
      price: '$4,999',
      period: 'month',
      features: ['Quantum encryption', 'Post-quantum crypto', 'Real-time security', 'Global compliance'],
      popular: false,
      category: 'Quantum Security',
      icon: '🔐'
    },
    {
      id: 'autonomous-supply-chain',
      name: 'Autonomous Supply Chain',
      tagline: 'Self-optimizing supply chains',
      description: 'AI-powered autonomous supply chain platform that continuously optimizes inventory, logistics, and supplier relationships.',
      price: '$3,999',
      period: 'month',
      features: ['Autonomous optimization', 'Predictive analytics', 'Real-time monitoring', 'Cost reduction'],
      popular: true,
      category: 'Supply Chain',
      icon: '🚚'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience Platform',
      tagline: 'Personalized experiences that drive loyalty',
      description: 'Comprehensive AI platform delivering personalized customer experiences across all touchpoints.',
      price: '$2,999',
      period: 'month',
      features: ['360° customer view', 'Personalized recommendations', 'Predictive behavior', 'ROI optimization'],
      popular: true,
      category: 'Customer Experience',
      icon: '💬'
    },
    {
      id: 'quantum-machine-learning',
      name: 'Quantum Machine Learning',
      tagline: 'Quantum advantage for ML applications',
      description: 'Revolutionary platform combining quantum computing with machine learning for complex problem solving.',
      price: '$5,999',
      period: 'month',
      features: ['Quantum neural networks', 'Hybrid models', 'Quantum simulation', 'API access'],
      popular: false,
      category: 'Quantum AI',
      icon: '🧠'
    },
    {
      id: 'autonomous-devops',
      name: 'Autonomous DevOps Platform',
      tagline: 'Self-healing infrastructure',
      description: 'Intelligent DevOps platform that autonomously manages infrastructure and resolves issues proactively.',
      price: '$3,499',
      period: 'month',
      features: ['Self-healing apps', 'Predictive maintenance', 'Automated scaling', 'Security scanning'],
      popular: true,
      category: 'DevOps',
      icon: '⚡'
    }
  ];

  const stats = [
    { number: '500+', label: 'Micro SAAS Services' },
    { number: '50+', label: 'AI Solutions' },
    { number: '25+', label: 'Quantum Technologies' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Accelerate Innovation',
      description: 'Cut development time by 70% with our pre-built solutions and AI-powered automation.'
    },
    {
      icon: '💰',
      title: 'Reduce Costs',
      description: 'Lower operational costs by 40% through intelligent automation and optimization.'
    },
    {
      icon: '🛡️',
      title: 'Future-Proof Security',
      description: 'Stay ahead of threats with quantum-resistant encryption and AI-powered security.'
    },
    {
      icon: '📈',
      title: 'Scale Effortlessly',
      description: 'Grow your business without infrastructure headaches using our scalable platforms.'
    }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              Pioneering the future of technology with innovative AI services, quantum computing solutions, and cutting-edge emerging technologies that drive business transformation
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <a 
                href="/contact" 
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">📞</span>
                <a href="tel:+1 302 464 0950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">📍</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and popular solutions designed to transform your business operations
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <UltraFuturisticServiceCard2026
                  key={service.id}
                  service={service}
                  variant={service.category.toLowerCase().includes('ai') ? 'ai' : 
                          service.category.toLowerCase().includes('quantum') ? 'quantum' : 'automation'}
                />
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <a 
                href="/services" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions to gain competitive advantages and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
                >
                  Schedule a Demo
                </a>
                <a 
                  href="tel:+1 302 464 0950" 
                  className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;