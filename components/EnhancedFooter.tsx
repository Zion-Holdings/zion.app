import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Users, 
  Mail, Phone, MapPin, ExternalLink, ArrowUp,
  Twitter, Linkedin, Github, Globe, Zap
} from 'lucide-react';

export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { name: 'AI & Machine Learning', href: '/services/ai-ml' },
        { name: 'Quantum Computing', href: '/services/quantum' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Edge Computing', href: '/services/edge-computing' },
        { name: 'DevOps & Infrastructure', href: '/services/devops' }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Startup Tools', href: '/solutions/startups' },
        { name: 'Industry Specialized', href: '/solutions/industry' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
        { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
        { name: 'Legacy Modernization', href: '/solutions/legacy-modernization' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Partnerships', href: '/partnerships' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Whitepapers', href: '/whitepapers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support Center', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe }
  ];

  const contactInfo = [
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: MapPin, text: 'Delaware, United States', href: '#location' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Leading-edge technology solutions and autonomous innovation platform. 
                Empowering businesses with cutting-edge AI, quantum computing, cybersecurity, 
                and digital transformation solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400" />
                    <span>{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm"
            >
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-1">
                Built with cutting-edge technology and AI-powered innovation.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center text-white/70 hover:text-cyan-400 transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-white/50">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Global Deployment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}