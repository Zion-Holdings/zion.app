import React from 'react';
import EnhancedButton from './EnhancedButton';

interface FuturisticHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title = 'The Future of AI is Here',
  subtitle = 'Discover cutting-edge AI solutions that transform your business',
  ctaText = 'Get Started',
  ctaHref = '/services'
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <EnhancedButton href={ctaHref} variant="primary" size="lg">
            {ctaText}
          </EnhancedButton>
          <EnhancedButton href="/about" variant="outline" size="lg">
            Learn More
          </EnhancedButton>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce">🚀</div>
      <div className="absolute top-40 right-10 text-4xl animate-bounce animation-delay-1000">🤖</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-bounce animation-delay-2000">⚡</div>
      <div className="absolute bottom-40 right-20 text-4xl animate-bounce animation-delay-3000">💡</div>
    </section>
  );
};

export default FuturisticHero;
