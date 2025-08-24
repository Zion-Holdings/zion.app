import React from 'react';
import Link from 'next/link';
import { Mail, Smartphone, Building, Globe, Zap, Shield, Users } from 'lucide-react';

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
      title: 'Revolutionary Services',
      links: [
        { name: 'Quantum AI Platform', href: '/quantum-ai-cognitive' },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Biotech AI', href: '/biotech-ai' },
        { name: 'Quantum Trading', href: '/quantum-financial-trading' }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning' },
        { name: 'Blockchain & DeFi', href: '/services?category=Blockchain%20%26%20DeFi' },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities' },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/services?category=Cloud%20Infrastructure' },
        { name: 'Digital Transformation', href: '/solutions' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Financial Services', href: '/solutions#financial' },
        { name: 'Healthcare', href: '/solutions#healthcare' },
        { name: 'Manufacturing', href: '/solutions#manufacturing' },
        { name: 'Government', href: '/solutions#government' },
        { name: 'Education', href: '/solutions#education' },
        { name: 'Retail & E-commerce', href: '/solutions#retail' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research', href: '/research' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' }
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 animate-grid-flow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
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
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions, 
              intelligent automation systems, and the future of cloud-native AI infrastructure.
            </p>
            
            {/* Contact Information */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Smartphone className="w-4 h-4 mr-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Building className="w-4 h-4 mr-3" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 bg-gray-800/50 hover:bg-blue-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-gray-700/50 hover:border-blue-500/30"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-cyan-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-cyan-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-white">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                <Globe className="w-5 h-5" />
                <a href={contactInfo.website} className="text-white hover:text-cyan-300 flex items-center space-x-2">
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                {section.title === 'Company' && <Users className="w-5 h-5 mr-2 text-blue-400" />}
                {section.title === 'Resources' && <Globe className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === 'Legal' && <Shield className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                <span>75+ Micro SaaS Services</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-300 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${20 + i * 8}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;