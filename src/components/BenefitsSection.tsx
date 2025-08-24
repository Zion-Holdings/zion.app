import React from 'react';

export function BenefitsSection() {
  const benefits = [
    {
      title: 'Free to Use',
      description: 'No hidden fees or subscription costs',
      icon: '💰'
    },
    {
      title: 'Quality Assured',
      description: 'Vetted professionals and verified services',
      icon: '✅'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance',
      icon: '🕒'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}