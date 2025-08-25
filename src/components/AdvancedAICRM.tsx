import React, { useState, useRef, useEffect } from 'react';
import { 
  Users, Brain, Zap, Settings, X, Maximize2, Minimize2, Plus, Search, 
  Filter, Calendar, Clock, CheckCircle, AlertCircle, UserPlus, Lock, Unlock,
  BarChart3, TrendingUp, Target, Activity, FileText, GitBranch, 
  Workflow, Automation, Bot, Sparkles, Target, GanttChart, Milestone,
  Flag, AlertTriangle, Info, Star, Award, Trophy, Rocket, Lightbulb,
  DollarSign, Phone, Mail, MapPin, Building, UserCheck, UserX, UserMinus,
  PhoneCall, MessageSquare, Mail as MailIcon, Calendar as CalendarIcon,
  PieChart, LineChart, BarChart, Target as TargetIcon, TrendingDown,
  Eye, EyeOff, Download, RefreshCw, MoreVertical, Edit3, Trash2
} from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  industry: string;
  status: 'lead' | 'prospect' | 'customer' | 'churned' | 'inactive';
  priority: 'low' | 'medium' | 'high' | 'critical';
  value: number;
  lastContact: string;
  nextFollowUp: string;
  tags: string[];
  aiInsights: AIInsight[];
  interactions: Interaction[];
  opportunities: Opportunity[];
  createdAt: string;
}

interface Interaction {
  id: string;
  type: 'call' | 'email' | 'meeting' | 'demo' | 'proposal';
  summary: string;
  outcome: 'positive' | 'neutral' | 'negative';
  nextAction: string;
  timestamp: string;
  duration?: number;
  notes: string;
}

interface Opportunity {
  id: string;
  title: string;
  description: string;
  value: number;
  stage: 'discovery' | 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  probability: number;
  expectedCloseDate: string;
  assignedTo: string;
  aiPredictions: AIPrediction[];
  createdAt: string;
}

interface AIInsight {
  id: string;
  type: 'opportunity' | 'risk' | 'optimization' | 'trend';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  confidence: number;
  recommendations: string[];
  timestamp: string;
}

interface AIPrediction {
  id: string;
  metric: string;
  predictedValue: number;
  confidence: number;
  factors: string[];
  timestamp: string;
}

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechCorp Solutions',
    email: 'sarah.johnson@techcorp.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    industry: 'Technology',
    status: 'prospect',
    priority: 'high',
    value: 50000,
    lastContact: '2024-01-15',
    nextFollowUp: '2024-01-25',
    tags: ['Enterprise', 'AI/ML', 'High Value'],
    aiInsights: [
      {
        id: '1',
        type: 'opportunity',
        title: 'High Conversion Probability',
        description: 'Customer shows strong interest in AI solutions with 87% likelihood to convert.',
        impact: 'high',
        confidence: 0.87,
        recommendations: [
          'Schedule technical demo within 7 days',
          'Prepare customized proposal with AI use cases',
          'Involve senior technical team in next meeting'
        ],
        timestamp: '2024-01-20T10:30:00Z'
      }
    ],
    interactions: [
      {
        id: '1',
        type: 'call',
        summary: 'Initial discovery call - discussed AI implementation needs',
        outcome: 'positive',
        nextAction: 'Schedule technical demo',
        timestamp: '2024-01-15T14:00:00Z',
        duration: 45,
        notes: 'Customer is looking for AI-powered analytics solution. Budget approved. Decision maker identified.'
      }
    ],
    opportunities: [
      {
        id: '1',
        title: 'AI Analytics Platform Implementation',
        description: 'Full-stack AI analytics solution for enterprise data processing',
        value: 50000,
        stage: 'qualification',
        probability: 75,
        expectedCloseDate: '2024-03-31',
        assignedTo: 'Alex Rodriguez',
        aiPredictions: [
          {
            id: '1',
            metric: 'Close Probability',
            predictedValue: 78,
            confidence: 0.82,
            factors: ['Strong technical fit', 'Budget approved', 'Decision maker engaged'],
            timestamp: '2024-01-20T10:30:00Z'
          }
        ],
        createdAt: '2024-01-15'
      }
    ],
    createdAt: '2024-01-01'
  }
];

