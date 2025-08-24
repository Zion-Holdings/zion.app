import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain, Rocket, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    category: string[];
    features: string[];
    pricing?: string;
    rating?: number;
    icon?: string;
    href?: string;
    isPopular?: boolean;
    isNew?: boolean;
  };
  index: number;
  isReducedMotion?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isReducedMotion = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!isReducedMotion) {
      setIsHovered(true);
    }
  }, [isReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    if (!isReducedMotion) {
      setIsHovered(false);
    }
  }, [isReducedMotion]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const getCategoryColor = useCallback((category: string) => {
    const colors: Record<string, string> = {
      'AI': 'from-purple-400 to-pink-500',
      'Quantum': 'from-cyan-400 to-blue-500',
      'IT': 'from-emerald-400 to-teal-500',
      'Micro SAAS': 'from-orange-400 to-red-500',
      'Cybersecurity': 'from-red-400 to-pink-500',
      'Space': 'from-indigo-400 to-purple-500',
      'Blockchain': 'from-yellow-400 to-orange-500'
    };
    return colors[category] || 'from-gray-400 to-gray-500';
  }, []);

  const getIcon = useCallback((category: string) => {
    const icons: Record<string, React.ReactNode> = {
      'AI': <Brain className="w-6 h-6" />,
      'Quantum': <Zap className="w-6 h-6" />,
      'IT': <Shield className="w-6 h-6" />,
      'Micro SAAS': <Rocket className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Space': <Rocket className="w-6 h-6" />,
      'Blockchain': <Zap className="w-6 h-6" />
    };
    return icons[category] || <Star className="w-6 h-6" />;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: isReducedMotion ? 0.1 : 0.5, 
        delay: isReducedMotion ? 0 : index * 0.1 
      }}
      whileHover={!isReducedMotion ? { y: -5 } : {}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
      role="article"
      aria-labelledby={`service-${service.id}-title`}
      aria-describedby={`service-${service.id}-description`}
    >
      {/* Popular/New Badge */}
      {(service.isPopular || service.isNew) && (
        <div className="absolute -top-3 left-6">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            service.isPopular 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
              : 'bg-gradient-to-r from-green-400 to-emerald-500 text-black'
          }`}>
            {service.isPopular ? 'Popular' : 'New'}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category[0])} text-white`}>
            {getIcon(service.category[0])}
          </div>
          <div>
            <h3 
              id={`service-${service.id}-title`}
              className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
            >
              {service.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {service.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">{service.rating}</span>
                </div>
              )}
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{service.category[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p 
        id={`service-${service.id}-description`}
        className="text-gray-300 mb-4 line-clamp-3"
      >
        {service.description}
      </p>

      {/* Features Preview */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
            >
              {feature}
            </span>
          ))}
          {service.features.length > 3 && (
            <button
              onClick={toggleExpanded}
              className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded-full border border-cyan-500/50 hover:bg-cyan-600/30 transition-colors duration-200"
              aria-expanded={isExpanded}
              aria-controls={`features-${service.id}`}
            >
              +{service.features.length - 3} more
            </button>
          )}
        </div>
        
        {/* Expanded Features */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id={`features-${service.id}`}
            className="mt-3 pt-3 border-t border-gray-700/50"
          >
            <div className="flex flex-wrap gap-2">
              {service.features.slice(3).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Pricing */}
      {service.pricing && (
        <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="text-sm text-gray-400 mb-1">Starting at</div>
          <div className="text-xl font-bold text-white">{service.pricing}</div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <Link
          href={service.href || `/services/${service.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
          aria-label={`Learn more about ${service.name}`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        
        <button
          onClick={() => window.open(service.href, '_blank')}
          className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
          aria-label={`Open ${service.name} in new tab`}
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Effect Overlay */}
      {isHovered && !isReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default ServiceCard;