import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    type: string;
    pricing: {
      starter: string;
    };
    slug: string;
  };
  onClick: (service: any) => void;
  isFeatured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, isFeatured = false }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      onClick={() => onClick(service)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
        isFeatured 
          ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20' 
          : 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-cyan-500/50'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            isFeatured 
              ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
              : 'bg-gradient-to-br from-cyan-500 to-blue-600'
          }`}>
            <Brain className="w-6 h-6 text-white" />
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${
            isFeatured 
              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300'
              : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300'
          }`}>
            {service.type}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-cyan-400">
            {service.pricing.starter}
          </span>
          <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
        </div>
      </div>

      {/* CTA Button */}
      <Link 
        href={service.link}
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/25"
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;