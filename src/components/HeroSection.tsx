
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, Zap, Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
      x: [0, 10, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple-light/20"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          variants={particleVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating feature highlights */}
      <motion.div 
        className="absolute top-1/4 right-1/6 hidden lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 text-white">
            <Users className="w-5 h-5 text-zion-cyan" />
            <span className="text-sm font-medium">10K+ Talents</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-1/6 hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 text-white">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
        </div>
      </motion.div>

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
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-zion-cyan" />
            <span className="text-sm text-white font-medium">AI-Powered Tech Marketplace</span>
          </div>
        </motion.div>

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

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105"
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
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              {t('home.browse_marketplace')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm mb-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Secure & Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>AI-Powered Matching</span>
          </div>
        </motion.div>

        {/* Additional CTA section */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <p className="text-zion-slate-light mb-4">Trusted by leading tech companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-16 h-8 bg-zion-cyan/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-purple/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-blue/20 rounded"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 lg:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          asChild
          className="rounded-full w-14 h-14 p-0 bg-gradient-to-r from-zion-purple to-zion-cyan shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300"
        >
          <Link to="/marketplace" aria-label="Browse Marketplace">
            <ArrowRight className="w-6 h-6" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
