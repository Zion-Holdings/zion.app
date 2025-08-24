import React from 'react';
import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Mail, Phone, MapPin, Zap, Brain, Shield, Cloud } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-zion-blue-dark text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-3 h-3 bg-zion-purple/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-1/3 w-2 h-2 bg-zion-cyan/20 rounded-full animate-bounce" />
          <div className="absolute bottom-20 left-1/2 w-2.5 h-2.5 bg-zion-purple/20 rounded-full animate-ping" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Zion Tech Group</h3>
                <p className="text-zion-cyan text-sm">Innovation at Your Fingertips</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Your trusted partner for cutting-edge AI, IT, and SAAS solutions. 
              We deliver innovative technology solutions that drive business growth and transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-zion-cyan" />
              Our Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                AI Solutions
              </Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                IT Services
              </Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                SAAS Platforms
              </Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                Cloud Solutions
              </Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                Cybersecurity
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                About Us
              </Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                Contact
              </Link></li>
              <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                Services
              </Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                Get Quote
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Cloud className="h-5 w-5 text-zion-cyan" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-zion-purple/10 border border-zion-purple/20 rounded-lg hover:bg-zion-purple/20 transition-colors duration-300">
                <Phone className="h-5 w-5 text-zion-cyan" />
                <div>
                  <div className="text-white font-medium">+1 302 464 0950</div>
                  <div className="text-zion-slate-light text-sm">Call us anytime</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zion-purple/10 border border-zion-purple/20 rounded-lg hover:bg-zion-purple/20 transition-colors duration-300">
                <Mail className="h-5 w-5 text-zion-cyan" />
                <div>
                  <div className="text-white font-medium">kleber@ziontechgroup.com</div>
                  <div className="text-zion-slate-light text-sm">Email us today</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zion-purple/10 border border-zion-purple/20 rounded-lg hover:bg-zion-purple/20 transition-colors duration-300">
                <MapPin className="h-5 w-5 text-zion-cyan" />
                <div>
                  <div className="text-white font-medium">364 E Main St STE 1008</div>
                  <div className="text-zion-slate-light text-sm">Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-zion-purple/30">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 border border-zion-purple/30 rounded-xl p-6">
            <div className="text-center mb-4">
              <h4 className="text-white font-semibold text-lg mb-2">Stay Updated with Innovation</h4>
              <p className="text-zion-slate-light">Get the latest insights on AI, technology trends, and industry updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zion-purple/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60" />
    </footer>
  );
}