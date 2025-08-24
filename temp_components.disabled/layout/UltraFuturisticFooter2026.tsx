import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Mail, Phone, MapPin, 
  Linkedin, Github, Twitter, Facebook, Instagram, Youtube,
  Shield, Zap, Brain, Atom, Building, Cpu, ChevronRight, ArrowRight
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
    name: 'AI & Autonomous Systems',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    description: 'Revolutionary AI systems that operate independently',
    services: [
      { name: 'AI Legal Research Assistant', href: '/ai-autonomous-legal-research-assistant' },
      { name: 'AI Financial Risk Manager', href: '/ai-autonomous-financial-risk-manager' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-autonomous-medical-diagnostics' },
      { name: 'AI Supply Chain Optimizer', href: '/ai-autonomous-supply-chain-optimizer' },
      { name: 'AI Cybersecurity Sentinel', href: '/ai-autonomous-cybersecurity-sentinel' },
      { name: 'AI Customer Success Orchestrator', href: '/ai-autonomous-customer-success-orchestrator' },
      { name: 'AI HR Intelligence Suite', href: '/ai-autonomous-hr-intelligence-suite' },
      { name: 'AI Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator' },
      { name: 'AI Sales Intelligence', href: '/ai-autonomous-sales-intelligence' },
      { name: 'AI Product Intelligence', href: '/ai-autonomous-product-intelligence' }
    ]
  },
  {
    name: 'Quantum Technology',
    icon: Atom,
    color: 'from-blue-500 to-indigo-600',
    description: 'Next-generation quantum computing solutions',
    services: [
      { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
      { name: 'Neuromorphic Computing Infrastructure', href: '/neuromorphic-computing-infrastructure' },
      { name: 'Holographic Data Center Platform', href: '/holographic-data-center-platform' },
      { name: 'Bio-Computing Infrastructure', href: '/bio-computing-infrastructure' },
      { name: 'Quantum Internet Backbone', href: '/quantum-internet-backbone' },
      { name: 'Quantum Financial Intelligence Platform', href: '/quantum-financial-intelligence-platform' },
      { name: 'Quantum Supply Chain Optimization', href: '/quantum-supply-chain-optimization' },
      { name: 'Quantum Cybersecurity Intelligence', href: '/quantum-cybersecurity-intelligence' },
      { name: 'Quantum Data Analytics Platform', href: '/quantum-data-analytics-platform' },
      { name: 'Quantum IoT Intelligence Platform', href: '/quantum-iot-intelligence-platform' },
      { name: 'Quantum AI Hybrid Intelligence', href: '/quantum-ai-hybrid-intelligence' },
      { name: 'Quantum Medical Imaging Platform', href: '/quantum-medical-imaging-platform' },
      { name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform' },
      { name: 'Quantum Genomics Analysis Platform', href: '/quantum-genomics-analysis-platform' },
      { name: 'Quantum Biotechnology Platform', href: '/quantum-biotechnology-platform' },
      { name: 'Quantum Medical Device Intelligence', href: '/quantum-medical-device-intelligence' }
    ]
  },
  {
    name: 'IT Infrastructure',
    icon: Cpu,
    color: 'from-green-500 to-teal-600',
    description: 'Cutting-edge infrastructure solutions',
    services: [
      { name: 'Cloud Migration Services', href: '/cloud-migration' },
      { name: 'DevOps Automation', href: '/devops-automation' },
      { name: 'Edge Computing Solutions', href: '/edge-computing' },
      { name: 'Data Center Optimization', href: '/data-center-optimization' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'AI Autonomous DevOps Platform', href: '/ai-autonomous-devops-platform' },
      { name: 'Zero Trust Security Orchestrator', href: '/zero-trust-security-orchestrator' },
      { name: 'Quantum Edge Computing Infrastructure', href: '/quantum-edge-computing-infrastructure' },
      { name: 'AI Autonomous Data Center Manager', href: '/ai-autonomous-data-center-manager' },
      { name: 'Quantum Network Security Platform', href: '/quantum-network-security-platform' },
      { name: 'AI Autonomous Cloud Migration', href: '/ai-autonomous-cloud-migration' },
      { name: 'Quantum Storage Optimization', href: '/quantum-storage-optimization' },
      { name: 'AI Autonomous Network Orchestrator', href: '/ai-autonomous-network-orchestrator' },
      { name: 'Quantum Compliance Automation', href: '/quantum-compliance-automation' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    icon: Building,
    color: 'from-orange-500 to-red-600',
    description: 'Innovative software-as-a-service solutions',
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-autonomous-content-factory-pro' },
      { name: 'Quantum CRM Intelligence Suite', href: '/quantum-crm-intelligence-suite' },
      { name: 'AI HR Platform', href: '/ai-autonomous-hr-platform' },
      { name: 'Quantum Financial Intelligence Platform', href: '/quantum-financial-intelligence-platform' },
      { name: 'AI Education Platform', href: '/ai-autonomous-education-platform' }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    description: 'Advanced security and protection solutions',
    services: [
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Threat Intelligence Platform', href: '/threat-intelligence-platform' },
      { name: 'Compliance Automation', href: '/compliance-automation' },
      { name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation' },
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing' }
    ]
  },
  {
    name: 'Emerging Technology',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    description: 'Cutting-edge emerging technology solutions',
    services: [
      { name: 'Blockchain Enterprise Intelligence', href: '/blockchain-enterprise-intelligence-platform' },
      { name: 'Metaverse Digital Reality Orchestrator', href: '/metaverse-digital-reality-orchestrator' },
      { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-platform' },
      { name: 'Neuromorphic Computing Infrastructure', href: '/neuromorphic-computing-infrastructure' },
      { name: 'Holographic Computing Platform', href: '/holographic-computing-platform' },
      { name: 'Bio-Computing Infrastructure', href: '/bio-computing-infrastructure' },
      { name: 'Autonomous Robotics Orchestrator', href: '/autonomous-robotics-orchestrator' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    icon: Shield,
    color: 'from-emerald-500 to-green-600',
    description: 'Advanced healthcare and biotechnology solutions',
    services: [
      { name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics' },
      { name: 'AI Autonomous Patient Care Orchestrator', href: '/ai-autonomous-patient-care-orchestrator' },
      { name: 'AI Autonomous Clinical Trials Manager', href: '/ai-autonomous-clinical-trials-manager' },
      { name: 'AI Autonomous Healthcare Compliance', href: '/ai-autonomous-healthcare-compliance' },
      { name: 'AI Autonomous Telehealth Platform', href: '/ai-autonomous-telehealth-platform' }
    ]
  },
  {
    name: 'Industry Solutions',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    description: 'Industry-specific technology solutions',
    services: [
      { name: 'Healthcare AI Solutions', href: '/healthcare-ai-solutions' },
      { name: 'Financial Technology Solutions', href: '/financial-solutions' },
      { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology Solutions', href: '/retail-technology-solutions' },
      { name: 'Energy & Utilities Solutions', href: '/energy-utilities-solutions' }
    ]
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Mission', href: '/mission' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Services Showcase', href: '/2026-comprehensive-services-showcase' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'White Papers', href: '/white-papers' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
];

const UltraFuturisticFooter2026: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top Section - Services Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="space-y-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* View All Button */}
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <Link
                      href={`/services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                    >
                      <span>View All {category.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Section - Quick Links & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Group</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading the future of technology with innovative AI autonomous systems, 
                quantum computing infrastructure, and revolutionary micro SAAS solutions 
                that transform businesses and industries.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.mobile}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* More Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">More</h4>
              <div className="space-y-2">
                {quickLinks.slice(6).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Social & Newsletter */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Follow us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 ${social.color} transition-all duration-300 hover:border-purple-500/50`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Stay updated:</span>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-r-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-purple-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="hover:text-purple-400 transition-colors duration-300">
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

export default UltraFuturisticFooter2026;