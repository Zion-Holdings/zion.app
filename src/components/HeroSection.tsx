
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32" role="banner" aria-labelledby="hero-title">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        />

      </div>

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/30 rounded-lg rotate-45"
        animate={{ rotate: [45, 405], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/30 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <GradientHeading 
            className="mb-6 text-5xl md:text-7xl font-bold"
          >
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('home.hero_subtitle')}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
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
            >
              {t('auth.signup')}
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            role="button"
            aria-label={t('home.browse_marketplace')}
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light/70"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span className="text-sm">AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span className="text-sm">Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
            <span className="text-sm">Secure Platform</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
