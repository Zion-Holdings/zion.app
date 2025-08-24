import React from 'react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: '🚀',
      title: 'Fast Implementation',
      description: 'Get your solutions up and running quickly with our streamlined processes'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality or features'
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom solutions designed specifically for your business needs'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            We deliver exceptional value through innovation, reliability, and customer-focused solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}