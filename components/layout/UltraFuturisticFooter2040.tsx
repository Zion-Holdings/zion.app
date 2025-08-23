import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, 
  Brain, Atom, Shield,
  Star, 
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, 
  ArrowUp, Zap, Heart, ArrowRight
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-platform', featured: true },
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', featured: true },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', featured: true },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },
      { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform', featured: true },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', featured: true }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Business Intelligence Platform', href: '/ai-business-intelligence-platform', featured: true },
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', featured: true },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'AI Marketing Automation Suite', href: '/ai-marketing-automation-suite', featured: true },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', featured: true },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },
      { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform', featured: true },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', featured: true },
      { name: 'AI Healthcare Analytics Platform', href: '/ai-healthcare-analytics-platform', featured: true },
      { name: 'AI Education Platform', href: '/ai-education-platform', featured: true },
      { name: 'AI Real Estate Platform', href: '/ai-real-estate-platform', featured: true },
      { name: 'AI Manufacturing Platform', href: '/ai-manufacturing-platform', featured: true },
      { name: 'AI Logistics Platform', href: '/ai-logistics-platform', featured: true }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', featured: true },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', featured: true },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', featured: true },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', featured: true },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform', featured: true },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', featured: true },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', featured: true },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', featured: true },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', featured: true },
      { name: 'Synthetic Biology Platform', href: '/synthetic-biology-platform', featured: true },
      { name: 'Digital Twin Platform', href: '/digital-twin-platform', featured: true }
    ]
  },
  {
    title: 'Enterprise Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', featured: true },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration', featured: true },
      { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity-platform', featured: true },
      { name: 'Blockchain Identity Management', href: '/blockchain-identity-management', featured: true },
      { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', featured: true },
      { name: 'AI Manufacturing Platform', href: '/ai-manufacturing-platform', featured: true },
      { name: 'AI Logistics Platform', href: '/ai-logistics-platform', featured: true },
      { name: 'AI Real Estate Platform', href: '/ai-real-estate-platform', featured: true },
      { name: 'AI Healthcare Analytics Platform', href: '/ai-healthcare-analytics-platform', featured: true },
      { name: 'AI Education Platform', href: '/ai-education-platform', featured: true },
      { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform', featured: true },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', featured: true }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Zap className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', featured: true },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'AI Marketing Automation Suite', href: '/ai-marketing-automation-suite', featured: true },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },
      { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform', featured: true },
      { name: 'AI Education Platform', href: '/ai-education-platform', featured: true },
      { name: 'AI Real Estate Platform', href: '/ai-real-estate-platform', featured: true },
      { name: 'AI Manufacturing Platform', href: '/ai-manufacturing-platform', featured: true },
      { name: 'AI Logistics Platform', href: '/ai-logistics-platform', featured: true },
      { name: 'AI Healthcare Analytics Platform', href: '/ai-healthcare-analytics-platform', featured: true },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', featured: true },
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', featured: true }
    ]
  }
];

const quickLinks = [
  { name: 'All Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Market Pricing', href: '/market-pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Support Center', href: '/support' },
  { name: 'Training', href: '/training' },
  { name: 'Partners', href: '/partners' },
  { name: 'Careers', href: '/careers' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
];

const UltraFuturisticFooter2040: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation Leader 2025</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of technology with innovative solutions that drive business transformation and enable the next generation of digital innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                {section.icon}
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <p className="text-sm text-gray-400 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.slice(0, 6).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                      {link.featured && (
                        <Star className="w-3 h-3 text-yellow-400" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-cyan-500/20">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:from-cyan-500/40 hover:to-purple-500/40 hover:border-cyan-400/50 transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cyan-500/20">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Zion Tech Group. All rights reserved. | 
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm text-gray-400">by Zion Tech Group</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200 transform hover:scale-110 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2040;