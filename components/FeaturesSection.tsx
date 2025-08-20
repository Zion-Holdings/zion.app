import React from 'react';
import Link from 'next/link';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that streamline operations and boost productivity through machine learning and automation.',
      color: 'from-cyan-400 to-blue-500',
      glow: 'glow',
      href: '/services'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Advanced cybersecurity solutions with real-time threat detection and comprehensive protection for your business.',
      color: 'from-purple-400 to-pink-500',
      glow: 'glow-purple',
      href: '/services'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that ensure high availability, performance, and cost optimization for your applications.',
      color: 'from-green-400 to-teal-500',
      glow: 'glow-pink',
      href: '/services'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics and business intelligence platforms.',
      color: 'from-orange-400 to-red-500',
      glow: 'glow',
      href: '/services'
    },
    {
      icon: '🌐',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services that modernize your business processes and technology stack.',
      color: 'from-indigo-400 to-purple-500',
      glow: 'glow-purple',
      href: '/services'
    },
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'Custom ML solutions that learn from your data to provide predictive insights and intelligent automation.',
      color: 'from-pink-400 to-rose-500',
      glow: 'glow-pink',
      href: '/services'
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to drive innovation, 
            enhance security, and accelerate your business growth in the digital age.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group relative overflow-hidden"
            >
              <div 
                className={`card-hover p-8 h-full transform transition-all duration-500 hover:scale-105 ${feature.glow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl backdrop-blur-xl border border-white/10">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Explore All Services
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;