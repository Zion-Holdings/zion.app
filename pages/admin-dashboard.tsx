import React, { useState, useEffect, useCallback } from "react";
import { NextPage } from 'next";
import Head from 'next/head";
import { useRouter } from "next/router"";
import { useAuth } from '../src/contexts/AuthContext";
import RealTimeMonitor from '../components/admin/RealTimeMonitor";
import SystemHealthMonitor from '../components/admin/SystemHealthMonitor";

interface AgentStatus {
  agentId: string;
  type: string;
  status: 'active' | 'idle' | 'error' | 'stopped";
  lastActivity: string;
  performance?: {
    successRate?: number;
    avgResponseTime?: number;
  };
}

interface SystemHealth {
  timestamp: string;
  activeAgents: number;
  totalAgents: number;
  systemHealth: 'healthy' | 'warning' | 'error";
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  cpu: {
    usage: number;
    cores: number;
  };
  network: {
    bytesIn: number;
    bytesOut: number;
    connections: number;
  };
  storage: {
    used: number;
    total: number;
    percentage: number;
  };
  arrayBuffers: number;
  uptime?: number;
}

interface AutomationReport {
  id: string;
  type: string;
  timestamp: string;
  status: string;
  data?: any;
}

interface AdminDashboardData {
  agents: AgentStatus[];
  orchestrators: SystemHealth[];
  reports: AutomationReport[];
  monetization: any;
  contentGeneration: any;
  analytics: any;
  lastUpdate: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading, session } = useAuth();
  const [dashboardData, setDashboardData] = useState<AdminDashboardData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const checkAuth = useCallback(async () => {
    if (loading) return;
    
    if (!user) {
      router.push('/auth/login');
      return;
    }
    
    // Check if user is authorized for admin access
    const authorizedEmails = [
      'kleber@ziontechgroup.com',
      'admin@ziontechgroup.com'
    ];
    
    if (!user.email || !authorizedEmails.includes(user.email)) {
      console.log('Unauthorized access attempt:', user.email);
      router.push('/dashboard');
      return;
    }
    
    setIsAuthorized(true);
    setIsCheckingAuth(false);
  }, [user, loading, router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const fetchDashboardData = useCallback(async () => {
    if (!isAuthorized) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/automation-status');
      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (isAuthorized) {
      fetchDashboardData();
      
      if (autoRefresh) {
        const interval = setInterval(fetchDashboardData, 30000); // Refresh every 30 seconds
        return () => clearInterval(interval);
      }
    }
  }, [isAuthorized, fetchDashboardData, autoRefresh]);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes";
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800";
      case 'idle': return 'bg-yellow-100 text-yellow-800";
      case 'error': return 'bg-red-100 text-red-800";
      case 'stopped': return 'bg-gray-100 text-gray-800";
      default: return 'bg-gray-100 text-gray-800";
    }
  };

  const getSystemHealthColor = (health: string) => {
    switch (health) {
      case 'healthy': return 'bg-green-100 text-green-800";
      case 'warning': return 'bg-yellow-100 text-yellow-800";
      case 'error': return 'bg-red-100 text-red-800";
      default: return 'bg-gray-100 text-gray-800";
    }
  };

  if (loading || isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if not authorized (will redirect)
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">Redirecting...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Zion</title>
        <meta name="description" content="Real-time admin dashboard for managing autonomous agents and automation systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Real-Time Automation Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Live monitoring of autonomous agents and automation systems
                  {dashboardData && (
                    <span className="ml-2 text-xs text-gray-400">
                      Last updated: {new Date(dashboardData.lastUpdate).toLocaleTimeString()}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-600">Auto-refresh</label>
                  <input
                    type="checkbox"
                    checked={autoRefresh}
                    onChange={(e) => setAutoRefresh(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                </div>
                
                <button
                  onClick={fetchDashboardData}
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50">
                  {isLoading ? 'Refreshing...' : 'Refresh'}
                </button>
                <span className="text-sm text-gray-500">Logged in as: {user?.email}</span>
                <button
                  onClick={() => router.push('/dashboard')}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Real-Time Monitor */}
          {dashboardData && (
            <div className="mb-8">
              <RealTimeMonitor
                agents={dashboardData.agents}
                systemHealth={dashboardData.orchestrators[0]}
              />
            </div>
          )}

          {/* System Health Overview */}
          {dashboardData?.orchestrators && (
            <div className="mb-8">
              <SystemHealthMonitor systemHealth={dashboardData.orchestrators[0]} />
            </div>
          )}

          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                {[
                  { id: 'overview', name: 'Overview' },
                  { id: 'agents', name: 'Agents' },
                  { id: 'orchestrators', name: 'Orchestrators' },
                  { id: 'reports', name: 'Reports' },
                  { id: 'monetization', name: 'Monetization' },
                  { id: 'content', name: 'Content Generation' },
                  { id: 'analytics', name: 'Analytics' }
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

            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Active Agents</h3>
                      <div className="text-3xl font-bold text-blue-600">{dashboardData?.agents.filter(a => a.status === 'active').length || 0}</div>
                      <p className="text-sm text-blue-700 mt-1">Currently running</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-2">Recent Reports</h3>
                      <div className="text-3xl font-bold text-green-600">{dashboardData?.reports.length || 0}</div>
                      <p className="text-sm text-green-700 mt-1">Generated today</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">Content Files</h3>
                      <div className="text-3xl font-bold text-purple-600">{dashboardData?.contentGeneration?.totalFiles || 0}</div>
                      <p className="text-sm text-purple-700 mt-1">Generated content</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">System Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Orchestrators</h4>
                        <div className="space-y-2">
                          {dashboardData?.orchestrators.map((orch, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Main Orchestrator</span>
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSystemHealthColor(orch.systemHealth)}`}>
                                {orch.systemHealth}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Recent Activity</h4>
                        <div className="space-y-2">
                          {dashboardData?.agents.slice(0, 3).map((agent) => (
                            <div key={agent.agentId} className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">{agent.type}</span>
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(agent.status)}`}>
                                {agent.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Agents Tab */}
              {activeTab === 'agents' && (
                <div>
                  <RealTimeMonitor
                    agents={dashboardData?.agents || []}
                    onAgentClick={(agent) => {
                      console.log('Agent clicked:', agent);
                      // TODO: Implement agent detail modal
                    }}
                  />
                </div>
              )}

              {/* Orchestrators Tab */}
              {activeTab === 'orchestrators' && (
                <div>
                  {dashboardData?.orchestrators.map((orch, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Main Orchestrator</h3>
                        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getSystemHealthColor(orch.systemHealth)}`}>
                          {orch.systemHealth}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-600">Active Agents</div>
                          <div className="text-2xl font-bold text-gray-900">{orch.activeAgents}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Total Agents</div>
                          <div className="text-2xl font-bold text-gray-900">{orch.totalAgents}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Last Update</div>
                          <div className="text-sm text-gray-900">{new Date(orch.lastUpdate).toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Reports Tab */}
              {activeTab === 'reports' && (
                <div>
                  <div className="space-y-4">
                    {dashboardData?.reports.map((report) => (
                      <div key={report.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{report.type}</h3>
                            <p className="text-sm text-gray-600">ID: {report.id}</p>
                            <p className="text-sm text-gray-500">{new Date(report.timestamp).toLocaleString()}</p>
                          </div>
                          <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                            report.status === 'completed' ? 'bg-green-100 text-green-800' :
                            report.status === 'running' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {report.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {(!dashboardData?.reports || dashboardData.reports.length === 0) && (
                    <div className="text-center py-8">
                      <div className="text-gray-500">No reports found</div>
                      <p className="text-sm text-gray-400 mt-2">Reports will appear here when they are generated</p>
                    </div>
                  )}
                </div>
              )}

              {/* Monetization Tab */}
              {activeTab === 'monetization' && (
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Monetization Status</h3>
                    <pre className="text-sm text-gray-700 overflow-auto">
                      {JSON.stringify(dashboardData?.monetization, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

              {/* Content Generation Tab */}
              {activeTab === 'content' && (
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Generation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-600">Total Files</div>
                        <div className="text-2xl font-bold text-gray-900">{dashboardData?.contentGeneration?.totalFiles || 0}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">Recent Files</div>
                        <div className="text-sm text-gray-900">
                          {dashboardData?.contentGeneration?.recentFiles?.slice(0, 3).map((file: any, index: number) => (
                            <div key={index} className="text-xs text-gray-600">
                              {file.name} - {new Date(file.timestamp).toLocaleString()}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics Tab */}
              {activeTab === 'analytics' && (
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-600">Total Reports</div>
                        <div className="text-2xl font-bold text-gray-900">{dashboardData?.analytics?.totalReports || 0}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600">Recent Reports</div>
                        <div className="text-sm text-gray-900">
                          {dashboardData?.analytics?.reports?.slice(0, 3).map((report: any, index: number) => (
                            <div key={index} className="text-xs text-gray-600">
                              {report.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}