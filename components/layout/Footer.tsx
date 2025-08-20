import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'AI Automation', href: '/services#ai-automation' },
        { name: 'Cloud Infrastructure', href: '/services#cloud' },
        { name: 'DevOps Solutions', href: '/services#devops' },
        { name: 'Security & Compliance', href: '/services#security' },
        { name: 'Analytics & Insights', href: '/services#analytics' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions#enterprise' },
        { name: 'Startups', href: '/solutions#startups' },
        { name: 'Government', href: '/solutions#government' },
        { name: 'Healthcare', href: '/solutions#healthcare' },
        { name: 'Finance', href: '/solutions#finance' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Support', href: '/support' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/ziontech', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontech', icon: Linkedin },
    { name: 'Email', href: 'mailto:contact@zion.app', icon: Mail },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 group mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-110" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                  Zion Tech
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                World&apos;s most advanced autonomous innovation hub and AI-powered cloud platform. 
                Transforming infrastructure with intelligent automation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
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

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-gray-400 mb-8">
              Get the latest insights on autonomous technology and AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </footer>
  );
};

export default Footer;