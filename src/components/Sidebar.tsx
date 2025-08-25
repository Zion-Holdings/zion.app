
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  Info, 
  Shield, 
  Briefcase,
  Globe,
  Leaf,
  MessageSquare,
  Search,
  BarChart3,
  Brain,
  Server,
  Code,
  ShieldCheck,
  Building,
  Rocket,
  Zap,
  Sparkles,
  Bot,
  CpuIcon,
  Eye,
  Layers,
  Globe2,
  ZapIcon,
  Network,
  Cloud,
  Lock,
  Smartphone,
  Wifi,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Star,
  Clock,
  Heart,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'AI Services',
      icon: Brain,
      items: [
        { name: 'AI Content Generation', href: '/ai-services-showcase', icon: Bot, badge: 'Popular' },
        { name: 'AI Business Intelligence', href: '/ai-services-showcase', icon: BarChart3, badge: 'New' },
        { name: 'AI Customer Support', href: '/ai-services-showcase', icon: MessageSquare, badge: 'Featured' },
        { name: 'AI Recruitment Platform', href: '/ai-services-showcase', icon: Users, badge: 'Popular' },
        { name: 'Quantum AI Platform', href: '/ai-services-showcase', icon: CpuIcon, badge: 'Premium' },
        { name: 'AI Ethics & Governance', href: '/ai-services-showcase', icon: ShieldCheck, badge: 'Enterprise' }
      ]
    },
    {
      title: 'IT Solutions',
      icon: Server,
      items: [
        { name: 'Edge Computing Platform', href: '/services', icon: Globe2, badge: 'New' },
        { name: 'DevOps Automation', href: '/services', icon: ZapIcon, badge: 'Popular' },
        { name: 'API Gateway Management', href: '/services', icon: Network, badge: 'Enterprise' },
        { name: 'Cloud-Native Development', href: '/services', icon: Cloud, badge: 'Premium' },
        { name: 'Low-Code Platform', href: '/services', icon: Layers, badge: 'Featured' },
        { name: 'PWA Builder', href: '/services', icon: Smartphone, badge: 'New' }
      ]
    },
    {
      title: 'Development',
      icon: Code,
      items: [
        { name: 'Web Development', href: '/services', icon: Globe, badge: 'Popular' },
        { name: 'Mobile Development', href: '/services', icon: Smartphone, badge: 'Featured' },
        { name: 'Metaverse Development', href: '/services', icon: Eye, badge: 'New' },
        { name: 'Blockchain Development', href: '/services', icon: Lock, badge: 'Premium' },
        { name: 'IoT Development', href: '/services', icon: Wifi, badge: 'Enterprise' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { name: 'Cyber Threat Detection', href: '/services', icon: ShieldCheck, badge: 'Premium' },
        { name: 'Blockchain Identity', href: '/services', icon: Lock, badge: 'New' },
        { name: 'Managed SOC', href: '/services', icon: Eye, badge: 'Enterprise' },
        { name: 'Compliance & Audit', href: '/services', icon: Award, badge: 'Featured' }
      ]
    },
    {
      title: 'Enterprise',
      icon: Building,
      items: [
        { name: 'Digital Transformation', href: '/enterprise-solutions', icon: TrendingUp, badge: 'Enterprise' },
        { name: 'Legacy System Migration', href: '/enterprise-solutions', icon: Server, badge: 'Premium' },
        { name: 'Cloud Migration', href: '/enterprise-solutions', icon: Cloud, badge: 'Popular' },
        { name: 'Data Center Solutions', href: '/enterprise-solutions', icon: Database, badge: 'Featured' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      items: [
        { name: 'About Us', href: '/about', icon: Info },
        { name: 'Our Team', href: '/about', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'News', href: '/news', icon: MessageSquare },
        { name: 'Press Kit', href: '/press', icon: FileText }
      ]
    },
    {
      title: 'Support',
      icon: HelpCircle,
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Request Quote', href: '/request-quote', icon: FileText },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Documentation', href: '/docs', icon: BookOpen },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'Status Page', href: '/status', icon: CheckCircle }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: Rocket, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Request Demo', href: '/request-quote', icon: Video, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Support Chat', href: '/support', icon: MessageSquare, color: 'from-green-400 to-emerald-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.aside 
      className={cn("w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 min-h-screen overflow-y-auto", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="sticky top-0 bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-zion-cyan rounded-xl blur-xl opacity-60"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-zion-cyan/70 text-xs font-medium">Innovation • Intelligence • Impact</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              to={action.href}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                {action.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 space-y-8">
        {navigationItems.map((section) => (
          <motion.div key={section.title} variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <section.icon className="w-5 h-5 text-zion-cyan" />
              <h3 className="text-zion-cyan text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
            </div>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || 
                               (item.href !== '/' && location.pathname.startsWith(item.href));
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                        isActive
                          ? "bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30"
                          : "text-zion-cyan/70 hover:bg-zion-cyan/10 hover:text-zion-cyan hover:border hover:border-zion-cyan/20"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={cn(
                          "w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300",
                          isActive
                            ? "bg-zion-cyan text-white"
                            : "bg-zion-cyan/20 text-zion-cyan group-hover:bg-zion-cyan group-hover:text-white"
                        )}>
                          <Icon className="w-3 h-3" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                      {'badge' in item && item.badge && (
                        <span className={cn(
                          "px-2 py-1 text-xs rounded-full font-bold transition-all duration-300",
                          item.badge === 'New' ? 'bg-green-500 text-white' :
                          item.badge === 'Popular' ? 'bg-zion-cyan text-white' :
                          item.badge === 'Featured' ? 'bg-purple-500 text-white' :
                          item.badge === 'Premium' ? 'bg-yellow-500 text-white' :
                          'bg-blue-500 text-white'
                        )}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="pt-6 border-t border-zion-cyan/20">
          <h3 className="text-zion-cyan text-sm font-semibold uppercase tracking-wider mb-4 flex items-center space-x-2">
            <MessageSquare className="w-4 h-4" />
            <span>Contact</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-zion-cyan/70 hover:text-zion-cyan transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-cyan/70 hover:text-zion-cyan transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-cyan/70 hover:text-zion-cyan transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
}

// Add missing icons
const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zM12 20c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V16c0 2.21-3.58 4-8 4z"/>
    <path d="M12 16c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V12c0 2.21-3.58 4-8 4z"/>
    <path d="M12 12c-4.42 0-8-1.79-8-4V6.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V8c0 2.21-3.58 4-8 4z"/>
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);