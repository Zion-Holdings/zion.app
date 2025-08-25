import React from 'react';
import { Building2, Users, Globe, Award, Shield, Zap } from 'lucide-react';

export function TrustedBySection() {
  const stats = [
    {
      icon: <Building2 className="h-8 w-8" />,
      number: '500+',
      label: 'Enterprise Clients',
      description: 'Trusted by leading companies worldwide'
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: '50K+',
      label: 'Active Users',
      description: 'Growing community of professionals'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: '25+',
      label: 'Countries',
      description: 'Global presence and support'
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognized for excellence'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      number: '99.9%',
      label: 'Uptime',
      description: 'Reliable and secure services'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      number: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    }
  ];

  const logos = [
    { name: 'TechCorp', logo: '🔷' },
    { name: 'InnovateLab', logo: '🚀' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudTech', logo: '☁️' },
    { name: 'AISolutions', logo: '🤖' },
    { name: 'SecureNet', logo: '🛡️' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            Join thousands of businesses that trust Zion Tech Group to power their digital transformation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 group-hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-zion-slate-light mb-1">{stat.label}</div>
                <div className="text-xs text-zion-slate-light/70">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <div className="text-sm text-zion-slate-light mb-8">Trusted by innovative companies worldwide</div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((company, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <div className="text-sm text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
            <div className="text-2xl text-zion-slate-light mb-6 italic">
              "Zion Tech Group has transformed our business operations with their innovative AI solutions. 
              The level of expertise and support is unmatched in the industry."
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">John Smith</div>
                <div className="text-sm text-zion-slate-light">CTO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}