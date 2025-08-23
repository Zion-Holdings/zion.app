import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
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
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${backgroundClasses[background]}`}>
      {/* Enhanced background effects */}
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

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-5 h-5 text-yellow-400 mr-3 animate-pulse" />
          <span className="text-sm font-medium text-blue-300">
            Trusted by 10,000+ businesses worldwide
          </span>
          <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-ping" />
        </div>

        {/* Main heading with enhanced typography */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up stagger-1">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent neon-text">
            {title.split(' ').slice(0, 3).join(' ')}
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
            {title.split(' ').slice(3).join(' ')}
          </span>
        </h1>

        {/* Subtitle with glow effect */}
        {subtitle && (
          <p className="text-xl sm:text-2xl text-blue-200 mb-4 font-medium animate-fade-in-up stagger-2 glow">
            {subtitle}
          </p>
        )}

        {/* Description with enhanced styling */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-3">
          {description}
        </p>

        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up stagger-4">
          <Link href={primaryAction.href}>
            <Button
              variant="primary"
              size="lg"
              className="min-w-[200px] btn-futuristic hover-glow"
            >
              {primaryAction.text}
              {primaryAction.icon && <span className="ml-2">{primaryAction.icon}</span>}
            </Button>
          </Link>
          
          <Link href={secondaryAction.href}>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              {secondaryAction.icon && <span className="mr-2">{secondaryAction.icon}</span>}
              {secondaryAction.text}
            </Button>
          </Link>
        </div>

        {/* Enhanced stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up stagger-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
              
              {/* Hover effect indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <div className="mt-16 animate-fade-in-up stagger-5">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">SOC 2 Compliant</span>
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

      {/* Additional floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse" />
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Contact information floating card */}
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="text-center">
            <div className="text-2xl mb-2">📞</div>
            <div className="text-sm text-white font-semibold">+1 302 464 0950</div>
            <div className="text-xs text-gray-300">kleber@ziontechgroup.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;