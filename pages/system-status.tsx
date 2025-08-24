import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

interface ProcessStatus {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'warning';
  cpu: number;
  memory: number;
  uptime: string;
}

interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  temperature: number;
}

interface Alert {
  id: string;
  level: 'info' | 'warning' | 'error' | 'critical';
  message: string;
  timestamp: string;
  acknowledged: boolean;
}

const SystemStatusPage: NextPage = () => {
  const [processes, setProcesses] = useState<ProcessStatus[]>([]);
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    temperature: 0
  });
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    // Load mock data for demonstration
    loadMockData();
    
    // Update every 5 seconds
    const interval = setInterval(loadMockData, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadMockData = () => {
    // Mock process data
    const mockProcesses: ProcessStatus[] = [
      {
        id: '1',
        name: 'ai-service-factory-web-turbo',
        status: 'online',
        cpu: 12.5,
        memory: 78.2,
        uptime: '2h 34m'
      },
      {
        id: '2',
        name: 'ai-service-factory-automation-turbo',
        status: 'online',
        cpu: 8.3,
        memory: 64.1,
        uptime: '1h 45m'
      },
      {
        id: '3',
        name: 'ai-service-factory-monitor-turbo',
        status: 'online',
        cpu: 5.7,
        memory: 55.8,
        uptime: '3h 12m'
      },
      {
        id: '4',
        name: 'ai-service-factory-advanced-monitor-turbo',
        status: 'online',
        cpu: 4.2,
        memory: 62.3,
        uptime: '2h 58m'
      }
    ];

    // Mock system metrics
    const mockMetrics: SystemMetrics = {
      cpu: Math.random() * 30 + 10,
      memory: Math.random() * 20 + 60,
      disk: Math.random() * 15 + 25,
      network: Math.random() * 40 + 20,
      temperature: Math.random() * 10 + 45
    };

    // Mock alerts
    const mockAlerts: Alert[] = [
      {
        id: '1',
        level: 'info',
        message: 'TURBO MODE optimization completed successfully',
        timestamp: new Date().toISOString(),
        acknowledged: false
      },
      {
        id: '2',
        level: 'info',
        message: 'Service generation pipeline running at maximum efficiency',
        timestamp: new Date(Date.now() - 300000).toISOString(),
        acknowledged: false
      }
    ];

    setProcesses(mockProcesses);
    setMetrics(mockMetrics);
    setAlerts(mockAlerts);
    setLastUpdate(new Date().toLocaleTimeString());
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'info': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertIcon = (level: string) => {
    switch (level) {
      case 'info': return 'ℹ️';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'critical': return '🚨';
      default: return 'ℹ️';
    }
  };

  return (
    <>
      <Head>
        <title>System Status - AI Service Factory</title>
        <meta name="description" content="Real-time system status and monitoring for the AI Service Factory" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  🚀 AI Service Factory
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                    🏠 Home
                  </Link>
                  <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                    📊 Dashboard
                  </Link>
                  <Link href="/system-status" className="text-blue-600 font-medium">
                    ⚡ System Status
                  </Link>
                  <Link href="/updates" className="text-gray-600 hover:text-gray-900 transition-colors">
                    📰 Updates
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  TURBO MODE
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  AI Generated
                </span>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  🏠 Home
                </Link>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                  📊 Dashboard
                </Link>
                <Link href="/system-status" className="text-blue-600 font-medium">
                  ⚡ System Status
                </Link>
                <Link href="/updates" className="text-gray-600 hover:text-gray-900 transition-colors">
                  📰 Updates
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ⚡ System Status
            </h1>
            <p className="text-xl text-gray-600">
              Real-time monitoring and health status of the AI Service Factory
            </p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <span>Last updated: {lastUpdate}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <span className="text-2xl">🖥️</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">CPU Usage</p>
                  <p className="text-2xl font-semibold text-gray-900">{metrics.cpu.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Memory</p>
                  <p className="text-2xl font-semibold text-gray-900">{metrics.memory.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <span className="text-2xl">💾</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Disk</p>
                  <p className="text-2xl font-semibold text-gray-900">{metrics.disk.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <span className="text-2xl">🌐</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Network</p>
                  <p className="text-2xl font-semibold text-gray-900">{metrics.network.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <span className="text-2xl">🌡️</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Temperature</p>
                  <p className="text-2xl font-semibold text-gray-900">{metrics.temperature.toFixed(1)}°C</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Status */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Process Status</h2>
              <p className="text-sm text-gray-600">Real-time status of all AI Service Factory processes</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Process
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CPU
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Memory
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Uptime
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {processes.map((process) => (
                    <tr key={process.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{process.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(process.status)} mr-2`}></div>
                          <span className="text-sm text-gray-900 capitalize">{process.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{process.cpu}%</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{process.memory} MB</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{process.uptime}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">System Alerts</h2>
              <p className="text-sm text-gray-600">Recent system notifications and alerts</p>
            </div>
            <div className="p-6">
              {alerts.length === 0 ? (
                <div className="text-center py-8">
                  <span className="text-4xl">✅</span>
                  <p className="mt-2 text-sm text-gray-500">No active alerts</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-lg ${getAlertColor(alert.level)}`}>
                      <div className="flex items-start">
                        <span className="text-lg mr-3">{getAlertIcon(alert.level)}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs mt-1 opacity-75">
                            {new Date(alert.timestamp).toLocaleString()}
                          </p>
                        </div>
                        {!alert.acknowledged && (
                          <button className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded hover:bg-opacity-75 transition-colors">
                            Acknowledge
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemStatusPage;