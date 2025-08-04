import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  BarChart3, 
  AlertTriangle, 
  Settings,
  MessageSquare,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  Activity
} from 'lucide-react';

interface ChangeInitiative {
  id: string;
  name: string;
  type: 'technology' | 'process' | 'organizational' | 'cultural';
  status: 'planning' | 'implementation' | 'monitoring' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate: string;
  progress: number;
  impact: 'low' | 'medium' | 'high';
  budget: number;
  actualCost: number;
}

interface Stakeholder {
  id: string;
  name: string;
  role: string;
  department: string;
  influence: 'high' | 'medium' | 'low';
  support: 'champion' | 'supporter' | 'neutral' | 'resistant' | 'blocker';
  communicationPreference: string;
  lastContact: string;
  nextContact: string;
}

interface TrainingProgram {
  id: string;
  title: string;
  type: 'workshop' | 'online' | 'mentoring' | 'certification';
  targetAudience: string;
  duration: string;
  status: 'planned' | 'in-progress' | 'completed';
  completionRate: number;
  satisfactionScore: number;
  startDate: string;
  endDate: string;
}

interface ChangeMetric {
  id: string;
  name: string;
  category: 'adoption' | 'productivity' | 'satisfaction' | 'cost';
  currentValue: number;
  targetValue: number;
  unit: string;
  trend: 'increasing' | 'decreasing' | 'stable';
  lastUpdated: string;
}

const AIPoweredChangeManagementPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [changeInitiatives, setChangeInitiatives] = useState<ChangeInitiative[]>([]);
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [trainingPrograms, setTrainingPrograms] = useState<TrainingProgram[]>([]);
  const [changeMetrics, setChangeMetrics] = useState<ChangeMetric[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    loadChangeData();
  }, [selectedTimeframe]);

  const loadChangeData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-change-management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timeframe: selectedTimeframe,
          action: 'getData'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setChangeInitiatives(data.changeInitiatives || []);
        setStakeholders(data.stakeholders || []);
        setTrainingPrograms(data.trainingPrograms || []);
        setChangeMetrics(data.changeMetrics || []);
      }
    } catch (error) {
      console.error('Error loading change management data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'implementation': return 'text-blue-500';
      case 'monitoring': return 'text-yellow-500';
      case 'planning': return 'text-gray-500';
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

  const getSupportColor = (support: string) => {
    switch (support) {
      case 'champion': return 'bg-green-100 text-green-800';
      case 'supporter': return 'bg-blue-100 text-blue-800';
      case 'neutral': return 'bg-gray-100 text-gray-800';
      case 'resistant': return 'bg-yellow-100 text-yellow-800';
      case 'blocker': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'initiatives', name: 'Change Initiatives', icon: TrendingUp },
    { id: 'stakeholders', name: 'Stakeholders', icon: Users },
    { id: 'training', name: 'Training Programs', icon: BookOpen },
    { id: 'analytics', name: 'Analytics', icon: Activity },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>AI-Powered Change Management System | Zion Tech Group</title>
        <meta name="description" content="Comprehensive change management with AI-powered stakeholder analysis, training programs, and change analytics." />
        <meta name="keywords" content="change management, stakeholder analysis, training programs, organizational change, AI analytics, Zion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                <TrendingUp className="h-8 w-8" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">AI-Powered Change Management</h1>
                <p className="text-gray-300">Intelligent organizational change and transformation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-2 text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Active Initiatives</p>
                        <p className="text-2xl font-bold text-white">{changeInitiatives.filter(c => c.status !== 'completed').length}</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Stakeholders</p>
                        <p className="text-2xl font-bold text-white">{stakeholders.length}</p>
                      </div>
                      <Users className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Training Programs</p>
                        <p className="text-2xl font-bold text-white">{trainingPrograms.length}</p>
                      </div>
                      <BookOpen className="h-8 w-8 text-yellow-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Avg. Progress</p>
                        <p className="text-2xl font-bold text-white">
                          {Math.round(changeInitiatives.reduce((acc, c) => acc + c.progress, 0) / Math.max(changeInitiatives.length, 1))}%
                        </p>
                      </div>
                      <Activity className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Initiatives</h3>
                    <div className="space-y-3">
                      {changeInitiatives.slice(0, 5).map((initiative) => (
                        <div key={initiative.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white font-medium">{initiative.name}</p>
                            <p className="text-gray-300 text-sm">{initiative.type} - {initiative.status}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${initiative.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-300">{initiative.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Stakeholder Support</h3>
                    <div className="space-y-3">
                      {stakeholders.slice(0, 5).map((stakeholder) => (
                        <div key={stakeholder.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white font-medium">{stakeholder.name}</p>
                            <p className="text-gray-300 text-sm">{stakeholder.role} - {stakeholder.department}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSupportColor(stakeholder.support)}`}>
                            {stakeholder.support}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Change Initiatives Tab */}
            {activeTab === 'initiatives' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Change Initiatives</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Add Initiative
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/10">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Initiative</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Priority</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Progress</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Impact</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {changeInitiatives.map((initiative) => (
                          <tr key={initiative.id} className="hover:bg-white/5">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">{initiative.name}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{initiative.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(initiative.status)}`}>
                                {initiative.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(initiative.priority)}`}>
                                {initiative.priority}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                                  <div 
                                    className="bg-blue-500 h-2 rounded-full" 
                                    style={{ width: `${initiative.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-300">{initiative.progress}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{initiative.impact}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {initiative.startDate} - {initiative.endDate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Stakeholders Tab */}
            {activeTab === 'stakeholders' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Stakeholder Management</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Add Stakeholder
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/10">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stakeholder</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Influence</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Support</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Contact</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Next Contact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {stakeholders.map((stakeholder) => (
                          <tr key={stakeholder.id} className="hover:bg-white/5">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">{stakeholder.name}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{stakeholder.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{stakeholder.department}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{stakeholder.influence}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSupportColor(stakeholder.support)}`}>
                                {stakeholder.support}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{stakeholder.lastContact}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{stakeholder.nextContact}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Training Programs Tab */}
            {activeTab === 'training' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Training Programs</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Add Program
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/10">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Program</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Target Audience</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Completion</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Satisfaction</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {trainingPrograms.map((program) => (
                          <tr key={program.id} className="hover:bg-white/5">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">{program.title}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{program.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{program.targetAudience}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                program.status === 'completed' ? 'bg-green-100 text-green-800' :
                                program.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {program.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ width: `${program.completionRate}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-300">{program.completionRate}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{program.satisfactionScore}/10</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{program.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Analytics & Insights</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Change Metrics</h3>
                    <div className="space-y-4">
                      {changeMetrics.map((metric) => (
                        <div key={metric.id}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300">{metric.name}</span>
                            <span className="text-white">{metric.currentValue} / {metric.targetValue} {metric.unit}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${
                                metric.currentValue >= metric.targetValue ? 'bg-green-500' : 
                                metric.currentValue >= metric.targetValue * 0.7 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${Math.min((metric.currentValue / metric.targetValue) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Stakeholder Support Distribution</h3>
                    <div className="space-y-4">
                      {['champion', 'supporter', 'neutral', 'resistant', 'blocker'].map((support) => {
                        const count = stakeholders.filter(s => s.support === support).length;
                        const percentage = stakeholders.length > 0 ? (count / stakeholders.length) * 100 : 0;
                        return (
                          <div key={support}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-300 capitalize">{support}</span>
                              <span className="text-white">{count} ({percentage.toFixed(1)}%)</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${getSupportColor(support).replace('text-', 'bg-').replace('-800', '-500')}`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">AI Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <h4 className="font-semibold text-blue-300 mb-2">Change Readiness</h4>
                      <p className="text-gray-300 text-sm">Organization shows 75% change readiness. Focus on resistant stakeholders to improve adoption rates.</p>
                    </div>
                    <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-300 mb-2">Training Effectiveness</h4>
                      <p className="text-gray-300 text-sm">Training programs show 85% satisfaction rate. Consider expanding online training modules.</p>
                    </div>
                    <div className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                      <h4 className="font-semibold text-yellow-300 mb-2">Communication Strategy</h4>
                      <p className="text-gray-300 text-sm">Increase communication frequency with neutral stakeholders to convert them to supporters.</p>
                    </div>
                    <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <h4 className="font-semibold text-purple-300 mb-2">Risk Mitigation</h4>
                      <p className="text-gray-300 text-sm">High-priority initiatives need additional stakeholder engagement to reduce resistance.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Alerts Tab */}
            {activeTab === 'alerts' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Alerts & Notifications</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6 text-red-400" />
                      <div>
                        <h4 className="font-semibold text-red-300">Critical Stakeholder Resistance</h4>
                        <p className="text-gray-300 text-sm">3 high-influence stakeholders showing resistance to Digital Transformation initiative. Immediate intervention required.</p>
                        <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/20 backdrop-blur-md rounded-lg p-4 border border-yellow-500/30">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-6 w-6 text-yellow-400" />
                      <div>
                        <h4 className="font-semibold text-yellow-300">Training Deadline</h4>
                        <p className="text-gray-300 text-sm">New System Training program completion rate below 60%. Consider extending deadline or additional support.</p>
                        <p className="text-gray-400 text-xs mt-1">4 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500/20 backdrop-blur-md rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-blue-400" />
                      <div>
                        <h4 className="font-semibold text-blue-300">Progress Milestone</h4>
                        <p className="text-gray-300 text-sm">Process Optimization initiative reached 75% completion. Ready for next phase implementation.</p>
                        <p className="text-gray-400 text-xs mt-1">6 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/20 backdrop-blur-md rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <div>
                        <h4 className="font-semibold text-green-300">Success Milestone</h4>
                        <p className="text-gray-300 text-sm">Cultural Change initiative successfully completed with 92% stakeholder satisfaction rate.</p>
                        <p className="text-gray-400 text-xs mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">AI-Powered Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/ai-powered-hr-management" className="hover:text-white">HR Management</Link></li>
                <li><Link href="/ai-powered-vendor-management" className="hover:text-white">Vendor Management</Link></li>
                <li><Link href="/ai-powered-facility-management" className="hover:text-white">Facility Management</Link></li>
                <li><Link href="/ai-powered-change-management" className="hover:text-white">Change Management</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/api" className="hover:text-white">API Reference</Link></li>
                <li><Link href="/support" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-300 text-center">&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIPoweredChangeManagementPage; 