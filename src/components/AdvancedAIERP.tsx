import React, { useState, useRef, useEffect } from 'react';
import {
  Building2, Brain, Zap, Settings, X, Maximize2, Minimize2, Plus, Search,
  Filter, Calendar, Clock, CheckCircle, AlertCircle, UserPlus, Lock, Unlock,
  BarChart3, TrendingUp, Target, Activity, Users, FileText, GitBranch,
  Workflow, Automation, Bot, Sparkles, Target as TargetIcon, GanttChart, Milestone,
  Flag, AlertTriangle, Info, Star, Award, Trophy, Rocket, Lightbulb,
  DollarSign, Package, Truck, Warehouse, ShoppingCart, CreditCard, Receipt,
  Calculator, PieChart, LineChart, BarChart, Eye, EyeOff, Download, RefreshCw,
  MoreVertical, Edit3, Trash2, Database, Server, Network, Cpu, HardDrive
} from 'lucide-react';

interface ERPModule {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'maintenance';
  health: number;
  lastUpdated: string;
  aiInsights: string[];
  automationRules: number;
  performance: number;
}

interface BusinessProcess {
  id: string;
  name: string;
  department: string;
  status: 'running' | 'completed' | 'failed' | 'pending';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startTime: string;
  estimatedDuration: string;
  actualDuration?: string;
  assignedUsers: string[];
  dependencies: string[];
  aiOptimization: string;
}

interface ResourceAllocation {
  id: string;
  resourceType: 'human' | 'financial' | 'physical' | 'digital';
  name: string;
  department: string;
  currentUtilization: number;
  capacity: number;
  cost: number;
  roi: number;
  aiRecommendations: string[];
}

interface FinancialMetric {
  id: string;
  name: string;
  currentValue: number;
  previousValue: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  variance: number;
  aiPrediction: number;
  confidence: number;
}

const mockERPModules: ERPModule[] = [
  {
    id: '1',
    name: 'Financial Management',
    status: 'active',
    health: 95,
    lastUpdated: '2024-01-15T10:30:00Z',
    aiInsights: ['Revenue optimization opportunity detected', 'Cost reduction potential in procurement'],
    automationRules: 12,
    performance: 92
  },
  {
    id: '2',
    name: 'Human Resources',
    status: 'active',
    health: 88,
    lastUpdated: '2024-01-15T09:15:00Z',
    aiInsights: ['Workforce planning optimization needed', 'Employee satisfaction trending upward'],
    automationRules: 8,
    performance: 87
  },
  {
    id: '3',
    name: 'Supply Chain',
    status: 'maintenance',
    health: 72,
    lastUpdated: '2024-01-15T08:45:00Z',
    aiInsights: ['Inventory optimization required', 'Supplier performance declining'],
    automationRules: 15,
    performance: 78
  },
  {
    id: '4',
    name: 'Customer Relationship',
    status: 'active',
    health: 91,
    lastUpdated: '2024-01-15T11:00:00Z',
    aiInsights: ['Customer churn risk identified', 'Upselling opportunities detected'],
    automationRules: 20,
    performance: 89
  }
];

const mockBusinessProcesses: BusinessProcess[] = [
  {
    id: '1',
    name: 'Order Processing',
    department: 'Sales',
    status: 'running',
    priority: 'high',
    startTime: '2024-01-15T10:00:00Z',
    estimatedDuration: '2h',
    actualDuration: '1h 45m',
    assignedUsers: ['John Doe', 'Jane Smith'],
    dependencies: ['Inventory Check', 'Credit Verification'],
    aiOptimization: 'Process optimized by 15% using ML algorithms'
  },
  {
    id: '2',
    name: 'Invoice Generation',
    department: 'Finance',
    status: 'completed',
    priority: 'medium',
    startTime: '2024-01-15T09:00:00Z',
    estimatedDuration: '1h',
    actualDuration: '45m',
    assignedUsers: ['Mike Johnson'],
    dependencies: ['Order Processing'],
    aiOptimization: 'Automated using AI templates and validation'
  },
  {
    id: '3',
    name: 'Inventory Replenishment',
    department: 'Operations',
    status: 'pending',
    priority: 'critical',
    startTime: '2024-01-15T12:00:00Z',
    estimatedDuration: '4h',
    assignedUsers: ['Sarah Wilson', 'Tom Brown'],
    dependencies: ['Demand Forecasting', 'Supplier Approval'],
    aiOptimization: 'AI-driven demand prediction and optimal ordering'
  }
];

