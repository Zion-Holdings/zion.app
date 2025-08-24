import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Globe,
  Shield,
  Users,
  Zap
} from 'lucide-react';

export function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Services', href: '/services' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Talent Network', href: '/talent' },
        { name: 'AI Matching', href: '/match' },
        { name: 'Community', href: '/community' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Status', href: '/status' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Security', href: '/security' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@ziontechgroup.com', color: 'hover:text-red-400' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: '150+ countries, 24/7 support'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Smart matching and automation'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple border-t border-zion-purple/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section with Logo and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                  Zion
                </span>
              </Link>
              
              <p className="text-zion-slate-light text-lg mb-8 max-w-md leading-relaxed">
                The future of technology is here. Connect with top AI talent, access cutting-edge services, 
                and build the next generation of digital solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-zion-purple">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-zion-purple/20"
          >
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-zion-purple" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-zion-slate-light text-sm">contact@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-zion-purple" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-zion-slate-light text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-zion-purple" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-zion-slate-light text-sm">Global Network</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-zion-purple/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm">
                Privacy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm">
                Terms
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-full shadow-2xl shadow-zion-purple/25 flex items-center justify-center text-white hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}