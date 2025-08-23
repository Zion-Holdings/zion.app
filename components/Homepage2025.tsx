import React, { Suspense, useState, useEffect } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin
} from 'lucide-react';

// Lazy load heavy components
const LazyServiceCard = React.lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

// Loading fallback component
const ServiceCardSkeleton = () => (
  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 animate-pulse">
    <div className="w-16 h-16 bg-gray-700 rounded-2xl mb-4"></div>
    <div className="h-6 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
  </div>
);

// Performance optimized background component
const OptimizedBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate background loading
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-pulse"></div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-4 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
      <div className="absolute top-40 right-8 sm:right-32 w-20 sm:w-24 h-20 sm:h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-8 sm:left-32 w-32 sm:w-40 h-32 sm:h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
    </div>
  );
};

const Homepage2025: React.FC = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Elements */}
          <OptimizedBackground />
          
          <div className="text-center max-w-4xl mx-auto relative z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs sm:text-sm font-medium"
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
                <Link href="/get-started" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black">
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black">
                    Learn More
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black">
                    2025 Services Showcase
                  </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center"
            >
              <motion.div 
                className="p-4 sm:p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">50+</div>
                <div className="text-sm sm:text-base text-gray-300">AI Services</div>
                <div className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className="p-4 sm:p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">100+</div>
                <div className="text-sm sm:text-base text-gray-300">Quantum Solutions</div>
                <div className="text-xs text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Next-gen computing</div>
              </motion.div>
              <motion.div 
                className="p-4 sm:p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-sm sm:text-base text-gray-300">Autonomous Operations</div>
                <div className="text-xs text-purple-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Always available</div>
              </motion.div>
              <motion.div 
                className="p-4 sm:p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-sm sm:text-base text-gray-300">Future Possibilities</div>
                <div className="text-xs text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
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
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
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
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
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
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
                  service={{
                    id: 'ai-holographic-meetings',
                    name: 'AI Holographic Meetings',
                    tagline: 'Next-generation holographic collaboration',
                    description: 'Revolutionary platform for lifelike holographic meetings with AI assistance',
                    price: '$299',
                    period: 'month',
                    features: ['3D Holographic Projections', 'AI Translation', 'Gesture Control', 'Immersive Collaboration'],
                    popular: true,
                    category: 'AI & Holographic',
                    icon: '🌟'
                  }}
                  variant="ai"
                />
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
                  service={{
                    id: 'quantum-drug-discovery',
                    name: 'Quantum Drug Discovery',
                    tagline: 'Accelerate pharmaceutical research',
                    description: 'Quantum-powered AI platform for accelerated drug discovery and molecular modeling',
                    price: '$1999',
                    period: 'month',
                    features: ['Quantum Molecular Modeling', 'AI Drug Screening', 'Predictive Analytics', 'Clinical Optimization'],
                    popular: false,
                    category: 'Quantum Healthcare',
                    icon: '💊'
                  }}
                  variant="quantum"
                />
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
                  service={{
                    id: 'autonomous-legal-ai',
                    name: 'Autonomous Legal AI',
                    tagline: 'AI-powered legal assistance',
                    description: 'Intelligent legal assistant for research, analysis, and case preparation',
                    price: '$199',
                    period: 'month',
                    features: ['Autonomous Research', 'Document Analysis', 'Case Law Synthesis', 'Risk Assessment'],
                    popular: true,
                    category: 'AI Legal Tech',
                    icon: '⚖️'
                  }}
                  variant="automation"
                />
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
                  service={{
                    id: 'quantum-cybersecurity-suite',
                    name: 'Quantum Cybersecurity Suite',
                    tagline: 'Future-proof security with quantum-resistant encryption',
                    description: 'Next-generation cybersecurity platform with quantum-resistant algorithms and AI threat detection',
                    price: '$899',
                    period: 'month',
                    features: ['Quantum-Resistant Encryption', 'AI Threat Detection', 'Real-time Monitoring', 'Zero-Trust Security'],
                    popular: true,
                    category: 'Quantum Security',
                    icon: '🔒⚛️🛡️'
                  }}
                  variant="quantum"
                />
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
                  service={{
                    id: 'autonomous-content-creation',
                    name: 'Autonomous Content Creation',
                    tagline: 'Self-generating content with AI creativity',
                    description: 'Intelligent content creation platform that autonomously generates high-quality, brand-consistent content',
                    price: '$599',
                    period: 'month',
                    features: ['AI Content Generation', 'Brand Voice Consistency', 'Multi-format Support', 'SEO Optimization'],
                    popular: true,
                    category: 'AI Content',
                    icon: '✍️🤖🎨'
                  }}
                  variant="ai"
                />
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <LazyServiceCard
                  service={{
                    id: 'edge-ai-computing',
                    name: 'Edge AI Computing Platform',
                    tagline: 'Intelligent computing at the edge',
                    description: 'Advanced edge computing platform with real-time AI processing and optimization',
                    price: '$899',
                    period: 'month',
                    features: ['Edge AI Deployment', 'Real-time Processing', 'IoT Integration', 'Privacy-Preserving Computing'],
                    popular: false,
                    category: 'Edge Computing',
                    icon: '🌐🤖💻'
                  }}
                  variant="ai"
                />
              </Suspense>
            </div>
            
            <div className="text-center mt-12 sm:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="/services">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black">
                    <span className="flex items-center gap-2">
                      View All Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-black/20 relative">
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
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
                <p className="text-gray-300">Leading-edge artificial intelligence solutions that adapt and evolve</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Quantum Innovation</h3>
                <p className="text-gray-300">Next-generation quantum computing and security solutions</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade security and compliance solutions</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-300">Fast implementation and continuous optimization</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2038 Services Preview */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/10 to-pink-900/10 relative">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                2038 Cutting-Edge Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our revolutionary 2038 services that push the boundaries of what's possible
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-white mb-2">AI Holographic Meetings</h3>
                <p className="text-gray-300 text-sm mb-4">Revolutionary holographic collaboration with AI assistance</p>
                <div className="text-2xl font-bold text-purple-400 mb-2">$299/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Drug Discovery</h3>
                <p className="text-gray-300 text-sm mb-4">Quantum-powered AI for accelerated pharmaceutical research</p>
                <div className="text-2xl font-bold text-blue-400 mb-2">$1999/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-2xl p-6 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-white mb-2">Autonomous Legal AI</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered legal research and document analysis</p>
                <div className="text-2xl font-bold text-green-400 mb-2">$199/month</div>
                <Link href="/innovative-2038-cutting-edge-showcase">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Link href="/innovative-2038-cutting-edge-showcase">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center gap-2 mx-auto">
                  Explore All 2038 Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black">
                    Learn More About Us
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