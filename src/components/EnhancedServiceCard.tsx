import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Users, Zap, Shield, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviewCount: number;
  location: string;
  responseTime: string;
  category: string;
  image?: string;
  features: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
}

export function EnhancedServiceCard({
  id,
  title,
  description,
  price,
  rating,
  reviewCount,
  location,
  responseTime,
  category,
  image,
  features,
  isFeatured = false,
  isPopular = false
}: ServiceCardProps) {
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
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
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
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Featured/Popular badges */}
      {isFeatured && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-zion-purple/30">
            Featured
          </div>
        </div>
      )}
      
      {isPopular && (
        <div className="absolute -top-3 -left-3 z-10">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-amber-500/30">
            Popular
          </div>
        </div>
      )}

      <Link to={`/services/${id}`} className="block">
        <div className="relative overflow-hidden rounded-3xl border-2 border-zion-purple/20 bg-gradient-to-br from-zion-blue-dark/80 via-zion-blue/60 to-zion-blue-dark/80 backdrop-blur-xl p-6 transition-all duration-500 group-hover:border-zion-purple/50 group-hover:shadow-2xl group-hover:shadow-zion-purple/30">
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zion-cyan to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-zion-purple to-transparent rounded-full"></div>
          </div>

          {/* Header section */}
          <div className="relative z-10 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                  {title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>
            </div>

            {/* Category and price */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-2 bg-zion-purple/20 text-zion-purple text-xs font-medium px-3 py-1 rounded-full border border-zion-purple/30">
                <Zap className="w-3 h-3" />
                {category}
              </span>
              <div className="text-right">
                <div className="text-2xl font-bold text-zion-cyan">{price}</div>
                <div className="text-xs text-zion-slate-light">Starting from</div>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="relative z-10 mb-6">
            <div className="grid grid-cols-2 gap-2">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-zion-cyan-light">
                  <CheckCircle className="w-3 h-3 text-zion-cyan" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="relative z-10 mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4 text-zion-purple" />
                </div>
                <div className="text-xs text-zion-slate-light">{location}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                </div>
                <div className="text-xs text-zion-slate-light">{responseTime}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-4 h-4 text-zion-purple" />
                </div>
                <div className="text-xs text-zion-slate-light">Verified</div>
              </div>
            </div>
          </div>

          {/* Rating and reviews */}
          <div className="relative z-10 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {renderStars(rating)}
                </div>
                <span className="text-sm text-zion-slate-light">
                  ({reviewCount} reviews)
                </span>
              </div>
              <div className="text-sm text-zion-cyan font-medium">
                {rating.toFixed(1)}/5.0
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zion-slate-light">
                Click to learn more
              </span>
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white shadow-lg shadow-zion-purple/30"
                variants={iconVariants}
                whileHover="hover"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Hover overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/0 via-zion-purple/5 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
        </div>
      </Link>
    </motion.div>
  );
}