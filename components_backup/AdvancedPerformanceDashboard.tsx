import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Activity,
  Users,
  Target,
  Award,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Code,
  Rocket,
  Timer,
  CheckCircle,
  AlertCircle,
  DollarSign,
  ArrowRight,
  Download,
  Upload,
  RefreshCw,
  MoreHorizontal,
  Calendar,
  Clock,
  User,
  Settings,
  Eye,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Bell,
  ChevronUp,
  ChevronDown,
  Minus,
  X,
  Info,
  HelpCircle,
  ExternalLink,
  FileText
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  change: number; // percentage change from previous period
  trend: 'up' | 'down' | 'stable';
  category: 'productivity' | 'quality' | 'efficiency' | 'financial' | 'customer' | 'innovation';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'on-track' | 'at-risk' | 'behind' | 'exceeding';
  lastUpdated: string;
  description: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  performance: {
    overall: number; // percentage
    productivity: number;
    quality: number;
    collaboration: number;
    innovation: number;
    reliability: number;
  };
  projects: string[];
  achievements: string[];
  areas: string[];
  lastReview: string;
  nextReview: string;
}

interface ProjectPerformance {
  id: string;
  name: string;
  client: string;
  status: 'on-track' | 'at-risk' | 'behind' | 'completed';
  progress: number; // percentage
  budget: number;
  spent: number;
  timeline: {
    estimated: number; // days
    actual: number; // days
    remaining: number; // days
  };
  quality: {
    score: number; // 1-10
    issues: number;
    resolved: number;
  };
  team: string[];
  lastUpdated: string;
}

interface PerformanceInsight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'warning' | 'critical' | 'info';
  impact: 'high' | 'medium' | 'low';
  recommendation: string;
  actionRequired: boolean;
  createdAt: string;
}

const performanceMetrics: PerformanceMetric[] = [
  {
    id: '1',
    name: 'Team Productivity Score',
    value: 87,
    target: 85,
    unit: '%',
    change: 5.2,
    trend: 'up',
    category: 'productivity',
    priority: 'high',
    status: 'exceeding',
    lastUpdated: '2025-01-27',
    description: 'Overall team productivity based on completed tasks and project milestones'
  },
  {
    id: '2',
    name: 'Project Delivery Rate',
    value: 92,
    target: 90,
    unit: '%',
    change: 3.1,
    trend: 'up',
    category: 'efficiency',
    priority: 'high',
    status: 'exceeding',
    lastUpdated: '2025-01-27',
    description: 'Percentage of projects delivered on time and within budget'
  },
  {
    id: '3',
    name: 'Client Satisfaction',
    value: 4.8,
    target: 4.5,
    unit: '/5.0',
    change: 0.3,
    trend: 'up',
    category: 'customer',
    priority: 'critical',
    status: 'exceeding',
    lastUpdated: '2025-01-27',
    description: 'Average client satisfaction rating across all projects'
  },
  {
    id: '4',
    name: 'Code Quality Score',
    value: 8.7,
    target: 8.5,
    unit: '/10',
    change: -0.2,
    trend: 'down',
    category: 'quality',
    priority: 'medium',
    status: 'on-track',
    lastUpdated: '2025-01-27',
    description: 'Code quality assessment based on reviews and testing'
  },
  {
    id: '5',
    name: 'Resource Utilization',
    value: 78,
    target: 80,
    unit: '%',
    change: -1.5,
    trend: 'down',
    category: 'efficiency',
    priority: 'medium',
    status: 'at-risk',
    lastUpdated: '2025-01-27',
    description: 'Percentage of team capacity effectively utilized'
  },
  {
    id: '6',
    name: 'Innovation Index',
    value: 7.2,
    target: 7.0,
    unit: '/10',
    change: 0.8,
    trend: 'up',
    category: 'innovation',
    priority: 'medium',
    status: 'exceeding',
    lastUpdated: '2025-01-27',
    description: 'Innovation score based on new ideas and process improvements'
  }
];

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Senior Frontend Developer',
    avatar: 'JS',
    performance: {
      overall: 89,
      productivity: 92,
      quality: 88,
      collaboration: 85,
      innovation: 78,
      reliability: 91
    },
    projects: ['E-commerce Platform', 'Mobile App'],
    achievements: ['Led successful project delivery', 'Mentored junior developers'],
    areas: ['Advanced React patterns', 'Performance optimization'],
    lastReview: '2025-01-15',
    nextReview: '2025-04-15'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    avatar: 'SC',
    performance: {
      overall: 85,
      productivity: 88,
      quality: 92,
      collaboration: 90,
      innovation: 85,
      reliability: 87
    },
    projects: ['E-commerce Platform', 'Brand Redesign'],
    achievements: ['Improved user experience metrics', 'Streamlined design process'],
    areas: ['Advanced prototyping', 'User research methods'],
    lastReview: '2025-01-20',
    nextReview: '2025-04-20'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Backend Developer',
    avatar: 'MJ',
    performance: {
      overall: 91,
      productivity: 89,
      quality: 90,
      collaboration: 88,
      innovation: 82,
      reliability: 93
    },
    projects: ['E-commerce Platform', 'API Development'],
    achievements: ['Optimized database performance', 'Reduced API response time'],
    areas: ['System architecture', 'Database optimization'],
    lastReview: '2025-01-18',
    nextReview: '2025-04-18'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Data Scientist',
    avatar: 'DK',
    performance: {
      overall: 87,
      productivity: 85,
      quality: 89,
      collaboration: 86,
      innovation: 91,
      reliability: 88
    },
    projects: ['AI Analytics Platform', 'Data Pipeline'],
    achievements: ['Implemented ML models', 'Improved data accuracy'],
    areas: ['Advanced ML algorithms', 'Data visualization'],
    lastReview: '2025-01-22',
    nextReview: '2025-04-22'
  }
];

