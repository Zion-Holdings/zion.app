import React, { useState, useRef, useEffect } from 'react';
import { 
  Kanban, Brain, Zap, Settings, X, Maximize2, Minimize2, Plus, Search, 
  Filter, Calendar, Clock, CheckCircle, AlertCircle, UserPlus, Lock, Unlock,
  BarChart3, TrendingUp, Target, Activity, Users, FileText, GitBranch, 
  Workflow, Automation, Bot, Sparkles, Target, GanttChart, Milestone,
  Flag, AlertTriangle, Info, Star, Award, Trophy, Rocket, Lightbulb
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'review' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  startDate: string;
  endDate: string;
  team: TeamMember[];
  tasks: Task[];
  aiInsights: AIInsight[];
  automationRules: AutomationRule[];
  createdAt: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  availability: number;
  skills: string[];
  currentTasks: number;
  performance: number;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignee: string;
  estimatedHours: number;
  actualHours: number;
  dependencies: string[];
  tags: string[];
  aiSuggestions: string[];
  createdAt: string;
  dueDate: string;
}

interface AIInsight {
  id: string;
  type: 'optimization' | 'risk' | 'opportunity' | 'efficiency';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  confidence: number;
  recommendations: string[];
  timestamp: string;
}

interface AutomationRule {
  id: string;
  name: string;
  description: string;
  trigger: string;
  conditions: string[];
  actions: string[];
  isActive: boolean;
  lastExecuted: string;
  executionCount: number;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform Redesign',
    description: 'Complete redesign of the company e-commerce platform with modern UI/UX and enhanced performance',
    status: 'active',
    priority: 'high',
    progress: 65,
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    team: [
      {
        id: '1',
        name: 'Sarah Chen',
        role: 'Project Manager',
        avatar: '👩‍💼',
        availability: 90,
        skills: ['Project Management', 'Agile', 'Stakeholder Communication'],
        currentTasks: 3,
        performance: 95
      },
      {
        id: '2',
        name: 'Alex Rodriguez',
        role: 'Frontend Developer',
        avatar: '👨‍💻',
        availability: 85,
        skills: ['React', 'TypeScript', 'UI/UX'],
        currentTasks: 5,
        performance: 88
      }
    ],
    tasks: [
      {
        id: '1',
        title: 'Design System Implementation',
        description: 'Create and implement a comprehensive design system for the new platform',
        status: 'in-progress',
        priority: 'high',
        assignee: 'Alex Rodriguez',
        estimatedHours: 40,
        actualHours: 28,
        dependencies: [],
        tags: ['Design', 'Frontend', 'UI/UX'],
        aiSuggestions: [
          'Consider using Storybook for component documentation',
          'Implement design tokens for consistent theming',
          'Add accessibility guidelines to the design system'
        ],
        createdAt: '2024-01-15',
        dueDate: '2024-02-15'
      }
    ],
    aiInsights: [
      {
        id: '1',
        type: 'optimization',
        title: 'Resource Allocation Optimization',
        description: 'Team member Alex Rodriguez is over-allocated with 5 active tasks. Consider redistributing workload.',
        impact: 'medium',
        confidence: 0.87,
        recommendations: [
          'Reassign 2 tasks to other team members',
          'Extend deadline for non-critical tasks',
          'Consider adding a junior developer to the team'
        ],
        timestamp: '2024-01-20T10:30:00Z'
      }
    ],
    automationRules: [
      {
        id: '1',
        name: 'Task Status Updates',
        description: 'Automatically update task status based on time tracking and completion criteria',
        trigger: 'Daily at 9:00 AM',
        conditions: ['Task is overdue', 'No activity for 3 days'],
        actions: ['Send reminder notification', 'Update priority', 'Notify project manager'],
        isActive: true,
        lastExecuted: '2024-01-20T09:00:00Z',
        executionCount: 15
      }
    ],
    createdAt: '2024-01-01'
  }
];

