
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-blue opacity-90"></div>
      
      {/* Enhanced Animated floating particles with neon effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60 animate-pulse animate-float shadow-lg shadow-zion-purple/50"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50 animate-pulse animate-float animation-delay-2000 shadow-lg shadow-zion-cyan/50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-60 animate-pulse animate-float animation-delay-4000 shadow-lg shadow-zion-purple/50"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-40 animate-pulse animate-float animation-delay-2000 shadow-lg shadow-zion-cyan/50"></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-blue opacity-70 animate-pulse animate-float shadow-lg shadow-zion-blue/50"></div>
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 rounded-full bg-zion-purple-light opacity-50 animate-pulse animate-float animation-delay-4000 shadow-lg shadow-zion-purple/50"></div>
      </div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold animate-fade-in-up">
          {t('home.hero_title')}
        </GradientHeading>

        <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-2000">
          {t('home.hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-4000">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-2xl shadow-zion-purple/30 hover:shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300 hover:scale-105 animate-glow"
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
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/30 neon-border"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>
        
        {/* Additional CTA for new services */}
        <div className="mt-8 animate-fade-in-up animation-delay-4000">
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group"
          >
            <span className="text-lg">🚀 Explore AI & Micro SAAS Services</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
      
      {/* Bottom animated border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60 animate-pulse"></div>
    </section>
  );
}
