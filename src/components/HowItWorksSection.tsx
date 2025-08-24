import React from 'react';
import { Search, Users, Handshake, Star, ArrowRight, CheckCircle } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: 'Discover Services',
      description: 'Browse our comprehensive catalog of AI, IT, and tech services. Use advanced filters to find exactly what you need.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Users,
      title: 'Connect with Experts',
      description: 'Review profiles, ratings, and portfolios. Connect directly with verified professionals who match your requirements.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Handshake,
      title: 'Collaborate & Execute',
      description: 'Work together seamlessly with real-time communication, project tracking, and milestone management.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Star,
      title: 'Rate & Review',
      description: 'Share your experience and help build our trusted community. Your feedback helps others make informed decisions.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const benefits = [
    'Verified Professional Network',
    'Secure Payment Protection',
    '24/7 Customer Support',
    'Quality Assurance Guarantee',
    'Flexible Service Options',
    'Transparent Pricing'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-blue/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How Zion Tech Group Works
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Our platform simplifies the process of finding and working with top tech professionals. 
            From discovery to delivery, we've streamlined every step for maximum efficiency.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-zion-cyan to-zion-purple opacity-30"></div>
              )}
              
              <div className={`p-6 rounded-2xl border border-white/10 ${step.bgColor} hover:border-white/20 transition-all duration-300 hover:scale-105 group-hover:shadow-xl`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              We're committed to providing the best experience for both clients and professionals, 
              with features designed to ensure success and satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <span>Ready to Get Started?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105">
              <span>Find Services</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="inline-flex items-center space-x-2 px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300">
              <span>Join as Professional</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}