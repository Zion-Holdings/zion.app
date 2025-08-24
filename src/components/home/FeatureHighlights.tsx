import React from 'react';

export const FeatureHighlights: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence for your business needs',
      icon: '🧠'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance',
      icon: '🔄'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Grow your business with our flexible solutions',
      icon: '📈'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security for your sensitive data',
      icon: '🔒'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We deliver exceptional value through innovation, reliability, and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};