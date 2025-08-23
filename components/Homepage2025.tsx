import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, Loader2, CheckCircle, Zap, Globe, Target, Lightbulb } from 'lucide-react';

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Optimized loading experience
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300); // Reduced from 500ms for better UX

    return () => clearTimeout(timer);
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

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
            <p className="text-xl text-gray-300">Loading Zion Tech Group...</p>
            <p className="text-sm text-gray-500 mt-2">Preparing your future...</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements */}
          <motion.div 
            className="absolute inset-0 -z-10"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
          >
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
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
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                  >
                    Zion Tech Group
                  </h1>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Pioneering the future of technology with <span className="text-cyan-400 font-semibold">innovative solutions</span> that drive business transformation and unlock human potential
                  </p>
                </motion.div>

                {/* Enhanced Value Proposition */}
                <motion.div 
                  className="mb-8 max-w-4xl mx-auto"
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>500+ Enterprise Solutions</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>99.9% Uptime Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>24/7 Expert Support</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                  variants={fadeInUp}
                >
                  <button 
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    aria-label="Get started with Zion Tech Group services"
                    onClick={() => window.location.href = '/get-started'}
                  >
                    <Zap className="w-5 h-5 group-hover:animate-pulse" />
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button 
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    aria-label="Learn more about Zion Tech Group"
                    onClick={() => window.location.href = '/about'}
                  >
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </button>
                </motion.div>

                {/* Enhanced Social Proof */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <Users className="w-10 h-10 text-cyan-400" />
                    <span className="text-xl font-semibold">500+ Clients</span>
                    <span className="text-sm text-gray-500">Fortune 500 & Startups</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <Award className="w-10 h-10 text-blue-400" />
                    <span className="text-xl font-semibold">Industry Leader</span>
                    <span className="text-sm text-gray-500">2024 Tech Awards</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <TrendingUp className="w-10 h-10 text-purple-400" />
                    <span className="text-xl font-semibold">99.9% Uptime</span>
                    <span className="text-sm text-gray-500">SLA Guaranteed</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Enhanced Statistics Section */}
        <motion.section 
          className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Brain, title: "500+ Services", description: "Comprehensive technology solutions", color: "cyan", highlight: "AI to Quantum" },
                { icon: Shield, title: "98% Satisfaction", description: "Client success rate", color: "blue", highlight: "Proven Results" },
                { icon: Rocket, title: "24/7 Support", description: "Round-the-clock assistance", color: "purple", highlight: "Always Available" },
                { icon: Star, title: "50+ Industries", description: "Cross-sector expertise", color: "emerald", highlight: "Global Reach" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="text-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 text-${stat.color}-400 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-gray-400 mb-2">{stat.description}</p>
                  <span className={`text-sm text-${stat.color}-400 font-semibold`}>{stat.highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* New: Core Capabilities Section */}
        <motion.section 
          className="py-20 px-4 bg-gray-900"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Core Capabilities
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Artificial Intelligence",
                  description: "Advanced AI solutions including machine learning, natural language processing, and computer vision",
                  features: ["ML Models", "NLP", "Computer Vision", "AI Ethics"],
                  color: "cyan"
                },
                {
                  icon: Zap,
                  title: "Quantum Computing",
                  description: "Next-generation quantum solutions for complex computational challenges",
                  features: ["Quantum Algorithms", "Quantum Security", "Hybrid Systems", "Optimization"],
                  color: "blue"
                },
                {
                  icon: Rocket,
                  title: "Space Technology",
                  description: "Innovative space tech for terrestrial and extraterrestrial applications",
                  features: ["Satellite Systems", "Space Mining", "Navigation", "Communication"],
                  color: "purple"
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description: "Enterprise-grade security solutions for modern threats",
                  features: ["Zero Trust", "Threat Detection", "Compliance", "Incident Response"],
                  color: "emerald"
                },
                {
                  icon: Globe,
                  title: "Cloud Solutions",
                  description: "Scalable cloud infrastructure and platform services",
                  features: ["Multi-Cloud", "Serverless", "DevOps", "Monitoring"],
                  color: "orange"
                },
                {
                  icon: Target,
                  title: "Digital Transformation",
                  description: "End-to-end digital transformation consulting and implementation",
                  features: ["Strategy", "Implementation", "Change Management", "Training"],
                  color: "pink"
                }
              ].map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <capability.icon className={`w-12 h-12 mb-4 text-${capability.color}-400 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* New: Success Stories Section */}
        <motion.section 
          className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Success Stories
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  company: "TechCorp Inc.",
                  industry: "FinTech",
                  result: "300% ROI in 12 months",
                  description: "Implemented AI-powered fraud detection system",
                  logo: "🏦"
                },
                {
                  company: "HealthTech Solutions",
                  industry: "Healthcare",
                  result: "40% cost reduction",
                  description: "Quantum-optimized drug discovery platform",
                  logo: "🏥"
                },
                {
                  company: "Manufacturing Plus",
                  industry: "Manufacturing",
                  result: "60% efficiency increase",
                  description: "AI-driven predictive maintenance system",
                  logo: "🏭"
                }
              ].map((story, index) => (
                <motion.div
                  key={story.company}
                  className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{story.logo}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{story.industry}</p>
                  <p className="text-gray-400 text-sm mb-4">{story.description}</p>
                  <div className="text-2xl font-bold text-emerald-400">{story.result}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* New: Call-to-Action Section */}
        <motion.section 
          className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join 500+ companies already leveraging Zion Tech Group's cutting-edge solutions to stay ahead of the competition.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button 
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                <Lightbulb className="w-6 h-6 group-hover:animate-pulse" />
                Start Your Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                onClick={() => window.location.href = '/demo'}
              >
                <Play className="w-5 h-5" />
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default Homepage2025;