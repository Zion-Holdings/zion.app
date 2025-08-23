import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  ArrowRight,
  Star,
  Zap,
  CheckCircle,
  ExternalLink,
  TrendingUp
} from 'lucide-react';

interface ServiceCardProps {
  service: {
    id?: string;
    slug: string;
    name: string;
    description: string;
    category: string;
    type: string;
    features: string[];
    benefits: string[];
    pricing: {
      starter: string;
      professional?: string;
      enterprise?: string;
    };
    marketSize?: string;
    competitiveAdvantage?: string;
    icon?: string;
  };
}

// Icon mapping for different service categories
const getCategoryIcon = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('ai') || categoryLower.includes('consciousness')) return Brain;
  if (categoryLower.includes('quantum')) return Brain;
  if (categoryLower.includes('security') || categoryLower.includes('cyber')) return Brain;
  if (categoryLower.includes('infrastructure') || categoryLower.includes('it')) return Brain;
  if (categoryLower.includes('data') || categoryLower.includes('database')) return Brain;
  if (categoryLower.includes('space') || categoryLower.includes('rocket')) return Brain;
  if (categoryLower.includes('business') || categoryLower.includes('saas')) return Brain;
  if (categoryLower.includes('global') || categoryLower.includes('world')) return Brain;
  return Brain; // Default icon
};

const ServiceCard: React.FC<ServiceCardProps> = memo(({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const CategoryIcon = getCategoryIcon(service.category);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const handleServiceClick = useCallback(() => {
    // Add analytics tracking here if needed
    window.location.href = service.slug;
  }, [service.slug]);

  // Calculate card height based on expanded state
  const cardHeight = isExpanded ? 'auto' : 'h-full';

  return (
    <motion.div
      className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 ${cardHeight} overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Service Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <CategoryIcon className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium">
              {service.type}
            </div>
            {service.marketSize && (
              <div className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full">
                {service.marketSize}
              </div>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {service.name}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Quick Stats */}
        {service.competitiveAdvantage && (
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <TrendingUp className="w-3 h-3" />
            <span>{service.competitiveAdvantage}</span>
          </div>
        )}

        {/* Service Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-2 text-sm text-white/70"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: featureIndex * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </motion.div>
            ))}
            {!isExpanded && service.features.length > 3 && (
              <button
                onClick={handleToggleExpand}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
              >
                +{service.features.length - 3} more features
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
            {isExpanded && service.features.length > 3 && (
              <button
                onClick={handleToggleExpand}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
              >
                Show less
                <ArrowRight className="w-3 h-3 rotate-90" />
              </button>
            )}
          </div>
        </div>

        {/* Service Benefits */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Benefits
          </h4>
          <div className="space-y-2">
            {service.benefits.slice(0, isExpanded ? service.benefits.length : 2).map((benefit, benefitIndex) => (
              <motion.div
                key={benefitIndex}
                className="flex items-center gap-2 text-sm text-white/70"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: benefitIndex * 0.1 }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                <span className="line-clamp-1">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Footer */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-cyan-400">
              {service.pricing.starter}
            </div>
            <div className="text-xs text-white/50">
              Starting from
            </div>
          </div>

          <button
            onClick={handleServiceClick}
            className="w-full group/btn relative px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 font-medium rounded-xl transition-all duration-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="flex items-center justify-center gap-2">
              Learn More
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <div className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full backdrop-blur-sm">
          {service.category}
        </div>
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 border-2 border-cyan-400/0 rounded-2xl transition-all duration-300 pointer-events-none"
        animate={{
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.3)' : 'rgba(34, 211, 238, 0)',
        }}
      />
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;