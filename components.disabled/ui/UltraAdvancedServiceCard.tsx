import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, Zap } from 'lucide-react';

interface UltraAdvancedServiceCardProps {
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

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps> = ({ 
  service, 
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const cardVariants = {
    initial: { 
      scale: 1, 
      rotateY: 0,
      boxShadow: "0 0 0 rgba(59, 130, 246, 0)"
    },
    hover: { 
      scale: 1.02, 
      rotateY: 2,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { opacity: 1, scale: 1.2 }
  };

  const featureVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setShowDetails(!showDetails)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Quantum Glow Effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 blur-lg transition duration-1000 group-hover:opacity-75`}
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
      />
      
      {/* Main Card */}
      <div className={`relative bg-black/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:border-gray-600/50`}>
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`text-4xl ${service.textColor} filter drop-shadow-lg`}>
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm font-medium">
                {service.tagline}
              </p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500/20 rounded-lg mb-2 mx-auto">
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-white font-bold">{service.customers.toLocaleString()}+</div>
            <div className="text-gray-400 text-xs">Customers</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-lg mb-2 mx-auto">
              <Star className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-white font-bold">{service.rating}</div>
            <div className="text-gray-400 text-xs">Rating</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 rounded-lg mb-2 mx-auto">
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-white font-bold">{service.growthRate}</div>
            <div className="text-gray-400 text-xs">Growth</div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-sm text-gray-300"
                variants={featureVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                {feature}
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-blue-400 text-sm font-medium">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Market Position */}
        <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50">
          <h4 className="text-white font-semibold mb-2">Market Position</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.marketPosition}
          </p>
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-gray-400">Market Size: {service.marketSize}</span>
            <span className="text-green-400 font-medium">{service.roi}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg group-hover:shadow-blue-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(service.link, '_blank');
            }}
          >
            <span>Get Started</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            className="px-4 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
          >
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showDetails ? 'rotate-90' : ''}`} />
          </motion.button>
        </div>

        {/* Trial Info */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{service.trialDays} days free trial</span>
            <span>•</span>
            <span>Setup in {service.setupTime}</span>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="mt-4 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Technology Stack */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {service.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Integrations</h4>
              <div className="flex flex-wrap gap-2">
                {service.integrations.map((integration, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Use Cases</h4>
              <div className="grid grid-cols-2 gap-2">
                {service.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    {useCase}
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors Analysis */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Competitive Analysis</h4>
              <div className="space-y-2">
                {service.competitors.map((competitor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-300">{competitor}</span>
                    <span className="text-red-400 font-medium">vs</span>
                    <span className="text-green-400 font-medium">Our Advantage</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/50">
              <h4 className="text-white font-semibold mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">📱</span>
                  <span>{service.contactInfo.mobile}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">✉️</span>
                  <span>{service.contactInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">📍</span>
                  <span>{service.contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UltraAdvancedServiceCard;