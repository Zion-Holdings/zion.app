import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain, Atom, Rocket, Cloud, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';

interface UltraFuturisticServiceCard2047Props {
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
  onClick?: () => void;
  className?: string;
}

const UltraFuturisticServiceCard2047: React.FC<UltraFuturisticServiceCard2047Props> = ({
  service,
  onClick,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Consciousness')) return <Brain className="w-5 h-5" />;
    if (category.includes('Quantum')) return <Atom className="w-5 h-5" />;
    if (category.includes('Security') || category.includes('Cybersecurity')) return <Shield className="w-5 h-5" />;
    if (category.includes('Infrastructure') || category.includes('Cloud')) return <Cloud className="w-5 h-5" />;
    if (category.includes('Business') || category.includes('CRM')) return <Target className="w-5 h-5" />;
    if (category.includes('Content') || category.includes('Marketing')) return <Rocket className="w-5 h-5" />;
    return <Zap className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Consciousness')) return 'from-purple-500 to-pink-500';
    if (category.includes('Quantum')) return 'from-blue-500 to-cyan-500';
    if (category.includes('Security') || category.includes('Cybersecurity')) return 'from-red-500 to-orange-500';
    if (category.includes('Infrastructure') || category.includes('Cloud')) return 'from-indigo-500 to-purple-500';
    if (category.includes('Business') || category.includes('CRM')) return 'from-emerald-500 to-teal-500';
    if (category.includes('Content') || category.includes('Marketing')) return 'from-yellow-500 to-orange-500';
    return 'from-gray-500 to-blue-500';
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      {/* Main Card */}
      <motion.div
        className="relative bg-black/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 overflow-hidden"
        animate={{
          boxShadow: isHovered 
            ? `0 0 40px ${service.color.includes('purple') ? 'rgba(147, 51, 234, 0.3)' : 'rgba(6, 182, 212, 0.3)'}`
            : '0 0 20px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`text-3xl ${service.textColor}`}>
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{service.tagline}</p>
            </div>
          </div>
          
          {/* Popular Badge */}
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Popular
            </motion.div>
          )}
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {service.trialDays}-day free trial • Setup in {service.setupTime}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Category Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} bg-opacity-20`}>
            {getCategoryIcon(service.category)}
          </div>
          <span className="text-sm text-gray-400">{service.category}</span>
        </div>

        {/* Key Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.customers}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.reviews}</div>
            <div className="text-xs text-gray-400">Reviews</div>
          </div>
        </div>

        {/* ROI Highlight */}
        <div className="mb-4 p-3 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">ROI Impact</span>
          </div>
          <p className="text-xs text-gray-300">{service.roi}</p>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-700 pt-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.technology.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Position:</h4>
                <p className="text-xs text-gray-400 mb-3">{service.marketPosition}</p>
                
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience:</h4>
                <p className="text-xs text-gray-400 mb-3">{service.targetAudience}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-4">
          <motion.button
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Less' : 'More'}
          </motion.button>
        </div>

        {/* Contact Info */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Contact: {service.contactInfo.email}</span>
            <span>Phone: {service.contactInfo.mobile}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2047;