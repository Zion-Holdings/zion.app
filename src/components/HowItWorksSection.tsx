import React from 'react';
import { Search, Handshake, Rocket, CheckCircle } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discover Services",
      description: "Browse our comprehensive catalog of AI, IT, and micro SAAS solutions",
      step: "01"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Get Consultation",
      description: "Connect with our experts for personalized recommendations and quotes",
      step: "02"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Implementation",
      description: "Fast deployment with our streamlined setup and onboarding process",
      step: "03"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Success & Support",
      description: "Ongoing support and optimization to ensure maximum ROI",
      step: "04"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark to-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading size="4xl" className="mb-4">
            How It Works
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Getting started with Zion Tech Group is simple. Follow these four easy steps 
            to transform your business with cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.step}
              </div>
              
              {/* Content */}
              <div className="pt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300">
            Start Your Journey
            <Rocket className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}