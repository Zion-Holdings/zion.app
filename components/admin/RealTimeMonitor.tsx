import React, { useState, useEffect, useCallback } from 'react';

interface MonitorData {
  timestamp: string;
  agents: any[];
  systemHealth: any;
  alerts: any[];
}

interface RealTimeMonitorProps {
  data: MonitorData;
  onRefresh: () => void;
  isLoading: boolean;
}

export default function RealTimeMonitor({ data, onRefresh, isLoading }: RealTimeMonitorProps) {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'reconnecting'>('connected');

  useEffect(() => {
    if (data?.timestamp) {
      setLastUpdate(new Date(data.timestamp));
    }
  }, [data?.timestamp]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-green-600">Connected</span>
          </div>
        );
      case 'disconnected':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm text-red-600">Disconnected</span>
          </div>
        );
      case 'reconnecting':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-yellow-600">Reconnecting</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Real-Time Monitor</h3>
        <div className="flex items-center space-x-4">
          {getStatusIcon(connectionStatus)}
          <div className="text-sm text-gray-500">
            Last update: {formatTime(lastUpdate)}
          </div>
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-sm rounded transition-colors"
          >
            {isLoading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">
            {data?.agents?.filter((a: any) => a.status === 'active').length || 0}
          </div>
          <div className="text-sm text-blue-600">Active Agents</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {data?.systemHealth?.systemHealth || 'N/A'}
          </div>
          <div className="text-sm text-green-600">System Health</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">
            {data?.alerts?.length || 0}
          </div>
          <div className="text-sm text-yellow-600">Active Alerts</div>
        </div>
      </div>

      {data?.alerts && data.alerts.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-medium text-gray-900 mb-2">Recent Alerts</h4>
          <div className="space-y-2">
            {data.alerts.slice(0, 5).map((alert: any, index: number) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-medium text-red-800">{alert.type}</div>
                    <div className="text-xs text-red-600">{alert.message}</div>
                  </div>
                  <div className="text-xs text-red-500">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 