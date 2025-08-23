import React from 'react';
import { motion } from 'framer-motion';
import { revolutionaryMicroSaasServices } from '../../data/revolutionary-micro-saas-services';
import RevolutionaryServiceCard from '../ui/RevolutionaryServiceCard';

interface RevolutionaryServicesShowcaseProps {
  title?: string;
  subtitle?: string;
  maxServices?: number;
  category?: string;
}

const RevolutionaryServicesShowcase: React.FC<RevolutionaryServicesShowcaseProps> = ({
  title = "Revolutionary Micro SAAS Services",
  subtitle = "Experience the future of business automation with cutting-edge AI, quantum computing, and autonomous technologies",
  maxServices = 12,
  category
}) => {
  const filteredServices = category 
    ? revolutionaryMicroSaasServices.filter(service => service.category.includes(category))
    : revolutionaryMicroSaasServices;
  
  const displayedServices = filteredServices.slice(0, maxServices);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const getVariantForService = (index: number): 'default' | 'holographic' | 'quantum' | 'neural' | 'cyberpunk' => {
    const variants: Array<'default' | 'holographic' | 'quantum' | 'neural' | 'cyberpunk'> = [
      'quantum', 'holographic', 'neural', 'cyberpunk', 'default'
    ];
    return variants[index % variants.length];
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-cyan-900/10" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border border-cyan-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 border border-purple-400/20 rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [45, 225, 405]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2 text-sm text-cyan-300 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>🚀</span>
            <span>Revolutionary Technology</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={sectionVariants}
              className="group"
            >
              <RevolutionaryServiceCard
                service={service}
                variant={getVariantForService(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary micro SAAS services to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Get Started Today</span>
                <span>→</span>
              </a>
              <a
                href="/services"
                className="inline-flex items-center space-x-2 border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <span>View All Services</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Market Statistics */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {revolutionaryMicroSaasServices.length}+
              </div>
              <div className="text-gray-400">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                $25B+
              </div>
              <div className="text-gray-400">Combined Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                800%+
              </div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                99.99%
              </div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryServicesShowcase;