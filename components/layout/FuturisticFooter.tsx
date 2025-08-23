import React from 'react';
import Link from 'next/link';
import { Sparkles, Mail, Phone, MapPin, Globe, ArrowRight, ExternalLink, Brain, Factory, FlaskConical, Atom, Rocket, Shield, Zap, Star, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

export default function FuturisticFooter() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceCategories = [
    { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing', icon: <Atom className="w-4 h-4" /> },
    { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning', icon: <Brain className="w-4 h-4" /> },
    { name: 'Autonomous Systems', href: '/services?category=Autonomous%20Systems', icon: <Factory className="w-4 h-4" /> },
    { name: 'Healthcare & Biotech', href: '/services?category=Healthcare%20%26%20Biotechnology', icon: <FlaskConical className="w-4 h-4" /> },
    { name: 'Emerging Technologies', href: '/services?category=Emerging%20Technologies', icon: <Rocket className="w-4 h-4" /> }
  ];

  const companyStats = [
    { number: '500+', label: 'Micro SaaS Services', icon: <Zap className="w-5 h-5" /> },
    { number: '5000%+', label: 'Average ROI', icon: <TrendingUp className="w-5 h-5" /> },
    { number: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-5 h-5" /> },
    { number: '21', label: 'Day Free Trials', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 border-t border-gray-700/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Revolutionary Technology</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of autonomous technology and AI-driven innovation. 
                Transform your business with our 500+ cutting-edge micro SaaS services.
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center justify-center text-cyan-400 mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Categories */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {serviceCategories.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <div className="w-4 h-4 mr-2 text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                        {service.icon}
                      </div>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Get Started</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ready to transform your business? Start your 21-day free trial today and experience the future of technology.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>21-Day Free Trial</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>99.99% Uptime Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}