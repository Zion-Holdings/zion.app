import React, { Suspense, lazy, useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, Sparkles, CheckCircle,
  Play, Pause, Volume2, VolumeX
} from 'lucide-react';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2025: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  // Intersection Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setCurrentSection(entry.target.id); // This line was removed
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const statsData = [
    {
      number: "50+",
      label: "AI Services",
      description: "Cutting-edge solutions",
      icon: Brain,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-300",
      delay: 0
    },
    {
      number: "100+",
      label: "Quantum Solutions",
      description: "Next-gen computing",
      icon: Atom,
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300",
      delay: 0.1
    },
    {
      number: "24/7",
      label: "Autonomous Operations",
      description: "Always available",
      icon: Cpu,
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300",
      delay: 0.2
    },
    {
      number: "∞",
      label: "Future Possibilities",
      description: "Unlimited potential",
      icon: Rocket,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300",
      delay: 0.3
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
      icon: '🧠',
      gradient: 'from-purple-500 to-pink-600'
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
      icon: '🛡️',
      gradient: 'from-blue-500 to-cyan-600'
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
      icon: '🏭',
      gradient: 'from-green-500 to-emerald-600'
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
      icon: '🚚',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" id="main">
        {/* Hero Section */}
        <section 
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements with reduced animation for better performance */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            
            {/* Floating particles for enhanced visual appeal */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-bounce delay-500"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Enhanced Company Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
                role="banner"
                aria-label="Company recognition"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
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
                <Link href="/comprehensive-2025-services-showcase" aria-label="View our 2025 services showcase">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black">
                    2025 Services Showcase
                  </button>
                </Link>
              </motion.div>
              
              {/* Enhanced Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
                role="complementary"
                aria-label="Company trust indicators"
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

              {/* Audio Controls */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-4 mt-8"
              >
                <button
                  onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  aria-label={isAudioPlaying ? 'Pause background audio' : 'Play background audio'}
                >
                  {isAudioPlaying ? (
                    <Pause className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Play className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-red-400" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section 
          id="stats"
          className="py-20 px-4 bg-black/30 relative"
          aria-labelledby="stats-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              id="stats-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            >
              Our Impact in Numbers
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {statsData.map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  viewport={{ once: true }}
                  className="p-6 group hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  role="region"
                  aria-label={`${stat.label}: ${stat.number}`}
                >
                  <div className={`text-4xl font-bold mb-2 ${stat.color} ${stat.hoverColor} transition-colors`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                  <div className={`text-xs ${stat.color} mt-2 opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section 
          id="services"
          className="py-20 px-4"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              id="services-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Revolutionary Services
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto"
            >
              Discover cutting-edge AI, quantum computing, and autonomous solutions that transform businesses and industries
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {featuredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Suspense fallback={
                    <div className="p-6 bg-gray-800/50 rounded-xl animate-pulse backdrop-blur-sm">
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded mb-4"></div>
                      <div className="h-20 bg-gray-700 rounded"></div>
                    </div>
                  }>
                    <LazyServiceCard
                      service={service}
                      variant={service.category.toLowerCase().includes('ai') ? 'ai' : 
                              service.category.toLowerCase().includes('quantum') ? 'quantum' : 'automation'}
                    />
                  </Suspense>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link href="/services" aria-label="View all our services">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black">
                  <span className="flex items-center gap-2">
                    View All Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section id="innovations" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            >
              Revolutionary Innovations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto"
            >
              Experience the future with our breakthrough quantum computing, autonomous systems, and consciousness AI platforms
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🧠',
                  title: 'AI Consciousness Evolution',
                  description: 'Develop AI systems with advanced consciousness, ethical reasoning, and emotional intelligence.',
                  price: '$8,999',
                  gradient: 'from-purple-600 to-pink-600',
                  features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols']
                },
                {
                  icon: '⚛️',
                  title: 'Quantum Edge Computing',
                  description: 'Quantum-enhanced edge computing for real-time processing and AI inference.',
                  price: '$4,999',
                  gradient: 'from-blue-600 to-cyan-600',
                  features: ['Quantum Processing', 'Real-time AI', 'Edge Optimization']
                },
                {
                  icon: '🏭',
                  title: 'Autonomous Content Factory',
                  description: 'Fully automated content creation, optimization, and distribution platform.',
                  price: '$1,299',
                  gradient: 'from-green-600 to-emerald-600',
                  features: ['Content Automation', 'AI Writing', 'Multi-platform Publishing']
                }
              ].map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${innovation.gradient}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  <div className={`relative bg-gradient-to-r ${innovation.gradient}/10 border border-${innovation.gradient.split('-')[0]}-500/30 rounded-2xl p-8 hover:border-${innovation.gradient.split('-')[0]}-400/50 transition-all duration-300 backdrop-blur-sm`}>
                    <div className="text-6xl mb-4">{innovation.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{innovation.title}</h3>
                    <p className="text-gray-300 mb-6">{innovation.description}</p>
                    
                    {/* Features list */}
                    <ul className="mb-6 space-y-2">
                      {innovation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">{innovation.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section 
          id="features"
          className="py-20 px-4 bg-gradient-to-r from-black/40 to-black/20 relative"
          aria-labelledby="features-heading"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              id="features-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Brain,
                  title: "AI-First Approach",
                  description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation."
                },
                {
                  icon: Atom,
                  title: "Quantum Ready",
                  description: "Our infrastructure is designed to seamlessly integrate with quantum computing as it becomes mainstream."
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade security protocols and compliance standards for enterprise-level protection."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance and rapid deployment for time-critical business operations."
                },
                {
                  icon: Users,
                  title: "24/7 Support",
                  description: "Round-the-clock technical support and monitoring for uninterrupted service."
                },
                {
                  icon: Target,
                  title: "Results Driven",
                  description: "Every solution is designed to deliver measurable business outcomes and ROI."
                }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/contact" aria-label="Contact us to get started">
                <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                  <span className="flex items-center gap-2 text-lg">
                    Get Started Today
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </button>
              </Link>
              
              <Link href="/demo" aria-label="Request a demo of our services">
                <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black">
                  <span className="text-lg">Request Demo</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;