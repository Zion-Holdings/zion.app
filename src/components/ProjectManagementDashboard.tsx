import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Users, CheckCircle, Clock, AlertTriangle, TrendingUp, BarChart3, Plus, Filter, Search, MoreVertical, Edit, Trash2, Eye, X } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  startDate: string;
  endDate: string;
  team: string[];
  budget: number;
  spent: number;
  tasks: Task[];
}

interface Task {
  id: string;
  name: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  assignee: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedHours: number;
  actualHours: number;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'AI-Powered E-commerce Platform',
    description: 'Next-generation e-commerce solution with AI recommendations',
    status: 'in-progress',
    priority: 'high',
    progress: 65,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    team: ['John Smith', 'Sarah Johnson', 'Mike Chen'],
    budget: 150000,
    spent: 97500,
    tasks: [
      { id: '1', name: 'Frontend Development', status: 'completed', assignee: 'John Smith', dueDate: '2024-03-15', priority: 'high', estimatedHours: 80, actualHours: 75 },
      { id: '2', name: 'Backend API', status: 'in-progress', assignee: 'Sarah Johnson', dueDate: '2024-04-30', priority: 'high', estimatedHours: 120, actualHours: 85 },
      { id: '3', name: 'AI Integration', status: 'todo', assignee: 'Mike Chen', dueDate: '2024-05-15', priority: 'medium', estimatedHours: 100, actualHours: 0 }
    ]
  },
  {
    id: '2',
    name: 'Blockchain Supply Chain Tracker',
    description: 'Transparent supply chain tracking using blockchain',
    status: 'planning',
    priority: 'critical',
    progress: 25,
    startDate: '2024-03-01',
    endDate: '2024-08-31',
    team: ['Emily Davis', 'Alex Rodriguez'],
    budget: 200000,
    spent: 50000,
    tasks: [
      { id: '4', name: 'Smart Contract Development', status: 'in-progress', assignee: 'Emily Davis', dueDate: '2024-04-15', priority: 'critical', estimatedHours: 150, actualHours: 60 },
      { id: '5', name: 'Frontend Interface', status: 'todo', assignee: 'Alex Rodriguez', dueDate: '2024-05-30', priority: 'high', estimatedHours: 90, actualHours: 0 }
    ]
  },
  {
    id: '3',
    name: 'Mobile Banking App',
    description: 'Secure mobile banking with biometric authentication',
    status: 'review',
    priority: 'high',
    progress: 90,
    startDate: '2024-02-01',
    endDate: '2024-04-30',
    team: ['Lisa Wang', 'David Kim'],
    budget: 120000,
    spent: 108000,
    tasks: [
      { id: '6', name: 'Core Banking Features', status: 'completed', assignee: 'Lisa Wang', dueDate: '2024-03-30', priority: 'high', estimatedHours: 200, actualHours: 190 },
      { id: '7', name: 'Security Testing', status: 'review', assignee: 'David Kim', dueDate: '2024-04-15', priority: 'critical', estimatedHours: 40, actualHours: 35 }
    ]
  }
];

const statusColors = {
  'planning': 'bg-zion-blue text-white',
  'in-progress': 'bg-zion-cyan text-white',
  'review': 'bg-zion-gold text-white',
  'completed': 'bg-zion-emerald text-white',
  'on-hold': 'bg-zion-slate text-white'
};

const priorityColors = {
  'low': 'bg-zion-emerald text-white',
  'medium': 'bg-zion-gold text-white',
  'high': 'bg-zion-orange text-white',
  'critical': 'bg-red-500 text-white'
};

