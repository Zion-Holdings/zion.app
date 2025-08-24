
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Users, Zap } from "lucide-react";

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
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark opacity-90"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Enhanced floating particles with better animations */}
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
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '0.5s' }}
        />
      </motion.div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div variants={itemVariants}>
          {/* Enhanced subtitle with icons */}
          <div className="flex items-center justify-center gap-2 mb-6 text-zion-cyan-light text-lg font-medium">
            <Sparkles className="w-5 h-5" />
            <span>World's First AI & Tech Marketplace</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {t('home.hero_title') || 'The Future of Tech is Here'}
          </GradientHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero_subtitle') || 'Discover, connect, and collaborate with the world\'s top AI talent, cutting-edge services, and revolutionary equipment. Join the tech revolution.'}
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Globe className="w-4 h-4 text-zion-cyan" />
            <span>Global Network</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Users className="w-4 h-4 text-zion-cyan" />
            <span>10K+ Experts</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Zap className="w-4 h-4 text-zion-cyan" />
            <span>24/7 Support</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-2xl shadow-zion-purple/25 transition-all duration-300 hover:scale-105"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup') || 'Get Started'}
              tabIndex={0}
              data-testid="hero-signup-btn"
              className="flex items-center gap-2"
            >
              {t('auth.signup') || 'Get Started'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
          >
            {t('home.browse_marketplace') || 'Explore Marketplace'}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="text-zion-slate-light text-sm opacity-80"
          variants={itemVariants}
        >
          <p>Trusted by Fortune 500 companies worldwide</p>
        </motion.div>
      </div>
    </section>
  );
}
