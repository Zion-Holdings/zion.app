import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github, Linkedin, Mail, Phone, MapPin, Shield, HelpCircle, Cookie, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zion-blue-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-lg">Zion Tech Group</h3>
            <p className="text-zion-slate-light mb-4">
              Your comprehensive marketplace for all things technology and AI. 
              Discover top AI and tech talent, services, and equipment in one place.
              Powered by cutting-edge AI matching technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/comprehensive-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Comprehensive Services</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
              <li><Link to="/enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/services-pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Resources & Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cookie Policy</Link></li>
              <li><a href="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</a></li>
              <li><a href="/sitemap.xml" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                Sitemap XML <ExternalLink className="w-3 h-3 ml-1" />
              </a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-12 pt-8 border-t border-zion-blue-light/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <Phone className="h-5 w-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-sm text-zion-slate-light">Phone</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <Mail className="h-5 w-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-sm text-zion-slate-light">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <MapPin className="h-5 w-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-sm text-zion-slate-light">Address</p>
                <p className="text-white font-medium text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zion-blue-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-4 w-4 text-zion-cyan" />
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                Privacy Policy
              </a>
              <a href="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</a>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors flex items-center">
                <Cookie className="w-3 h-3 mr-1" />
                Cookie Policy
              </Link>
              <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors flex items-center">
                <HelpCircle className="w-3 h-3 mr-1" />
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}