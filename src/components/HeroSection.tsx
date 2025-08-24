
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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zion-slate-dark via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,221,210,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-cyan-light opacity-60"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-purple-light opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-cyan opacity-50"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-purple opacity-30"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '0.5s' }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/6 w-3 h-3 rounded-full bg-zion-cyan-light opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-8 text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {t('home.hero_subtitle')}
          </p>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          variants={itemVariants}
        >
          <Button
            className="bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purple hover:from-zion-purple-light hover:via-zion-purple hover:to-zion-purple-dark text-lg py-8 px-12 rounded-xl shadow-2xl shadow-zion-purple/25 hover:shadow-zion-purple/40 transition-all duration-300 transform hover:scale-105"
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
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-8 px-12 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
          >
            {t('home.browse_marketplace')}
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>24/7 Global Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>Verified Professionals</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
