import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface DashboardMetrics {
  totalServices: number;
  activeServices: number;
  qualityScore: number;
  deploymentCoverage: number;
  marketOpportunities: number;
  systemHealth: string;
}

interface RecentActivity {
  id: string;
  type: 'service_created' | 'quality_check' | 'deployment' | 'optimization';
  service: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error';
  description: string;
}

interface QuickAction {
  name: string;
  description: string;
  command: string;
  category: 'creation' | 'quality' | 'deployment' | 'optimization';
  icon: string;
}

const DashboardPage: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalServices: 0,
    activeServices: 0,
    qualityScore: 0,
    deploymentCoverage: 0,
    marketOpportunities: 0,
    systemHealth: 'Unknown'
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Simulate loading dashboard data
      const mockMetrics: DashboardMetrics = {
        totalServices: 6,
        activeServices: 5,
        qualityScore: 87,
        deploymentCoverage: 83,
        marketOpportunities: 12,
        systemHealth: 'Excellent'
      };

      const mockActivity: RecentActivity[] = [
        {
          id: '1',
          type: 'service_created',
          service: 'AI Analytics Platform',
          timestamp: '2024-01-15T10:30:00Z',
          status: 'success',
          description: 'New AI analytics service generated successfully'
        },
        {
          id: '2',
          type: 'quality_check',
          service: 'ML Pipeline Service',
          timestamp: '2024-01-15T09:15:00Z',
          status: 'success',
          description: 'Quality check completed with score 92/100'
        },
        {
          id: '3',
          type: 'deployment',
          service: 'Data Processor API',
          timestamp: '2024-01-15T08:45:00Z',
          status: 'success',
          description: 'Service deployed to AWS ECS successfully'
        },
        {
          id: '4',
          type: 'optimization',
          service: 'API Gateway',
          timestamp: '2024-01-15T08:00:00Z',
          status: 'warning',
          description: 'Performance optimization applied with 15% improvement'
        }
      ];

      setMetrics(mockMetrics);
      setRecentActivity(mockActivity);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
      setLoading(false);
    }
  };

  const quickActions: QuickAction[] = [
    {
      name: 'Generate New Service',
      description: 'Create a new AI or IT service using the factory',
      command: 'npm run ultimate:run',
      category: 'creation',
      icon: '🚀'
    },
    {
      name: 'Quality Check',
      description: 'Run comprehensive quality assurance on all services',
      command: 'npm run quality:check',
      category: 'quality',
      icon: '🔍'
    },
    {
      name: 'Deploy Services',
      description: 'Deploy services to cloud infrastructure',
      command: 'npm run deployment:deploy',
      category: 'deployment',
      icon: '☁️'
    },
    {
      name: 'Performance Optimization',
      description: 'Optimize system performance and generate insights',
      command: 'npm run performance:optimize',
      category: 'optimization',
      icon: '⚡'
    },
    {
      name: 'Integration Testing',
      description: 'Run full integration tests on the system',
      command: 'npm run integration:test',
      category: 'quality',
      icon: '🧪'
    },
    {
      name: 'Update Service Catalog',
      description: 'Update the services page with latest information',
      command: 'npm run catalog:update',
      category: 'creation',
      icon: '📚'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return 'ℹ️';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'service_created': return '🏗️';
      case 'quality_check': return '🔍';
      case 'deployment': return '🚀';
      case 'optimization': return '⚡';
      default: return '📝';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'creation': return 'bg-blue-100 text-blue-800';
      case 'quality': return 'bg-green-100 text-green-800';
      case 'deployment': return 'bg-purple-100 text-purple-800';
      case 'optimization': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>AI Service Factory Dashboard - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive dashboard for the AI Service Factory automation system. Monitor services, run automations, and manage the entire pipeline." />
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
                  <Link href="/dashboard" className="text-blue-600 font-medium">
                    📊 Dashboard
                  </Link>
                  <Link href="/system-status" className="text-gray-600 hover:text-gray-900 transition-colors">
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
                <Link href="/dashboard" className="text-blue-600 font-medium">
                  📊 Dashboard
                </Link>
                <Link href="/system-status" className="text-gray-600 hover:text-gray-900 transition-colors">
                  ⚡ System Status
                </Link>
                <Link href="/updates" className="text-gray-600 hover:text-gray-900 transition-colors">
                  📰 Updates
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* System Health Status */}
          <div className="mb-8">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              metrics.systemHealth === 'Excellent' ? 'bg-green-100 text-green-800' :
              metrics.systemHealth === 'Good' ? 'bg-blue-100 text-blue-800' :
              metrics.systemHealth === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              <span className="mr-2">
                {metrics.systemHealth === 'Excellent' ? '🟢' :
                 metrics.systemHealth === 'Good' ? '🔵' :
                 metrics.systemHealth === 'Fair' ? '🟡' : '🔴'}
              </span>
              System Health: {metrics.systemHealth}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">S</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Services</dt>
                      <dd className="text-lg font-medium text-gray-900">{metrics.totalServices}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Active Services</dt>
                      <dd className="text-lg font-medium text-gray-900">{metrics.activeServices}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">Q</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Quality Score</dt>
                      <dd className="text-lg font-medium text-gray-900">{metrics.qualityScore}/100</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">D</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Deployment Coverage</dt>
                      <dd className="text-lg font-medium text-gray-900">{metrics.deploymentCoverage}%</dd>
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
                      <span className="text-white font-bold">M</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Market Opportunities</dt>
                      <dd className="text-lg font-medium text-gray-900">{metrics.marketOpportunities}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">H</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">System Health</dt>
                      <dd className="text-lg font-medium text-gray-900">{metrics.systemHealth}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickActions.map((action) => (
                <div key={action.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-2xl mr-3">
                      {action.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{action.name}</h4>
                      <p className="text-xs text-gray-600 mb-3">{action.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(action.category)}`}>
                          {action.category}
                        </span>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                          {action.command}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-lg">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.service}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {getStatusIcon(activity.status)} {activity.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Factory Dashboard */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-medium mb-2">Service Factory Dashboard</h3>
              <p className="text-blue-100 mb-4">
                Access the comprehensive service factory dashboard for detailed monitoring and control.
              </p>
              <Link
                href="/automation/service-factory-dashboard.html"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Open Dashboard
              </Link>
            </div>

            {/* Services Page */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-medium mb-2">Services Catalog</h3>
              <p className="text-green-100 mb-4">
                View all generated services with detailed information and links.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Advanced Controls */}
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Advanced Controls</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">System Health Check</h4>
                <p className="text-xs text-gray-600 mb-3">Run comprehensive system diagnostics</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">npm run ultimate:health</code>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Performance Optimization</h4>
                <p className="text-xs text-gray-600 mb-3">Optimize system performance</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">npm run performance:optimize</code>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Integration Testing</h4>
                <p className="text-xs text-gray-600 mb-3">Run full system tests</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">npm run integration:test</code>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Update Catalog</h4>
                <p className="text-xs text-gray-600 mb-3">Refresh service catalog</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">npm run catalog:update</code>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Quality Report</h4>
                <p className="text-xs text-gray-600 mb-3">Generate quality report</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">npm run quality:report</code>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Deployment Status</h4>
                <p className="text-xs text-gray-600 mb-3">Check deployment status</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">npm run deployment:list</code>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;