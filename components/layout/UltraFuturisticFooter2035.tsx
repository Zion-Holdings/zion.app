import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare,
  ArrowUp, ExternalLink, Building, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2,
  Palette, Music, Film, BookOpenCheck, HelpCircle, FileText, Video, Headphones,
  Briefcase, FlaskConical, Microscope, Satellite, Car, Plane, Ship, Train, Factory, Hospital, School, Landmark,
  TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon, User, ShoppingCart, Bell
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
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-automation', featured: true },
      { name: 'AI Legal Document Intelligence', href: '/ai-legal-document-intelligence', featured: true },
      { name: 'Quantum Financial Risk Management', href: '/quantum-financial-risk-management', featured: true },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', featured: true },
      { name: 'Autonomous Supply Chain Orchestration', href: '/autonomous-supply-chain-orchestration', featured: true },
      { name: 'Quantum Cybersecurity Intelligence', href: '/quantum-cybersecurity-intelligence', featured: true },
      { name: 'AI Creative Content Studio', href: '/ai-creative-content-studio', featured: true },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure', featured: true },
      { name: 'AI Education Intelligence', href: '/ai-education-intelligence-platform', featured: true },
      { name: 'Autonomous Manufacturing Intelligence', href: '/autonomous-manufacturing-intelligence', featured: true },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' },
      { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'AI Evaluation Orchestrator', href: '/ai-evaluation-orchestrator', featured: true },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab/' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud/' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation/' },
      { name: 'API Performance Testing', href: '/api-performance-testing/' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation/' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', featured: true },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
      { name: 'AI Healthcare Diagnostics Platform', href: '/ai-healthcare-diagnostics-platform', featured: true },
      { name: 'AI Legal Document Intelligence', href: '/ai-legal-document-intelligence', featured: true },
      { name: 'AI Creative Content Studio', href: '/ai-creative-content-studio', featured: true },
      { name: 'AI Education Intelligence Platform', href: '/ai-education-intelligence-platform', featured: true }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum Financial Risk Management', href: '/quantum-financial-risk-management', featured: true },
      { name: 'Quantum Cybersecurity Intelligence', href: '/quantum-cybersecurity-intelligence', featured: true },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure', featured: true },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics Platform', href: '/quantum-robotics' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' },
      { name: 'Autonomous Manufacturing Intelligence', href: '/autonomous-manufacturing-intelligence', featured: true },
      { name: 'Autonomous Supply Chain Orchestration', href: '/autonomous-supply-chain-orchestration', featured: true },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Industry-specific technology solutions',
    icon: <Building className="w-5 h-5 text-orange-400" />,
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology Solutions', href: '/retail-technology-solutions' },
      { name: 'Education Technology Solutions', href: '/education-technology-solutions' },
      { name: 'Government Technology Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities Solutions', href: '/energy-utilities-solutions' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform' },
      { name: 'AI Healthcare Diagnostics Platform', href: '/ai-healthcare-diagnostics-platform', featured: true },
      { name: 'AI Education Intelligence Platform', href: '/ai-education-intelligence-platform', featured: true },
      { name: 'Autonomous Manufacturing Intelligence', href: '/autonomous-manufacturing-intelligence', featured: true }
    ]
  },
  {
    title: 'Resources & Support',
    description: 'Documentation, support, and learning resources',
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Market Pricing Guide', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation' },
      { name: 'API Performance Testing', href: '/api-performance-testing' },
      { name: 'Comprehensive Services Showcase', href: '/comprehensive-services-showcase-2025' },
      { name: 'Ultimate 2035 Futuristic Services', href: '/ultimate-2035-futuristic-services-showcase' },
      { name: 'Ultimate 2025 Micro SAAS Showcase', href: '/ultimate-2025-micro-saas-showcase' },
      { name: 'Revolutionary 2025 Services', href: '/revolutionary-2025-services-showcase' },
      { name: 'Revolutionary 2026 Services', href: '/revolutionary-2026-services' },
      { name: 'Revolutionary 2027 Services', href: '/revolutionary-2027-services-showcase' },
      { name: 'Ultimate 2026 Services Showcase', href: '/ultimate-2026-services-showcase' },
      { name: 'Enterprise Solutions Showcase', href: '/enterprise-solutions-showcase' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: '/social/linkedin', icon: <Linkedin className="w-5 h-5" />, color: 'hover:bg-blue-600/50' },
  { name: 'Twitter', href: '/social/twitter', icon: <Twitter className="w-5 h-5" />, color: 'hover:bg-blue-400/50' },
  { name: 'Facebook', href: '/social/facebook', icon: <Facebook className="w-5 h-5" />, color: 'hover:bg-blue-700/50' },
  { name: 'Instagram', href: '/social/instagram', icon: <Instagram className="w-5 h-5" />, color: 'hover:bg-pink-600/50' },
  { name: 'YouTube', href: '/social/youtube', icon: <Youtube className="w-5 h-5" />, color: 'hover:bg-red-600/50' },
  { name: 'GitHub', href: '/social/github', icon: <Github className="w-5 h-5" />, color: 'hover:bg-gray-600/50' }
];

const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '200px 200px'
        }} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-gray-300 leading-relaxed max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology.
                </motion.p>

                <motion.div 
                  className="space-y-3 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <a href="tel:+1 302 464 0950" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    +1 302 464 0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    kleber@ziontechgroup.com
                  </a>
                  <div className="flex items-start gap-2 text-pink-300">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span className="text-xs">364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors duration-200" href="/market-pricing/">
                    <BarChart3 className="w-4 h-4" />
                    Market Pricing
                  </a>
                  <span className="mx-2 text-gray-600">|</span>
                  <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors duration-200" href="/services-advertising/">
                    <Sparkles className="w-4 h-4" />
                    Services Advertising
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div 
                key={section.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h4 className="font-semibold text-white">{section.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        className={`text-sm transition-colors duration-200 ${
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-800/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link className="hover:text-white transition-colors duration-200" href="/privacy/">
                  Privacy Policy
                </Link>
                <Link className="hover:text-white transition-colors duration-200" href="/terms/">
                  Terms of Service
                </Link>
                <Link className="hover:text-white transition-colors duration-200" href="/cookies/">
                  Cookie Policy
                </Link>
                <Link className="hover:text-white transition-colors duration-200" href="/contact/">
                  Contact Us
                </Link>
              </div>
              <button 
                onClick={scrollToTop}
                className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-500 text-xs">
                Revolutionizing technology, one breakthrough at a time.
              </p>
              <div className="mt-2 flex items-center justify-center gap-4 text-xs text-gray-600">
                <span>Mobile: +1 302 464 0950</span>
                <span>•</span>
                <span>Email: kleber@ziontechgroup.com</span>
                <span>•</span>
                <span>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2035;