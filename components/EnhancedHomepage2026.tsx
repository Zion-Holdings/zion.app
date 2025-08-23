import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Layout from './layout/Layout';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Shield, 
  Zap,
  Rocket,
  Brain,
  Cpu,
  Eye,
  Loader2,
  ChevronRight,
  Atom,
  Building,
  Award
} from 'lucide-react';

// Lazy load components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const TestimonialSection = lazy(() => import('./TestimonialSection'));

const EnhancedHomepage2026: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate content loading with better timing
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300); // Reduced from 500ms for better perceived performance

    // Auto-rotate featured services with better performance
    const serviceTimer = setInterval(() => {
      // setCurrentServiceIndex((prev) => (prev + 1) % 6); // This line was removed
    }, 5000); // Increased from 4000ms for better user experience

    // Performance optimization with Intersection Observer
    useEffect(() => {
      if (typeof window !== 'undefined' && window.IntersectionObserver) {
        const observer = new window.IntersectionObserver(
          (entries: any[]) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
              }
            });
          },
          { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
      }
    }, []);

    return () => {
      clearTimeout(timer);
      clearInterval(serviceTimer);
    };
  }, []);

  // Optimized animations with better performance
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08, // Reduced from 0.1 for snappier feel
        delayChildren: 0.1 // Reduced from 0.2
      }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" as const }
    }
  };

  const featuredServices = [
    {
      title: "Quantum AI Orchestration Platform",
      description: "Revolutionary AI orchestration leveraging quantum computing for unprecedented performance",
      icon: Brain,
      color: "from-purple-600 to-indigo-700",
      price: "$4,999/month",
      features: ["Quantum AI coordination", "Zero-latency switching", "Multi-model management"],
      badge: "Most Popular"
    },
    {
      title: "Autonomous Cybersecurity Orchestrator",
      description: "AI-powered cybersecurity automation with autonomous threat response",
      icon: Shield,
      color: "from-red-600 to-pink-700",
      price: "$1,299/month",
      features: ["Autonomous threat detection", "Real-time response", "Zero-trust architecture"],
      badge: "Trending"
    },
    {
      title: "Quantum Financial Modeling Suite",
      description: "Quantum-powered financial modeling for superior risk assessment and optimization",
      icon: Zap,
      color: "from-yellow-600 to-orange-700",
      price: "$2,999/month",
      features: ["Quantum Monte Carlo", "Portfolio optimization", "Risk assessment"],
      badge: "New"
    },
    {
      title: "Metaverse Commerce Platform",
      description: "Complete e-commerce solution for virtual worlds and digital asset management",
      icon: Globe,
      color: "from-purple-600 to-indigo-700",
      price: "$799/month",
      features: ["3D storefronts", "NFT management", "Virtual currency"],
      badge: "Innovative"
    },
    {
      title: "Autonomous DevOps Orchestrator",
      description: "AI-powered DevOps automation with intelligent infrastructure management",
      icon: Cpu,
      color: "from-green-600 to-emerald-700",
      price: "$1,199/month",
      features: ["Autonomous CI/CD", "Self-healing infrastructure", "Predictive optimization"],
      badge: "Enterprise"
    },
    {
      title: "Quantum Computer Vision Suite",
      description: "Quantum-powered computer vision for unprecedented image analysis accuracy",
      icon: Eye,
      color: "from-cyan-600 to-blue-700",
      price: "$3,499/month",
      features: ["Quantum image processing", "Real-time analysis", "3D vision"],
      badge: "Advanced"
    }
  ];

  // Enhanced loading state with better UX
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="relative">
              <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
              <div className="absolute inset-0 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <p className="text-xl text-gray-300 font-light mb-2">Loading Zion Tech Group...</p>
            <p className="text-sm text-cyan-400">Preparing the future of technology</p>
            
            {/* Loading progress indicator */}
            <div className="mt-6 w-48 mx-auto bg-gray-700 rounded-full h-1">
              <motion.div
                className="bg-cyan-400 h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main">
        {/* Enhanced Hero Section with Futuristic Background */}
        <section 
          id="hero-section"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Optimized Futuristic Animated Background */}
          <motion.div 
            className="absolute inset-0 -z-10"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
          >
            {/* Optimized Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
            
            {/* Performance-optimized floating shapes */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Subtle neon lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
          </motion.div>

          {/* AnimatePresence removed as per new_code, assuming animation is handled by IntersectionObserver */}
          {isVisible && (
            <motion.div 
              className="text-center max-w-6xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              exit={{ opacity: 0, y: -50 }}
            >
              <motion.div variants={fadeInUp}>
                <h1 
                  id="hero-heading"
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight"
                >
                  Zion Tech Group
                </h1>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                  Pioneering the future of technology with <span className="text-cyan-400 font-semibold">quantum computing</span>, <span className="text-purple-400 font-semibold">autonomous AI</span>, and <span className="text-pink-400 font-semibold">revolutionary solutions</span> that drive business transformation
                </p>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                variants={fadeInUp}
              >
                <button 
                  className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 relative overflow-hidden"
                  aria-label="Get started with Zion Tech Group services"
                  onClick={() => window.location.href = '/get-started'}
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group"
                  aria-label="Learn more about Zion Tech Group"
                  onClick={() => window.location.href = '/about'}
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Enhanced Stats Section */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                variants={fadeInUp}
              >
                {[
                  { label: "AI Solutions", value: "500+", icon: Brain },
                  { label: "Quantum Services", value: "50+", icon: Atom },
                  { label: "Global Clients", value: "1000+", icon: Globe },
                  { label: "Success Rate", value: "99.9%", icon: Award }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </section>

        {/* Enhanced Featured Services Section */}
        {/* isIntersecting && ( // This line was removed */}
          <Suspense fallback={
            <div className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Services</h2>
                  <p className="text-gray-400 text-lg">Loading our cutting-edge solutions...</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-64 bg-gray-800 rounded-xl"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <section className="py-20 px-4 relative">
              <div className="max-w-6xl mx-auto">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Featured Services
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Discover our most innovative and in-demand technology solutions
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="relative group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Service Badge */}
                      {service.badge && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg">
                            {service.badge}
                          </span>
                        </div>
                      )}

                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-6 h-full group-hover:border-cyan-400/50 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{service.price}</div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                          Learn More
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </Suspense>
        {/* ) // This line was removed */}

        {/* Enhanced Trust Indicators */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-400">
                Join thousands of companies transforming their business with Zion Tech Group
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Fortune 500", count: "150+", icon: Building },
                { name: "Startups", count: "2000+", icon: Rocket },
                { name: "Enterprise", count: "500+", icon: Users },
                { name: "Global Reach", count: "45+", icon: Globe }
              ].map((stat, index) => (
                <motion.div
                  key={stat.name}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.count}</div>
                  <div className="text-gray-400 text-sm">{stat.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lazy Loaded Testimonials */}
        <Suspense fallback={
          <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-800 rounded mb-4 w-1/3 mx-auto"></div>
                <div className="h-4 bg-gray-800 rounded mb-2 w-1/2 mx-auto"></div>
                <div className="h-4 bg-gray-800 rounded w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
        }>
          <TestimonialSection />
        </Suspense>
      </main>
    </Layout>
  );
};

export default EnhancedHomepage2026;