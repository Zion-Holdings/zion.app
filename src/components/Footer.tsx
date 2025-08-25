import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  Globe
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/ziontechgroup',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/ziontechgroup',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/ziontechgroup',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@ziontechgroup',
      color: 'hover:text-red-400'
    },
    {
      name: 'Website',
      icon: Globe,
      href: 'https://ziontechgroup.com',
      color: 'hover:text-cyan-400'
    }
  ];

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ];

  const serviceCategories = [
    { name: 'AI & Machine Learning', href: '/services#ai-ml' },
    { name: 'Cybersecurity', href: '/services#cybersecurity' },
    { name: 'Cloud & DevOps', href: '/cloud-devops' },
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Micro SAAS', href: '/services/micro-saas-solutions' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'United States',
      href: '#'
    }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-cyan/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI solutions, enterprise IT services, 
              and innovative technology consulting to drive digital transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-gray-400 transition-all duration-300 ${social.color} hover:border-zion-cyan/60 hover:bg-zion-cyan/10`}
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span>{service.name}</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-start space-x-3">
                  <contact.icon className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    {contact.href !== '#' ? (
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}