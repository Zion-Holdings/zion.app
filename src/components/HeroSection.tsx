
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users } from "lucide-react";

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
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark/90 via-zion-blue/80 to-zion-purple-dark/90"></div>
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-zion-cyan animate-pulse" />
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
              AI-Powered Marketplace
            </span>
            <Sparkles className="w-6 h-6 text-zion-cyan animate-pulse" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle')}
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-cyan" />
            <span className="text-sm">Instant AI Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-cyan" />
            <span className="text-sm">Global Talent Network</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span className="text-sm">24/7 Support</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup')}
              tabIndex={0}
              data-testid="hero-signup-btn"
              className="flex items-center gap-2"
            >
              {t('auth.signup')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 pt-8 border-t border-zion-purple/20"
          variants={itemVariants}
        >
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded animate-pulse"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
