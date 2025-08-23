import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  ArrowUp,
  Sparkles,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Users,
  BookOpen,
  FileText,
  Star,
  Globe,
  Zap,
  Lightbulb,
  Award,
  BarChart3,
  Cpu,
  Video,
  Code,
  Handshake
} from 'lucide-react';

const UltraFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
        { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom },
        { label: 'Space Technology', href: '/services?category=space-tech', icon: Rocket },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: Shield },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud },
        { label: 'Edge Computing', href: '/services?category=edge', icon: Zap }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Target },
        { label: 'Healthcare Technology', href: '/solutions/healthcare', icon: Users },
        { label: 'Financial Technology', href: '/solutions/financial', icon: BarChart3 },
        { label: 'Manufacturing & IoT', href: '/solutions/manufacturing', icon: Cpu },
        { label: 'Smart Cities', href: '/solutions/smart-cities', icon: Globe },
        { label: 'Research & Development', href: '/solutions/research', icon: Lightbulb }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText },
        { label: 'Blog & Insights', href: '/blog', icon: BookOpen },
        { label: 'Webinars', href: '/webinars', icon: Video },
        { label: 'Case Studies', href: '/case-studies', icon: Award },
        { label: 'Training Programs', href: '/training', icon: Users },
        { label: 'API Reference', href: '/api', icon: Code }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about', icon: Users },
        { label: 'Leadership', href: '/leadership', icon: Star },
        { label: 'Careers', href: '/careers', icon: Users },
        { label: 'News & Press', href: '/news', icon: FileText },
        { label: 'Case Studies', href: '/case-studies', icon: Award },
        { label: 'Partners', href: '/partners', icon: Handshake },
        { label: 'Contact', href: '/contact', icon: Phone }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-400/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <Link href="/" className="flex items-center space-x-2 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-full h-full text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </Link>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-6 leading-relaxed max-w-md"
              >
                Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400 mt-0.5" />
                  <span className="text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex space-x-4 mt-6"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400/50 transition-all duration-300 hover:scale-110">
                  <Youtube className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-white mb-4"
                >
                  {section.title}
                </motion.h3>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * sectionIndex + 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {section.items.map((item, itemIndex) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
                      >
                        <item.icon className="w-4 h-4 text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-200" />
                        <span className="text-sm group-hover:text-white transition-colors duration-200">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800/50"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with the Future
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, quantum computing, and space technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2025;