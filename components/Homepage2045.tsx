import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, Cpu, Database, 
  Star, TrendingUp, Globe, ArrowRight, Play, Loader2, Zap, Sparkles
} from 'lucide-react';

// Import services data
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

// Import components
import Layout from './layout/Layout';
import TestimonialSection from './TestimonialSection';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mx-auto mb-4" />
      <span className="text-cyan-400">Loading...</span>
    </div>
  </div>
);

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 8000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type?.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category?.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category?.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2045AdvancedITServices.length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-hybrid-computing-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", href: "/autonomous-ai-business-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-platform-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2045", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "3000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.slug || '/services';
  }, []);

  if (!isVisible) {
    return <LoadingSpinner />;
  }

  return (
    <Layout>
      <main className="relative">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with neon effects */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_rgba(6,182,212,0.5)]" aria-hidden="true"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_100px_rgba(168,85,247,0.5)]" aria-hidden="true"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_100px_rgba(16,185,129,0.5)]" aria-hidden="true"></div>
            
            {/* Animated particles with neon trails */}
            <div className="absolute inset-0" aria-hidden="true">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/40 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                  animate={{
                    x: [0, 150, 0],
                    y: [0, -150, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 8 + i * 0.3,
                    repeat: Infinity as never,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 
                id="hero-heading"
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <br />
                <span className="text-white">
                  2045
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of AI consciousness, quantum computing, and autonomous business intelligence. 
                Experience technology that thinks, feels, and evolves with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  onClick={handleGetStarted}
                  aria-label="Get started with Zion Tech Group services"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  onClick={handleWatchDemo}
                  aria-label="Schedule a demo of our services"
                >
                  Schedule Demo
                  <Play className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </motion.div>

            {/* Featured Services Carousel */}
            {featuredServices.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Featured Revolutionary Services</h2>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {featuredServices[currentServiceIndex]?.name || 'Revolutionary Service'}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {featuredServices[currentServiceIndex]?.description || 'Experience the future of technology'}
                    </p>
                    <button
                      onClick={() => handleServiceClick(featuredServices[currentServiceIndex])}
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 relative" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="features-heading" className="text-5xl font-bold text-white mb-6">
                Revolutionary 2045 Technology
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the cutting-edge technologies that are reshaping the future of business, 
                AI consciousness, and quantum computing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <a
                      href={feature.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group-hover:translate-x-2"
                      aria-label={`Learn more about ${feature.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 relative" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Lazy Loaded */}
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialSection />
        </Suspense>

        {/* CTA Section */}
        <section className="py-24 px-4 relative" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-5xl font-bold text-white mb-8">
                Ready to Experience the Future?
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
                Join thousands of businesses already transforming their operations with our revolutionary 2045 technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-xl"
                  onClick={handleGetStarted}
                  aria-label="Get started with Zion Tech Group services"
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-3 inline" />
                </button>
                
                <button 
                  className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-xl"
                  onClick={handleWatchDemo}
                  aria-label="Schedule a demo of our services"
                >
                  Schedule Demo
                  <Play className="w-6 h-6 ml-3 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;