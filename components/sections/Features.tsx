import React from 'react';
import Card from '../ui/Card';
import { ArrowRight } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  pricing?: string;
}

interface FeaturesProps {
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our platform leverages the latest technologies to deliver enterprise-grade performance, 
            security, and scalability for your business needs.
          </p>
        </div>

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div
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
            </div>
          ))}
        </div>

        {/* Technology Stack Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-white mb-12">
            Powered by Industry-Leading Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Next.js', icon: '⚡', category: 'Framework' },
              { name: 'React', icon: '⚛️', category: 'Library' },
              { name: 'TypeScript', icon: '📘', category: 'Language' },
              { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
              { name: 'Node.js', icon: '🟢', category: 'Runtime' },
              { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
              { name: 'Redis', icon: '🔴', category: 'Cache' },
              { name: 'Docker', icon: '🐳', category: 'Containerization' },
              { name: 'Kubernetes', icon: '☸️', category: 'Orchestration' },
              { name: 'AWS', icon: '☁️', category: 'Cloud' },
              { name: 'Terraform', icon: '🏗️', category: 'Infrastructure' },
              { name: 'Prometheus', icon: '📊', category: 'Monitoring' },
            ].map((tech, index) => (
              <div
                key={index}
                className="group text-center p-4 rounded-xl border border-gray-800/50 bg-gray-900/30 hover:bg-gray-800/50 hover:border-gray-700/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-400">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our advanced technology platform 
              to accelerate their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:scale-105">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Field Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-energy-wave" />
    </section>
  );
}