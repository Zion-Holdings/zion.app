'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface MonitoringData {
  agents: {
    id: string;
    name: string;
    status: string;
    currentWave: string;
    currentAction: string;
    servicesDeployedToday: number;
    totalServices: number;
    avatar: string;
    color: string;
  }[];
  recentActions: {
    timestamp: string;
    agent: string;
    action: string;
    details: string;
    type: string;
  }[];
  stats: {
    totalServices: number;
    totalWaves: number;
    activeAgents: number;
    uptime: string;
    deploymentsToday: number;
  };
}

export default function AgentDashboard({ defaultView = 'operations', defaultTab = 'fleet' } = {}) {
  const [data, setData] = useState<MonitoringData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/monitoring-data');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setData({
          ...json,
          stats: {
            ...json.stats,
            totalServices: typeof json.stats.totalServices === 'string' 
              ? parseInt(json.stats.totalServices.replace(/[^0-9]/g, '')) || 0 
              : json.stats.totalServices,
          }
        });
        setLastUpdate(new Date().toLocaleTimeString());
      } catch (err) {
        console.error('Failed to fetch monitoring data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  // Derive leaderboard: agents sorted by servicesDeployedToday descending
  const leaderboard = [...data.agents].sort((a, b) => b.servicesDeployedToday - a.servicesDeployedToday);

  // Filter recent actions for highlights (deployment, integration, testing)
  const highlights = data.recentActions.filter(
    action => ['deployment', 'integration', 'testing'].includes(action.type)
  ).slice(0, 3); // Show top 3 highlights

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agent Operations Dashboard</h1>
      <div className="space-y-6">
        {/* Agents Overview */}
        <div className="border p-4">
          <h2 className="font-semibold mb-2">Agents ({data.agents.length})</h2>
          {data.agents.map(agent => (
            <div key={agent.id} className="mb-2 p-2 bg-gray-50 rounded">
              <div className="flex justify-between">
                <span>{agent.avatar} {agent.name}</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">{agent.status}</span>
              </div>
              <div className="text-sm text-gray-600">Wave: {agent.currentWave}</div>
              <div className="text-sm text-gray-600">Action: {agent.currentAction}</div>
            </div>
          ))}
        </div>

        {/* Recent Actions */}
        <div className="border p-4">
          <h2 className="font-semibold mb-2">Recent Actions</h2>
          {data.recentActions.map(action => (
            <div key={action.timestamp} className="mb-2 p-2 bg-gray-50 rounded">
              <div className="flex justify-between">
                <span className="font-medium">{action.agent}</span>
                <span className="text-xs text-gray-500">{new Date(action.timestamp).toLocaleTimeString()}</span>
              </div>
              <div className="text-sm">{action.action}</div>
              {action.details && <div className="text-xs text-gray-500 mt-1">{action.details}</div>}
            </div>
          ))}
        </div>

        {/* Agent Leaderboard */}
        <div className="border p-4">
          <h2 className="font-semibold mb-2">Today's Leaderboard</h2>
          <div className="space-y-2">
            {leaderboard.map((agent, index) => (
              <div key={agent.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center space-x-3">
                  <div className="text-lg">{agent.avatar}</div>
                  <div>
                    <div className="font-medium">{agent.name}</div>
                    <div className="text-sm text-gray-500">{agent.status}</div>
                  </div>
                </div>
                <div className="text-right space-x-2">
                  <div className="font-semibold">{agent.servicesDeployedToday}</div>
                  <div className="text-xs text-gray-500">actions today</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Highlights */}
        <div className="border p-4">
          <h2 className="font-semibold mb-2">Client Highlights</h2>
          {highlights.length > 0 ? (
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{highlight.agent}</span>
                    <span className="text-xs text-gray-500">{new Date(highlight.timestamp).toLocaleTimeString()}</span>
                  </div>
                  <div className="text-sm">{highlight.action}</div>
                  {highlight.details && (
                    <div className="text-xs text-gray-600 mt-1">{highlight.details}</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recent highlights to display.</p>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4">
            <h2 className="font-semibold">Total Services</h2>
            <div className="text-2xl font-bold">{data.stats.totalServices}</div>
          </div>
          <div className="border p-4">
            <h2 className="font-semibold">Active Agents</h2>
            <div className="text-2xl font-bold">{data.stats.activeAgents}</div>
          </div>
          <div className="border p-4">
            <h2 className="font-semibold">Waves</h2>
            <div className="text-2xl font-bold">{data.stats.totalWaves}+</div>
          </div>
          <div className="border p-4">
            <h2 className="font-semibold">Uptime</h2>
            <div className="text-2xl font-bold">{data.stats.uptime}</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Link href="/agents-monitoring" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
          View Detailed Analytics
        </Link>
      </div>
    </div>
  );
}