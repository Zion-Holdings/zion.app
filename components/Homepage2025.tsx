import React, { useEffect, useState, useCallback, memo } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Atom, Shield, Search, MessageCircle, Phone, Mail, Globe, Award, Users, Rocket
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation logic can be added here
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
        <div className="min-h-screen flex items-center justify-center">
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

  const services = [
    { icon: Brain, title: "AI & Machine Learning", description: "Advanced AI solutions for enterprise automation", gradient: "from-purple-500 to-pink-500", href: "/ai-services" },
    { icon: Cpu, title: "Quantum Computing", description: "Next-generation computational power", gradient: "from-cyan-500 to-blue-500", href: "/quantum-computing" },
    { icon: Shield, title: "Cybersecurity", description: "Military-grade protection for digital assets", gradient: "from-red-500 to-orange-500", href: "/cybersecurity" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions for growth", gradient: "from-emerald-500 to-teal-500", href: "/cloud-platform" },
    { icon: BarChart3, title: "Data Analytics", description: "Transform data into actionable insights", gradient: "from-indigo-500 to-purple-500", href: "/data-analytics" },
    { icon: Lock, title: "Blockchain Solutions", description: "Secure, transparent digital infrastructure", gradient: "from-yellow-500 to-orange-500", href: "/blockchain" }
  ];

  return (
    <Layout>
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-24 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
          >
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">Innovation Leader 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
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
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors transition-all duration-300 backdrop-blur-md hover:bg-white/10"
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
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">500+</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Projects Delivered</div>
              <div className="text-xs text-cyan-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Global Success Stories</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">50+</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">AI Solutions</div>
              <div className="text-xs text-purple-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-Edge AI</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">25+</div>
              <div className="text-gray-400 text-sm group-hover:text-blue-300 transition-colors">Quantum Services</div>
              <div className="text-xs text-blue-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Quantum Innovation</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">99.9%</div>
              <div className="text-gray-400 text-sm group-hover:text-green-300 transition-colors">Uptime SLA</div>
              <div className="text-xs text-green-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Reliable Service</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">Bank-grade security protocols and compliance standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-400">Serving clients across 25+ countries worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Track record of successful transformations and ROI</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
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
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Evolution</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI systems that evolve and adapt, pushing the boundaries of machine intelligence.
              </p>
              <Link
                href="/ai-services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
              >
                <Star className="w-4 h-4" />
                <span>Pioneering Future Technology</span>
              </motion.div>

            {/* Quantum Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum systems solving complex problems beyond classical computing limits.
              </p>
              <Link
                href="/quantum-services"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1"
              >
                Zion Tech Group
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock infinite possibilities
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/get-started" aria-label="Get started with Zion Tech Group">
                    <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Pioneering the future of technology with <span className="text-cyan-400 font-semibold">innovative solutions</span> that drive business transformation and unlock human potential
                  </p>
                </motion.div>

            {/* Space Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary space solutions from satellite networks to interplanetary infrastructure.
              </p>
              <Link
                href="/space-technology"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

      {/* Performance & Innovation */}
      <section id="performance" className="py-20 px-4 bg-black">
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

          {/* Performance Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-400">Performance Improvement</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Availability</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Patents Filed</div>
            </motion.div>
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

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showFloatingActions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40"
          >
            <motion.a
              href="tel:+1-555-0123"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              title="Call Us"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:contact@ziontechgroup.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              title="Email Us"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              title="Contact Form"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
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