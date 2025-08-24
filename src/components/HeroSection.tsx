
import { Button } from "./ui/button";
import { GradientHeading } from "./GradientHeading";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap, Star, Shield, Globe } from "lucide-react";

export function HeroSection() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const floatingCardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 1, duration: 0.8 }
    }
  };

  return (
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

      {/* Enhanced floating feature highlights */}
      <motion.div 
        className="absolute top-1/4 right-1/6 hidden lg:block"
        variants={floatingCardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 text-white">
            <Users className="w-5 h-5 text-zion-cyan" />
            <span className="text-sm font-medium">10K+ Talents</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-1/6 hidden lg:block"
        variants={floatingCardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 text-white">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
        </div>
      </motion.div>

      {/* New floating trust indicator */}
      <motion.div 
        className="absolute top-1/3 left-1/6 hidden xl:block"
        variants={floatingCardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 text-white">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">4.9/5 Rating</span>
          </div>
        </div>
      </motion.div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-zion-cyan" />
              <span className="text-sm text-white font-medium">AI-Powered Tech Marketplace</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
              Zion - The Tech & AI Marketplace
            </GradientHeading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals and cutting-edge technology solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105"
              size="lg"
              asChild
            >
              <Link
                href="/signup"
                role="button"
                aria-label="Sign Up"
                tabIndex={0}
                data-testid="hero-signup-btn"
              >
                Sign Up
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Link
              id="browse-marketplace"
              href="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              Browse Marketplace
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Secure & Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Global Network</span>
            </div>
          </motion.div>

          {/* New social proof section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 text-zion-slate-light text-xs"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>150+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>98% Success Rate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced floating CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 lg:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          asChild
          className="rounded-full w-14 h-14 p-0 bg-gradient-to-r from-zion-purple to-zion-cyan shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300 hover:scale-110"
        >
          <Link href="/marketplace" aria-label="Browse Marketplace">
            <ArrowRight className="w-6 h-6" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
