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
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 gradient-text leading-none">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center group hover:border-cursor-blue/40 hover:shadow-glow-lg hover:shadow-cursor-blue/20 backdrop-blur-xl"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cursor-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
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