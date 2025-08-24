
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

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
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated floating particles with enhanced effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0s" }}
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
        {/* Additional particles for more visual interest */}
        <motion.div 
          className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/6 w-3 h-3 rounded-full bg-zion-cyan opacity-35"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>
      
      {/* Floating action button */}
      <motion.div 
        className="absolute top-8 right-8 hidden lg:block"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <Button
          variant="outline"
          size="sm"
          className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-full w-12 h-12 p-0"
        >
          <Play className="h-4 w-4 ml-1" />
        </Button>
      </motion.div>

      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust indicators */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-6 text-zion-cyan-light"
          variants={itemVariants}
        >
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-medium">Trusted by 10,000+ companies</span>
          <Star className="h-4 w-4 fill-current" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('home.hero_subtitle')}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div 
          className="flex items-center justify-center gap-8 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan-light rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
