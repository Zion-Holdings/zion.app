import React, { useState, useEffect, Suspense, lazy } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Loader2, Star as StarIcon, Globe2, Zap as ZapIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';

// Lazy load components for better performance
const LazyStatsSection = lazy(() => import('../components/StatsSection'));
const LazyTestimonialsSection = lazy(() => import('../components/TestimonialsSection'));

export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);

    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Autonomous Ecosystem",
      description: "Revolutionary autonomous AI solutions that adapt and evolve",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum AI Neural Networks",
      description: "Quantum-powered AI with advanced consciousness capabilities",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Quantum-resistant security with AI-powered threat detection",
      color: "from-red-500 to-orange-500",
      gradient: "bg-gradient-to-br from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Space Resource Intelligence",
      description: "AI-powered space resource discovery and optimization",
      color: "from-indigo-500 to-purple-500",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500"
    },
    {
      icon: Cpu,
      title: "Autonomous DevOps",
      description: "AI-powered DevOps optimization and automation",
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Edge Computing Orchestration",
      description: "Advanced edge computing optimization platform",
      color: "from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500"
    }
  ];

  const services = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/ai-business-intelligence",
      price: "$499/month",
      features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights"],
      badge: "Popular"
    },
    {
      title: "Quantum Cybersecurity",
      description: "Future-proof security with quantum-resistant encryption and AI threat detection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "https://ziontechgroup.com/quantum-cybersecurity",
      price: "$799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"],
      badge: "Enterprise"
    },
    {
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with AI",
      icon: Users,
      color: "from-green-500 to-teal-500",
      link: "https://ziontechgroup.com/ai-customer-experience",
      price: "$399/month",
      features: ["Customer journey mapping", "AI personalization", "Sentiment analysis"],
      badge: "Growing"
    },
    {
      title: "Edge Computing Orchestration",
      description: "Deploy and manage applications at the edge with intelligent orchestration",
      icon: Network,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/edge-computing-orchestration",
      price: "$349/month",
      features: ["Edge node management", "IoT device management", "Real-time monitoring"],
      badge: "Innovative"
    },
    {
      title: "Space Technology Innovation",
      description: "Accelerate space exploration with cutting-edge technology solutions",
      icon: Rocket,
      color: "from-violet-500 to-purple-500",
      link: "https://ziontechgroup.com/space-technology",
      price: "$2,499/month",
      features: ["Satellite management", "AI mission planning", "Quantum communication"],
      badge: "Premium"
    },
    {
      title: "Neural Interface Development",
      description: "Build the future of human-computer interaction with neural interfaces",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
      link: "https://ziontechgroup.com/neural-interface",
      price: "$899/month",
      features: ["BCI development tools", "Neural signal processing", "AI pattern recognition"],
      badge: "Cutting-edge"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle, description: "Successfully completed projects" },
    { number: "50+", label: "Enterprise Clients", icon: Users, description: "Trusted by leading companies" },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield, description: "Reliable service delivery" },
    { number: "24/7", label: "Support Available", icon: Clock, description: "Round-the-clock assistance" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, QuantumTech Solutions",
      content: "Zion Tech Group's AI solutions transformed our data processing capabilities by 300%. Their quantum cybersecurity implementation is revolutionary.",
      rating: 5,
      company: "QuantumTech Solutions"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Engineering, SpaceCorp",
      content: "The space technology platform exceeded our expectations. We've reduced mission planning time by 60% while improving accuracy.",
      rating: 5,
      company: "SpaceCorp"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, NeuralLabs",
      content: "Working with Zion Tech Group on neural interface development has been groundbreaking. Their expertise in AI consciousness is unmatched.",
      rating: 5,
      company: "NeuralLabs"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <Loader2 className="w-full h-full text-cyan-400 animate-spin" />
          </div>
          <h2 className="text-xl text-white/80">Loading Zion Tech Group...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation with revolutionary technology." />
        <meta name="keywords" content="AI, quantum computing, cybersecurity, digital transformation, autonomous systems, technology solutions, space technology, neural interfaces, edge computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group — Leading-Edge Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group — Leading-Edge Technology Solutions" />
        <meta name="twitter:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20" role="banner" aria-label="Hero section">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.05),transparent_50%)]" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Leading-edge technology solutions and autonomous innovation platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
              and digital transformation solutions that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
                aria-label="Learn more about Zion Tech Group"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            aria-hidden="true"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
            aria-hidden="true"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
            aria-hidden="true"
          />
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-1/3 w-1 h-1 bg-green-400 rounded-full opacity-60"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-6" role="region" aria-label="Technology features">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our cutting-edge services that are transforming industries and driving the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus-within:ring-4 focus-within:ring-cyan-500/30"
                tabIndex={0}
                role="article"
                aria-labelledby={`service-${index}-title`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        service.badge === 'Popular' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                        service.badge === 'Enterprise' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                        service.badge === 'Premium' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' :
                        service.badge === 'Cutting-edge' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                        'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 id={`service-${index}-title`} className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                      aria-label={`Get quote for ${service.title}`}
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10" role="region" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                tabIndex={0}
                role="article"
                aria-label={`${stat.label}: ${stat.number}`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 mb-2">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-20 px-6" role="region" aria-label="Customer testimonials">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                role="article"
                aria-labelledby={`testimonial-${index}-name`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-white/80 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 id={`testimonial-${index}-name`} className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                    <p className="text-xs text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-6" role="region" aria-label="Call to action">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/comprehensive-2025-services-showcase"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Explore all Zion Tech Group services"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
                aria-label="Schedule consultation with Zion Tech Group"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Latest Updates Section */}
      <section className="py-20 px-6" role="region" aria-label="Latest updates">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Latest Autonomous Updates
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with our latest innovations and autonomous system developments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="/reports/updates/update-2025-08-15-0508" 
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
              aria-label="Read autonomous update from August 15, 2025"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0508</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
              </div>
            </a>
            <a 
              href="/reports/updates/update-2025-08-15-0507" 
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
              aria-label="Read autonomous update from August 15, 2025"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0507</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
              </div>
            </a>
            <a 
              href="/reports/updates/update-2025-08-15-0457" 
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
              aria-label="Read autonomous update from August 15, 2025"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">Autonomous Update — 2025: 08: 15: 0457</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                Open <span aria-hidden>→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10" role="region" aria-label="Contact form">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Let's discuss your project and explore how our cutting-edge technology solutions can transform your business
            </p>
          </motion.div>

          <Suspense fallback={
            <div className="text-center py-12">
              <Loader2 className="w-8 h-8 mx-auto text-cyan-400 animate-spin" />
              <p className="text-white/70 mt-2">Loading contact form...</p>
            </div>
          }>
            <EnhancedContactForm />
          </Suspense>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
