import React, { useState, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Search,
  Shield,
  Globe,
  TrendingUp,
  Brain,
  Atom,
  Zap,
  Cpu,
  Cloud,
  BarChart3,
  Lock,
  Play,
  CheckCircle,
  Users,
  Award
} from 'lucide-react';
import Link from 'next/link';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

const Homepage2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  }, [searchQuery]);

  const handleSearchFocus = useCallback(() => setIsSearchFocused(true), []);
  const handleSearchBlur = useCallback(() => setIsSearchFocused(false), []);

  // Memoized data to prevent unnecessary re-renders
  const testimonials = useMemo(() => [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      company: "TechFlow Inc.",
      content: "Zion Tech Group transformed our AI infrastructure. Their quantum computing solutions gave us a 300% performance boost.",
      rating: 5,
      avatar: "👩‍💼",
      achievement: "300% Performance Boost"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Engineering, QuantumCorp",
      company: "QuantumCorp",
      content: "The autonomous systems they implemented reduced our operational costs by 40% while improving reliability.",
      rating: 5,
      avatar: "👨‍💻",
      achievement: "40% Cost Reduction"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, FutureLabs",
      company: "FutureLabs",
      content: "Their AI consciousness platform opened new frontiers in our research. Truly groundbreaking technology.",
      rating: 5,
      avatar: "👩‍🔬",
      achievement: "Research Breakthrough"
    }
  ], []);

  const stats = useMemo(() => [
    { number: '50+', label: 'AI Services', icon: Brain, description: 'Cutting-edge solutions' },
    { number: '100+', label: 'Quantum Solutions', icon: Atom, description: 'Next-gen computing' },
    { number: '24/7', label: 'Autonomous Operations', icon: Zap, description: 'Always available' },
    { number: '∞', label: 'Future Possibilities', icon: TrendingUp, description: 'Unlimited potential' }
  ], []);

  const features = useMemo(() => [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for enterprise automation",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["40% efficiency increase", "Real-time insights", "Scalable automation"]
    },
    {
      icon: Cpu,
      title: "Quantum Computing",
      description: "Next-generation computational power",
      gradient: "from-cyan-500 to-blue-500",
      benefits: ["1000x faster processing", "Quantum encryption", "Future-proof solutions"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Military-grade protection for digital assets",
      gradient: "from-red-500 to-orange-500",
      benefits: ["99.9% threat detection", "Zero-trust architecture", "24/7 monitoring"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for growth",
      gradient: "from-emerald-500 to-teal-500",
      benefits: ["Global CDN", "Auto-scaling", "99.99% uptime"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform data into actionable insights",
      gradient: "from-indigo-500 to-purple-500",
      benefits: ["Real-time dashboards", "Predictive analytics", "AI-powered insights"]
    },
    {
      icon: Lock,
      title: "Blockchain Solutions",
      description: "Secure, transparent digital infrastructure",
      gradient: "from-yellow-500 to-orange-500",
      benefits: ["Immutable records", "Smart contracts", "Decentralized security"]
    }
  ], []);

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Optimized Background Elements */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Reduced particle count for better performance */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
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
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.h1
              id="hero-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with innovative solutions that drive business transformation
            </motion.p>
              
              {/* Enhanced Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl mx-auto mb-8"
              >
                <form onSubmit={handleSearch} className="relative" role="search">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                    <input
                      type="text"
                      placeholder="Search for AI services, quantum solutions, or autonomous systems..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={handleSearchFocus}
                      onBlur={handleSearchBlur}
                      className={`w-full pl-12 pr-4 py-4 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        isSearchFocused 
                          ? 'border-cyan-400/50 focus:ring-cyan-400/50' 
                          : 'border-cyan-400/30'
                      }`}
                      aria-label="Search for services"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                      aria-label="Search"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </motion.div>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/get-started">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                    Learn More
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/50">
                    2025 Services Showcase
                  </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
                role="complementary"
                aria-label="Trust indicators"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" aria-hidden="true" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" aria-hidden="true" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4 bg-black/30 relative" aria-labelledby="stats-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pioneering the future of technology with cutting-edge AI, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              role="region"
              aria-label="Company statistics"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
              Discover cutting-edge AI, quantum computing, and autonomous solutions that transform businesses and industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'ai-consciousness',
                  name: 'AI Consciousness Evolution',
                  tagline: 'Advanced AI consciousness development',
                  description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities',
                  price: '$8,999',
                  period: '/month',
                  features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols'],
                  popular: true,
                  category: 'AI & Consciousness',
                  icon: '🧠'
                }}
                variant="ai"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-cybersecurity',
                  name: 'Quantum Cybersecurity',
                  tagline: 'Quantum-resistant security platform',
                  description: 'Advanced cybersecurity with quantum-resistant encryption and AI threat detection',
                  price: '$2,499',
                  period: '/month',
                  features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust'],
                  popular: true,
                  category: 'Quantum & Security',
                  icon: '🛡️'
                }}
                variant="quantum"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'autonomous-content',
                  name: 'AI Content Factory',
                  tagline: 'Fully automated content creation',
                  description: 'End-to-end autonomous content creation, optimization, and distribution platform',
                  price: '$1,299',
                  period: '/month',
                  features: ['Content Automation', 'AI Writing', 'Multi-platform Publishing'],
                  popular: true,
                  category: 'AI & Content',
                  icon: '🏭'
                }}
                variant="automation"
              />
              <UltraFuturisticServiceCard2026
                service={{
                  id: 'quantum-supply-chain',
                  name: 'Quantum Supply Chain',
                  tagline: 'Quantum-powered optimization',
                  description: 'Advanced supply chain optimization using quantum computing for complex logistics',
                  price: '$3,999',
                  period: '/month',
                  features: ['Route Optimization', 'Demand Forecasting', 'Risk Assessment'],
                  popular: false,
                  category: 'Quantum & Logistics',
                  icon: '🚚'
                }}
                variant="quantum"
              />
            </div>
            <div className="text-center mt-16">
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of satisfied customers who have transformed their businesses with our cutting-edge solutions
              </p>
            </motion.div>
            
            {/* Auto-rotating testimonials */}
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{testimonials[activeTestimonial].avatar}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{testimonials[activeTestimonial].name}</h4>
                        <p className="text-sm text-gray-300">{testimonials[activeTestimonial].role}</p>
                        <p className="text-xs text-yellow-400">{testimonials[activeTestimonial].company}</p>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-yellow-500/20 px-3 py-1 rounded-full">
                          <span className="text-yellow-400 text-xs font-medium">{testimonials[activeTestimonial].achievement}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 italic text-lg">
                      "{testimonials[activeTestimonial].content}"
                    </blockquote>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Testimonial navigation dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black" aria-labelledby="innovations-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="innovations-heading" className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Revolutionary Innovations
            </h2>
            <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
              Experience the future with our breakthrough quantum computing, autonomous systems, and consciousness AI platforms
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Evolution</h3>
                  <p className="text-gray-300 mb-6">Develop AI systems with advanced consciousness, ethical reasoning, and emotional intelligence.</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-400">$8,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-6xl mb-4">⚛️</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Edge Computing</h3>
                  <p className="text-gray-300 mb-6">Quantum-enhanced edge computing for real-time processing and AI inference.</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-400">$4,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-6xl mb-4">🏭</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Autonomous Content Factory</h3>
                  <p className="text-gray-300 mb-6">Fully automated content creation, optimization, and distribution platform.</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-400">$1,299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-black/20 relative" aria-labelledby="features-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our comprehensive suite of cutting-edge technologies and services sets us apart in the industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => window.location.href = `/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.location.href = `/${feature.title.toLowerCase().replace(/\s+/g, '-')}`;
                    }
                  }}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-4`}>
                      <feature.icon className="w-full h-full text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                    
                    {/* Benefits list */}
                    <div className="space-y-2 mb-4">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  onClick={() => window.location.href = '/get-started'}
                  aria-label="Start your journey with Zion Tech Group"
                >
                  Start Your Journey
                </button>
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  onClick={() => window.location.href = '/demo'}
                  aria-label="Schedule a demo of our services"
                >
                  Schedule a Demo
                </button>
              </div>
              
              {/* Additional trust indicators */}
              <div className="mt-8 pt-8 border-t border-cyan-400/20">
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>500+ Clients Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Industry Leader 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>SOC 2 Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;