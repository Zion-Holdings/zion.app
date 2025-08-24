
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NeonGlow } from "@/components/ui/AnimatedBackground";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 rounded-full bg-zion-purple-light opacity-60 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-2 h-2 rounded-full bg-zion-cyan opacity-25 animate-float" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <NeonGlow color="zion-purple" intensity="high">
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold">
            {t('home.hero_title')}
          </GradientHeading>
        </NeonGlow>

        <NeonGlow color="zion-cyan" intensity="medium">
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
            {t('home.hero_subtitle')}
          </p>
        </NeonGlow>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 hover-neon transition-all duration-300 hover:scale-105"
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
            className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-4 rounded-md inline-flex items-center justify-center hover-glow transition-all duration-300 hover:scale-105"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>
      </div>
    </section>
  );
}
