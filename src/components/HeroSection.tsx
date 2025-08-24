
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

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
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zion-slate-dark via-transparent to-transparent opacity-60"></div>
      
      {/* Animated floating particles with better positioning */}
      <motion.div 
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-70"
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
        <motion.div 
          className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
        />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-zion-cyan" />
      </div>
      <div className="absolute top-32 right-20 opacity-20">
        <Zap className="w-6 h-6 text-zion-purple" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Globe className="w-7 h-7 text-zion-cyan-light" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center max-w-6xl">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <GradientHeading className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {t('home.hero_subtitle')}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
          >
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 text-sm text-zion-slate-light opacity-80"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span>Global Network</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan-light rounded-full"></div>
            <span>AI-Powered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
