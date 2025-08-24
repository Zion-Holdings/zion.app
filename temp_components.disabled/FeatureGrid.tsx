import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  href: string;
  color: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that set our technology apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-lg text-center leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="text-center">
                    <button
                      onClick={() => window.location.href = feature.href}
                      className={`px-8 py-4 bg-gradient-to-r ${feature.color} text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        Explore Feature
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Features CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => window.location.href = '/services'}
            className="group px-8 py-4 border-2 border-purple-500/30 rounded-full text-purple-300 font-semibold text-lg hover:border-purple-400 hover:text-purple-200 transition-all duration-300 hover:bg-purple-500/10"
          >
            View All Features
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;