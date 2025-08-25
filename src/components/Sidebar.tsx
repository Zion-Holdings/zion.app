import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/futuristic.css';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigationSections = [
    {
      title: "Main",
      items: [
        { name: "Dashboard", path: "/", icon: "🏠", description: "Overview" },
        { name: "Services", path: "/services", icon: "🚀", description: "All Services" },
        { name: "AI Solutions", path: "/ai-solutions", icon: "🤖", description: "AI Services" },
        { name: "Micro SAAS", path: "/micro-saas", icon: "💻", description: "Software Solutions" }
      ]
    },
    {
      title: "Technology",
      items: [
        { name: "IT Services", path: "/it-services", icon: "🖥️", description: "Infrastructure" },
        { name: "Cybersecurity", path: "/cybersecurity", icon: "🔒", description: "Security" },
        { name: "Blockchain", path: "/blockchain", icon: "⛓️", description: "Web3" },
        { name: "Edge Computing", path: "/edge-computing", icon: "🌐", description: "IoT & Edge" },
        { name: "Quantum Computing", path: "/quantum", icon: "🔮", description: "Quantum Solutions" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { name: "Business Intelligence", path: "/solutions/bi", icon: "📊", description: "Analytics" },
        { name: "DevOps & Automation", path: "/solutions/devops", icon: "⚡", description: "Automation" },
        { name: "Data Analytics", path: "/solutions/analytics", icon: "📈", description: "Data Science" },
        { name: "Cloud Infrastructure", path: "/solutions/cloud", icon: "☁️", description: "Cloud Services" },
        { name: "Machine Learning", path: "/solutions/ml", icon: "🧠", description: "ML Models" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", path: "/about", icon: "ℹ️", description: "Company Info" },
        { name: "Our Team", path: "/team", icon: "👥", description: "Team Members" },
        { name: "Careers", path: "/careers", icon: "💼", description: "Job Opportunities" },
        { name: "News & Blog", path: "/blog", icon: "📰", description: "Latest Updates" },
        { name: "Case Studies", path: "/case-studies", icon: "📋", description: "Success Stories" }
      ]
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", path: "/help", icon: "❓", description: "Support" },
        { name: "Documentation", path: "/docs", icon: "📚", description: "Guides" },
        { name: "API Reference", path: "/api", icon: "🔌", description: "API Docs" },
        { name: "Status Page", path: "/status", icon: "📊", description: "System Status" },
        { name: "Contact Support", path: "/support", icon: "🆘", description: "Get Help" }
      ]
    }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`fixed left-0 top-20 h-screen z-40 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="futuristic-sidebar h-full overflow-y-auto">
        {/* Toggle Button */}
        <div className="p-4 border-b border-cyan-400/30">
          <button
            onClick={toggleSidebar}
            className="w-full p-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="p-4 space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              {!isCollapsed && (
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-2 uppercase tracking-wider">
                  {section.title}
                </h3>
              )}
              
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`futuristic-sidebar-item flex items-center gap-3 group ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/30'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{item.name}</div>
                        <div className="text-xs text-gray-500 truncate">{item.description}</div>
                      </div>
                    )}
                    
                    {/* Active Indicator */}
                    {isActive(item.path) && !isCollapsed && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="p-4 border-t border-cyan-400/30">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-2 uppercase tracking-wider">
              Quick Actions
            </h3>
            
            <div className="space-y-2">
              <button className="futuristic-btn w-full py-2 text-sm">
                Get Started
              </button>
              <button className="w-full py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-border">
                Free Demo
              </button>
              <button className="w-full py-2 border border-gray-600 text-gray-300 rounded-lg text-sm hover:bg-gray-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        )}

        {/* Contact Info */}
        {!isCollapsed && (
          <div className="p-4 border-t border-cyan-400/30">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 px-2 uppercase tracking-wider">
              Contact
            </h3>
            
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span className="truncate">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span className="truncate">Middletown, DE</span>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed Contact Info */}
        {isCollapsed && (
          <div className="p-4 border-t border-cyan-400/30">
            <div className="space-y-2">
              <div className="text-center">
                <span className="text-cyan-400 text-lg">📱</span>
              </div>
              <div className="text-center">
                <span className="text-cyan-400 text-lg">✉️</span>
              </div>
              <div className="text-center">
                <span className="text-cyan-400 text-lg">📍</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
    </aside>
  );
}