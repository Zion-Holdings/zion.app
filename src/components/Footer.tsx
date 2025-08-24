import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'AI Services', href: '/services/ai' },
    { name: 'IT Support', href: '/services/it' },
    { name: 'Development', href: '/services/development' },
    { name: 'Consulting', href: '/services/consulting' },
  ],
  resources: [
    { name: 'Help Center', href: '/help' },
    { name: 'API Documentation', href: '/api' },
    { name: 'Developer Portal', href: '/developers' },
    { name: 'Community', href: '/community' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-blue to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
              <p className="text-zion-slate-light mt-3 text-sm leading-relaxed">
                The future of tech and AI marketplace. Connecting businesses with top talent, 
                innovative services, and cutting-edge equipment worldwide.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-zion-slate-light text-sm">
                <Mail className="w-4 h-4 mr-3 text-zion-cyan" />
                <a href="mailto:contact@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  contact@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <Phone className="w-4 h-4 mr-3 text-zion-cyan" />
                <a href="tel:+18009466832" className="hover:text-zion-cyan transition-colors">
                  +1 (800) 946-6832
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light text-sm">
                <MapPin className="w-4 h-4 mr-3 text-zion-cyan" />
                <span>Global Operations</span>
              </div>
            </div>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-zion-slate-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zion-slate-light/20 rounded-full flex items-center justify-center text-zion-slate-light hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}