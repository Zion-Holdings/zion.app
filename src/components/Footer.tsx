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
  Instagram
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Micro SAAS Services', path: '/micro-saas-services' },
        { name: 'AI & Machine Learning', path: '/ai-services' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions' },
        { name: 'Cloud & DevOps', path: '/cloud-devops-solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'IT Onsite Services', path: '/it-onsite-services' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Talent Directory', path: '/talent' },
        { name: 'Equipment Marketplace', path: '/equipment' },
        { name: 'AI Matcher', path: '/match' },
        { name: 'Analytics Dashboard', path: '/analytics' },
        { name: 'Community', path: '/community' },
        { name: 'Partners', path: '/partners' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Privacy Policy', path: '/privacy' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api' },
        { name: 'Status Page', path: '/status' },
        { name: 'Contact Support', path: '/support' },
        { name: 'Community Forum', path: '/forum' },
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/Zion-Holdings',
      external: true 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/company/ziontechgroup',
      external: true 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/ziontechgroup',
      external: true 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com/@ziontechgroup',
      external: true 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/ziontechgroup',
      external: true 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/ziontechgroup',
      external: true 
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
      link: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      text: 'Delaware, United States',
      link: '#'
    }
  ];

  return (
    <footer className="bg-zion-blue border-t border-zion-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </Link>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions, AI innovation, and digital transformation expertise.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.external ? '_blank' : '_self'}
                      rel={social.external ? 'noopener noreferrer' : ''}
                      className="w-10 h-10 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-blue-light/70 transition-all duration-200 group"
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                      {social.external && (
                        <ExternalLink className="w-3 h-3 absolute -top-1 -right-1 text-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light text-sm">Stay updated:</span>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors duration-200 text-sm w-48"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-purple/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};