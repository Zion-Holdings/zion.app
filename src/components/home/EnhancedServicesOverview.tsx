import React from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

export const EnhancedServicesOverview: React.FC = () => {
  const featuredServices = COMPREHENSIVE_SERVICES.slice(0, 6);

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Tech Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            From AI-powered solutions to enterprise IT infrastructure, we deliver cutting-edge technology services that drive business growth and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg text-zion-cyan group-hover:bg-zion-cyan group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-zion-cyan font-semibold">
                  ${service.price}
                </span>
                <span className="bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 px-3 py-1 rounded-full text-sm">
                  {service.pricingModel}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs border border-zion-purple/30 text-zion-cyan px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};