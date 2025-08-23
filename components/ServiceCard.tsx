import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Users, TrendingUp, Zap, Shield, Brain, Atom, Rocket, Building } from 'lucide-react';

interface Service {
  id?: string;
  name: string;
  title?: string; // For backward compatibility
  description: string;
  category: string;
  type: string;
  pricing?: {
    starter: string;
    professional?: string;
    enterprise?: string;
    custom?: string;
  };
  features?: string[];
  benefits?: string[];
  rating?: number;
  responseTime?: string;
  clients?: number;
  performance?: string;
  security?: string;
  ai?: string;
  quantum?: string;
  space?: string;
  enterprise?: string;
  tagline?: string;
  useCases?: string[];
  marketSize?: string;
  targetAudience?: string;
  competitiveAdvantage?: string;
  contact?: string;
  mobile?: string;
  address?: string;
  website?: string;
  slug?: string;
}

interface ServiceCardProps {
  service: Service;
  priority?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Memoize icon selection for better performance
  const serviceIcon = useMemo(() => {
    const iconMap: Record<string, React.ComponentType<any>> = {
      ai: Brain,
      quantum: Atom,
      space: Rocket,
      enterprise: Building,
      cybersecurity: Shield,
      default: Zap
    };

    const category = service.category.toLowerCase();
    return iconMap[category] || iconMap.default;
  }, [service.category]);

  // Memoize color scheme
  const colorScheme = useMemo(() => {
    const colorMap: Record<string, string> = {
      ai: 'from-cyan-500 to-blue-600',
      quantum: 'from-blue-500 to-indigo-600',
      space: 'from-indigo-500 to-purple-600',
      enterprise: 'from-green-500 to-teal-600',
      cybersecurity: 'from-red-500 to-orange-600',
      default: 'from-purple-500 to-pink-600'
    };

    const category = service.category.toLowerCase();
    return colorMap[category] || colorMap.default;
  }, [service.category]);

  // Memoize gradient colors for text
  const textGradient = useMemo(() => {
    const gradientMap: Record<string, string> = {
      ai: 'from-cyan-400 to-blue-500',
      quantum: 'from-blue-400 to-indigo-500',
      space: 'from-indigo-400 to-purple-500',
      enterprise: 'from-green-400 to-teal-500',
      cybersecurity: 'from-red-400 to-orange-500',
      default: 'from-purple-400 to-pink-500'
    };

    const category = service.category.toLowerCase();
    return gradientMap[category] || gradientMap.default;
  }, [service.category]);

  // Handle hover state with debouncing
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Handle card expansion
  const handleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  // Memoize truncated description
  const truncatedDescription = useMemo(() => {
    const maxLength = 120;
    if (service.description.length <= maxLength) {
      return service.description;
    }
    return service.description.substring(0, maxLength) + '...';
  }, [service.description]);

  // Memoize service features for display
  const displayFeatures = useMemo(() => {
    if (!service.features || service.features.length === 0) {
      return [];
    }
    return service.features.slice(0, 3); // Show only first 3 features
  }, [service.features]);

  // Memoize service metrics
  const serviceMetrics = useMemo(() => {
    const metrics = [];
    
    if (service.rating) {
      metrics.push({
        icon: Star,
        value: service.rating,
        label: 'Rating',
        color: 'text-yellow-400'
      });
    }
    
    if (service.responseTime) {
      metrics.push({
        icon: Clock,
        value: service.responseTime,
        label: 'Response',
        color: 'text-green-400'
      });
    }
    
    if (service.clients) {
      metrics.push({
        icon: Users,
        value: `${service.clients}+`,
        label: 'Clients',
        color: 'text-blue-400'
      });
    }
    
    if (service.performance) {
      metrics.push({
        icon: TrendingUp,
        value: service.performance,
        label: 'Performance',
        color: 'text-purple-400'
      });
    }

    return metrics;
  }, [service.rating, service.responseTime, service.clients, service.performance]);

  return (
    <motion.div
      className="group relative bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      role="article"
      aria-label={`${service.title || service.name} service`}
    >
      {/* Background gradient overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${colorScheme} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} 
        aria-hidden="true"
      />

      {/* Header with icon and category */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 bg-gradient-to-r ${colorScheme} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            {React.createElement(serviceIcon, { className: "w-8 h-8 text-white", "aria-hidden": true })}
          </div>
          
          {/* Category badge */}
          <div className="flex flex-col items-end">
            <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${colorScheme} text-white rounded-full`}>
              {service.category}
            </span>
            <span className="text-xs text-gray-400 mt-1">{service.type}</span>
          </div>
        </div>

        {/* Service title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
          {service.title || service.name}
        </h3>

        {/* Service description */}
        <p className="text-gray-300 leading-relaxed mb-4">
          {isExpanded ? service.description : truncatedDescription}
        </p>

        {/* Expand/Collapse button for long descriptions */}
        {service.description.length > 120 && (
          <button
            onClick={handleExpand}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
            aria-expanded={isExpanded}
            aria-controls={`service-${service.id || 'default'}-description`}
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}

        {/* Service features */}
        {displayFeatures.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {displayFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <div className={`w-2 h-2 bg-gradient-to-r ${colorScheme} rounded-full mr-2`} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Service metrics */}
        {serviceMetrics.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="grid grid-cols-2 gap-3">
              {serviceMetrics.map((metric, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <metric.icon className={`w-4 h-4 ${metric.color}`} aria-hidden="true" />
                  <div className="text-xs">
                    <div className={`font-medium ${metric.color}`}>{metric.value}</div>
                    <div className="text-gray-400">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price information */}
        {service.pricing?.starter && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Starting at</span>
              <span className={`text-lg font-bold bg-gradient-to-r ${textGradient} bg-clip-text text-transparent`}>
                {service.pricing.starter}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer with CTA */}
      <div className="p-6 pt-0">
        <div className="flex items-center justify-between">
          <Link 
                          href={`/services/${service.id || (service.title || service.name).toLowerCase().replace(/\s+/g, '-')}`}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
            aria-label={`Learn more about ${service.title || service.name}`}
          >
            Learn More
          </Link>
          
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      {/* Hover effect indicator */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Priority indicator */}
      {priority && (
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;