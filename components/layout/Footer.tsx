import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Zap, 
  Sparkles, 
  Shield, 
  Rocket,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const services = [
    { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
    { name: 'Blockchain & Web3', href: '/services?category=Blockchain%20%26%20Web3' },
    { name: 'Metaverse & VR/AR', href: '/services?category=Metaverse%20%26%20VR%2FAR' },
    { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities' },
    { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing' },
    { name: 'Robotics & Automation', href: '/services?category=Robotics%20%26%20Automation' },
    { name: 'Analytics & Business Intelligence', href: '/services?category=Analytics%20%26%20Business%20Intelligence' },
    { name: 'Cloud & Infrastructure', href: '/services?category=Cloud%20%26%20Infrastructure' },
    { name: 'View All Services', href: '/services' }
  ];

  const solutions = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Cloud Platform', href: '/cloud-platform' },
    { name: 'AI Assistant', href: '/ai-assistant' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Automation', href: '/automation' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Resources', href: '/resources' },
    { name: 'Support', href: '/support' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookies', href: '/cookies' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Resources', href: '/resources' },
    { name: 'Support Center', href: '/support' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'All Services', href: '/services' },
    { name: 'Services Advertising', href: '/services-advertising' },
    { name: 'Market Pricing', href: '/market-pricing' }
  ];

  const socialLinks = [
    { name: 'X', href: 'https://x.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                <div className="text-sm text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary AI & quantum computing solutions transforming industries worldwide. 
              350+ real micro SaaS services with 1500%+ average ROI. 
              Trusted by Fortune 500 companies and government agencies.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-purple-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-green-400 mt-1" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-4 h-4 mr-3 text-orange-400" />
                <a href={contactInfo.website} className="hover:text-white transition-colors">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 mr-2 text-purple-400" />
              Solutions
            </h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-orange-400" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <span className="text-gray-400 text-sm mr-4">Follow Us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Stay Updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-r-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;