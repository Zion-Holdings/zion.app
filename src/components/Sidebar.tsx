import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Server, 
  Brain, 
  Users, 
  Info, 
  Mail, 
  ChevronRight, 
  Sparkles,
  Zap,
  Shield,
  Cloud,
  Database,
  Code,
  BarChart3,
  Lock,
  Globe,
  Bot,
  Cpu,
  Network,
  Atom,
  Eye,
  Phone
} from 'lucide-react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  const navigationSections = [
    {
      id: 'main',
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Contact', href: '/contact', icon: Mail },
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Server,
      items: [
        { name: 'All Services', href: '/services', icon: Server },
        { name: 'AI Services', href: '/services?category=AI Services', icon: Brain },
        { name: 'IT Services', href: '/services?category=IT Services', icon: Cpu },
        { name: 'Micro SAAS', href: '/services?category=Micro SAAS', icon: Code },
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      items: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: Bot },
        { name: 'AI Model Training', href: '/services/ai-model-training', icon: Brain },
        { name: 'Zion Hire AI', href: '/zion-hire-ai', icon: Users },
        { name: 'Voice AI Assistant', href: '/services/voice-ai-assistant', icon: Zap },
        { name: 'Visual Recognition', href: '/services/visual-recognition', icon: Eye },
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      icon: Cpu,
      items: [
        { name: 'API Gateway', href: '/services/api-gateway', icon: Network },
        { name: 'IoT Management', href: '/services/iot-management', icon: Globe },
        { name: 'Blockchain Integration', href: '/services/blockchain', icon: Atom },
        { name: 'Biometric Auth', href: '/services/biometric-auth', icon: Lock },
        { name: 'Global CDN', href: '/services/global-cdn', icon: Cloud },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: Code,
      items: [
        { name: 'AI Talent Matching', href: '/services/ai-talent-matching', icon: Users },
        { name: 'Cybersecurity Assessment', href: '/services/cybersecurity-assessment', icon: Shield },
        { name: 'Cloud Migration', href: '/services/cloud-migration', icon: Cloud },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'Network Infrastructure', href: '/services/network-infrastructure', icon: Network },
        { name: 'Video Production', href: '/services/video-production', icon: Zap },
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-zion-blue-dark/95 to-zion-blue-dark/90 backdrop-blur-md border-r border-zion-cyan/20 transition-all duration-300 z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center text-white hover:bg-zion-purple transition-colors duration-300"
      >
        <ChevronRight className={`h-3 w-3 transition-transform duration-300 ${
          isCollapsed ? 'rotate-180' : ''
        }`} />
      </button>

      {/* Logo */}
      <div className="p-4 border-b border-zion-cyan/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-lg font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
        {navigationSections.map((section) => (
          <div key={section.id} className="space-y-1">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                expandedSection === section.id
                  ? 'bg-zion-cyan/20 text-zion-cyan'
                  : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
              }`}
            >
              <div className="flex items-center space-x-2">
                <section.icon className="h-4 w-4" />
                {!isCollapsed && <span className="text-sm font-medium">{section.title}</span>}
              </div>
              {!isCollapsed && (
                <ChevronRight className={`h-3 w-3 transition-transform duration-300 ${
                  expandedSection === section.id ? 'rotate-90' : ''
                }`} />
              )}
            </button>

            {/* Section Items */}
            {expandedSection === section.id && !isCollapsed && (
              <div className="ml-6 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 p-2 rounded-lg text-sm transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-zion-cyan/20 text-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    <item.icon className="h-3 w-3" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Info */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-cyan/20 bg-zion-blue-dark/50">
          <div className="space-y-2 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}