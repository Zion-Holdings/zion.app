import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Shield, TrendingUp, Globe
} from 'lucide-react';
import Link from 'next/link';

const Homepage2025: React.FC = () => {
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
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
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
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
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
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">150+</div>
                <div className="text-gray-300">AI Services</div>
                <div className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">200+</div>
                <div className="text-gray-300">Quantum Solutions</div>
                <div className="text-xs text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300">Autonomous Operations</div>
                <div className="text-xs text-purple-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300">Future Possibilities</div>
                <div className="text-xs text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
              Discover cutting-edge AI, quantum computing, and autonomous solutions that transform businesses and industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-consciousness',
                  name: 'AI Consciousness Evolution',
                  tagline: 'Advanced AI consciousness development',
                  description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities',
                  price: '$8,999',
                  period: '/month',
                  features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols'],
                  popular: true,
                  category: 'AI & Consciousness',
                  icon: '🧠'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-cybersecurity',
                  name: 'Quantum Cybersecurity',
                  tagline: 'Quantum-resistant security platform',
                  description: 'Advanced cybersecurity with quantum-resistant encryption and AI threat detection',
                  price: '$2,499',
                  period: '/month',
                  features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust'],
                  popular: true,
                  category: 'Quantum & Security',
                  icon: '🛡️'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'autonomous-content',
                  name: 'AI Content Factory',
                  tagline: 'Fully automated content creation',
                  description: 'End-to-end autonomous content creation, optimization, and distribution platform',
                  price: '$1,299',
                  period: '/month',
                  features: ['Content Automation', 'AI Writing', 'Multi-platform Publishing'],
                  popular: true,
                  category: 'AI & Content',
                  icon: '🏭'
                }}
                variant="automation"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-supply-chain',
                  name: 'Quantum Supply Chain',
                  tagline: 'Next-gen logistics optimization',
                  description: 'Quantum-powered supply chain optimization with real-time AI decision making',
                  price: '$3,999',
                  period: '/month',
                  features: ['Quantum Optimization', 'Real-time Analytics', 'AI Decision Engine'],
                  popular: false,
                  category: 'Quantum & Logistics',
                  icon: '🚚'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-autonomous-customer-success',
                  name: 'AI Autonomous Customer Success',
                  tagline: 'Fully automated customer success platform',
                  description: 'Revolutionary platform that autonomously manages customer success and prevents churn',
                  price: '$1,299',
                  period: '/month',
                  features: ['AI Health Scoring', 'Churn Prevention', 'Automated Onboarding'],
                  popular: true,
                  category: 'AI & Customer Success',
                  icon: '🤖💼'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-financial-risk',
                  name: 'Quantum Financial Risk Manager',
                  tagline: 'Quantum-powered risk assessment',
                  description: 'Advanced financial risk management with quantum computing algorithms',
                  price: '$4,999',
                  period: '/month',
                  features: ['Quantum Simulations', 'Real-time Risk Assessment', 'AI Predictions'],
                  popular: true,
                  category: 'Quantum & Finance',
                  icon: '⚛️💰'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-autonomous-devops',
                  name: 'AI Autonomous DevOps',
                  tagline: 'Self-healing infrastructure platform',
                  description: 'Revolutionary DevOps platform with autonomous issue detection and resolution',
                  price: '$2,499',
                  period: '/month',
                  features: ['Autonomous Monitoring', 'Self-healing Systems', 'Zero-downtime Deployments'],
                  popular: true,
                  category: 'AI & DevOps',
                  icon: '🤖⚙️'
                }}
                variant="automation"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-edge-computing',
                  name: 'Quantum Edge Computing',
                  tagline: 'Quantum-enhanced edge processing',
                  description: 'Next-generation edge computing with quantum capabilities for ultra-fast processing',
                  price: '$3,999',
                  period: '/month',
                  features: ['Quantum Processing', 'Real-time AI', 'Edge Security'],
                  popular: false,
                  category: 'Quantum & Edge',
                  icon: '⚛️🌐'
                }}
                variant="quantum"
              />
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/40 to-purple-900/20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business strategies to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-cyan-400 text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Innovation First</h3>
                <p className="text-gray-300">We stay ahead of the curve with the latest technologies and methodologies</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="text-purple-400 text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Results Driven</h3>
                <p className="text-gray-300">Every solution is designed to deliver measurable business outcomes</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="text-blue-400 text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Partnership Focus</h3>
                <p className="text-gray-300">We work closely with clients to ensure long-term success and growth</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Contact Us Today
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Explore Services
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