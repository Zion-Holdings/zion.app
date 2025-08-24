import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Micro SAAS Solutions', path: '/' },
        { name: 'IT Infrastructure', path: '/' },
        { name: 'AI & Machine Learning', path: '/' },
        { name: 'Cloud Migration', path: '/' },
        { name: 'Cybersecurity', path: '/' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/about' },
        { name: 'Partners', path: '/about' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', path: '/' },
        { name: 'API Reference', path: '/' },
        { name: 'Support Center', path: '/contact' },
        { name: 'Blog', path: '/' },
        { name: 'Case Studies', path: '/' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/' },
        { name: 'Terms of Service', path: '/' },
        { name: 'Cookie Policy', path: '/' },
        { name: 'GDPR Compliance', path: '/' },
        { name: 'Security', path: '/' }
      ]
    }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl font-bold text-zion-cyan">🚀</div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent font-orbitron">
                  Zion Tech Group
                </span>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Transforming businesses through innovative micro SAAS solutions, 
              cutting-edge IT services, and advanced AI technologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <span className="text-zion-cyan">📞</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <span className="text-zion-cyan">✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <span className="text-zion-cyan">📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-4 font-orbitron">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-zion-cyan/20 bg-zion-blue/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4 font-orbitron">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, IT trends, and business transformation 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-cyan/20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
              >
                Main Website
              </a>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg">💼</span>
                </a>
                <a
                  href="#"
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <span className="text-lg">🐦</span>
                </a>
                <a
                  href="#"
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <span className="text-lg">🐙</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;