import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    type: string;
    pricing: {
      starter: string;
    };
    category: string;
  };
  index: number;
  currentServiceIndex: number;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  index, 
  currentServiceIndex, 
  onClick 
}) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${
        index === currentServiceIndex ? 'scale-105' : 'scale-100'
      } transition-transform duration-500`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <Brain className="w-8 h-8 text-white" />
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
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-cyan-400">
              {service.pricing.starter}
            </span>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;