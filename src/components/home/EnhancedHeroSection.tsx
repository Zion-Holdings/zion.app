import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Zap, 
  Shield,
  Brain,
  Cloud,
  Code,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { SimpleFuturisticBackground } from "@/components/ui/FuturisticBackground";

export function EnhancedHeroSection() {
  const stats = [
    { label: 'Active Users', value: '50K+', icon: <Users className="h-5 w-5" /> },
    { label: 'Services Delivered', value: '10K+', icon: <Zap className="h-5 w-5" /> },
    { label: 'Success Rate', value: '99.9%', icon: <Shield className="h-5 w-5" /> },
    { label: 'Global Reach', value: '150+', icon: <TrendingUp className="h-5 w-5" /> }
  ];

  const features = [
    'AI-Powered Matching',
    '24/7 Global Support',
    'Enterprise Security',
    'Real-time Analytics',
    'Multi-platform Integration',
    'Custom Solutions'
  ];

  return (
    <SimpleFuturisticBackground>
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Brain className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm font-medium text-zion-cyan">AI-Powered Technology Solutions</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    The Future of
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-white bg-clip-text text-transparent">
                    Tech & AI
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Marketplace
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zion-slate-light max-w-2xl leading-relaxed">
                  Discover cutting-edge AI services, enterprise IT solutions, and innovative SaaS platforms. 
                  Connect with top talent and transform your business with next-generation technology.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold gap-3 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 px-8 py-4 text-lg font-semibold gap-3 backdrop-blur-sm"
                  onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm text-zion-slate-light">Trusted by 50K+ users</span>
                </div>
                
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-zion-slate-light ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 w-64 h-40 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl backdrop-blur-sm animate-float">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-zion-cyan" />
                      <span className="text-sm font-medium text-white">AI Services</span>
                    </div>
                    <p className="text-xs text-zion-slate-light">Content Generation, Analytics, Automation</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-56 h-32 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 border border-zion-blue/30 rounded-2xl backdrop-blur-sm animate-float delay-1000">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="h-5 w-5 text-zion-blue" />
                      <span className="text-sm font-medium text-white">Cloud Solutions</span>
                    </div>
                    <p className="text-xs text-zion-slate-light">Infrastructure, Security, Management</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-72 h-44 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl backdrop-blur-sm animate-float delay-500">
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Code className="h-6 w-6 text-zion-cyan" />
                      <span className="text-lg font-semibold text-white">Development</span>
                    </div>
                    <p className="text-sm text-zion-slate-light">Custom Software, APIs, Integration</p>
                    <div className="mt-3 flex justify-center">
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                        Most Popular
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Central Orb */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-zion-purple-dark via-zion-slate to-zion-blue-dark rounded-full"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow delay-1000"></div>
                  <div className="absolute inset-12 bg-gradient-to-r from-zion-purple-dark via-zion-slate to-zion-blue-dark rounded-full"></div>
                  <div className="absolute inset-16 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow delay-500"></div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">ZION</div>
                      <div className="text-sm text-zion-cyan">Tech Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-zion-cyan group-hover:text-white transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already transforming their operations with our cutting-edge 
                technology solutions. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact Our Team
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/services', '_blank')}
                >
                  <Zap className="h-4 w-4" />
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SimpleFuturisticBackground>
  );
}