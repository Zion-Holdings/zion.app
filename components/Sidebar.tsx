import Link from 'next/link';
import { useMemo } from 'react';
import { 
  Home, Rocket, Brain, Atom, Monitor, Shield, 
  Users, FileText, Settings, Cog, Database, 
  Network, Cloud, Lock, Code, Globe, Star,
  TrendingUp, BarChart3, Zap, Target, CheckCircle
} from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  badge?: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

export default function Sidebar() {
  const navigationSections: NavSection[] = useMemo(
    () => [
      {
        title: 'Core Pages',
        links: [
          { href: '/', label: 'Home', icon: Home, description: 'Main homepage' },
          { href: '/about', label: 'About Us', icon: Users, description: 'Company information' },
          { href: '/contact', label: 'Contact', icon: Users, description: 'Get in touch' },
          { href: '/team', label: 'Team', icon: Users, description: 'Leadership team' }
        ]
      },
      {
        title: 'Services & Solutions',
        links: [
          { href: '/services', label: 'All Services', icon: Rocket, description: 'Complete services overview', badge: 'Featured' },
          { href: '/solutions', label: 'Solutions', icon: Target, description: 'Technology solutions' },
          { href: '/ai-services', label: 'AI Services', icon: Brain, description: 'Artificial intelligence solutions' },
          { href: '/quantum-technology', label: 'Quantum Tech', icon: Atom, description: 'Quantum computing solutions' },
          { href: '/it-infrastructure', label: 'IT Infrastructure', icon: Monitor, description: 'IT infrastructure services' },
          { href: '/cybersecurity', label: 'Cybersecurity', icon: Shield, description: 'Security solutions' },
          { href: '/cloud-solutions', label: 'Cloud Solutions', icon: Cloud, description: 'Cloud computing services' },
          { href: '/blockchain-solutions', label: 'Blockchain', icon: Database, description: 'Blockchain technology' },
          { href: '/iot-platforms', label: 'IoT Platforms', icon: Network, description: 'Internet of Things' }
        ]
      },
      {
        title: 'Resources & Insights',
        links: [
          { href: '/blog', label: 'Blog & Articles', icon: FileText, description: 'Latest insights' },
          { href: '/technology-insights', label: 'Tech Insights', icon: TrendingUp, description: 'Technology trends' },
          { href: '/case-studies', label: 'Case Studies', icon: Star, description: 'Success stories' },
          { href: '/white-papers', label: 'White Papers', icon: FileText, description: 'Research & analysis' },
          { href: '/docs', label: 'Documentation', icon: Code, description: 'Technical docs' },
          { href: '/api', label: 'API Reference', icon: Code, description: 'API documentation' }
        ]
      },
      {
        title: 'Company & Support',
        links: [
          { href: '/careers', label: 'Careers', icon: Users, description: 'Join our team' },
          { href: '/support', label: 'Support', icon: Cog, description: 'Get help' },
          { href: '/privacy', label: 'Privacy Policy', icon: Lock, description: 'Data protection' },
          { href: '/terms', label: 'Terms of Service', icon: FileText, description: 'Legal terms' },
          { href: '/cookies', label: 'Cookie Policy', icon: FileText, description: 'Cookie information' }
        ]
      },
      {
        title: 'Specialized Services',
        links: [
          { href: '/quantum-neural-network-platform', label: 'Quantum Neural Networks', icon: Atom, description: 'Quantum AI platform', badge: 'New' },
          { href: '/autonomous-business-operations-platform', label: 'Autonomous Business', icon: Brain, description: 'AI business automation', badge: 'New' },
          { href: '/ai-powered-it-asset-management', label: 'IT Asset Management', icon: Monitor, description: 'AI-powered IT management', badge: 'New' },
          { href: '/ai-consciousness-evolution-2029', label: 'AI Consciousness', icon: Brain, description: 'AI consciousness evolution', badge: 'Featured' }
        ]
      }
    ],
    []
  );

  const utilityLinks: NavLink[] = useMemo(
    () => [
      { href: '/site-health', label: 'Site Health', icon: CheckCircle, description: 'Website health monitoring' },
      { href: '/sitemap', label: 'Sitemap', icon: Globe, description: 'Site structure overview' },
      { href: '/search', label: 'Search', icon: BarChart3, description: 'Search functionality' }
    ],
    []
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-80 overflow-y-auto border-r border-white/10 bg-slate-950/90 px-4 py-6 backdrop-blur-md">
      {/* Header */}
      <div className="mb-6 px-2">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Zion</span>
              <span className="ml-2 text-white/60">Navigation</span>
            </div>
            <div className="text-xs text-gray-500">Tech Group</div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="space-y-8">
        {navigationSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="group flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all duration-200"
                >
                  {link.icon && (
                    <link.icon className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="truncate">{link.label}</span>
                      {link.badge && (
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          link.badge === 'New' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    {link.description && (
                      <p className="text-xs text-gray-500 truncate">{link.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Utility Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
            Utilities
          </h3>
          <div className="space-y-1">
            {utilityLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all duration-200"
              >
                {link.icon && (
                  <link.icon className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="truncate">{link.label}</span>
                  {link.description && (
                    <p className="text-xs text-gray-500 truncate">{link.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="pt-6 border-t border-slate-700/50">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
            Contact
          </h3>
          <div className="space-y-2 px-2">
            <div className="text-xs text-gray-500">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-3 h-3" />
                <span>Zion Tech Group</span>
              </div>
              <div className="text-gray-600">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="w-3 h-3" />
                <span>Get Started</span>
              </div>
              <Link 
                href="/contact" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}