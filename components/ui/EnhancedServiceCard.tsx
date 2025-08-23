import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Heart,
  Share2
} from 'lucide-react';

interface ServiceFeature {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  features?: ServiceFeature[];
  pricing?: {
    startingAt: string;
    currency: string;
    period: string;
  };
  rating?: number;
  reviewCount?: number;
  image?: string;
  slug: string;
  isPopular?: boolean;
  isNew?: boolean;
  tags?: string[];
  estimatedDelivery?: string;
  technologies?: string[];
  index: number;
}

const EnhancedServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  category,
  type,
  features = [],
  pricing,
  rating = 0,
  reviewCount = 0,
  image,
  slug,
  isPopular = false,
  isNew = false,
  estimatedDelivery,
  technologies = [],
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (isInView && image) {
      // Trigger image loading
      const img = new window.Image();
      img.src = image;
    }
  }, [isInView, image]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: `https://ziontechgroup.com/services/${slug}`
      });
    } else {
      navigator.clipboard.writeText(`https://ziontechgroup.com/services/${slug}`);
    }
  };

  const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Popular/New Badge */}
      {(isPopular || isNew) && (
        <div className="absolute top-4 left-4 z-10">
          {isPopular && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              <TrendingUp className="w-3 h-3 inline mr-1" />
              Popular
            </motion.div>
          )}
          {isNew && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              <Zap className="w-3 h-3 inline mr-1" />
              New
            </motion.div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
            isLiked 
              ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
              : 'bg-gray-800/50 text-gray-400 border border-gray-600/30 hover:bg-gray-700/50'
          }`}
          aria-label={isLiked ? 'Unlike service' : 'Like service'}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShare}
          className="p-2 rounded-full bg-gray-800/50 text-gray-400 border border-gray-600/30 hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-200"
          aria-label="Share service"
        >
          <Share2 className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <motion.div variants={contentVariants} className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>
          </div>

          {/* Category and Type */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
              {category}
            </span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
              {type}
            </span>
          </div>
        </motion.div>

        {/* Rating and Reviews */}
        {(rating > 0 || reviewCount > 0) && (
          <motion.div variants={contentVariants} className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-gray-400">
              {formatRating(rating)} ({reviewCount} reviews)
            </span>
          </motion.div>
        )}

        {/* Features Preview */}
        {features.length > 0 && (
          <motion.div variants={contentVariants} className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-300">Key Features</span>
              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {showFeatures ? 'Show Less' : 'Show More'}
              </button>
            </div>
            
            <AnimatePresence>
              {showFeatures ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="flex items-center gap-2">
                  {features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span className="text-gray-400">{feature.name}</span>
                    </div>
                  ))}
                  {features.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{features.length - 2} more
                    </span>
                  )}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Technologies */}
        {technologies.length > 0 && (
          <motion.div variants={contentVariants} className="mb-4">
            <span className="text-sm font-medium text-gray-300 mb-2 block">Technologies</span>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-600/30"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          </motion.div>
        )}

        {/* Pricing and Delivery */}
        <motion.div variants={contentVariants} className="mb-6">
          <div className="flex items-center justify-between">
            {pricing && (
              <div className="text-left">
                <span className="text-xs text-gray-400 block">Starting at</span>
                <span className="text-2xl font-bold text-white">
                  {pricing.currency}{pricing.startingAt}
                </span>
                <span className="text-sm text-gray-400">/{pricing.period}</span>
              </div>
            )}
            
            {estimatedDelivery && (
              <div className="text-right">
                <span className="text-xs text-gray-400 block">Estimated Delivery</span>
                <div className="flex items-center gap-1 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{estimatedDelivery}</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div variants={contentVariants}>
          <Link href={`/services/${slug}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform group-hover:shadow-lg group-hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 pointer-events-none"
      />
    </motion.div>
  );
};

export default EnhancedServiceCard;