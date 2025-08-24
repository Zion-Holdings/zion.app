
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-zion-cyan" />
              <span className="text-zion-cyan text-sm font-medium">Revolutionary AI-Powered Tech Marketplace</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <GradientHeading className="text-5xl md:text-7xl mb-6">
              The Future of Tech
              <br />
              <span className="text-white">Starts Here</span>
            </GradientHeading>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              Transform your business with cutting-edge AI, cloud solutions, and digital innovation. 
              We&apos;re your strategic partner for the future.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              From startups to enterprises, we&apos;ve helped 500+ companies scale and succeed.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/talent">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-lg px-8 py-4">
                Find Talent
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>10,000+ Verified Providers</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-purple" />
              <span>Global Network</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating trust indicator card */}
        <motion.div 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
          variants={floatingCardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-zion-blue/80 backdrop-blur-sm border border-zion-blue-light/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">AI-Powered Matching</h4>
                <p className="text-zion-slate-light text-sm">95% accuracy rate</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zion-slate-light">Response Time</span>
                <span className="text-white font-medium">&lt; 2 hours</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zion-slate-light">Success Rate</span>
                <span className="text-white font-medium">98%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
