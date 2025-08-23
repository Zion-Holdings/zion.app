import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    price: string;
    features: string[];
    ariaLabel: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-cyan-400 font-medium">{service.price}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      
      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" 
              aria-hidden="true"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <a 
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:gap-2"
        href={`/services/${service.id}`}
        aria-label={service.ariaLabel}
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;