
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-light opacity-90"></div>
      
      {/* Futuristic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Enhanced Animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 left-1/6 w-1 h-1 rounded-full bg-zion-purple-light opacity-60 animate-ping float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-2 h-2 rounded-full bg-zion-cyan opacity-40 animate-bounce float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Neon Accent Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent opacity-40"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-zion-purple to-transparent opacity-40"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold">
          {t('home.hero_title')}
        </GradientHeading>

        <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
          {t('home.hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-lg py-6 hover-lift hover-glow neon-glow"
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
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-6 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 hover:-translate-y-1 neon-glow"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>
      </div>
    </section>
  );
}
