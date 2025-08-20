import React from 'react';
import Card from '../ui/Card';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="relative section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="relative z-10 container-cursor">
        <div className="text-center mb-20">
          <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
            Platform Features
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of business automation with our cutting-edge platform features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:scale-105 transition-all duration-500 futuristic-card ${feature.color} border-opacity-20 backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Futuristic hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;