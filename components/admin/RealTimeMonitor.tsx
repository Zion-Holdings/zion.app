import React, { useState, useEffect } from 'react";

interface RealTimeMonitorProps {
  data: any;
  onRefresh: () => void;
  isLoading: boolean;
}

export default function RealTimeMonitor({ data, onRefresh, isLoading }: RealTimeMonitorProps) {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'reconnecting'>('connected');

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-600">Connected</span>
          </div>
        );
      case 'disconnected':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <span className="text-red-600">Disconnected</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-yellow-600">Reconnecting</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Real-Time Monitor</h3>
        <div className="flex items-center space-x-4">
          {getStatusIcon(connectionStatus)}
          <span className="text-sm text-gray-500">
            Last update: {formatTime(lastUpdate)}
          </span>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading data...</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-blue-800">Active Connections</h4>
              <p className="text-2xl font-bold text-blue-600">{data?.activeConnections || 0}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-green-800">Success Rate</h4>
              <p className="text-2xl font-bold text-green-600">{data?.successRate || 0}%</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-purple-800">Response Time</h4>
              <p className="text-2xl font-bold text-purple-600">{data?.responseTime || 0}ms</p>
            </div>
          </div>

          <button
            onClick={onRefresh}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Refresh Data
          </button>
        </div>
      )}
    </div>
  );
}