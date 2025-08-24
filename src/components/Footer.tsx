import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black text-white py-16 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-zion-purple/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-zion-blue/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">ZION TECH GROUP</h3>
                <p className="text-zion-cyan text-sm">Innovation • Intelligence • Impact</p>
              </div>
            </div>
            <p className="text-zinc-300 mb-6 max-w-md">
              Pioneering the future of technology with revolutionary AI consciousness, 
              quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-300 hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-300 hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-300 hover:text-zion-cyan transition-colors">
                <MapPin className="h-4 w-4 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-300 hover:text-zion-cyan transition-colors">
                <Clock className="h-4 w-4 text-zion-cyan" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'AI Matcher', href: '/match' },
                { name: 'Talent', href: '/talent' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zinc-300 hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'AI Services', href: '/micro-saas-services?category=AI Services' },
                { name: 'IT Services', href: '/micro-saas-services?category=IT Services' },
                { name: 'Micro SAAS', href: '/micro-saas-services?category=Micro SAAS' },
                { name: 'Development', href: '/micro-saas-services?category=Development' },
                { name: 'Security', href: '/micro-saas-services?category=Security' },
                { name: 'Cloud & Analytics', href: '/micro-saas-services?category=Cloud' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-zinc-300 hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: LinkedIn, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Github, href: '#', label: 'Github' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-zinc-800 hover:bg-zion-cyan rounded-lg flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <div className="text-zinc-300 text-sm">
                Stay updated with our latest innovations
              </div>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zinc-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-zion-cyan transition-colors ml-1">Terms of Service</Link>
            </div>
            <div className="text-zinc-400 text-sm">
              Powered by cutting-edge AI and quantum technologies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}