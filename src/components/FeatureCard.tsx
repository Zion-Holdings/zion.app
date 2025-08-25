import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
<<<<<<< HEAD
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = ''
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
