
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Pioneering the future of technology with revolutionary AI consciousness, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-neon transition-all duration-300"
            >
              Get Started
            </motion.button>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 rounded-lg text-lg font-semibold hover:bg-zion-blue-light/30 transition-all duration-300"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Featured Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-zion-cyan mb-8 text-center">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Strategy & Consulting",
                description: "Transform your business with intelligent automation and data-driven decision making",
                icon: "🤖",
                color: "from-zion-cyan to-zion-blue-light"
              },
              {
                title: "Quantum Computing Solutions",
                description: "Leverage the power of quantum computing for complex problem solving",
                icon: "⚛️",
                color: "from-zion-purple to-zion-cyan"
              },
              {
                title: "Cybersecurity & Zero Trust",
                description: "Protect your digital assets with advanced security frameworks",
                icon: "🔒",
                color: "from-zion-cyan to-zion-purple"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-quantum"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3 group-hover:text-neon-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <Link to="/services">
                  <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-zion-blue-light/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-zion-cyan mb-8 text-center">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Innovation", description: "Cutting-edge technology solutions", icon: "🚀" },
                { title: "Expertise", description: "Industry-leading professionals", icon: "⭐" },
                { title: "Results", description: "Proven track record of success", icon: "📈" },
                { title: "Support", description: "24/7 dedicated assistance", icon: "🛟" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-zion-purple mb-2">{item.title}</h3>
                  <p className="text-zion-slate-light text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-zion-purple mb-6">Ready to Transform Your Business?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Our expert team is ready to help you 
              implement cutting-edge solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-neon transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 rounded-lg text-lg font-semibold hover:bg-zion-blue-light/30 transition-all duration-300"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
