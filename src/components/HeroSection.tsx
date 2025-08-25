
import React from 'react';
import { motion } from 'framer-motion';
import { Building, ArrowRight, Check, Zap, Globe, Shield, Cpu, Rocket } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Advanced Quantum Background */}
      <div className="absolute inset-0">
        {/* Quantum Energy Fields */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 221, 210, 0.15) 0%, transparent 70%)',
              border: '1px solid rgba(34, 221, 210, 0.3)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.25, 0.1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Neural Network Grid */}
        <div className="absolute inset-0 cyber-grid opacity-10" />
        
        {/* Floating Quantum Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-zion-cyan"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="holographic-text-strong">Zion Tech Group</span>
            <br />
            <span className="text-white">Quantum Innovation</span>
            <br />
            <span className="text-gradient-primary">Future Technology</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Pioneering the future with cutting-edge{' '}
            <span className="text-zion-cyan font-semibold">AI solutions</span>,{' '}
            <span className="text-zion-purple font-semibold">quantum computing</span>, and{' '}
            <span className="text-zion-blue font-semibold">digital transformation</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-neon-strong"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-zion-cyan text-zion-cyan hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-neon"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-zion-cyan"
                initial={{ y: '100%' }}
                whileHover={{ y: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-zion-green" />
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-blue" />
              <span>Secure & Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-zion-purple" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              <span>Lightning Fast</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Feature Cards */}
        <div className="absolute inset-0 pointer-events-none">
          {/* AI Services Card */}
          <motion.div
            className="absolute top-1/4 right-10 w-64 p-6 glass-morphism rounded-2xl"
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '0s' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse" />
              <h3 className="text-zion-cyan font-semibold">AI Services</h3>
            </div>
            <p className="text-sm text-zion-slate-light">
              Machine Learning, NLP, Computer Vision, and Predictive Analytics
            </p>
          </motion.div>

          {/* Quantum Computing Card */}
          <motion.div
            className="absolute bottom-1/4 left-10 w-64 p-6 glass-morphism rounded-2xl"
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '2s' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-zion-purple rounded-full animate-pulse" />
              <h3 className="text-zion-purple font-semibold">Quantum Solutions</h3>
            </div>
            <p className="text-sm text-zion-slate-light">
              Quantum algorithms, optimization, and cryptography solutions
            </p>
          </motion.div>

          {/* Digital Transformation Card */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-64 p-6 glass-morphism rounded-2xl"
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '4s' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-zion-blue rounded-full animate-pulse" />
              <h3 className="text-zion-blue font-semibold">Digital Innovation</h3>
            </div>
            <p className="text-sm text-zion-slate-light">
              Cloud migration, DevOps, and modern architecture design
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Quantum Energy Waves */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 221, 210, 0.8)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,60 Q300,30 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,60 Q300,30 600,60 T1200,60 L1200,120 L0,120 Z",
                "M0,60 Q300,90 600,60 T1200,60 L1200,120 L0,120 Z",
                "M0,60 Q300,30 600,60 T1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </section>
  );
};
