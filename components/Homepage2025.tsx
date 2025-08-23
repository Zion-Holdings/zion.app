import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion, AnimatePresence } from 'framer-motion';

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-300">Loading Zion Tech Group...</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative"
          data-section="0"
          aria-labelledby="hero-heading"
        >
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Pioneering the future of technology with innovative solutions that drive business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Learn more about Zion Tech Group"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section 
          className="py-20 px-4"
          data-section="1"
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover cutting-edge solutions that transform your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: 'ai-ml',
                      name: 'AI & Machine Learning',
                      tagline: 'Advanced artificial intelligence solutions',
                      description: 'Advanced artificial intelligence solutions for modern businesses',
                      price: '$999',
                      period: 'month',
                      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
                      popular: true,
                      category: 'AI',
                      icon: '🧠'
                    }}
                    variant="ai"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: 'quantum-computing',
                      name: 'Quantum Computing',
                      tagline: 'Next-generation computing solutions',
                      description: 'Next-generation computing solutions for complex problems',
                      price: '$1999',
                      period: 'month',
                      features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation'],
                      popular: false,
                      category: 'Quantum',
                      icon: '⚛️'
                    }}
                    variant="quantum"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: 'process-automation',
                      name: 'Process Automation',
                      tagline: 'Intelligent automation solutions',
                      description: 'Intelligent automation to streamline your operations',
                      price: '$799',
                      period: 'month',
                      features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics'],
                      popular: true,
                      category: 'Automation',
                      icon: '⚡'
                    }}
                    variant="automation"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* View all services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a 
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                aria-label="View all Zion Tech Group services"
              >
                View All Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          className="py-16 bg-gradient-to-r from-gray-900 to-black"
          data-section="2"
          aria-labelledby="stats-heading"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 
                id="stats-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-300">
                Proven results and industry leadership
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '98+', label: 'Services', icon: '🚀' },
                { number: '500+', label: 'Clients', icon: '👥' },
                { number: '99.9%', label: 'Success Rate', icon: '✅' },
                { number: '300%', label: 'Avg ROI', icon: '📈' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;