export function AdvancedAIProjectManagement() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'automation' | 'insights' | 'team'>('overview');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [showAIInsights, setShowAIInsights] = useState(true);
  const [showAutomation, setShowAutomation] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'text-blue-500';
      case 'active': return 'text-green-500';
      case 'review': return 'text-yellow-500';
      case 'completed': return 'text-purple-500';
      case 'on-hold': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-orange-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 z-50"
      >
        <Kanban className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50">
        <div className="flex items-center justify-between p-3 border-b border-zion-slate-light">
          <div className="flex items-center space-x-2">
            <Kanban className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium">AI Project Management</span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 hover:bg-zion-slate-light rounded"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-zion-slate-light rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
      isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
    }`} ref={containerRef}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="flex items-center space-x-3">
          <Kanban className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced AI-Powered Project Management</h2>
            <p className="text-sm text-purple-100">Intelligent project planning, automation & workflow optimization</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-purple-700 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-zion-slate-light/50">
        <div className="flex items-center space-x-4">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-sm"
          >
            <option value="all">All Status</option>
            <option value="planning">Planning</option>
            <option value="active">Active</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-sm"
          >
            <option value="all">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-sm w-64"
            />
            <Search className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowAIInsights(!showAIInsights)}
            className={`p-2 rounded-lg transition-colors ${
              showAIInsights ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Brain className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowAutomation(!showAutomation)}
            className={`p-2 rounded-lg transition-colors ${
              showAutomation ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Automation className="w-4 h-4" />
          </button>
          <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'overview'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <BarChart3 className="w-4 h-4 inline mr-2" />
          Overview
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'projects'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Kanban className="w-4 h-4 inline mr-2" />
          Projects
        </button>
        <button
          onClick={() => setActiveTab('automation')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'automation'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Automation className="w-4 h-4 inline mr-2" />
          Automation
        </button>
        <button
          onClick={() => setActiveTab('insights')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'insights'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Brain className="w-4 h-4 inline mr-2" />
          AI Insights
        </button>
        <button
          onClick={() => setActiveTab('team')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'team'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Users className="w-4 h-4 inline mr-2" />
          Team
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Kanban className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Active Projects</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">8</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">24</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
                    <Automation className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Automations</p>
                    <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">18</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Powered Recommendations */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                <Brain className="w-5 h-5 inline mr-2" />
                AI-Powered Recommendations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-zion-slate p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-purple-900 dark:text-purple-100">Resource Optimization</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Team member Alex Rodriguez is over-allocated. Consider redistributing 2 tasks.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-purple-600 dark:text-purple-400">Confidence: 87%</span>
                    <button className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-zion-slate p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Rocket className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-purple-900 dark:text-purple-100">Workflow Automation</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Automate daily status updates and milestone tracking for active projects.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-purple-600 dark:text-purple-400">Impact: High</span>
                    <button className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <Activity className="w-5 h-5 inline mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Task "Design System Implementation" moved to In Progress
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
                    2 hours ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    New team member Sarah Chen added to E-Commerce Platform project
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
                    1 day ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    AI automation rule "Task Status Updates" executed successfully
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
                    2 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {project.name}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)} bg-opacity-10`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)} bg-opacity-10`}>
                        {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {project.startDate} - {project.endDate}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4 inline mr-1" />
                        {project.team.length} team members
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        <FileText className="w-4 h-4 inline mr-1" />
                        {project.tasks.length} tasks
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-gray-900 dark:text-gray-100 font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Team Members</h5>
                  <div className="flex items-center space-x-2">
                    {project.team.map((member) => (
                      <div key={member.id} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-lg">{member.avatar}</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{member.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                {showAIInsights && project.aiInsights.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Brain className="w-4 h-4 inline mr-1" />
                      AI Insights
                    </h5>
                    <div className="space-y-2">
                      {project.aiInsights.map((insight) => (
                        <div key={insight.id} className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-sm font-medium text-purple-900 dark:text-purple-100">
                              {insight.title}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getImpactColor(insight.impact)} bg-opacity-10`}>
                              {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)} Impact
                            </span>
                          </div>
                          <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                            {insight.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-purple-600 dark:text-purple-400">
                              Confidence: {(insight.confidence * 100).toFixed(0)}%
                            </span>
                            <button className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-800">
              <h3 className="text-lg font-semibold text-pink-900 dark:text-pink-100 mb-4">
                <Automation className="w-5 h-5 inline mr-2" />
                Workflow Automation Rules
              </h3>
              <p className="text-pink-700 dark:text-pink-300 mb-4">
                AI-powered automation rules that streamline project workflows and reduce manual tasks.
              </p>
              <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Create New Rule</span>
              </button>
            </div>

            <div className="space-y-4">
              {projects.flatMap(project => project.automationRules).map((rule) => (
                <div key={rule.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {rule.name}
                        </h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          rule.isActive ? 'text-green-500 bg-green-100 dark:bg-green-900' : 'text-gray-500 bg-gray-100 dark:bg-gray-800'
                        }`}>
                          {rule.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {rule.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Trigger</p>
                          <p className="text-gray-600 dark:text-gray-400">{rule.trigger}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Conditions</p>
                          <ul className="text-gray-600 dark:text-gray-400">
                            {rule.conditions.map((condition, index) => (
                              <li key={index}>• {condition}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Actions</p>
                          <ul className="text-gray-600 dark:text-gray-400">
                            {rule.actions.map((action, index) => (
                              <li key={index}>• {action}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className={`p-2 rounded-lg transition-colors ${
                        rule.isActive 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}>
                        {rule.isActive ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Last executed: {new Date(rule.lastExecuted).toLocaleDateString()}</span>
                    <span>Executed {rule.executionCount} times</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                <Brain className="w-5 h-5 inline mr-2" />
                AI-Powered Project Insights
              </h3>
              <p className="text-purple-700 dark:text-purple-300 mb-4">
                Intelligent analysis and recommendations to optimize project performance and team productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.flatMap(project => project.aiInsights).map((insight) => (
                <div key={insight.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${
                        insight.type === 'optimization' ? 'bg-blue-100 dark:bg-blue-900' :
                        insight.type === 'risk' ? 'bg-red-100 dark:bg-red-900' :
                        insight.type === 'opportunity' ? 'bg-green-100 dark:bg-green-900' :
                        'bg-yellow-100 dark:bg-yellow-900'
                      }`}>
                        {insight.type === 'optimization' && <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                        {insight.type === 'risk' && <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                        {insight.type === 'opportunity' && <Star className="w-5 h-5 text-green-600 dark:text-green-400" />}
                        {insight.type === 'efficiency' && <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getImpactColor(insight.impact)} bg-opacity-10`}>
                        {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)} Impact
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(insight.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {insight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {insight.description}
                  </p>
                  
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recommendations:</p>
                    <ul className="space-y-1">
                      {insight.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 dark:text-purple-400">
                      Confidence: {(insight.confidence * 100).toFixed(0)}%
                    </span>
                    <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                      Apply Insights
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                <Users className="w-5 h-5 inline mr-2" />
                Team Performance & Analytics
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                AI-powered team analytics, performance insights, and resource optimization recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.flatMap(project => project.team).map((member) => (
                <div key={member.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{member.avatar}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{member.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Availability</span>
                        <span className="text-gray-900 dark:text-gray-100 font-medium">{member.availability}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            member.availability >= 80 ? 'bg-green-500' :
                            member.availability >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${member.availability}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Performance</span>
                        <span className="text-gray-900 dark:text-gray-100 font-medium">{member.performance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            member.performance >= 90 ? 'bg-green-500' :
                            member.performance >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${member.performance}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Current Tasks</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        member.currentTasks <= 3 ? 'text-green-500 bg-green-100 dark:bg-green-900' :
                        member.currentTasks <= 5 ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900' :
                        'text-red-500 bg-red-100 dark:bg-red-900'
                      }`}>
                        {member.currentTasks} tasks
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}