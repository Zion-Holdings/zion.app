import React from 'react';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Target, Rocket,
  Mail, Phone, MapPin, Globe, ArrowUp,
  Facebook, Twitter, Linkedin, Youtube, Github,
  Cloud, Code, Server, Network, Settings, Lock,
  Star, Heart, Users, FileText, ArrowRight, HelpCircle
} from 'lucide-react';

const UltraFuturisticFooter2045: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Revolutionary Services 2045',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Neural Networks 2045', href: '/quantum-neural-network-platform-2045', icon: <Atom className="w-4 h-4" /> },
        { name: 'AI Guardrails Suite', href: '/ai-guardrails', icon: <Shield className="w-4 h-4" /> },
        { name: 'Agentic RAG Platform', href: '/agentic-rag', icon: <Target className="w-4 h-4" /> },
        { name: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', icon: <Rocket className="w-4 h-4" /> },
        { name: 'AI Services Platform', href: '/ai-services', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Technology Solutions',
      links: [
        { name: 'Quantum Cloud Infrastructure 2045', href: '/quantum-cloud-infrastructure-2045', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Autonomous DevOps Platform 2045', href: '/autonomous-devops-platform-2045', icon: <Code className="w-4 h-4" /> },
        { name: 'Quantum Data Center Management 2045', href: '/quantum-data-center-management-2045', icon: <Server className="w-4 h-4" /> },
        { name: 'Autonomous Network Management 2045', href: '/autonomous-network-management-2045', icon: <Network className="w-4 h-4" /> },
        { name: 'Autonomous IT Service Management 2045', href: '/autonomous-it-service-management-2045', icon: <Settings className="w-4 h-4" /> },
        { name: 'Autonomous Security Operations Center 2045', href: '/autonomous-security-operations-center-2045', icon: <Lock className="w-4 h-4" /> }
      ]
    },
    {
      title: 'AI & Consciousness',
      links: [
        { name: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum AI Cognitive 2045', href: '/quantum-ai-cognitive-2045', icon: <Atom className="w-4 h-4" /> },
        { name: 'Autonomous AI Research 2045', href: '/autonomous-ai-research-2045', icon: <Star className="w-4 h-4" /> },
        { name: 'Emotional AI Intelligence 2045', href: '/emotional-ai-intelligence-2045', icon: <Heart className="w-4 h-4" /> },
        { name: 'Quantum AI Metaverse 2045', href: '/quantum-ai-metaverse-2045', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Autonomous Business Intelligence 2045', href: '/ai-autonomous-business-intelligence-2045', icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
        { name: 'Leadership Team', href: '/team', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Target className="w-4 h-4" /> },
        { name: 'News & Blog', href: '/blog', icon: <Star className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  ];

  const quickLinks = [
    { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" /> },
    { name: 'Contact Sales', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Documentation', href: '/docs', icon: <Code className="w-4 h-4" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-cyan-400">Revolutionary Technology Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future with revolutionary AI consciousness, quantum computing, 
              and space technology solutions that transform businesses and propel humanity forward.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Revolutionary Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-autonomous-ecosystem" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Autonomous Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/quantum-computing" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link href="/space-technology" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Space Technology
                </Link>
              </li>
              <li>
                <Link href="/metaverse" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Metaverse Development
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Quantum Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400 mr-3" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-4 h-4 text-cyan-400 mr-3" />
                <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Zion Tech Group. All rights reserved. Revolutionary technology for a better future.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default UltraFuturisticFooter2045;