export function AdvancedAICRM() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'customers' | 'opportunities' | 'insights' | 'analytics'>('overview');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [showAIInsights, setShowAIInsights] = useState(true);
  const [showPredictions, setShowPredictions] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'lead': return 'text-blue-500';
      case 'prospect': return 'text-yellow-500';
      case 'customer': return 'text-green-500';
      case 'churned': return 'text-red-500';
      case 'inactive': return 'text-gray-500';
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

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'discovery': return 'text-blue-500';
      case 'qualification': return 'text-yellow-500';
      case 'proposal': return 'text-purple-500';
      case 'negotiation': return 'text-orange-500';
      case 'closed-won': return 'text-green-500';
      case 'closed-lost': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50"
      >
        <Users className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50">
        <div className="flex items-center justify-between p-3 border-b border-zion-slate-light">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">AI CRM</span>
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
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced AI-Powered CRM & Sales Intelligence</h2>
            <p className="text-sm text-blue-100">Intelligent customer management, sales forecasting & relationship analytics</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
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
            <option value="lead">Lead</option>
            <option value="prospect">Prospect</option>
            <option value="customer">Customer</option>
            <option value="churned">Churned</option>
            <option value="inactive">Inactive</option>
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
              placeholder="Search customers..."
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
              showAIInsights ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Brain className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowPredictions(!showPredictions)}
            className={`p-2 rounded-lg transition-colors ${
              showPredictions ? 'bg-cyan-100 text-cyan-700' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
          </button>
          <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <BarChart3 className="w-4 h-4 inline mr-2" />
          Overview
        </button>
        <button
          onClick={() => setActiveTab('customers')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'customers'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Users className="w-4 h-4 inline mr-2" />
          Customers
        </button>
        <button
          onClick={() => setActiveTab('opportunities')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'opportunities'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Target className="w-4 h-4 inline mr-2" />
          Opportunities
        </button>
        <button
          onClick={() => setActiveTab('insights')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'insights'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Brain className="w-4 h-4 inline mr-2" />
          AI Insights
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'analytics'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <BarChart className="w-4 h-4 inline mr-2" />
          Analytics
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
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Customers</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,247</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pipeline Value</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">$2.4M</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Active Opportunities</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">89</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</p>
                    <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">23.4%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Powered Recommendations */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                <Brain className="w-5 h-5 inline mr-2" />
                AI-Powered Sales Recommendations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-zion-slate p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">High-Value Prospect</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Sarah Johnson at TechCorp shows 87% conversion probability. Schedule demo within 7 days.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-blue-600 dark:text-blue-400">Confidence: 87%</span>
                    <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-zion-slate p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Rocket className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">Pipeline Optimization</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Focus on 15 high-probability opportunities to increase Q1 revenue by 34%.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-blue-600 dark:text-blue-400">Impact: High</span>
                    <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                      Optimize
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <Activity className="w-5 h-5 inline mr-2" />
                Recent Sales Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    New opportunity created: "AI Analytics Platform" - $50K value
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
                    2 hours ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Customer interaction: Discovery call with Sarah Johnson (TechCorp)
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
                    1 day ago
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    AI prediction: Q1 revenue forecast updated to $2.4M (+12%)
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
                    2 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {customer.name}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(customer.status)} bg-opacity-10`}>
                        {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(customer.priority)} bg-opacity-10`}>
                        {customer.priority.charAt(0).toUpperCase() + customer.priority.slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <Building className="w-4 h-4 inline mr-1" />
                          {customer.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <MailIcon className="w-4 h-4 inline mr-1" />
                          {customer.email}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <Phone className="w-4 h-4 inline mr-1" />
                          {customer.phone}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {customer.location}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          ${customer.value.toLocaleString()}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <CalendarIcon className="w-4 h-4 inline mr-1" />
                          Next: {customer.nextFollowUp}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {customer.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                {showAIInsights && customer.aiInsights.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Brain className="w-4 h-4 inline mr-1" />
                      AI Insights
                    </h5>
                    <div className="space-y-2">
                      {customer.aiInsights.map((insight) => (
                        <div key={insight.id} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                              {insight.title}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getImpactColor(insight.impact)} bg-opacity-10`}>
                              {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)} Impact
                            </span>
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                            {insight.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-blue-600 dark:text-blue-400">
                              Confidence: {(insight.confidence * 100).toFixed(0)}%
                            </span>
                            <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
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

        {activeTab === 'opportunities' && (
          <div className="space-y-4">
            {customers.flatMap(customer => customer.opportunities).map((opportunity) => (
              <div key={opportunity.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {opportunity.title}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStageColor(opportunity.stage)} bg-opacity-10`}>
                        {opportunity.stage.charAt(0).toUpperCase() + opportunity.stage.slice(1)}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        ${opportunity.value.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {opportunity.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Probability</p>
                        <p className="text-gray-600 dark:text-gray-400">{opportunity.probability}%</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Expected Close</p>
                        <p className="text-gray-600 dark:text-gray-400">{opportunity.expectedCloseDate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Assigned To</p>
                        <p className="text-gray-600 dark:text-gray-400">{opportunity.assignedTo}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* AI Predictions */}
                {showPredictions && opportunity.aiPredictions.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <TrendingUp className="w-4 h-4 inline mr-1" />
                      AI Predictions
                    </h5>
                    <div className="space-y-2">
                      {opportunity.aiPredictions.map((prediction) => (
                        <div key={prediction.id} className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-700">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">
                              {prediction.metric}: {prediction.predictedValue}%
                            </span>
                            <span className="text-xs text-cyan-600 dark:text-cyan-400">
                              Confidence: {(prediction.confidence * 100).toFixed(0)}%
                            </span>
                          </div>
                          <div className="text-xs text-cyan-700 dark:text-cyan-300">
                            <p className="font-medium mb-1">Key Factors:</p>
                            <ul className="space-y-1">
                              {prediction.factors.map((factor, index) => (
                                <li key={index}>• {factor}</li>
                              ))}
                            </ul>
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

        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                <Brain className="w-5 h-5 inline mr-2" />
                AI-Powered Sales Insights
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Intelligent analysis and recommendations to optimize sales performance and customer relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customers.flatMap(customer => customer.aiInsights).map((insight) => (
                <div key={insight.id} className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${
                        insight.type === 'opportunity' ? 'bg-green-100 dark:bg-green-900' :
                        insight.type === 'risk' ? 'bg-red-100 dark:bg-red-900' :
                        insight.type === 'optimization' ? 'bg-blue-100 dark:bg-blue-900' :
                        'bg-yellow-100 dark:bg-yellow-900'
                      }`}>
                        {insight.type === 'opportunity' && <Target className="w-5 h-5 text-green-600 dark:text-green-400" />}
                        {insight.type === 'risk' && <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                        {insight.type === 'optimization' && <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                        {insight.type === 'trend' && <TrendingUp className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getImpactColor(insight.impact)} bg-opacity-10`}>
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
                          <span className="text-blue-500 mr-2">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      Confidence: {(insight.confidence * 100).toFixed(0)}%
                    </span>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Insights
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-100 mb-4">
                <BarChart className="w-5 h-5 inline mr-2" />
                Sales Analytics & Performance Metrics
              </h3>
              <p className="text-cyan-700 dark:text-cyan-300 mb-4">
                Comprehensive analytics dashboard with AI-powered insights and performance tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  <LineChart className="w-5 h-5 inline mr-2" />
                  Sales Pipeline Trends
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Q1 Forecast</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">$2.4M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</span>
                    <span className="text-sm font-medium text-green-600">23.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Avg Deal Size</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">$45.2K</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  <PieChart className="w-5 h-5 inline mr-2" />
                  Customer Distribution
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Leads</span>
                    <span className="text-sm font-medium text-blue-600">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Prospects</span>
                    <span className="text-sm font-medium text-yellow-600">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Customers</span>
                    <span className="text-sm font-medium text-green-600">27%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <TrendingUp className="w-5 h-5 inline mr-2" />
                AI-Powered Predictions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Revenue Forecast</h5>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">$2.8M</p>
                  <p className="text-sm text-green-700 dark:text-green-300">Q2 2024 (+16.7%)</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Customer Growth</h5>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">+34</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Next 90 days</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Conversion Rate</h5>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">26.8%</p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Q2 2024 (+3.4%)</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}