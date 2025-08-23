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
  theme = 'quantum',
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Get variant-specific styles
  const getVariantStyles = useCallback((variantType: string) => {
    switch (variantType) {
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
          accent: 'bg-blue-400/20'
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

  const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  }, [handleCardClick]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`${service.name} service card`}
      aria-expanded={isExpanded}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      {/* Main Card */}
      <div
        className={`relative overflow-hidden rounded-2xl border-2 ${variantStyles.border} bg-gradient-to-br ${variantStyles.gradient} backdrop-blur-xl transition-all duration-500 ${
          isHovered ? 'shadow-2xl shadow-cyan-500/25' : 'shadow-lg'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-300">{service.tagline}</p>
                </div>
              </div>
            </div>
            {service.popular && (
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>

          {/* Price */}
          <div className="flex items-baseline space-x-2 mb-4">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">/{service.period}</span>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${variantStyles.accent}`} />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          {service.features.length > 3 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded();
              }}
              className={`text-sm ${variantStyles.text} hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded`}
              aria-label={isExpanded ? 'Show fewer features' : 'Show more features'}
            >
              {isExpanded ? 'Show Less' : `Show ${service.features.length - 3} More`}
            </button>
          )}

          {/* Action Button */}
          <div className="mt-6">
            <button
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${
                service.popular
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              aria-label={`Get started with ${service.name}`}
            >
              {service.popular ? 'Get Started' : 'Learn More'}
            </button>
          </div>
        </div>

        {/* Hover Effects */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${variantStyles.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        
        {/* Glow Effect */}
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${variantStyles.gradient} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500 -z-10`}
        />
      </div>
    </div>
  );
});

UltraFuturisticServiceCard2026.displayName = 'UltraFuturisticServiceCard2026';

export default UltraFuturisticServiceCard2026;