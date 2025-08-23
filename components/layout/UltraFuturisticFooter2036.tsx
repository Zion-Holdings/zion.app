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
  Sparkles as SparklesIcon, Zap as ZapIcon, Target as TargetIcon, Atom as AtomIcon, Brain as BrainIcon
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'Core Services',
    description: 'Our flagship technology solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI & Machine Learning', href: '/ai-services', featured: true },
      { name: 'Quantum Computing', href: '/quantum-services', featured: true },
      { name: 'Space Technology', href: '/space-technology', featured: true },
      { name: 'Enterprise IT', href: '/it-services', featured: true },
      { name: 'Micro SAAS Solutions', href: '/micro-saas', featured: true },
      { name: 'Cybersecurity', href: '/security', featured: true },
      { name: 'Cloud Infrastructure', href: '/cloud-platform', featured: true },
      { name: 'Process Automation', href: '/automation', featured: true }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Autonomous Operations', href: '/ai-autonomous-business-operations-platform' },
      { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
      { name: 'AI Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' }
    ]
  },
  {
    title: 'Enterprise Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'AI Cybersecurity', href: '/ai-powered-cybersecurity' },
      { name: 'SOC 2 Compliance', href: '/soc2-compliance-automation' }
    ]
  },
  {
    title: 'Business Solutions',
    description: 'Innovative business automation tools',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI HR Analytics', href: '/intelligent-hr-analytics-platform' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Specialized solutions by industry',
    icon: <Target className="w-5 h-5 text-orange-400" />,
    links: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions' },
      { name: 'Financial Technology', href: '/financial-solutions' },
      { name: 'Government Tech', href: '/government-technology-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Space Technology', href: '/space-technology' }
    ]
  }
];

const quickLinks = [
  { name: 'All Services', href: '/comprehensive-services-showcase-2025' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Market Pricing', href: '/market-pricing' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Support', href: '/support' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
];

export default function UltraFuturisticFooter2036() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5"></div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
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
                      className={`text-sm transition-colors hover:text-cyan-400 ${
                        link.featured ? 'text-cyan-300 font-medium' : 'text-white/70'
                      }`}
                    >
                      {link.name}
                      {link.featured && (
                        <span className="ml-2 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full">
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

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Get in Touch</h3>
              <p className="text-white/60 text-sm mb-6">
                Ready to transform your business with cutting-edge technology? 
                Let's discuss how our innovative solutions can drive your success.
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              
              <a
                href={contactInfo.website}
                className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{contactInfo.website.replace('https://', '')}</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="border-t border-white/10 pt-8"
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
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="hover:text-cyan-400 transition-colors">
                Security
              </Link>
              <Link href="/accessibility" className="hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
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
              © {new Date().getFullYear()} ZionTech Group. All rights reserved. 
              Pioneering the future of technology with AI, quantum computing, and space technology.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/10 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </footer>
  );
}