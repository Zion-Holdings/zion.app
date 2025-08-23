import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Rocket, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Brain,
  Atom,
  Shield,
  Target,
  Linkedin,
  Twitter,
  Github,
  Youtube
} from 'lucide-react';

// Memoized footer data for better performance
const footerData = {
  company: {
    name: 'Zion Tech Group',
    description: 'Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com'
  },
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' }
  ],
  services: [
    { label: 'AI & Machine Learning', href: '/services?category=ai-ml' },
    { label: 'Quantum Computing', href: '/services?category=quantum' },
    { label: 'Space Technology', href: '/services?category=space-tech' },
    { label: 'Cybersecurity', href: '/services?category=cybersecurity' },
    { label: 'Cloud Infrastructure', href: '/services?category=cloud' },
    { label: 'Enterprise Solutions', href: '/solutions/enterprise' }
  ],
  solutions: [
    { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { label: 'Startup Solutions', href: '/solutions/startup' },
    { label: 'Government Solutions', href: '/solutions/government' },
    { label: 'Healthcare Solutions', href: '/healthcare-solutions' },
    { label: 'Financial Solutions', href: '/financial-solutions' },
    { label: 'Education Solutions', href: '/education-technology-solutions' }
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api-documentation' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'White Papers', href: '/white-papers' },
    { label: 'Support', href: '/support' },
    { label: 'Status', href: '/status' }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ]
};

const UltraFuturisticFooter2040: React.FC = () => {
  // Memoized current year
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-cyan-400/20" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-6" aria-label="Zion Tech Group Home">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {footerData.company.description}
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href={`tel:${footerData.company.phone}`}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                    aria-label={`Call us at ${footerData.company.phone}`}
                  >
                    {footerData.company.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href={`mailto:${footerData.company.email}`}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                    aria-label={`Email us at ${footerData.company.email}`}
                  >
                    {footerData.company.email}
                  </a>
                </div>
                
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <address className="not-italic">
                    {footerData.company.address}
                  </address>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerData.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-purple-400" />
                Services
              </h3>
              <ul className="space-y-3">
                {footerData.services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400/50 rounded"
                      aria-label={`Explore ${service.label} services`}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Solutions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Target className="w-4 h-4 mr-2 text-green-400" />
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerData.solutions.map((solution) => (
                  <li key={solution.label}>
                    <Link
                      href={solution.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-green-400/50 rounded"
                      aria-label={`Explore ${solution.label} solutions`}
                    >
                      {solution.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-green-400" />
                Resources
              </h3>
              <ul className="space-y-3">
                {footerData.resources.map((resource) => (
                  <li key={resource.label}>
                    <Link
                      href={resource.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-green-400/50 rounded"
                      aria-label={`Access ${resource.label}`}
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Technology Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-700/50"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Leading the revolution in AI consciousness, quantum computing, and autonomous systems
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Brain className="w-8 h-8" />, label: 'AI Consciousness', color: 'text-purple-400' },
              { icon: <Atom className="w-8 h-8" />, label: 'Quantum Computing', color: 'text-blue-400' },
              { icon: <Rocket className="w-8 h-8" />, label: 'Space Technology', color: 'text-pink-400' },
              { icon: <Shield className="w-8 h-8" />, label: 'Cybersecurity', color: 'text-red-400' }
            ].map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-cyan-400/20 mb-3 group-hover:border-cyan-400/40 transition-all duration-300 ${tech.color}`}>
                  {tech.icon}
                </div>
                <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              <p>
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              {footerData.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:bg-cyan-400/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  aria-label={`Visit our ${social.label} page`}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6 text-sm"
            >
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                aria-label="Cookie Policy"
              >
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-t border-cyan-400/20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Stay Updated with Innovation
            </h3>
            <p className="text-gray-300">
              Get the latest insights on AI, quantum computing, and cutting-edge technology
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
              aria-label="Email address for newsletter"
              required
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;