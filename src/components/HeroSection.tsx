
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Users, Briefcase } from "lucide-react";

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

  const floatingParticles = [
    { id: 1, x: "10%", y: "20%", size: "w-2 h-2", color: "bg-zion-purple-light", delay: 0 },
    { id: 2, x: "85%", y: "30%", size: "w-3 h-3", color: "bg-zion-cyan", delay: 0.5 },
    { id: 3, x: "50%", y: "70%", size: "w-2 h-2", color: "bg-zion-purple", delay: 1 },
    { id: 4, x: "75%", y: "60%", size: "w-4 h-4", color: "bg-zion-cyan-light", delay: 1.5 },
    { id: 5, x: "20%", y: "80%", size: "w-1 h-1", color: "bg-zion-purple-light", delay: 2 },
    { id: 6, x: "90%", y: "15%", size: "w-2 h-2", color: "bg-zion-cyan", delay: 2.5 }
  ];

  const features = [
    { icon: <Zap className="h-5 w-5" />, text: "AI-Powered Matching" },
    { icon: <Users className="h-5 w-5" />, text: "Global Talent Pool" },
    { icon: <Briefcase className="h-5 w-5" />, text: "24/7 Support" }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute ${particle.size} rounded-full ${particle.color} opacity-40`}
            style={{ left: particle.x, top: particle.y }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Sparkle effect overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-8 w-8 text-zion-cyan-light opacity-30" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-6 w-6 text-zion-purple-light opacity-40" />
        </motion.div>
      </div>
      
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
          className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Feature highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/30 rounded-full px-4 py-2"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-zion-cyan">{feature.icon}</span>
              <span className="text-zion-slate-light text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              {t('home.browse_marketplace')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-16 h-8 bg-zion-slate-light rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-zion-slate-light rounded animate-pulse"></div>
            <div className="w-14 h-8 bg-zion-slate-light rounded animate-pulse"></div>
            <div className="w-18 h-8 bg-zion-slate-light rounded animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
