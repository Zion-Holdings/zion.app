import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  FolderOpen, 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Plus, 
  Edit, 
  Eye, 
  Filter, 
  Search, 
  Settings, 
  Download, 
  Upload, 
  RefreshCw, 
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
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
  Activity,
  FileText,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  client: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  team: string[];
  technologies: string[];
  milestones: Milestone[];
  risks: Risk[];
  lastUpdated: string;
}

interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  progress: number;
  assignee: string;
}

interface Risk {
  id: string;
  title: string;
  description: string;
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigation: string;
  status: 'open' | 'mitigated' | 'closed';
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  availability: number;
  currentProjects: string[];
  skills: string[];
}

const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    description: 'Complete redesign and modernization of the existing e-commerce platform with enhanced user experience and mobile optimization',
    client: 'TechFlow Solutions',
    status: 'active',
    priority: 'high',
    progress: 78,
    startDate: '2025-01-01',
    endDate: '2025-03-31',
    budget: 50000,
    spent: 32500,
    team: ['John Smith', 'Sarah Chen', 'Mike Johnson'],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    milestones: [
      {
        id: '1',
        name: 'Design Phase Complete',
        description: 'UI/UX design and wireframes approved',
        dueDate: '2025-01-15',
        status: 'completed',
        progress: 100,
        assignee: 'Sarah Chen'
      },
      {
        id: '2',
        name: 'Frontend Development',
        description: 'Core frontend components and pages',
        dueDate: '2025-02-15',
        status: 'in-progress',
        progress: 65,
        assignee: 'John Smith'
      },
      {
        id: '3',
        name: 'Backend API Development',
        description: 'RESTful API endpoints and database integration',
        dueDate: '2025-02-28',
        status: 'in-progress',
        progress: 45,
        assignee: 'Mike Johnson'
      }
    ],
    risks: [
      {
        id: '1',
        title: 'Third-party API Integration',
        description: 'Payment gateway integration may face delays due to external dependencies',
        probability: 'medium',
        impact: 'high',
        mitigation: 'Early testing and backup payment solutions',
        status: 'open'
      }
    ],
    lastUpdated: '2025-01-27'
  },
  {
    id: '2',
    name: 'AI-Powered Analytics Platform',
    description: 'Machine learning platform for business intelligence and predictive analytics',
    client: 'HealthTech Innovations',
    status: 'active',
    priority: 'critical',
    progress: 94,
    startDate: '2024-10-01',
    endDate: '2025-02-15',
    budget: 100000,
    spent: 90000,
    team: ['David Kim', 'Lisa Rodriguez', 'Tom Wilson'],
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
    milestones: [
      {
        id: '1',
        name: 'ML Model Development',
        description: 'Core machine learning algorithms implemented',
        dueDate: '2024-12-15',
        status: 'completed',
        progress: 100,
        assignee: 'David Kim'
      },
      {
        id: '2',
        name: 'Frontend Dashboard',
        description: 'User interface for data visualization',
        dueDate: '2025-01-30',
        status: 'in-progress',
        progress: 90,
        assignee: 'Lisa Rodriguez'
      }
    ],
    risks: [
      {
        id: '1',
        title: 'Data Quality Issues',
        description: 'Inconsistent data formats may affect model accuracy',
        probability: 'high',
        impact: 'medium',
        mitigation: 'Data preprocessing pipeline and validation',
        status: 'mitigated'
      }
    ],
    lastUpdated: '2025-01-27'
  },
  {
    id: '3',
    name: 'Mobile App Development',
    description: 'Cross-platform mobile application for fitness tracking and wellness management',
    client: 'GreenEnergy Corp',
    status: 'on-hold',
    priority: 'medium',
    progress: 39,
    startDate: '2024-11-01',
    endDate: '2025-05-31',
    budget: 75000,
    spent: 18750,
    team: ['Alex Thompson', 'Emily Watson'],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    milestones: [
      {
        id: '1',
        name: 'App Architecture',
        description: 'Core app structure and navigation',
        dueDate: '2024-12-01',
        status: 'completed',
        progress: 100,
        assignee: 'Alex Thompson'
      },
      {
        id: '2',
        name: 'Core Features',
        description: 'Basic fitness tracking functionality',
        dueDate: '2025-01-31',
        status: 'overdue',
        progress: 60,
        assignee: 'Emily Watson'
      }
    ],
    risks: [
      {
        id: '1',
        title: 'Client Requirements Changes',
        description: 'Frequent changes in requirements may impact timeline',
        probability: 'high',
        impact: 'high',
        mitigation: 'Regular client communication and change management',
        status: 'open'
      }
    ],
    lastUpdated: '2025-01-20'
  }
];

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Senior Frontend Developer',
    avatar: 'JS',
    availability: 85,
    currentProjects: ['E-commerce Platform Redesign'],
    skills: ['React', 'TypeScript', 'Next.js', 'UI/UX']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    avatar: 'SC',
    availability: 90,
    currentProjects: ['E-commerce Platform Redesign'],
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research']
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Backend Developer',
    avatar: 'MJ',
    availability: 75,
    currentProjects: ['E-commerce Platform Redesign'],
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS']
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Data Scientist',
    avatar: 'DK',
    availability: 80,
    currentProjects: ['AI-Powered Analytics Platform'],
    skills: ['Python', 'TensorFlow', 'SQL', 'Machine Learning']
  }
];

const statusColors = {
  'planning': 'from-gray-500 to-gray-600',
  'active': 'from-green-500 to-emerald-500',
  'on-hold': 'from-yellow-500 to-orange-500',
  'completed': 'from-blue-500 to-cyan-500',
  'cancelled': 'from-red-500 to-pink-500'
};

const priorityColors = {
  'low': 'bg-gray-500',
  'medium': 'bg-yellow-500',
  'high': 'bg-orange-500',
  'critical': 'bg-red-500'
};

const milestoneStatusColors = {
  'pending': 'from-gray-500 to-gray-600',
  'in-progress': 'from-yellow-500 to-orange-500',
  'completed': 'from-green-500 to-emerald-500',
  'overdue': 'from-red-500 to-pink-500'
};

const riskImpactColors = {
  'low': 'bg-gray-500',
  'medium': 'bg-yellow-500',
  'high': 'bg-red-500'
};

const AdvancedProjectHub: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'projects' | 'team' | 'analytics'>('overview');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || project.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'on-hold':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case 'cancelled':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'from-green-500 to-emerald-500';
    if (progress >= 60) return 'from-yellow-500 to-orange-500';
    if (progress >= 40) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-pink-500';
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
            Project Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive project management hub with advanced tracking, team collaboration, 
            milestone management, and risk assessment capabilities.
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
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+2</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{projects.length}</h3>
            <p className="text-gray-400 text-sm">Active Projects</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+15%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{teamMembers.length}</h3>
            <p className="text-gray-400 text-sm">Team Members</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">$225K</h3>
            <p className="text-gray-400 text-sm">Total Budget</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">78%</h3>
            <p className="text-gray-400 text-sm">Avg Progress</p>
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
          {(['overview', 'projects', 'team', 'analytics'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Target className="w-4 h-4 inline mr-2" />}
              {view === 'projects' && <FolderOpen className="w-4 h-4 inline mr-2" />}
              {view === 'team' && <Users className="w-4 h-4 inline mr-2" />}
              {view === 'analytics' && <BarChart3 className="w-4 h-4 inline mr-2" />}
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
                placeholder="Search projects, clients, or team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="planning">Planning</option>
              <option value="active">Active</option>
              <option value="on-hold">On Hold</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
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
              <Plus className="w-4 h-4" />
              New Project
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
                className="space-y-6"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[project.status]} rounded-full`} />
                          <h4 className="text-white font-semibold">{project.name}</h4>
                          <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[project.status]} rounded-full text-white text-xs font-medium`}>
                            {project.status}
                          </div>
                          <div className={`w-3 h-3 ${priorityColors[project.priority]} rounded-full`} />
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        {getStatusIcon(project.status)}
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{project.progress}%</div>
                          <div className="text-gray-400 text-sm">Progress</div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                        <span>Project Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${getProgressColor(project.progress)} rounded-full transition-all duration-300`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Client</div>
                        <div className="text-white font-medium">{project.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Team</div>
                        <div className="text-white font-medium">{project.team.length} members</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Budget</div>
                        <div className="text-white font-medium">${project.budget.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Milestones Preview */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Recent Milestones</div>
                      <div className="space-y-2">
                        {project.milestones.slice(0, 2).map((milestone) => (
                          <div key={milestone.id} className="flex items-center gap-3">
                            <div className={`w-3 h-3 bg-gradient-to-r ${milestoneStatusColors[milestone.status]} rounded-full`} />
                            <span className="text-gray-300 text-sm">{milestone.name}</span>
                            <span className="text-gray-400 text-xs">{milestone.progress}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-700/50">
                      <span>Start: {project.startDate}</span>
                      <span>End: {project.endDate}</span>
                      <span>Updated: {project.lastUpdated}</span>
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
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
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
                        <div className="text-white font-bold text-lg">{member.availability}%</div>
                        <div className="text-gray-400 text-sm">Availability</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Current Projects</div>
                      <div className="flex flex-wrap gap-2">
                        {member.currentProjects.map((project, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {skill}
                          </span>
                        ))}
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
              Ready to Optimize Your Project Management?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you streamline project delivery, enhance team collaboration, 
              and achieve better project outcomes with our advanced project hub.
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
    </section>
  );
};

export default AdvancedProjectHub;