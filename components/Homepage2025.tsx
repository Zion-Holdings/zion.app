import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036ITServices } from '../data/real-2036-it-services';
import { real2036AIServices } from '../data/real-2036-ai-services';

const Homepage2025: React.FC = () => {
  const featuredServices = [
    ...real2036InnovativeServices.filter(s => s.popular).slice(0, 3),
    ...real2036ITServices.filter(s => s.popular).slice(0, 2),
    ...real2036AIServices.filter(s => s.popular).slice(0, 1)
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering the future of technology with revolutionary AI, Quantum Computing, Space Technology, and cutting-edge IT solutions that drive business transformation
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25">
                Get Started Today
              </button>
              <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Mobile: +1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>Email: kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Services Portfolio
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future with our comprehensive portfolio of {real2036InnovativeServices.length + real2036ITServices.length + real2036AIServices.length}+ innovative services spanning AI, Quantum Computing, Space Technology, and cutting-edge IT solutions
              </p>
            </motion.div>

            {/* Featured Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <UltraFuturisticServiceCard2026
                    service={{
                      id: service.id,
                      name: service.name,
                      tagline: service.tagline,
                      description: service.description,
                      price: service.price,
                      period: service.period,
                      features: service.features,
                      popular: service.popular,
                      category: service.category,
                      icon: service.icon
                    }}
                    variant="ai"
                  />
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <a 
                href="/comprehensive-services-showcase-2036"
                className="inline-block px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-xl rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                View Complete Portfolio
              </a>
            </motion.div>
          </div>
        </section>

        {/* Technology Domains */}
        <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology Domains
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Our expertise spans the most advanced and innovative technology domains, designed to transform businesses and drive the future forward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'AI & Machine Learning',
                  description: 'Advanced artificial intelligence solutions including autonomous systems, emotional AI, and consciousness evolution',
                  icon: '🧠',
                  color: 'from-cyan-500 to-blue-600',
                  count: real2036AIServices.length
                },
                {
                  title: 'Quantum Technology',
                  description: 'Revolutionary quantum computing, quantum security, and quantum-AI fusion platforms',
                  icon: '⚛️',
                  color: 'from-purple-500 to-pink-600',
                  count: real2036InnovativeServices.filter(s => s.category.includes('Quantum')).length
                },
                {
                  title: 'Space Technology',
                  description: 'Cutting-edge space exploration, mining automation, and interplanetary resource management',
                  icon: '🚀',
                  color: 'from-blue-500 to-cyan-600',
                  count: real2036InnovativeServices.filter(s => s.category.includes('Space')).length
                },
                {
                  title: 'IT Infrastructure',
                  description: 'Next-generation IT solutions including quantum cloud, edge computing, and autonomous operations',
                  icon: '💻',
                  color: 'from-green-500 to-emerald-600',
                  count: real2036ITServices.length
                }
              ].map((domain, index) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {domain.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {domain.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{domain.count} services</span>
                    <span className="text-cyan-400 font-semibold">Explore →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                We're not just another technology company - we're pioneers shaping the future of business and technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'We don\'t follow trends - we create them. Our services are built on cutting-edge research and breakthrough technologies.',
                  icon: '🚀'
                },
                {
                  title: 'Proven Results',
                  description: 'Our solutions have helped businesses achieve 10x improvements in efficiency, cost savings, and competitive advantage.',
                  icon: '📈'
                },
                {
                  title: 'Future-Proof Technology',
                  description: 'Built with quantum computing, AI consciousness, and space technology - ensuring your business stays ahead of the curve.',
                  icon: '🔮'
                },
                {
                  title: 'Expert Team',
                  description: 'World-class engineers, scientists, and business strategists with decades of experience in emerging technologies.',
                  icon: '👥'
                },
                {
                  title: '24/7 Support',
                  description: 'Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently.',
                  icon: '🛡️'
                },
                {
                  title: 'Scalable Solutions',
                  description: 'From startups to enterprises, our solutions scale with your business and grow with your ambitions.',
                  icon: '📊'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Join the future of technology with our revolutionary services. Let's discuss how we can help you achieve your goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25">
                  Contact Us Today
                </button>
                <button className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold text-xl rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;