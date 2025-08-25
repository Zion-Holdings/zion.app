
<<<<<<< HEAD:src/backup/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Zap, Sparkles } from 'lucide-react';
export default function HeroSection() {
>>>>>>> premium-enhancements-2025:src/components/HeroSection.tsx

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
<<<<<<< HEAD:src/backup/HeroSection.tsx
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
=======
>>>>>>> premium-enhancements-2025:src/components/HeroSection.tsx
      }
    }
  };

  return (
<<<<<<< HEAD:src/backup/HeroSection.tsx
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20 animate-pulse"></div>
      
      {/* Enhanced floating particles with better positioning */}
      <div className="absolute inset-0">
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
          className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
        />
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20"></div>
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced title with better typography */}
        <motion.div variants={itemVariants} className="mb-6">
          <GradientHeading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title') || "The Future of Tech is Here"}
          </GradientHeading>
        </motion.div>
=======
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-zion-cyan opacity-30"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ animationDelay: '0.5s' }}
      />
>>>>>>> premium-enhancements-2025:src/components/HeroSection.tsx

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
<<<<<<< HEAD:src/backup/HeroSection.tsx
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"
            asChild
=======
          {/* Enhanced title with better typography */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              The Future of Tech is Here
            </h1>
          </motion.div>

          {/* Enhanced subtitle with better spacing */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover top AI and tech talent, services, and equipment in one place. Powered by cutting-edge AI matching technology.
            </p>
          </motion.div>

          {/* Enhanced CTA buttons with better mobile layout */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto"
>>>>>>> premium-enhancements-2025:src/components/HeroSection.tsx
          >
            <Button
              className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              size="lg"
              asChild
            >
              <Link
                to="/signup"
                role="button"
                aria-label="Get Started"
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Link
<<<<<<< HEAD:src/backup/HeroSection.tsx
              to="/signup"
              role="button"
              aria-label={t('auth.signup') || "Get Started"}
              tabIndex={0}
              data-testid="hero-signup-btn"
              className="flex items-center gap-2"
=======
              id="browse-marketplace"
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
>>>>>>> premium-enhancements-2025:src/components/HeroSection.tsx
            >
              <Globe className="w-5 h-5" />
              Browse Marketplace
              <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>

<<<<<<< HEAD:src/backup/HeroSection.tsx
        {/* Enhanced trust indicators */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span>Global Network</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>
=======
          {/* Enhanced trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
              <span>Global Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>Secure Platform</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
>>>>>>> premium-enhancements-2025:src/components/HeroSection.tsx
    </section>
  );
}
