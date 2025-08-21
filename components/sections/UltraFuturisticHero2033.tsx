import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Cpu, Target, Microscope, 
  Zap, Shield, Sparkles, ArrowRight, Star, 
  CheckCircle, TrendingUp, Globe, Layers, DollarSign
} from 'lucide-react';
import Button from '../ui/Button';

const UltraFuturisticHero2033: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full opacity-60"
      />
      <motion.div
        variants={pulseVariants}
        animate="pulse"
        className="absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full"
      />
      <motion.div
        variants={pulseVariants}
        animate="pulse"
        style={{ animationDelay: '1s' }}
        className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-cyan-500/30 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">🚀 2033 Technology Revolution</span>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Future
            </span>
            <br />
            <span className="text-white">Is Now</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the next generation of AI consciousness, quantum computing, and autonomous enterprise solutions. 
            We're not just building the future—we're living it.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-2xl shadow-cyan-500/25"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
            
            <Button
              href="/pricing"
              variant="outline"
              className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-lg font-semibold backdrop-blur-sm"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2"
              >
                600+
              </motion.div>
              <div className="text-gray-400 text-sm">Revolutionary Services</div>
            </div>
            
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
              >
                50+
              </motion.div>
              <div className="text-gray-400 text-sm">Technology Categories</div>
            </div>
            
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-purple-400 mb-2"
              >
                1000%
              </motion.div>
              <div className="text-gray-400 text-sm">Growth Rate</div>
            </div>
            
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-green-400 mb-2"
              >
                24/7
              </motion.div>
              <div className="text-gray-400 text-sm">AI Support</div>
            </div>
          </motion.div>
          
          {/* Technology Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 mt-16"
          >
            <div className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Brain className="w-8 h-8" />
              <span className="text-sm font-medium">AI Consciousness</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
              <Atom className="w-8 h-8" />
              <span className="text-sm font-medium">Quantum Computing</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
              <Cpu className="w-8 h-8" />
              <span className="text-sm font-medium">Autonomous IT</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
              <Target className="w-8 h-8" />
              <span className="text-sm font-medium">Micro SAAS</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors">
              <Microscope className="w-8 h-8" />
              <span className="text-sm font-medium">Research & Development</span>
            </div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 expert support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UltraFuturisticHero2033;