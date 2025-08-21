import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, 
  Youtube, Github, ArrowRight, Star,
  Shield, Rocket, Brain, Atom, DollarSign,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe as GlobeIcon, Cpu, Database, Lock
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides' },
  { name: 'Blog', href: '/blog', description: 'Industry insights' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-docs', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
];

const stats = [
  { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-6 h-6" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-6 h-6" /> },
  { label: 'Years Experience', value: '15+', icon: <Clock className="w-6 h-6" /> },
  { label: 'Awards Won', value: '25+', icon: <Award className="w-6 h-6" /> }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-16 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Delivering cutting-edge technology solutions with proven results and exceptional customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-cyan-400">Revolutionary Technology</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md">
                Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. 
                We transform businesses through innovative solutions that drive growth and competitive advantage.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.website}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={category.title}>
                <div className="flex items-center space-x-2 mb-6">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.services.slice(0, 6).map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                  {category.services.length > 6 && (
                    <li>
                      <Link
                        href={`/comprehensive-services-showcase-2025#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium inline-flex items-center group"
                      >
                        View All {category.title} Services
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}

            {/* Company & Support */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Company Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>Company</span>
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                    <span>Support</span>
                  </h3>
                  <ul className="space-y-3">
                    {supportLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl">
                <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on AI, quantum computing, and emerging technologies.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 py-8 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200 ml-2">
                Privacy Policy
              </Link> | 
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200 ml-2">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </Link>
      </div>
    </footer>
  );
}
