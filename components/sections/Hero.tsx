import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(168,85,247,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(236,72,153,0.04),transparent_40%)]" />
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20" />
      <div className="absolute inset-0 bg-neural-dots bg-[size:20px_20px] opacity-15" />
      <div className="absolute inset-0 bg-quantum-waves opacity-10" />
      <div className="absolute inset-0 bg-hologram-pattern opacity-5" />

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-cyber-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-cyber-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-cyber-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-cyan-500/8 rounded-full blur-2xl animate-hologram" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-pink-500/8 rounded-full blur-2xl animate-neon-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Energy Waves */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-energy-wave" />
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-green-500 to-transparent animate-energy-wave" style={{ animationDelay: '2s' }} />
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 bg-matrix-rain opacity-5 animate-matrix" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-20 animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 animate-scale-in backdrop-blur-sm shadow-lg shadow-blue-500/25">
              <Zap className="w-4 h-4 mr-2 animate-neon-pulse" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                World&apos;s Most Advanced Autonomous Platform
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              {title}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size="lg"
                  className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
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
                  className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-3xl md:text-4xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300 animate-neon-pulse`}>
                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-current/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow" />
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2 group hover:text-blue-400 transition-colors duration-300">
              <Shield className="w-4 h-4 group-hover:animate-neon-pulse" />
              <span className="group-hover:animate-shimmer">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-green-400 transition-colors duration-300">
              <Users className="w-4 h-4 group-hover:animate-neon-pulse" />
              <span className="group-hover:animate-shimmer">10,000+ Developers</span>
            </div>
            <div className="flex items-center gap-2 group hover:text-yellow-400 transition-colors duration-300">
              <Star className="w-4 h-4 text-yellow-400 group-hover:animate-neon-pulse" />
              <span className="group-hover:animate-shimmer">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 animate-pulse shadow-lg shadow-blue-500/50" />
        </div>
        <div className="absolute -inset-2 border border-blue-500/20 rounded-full animate-ping" />
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-neon-pulse shadow-lg shadow-blue-500/50" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-neon-pulse shadow-lg shadow-green-500/50" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-neon-pulse shadow-lg shadow-purple-500/50" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-1/6 w-1 h-1 bg-cyan-500 rounded-full animate-hologram shadow-lg shadow-cyan-500/50" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-pink-500 rounded-full animate-cyber-float shadow-lg shadow-pink-500/50" style={{ animationDelay: '4s' }} />
      
      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
            <stop offset="50%" stopColor="rgba(34,197,94,0.3)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.3)" />
          </linearGradient>
        </defs>
        <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#neuralGradient)" strokeWidth="1" className="animate-neural-network" />
        <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="url(#neuralGradient)" strokeWidth="1" className="animate-neural-network" style={{ animationDelay: '2s' }} />
      </svg>
    </section>
  );
};

export default Hero;