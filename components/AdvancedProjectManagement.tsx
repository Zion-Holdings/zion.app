import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  BarChart3,
  Kanban,
  FileText,
  MessageSquare,
  Upload,
  Download,
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
  Rocket
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  startDate: string;
  endDate: string;
  team: string[];
  budget: number;
  spent: number;
  description: string;
  technologies: string[];
  milestones: Milestone[];
  tasks: Task[];
}

interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  progress: number;
}

interface Task {
  id: string;
  name: string;
  assignee: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate: string;
  estimatedHours: number;
  actualHours: number;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    client: 'TechFlow Solutions',
    status: 'in-progress',
    priority: 'high',
    progress: 65,
    startDate: '2025-01-15',
    endDate: '2025-03-15',
    team: ['John Smith', 'Sarah Chen', 'Mike Johnson'],
    budget: 50000,
    spent: 32500,
    description: 'Complete redesign of the e-commerce platform with modern UI/UX, improved performance, and enhanced user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    milestones: [
      { id: '1', name: 'Design Phase', description: 'Complete UI/UX design', dueDate: '2025-01-30', status: 'completed', progress: 100 },
      { id: '2', name: 'Development Phase', description: 'Core functionality development', dueDate: '2025-02-28', status: 'in-progress', progress: 65 },
      { id: '3', name: 'Testing Phase', description: 'Quality assurance and testing', dueDate: '2025-03-10', status: 'pending', progress: 0 },
      { id: '4', name: 'Deployment', description: 'Production deployment', dueDate: '2025-03-15', status: 'pending', progress: 0 }
    ],
    tasks: [
      { id: '1', name: 'Design System Setup', assignee: 'Sarah Chen', status: 'completed', priority: 'high', dueDate: '2025-01-25', estimatedHours: 16, actualHours: 18 },
      { id: '2', name: 'Component Library', assignee: 'John Smith', status: 'in-progress', priority: 'high', dueDate: '2025-02-05', estimatedHours: 24, actualHours: 20 },
      { id: '3', name: 'API Integration', assignee: 'Mike Johnson', status: 'in-progress', priority: 'medium', dueDate: '2025-02-15', estimatedHours: 32, actualHours: 28 },
      { id: '4', name: 'Performance Optimization', assignee: 'John Smith', status: 'todo', priority: 'medium', dueDate: '2025-02-25', estimatedHours: 20, actualHours: 0 }
    ]
  },
  {
    id: '2',
    name: 'Mobile App Development',
    client: 'GreenEnergy Corp',
    status: 'planning',
    priority: 'medium',
    progress: 25,
    startDate: '2025-02-01',
    endDate: '2025-05-01',
    team: ['Alex Thompson', 'Emily Watson'],
    budget: 75000,
    spent: 18750,
    description: 'Cross-platform mobile application for energy monitoring and management with real-time data visualization.',
    technologies: ['React Native', 'Python', 'PostgreSQL', 'Firebase'],
    milestones: [
      { id: '1', name: 'Requirements Analysis', description: 'Gather and analyze requirements', dueDate: '2025-02-15', status: 'completed', progress: 100 },
      { id: '2', name: 'Architecture Design', description: 'System architecture and database design', dueDate: '2025-02-28', status: 'in-progress', progress: 25 },
      { id: '3', name: 'Development', description: 'Core app development', dueDate: '2025-04-15', status: 'pending', progress: 0 },
      { id: '4', name: 'Testing & Deployment', description: 'Testing and app store deployment', dueDate: '2025-05-01', status: 'pending', progress: 0 }
    ],
    tasks: [
      { id: '1', name: 'Requirements Documentation', assignee: 'Emily Watson', status: 'completed', priority: 'high', dueDate: '2025-02-15', estimatedHours: 20, actualHours: 22 },
      { id: '2', name: 'Database Schema Design', assignee: 'Alex Thompson', status: 'in-progress', priority: 'high', dueDate: '2025-02-28', estimatedHours: 16, actualHours: 12 },
      { id: '3', name: 'UI/UX Design', assignee: 'Emily Watson', status: 'todo', priority: 'medium', dueDate: '2025-03-10', estimatedHours: 24, actualHours: 0 },
      { id: '4', name: 'API Development', assignee: 'Alex Thompson', status: 'todo', priority: 'medium', dueDate: '2025-03-20', estimatedHours: 32, actualHours: 0 }
    ]
  },
  {
    id: '3',
    name: 'AI-Powered Analytics Platform',
    client: 'HealthTech Innovations',
    status: 'review',
    priority: 'urgent',
    progress: 90,
    startDate: '2024-11-01',
    endDate: '2025-01-31',
    team: ['David Kim', 'Lisa Rodriguez', 'Tom Wilson'],
    budget: 100000,
    spent: 90000,
    description: 'Advanced analytics platform with machine learning capabilities for healthcare data analysis and insights.',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
    milestones: [
      { id: '1', name: 'Research & Development', description: 'AI model research and development', dueDate: '2024-12-15', status: 'completed', progress: 100 },
      { id: '2', name: 'Platform Development', description: 'Core platform development', dueDate: '2025-01-15', status: 'completed', progress: 100 },
      { id: '3', name: 'Testing & Validation', description: 'Comprehensive testing and validation', dueDate: '2025-01-25', status: 'completed', progress: 100 },
      { id: '4', name: 'Final Review', description: 'Client review and approval', dueDate: '2025-01-31', status: 'in-progress', progress: 90 }
    ],
    tasks: [
      { id: '1', name: 'AI Model Training', assignee: 'David Kim', status: 'completed', priority: 'urgent', dueDate: '2024-12-15', estimatedHours: 80, actualHours: 85 },
      { id: '2', name: 'Frontend Development', assignee: 'Lisa Rodriguez', status: 'completed', priority: 'high', dueDate: '2025-01-15', estimatedHours: 60, actualHours: 58 },
      { id: '3', name: 'Backend API', assignee: 'Tom Wilson', status: 'completed', priority: 'high', dueDate: '2025-01-15', estimatedHours: 70, actualHours: 72 },
      { id: '4', name: 'Integration Testing', assignee: 'David Kim', status: 'completed', priority: 'medium', dueDate: '2025-01-25', estimatedHours: 40, actualHours: 38 },
      { id: '5', name: 'Client Demo', assignee: 'Lisa Rodriguez', status: 'in-progress', priority: 'urgent', dueDate: '2025-01-31', estimatedHours: 16, actualHours: 12 }
    ]
  }
];

