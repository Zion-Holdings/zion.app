import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Star, 
  Brain, 
  Atom, 
  Shield, 
  Target, 
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';
import Link from 'next/link';

const UltraFuturisticFooter2036: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Featured Services',
      description: 'Our most popular and innovative solutions',
      href: '/services',
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      links: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', featured: true },
        { name: 'Quantum Cybersecurity Sentinel', href: '/quantum-cybersecurity-sentinel', featured: true },
        { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', featured: true },
        { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence', featured: true },
        { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', featured: true },
        { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success', featured: true },
        { name: 'AI Autonomous DevOps Platform', href: '/ai-autonomous-devops-platform', featured: true },
        { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator' },
        { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
        { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture' }
      ]
    },
    {
      title: 'AI & Consciousness',
      description: 'Revolutionary AI platforms and solutions',
      href: '/ai-consciousness-services',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      links: [
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform' },
        { name: 'AI Emotional Intelligence Trainer', href: '/ai-emotional-intelligence-trainer' },
        { name: 'Autonomous Business Operations Engine', href: '/autonomous-business-operations-engine' },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
        { name: 'AI Predictive Maintenance Orchestrator', href: '/ai-predictive-maintenance-orchestrator' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
        { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
        { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation' },
        { name: 'AI Sales Intelligence Automation', href: '/ai-sales-intelligence-automation' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      description: 'Breakthrough quantum and space technologies',
      href: '/quantum-emerging-tech',
      icon: <Atom className="w-5 h-5 text-blue-400" />,
      links: [
        { name: 'Quantum Cybersecurity Sentinel', href: '/quantum-cybersecurity-sentinel' },
        { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
        { name: 'Quantum Financial Risk Manager', href: '/quantum-financial-risk-manager' },
        { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery' },
        { name: 'Quantum IoT Security Gateway', href: '/quantum-iot-security-gateway' },
        { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
        { name: 'Quantum-Secure Identity Platform', href: '/quantum-secure-identity-platform' },
        { name: 'Quantum-Enhanced Storage Platform', href: '/quantum-enhanced-storage-platform' },
        { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
        { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' }
      ]
    },
    {
      title: 'Enterprise IT Solutions',
      description: 'Advanced enterprise infrastructure solutions',
      href: '/enterprise-it-solutions',
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      links: [
        { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator' },
        { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture' },
        { name: 'Autonomous Data Governance Platform', href: '/autonomous-data-governance' },
        { name: 'AI-Powered IT Service Management', href: '/ai-powered-it-service-management' },
        { name: 'Autonomous Network Operations Center', href: '/autonomous-network-operations' },
        { name: 'AI-Powered Disaster Recovery Platform', href: '/ai-powered-disaster-recovery' },
        { name: 'Autonomous Compliance Manager', href: '/autonomous-compliance-manager' },
        { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
        { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Ready-to-use business applications',
      href: '/micro-saas-solutions',
      icon: <Target className="w-5 h-5 text-green-400" />,
      links: [
        { name: 'AI-Powered CRM Suite', href: '/ai-powered-crm-suite' },
        { name: 'Automated Marketing Platform', href: '/automated-marketing-platform' },
        { name: 'Customer Success Automation', href: '/customer-success-automation' },
        { name: 'Financial Planning Assistant', href: '/financial-planning-assistant' },
        { name: 'HR Analytics Platform', href: '/hr-analytics-platform' },
        { name: 'Project Management AI', href: '/project-management-ai' },
        { name: 'Sales Intelligence Platform', href: '/sales-intelligence-platform' },
        { name: 'Content Creation Suite', href: '/content-creation-suite' },
        { name: 'Data Analytics Dashboard', href: '/data-analytics-dashboard' },
        { name: 'Business Intelligence Tools', href: '/business-intelligence-tools' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'text-sky-400 hover:text-sky-300' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'text-blue-600 hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'text-pink-400 hover:text-pink-300' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'text-red-400 hover:text-red-300' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" />, color: 'text-gray-400 hover:text-gray-300' }
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <Mail className="w-5 h-5" />, text: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com' },
    { icon: <MapPin className="w-5 h-5" />, text: 'San Francisco, CA', href: '/locations' },
    { icon: <Globe className="w-5 h-5" />, text: 'www.ziontechgroup.com', href: 'https://ziontechgroup.com' }
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </div>
                    <div className="text-sm text-gray-400">Revolutionary Technology</div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Pioneering the future of technology with innovative AI, quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <Link
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-cyan-300 transition-colors group"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {contact.icon}
                      </span>
                      <span className="text-sm">{contact.text}</span>
                      {contact.href.startsWith('http') && (
                        <Link href={contact.href} target="_blank" rel="noopener noreferrer" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Globe className="w-3 h-3" />
                        </Link>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Service Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{section.description}</p>
                
                <div className="space-y-2">
                  {section.links.slice(0, 6).map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className={`block text-sm transition-colors duration-200 ${
                        link.featured 
                          ? 'text-cyan-300 hover:text-cyan-200 font-medium' 
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  {section.links.length > 6 && (
                    <Link
                      href={section.href}
                      className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                    >
                      View All {section.title} →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-6">
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

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2036;