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
    <section className="section-padding relative bg-gradient-to-b from-cursor-darker to-cursor-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,122,204,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,212,170,0.05),transparent_50%)]"></div>
      
      <div className="container-cursor relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
              {title}
            </h2>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/10 via-cursor-accent/10 to-cursor-blue/10 blur-2xl -z-10 scale-110"></div>
          </div>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-balance">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              <Card className="text-center group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 card-hover h-full">
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${feature.color} relative overflow-hidden`}>
                    {feature.icon}
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-cursor-blue/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-4 right-4 w-1 h-1 bg-cursor-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cursor-blue transition-all duration-300 group-hover:scale-105">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cursor-blue to-cursor-accent mx-auto rounded-full"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;