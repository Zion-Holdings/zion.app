import React from 'react';

interface FuturisticHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default FuturisticHero;
