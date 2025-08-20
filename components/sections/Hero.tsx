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
        {/* Animated gradient backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.08),transparent_50%)] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 animate-grid-flow" />

      {/* Floating Animated Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/12 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Effect Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-line" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan-line" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan-line" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-20 animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 animate-scale-in backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              World&apos;s Most Advanced Autonomous Platform
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-x">
              {title}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light animate-fade-in-up">
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size="lg"
                  className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  style={{ animationDelay: '0.2s' }}
                >
                  {primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2 animate-bounce-x" />
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant="outline"
                  size="lg"
                  className="animate-scale-in border-white/30 hover:border-white/50 hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Enhanced Stats Section */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-3xl md:text-4xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300 animate-count-up`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  {/* Hover effect glow */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-400', '-500/20')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
    </section>
  );
};

export default Hero;