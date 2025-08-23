import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Clock, Users, Zap, Shield, Brain, Atom, Rocket, 
  ExternalLink, Heart, Share2, Bookmark
} from 'lucide-react';

interface ServiceCardProps {
  service: {
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
      custom: string;
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
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Get category icon and color
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('consciousness')) {
      return { icon: Brain, color: 'from-cyan-500 to-blue-600' };
    } else if (category.toLowerCase().includes('quantum')) {
      return { icon: Atom, color: 'from-blue-500 to-indigo-600' };
    } else if (category.toLowerCase().includes('cybersecurity') || category.toLowerCase().includes('security')) {
      return { icon: Shield, color: 'from-red-500 to-orange-600' };
    } else if (category.toLowerCase().includes('space')) {
      return { icon: Rocket, color: 'from-indigo-500 to-purple-600' };
    } else if (category.toLowerCase().includes('enterprise') || category.toLowerCase().includes('business')) {
      return { icon: Users, color: 'from-green-500 to-teal-600' };
    } else {
      return { icon: Zap, color: 'from-purple-500 to-pink-600' };
    }
  };

  const { icon: CategoryIcon, color } = getCategoryIcon(service.category);

  // Truncate description for better card layout
  const truncatedDescription = service.description.length > 120 
    ? service.description.substring(0, 120) + '...' 
    : service.description;

  const fullDescription = service.description;

  return (
    <motion.div
      className="group relative bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Header */}
      <div className="p-6">
        {/* Category badge and actions */}
        <div className="flex items-start justify-between mb-4">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white`}>
            <CategoryIcon className="w-3 h-3 mr-1" />
            {service.category}
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-lg transition-colors ${
                isLiked 
                  ? 'text-red-500 bg-red-500/10' 
                  : 'text-gray-400 hover:text-red-500 hover:bg-red-500/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isLiked ? 'Unlike service' : 'Like service'}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </motion.button>
            
            <motion.button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'text-yellow-500 bg-yellow-500/10' 
                  : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark service'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </motion.button>
          </div>
        </div>

        {/* Service title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {service.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-cyan-400 mb-3 font-medium">
          {service.tagline}
        </p>

        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-300 text-sm leading-relaxed">
            {showFullDescription ? fullDescription : truncatedDescription}
          </p>
          {service.description.length > 120 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-cyan-400 hover:text-cyan-300 text-xs mt-2 transition-colors"
            >
              {showFullDescription ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-xs text-gray-400">
            <Clock className="w-3 h-3 mr-1" />
            <span>Market: {service.marketSize}</span>
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <Users className="w-3 h-3 mr-1" />
            <span>{service.type}</span>
          </div>
        </div>

        {/* Features preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
          <div className="flex flex-wrap gap-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="inline-block px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Pricing preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Starting at</h4>
          <div className="text-2xl font-bold text-cyan-400">
            {service.pricing.starter}
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <Link href={service.slug || `/services/${service.id}`}>
            <motion.button 
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          
          <div className="flex items-center space-x-2">
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Share service"
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View external link"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 rounded-2xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;