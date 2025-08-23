import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    type: string;
    category: string;
    pricing: {
      starter: string;
      professional: string;
      enterprise: string;
    };
    features: string[];
    rating: number;
    responseTime: string;
    users: string;
    slug: string;
  };
  isFeatured?: boolean;
  onClick?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isFeatured = false, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(service);
    } else {
      window.location.href = service.slug;
    }
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${
        isFeatured ? 'scale-105' : 'scale-100'
      } transition-transform duration-500`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label={`Learn more about ${service.name}`}
    >
      <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
            Featured
          </div>
        )}
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <Star className="w-8 h-8 text-white" />
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
              {service.type}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {service.description.substring(0, 120)}...
          </p>
          
          {/* Service Stats */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400" />
              <span>{service.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>{service.responseTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-green-400" />
              <span>{service.users}</span>
            </div>
          </div>
          
          {/* Features Preview */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                >
                  {feature}
                </span>
              ))}
              {service.features.length > 3 && (
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full">
                  +{service.features.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-left">
              <span className="text-xs text-gray-500 block">Starting at</span>
              <span className="text-2xl font-bold text-cyan-400">
                {service.pricing.starter}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;