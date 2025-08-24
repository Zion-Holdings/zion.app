import React from 'react';

export function FeatureHighlights() {
  const highlights = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Deploy solutions in days, not months with our streamlined processes'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your sensitive data'
    },
    {
      icon: '🌍',
      title: 'Global Support',
      description: '24/7 support team available worldwide to assist you anytime'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Monitor performance and insights with comprehensive dashboards'
    },
    {
      icon: '🔄',
      title: 'Scalable Solutions',
      description: 'Grow with confidence knowing our solutions scale with your business'
    },
    {
      icon: '🎯',
      title: 'Proven Results',
      description: 'Track record of delivering measurable business outcomes'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover what makes Zion Tech Group the preferred choice for businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan transition-all duration-300">
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}