import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' }
    ],
    services: [
      { label: 'AI & ML', href: '/services#ai' },
      { label: 'Cloud Solutions', href: '/services#cloud' },
      { label: 'Cybersecurity', href: '/services#security' },
      { label: 'Digital Transformation', href: '/services#digital' }
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' }
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Help Center', href: '/help' },
      { label: 'Status Page', href: '/status' },
      { label: 'Support Portal', href: '/support' }
    ]
  };

  const socialLinks = [
    { icon: '🐦', label: 'Twitter', href: 'https://twitter.com/ziontechgroup' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup' },
    { icon: '📘', label: 'Facebook', href: 'https://facebook.com/ziontechgroup' },
    { icon: '📷', label: 'Instagram', href: 'https://instagram.com/ziontechgroup' },
    { icon: '📺', label: 'YouTube', href: 'https://youtube.com/ziontechgroup' }
  ];

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-white/60 font-mono">Autonomous Innovation Hub</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Leading-edge technology solutions and intelligent automation systems that drive digital transformation and innovation across industries.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
                             {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-cyan-400/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h4>
            <p className="text-white/70 mb-6">
              Get the latest technology trends, case studies, and innovation insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;