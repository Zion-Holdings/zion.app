import React from 'react';
<<<<<<< HEAD
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-zion-blue-light rounded-lg p-6 border border-zion-blue-lighter ${className}`}>
      <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-zion-cyan" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zion-slate-light text-sm">{description}</p>
    </div>
  );
}
=======

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
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
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
