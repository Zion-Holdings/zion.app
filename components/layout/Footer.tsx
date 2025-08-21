import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, ArrowRight, Sparkles, 
  Rocket, Brain, Shield, Factory, Globe2, Zap, 
  Building2, FlaskConical, Leaf, Car, Truck, 
  Microscope, GraduationCap, ShieldCheck, Cloud, 
  Cpu, Database, Lock, Smartphone, Palette, Search, 
  MessageSquare, FileText, Calendar, CreditCard, BarChart3, 
  Code, BookOpen, Activity, Settings, Star, Users, 
  ChevronRight, Play, Check, Twitter, Linkedin, Facebook, 
  Instagram, Youtube, Github
} from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Revolutionary Services',
      links: [
        { name: 'Quantum AI Platform', href: '/quantum-ai-cognitive' },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Metaverse Platform', href: '/metaverse-platform' },
        { name: 'Biomedical AI', href: '/biomedical-ai' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Quantum Computing', href: '/solutions/quantum' },
        { name: 'AI & Machine Learning', href: '/solutions/ai' },
        { name: 'Autonomous Systems', href: '/solutions/autonomous' },
        { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
        { name: 'Space Technology', href: '/solutions/space' },
        { name: 'Metaverse & VR/AR', href: '/solutions/metaverse' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Support Center', href: '/support' },
        { name: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Sales', href: '/contact' },
        { name: 'Partnerships', href: '/partnerships' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Investor Relations', href: '/investors' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl opacity-50 blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Transforming business technology with cutting-edge micro SaaS solutions. From Quantum AI to Autonomous Factories, 
                we deliver real results with proven ROI.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>https://ziontechgroup.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    whileHover={{ y: -2, scale: 1.05 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-700/50 pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Revolutionary Technology
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on quantum computing, AI breakthroughs, and autonomous systems
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <Button variant="primary" size="sm" className="px-6">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="hover:text-cyan-400 transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;