import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  ChevronRight,
  TrendingUp,
  Database,
  Cloud,
  Lock,
  HelpCircle,
  BookOpen
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    // Set active section based on current location
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path.includes('services')) setActiveSection('services');
    else if (path.includes('ai') || path.includes('comprehensive')) setActiveSection('ai-solutions');
    else if (path.includes('it') || path.includes('onsite')) setActiveSection('it-services');
    else if (path.includes('contact')) setActiveSection('contact');
  }, [location]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigationSections = [
    {
      id: 'home',
      title: 'Home',
      icon: Home,
      path: '/',
      description: 'Main dashboard'
    },
    {
      id: 'services',
      title: 'Services',
      icon: Zap,
      path: '/services',
      description: 'Browse all services'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      path: '/comprehensive-services',
      description: 'AI & ML services'
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Shield,
      path: '/it-onsite-services',
      description: 'Onsite IT support'
    }
  ];

  const quickActions = [
    {
      id: 'contact',
      title: 'Contact Us',
      icon: Globe,
      path: '/contact',
      description: 'Get in touch',
      highlight: true
    },
    {
      id: 'support',
      title: 'Support',
      icon: HelpCircle,
      path: '/help',
      description: 'Get help',
      highlight: false
    },
    {
      id: 'documentation',
      title: 'Documentation',
      icon: BookOpen,
      path: '/docs',
      description: 'API docs & guides',
      highlight: false
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI-Powered CRM', path: '/services/ai-powered-crm' },
        { name: 'Predictive Analytics', path: '/services/predictive-analytics' },
        { name: 'Natural Language Processing', path: '/services/nlp' },
        { name: 'Computer Vision', path: '/services/computer-vision' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Lock,
      services: [
        { name: 'Threat Intelligence', path: '/services/threat-intelligence' },
        { name: 'Zero Trust Security', path: '/services/zero-trust' },
        { name: 'Compliance Management', path: '/services/compliance' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Multi-Cloud Management', path: '/services/multi-cloud' },
        { name: 'DevOps Automation', path: '/services/devops' },
        { name: 'Container Orchestration', path: '/services/containers' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      services: [
        { name: 'Business Intelligence', path: '/services/bi' },
        { name: 'Data Visualization', path: '/services/data-viz' },
        { name: 'Real-time Analytics', path: '/services/realtime-analytics' }
      ]
    }
  ];

  return (
    <aside className={`fixed left-0 top-20 h-screen z-40 transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-16' : 'w-64'
    } bg-black/90 backdrop-blur-xl border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20`}>
      
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
      
      {/* Toggle Button */}
      <div className="relative z-10 flex justify-end p-2">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group"
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <ChevronRight className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          }`} />
        </button>
      </div>

      <div className="relative z-10 h-full overflow-y-auto">
        <div className="p-4 space-y-6">
          
          {/* Main Navigation */}
          <div>
            <h3 className={`font-semibold text-cyan-400 mb-4 transition-all duration-300 ${
              isCollapsed ? 'opacity-0' : 'opacity-100'
            }`}>
              {!isCollapsed && 'Navigation'}
            </h3>
            <nav className="space-y-2">
              {navigationSections.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border border-cyan-500/30'
                  }`}
                >
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                  }`} />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className={`font-semibold text-purple-400 mb-4 transition-all duration-300 ${
              isCollapsed ? 'opacity-0' : 'opacity-100'
            }`}>
              {!isCollapsed && 'Quick Actions'}
            </h3>
            <div className="space-y-2">
              {quickActions.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    item.highlight
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 hover:text-purple-200'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border border-cyan-500/30'
                  }`}
                >
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${
                    item.highlight ? 'text-purple-400' : 'text-gray-400 group-hover:text-cyan-400'
                  }`} />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          {!isCollapsed && (
            <div>
              <h3 className="font-semibold text-green-400 mb-4">Service Categories</h3>
              <div className="space-y-4">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm font-medium text-green-400">
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats & Metrics */}
          {!isCollapsed && (
            <div className="pt-4 border-t border-cyan-500/20">
              <h3 className="font-semibold text-yellow-400 mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <div className="text-lg font-bold text-cyan-400">25+</div>
                  <div className="text-xs text-gray-400">AI Services</div>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-lg font-bold text-purple-400">100+</div>
                  <div className="text-xs text-gray-400">Clients</div>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-lg font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                <div className="text-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <div className="text-lg font-bold text-yellow-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
              </div>
            </div>
          )}

          {/* Floating Elements for Visual Appeal */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-4 right-0 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Energy Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 energy-wave">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      </div>
    </aside>
  );
};