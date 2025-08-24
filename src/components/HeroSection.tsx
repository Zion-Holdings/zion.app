
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Globe } from "lucide-react";

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
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple-light/20"></div>
      
      {/* Enhanced floating particles with better positioning */}
      <motion.div 
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-cyan opacity-60"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-purple-light opacity-50"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-cyan-light opacity-70"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-purple opacity-40"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "0.5s" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-zion-cyan-dark opacity-50"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1.5s" }}
        />
      </motion.div>
      
      {/* Main content container */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced main heading with better typography */}
          <motion.div variants={itemVariants} className="mb-8">
            <GradientHeading className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-6">
              {t('home.hero_title')}
            </GradientHeading>
            
            {/* Enhanced subtitle with better readability */}
            <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('home.hero_subtitle')}
            </p>
          </motion.div>

          {/* Enhanced feature highlights */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-6 text-zion-cyan-light">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Sparkles className="w-5 h-5" />
                <span>AI-Powered Matching</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Zap className="w-5 h-5" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Users className="w-5 h-5" />
                <span>Global Talent</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Globe className="w-5 h-5" />
                <span>24/7 Access</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA buttons with better visual hierarchy */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button
              className="group bg-gradient-to-r from-zion-purple via-zion-purple-light to-zion-purple-dark hover:from-zion-purple-dark hover:via-zion-purple hover:to-zion-purple-light text-lg py-7 px-8 rounded-xl shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105"
              size="lg"
              asChild
            >
              <Link
                to="/signup"
                role="button"
                aria-label={t('auth.signup')}
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center gap-3"
              >
                <span>{t('auth.signup')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-7 px-8 rounded-xl inline-flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              <span>{t('home.browse_marketplace')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Trust indicators and social proof */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-zion-slate-light/70 text-sm md:text-base mb-4">
              Trusted by 10,000+ companies worldwide
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {/* Add company logos here if available */}
              <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
              <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
              <div className="w-16 h-8 bg-zion-slate-light/20 rounded"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 md:h-24 text-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