const statusColors = {
  'planning': 'from-blue-500 to-cyan-500',
  'in-progress': 'from-yellow-500 to-orange-500',
  'review': 'from-purple-500 to-pink-500',
  'completed': 'from-green-500 to-emerald-500',
  'on-hold': 'from-red-500 to-pink-500'
};

const priorityColors = {
  'low': 'text-gray-400',
  'medium': 'text-yellow-400',
  'high': 'text-orange-400',
  'urgent': 'text-red-400'
};

const AdvancedProjectManagement: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || project.priority === selectedPriority;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'planning': return <Calendar className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'review': return <Eye className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'on-hold': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'low': return <Star className="w-4 h-4" />;
      case 'medium': return <Target className="w-4 h-4" />;
      case 'high': return <Zap className="w-4 h-4" />;
      case 'urgent': return <AlertCircle className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
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
            Project Management Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive project tracking, team collaboration, and client communication. 
            Monitor progress, manage resources, and deliver exceptional results on time and within budget.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects or clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="planning">Planning</option>
              <option value="in-progress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
            
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            >
              <option value="all">All Priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Upload className="w-4 h-4" />
              Import
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

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{project.client}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 bg-gradient-to-r ${statusColors[project.status]} rounded-full`} />
                      <span className="text-gray-400 text-xs">{project.status}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${statusColors[project.status]} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-white font-bold text-lg">{project.team.length}</div>
                      <div className="text-gray-400 text-xs">Team Members</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-white font-bold text-lg">${(project.budget / 1000).toFixed(0)}K</div>
                      <div className="text-gray-400 text-xs">Budget</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Status and Priority */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(project.status)}
                      <span className="text-gray-400 capitalize">{project.status}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${priorityColors[project.priority]}`}>
                      {getPriorityIcon(project.priority)}
                      <span className="capitalize">{project.priority}</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-gray-800/30 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Start: {new Date(project.startDate).toLocaleDateString()}</span>
                    <span>End: {new Date(project.endDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group manage your project with our comprehensive 
              project management system and deliver exceptional results.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start New Project
              <Rocket className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                    <p className="text-gray-400 text-lg">{selectedProject.client}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${statusColors[selectedProject.status]} rounded-full text-white text-sm font-medium`}>
                        {selectedProject.status}
                      </div>
                      <div className={`px-3 py-1 bg-gray-800 rounded-full text-white text-sm font-medium ${priorityColors[selectedProject.priority]}`}>
                        {selectedProject.priority}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>

                {/* Project Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-white mb-4">Project Description</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-white font-bold text-2xl">{selectedProject.progress}%</div>
                        <div className="text-gray-400">Progress</div>
                      </div>
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-white font-bold text-2xl">${(selectedProject.spent / 1000).toFixed(1)}K</div>
                        <div className="text-gray-400">Spent of ${(selectedProject.budget / 1000).toFixed(0)}K</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Project Details</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">Start Date</div>
                        <div className="text-white">{new Date(selectedProject.startDate).toLocaleDateString()}</div>
                      </div>
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">End Date</div>
                        <div className="text-white">{new Date(selectedProject.endDate).toLocaleDateString()}</div>
                      </div>
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">Team Size</div>
                        <div className="text-white">{selectedProject.team.length} members</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-6">Milestones</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.milestones.map((milestone) => (
                      <div key={milestone.id} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="text-white font-semibold">{milestone.name}</h5>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {milestone.status}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{milestone.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                          <span className="text-white">{milestone.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${statusColors[selectedProject.status]} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${milestone.progress}%` }}
                            transition={{ delay: 0.5, duration: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tasks */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-6">Tasks</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700/50">
                          <th className="text-left text-gray-400 font-medium py-3">Task</th>
                          <th className="text-left text-gray-400 font-medium py-3">Assignee</th>
                          <th className="text-left text-gray-400 font-medium py-3">Status</th>
                          <th className="text-left text-gray-400 font-medium py-3">Priority</th>
                          <th className="text-left text-gray-400 font-medium py-3">Due Date</th>
                          <th className="text-left text-gray-400 font-medium py-3">Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProject.tasks.map((task) => (
                          <tr key={task.id} className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors duration-300">
                            <td className="py-4">
                              <div className="text-white font-medium">{task.name}</div>
                            </td>
                            <td className="py-4 text-gray-300">{task.assignee}</td>
                            <td className="py-4">
                              <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${
                                task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                task.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                                task.status === 'review' ? 'bg-purple-500/20 text-purple-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                                {task.status}
                              </div>
                            </td>
                            <td className="py-4">
                              <div className={`flex items-center gap-1 ${priorityColors[task.priority]}`}>
                                {getPriorityIcon(task.priority)}
                                <span className="capitalize">{task.priority}</span>
                              </div>
                            </td>
                            <td className="py-4 text-gray-300">{new Date(task.dueDate).toLocaleDateString()}</td>
                            <td className="py-4 text-gray-300">
                              {task.actualHours}/{task.estimatedHours}h
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Team Members</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.team.map((member, index) => (
                      <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                          {member.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-white font-medium">{member}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-700/50">
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Edit className="w-4 h-4" />
                    Edit Project
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Contact Client
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedProjectManagement;