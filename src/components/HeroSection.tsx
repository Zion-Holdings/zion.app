
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue via-zion-purple/20 to-zion-blue-light opacity-90"></div>
      
      {/* Enhanced animated floating particles with neon effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60 animate-pulse shadow-lg shadow-zion-purple-light/50"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50 animate-pulse shadow-lg shadow-zion-cyan/50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-60 animate-pulse shadow-lg shadow-zion-purple/50"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-40 animate-pulse shadow-lg shadow-zion-cyan-light/50"></div>
        <div className="absolute top-1/6 right-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-70 animate-pulse delay-500 shadow-lg shadow-zion-purple-light/50"></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 rounded-full bg-zion-cyan opacity-45 animate-pulse delay-1000 shadow-lg shadow-zion-cyan/50"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
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
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6"
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
            className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-4 rounded-md inline-flex items-center justify-center"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>
      </div>
    </section>
  );
}
