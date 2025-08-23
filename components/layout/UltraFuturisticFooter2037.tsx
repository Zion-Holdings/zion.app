import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Shield, Rocket, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp
} from 'lucide-react';



const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'AI Consciousness Evolution 2037', href: '/ai-consciousness-evolution-2037', featured: true },
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', featured: true },
      { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform', featured: true },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', featured: true },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', featured: true },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', featured: true },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-coach', featured: true },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'AI Consciousness Evolution 2037', href: '/ai-consciousness-evolution-2037' },
      { name: 'AI Emotional Intelligence Coach', href: '/ai-emotional-intelligence-coach' },
      { name: 'AI Autonomous Business Operations', href: '/autonomous-business-operations-platform' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform' },
      { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery-platform' },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure Platform', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform' },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity Platform', href: '/ai-powered-cybersecurity' },
      { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' },
      { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation' },
      { name: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-500 to-cyan-500',
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
      { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' }
    ]
  },
  {
    title: 'Specialized Solutions',
    description: 'Industry-specific and specialized services',
    icon: <Target className="w-5 h-5 text-pink-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation' },
      { name: 'API Performance Testing', href: '/api-performance-testing' },
      { name: 'Sales Copilot', href: '/sales-copilot' },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager' },
      { name: 'SSO in a Box', href: '/sso-in-a-box' },
      { name: 'Status Pages & SLO Monitor', href: '/status-pages-slo' },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder' },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor' },
      { name: 'Uptime SLO Monitor', href: '/uptime-slo-monitor' }
    ]
  }
];

export default function UltraFuturisticFooter2037() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5"></div>
      
      {/* Quantum Field Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/10 transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-pink-400/10 rounded-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                {section.icon}
                <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              </div>
              <p className="text-white/60 text-sm">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-cyan-400 group"
                    >
                      <span className={`${link.featured ? 'text-cyan-300 font-medium' : 'text-white/70'}`}>
                        {link.name}
                      </span>
                      {link.featured && (
                        <span className={`ml-2 text-xs bg-gradient-to-r ${section.color} text-white px-2 py-1 rounded-full`}>
                          Featured
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Contact & Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Get in Touch</h3>
              <p className="text-white/60 text-sm mb-6">
                Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions can drive your success.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:+1 302 464 0950"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <span>+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white/80">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                </div>
                <span className="text-sm">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
              <a
                href="https://ziontechgroup.com"
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Globe className="w-5 h-5 text-green-400" />
                </div>
                <span>ziontechgroup.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/comprehensive-services-showcase-2025" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  All Services
                </Link>
                <Link href="/pricing" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
                <Link href="/market-pricing" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Market Pricing
                </Link>
                <Link href="/about" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
                <Link href="/support" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Support
                </Link>
                <Link href="/blog" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
                <Link href="/careers" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
                <Link href="/partners" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Partners
                </Link>
                <Link href="/investors" className="text-sm text-white/70 hover:text-cyan-400 transition-colors">
                  Investors
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Zion-Holdings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
              <div>
                <span className="text-white font-bold text-lg">ZionTech Group</span>
                <p className="text-white/60 text-sm">Future Technology Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-cyan-400 transition-colors">Security</Link>
              <Link href="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm">
              © 2025 ZionTech Group. All rights reserved. Pioneering the future of technology with AI, quantum computing, and space technology.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}