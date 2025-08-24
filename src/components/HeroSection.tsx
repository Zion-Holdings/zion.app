
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
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/90 via-zion-blue/80 to-zion-blue-light/70"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20 animate-pulse"></div>
        
        {/* Enhanced floating particles with better positioning */}
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
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60"
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
        {/* Enhanced title with better typography */}
        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better readability */}
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Enhanced feature highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span>24/7 Global Services</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Users className="w-5 h-5 text-zion-cyan-light" />
            <span>Expert Community</span>
          </div>
        </motion.div>

        {/* Enhanced CTA buttons with better visual hierarchy */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          variants={itemVariants}
        >
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-12 pt-8 border-t border-zion-purple/20"
          variants={itemVariants}
        >
          <p className="text-sm text-zion-slate-light mb-4">Trusted by leading tech companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
