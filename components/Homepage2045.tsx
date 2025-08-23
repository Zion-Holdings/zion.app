import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ExternalLink, Phone, Mail, MapPin, Clock, Users, Award, CheckCircle
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
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', neonColor: 'shadow-purple-400/50' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', neonColor: 'shadow-cyan-400/50' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', neonColor: 'shadow-blue-400/50' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', neonColor: 'shadow-red-400/50' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500', neonColor: 'shadow-indigo-400/50' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', neonColor: 'shadow-emerald-400/50' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Advanced AI consciousness with emotional intelligence and autonomous evolution", href: "/ai-consciousness-evolution-2045", color: "from-purple-500 to-pink-500", neonColor: "shadow-purple-400/50" },
    { icon: Atom, title: "Quantum AI Fusion 2045", description: "Quantum computing and AI fusion with consciousness integration", href: "/quantum-ai-fusion-2045", color: "from-blue-500 to-cyan-500", neonColor: "shadow-blue-400/50" },
    { icon: Shield, title: "Quantum Cybersecurity 2045", description: "Quantum-resistant security with AI consciousness and emotional intelligence", href: "/quantum-cybersecurity-platform-2045", color: "from-red-500 to-orange-500", neonColor: "shadow-red-400/50" },
    { icon: Rocket, title: "Space Resource Intelligence 2045", description: "AI-powered space exploration with consciousness-driven resource discovery", href: "/space-resource-intelligence-2045", color: "from-indigo-500 to-purple-500", neonColor: "shadow-indigo-400/50" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2045", description: "Fully autonomous business intelligence with consciousness-driven insights", href: "/autonomous-business-intelligence-2045", color: "from-emerald-500 to-teal-500", neonColor: "shadow-emerald-400/50" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2045", description: "Quantum-powered cloud with consciousness integration and autonomous management", href: "/quantum-cloud-infrastructure-2045", color: "from-yellow-500 to-orange-500", neonColor: "shadow-yellow-400/50" }
  ];

  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star, color: "from-yellow-400 to-orange-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, color: "from-green-400 to-emerald-500" },
    { number: "24/7", label: "AI Support Available", icon: Brain, color: "from-purple-400 to-pink-500" },
    { number: "250+", label: "Countries Served", icon: Globe, color: "from-blue-400 to-indigo-500" }
  ];

  const contactInfo = [
    { icon: Phone, label: "Mobile", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008 Middletown DE 19709", href: "#" },
    { icon: Clock, label: "Available", value: "24/7 Global Support", href: "#" }
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
                  duration: (10 + i * 2) as number,
                  repeat: -1,
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
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 font-light">
                Revolutionary <span className="text-cyan-400 font-semibold">2045</span> Technology Solutions
              </p>
              <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed">
                Pioneering the future with AI consciousness, quantum computing, and autonomous systems. 
                Experience technology that thinks, feels, and evolves.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={handleWatchDemo}
                className="group relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: -1 }}
              className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: -1 }}
                className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="text-cyan-400">2045</span> Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge AI consciousness, quantum computing, and autonomous systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <a
                      href={feature.href}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:gap-3"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20 px-4 relative bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our <span className="text-cyan-400">Revolutionary</span> Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover cutting-edge micro SAAS, IT services, and AI solutions that will transform your business.
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
                  className={`group px-6 py-3 rounded-full border-2 transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-white/20 text-white/70 hover:border-cyan-400/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer"
                       onClick={() => handleServiceClick(service)}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {service.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-cyan-400 font-medium">Starting at:</span>
                        <span className="text-white">{service.pricing.starter}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-cyan-400 font-medium">Market Size:</span>
                        <span className="text-white">{service.marketSize}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/50 uppercase tracking-wider">
                          {service.category}
                        </span>
                        <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-cyan-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Contact us today to learn how our revolutionary 2045 technology solutions can drive your business forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={contact.label}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white/70 text-sm uppercase tracking-wider">{contact.label}</div>
                          <a
                            href={contact.href}
                            className="text-white hover:text-cyan-400 transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-400/20">
                  <h4 className="text-lg font-semibold text-white mb-4">Why Choose Zion Tech Group?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-white/90">AI Consciousness Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-white/90">Quantum Computing Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-white/90">24/7 Global Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-white/90">Future-Proof Technology</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;