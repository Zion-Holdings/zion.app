import React, { useState, useEffect, useCallback, Suspense } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, Loader2,
  Zap, Globe, Cpu, Eye, Atom
} from 'lucide-react';

// Lazy load heavy components
const LazyServiceCard = React.lazy(() => import('./ServiceCard'));
const LazyTestimonialSection = React.lazy(() => import('./TestimonialSection'));

const EnhancedHomepage2026: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Memoized service rotation to prevent unnecessary re-renders
  const rotateServices = useCallback(() => {
    setCurrentServiceIndex((prev) => (prev + 1) % 6);
  }, []);

  useEffect(() => {
    // Simulate content loading with better performance
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300); // Reduced from 500ms

    // Auto-rotate featured services with cleanup
    const serviceTimer = setInterval(rotateServices, 5000); // Increased from 4000ms for better UX

    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('hero-section');
    if (heroSection) observer.observe(heroSection);

    return () => {
      clearTimeout(timer);
      clearInterval(serviceTimer);
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [rotateServices]);

  // Optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 }, // Reduced from 60 for smoother animation
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" } // Reduced from 0.6
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08, // Reduced from 0.1 for faster loading
        delayChildren: 0.1 // Reduced from 0.2
      }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.9 }, // Increased from 0.8 for better visual
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" as const } // Reduced from 1.5
    }
  };

  const featuredServices = [
    {
      id: 'quantum-ai-orchestration',
      title: "Quantum AI Orchestration Platform",
      description: "Revolutionary AI orchestration leveraging quantum computing for unprecedented performance",
      icon: Brain,
      color: "from-purple-600 to-indigo-700",
      price: "$4,999/month",
      features: ["Quantum AI coordination", "Zero-latency switching", "Multi-model management"],
      ariaLabel: "Learn more about Quantum AI Orchestration Platform"
    },
    {
      id: 'autonomous-cybersecurity',
      title: "Autonomous Cybersecurity Orchestrator",
      description: "AI-powered cybersecurity automation with autonomous threat response",
      icon: Shield,
      color: "from-red-600 to-pink-700",
      price: "$1,299/month",
      features: ["Autonomous threat detection", "Real-time response", "Zero-trust architecture"],
      ariaLabel: "Learn more about Autonomous Cybersecurity Orchestrator"
    },
    {
      id: 'quantum-financial-modeling',
      title: "Quantum Financial Modeling Suite",
      description: "Quantum-powered financial modeling for superior risk assessment and optimization",
      icon: Zap,
      color: "from-yellow-600 to-orange-700",
      price: "$2,999/month",
      features: ["Quantum Monte Carlo", "Portfolio optimization", "Risk assessment"],
      ariaLabel: "Learn more about Quantum Financial Modeling Suite"
    },
    {
      id: 'metaverse-commerce',
      title: "Metaverse Commerce Platform",
      description: "Complete e-commerce solution for virtual worlds and digital asset management",
      icon: Globe,
      color: "from-purple-600 to-indigo-700",
      price: "$799/month",
      features: ["3D storefronts", "NFT management", "Virtual currency"],
      ariaLabel: "Learn more about Metaverse Commerce Platform"
    },
    {
      id: 'autonomous-devops',
      title: "Autonomous DevOps Orchestrator",
      description: "AI-powered DevOps automation with intelligent infrastructure management",
      icon: Cpu,
      color: "from-green-600 to-emerald-700",
      price: "$1,199/month",
      features: ["Autonomous CI/CD", "Self-healing infrastructure", "Predictive optimization"],
      ariaLabel: "Learn more about Autonomous DevOps Orchestrator"
    },
    {
      id: 'quantum-computer-vision',
      title: "Quantum Computer Vision Suite",
      description: "Quantum-powered computer vision for unprecedented image analysis accuracy",
      icon: Eye,
      color: "from-cyan-600 to-blue-700",
      price: "$3,499/month",
      features: ["Quantum image processing", "Real-time analysis", "3D vision"],
      ariaLabel: "Learn more about Quantum Computer Vision Suite"
    }
  ];

  // Loading state with better accessibility
  if (isLoading) {
    return (
      <Layout>
        <div 
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
          role="status"
          aria-label="Loading Zion Tech Group website"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="relative">
              <Loader2 
                className="w-20 h-20 text-cyan-400 animate-spin mx-auto mb-6" 
                aria-hidden="true"
              />
              <div className="absolute inset-0 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <p className="text-2xl text-gray-300 font-light">Loading Zion Tech Group...</p>
            <p className="text-sm text-cyan-400 mt-2">Preparing the future of technology</p>
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
          {/* Futuristic Animated Background */}
          <motion.div 
            className="absolute inset-0 -z-10"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            aria-hidden="true"
          >
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
            
            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            
            {/* Neon Lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
          </motion.div>

          <AnimatePresence>
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
                    className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight"
                  >
                    Zion Tech Group
                  </h1>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
                    Pioneering the future of technology with <span className="text-cyan-400 font-semibold">quantum computing</span>, <span className="text-purple-400 font-semibold">autonomous AI</span>, and <span className="text-pink-400 font-semibold">revolutionary solutions</span> that drive business transformation
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
                  variants={fadeInUp}
                >
                  <button 
                    className="group px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-500 relative overflow-hidden"
                    aria-label="Get started with Zion Tech Group services"
                    onClick={() => window.location.href = '/get-started'}
                  >
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button 
                    className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold text-xl rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group"
                    aria-label="Learn more about Zion Tech Group"
                    onClick={() => window.location.href = '/about'}
                  >
                    <span>Learn More</span>
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                </motion.div>

                {/* Enhanced Stats Section */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                  variants={fadeInUp}
                >
                  {[
                    { icon: Brain, label: "50+ AI Services", value: "50+", color: "text-purple-400" },
                    { icon: Atom, label: "25+ Quantum Solutions", value: "25+", color: "text-green-400" },
                    { icon: Rocket, label: "100+ Micro SAAS", value: "100+", color: "text-orange-400" },
                    { icon: Award, label: "99.9% Success Rate", value: "99.9%", color: "text-cyan-400" }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                      style={{ opacity: 0, transform: 'scale(0.8)' }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className={stat.color}>
                          <stat.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                  className="flex flex-col items-center gap-2"
                  variants={fadeInUp}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-gray-400 text-sm">Scroll to explore</span>
                  <div className="w-6 h-6 text-cyan-400 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Featured Services Section with Lazy Loading */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="services-heading" className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Featured Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative solutions that are transforming businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Suspense fallback={
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 animate-pulse">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4"></div>
                      <div className="h-6 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded mb-4"></div>
                    </div>
                  }>
                    <LazyServiceCard service={service} />
                  </Suspense>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lazy Loaded Testimonials */}
        <Suspense fallback={
          <div className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        }>
          <LazyTestimonialSection />
        </Suspense>
      </main>

      {/* Enhanced Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 space-y-4">
        <motion.button 
          className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transform rotate-[-90deg]" aria-hidden="true">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </motion.button>
        
        <motion.a 
          href="tel:+1 302 464 0950"
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7 }}
          aria-label="Call Zion Tech Group at +1 302 464 0950"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
          </svg>
        </motion.a>
      </div>
    </Layout>
  );
};

export default EnhancedHomepage2026;