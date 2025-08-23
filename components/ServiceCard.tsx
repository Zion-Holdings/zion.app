import React, { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, TrendingUp } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    category: string;
    type: string;
    pricing: {
      starter: string;
      professional: string;
      enterprise: string;
      custom: string;
    };
    features?: string[];
    benefits?: string[];
    useCases?: string[];
    marketSize?: string;
    targetAudience?: string;
    competitiveAdvantage?: string;
    contact?: string;
    mobile?: string;
    address?: string;
    website?: string;
    slug: string;
  };
  index: number;
  isFeatured?: boolean;
  onClick?: (service: any) => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({
  service,
  index,
  isFeatured = false,
  onClick,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(service);
    } else {
      window.location.href = service.slug;
    }
  }, [onClick, service]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Consciousness': 'from-purple-500 to-pink-500',
      'Quantum AI': 'from-blue-500 to-cyan-500',
      'Quantum Technology': 'from-indigo-500 to-purple-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Business Solutions': 'from-emerald-500 to-teal-500',
      'AI Services': 'from-purple-500 to-pink-500',
      'IT Services': 'from-emerald-500 to-teal-500',
      'Micro SaaS': 'from-yellow-500 to-orange-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  const getCategoryIcon = (category: string) => {
    // You can add more icons based on category
    return <Star className="w-5 h-5" />;
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Learn more about ${service.name}`}
    >
      <div className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50 overflow-hidden">
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
        
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Service type badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full backdrop-blur-sm">
            {service.type}
          </span>
        </div>

        <div className="relative z-10">
          {/* Header with icon and category */}
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300`}>
              {getCategoryIcon(service.category)}
            </div>
            
            <div className="text-right">
              <div className="text-xs text-gray-400 mb-1">Category</div>
              <div className="text-sm font-medium text-white">{service.category}</div>
            </div>
          </div>

          {/* Service name */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
            {service.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {service.description}
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {service.marketSize && (
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <TrendingUp className="w-3 h-3" />
                <span>{service.marketSize}</span>
              </div>
            )}
            {service.targetAudience && (
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Users className="w-3 h-3" />
                <span className="truncate">{service.targetAudience.split(',')[0]}</span>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-gray-400 mb-1">Starting at</div>
              <div className="text-2xl font-bold text-cyan-400">
                {service.pricing.starter}
              </div>
            </div>
            
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Features preview */}
          {service.features && service.features.length > 0 && (
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-2">Key Features</div>
              <div className="flex flex-wrap gap-1">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50"
                  >
                    {feature}
                  </span>
                ))}
                {service.features.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md border border-gray-700/50">
                    +{service.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-2 border-t border-gray-700/30">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              Learn More
            </button>
          </div>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;