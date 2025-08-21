import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, Github, Youtube,
  ArrowRight, Rocket, Brain, Cpu, Shield,
  Star, Users, TrendingUp, Zap, Target, Microscope, Server
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
    title: 'All Services',
    services: [
      { name: 'Comprehensive Services Showcase', href: '/comprehensive-services-showcase-2025' },
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing' }
    ]
  },
  {
    title: 'AI & Consciousness',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: Cpu,
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }
    ]
  },
  {
    title: 'Advanced Micro SAAS',
    icon: Target,
    services: [
      { name: 'CustomerSuccess AI Pro', href: '/customer-success-ai-pro' },
      { name: 'QuantumSupply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
      { name: 'BlockID Verify Pro', href: '/blockid-verify-pro' },
      { name: 'HR Analytics AI Suite', href: '/hr-analytics-ai-suite' },
      { name: 'QuantumRisk Financial Manager', href: '/quantum-risk-financial-manager' }
    ]
  },
  {
    title: 'Advanced AI Services',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform' },
      { name: 'Quantum AI Hybrid Computing', href: '/quantum-ai-hybrid-computing-platform' },
      { name: 'Multimodal AI Orchestrator Pro', href: '/multimodal-ai-orchestrator-pro' },
      { name: 'AI Autonomous Ecosystem Platform', href: '/ai-autonomous-ecosystem-platform' },
      { name: 'AI Ethics & Governance Platform', href: '/ai-ethics-governance-platform' }
    ]
  },
  {
    title: 'Advanced IT Services',
    icon: Server,
    services: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-platform' },
      { name: 'Zero Trust Security Pro', href: '/zero-trust-security-platform' },
      { name: 'Blockchain Enterprise Platform Pro', href: '/blockchain-enterprise-platform' },
      { name: 'AI DevOps Platform Pro', href: '/ai-devops-platform' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Microscope,
    services: [
      { name: 'Space Mining Platform Pro', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing Pro', href: '/quantum-bio-computing-platform' },
      { name: 'Brain-Computer Interface Pro', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Energy Platform Pro', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI Pro', href: '/autonomous-vehicle-ai-platform' }
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
                      <category.icon className="w-5 h-5 text-cyan-400" />
                      <h5 className="text-sm font-medium text-white">{category.title}</h5>
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
                  <category.icon className="w-5 h-5 text-cyan-400" />
                  <h5 className="text-sm font-medium text-white">{category.title}</h5>
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