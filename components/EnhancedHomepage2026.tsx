import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Brain, Shield, Zap, Globe, Cpu, Eye, Loader2
} from 'lucide-react';

const EnhancedHomepage2026: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Optimized loading effect with reduced timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300); // Reduced from 500ms for better UX

    // Auto-rotate featured services with better performance
    const serviceTimer = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 5000); // Increased from 4000ms for better readability

    return () => {
      clearTimeout(timer);
      clearInterval(serviceTimer);
    };
  }, []);

  // Memoized animation variants for better performance
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
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
      features: ["Quantum AI coordination", "Zero-latency switching", "Multi-model management"]
    },
    {
      title: "Autonomous Cybersecurity Orchestrator",
      description: "AI-powered cybersecurity automation with autonomous threat response",
      icon: Shield,
      color: "from-red-600 to-pink-700",
      price: "$1,299/month",
      features: ["Autonomous threat detection", "Real-time response", "Zero-trust architecture"]
    },
    {
      title: "Quantum Financial Modeling Suite",
      description: "Quantum-powered financial modeling for superior risk assessment and optimization",
      icon: Zap,
      color: "from-yellow-600 to-orange-700",
      price: "$2,999/month",
      features: ["Quantum Monte Carlo", "Portfolio optimization", "Risk assessment"]
    },
    {
      title: "Metaverse Commerce Platform",
      description: "Complete e-commerce solution for virtual worlds and digital asset management",
      icon: Globe,
      color: "from-purple-600 to-indigo-700",
      price: "$799/month",
      features: ["3D storefronts", "NFT management", "Virtual currency"]
    },
    {
      title: "Autonomous DevOps Orchestrator",
      description: "AI-powered DevOps automation with intelligent infrastructure management",
      icon: Cpu,
      color: "from-green-600 to-emerald-700",
      price: "$1,199/month",
      features: ["Autonomous CI/CD", "Self-healing infrastructure", "Predictive optimization"]
    },
    {
      title: "Quantum Computer Vision Suite",
      description: "Quantum-powered computer vision for unprecedented image analysis accuracy",
      icon: Eye,
      color: "from-cyan-600 to-blue-700",
      price: "$3,499/month",
      features: ["Quantum image processing", "Real-time analysis", "3D vision"]
    }
  ];

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="relative">
              <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
              <div className="absolute inset-0 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <p className="text-xl text-gray-300 font-light">Loading Zion Tech Group...</p>
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
        {/* Enhanced Hero Section with Optimized Background */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Optimized Futuristic Background */}
          <motion.div 
            className="absolute inset-0 -z-10"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
          >
            {/* Simplified Grid Pattern for better performance */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            
            {/* Reduced number of floating shapes for better performance */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl"></div>
            
            {/* Simplified neon lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
          </motion.div>

          <AnimatePresence>
            {isVisible && (
              <motion.div 
                className="text-center max-w-6xl mx-auto"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                exit={{ opacity: 0, y: -30 }}
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

                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                  variants={fadeInUp}
                >
                  <button 
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden"
                    aria-label="Get started with Zion Tech Group services"
                    onClick={() => window.location.href = '/get-started'}
                  >
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button 
                    className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black group"
                    aria-label="Learn more about Zion Tech Group"
                    onClick={() => window.location.href = '/about'}
                  >
                    <span>Learn More</span>
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </motion.div>

                {/* Enhanced Stats Section */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
                  variants={fadeInUp}
                >
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-sm text-gray-400">AI Solutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">200+</div>
                    <div className="text-sm text-gray-400">Quantum Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">1000+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Enhanced Featured Services Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-cyan-400">Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most innovative and transformative technology solutions
              </p>
            </motion.div>

            {/* Enhanced Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    index === currentServiceIndex ? 'ring-2 ring-cyan-400 ring-opacity-50' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl h-full relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <service.icon className="w-12 h-12 text-white" />
                        <span className="text-white/80 text-sm font-medium">{service.price}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/90 text-sm mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-white/80 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of technology with Zion Tech Group's cutting-edge solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Journey
                </button>
                <button 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                  onClick={() => window.location.href = '/demo'}
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default EnhancedHomepage2026;