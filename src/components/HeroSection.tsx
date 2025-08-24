
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingParticles = [
    { id: 1, top: "25%", left: "25%", size: "w-2 h-2", color: "bg-zion-purple-light", delay: 0 },
    { id: 2, top: "33%", right: "33%", size: "w-3 h-3", color: "bg-zion-cyan", delay: 0.5 },
    { id: 3, bottom: "25%", left: "50%", size: "w-2 h-2", color: "bg-zion-purple", delay: 1 },
    { id: 4, top: "50%", right: "25%", size: "w-4 h-4", color: "bg-zion-cyan-light", delay: 1.5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const particleVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background gradient effect with enhanced performance */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"
        style={{
          background: `
            linear-gradient(180deg, 
              hsl(220, 65%, 25%) 0%, 
              hsl(220, 65%, 45%) 50%, 
              hsl(220, 65%, 65%) 100%
            )
          `
        }}
      />
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute ${particle.top} ${particle.left || particle.right} ${particle.size} rounded-full ${particle.color} opacity-40`}
            variants={particleVariants}
            animate="animate"
            style={{ animationDelay: `${particle.delay}s` }}
            aria-hidden="true"
          />
        ))}
      </div>
      
      <motion.div 
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <GradientHeading 
            level="h1" 
            className="mb-6 text-5xl md:text-7xl font-bold"
            id="hero-heading"
          >
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('home.hero_subtitle')}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
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
              className="focus:outline-none focus:ring-4 focus:ring-zion-purple/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
            >
              {t('auth.signup')}
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
            aria-label="Browse our marketplace for tech services and products"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
