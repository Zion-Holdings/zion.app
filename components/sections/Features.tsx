import React from 'react';
import Card from '../ui/Card';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
  gradient: string;
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
    <section className="section-padding bg-gradient-cursor relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container-cursor relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Platform Features
          </div>
          <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
            {title}
          </h2>
          <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-hover text-center group border-gradient-blue"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              <div className="relative">
                <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                  {feature.icon}
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cursor-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;