import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Zap, 
  Brain, 
  Shield,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-sm animate-pulse">
                <Sparkles className="w-4 h-4 mr-2" />
                New Micro SAAS Services
              </Badge>
              <Badge className="bg-zion-cyan/20 text-white border-zion-cyan/30 px-4 py-2 text-sm">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </Badge>
              <Badge className="bg-zion-blue/20 text-zion-cyan border-zion-blue/30 px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Grade
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-white mb-2">Transform Your</span>
                <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent neon-pulse">
                  Business with AI
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-slate-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover cutting-edge micro SAAS services, IT solutions, and intelligent automation tools designed to drive innovation and growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan mb-1">50+</div>
                <div className="text-sm text-zion-slate-light">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple mb-1">1000+</div>
                <div className="text-sm text-zion-slate-light">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-blue mb-1">99.9%</div>
                <div className="text-sm text-zion-slate-light">Uptime</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 neon-glow"
                asChild
              >
                <Link to="/micro-saas-services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
              <div className="flex items-center justify-center lg:justify-start gap-6 opacity-60">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-zion-cyan" />
                  <span className="text-white text-sm">10K+ Users</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-white text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Cards */}
          <div className="relative hidden lg:block">
            <div className="relative space-y-6">
              {/* Main Service Card */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/50 rounded-2xl p-6 shadow-2xl shadow-zion-purple/20 hover:shadow-zion-purple/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">AI Chatbot Builder</h3>
                      <p className="text-zion-slate-light text-sm">No-code AI solutions</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">Advanced NLP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                      <span className="text-zion-slate-light">Multi-language</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
                      <span className="text-zion-slate-light">Analytics Dashboard</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-purple/20">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-bold">$299/mo</span>
                      <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        Popular
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Service Card */}
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500 ml-12">
                <div className="bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/50 rounded-2xl p-6 shadow-2xl shadow-zion-cyan/20 hover:shadow-zion-cyan/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Cybersecurity Audit</h3>
                      <p className="text-zion-slate-light text-sm">Complete security assessment</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">Penetration Testing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
                      <span className="text-zion-slate-light">Compliance Review</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-bold">$3,500</span>
                      <Badge className="bg-zion-cyan/20 text-white border-zion-cyan/30">
                        One-time
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-zion-purple/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-zion-cyan/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
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