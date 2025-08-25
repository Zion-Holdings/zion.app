import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, Brain, Atom, Shield, Rocket, Target, Star, Twitter, Linkedin, Youtube, Github, ArrowUp, ArrowRight, ExternalLink, Sparkles, Infinity, Zap, Cpu, Database, Cloud, Lock, Network, Server, CpuIcon, ZapIcon, Truck, BookOpen, FileText, Handshake, Newspaper, Grid, BarChart3, Palette, PaletteIcon, GraduationCap, HeartIcon, DollarSign, TrendingUp, Monitor, Building, Users, Briefcase, Code, MessageCircle, Calendar, Clock, ShieldCheck, Globe2, Satellite, Telescope, Microscope, FlaskConical, TargetIcon, Wifi, Bluetooth, Radio, SatelliteDish, Orbit
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  featured?: boolean;
  price?: string;
  rating?: number;
}

const footerSections = [
  {
    title: 'Featured Revolutionary Services 2041',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'Quantum AI Consciousness Platform', href: '/quantum-ai-consciousness-platform', featured: true, price: '$2,999/month', rating: 4.9 },
      { name: 'Space Resource Intelligence Platform', href: '/space-resource-intelligence-platform', featured: true, price: '$1,999/month', rating: 4.8 },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', featured: true, price: '$1,499/month', rating: 4.9 },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', featured: true, price: '$899/month', rating: 4.8 },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', featured: true, price: '$3,999/month', rating: 4.9 },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041', featured: true, price: '$2,499/month', rating: 4.9 },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041', price: '$1,799/month', rating: 4.8 },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041', price: '$599/month', rating: 4.9 },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041', price: '$799/month', rating: 4.8 },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041', price: '$1,299/month', rating: 4.9 }
    ] as FooterLink[]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'Quantum AI Consciousness Platform', href: '/quantum-ai-consciousness-platform', price: '$2,999/month', rating: 4.9 },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', price: '$399/month', rating: 4.8 },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform', price: '$299/month', rating: 4.7 },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine', price: '$199/month', rating: 4.8 },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework', price: '$599/month', rating: 4.9 },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', price: '$799/month', rating: 4.8 },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', price: '$149/month', rating: 4.7 },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', price: '$1,499/month', rating: 4.9 }
    ] as FooterLink[]
  },
  {
    title: 'Quantum & Space Technology',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', price: '$1,999/month', rating: 4.9 },
      { name: 'Space Resource Intelligence Platform', href: '/space-resource-intelligence-platform', price: '$1,999/month', rating: 4.8 },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', price: '$899/month', rating: 4.8 },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', price: '$3,999/month', rating: 4.9 },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041', price: '$1,799/month', rating: 4.8 },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041', price: '$1,299/month', rating: 4.9 },
      { name: 'Space Mining Operations', href: '/space-mining-operations', price: '$2,499/month', rating: 4.7 },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', price: '$1,799/month', rating: 4.8 }
    ] as FooterLink[]
  },
  {
    title: 'Business Solutions',
    description: 'Enterprise-grade business solutions',
    icon: <Building className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041', price: '$599/month', rating: 4.9 },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041', price: '$799/month', rating: 4.8 },
      { name: 'Enterprise Process Automation', href: '/enterprise-process-automation', price: '$899/month', rating: 4.7 },
      { name: 'Digital Transformation Consulting', href: '/digital-transformation-consulting', price: '$1,299/month', rating: 4.8 },
      { name: 'Cloud Infrastructure Solutions', href: '/cloud-infrastructure-solutions', price: '$699/month', rating: 4.8 },
      { name: 'Cybersecurity Services', href: '/cybersecurity-services', price: '$799/month', rating: 4.9 },
      { name: 'Data Analytics Platform', href: '/data-analytics-platform', price: '$499/month', rating: 4.7 },
      { name: 'API Management Suite', href: '/api-management-suite', price: '$399/month', rating: 4.8 }
    ] as FooterLink[]
  },
  {
    title: 'Research & Development',
    description: 'Cutting-edge research and development',
    icon: <FlaskConical className="w-5 h-5 text-orange-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041', price: '$2,499/month', rating: 4.9 },
      { name: 'Space Technology Research', href: '/space-technology-research', price: '$2,199/month', rating: 4.7 },
      { name: 'Biotechnology Innovation', href: '/biotechnology-innovation', price: '$1,599/month', rating: 4.8 },
      { name: 'Quantum Computing Research', href: '/quantum-computing-research', price: '$1,899/month', rating: 4.8 },
      { name: 'AI Ethics Research', href: '/ai-ethics-research', price: '$999/month', rating: 4.9 },
      { name: 'Neural Network Research', href: '/neural-network-research', price: '$1,299/month', rating: 4.7 },
      { name: 'Space Exploration Research', href: '/space-exploration-research', price: '$2,799/month', rating: 4.8 },
      { name: 'Consciousness Studies', href: '/consciousness-studies', price: '$1,999/month', rating: 4.9 }
    ] as FooterLink[]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Support', href: '/support' }
    ] as FooterLink[]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
  rating: '4.9/5 (500+ Reviews)',
  founded: '2020',
  employees: '50+',
  countries: '25+',
  customers: '1000+'
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-600' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' }
];

const quickActions = [
  { name: 'Get Quote', href: '/contact', icon: <MessageCircle className="w-4 h-4" />, color: 'from-cyan-500 to-blue-600' },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Live Chat', href: '/support', icon: <MessageCircle className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Technical Support', href: '/support', icon: <Monitor className="w-4 h-4" />, color: 'from-orange-500 to-red-600' }
];

export default function UltraAdvancedFuturisticFooter2041() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/90 border-t border-cyan-500/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      {/* Quantum Field Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    <p className="text-sm text-gray-400">{section.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {section.links.slice(0, 6).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        {link.featured && <Star className="w-3 h-3 text-yellow-400 fill-current" />}
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {link.name}
                        </span>
                      </div>
                      {link.price && (
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-green-400">{link.price}</span>
                          {link.rating && (
                            <div className="flex items-center space-x-1">
                              <Star className="w-2 h-2 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-400">{link.rating}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </Link>
                  ))}
                  
                  {section.links.length > 6 && (
                    <Link
                      href={section.links[0]?.href.replace(/\/[^/]+$/, '') || '#'}
                      className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      <span>View All {section.title.split(' ').slice(0, -1).join(' ')}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Section - Contact & Company Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Zion Tech Group</h2>
                  <p className="text-gray-400">Pioneering the Future of Technology</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-5 h-5 text-green-400" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>
            </motion.div>

            {/* Company Stats & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Company Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">{contactInfo.rating.split(' ')[0]}</div>
                    <div className="text-sm text-gray-400">{contactInfo.rating.split(' ')[1]}</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{contactInfo.customers}</div>
                    <div className="text-sm text-gray-400">Happy Customers</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{contactInfo.employees}</div>
                    <div className="text-sm text-gray-400">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">{contactInfo.countries}</div>
                    <div className="text-sm text-gray-400">Countries Served</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      href={action.href}
                      className={`flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r ${action.color} text-white hover:scale-105 transition-all duration-200 transform`}
                    >
                      {action.icon}
                      <span className="text-sm font-medium">{action.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Social & Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
                </p>
                <div className="flex items-center justify-center lg:justify-end space-x-4 mt-2 text-xs text-gray-500">
                  <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
                  <Link href="/cookies" className="hover:text-gray-400 transition-colors">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200 transform hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </motion.button>
      </div>
    </footer>
  );
}