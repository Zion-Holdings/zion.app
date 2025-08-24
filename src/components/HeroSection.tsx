
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Enhanced animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 rounded-full bg-zion-purple-light opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/6 w-2 h-2 rounded-full bg-zion-cyan opacity-25 animate-pulse"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Enhanced main heading */}
        <div className="mb-6">
          <GradientHeading className="text-5xl md:text-7xl font-bold mb-4">
            {t('home.hero_title') || "The Future of Tech & AI"}
          </GradientHeading>
          <div className="flex items-center justify-center gap-2 text-zion-cyan-light text-lg md:text-xl mb-4">
            <Sparkles className="w-5 h-5" />
            <span>Powered by Zion Protocol</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Enhanced subtitle */}
        <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
          {t('home.hero_subtitle') || "Connect with world-class AI talent, cutting-edge tech services, and innovative solutions. Join the revolution that's reshaping the future of work."}
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-zion-slate-light">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-cyan" />
            <span>10,000+ Verified Talents</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span>AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan-light" />
            <span>24/7 Global Support</span>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
              {t('auth.signup') || "Get Started"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t('home.browse_marketplace') || "Explore Marketplace"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="text-sm text-zion-slate-light opacity-80">
          <p>Trusted by Fortune 500 companies worldwide</p>
          <p className="mt-1">Join 50,000+ professionals already using Zion</p>
        </div>
      </div>
    </section>
  );
}
