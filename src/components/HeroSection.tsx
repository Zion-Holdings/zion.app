
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
        delayChildren: 0.3
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
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
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
          className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-zion-purple-light opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
        />
      </motion.div>
      
      {/* Floating action button */}
      <motion.div
        className="absolute top-8 right-8 z-20"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          variant="outline"
          size="sm"
          className="bg-zion-purple/20 border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/30 backdrop-blur-sm"
          asChild
        >
          <Link to="/match" aria-label="Try AI Matcher">
            <Sparkles className="w-4 h-4 mr-2" />
            Try AI Matcher
          </Link>
        </Button>
      </motion.div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
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
            <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero_subtitle')}
            </p>
          </motion.div>

          {/* Enhanced feature highlights */}
          <motion.div 
            variants={itemVariants}
            className="mb-12 flex flex-wrap justify-center gap-6 text-sm text-zion-cyan/80"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Global Network</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group transition-all duration-300 transform hover:scale-105"
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
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              aria-label="Browse marketplace"
            >
              {t('home.browse_marketplace')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
