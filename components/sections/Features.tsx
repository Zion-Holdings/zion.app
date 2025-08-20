import React from 'react';
import Link from 'next/link';
import { Zap, Cpu, Lock, BarChart3, ArrowRight } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  link?: string;
}

interface FeaturesProps {
  features?: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const defaultFeatures: Feature[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Autonomous Cloud Systems',
      description: 'Self-healing CI/CD pipelines, intelligent build orchestration, and zero-downtime deployments with advanced monitoring.',
      color: 'from-cyan-500 to-blue-600',
      link: '/services#cloud'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI-Powered Automation',
      description: '227+ autonomous agents, intelligent content generation, and predictive maintenance systems.',
      color: 'from-fuchsia-500 to-purple-600',
      link: '/services#ai-automation'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Redundancy & Reliability',
      description: 'Multi-layer redundancy systems, intelligent failover, and 99.99% uptime guarantee.',
      color: 'from-green-500 to-emerald-600',
      link: '/services#redundancy'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Real-time monitoring, automated scaling, and intelligent resource management.',
      color: 'from-orange-500 to-red-600',
      link: '/services#performance'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Advanced threat detection, automated security updates, and compliance monitoring.',
      color: 'from-indigo-500 to-purple-600',
      link: '/services#security'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting, predictive analytics, and actionable business intelligence.',
      color: 'from-teal-500 to-cyan-600',
      link: '/services#analytics'
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-purple-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for the{' '}
            <span className="gradient-text">Future</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of autonomous technology with our comprehensive suite of intelligent solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Link */}
              {feature.link && (
                <Link
                  href={feature.link}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our autonomous platform to scale their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/20 text-white hover:bg-white hover:text-black font-semibold rounded-xl transition-all duration-300"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;