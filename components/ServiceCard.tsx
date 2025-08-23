import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain, Atom } from 'lucide-react';

interface ServiceCardProps {
  service: any;
  onClick: () => void;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onClick,
  isHovered,
  onHover,
  onLeave
}) => {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('ai')) return <Brain className="w-4 h-4" />;
    if (category.toLowerCase().includes('quantum')) return <Atom className="w-4 h-4" />;
    if (category.toLowerCase().includes('security')) return <Shield className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.toLowerCase().includes('ai')) return 'from-purple-500 to-pink-500';
    if (category.toLowerCase().includes('quantum')) return 'from-blue-500 to-cyan-500';
    if (category.toLowerCase().includes('security')) return 'from-red-500 to-orange-500';
    return 'from-emerald-500 to-teal-500';
  };

  return (
    <motion.div
      className="group cursor-pointer h-full"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
              {getCategoryIcon(service.category)}
            </div>
            <span className="text-sm text-purple-300 font-medium">{service.category}</span>
          </div>
          {service.pricing?.enterprise && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
              ENTERPRISE
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
          {service.name}
        </h3>
        
        {/* Description */}
        <p className="relative z-10 text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {service.description}
        </p>
        
        {/* Pricing */}
        <div className="relative z-10 flex items-center space-x-2 mb-4">
          <div className="text-2xl font-bold text-purple-400">
            {service.pricing?.starter || 'Contact for pricing'}
          </div>
          {service.pricing?.starter && (
            <span className="text-sm text-gray-400">/month</span>
          )}
        </div>
        
        {/* Features */}
        <div className="relative z-10 flex flex-wrap gap-2 mb-6">
          {service.features?.slice(0, 3).map((feature: string, featureIndex: number) => (
            <span
              key={featureIndex}
              className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="relative z-10 mt-auto">
          <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/25">
            <span className="flex items-center justify-center space-x-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
        
        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;