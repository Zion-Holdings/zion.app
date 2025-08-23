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
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Globe,
  Zap,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  Target
} from 'lucide-react';

// Enhanced footer data with 2045 services
const footerData = {
  company: {
    name: 'Zion Tech Group',
    description: 'Pioneering the future of technology with revolutionary 2045 AI consciousness, quantum computing, space technology, and autonomous solutions that transform businesses worldwide.',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com'
  },
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' }
  ],
  revolutionary2045: [
    { label: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', badge: 'Revolutionary' },
    { label: 'Quantum Neural Ecosystem 2045', href: '/quantum-neural-ecosystem-2045', badge: 'Quantum' },
    { label: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', badge: 'Space' },
    { label: 'Metaverse Development Studio Pro 2045', href: '/metaverse-development-studio-pro-2045', badge: 'Metaverse' },
    { label: 'Quantum Cybersecurity Platform 2045', href: '/quantum-cybersecurity-platform-2045', badge: 'Security' },
    { label: 'Revolutionary 2045 Services Showcase', href: '/revolutionary-2045-futuristic-services-showcase', badge: 'Showcase' }
  ],
  services: [
    { label: 'AI & Machine Learning', href: '/services?category=ai-ml' },
    { label: 'Quantum Computing', href: '/services?category=quantum' },
    { label: 'Space Technology', href: '/services?category=space-tech' },
    { label: 'Cybersecurity', href: '/services?category=cybersecurity' },
    { label: 'Cloud Infrastructure', href: '/services?category=cloud' },
    { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { label: 'Micro SAAS Platforms', href: '/services?category=micro-saas' },
    { label: 'IT Services', href: '/services?category=it-services' }
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api-documentation' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'White Papers', href: '/white-papers' },
    { label: 'Support', href: '/support' },
    { label: 'Status', href: '/status' },
    { label: 'Training', href: '/training' },
    { label: 'Developer Resources', href: '/developer-resources' }
  ],
  solutions: [
    { label: 'Healthcare AI Solutions', href: '/healthcare-ai-solutions' },
    { label: 'Financial Solutions', href: '/financial-solutions' },
    { label: 'Government Technology', href: '/government-technology-solutions' },
    { label: 'Education Technology', href: '/education-technology-solutions' },
    { label: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
    { label: 'Retail Technology', href: '/retail-technology-solutions' },
    { label: 'Energy & Utilities', href: '/energy-utilities-solutions' },
    { label: 'Entertainment & Media', href: '/entertainment-media-solutions' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Company Information */}
          <div className="lg:col-span-2">
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

                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href={footerData.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                    aria-label="Visit our website"
                  >
                    {footerData.company.website}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Revolutionary 2045 Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-pink-400" />
                Revolutionary 2045
              </h3>
              <ul className="space-y-3">
                {footerData.revolutionary2045.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group flex items-center justify-between text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-400/50 rounded"
                      aria-label={`Explore ${service.label}`}
                    >
                      <span className="truncate">{service.label}</span>
                      {service.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30 group-hover:bg-pink-500/30 transition-colors duration-300">
                          {service.badge}
                        </span>
                      )}
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
              transition={{ duration: 0.6, delay: 0.3 }}
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
                      aria-label={`Explore ${solution.label}`}
                    >
                      {solution.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources & Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                Resources
              </h3>
              <ul className="space-y-3 mb-6">
                {footerData.resources.map((resource) => (
                  <li key={resource.label}>
                    <Link
                      href={resource.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded"
                      aria-label={`Access ${resource.label}`}
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>

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
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-medium">Follow us:</span>
              <div className="flex items-center space-x-4">
                {footerData.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex-1 max-w-md">
              <div className="text-center lg:text-right">
                <h4 className="text-white font-semibold mb-2">Stay Updated with 2045 Tech</h4>
                <p className="text-gray-400 text-sm mb-3">Get the latest revolutionary technology insights</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. Pioneering the future of technology.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2040;