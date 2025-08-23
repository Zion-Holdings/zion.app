import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface DashboardData {
  status: 'healthy' | 'warning' | 'error';
  metrics: {
    cache: {
      short: any;
      medium: any;
      long: any;
    };
    build: {
      timestamp: string;
      version: string;
      environment: string;
    };
    runtime: {
      uptime: number;
      memory: NodeJS.MemoryUsage;
      platform: string;
      nodeVersion: string;
    };
    environment: {
      supabaseConfigured: boolean;
      stripeConfigured: boolean;
      sentryConfigured: boolean;
      reownConfigured: boolean;
    };
  };
  timestamp: string;
  buildInfo: {
    successful: boolean;
    totalPages: number;
    bundleSize: string;
  };
}

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const colors = {
    healthy: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors] || colors.error}`}>
      {status.toUpperCase()}
    </span>
  );
};

const MetricCard: React.FC<{ title: string; value: string | number; status?: string }> = ({ 
  title, 
  value, 
  status 
}) => (
  <div className="bg-white p-4 rounded-lg shadow border">
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      {status && <StatusBadge status={status} />}
    </div>
    <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
  </div>
);

const DevelopmentDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/dev/dashboard');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const dashboardData = await response.json();
      setData(dashboardData);
      setError(null);
      setLastUpdated(new Date());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatBytes = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchDashboardData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <>
      <Head>
        <title>Development Dashboard - Zion App</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Development Dashboard</h1>
                <p className="text-gray-600 mt-1">System metrics and performance monitoring</p>
              </div>
              <div className="text-right">
                <StatusBadge status={data.status} />
                <p className="text-sm text-gray-500 mt-1">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>

          {/* Build Info */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Build Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricCard 
                title="Build Status" 
                value={data.buildInfo.successful ? "Success" : "Failed"}
                status={data.buildInfo.successful ? "healthy" : "error"}
              />
              <MetricCard title="Total Pages" value={data.buildInfo.totalPages} />
              <MetricCard title="Bundle Size" value={data.buildInfo.bundleSize} />
              <MetricCard title="Environment" value={data.metrics.build.environment} />
            </div>
          </div>

          {/* Cache Statistics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cache Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(data.metrics.cache).map(([type, stats]) => (
                <div key={type} className="bg-white p-6 rounded-lg shadow border">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 capitalize">{type} Cache</h3>
                  {stats ? (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Keys:</span>
                        <span className="font-medium">{stats.keys}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hits:</span>
                        <span className="font-medium">{stats.hits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Misses:</span>
                        <span className="font-medium">{stats.misses}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hit Rate:</span>
                        <span className="font-medium">
                          {stats.hits + stats.misses > 0 
                            ? Math.round((stats.hits / (stats.hits + stats.misses)) * 100)
                            : 0}%
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">No stats available</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Runtime Metrics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Runtime Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricCard title="Uptime" value={formatUptime(data.metrics.runtime.uptime)} />
              <MetricCard title="Heap Used" value={formatBytes(data.metrics.runtime.memory.heapUsed)} />
              <MetricCard title="Platform" value={data.metrics.runtime.platform} />
              <MetricCard title="Node Version" value={data.metrics.runtime.nodeVersion} />
            </div>
          </div>

          {/* Environment Configuration */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Environment Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard 
                title="Supabase" 
                value={data.metrics.environment.supabaseConfigured ? "Configured" : "Missing"}
                status={data.metrics.environment.supabaseConfigured ? "healthy" : "warning"}
              />
              <MetricCard 
                title="Stripe" 
                value={data.metrics.environment.stripeConfigured ? "Configured" : "Missing"}
                status={data.metrics.environment.stripeConfigured ? "healthy" : "warning"}
              />
              <MetricCard 
                title="Sentry" 
                value={data.metrics.environment.sentryConfigured ? "Configured" : "Missing"}
                status={data.metrics.environment.sentryConfigured ? "healthy" : "warning"}
              />
              <MetricCard 
                title="Reown" 
                value={data.metrics.environment.reownConfigured ? "Configured" : "Missing"}
                status={data.metrics.environment.reownConfigured ? "healthy" : "warning"}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm">
            <p>Dashboard auto-refreshes every 30 seconds</p>
            <p className="mt-1">Version {data.metrics.build.version} • Build: {new Date(data.metrics.build.timestamp).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentDashboard; 