import React, { Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Rocket, Shield,
  ChevronRight, TrendingUp, Globe, Cpu
} from 'lucide-react';

// Lazy load components for better performance
const UltraFuturisticServiceCard2026 = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

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
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
              >
                <Star className="w-4 h-4" />
                <span>Pioneering Future Technology</span>
              </motion.div>

              <h1 
                id="hero-heading"
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                Zion Tech Group
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock infinite possibilities
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/get-started" aria-label="Get started with Zion Tech Group">
                    <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" aria-label="Explore our services">
                    <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                      Explore Services
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>AI-Powered</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section 
          className="py-20 px-4 bg-gradient-to-b from-black/30 to-black/50 relative"
          aria-labelledby="stats-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our track record speaks for itself with proven results across multiple industries
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  50+
                </div>
                <div className="text-gray-300 font-medium">AI Services</div>
                <div className="text-sm text-gray-500 mt-1">Cutting-edge solutions</div>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  100+
                </div>
                <div className="text-gray-300 font-medium">Quantum Solutions</div>
                <div className="text-sm text-gray-500 mt-1">Future-ready technology</div>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                  24/7
                </div>
                <div className="text-gray-300 font-medium">Autonomous Operations</div>
                <div className="text-sm text-gray-500 mt-1">Always available</div>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  ∞
                </div>
                <div className="text-gray-300 font-medium">Future Possibilities</div>
                <div className="text-sm text-gray-500 mt-1">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section 
          className="py-20 px-4 relative"
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive range of cutting-edge technology solutions designed to transform your business and accelerate your digital transformation journey
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Suspense fallback={
                <div className="h-64 bg-gray-800/50 rounded-xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'ai-ml',
                    name: 'AI & Machine Learning',
                    tagline: 'Advanced artificial intelligence solutions',
                    description: 'Advanced artificial intelligence solutions for modern businesses',
                    icon: '🧠',
                    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
                    price: 'From $2,999/month',
                    period: 'month',
                    category: 'AI & ML'
                  }}
                  variant="ai"
                />
              </Suspense>
              
              <Suspense fallback={
                <div className="h-64 bg-gray-800/50 rounded-xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'quantum',
                    name: 'Quantum Technology',
                    tagline: 'Next-generation quantum computing',
                    description: 'Revolutionary quantum computing solutions for complex problems',
                    icon: '⚛️',
                    features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Optimization'],
                    price: 'From $5,999/month',
                    period: 'month',
                    category: 'Quantum'
                  }}
                  variant="quantum"
                />
              </Suspense>
              
              <Suspense fallback={
                <div className="h-64 bg-gray-800/50 rounded-xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'space-tech',
                    name: 'Space Technology',
                    tagline: 'Innovative space solutions',
                    description: 'Cutting-edge space technology and exploration solutions',
                    icon: '🚀',
                    features: ['Satellite Systems', 'Space Mining', 'Interplanetary Tech'],
                    price: 'From $8,999/month',
                    period: 'month',
                    category: 'Space'
                  }}
                  variant="emerging"
                />
              </Suspense>
            </div>
            
            {/* View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link href="/services" aria-label="View all our services">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto">
                  View All Services
                  <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section 
          className="py-20 px-4 bg-gradient-to-b from-black/50 to-black/30 relative"
          aria-labelledby="innovation-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 
                id="innovation-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
              >
                Innovation at Every Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From autonomous operations to quantum breakthroughs, we're redefining what's possible in technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">
                  <Brain className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous AI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Self-learning systems that continuously improve and adapt to your business needs
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">
                  <Atom className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Harness the power of quantum mechanics for unprecedented computational capabilities
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl backdrop-blur-sm hover:border-green-400/40 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">
                  <Rocket className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Space Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pioneering solutions for space exploration, mining, and interplanetary technology
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;