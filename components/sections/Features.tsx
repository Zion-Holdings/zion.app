import React from 'react';
import { Zap, Shield, Users, Globe, Cpu, Database } from 'lucide-react';

interface FeaturesProps {
  features: Array<{
    icon: string;
    title: string;
    description: string;
    color: string;
    textColor: string;
    gradient: string;
  }>;
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20" />
        <div className="absolute inset-0 bg-cyber-grid bg-[size:100px_100px] opacity-5" />
        <div className="absolute inset-0 bg-neural-dots bg-[size:30px_30px] opacity-3" />
        <div className="absolute inset-0 bg-quantum-waves opacity-5" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-cyber-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-cyber-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-hologram" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Cpu className="w-4 h-4 mr-2 animate-quantum-spin" />
            Advanced Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the future of business automation with our advanced AI-powered solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <span className="text-3xl">{feature.icon}</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-4 ${feature.textColor} group-hover:text-white transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            <Zap className="w-5 h-5 mr-2 animate-neon-pulse" />
            Explore All Features
          </div>
        </div>
      </div>

      {/* Energy Field Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-energy-wave" />
    </section>
  );
};

export default Features;