import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface AutomationStatus {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'error' | 'starting' | 'stopping';
  health: number;
  uptime: string;
  lastActivity: string;
  tasksCompleted: number;
  errors: number;
  performance: number;
  type: string;
  description: string;
}

interface SystemMetrics {
  totalAgents: number;
  activeAgents: number;
  totalOrchestrators: number;
  activeOrchestrators: number;
  systemHealth: number;
  totalTasks: number;
  completedTasks: number;
  failedTasks: number;
  systemUptime: string;
  memoryUsage: number;
  cpuUsage: number;
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [automations, setAutomations] = useState<AutomationStatus[]>([]);
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics | null>(null);
  const [selectedAutomation, setSelectedAutomation] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (authenticated) {
      loadAutomationStatus();
      loadSystemMetrics();
      startRealTimeUpdates();
    }
  }, [authenticated]);

  const checkAuthentication = () => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    const adminUser = localStorage.getItem('adminUser');
    
    if (!isAuthenticated || adminUser !== 'kleber@ziontechgroup.com') {
      router.push('/login');
      return;
    }
    
    setAuthenticated(true);
    setLoading(false);
  };

  const loadAutomationStatus = async () => {
    try {
      // Simulate API call to get automation status
      const mockAutomations: AutomationStatus[] = [
        {
          id: 'master-controller',
          name: 'Master Automation Controller',
          status: 'running',
          health: 95,
          uptime: '2d 14h 32m',
          lastActivity: '2 minutes ago',
          tasksCompleted: 1247,
          errors: 3,
          performance: 98,
          type: 'Controller',
          description: 'Main orchestration and control system'
        },
        {
          id: 'agent-factory',
          name: 'Autonomous Agent Factory',
          status: 'running',
          health: 92,
          uptime: '1d 8h 15m',
          lastActivity: '5 minutes ago',
          tasksCompleted: 892,
          errors: 1,
          performance: 96,
          type: 'Factory',
          description: 'Creates and manages autonomous agents'
        },
        {
          id: 'content-generator',
          name: 'Content Generation Agent',
          status: 'running',
          health: 88,
          uptime: '3d 2h 45m',
          lastActivity: '1 minute ago',
          tasksCompleted: 2156,
          errors: 7,
          performance: 94,
          type: 'Agent',
          description: 'Generates and optimizes content automatically'
        },
        {
          id: 'research-agent',
          name: 'AI Research Agent',
          status: 'running',
          health: 90,
          uptime: '1d 12h 30m',
          lastActivity: '3 minutes ago',
          tasksCompleted: 567,
          errors: 2,
          performance: 93,
          type: 'Agent',
          description: 'Researches latest AI trends and capabilities'
        },
        {
          id: 'orchestrator',
          name: 'Workload Orchestrator',
          status: 'running',
          health: 94,
          uptime: '4d 6h 20m',
          lastActivity: '30 seconds ago',
          tasksCompleted: 3421,
          errors: 5,
          performance: 97,
          type: 'Orchestrator',
          description: 'Distributes and manages workload across agents'
        },
        {
          id: 'monitor-agent',
          name: 'System Monitor Agent',
          status: 'running',
          health: 96,
          uptime: '5d 1h 10m',
          lastActivity: '10 seconds ago',
          tasksCompleted: 1890,
          errors: 0,
          performance: 99,
          type: 'Monitor',
          description: 'Monitors system health and performance'
        }
      ];
      
      setAutomations(mockAutomations);
    } catch (error) {
      console.error('Error loading automation status:', error);
    }
  };

  const loadSystemMetrics = async () => {
    try {
      const mockMetrics: SystemMetrics = {
        totalAgents: 12,
        activeAgents: 10,
        totalOrchestrators: 3,
        activeOrchestrators: 3,
        systemHealth: 94,
        totalTasks: 8567,
        completedTasks: 8421,
        failedTasks: 146,
        systemUptime: '5d 2h 15m',
        memoryUsage: 67,
        cpuUsage: 45
      };
      
      setSystemMetrics(mockMetrics);
    } catch (error) {
      console.error('Error loading system metrics:', error);
    }
  };

  const startRealTimeUpdates = () => {
    // Simulate real-time updates every 30 seconds
    const interval = setInterval(() => {
      loadAutomationStatus();
      loadSystemMetrics();
    }, 30000);

    return () => clearInterval(interval);
  };

  const handleAutomationAction = async (automationId: string, action: 'start' | 'stop' | 'restart') => {
    try {
      // Simulate API call
      console.log(`Performing ${action} on automation ${automationId}`);
      
      // Update local state
      setAutomations(prev => prev.map(automation => {
        if (automation.id === automationId) {
          return {
            ...automation,
            status: action === 'start' ? 'starting' : action === 'stop' ? 'stopping' : 'starting'
          };
        }
        return automation;
      }));
      
      // Simulate action completion
      setTimeout(() => {
        setAutomations(prev => prev.map(automation => {
          if (automation.id === automationId) {
            return {
              ...automation,
              status: action === 'stop' ? 'stopped' : 'running'
            };
          }
          return automation;
        }));
      }, 2000);
      
    } catch (error) {
      console.error(`Error performing ${action} on automation:`, error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-green-600 bg-green-100';
      case 'stopped': return 'text-red-600 bg-red-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'starting': return 'text-yellow-600 bg-yellow-100';
      case 'stopping': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 90) return 'text-green-600';
    if (health >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Zion Tech Group</title>
        <meta name="description" content="Admin dashboard for Zion Tech Group automation system" />
      </Head>
      
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Zion Tech Group - Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600">
                  Autonomous Agent Management System
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Logged in as: kleber@ziontechgroup.com
                </span>
                <button
                  onClick={() => {
                    localStorage.removeItem('adminAuthenticated');
                    localStorage.removeItem('adminUser');
                    router.push('/login');
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* System Overview */}
          {systemMetrics && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">System Health</p>
                    <p className={`text-2xl font-bold ${getHealthColor(systemMetrics.systemHealth)}`}>
                      {systemMetrics.systemHealth}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Active Agents</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {systemMetrics.activeAgents}/{systemMetrics.totalAgents}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Tasks Completed</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {systemMetrics.completedTasks.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">System Uptime</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {systemMetrics.systemUptime}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Automation Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Automation Status</h2>
              <p className="text-sm text-gray-600">Real-time status of all autonomous agents and orchestrators</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Automation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Health
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tasks
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Uptime
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {automations.map((automation) => (
                    <tr key={automation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{automation.name}</div>
                          <div className="text-sm text-gray-500">{automation.description}</div>
                          <div className="text-xs text-gray-400">{automation.type}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(automation.status)}`}>
                          {automation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className={`h-2 rounded-full ${automation.health >= 90 ? 'bg-green-500' : automation.health >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                              style={{ width: `${automation.health}%` }}
                            ></div>
                          </div>
                          <span className={`text-sm font-medium ${getHealthColor(automation.health)}`}>
                            {automation.health}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className={`h-2 rounded-full ${automation.performance >= 90 ? 'bg-green-500' : automation.performance >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                              style={{ width: `${automation.performance}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {automation.performance}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {automation.tasksCompleted.toLocaleString()}
                        {automation.errors > 0 && (
                          <span className="ml-2 text-red-600">({automation.errors} errors)</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {automation.uptime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          {automation.status === 'running' ? (
                            <>
                              <button
                                onClick={() => handleAutomationAction(automation.id, 'stop')}
                                className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded text-xs"
                              >
                                Stop
                              </button>
                              <button
                                onClick={() => handleAutomationAction(automation.id, 'restart')}
                                className="text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-2 py-1 rounded text-xs"
                              >
                                Restart
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => handleAutomationAction(automation.id, 'start')}
                              className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded text-xs"
                            >
                              Start
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* System Logs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-white rounded-lg shadow"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">System Logs</h2>
              <p className="text-sm text-gray-600">Real-time system activity and automation logs</p>
            </div>
            <div className="px-6 py-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-64 overflow-y-auto">
                <div className="space-y-1">
                  <div>[2024-01-15 14:32:15] INFO: Master Controller initialized successfully</div>
                  <div>[2024-01-15 14:32:18] INFO: Agent Factory started - 12 agents available</div>
                  <div>[2024-01-15 14:32:20] INFO: Content Generator Agent processing batch #2156</div>
                  <div>[2024-01-15 14:32:25] INFO: Research Agent discovered new AI trend: "Multi-modal AI agents"</div>
                  <div>[2024-01-15 14:32:30] INFO: System Monitor Agent - Health check passed (94% overall)</div>
                  <div>[2024-01-15 14:32:35] INFO: Workload Orchestrator distributed 15 new tasks</div>
                  <div>[2024-01-15 14:32:40] WARN: Content Generator Agent - Minor performance degradation detected</div>
                  <div>[2024-01-15 14:32:45] INFO: Autonomous Agent Factory created new research agent</div>
                  <div>[2024-01-15 14:32:50] INFO: System backup completed successfully</div>
                  <div>[2024-01-15 14:32:55] INFO: All automations running normally</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 