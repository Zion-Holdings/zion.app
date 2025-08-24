
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
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
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue opacity-90"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse delay-1000 float"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse delay-2000 float"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse delay-3000 float"></div>
        
        {/* Additional futuristic elements */}
        <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-zion-blue rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-zion-purple-light rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-zion-cyan-light rounded-full animate-pulse delay-2500"></div>
        
        {/* Matrix-style lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-zion-blue to-transparent opacity-30"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent opacity-30"></div>
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30"></div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced title with better typography */}
        <motion.div variants={itemVariants} className="mb-6">
          <GradientHeading className="text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better spacing */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Feature highlights */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span>Global Talent Pool</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-cyan-light" />
            <span>24/7 Support</span>
          </div>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 hover-lift hover-glow transition-all duration-300 shadow-2xl"
            size="lg"
            asChild
          >
            <Link to="/signup">
              {t('auth.signup')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover-lift hover-glow shadow-2xl backdrop-blur-sm"
          >
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-zion-slate-light/70"
        >
          <p className="text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
