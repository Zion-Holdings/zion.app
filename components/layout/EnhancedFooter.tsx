import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Talent', href: '/talents' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Status', href: '/status' },
        { name: 'Contact Support', href: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Security', href: '/security' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '💻' },
    { name: 'Discord', href: '#', icon: '🎮' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue border-t border-neon-blue/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="container-responsive relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                    Zion
                  </h3>
                  <p className="text-sm text-gray-400">AI-Powered Marketplace</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Experience the future of commerce with our cutting-edge AI-powered marketplace. 
                Connect with top-tier IT services, AI talents, and innovative products.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 border border-neon-blue/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold mb-4 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center group"
                      >
                        <div className="w-1 h-1 bg-neon-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-neon-blue/20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Get the latest updates on new features and services</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-white/5 border border-neon-blue/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/50 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-r-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neon-blue/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Cookies
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green text-xs">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default EnhancedFooter;
