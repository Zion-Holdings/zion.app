import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036ITServices } from '../data/real-2036-it-services';
import { real2036AIServices } from '../data/real-2036-ai-services';

const Homepage2025: React.FC = () => {
  const featuredServices = [
    ...real2036InnovativeServices.slice(0, 3),
    ...real2036ITServices.slice(0, 2),
    ...real2036AIServices.slice(0, 1)
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Pioneering the future of technology with innovative solutions that drive business transformation. 
              From AI consciousness to quantum computing, we're building tomorrow's solutions today.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a
                href="/2036-innovative-services-showcase"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                Explore 2036 Services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </motion.div>

            {/* Market Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">$450B+</div>
                <div className="text-sm text-gray-300">Market Opportunity</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25%+</div>
                <div className="text-sm text-gray-300">Annual Growth</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-sm text-gray-300">Enterprise Clients</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Featured Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: service.price,
                      period: service.period || '/month',
                      features: service.features.slice(0, 4),
                      popular: index === 0,
                      category: service.category,
                      icon: '🚀'
                    }}
                    variant={index % 3 === 0 ? 'ai' : index % 3 === 1 ? 'quantum' : 'automation'}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/2036-innovative-services-showcase"
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                View All Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🧠',
                  title: 'AI Innovation',
                  description: 'Cutting-edge AI solutions including consciousness evolution and emotional intelligence'
                },
                {
                  icon: '⚛️',
                  title: 'Quantum Computing',
                  description: 'Next-generation quantum solutions for complex problem-solving'
                },
                {
                  icon: '🔒',
                  title: 'Enterprise Security',
                  description: 'Zero-trust security with AI-powered threat detection'
                },
                {
                  icon: '🚀',
                  title: 'Future-Ready',
                  description: 'Built for 2036 and beyond with scalable, sustainable solutions'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of enterprises already leveraging our innovative solutions. 
              Get in touch to discuss how we can help you stay ahead of the curve.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                Contact Us
              </a>
              <a
                href="/quote"
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;