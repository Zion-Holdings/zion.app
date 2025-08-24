
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
=======
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
>>>>>>> origin/website-audit-and-enhancement-complete

export function HeroSection() {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
<<<<<<< HEAD
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
=======
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
>>>>>>> origin/website-audit-and-enhancement-complete
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
<<<<<<< HEAD
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Animated floating particles */}
      <motion.div 
        className="absolute inset-0"
=======
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20 animate-pulse"></div>
      
      {/* Enhanced floating particles with better positioning */}
      <div className="absolute inset-0">
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
          className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
        />
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20"></div>
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
>>>>>>> origin/website-audit-and-enhancement-complete
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
<<<<<<< HEAD
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '0.5s' }}
        />
      </motion.div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Feature highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-10 text-zion-slate-light"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-zion-cyan" />
            <span className="text-sm md:text-base">AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-zion-purple" />
            <span className="text-sm md:text-base">Instant Results</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-zion-cyan" />
            <span className="text-sm md:text-base">Verified Talent</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group"
=======
        {/* Enhanced title with better typography */}
        <motion.div variants={itemVariants} className="mb-6">
          <GradientHeading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title') || "The Future of Tech is Here"}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better spacing */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-lg sm:text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle') || "Discover top AI and tech talent, services, and equipment in one place. Powered by cutting-edge AI matching technology."}
          </p>
        </motion.div>

        {/* Enhanced CTA buttons with better mobile layout */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto"
        >
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>>>>>>> origin/website-audit-and-enhancement-complete
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
<<<<<<< HEAD
              aria-label={t('auth.signup')}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              {t('auth.signup')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
=======
              aria-label={t('auth.signup') || "Get Started"}
              tabIndex={0}
              data-testid="hero-signup-btn"
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {t('auth.signup') || "Get Started"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
>>>>>>> origin/website-audit-and-enhancement-complete
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
<<<<<<< HEAD
            className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
            aria-label="Browse marketplace"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-zion-slate-light text-sm mb-4">
            Trusted by leading companies worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="w-20 h-8 bg-white/20 rounded"></div>
            <div className="w-20 h-8 bg-white/20 rounded"></div>
            <div className="w-20 h-8 bg-white/20 rounded"></div>
          </div>
        </motion.div>
      </div>
=======
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            {t('home.browse_marketplace') || "Browse Marketplace"}
            <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>

        {/* Enhanced trust indicators */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span>Global Network</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>
>>>>>>> origin/website-audit-and-enhancement-complete
    </section>
  );
}
