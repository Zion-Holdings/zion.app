import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    rating: number;
    reviewCount: number;
    location: string;
    deliveryTime: string;
    category: string;
    image?: string;
    features?: string[];
    isVerified?: boolean;
    isPopular?: boolean;
  };
  onViewDetails?: (id: string) => void;
  onRequestQuote?: (id: string) => void;
}

export function EnhancedServiceCard({ service, onViewDetails, onRequestQuote }: ServiceCardProps) {
  const {
    id,
    title,
    description,
    price,
    rating,
    reviewCount,
    location,
    deliveryTime,
    category,
    image,
    features = [],
    isVerified = false,
    isPopular = false
  } = service;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-60' 
              : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-purple/20 backdrop-blur-sm rounded-2xl border border-zion-purple/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Popular
          </div>
        </div>
      )}

      {/* Verified Badge */}
      {isVerified && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Shield className="w-3 h-3" />
            Verified
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 flex items-center justify-center">
            <div className="text-zion-purple/40 text-6xl font-bold">{title.charAt(0)}</div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-zion-blue-dark/80 backdrop-blur-sm text-zion-cyan text-xs font-medium px-3 py-1 rounded-full border border-zion-cyan/30">
            {category}
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-zion-purple/90 backdrop-blur-sm text-white text-lg font-bold px-4 py-2 rounded-xl border border-zion-purple/30">
            {price}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-zion-cyan transition-colors duration-300">
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {renderStars(rating)}
              <span className="text-zion-slate-light text-sm">
                ({reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zion-slate-light text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-1 rounded-full border border-zion-purple/20"
                >
                  {feature}
                </span>
              ))}
              {features.length > 3 && (
                <span className="bg-zion-cyan/10 text-zion-cyan text-xs px-2 py-1 rounded-full border border-zion-cyan/20">
                  +{features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Location and Delivery */}
        <div className="flex items-center justify-between mb-6 text-sm text-zion-slate-light">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zion-purple" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zion-cyan" />
            <span>{deliveryTime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => onViewDetails?.(id)}
            className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View Details
          </Button>
          
          <Button
            onClick={() => onRequestQuote?.(id)}
            variant="outline"
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold py-3 px-4 rounded-xl transition-all duration-300"
          >
            Get Quote
          </Button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zion-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}