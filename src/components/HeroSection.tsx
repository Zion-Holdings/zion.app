
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Users, Globe, Star, TrendingUp, Shield, Brain, Cloud, Code } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-zion-cyan/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles className="h-4 w-4" />
          <span>🚀 The Future of Tech is Here</span>
          <Sparkles className="h-4 w-4" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Welcome to </span>
          <span className="gradient-text neon-flicker">ZION</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zion-slate-light mb-8 leading-relaxed">
          The World's First Free Marketplace for
          <span className="text-zion-cyan"> High-Tech & AI</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
          Connect with cutting-edge technology solutions, top-tier AI talent, and innovative services. 
          From cybersecurity to quantum computing, we've got everything you need to transform your business.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Users, value: "10K+", label: "Verified Talents", color: "text-blue-400" },
            { icon: Zap, value: "500+", label: "AI Services", color: "text-purple-400" },
            { icon: Globe, value: "150+", label: "Countries", color: "text-cyan-400" },
            { icon: Star, value: "4.9", label: "Rating", color: "text-yellow-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-zion-blue-dark/30 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
              <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-zion-slate-light">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button asChild size="lg" className="cyber-button text-lg px-8 py-4 h-auto">
            <Link to="/marketplace">
              <span>Explore Marketplace</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan/50">
            <Link to="/request-quote">
              <span>Get Free Quote</span>
                              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Brain,
              title: "AI & Machine Learning",
              description: "Cutting-edge AI solutions for your business",
              features: ["Content Generation", "Predictive Analytics", "Natural Language Processing"],
              color: "from-purple-500/20 to-pink-500/20",
              borderColor: "border-purple-500/30"
            },
            {
              icon: Shield,
              title: "Cybersecurity",
              description: "Protect your digital assets with expert security",
              features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management"],
              color: "from-red-500/20 to-orange-500/20",
              borderColor: "border-red-500/30"
            },
            {
              icon: Cloud,
              title: "Cloud & Infrastructure",
              description: "Scalable cloud solutions for modern businesses",
              features: ["Migration Services", "DevOps Automation", "Performance Optimization"],
              color: "from-blue-500/20 to-cyan-500/20",
              borderColor: "border-blue-500/30"
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl bg-gradient-to-br ${service.color} border ${service.borderColor} hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 p-6 bg-zion-blue-dark/20 rounded-xl border border-zion-purple/20">
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-zion-slate-light text-xs">Microsoft</div>
            <div className="text-zion-slate-light text-xs">Google</div>
            <div className="text-zion-slate-light text-xs">Amazon</div>
            <div className="text-zion-slate-light text-xs">Meta</div>
            <div className="text-zion-slate-light text-xs">Netflix</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zion-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
