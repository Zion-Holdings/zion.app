import React from 'react';
import Link from 'next/link';
import { mainNavigation, socialLinks, contactInfo } from '../utils/navigationConfig';

export default function SmartFooter() {
  return (
    <footer className="bg-black/90 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-white/70 text-sm">
              AI-driven, self-improving web platform delivering continuous innovation and excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <span>📞</span>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <span>✉️</span>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <span>📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">🚀 Services</h4>
            <div className="space-y-2">
              {mainNavigation.services.slice(0, 3).map((category) => (
                <div key={category.id}>
                  <h5 className="text-cyan-300 font-medium text-sm mb-1">{category.name}</h5>
                  <ul className="space-y-1 ml-2">
                    {category.items.slice(0, 3).map((service) => (
                      <li key={service.id}>
                        <Link 
                          href={service.href} 
                          className="text-sm text-white/70 hover:text-white transition-colors"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-2">
                <Link 
                  href="/services" 
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">📚 Resources</h4>
            <ul className="space-y-2">
              {mainNavigation.resources.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Company Links */}
            <div className="pt-4">
              <h5 className="text-cyan-300 font-medium text-sm mb-2">🏢 Company</h5>
              <ul className="space-y-1">
                {mainNavigation.company.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">🔗 Connect</h4>
            
            {/* Social Links */}
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span>{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h5 className="text-cyan-300 font-medium text-sm mb-2">📧 Stay Updated</h5>
              <p className="text-white/60 text-xs mb-3">
                Get the latest insights and updates from Zion Tech Group
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 text-sm focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-white/60 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-medium">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}