import React from 'react';
import Link from 'next/link';
import { 
  Zap,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {

  const services = [
    { name: 'AI & Machine Learning', href: '/ai-services' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Space Technology', href: '/space-technology' },
    { name: 'IT Solutions', href: '/it-services' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'View All Services', href: '/services' }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase' },
    { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
    { name: 'Financial Solutions', href: '/financial-solutions' },
    { name: 'Government Solutions', href: '/government-technology-solutions' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing Plans', href: '/pricing' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Support Center', href: '/support' },
    { name: 'Training', href: '/training' },
    { name: 'White Papers', href: '/white-papers' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' }
  ];

  const socialLinks = [
    { name: 'X', href: '/social/twitter', icon: Twitter },
    { name: 'LinkedIn', href: '/social/linkedin', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'Facebook', href: '/social/facebook', icon: Facebook },
    { name: 'Instagram', href: '/social/instagram', icon: Instagram },
    { name: 'YouTube', href: '/social/youtube', icon: Youtube }
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
            <p className="text-gray-300 mb-6 max-w-xs">
              Pioneering the future of technology with innovative solutions that drive business transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a
                    href={solution.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </a>
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