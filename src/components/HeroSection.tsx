
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, Shield, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or marketplace
      window.location.href = `/marketplace?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Enhanced floating particles with better animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 rounded-full bg-zion-purple-light opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-2 h-2 rounded-full bg-zion-cyan opacity-50 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-6 mb-8 text-zion-slate-light text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-zion-cyan" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-zion-cyan" />
            <span>10K+ Verified Users</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-zion-cyan" />
            <span>24/7 Support</span>
          </div>
        </div>

        <GradientHeading className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {t('home.hero_title') || 'The Future of Tech & AI Marketplace'}
        </GradientHeading>

        <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
          {t('home.hero_subtitle') || 'Discover top AI and tech talent, services, and equipment in one place. Connect with experts worldwide and scale your business with cutting-edge technology.'}
        </p>

        {/* Enhanced Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for AI experts, tech services, or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan rounded-full"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-full"
            >
              Search
            </Button>
          </div>
        </form>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
              role="button"
              aria-label={t('auth.signup') || 'Get Started'}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              {t('auth.signup') || 'Get Started Free'}
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
          >
            {t('home.browse_marketplace') || 'Browse Marketplace'}
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-zion-cyan mb-2">50K+</div>
            <div className="text-zion-slate-light text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-zion-purple mb-2">100+</div>
            <div className="text-zion-slate-light text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-zion-cyan mb-2">$10M+</div>
            <div className="text-zion-slate-light text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-zion-purple mb-2">99.9%</div>
            <div className="text-zion-slate-light text-sm">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
