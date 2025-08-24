import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Browse',
      description: 'Explore our marketplace for services and talent'
    },
    {
      number: '2',
      title: 'Connect',
      description: 'Get in touch with providers and discuss your needs'
    },
    {
      number: '3',
      title: 'Collaborate',
      description: 'Work together to achieve your goals'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}