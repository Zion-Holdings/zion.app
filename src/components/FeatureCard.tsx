import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  features: string[];
}

export function FeatureCard({ title, description, icon, color, bgColor, features }: FeatureCardProps) {
  return (
    <motion.div 
      className={`rounded-xl overflow-hidden border border-zion-purple/20 ${bgColor} p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <p className="text-zion-slate-light mb-4 leading-relaxed">{description}</p>
      
      {/* Feature tags */}
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
            <span className="text-zion-slate-light">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}