import React from 'react';
import { Users, Globe, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "10K+",
    label: "Active Users",
    description: "Trusted by professionals worldwide"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: "150+",
    label: "Countries",
    description: "Global reach and availability"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "95%",
    label: "Success Rate",
    description: "High customer satisfaction"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "24/7",
    label: "Support",
    description: "Always here when you need us"
  }
];

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Zion by the Numbers
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover why thousands of professionals choose Zion for their tech needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-dark mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              
              <div className="mb-2">
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-full px-8 py-4">
            <span className="text-zion-cyan text-sm font-medium">
              Ready to join thousands of satisfied users?
            </span>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}