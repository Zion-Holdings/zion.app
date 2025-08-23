import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Check, Zap, Eye, 
  TrendingUp, Award, Shield, Rocket, Brain,
  Atom, Cpu, Sparkles, Crown, Infinity
} from 'lucide-react';

interface UltraFuturisticServiceCard2040Props {
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
  };
  index: number;
}

export default function UltraFuturisticServiceCard2040({ service, index }: UltraFuturisticServiceCard2040Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.4
      }
    }
  };

  const neonGlowVariants = {
    initial: {
      boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor"
    },
    hover: {
      boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor",
      transition: {
        duration: 0.3
      }
    }
  };

  const getGradientClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'from-blue-500 to-cyan-600': 'from-blue-500 via-cyan-500 to-cyan-600',
      'from-green-500 to-emerald-600': 'from-green-500 via-emerald-500 to-emerald-600',
      'from-purple-500 to-pink-600': 'from-purple-500 via-pink-500 to-pink-600',
      'from-yellow-500 to-orange-600': 'from-yellow-500 via-orange-500 to-orange-600',
      'from-indigo-500 to-purple-600': 'from-indigo-500 via-purple-500 to-purple-600',
      'from-red-500 to-pink-600': 'from-red-500 via-pink-500 to-pink-600'
    };
    return colorMap[color] || color;
  };

  const getNeonColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'from-blue-500 to-cyan-600': '#00d4ff',
      'from-green-500 to-emerald-600': '#10b981',
      'from-purple-500 to-pink-600': '#ec4899',
      'from-yellow-500 to-orange-600': '#f59e0b',
      'from-indigo-500 to-purple-600': '#8b5cf6',
      'from-red-500 to-pink-600': '#ef4444'
    };
    return colorMap[color] || '#00d4ff';
  };

  const neonColor = getNeonColor(service.color);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card */}
      <div 
        className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)`,
          boxShadow: isHovered 
            ? `0 0 30px ${neonColor}40, 0 0 60px ${neonColor}20, 0 0 90px ${neonColor}10`
            : `0 0 20px rgba(0,0,0,0.5)`
        }}
      >
        {/* Header section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div 
              className="text-3xl p-3 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${neonColor}20, ${neonColor}10)`,
                border: `1px solid ${neonColor}30`
              }}
            >
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                {service.category}
              </p>
            </div>
          </div>
          
          {/* Popular badge */}
          {service.popular && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-black"
            >
              <Star className="w-3 h-3 fill-current" />
              <span>POPULAR</span>
            </motion.div>
          )}
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-lg font-medium mb-3 leading-relaxed">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Pricing */}
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-white">
                ${service.price.monthly.toLocaleString()}
              </span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Yearly</div>
              <div className="text-lg font-semibold text-white">
                ${service.price.yearly.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {service.price.trialDays}-day free trial • Setup in {service.price.setupTime}
          </div>
        </div>

        {/* Key features preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-400">
                <Check className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="p-2 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="p-2 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="p-2 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">{service.reviews.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Reviews</div>
          </div>
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="border-t border-white/10 pt-4 mt-4"
            >
              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  Benefits
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="text-sm text-gray-400">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI */}
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <h4 className="text-sm font-semibold text-green-400 mb-1 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  ROI Impact
                </h4>
                <p className="text-sm text-gray-300">{service.roi}</p>
              </div>

              {/* Use cases */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                  <Rocket className="w-4 h-4 mr-2 text-blue-400" />
                  Use Cases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 4).map((useCase, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Eye className="w-4 h-4 mr-2" />
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          
          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 hover:border-white/30 rounded-lg text-white font-medium transition-all duration-200 group/btn"
            style={{
              boxShadow: isHovered 
                ? `0 0 20px ${neonColor}40`
                : 'none'
            }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: -1,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}