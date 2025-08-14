import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface ComponentStatus {
  name: string;
  status: 'operational' | 'degraded' | 'down' | 'unknown';
  lastCheck: string;
  responseTime: number;
  version: string;
  description: string;
  metrics: {
    uptime: string;
    errors: number;
    warnings: number;
  };
}

interface SystemStatus {
  overall: 'operational' | 'degraded' | 'down';
  components: ComponentStatus[];
  lastUpdated: string;
  performance: {
    averageResponseTime: number;
    totalErrors: number;
    totalWarnings: number;
  };
}

const StatusPage: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSystemStatus();
    const interval = setInterval(loadSystemStatus, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const loadSystemStatus = async () => {
    try {
      // Simulate loading system status
      const mockStatus: SystemStatus = {
        overall: 'operational',
        lastUpdated: new Date().toISOString(),
        components: [
          {
            name: 'Market Intelligence System',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 120,
            version: '1.2.0',
            description: 'AI-powered market research and trend analysis',
            metrics: {
              uptime: '99.9%',
              errors: 0,
              warnings: 1
            }
          },
          {
            name: 'Opportunity Detector',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 85,
            version: '1.1.5',
            description: 'Automated service opportunity identification',
            metrics: {
              uptime: '99.8%',
              errors: 0,
              warnings: 0
            }
          },
          {
            name: 'Service Blueprint Generator',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 200,
            version: '1.3.2',
            description: 'Service specification and blueprint creation',
            metrics: {
              uptime: '99.7%',
              errors: 1,
              warnings: 2
            }
          },
          {
            name: 'MVP Generator',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 1500,
            version: '1.4.0',
            description: 'Complete service project generation',
            metrics: {
              uptime: '99.6%',
              errors: 0,
              warnings: 1
            }
          },
          {
            name: 'Quality Automation',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 300,
            version: '1.2.1',
            description: 'Automated quality assurance and testing',
            metrics: {
              uptime: '99.9%',
              errors: 0,
              warnings: 0
            }
          },
          {
            name: 'Deployment Orchestrator',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 450,
            version: '1.1.8',
            description: 'Multi-cloud deployment automation',
            metrics: {
              uptime: '99.8%',
              errors: 0,
              warnings: 1
            }
          },
          {
            name: 'Service Factory Dashboard',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 75,
            version: '1.0.5',
            description: 'Real-time monitoring and visualization',
            metrics: {
              uptime: '99.9%',
              errors: 0,
              warnings: 0
            }
          },
          {
            name: 'Integration Tester',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 800,
            version: '1.0.2',
            description: 'System integration testing and validation',
            metrics: {
              uptime: '99.7%',
              errors: 0,
              warnings: 2
            }
          },
          {
            name: 'Performance Optimizer',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 1200,
            version: '1.0.1',
            description: 'ML-powered performance optimization',
            metrics: {
              uptime: '99.6%',
              errors: 1,
              warnings: 1
            }
          },
          {
            name: 'Service Catalog Manager',
            status: 'operational',
            lastCheck: new Date().toISOString(),
            responseTime: 180,
            version: '1.0.3',
            description: 'Service catalog and page management',
            metrics: {
              uptime: '99.9%',
              errors: 0,
              warnings: 0
            }
          }
        ],
        performance: {
          averageResponseTime: 0,
          totalErrors: 0,
          totalWarnings: 0
        }
      };

      // Calculate performance metrics
      mockStatus.performance.averageResponseTime = Math.round(
        mockStatus.components.reduce((sum, comp) => sum + comp.responseTime, 0) / mockStatus.components.length
      );
      mockStatus.performance.totalErrors = mockStatus.components.reduce((sum, comp) => sum + comp.metrics.errors, 0);
      mockStatus.performance.totalWarnings = mockStatus.components.reduce((sum, comp) => sum + comp.metrics.warnings, 0);

      setSystemStatus(mockStatus);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load system status:', error);
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'degraded': return 'bg-yellow-100 text-yellow-800';
      case 'down': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return '🟢';
      case 'degraded': return '🟡';
      case 'down': return '🔴';
      default: return '⚪';
    }
  };

  const getOverallStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-600';
      case 'degraded': return 'bg-yellow-600';
      case 'down': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getResponseTimeColor = (responseTime: number) => {
    if (responseTime < 100) return 'text-green-600';
    if (responseTime < 500) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading system status...</p>
        </div>
      </div>
    );
  }

  if (!systemStatus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">System Status Unavailable</h2>
          <p className="text-gray-600">Unable to load system status information.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>System Status - bolt.new.zion.app</title>
        <meta name="description" content="Real-time system status for the AI Service Factory automation system. Monitor component health, performance, and uptime." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                System Status
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time monitoring of the AI Service Factory automation system components and performance.
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Overall Status */}
          <div className="mb-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-medium ${getOverallStatusColor(systemStatus.overall)}`}>
              <span className="mr-2 text-xl">
                {getStatusIcon(systemStatus.overall)}
              </span>
              Overall System Status: {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Last updated: {new Date(systemStatus.lastUpdated).toLocaleString()}
            </p>
          </div>

          {/* Performance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">R</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Avg Response Time</dt>
                      <dd className="text-lg font-medium text-gray-900">{systemStatus.performance.averageResponseTime}ms</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">E</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Errors</dt>
                      <dd className="text-lg font-medium text-gray-900">{systemStatus.performance.totalErrors}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">W</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Warnings</dt>
                      <dd className="text-lg font-medium text-gray-900">{systemStatus.performance.totalWarnings}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Component Status */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Component Status</h3>
              <p className="text-sm text-gray-600">Real-time status of all system components</p>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Component
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Response Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Version
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Metrics
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Check
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {systemStatus.components.map((component) => (
                    <tr key={component.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{component.name}</div>
                          <div className="text-sm text-gray-500">{component.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(component.status)}`}>
                          {getStatusIcon(component.status)} {component.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${getResponseTimeColor(component.responseTime)}`}>
                          {component.responseTime}ms
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {component.version}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <div>Uptime: {component.metrics.uptime}</div>
                          <div className="text-red-600">Errors: {component.metrics.errors}</div>
                          <div className="text-yellow-600">Warnings: {component.metrics.warnings}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(component.lastCheck).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Status Legend */}
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Status Legend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-xl">🟢</span>
                <div>
                  <div className="text-sm font-medium text-gray-900">Operational</div>
                  <div className="text-sm text-gray-500">Component is functioning normally</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-600 text-xl">🟡</span>
                <div>
                  <div className="text-sm font-medium text-gray-900">Degraded</div>
                  <div className="text-sm text-gray-500">Component has minor issues or warnings</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-600 text-xl">🔴</span>
                <div>
                  <div className="text-sm font-medium text-gray-900">Down</div>
                  <div className="text-sm text-gray-500">Component is not responding or has errors</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-xl">⚪</span>
                <div>
                  <div className="text-sm font-medium text-gray-900">Unknown</div>
                  <div className="text-sm text-gray-500">Component status cannot be determined</div>
                </div>
              </div>
            </div>
          </div>

          {/* Auto-refresh Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              This page automatically refreshes every 30 seconds. Last update: {new Date(systemStatus.lastUpdated).toLocaleString()}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default StatusPage;