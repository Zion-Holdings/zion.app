import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    features: string[];
    price: string;
    link: string;
  };
  index: number;
  colorClass: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, colorClass }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25"
    >
      {/* Service Icon */}
      <div className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>
      </div>

      {/* Service Content */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {service.name}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Service Features */}
      <div className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* Service Price */}
      <div className="mb-6">
        <span className="text-2xl font-bold text-cyan-400">
          {service.price}
        </span>
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