import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: 'blue' | 'purple' | 'green' | 'orange';
  href?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradient = 'blue',
  href 
}) => {
  const gradientClasses = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500'
  };

  const CardContent = () => (
    <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${gradientClasses[gradient]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-200">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-200">
        {description}
      </p>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block group">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default FeatureCard;