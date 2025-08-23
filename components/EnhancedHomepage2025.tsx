import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Users, Code, Cloud, Lock, BarChart3, Lightbulb, Award, Clock, CheckCircle, ArrowUpRight, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new services
import { realInnovativeMicroSaas2025 } from '../data/2025-real-innovative-micro-saas';
import { cuttingEdgeITServices2025 } from '../data/2025-cutting-edge-it-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';

const EnhancedHomepage2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 5000);
    
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

  // Combine all new services
  const allNewServices = [
    ...realInnovativeMicroSaas2025,
    ...cuttingEdgeITServices2025,
    ...innovativeAIServices2025
  ];

  // Get featured services for rotation
  const featuredServices = allNewServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allNewServices;
    return allNewServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution", description: "Develop AI systems with advanced consciousness and emotional intelligence", href: "/ai-consciousness-evolution-platform", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Fusion", description: "Unite quantum computing with AI for unprecedented capabilities", href: "/quantum-ai-fusion-platform", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Zero-Trust Security", description: "Next-generation network security with AI-powered threat detection", href: "/zero-trust-network-architecture-platform", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence", description: "AI-powered space resource discovery and optimization", href: "/space-resource-intelligence-platform", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous DevOps", description: "Self-healing infrastructure with AI-powered automation", href: "/autonomous-devops-intelligence", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Edge Computing Orchestration", description: "Intelligent edge computing management for distributed applications", href: "/edge-computing-orchestration-platform", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2000+", label: "Innovative Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
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

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
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

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the Future with{' '}
                <span className="text-cyan-400 font-semibold">AI</span>,{' '}
                <span className="text-purple-400 font-semibold">Quantum</span>, and{' '}
                <span className="text-pink-400 font-semibold">Space Technology</span>
              </p>
              <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Transform your business with cutting-edge micro SAAS solutions, innovative IT services, and revolutionary AI platforms that define the future of technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleWatchDemo}
                className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <Play className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Explore Services
              </button>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 p-6 bg-black/20 backdrop-blur-sm border border-cyan-400/20 rounded-2xl max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <Phone className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div>
                  <Mail className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <MapPin className="w-5 h-5 text-pink-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of cutting-edge services designed to transform your business and propel you into the future.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400/70'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Featured Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <a
                    href={feature.href}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <SparklesIcon className="w-5 h-5" />
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our most innovative and cutting-edge solutions.
              </p>
            </motion.div>

            {/* Featured Service Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                <div className="relative p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                        <Star className="w-4 h-4" />
                        Featured Service
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {featuredServices[currentServiceIndex]?.name}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {featuredServices[currentServiceIndex]?.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredServices[currentServiceIndex]?.features?.slice(0, 3).map((feature: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-2xl font-bold text-cyan-400">
                          {featuredServices[currentServiceIndex]?.pricing?.starter}
                        </div>
                        <div className="text-gray-400">Starting Price</div>
                      </div>
                      <button
                        onClick={() => handleServiceClick(featuredServices[currentServiceIndex])}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                    <div className="relative">
                      <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-400/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-5">
                            <SparklesIcon className="w-full h-full text-white" />
                          </div>
                          <p className="text-cyan-400 font-semibold">Revolutionary Technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the future of technology with Zion Tech Group. Our revolutionary solutions are designed to propel your business into the next generation of innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleGetStarted}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  Contact Our Experts
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default EnhancedHomepage2025;