import React from 'react';

export function FaqSection() {
  return (
    <div className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              What services does Zion Tech Group offer?
            </h3>
            <p className="text-zion-slate-light">
              We offer comprehensive AI solutions, cybersecurity services, cloud infrastructure, 
              data analytics, blockchain development, and innovative technology consulting.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              How can I get started with your services?
            </h3>
            <p className="text-zion-slate-light">
              Contact us through our website or call us directly. We'll schedule a consultation 
              to understand your needs and provide a customized solution.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              What is your typical project timeline?
            </h3>
            <p className="text-zion-slate-light">
              Project timelines vary based on complexity. Simple projects may take 2-4 weeks, 
              while complex enterprise solutions can take 3-6 months or more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}