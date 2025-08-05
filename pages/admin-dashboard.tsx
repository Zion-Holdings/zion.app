import React, { useState, useEffect, useCallback } from 'react';import ModernLayout from '../components/layout/ModernLayout'

import { useRouter } from 'next/router';
import { useAuth } from '../src/contexts/AuthContext';
import Head from 'next/head';

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

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading, session } = useAuth();
  const [agents, setAgents] = useState<Agent[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

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

  useEffect(() => {
    if (isAuthorized) {
      loadAgents();
    }
  }, [isAuthorized]);

  const loadAgents = async () => {
    try {
      // For now, we'll use mock data since the autonomous_agents table might not exist
      const mockAgents: Agent[] = [
        {
          id: '1',
          name: 'Content Generation Agent',
          type: 'content',
          status: 'active',
          workload: 75,
          currentTask: 'Generating blog posts',
          nextSteps: ['SEO optimization', 'Publish content'],
          services: ['Blog writing', 'SEO'],
          createdAt: '2024-01-15T10:00:00Z',
          lastActive: '2024-01-15T15:30:00Z',
          performance: {
            tasksCompleted: 45,
            successRate: 92,
            avgResponseTime: 2.3
          },
          capabilities: ['Text generation', 'SEO analysis'],
          dependencies: ['OpenAI API', 'Content DB']
        },
        {
          id: '2',
          name: 'Market Research Agent',
          type: 'research',
          status: 'idle',
          workload: 0,
          currentTask: 'Waiting for tasks',
          nextSteps: ['Monitor market trends'],
          services: ['Market analysis', 'Trend detection'],
          createdAt: '2024-01-10T09:00:00Z',
          lastActive: '2024-01-15T14:20:00Z',
          performance: {
            tasksCompleted: 23,
            successRate: 88,
            avgResponseTime: 5.1
          },
          capabilities: ['Data analysis', 'Report generation'],
          dependencies: ['Market APIs', 'Analytics DB']
        },
        {
          id: '3',
          name: 'SEO Optimization Agent',
          type: 'seo',
          status: 'active',
          workload: 60,
          currentTask: 'Optimizing meta descriptions',
          nextSteps: ['Update sitemap', 'Monitor rankings'],
          services: ['SEO audit', 'Keyword research'],
          createdAt: '2024-01-12T11:00:00Z',
          lastActive: '2024-01-15T15:45:00Z',
          performance: {
            tasksCompleted: 67,
            successRate: 95,
            avgResponseTime: 1.8
          },
          capabilities: ['SEO analysis', 'Keyword optimization'],
          dependencies: ['Google Analytics', 'Search Console']
        }
      ];
      
      setAgents(mockAgents);
    } catch (error) {
      console.error('Error loading agents:', error);
      // Set empty array on error
      setAgents([]);
    }
  };

  // Show loading state while checking authentication
  if (loading || isCheckingAuth) {
    return (
  <ModernLayout>
    return (
  <ModernLayout>
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
        <meta name="description" content="Admin dashboard for managing autonomous agents" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>
      
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Autonomous Agent Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">Manage and monitor AI agents and automation systems</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Logged in as: {user?.email}</span>
                <button
                  onClick={() => router.push('/dashboard')}
                  className="px-4 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{agents.length}</div>
                <div className="text-sm text-blue-600">Total Agents</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {agents.filter(a => a.status === 'active').length}
                </div>
                <div className="text-sm text-green-600">Active Agents</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-1200">
                  {agents.filter(a => a.status === 'idle').length}
                </div>
                <div className="text-sm text-yellow-1200">Idle Agents</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {agents.filter(a => a.status === 'error').length}
                </div>
                <div className="text-sm text-red-600">Error Agents</div>
              </div>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {agents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                        <div className="text-sm text-gray-500">ID: {agent.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-4 py-3 text-xs font-semibold rounded-full ${
                          agent.status === 'active' ? 'bg-green-100 text-green-800' :
                          agent.status === 'idle' ? 'bg-yellow-100 text-yellow-1200' :
                          agent.status === 'error' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {agent.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${agent.workload}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-900">{agent.workload}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.currentTask}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>Tasks: {agent.performance.tasksCompleted}</div>
                        <div>Success: {agent.performance.successRate}%</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {agents.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-500">No agents found</div>
                <p className="text-sm text-gray-400 mt-2">Agents will appear here when they are created and running</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  
  </ModernLayout>

  </ModernLayout>
);
} 