const mockResourceAllocations: ResourceAllocation[] = [
  {
    id: '1',
    resourceType: 'human',
    name: 'Development Team',
    department: 'IT',
    currentUtilization: 85,
    capacity: 100,
    cost: 150000,
    roi: 320,
    aiRecommendations: ['Consider adding 2 developers', 'Optimize workload distribution']
  },
  {
    id: '2',
    resourceType: 'financial',
    name: 'Marketing Budget',
    department: 'Marketing',
    currentUtilization: 67,
    capacity: 200000,
    cost: 134000,
    roi: 280,
    aiRecommendations: ['Increase digital ad spend', 'Focus on high-ROI channels']
  },
  {
    id: '3',
    resourceType: 'physical',
    name: 'Warehouse Space',
    department: 'Operations',
    currentUtilization: 92,
    capacity: 10000,
    cost: 50000,
    roi: 150,
    aiRecommendations: ['Consider expansion', 'Optimize storage layout']
  }
];

const mockFinancialMetrics: FinancialMetric[] = [
  {
    id: '1',
    name: 'Revenue',
    currentValue: 2500000,
    previousValue: 2300000,
    target: 3000000,
    trend: 'up',
    variance: 8.7,
    aiPrediction: 2750000,
    confidence: 89
  },
  {
    id: '2',
    name: 'Operating Expenses',
    currentValue: 1800000,
    previousValue: 1750000,
    target: 1700000,
    trend: 'up',
    variance: -2.9,
    aiPrediction: 1850000,
    confidence: 76
  },
  {
    id: '3',
    name: 'Profit Margin',
    currentValue: 28,
    previousValue: 24,
    target: 30,
    trend: 'up',
    variance: 16.7,
    aiPrediction: 29.5,
    confidence: 82
  }
];

