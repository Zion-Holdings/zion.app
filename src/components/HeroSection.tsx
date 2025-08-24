
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Globe, 
  TrendingUp,
  Shield,
  Cloud,
  Users,
  Code,
  Database
} from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"></div>
        
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30 animate-gradient-shift"
          style={{
            background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00, #ff0080, #00ffff)',
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Cyberpunk grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
      
      {/* Enhanced floating particles with neon effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60 animate-pulse shadow-lg shadow-zion-purple-light"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50 animate-pulse shadow-lg shadow-zion-cyan"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-70 animate-pulse shadow-lg shadow-zion-purple"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-40 animate-pulse shadow-lg shadow-zion-cyan-light"></div>
        <div className="absolute top-1/6 left-1/6 w-2 h-2 rounded-full bg-green-400 opacity-60 animate-ping shadow-lg shadow-green-400"></div>
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 rounded-full bg-pink-400 opacity-50 animate-bounce shadow-lg shadow-pink-400"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20 animate-spin-slow" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20 animate-pulse" />
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-yellow-400 opacity-20 animate-bounce" />
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20 animate-ping" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Enhanced Main Heading */}
        <div className="mb-8">
          <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
          
          {/* Animated subtitle with typing effect */}
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
            <span className="inline-block animate-fade-in-up">
              Discover cutting-edge AI solutions, connect with top tech talent, and access enterprise-grade services
            </span>
            <span className="inline-block ml-2 text-zion-cyan animate-pulse">|</span>
          </p>
        </div>

        {/* Enhanced Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
            <Brain className="w-8 h-8 text-zion-cyan mb-2" />
            <span className="text-sm text-zion-slate-light">AI-Powered</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
            <Globe className="w-8 h-8 text-zion-purple mb-2" />
            <span className="text-sm text-zion-slate-light">Global Reach</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
            <Shield className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-sm text-zion-slate-light">Enterprise</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
            <TrendingUp className="w-8 h-8 text-yellow-400 mb-2" />
            <span className="text-sm text-zion-slate-light">Innovation</span>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Button
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1"
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
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              {t('auth.signup')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zion-cyan/25"
          >
            <Globe className="w-5 h-5 mr-2 group-hover:animate-spin" />
            {t('home.browse_marketplace')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-sm text-zion-slate-light">AI Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">10K+</div>
            <div className="text-sm text-zion-slate-light">Tech Experts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-sm text-zion-slate-light">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-sm text-zion-slate-light">Uptime</div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-zion-purple/20">
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-zion-cyan">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">SOC2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-purple">
              <Cloud className="w-5 h-5" />
              <span className="text-sm font-medium">Cloud Native</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
