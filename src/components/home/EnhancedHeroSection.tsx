import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  ChevronDown,
  Star,
  Users,
  TrendingUp
} from "lucide-react";

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-zion-blue/10 rounded-full animate-float delay-2000"></div>
        
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-blue to-transparent animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zion-cyan/10 text-zion-cyan px-6 py-3 rounded-full text-sm font-medium mb-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:bg-zion-cyan/20">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span className="neon-text">New Micro SAAS Services Available</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent neon-pulse">
            ZION
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl text-white mt-4 font-normal">
            The Future of Tech & AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-12 max-w-5xl mx-auto leading-relaxed">
          Discover the world's most comprehensive marketplace for AI talent, micro SAAS services, 
          and cutting-edge technology solutions. Transform your business with our innovative platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-zion-slate font-semibold px-8 py-6 text-lg hover-lift hover-glow transition-all duration-300"
          >
            <Link to="/micro-saas-services">
              <Zap className="h-6 w-6 mr-3" />
              Explore Services
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold px-8 py-6 text-lg hover-lift transition-all duration-300"
          >
            <Link to="/request-quote">
              <Users className="h-6 w-6 mr-3" />
              Get Started
            </Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">Micro SAAS Services</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:scale-110 transition-transform duration-300">
              10K+
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">AI Professionals</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">Uptime Guarantee</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-zion-slate-light text-sm md:text-base">Support Available</div>
          </div>
        </div>

        {/* Service Categories Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Our Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Brain className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">AI Services</span>
            </div>
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Shield className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">IT Solutions</span>
            </div>
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Zap className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">Automation</span>
            </div>
            <div className="group p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-105 border border-zion-blue-light/20 hover:border-zion-cyan/50">
              <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center block group-hover:text-zion-cyan transition-colors">Integration</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-16">
          <p className="text-zion-slate-light mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-zion-cyan font-bold text-xl">TechCorp</div>
            <div className="text-zion-purple font-bold text-xl">InnovateAI</div>
            <div className="text-zion-blue font-bold text-xl">DataFlow</div>
            <div className="text-zion-cyan font-bold text-xl">CloudTech</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-zion-cyan" />
        </div>
      </div>

      {/* Floating Action Cards */}
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <div className="glass-effect p-4 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-zion-cyan text-sm font-medium">Live AI Matching</span>
          </div>
          <div className="text-white text-xs mt-2">Currently processing 1,247 matches</div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-8 hidden lg:block">
        <div className="glass-effect p-4 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3">
            <Star className="h-4 w-4 text-zion-purple" />
            <span className="text-zion-purple text-sm font-medium">New Services</span>
          </div>
          <div className="text-white text-xs mt-2">12 new micro SAAS services added this week</div>
        </div>
      </div>
    </section>
  );
}