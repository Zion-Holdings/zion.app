import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Workflow, 
  Play, 
  Pause, 
  Square, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Filter, 
  Search, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Users, 
  Target, 
  Star, 
  ArrowRight, 
  Download, 
  Upload, 
  RefreshCw, 
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
  Calendar,
  Bell,
  User,
  FileText,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Timer,
  Database,
  Cloud,
  Code,
  Rocket
} from 'lucide-react';

interface Workflow {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'completed' | 'error';
  type: 'automation' | 'approval' | 'notification' | 'integration' | 'scheduling' | 'monitoring';
  priority: 'low' | 'medium' | 'high' | 'critical';
  triggers: string[];
  actions: string[];
  conditions: string[];
  lastRun: string;
  nextRun: string;
  successRate: number;
  executionTime: number;
  createdBy: string;
  createdAt: string;
  executions: number;
}

interface AutomationRule {
  id: string;
  name: string;
  description: string;
  trigger: string;
  conditions: string[];
  actions: string[];
  isActive: boolean;
  priority: number;
  lastExecuted: string;
  executionCount: number;
  successCount: number;
}

interface WorkflowExecution {
  id: string;
  workflowId: string;
  status: 'running' | 'completed' | 'failed' | 'cancelled';
  startTime: string;
  endTime?: string;
  duration?: number;
  triggeredBy: string;
  logs: string[];
  errors?: string[];
}

const workflows: Workflow[] = [
  {
    id: '1',
    name: 'Invoice Generation Automation',
    description: 'Automatically generate and send invoices when projects reach completion milestones',
    status: 'active',
    type: 'automation',
    priority: 'high',
    triggers: ['Project Completed', 'Milestone Reached', 'Time Tracking Threshold'],
    actions: ['Generate Invoice', 'Send Email', 'Update CRM', 'Create Payment Record'],
    conditions: ['Project Status = Completed', 'Payment Terms Met', 'Client Approval Received'],
    lastRun: '2025-01-27 14:30',
    nextRun: '2025-01-28 09:00',
    successRate: 98.5,
    executionTime: 45,
    createdBy: 'John Smith',
    createdAt: '2025-01-15',
    executions: 127
  },
  {
    id: '2',
    name: 'Team Performance Review',
    description: 'Automated performance review scheduling and reminder system',
    status: 'active',
    type: 'scheduling',
    priority: 'medium',
    triggers: ['Review Date Approaching', 'Quarter End', 'Manager Request'],
    actions: ['Schedule Review', 'Send Reminders', 'Collect Feedback', 'Generate Report'],
    conditions: ['Employee Active', 'Review Cycle Due', 'Manager Available'],
    lastRun: '2025-01-27 10:00',
    nextRun: '2025-01-30 09:00',
    successRate: 95.2,
    executionTime: 120,
    createdBy: 'Sarah Chen',
    createdAt: '2025-01-10',
    executions: 89
  },
  {
    id: '3',
    name: 'Code Quality Check',
    description: 'Automated code review and quality assessment workflow',
    status: 'active',
    type: 'monitoring',
    priority: 'high',
    triggers: ['Code Commit', 'Pull Request', 'Scheduled Scan'],
    actions: ['Run Tests', 'Code Analysis', 'Security Scan', 'Generate Report'],
    conditions: ['Code Changes Detected', 'Tests Available', 'Security Rules Met'],
    lastRun: '2025-01-27 16:45',
    nextRun: '2025-01-28 08:00',
    successRate: 92.8,
    executionTime: 180,
    createdBy: 'Mike Johnson',
    createdAt: '2025-01-12',
    executions: 234
  },
  {
    id: '4',
    name: 'Client Onboarding Process',
    description: 'Streamlined client onboarding with automated document collection and setup',
    status: 'active',
    type: 'approval',
    priority: 'high',
    triggers: ['New Client Signup', 'Contract Signed', 'Payment Received'],
    actions: ['Create Project', 'Setup Workspace', 'Send Welcome Email', 'Schedule Kickoff'],
    conditions: ['Contract Valid', 'Payment Confirmed', 'Team Available'],
    lastRun: '2025-01-26 11:15',
    nextRun: '2025-01-29 10:00',
    successRate: 97.3,
    executionTime: 90,
    createdBy: 'David Kim',
    createdAt: '2025-01-08',
    executions: 56
  }
];

const automationRules: AutomationRule[] = [
  {
    id: '1',
    name: 'Email Notification Rule',
    description: 'Send email notifications for project updates',
    trigger: 'Project Status Changed',
    conditions: ['Status = Completed', 'Client Notification Required'],
    actions: ['Send Email', 'Update Dashboard', 'Log Activity'],
    isActive: true,
    priority: 1,
    lastExecuted: '2025-01-27 15:20',
    executionCount: 45,
    successCount: 43
  },
  {
    id: '2',
    name: 'Time Tracking Rule',
    description: 'Automatically track time for active projects',
    trigger: 'Project Started',
    conditions: ['Project Active', 'Time Tracking Enabled'],
    actions: ['Start Timer', 'Log Activity', 'Update Dashboard'],
    isActive: true,
    priority: 2,
    lastExecuted: '2025-01-27 16:00',
    executionCount: 23,
    successCount: 22
  },
  {
    id: '3',
    name: 'Resource Allocation Rule',
    description: 'Automatically assign resources based on project requirements',
    trigger: 'New Project Created',
    conditions: ['Resources Available', 'Skills Match', 'Capacity Available'],
    actions: ['Assign Team Members', 'Block Calendar', 'Send Notifications'],
    isActive: true,
    priority: 3,
    lastExecuted: '2025-01-27 12:45',
    executionCount: 18,
    successCount: 17
  }
];

const workflowExecutions: WorkflowExecution[] = [
  {
    id: '1',
    workflowId: '1',
    status: 'completed',
    startTime: '2025-01-27 14:30:00',
    endTime: '2025-01-27 14:30:45',
    duration: 45,
    triggeredBy: 'Project Milestone Reached',
    logs: ['Invoice template loaded', 'Client data retrieved', 'Invoice generated', 'Email sent']
  },
  {
    id: '2',
    workflowId: '3',
    status: 'running',
    startTime: '2025-01-27 16:45:00',
    triggeredBy: 'Code Commit',
    logs: ['Tests started', 'Security scan in progress']
  },
  {
    id: '3',
    workflowId: '2',
    status: 'completed',
    startTime: '2025-01-27 10:00:00',
    endTime: '2025-01-27 10:02:00',
    duration: 120,
    triggeredBy: 'Review Date Approaching',
    logs: ['Review scheduled', 'Reminders sent', 'Calendar updated']
  }
];

const typeColors = {
  'automation': 'from-blue-500 to-cyan-500',
  'approval': 'from-green-500 to-emerald-500',
  'notification': 'from-yellow-500 to-orange-500',
  'integration': 'from-purple-500 to-pink-500',
  'scheduling': 'from-indigo-500 to-blue-500',
  'monitoring': 'from-red-500 to-pink-500'
};

const statusColors = {
  'active': 'from-green-500 to-emerald-500',
  'paused': 'from-yellow-500 to-orange-500',
  'completed': 'from-blue-500 to-cyan-500',
  'error': 'from-red-500 to-pink-500'
};

const priorityColors = {
  'low': 'bg-gray-500',
  'medium': 'bg-yellow-500',
  'high': 'bg-orange-500',
  'critical': 'bg-red-500'
};

const executionStatusColors = {
  'running': 'from-yellow-500 to-orange-500',
  'completed': 'from-green-500 to-emerald-500',
  'failed': 'from-red-500 to-pink-500',
  'cancelled': 'from-gray-500 to-gray-600'
};

