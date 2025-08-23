import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  ArrowUpRight, Sparkles, Globe2, Layers, Code, Server, Cloud, Lock, Shield as ShieldIcon2
} from 'lucide-react';

// Lazy load components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const StatsSection = lazy(() => import('./StatsSection'));
const FeatureGrid = lazy(() => import('./FeatureGrid'));

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
    
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
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2045AdvancedITServices.length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-hybrid-computing-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2045", color: "from-indigo-500 to-purple-500" },
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
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  // Loading skeleton
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] opacity-20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity as any,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary Technology 2045
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight">
              The Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Technology
              </span>
              Starts Here
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Experience the next generation of AI consciousness, quantum computing, and autonomous business intelligence. 
              Zion Tech Group leads the revolution in futuristic technology solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={handleGetStarted}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Get Started Today
              <ArrowUpRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={handleWatchDemo}
              className="group px-8 py-4 border-2 border-purple-500/30 rounded-full text-purple-300 font-semibold text-lg hover:border-purple-400 hover:text-purple-200 transition-all duration-300 hover:bg-purple-500/10"
            >
              <Play className="inline-block mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
          >
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center">
              <Globe2 className="w-5 h-5 mr-2 text-blue-400" />
              <span>Global Infrastructure</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              <span>Industry Leader</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity as any }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity as any }}
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <StatsSection stats={stats} />
      </Suspense>

      {/* Features Section */}
      <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <FeatureGrid features={features} />
      </Suspense>

      {/* Services Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge technology solutions that are shaping the future of business and innovation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-purple-500/50'
                }`}
              >
                <category.icon className="inline-block w-4 h-4 mr-2" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredServices().slice(0, 9).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
                  <ServiceCard
                    service={service}
                    onClick={() => handleServiceClick(service)}
                    isHovered={hoveredService === service.slug}
                    onHover={() => setHoveredService(service.slug)}
                    onLeave={() => setHoveredService(null)}
                  />
                </Suspense>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => window.location.href = '/services'}
              className="group px-8 py-4 border-2 border-purple-500/30 rounded-full text-purple-300 font-semibold text-lg hover:border-purple-400 hover:text-purple-200 transition-all duration-300 hover:bg-purple-500/10"
            >
              View All Services
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging our revolutionary technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 border-2 border-purple-500/30 rounded-full text-purple-300 font-semibold text-lg hover:border-purple-400 hover:text-purple-200 transition-all duration-300 hover:bg-purple-500/10"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage2045;