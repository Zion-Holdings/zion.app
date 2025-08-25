import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { 
  Calendar, 
  Users, 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  Filter,
  Search,
  Grid3X3,
  List,
  Kanban,
  BarChart3,
  MoreVertical,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  startDate: Date;
  endDate: Date;
  budget: number;
  spent: number;
  team: TeamMember[];
  tasks: Task[];
  client: string;
  category: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  assignee: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
}

interface ProjectManagementDashboardProps {
  className?: string;
}

export const ProjectManagementDashboard: React.FC<ProjectManagementDashboardProps> = ({
  className = ''
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'kanban'>('grid');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockProjects: Project[] = [
      {
        id: '1',
        name: 'Zion AI Platform Redesign',
        description: 'Complete redesign of the Zion AI platform with modern UI/UX and enhanced functionality',
        status: 'active',
        priority: 'high',
        progress: 75,
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-06-30'),
        budget: 150000,
        spent: 112500,
        client: 'Zion Tech Group',
        category: 'Web Development',
        team: [
          { id: '1', name: 'Sarah Johnson', role: 'Project Manager', avatar: 'SJ', status: 'online' },
          { id: '2', name: 'Mike Chen', role: 'Frontend Developer', avatar: 'MC', status: 'busy' },
          { id: '3', name: 'Lisa Rodriguez', role: 'UI/UX Designer', avatar: 'LR', status: 'online' }
        ],
        tasks: [
          { id: '1', title: 'Design System Creation', description: 'Create comprehensive design system', status: 'completed', assignee: 'Lisa Rodriguez', dueDate: new Date('2024-03-15'), priority: 'high' },
          { id: '2', title: 'Frontend Implementation', description: 'Implement new UI components', status: 'in-progress', assignee: 'Mike Chen', dueDate: new Date('2024-04-30'), priority: 'high' },
          { id: '3', title: 'User Testing', description: 'Conduct user testing sessions', status: 'todo', assignee: 'Sarah Johnson', dueDate: new Date('2024-05-15'), priority: 'medium' }
        ]
      },
      {
        id: '2',
        name: 'Cybersecurity Infrastructure Upgrade',
        description: 'Upgrade security infrastructure with latest threat detection and prevention systems',
        status: 'planning',
        priority: 'urgent',
        progress: 25,
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-08-31'),
        budget: 200000,
        spent: 50000,
        client: 'Enterprise Client A',
        category: 'Cybersecurity',
        team: [
          { id: '4', name: 'David Kim', role: 'Security Architect', avatar: 'DK', status: 'online' },
          { id: '5', name: 'Emma Wilson', role: 'Network Engineer', avatar: 'EW', status: 'offline' }
        ],
        tasks: [
          { id: '4', title: 'Security Assessment', description: 'Conduct comprehensive security audit', status: 'completed', assignee: 'David Kim', dueDate: new Date('2024-03-15'), priority: 'urgent' },
          { id: '5', title: 'Infrastructure Planning', description: 'Plan new security infrastructure', status: 'in-progress', assignee: 'Emma Wilson', dueDate: new Date('2024-04-15'), priority: 'high' }
        ]
      },
      {
        id: '3',
        name: 'Cloud Migration Project',
        description: 'Migrate legacy systems to cloud infrastructure for improved scalability and performance',
        status: 'active',
        priority: 'medium',
        progress: 60,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-07-31'),
        budget: 300000,
        spent: 180000,
        client: 'Enterprise Client B',
        category: 'Cloud Services',
        team: [
          { id: '6', name: 'Alex Thompson', role: 'Cloud Architect', avatar: 'AT', status: 'online' },
          { id: '7', name: 'Rachel Green', role: 'DevOps Engineer', avatar: 'RG', status: 'busy' },
          { id: '8', name: 'Tom Martinez', role: 'Database Administrator', avatar: 'TM', status: 'online' }
        ],
        tasks: [
          { id: '6', title: 'Database Migration', description: 'Migrate databases to cloud', status: 'completed', assignee: 'Tom Martinez', dueDate: new Date('2024-03-30'), priority: 'high' },
          { id: '7', title: 'Application Deployment', description: 'Deploy applications to cloud', status: 'in-progress', assignee: 'Rachel Green', dueDate: new Date('2024-05-15'), priority: 'medium' }
        ]
      }
    ];
    setProjects(mockProjects);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 text-gray-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredProjects = projects.filter(project => {
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || project.priority === filterPriority;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);

  const renderProjectCard = (project: Project) => (
    <Card key={project.id} className="project-card hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
              {project.name}
            </CardTitle>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {project.description}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
              {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Client:</span>
              <p className="font-medium">{project.client}</p>
            </div>
            <div>
              <span className="text-gray-500">Category:</span>
              <p className="font-medium">{project.category}</p>
            </div>
            <div>
              <span className="text-gray-500">Budget:</span>
              <p className="font-medium">${project.budget.toLocaleString()}</p>
            </div>
            <div>
              <span className="text-gray-500">Spent:</span>
              <p className="font-medium">${project.spent.toLocaleString()}</p>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <span className="text-sm text-gray-500">Team:</span>
            <div className="flex items-center space-x-2 mt-2">
              {project.team.slice(0, 3).map(member => (
                <div key={member.id} className="flex items-center space-x-1">
                  <div className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium ${
                    member.status === 'online' ? 'ring-2 ring-green-400' : 
                    member.status === 'busy' ? 'ring-2 ring-yellow-400' : ''
                  }`}>
                    {member.avatar}
                  </div>
                </div>
              ))}
              {project.team.length > 3 && (
                <span className="text-xs text-gray-500">+{project.team.length - 3} more</span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>{project.endDate.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderProjectList = (project: Project) => (
    <div key={project.id} className="project-list-item bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-sm text-gray-500">Progress</div>
            <div className="text-lg font-semibold">{project.progress}%</div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-500">Budget</div>
            <div className="text-lg font-semibold">${project.budget.toLocaleString()}</div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-500">Team</div>
            <div className="text-lg font-semibold">{project.team.length}</div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(project.priority)}`}>
              {project.priority}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Edit className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`project-management-dashboard ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Management</h1>
        <p className="text-gray-600">Track and manage all your projects in one place</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{totalProjects}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">{activeProjects}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{completedProjects}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-gray-900">${totalBudget.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="planning">Planning</option>
            <option value="active">Active</option>
            <option value="on-hold">On Hold</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'kanban' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Kanban className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={() => setShowNewProjectModal(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* Projects Display */}
      <div className="space-y-6">
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(renderProjectCard)}
          </div>
        )}
        
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredProjects.map(renderProjectList)}
          </div>
        )}
        
        {viewMode === 'kanban' && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['planning', 'active', 'on-hold', 'completed', 'cancelled'].map(status => (
              <div key={status} className="space-y-4">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 capitalize mb-2">{status}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {filteredProjects.filter(p => p.status === status).length}
                  </span>
                </div>
                <div className="space-y-3">
                  {filteredProjects
                    .filter(project => project.status === status)
                    .map(project => (
                      <div key={project.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-medium text-gray-900 mb-2">{project.name}</h4>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>{project.progress}%</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(project.priority)}`}>
                            {project.priority}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
          <button
            onClick={() => setShowNewProjectModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create New Project
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectManagementDashboard;