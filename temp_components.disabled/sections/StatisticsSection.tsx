import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Rocket, Star } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  const stats = [
    { 
      icon: Brain, 
      title: "1000+ Services", 
      description: "Comprehensive technology solutions", 
      color: "cyan", 
      gradient: "from-cyan-500 to-blue-500" 
    },
    { 
      icon: Shield, 
      title: "99% Satisfaction", 
      description: "Client success rate", 
      color: "blue", 
      gradient: "from-blue-500 to-purple-500" 
    },
    { 
      icon: Rocket, 
      title: "24/7 Support", 
      description: "Round-the-clock assistance", 
      color: "purple", 
      gradient: "from-purple-500 to-pink-500" 
    },
    { 
      icon: Star, 
      title: "100+ Industries", 
      description: "Cross-sector expertise", 
      color: "emerald", 
      gradient: "from-emerald-500 to-teal-500" 
    }
  ];

  return (
    <motion.section 
      className="py-24 px-4 bg-gradient-to-b from-gray-900/80 via-purple-900/40 to-gray-800/80 relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      aria-labelledby="stats-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          id="stats-heading"
          className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Why Choose Zion Tech Group?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="text-center p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              role="article"
              aria-labelledby={`stat-${index}-title`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="relative inline-block mb-6">
                  <stat.icon className={`w-16 h-16 mx-auto text-${stat.color}-400 group-hover:text-${stat.color}-300 transition-colors`} aria-hidden="true" />
                  <div className={`absolute inset-0 w-16 h-16 bg-${stat.color}-400/20 rounded-full blur-xl group-hover:bg-${stat.color}-400/30 transition-all`}></div>
                </div>
                <h3 id={`stat-${index}-title`} className="text-3xl font-bold text-white mb-3">{stat.title}</h3>
                <p className="text-gray-400 text-lg">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatisticsSection;