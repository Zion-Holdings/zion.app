import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  Menu, 
  X, 
  Home, 
  ShoppingCart, 
  Users, 
  Settings, 
  Bell, 
  User, 
  LogOut,
  Grid,
  BarChart3,
  Zap,
  Shield,
  BookOpen,
  MessageSquare,
  HelpCircle,
  Globe,
  Search,
  ChevronRight,
  ChevronDown,
  Plus,
  Star,
  TrendingUp,
  Calendar,
  FileText,
  CreditCard,
  Headphones,
  Palette,
  Database,
  Cpu,
  Rocket,
  Target,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Lock,
  Eye,
  Heart,
  Share2,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  Mic,
  Video,
  Camera,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Save,
  Check,
  X as XIcon,
  AlertCircle,
  Info,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronUp,
  Minus,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Filter,
  Sliders,
  Layers,
  Grid3X3,
  List,
  Columns,
  Rows,
  Layout,
  Sidebar as SidebarIcon,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Merge,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitFork,
  Brain,
  Bot,
  Wifi,
  Building,
  Workflow,
  Store,
  Briefcase,
  PenTool,
  Handshake,
  Monitor,
  CheckSquare,
  Terminal,
  TestTube,
  Activity,
  Gauge,
  LifeBuoy,
  Signal,
  DollarSign
} from 'lucide-react'

interface SidebarItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  description?: string
  badge?: string
  children?: SidebarItem[]
}

interface SidebarSection {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: SidebarItem[]
}

const Sidebar: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  const navigationSections: SidebarSection[] = [
    {
      id: 'main',
      title: 'Main',
      icon: Home,
      items: [
        { label: 'Dashboard', href: '/', icon: BarChart3, badge: 'New' },
        { label: 'Services', href: '/service-marketplace', icon: ShoppingCart },
        { label: 'Talent', href: '/talent-directory', icon: Users },
        { label: 'Analytics', href: '/analytics-dashboard', icon: TrendingUp },
        { label: 'Marketplace', href: '/marketplace', icon: Store },
        { label: 'Portfolio', href: '/portfolio', icon: Briefcase },
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Cpu,
      items: [
        { label: 'AI Education', href: '/ai-powered-education-training', icon: BookOpen },
        { label: 'AI Security', href: '/ai-powered-security-cybersecurity', icon: Shield },
        { label: 'AI Analytics', href: '/ai-powered-analytics', icon: BarChart3 },
        { label: 'AI Machine Learning', href: '/ai-powered-machine-learning', icon: Brain },
        { label: 'AI Quantum Computing', href: '/ai-powered-quantum-computing', icon: Zap },
        { label: 'AI Robotics', href: '/ai-powered-robotics', icon: Bot },
        { label: 'AI Blockchain', href: '/ai-powered-blockchain', icon: Database },
        { label: 'AI IoT', href: '/ai-powered-iot', icon: Wifi },
        { label: 'AI VR/AR', href: '/ai-powered-virtual-reality', icon: Eye },
        { label: 'AI Healthcare', href: '/ai-powered-healthcare-medical-diagnostics', icon: Heart },
        { label: 'AI Content Creation', href: '/ai-content-creation', icon: PenTool },
        { label: 'AI Code Assistant', href: '/ai-code-assistant', icon: Code },
        { label: 'AI Data Science', href: '/ai-data-science', icon: Database },
        { label: 'AI Automation', href: '/ai-automation', icon: Zap },
      ]
    },
    {
      id: 'business',
      title: 'Business',
      icon: Building,
      items: [
        { label: 'Project Management', href: '/project-management', icon: Folder },
        { label: 'Invoice & Billing', href: '/invoice-billing', icon: CreditCard },
        { label: 'Payment Processing', href: '/payment-processing', icon: CreditCard },
        { label: 'Compliance', href: '/compliance-governance', icon: Shield },
        { label: 'Help Center', href: '/help-center', icon: HelpCircle },
        { label: 'FAQ', href: '/faq', icon: FileText },
        { label: 'Enterprise Solutions', href: '/enterprise', icon: Building },
        { label: 'Partnerships', href: '/partnerships', icon: Handshake },
        { label: 'Investor Relations', href: '/investors', icon: TrendingUp },
        { label: 'Legal & Contracts', href: '/legal', icon: FileText },
      ]
    },
    {
      id: 'communication',
      title: 'Communication',
      icon: MessageSquare,
      items: [
        { label: 'Real-time Chat', href: '/real-time-chat', icon: MessageSquare },
        { label: 'Notifications', href: '/notifications', icon: Bell },
        { label: 'Inbox', href: '/inbox', icon: Mail },
        { label: 'API Docs', href: '/api-docs', icon: Code },
        { label: 'Video Conferencing', href: '/video-conference', icon: Video },
        { label: 'Voice Calls', href: '/voice-calls', icon: Phone },
        { label: 'Screen Sharing', href: '/screen-sharing', icon: Monitor },
        { label: 'Team Collaboration', href: '/team-collaboration', icon: Users },
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: Settings,
      items: [
        { label: 'AI Contract Generator', href: '/ai-contract-generator', icon: FileText },
        { label: 'AI Resume Builder', href: '/ai-resume-builder', icon: User },
        { label: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: CreditCard },
        { label: 'Workflow Designer', href: '/workflow-designer', icon: Workflow },
        { label: 'Advanced Search', href: '/advanced-search', icon: Search },
        { label: 'Code Editor', href: '/code-editor', icon: Code },
        { label: 'Design Studio', href: '/design-studio', icon: Palette },
        { label: 'Data Visualization', href: '/data-viz', icon: BarChart3 },
        { label: 'File Manager', href: '/file-manager', icon: Folder },
        { label: 'Task Manager', href: '/task-manager', icon: CheckSquare },
      ]
    },
    {
      id: 'development',
      title: 'Development',
      icon: Code,
      items: [
        { label: 'API Explorer', href: '/api-explorer', icon: Code },
        { label: 'SDK Documentation', href: '/sdk-docs', icon: BookOpen },
        { label: 'Developer Console', href: '/dev-console', icon: Terminal },
        { label: 'Testing Suite', href: '/testing', icon: TestTube },
        { label: 'Deployment', href: '/deployment', icon: Rocket },
        { label: 'Monitoring', href: '/monitoring', icon: Activity },
        { label: 'Logs', href: '/logs', icon: FileText },
        { label: 'Performance', href: '/performance', icon: Gauge },
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText },
        { label: 'Tutorials', href: '/tutorials', icon: Play },
        { label: 'Blog', href: '/blog', icon: PenTool },
        { label: 'Community', href: '/community', icon: Users },
        { label: 'Support', href: '/support', icon: LifeBuoy },
        { label: 'Status Page', href: '/status', icon: Signal },
        { label: 'Pricing', href: '/pricing', icon: DollarSign },
        { label: 'About Us', href: '/about', icon: Info },
      ]
    }
  ]

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const isActive = (href: string) => {
    return router.pathname === href
  }

  const filteredSections = navigationSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.href.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0)

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
        border-r border-gray-700/50 z-50 transition-all duration-500 ease-in-out backdrop-blur-sm
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:z-auto
        w-80 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion App</h1>
              <p className="text-xs text-gray-400">Next Generation Platform</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-700/50">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
            <input
              type="text"
              placeholder="Search features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-2">
            {filteredSections.map((section) => (
              <div key={section.id} className="px-4">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center space-x-3 relative z-10">
                    <section.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  ) : (
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </button>
                
                {expandedSections.has(section.id) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`
                          flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-300 relative overflow-hidden group
                          ${isActive(item.href) 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                          }
                        `}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {item.icon && <item.icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />}
                        <span className="text-sm relative z-10">{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full relative z-10 animate-pulse">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700/50">
          <div className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <User className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm relative z-10">Profile</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Settings className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm relative z-10">Settings</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <LogOut className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm relative z-10">Logout</span>
          </div>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-sm hover:scale-110 transition-all duration-300 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        <Menu className="w-6 h-6 text-white relative z-10 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </>
  )
}

export default Sidebar 