import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Palette, Factory, Database
} from 'lucide-react';
import { innovative2025MicroSaasBatch } from '../data/innovative-2025-micro-saas-batch';

const Homepage2025: React.FC = () => {
  const featuredServices = innovative2025MicroSaasBatch.filter(service => service.popular).slice(0, 3);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-1500"></div>
          </div>
          
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
              >
                <Star className="w-5 h-5" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/get-started">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/comprehensive-2025-innovative-services-showcase">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2025 Innovative Services
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2025 Services Showcase
                  </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-cyan-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">50+</div>
                <div className="text-gray-300">AI Services</div>
                <div className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-blue-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">100+</div>
                <div className="text-gray-300">Quantum Solutions</div>
                <div className="text-xs text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-purple-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300">Autonomous Operations</div>
                <div className="text-xs text-purple-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-green-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300">Future Possibilities</div>
                <div className="text-xs text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative technology solutions designed to transform your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <UltraFuturisticServiceCard2026
                  key={service.id}
                  service={service}
                  variant={service.category.includes('AI') ? 'ai' : 
                          service.category.includes('Quantum') ? 'quantum' : 
                          service.category.includes('Space') ? 'space' : 
                          service.category.includes('Cybersecurity') ? 'cybersecurity' : 'default'}
                />
              ))}
            </div>
            
            {/* View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/comprehensive-2025-innovative-services-showcase">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  <span className="flex items-center gap-2">
                    View All Innovative Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of services across cutting-edge technology domains
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'AI & Marketing', icon: Brain, color: 'from-purple-500 to-pink-500', count: innovative2025MicroSaasBatch.filter(s => s.category === 'AI & Marketing').length },
                { name: 'Quantum & Finance', icon: Atom, color: 'from-cyan-500 to-blue-500', count: innovative2025MicroSaasBatch.filter(s => s.category === 'Quantum & Finance').length },
                { name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500', count: innovative2025MicroSaasBatch.filter(s => s.category === 'Space Technology').length },
                { name: 'Metaverse & AI', icon: Globe, color: 'from-green-500 to-teal-500', count: innovative2025MicroSaasBatch.filter(s => s.category === 'Metaverse & AI').length },
                { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: innovative2025MicroSaasBatch.filter(s => s.category === 'Cybersecurity').length },
                { name: 'Supply Chain & AI', icon: Factory, color: 'from-yellow-500 to-orange-500', count: innovative2025MicroSaasBatch.filter(s => s.category === 'Supply Chain & AI').length }
              ].map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center border border-white/20`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                        <div className="text-gray-300 text-sm">
                          {category.count} Services
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get in touch with our team to discuss how our innovative services can drive your success
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Call Now: +1 302 464 0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Email Us
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;