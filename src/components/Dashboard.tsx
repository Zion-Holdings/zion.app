import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  ShoppingCart, 
  DollarSign, 
  Clock, 
  Star, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Bell,
  Settings,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface DashboardMetric {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface RecentActivity {
  id: string;
  type: 'service' | 'talent' | 'equipment' | 'notification';
  title: string;
  description: string;
  time: string;
  status: 'completed' | 'pending' | 'failed';
}

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'reports'>('overview');

  const metrics: DashboardMetric[] = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      change: 12.5,
      changeType: 'increase',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: 8.2,
      changeType: 'increase',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Services Delivered',
      value: '156',
      change: -2.1,
      changeType: 'decrease',
      icon: Briefcase,
      color: 'text-purple-600'
    },
    {
      title: 'Equipment Sales',
      value: '89',
      change: 15.3,
      changeType: 'increase',
      icon: ShoppingCart,
      color: 'text-orange-600'
    }
  ];

  const recentActivities: RecentActivity[] = [
    {
      id: '1',
      type: 'service',
      title: 'AI Infrastructure Setup',
      description: 'Completed for TechCorp Inc.',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      id: '2',
      type: 'talent',
      title: 'New Talent Hired',
      description: 'Senior AI Engineer - Sarah Chen',
      time: '4 hours ago',
      status: 'completed'
    },
    {
      id: '3',
      type: 'equipment',
      title: 'GPU Server Order',
      description: 'High-performance server for ML workloads',
      time: '6 hours ago',
      status: 'pending'
    },
    {
      id: '4',
      type: 'notification',
      title: 'System Update',
      description: 'Security patch applied successfully',
      time: '8 hours ago',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Briefcase className="h-4 w-4" />;
      case 'talent':
        return <Users className="h-4 w-4" />;
      case 'equipment':
        return <ShoppingCart className="h-4 w-4" />;
      case 'notification':
        return <Bell className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { key: 'overview', label: 'Overview', icon: BarChart3 },
              { key: 'analytics', label: 'Analytics', icon: LineChart },
              { key: 'reports', label: 'Reports', icon: PieChart }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'border-zion-blue text-zion-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100 ${metric.color}`}>
                      <metric.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    {metric.changeType === 'increase' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}%
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-zion-blue" />
                  <span>Revenue Trend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p>Revenue Chart</p>
                    <p className="text-sm">Interactive chart would be rendered here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-zion-blue" />
                  <span>User Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <LineChart className="h-12 w-12 mx-auto mb-2" />
                    <p>User Growth Chart</p>
                    <p className="text-sm">Interactive chart would be rendered here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-zion-blue" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {getTypeIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(activity.status)}>
                        {activity.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {activeTab === 'analytics' && (
        <div className="text-center py-12">
          <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600">Advanced analytics and insights would be displayed here.</p>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="text-center py-12">
          <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Reports & Insights</h3>
          <p className="text-gray-600">Detailed reports and business insights would be displayed here.</p>
        </div>
      )}
    </div>
  );
}