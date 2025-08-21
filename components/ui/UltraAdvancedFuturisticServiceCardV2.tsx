import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Users, Clock, CheckCircle } from 'lucide-react';

interface UltraAdvancedFuturisticServiceCardV2Props {
  service: {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;
    color: string;
    textColor: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
    realImplementation: boolean;
    implementationDetails: string;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
  };
  index: number;
}

export default function UltraAdvancedFuturisticServiceCardV2({ 
  service, 
  index 
}: UltraAdvancedFuturisticServiceCardV2Props) {
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
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const getGradientClass = (color: string) => {
    const gradients: { [key: string]: string } = {
      'from-blue-500 to-indigo-600': 'from-blue-500 via-indigo-500 to-indigo-600',
      'from-purple-500 to-violet-600': 'from-purple-500 via-violet-500 to-violet-600',
      'from-green-500 to-emerald-600': 'from-green-500 via-emerald-500 to-emerald-600',
      'from-pink-500 to-rose-600': 'from-pink-500 via-rose-500 to-rose-600',
      'from-cyan-500 to-blue-600': 'from-cyan-500 via-blue-500 to-blue-600',
      'from-yellow-500 to-orange-600': 'from-yellow-500 via-orange-500 to-orange-600',
      'from-indigo-500 to-purple-600': 'from-indigo-500 via-purple-500 to-purple-600',
      'from-emerald-500 to-teal-600': 'from-emerald-500 via-teal-500 to-teal-600',
      'from-amber-500 to-yellow-600': 'from-amber-500 via-yellow-500 to-yellow-600',
      'from-violet-500 to-purple-600': 'from-violet-500 via-purple-500 to-purple-600',
      'from-gray-500 to-slate-600': 'from-gray-500 via-slate-500 to-slate-600',
      'from-red-500 to-pink-600': 'from-red-500 via-pink-500 to-pink-600'
    };
    return gradients[color] || color;
  };

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
      {/* Enhanced Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getGradientClass(service.color)} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:blur-2xl`}
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          filter: isHovered ? 'blur(20px)' : 'blur(40px)'
        }}
      />

      {/* Main Card */}
      <motion.div
        className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)`,
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
            : `0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)`
        }}
      >
        {/* Popular Badge */}
        {service.popular && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
          >
            <Star className="w-3 h-3 fill-current" />
            POPULAR
          </motion.div>
        )}

        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl mb-2"
            >
              {service.icon}
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300"
            >
              {service.name}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-sm leading-relaxed"
            >
              {service.tagline}
            </motion.p>
          </div>
        </div>

        {/* Price Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{service.setupTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{service.rating}/5 ({service.reviews})</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-sm leading-relaxed mb-6"
        >
          {service.description}
        </motion.p>

        {/* Features Preview */}
        <div className="mb-6">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white font-semibold mb-3 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-yellow-400" />
            Key Features
          </motion.h4>
          
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Expandable Features */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="mt-4 pt-4 border-t border-white/10"
              >
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(4).map((feature, i) => (
                    <motion.div
                      key={i + 4}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand/Collapse Button */}
          {service.features.length > 4 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
            >
              {isExpanded ? 'Show Less' : `Show ${service.features.length - 4} More Features`}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </motion.button>
          )}
        </div>

        {/* Market Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10"
        >
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Market Size:</span>
              <div className="text-white font-medium">{service.marketSize}</div>
            </div>
            <div>
              <span className="text-gray-400">Growth Rate:</span>
              <div className="text-white font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                {service.growthRate}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">ROI Impact</span>
          </div>
          <p className="text-sm text-gray-300">{service.roi}</p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={service.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
          >
            Get Started
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-300 hover:bg-white/5"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Trial Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-4 text-center text-sm text-gray-400"
        >
          <span className="bg-white/10 px-3 py-1 rounded-full">
            {service.trialDays}-day free trial • No credit card required
          </span>
        </motion.div>

        {/* Enhanced Hover Effects */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)`
          }}
        />

        {/* Floating Elements */}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 right-4 w-3 h-3 bg-purple-400 rounded-full"
                style={{
                  boxShadow: '0 0 25px rgba(139, 92, 246, 0.8)',
                  animation: 'float 3s ease-in-out infinite 1s'
                }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .group-hover\\:text-transparent {
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </motion.div>
  );
}