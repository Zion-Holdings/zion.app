import React from 'react';
import { Users, Briefcase, Globe, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "10K+",
    label: "Active Users",
    description: "Trusted professionals worldwide"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    value: "5K+",
    label: "Services Completed",
    description: "Successful project deliveries"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: "150+",
    label: "Countries",
    description: "Global reach and impact"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Client satisfaction score"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-zion-slate to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zion by the Numbers
          </h2>
          <p className="text-zion-slate-light text-xl max-w-2xl mx-auto">
            Discover why thousands of professionals and businesses choose Zion for their tech needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-zion-blue to-zion-purple p-8 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 hover:shadow-zion-purple/25">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  {stat.label}
                </h3>
                <p className="text-zion-slate-light text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full px-6 py-3 text-zion-cyan">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live data updates every 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}