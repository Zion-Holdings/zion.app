import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    name: string;
    tagline: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    color: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 cursor-pointer hover:border-white/20 transition-all duration-300"
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => window.location.href = service.href}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.location.href = service.href;
        }
      }}
      aria-label={`Learn more about ${service.name}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6`}>
          <service.icon className="w-full h-full text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
        <p className="text-gray-300 leading-relaxed text-base">{service.tagline}</p>
        <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;