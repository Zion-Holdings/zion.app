import React, { useState, useRef, useEffect } from 'react';
import {
  Workflow, Brain, Zap, Settings, X, Maximize2, Minimize2, Plus, Search,
  Filter, Calendar, Clock, CheckCircle, AlertCircle, UserPlus, Lock, Unlock,
  BarChart3, TrendingUp, Target, Activity, Users, FileText, GitBranch,
  Bot, Sparkles, Target as TargetIcon, GanttChart, Milestone,
  Flag, AlertTriangle, Info, Star, Award, Trophy, Rocket, Lightbulb,
  DollarSign, Package, Truck, Warehouse, ShoppingCart, CreditCard, Receipt,
  Calculator, PieChart, LineChart, BarChart, Eye, EyeOff, Download, RefreshCw,
  MoreVertical, Edit3, Trash2, Database, Server, Network, Cpu, HardDrive,
  Play, Pause, RotateCcw, Save, Loader, CheckSquare, Square,
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight, ChevronLeft
} from 'lucide-react';

interface BusinessProcess {
  id: string;
  name: string;
  description: string;
  category: 'finance' | 'hr' | 'operations' | 'sales' | 'marketing' | 'it';
  status: 'active' | 'paused' | 'completed' | 'failed' | 'draft';
  priority: 'low' | 'medium' | 'high' | 'critical';
  automationLevel: 'manual' | 'semi-automated' | 'fully-automated';
  aiInsights: string[];
  efficiency: number;
  costSavings: number;
  timeReduction: number;
  stakeholders: string[];
  lastExecuted: Date;
  nextExecution: Date;
  executionHistory: ProcessExecution[];
  rules: AutomationRule[];
  dependencies: string[];
}

interface ProcessExecution {
  id: string;
  timestamp: Date;
  status: 'success' | 'partial' | 'failed';
  duration: number;
  aiDecisions: string[];
  manualInterventions: number;
  cost: number;
  efficiency: number;
}

interface AutomationRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  priority: number;
  isActive: boolean;
  aiOptimized: boolean;
  lastTriggered: Date;
  triggerCount: number;
}

const mockBusinessProcesses: BusinessProcess[] = [
  {
    id: 'bp-001',
    name: 'Invoice Processing & Approval',
    description: 'Automated invoice processing with AI-powered validation and approval workflows',
    category: 'finance',
    status: 'active',
    priority: 'high',
    automationLevel: 'fully-automated',
    aiInsights: [
      'Pattern detected: 15% of invoices require manual review',
      'Optimization opportunity: Reduce approval time by 40%',
      'Cost savings potential: $12,000/month through automation'
    ],
    efficiency: 92,
    costSavings: 12000,
    timeReduction: 65,
    stakeholders: ['Finance Team', 'AP Department', 'Vendors'],
    lastExecuted: new Date('2024-01-15T10:30:00Z'),
    nextExecution: new Date('2024-01-16T09:00:00Z'),
    executionHistory: [
      {
        id: 'exec-001',
        timestamp: new Date('2024-01-15T10:30:00Z'),
        status: 'success',
        duration: 45,
        aiDecisions: ['Auto-approved 85% of invoices', 'Flagged 3 suspicious entries'],
        manualInterventions: 2,
        cost: 150,
        efficiency: 94
      }
    ],
    rules: [
      {
        id: 'rule-001',
        name: 'Auto-approve under $1000',
        condition: 'amount < 1000 AND vendor_verified = true',
        action: 'auto_approve',
        priority: 1,
        isActive: true,
        aiOptimized: true,
        lastTriggered: new Date('2024-01-15T10:30:00Z'),
        triggerCount: 156
      }
    ],
    dependencies: ['vendor_verification', 'budget_approval']
  },
  {
    id: 'bp-002',
    name: 'Employee Onboarding',
    description: 'Streamlined employee onboarding with automated document processing and task assignment',
    category: 'hr',
    status: 'active',
    priority: 'medium',
    automationLevel: 'semi-automated',
    aiInsights: [
      'Bottleneck identified: IT setup takes 3 days on average',
      'Recommendation: Implement parallel processing for faster onboarding',
      'Success rate: 98% completion within SLA'
    ],
    efficiency: 87,
    costSavings: 8000,
    timeReduction: 55,
    stakeholders: ['HR Team', 'IT Department', 'New Employees'],
    lastExecuted: new Date('2024-01-14T14:15:00Z'),
    nextExecution: new Date('2024-01-17T09:00:00Z'),
    executionHistory: [
      {
        id: 'exec-002',
        timestamp: new Date('2024-01-14T14:15:00Z'),
        status: 'success',
        duration: 120,
        aiDecisions: ['Optimized task sequence', 'Identified resource conflicts'],
        manualInterventions: 1,
        cost: 200,
        efficiency: 89
      }
    ],
    rules: [
      {
        id: 'rule-002',
        name: 'Auto-assign IT tasks',
        condition: 'employee_type = "full_time" AND department != "contractor"',
        action: 'assign_it_tasks',
        priority: 2,
        isActive: true,
        aiOptimized: true,
        lastTriggered: new Date('2024-01-14T14:15:00Z'),
        triggerCount: 23
      }
    ],
    dependencies: ['background_check', 'document_verification']
  },
  {
    id: 'bp-003',
    name: 'Customer Support Ticket Routing',
    description: 'Intelligent ticket routing based on AI analysis of customer issues and agent expertise',
    category: 'operations',
    status: 'active',
    priority: 'critical',
    automationLevel: 'fully-automated',
    aiInsights: [
      'AI accuracy: 94% correct ticket classification',
      'Response time improved by 60%',
      'Customer satisfaction increased by 25%'
    ],
    efficiency: 96,
    costSavings: 15000,
    timeReduction: 70,
    stakeholders: ['Support Team', 'Customers', 'Product Team'],
    lastExecuted: new Date('2024-01-15T16:45:00Z'),
    nextExecution: new Date('2024-01-15T17:00:00Z'),
    executionHistory: [
      {
        id: 'exec-003',
        timestamp: new Date('2024-01-15T16:45:00Z'),
        status: 'success',
        duration: 15,
        aiDecisions: ['Classified 47 tickets by priority', 'Assigned to optimal agents'],
        manualInterventions: 0,
        cost: 50,
        efficiency: 98
      }
    ],
    rules: [
      {
        id: 'rule-003',
        name: 'Priority-based routing',
        condition: 'priority = "critical" AND category = "technical"',
        action: 'route_to_senior_agent',
        priority: 1,
        isActive: true,
        aiOptimized: true,
        lastTriggered: new Date('2024-01-15T16:45:00Z'),
        triggerCount: 8
      }
    ],
    dependencies: ['ticket_classification', 'agent_availability']
  }
];

