import React from 'react';
import { motion } from 'framer-motion';
import { FuturisticServicesShowcase } from '../components/FuturisticServicesShowcase';

const AdvancedServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Advanced Micro SAAS
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and next-generation technologies that transform businesses and drive innovation.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                {
                  icon: "🚀",
                  title: "Future-Ready Technology",
                  description: "Built with quantum-safe encryption, AI-powered automation, and edge computing capabilities"
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast Performance",
                  description: "Optimized for speed with real-time processing and sub-millisecond response times"
                },
                {
                  icon: "🔒",
                  title: "Enterprise Security",
                  description: "SOC 2, ISO 27001, and GDPR compliant with advanced threat protection"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/30 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Explore Services
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <FuturisticServicesShowcase />

      {/* Technology Stack Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions leverage the latest advancements in artificial intelligence, quantum computing, and cloud-native architectures.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "AI/ML", icon: "🤖", color: "from-cyan-400 to-blue-500" },
              { name: "Quantum", icon: "⚛️", color: "from-purple-400 to-pink-500" },
              { name: "Edge", icon: "🌐", color: "from-green-400 to-teal-500" },
              { name: "Blockchain", icon: "⛓️", color: "from-orange-400 to-red-500" },
              { name: "Cloud", icon: "☁️", color: "from-blue-400 to-indigo-500" },
              { name: "Security", icon: "🔒", color: "from-red-400 to-pink-500" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  {tech.icon}
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Proven Results",
                description: "Over 500+ successful implementations with measurable ROI improvements",
                stats: "95% client satisfaction rate"
              },
              {
                icon: "⚡",
                title: "Rapid Deployment",
                description: "Get up and running in weeks, not months with our agile approach",
                stats: "3x faster than traditional solutions"
              },
              {
                icon: "🔧",
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance services",
                stats: "99.9% uptime guarantee"
              },
              {
                icon: "🚀",
                title: "Future-Proof",
                description: "Built with scalability and emerging technologies in mind",
                stats: "100% cloud-native architecture"
              },
              {
                icon: "💡",
                title: "Innovation First",
                description: "Constantly evolving solutions with the latest tech breakthroughs",
                stats: "Monthly feature updates"
              },
              {
                icon: "🤝",
                title: "Partnership Approach",
                description: "We work as an extension of your team, not just a vendor",
                stats: "Long-term strategic partnerships"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/40 backdrop-blur-sm"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our advanced micro SAAS solutions can revolutionize your operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-gray-300">
                  <span className="text-cyan-400">📞</span> +1 302 464 0950
                </div>
                <div className="text-gray-300">
                  <span className="text-blue-400">✉️</span> kleber@ziontechgroup.com
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">🌐</span> ziontechgroup.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedServices;