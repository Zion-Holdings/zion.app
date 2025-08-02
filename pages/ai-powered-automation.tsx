import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface AutomationWorkflow {
  id: string;
  name: string;
  description: string;
  category: 'project-management' | 'customer-service' | 'marketing' | 'finance' | 'operations' | 'quality-assurance';
  status: 'active' | 'inactive' | 'testing' | 'error';
  triggers: AutomationTrigger[];
  actions: AutomationAction[];
  conditions: AutomationCondition[];
  aiFeatures: {
    intelligentRouting: boolean;
    predictiveAnalysis: boolean;
    adaptiveLearning: boolean;
    anomalyDetection: boolean;
  };
  performance: {
    totalExecutions: number;
    successRate: number;
    averageExecutionTime: number;
    lastExecuted: Date;
    nextExecution?: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface AutomationTrigger {
  id: string;
  type: 'event' | 'schedule' | 'condition' | 'manual';
  name: string;
  description: string;
  parameters: Record<string, any>;
  enabled: boolean;
}

interface AutomationAction {
  id: string;
  type: 'notification' | 'data-update' | 'api-call' | 'workflow' | 'decision' | 'report' | 'classification' | 'analysis' | 'generation' | 'optimization' | 'detection';
  name: string;
  description: string;
  parameters: Record<string, any>;
  order: number;
  enabled: boolean;
}

interface AutomationCondition {
  id: string;
  type: 'if' | 'else-if' | 'else';
  condition: string;
  description: string;
  parameters: Record<string, any>;
  order: number;
  enabled: boolean;
}

interface AutomationStats {
  totalWorkflows: number;
  activeWorkflows: number;
  totalExecutions: number;
  successRate: number;
  averageExecutionTime: number;
  timeSaved: number;
  costSavings: number;
  aiOptimizations: number;
}

interface AITask {
  id: string;
  name: string;
  description: string;
  type: 'classification' | 'prediction' | 'optimization' | 'analysis' | 'generation';
  status: 'running' | 'completed' | 'failed' | 'queued';
  progress: number;
  accuracy: number;
  inputData: string;
  outputData: string;
  createdAt: Date;
  completedAt?: Date;
}

const AIPoweredAutomationPage: NextPage = () => {
  const [workflows, setWorkflows] = useState<AutomationWorkflow[]>([]);
  const [aiTasks, setAiTasks] = useState<AITask[]>([]);
  const [stats, setStats] = useState<AutomationStats | null>(null);
  const [selectedView, setSelectedView] = useState<'overview' | 'workflows' | 'ai-tasks' | 'templates' | 'analytics'>('overview');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'performance' | 'category' | 'status'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered automation data
    setTimeout(() => {
      const mockWorkflows: AutomationWorkflow[] = [
        {
          id: '1',
          name: 'Project Status Automation',
          description: 'Automatically update project status, notify team members, and generate progress reports based on milestone completions.',
          category: 'project-management',
          status: 'active',
          triggers: [
            {
              id: '1',
              type: 'event',
              name: 'Milestone Completed',
              description: 'Triggered when a project milestone is marked as completed',
              parameters: { eventType: 'milestone_completed' },
              enabled: true
            }
          ],
          actions: [
            {
              id: '1',
              type: 'notification',
              name: 'Notify Team',
              description: 'Send notification to project team members',
              parameters: { recipients: 'team', template: 'milestone_completed' },
              order: 1,
              enabled: true
            },
            {
              id: '2',
              type: 'data-update',
              name: 'Update Progress',
              description: 'Update project progress percentage',
              parameters: { field: 'progress', calculation: 'auto' },
              order: 2,
              enabled: true
            },
            {
              id: '3',
              type: 'report',
              name: 'Generate Report',
              description: 'Generate progress report for stakeholders',
              parameters: { reportType: 'progress', recipients: 'stakeholders' },
              order: 3,
              enabled: true
            }
          ],
          conditions: [
            {
              id: '1',
              type: 'if',
              condition: 'milestone.completed == true',
              description: 'Check if milestone is completed',
              parameters: { field: 'completed', value: true },
              order: 1,
              enabled: true
            }
          ],
          aiFeatures: {
            intelligentRouting: true,
            predictiveAnalysis: true,
            adaptiveLearning: true,
            anomalyDetection: true
          },
          performance: {
            totalExecutions: 156,
            successRate: 98.7,
            averageExecutionTime: 2.3,
            lastExecuted: new Date(Date.now() - 2 * 60 * 60 * 1000),
            nextExecution: new Date(Date.now() + 4 * 60 * 60 * 1000)
          },
          createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
        },
        {
          id: '2',
          name: 'Customer Service Automation',
          description: 'Automatically categorize support tickets, assign to appropriate agents, and provide intelligent responses.',
          category: 'customer-service',
          status: 'active',
          triggers: [
            {
              id: '2',
              type: 'event',
              name: 'New Support Ticket',
              description: 'Triggered when a new support ticket is created',
              parameters: { eventType: 'ticket_created' },
              enabled: true
            }
          ],
          actions: [
            {
              id: '4',
              type: 'classification',
              name: 'Categorize Ticket',
              description: 'AI-powered ticket categorization',
              parameters: { model: 'ticket_classifier', confidence: 0.85 },
              order: 1,
              enabled: true
            },
            {
              id: '5',
              type: 'decision',
              name: 'Auto-Assign Agent',
              description: 'Automatically assign ticket to best-suited agent',
              parameters: { criteria: 'expertise,availability,workload' },
              order: 2,
              enabled: true
            },
            {
              id: '6',
              type: 'notification',
              name: 'Send Auto-Response',
              description: 'Send automated initial response',
              parameters: { template: 'auto_response', delay: 0 },
              order: 3,
              enabled: true
            }
          ],
          conditions: [
            {
              id: '2',
              type: 'if',
              condition: 'ticket.priority == high',
              description: 'Check if ticket is high priority',
              parameters: { field: 'priority', value: 'high' },
              order: 1,
              enabled: true
            }
          ],
          aiFeatures: {
            intelligentRouting: true,
            predictiveAnalysis: true,
            adaptiveLearning: true,
            anomalyDetection: true
          },
          performance: {
            totalExecutions: 892,
            successRate: 96.3,
            averageExecutionTime: 1.8,
            lastExecuted: new Date(Date.now() - 30 * 60 * 1000),
            nextExecution: new Date(Date.now() + 5 * 60 * 1000)
          },
          createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 30 * 60 * 1000)
        },
        {
          id: '3',
          name: 'Marketing Campaign Automation',
          description: 'Automatically segment customers, personalize content, and optimize campaign performance.',
          category: 'marketing',
          status: 'active',
          triggers: [
            {
              id: '3',
              type: 'schedule',
              name: 'Weekly Campaign',
              description: 'Triggered every week for campaign execution',
              parameters: { schedule: 'weekly', day: 'monday', time: '09:00' },
              enabled: true
            }
          ],
          actions: [
            {
              id: '7',
              type: 'analysis',
              name: 'Customer Segmentation',
              description: 'AI-powered customer segmentation',
              parameters: { model: 'customer_segmentation', clusters: 5 },
              order: 1,
              enabled: true
            },
            {
              id: '8',
              type: 'generation',
              name: 'Content Personalization',
              description: 'Generate personalized content for each segment',
              parameters: { model: 'content_generator', personalization: true },
              order: 2,
              enabled: true
            },
            {
              id: '9',
              type: 'optimization',
              name: 'Campaign Optimization',
              description: 'Optimize campaign parameters for better performance',
              parameters: { model: 'campaign_optimizer', metrics: 'ctr,conversion' },
              order: 3,
              enabled: true
            }
          ],
          conditions: [
            {
              id: '3',
              type: 'if',
              condition: 'segment.size > 100',
              description: 'Check if segment has sufficient size',
              parameters: { field: 'size', value: 100 },
              order: 1,
              enabled: true
            }
          ],
          aiFeatures: {
            intelligentRouting: true,
            predictiveAnalysis: true,
            adaptiveLearning: true,
            anomalyDetection: true
          },
          performance: {
            totalExecutions: 67,
            successRate: 94.2,
            averageExecutionTime: 15.6,
            lastExecuted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            nextExecution: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          },
          createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        },
        {
          id: '4',
          name: 'Financial Reporting Automation',
          description: 'Automatically generate financial reports, detect anomalies, and provide insights.',
          category: 'finance',
          status: 'active',
          triggers: [
            {
              id: '4',
              type: 'schedule',
              name: 'Monthly Report',
              description: 'Triggered monthly for financial reporting',
              parameters: { schedule: 'monthly', day: 1, time: '08:00' },
              enabled: true
            }
          ],
          actions: [
            {
              id: '10',
              type: 'analysis',
              name: 'Financial Analysis',
              description: 'AI-powered financial data analysis',
              parameters: { model: 'financial_analyzer', metrics: 'revenue,expenses,profit' },
              order: 1,
              enabled: true
            },
            {
              id: '11',
              type: 'detection',
              name: 'Anomaly Detection',
              description: 'Detect financial anomalies and fraud',
              parameters: { model: 'anomaly_detector', threshold: 0.95 },
              order: 2,
              enabled: true
            },
            {
              id: '12',
              type: 'report',
              name: 'Generate Report',
              description: 'Generate comprehensive financial report',
              parameters: { reportType: 'financial', format: 'pdf', recipients: 'management' },
              order: 3,
              enabled: true
            }
          ],
          conditions: [
            {
              id: '4',
              type: 'if',
              condition: 'data.complete == true',
              description: 'Check if financial data is complete',
              parameters: { field: 'complete', value: true },
              order: 1,
              enabled: true
            }
          ],
          aiFeatures: {
            intelligentRouting: true,
            predictiveAnalysis: true,
            adaptiveLearning: true,
            anomalyDetection: true
          },
          performance: {
            totalExecutions: 12,
            successRate: 100.0,
            averageExecutionTime: 45.2,
            lastExecuted: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            nextExecution: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
          },
          createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        }
      ];

      const mockAITasks: AITask[] = [
        {
          id: '1',
          name: 'Customer Segmentation Analysis',
          description: 'AI-powered analysis to segment customers based on behavior and preferences',
          type: 'classification',
          status: 'completed',
          progress: 100,
          accuracy: 94.2,
          inputData: 'Customer behavior data, purchase history, demographics',
          outputData: '5 customer segments with detailed profiles and recommendations',
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          completedAt: new Date(Date.now() - 1 * 60 * 60 * 1000)
        },
        {
          id: '2',
          name: 'Revenue Prediction Model',
          description: 'Predictive model for forecasting quarterly revenue',
          type: 'prediction',
          status: 'running',
          progress: 75,
          accuracy: 91.8,
          inputData: 'Historical revenue data, market trends, seasonal patterns',
          outputData: 'Q4 revenue prediction: $3.15M with 87.5% confidence',
          createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000)
        },
        {
          id: '3',
          name: 'Process Optimization',
          description: 'AI optimization of business processes for efficiency',
          type: 'optimization',
          status: 'completed',
          progress: 100,
          accuracy: 89.3,
          inputData: 'Current process data, performance metrics, bottlenecks',
          outputData: 'Optimized workflow with 23% efficiency improvement',
          createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
          completedAt: new Date(Date.now() - 5 * 60 * 60 * 1000)
        },
        {
          id: '4',
          name: 'Content Generation',
          description: 'AI-powered content generation for marketing campaigns',
          type: 'generation',
          status: 'queued',
          progress: 0,
          accuracy: 0,
          inputData: 'Campaign brief, target audience, brand guidelines',
          outputData: 'Pending generation',
          createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000)
        }
      ];

      const mockStats: AutomationStats = {
        totalWorkflows: 24,
        activeWorkflows: 18,
        totalExecutions: 1127,
        successRate: 97.3,
        averageExecutionTime: 8.4,
        timeSaved: 156.7,
        costSavings: 45230,
        aiOptimizations: 89
      };

      setWorkflows(mockWorkflows);
      setAiTasks(mockAITasks);
      setStats(mockStats);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredWorkflows = useMemo(() => {
    let filtered = workflows.filter(workflow => {
      // Category filter
      if (filterCategory !== 'all' && workflow.category !== filterCategory) return false;
      
      // Status filter
      if (filterStatus !== 'all' && workflow.status !== filterStatus) return false;
      
      // Search term filter
      if (searchTerm && !workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !workflow.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });

    // Sort workflows
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'performance':
          return b.performance.successRate - a.performance.successRate;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'status':
          return a.status.localeCompare(b.status);
        case 'recent':
        default:
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

    return filtered;
  }, [workflows, filterCategory, filterStatus, searchTerm, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'project-management': return '📁';
      case 'customer-service': return '🎧';
      case 'marketing': return '📢';
      case 'finance': return '💰';
      case 'operations': return '⚙️';
      case 'quality-assurance': return '🔍';
      default: return '🤖';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'inactive': return 'text-gray-400 bg-gray-500/20';
      case 'testing': return 'text-yellow-400 bg-yellow-500/20';
      case 'error': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTaskTypeIcon = (type: string) => {
    switch (type) {
      case 'classification': return '🏷️';
      case 'prediction': return '🔮';
      case 'optimization': return '⚡';
      case 'analysis': return '📊';
      case 'generation': return '✨';
      default: return '🤖';
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-blue-400 bg-blue-500/20';
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'queued': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading AI-Powered Automation...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Automation - Zion</title>
        <meta name="description" content="Intelligent workflow automation with AI-driven process optimization, automated decision making, and intelligent task management" />
        <meta name="keywords" content="AI automation, workflow automation, process optimization, intelligent automation, Zion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/ai-powered-analytics" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Analytics
              </Link>
              <Link href="/smart-notifications" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Notifications
              </Link>
              <Link href="/project-management" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent workflow automation with AI-driven process optimization, 
            automated decision making, and intelligent task management for enhanced efficiency.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'workflows', name: 'Workflows', icon: '⚙️' },
              { id: 'ai-tasks', name: 'AI Tasks', icon: '🤖' },
              { id: 'templates', name: 'Templates', icon: '📋' },
              { id: 'analytics', name: 'Analytics', icon: '📈' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Automation Stats Overview */}
        {selectedView === 'overview' && stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.totalWorkflows}</div>
              <p className="text-green-300 text-sm">Total Workflows</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.totalExecutions}</div>
              <p className="text-blue-300 text-sm">Total Executions</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.successRate}%</div>
              <p className="text-purple-300 text-sm">Success Rate</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{formatCurrency(stats.costSavings)}</div>
              <p className="text-orange-300 text-sm">Cost Savings</p>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        {selectedView === 'workflows' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Search workflows..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="all">All Categories</option>
                  <option value="project-management">Project Management</option>
                  <option value="customer-service">Customer Service</option>
                  <option value="marketing">Marketing</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                  <option value="quality-assurance">Quality Assurance</option>
                </select>
              </div>
              
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="recent">Sort by Recent</option>
                  <option value="performance">Sort by Performance</option>
                  <option value="category">Sort by Category</option>
                  <option value="status">Sort by Status</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Workflows List */}
        {selectedView === 'workflows' && (
          <div className="space-y-6">
            {filteredWorkflows.map((workflow) => (
              <div key={workflow.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{getCategoryIcon(workflow.category)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{workflow.name}</h3>
                      <p className="text-gray-300 text-sm">{workflow.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                    {workflow.status.toUpperCase()}
                  </span>
                </div>

                {/* AI Features */}
                <div className="flex items-center space-x-4 mb-4">
                  {workflow.aiFeatures.intelligentRouting && (
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">
                      Intelligent Routing
                    </span>
                  )}
                  {workflow.aiFeatures.predictiveAnalysis && (
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
                      Predictive Analysis
                    </span>
                  )}
                  {workflow.aiFeatures.adaptiveLearning && (
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded border border-green-500/30">
                      Adaptive Learning
                    </span>
                  )}
                  {workflow.aiFeatures.anomalyDetection && (
                    <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded border border-red-500/30">
                      Anomaly Detection
                    </span>
                  )}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Executions</p>
                    <p className="text-lg font-semibold text-blue-400">{workflow.performance.totalExecutions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-lg font-semibold text-green-400">{workflow.performance.successRate}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Avg Time</p>
                    <p className="text-lg font-semibold text-purple-400">{formatTime(workflow.performance.averageExecutionTime)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Last Run</p>
                    <p className="text-lg font-semibold text-orange-400">{workflow.performance.lastExecuted.toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Details
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Edit Workflow
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Run Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI Tasks */}
        {selectedView === 'ai-tasks' && (
          <div className="space-y-6">
            {aiTasks.map((task) => (
              <div key={task.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{getTaskTypeIcon(task.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{task.name}</h3>
                      <p className="text-gray-300 text-sm">{task.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTaskStatusColor(task.status)}`}>
                    {task.status.toUpperCase()}
                  </span>
                </div>

                {/* Progress Bar */}
                {task.status === 'running' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Task Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Accuracy</p>
                    <p className="text-lg font-semibold text-green-400">{task.accuracy}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Type</p>
                    <p className="text-lg font-semibold text-blue-400 capitalize">{task.type}</p>
                  </div>
                </div>

                {/* Input/Output */}
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-400">Input Data:</p>
                    <p className="text-white">{task.inputData}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Output Data:</p>
                    <p className="text-white">{task.outputData}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 mt-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Results
                  </button>
                  {task.status === 'queued' && (
                    <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                      Start Task
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Automate Your Workflows with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent automation to streamline processes, reduce manual work, 
              and enhance efficiency with AI-powered workflow optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Create Workflow
              </button>
              <Link href="/project-management" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredAutomationPage 