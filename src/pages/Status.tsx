import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';

const Status = () => {
  const systemStatus = {
    overall: 'operational',
    services: [
      { name: 'Website', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'API Services', status: 'operational', uptime: '99.8%', lastIncident: 'None' },
      { name: 'Database', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'AI Services', status: 'operational', uptime: '99.7%', lastIncident: 'None' },
      { name: 'Cloud Infrastructure', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'Security Services', status: 'operational', uptime: '100%', lastIncident: 'None' }
    ],
    incidents: []
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'degraded':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'outage':
        return 'text-red-500 bg-red-500/10 border-red-500/20';
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real-time status of Zion Tech Group services and infrastructure
            </p>
          </div>
        </div>
      </div>

      {/* Overall Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Overall System Status</h2>
            <div className="flex items-center space-x-3">
              {getStatusIcon(systemStatus.overall)}
              <span className="text-lg font-medium text-green-400">All Systems Operational</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-gray-400">Uptime (30 days)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">0</div>
              <div className="text-gray-400">Active Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Service Status</h2>
          
          <div className="space-y-4">
            {systemStatus.services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl border ${getStatusColor(service.status)}`}
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(service.status)}
                  <div>
                    <h3 className="font-medium text-white">{service.name}</h3>
                    <p className="text-sm text-gray-400">Uptime: {service.uptime}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Last incident: {service.lastIncident}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Infrastructure Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20">
              <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Cloud Servers</div>
              <div className="text-sm text-gray-400">Global Distribution</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl border border-green-500/20">
              <Database className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Databases</div>
              <div className="text-sm text-gray-400">High Availability</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">CDN</div>
              <div className="text-sm text-gray-400">Global Edge</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl border border-cyan-500/20">
              <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Security</div>
              <div className="text-sm text-gray-400">24/7 Protection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident History */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Recent Incidents</h2>
          
          {systemStatus.incidents.length === 0 ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No Recent Incidents</h3>
              <p className="text-gray-400">All systems are running smoothly</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Incident items would go here */}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center text-gray-400">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="text-sm mt-2">
            For urgent issues, contact our support team at{' '}
            <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
              support@ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;