import React, { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3, Star, Zap, X, Search, MessageCircle, Phone, Mail } from 'lucide-react';

/* eslint-disable no-undef */
const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate features for better engagement
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  // Show floating actions after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingActions(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge artificial intelligence driving business transformation", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Enterprise Security", description: "Military-grade cybersecurity protecting your digital assets", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Innovation First", description: "Pioneering the future with breakthrough technologies", color: "from-cyan-500 to-blue-500" },
    { icon: Globe, title: "Global Reach", description: "Serving clients worldwide with localized expertise", color: "from-emerald-500 to-teal-500" },
    { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power for complex problems", color: "from-indigo-500 to-purple-500" },
    { icon: Database, title: "Data Intelligence", description: "Transform raw data into actionable business insights", color: "from-yellow-500 to-orange-500" }
  ];



  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. 40% efficiency improvement in just 3 months.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Michael Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "Their quantum computing expertise helped us solve complex optimization problems that were previously impossible.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, BioTech Labs",
      content: "The cybersecurity implementation exceeded our expectations. We feel completely protected against modern threats.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ];

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6">
              <motion.div
                className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h2>
            <p className="text-gray-400">Preparing the future...</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-28 h-28 border border-green-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology
            </span>
            is Here
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Zion Tech Group delivers cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search our services, solutions, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Search
              </button>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
            >
              Request Demo
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">AI Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">Quantum Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime SLA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI consciousness evolution to quantum space technology, we're building the future today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Evolution</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI systems that evolve and adapt, pushing the boundaries of machine intelligence.
              </p>
              <Link
                href="/ai-services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Quantum Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum systems solving complex problems beyond classical computing limits.
              </p>
              <Link
                href="/quantum-services"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Space Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary space solutions from satellite networks to interplanetary infrastructure.
              </p>
              <Link
                href="/space-technology"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance & Innovation */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Performance & Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence drives every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Military-grade security protocols protecting your most valuable assets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Optimized performance delivering results in milliseconds, not minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">
                Intelligent automation that learns and adapts to your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setActiveFeature(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveFeature(index);
                  }
                }}
                aria-label={`Learn more about ${feature.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real feedback from industry leaders who trust us with their technology transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 px-4" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Revolutionary Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered automation to quantum computing solutions, we're building the future today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "AI & Machine Learning", description: "Advanced AI solutions for enterprise automation", color: "from-purple-500 to-pink-500" },
              { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power", color: "from-cyan-500 to-blue-500" },
              { icon: Shield, title: "Cybersecurity", description: "Military-grade protection for digital assets", color: "from-red-500 to-orange-500" },
              { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions for growth", color: "from-emerald-500 to-teal-500" },
              { icon: BarChart3, title: "Data Analytics", description: "Transform data into actionable insights", color: "from-indigo-500 to-purple-500" },
              { icon: Lock, title: "Blockchain Solutions", description: "Secure, transparent digital infrastructure", color: "from-yellow-500 to-orange-500" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Navigate to service page
                  }
                }}
                aria-label={`Learn more about ${service.title} services`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                aria-label="Start your business transformation journey"
              >
                Start Your Journey
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Schedule a demo of our solutions"
              >
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showFloatingActions && (
          <>
            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-24 right-6 z-50"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 group"
                aria-label="Contact Us"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>

            {/* Phone Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="fixed bottom-36 right-6 z-50"
            >
              <a
                href="tel:+1-302-464-0950"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
                aria-label="Call Us"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>

            {/* Email Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="fixed bottom-48 right-6 z-50"
            >
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group"
                aria-label="Email Us"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Newsletter Signup */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 z-50"
          >
            <div className="bg-gradient-to-r from-cyan-500/95 to-blue-500/95 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/50 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Stay Updated</h3>
                <button
                  onClick={() => setShowNewsletter(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close newsletter signup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Get the latest insights on AI, quantum computing, and emerging technologies.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-cyan-600 rounded-lg font-medium hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Newsletter Button */}
      <motion.button
        className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 z-40"
        onClick={() => setShowNewsletter(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open newsletter signup"
      >
        <Zap className="w-6 h-6 text-white mx-auto" />
      </motion.button>
    </Layout>
  );
};

export default Homepage2025;