import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Globe } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  stats,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,112,243,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(121,40,202,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(248,28,229,0.1),transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Floating Icons */}
      <div className="absolute top-32 right-32 text-blue-400/20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Zap className="w-8 h-8" />
      </div>
      <div className="absolute bottom-32 left-32 text-purple-400/20 animate-float" style={{ animationDelay: '2s' }}>
        <Shield className="w-8 h-8" />
      </div>
      <div className="absolute top-1/3 left-20 text-green-400/20 animate-float" style={{ animationDelay: '1s' }}>
        <Globe className="w-6 h-6" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <Star className="w-4 h-4 fill-current" />
          <span>World&apos;s Most Advanced Autonomous Platform</span>
        </div>

        {/* Main Content */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed text-balance">
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size="lg"
                  className="animate-scale-in group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
                  style={{ animationDelay: '0.2s' }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {primaryAction.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant="outline"
                  size="lg"
                  className="animate-scale-in group flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hover:border-white"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Play className="w-5 h-5" />
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>99.99% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;