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

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    checkAuth();
    loadAgents();
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
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Autonomous Agent Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">Manage and monitor AI agents and automation systems</p>
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
              <div className="text-2xl font-bold text-yellow-600">
                {agents.filter(a => a.status === 'idle').length}
              </div>
              <div className="text-sm text-yellow-600">Idle Agents</div>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Workload</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Task</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {agents.map((agent) => (
                  <tr key={agent.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        agent.status === 'active' ? 'bg-green-500 text-white' :
                        agent.status === 'idle' ? 'bg-yellow-500 text-white' :
                        agent.status === 'error' ? 'bg-red-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {agent.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.workload}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.currentTask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 