export function AdvancedAIBusinessProcessAutomation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'processes' | 'automation' | 'analytics' | 'optimization'>('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAIInsights, setShowAIInsights] = useState(true);
  const [showAutomation, setShowAutomation] = useState(true);
  const [businessProcesses, setBusinessProcesses] = useState<BusinessProcess[]>(mockBusinessProcesses);
  const [selectedProcess, setSelectedProcess] = useState<BusinessProcess | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500 bg-green-100 dark:bg-green-900/20';
      case 'paused': return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20';
      case 'completed': return 'text-blue-500 bg-blue-100 dark:bg-blue-900/20';
      case 'failed': return 'text-red-500 bg-red-100 dark:bg-red-900/20';
      case 'draft': return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getAutomationLevelColor = (level: string) => {
    switch (level) {
      case 'fully-automated': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'semi-automated': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'manual': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'finance': return <DollarSign className="w-4 h-4" />;
      case 'hr': return <Users className="w-4 h-4" />;
      case 'operations': return <Settings className="w-4 h-4" />;
      case 'sales': return <TrendingUp className="w-4 h-4" />;
      case 'marketing': return <Target className="w-4 h-4" />;
      case 'it': return <Server className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value}%`;
  };

  const executeProcess = async (processId: string) => {
    setIsExecuting(true);
    // Simulate process execution
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsExecuting(false);
    
    // Update process status
    setBusinessProcesses(prev => prev.map(p => 
      p.id === processId 
        ? { ...p, lastExecuted: new Date(), status: 'active' as const }
        : p
    ));
  };

  const filteredProcesses = businessProcesses.filter(process => {
    const matchesCategory = selectedCategory === 'all' || process.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || process.status === selectedStatus;
    const matchesSearch = process.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         process.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-blue to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-blue/50 transition-all duration-300 z-50 group"
      >
        <div className="flex items-center gap-3">
          <Workflow className="w-6 h-6" />
          <span className="font-semibold">AI BPA</span>
        </div>
        <div className="absolute -top-2 -right-2 bg-zion-cyan text-zion-slate text-xs px-2 py-1 rounded-full font-bold">
          NEW
        </div>
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50">
        <div className="flex items-center gap-3 p-3">
          <Workflow className="w-5 h-5 text-zion-blue" />
          <span className="font-semibold text-sm">AI BPA</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-zion-slate-light rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
      isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
    }`} ref={containerRef}>
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Workflow className="w-6 h-6" />
          <div>
            <h2 className="text-xl font-bold">Advanced AI Business Process Automation</h2>
            <p className="text-zion-blue-light text-sm">Intelligent workflow automation & optimization</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 border-b border-zion-slate-light bg-zion-slate-light/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1 border border-zion-slate-light rounded-md text-sm bg-white dark:bg-zion-slate"
            >
              <option value="all">All Categories</option>
              <option value="finance">Finance</option>
              <option value="hr">HR</option>
              <option value="operations">Operations</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="it">IT</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Status:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-1 border border-zion-slate-light rounded-md text-sm bg-white dark:bg-zion-slate"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-zion-slate-light" />
            <input
              type="text"
              placeholder="Search processes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1 border border-zion-slate-light rounded-md text-sm bg-white dark:bg-zion-slate w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showAIInsights}
              onChange={(e) => setShowAIInsights(e.target.checked)}
              className="rounded"
            />
            Show AI Insights
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showAutomation}
              onChange={(e) => setShowAutomation(e.target.checked)}
              className="rounded"
            />
            Show Automation Rules
          </label>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {(['overview', 'processes', 'automation', 'analytics', 'optimization'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'text-zion-blue border-b-2 border-zion-blue'
                : 'text-zion-slate-light hover:text-zion-slate'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-zion-blue to-zion-purple text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-zion-blue-light text-sm">Total Processes</p>
                    <p className="text-3xl font-bold">{businessProcesses.length}</p>
                  </div>
                  <Workflow className="w-12 h-12 text-white/50" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Active Processes</p>
                    <p className="text-3xl font-bold">
                      {businessProcesses.filter(p => p.status === 'active').length}
                    </p>
                  </div>
                  <CheckCircle className="w-12 h-12 text-white/50" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100 text-sm">Avg Efficiency</p>
                    <p className="text-3xl font-bold">
                      {Math.round(businessProcesses.reduce((acc, p) => acc + p.efficiency, 0) / businessProcesses.length)}%
                    </p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-white/50" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Monthly Savings</p>
                    <p className="text-3xl font-bold">
                      {formatCurrency(businessProcesses.reduce((acc, p) => acc + p.costSavings, 0))}
                    </p>
                  </div>
                  <DollarSign className="w-12 h-12 text-white/50" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-zion-blue" />
                  AI Insights & Recommendations
                </h3>
                <div className="space-y-3">
                  {businessProcesses.slice(0, 3).map(process => (
                    <div key={process.id} className="p-3 bg-zion-slate-light/10 rounded-lg">
                      <p className="font-medium text-sm mb-2">{process.name}</p>
                      <div className="space-y-2">
                        {process.aiInsights.slice(0, 2).map((insight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-zion-slate">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-zion-blue" />
                  Recent Executions
                </h3>
                <div className="space-y-3">
                  {businessProcesses.slice(0, 3).map(process => (
                    <div key={process.id} className="flex items-center justify-between p-3 bg-zion-slate-light/10 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{process.name}</p>
                        <p className="text-xs text-zion-slate-light">
                          {process.lastExecuted.toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          process.executionHistory[0]?.status === 'success' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                        }`}>
                          {process.executionHistory[0]?.status || 'Unknown'}
                        </span>
                        <span className="text-xs text-zion-slate-light">
                          {process.executionHistory[0]?.duration || 0}s
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'processes' && (
          <div className="space-y-4">
            {filteredProcesses.map(process => (
              <div key={process.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {getCategoryIcon(process.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{process.name}</h3>
                      <p className="text-zion-slate-light text-sm">{process.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => executeProcess(process.id)}
                      disabled={isExecuting}
                      className="px-4 py-2 bg-zion-blue text-white rounded-lg hover:bg-zion-blue-dark disabled:opacity-50 flex items-center gap-2"
                    >
                      {isExecuting ? <Loader className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                      Execute
                    </button>
                    <button
                      onClick={() => setSelectedProcess(process)}
                      className="p-2 text-zion-slate-light hover:text-zion-slate hover:bg-zion-slate-light/10 rounded-lg"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-zion-blue">{formatPercentage(process.efficiency)}</p>
                    <p className="text-xs text-zion-slate-light">Efficiency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(process.costSavings)}</p>
                    <p className="text-xs text-zion-slate-light">Monthly Savings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">{formatPercentage(process.timeReduction)}</p>
                    <p className="text-xs text-zion-slate-light">Time Reduction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{process.executionHistory.length}</p>
                    <p className="text-xs text-zion-slate-light">Executions</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(process.status)}`}>
                    {process.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(process.priority)}`}>
                    {process.priority}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAutomationLevelColor(process.automationLevel)}`}>
                    {process.automationLevel.replace('-', ' ')}
                  </span>
                </div>

                {showAIInsights && (
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-zion-blue" />
                      AI Insights
                    </h4>
                    <div className="space-y-2">
                      {process.aiInsights.map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {showAutomation && (
                  <div>
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                             <Settings className="w-4 h-4 text-zion-blue" />
                       Automation Rules
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {process.rules.map(rule => (
                        <div key={rule.id} className="p-3 bg-zion-slate-light/10 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">{rule.name}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              rule.isActive 
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                            }`}>
                              {rule.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                          <p className="text-xs text-zion-slate-light mb-2">If: {rule.condition}</p>
                          <p className="text-xs text-zion-slate-light">Then: {rule.action}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-zion-slate-light">
                              Priority: {rule.priority}
                            </span>
                            <span className="text-xs text-zion-slate-light">
                              Triggered: {rule.triggerCount} times
                            </span>
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
            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                 <Settings className="w-5 h-5 text-zion-blue" />
                 Automation Engine Status
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-green-800 dark:text-green-400">Engine Active</p>
                  <p className="text-sm text-green-600 dark:text-green-300">All systems operational</p>
                </div>
                <div className="text-center p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-blue-800 dark:text-blue-400">Rules Active</p>
                  <p className="text-sm text-blue-600 dark:text-blue-300">
                    {businessProcesses.reduce((acc, p) => acc + p.rules.filter(r => r.isActive).length, 0)} rules
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-purple-800 dark:text-purple-400">AI Learning</p>
                  <p className="text-sm text-purple-600 dark:text-purple-300">Continuous optimization</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-zion-blue" />
                Automation Rules Management
              </h3>
              <div className="space-y-4">
                {businessProcesses.flatMap(process => 
                  process.rules.map(rule => ({
                    ...rule,
                    processName: process.name,
                    processCategory: process.category
                  }))
                ).map(rule => (
                  <div key={rule.id} className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zion-blue/10 rounded-lg">
                        {getCategoryIcon(rule.processCategory)}
                      </div>
                      <div>
                        <p className="font-medium">{rule.name}</p>
                        <p className="text-sm text-zion-slate-light">{rule.processName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        rule.isActive 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {rule.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        rule.aiOptimized 
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400'
                      }`}>
                        {rule.aiOptimized ? 'AI Optimized' : 'Manual'}
                      </span>
                      <button className="p-2 text-zion-slate-light hover:text-zion-slate hover:bg-zion-slate-light/10 rounded-lg">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Efficiency Trends</h3>
                <div className="h-64 bg-zion-slate-light/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-zion-slate-light mx-auto mb-2" />
                    <p className="text-zion-slate-light">Efficiency trend chart</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Cost Savings Analysis</h3>
                <div className="h-64 bg-zion-slate-light/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-16 h-16 text-zion-slate-light mx-auto mb-2" />
                    <p className="text-zion-slate-light">Cost savings breakdown</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Process Performance Metrics</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zion-slate-light">
                      <th className="text-left p-3 font-medium">Process</th>
                      <th className="text-left p-3 font-medium">Category</th>
                      <th className="text-left p-3 font-medium">Efficiency</th>
                      <th className="text-left p-3 font-medium">Cost Savings</th>
                      <th className="text-left p-3 font-medium">Time Reduction</th>
                      <th className="text-left p-3 font-medium">Executions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessProcesses.map(process => (
                      <tr key={process.id} className="border-b border-zion-slate-light/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(process.category)}
                            <span className="font-medium">{process.name}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="capitalize">{process.category}</span>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-zion-slate-light rounded-full h-2">
                              <div 
                                className="bg-zion-blue h-2 rounded-full" 
                                style={{ width: `${process.efficiency}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{formatPercentage(process.efficiency)}</span>
                          </div>
                        </td>
                        <td className="p-3 font-medium">{formatCurrency(process.costSavings)}</td>
                        <td className="p-3 font-medium">{formatPercentage(process.timeReduction)}</td>
                        <td className="p-3 font-medium">{process.executionHistory.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'optimization' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-zion-blue" />
                AI Optimization Recommendations
              </h3>
              <div className="space-y-4">
                {businessProcesses.map(process => (
                  <div key={process.id} className="p-4 bg-zion-slate-light/10 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium">{process.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        process.automationLevel === 'fully-automated' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {process.automationLevel === 'fully-automated' ? 'Optimized' : 'Optimization Available'}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {process.aiInsights.map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate">{insight}</span>
                        </div>
                      ))}
                    </div>
                    {process.automationLevel !== 'fully-automated' && (
                      <div className="mt-3 pt-3 border-t border-zion-slate-light/50">
                        <button className="px-4 py-2 bg-zion-blue text-white rounded-lg hover:bg-zion-blue-dark text-sm">
                          Apply AI Optimization
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-zion-blue" />
                Performance Improvement Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium text-yellow-800 dark:text-yellow-200">Manual Processes</span>
                  </div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                    {businessProcesses.filter(p => p.automationLevel === 'manual').length} processes still require manual intervention
                  </p>
                  <button className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
                    View Details
                  </button>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-800 dark:text-blue-200">Efficiency Targets</span>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                    {businessProcesses.filter(p => p.efficiency < 90).length} processes below 90% efficiency target
                  </p>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}