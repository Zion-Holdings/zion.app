import React, { useState, useCallback, memo } from 'react';

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

const UltraFuturisticServiceCard2026: React.FC<UltraFuturisticServiceCard2026Props> = memo(({
  service,
  variant = 'default',
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
    } else {
      setIsExpanded(!isExpanded);
    }
  }, [onClick, isExpanded]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  }, [handleCardClick]);

  const handleToggleExpand = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${service.name} service card - ${service.tagline}`}
      aria-expanded={isExpanded}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Main Card */}
      <div
        className={`relative overflow-hidden rounded-2xl border-2 ${variantStyles.border} bg-gradient-to-br ${variantStyles.gradient} backdrop-blur-sm transition-all duration-500 ${
          isHovered ? 'shadow-2xl shadow-cyan-500/25' : 'shadow-lg'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{service.icon}</span>
              <div>
                <h3 className={`text-xl font-bold ${variantStyles.text}`}>
                  {service.name}
                </h3>
                <p className="text-sm text-gray-400">{service.category}</p>
              </div>
            </div>
            <button
              onClick={handleToggleExpand}
              className={`p-2 rounded-full ${variantStyles.accent} hover:bg-opacity-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50`}
              aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
            >
              <svg
                className={`w-4 h-4 ${variantStyles.text} transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Tagline */}
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {service.tagline}
          </p>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">/{service.period}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-4">
            {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${variantStyles.accent}`} />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Indicator */}
          {service.features.length > 3 && (
            <div className="text-center">
              <span className={`text-xs ${variantStyles.text} cursor-pointer hover:underline`}>
                {isExpanded ? 'Show less' : `Show ${service.features.length - 3} more features`}
              </span>
            </div>
          )}

          {/* CTA Button */}
          <button
            className={`w-full mt-4 py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50`}
            onClick={(e) => {
              e.stopPropagation();
              // Handle CTA action
            }}
            aria-label={`Get started with ${service.name}`}
          >
            Get Started
          </button>
        </div>

        {/* Hover Effects */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>
    </div>
  );
});

UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';

export default UltraFuturisticServiceCard2026;