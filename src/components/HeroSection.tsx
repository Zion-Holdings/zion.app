
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"></div>
      
      {/* Animated floating particles with enhanced effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.4, 0.1, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced hero title with sparkles */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-zion-purple-light" />
            <span className="text-zion-cyan-light text-lg font-medium">#1 AI & Tech Marketplace</span>
            <Sparkles className="w-8 h-8 text-zion-purple-light" />
          </div>
          <GradientHeading className="text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better messaging */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Enhanced feature highlights */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-cyan" />
            <span>10,000+ AI Experts</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span>24/7 Global Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan-light" />
            <span>Free to Use</span>
          </div>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
          >
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-zion-purple/20">
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-20 h-8 bg-zion-slate-light rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-zion-slate-light rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-zion-slate-light rounded animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
