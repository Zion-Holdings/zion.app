import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
  Star,
  Brain,
  Atom,
  Rocket,
  Github,
  Users,
  Building
} from 'lucide-react';
import Link from 'next/link';

const UltraFuturisticFooter2037: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'AI & Consciousness',
      description: 'Revolutionary AI platforms and consciousness solutions',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      links: [
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', featured: true, price: '$8,999/month' },
        { name: 'AI Emotional Intelligence Orchestrator', href: '/ai-emotional-intelligence-orchestrator', featured: true, price: '$6,999/month' },
        { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', featured: true, price: '$1,299/month' },
        { name: 'AI Autonomous DevOps Orchestrator', href: '/ai-autonomous-devops-orchestrator', featured: true, price: '$14,999/month' },
        { name: 'AI Autonomous Business Operations', href: '/autonomous-business-operations-engine', price: '$9,999/month' },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', price: '$3,999/month' },
        { name: 'AI Predictive Maintenance Orchestrator', href: '/ai-predictive-maintenance-orchestrator', price: '$5,999/month' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine', price: '$2,999/month' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', price: '$7,999/month' },
        { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework', price: '$4,999/month' }
      ]
    },
    {
      title: 'Quantum Technology',
      description: 'Breakthrough quantum computing and quantum solutions',
      icon: <Atom className="w-5 h-5 text-blue-400" />,
      links: [
        { name: 'Quantum Neural Fusion Platform', href: '/quantum-neural-fusion-platform', featured: true, price: '$12,999/month' },
        { name: 'Quantum Cybersecurity Command Center', href: '/quantum-cybersecurity-command-center', featured: true, price: '$22,999/month' },
        { name: 'Quantum Financial Time Travel Platform', href: '/quantum-financial-time-travel', featured: true, price: '$19,999/month' },
        { name: 'Quantum Materials Discovery Engine', href: '/quantum-materials-discovery-engine', featured: true, price: '$15,999/month' },
        { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', price: '$3,999/month' },
        { name: 'Quantum IoT Security Fabric', href: '/quantum-iot-security-fabric', price: '$4,999/month' },
        { name: 'Quantum Edge Computing Orchestrator', href: '/quantum-edge-computing-orchestrator', price: '$11,999/month' },
        { name: 'Quantum Data Governance Platform', href: '/quantum-data-governance-platform', price: '$16,999/month' },
        { name: 'Quantum Network Operations Center', href: '/quantum-network-operations-center', price: '$19,999/month' },
        { name: 'Quantum Disaster Recovery Platform', href: '/quantum-disaster-recovery-platform', price: '$17,999/month' }
      ]
    },
    {
      title: 'Space & Metaverse',
      description: 'Advanced space technology and metaverse solutions',
      icon: <Rocket className="w-5 h-5 text-purple-400" />,
      links: [
        { name: 'Autonomous Space Colony Manager', href: '/autonomous-space-colony-manager', featured: true, price: '$25,999/month' },
        { name: 'Metaverse Consciousness Hub', href: '/metaverse-consciousness-hub', featured: true, price: '$8,499/month' },
        { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform', price: '$18,999/month' },
        { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', price: '$12,999/month' },
        { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', price: '$9,999/month' },
        { name: 'Quantum Space Services', href: '/quantum-space-services', price: '$14,999/month' },
        { name: 'Space Tech Solutions', href: '/space-technology', price: '$7,999/month' },
        { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform', price: '$6,999/month' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      description: 'Advanced enterprise infrastructure and IT solutions',
      icon: <Building className="w-5 h-5 text-green-400" />,
      links: [
        { name: 'Autonomous Enterprise Architecture Evolution', href: '/autonomous-enterprise-architecture-evolution', featured: true, price: '$18,999/month' },
        { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture', price: '$13,999/month' },
        { name: 'Autonomous Data Governance Platform', href: '/autonomous-data-governance', price: '$11,999/month' },
        { name: 'AI-Powered IT Service Management', href: '/ai-powered-it-service-management', price: '$8,999/month' },
        { name: 'Autonomous Network Operations Center', href: '/autonomous-network-operations', price: '$12,999/month' },
        { name: 'AI-Powered Disaster Recovery Platform', href: '/ai-powered-disaster-recovery', price: '$9,999/month' },
        { name: 'Autonomous Compliance Manager', href: '/autonomous-compliance-manager', price: '$7,999/month' },
        { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform', price: '$6,999/month' },
        { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform', price: '$5,999/month' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', price: '$4,999/month' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Specialized business solutions and automation platforms',
      icon: <Rocket className="w-5 h-5 text-yellow-400" />,
      links: [
        { name: 'Autonomous Supply Chain Evolution Platform', href: '/autonomous-supply-chain-evolution', featured: true, price: '$9,999/month' },
        { name: 'AI Autonomous Compliance Manager', href: '/ai-autonomous-compliance-manager', featured: true, price: '$13,999/month' },
        { name: 'Quantum IoT Security Fabric', href: '/quantum-iot-security-fabric', featured: true, price: '$4,999/month' },
        { name: 'AI Autonomous IT Service Management', href: '/autonomous-it-service-management', featured: true, price: '$15,999/month' },
        { name: 'Autonomous Cloud Cost Optimizer', href: '/autonomous-cloud-cost-optimizer', price: '$12,999/month' },
        { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success', price: '$3,999/month' },
        { name: 'AI Autonomous Sales Intelligence', href: '/ai-sales-intelligence-automation', price: '$4,999/month' },
        { name: 'AI Autonomous HR Analytics Platform', href: '/intelligent-hr-analytics-platform', price: '$2,999/month' },
        { name: 'Intelligent Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', price: '$3,999/month' },
        { name: 'Intelligent Content Automation Platform', href: '/intelligent-content-automation-platform', price: '$1,999/month' }
      ]
    },
    {
      title: 'Professional Services',
      description: 'Expert consulting and implementation services',
      icon: <Users className="w-5 h-5 text-pink-400" />,
      links: [
        { name: 'AI Strategy Consulting', href: '/ai-strategy-consulting', price: '$500/hour' },
        { name: 'Quantum Computing Implementation', href: '/quantum-computing-implementation', price: '$1,000/hour' },
        { name: 'Digital Transformation Services', href: '/digital-transformation-services', price: '$750/hour' },
        { name: 'Cybersecurity Assessment', href: '/cybersecurity-assessment', price: '$400/hour' },
        { name: 'Cloud Migration Services', href: '/cloud-migration-services', price: '$600/hour' },
        { name: 'Data Governance Implementation', href: '/data-governance-implementation', price: '$450/hour' },
        { name: 'DevOps Transformation', href: '/devops-transformation', price: '$550/hour' },
        { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', price: '$650/hour' },
        { name: 'Quantum Security Implementation', href: '/quantum-security-implementation', price: '$800/hour' },
        { name: 'Space Technology Consulting', href: '/space-technology-consulting', price: '$900/hour' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
    { name: 'Resources', href: '/resources' },
    { name: 'Training', href: '/training' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 mb-4">
                {section.icon}
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{section.description}</p>
              <div className="space-y-2">
                {section.links.slice(0, 6).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      {link.featured && <Star className="w-3 h-3 text-yellow-400" />}
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                        {link.name}
                      </span>
                    </div>
                    {link.price && (
                      <span className="text-xs text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {link.price}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{contactInfo.website}</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest updates on AI, quantum computing, and space technology.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  Z
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400 text-sm">Innovation 2037</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default UltraFuturisticFooter2037;