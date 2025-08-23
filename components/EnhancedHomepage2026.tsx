import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, Loader2,
  Zap, Globe, Cpu, Eye, Atom
} from 'lucide-react';

const EnhancedHomepage2026: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);

    // Auto-rotate featured services
    const serviceTimer = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(serviceTimer);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" as const }
    }
  };

  const featuredServices = [
    {
      title: "Quantum AI Content Factory",
      description: "Generate unlimited high-quality content with quantum AI processing",
      icon: Brain,
      color: "from-purple-600 to-pink-700",
      price: "$1,299/month",
      features: ["Quantum AI content generation", "Unlimited content creation", "Multi-format support"]
    },
    {
      title: "Autonomous Customer Success Platform",
      description: "AI-driven customer success automation that never sleeps",
      icon: Shield,
      color: "from-cyan-600 to-blue-700",
      price: "$899/month",
      features: ["Autonomous monitoring", "Predictive churn prevention", "AI engagement scoring"]
    },
    {
      title: "Quantum Financial Forecasting Engine",
      description: "Predict market movements with quantum computing precision",
      icon: Zap,
      color: "from-emerald-600 to-teal-700",
      price: "$2,499/month",
      features: ["Quantum market analysis", "Real-time forecasting", "Portfolio optimization"]
    },
    {
      title: "Autonomous DevOps Orchestrator",
      description: "Self-managing infrastructure that scales automatically",
      icon: Cpu,
      color: "from-orange-600 to-red-700",
      price: "$1,599/month",
      features: ["Autonomous management", "Self-healing systems", "Predictive optimization"]
    },
    {
      title: "Quantum Cybersecurity Monitor",
      description: "Future-proof security with quantum-resistant encryption",
      icon: Eye,
      color: "from-red-600 to-pink-700",
      price: "$1,799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
    },
    {
      title: "Autonomous Marketing AI",
      description: "Marketing that runs itself with intelligent automation",
      icon: Globe,
      color: "from-blue-600 to-indigo-700",
      price: "$1,099/month",
      features: ["Autonomous campaigns", "AI optimization", "Predictive targeting"]
    }
  ];

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="relative">
              <Loader2 className="w-20 h-20 text-cyan-400 animate-spin mx-auto mb-6" />
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
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Futuristic Animated Background */}
          <motion.div 
            className="absolute inset-0 -z-10"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
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
                    Leading the <span className="text-cyan-400 font-semibold">quantum revolution</span> with <span className="text-purple-400 font-semibold">autonomous AI</span>, <span className="text-pink-400 font-semibold">consciousness technology</span>, and <span className="text-emerald-400 font-semibold">revolutionary micro SAAS solutions</span> that transform businesses worldwide
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
                  variants={fadeInUp}
                >
                  <button 
                    className="group px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 relative overflow-hidden"
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
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Learn More</span>
                  </button>
                </motion.div>

                {/* Enhanced Social Proof with Neon Effects */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group">
                    <div className="relative">
                      <Users className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      <div className="absolute inset-0 w-10 h-10 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-400/30 transition-all"></div>
                    </div>
                    <span className="text-xl font-bold text-white">500+ Clients</span>
                    <span className="text-sm text-gray-500">Worldwide</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 group">
                    <div className="relative">
                      <Award className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      <div className="absolute inset-0 w-10 h-10 bg-blue-400/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all"></div>
                    </div>
                    <span className="text-xl font-bold text-white">Industry Leader</span>
                    <span className="text-sm text-gray-500">2026</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 group">
                    <div className="relative">
                      <TrendingUp className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      <div className="absolute inset-0 w-10 h-10 bg-purple-400/20 rounded-full blur-lg group-hover:bg-purple-400/30 transition-all"></div>
                    </div>
                    <span className="text-xl font-bold text-white">99.9% Uptime</span>
                    <span className="text-sm text-gray-500">Guaranteed</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Enhanced Statistics Section with Neon Effects */}
        <motion.section 
          className="py-24 px-4 bg-gradient-to-b from-gray-900/80 via-purple-900/40 to-gray-800/80 relative"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Brain, title: "1500+ Services", description: "Revolutionary technology solutions", color: "cyan", gradient: "from-cyan-500 to-blue-500" },
                { icon: Shield, title: "99.9% Satisfaction", description: "Exceptional client success rate", color: "blue", gradient: "from-blue-500 to-purple-500" },
                { icon: Rocket, title: "24/7/365 Support", description: "Round-the-clock global assistance", color: "purple", gradient: "from-purple-500 to-pink-500" },
                { icon: Star, title: "200+ Industries", description: "Cross-sector quantum expertise", color: "emerald", gradient: "from-emerald-500 to-teal-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="text-center p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="relative inline-block mb-6">
                      <stat.icon className={`w-16 h-16 mx-auto text-${stat.color}-400 group-hover:text-${stat.color}-300 transition-colors`} />
                      <div className={`absolute inset-0 w-16 h-16 bg-${stat.color}-400/20 rounded-full blur-xl group-hover:bg-${stat.color}-400/30 transition-all`}></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{stat.title}</h3>
                    <p className="text-gray-400 text-lg">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Featured Services Showcase */}
        <motion.section 
          className="py-24 px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Revolutionary Services
            </motion.h2>
            
            {/* Featured Service Showcase */}
            <div className="mb-16">
              <motion.div
                className="text-center p-12 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className={`p-6 rounded-2xl bg-gradient-to-r ${featuredServices[currentServiceIndex].color} shadow-2xl`}>
                      {React.createElement(featuredServices[currentServiceIndex].icon, { className: "w-16 h-16 text-white" })}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-6">{featuredServices[currentServiceIndex].title}</h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{featuredServices[currentServiceIndex].description}</p>
                  
                  <div className="text-3xl font-bold text-cyan-400 mb-8">{featuredServices[currentServiceIndex].price}</div>
                  
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {featuredServices[currentServiceIndex].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 text-sm border border-gray-600/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    onClick={() => window.location.href = '/services'}
                  >
                    Explore All Services
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Service Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Quantum AI & Consciousness",
                  description: "Revolutionary AI consciousness and quantum intelligence solutions",
                  features: ["Quantum AI", "Consciousness Technology", "Emotional Intelligence"],
                  icon: Brain,
                  color: "cyan",
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Autonomous Systems",
                  description: "Self-managing intelligent systems that operate independently",
                  features: ["Autonomous AI", "Self-Healing Infrastructure", "Predictive Systems"],
                  icon: Atom,
                  color: "purple",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Micro SAAS Solutions",
                  description: "Innovative business solutions that scale from startup to enterprise",
                  features: ["Business Automation", "Customer Success", "Marketing AI"],
                  icon: Rocket,
                  color: "blue",
                  gradient: "from-blue-500 to-cyan-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="relative inline-block mb-6">
                      <service.icon className={`w-14 h-14 mb-4 text-${service.color}-400 group-hover:text-${service.color}-300 transition-colors`} />
                      <div className={`absolute inset-0 w-14 h-14 bg-${service.color}-400/20 rounded-full blur-lg group-hover:bg-${service.color}-400/30 transition-all`}></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced CTA Section with Futuristic Design */}
        <motion.section 
          className="py-24 px-4 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40 relative overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-10 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-300 mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join <span className="text-cyan-400 font-semibold">thousands of companies</span> already transforming their businesses with our revolutionary <span className="text-purple-400 font-semibold">quantum AI</span>, <span className="text-pink-400 font-semibold">consciousness technology</span>, and <span className="text-emerald-400 font-semibold">autonomous solutions</span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className="px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 group relative overflow-hidden"
                onClick={() => window.location.href = '/contact'}
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold text-xl rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group"
                onClick={() => window.location.href = '/services'}
              >
                <span className="group-hover:scale-105 transition-transform inline-block">Explore Services</span>
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default EnhancedHomepage2026;