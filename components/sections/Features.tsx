import React from 'react';
import Card from '../ui/Card';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const Features: React.FC<FeaturesProps> = ({
  title,
  subtitle,
  features,
  columns = 3,
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cursor-darker to-cursor-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,122,204,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,122,204,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 bg-cursor-dark/50 backdrop-blur-sm border-cursor-lighter/30"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${feature.color} bg-gradient-to-br from-cursor-blue/20 to-blue-600/20 border border-cursor-blue/30`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cursor-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                {feature.description}
              </p>
              
              {/* Hover effect indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-0.5 bg-cursor-blue mx-auto rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;