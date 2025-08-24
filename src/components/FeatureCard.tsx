import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-zion-cyan text-xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-zion-slate-light">{title}</h3>
      </div>
      <p className="text-zion-slate text-sm leading-relaxed">{description}</p>
    </div>
  );
}