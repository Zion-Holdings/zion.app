import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Github
} from 'lucide-react';

const Footer: React.FC = () => {
  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' }
  ];

  const solutionLinks = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
    { name: 'IT Onsite Services', href: '/it-onsite-services' },
    { name: 'Mobile Launch', href: '/mobile-launch' },
    { name: 'Zion Hire AI', href: '/zion-hire-ai' }
  ];

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-zion-cyan mb-2">Zion Tech Group</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Empowering businesses with cutting-edge AI and technology solutions. 
                We connect innovation with opportunity, driving digital transformation across industries.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zinc-300 text-sm">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-zinc-300 text-sm">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zinc-300 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zinc-300 hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'AI Services', href: '/micro-saas-services?category=AI Services' },
                { name: 'IT Services', href: '/micro-saas-services?category=IT Services' },
                { name: 'Micro SAAS', href: '/micro-saas-services?category=Micro SAAS' },
                { name: 'Development', href: '/micro-saas-services?category=Development' },
                { name: 'Security', href: '/micro-saas-services?category=Security' },
                { name: 'Cloud & Analytics', href: '/micro-saas-services?category=Cloud' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-zinc-300 hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: LinkedIn, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Github, href: '#', label: 'Github' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-zinc-800 hover:bg-zion-cyan rounded-lg flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <div className="text-zinc-300 text-sm">
                Stay updated with our latest innovations
              </div>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zinc-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-zion-cyan transition-colors ml-1">Terms of Service</Link>
            </div>
            <div className="text-zinc-400 text-sm">
              Powered by cutting-edge AI and quantum technologies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
