import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  DollarSign, BarChart3, Palette, Cloud, Network, ShoppingCart, Settings, Building, Monitor,
  Layers, Globe2, Lock, Code, Server, Phone, Search, Filter, Grid, List, Eye as EyeIcon,
  ArrowUpRight, Star as StarIcon, Sparkles, Target as TargetIcon
} from 'lucide-react';

// Import our new innovative services
import { innovative2025AIAutonomousEcosystemV2 } from '../data/2025-innovative-ai-autonomous-ecosystem-v2';
import { emergingTechBreakthroughs2025V4 } from '../data/2025-emerging-tech-breakthroughs-v4';
import { innovative2025ITInfrastructureV2 } from '../data/2025-innovative-it-infrastructure-v2';

// Import enhanced components
import UltraFuturisticBackground2047 from './backgrounds/UltraFuturisticBackground2047';
import UltraFuturisticNavigation2047 from './layout/UltraFuturisticNavigation2047';
import UltraFuturisticFooter2047 from './layout/UltraFuturisticFooter2047';

const Homepage2047: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [consciousnessLevel, setConsciousnessLevel] = useState(0.5);
  const [scrollY, setScrollY] = useState(0);
  
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
    
    // Animate consciousness level
    const consciousnessInterval = setInterval(() => {
      setConsciousnessLevel(prev => Math.sin(Date.now() * 0.001) * 0.3 + 0.7);
    }, 100);

    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      clearInterval(consciousnessInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovative2025AIAutonomousEcosystemV2,
    ...emergingTechBreakthroughs2025V4,
    ...innovative2025ITInfrastructureV2
  ];

  // Get featured services for rotation
  const featuredServices = allInnovativeServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allInnovativeServices;
    return allInnovativeServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allInnovativeServices.length },
    { id: 'ai', name: 'AI & Autonomous', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: innovative2025AIAutonomousEcosystemV2.length },
    { id: 'quantum', name: 'Quantum & Emerging', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: emergingTechBreakthroughs2025V4.length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-emerald-500 to-teal-500', count: innovative2025ITInfrastructureV2.length }
  ];

  const features = [
    { icon: Brain, title: "AI Autonomous Ecosystem 2025", description: "Revolutionary autonomous AI solutions", href: "/2025-innovative-services-showcase-v2", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Neural Networks 2025", description: "Quantum-powered AI with consciousness", href: "/quantum-ai-neural-network-fusion-platform-2025", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence 2025", description: "Quantum-resistant security with AI", href: "/quantum-cybersecurity-intelligence-platform-2025", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2025", description: "AI-powered space resource discovery", href: "/space-resource-intelligence-platform-2025", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous DevOps Intelligence 2025", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2025", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Edge Computing Orchestration 2025", description: "Edge computing optimization platform", href: "/edge-computing-orchestration-platform-2025", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: `${allInnovativeServices.length}+`, label: "Innovative Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Intelligence Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Futuristic Background */}
      <UltraFuturisticBackground2047 />
      
      {/* Navigation */}
      <UltraFuturisticNavigation2047 />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Innovating the Future Since 2025</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Revolutionary
                  </span>
                  <br />
                  <span className="text-white">Technology Solutions</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    for 2047 & Beyond
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Discover our cutting-edge micro SAAS services, AI autonomous ecosystems, quantum computing breakthroughs, and next-generation IT infrastructure that are shaping the future of technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/2025-innovative-services-showcase-v2"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Explore Services</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Service */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-cyan-500/20 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-cyan-400 font-medium">Featured Service</div>
                        <div className="text-xs text-gray-400">Auto-rotating</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {featuredServices[currentServiceIndex]?.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredServices[currentServiceIndex]?.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Starting at:</span>
                        <span className="text-cyan-400 font-semibold">
                          {featuredServices[currentServiceIndex]?.pricing.starter}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-blue-400 font-medium">
                          {featuredServices[currentServiceIndex]?.marketSize}
                        </span>
                      </div>
                    </div>
                    
                    <Link
                      href={featuredServices[currentServiceIndex]?.slug || '#'}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-medium text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 block"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive suite of innovative solutions across AI, quantum computing, IT infrastructure, and emerging technologies
            </p>
          </motion.div>

          {/* Category Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                className="group relative"
              >
                <Link
                  href={category.id === 'all' ? '/2025-innovative-services-showcase-v2' : `/2025-innovative-services-showcase-v2?category=${category.id}`}
                  className="block h-full"
                >
                  <div className="h-full bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{category.count}</div>
                        <div className="text-xs text-gray-400">Services</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {category.name}
                    </h3>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Explore Services</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our most revolutionary and cutting-edge technology solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <Link href={feature.href} className="block h-full">
                  <div className="h-full bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-16"
          >
            <Link
              href="/2025-innovative-services-showcase-v2"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <span>View All {allInnovativeServices.length}+ Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations already leveraging our revolutionary AI, quantum, and IT infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/2025-innovative-services-showcase-v2"
                className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <UltraFuturisticFooter2047 />
    </div>
  );
};

export default Homepage2047;