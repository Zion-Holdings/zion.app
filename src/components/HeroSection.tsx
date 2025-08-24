
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Clock } from "lucide-react";

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
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated floating particles with better positioning */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50"
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
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-zion-cyan" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Globe className="w-8 h-8 text-zion-purple" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Clock className="w-8 h-8 text-zion-cyan-light" />
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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

        {/* Enhanced stats section */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="text-zion-cyan">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-zion-slate-light">Active Users</div>
            </div>
            <div className="text-zion-purple">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-zion-slate-light">Countries</div>
            </div>
            <div className="text-zion-cyan-light">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm text-zion-slate-light">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup')}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              <span className="flex items-center gap-2">
                {t('auth.signup')}
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              {t('home.browse_marketplace')}
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-zion-slate-light text-sm mb-4">
            Trusted by leading companies worldwide
          </p>
          <div className="flex justify-center items-center gap-6 opacity-60">
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-50"></div>
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-50"></div>
            <div className="w-16 h-8 bg-zion-slate-light rounded opacity-50"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
