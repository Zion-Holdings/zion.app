import React, { useState, useCallback, memo } from 'react';

interface Service {
  id?: string;
  name: string;
  tagline?: string;
  description: string;
  price?: string;
  period?: string;
  features?: string[];
  popular?: boolean;
  category: string;
  icon?: string;
}

interface UltraFuturisticServiceCard2026Props {
  service: Service;
  variant?: 'ai' | 'quantum' | 'automation' | 'space' | 'enterprise';
}

const UltraFuturisticServiceCard2026: React.FC<UltraFuturisticServiceCard2026Props> = memo(({
  service,
  variant = 'default',
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'ai':
        return {
          gradient: 'from-cyan-500 to-blue-600',
          border: 'border-cyan-400/30',
          hoverBorder: 'hover:border-cyan-400/60',
          iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
          badgeBg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
          featureIcon: <Brain className="w-4 h-4 text-cyan-400" />
        };
      case 'quantum':
        return {
          gradient: 'from-purple-500 to-pink-600',
          border: 'border-purple-400/30',
          hoverBorder: 'hover:border-purple-400/60',
          iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
          badgeBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
          featureIcon: <Atom className="w-4 h-4 text-purple-400" />
        };
      case 'automation':
        return {
          gradient: 'from-green-500 to-emerald-600',
          border: 'border-green-400/30',
          hoverBorder: 'hover:border-green-400/60',
          iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
          badgeBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
          featureIcon: <Zap className="w-4 h-4 text-green-400" />
        };
      case 'space':
        return {
          gradient: 'from-blue-500 to-indigo-600',
          border: 'border-blue-400/30',
          hoverBorder: 'hover:border-blue-400/60',
          iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
          badgeBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
          featureIcon: <Rocket className="w-4 h-4 text-blue-400" />
        };
      case 'enterprise':
        return {
          gradient: 'from-gray-500 to-slate-600',
          border: 'border-gray-400/30',
          hoverBorder: 'hover:border-gray-400/60',
          iconBg: 'bg-gradient-to-br from-gray-400 to-slate-500',
          badgeBg: 'bg-gradient-to-r from-gray-500 to-slate-600',
          featureIcon: <Cpu className="w-4 h-4 text-gray-400" />
        };
      default:
        return {
          gradient: 'from-cyan-500 to-blue-600',
          border: 'border-cyan-400/30',
          hoverBorder: 'hover:border-cyan-400/60',
          iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
          badgeBg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
          featureIcon: <Target className="w-4 h-4 text-cyan-400" />
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