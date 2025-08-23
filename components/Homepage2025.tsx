import React, { Suspense, lazy, useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, Play, CheckCircle,
  ChevronLeft, ChevronRight, X
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2025: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Enhanced animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const statsData = [
    {
      number: "50+",
      label: "AI Services",
      description: "Cutting-edge solutions",
      icon: Brain,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-300"
    },
    {
      number: "100+",
      label: "Quantum Solutions",
      description: "Next-gen computing",
      icon: Atom,
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      number: "24/7",
      label: "Autonomous Operations",
      description: "Always available",
      icon: Cpu,
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300"
    },
    {
      number: "∞",
      label: "Future Possibilities",
      description: "Unlimited potential",
      icon: Rocket,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300"
    }
  ];

  const featuredServices = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      id: 'quantum-supply-chain',
      name: 'Quantum Supply Chain',
      tagline: 'Quantum-optimized logistics',
      description: 'Revolutionary supply chain optimization using quantum algorithms and AI',
      price: '$3,999',
      period: '/month',
      features: ['Quantum Optimization', 'Real-time Tracking', 'Predictive Analytics'],
      popular: false,
      category: 'Quantum & Logistics',
      icon: '🚚'
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp Industries",
      content: "Zion Tech Group's AI consciousness platform has revolutionized our research capabilities. The level of sophistication is unmatched.",
      avatar: "/avatars/sarah-chen.jpg",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Innovation, FutureSpace",
      content: "Their quantum cybersecurity solutions have given us the edge we needed. Zero breaches in 18 months since implementation.",
      avatar: "/avatars/marcus-rodriguez.jpg",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, BioTech Labs",
      content: "The autonomous content generation has increased our productivity by 300%. It's like having an entire content team working 24/7.",
      avatar: "/avatars/emily-watson.jpg",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" id="main">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background Elements with reduced animation for better performance */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Company Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
                role="banner"
                aria-label="Company recognition"
              >
                <Star className="w-4 h-4" aria-hidden="true" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                id="hero-heading"
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Zion Tech Group
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Pioneering the future of technology with innovative solutions that drive business transformation
              </motion.p>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link href="/get-started" aria-label="Get started with our services">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </button>
                </Link>
                <Link href="/services" aria-label="Learn more about our services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    Learn More
                  </button>
                </Link>
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Watch company overview video"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" aria-hidden="true" />
                    Watch Video
                  </span>
                </button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color} ${stat.hoverColor}`} aria-hidden="true" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge AI, quantum computing, and autonomous solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Suspense fallback={
                    <div className="bg-gray-800 rounded-xl p-6 h-80 animate-pulse">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4"></div>
                      <div className="h-6 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded mb-4"></div>
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded"></div>
                    </div>
                  }>
                    <LazyServiceCard service={service} />
                  </Suspense>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link href="/services" aria-label="View all services">
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                  View All Services
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by industry leaders worldwide
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentTestimonial].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-white italic mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial
                            ? 'bg-cyan-500'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" aria-label="Contact us to get started">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    Start Your Journey
                  </button>
                </Link>
                <Link href="/demo" aria-label="Request a demo">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    Request Demo
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                aria-label="Close video modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-20 h-20 mx-auto mb-4 text-cyan-400" />
                  <p className="text-xl">Company Overview Video</p>
                  <p className="text-gray-400 mt-2">Video content would be embedded here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage2025;