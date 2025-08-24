import React from 'react';
import Link from 'next/link';
import { Mail, Smartphone, Building, Globe, Zap, Shield, Users, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Core Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
        { name: 'Blockchain & DeFi', href: '/services/blockchain-defi' },
        { name: 'Space Technology', href: '/services/space-technology' }
      ]
    },
    {
      title: 'Solutions by Industry',
      links: [
        { name: 'Financial Services', href: '/solutions/financial-services' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Education', href: '/solutions/education' },
        { name: 'Retail & E-commerce', href: '/solutions/retail-ecommerce' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Support', href: '/support' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Events', href: '/events' },
        { name: 'Blog', href: '/blog' },
        { name: 'API Reference', href: '/api' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/95 backdrop-blur-2xl border-t border-white/20 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  Zion Tech
                </span>
                <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                  Group
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Pioneering the future of autonomous business operations with cutting-edge AI, 
              quantum computing, and emerging technologies.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors duration-200">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Building className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {social.name}
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;