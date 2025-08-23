import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center group"
          variants={fadeInUp}
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
            <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-400" aria-hidden="true" />
          </div>
          <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3">{stat.number}</div>
          <div className="text-gray-400 text-sm lg:text-base xl:text-lg">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;