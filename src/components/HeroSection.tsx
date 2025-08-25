import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap, Shield, Globe, Cpu, Brain, Star, CheckCircle } from "lucide-react";

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
    hidden: { y: 30, opacity: 0 },
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
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { icon: Users, label: "10K+ Talents", value: "Verified", color: "text-zion-cyan" },
    { icon: Zap, label: "AI-Powered", value: "Matching", color: "text-zion-purple" },
    { icon: Shield, label: "Enterprise", value: "Security", color: "text-green-400" },
    { icon: Globe, label: "Global", value: "Reach", color: "text-blue-400" }
  ];

  const features = [
    { icon: Brain, text: "AI-Powered Matching", color: "from-purple-500 to-pink-500" },
    { icon: Cpu, text: "Micro SAAS Solutions", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, text: "Enterprise Security", color: "from-green-500 to-emerald-500" }
  ];

  const socialProof = [
    { text: "Trusted by 500+ companies worldwide", icon: CheckCircle },
    { text: "98% client satisfaction rate", icon: Star },
    { text: "24/7 expert support available", icon: Shield }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center" role="banner" aria-label="Hero Section">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60 blur-sm"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50 blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70 blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-zion-cyan-light opacity-30 blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/6 w-3 h-3 rounded-full bg-zion-purple-light opacity-50 blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Floating Stats Cards */}
      <motion.div 
        className="absolute top-1/4 right-1/6 hidden lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-3 text-white">
            <Users className="w-5 h-5 text-zion-cyan" />
            <div>
              <div className="text-sm font-medium">10K+ Talents</div>
              <div className="text-xs text-zion-slate-light">Verified & Ready</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-1/6 hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-3 text-white">
            <Zap className="w-5 h-5 text-zion-purple" />
            <div>
              <div className="text-sm font-medium">AI-Powered</div>
              <div className="text-xs text-zion-slate-light">Smart Matching</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6 shadow-lg">
              <Sparkles className="w-5 h-5 text-zion-cyan animate-pulse" />
              <span className="text-sm text-white font-medium">AI-Powered Tech Marketplace</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue-light bg-clip-text text-transparent">
                Tech is Here
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI solutions, connect with top tech talent, and access innovative micro SAAS services 
              that transform your business operations and drive digital transformation.
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {socialProof.map((proof, index) => {
                const IconComponent = proof.icon;
                return (
                  <div
                    key={proof.text}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 text-zion-slate-light"
                  >
                    <IconComponent className="w-4 h-4 text-zion-cyan" />
                    <span className="text-sm font-medium">{proof.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.text}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                    <span className="text-sm text-white font-medium">{feature.text}</span>
                  </div>
 );
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-lg py-6 px-8 shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 rounded-xl"
              size="lg"
              asChild
            >
              <Link to="/signup" role="button" aria-label="Get Started Today">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Link 
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 backdrop-blur-md bg-white/5"
            >
              Explore Marketplace
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light text-sm">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${stat.color} rounded-full animate-pulse`} />
                    <span>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Floating Action Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50 lg:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button 
          asChild
          className="rounded-full w-16 h-16 p-0 bg-gradient-to-r from-zion-cyan to-zion-purple shadow-2xl hover:shadow-zion-cyan/50 transition-all duration-300"
        >
          <Link to="/marketplace" aria-label="Browse Marketplace">
            <ArrowRight className="w-7 h-7" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}