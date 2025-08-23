import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, MessageCircle, Clock,
  Shield, Award, Users, Rocket, Brain, Atom
} from 'lucide-react';

const UltraFuturisticFooter2036: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services' },
        { name: 'Quantum Computing', href: '/quantum-services' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'IT Solutions', href: '/it-services' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'Fintech Solutions', href: '/fintech-solutions' },
        { name: 'Healthtech', href: '/healthtech-solutions' },
        { name: 'View All Services', href: '/services' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { name: 'Startup Solutions', href: '/startup-solutions' },
        { name: 'Government Solutions', href: '/government-solutions' },
        { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
        { name: 'Financial Solutions', href: '/financial-solutions' },
        { name: 'Retail Solutions', href: '/retail-technology-solutions' },
        { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
        { name: 'Custom Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Documentation', href: '/api-documentation' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research', href: '/research' },
        { name: 'Knowledge Base', href: '/knowledge-base' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Investors', href: '/investors' },
        { name: 'News', href: '/news' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-300' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Pioneering the future of technology with innovative AI, quantum computing, and space technology solutions that drive business transformation and enable limitless possibilities.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <address className="not-italic">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </address>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <a href="https://ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                      ziontechgroup.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
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
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  {section.title === 'Services' && <Rocket className="w-4 h-4 text-cyan-400" />}
                  {section.title === 'Solutions' && <Brain className="w-4 h-4 text-blue-400" />}
                  {section.title === 'Resources' && <Atom className="w-4 h-4 text-purple-400" />}
                  {section.title === 'Company' && <Users className="w-4 h-4 text-green-400" />}
                  {section.title}
                </h4>
                
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Innovation
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-cyan-300 transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="hover:text-cyan-300 transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2036;