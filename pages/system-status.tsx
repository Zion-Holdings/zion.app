import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';

interface ProcessStatus {
  id: string;
  name: string;
  status: string;
  cpu: string;
  memory: string;
  uptime: string;
  restarts: number;
}

interface SystemMetrics {
  timestamp: string;
  system: {
    uptime: number;
    memory: {
      total: number;
      used: number;
      free: number;
      available: number;
    };
    platform: string;
    nodeVersion: string;
  };
  processes: ProcessStatus[];
  resources: {
    memory: {
      total: number;
      used: number;
      free: number;
      available: number;
    };
    disk: {
      total: string;
      used: string;
      available: string;
      usage: string;
    };
    load: {
      '1min': number;
      '5min': number;
      '15min': number;
    };
  };
}

interface Alert {
  level: string;
  category: string;
  message: string;
  timestamp: string;
  value: number;
  threshold: number;
}

const SystemStatusPage: NextPage = () => {
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [processes, setProcesses] = useState<ProcessStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchSystemStatus = async () => {
      try {
        // Simulate fetching system metrics
        const mockMetrics: SystemMetrics = {
          timestamp: new Date().toISOString(),
          system: {
            uptime: process.uptime ? process.uptime() : 0,
            memory: {
              total: 8192, // 8GB
              used: 2048,  // 2GB
              free: 6144,  // 6GB
              available: 7168 // 7GB
            },
            platform: 'linux',
            nodeVersion: '22.16.0'
          },
          processes: [
            {
              id: '0',
              name: 'ai-service-factory-web',
              status: 'online',
              cpu: '0%',
              memory: '118.7mb',
              uptime: '2h 15m',
              restarts: 1
            },
            {
              id: '1',
              name: 'ai-service-factory-automation',
              status: 'online',
              cpu: '0%',
              memory: '62.7mb',
              uptime: '2h 15m',
              restarts: 1
            },
            {
              id: '2',
              name: 'ai-service-factory-monitor',
              status: 'online',
              cpu: '0%',
              memory: '70.4mb',
              uptime: '2h 15m',
              restarts: 1
            },
            {
              id: '3',
              name: 'ai-service-factory-catalog',
              status: 'online',
              cpu: '0%',
              memory: '70.4mb',
              uptime: '2h 15m',
              restarts: 2
            },
            {
              id: '4',
              name: 'ai-service-factory-advanced-monitor',
              status: 'online',
              cpu: '0%',
              memory: '45.2mb',
              uptime: '15m',
              restarts: 0
            }
          ],
          resources: {
            memory: {
              total: 8192,
              used: 2048,
              free: 6144,
              available: 7168
            },
            disk: {
              total: '100GB',
              used: '25GB',
              available: '75GB',
              usage: '25%'
            },
            load: {
              '1min': 0.5,
              '5min': 0.3,
              '10min': 0.2
            }
          }
        };

        setSystemMetrics(mockMetrics);
        setProcesses(mockMetrics.processes);

        // Simulate alerts
        const mockAlerts: Alert[] = [
          {
            level: 'INFO',
            category: 'SYSTEM',
            message: 'All processes running normally',
            timestamp: new Date().toISOString(),
            value: 100,
            threshold: 95
          }
        ];

        setAlerts(mockAlerts);
        setLastUpdate(new Date());
      } catch (error) {
        console.error('Failed to fetch system status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSystemStatus();
    const interval = setInterval(fetchSystemStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'online':
        return 'text-green-500';
      case 'errored':
        return 'text-red-500';
      case 'stopped':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const getAlertColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'critical':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatBytes = (bytes: number) => {
    const mb = bytes / 1024 / 1024;
    return `${mb.toFixed(1)}MB`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto"></div>
            <p className="mt-4 text-xl">Loading system status...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            System Status Dashboard
          </h1>
          <p className="text-slate-400 mt-2">
            Real-time monitoring of the AI Service Factory
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-300">System Uptime</h3>
            <p className="text-3xl font-bold text-cyan-400">
              {systemMetrics ? formatUptime(systemMetrics.system.uptime) : 'N/A'}
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-300">Memory Usage</h3>
            <p className="text-3xl font-bold text-blue-400">
              {systemMetrics ? `${Math.round((systemMetrics.resources.memory.used / systemMetrics.resources.memory.total) * 100)}%` : 'N/A'}
            </p>
            <p className="text-sm text-slate-400 mt-1">
              {systemMetrics ? `${formatBytes(systemMetrics.resources.memory.used)} / ${formatBytes(systemMetrics.resources.memory.total)}` : 'N/A'}
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-300">Disk Usage</h3>
            <p className="text-3xl font-bold text-green-400">
              {systemMetrics ? systemMetrics.resources.disk.usage : 'N/A'}
            </p>
            <p className="text-sm text-slate-400 mt-1">
              {systemMetrics ? `${systemMetrics.resources.disk.used} / ${systemMetrics.resources.disk.total}` : 'N/A'}
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-300">Active Processes</h3>
            <p className="text-3xl font-bold text-purple-400">
              {processes.filter(p => p.status === 'online').length}
            </p>
            <p className="text-sm text-slate-400 mt-1">
              of {processes.length} total
            </p>
          </div>
        </div>

        {/* Process Status */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Process Status</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-slate-300">ID</th>
                  <th className="text-left p-3 text-slate-300">Name</th>
                  <th className="text-left p-3 text-slate-300">Status</th>
                  <th className="text-left p-3 text-slate-300">CPU</th>
                  <th className="text-left p-3 text-slate-300">Memory</th>
                  <th className="text-left p-3 text-slate-300">Uptime</th>
                  <th className="text-left p-3 text-slate-300">Restarts</th>
                </tr>
              </thead>
              <tbody>
                {processes.map((process) => (
                  <tr key={process.id} className="border-b border-slate-700 hover:bg-slate-700">
                    <td className="p-3 text-slate-400">{process.id}</td>
                    <td className="p-3 text-white font-mono">{process.name}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(process.status)}`}>
                        {process.status}
                      </span>
                    </td>
                    <td className="p-3 text-slate-400">{process.cpu}</td>
                    <td className="p-3 text-slate-400">{process.memory}</td>
                    <td className="p-3 text-slate-400">{process.uptime}</td>
                    <td className="p-3 text-slate-400">{process.restarts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">System Information</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Platform:</span>
                <span className="text-white">{systemMetrics?.system.platform || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Node.js Version:</span>
                <span className="text-white">{systemMetrics?.system.nodeVersion || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">System Uptime:</span>
                <span className="text-white">{systemMetrics ? formatUptime(systemMetrics.system.uptime) : 'N/A'}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Resource Usage</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Memory</span>
                  <span className="text-white">
                    {systemMetrics ? `${Math.round((systemMetrics.resources.memory.used / systemMetrics.resources.memory.total) * 100)}%` : 'N/A'}
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: systemMetrics ? `${(systemMetrics.resources.memory.used / systemMetrics.resources.memory.total) * 100}%` : '0%' 
                    }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Load Average</span>
                  <span className="text-white">
                    {systemMetrics ? systemMetrics.resources.load['1min'].toFixed(2) : 'N/A'}
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: systemMetrics ? `${Math.min((systemMetrics.resources.load['1min'] / 4) * 100, 100)}%` : '0%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">System Alerts</h2>
          {alerts.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-6xl mb-4">✓</div>
              <p className="text-slate-400">No active alerts. All systems are running normally.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${getAlertColor(alert.level)} border-l-current`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">
                        [{alert.level}] {alert.category}
                      </h4>
                      <p className="text-slate-200 mt-1">{alert.message}</p>
                      <p className="text-slate-400 text-sm mt-1">
                        {new Date(alert.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-mono">{alert.value}</p>
                      <p className="text-slate-400 text-sm">Threshold: {alert.threshold}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Refresh Status
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              Generate Report
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors">
              Run Health Check
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              View Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPage;