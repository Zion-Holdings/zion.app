import React from 'react';
import { Link } from 'react-router-dom';

export function FeatureCTAs() {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage the latest artificial intelligence to transform your business operations',
      icon: '🚀',
      cta: 'Explore AI Services',
      path: '/ai-services',
      color: 'bg-gradient-to-r from-zion-cyan to-blue-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Protect your business with industry-leading cybersecurity solutions',
      icon: '🛡️',
      cta: 'Secure Your Business',
      path: '/cybersecurity',
      color: 'bg-gradient-to-r from-red-500 to-pink-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your IT infrastructure and accelerate your digital journey',
      icon: '💡',
      cta: 'Transform Now',
      path: '/expanded-services',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-zion-slate-light text-lg mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Link
                to={feature.path}
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors shadow-lg"
              >
                {feature.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}