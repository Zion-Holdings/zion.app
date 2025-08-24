import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3,
  Globe,
  Smartphone,
  TrendingUp,
  Briefcase,
  Sparkles as SparklesIcon,
  Play,
  Star,
  Users,
  Zap
} from "lucide-react";

const FloatingIcon: React.FC<{ icon: React.ReactNode; delay: number; position: { x: number; y: number } }> = ({ 
  icon, 
  delay, 
  position 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 1 }}
    className="absolute text-zion-cyan/30"
    style={{ left: `${position.x}%`, top: `${position.y}%` }}
  >
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        delay 
      }}
      className="text-2xl"
    >
      {icon}
    </motion.div>
  </motion.div>
);

const AnimatedBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light" />
      
      {/* Animated mesh gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(140, 21, 233, 0.3) 0%, rgba(34, 221, 210, 0.2) 50%, rgba(46, 115, 234, 0.1) 100%)`
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-zion-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <FloatingIcon icon={<Brain />} delay={0} position={{ x: 10, y: 20 }} />
      <FloatingIcon icon={<Cloud />} delay={0.5} position={{ x: 85, y: 15 }} />
      <FloatingIcon icon={<Shield />} delay={1} position={{ x: 15, y: 80 }} />
      <FloatingIcon icon={<BarChart3 />} delay={1.5} position={{ x: 80, y: 75 }} />
      <FloatingIcon icon={<Globe />} delay={2} position={{ x: 50, y: 10 }} />
      <FloatingIcon icon={<Smartphone />} delay={2.5} position={{ x: 90, y: 60 }} />
      <FloatingIcon icon={<TrendingUp />} delay={3} position={{ x: 5, y: 60 }} />
      <FloatingIcon icon={<Briefcase />} delay={3.5} position={{ x: 70, y: 25 }} />
      <FloatingIcon icon={<SparklesIcon />} delay={4} position={{ x: 25, y: 85 }} />
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { label: "Services Available", value: "500+", icon: <Sparkles className="w-5 h-5" /> },
    { label: "Expert Providers", value: "200+", icon: <Users className="w-5 h-5" /> },
    { label: "Projects Completed", value: "1000+", icon: <Star className="w-5 h-5" /> },
    { label: "Response Time", value: "<2hrs", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
          className="text-center group"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="p-2 bg-zion-cyan/20 rounded-lg text-zion-cyan group-hover:bg-zion-cyan group-hover:text-white transition-all duration-300">
              {stat.icon}
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-zion-slate-light">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const CTAButtons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
    >
      <Button
        className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white text-lg py-6 px-8 rounded-xl font-bold shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 group"
        size="lg"
        asChild
      >
        <Link to="/signup">
          Get Started Now
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
      
      <Button
        variant="outline"
        className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8 rounded-xl font-bold transition-all duration-300 group"
        size="lg"
        asChild
      >
        <Link to="/comprehensive-services">
          Explore All Services
          <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </Button>
      
      <Button
        variant="ghost"
        className="text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 text-lg py-6 px-8 rounded-xl font-bold transition-all duration-300 group"
        size="lg"
      >
        <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        Watch Demo
      </Button>
    </motion.div>
  );
};

export const EnhancedHeroSection: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    "AI-Powered Solutions",
    "Cloud & DevOps Services", 
    "Cybersecurity Protection",
    "Data Analytics & BI",
    "Web & Mobile Development",
    "Digital Marketing",
    "IT Strategy Consulting",
    "Blockchain & Web3"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mr-4"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-zion-cyan text-lg font-medium">Zion Tech Group</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Tech Services
            </span>
            <br />
            <span className="text-white">is Here</span>
          </h1>
        </motion.div>

        {/* Animated feature text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <div className="text-2xl md:text-3xl text-zion-slate-light mb-4">
            Discover cutting-edge
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-zion-cyan"
            >
              {features[currentFeature]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Connect with verified technology experts and service providers. 
          From AI development to cybersecurity, cloud migration to blockchain solutions - 
          find the perfect partner for your next project.
        </motion.p>

        {/* CTA Buttons */}
        <CTAButtons />

        {/* Stats Section */}
        <StatsSection />

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-16"
        >
          <p className="text-zion-slate-light mb-4">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-zion-slate-light font-semibold">Microsoft</div>
            <div className="text-zion-slate-light font-semibold">Google</div>
            <div className="text-zion-slate-light font-semibold">Amazon</div>
            <div className="text-zion-slate-light font-semibold">IBM</div>
            <div className="text-zion-slate-light font-semibold">Oracle</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zion-blue-dark to-transparent" />
    </section>
  );
};