import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Globe } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Active Clients',
      description: 'Trusted by businesses worldwide'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Satisfaction Rate',
      description: 'Consistently high client satisfaction'
    },
    {
      icon: TrendingUp,
      value: '60%',
      label: 'Cost Reduction',
      description: 'Average savings for our clients'
    },
    {
      icon: Globe,
      value: '5x',
      label: 'Efficiency Gain',
      description: 'Performance improvement achieved'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our innovative services deliver measurable results and transform businesses across industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300 mb-2 font-medium">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;