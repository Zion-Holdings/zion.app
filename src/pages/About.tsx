import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-zion-blue-light/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-zion-cyan mb-6">Our Mission</h2>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              At Zion Tech Group, we are committed to revolutionizing the technology landscape by developing 
              cutting-edge AI solutions, quantum computing applications, and autonomous systems that transform 
              businesses and empower humanity. Our mission is to bridge the gap between current technology 
              limitations and future possibilities, creating a world where artificial intelligence enhances 
              human potential rather than replacing it.
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-zion-purple mb-6">Our Vision</h2>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              We envision a future where technology seamlessly integrates with human consciousness, 
              creating a symbiotic relationship that accelerates innovation and solves humanity's 
              greatest challenges. From sustainable energy solutions to advanced healthcare systems, 
              our vision encompasses a world transformed by intelligent, ethical, and accessible technology.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-zion-cyan mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries and exploring uncharted technological territories",
                icon: "🚀"
              },
              {
                title: "Ethics",
                description: "Ensuring responsible AI development and ethical technology deployment",
                icon: "⚖️"
              },
              {
                title: "Excellence",
                description: "Delivering world-class solutions with uncompromising quality",
                icon: "⭐"
              },
              {
                title: "Collaboration",
                description: "Working together with clients and partners to achieve shared success",
                icon: "🤝"
              },
              {
                title: "Sustainability",
                description: "Creating technology solutions that benefit future generations",
                icon: "🌱"
              },
              {
                title: "Accessibility",
                description: "Making advanced technology available to businesses of all sizes",
                icon: "🌍"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-quantum"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue-light/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-zion-cyan mb-6">Get in Touch</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss how 
              Zion Tech Group can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="px-8 py-4 bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 rounded-lg text-lg font-semibold hover:bg-zion-blue-light/30 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}