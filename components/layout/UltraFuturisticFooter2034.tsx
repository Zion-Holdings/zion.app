import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Github, 
  Star, Rocket, Brain, Atom,
  ArrowRight, Shield, Target
} from 'lucide-react';

const UltraFuturisticFooter2034: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '🚀 Future Technology',
      links: [
        { name: 'AI & Consciousness', href: '/ai-consciousness' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Metaverse', href: '/metaverse' },
        { name: 'Emerging Tech', href: '/emerging-tech' }
      ]
    },
    {
      title: '🎯 Business Solutions',
      links: [
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'Enterprise IT', href: '/enterprise-it' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Solutions', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    },
    {
      title: '🔬 Research & Development',
      links: [
        { name: 'AI Research', href: '/ai-research' },
        { name: 'Quantum Research', href: '/quantum-research' },
        { name: 'Biotech AI', href: '/biotech-ai' },
        { name: 'Space Research', href: '/space-research' },
        { name: 'Innovation Lab', href: '/innovation-lab' }
      ]
    },
    {
      title: '🌟 All Services',
      links: [
        { name: 'Comprehensive Showcase', href: '/comprehensive-services-showcase-2025' },
        { name: 'AI Innovations', href: '/comprehensive-services-showcase-2025?category=ai-innovations' },
        { name: 'IT Innovations', href: '/comprehensive-services-showcase-2025?category=it-innovations' },
        { name: 'Micro SAAS', href: '/comprehensive-services-showcase-2025?category=micro-saas' },
        { name: 'Pricing', href: '/pricing' }
      ]
    },
    {
      title: '📚 Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'News', href: '/news' },
        { name: 'Resources', href: '/resources' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe }
  ];

  return (
    <footer className="relative bg-black/95 border-t border-cyan-500/30 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-cyan-300">2034 Future Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of technology with revolutionary AI consciousness, quantum computing, 
              space technology, and innovative micro SAAS solutions that transform businesses and advance humanity.
            </p>

            {/* Contact information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title.includes('🚀') && <Rocket className="w-5 h-5 mr-2 text-cyan-400" />}
                {section.title.includes('🎯') && <Target className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title.includes('🔬') && <Brain className="w-5 h-5 mr-2 text-green-400" />}
                {section.title.includes('📚') && <Atom className="w-5 h-5 mr-2 text-pink-400" />}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {section.title.replace(/[🚀🎯🔬📚]/g, '').trim()}
                </span>
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Stay Ahead of the Future
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI consciousness breakthroughs, quantum computing developments, 
              space technology innovations, and emerging tech trends that will shape tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyan-500/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic bottom accent */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-cyan-500 via-purple-500 to-transparent opacity-30" />
    </footer>
  );
};

export default UltraFuturisticFooter2034;