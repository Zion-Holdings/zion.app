
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
=======
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.3,
        delayChildren: 0.2
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

<<<<<<< HEAD
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
=======
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[80vh] flex items-center">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated floating particles with enhanced effects */}
      <div className="absolute inset-0">
=======
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark opacity-90"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20"></div>
      
      {/* Enhanced animated floating particles */}
      <motion.div className="absolute inset-0" variants={containerVariants} initial="hidden" animate="visible">
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
<<<<<<< HEAD
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-70"
          variants={particleVariants}
          animate="animate"
=======
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60"
          variants={floatingVariants}
          animate="float"
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
<<<<<<< HEAD
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-50"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            The Future of{' '}
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
              Tech Talent
            </span>
            {' '}is Here
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Connect with world-class developers, designers, and tech professionals. 
            Build your dream team or find your next opportunity in the Zion Tech Group marketplace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <Button
=======
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
        />
      </motion.div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">AI-Powered Marketplace</span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
              {t('home.hero_title')}
            </GradientHeading>
          </motion.div>

          {/* Enhanced subtitle */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle')}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">10K+</div>
              <div className="text-zion-slate-light">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">500+</div>
              <div className="text-zion-slate-light">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">99%</div>
              <div className="text-zion-slate-light">Success Rate</div>
            </div>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
              asChild
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
<<<<<<< HEAD
              <Link to="/marketplace">
                Explore Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-zion-slate-light">Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-zion-purple-light" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-zion-slate-light">Top Talent</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-zion-cyan-light" />
              </div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-zion-slate-light">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-zion-purple" />
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 pt-8 border-t border-zion-blue-light"
            variants={itemVariants}
          >
            <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-zion-slate-light font-semibold">Microsoft</div>
              <div className="text-zion-slate-light font-semibold">Google</div>
              <div className="text-zion-slate-light font-semibold">Amazon</div>
              <div className="text-zion-slate-light font-semibold">Meta</div>
              <div className="text-zion-slate-light font-semibold">Netflix</div>
            </div>
=======
              <Link
                to="/signup"
                role="button"
                aria-label={t('auth.signup')}
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                {t('auth.signup')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Zap className="w-5 h-5" />
              {t('home.browse_marketplace')}
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="text-sm text-zion-slate-light opacity-80">
            Join thousands of developers, entrepreneurs, and AI enthusiasts
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
