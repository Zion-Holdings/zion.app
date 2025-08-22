'use client';

import { useState } from 'react';
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
  TestTube, GitBranch, TrendingUp, Home, Star, Award, Clock,
  Shield, Database, Layers, CpuIcon, BrainCircuit, AtomIcon
} from 'lucide-react';

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navigationSections = [
    {
      id: 'home',
      title: 'Home',
      icon: Home,
      color: 'text-blue-400',
      href: '/',
      items: [
        { name: 'Dashboard', href: '/', icon: Target },
        { name: 'Featured Services', href: '/comprehensive-services-showcase-2025', icon: Star },
        { name: 'Latest Updates', href: '/news', icon: Megaphone },
        { name: 'Company Overview', href: '/about', icon: Building2 }
      ]
    },
    {
      id: 'ai-consciousness',
      title: 'AI & Consciousness',
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
      title: 'Quantum & Emerging Tech',
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
      title: 'Enterprise IT',
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
      title: 'Micro SAAS',
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
      title: 'Space & Metaverse',
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
      title: 'AI Automation',
      icon: Bot,
      color: 'text-yellow-400',
      href: '/advanced-ai-automation-services',
      items: [
        { name: 'AI-Powered Development', href: '/ai-powered-development', icon: Code2 },
        { name: 'Intelligent Operations', href: '/intelligent-operations', icon: Cog },
        { name: 'Automated Testing Platform', href: '/automated-testing-platform', icon: TestTube },
        { name: 'Continuous Integration AI', href: '/continuous-integration-ai', icon: GitBranch }
      ]
    },
    {
      id: 'solutions',
      title: 'Industry Solutions',
      icon: Target,
      color: 'text-indigo-400',
      href: '/solutions',
      items: [
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: Stethoscope },
        { name: 'Financial Services', href: '/financial-solutions', icon: CreditCard },
        { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', icon: Factory },
        { name: 'Retail Technology', href: '/retail-technology-solutions', icon: ShoppingCart },
        { name: 'Education Technology', href: '/education-technology-solutions', icon: GraduationCap },
        { name: 'Government Solutions', href: '/government-technology-solutions', icon: Building2 }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      color: 'text-emerald-400',
      href: '/resources',
      items: [
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api-documentation', icon: Code },
        { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
        { name: 'Blog & News', href: '/blog', icon: Megaphone },
        { name: 'Support Center', href: '/support', icon: Headphones },
        { name: 'Training & Certification', href: '/training', icon: GraduationCap }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/contact', icon: Phone, color: 'bg-gradient-to-r from-cyan-500 to-blue-600' },
    { name: 'View Pricing', href: '/revolutionary-2025-pricing', icon: Target, color: 'bg-gradient-to-r from-purple-500 to-pink-600' },
    { name: 'Schedule Demo', href: '/demo', icon: Calendar, color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
    { name: 'Support', href: '/support', icon: Headphones, color: 'bg-gradient-to-r from-orange-500 to-red-600' }
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:z-auto`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-cyan-500/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
              <p className="text-xs text-cyan-300">Navigation</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* Quick Actions */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={`${action.color} p-3 rounded-lg text-white text-center hover:scale-105 transition-transform duration-200 group`}
                    onClick={closeSidebar}
                  >
                    <action.icon className="w-5 h-5 mx-auto mb-1 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs font-medium">{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="space-y-2">
              {navigationSections.map((section) => (
                <div key={section.id} className="space-y-1">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className={`w-5 h-5 ${section.color}`} />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        activeSection === section.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Section Items */}
                  {activeSection === section.id && (
                    <div className="ml-8 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-md transition-all duration-200 group"
                          onClick={closeSidebar}
                        >
                          <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                      <Link
                        href={section.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium hover:bg-cyan-500/10 rounded-md transition-all duration-200"
                        onClick={closeSidebar}
                      >
                        <span>View All {section.title}</span>
                        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="pt-6 border-t border-cyan-500/20">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Contact Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-xs">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="pt-4 border-t border-cyan-500/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">System Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}