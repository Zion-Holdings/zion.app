
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NeonGlow, GradientBorder } from "@/components/ui/AnimatedBackground";
import { ArrowRight, Zap, Users, Brain } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue opacity-90"></div>
      
      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-60 animate-pulse" style={{ animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30 animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse" style={{ animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 rounded-full bg-zion-cyan opacity-40 animate-pulse" style={{ animationDuration: '4.5s' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <NeonGlow glowColor="#8c15e9">
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </NeonGlow>

        <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
          {t('home.hero_subtitle')}
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-zion-purple/20">
            <Zap className="h-5 w-5 text-zion-cyan" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-zion-purple/20">
            <Users className="h-5 w-5 text-zion-cyan" />
            <span>Global Talent Pool</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-zion-purple/20">
            <Brain className="h-5 w-5 text-zion-cyan" />
            <span>Smart Solutions</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <GradientBorder borderWidth="2px">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 border-0"
              size="lg"
              asChild
            >
              <Link
                to="/signup"
                role="button"
                aria-label={t('auth.signup')}
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center gap-2"
              >
                {t('auth.signup')}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </GradientBorder>
          
          <GradientBorder borderWidth="2px">
            <Link
              id="browse-marketplace"
              to="/marketplace"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              {t('home.browse_marketplace')}
            </Link>
          </GradientBorder>
        </div>

        {/* Additional CTA */}
        <div className="mt-8">
          <Link
            to="/comprehensive-services"
            className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 inline-flex items-center gap-2 group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
