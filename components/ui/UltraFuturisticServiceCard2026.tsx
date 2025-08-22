import React, { useState, useCallback } from 'react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
}

interface UltraFuturisticServiceCard2026Props {
  service: Service;
  variant?: 'default' | 'quantum' | 'ai' | 'automation' | 'it' | 'emerging' | 'enterprise' | 'premium';
  theme?: 'quantum' | 'cyber' | 'neon';
  className?: string;
  onClick?: () => void;
}

const UltraFuturisticServiceCard2026: React.FC<UltraFuturisticServiceCard2026Props> = ({
  service,
  variant = 'default',
  theme = 'quantum',
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Get variant-specific styles
  const getVariantStyles = useCallback((variant: string) => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-500/30 hover:border-cyan-400/60',
          gradient: 'from-cyan-500/20 to-blue-500/20',
          text: 'text-cyan-400',
          accent: 'bg-cyan-500/20'
        };
      case 'ai':
        return {
          border: 'border-purple-500/30 hover:border-purple-400/60',
          gradient: 'from-purple-500/20 to-pink-500/20',
          text: 'text-purple-400',
          accent: 'bg-purple-500/20'
        };
      case 'automation':
        return {
          border: 'border-green-500/30 hover:border-green-400/60',
          gradient: 'from-green-500/20 to-emerald-500/20',
          text: 'text-green-400',
          accent: 'bg-green-500/20'
        };
      case 'it':
        return {
          border: 'border-blue-500/30 hover:border-blue-400/60',
          gradient: 'from-blue-500/20 to-indigo-500/20',
          text: 'text-blue-400',
          accent: 'bg-blue-500/20'
        };
      case 'emerging':
        return {
          border: 'border-yellow-500/30 hover:border-yellow-400/60',
          gradient: 'from-yellow-500/20 to-orange-500/20',
          text: 'text-yellow-400',
          accent: 'bg-yellow-500/20'
        };
      case 'enterprise':
        return {
          border: 'border-indigo-500/30 hover:border-indigo-400/60',
          gradient: 'from-indigo-500/20 to-purple-500/20',
          text: 'text-indigo-400',
          accent: 'bg-indigo-500/20'
        };
      case 'premium':
        return {
          border: 'border-amber-500/30 hover:border-amber-400/60',
          gradient: 'from-amber-500/20 to-yellow-500/20',
          text: 'text-amber-400',
          accent: 'bg-amber-500/20'
        };
      default:
        return {
          border: 'border-white/20 hover:border-white/40',
          gradient: 'from-white/10 to-white/5',
          text: 'text-white',
          accent: 'bg-white/10'
        };
    }
  }, []);

  const variantStyles = getVariantStyles(variant);

  const handleCardClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const toggleExpansion = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`${service.name} service card`}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.gradient} ${variantStyles.border} transition-all duration-500`} />
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-3" aria-hidden="true">
            {service.icon}
          </div>
          {service.popular && (
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${variantStyles.accent} ${variantStyles.text}`}>
              Popular
            </div>
          )}
        </div>

        {/* Service Info */}
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-2 ${variantStyles.text}`}>
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            {service.tagline}
          </p>
          
          {/* Price */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-white">
              {service.price}
            </span>
            <span className="text-gray-400 text-sm ml-1">
              {service.period}
            </span>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-4">
            {service.features.slice(0, isExpanded ? undefined : 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-300">
                <div className={`w-2 h-2 rounded-full mr-3 ${variantStyles.accent}`} />
                {feature}
              </div>
            ))}
          </div>

          {/* Show More/Less */}
          {service.features.length > 3 && (
            <button
              onClick={toggleExpansion}
              className={`text-sm ${variantStyles.text} hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400`}
            >
              {isExpanded ? 'Show Less' : `Show ${service.features.length - 3} More`}
            </button>
          )}
        </div>

        {/* Action Button */}
        <button
          className={`w-full mt-4 py-3 px-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
            variant === 'default'
              ? 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/40'
              : `bg-${variantStyles.text.replace('text-', '')}/20 text-${variantStyles.text.replace('text-', '')} hover:bg-${variantStyles.text.replace('text-', '')}/30 focus:ring-${variantStyles.text.replace('text-', '')}/40`
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Get Started
        </button>
      </div>

      {/* Hover Effects */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </div>
  );
};

export default UltraFuturisticServiceCard2026;