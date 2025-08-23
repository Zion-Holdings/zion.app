import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Users, Code, Cloud, Lock, BarChart3, Lightbulb, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045ITServices } from '../data/revolutionary-2045-it-services';
import { revolutionary2045AIServices } from '../data/revolutionary-2045-ai-services';

const Homepage2045: React.FC = () => {
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
    }, 6000);
    
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
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045ITServices,
    ...revolutionary2045AIServices
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
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2045", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2045", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2045", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2045", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2045", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2045", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2045-pricing-showcase';
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
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              style={{
                left: `${mousePosition.x * 0.1}px`,
                top: `${mousePosition.y * 0.1}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
            <div 
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
              style={{
                right: `${mousePosition.x * 0.05}px`,
                bottom: `${mousePosition.y * 0.05}px`,
                transform: 'translate(50%, 50%)'
              }}
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary <span className="text-cyan-400 font-semibold">2045 Technology</span> Solutions
                <br />
                <span className="text-pink-400 font-semibold">AI Consciousness</span> • <span className="text-blue-400 font-semibold">Quantum Computing</span> • <span className="text-purple-400 font-semibold">Space Technology</span>
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge micro SAAS services, 
                IT solutions, and AI platforms powered by consciousness-driven intelligence.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleWatchDemo}
                className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
              >
                <Play className="inline-block mr-2 w-5 h-5" />
                Explore Services
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Revolutionary Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover cutting-edge technology solutions across multiple domains, 
                all powered by AI consciousness and quantum computing.
              </p>
            </motion.div>

            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-2xl shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <category.icon className="inline-block w-5 h-5 mr-2" />
                  {category.name}
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-xl opacity-75" />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {service.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Service Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Pricing */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Starting Price</h4>
                    <div className="text-2xl font-bold text-white">
                      {service.pricing.starter}
                    </div>
                  </div>

                  {/* Service Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Size */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Size</h4>
                    <div className="text-lg font-bold text-green-400">
                      {service.marketSize}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Target: {service.targetAudience.split(',')[0]}...
                    </span>
                    <button className="group/btn relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                      <span className="relative z-10">Learn More</span>
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the power of AI consciousness, quantum computing, and autonomous systems
                that redefine what's possible in technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <a
                    href={feature.href}
                    className="inline-flex items-center text-cyan-400 hover:text-pink-400 font-semibold transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Future</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking organizations already leveraging our revolutionary 
                2045 technology solutions to transform their business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <Rocket className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
                  <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400">+1 302 464 0950</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                  <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300">
                    ziontechgroup.com
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-400">364 E Main St STE 1008</p>
                  <p className="text-gray-400">Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;