import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Star,
  TrendingUp,
  Globe,
  Play
} from "lucide-react";

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix-style background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-zion-cyan text-xs font-mono animate-matrix-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              >
                {Math.random().toString(36).substring(2, 4)}
              </div>
            ))}
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 px-6 py-3 rounded-full border border-zion-purple/30 mb-8 animate-fade-in-down">
          <Zap className="h-5 w-5 text-zion-cyan animate-pulse" />
          <span className="text-sm font-medium text-zion-cyan">The Future of Tech & AI</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
          <span className="bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent animate-shimmer">
            ZION
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">
            The Tech & AI
          </span>
          <br />
          <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Marketplace
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Discover top AI and tech talent, services, and equipment in one place. 
          Transform your business with cutting-edge technology solutions.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Zap className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Shield className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">Enterprise-Grade</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Users className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">Global Network</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
            <Code className="h-4 w-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white">Innovation</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25">
            <Link to="/micro-saas-services">
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10">
            <Link to="/request-quote">
              <span>Get Started</span>
            </Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-sm text-zion-slate-light">AI Services</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2 group-hover:scale-110 transition-transform duration-300">
              10K+
            </div>
            <div className="text-sm text-zion-slate-light">Tech Talent</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm text-zion-slate-light">Countries</div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-sm text-zion-slate-light">Uptime</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zion-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-4 h-4 bg-zion-cyan rounded-full shadow-lg shadow-zion-cyan/50"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-10 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-3 h-3 bg-zion-purple rounded-full shadow-lg shadow-zion-purple/50"></div>
      </div>
      
      <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '5s' }}>
        <div className="w-2 h-2 bg-zion-blue rounded-full shadow-lg shadow-zion-blue/50"></div>
      </div>
    </section>
  );
}