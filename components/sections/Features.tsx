import React from 'react';
import { Check, ArrowRight, Zap, Shield, Users, Globe, Cpu, Database } from 'lucide-react';

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
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 animate-grid-flow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Advanced Technology Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Built with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our platform leverages the latest technologies to deliver enterprise-grade performance, 
            security, and scalability for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-gray-800/50 bg-gradient-to-br ${feature.color} hover:scale-105 transition-all duration-500 animate-fade-in-up backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
              
              {/* Icon Container */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-bl-2xl rounded-tr-2xl group-hover:opacity-40 transition-opacity duration-500`} />
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
    </section>
  );
};

export default Features;