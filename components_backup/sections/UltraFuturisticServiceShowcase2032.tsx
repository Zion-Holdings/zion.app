import React from 'react';
import { motion } from 'framer-motion';
import { futuristicAIServices2032 } from '../../data/2032-futuristic-ai-services';
import { quantumEmergingTechServices2032 } from '../../data/2032-quantum-emerging-tech-services';
import { enterpriseITServices2032 } from '../../data/2032-enterprise-it-services';
import { spaceMetaverseTechServices2032 } from '../../data/2032-space-metaverse-tech-services';
import { innovativeMicroSaasServices2032 } from '../../data/2032-innovative-micro-saas-services';
import { researchDevelopmentServices2032 } from '../../data/2032-research-development-services';
import { Phone, Mail, MapPin } from 'lucide-react';

const UltraFuturisticServiceShowcase2032: React.FC = () => {
  const allServices = [
    ...futuristicAIServices2032,
    ...quantumEmergingTechServices2032,
    ...enterpriseITServices2032,
    ...spaceMetaverseTechServices2032,
    ...innovativeMicroSaasServices2032,
    ...researchDevelopmentServices2032
  ];

  const popularServices = allServices.filter(service => service.popular).slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-neon-cyan">2032</span>{' '}
            <span className="text-neon-purple">Revolutionary</span>{' '}
            <span className="text-neon-pink">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future with our cutting-edge AI consciousness, quantum computing, 
            space mining, and neuromorphic computing solutions
          </p>
        </motion.div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {popularServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 h-full transition-all duration-500 group-hover:border-neon-cyan/50 group-hover:shadow-2xl group-hover:shadow-neon-cyan/20">
                {/* Service Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>
                
                {/* Service Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                  {service.name}
                </h3>
                
                {/* Service Tagline */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {service.tagline}
                </p>
                
                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Service Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-neon-green">
                    {service.price}
                    <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays} day trial
                  </div>
                </div>
                
                {/* Service Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">
                      {service.rating} ({service.reviews})
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.customers} customers
                  </div>
                </div>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold py-3 px-6 rounded-xl hover:from-neon-purple hover:to-neon-cyan transition-all duration-300 transform hover:shadow-lg hover:shadow-neon-cyan/25"
                >
                  Get Started
                </motion.button>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Explore All <span className="text-neon-cyan">2032</span> Service Categories
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'AI Consciousness', icon: '🧠', count: futuristicAIServices2032.length },
              { name: 'Quantum Tech', icon: '⚛️', count: quantumEmergingTechServices2032.length },
              { name: 'Enterprise IT', icon: '⚙️', count: enterpriseITServices2032.length },
              { name: 'Space & Metaverse', icon: '🚀', count: spaceMetaverseTechServices2032.length },
              { name: 'Micro SAAS', icon: '🎯', count: innovativeMicroSaasServices2032.length },
              { name: 'R&D Services', icon: '🔬', count: researchDevelopmentServices2032.length }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center transition-all duration-300 group-hover:border-neon-cyan/50 group-hover:bg-gray-800/70">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-sm font-medium text-white mb-1">{category.name}</div>
                  <div className="text-xs text-neon-cyan">{category.count} services</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the <span className="text-neon-cyan">Future</span>?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our team to learn more about our revolutionary 2032 technology solutions 
              and how they can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-neon-cyan">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-neon-purple">
                <Mail className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-neon-green">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticServiceShowcase2032;