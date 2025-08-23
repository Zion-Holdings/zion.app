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
  variant = 'ai'
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
  };

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
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${service.name} service card - ${service.tagline}`}
      aria-describedby={`service-description-${service.id}`}
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
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {service.icon && <div className="text-4xl mb-2" aria-hidden="true">{service.icon}</div>}
            <div className="flex items-center gap-2">
              {variantStyles.icon}
            </div>
            {service.popular && (
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              </div>
            )}
          </div>

        {/* Service Info */}
        <div className="flex-1">
          <motion.h3 
            className={`text-xl font-bold mb-2 ${variantStyles.text}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {service.name}
          </h3>
          <p id={`service-description-${service.id}`} className="text-gray-300 text-sm mb-3">
            {service.tagline}
          </p>
          
          {service.tagline && (
            <motion.p 
              className="text-gray-300 text-sm mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {service.tagline}
            </motion.p>
          )}
          
          {(service.price || service.period) && (
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {service.price && <span className="text-2xl font-bold text-white">{service.price}</span>}
              {service.period && <span className="text-gray-400 text-sm ml-1">{service.period}</span>}
            </motion.div>
          )}

          {/* Features */}
          <div id={`features-${service.id}`} className="space-y-2 mb-4" role="list" aria-label="Service features">
            {service.features.slice(0, isExpanded ? undefined : 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-300" role="listitem">
                <div className={`w-2 h-2 rounded-full mr-3 ${variantStyles.accent}`} aria-hidden="true" />
                {feature}
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {service.features && service.features.length > 3 && (
            <motion.button 
              className={`text-sm ${variantStyles.text} hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400`}
              aria-expanded={isExpanded}
              aria-controls={`features-${service.id}`}
              aria-label={isExpanded ? 'Show fewer features' : `Show ${service.features.length - 3} more features`}
            >
              {isExpanded ? 'Show Less' : `Show ${service.features.length - 3} More`}
            </motion.button>
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