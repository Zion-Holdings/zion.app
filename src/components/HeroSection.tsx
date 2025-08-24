
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

  const particleVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32" aria-labelledby="hero-heading">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          variants={particleVariants}
          animate="float"
          style={{ animationDelay: "0s" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30"
          variants={particleVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40"
          variants={particleVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20"
          variants={particleVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <GradientHeading 
            id="hero-heading"
            className="mb-6 text-5xl md:text-7xl font-bold"
          >
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {t('home.hero_subtitle')}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-200 hover:shadow-lg transform hover:scale-105"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
