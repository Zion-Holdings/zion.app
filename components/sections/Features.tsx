import React from 'react';
import Card from '../ui/Card';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  pricing?: string;
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  columns?: 1 | 2 | 3;
}

export default function Features({ title, subtitle, features, columns = 3 }: FeaturesProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              <div className={`${feature.color} p-6 rounded-t-xl`}>
                <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {feature.description}
                </p>
                
                {feature.pricing && (
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                    {feature.pricing}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}