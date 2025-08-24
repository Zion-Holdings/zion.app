
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"></div>
      
      {/* Enhanced animated floating particles */}
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
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60"
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
      </motion.div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Feature highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-zion-cyan">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2 text-zion-purple-light">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">24/7 Global Services</span>
          </div>
          <div className="flex items-center gap-2 text-zion-cyan-light">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Expert Community</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25"
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
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-zion-slate-light text-sm"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span>Trusted by 10,000+ companies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zion-cyan-light rounded-full"></div>
            <span>99.9% Uptime SLA</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