export function ProjectManagementDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'gantt'>('grid');

  const filteredProjects = mockProjects.filter(project => {
    const statusMatch = filterStatus === 'all' || project.status === filterStatus;
    const priorityMatch = filterPriority === 'all' || project.priority === filterPriority;
    const searchMatch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return statusMatch && priorityMatch && searchMatch;
  });

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'planning': return <Calendar className="w-4 h-4" />;
      case 'in-progress': return <TrendingUp className="w-4 h-4" />;
      case 'review': return <Eye className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'on-hold': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-zion-emerald';
    if (progress >= 60) return 'bg-zion-cyan';
    if (progress >= 40) return 'bg-zion-gold';
    if (progress >= 20) return 'bg-zion-orange';
    return 'bg-red-500';
  };

  const calculateProjectHealth = (project: Project) => {
    const overdueTasks = project.tasks.filter(task => 
      new Date(task.dueDate) < new Date() && task.status !== 'completed'
    ).length;
    const totalTasks = project.tasks.length;
    const budgetUtilization = (project.spent / project.budget) * 100;
    
    if (overdueTasks > 0 || budgetUtilization > 90) return 'critical';
    if (overdueTasks > 0 || budgetUtilization > 75) return 'warning';
    return 'healthy';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-36 p-3 bg-zion-gold hover:bg-zion-orange text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="Show Project Management Dashboard"
      >
        <BarChart3 className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-zion-slate-light bg-gradient-to-r from-zion-gold/10 to-zion-orange/10">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-zion-gold" />
          <h2 className="text-2xl font-bold text-zion-slate">Project Management Dashboard</h2>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsVisible(false)}
            className="text-zion-slate-light hover:text-zion-slate transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-6 overflow-y-auto h-full">
        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-gold focus:border-transparent"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-gold focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="planning">Planning</option>
              <option value="in-progress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
            
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-gold focus:border-transparent"
            >
              <option value="all">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid' ? 'bg-zion-gold text-white' : 'bg-zion-slate-light/20 text-zion-slate'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list' ? 'bg-zion-gold text-white' : 'bg-zion-slate-light/20 text-zion-slate'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('gantt')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'gantt' ? 'bg-zion-gold text-white' : 'bg-zion-slate-light/20 text-zion-slate'
              }`}
            >
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-zion-slate mb-2">{project.name}</h3>
                    <p className="text-sm text-zion-slate-light line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${statusColors[project.status]}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${priorityColors[project.priority]}`}>
                      {project.priority}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">Progress</span>
                    <span className="text-sm font-medium text-zion-slate">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{project.team.length}</div>
                    <div className="text-xs text-zion-slate-light">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-emerald">{project.tasks.length}</div>
                    <div className="text-xs text-zion-slate-light">Total Tasks</div>
                  </div>
                </div>

                {/* Budget Info */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-slate-light">Budget</span>
                  <span className="font-medium text-zion-slate">
                    ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                  </span>
                </div>

                {/* Timeline */}
                <div className="mt-4 pt-4 border-t border-zion-slate-light">
                  <div className="flex items-center gap-2 text-xs text-zion-slate-light">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Health Indicator */}
                <div className="mt-3 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    calculateProjectHealth(project) === 'healthy' ? 'bg-zion-emerald' :
                    calculateProjectHealth(project) === 'warning' ? 'bg-zion-gold' : 'bg-red-500'
                  }`}></div>
                  <span className="text-xs text-zion-slate-light capitalize">
                    {calculateProjectHealth(project)} project health
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zion-slate-light/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Team</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Budget</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Timeline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zion-slate-light">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-zion-slate-light/5">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-zion-slate">{project.name}</div>
                          <div className="text-sm text-zion-slate-light">{project.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[project.status]}`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-zion-slate-light/20 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-zion-slate">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-zion-slate-light" />
                          <span className="text-sm text-zion-slate">{project.team.length}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-zion-slate">
                          ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-zion-slate-light">
                          {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="text-zion-cyan hover:text-zion-cyan-light">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-zion-gold hover:text-zion-orange">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-500 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gantt View */}
        {viewMode === 'gantt' && (
          <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
            <h3 className="text-lg font-semibold text-zion-slate mb-4">Project Timeline</h3>
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <div key={project.id} className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-48 text-sm font-medium text-zion-slate">{project.name}</div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-zion-slate-light/20 rounded-lg relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full rounded-lg transition-all duration-500 ${
                            project.status === 'completed' ? 'bg-zion-emerald' :
                            project.status === 'in-progress' ? 'bg-zion-cyan' :
                            project.status === 'review' ? 'bg-zion-gold' :
                            project.status === 'planning' ? 'bg-zion-blue' : 'bg-zion-slate'
                          }`}
                          style={{
                            width: `${project.progress}%`,
                            left: `${((new Date(project.startDate).getTime() - new Date('2024-01-01').getTime()) / (new Date('2024-12-31').getTime() - new Date('2024-01-01').getTime())) * 100}%`
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zion-slate rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-zion-slate-light">
              <h2 className="text-2xl font-bold text-zion-slate">{selectedProject.name}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-zion-slate-light hover:text-zion-slate transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-zion-slate mb-3">Project Details</h3>
                  <p className="text-zion-slate-light mb-4">{selectedProject.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Status:</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[selectedProject.status]}`}>
                        {selectedProject.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Priority:</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${priorityColors[selectedProject.priority]}`}>
                        {selectedProject.priority}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Progress:</span>
                      <span className="text-zion-slate font-medium">{selectedProject.progress}%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-zion-slate mb-3">Tasks</h3>
                  <div className="space-y-3">
                    {selectedProject.tasks.map((task) => (
                      <div key={task.id} className="bg-zion-slate-light/5 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-zion-slate">{task.name}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            task.status === 'completed' ? 'bg-zion-emerald text-white' :
                            task.status === 'in-progress' ? 'bg-zion-cyan text-white' :
                            task.status === 'review' ? 'bg-zion-gold text-white' : 'bg-zion-slate text-white'
                          }`}>
                            {task.status.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-zion-slate-light">
                          <span>{task.assignee}</span>
                          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}