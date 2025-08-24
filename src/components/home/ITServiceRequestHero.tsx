import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export function ITServiceRequestHero() {
  const features = [
    '24/7 IT Support Available',
    'On-site & Remote Services',
    'Emergency Response Team',
    'Certified IT Professionals'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-blue/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse delay-1000"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium">
                <Clock className="h-4 w-4" />
                <span>24/7 IT Support</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
                  IT Services
                </span>
                When You Need Them
              </h1>
              
              <p className="text-xl text-zinc-300 max-w-2xl">
                Get immediate access to certified IT professionals for on-site support, 
                remote assistance, and emergency response. Your technology challenges 
                are our priority.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
              >
                <span>Request IT Service</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <span>Contact Support</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-3 text-zinc-300 hover:text-zion-cyan transition-colors">
                <Phone className="h-5 w-5 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-300 hover:text-zion-cyan transition-colors">
                <Mail className="h-5 w-5 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Service Categories */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Popular IT Services
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Network Setup', icon: '🌐', color: 'from-blue-500 to-cyan-500' },
                { name: 'Security Audit', icon: '🔒', color: 'from-red-500 to-pink-500' },
                { name: 'Cloud Migration', icon: '☁️', color: 'from-cyan-500 to-blue-500' },
                { name: 'Data Recovery', icon: '💾', color: 'from-green-500 to-emerald-500' },
                { name: 'Hardware Support', icon: '🖥️', color: 'from-orange-500 to-red-500' },
                { name: 'Software Installation', icon: '📱', color: 'from-purple-500 to-pink-500' }
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <span className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-300">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/it-services"
                className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300"
              >
                <span>View All IT Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}