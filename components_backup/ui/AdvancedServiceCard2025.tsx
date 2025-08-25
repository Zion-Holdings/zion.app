import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Building, Rocket, Star, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

interface AdvancedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  type: string;
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom?: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  marketSize: string;
  targetAudience: string;
  competitiveAdvantage: string;
  contact: string;
  mobile: string;
  address: string;
  website: string;
  slug: string;
}

interface AdvancedServiceCard2025Props {
  service: AdvancedService;
  variant?: 'default' | 'quantum' | 'ai' | 'automation' | 'it' | 'emerging' | 'enterprise' | 'premium';
  theme?: 'quantum' | 'cyber' | 'neon';
  className?: string;
  onClick?: () => void;
}

const AdvancedServiceCard2025: React.FC<AdvancedServiceCard2025Props> = ({
  service,
  variant = 'default',
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Get variant-specific styles
  const variantStyles = useMemo(() => {
    if (variant === 'premium') {
      return {
        container: 'border-cyan-400/50 bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
        icon: <Crown className="w-5 h-5 text-yellow-400" />,
        badge: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black',
        button: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
        text: 'text-cyan-50',
        accent: 'bg-cyan-400'
      };
    }
    
    if (variant === 'enterprise') {
      return {
        container: 'border-purple-400/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20',
        icon: <Building className="w-5 h-5 text-purple-400" />,
        badge: 'bg-gradient-to-r from-purple-500 to-pink-600',
        button: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
        text: 'text-purple-50',
        accent: 'bg-purple-400'
      };
    }
    
    if (variant === 'ai') {
      return {
        container: 'border-blue-400/50 bg-gradient-to-br from-blue-900/20 to-indigo-900/20',
        icon: <Zap className="w-5 h-5 text-blue-400" />,
        badge: 'bg-gradient-to-r from-blue-500 to-indigo-600',
        button: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
        text: 'text-blue-50',
        accent: 'bg-blue-400'
      };
    }
    
    // Default variant
    return {
      container: 'border-gray-600/50 bg-gradient-to-br from-gray-800/20 to-gray-700/20',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      badge: 'bg-gradient-to-r from-cyan-500 to-blue-600',
      button: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
      text: 'text-gray-50',
      accent: 'bg-cyan-400'
    };
  }, [variant]);

  const handleCardClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const toggleExpanded = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Data')) return <Zap className="w-5 h-5 text-blue-400" />;
    if (category.includes('Security') || category.includes('Compliance')) return <Shield className="w-5 h-5 text-green-400" />;
    if (category.includes('Infrastructure') || category.includes('Cloud')) return <Building className="w-5 h-5 text-purple-400" />;
    if (category.includes('Quantum')) return <Star className="w-5 h-5 text-cyan-400" />;
    return <Rocket className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      aria-label={`${service.name} service card`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Layers */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.container} transition-all duration-500`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.container} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getCategoryIcon(service.category)}
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variantStyles.badge}`}>
                {service.type}
              </span>
            </div>
          </div>
          <motion.div
            className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="text-gray-400" />
          </motion.div>
        </div>

        {/* Title and Description */}
        <div className="mb-4 flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            {service.tagline}
          </p>
          {isExpanded && (
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Starting at</h4>
          <div className="text-white font-bold text-lg">
            {service.pricing.starter}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Benefits</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start">
                <span className="text-green-400 mr-2 text-xs mt-0.5">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Market Size */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-1">Market Size</h4>
          <p className="text-white text-sm font-semibold">{service.marketSize}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto space-y-2">
          <Link 
            href={`/services/${service.slug}`}
            className={`block w-full text-center px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${variantStyles.button}`}
            onClick={(e) => e.stopPropagation()}
          >
            Learn More
          </Link>
          <Link 
            href="/contact"
            className="block w-full text-center px-4 py-2 rounded-lg font-semibold border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Get Quote
          </Link>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpanded}
          className="absolute bottom-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

export default AdvancedServiceCard2025;