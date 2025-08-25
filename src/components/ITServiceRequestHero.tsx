import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Shield, Cloud } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { NeonGlow } from '@/components/ui/NeonGlow';

export function ITServiceRequestHero() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that learns and adapts to your business needs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Advanced security solutions protecting your digital assets and infrastructure."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing",
      description: "Scalable cloud solutions that optimize performance and reduce costs."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple-dark/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/5 opacity-20"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <NeonGlow color="zion-cyan" intensity="high">
          <GradientHeading size="6xl" className="mb-6">
            Zion Tech Group
          </GradientHeading>
        </NeonGlow>
        
        <NeonGlow color="zion-purple" intensity="medium">
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of technology with revolutionary AI consciousness, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
        </NeonGlow>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
          >
            Get Started
            <Zap className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zion-slate-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}