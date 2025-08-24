
import React from 'react';
import { CheckCircle, Zap, Shield, Users, Globe, TrendingUp } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "All services and talent are verified and quality-checked"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times for all projects and services"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for your business needs"
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to top-tier tech professionals worldwide"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with talent and services from anywhere"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your business with flexible, scalable services"
    }
  ];

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We provide the most comprehensive tech marketplace experience with unmatched quality, security, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-zion-slate-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
