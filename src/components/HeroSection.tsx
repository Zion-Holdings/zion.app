
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

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: '0.5s' }}
        />
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-4 md:mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero_subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          variants={itemVariants}
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-base md:text-lg py-4 md:py-6 px-8 md:px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-base md:text-lg py-4 md:py-6 px-8 md:px-10 rounded-lg inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Additional features preview */}
        <motion.div 
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-zion-purple text-xl">🚀</span>
            </div>
            <h3 className="text-white font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-zion-slate-light text-sm">Find the perfect talent with our advanced AI algorithms</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-zion-cyan text-xl">💼</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Verified Professionals</h3>
            <p className="text-zion-slate-light text-sm">All talent is pre-vetted and verified for quality</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-zion-purple text-xl">⚡</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Fast & Secure</h3>
            <p className="text-zion-slate-light text-sm">Quick onboarding and secure payment processing</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
