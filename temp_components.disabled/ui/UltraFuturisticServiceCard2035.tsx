import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Users, TrendingUp, 
  Zap, Shield, Brain, Rocket, 
  CheckCircle, ExternalLink, Play
} from 'lucide-react';
import Link from 'next/link';

interface UltraFuturisticServiceCard2035Props {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
    };
    features: string[];
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;
    useCases: string[];
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
    contact: string;
  };
  className?: string;
}

const UltraFuturisticServiceCard2035: React.FC<UltraFuturisticServiceCard2035Props> = ({ 
  service, 
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    initial: { 
      scale: 1, 
      y: 0,
      boxShadow: "0 0 0 rgba(0, 255, 255, 0)"
    },
    hover: { 
      scale: 1.02, 
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
    },
    tap: { 
      scale: 0.98 
    }
  };

  const contentVariants = {
    collapsed: { 
      height: 0, 
      opacity: 0 
    },
    expanded: { 
      height: "auto", 
      opacity: 1 
    }
  };

  const getGradientClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'from-pink-500 to-rose-600': 'from-pink-500 to-rose-600',
      'from-indigo-500 to-purple-600': 'from-indigo-500 to-purple-600',
      'from-yellow-500 to-orange-600': 'from-yellow-500 to-orange-600',
      'from-blue-500 to-cyan-600': 'from-blue-500 to-cyan-600',
      'from-purple-500 to-pink-600': 'from-purple-500 to-pink-600',
      'from-green-500 to-emerald-600': 'from-green-500 to-emerald-600',
      'from-red-500 to-pink-600': 'from-red-500 to-pink-600',
      'from-cyan-500 to-blue-600': 'from-cyan-500 to-blue-600',
      'from-gray-500 to-slate-600': 'from-gray-500 to-slate-600'
    };
    return colorMap[color] || 'from-cyan-500 to-blue-600';
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Glowing Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      </div>

      {/* Main Card */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_25%,rgba(0,255,255,0.1)_75%,transparent_75%)] bg-[size:20px_20px]" />
        </div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`text-3xl ${isHovered ? 'animate-pulse' : ''}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {service.category}
                </p>
              </div>
            </div>
            
            {service.popular && (
              <motion.div
                className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-black"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Popular
              </motion.div>
            )}
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {service.tagline}
          </p>

          {/* Price and Trial */}
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
            <div>
              <div className="text-2xl font-bold text-white">
                {formatPrice(service.price.monthly)}
                <span className="text-sm text-gray-400 font-normal">/month</span>
              </div>
              <div className="text-sm text-gray-400">
                {formatPrice(service.price.yearly)}/year
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-green-400 font-semibold">
                {service.price.trialDays} days free
              </div>
              <div className="text-xs text-gray-500">
                Setup: {service.price.setupTime}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-2 bg-gray-800/30 rounded-lg border border-gray-700/20">
            <div className="text-lg font-bold text-cyan-400">{service.customers.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center p-2 bg-gray-800/30 rounded-lg border border-gray-700/20">
            <div className="text-lg font-bold text-purple-400">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="text-center p-2 bg-gray-800/30 rounded-lg border border-gray-700/20">
            <div className="text-lg font-bold text-pink-400">{service.reviews.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Reviews</div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-700/50 pt-4 mt-4">
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="text-xs text-gray-300 flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Benefits
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-300 flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                  <h4 className="text-sm font-semibold text-green-400 mb-1">ROI Impact</h4>
                  <p className="text-xs text-gray-300">{service.roi}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-4">
          <Link
            href={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
          
          <motion.button
            className="px-4 py-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded-lg transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2035;