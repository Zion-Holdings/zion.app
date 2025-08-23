import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ArrowRight, Eye, Heart, Infinity } from 'lucide-react';

interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    category: string;
    type: string;
    slug: string;
    features?: string[];
    pricing?: {
      monthly?: number;
      yearly?: number;
      custom?: boolean;
    };
    rating?: number;
    reviewCount?: number;
  };
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = service.slug;
    }
  };

  return (
    <motion.div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] h-full">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Star className="w-6 h-6 text-white" />
            </div>
            
            {/* Rating */}
            {service.rating && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-300">{service.rating}</span>
                {service.reviewCount && (
                  <span className="text-xs text-gray-500">({service.reviewCount})</span>
                )}
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Category and Type */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
              {service.category}
            </span>
            <span className="text-gray-500 text-xs">
              {service.type}
            </span>
          </div>
        </div>

        {/* Features Preview */}
        {service.features && service.features.length > 0 && (
          <div className="relative z-10 mb-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowFeatures(!showFeatures);
              }}
              className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors duration-200 flex items-center space-x-1"
            >
              <Eye className="w-4 h-4" />
              <span>{showFeatures ? 'Hide' : 'Show'} Features</span>
            </button>
            
            {showFeatures && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 space-y-2"
              >
                {service.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <Check className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-xs text-gray-500 text-center pt-2">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </motion.div>
            )}
          </div>
        )}

        {/* Pricing */}
        {service.pricing && (
          <div className="relative z-10 mb-4">
            <div className="bg-gray-800/40 rounded-lg p-3">
              <div className="text-center">
                {service.pricing.custom ? (
                  <div className="text-cyan-400 font-medium">Custom Pricing</div>
                ) : (
                  <div className="space-y-1">
                    {service.pricing.monthly && (
                      <div className="text-white font-bold">
                        ${service.pricing.monthly}
                        <span className="text-gray-400 text-sm font-normal">/month</span>
                      </div>
                    )}
                    {service.pricing.yearly && (
                      <div className="text-gray-400 text-sm">
                        ${service.pricing.yearly}/year
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="relative z-10">
          <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;