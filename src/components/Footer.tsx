import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNewsletter } from './FooterNewsletter';
import { Logo } from './header/Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Press & Media', path: '/press' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'IT Solutions', path: '/services/it-solutions' },
        { name: 'AI Services', path: '/services/ai-services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Green IT', path: '/green-it' },
        { name: 'On-Site Support', path: '/it-onsite-services' },
      ]
    },
    {
      title: 'Talent',
      links: [
        { name: 'Browse Talents', path: '/talents' },
        { name: 'Talent Directory', path: '/talent-directory' },
        { name: 'AI Matcher', path: '/ai-matcher' },
        { name: 'Hire Now', path: '/hire-now' },
        { name: 'Post a Job', path: '/post-job' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Help Center', path: '/help-center' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'GDPR Compliance', path: '/gdpr' },
        { name: 'Accessibility', path: '/accessibility' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Zion Tech Group is a leading technology company providing innovative IT solutions, 
              AI services, and connecting top tech talent with forward-thinking organizations.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-200 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-zion-cyan hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Get the latest insights on technology trends, industry news, and exclusive updates delivered to your inbox.
=======
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/portfolio" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Portfolio</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
              <li><Link to="/forgot-password" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Reset Password</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-zion-slate-light mb-4">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
            </p>
            <FooterNewsletter />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/sitemap" className="hover:text-zion-cyan transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors">
                Accessibility
              </Link>
              <Link to="/support" className="hover:text-zion-cyan transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}