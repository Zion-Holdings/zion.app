import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Globe, ArrowUp, 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Shield, Zap, Brain, Rocket, Users, Star
} from 'lucide-react';

const UltraFuturisticFooter2038: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/comprehensive-2038-services-showcase' },
        { name: 'IT Solutions', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Quantum Computing', href: '/quantum-ai-cognitive' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Cybersecurity', href: '/security' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase' },
        { name: 'Healthcare AI', href: '/healthcare-ai-solutions' },
        { name: 'Financial Technology', href: '/financial-solutions' },
        { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
        { name: 'Retail Technology', href: '/retail-technology-solutions' },
        { name: 'Government Tech', href: '/government-technology-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Investors', href: '/investors' },
        { name: 'News & Events', href: '/events' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Training', href: '/training' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-black border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading the future of technology with revolutionary AI, quantum computing, and space technology solutions. 
                  Transforming businesses and driving innovation across industries.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-white transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  {section.title === 'Services' && <Zap className="w-4 h-4 text-cyan-400" />}
                  {section.title === 'Solutions' && <Shield className="w-4 h-4 text-purple-400" />}
                  {section.title === 'Company' && <Users className="w-4 h-4 text-pink-400" />}
                  {section.title === 'Resources' && <Star className="w-4 h-4 text-yellow-400" />}
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform transition-transform"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright and Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </motion.button>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2038;