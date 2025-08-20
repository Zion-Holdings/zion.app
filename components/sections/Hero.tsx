import React from 'react';
import Button from '../ui/Button';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cursor-darker via-cursor-dark to-cursor-darker">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,212,170,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,122,204,0.05),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cursor-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cursor-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 container-cursor text-center">
        {/* Main Content */}
        <div className="mb-20 animate-fade-in">
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text leading-tight tracking-tight">
              {title}
            </h1>
            {/* Glow effect behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/20 via-cursor-accent/20 to-cursor-blue/20 blur-3xl -z-10 scale-110"></div>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto mb-16 leading-relaxed text-balance">
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size="lg"
                  className="animate-scale-in shadow-2xl shadow-cursor-blue/25 hover:shadow-cursor-blue/40 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: '0.2s' }}
                >
                  {primaryAction.text}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant="outline"
                  size="lg"
                  className="animate-scale-in hover:bg-cursor-light hover:border-cursor-blue hover:text-white transition-all duration-300"
                  style={{ animationDelay: '0.4s' }}
                >
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
                  <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-all duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/20 to-cursor-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;