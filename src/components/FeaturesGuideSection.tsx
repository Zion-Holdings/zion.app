import React from 'react';

export function FeaturesGuideSection() {
  const features = [
    {
      title: 'AI Talent Marketplace',
      description: 'Connect with top AI professionals and experts from around the world.',
      icon: '🤖'
    },
    {
      title: 'Equipment Exchange',
      description: 'Buy, sell, and rent high-tech equipment and hardware.',
      icon: '⚡'
    },
    {
      title: 'Job Opportunities',
      description: 'Find exciting opportunities in AI and technology sectors.',
      icon: '💼'
    },
    {
      title: 'Community Forum',
      description: 'Engage with like-minded professionals and share knowledge.',
      icon: '💬'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}