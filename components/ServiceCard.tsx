import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, Clock, Users, TrendingUp, Target } from 'lucide-react';

interface ServiceCardProps {
  service: {
    slug: string;
    name: string;
    description: string;
    category: string;
    type: string;
    features?: string[];
    pricing?: {
      starter: string;
      professional: string;
      enterprise: string;
      custom: string;
    };
    benefits?: string[];
    useCases?: string[];
    marketSize?: string;
    targetAudience?: string;
    competitiveAdvantage?: string;
  };
  onClick: () => void;
  onHover: () => void;
  isHovered: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  onClick, 
  onHover, 
  isHovered 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = useCallback(() => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    onClick();
  }, [onClick]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  const handleMouseEnter = useCallback(() => {
    onHover();
  }, [onHover]);

  const handleMouseLeave = useCallback(() => {
    // Optional: handle mouse leave if needed
  }, []);

  return (
    <motion.div
      className="group cursor-pointer h-full"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`View ${service.name} service details`}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: isPressed ? 0.98 : 1,
        y: isHovered ? -5 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                {service.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                  {service.category}
                </span>
                <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full">
                  {service.type}
                </span>
              </div>
            </div>
          </div>
          
          {/* External link indicator */}
          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Features (if available) */}
        {service.features && service.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/20"
                >
                  {feature}
                </span>
              ))}
              {service.features.length > 3 && (
                <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded-full">
                  +{service.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-gray-400">
                           {/* Market Size */}
             {service.marketSize && (
               <div className="flex items-center gap-1">
                 <TrendingUp className="w-3 h-3 text-green-400" />
                 <span className="text-xs">{service.marketSize}</span>
               </div>
             )}
             
             {/* Type */}
             <div className="flex items-center gap-1">
               <Target className="w-3 h-3 text-blue-400" />
               <span className="text-xs">{service.type}</span>
             </div>
            </div>
            
                         {/* Pricing */}
             {service.pricing && (
               <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                 From {service.pricing.starter}
               </span>
             )}
          </div>
          
          {/* Action indicator */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">
              Click to learn more
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;