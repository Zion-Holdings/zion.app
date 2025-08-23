import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users, Globe, Rocket, Sparkles } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  background?: 'default' | 'futuristic' | 'particles' | 'grid' | 'matrix';
}

const Hero: React.FC<HeroProps> = ({
  title = "Transform Your Business with Real Micro SaaS Solutions",
  subtitle = "Powered by Zion Tech Group",
  description = "Discover 55+ fully-functional micro SaaS services that deliver immediate value. From AI-powered automation to cloud optimization, get enterprise-grade solutions without enterprise complexity.",
  primaryAction = {
    text: "Explore Services",
    href: "/micro-saas",
    icon: <ArrowRight className="w-4 h-4" />
  },
  secondaryAction = {
    text: "Watch Demo",
    href: "#demo",
    icon: <Play className="w-4 h-4" />
  },
  stats = [
    { value: '55+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
  ],
  background = 'futuristic'
}) => {
  const backgroundClasses = {
    default: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    futuristic: 'futuristic-bg',
    particles: 'particles-bg',
    grid: 'grid-bg',
    matrix: 'matrix-bg'
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" role="banner">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="floating-orbs" />
        
        {/* Cyberpunk scan lines */}
        <div className="cyberpunk-scan" />
        
        {/* Energy pulse rings */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-500/20 rounded-full animate-ping" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-purple-500/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Matrix-style data streams */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="data-stream-line" style={{ left: '10%', animationDelay: '0s' }} />
          <div className="data-stream-line" style={{ left: '30%', animationDelay: '2s' }} />
          <div className="data-stream-line" style={{ left: '70%', animationDelay: '4s' }} />
          <div className="data-stream-line" style={{ left: '90%', animationDelay: '6s' }} />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Floating Elements - Reduced animation complexity for better performance */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-16 sm:mb-20 animate-fade-in">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in">
              <Zap className="w-4 h-4 mr-2" />
              World&apos;s Most Advanced Autonomous Platform
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-white leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light">
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20">
              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size="lg"
                  className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 w-full sm:w-auto"
                  style={{ animationDelay: '0.2s' }}
                >
                  {primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant="outline"
                  size="lg"
                  className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5 w-full sm:w-auto"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Stats Section */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto animate-fade-in mb-16 sm:mb-20" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Hover effect indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-sm">10,000+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Global Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* Floating action indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center" role="presentation">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Decorative Elements - Reduced for better performance */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;