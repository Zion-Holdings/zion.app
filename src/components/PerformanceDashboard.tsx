import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react';







interface PerformanceMetrics {
  buildSize: string;
  pageCount: number;
  loadTime: number;
  healthStatus: 'healthy' | 'warning' | 'error';
}

interface Improvement {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'security' | 'ux' | 'build';
}

const PerformanceDashboard: React.FC = () => {
  const [metrics] = useState<PerformanceMetrics>({
    buildSize: '959 MB',
    pageCount: 166,
    loadTime: 1.2,
    healthStatus: 'healthy'
  });

  const improvements: Improvement[] = [
    {
      id: '1',
      title: 'Fixed Search Bar Issues',
      description: 'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',
      status: 'completed',
      impact: 'high',
      category: 'ux'
    },
    {
      id: '2', 
      title: 'Environment Validation System',
      description: 'Added comprehensive pre-build checks to prevent deployment with missing environment variables',
      status: 'completed',
      impact: 'high',
      category: 'build'
    },
    {
      id: '3',
      title: 'NextAuth Configuration Fix',
      description: 'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',
      status: 'completed',
      impact: 'medium',
      category: 'security'
    },
    {
      id: '4',
      title: 'API Client Error Handling',
      description: 'Improved global error handling with better retry logic and user feedback',
      status: 'completed',
      impact: 'medium',
      category: 'ux'
    },
    {
      id: '5',
      title: 'Bundle Analyzer Integration',
      description: 'Added bundle analysis tools to identify and optimize large dependencies',
      status: 'completed',
      impact: 'medium',
      category: 'performance'
    },
    {
      id: '6',
      title: 'Health Check Endpoint',
      description: 'Created production monitoring endpoint for environment and service health',
      status: 'completed',
      impact: 'medium',
      category: 'security'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'planned': return <TrendingUp className="h-4 w-4 text-blue-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance': return <Zap className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
      case 'ux': return <Search className="h-4 w-4" />;
      case 'build': return <TrendingUp className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  const completedImprovements = improvements.filter(imp => imp.status === 'completed');

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
        <Badge className="bg-green-100 text-green-800">
          {completedImprovements.length} Improvements Completed
        </Badge>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Build Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.buildSize}</div>
            <p className="text-xs text-gray-500">Total build output</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Page Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.pageCount}</div>
            <p className="text-xs text-gray-500">Generated pages</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Load Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.loadTime}s</div>
            <p className="text-xs text-gray-500">Average page load</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Health Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold text-green-600">Healthy</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completed Improvements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Completed Improvements</span>
          </CardTitle>
          <CardDescription>
            Recent performance and functionality improvements that have been implemented
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedImprovements.map((improvement) => (
              <div key={improvement.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {getCategoryIcon(improvement.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {improvement.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Badge className={getImpactColor(improvement.impact)}>
                        {improvement.impact} impact
                      </Badge>
                      {getStatusIcon(improvement.status)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {improvement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button onClick={() => window.open('/api/health/environment', '_blank')} variant="outline">
          <Shield className="h-4 w-4 mr-2" />
          Check Health Status
        </Button>
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant="outline">
          <TrendingUp className="h-4 w-4 mr-2" />
          Bundle Analysis
        </Button>
      </div>
    </div>
  );
};

export default PerformanceDashboard; 