import React from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, TrendingUp, Globe, MapPin,
  Rocket, Award, CheckCircle,
  BarChart3, Cpu, Phone, Mail
} from 'lucide-react';

const Homepage2025: React.FC = () => {
  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-lg animate-pulse delay-1500"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Enhanced Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
                role="status"
                aria-label="Company recognition badge"
              >
                <Star className="w-5 h-5" aria-hidden="true" />
                <span>Innovation Leader 2025</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
              
              <h1 
                id="hero-heading"
                className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with <span className="text-cyan-400 font-semibold">innovative solutions</span> that drive business transformation and unlock unlimited potential
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link href="/contact" aria-label="Get started with Zion Tech Group services">
                  <button 
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg"
                    aria-describedby="get-started-description"
                  >
                    <span className="flex items-center gap-3">
                      Get Started Today
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </button>
                  <div id="get-started-description" className="sr-only">
                    Begin your journey with Zion Tech Group's innovative technology solutions
                  </div>
                </Link>
                <Link href="/services" aria-label="Learn more about our services">
                  <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg">
                    Explore Services
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase" aria-label="View our 2025 services showcase">
                  <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50 text-lg">
                    2025 Showcase
                  </button>
                </Link>
              </div>
              
              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-base text-gray-400"
                role="list"
                aria-label="Company trust indicators"
              >
                <div className="flex items-center space-x-3" role="listitem">
                  <Shield className="w-5 h-5 text-green-400" aria-hidden="true" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-3" role="listitem">
                  <Globe className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-3" role="listitem">
                  <TrendingUp className="w-5 h-5 text-purple-400" aria-hidden="true" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-3" role="listitem">
                  <Award className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <span>Industry Leader</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Company Stats */}
        <section 
          className="py-24 px-4 bg-black/30 relative"
          aria-labelledby="stats-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Delivering measurable results across industries with cutting-edge technology solutions that transform businesses
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              role="list"
              aria-label="Company statistics and achievements"
            >
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40"
                whileHover={{ scale: 1.05 }}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">100+</div>
                <div className="text-gray-300 text-lg">AI Services</div>
                <div className="text-sm text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
                whileHover={{ scale: 1.05 }}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">200+</div>
                <div className="text-gray-300 text-lg">Quantum Solutions</div>
                <div className="text-sm text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                whileHover={{ scale: 1.05 }}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300 text-lg">Autonomous Operations</div>
                <div className="text-sm text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300 border border-green-500/20 hover:border-green-500/40"
                whileHover={{ scale: 1.05 }}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300 text-lg">Future Possibilities</div>
                <div className="text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section 
          className="py-24 px-4"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of innovative services designed to transform your business and drive unprecedented growth
              </p>
            </motion.div>

            {/* Service Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI & Consciousness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI & Consciousness</h3>
                    <p className="text-purple-400">Revolutionary AI platforms</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced AI consciousness development, emotional intelligence training, and autonomous decision-making systems.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Consciousness Evolution</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Emotional Intelligence Training</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Autonomous Business Intelligence</span>
                  </div>
                </div>
                <Link href="/services#ai-consciousness" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span>Explore AI Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Quantum & Emerging Tech */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Atom className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quantum & Emerging Tech</h3>
                    <p className="text-blue-400">Breakthrough technologies</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Quantum computing solutions, space technology platforms, and next-generation emerging technologies.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quantum Neural Networks</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Space Resource Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Brain-Computer Interface</span>
                  </div>
                </div>
                <Link href="/services#quantum" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span>Explore Quantum Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Enterprise IT Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Enterprise IT Solutions</h3>
                    <p className="text-green-400">Advanced infrastructure</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Comprehensive enterprise IT solutions including cloud infrastructure, cybersecurity, and automation platforms.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quantum-Secure Cloud</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Autonomous IT Operations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Zero Trust Security</span>
                  </div>
                </div>
                <Link href="/services#enterprise-it" className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                  <span>Explore IT Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Micro SAAS Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Micro SAAS Solutions</h3>
                    <p className="text-orange-400">Innovative business tools</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Specialized micro SAAS solutions designed to solve specific business challenges and drive growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Content Automation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Smart CRM Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>SEO Automation Suite</span>
                  </div>
                </div>
                <Link href="/services#micro-saas" className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>Explore SAAS Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Cybersecurity & Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-2xl hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cybersecurity & Compliance</h3>
                    <p className="text-red-400">Advanced protection</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Next-generation cybersecurity solutions with AI-powered threat detection and automated compliance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Threat Detection</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Zero Trust Security</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>SOC 2 Compliance</span>
                  </div>
                </div>
                <Link href="/services#cybersecurity" className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors">
                  <span>Explore Security Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Data & Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Data & Analytics</h3>
                    <p className="text-indigo-400">Intelligent insights</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  AI-powered data analytics platforms that transform raw data into actionable business intelligence.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Data Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Business Intelligence</span>
                  </div>
                </div>
                <Link href="/services#data-analytics" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  <span>Explore Analytics Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already leveraging our revolutionary technology solutions to achieve unprecedented growth and success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                      Get Started Today
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                      View All Services
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section 
          className="py-24 px-4 bg-gradient-to-r from-black/50 to-gray-900/50 relative"
          aria-labelledby="contact-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build the Future Together
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to revolutionize your business with cutting-edge technology? Our team of experts is here to help you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak directly with our technology experts</p>
                <a href="tel:+1 302 464 0950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold transition-colors">
                  +1 302 464 0950
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information and quotes</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
                <p className="text-gray-300 mb-4">Meet our team in person</p>
                <p className="text-green-400 text-lg font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Schedule a Free Consultation
                </h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how our innovative solutions can transform your business and drive unprecedented growth.
                </p>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;