import React from "react";

interface SystemHealthData {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkUsage: number;
  timestamp: string;
  activeAgents: number;
  totalAgents: number;
  systemHealth: "healthy" | "warning" | "error";
  memoryUsage?: {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
  };
  cpuUsage?: {
    user: number;
    system: number;
  };
}

interface SystemHealthMonitorProps {
  systemHealth: SystemHealthData;
}

export default function SystemHealthMonitor({ systemHealth }: SystemHealthMonitorProps) {
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const $1 = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatPercentage = (value: number) => {
    return `${Math.round(value * 100)}%`;
  };

  const getSystemHealthColor = (health: string) => {
    switch (health) {
      case 'healthy': return "bg-green-100 text-green-800 border-green-200";
      case 'warning': return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 'error': return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">System Health Monitor</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSystemHealthColor(systemHealth.systemHealth)}`}>
          {systemHealth.systemHealth.charAt(0).toUpperCase() + systemHealth.systemHealth.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800">CPU Usage</h4>
          <p className="text-2xl font-bold text-blue-600">
            {formatPercentage(systemHealth.cpuUsage)}
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-green-800">Memory Usage</h4>
          <p className="text-2xl font-bold text-green-600">
            {formatPercentage(systemHealth.memoryUsage)}
          </p>
          {systemHealth.memoryUsage && (
            <p className="text-xs text-green-600 mt-1">
              {formatBytes(systemHealth.memoryUsage.rss)}
            </p>
          )}
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-purple-800">Disk Usage</h4>
          <p className="text-2xl font-bold text-purple-600">
            {formatPercentage(systemHealth.diskUsage)}
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-orange-800">Active Agents</h4>
          <p className="text-2xl font-bold text-orange-600">
            {systemHealth.activeAgents} / {systemHealth.totalAgents}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Network Usage</h4>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-lg font-semibold text-gray-900">
            {formatBytes(systemHealth.networkUsage)}/s
          </p>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Last updated: {new Date(systemHealth.timestamp).toLocaleString()}
      </div>
    </div>
  );
}