const projectPerformance: ProjectPerformance[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    client: 'TechFlow Solutions',
    status: 'on-track',
    progress: 78,
    budget: 50000,
    spent: 32500,
    timeline: {
      estimated: 120,
      actual: 85,
      remaining: 35
    },
    quality: {
      score: 8.5,
      issues: 12,
      resolved: 10
    },
    team: ['John Smith', 'Sarah Chen', 'Mike Johnson'],
    lastUpdated: '2025-01-27'
  },
  {
    id: '2',
    name: 'Mobile App Development',
    client: 'GreenEnergy Corp',
    status: 'at-risk',
    progress: 39,
    budget: 75000,
    spent: 18750,
    timeline: {
      estimated: 180,
      actual: 70,
      remaining: 110
    },
    quality: {
      score: 7.8,
      issues: 8,
      resolved: 6
    },
    team: ['Alex Thompson', 'Emily Watson'],
    lastUpdated: '2025-01-27'
  },
  {
    id: '3',
    name: 'AI-Powered Analytics Platform',
    client: 'HealthTech Innovations',
    status: 'on-track',
    progress: 94,
    budget: 100000,
    spent: 90000,
    timeline: {
      estimated: 240,
      actual: 225,
      remaining: 15
    },
    quality: {
      score: 9.1,
      issues: 5,
      resolved: 5
    },
    team: ['David Kim', 'Lisa Rodriguez', 'Tom Wilson'],
    lastUpdated: '2025-01-27'
  }
];

