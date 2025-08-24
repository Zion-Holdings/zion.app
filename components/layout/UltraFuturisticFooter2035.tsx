import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare,
  ArrowUp, ExternalLink, Building, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2,
  Palette, Music, Film, BookOpenCheck, HelpCircle, FileText, Video, Headphones
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
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', featured: true },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ]
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Market Research', href: '/ai-market-research' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },
      { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },
      { name: 'AI Customer Service', href: '/ai-customer-service' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Industry-specific technology solutions',
    icon: <Building className="w-5 h-5 text-orange-400" />,
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' }
    ]
  },
  {
    title: 'Resources',
    description: 'Documentation, support, and learning',
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Market Pricing', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' }
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
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
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '200px 200px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. 
                  Transform your business with our revolutionary technology.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
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
                        href={link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
                            : 'text-gray-400 hover:text-white'
                        }`}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-800/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
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
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2035;