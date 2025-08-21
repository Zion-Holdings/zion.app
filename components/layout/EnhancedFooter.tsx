import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Mail, Phone, MapPin, 
  Twitter, Linkedin, Github, Globe,
  ArrowRight, Shield, Zap, Rocket,
  Brain, Atom, Users, Settings, DollarSign,
  Microscope, Network, Palette, BarChart3, ShieldCheck,
  Instagram, Youtube
} from 'lucide-react';
import Link from 'next/link';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    name: 'AI & Consciousness',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' }
    ]
  },
  {
    name: 'Financial Technology',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    services: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    icon: Microscope,
    color: 'from-red-500 to-pink-600',
    services: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'Biotech AI', href: '/biotech-ai' }
    ]
  },
  {
    name: 'Education & Learning',
    icon: Users,
    color: 'from-yellow-500 to-orange-600',
    services: [
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro' },
      { name: 'AI Education Platform', href: '/ai-education-platform' }
    ]
  },
  {
    name: 'Energy & Sustainability',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    services: [
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }
    ]
  },
  {
    name: 'Robotics & Automation',
    icon: Rocket,
    color: 'from-pink-500 to-purple-600',
    services: [
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform' },
      { name: 'Industrial Automation AI', href: '/industrial-automation-ai' }
    ]
  },
  {
    name: 'Supply Chain & Logistics',
    icon: Network,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
      { name: 'AI Logistics Platform', href: '/ai-logistics-platform' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' }
    ]
  },
  {
    name: 'Enterprise IT',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' }
    ]
  },
  {
    name: 'Space & Metaverse',
    icon: Star,
    color: 'from-purple-500 to-pink-600',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform' },
      { name: 'Metaverse Development Studio Pro', href: '/metaverse-development-studio-pro' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform' },
      { name: 'Space Colonization Services', href: '/space-colonization-services' }
    ]
  },
  {
    name: 'Content & Marketing',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    services: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'Marketing AI Platform', href: '/marketing-ai-platform' }
    ]
  },
  {
    name: 'Sales & CRM',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-600',
    services: [
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },
      { name: 'Customer Intelligence Platform', href: '/customer-intelligence-platform' }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: ShieldCheck,
    color: 'from-red-500 to-orange-600',
    services: [
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'AI Threat Detection', href: '/ai-threat-detection' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Services Advertising', href: '/services-advertising' },
  { name: 'Market Pricing', href: '/market-pricing' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-documentation-generator' },
  { name: 'Status Page', href: '/status-pages-slo' },
  { name: 'VAPT Services', href: '/vulnerability-assessment-penetration-testing' },
  { name: 'Mobile Device Management (MDM)', href: '/mobile-device-management' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup', icon: Youtube }
];

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future with revolutionary AI consciousness, quantum computing, emerging technologies, and innovative micro SAAS solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-sm">{contactInfo.mobile}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.slice(0, 4).map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h5 className="text-sm font-medium text-white">{category.name}</h5>
                    </div>
                    <ul className="space-y-2">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link 
                            href={service.href}
                            className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              
              {/* Company Links */}
              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-300 mb-3">Company</h5>
                <ul className="space-y-2">
                  {companyLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-3">Support</h5>
                <ul className="space-y-2">
                  {supportLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Advanced Technology Services</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.slice(4).map((category, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h5 className="text-sm font-medium text-white">{category.name}</h5>
                </div>
                <ul className="space-y-2">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        href={service.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-sm text-gray-400">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="ml-2 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}