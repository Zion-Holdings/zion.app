import React from 'react';
import Link from 'next/link';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning systems that automate complex processes and deliver intelligent insights.',
      color: 'from-cyan-500 to-blue-600',
      glow: 'glow',
      link: '/services'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with 99.9% uptime guarantee, built for enterprise-grade performance and reliability.',
      color: 'from-purple-500 to-pink-600',
      glow: 'glow-purple',
      link: '/services'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Advanced security protocols and threat detection systems to protect your digital assets and maintain compliance.',
      color: 'from-green-500 to-emerald-600',
      glow: 'glow-pink',
      link: '/services'
    },
    {
      icon: '📱',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services that modernize legacy systems and optimize business operations.',
      color: 'from-orange-500 to-red-600',
      glow: 'glow',
      link: '/services'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Comprehensive data analytics and business intelligence solutions that turn information into actionable insights.',
      color: 'from-indigo-500 to-purple-600',
      glow: 'glow-purple',
      link: '/services'
    },
    {
      icon: '🚀',
      title: 'Innovation Lab',
      description: 'Our innovation lab explores emerging technologies and develops proof-of-concepts for future business solutions.',
      color: 'from-pink-500 to-rose-600',
      glow: 'glow-pink',
      link: '/services'
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">Our Core Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transforming Business Through{' '}
            <span className="gradient-text">Innovation</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive growth, efficiency, and competitive advantage for forward-thinking organizations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover-lift ${feature.glow}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl backdrop-blur-xl border border-white/20">
            <Link
              href="/services"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2 mx-auto w-fit"
            >
              <span>Explore All Services</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;