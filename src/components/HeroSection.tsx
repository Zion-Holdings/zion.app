
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Star, TrendingUp, Shield } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
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
      y: [-15, 15, -15],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"
        style={{ y, opacity }}
      />
      
      {/* Animated floating particles with better positioning and variety */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '0.5s' }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-80"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1.5s' }}
        />
        <motion.div 
          className="absolute top-1/6 right-1/6 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      {/* Enhanced decorative geometric shapes with animations */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* New floating elements */}
      <motion.div 
        className="absolute top-1/3 left-10 w-16 h-16 border border-zion-cyan/30 rounded-full opacity-20"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-1/3 right-10 w-20 h-20 border border-zion-purple/30 rounded-full opacity-20"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced title with better typography and animations */}
        <motion.div variants={itemVariants} className="mb-8">
          <GradientHeading className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            {t('home.hero_title') || "The Future of Tech & AI"}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better spacing and animations */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-16 max-w-5xl mx-auto leading-relaxed font-light"
        >
          {t('home.hero_subtitle') || "Discover the world's most advanced AI marketplace. Connect with top tech talent, cutting-edge services, and revolutionary equipment in one seamless platform."}
        </motion.p>

        {/* Enhanced feature highlights with icons and animations */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mb-16 text-zion-slate-light"
        >
          <motion.div 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="p-2 bg-zion-cyan/20 rounded-full group-hover:bg-zion-cyan/30 transition-colors">
              <Sparkles className="w-6 h-6 text-zion-cyan" />
            </div>
            <span className="font-medium">AI-Powered Matching</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="p-2 bg-zion-purple/20 rounded-full group-hover:bg-zion-purple/30 transition-colors">
              <Zap className="w-6 h-6 text-zion-purple" />
            </div>
            <span className="font-medium">Global Talent Pool</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="p-2 bg-zion-cyan-light/20 rounded-full group-hover:bg-zion-cyan-light/30 transition-colors">
              <Users className="w-6 h-6 text-zion-cyan-light" />
            </div>
            <span className="font-medium">24/7 Support</span>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA buttons with better animations and effects */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              to="/signup"
              className="group bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purple hover:from-zion-purple-light hover:via-zion-purple hover:to-zion-purple-light text-lg py-6 px-10 shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform inline-flex items-center justify-center rounded-2xl font-semibold text-white border-0"
            >
              {t('auth.signup') || "Get Started Free"}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-10 rounded-2xl inline-flex items-center justify-center transition-all duration-300 transform hover:shadow-2xl hover:shadow-zion-cyan/25 font-semibold backdrop-blur-sm bg-white/10"
            >
              {t('home.browse_marketplace') || "Explore Marketplace"}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced trust indicators with better visuals */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 text-zion-slate-light/80"
        >
          <p className="text-lg mb-6 font-medium">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </div>
        </motion.div>

        {/* New stats section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div 
            className="text-center group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="text-4xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors">
              10K+
            </div>
            <div className="text-zion-slate-light">Active Users</div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="text-4xl font-bold text-zion-purple mb-2 group-hover:text-zion-purple-light transition-colors">
              500+
            </div>
            <div className="text-zion-slate-light">AI Services</div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="text-4xl font-bold text-zion-cyan-light mb-2 group-hover:text-zion-cyan transition-colors">
              99.9%
            </div>
            <div className="text-zion-slate-light">Uptime</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
