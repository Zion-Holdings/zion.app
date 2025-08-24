import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' }
    ],
    services: [
      { name: 'AI Automation', href: '/services' },
      { name: 'Cloud Solutions', href: '/services' },
      { name: 'Cybersecurity', href: '/services' },
      { name: 'Data Analytics', href: '/services' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Status Page', href: '/status' },
      { name: 'Support Portal', href: '/support' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="glass-dark border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link href="/" className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-white">Z</span>
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </Link>
                <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                  Leading-edge technology solutions and autonomous innovation systems that transform businesses and drive the future of digital transformation.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400/50"
                      aria-label={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="border-t border-white/10 pt-8 mb-8">
              <div className="max-w-md">
                <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                <p className="text-white/70 mb-4">Get the latest insights on technology trends and innovation.</p>
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/50 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-white/50 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/50 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-white/50 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;