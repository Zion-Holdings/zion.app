
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
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
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-zion-purple-light" />
            <span className="text-sm text-zion-purple-light font-medium">
              AI-Powered Tech Marketplace
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title') || "The Future of Tech & AI"}
          </GradientHeading>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          {t('home.hero_subtitle') || "Connect with world-class AI talent, cutting-edge services, and innovative equipment. Build the future, one project at a time."}
        </motion.p>

        {/* Feature highlights */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light"
        >
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-cyan" />
            <span>10K+ Verified Talents</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span>24/7 Global Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan-light" />
            <span>AI-Powered Matching</span>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup') || "Get Started"}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              {t('auth.signup') || "Get Started Free"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            {t('home.browse_marketplace') || "Explore Marketplace"}
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-zion-purple/20"
        >
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-20 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-20 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-20 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-20 h-8 bg-zion-slate-light/20 rounded"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