const performanceInsights: PerformanceInsight[] = [
  {
    id: '1',
    title: 'Team Productivity Exceeding Targets',
    description: 'Team productivity has increased by 5.2% this month, exceeding the target of 85%. This is driven by improved project management and team collaboration.',
    type: 'positive',
    impact: 'high',
    recommendation: 'Continue current practices and consider scaling successful methodologies to other teams.',
    actionRequired: false,
    createdAt: '2025-01-27'
  },
  {
    id: '2',
    title: 'Resource Utilization Below Target',
    description: 'Resource utilization has decreased by 1.5% and is currently below the target of 80%. This may indicate underutilization or capacity planning issues.',
    type: 'warning',
    impact: 'medium',
    recommendation: 'Review current project allocation and identify opportunities to optimize resource usage.',
    actionRequired: true,
    createdAt: '2025-01-27'
  },
  {
    id: '3',
    title: 'Code Quality Slightly Declining',
    description: 'Code quality score has decreased by 0.2 points. While still above target, this trend should be monitored to prevent further decline.',
    type: 'warning',
    impact: 'low',
    recommendation: 'Review code review processes and consider additional quality checks.',
    actionRequired: false,
    createdAt: '2025-01-27'
  }
];

const categoryColors = {
  'productivity': 'from-blue-500 to-cyan-500',
  'quality': 'from-green-500 to-emerald-500',
  'efficiency': 'from-purple-500 to-pink-500',
  'financial': 'from-yellow-500 to-orange-500',
  'customer': 'from-red-500 to-pink-500',
  'innovation': 'from-indigo-500 to-blue-500'
};

const statusColors = {
  'on-track': 'from-green-500 to-emerald-500',
  'at-risk': 'from-yellow-500 to-orange-500',
  'behind': 'from-red-500 to-pink-500',
  'exceeding': 'from-blue-500 to-cyan-500'
};

const priorityColors = {
  'low': 'bg-gray-500',
  'medium': 'bg-yellow-500',
  'high': 'bg-orange-500',
  'critical': 'bg-red-500'
};

const insightTypeColors = {
  'positive': 'from-green-500 to-emerald-500',
  'warning': 'from-yellow-500 to-orange-500',
  'critical': 'from-red-500 to-pink-500',
  'info': 'from-blue-500 to-cyan-500'
};

