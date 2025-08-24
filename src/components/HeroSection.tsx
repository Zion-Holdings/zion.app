
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Globe,
  Zap,
  Shield,
  CheckCircle
} from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light"
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan"
        />
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light"
        />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GradientHeading className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {t('home.hero_title') || "The Future of Tech Services"}
            </GradientHeading>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            {t('home.hero_subtitle') || "Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals worldwide."}
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-zion-slate-light"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-zion-purple" />
              <span className="text-sm font-medium">10K+ Verified Providers</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span className="text-sm font-medium">50+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group transition-all duration-300 hover:scale-105 shadow-2xl"
              size="lg"
              asChild
            >
              <Link
                to="/signup"
                role="button"
                aria-label={t('auth.signup') || "Get Started"}
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center gap-2"
              >
                {t('auth.signup') || "Get Started Free"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {t('home.browse_marketplace') || "Explore Marketplace"}
            </Link>
          </motion.div>

          {/* Demo Video or Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-zion-blue-dark to-zion-purple-dark rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-zion-slate-light text-lg font-medium">
                    Watch How It Works
                  </p>
                  <p className="text-zion-slate-light text-sm mt-2">
                    2 min demo • See Zion in action
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Trusted by Fortune 500</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
