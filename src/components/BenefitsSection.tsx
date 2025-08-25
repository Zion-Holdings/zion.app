import React from 'react';
import { CheckCircle, Zap, Shield, Users, TrendingUp, Clock } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technologies for instant results"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your data and infrastructure"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for all solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Growth",
      description: "Solutions that grow with your business, from startup to enterprise"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Saving",
      description: "Automated workflows that save hours of manual work every day"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Results",
      description: "Trusted by thousands of businesses worldwide with measurable ROI"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading size="4xl" className="mb-4">
            Why Choose Zion Tech Group?
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            We deliver exceptional value through innovative technology solutions, 
            expert support, and proven results that drive your business forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-zion-slate-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}