const AdvancedPerformanceDashboard: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'team' | 'projects' | 'insights'>('overview');
  const [selectedMetric, setSelectedMetric] = useState<PerformanceMetric | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectPerformance | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredMetrics = performanceMetrics.filter(metric => {
    const matchesSearch = metric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         metric.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || metric.category === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const filteredTeamMembers = teamMembers.filter(member => {
    return member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           member.role.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredProjects = projectPerformance.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.status === selectedFilter;
  });

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'text-green-400';
      case 'at-risk':
        return 'text-yellow-400';
      case 'behind':
        return 'text-red-400';
      case 'exceeding':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Performance Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive performance analytics, KPI tracking, and team insights. 
            Monitor productivity, quality, and efficiency metrics in real-time.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+5.2%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">87%</h3>
            <p className="text-gray-400 text-sm">Productivity Score</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+3.1%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">92%</h3>
            <p className="text-gray-400 text-sm">Delivery Rate</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+0.3</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">4.8/5.0</h3>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-red-400 text-sm font-medium">-1.5%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">78%</h3>
            <p className="text-gray-400 text-sm">Resource Utilization</p>
          </div>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1 max-w-lg mx-auto"
        >
          {(['overview', 'team', 'projects', 'insights'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <BarChart3 className="w-4 h-4 inline mr-2" />}
              {view === 'team' && <Users className="w-4 h-4 inline mr-2" />}
              {view === 'projects' && <Target className="w-4 h-4 inline mr-2" />}
              {view === 'insights' && <Activity className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search metrics, team members, or projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            {selectedView === 'overview' && (
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              >
                <option value="all">All Categories</option>
                <option value="productivity">Productivity</option>
                <option value="quality">Quality</option>
                <option value="efficiency">Efficiency</option>
                <option value="financial">Financial</option>
                <option value="customer">Customer</option>
                <option value="innovation">Innovation</option>
              </select>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Export Report
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Data
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {filteredMetrics.map((metric) => (
                  <motion.div
                    key={metric.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => setSelectedMetric(metric)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 bg-gradient-to-r ${categoryColors[metric.category]} rounded-full`} />
                          <h4 className="text-white font-semibold">{metric.name}</h4>
                          <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[metric.status]} rounded-full text-white text-xs font-medium`}>
                            {metric.status}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{metric.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(metric.trend)}
                        <div className={`w-3 h-3 ${priorityColors[metric.priority]} rounded-full`} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">
                          {metric.value}{metric.unit}
                        </div>
                        <div className="text-gray-400 text-sm">Current Value</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-gray-300 mb-1">
                          {metric.target}{metric.unit}
                        </div>
                        <div className="text-gray-400 text-sm">Target</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Change</span>
                        <span className={`font-medium ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {metric.change >= 0 ? '+' : ''}{metric.change}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Last Updated</span>
                        <span className="text-gray-300">{metric.lastUpdated}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {filteredTeamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-gray-400 text-sm">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-2xl">{member.performance.overall}%</div>
                        <div className="text-gray-400 text-sm">Overall Score</div>
                      </div>
                    </div>

                    {/* Performance Breakdown */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Productivity</div>
                        <div className="text-white font-medium">{member.performance.productivity}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Quality</div>
                        <div className="text-white font-medium">{member.performance.quality}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Collaboration</div>
                        <div className="text-white font-medium">{member.performance.collaboration}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Innovation</div>
                        <div className="text-white font-medium">{member.performance.innovation}%</div>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Current Projects</div>
                      <div className="flex flex-wrap gap-2">
                        {member.projects.map((project, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Review Dates */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Last Review: {member.lastReview}</span>
                      <span>Next: {member.nextReview}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'insights' && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {performanceInsights.map((insight) => (
                  <motion.div
                    key={insight.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-xl flex items-center justify-center`}>
                        {insight.type === 'positive' && <CheckCircle className="w-6 h-6 text-white" />}
                        {insight.type === 'warning' && <AlertCircle className="w-6 h-6 text-white" />}
                        {insight.type === 'critical' && <AlertCircle className="w-6 h-6 text-white" />}
                        {insight.type === 'info' && <Info className="w-6 h-6 text-white" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{insight.title}</h3>
                          <div className={`px-2 py-1 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-full text-white text-xs font-medium`}>
                            {insight.impact} impact
                          </div>
                          {insight.actionRequired && (
                            <div className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30">
                              Action Required
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-300 mb-4">{insight.description}</p>
                        
                        <div className="bg-gray-800/30 rounded-lg p-4 mb-4">
                          <div className="text-sm text-gray-400 mb-2">Recommendation</div>
                          <p className="text-white">{insight.recommendation}</p>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          Generated on {insight.createdAt}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your Team Performance?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you track KPIs, analyze performance metrics, and 
              drive continuous improvement with our advanced performance dashboard.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Metric Detail Modal */}
      <AnimatePresence>
        {selectedMetric && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMetric(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedMetric.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 bg-gradient-to-r ${statusColors[selectedMetric.status]} rounded-full text-white text-sm font-medium`}>
                        {selectedMetric.status}
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${categoryColors[selectedMetric.category]} rounded-full text-white text-sm font-medium`}>
                        {selectedMetric.category}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMetric(null)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>

                {/* Metric Details */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Current Value</div>
                      <div className="text-3xl font-bold text-white">{selectedMetric.value}{selectedMetric.unit}</div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Target</div>
                      <div className="text-3xl font-bold text-white">{selectedMetric.target}{selectedMetric.unit}</div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Description</div>
                    <p className="text-white">{selectedMetric.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Change from Previous Period</div>
                      <div className={`text-2xl font-bold ${selectedMetric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {selectedMetric.change >= 0 ? '+' : ''}{selectedMetric.change}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Priority</div>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 ${priorityColors[selectedMetric.priority]} rounded-full`} />
                        <span className="text-white capitalize">{selectedMetric.priority}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400">
                    Last Updated: {selectedMetric.lastUpdated}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedPerformanceDashboard;