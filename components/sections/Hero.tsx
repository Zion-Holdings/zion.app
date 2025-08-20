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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cursor-blue/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cursor-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cursor-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 container-wide text-center">
        {/* Main Content */}
        <div className="mb-24 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 gradient-text leading-none tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-6xl mx-auto mb-16 leading-relaxed font-light">
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size="lg"
                  className="animate-scale-in shadow-glow-lg hover:shadow-glow"
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
                  className="animate-scale-in backdrop-blur-sm"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-5xl md:text-6xl font-black mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-base md:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-cursor-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cursor-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-cursor-purple rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cursor-green rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Hero;