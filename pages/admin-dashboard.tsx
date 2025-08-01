import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Agent {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'idle' | 'error' | 'stopped';
  workload: number;
  currentTask: string;
  nextSteps: string[];
  services: string[];
  createdAt: string;
  lastActive: string;
  performance: {
    tasksCompleted: number;
    successRate: number;
    avgResponseTime: number;
  };
  capabilities: string[];
  dependencies: string[];
}

interface SystemMetrics {
  totalAgents: number;
  activeAgents: number;
  totalTasks: number;
  completedTasks: number;
  systemHealth: 'excellent' | 'good' | 'warning' | 'critical';
  avgResponseTime: number;
  errorRate: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics>({
    totalAgents: 0,
    activeAgents: 0,
    totalTasks: 0,
    completedTasks: 0,
    systemHealth: 'good',
    avgResponseTime: 0,
    errorRate: 0
  });
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isCreatingAgent, setIsCreatingAgent] = useState(false);
  const [newAgentData, setNewAgentData] = useState({
    name: '',
    type: '',
    capabilities: [] as string[],
    services: [] as string[]
  });
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    checkAuth();
    loadAgents();
    loadSystemMetrics();
    const interval = setInterval(() => {
      loadAgents();
      loadSystemMetrics();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
      return;
    }
    
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.email !== 'kleber@ziontechgroup.com') {
      router.push('/dashboard');
      return;
    }
    
    setUser(user);
  };

  const loadAgents = async () => {
    try {
      const { data, error } = await supabase
        .from('autonomous_agents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAgents(data || []);
    } catch (error) {
      console.error('Error loading agents:', error);
    }
  };

  const loadSystemMetrics = async () => {
    try {
      const { data, error } = await supabase
        .from('system_metrics')
        .select('*')
        .single();

      if (error) throw error;
      setSystemMetrics(data || {
        totalAgents: agents.length,
        activeAgents: agents.filter(a => a.status === 'active').length,
        totalTasks: 0,
        completedTasks: 0,
        systemHealth: 'good',
        avgResponseTime: 0,
        errorRate: 0
      });
    } catch (error) {
      console.error('Error loading system metrics:', error);
    }
  };

  const createAgent = async () => {
    try {
      const { data, error } = await supabase
        .from('autonomous_agents')
        .insert([{
          name: newAgentData.name,
          type: newAgentData.type,
          status: 'idle',
          workload: 0,
          current_task: 'Initializing...',
          next_steps: [],
          services: newAgentData.services,
          capabilities: newAgentData.capabilities,
          dependencies: [],
          performance: {
            tasksCompleted: 0,
            successRate: 100,
            avgResponseTime: 0
          }
        }])
        .select()
        .single();

      if (error) throw error;
      
      setAgents([data, ...agents]);
      setIsCreatingAgent(false);
      setNewAgentData({ name: '', type: '', capabilities: [], services: [] });
    } catch (error) {
      console.error('Error creating agent:', error);
    }
  };

  const updateAgentStatus = async (agentId: string, status: string) => {
    try {
      const { error } = await supabase
        .from('autonomous_agents')
        .update({ status })
        .eq('id', agentId);

      if (error) throw error;
      loadAgents();
    } catch (error) {
      console.error('Error updating agent status:', error);
    }
  };

  const deleteAgent = async (agentId: string) => {
    try {
      const { error } = await supabase
        .from('autonomous_agents')
        .delete()
        .eq('id', agentId);

      if (error) throw error;
      loadAgents();
    } catch (error) {
      console.error('Error deleting agent:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      case 'stopped': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  if (!user) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Autonomous Agent Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">Manage and monitor AI agents and automation systems</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getHealthColor(systemMetrics.systemHealth)}`}>
                System Health: {systemMetrics.systemHealth}
              </div>
              <button
                onClick={() => setIsCreatingAgent(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Create New Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'agents', name: 'Agents' },
              { id: 'analytics', name: 'Analytics' },
              { id: 'automation', name: 'Automation' },
              { id: 'settings', name: 'Settings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* System Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Agents</p>
                    <p className="text-2xl font-semibold text-gray-900">{systemMetrics.totalAgents}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Active Agents</p>
                    <p className="text-2xl font-semibold text-gray-900">{systemMetrics.activeAgents}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Tasks</p>
                    <p className="text-2xl font-semibold text-gray-900">{systemMetrics.totalTasks}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Completed Tasks</p>
                    <p className="text-2xl font-semibold text-gray-900">{systemMetrics.completedTasks}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Agents */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Agents</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workload</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Task</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {agents.slice(0, 5).map((agent) => (
                      <tr key={agent.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-sm font-medium text-blue-600">{agent.name.charAt(0)}</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                              <div className="text-sm text-gray-500">Created {new Date(agent.createdAt).toLocaleDateString()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(agent.status)} text-white`}>
                            {agent.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.workload}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.currentTask}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedAgent(agent)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            View
                          </button>
                          <button
                            onClick={() => updateAgentStatus(agent.id, agent.status === 'active' ? 'stopped' : 'active')}
                            className="text-green-600 hover:text-green-900"
                          >
                            {agent.status === 'active' ? 'Stop' : 'Start'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">All Agents</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {agents.map((agent) => (
                      <tr key={agent.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-sm font-medium text-blue-600">{agent.name.charAt(0)}</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                              <div className="text-sm text-gray-500">{agent.capabilities.join(', ')}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(agent.status)} text-white`}>
                            {agent.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <div>Tasks: {agent.performance.tasksCompleted}</div>
                            <div>Success: {agent.performance.successRate}%</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(agent.lastActive).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedAgent(agent)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            View
                          </button>
                          <button
                            onClick={() => updateAgentStatus(agent.id, agent.status === 'active' ? 'stopped' : 'active')}
                            className="text-green-600 hover:text-green-900 mr-3"
                          >
                            {agent.status === 'active' ? 'Stop' : 'Start'}
                          </button>
                          <button
                            onClick={() => deleteAgent(agent.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">System Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Average Response Time</span>
                      <span>{systemMetrics.avgResponseTime}ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.min(systemMetrics.avgResponseTime / 10, 100)}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Error Rate</span>
                      <span>{systemMetrics.errorRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: `${systemMetrics.errorRate}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Agent Distribution</h3>
                <div className="space-y-4">
                  {['Content Generation', 'Marketing', 'Sales', 'Analytics', 'Automation'].map((type) => {
                    const count = agents.filter(a => a.type === type).length;
                    const percentage = agents.length > 0 ? (count / agents.length) * 100 : 0;
                    return (
                      <div key={type}>
                        <div className="flex justify-between text-sm">
                          <span>{type}</span>
                          <span>{count} agents</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Automation Scripts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Content Generation', status: 'running', lastRun: '2 minutes ago' },
                  { name: 'Market Research', status: 'idle', lastRun: '1 hour ago' },
                  { name: 'SEO Optimization', status: 'running', lastRun: '5 minutes ago' },
                  { name: 'Social Media', status: 'stopped', lastRun: '2 hours ago' },
                  { name: 'Analytics Collection', status: 'running', lastRun: '1 minute ago' },
                  { name: 'Backup System', status: 'idle', lastRun: '6 hours ago' }
                ].map((script) => (
                  <div key={script.name} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{script.name}</h4>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        script.status === 'running' ? 'bg-green-500 text-white' :
                        script.status === 'idle' ? 'bg-yellow-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {script.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Last run: {script.lastRun}</p>
                    <div className="mt-3 flex space-x-2">
                      <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Start</button>
                      <button className="text-sm bg-gray-600 text-white px-3 py-1 rounded">Stop</button>
                      <button className="text-sm bg-green-600 text-white px-3 py-1 rounded">Run Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">System Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Auto-scaling</label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Performance Monitoring</label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>Real-time</option>
                    <option>Every 5 minutes</option>
                    <option>Every hour</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Backup Frequency</label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Agent Modal */}
      {isCreatingAgent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Agent</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Agent Name</label>
                  <input
                    type="text"
                    value={newAgentData.name}
                    onChange={(e) => setNewAgentData({...newAgentData, name: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Agent Type</label>
                  <select
                    value={newAgentData.type}
                    onChange={(e) => setNewAgentData({...newAgentData, type: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select type</option>
                    <option value="content-generation">Content Generation</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="analytics">Analytics</option>
                    <option value="automation">Automation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Capabilities</label>
                  <input
                    type="text"
                    placeholder="e.g., AI writing, SEO, social media"
                    value={newAgentData.capabilities.join(', ')}
                    onChange={(e) => setNewAgentData({...newAgentData, capabilities: e.target.value.split(', ').filter(c => c.trim())})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Services</label>
                  <input
                    type="text"
                    placeholder="e.g., content creation, market research"
                    value={newAgentData.services.join(', ')}
                    onChange={(e) => setNewAgentData({...newAgentData, services: e.target.value.split(', ').filter(s => s.trim())})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setIsCreatingAgent(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={createAgent}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Create Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Agent Details Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-4/5 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Agent Details: {selectedAgent.name}</h3>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Basic Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Type:</span> {selectedAgent.type}</div>
                    <div><span className="font-medium">Status:</span> 
                      <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedAgent.status)} text-white`}>
                        {selectedAgent.status}
                      </span>
                    </div>
                    <div><span className="font-medium">Workload:</span> {selectedAgent.workload}%</div>
                    <div><span className="font-medium">Current Task:</span> {selectedAgent.currentTask}</div>
                    <div><span className="font-medium">Created:</span> {new Date(selectedAgent.createdAt).toLocaleString()}</div>
                    <div><span className="font-medium">Last Active:</span> {new Date(selectedAgent.lastActive).toLocaleString()}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Performance</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Tasks Completed:</span> {selectedAgent.performance.tasksCompleted}</div>
                    <div><span className="font-medium">Success Rate:</span> {selectedAgent.performance.successRate}%</div>
                    <div><span className="font-medium">Avg Response Time:</span> {selectedAgent.performance.avgResponseTime}ms</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Capabilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.capabilities.map((capability, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.services.map((service, index) => (
                      <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {selectedAgent.nextSteps.map((step, index) => (
                      <li key={index} className="text-gray-600">{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 