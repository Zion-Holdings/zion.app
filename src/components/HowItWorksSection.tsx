import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Assess Your Needs',
      description: 'We start by understanding your business requirements and objectives'
    },
    {
      number: '02',
      title: 'Design Solution',
      description: 'Our experts design a tailored solution that fits your specific needs'
    },
    {
      number: '03',
      title: 'Implement & Test',
      description: 'We implement the solution and thoroughly test it for quality assurance'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Go live with ongoing support and maintenance from our team'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Our streamlined process ensures you get the best solutions efficiently and effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-zion-cyan text-zion-blue-dark w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-zion-cyan transform translate-x-1/2">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full absolute -top-1 right-0"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}