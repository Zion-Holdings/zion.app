import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Sparkles, Clock, Users, TrendingUp, 
  Brain, Atom, Shield, Rocket, Target, Zap, Globe, Cpu
} from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name?: string;
    title?: string;
    tagline?: string;
    description: string;
    category: string;
    type: string;
    features: string[];
    pricing?: {
      starter?: string;
      professional?: string;
      enterprise?: string;
      custom?: string;
      starting?: string;
      currency?: string;
    };
    badge?: string;
    icon?: string;
    color?: string;
    rating?: number;
    users?: string;
    responseTime?: string;
    marketSize?: string;
    targetAudience?: string;
    competitiveAdvantage?: string;
    slug?: string;
  };
  onClick?: () => void;
  featured?: boolean;
  className?: string;
}

const getCategoryIcon = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('ai') || categoryLower.includes('consciousness')) return Brain;
  if (categoryLower.includes('quantum')) return Atom;
  if (categoryLower.includes('cybersecurity') || categoryLower.includes('security')) return Shield;
  if (categoryLower.includes('space')) return Rocket;
  if (categoryLower.includes('business') || categoryLower.includes('intelligence')) return Target;
  if (categoryLower.includes('automation') || categoryLower.includes('autonomous')) return Zap;
  if (categoryLower.includes('global') || categoryLower.includes('worldwide')) return Globe;
  return Cpu;
};

const getCategoryColor = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes('ai') || categoryLower.includes('consciousness')) return 'from-purple-500 to-pink-500';
  if (categoryLower.includes('quantum')) return 'from-blue-500 to-cyan-500';
  if (categoryLower.includes('cybersecurity') || categoryLower.includes('security')) return 'from-red-500 to-orange-500';
  if (categoryLower.includes('space')) return 'from-indigo-500 to-purple-500';
  if (categoryLower.includes('business') || categoryLower.includes('intelligence')) return 'from-emerald-500 to-teal-500';
  if (categoryLower.includes('automation') || categoryLower.includes('autonomous')) return 'from-yellow-500 to-orange-500';
  if (categoryLower.includes('global') || categoryLower.includes('worldwide')) return 'from-cyan-500 to-blue-500';
  return 'from-gray-500 to-gray-700';
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  onClick, 
  featured = false, 
  className = '' 
}) => {
  const CategoryIcon = getCategoryIcon(service.category);
  const categoryColor = getCategoryColor(service.category);
  
  // Handle both name and title properties
  const serviceTitle = service.title || service.name || 'Service';
  
  // Handle pricing display
  const getPricingDisplay = () => {
    if (service.pricing?.starting && service.pricing?.currency) {
      return {
        text: `Starting at ${service.pricing.currency}${service.pricing.starting}`,
        price: `${service.pricing.currency}${service.pricing.starting}`
      };
    }
    if (service.pricing?.starter) {
      return {
        text: `Starting at ${service.pricing.starter}`,
        price: service.pricing.starter
      };
    }
    return null;
  };
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (service.slug) {
      window.location.href = service.slug;
    } else {
      window.location.href = `/services/${service.id}`;
    }
  };

  const pricingDisplay = getPricingDisplay();

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer ${className}`}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Learn more about ${serviceTitle}`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 delay-100" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColor} group-hover:scale-110 transition-transform duration-300`}>
              <CategoryIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-400 font-medium">{service.category}</div>
              <div className="text-xs text-gray-500">{service.type}</div>
            </div>
          </div>
          
          {/* Badges */}
          <div className="flex items-center space-x-2">
            {featured && (
              <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full flex items-center">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </div>
            )}
            {service.badge && (
              <div className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                {service.badge}
              </div>
            )}
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex-1 mb-4">
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
            {serviceTitle}
          </h3>
          {service.tagline && (
            <p className="text-sm text-cyan-400 mb-2 font-medium">
              {service.tagline}
            </p>
          )}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Features Preview */}
        {service.features && service.features.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400 font-medium">Key Features</span>
            </div>
            <div className="space-y-1">
              {service.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
              {service.features.length > 2 && (
                <div className="text-xs text-gray-600">
                  +{service.features.length - 2} more features
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {service.rating && (
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span>{service.rating}</span>
            </div>
          )}
          {service.users && (
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <Users className="w-3 h-3 text-blue-400" />
              <span>{service.users}</span>
            </div>
          )}
          {service.responseTime && (
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <Clock className="w-3 h-3 text-green-400" />
              <span>{service.responseTime}</span>
            </div>
          )}
          {!service.rating && !service.users && !service.responseTime && service.marketSize && (
            <div className="flex items-center space-x-1 text-xs text-gray-400 col-span-3">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span>{service.marketSize}</span>
            </div>
          )}
        </div>

        {/* Pricing and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          {pricingDisplay ? (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Starting at</span>
              <span className="text-lg font-bold text-white">
                {pricingDisplay.price}
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Available Now</span>
            </div>
          )}
          
          <motion.div
            className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
      </div>

      {/* Enhanced Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;