const AdvancedWorkflowAutomation: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'workflows' | 'rules' | 'monitoring'>('workflows');
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [selectedExecution, setSelectedExecution] = useState<WorkflowExecution | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || workflow.type === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const filteredRules = automationRules.filter(rule => {
    return rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           rule.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredExecutions = workflowExecutions.filter(execution => {
    const workflow = workflows.find(w => w.id === execution.workflowId);
    return workflow && (
      workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      execution.triggeredBy.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Play className="w-4 h-4 text-green-400" />;
      case 'paused':
        return <Pause className="w-4 h-4 text-yellow-400" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
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
            Workflow Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced workflow automation, task automation, and process management. 
            Streamline operations, reduce manual work, and increase efficiency.
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
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+12%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{workflows.length}</h3>
            <p className="text-gray-400 text-sm">Active Workflows</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+8.5%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{automationRules.length}</h3>
            <p className="text-gray-400 text-sm">Automation Rules</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+5.2%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">96.2%</h3>
            <p className="text-gray-400 text-sm">Success Rate</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Timer className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">2.5h</h3>
            <p className="text-gray-400 text-sm">Time Saved Daily</p>
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
          {(['workflows', 'rules', 'monitoring'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'workflows' && <Workflow className="w-4 h-4 inline mr-2" />}
              {view === 'rules' && <Zap className="w-4 h-4 inline mr-2" />}
              {view === 'monitoring' && <Activity className="w-4 h-4 inline mr-2" />}
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
                placeholder="Search workflows, rules, or executions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            {selectedView === 'workflows' && (
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              >
                <option value="all">All Types</option>
                <option value="automation">Automation</option>
                <option value="approval">Approval</option>
                <option value="notification">Notification</option>
                <option value="integration">Integration</option>
                <option value="scheduling">Scheduling</option>
                <option value="monitoring">Monitoring</option>
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
              Export Logs
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              New Workflow
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'workflows' && (
            <motion.div
              key="workflows"
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
                {filteredWorkflows.map((workflow) => (
                  <motion.div
                    key={workflow.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => setSelectedWorkflow(workflow)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 bg-gradient-to-r ${typeColors[workflow.type]} rounded-full`} />
                          <h4 className="text-white font-semibold">{workflow.name}</h4>
                          <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[workflow.status]} rounded-full text-white text-xs font-medium`}>
                            {workflow.status}
                          </div>
                          <div className={`w-3 h-3 ${priorityColors[workflow.priority]} rounded-full`} />
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{workflow.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        {getStatusIcon(workflow.status)}
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{workflow.successRate}%</div>
                          <div className="text-gray-400 text-sm">Success Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Triggers ({workflow.triggers.length})</div>
                        <div className="space-y-1">
                          {workflow.triggers.slice(0, 2).map((trigger, index) => (
                            <div key={index} className="text-gray-300 text-sm">• {trigger}</div>
                          ))}
                          {workflow.triggers.length > 2 && (
                            <div className="text-gray-400 text-xs">+{workflow.triggers.length - 2} more</div>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Actions ({workflow.actions.length})</div>
                        <div className="space-y-1">
                          {workflow.actions.slice(0, 2).map((action, index) => (
                            <div key={index} className="text-gray-300 text-sm">• {action}</div>
                          ))}
                          {workflow.actions.length > 2 && (
                            <div className="text-gray-400 text-xs">+{workflow.actions.length - 2} more</div>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Performance</div>
                        <div className="space-y-1">
                          <div className="text-gray-300 text-sm">Executions: {workflow.executions}</div>
                          <div className="text-gray-300 text-sm">Avg Time: {workflow.executionTime}s</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-700/50">
                      <span>Last Run: {workflow.lastRun}</span>
                      <span>Next Run: {workflow.nextRun}</span>
                      <span>Created by: {workflow.createdBy}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'monitoring' && (
            <motion.div
              key="monitoring"
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
                {filteredExecutions.map((execution) => {
                  const workflow = workflows.find(w => w.id === execution.workflowId);
                  return (
                    <motion.div
                      key={execution.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                      onClick={() => setSelectedExecution(execution)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`px-2 py-1 bg-gradient-to-r ${executionStatusColors[execution.status]} rounded-full text-white text-xs font-medium`}>
                              {execution.status}
                            </div>
                            <h4 className="text-white font-semibold">{workflow?.name}</h4>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">Triggered by: {execution.triggeredBy}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">
                            {execution.duration ? `${execution.duration}s` : 'Running...'}
                          </div>
                          <div className="text-gray-400 text-sm">Duration</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Timeline</div>
                          <div className="space-y-1">
                            <div className="text-gray-300 text-sm">Started: {execution.startTime}</div>
                            {execution.endTime && (
                              <div className="text-gray-300 text-sm">Ended: {execution.endTime}</div>
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Execution Log</div>
                          <div className="space-y-1">
                            {execution.logs.slice(0, 3).map((log, index) => (
                              <div key={index} className="text-gray-300 text-sm">• {log}</div>
                            ))}
                            {execution.logs.length > 3 && (
                              <div className="text-gray-400 text-xs">+{execution.logs.length - 3} more entries</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {execution.errors && execution.errors.length > 0 && (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
                          <div className="text-sm text-red-400 mb-1">Errors</div>
                          {execution.errors.map((error, index) => (
                            <div key={index} className="text-red-300 text-sm">• {error}</div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
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
              Ready to Automate Your Workflows?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you streamline operations, reduce manual work, and 
              increase efficiency with our advanced workflow automation system.
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

export default AdvancedWorkflowAutomation;