export function AdvancedAIERP() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'processes' | 'resources' | 'finance'>('overview');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAIInsights, setShowAIInsights] = useState(true);
  const [showAutomation, setShowAutomation] = useState(true);
  const [erpModules, setErpModules] = useState<ERPModule[]>(mockERPModules);
  const [businessProcesses, setBusinessProcesses] = useState<BusinessProcess[]>(mockBusinessProcesses);
  const [resourceAllocations, setResourceAllocations] = useState<ResourceAllocation[]>(mockResourceAllocations);
  const [financialMetrics, setFinancialMetrics] = useState<FinancialMetric[]>(mockFinancialMetrics);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'inactive': return 'text-red-500';
      case 'maintenance': return 'text-yellow-500';
      case 'running': return 'text-blue-500';
      case 'completed': return 'text-green-500';
      case 'failed': return 'text-red-500';
      case 'pending': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      case 'stable': return <Minus className="w-4 h-4 text-gray-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'human': return <Users className="w-5 h-5" />;
      case 'financial': return <DollarSign className="w-5 h-5" />;
      case 'physical': return <Warehouse className="w-5 h-5" />;
      case 'digital': return <Server className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        title="Advanced AI ERP"
      >
        <Building2 className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Advanced AI ERP
        </span>
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-lg z-50">
        <div className="flex items-center justify-between p-3 border-b border-zion-slate-light">
          <h3 className="text-sm font-semibold text-zion-slate-dark dark:text-white">AI ERP</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="text-zion-slate-dark dark:text-white hover:text-zion-blue transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zion-slate-dark dark:text-white hover:text-red-500 transition-colors"
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
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="flex items-center space-x-3">
          <Building2 className="w-6 h-6" />
          <h2 className="text-xl font-bold">Advanced AI-Powered ERP</h2>
          <span className="bg-white/20 px-2 py-1 rounded-full text-sm">Enterprise</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-zion-slate-50 dark:bg-zion-slate-dark">
        <div className="flex items-center space-x-4">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate-dark dark:text-white"
          >
            <option value="all">All Departments</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="Operations">Operations</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate-dark dark:text-white"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="maintenance">Maintenance</option>
            <option value="running">Running</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
            <option value="pending">Pending</option>
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate-dark dark:text-white w-64"
            />
            <Search className="w-5 h-5 text-zion-slate-dark dark:text-white" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showAIInsights}
              onChange={(e) => setShowAIInsights(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-zion-slate-dark dark:text-white">AI Insights</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showAutomation}
              onChange={(e) => setShowAutomation(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-zion-slate-dark dark:text-white">Automation</span>
          </label>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'modules', label: 'ERP Modules', icon: Building2 },
          { id: 'processes', label: 'Business Processes', icon: Workflow },
          { id: 'resources', label: 'Resource Allocation', icon: Package },
          { id: 'finance', label: 'Financial Metrics', icon: DollarSign }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center space-x-2 px-6 py-3 border-b-2 transition-colors ${
              activeTab === id
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-zion-slate-dark dark:text-white hover:text-purple-600'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* System Health Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {erpModules.map((module) => (
                <div key={module.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-zion-slate-dark dark:text-white">{module.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(module.status)}`}>
                      {module.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate-dark dark:text-white">Health</span>
                      <span className="text-sm font-semibold">{module.health}%</span>
                    </div>
                    <div className="w-full bg-zion-slate-light rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          module.health >= 80 ? 'bg-green-500' : module.health >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${module.health}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-zion-slate-dark dark:text-white">
                      <span>Performance: {module.performance}%</span>
                      <span>Rules: {module.automationRules}</span>
                    </div>
                  </div>
                  {showAIInsights && module.aiInsights.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-zion-slate-light">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="w-4 h-4 text-purple-500" />
                        <span className="text-xs font-semibold text-purple-600">AI Insights</span>
                      </div>
                      <ul className="space-y-1">
                        {module.aiInsights.slice(0, 2).map((insight, index) => (
                          <li key={index} className="text-xs text-zion-slate-dark dark:text-white">
                            • {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Plus, label: 'New Process', color: 'bg-green-500' },
                  { icon: Settings, label: 'System Config', color: 'bg-blue-500' },
                  { icon: BarChart3, label: 'Generate Report', color: 'bg-purple-500' },
                  { icon: RefreshCw, label: 'Sync Data', color: 'bg-orange-500' }
                ].map(({ icon: Icon, label, color }, index) => (
                  <button
                    key={index}
                    className={`${color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center space-y-2`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">ERP Modules</h3>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Module</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {erpModules.map((module) => (
                <div key={module.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">{module.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(module.status)}`}>
                        {module.status}
                      </span>
                      <button className="text-zion-slate-dark dark:text-white hover:text-purple-600 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Health</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-zion-slate-light rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              module.health >= 80 ? 'bg-green-500' : module.health >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${module.health}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{module.health}%</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Performance</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-zion-slate-light rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              module.performance >= 80 ? 'bg-green-500' : module.performance >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${module.performance}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{module.performance}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-dark dark:text-white mb-4">
                    <span>Last Updated: {new Date(module.lastUpdated).toLocaleString()}</span>
                    <span>Automation Rules: {module.automationRules}</span>
                  </div>
                  {showAIInsights && module.aiInsights.length > 0 && (
                    <div className="border-t border-zion-slate-light pt-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Brain className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-semibold text-purple-600">AI Insights</span>
                      </div>
                      <ul className="space-y-2">
                        {module.aiInsights.map((insight, index) => (
                          <li key={index} className="text-sm text-zion-slate-dark dark:text-white flex items-start space-x-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'processes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">Business Processes</h3>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Process</span>
              </button>
            </div>
            <div className="space-y-4">
              {businessProcesses.map((process) => (
                <div key={process.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">{process.name}</h4>
                      <p className="text-sm text-zion-slate-dark dark:text-white">{process.department}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(process.status)}`}>
                        {process.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(process.priority)}`}>
                        {process.priority}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Start Time</span>
                      <p className="text-sm font-medium">{new Date(process.startTime).toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Estimated Duration</span>
                      <p className="text-sm font-medium">{process.estimatedDuration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Actual Duration</span>
                      <p className="text-sm font-medium">{process.actualDuration || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Assigned Users</span>
                      <p className="text-sm font-medium">{process.assignedUsers.length}</p>
                    </div>
                  </div>
                  <div className="border-t border-zion-slate-light pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-semibold text-purple-600">AI Optimization</span>
                    </div>
                    <p className="text-sm text-zion-slate-dark dark:text-white">{process.aiOptimization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">Resource Allocation</h3>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Allocate Resource</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {resourceAllocations.map((resource) => (
                <div key={resource.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        {getResourceTypeIcon(resource.resourceType)}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">{resource.name}</h4>
                        <p className="text-sm text-zion-slate-dark dark:text-white">{resource.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-zion-slate-dark dark:text-white">{formatCurrency(resource.cost)}</p>
                      <p className="text-sm text-zion-slate-dark dark:text-white">ROI: {resource.roi}%</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-zion-slate-dark dark:text-white">Utilization</span>
                        <span className="text-sm font-medium">{resource.currentUtilization}%</span>
                      </div>
                      <div className="w-full bg-zion-slate-light rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            resource.currentUtilization >= 80 ? 'bg-green-500' : resource.currentUtilization >= 60 ? 'bg-yellow-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${resource.currentUtilization}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-zion-slate-dark dark:text-white">Capacity</span>
                        <span className="text-sm font-medium">{resource.capacity}</span>
                      </div>
                    </div>
                  </div>
                  {showAIInsights && resource.aiRecommendations.length > 0 && (
                    <div className="border-t border-zion-slate-light pt-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Brain className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-semibold text-purple-600">AI Recommendations</span>
                      </div>
                      <ul className="space-y-2">
                        {resource.aiRecommendations.map((recommendation, index) => (
                          <li key={index} className="text-sm text-zion-slate-dark dark:text-white flex items-start space-x-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{recommendation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">Financial Metrics</h3>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {financialMetrics.map((metric) => (
                <div key={metric.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">{metric.name}</h4>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-zion-slate-dark dark:text-white">
                        {metric.name === 'Profit Margin' ? formatPercentage(metric.currentValue) : formatCurrency(metric.currentValue)}
                      </p>
                      <p className="text-sm text-zion-slate-dark dark:text-white">Current</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-dark dark:text-white">Previous</span>
                        <p className="font-medium">
                          {metric.name === 'Profit Margin' ? formatPercentage(metric.previousValue) : formatCurrency(metric.previousValue)}
                        </p>
                      </div>
                      <div>
                        <span className="text-zion-slate-dark dark:text-white">Target</span>
                        <p className="font-medium">
                          {metric.name === 'Profit Margin' ? formatPercentage(metric.target) : formatCurrency(metric.target)}
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-zion-slate-light pt-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-dark dark:text-white">Variance</span>
                        <span className={`font-medium ${metric.variance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.variance >= 0 ? '+' : ''}{metric.variance.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    {showAIInsights && (
                      <div className="border-t border-zion-slate-light pt-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Brain className="w-4 h-4 text-purple-500" />
                          <span className="text-xs font-semibold text-purple-600">AI Prediction</span>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-purple-600">
                            {metric.name === 'Profit Margin' ? formatPercentage(metric.aiPrediction) : formatCurrency(metric.aiPrediction)}
                          </p>
                          <p className="text-xs text-zion-slate-dark dark:text-white">Confidence: {metric.confidence}%</p>
                        </div>
                      </div>
                    )}
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