import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  Lock, Cloud, Network, Truck, FileText, GraduationCap, DollarSign, Satellite, Cpu
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

// Import our new innovative 2025 services
import { innovativeAIAutonomousEcosystemServices2025 } from '../data/2025-innovative-ai-autonomous-ecosystem';
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations';
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';

// Import our new 2026 advanced services
import { advancedInnovativeMicroSaasServices2026 } from '../data/2026-advanced-innovative-micro-saas-services';
import { cuttingEdgeITInfrastructureServices2026 } from '../data/2026-cutting-edge-it-infrastructure-services';
import { emergingTechnologySpaceServices2026 } from '../data/2026-emerging-technology-space-services';

const Homepage2046: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 8);
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
    ...revolutionary2045AdvancedAIServices,
    ...innovativeAIAutonomousEcosystemServices2025,
    ...cuttingEdgeITInfrastructureInnovations2025,
    ...innovativeMicroSaasBreakthroughs2025,
    ...advancedInnovativeMicroSaasServices2026,
    ...cuttingEdgeITInfrastructureServices2026,
    ...emergingTechnologySpaceServices2026
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 8);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('AI') || s.category.includes('Consciousness')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => (s as any).type === 'Micro SAAS' || s.category.includes('Business')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'space', name: 'Space Technology', icon: Satellite, color: 'from-indigo-500 to-purple-500', count: allRevolutionaryServices.filter(s => s.category.includes('Space') || (s as any).type === 'Space Technology').length },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, color: 'from-pink-500 to-rose-500', count: allRevolutionaryServices.filter(s => (s as any).type === 'Emerging Technology').length }
  ];

  const features = [
    { icon: Brain, title: "AI Autonomous Business Orchestrator", description: "Fully autonomous AI system for business operations", href: "/ai-autonomous-business-orchestrator", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Quantum AI Cybersecurity Sentinel", description: "Quantum-powered AI security with consciousness-level detection", href: "/quantum-ai-cybersecurity-sentinel", color: "from-blue-500 to-cyan-500" },
    { icon: Cloud, title: "Quantum Cloud Hybrid Platform", description: "Quantum computing integrated with hybrid cloud", href: "/quantum-cloud-hybrid-platform", color: "from-indigo-500 to-purple-500" },
    { icon: Network, title: "Autonomous Edge Computing Network", description: "Self-managing edge computing with AI optimization", href: "/autonomous-edge-computing-network", color: "from-emerald-500 to-teal-500" },
    { icon: Lock, title: "Zero Trust Quantum Network", description: "Quantum-secured zero trust network infrastructure", href: "/zero-trust-quantum-network", color: "from-red-500 to-orange-500" },
    { icon: FileText, title: "Autonomous Content Creation Suite", description: "AI that creates, edits, and publishes content autonomously", href: "/autonomous-content-creation-suite", color: "from-blue-500 to-indigo-500" }
  ];

  const stats = [
    { number: `${allRevolutionaryServices.length}+`, label: "Innovative Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.link || service.href || `/services/${service.id}`;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity as any,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity as any,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                2046
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our cutting-edge AI, Quantum Computing, 
              and Autonomous Systems that redefine what's possible in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            
            <button
              onClick={handleWatchDemo}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity as any }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity as any }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured
              </span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and revolutionary technology solutions that are shaping the future
            </p>
          </motion.div>

          {/* Featured Service Showcase */}
          <div className="relative mb-16">
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentServiceIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center"
                  >
                    <div className="text-6xl mb-4">{(featuredServices[currentServiceIndex] as any)?.icon || '🚀'}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {featuredServices[currentServiceIndex]?.name}
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      {featuredServices[currentServiceIndex]?.description}
                    </p>
                    <div className="flex justify-center space-x-4 mb-6">
                      {featuredServices[currentServiceIndex]?.features?.slice(0, 3).map((feature: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handleServiceClick(featuredServices[currentServiceIndex])}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentServiceIndex((prev) => (prev - 1 + featuredServices.length) % featuredServices.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentServiceIndex
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive collection of revolutionary technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryChange(category.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-500/10'
                    : 'border-gray-700 hover:border-cyan-500/50 bg-gray-800/20 hover:bg-gray-800/40'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} services available</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience cutting-edge technology that transforms how businesses operate and innovate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => window.location.href = feature.href}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-gray-800/70">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already transforming their operations with our revolutionary technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage2046;