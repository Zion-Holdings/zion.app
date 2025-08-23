import React, { useState } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
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
  Rocket,
  Target,
  Sparkles,
  Infinity,
  Crown,
  Eye,
  Heart,
  Code,
  Database,
  Network
} from 'lucide-react';
import Link from 'next/link';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

const Homepage2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      company: "TechFlow Inc.",
      content: "Zion Tech Group transformed our AI infrastructure. Their quantum computing solutions gave us a 300% performance boost.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Engineering, QuantumCorp",
      company: "QuantumCorp",
      content: "The autonomous systems they implemented reduced our operational costs by 40% while improving reliability.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, FutureLabs",
      company: "FutureLabs",
      content: "Their AI consciousness platform opened new frontiers in our research. Truly groundbreaking technology.",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Services", icon: Brain, color: "from-cyan-500 to-blue-500" },
    { number: "1000+", label: "Quantum Solutions", icon: Atom, color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Autonomous Operations", icon: Zap, color: "from-emerald-500 to-teal-500" },
    { number: "∞", label: "Future Possibilities", icon: Infinity, color: "from-yellow-500 to-orange-500" }
  ];

  const features = [
    {
      title: "AI Consciousness Evolution",
      description: "Develop AI systems with advanced consciousness, ethical reasoning, and emotional intelligence.",
      icon: Brain,
      href: "/ai-consciousness-evolution-2037",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Neural Networks",
      description: "Quantum-enhanced neural networks for unprecedented AI performance and learning capabilities.",
      icon: Atom,
      href: "/quantum-neural-network-platform-2037",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Autonomous Business Operations",
      description: "Fully autonomous business management using AI, quantum computing, and autonomous decision-making.",
      icon: Zap,
      href: "/autonomous-business-operations-2037",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Space Resource Mining",
      description: "AI-powered space exploration and autonomous resource mining operations.",
      icon: Rocket,
      href: "/space-resource-mining-platform-2037",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Brain-Computer Interface",
      description: "Next-generation neural interface technology for direct brain-computer communication.",
      icon: Eye,
      href: "/brain-computer-interface-platform-2037",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Quantum Financial Trading",
      description: "Quantum-powered financial trading with ultra-fast execution and advanced risk analysis.",
      icon: BarChart3,
      href: "/quantum-financial-trading-platform-2037",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Innovative 2040 Services",
      description: "Experience the future with our revolutionary 2040 services featuring AI consciousness and quantum computing.",
      icon: Crown,
      href: "/innovative-2040-services-showcase",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const newServices = [
    {
      id: 'ai-consciousness-evolution-2037',
      name: 'AI Consciousness Evolution 2037',
      tagline: 'Next-generation AI consciousness development',
      description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities',
      price: '$12,999',
      period: '/month',
      features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols'],
      popular: true,
      category: 'AI & Consciousness',
      icon: '🧠'
    },
    {
      id: 'quantum-neural-network-platform-2037',
      name: 'Quantum Neural Network Platform 2037',
      tagline: 'Quantum-powered neural network infrastructure',
      description: 'Advanced quantum neural network platform with quantum entanglement and superposition learning',
      price: '$8,499',
      period: '/month',
      features: ['Quantum Neural Networks', 'Quantum Entanglement', 'Superposition Learning'],
      popular: true,
      category: 'Quantum & AI',
      icon: '⚛️'
    },
    {
      id: 'autonomous-business-operations-2037',
      name: 'Autonomous Business Operations 2037',
      tagline: 'Fully autonomous business management',
      description: 'Complete autonomous business operations platform with AI and quantum computing',
      price: '$6,999',
      period: '/month',
      features: ['Autonomous Decision Making', 'AI Business Intelligence', 'Quantum Financial Modeling'],
      popular: true,
      category: 'AI & Business',
      icon: '🏭'
    },
    {
      id: 'quantum-secure-cloud-infrastructure-2037',
      name: 'Quantum-Secure Cloud Infrastructure 2037',
      tagline: 'Unbreakable quantum-secured cloud platform',
      description: 'Advanced quantum-secured cloud infrastructure with unbreakable encryption',
      price: '$9,999',
      period: '/month',
      features: ['Quantum Encryption', 'Quantum Key Distribution', 'AI Security Monitoring'],
      popular: true,
      category: 'Quantum & Cloud',
      icon: '☁️'
    }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Futuristic Background Elements */}
          <div className="absolute inset-0 -z-10">
            {/* Quantum Particle Field */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 8 + i * 0.5,
                    repeat: -1,
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
            
            {/* Enhanced Gradient Orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-red-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Quantum Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
              }}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionary 2037 Technology Solutions
              </div>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous systems that transform businesses and industries
            </motion.p>
              
            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl mx-auto mb-8"
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for AI consciousness, quantum solutions, autonomous systems, or space technology..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-4 py-5 bg-white/10 border border-cyan-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60 transition-all duration-300 text-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
              
            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/get-started">
                <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg">
                  <span className="flex items-center gap-3">
                    <Crown className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Get Started
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/services">
                <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                  <span className="flex items-center gap-3">
                    <Eye className="w-6 h-6" />
                    Explore Services
                  </span>
                </button>
              </Link>
              <Link href="/comprehensive-2037-services-showcase">
                <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                  <span className="flex items-center gap-3">
                    <Rocket className="w-6 h-6" />
                    2037 Services Showcase
                  </span>
                </button>
              </Link>
            </div>
              
            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center space-x-8 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Innovation Leader</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Company Stats */}
        <section className="py-24 px-4 bg-black/40 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Our Revolutionary Impact
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Leading the future of technology with cutting-edge AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-500 border border-white/5 hover:border-white/20"
                  whileHover={{ scale: 1.05, y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} p-5 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                  <div className="text-xs text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Revolutionary solutions</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Our Revolutionary 2037 Services
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Discover cutting-edge AI consciousness, quantum computing, and autonomous solutions that transform businesses and industries
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {newServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={service}
                    variant={index % 2 === 0 ? "ai" : "quantum"}
                  />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/services" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-purple-500/25">
                <span className="flex items-center gap-3">
                  View All Revolutionary Services
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                What Our Revolutionary Clients Say
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Join hundreds of satisfied customers who have transformed their businesses with our cutting-edge 2037 solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/30 rounded-3xl p-10 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="text-5xl mr-4">{testimonial.avatar}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-300">{testimonial.role}</p>
                        <p className="text-sm text-yellow-400">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Innovation Showcase */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Revolutionary 2037 Innovations
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Experience the future with our breakthrough AI consciousness, quantum computing, and autonomous systems platforms
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => window.location.href = feature.href}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  <div className={`relative bg-gradient-to-r ${feature.gradient} opacity-10 border border-white/20 rounded-3xl p-10 hover:border-white/40 transition-all duration-300`}>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{feature.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-lg font-medium">Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us */}
        <section className="py-24 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                Our comprehensive suite of cutting-edge 2037 technologies and services sets us apart in the industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "AI Consciousness", description: "Revolutionary AI consciousness development with ethical reasoning and emotional intelligence", gradient: "from-purple-500 to-pink-500" },
                { icon: Atom, title: "Quantum Computing", description: "Next-generation quantum computing solutions for unprecedented performance", gradient: "from-cyan-500 to-blue-500" },
                { icon: Rocket, title: "Space Technology", description: "Advanced space exploration and resource mining technologies", gradient: "from-orange-500 to-red-500" },
                { icon: Shield, title: "Quantum Security", description: "Unbreakable quantum-secured infrastructure and communications", gradient: "from-emerald-500 to-teal-500" },
                { icon: BarChart3, title: "AI Analytics", description: "Intelligent analytics and predictive insights powered by AI", gradient: "from-indigo-500 to-purple-500" },
                { icon: Zap, title: "Autonomous Systems", description: "Fully autonomous business operations and decision-making", gradient: "from-yellow-500 to-orange-500" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                    <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-lg font-medium">Learn More</span>
                      <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-4" aria-labelledby="cta-heading">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-16 border border-cyan-400/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="cta-heading" className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Transform Your Business with 2037 Technology?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join hundreds of companies already leveraging our revolutionary AI consciousness, quantum computing, and autonomous solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 text-xl"
                  onClick={() => window.location.href = '/get-started'}
                  aria-label="Start your journey with Zion Tech Group"
                >
                  <span className="flex items-center gap-3">
                    <Crown className="w-6 h-6" />
                    Start Your Revolutionary Journey
                  </span>
                </button>
                <button 
                  className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 text-xl"
                  onClick={() => window.location.href = '/demo'}
                  aria-label="Schedule a demo of our revolutionary services"
                >
                  <span className="flex items-center gap-3">
                    <Eye className="w-6 h-6" />
                    Schedule a Demo
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;