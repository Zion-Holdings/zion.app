import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users, Globe } from 'lucide-react';

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
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
          <Star className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-sm font-medium text-blue-300">
            Trusted by 10,000+ businesses worldwide
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            {title.split(' ').slice(0, 3).join(' ')}
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {title.split(' ').slice(3).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl sm:text-2xl text-blue-200 mb-4 font-medium">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="futuristic"
            size="lg"
            href={primaryAction.href}
            icon={primaryAction.icon}
            iconPosition="right"
            glow
            className="min-w-[200px]"
          >
            {primaryAction.text}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            href={secondaryAction.href}
            icon={secondaryAction.icon}
            iconPosition="left"
            glow
            className="min-w-[200px]"
          >
            {secondaryAction.text}
          </Button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-gray-300 text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 text-sm">10K+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300 text-sm">Global CDN</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300 text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Contact info overlay */}
      <div className="absolute top-8 right-8 text-right text-sm text-gray-400">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3">
          <p className="text-blue-300 font-medium">Contact Us</p>
          <p className="text-gray-300">+1 302 464 0950</p>
          <p className="text-gray-300">kleber@ziontechgroup.com</p>
          <p className="text-gray-300 text-xs">364 E Main St STE 1008</p>
          <p className="text-gray-300 text-xs">Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;