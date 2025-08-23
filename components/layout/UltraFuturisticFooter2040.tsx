import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Zap,
  ArrowRight,
  Globe,
  Shield,
  Brain,
  Atom,
  Rocket,
  Building,
  Users,
  BookOpen,
  HelpCircle,
  Star,
  CheckCircle
} from 'lucide-react';

const UltraFuturisticFooter2040: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Enterprise SAAS', href: '/services?category=enterprise' },
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml' },
        { label: 'Quantum Computing', href: '/services?category=quantum' },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity' },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud' },
        { label: 'Micro SAAS', href: '/services?category=micro-saas' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Financial Services', href: '/solutions/financial-services' },
        { label: 'Healthcare', href: '/solutions/healthcare' },
        { label: 'Manufacturing', href: '/solutions/manufacturing' },
        { label: 'Retail & E-commerce', href: '/solutions/retail-ecommerce' },
        { label: 'Government', href: '/solutions/government' },
        { label: 'Education', href: '/solutions/education' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Updates', href: '/news' },
        { label: 'Partners', href: '/partners' },
        { label: 'Investors', href: '/investors' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Training', href: '/training' },
        { label: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
    { href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" />, label: 'YouTube' }
  ];

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: 'Enterprise Security' },
    { icon: <Brain className="w-5 h-5" />, text: 'AI-Powered Solutions' },
    { icon: <Atom className="w-5 h-5" />, text: 'Quantum Technology' },
    { icon: <Rocket className="w-5 h-5" />, text: 'Innovation First' },
    { icon: <Globe className="w-5 h-5" />, text: 'Global Reach' },
    { icon: <Star className="w-5 h-5" />, text: 'Industry Leader' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of innovative AI, IT, and micro SAAS solutions. 
              Transform your business with cutting-edge technology and expert support.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-sm text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800/50"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, quantum computing, and technology trends delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800/50 text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:scale-110"
                aria-label={`Visit our ${social.label} page`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 transform rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2040;