import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  stats?: string;
  href?: string;
  onClick?: () => void;
}

export function FeatureCard({
  title,
  description,
  icon,
  color = 'text-zion-cyan',
  bgColor = 'bg-zion-blue-light/10',
  borderColor = 'border-zion-blue-light/20',
  stats,
  href,
  onClick
}: FeatureCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <motion.div
      whileHover="hover"
      className={`group relative ${bgColor} border-2 ${borderColor} rounded-2xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 cursor-pointer`}
      onClick={handleClick}
    >
      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4 shadow-lg">
          {icon}
        </div>
      )}

      {/* Content */}
      <h3 className={`text-xl font-bold ${color} mb-3`}>{title}</h3>
      <p className="text-zion-slate-light leading-relaxed mb-4">{description}</p>

      {/* Stats */}
      {stats && (
        <div className="text-sm text-zion-slate-light mb-4">{stats}</div>
      )}

      {/* CTA */}
      <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/5 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}