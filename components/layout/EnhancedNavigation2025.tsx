'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Brain, Atom, Server, Package, Satellite, Bot, Briefcase, Factory,
  Rocket, Target, BookOpen, Users, Phone, Mail, MapPin, Globe,
  Zap, Menu, X, ChevronDown, Search, Cpu, Gem, Car, Cloud,
  Settings, HardDrive, Link as LinkIcon, Code, Lock, Wifi,
  BarChart, Megaphone, Headphones, UserCheck, Calculator, Calendar,
  Stethoscope, CreditCard, ShoppingCart, GraduationCap, Building2,
  Truck, Eye, View, BarChart3, FileText, MessageSquare, Sparkles,
  Heart, Activity, Palette, Network, Lightbulb, Cog, Code2,
  TestTube, GitBranch, TrendingUp
} from 'lucide-react';

export default function EnhancedNavigation2025() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      id: 'ai-consciousness',
      label: 'AI & Consciousness',
      icon: Brain,
      color: 'text-cyan-400',
      href: '/ai-services',
      items: [
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution', icon: Sparkles },
        { name: 'Emotional Intelligence Training', href: '/ai-emotional-intelligence-training', icon: Heart },
        { name: 'Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', icon: Search },
        { name: 'Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform', icon: Activity },
        { name: 'Content Personalization Engine', href: '/ai-content-personalization-engine', icon: Palette },
        { name: 'Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', icon: Network },
        { name: 'AI Ethics Governance Framework', href: '/ai-ethics-governance-framework', icon: Lock },
        { name: 'AI Creativity Studio', href: '/ai-creativity-studio', icon: Lightbulb }
      ]
    },
    {
      id: 'quantum-emerging',
      label: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'text-purple-400',
      href: '/quantum-services',
      items: [
        { name: 'Space Resource Mining', href: '/space-resource-mining', icon: Rocket },
        { name: 'Brain-Computer Interface', href: '/quantum-ai-brain-computer-interface', icon: Cpu },
        { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', icon: Gem },
        { name: 'Autonomous Vehicles', href: '/autonomous-vehicles', icon: Car },
        { name: 'Quantum Computing Solutions', href: '/quantum-computing-solutions', icon: Zap },
        { name: 'Metaverse Development', href: '/metaverse-development', icon: Globe }
      ]
    },
    {
      id: 'enterprise-it',
      label: 'Enterprise IT',
      icon: Server,
      color: 'text-green-400',
      href: '/enterprise-it',
      items: [
        { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', icon: Cloud },
        { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', icon: Settings },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', icon: HardDrive },
        { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', icon: LinkIcon },
        { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', icon: Code },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', icon: Lock },
        { name: 'Quantum Networking', href: '/quantum-networking', icon: Wifi }
      ]
    },
    {
      id: 'micro-saas',
      label: 'Micro SAAS',
      icon: Package,
      color: 'text-blue-400',
      href: '/micro-saas',
      items: [
        { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', icon: Users },
        { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', icon: Truck },
        { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', icon: CreditCard },
        { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform', icon: BarChart3 },
        { name: 'Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', icon: TrendingUp },
        { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', icon: Target },
        { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform', icon: FileText },
        { name: 'Smart CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', icon: MessageSquare }
      ]
    },
    {
      id: 'space-metaverse',
      label: 'Space & Metaverse',
      icon: Satellite,
      color: 'text-pink-400',
      href: '/space-tech',
      items: [
        { name: 'Space Technology Solutions', href: '/space-technology-solutions', icon: Satellite },
        { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', icon: Globe },
        { name: 'Virtual Reality Solutions', href: '/virtual-reality-solutions', icon: Eye },
        { name: 'Augmented Reality Platform', href: '/augmented-reality-platform', icon: View }
      ]
    },
    {
      id: 'ai-automation',
      label: 'AI Automation',
      icon: Bot,
      color: 'text-yellow-400',
      href: '/advanced-ai-automation-services',
      items: [
        { name: 'AI-Powered Development', href: '/ai-powered-development', icon: Code2 },
        { name: 'Intelligent Operations', href: '/intelligent-operations', icon: Cog },
        { name: 'Automated Testing Platform', href: '/automated-testing-platform', icon: TestTube },
        { name: 'Continuous Integration AI', href: '/continuous-integration-ai', icon: GitBranch }
      ]
    }
  ];

  const quickLinks = [
    { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: Rocket },
    { name: 'Pricing', href: '/revolutionary-2025-pricing', icon: Target },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-cyan-300">Live System</span>
              </div>
              <Link
                href="/contact"
                className="px-3 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-md text-cyan-300 hover:text-white transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-cyan-300">Future Technology Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.id && (
                  <div className="absolute top-full left-0 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 p-4 mt-2">
                    <div className="grid grid-cols-1 gap-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <subItem.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                            {subItem.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-cyan-500/20">
                      <Link
                        href={item.href}
                        className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/30 rounded-lg text-cyan-300 hover:text-white transition-all duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All {item.label}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Links */}
            <div className="flex items-center space-x-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 hover:text-cyan-400"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.id} className="space-y-2">
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-cyan-500/10 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
                <div className="ml-8 space-y-1">
                  {item.items.slice(0, 3).map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <subItem.icon className="w-4 h-4" />
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t border-cyan-500/20">
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-cyan-500/10 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}