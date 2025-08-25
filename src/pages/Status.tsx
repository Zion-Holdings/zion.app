import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Brain,
  Rocket,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  BarChart3
} from 'lucide-react';

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock status data - in a real app, this would come from an API
  const systemStatus = {
    overall: 'operational',
    uptime: '99.98%',
    lastIncident: '2024-12-15',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      icon: Brain,
      description: 'AI Business Intelligence, Marketing Automation, HR & Recruitment'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms',
      icon: Server,
      description: 'Cloud hosting, databases, and infrastructure services'
    },
    {
      name: 'Cybersecurity',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '65ms',
      icon: Shield,
      description: 'Security monitoring, threat detection, and compliance'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      icon: Globe,
      description: 'REST API, GraphQL, and webhook services'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '25ms',
      icon: Database,
      description: 'Primary and backup database systems'
    },
    {
      name: 'Micro SAAS Platform',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '95ms',
      icon: Rocket,
      description: 'Micro SAAS solutions and marketplace'
    }
  ];

  const regions = [
    { name: 'US East (N. Virginia)', status: 'operational', latency: '45ms' },
    { name: 'US West (Oregon)', status: 'operational', latency: '52ms' },
    { name: 'Europe (Ireland)', status: 'operational', latency: '78ms' },
    { name: 'Asia Pacific (Tokyo)', status: 'operational', latency: '95ms' }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      date: '2024-12-15',
      duration: '2 hours',
      description: 'Planned database maintenance to improve performance and reliability.',
      impact: 'low'
    },
    {
      id: 2,
      title: 'API Rate Limiting Update',
      status: 'resolved',
      date: '2024-12-10',
      duration: '30 minutes',
      description: 'Updated API rate limiting policies to ensure fair usage across all customers.',
      impact: 'low'
    },
    {
      id: 3,
      title: 'Security Patch Deployment',
      status: 'resolved',
      date: '2024-12-05',
      duration: '1 hour',
      description: 'Deployed critical security patches to all production systems.',
      impact: 'low'
    }
  ];

  const performanceMetrics = [
    { metric: 'Average Response Time', value: '45ms', trend: 'down', change: '-12%' },
    { metric: 'Error Rate', value: '0.02%', trend: 'down', change: '-5%' },
    { metric: 'Throughput', value: '15,420 req/s', trend: 'up', change: '+8%' },
    { metric: 'Active Users', value: '2,847', trend: 'up', change: '+15%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low':
        return 'text-green-400 bg-green-400/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'high':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">System Status</h1>
              <p className="text-xl text-zion-slate-light">Real-time system health and performance monitoring</p>
            </div>
          </div>
          
          {/* Overall Status */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Overall Status</h3>
                  <p className="text-2xl font-bold text-green-400">Operational</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
                  <p className="text-2xl font-bold text-zion-cyan">{systemStatus.uptime}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-2xl font-bold text-zion-cyan">{systemStatus.responseTime}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Last Incident</h3>
                  <p className="text-lg font-semibold text-zion-slate-light">{systemStatus.lastIncident}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zion-cyan/20 flex items-center justify-between">
                <div className="text-zion-slate-light">
                  Last updated: {lastUpdated.toLocaleString()}
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 bg-zion-cyan/20 hover:bg-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Status</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-zion-slate-light">{service.description}</p>
                    </div>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-zion-slate-light mb-1">Uptime</p>
                    <p className="text-lg font-semibold text-green-400">{service.uptime}</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-zion-slate-light mb-1">Response Time</p>
                    <p className="text-lg font-semibold text-zion-cyan">{service.responseTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-6 h-6 text-white" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-2xl font-bold text-zion-cyan mb-2">{metric.value}</p>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  metric.trend === 'up' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                }`}>
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Regional Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{region.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {getStatusIcon(region.status)}
                  <span className="text-green-400 font-semibold">Operational</span>
                </div>
                <p className="text-zion-slate-light">Latency: {region.latency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Incidents</h2>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(incident.impact)}`}>
                        {incident.impact} impact
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{incident.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <span>Date: {incident.date}</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(incident.status)}
                    <span className="text-green-400 font-medium">Resolved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get notified about system status updates, maintenance windows, and incidents. 
            We'll keep you informed about any changes that might affect your services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;