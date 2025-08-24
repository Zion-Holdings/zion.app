
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 rounded-full bg-zion-cyan opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/6 w-2.5 h-2.5 rounded-full bg-zion-purple-light opacity-30 animate-pulse delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 rounded-full bg-zion-purple opacity-60 animate-pulse delay-1500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-zion-cyan opacity-20 rotate-45 animate-bounce delay-700"></div>
        <div className="absolute bottom-1/5 right-1/5 w-2 h-2 bg-zion-purple opacity-30 rotate-12 animate-bounce delay-300"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 left-3/4 w-6 h-6 bg-zion-cyan rounded-full opacity-10 blur-sm animate-pulse delay-200"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-zion-purple rounded-full opacity-15 blur-sm animate-pulse delay-1000"></div>
      </div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 221, 210, 0.3) 1px, transparent 0)`,
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
