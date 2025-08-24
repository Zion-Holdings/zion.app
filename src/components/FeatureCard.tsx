
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <motion.div 
      className={cn(
        "flex items-start p-6 rounded-xl border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 group cursor-pointer",
        className
      )}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="mr-4 text-zion-cyan p-3 rounded-lg bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-all duration-300"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300">
          {title}
        </h3>
        <p className="text-zion-slate-light group-hover:text-zion-slate-light/90 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-12 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}
