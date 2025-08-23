import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, CheckCircle, Award, Users, Clock, DollarSign, BarChart3, Code, Server, Cloud, Lock, Phone, Mail, MapPin
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
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 8);
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

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045ITServices,
    ...revolutionary2045AIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 8);

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
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('security')).length },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500', count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('space')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.category.toLowerCase().includes('business')).length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2045", color: "from-purple-500 to-pink-500", badge: "Revolutionary" },
    { icon: Atom, title: "Quantum Neural Networks 2045", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-2045", color: "from-blue-500 to-cyan-500", badge: "Quantum" },
    { icon: Shield, title: "Quantum Cybersecurity 2045", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2045", color: "from-red-500 to-orange-500", badge: "Critical" },
    { icon: Rocket, title: "Space Resource Intelligence 2045", description: "AI-powered space exploration with consciousness", href: "/space-resource-mining-intelligence-2045", color: "from-indigo-500 to-purple-500", badge: "Space" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2045", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2045", color: "from-emerald-500 to-teal-500", badge: "Autonomous" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2045", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2045", color: "from-yellow-500 to-orange-500", badge: "Quantum" }
  ];

  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star, color: "from-purple-500 to-pink-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, color: "from-cyan-500 to-blue-500" },
    { number: "24/7", label: "AI Support Available", icon: Brain, color: "from-emerald-500 to-teal-500" },
    { number: "250+", label: "Countries Served", icon: Globe, color: "from-indigo-500 to-purple-500" }
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

  const handleContact = useCallback(() => {
    window.location.href = '/contact';
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
              className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl"
              style={{
                left: `${mousePosition.x * 0.1}px`,
                top: `${mousePosition.y * 0.1}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
            <div 
              className="absolute w-80 h-80 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full blur-3xl"
              style={{
                right: `${mousePosition.x * 0.05}px`,
                bottom: `${mousePosition.y * 0.05}px`,
                transform: 'translate(50%, 50%)'
              }}
            />
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Revolutionary 2045 Technology
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Technology
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  is Here
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the next generation of AI consciousness, quantum computing, and autonomous solutions. 
                Zion Tech Group is pioneering the future with revolutionary 2045 technology that transforms businesses worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWatchDemo}
                  className="group px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-300 font-semibold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary 2045
                </span>
                <br />
                <span className="text-white">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge micro SAAS, IT services, and AI solutions that are reshaping the future of technology.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                      : 'border-gray-600 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      {category.count}
                    </span>
                  </div>
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-xl" />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                    {/* Service Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                          {service.category.includes('AI') ? (
                            <Brain className="w-6 h-6 text-white" />
                          ) : service.category.includes('Quantum') ? (
                            <Atom className="w-6 h-6 text-white" />
                          ) : service.category.includes('Space') ? (
                            <Rocket className="w-6 h-6 text-white" />
                          ) : (
                            <Cpu className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-cyan-400 font-medium">{service.type}</div>
                          <div className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features Preview */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Market Size */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-emerald-400 font-semibold">{service.marketSize}</span>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    {hoveredService === service.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl"
                      />
                    )}

                    {/* Action Button */}
                    <div className="p-6 pt-0">
                      <button className="w-full group/btn relative px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => window.location.href = '/services'}
                className="group px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-300 font-semibold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Choose
                </span>
                <br />
                <span className="text-white">Zion Tech Group</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                    {/* Badge */}
                    <div className="absolute -top-3 left-8">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-xs font-semibold text-white">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <a
                      href={feature.href}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="text-white">Your Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Our revolutionary 2045 solutions are ready to propel your business into the next generation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContact}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Contact Us Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWatchDemo}
                  className="px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-300 font-semibold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Schedule Demo
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">+1 302 464 0950</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">kleber@ziontechgroup.com</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
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