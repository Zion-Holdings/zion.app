import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, Users, TrendingUp, Zap, Shield, Clock } from 'lucide-react';

interface UltraFuturisticServiceCardProps {
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
  className?: string;
}

const UltraFuturisticServiceCard: React.FC<UltraFuturisticServiceCardProps> = ({
  service,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    initial: { 
      scale: 1, 
      rotateY: 0,
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
    },
    hover: { 
      scale: 1.02, 
      rotateY: 2,
      boxShadow: "0 0 40px rgba(0, 255, 255, 0.6)"
    },
    expanded: {
      scale: 1.05,
      rotateY: 0,
      boxShadow: "0 0 60px rgba(139, 92, 246, 0.8)"
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const featureVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  const getGradientClass = (color: string) => {
    const gradients: { [key: string]: string } = {
      'from-pink-500 to-rose-600': 'from-pink-500 via-rose-600 to-pink-700',
      'from-purple-600 to-indigo-700': 'from-purple-600 via-indigo-700 to-purple-800',
      'from-blue-600 to-cyan-700': 'from-blue-600 via-cyan-700 to-blue-800',
      'from-green-600 to-emerald-700': 'from-green-600 via-emerald-700 to-green-800',
      'from-orange-600 to-red-700': 'from-orange-600 via-red-700 to-orange-800',
      'from-indigo-600 to-purple-700': 'from-indigo-600 via-purple-700 to-indigo-800',
      'from-pink-600 to-rose-700': 'from-pink-600 via-rose-700 to-pink-800',
      'from-yellow-600 to-amber-700': 'from-yellow-600 via-amber-700 to-yellow-800',
      'from-red-600 to-pink-700': 'from-red-600 via-pink-700 to-red-800',
      'from-cyan-600 to-blue-700': 'from-cyan-600 via-blue-700 to-cyan-800'
    };
    return gradients[color] || color;
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="initial"
      animate={isExpanded ? "expanded" : isHovered ? "hover" : "initial"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Quantum Holographic Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-sm opacity-50" />
      </div>

      {/* Main Card */}
      <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        </div>

        {/* Header Section */}
        <motion.div
          className="flex items-start justify-between mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              className={`text-4xl ${service.textColor}`}
              animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-gray-400 text-sm">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-black"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              POPULAR
            </motion.div>
          )}
        </motion.div>

        {/* Price and Trial Info */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">{service.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{service.trialDays} day trial</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{service.customers.toLocaleString()}+ users</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{service.rating} ({service.reviews})</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-300 mb-4 leading-relaxed"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          {service.description}
        </motion.p>

        {/* Market Position */}
        <motion.div
          className="mb-4 p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Market Position</span>
          </div>
          <p className="text-sm text-gray-300">{service.marketPosition}</p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Key Features</span>
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-400"
                variants={featureVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
          
          {!isExpanded && service.features.length > 4 && (
            <motion.button
              className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mt-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
            >
              +{service.features.length - 4} more features
            </motion.button>
          )}
        </motion.div>

        {/* ROI and Market Data */}
        <motion.div
          className="mb-4 grid grid-cols-2 gap-3"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <div className="p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20">
            <div className="text-sm font-semibold text-green-400 mb-1">ROI</div>
            <div className="text-xs text-gray-300">{service.roi}</div>
          </div>
          <div className="p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
            <div className="text-sm font-semibold text-purple-400 mb-1">Market Size</div>
            <div className="text-xs text-gray-300">{service.marketSize}</div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex space-x-3"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href={service.link}
            className={`flex-1 bg-gradient-to-r ${getGradientClass(service.color)} text-white py-3 px-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          
          <motion.button
            className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              // Add to favorites or show more info
            }}
          >
            <Star className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mt-4 pt-4 border-t border-gray-700/50"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
        >
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex items-center space-x-2">
              <span>📱 {service.contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️ {service.contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍 {service.contactInfo.address}</span>
            </div>
          </div>
        </motion.div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-4 pt-4 border-t border-gray-700/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {/* Technology Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.useCases.map((useCase, index) => (
                      <div key={index} className="text-sm text-gray-400 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitors */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Competitors</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.competitors.map((competitor, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-red-900/20 text-red-300 text-xs rounded-md border border-red-500/20"
                      >
                        {competitor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={{
          background: isHovered ? [
            "radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)"
          ] : "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)"
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default UltraFuturisticServiceCard;