
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatedBackground, NeonGlow, FloatingElements } from "@/components/ui/AnimatedBackground";
import { Brain, Users, Shield, Zap } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="particles" intensity="medium" />
      <FloatingElements count={8} />
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
      
      {/* Additional animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <NeonGlow color="#22ddd2" intensity="high">
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold">
            {t('home.hero_title')}
          </GradientHeading>
        </NeonGlow>

        <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
          {t('home.hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 shadow-lg hover:shadow-zion-purple/25 transition-all duration-300"
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
            className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-4 rounded-md inline-flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="flex flex-col items-center gap-3 text-zion-cyan group">
            <div className="p-3 rounded-full bg-zion-cyan/10 group-hover:bg-zion-cyan/20 transition-colors">
              <Brain className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">AI-Powered</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-zion-purple group">
            <div className="p-3 rounded-full bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
              <Users className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">Global Talent</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-zion-blue group">
            <div className="p-3 rounded-full bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors">
              <Shield className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">Verified</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-zion-cyan-light group">
            <div className="p-3 rounded-full bg-zion-cyan-light/10 group-hover:bg-zion-cyan-light/20 transition-colors">
              <Zap className="h-6 w-6" />
            </div>
            <span className="font-medium text-sm">Fast & Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
