import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  color: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 lg:p-8 cursor-pointer hover:border-white/20 transition-all duration-300"
          variants={fadeInUp}
          whileHover={{ y: -10, scale: 1.02 }}
          onClick={() => window.location.href = feature.href}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.location.href = feature.href;
            }
          }}
          aria-label={`Learn more about ${feature.title}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          <div className="relative">
            <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-3 lg:p-4 mb-6`}>
              <feature.icon className="w-full h-full text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">{feature.title}</h3>
            <p className="text-gray-300 leading-relaxed text-base lg:text-lg">{feature.description}</p>
            <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
              <span className="text-sm lg:text-base font-medium">Learn More</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesGrid;