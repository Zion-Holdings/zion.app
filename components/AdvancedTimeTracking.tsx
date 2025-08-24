import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Users, 
  Play, 
  Pause, 
  Square,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Calendar as CalendarIcon,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings,
  Bell,
  Star,
  Target,
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
  CheckCircle,
  AlertCircle,
  DollarSign,
  ArrowRight,
  Download,
  Upload,
  RefreshCw,
  MoreHorizontal
} from 'lucide-react';

interface TimeEntry {
  id: string;
  project: string;
  task: string;
  description: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  billable: boolean;
  rate: number;
  assignee: string;
  status: 'active' | 'paused' | 'completed';
  tags: string[];
}

interface Resource {
  id: string;
  name: string;
  role: string;
  availability: number; // percentage
  currentProject: string;
  skills: string[];
  hourlyRate: number;
  totalHours: number;
  utilization: number; // percentage
}

interface Project {
  id: string;
  name: string;
  client: string;
  budget: number;
  spent: number;
  estimatedHours: number;
  actualHours: number;
  team: string[];
  status: 'active' | 'completed' | 'on-hold';
}

const timeEntries: TimeEntry[] = [
  {
    id: '1',
    project: 'E-commerce Platform Redesign',
    task: 'Frontend Development',
    description: 'Building responsive components and implementing user interface',
    startTime: '2025-01-27 09:00',
    endTime: '2025-01-27 12:30',
    duration: 210,
    billable: true,
    rate: 75,
    assignee: 'John Smith',
    status: 'completed',
    tags: ['React', 'UI/UX', 'Frontend']
  },
  {
    id: '2',
    project: 'Mobile App Development',
    task: 'API Integration',
    description: 'Integrating third-party APIs and backend services',
    startTime: '2025-01-27 13:00',
    endTime: '2025-01-27 17:00',
    duration: 240,
    billable: true,
    rate: 80,
    assignee: 'Mike Johnson',
    status: 'completed',
    tags: ['API', 'Backend', 'Integration']
  },
  {
    id: '3',
    project: 'AI-Powered Analytics Platform',
    task: 'Data Processing',
    description: 'Implementing data preprocessing and ML pipeline',
    startTime: '2025-01-27 08:30',
    endTime: '2025-01-27 11:45',
    duration: 195,
    billable: true,
    rate: 90,
    assignee: 'David Kim',
    status: 'completed',
    tags: ['AI/ML', 'Data', 'Python']
  },
  {
    id: '4',
    project: 'E-commerce Platform Redesign',
    task: 'Design Review',
    description: 'Reviewing and approving design mockups with client',
    startTime: '2025-01-27 14:00',
    endTime: '2025-01-27 15:30',
    duration: 90,
    billable: true,
    rate: 75,
    assignee: 'Sarah Chen',
    status: 'completed',
    tags: ['Design', 'Review', 'Client']
  }
];

const resources: Resource[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Senior Frontend Developer',
    availability: 85,
    currentProject: 'E-commerce Platform Redesign',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    hourlyRate: 75,
    totalHours: 156,
    utilization: 78
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    availability: 90,
    currentProject: 'E-commerce Platform Redesign',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    hourlyRate: 70,
    totalHours: 142,
    utilization: 82
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Backend Developer',
    availability: 75,
    currentProject: 'Mobile App Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
    hourlyRate: 80,
    totalHours: 168,
    utilization: 75
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Data Scientist',
    availability: 80,
    currentProject: 'AI-Powered Analytics Platform',
    skills: ['Python', 'TensorFlow', 'SQL', 'Machine Learning'],
    hourlyRate: 90,
    totalHours: 134,
    utilization: 85
  }
];

const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    client: 'TechFlow Solutions',
    budget: 50000,
    spent: 32500,
    estimatedHours: 400,
    actualHours: 312,
    team: ['John Smith', 'Sarah Chen', 'Mike Johnson'],
    status: 'active'
  },
  {
    id: '2',
    name: 'Mobile App Development',
    client: 'GreenEnergy Corp',
    budget: 75000,
    spent: 18750,
    estimatedHours: 600,
    actualHours: 234,
    team: ['Alex Thompson', 'Emily Watson'],
    status: 'active'
  },
  {
    id: '3',
    name: 'AI-Powered Analytics Platform',
    client: 'HealthTech Innovations',
    budget: 100000,
    spent: 90000,
    estimatedHours: 800,
    actualHours: 756,
    team: ['David Kim', 'Lisa Rodriguez', 'Tom Wilson'],
    status: 'active'
  }
];

const AdvancedTimeTracking: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'time' | 'resources' | 'projects'>('time');
  const [selectedProject, setSelectedProject] = useState<string>('all');
  const [selectedAssignee, setSelectedAssignee] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentTimer, setCurrentTimer] = useState<TimeEntry | null>(null);

  const filteredTimeEntries = timeEntries.filter(entry => {
    const matchesProject = selectedProject === 'all' || entry.project === selectedProject;
    const matchesAssignee = selectedAssignee === 'all' || entry.assignee === selectedAssignee;
    const matchesSearch = entry.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesProject && matchesAssignee && matchesSearch;
  });

  const filteredResources = resources.filter(resource => {
    return resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           resource.role.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredProjects = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.client.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const totalBillableHours = timeEntries.reduce((total, entry) => {
    return total + (entry.billable ? entry.duration / 60 : 0);
  }, 0);

  const totalBillableAmount = timeEntries.reduce((total, entry) => {
    return total + (entry.billable ? (entry.duration / 60) * entry.rate : 0);
  }, 0);

  const startTimer = () => {
    const newEntry: TimeEntry = {
      id: Date.now().toString(),
      project: 'New Task',
      task: 'Untitled Task',
      description: '',
      startTime: new Date().toISOString(),
      endTime: '',
      duration: 0,
      billable: true,
      rate: 75,
      assignee: 'Current User',
      status: 'active',
      tags: []
    };
    setCurrentTimer(newEntry);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    if (currentTimer) {
      setCurrentTimer(null);
      setIsTimerRunning(false);
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
            Time Tracking & Resource Management
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive time tracking, resource allocation, and project efficiency monitoring. 
            Track billable hours, manage team resources, and optimize project delivery.
          </p>
        </motion.div>

        {/* Timer Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex items-center gap-4">
            {!isTimerRunning ? (
              <motion.button
                onClick={startTimer}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Start Timer
              </motion.button>
            ) : (
              <motion.button
                onClick={stopTimer}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Square className="w-5 h-5" />
                Stop Timer
              </motion.button>
            )}
            
            {isTimerRunning && currentTimer && (
              <div className="flex items-center gap-4 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Timer className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Timer Running</span>
                <span className="text-gray-400 text-sm">{currentTimer.project}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Export
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              New Entry
            </motion.button>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{totalBillableHours.toFixed(1)}h</h3>
            <p className="text-gray-400 text-sm">Total Billable Hours</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">${totalBillableAmount.toFixed(0)}</h3>
            <p className="text-gray-400 text-sm">Total Billable Amount</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{resources.length}</h3>
            <p className="text-gray-400 text-sm">Active Resources</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{projects.length}</h3>
            <p className="text-gray-400 text-sm">Active Projects</p>
          </div>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1 max-w-md mx-auto"
        >
          {(['time', 'resources', 'projects'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'time' && <Clock className="w-4 h-4 inline mr-2" />}
              {view === 'resources' && <Users className="w-4 h-4 inline mr-2" />}
              {view === 'projects' && <Activity className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search entries, resources, or projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            {selectedView === 'time' && (
              <>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                >
                  <option value="all">All Projects</option>
                  {projects.map(project => (
                    <option key={project.id} value={project.name}>{project.name}</option>
                  ))}
                </select>
                
                <select
                  value={selectedAssignee}
                  onChange={(e) => setSelectedAssignee(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                >
                  <option value="all">All Assignees</option>
                  {resources.map(resource => (
                    <option key={resource.id} value={resource.name}>{resource.name}</option>
                  ))}
                </select>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'time' && (
            <motion.div
              key="time"
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
                className="space-y-4"
              >
                {filteredTimeEntries.map((entry) => (
                  <motion.div
                    key={entry.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{entry.task}</h3>
                        <p className="text-gray-400 text-sm mb-3">{entry.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {new Date(entry.startTime).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {(entry.duration / 60).toFixed(1)}h
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {entry.assignee}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">${((entry.duration / 60) * entry.rate).toFixed(0)}</div>
                        <div className="text-gray-400 text-sm">${entry.rate}/h</div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                          entry.billable ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {entry.billable ? 'Billable' : 'Non-billable'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">{entry.project}</div>
                      <div className="flex items-center gap-2">
                        {entry.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'resources' && (
            <motion.div
              key="resources"
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
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{resource.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{resource.role}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span>${resource.hourlyRate}/h</span>
                          <span>{resource.totalHours}h total</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">{resource.utilization}%</div>
                        <div className="text-gray-400 text-sm">Utilization</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-400">Availability</span>
                        <span className="text-white">{resource.availability}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${resource.availability}%` }}
                          transition={{ delay: 0.5, duration: 1 }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {resource.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-sm text-gray-400">
                      Current Project: <span className="text-white">{resource.currentProject}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'projects' && (
            <motion.div
              key="projects"
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
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{project.client}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-white font-bold text-lg">${(project.budget / 1000).toFixed(0)}K</div>
                        <div className="text-gray-400 text-xs">Budget</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-white font-bold text-lg">${(project.spent / 1000).toFixed(1)}K</div>
                        <div className="text-gray-400 text-xs">Spent</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-400">Hours Progress</span>
                        <span className="text-white">{project.actualHours}/{project.estimatedHours}h</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(project.actualHours / project.estimatedHours) * 100}%` }}
                          transition={{ delay: 0.5, duration: 1 }}
                        />
                      </div>
                    </div>

                    <div className="text-sm text-gray-400">
                      Team: <span className="text-white">{project.team.join(', ')}</span>
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
              Ready to Optimize Your Project Efficiency?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you track time, manage resources, and deliver 
              projects on time and within budget with our comprehensive management tools.
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

export default AdvancedTimeTracking;