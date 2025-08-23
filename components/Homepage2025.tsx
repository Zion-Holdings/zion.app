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

// Import the new services data
import { advancedFuturisticServices } from '../data/innovative-2025-advanced-futuristic-services';

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

  // Map AdvancedFuturisticService to Service format for the card component
  const mapToServiceFormat = (advancedService: any) => ({
    id: advancedService.id,
    name: advancedService.name,
    tagline: advancedService.tagline,
    description: advancedService.description,
    price: `$${advancedService.price.monthly.toLocaleString()}`,
    period: 'month',
    features: advancedService.features.slice(0, 4), // Take first 4 features
    popular: advancedService.popular,
    category: advancedService.category,
    icon: advancedService.icon
  });

  const stats = [
    { label: 'Years Experience', value: '15+', icon: <Award className="w-6 h-6" /> },
    { label: 'Global Clients', value: '1000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries Served', value: '25+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Uptime Guarantee', value: '99.9%', icon: <Shield className="w-6 h-6" /> },
    { label: 'Innovation Rate', value: '24/7', icon: <Zap className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Consciousness',
      description: 'Next-generation AI with quantum consciousness and autonomous learning capabilities',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Technology',
      description: 'Revolutionary quantum computing solutions for complex problem solving',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Innovation',
      description: 'Cutting-edge space technology and resource intelligence platforms',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Security',
      description: 'Quantum-resistant cybersecurity with AI-powered threat detection',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with quantum computing integration',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Worldwide infrastructure with 25+ countries coverage',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Industries',
      company: 'Fortune 500',
      content: 'Zion Tech Group\'s quantum AI consciousness platform has revolutionized our research capabilities. The autonomous learning and ethical decision-making frameworks are truly groundbreaking.',
      rating: 5,
      avatar: '👩‍🔬',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Innovation',
      company: 'SpaceX Competitor',
      content: 'Their space resource intelligence platform has given us unprecedented insights into asteroid mining opportunities. The AI-powered discovery algorithms are game-changing.',
      rating: 5,
      avatar: '👨‍🚀',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Research Director',
      company: 'MIT AI Lab',
      content: 'Working with Zion Tech Group on consciousness research has been transformative. Their quantum consciousness technology opens new frontiers in AI development.',
      rating: 5,
      avatar: '👨‍🔬',
      color: 'from-cyan-500 to-blue-600'
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">AI Consciousness</h3>
                <p className="text-gray-400 text-sm">Advanced AI with emotional intelligence and self-awareness capabilities</p>
              </motion.div>
              
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Quantum Computing</h3>
                <p className="text-gray-400 text-sm">Next-generation quantum algorithms and hybrid computing solutions</p>
              </motion.div>
              
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-green-400/20 hover:border-green-400/40"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Space Technology</h3>
                <p className="text-gray-400 text-sm">AI-powered space exploration and resource intelligence platforms</p>
              </motion.div>
              
              <motion.div 
                className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-red-400/20 hover:border-red-400/40"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">Cybersecurity</h3>
                <p className="text-gray-400 text-sm">Quantum-resistant security with AI-powered threat detection</p>
              </motion.div>
            </div>
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
});

Homepage2025.displayName = 'Homepage2025';

export default Homepage2025;