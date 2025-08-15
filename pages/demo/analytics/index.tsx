import React from 'react';
import SmartSidebar from '../../../components/SmartSidebar';
import { useServiceNavigation } from '../../../hooks/useNavigation';

export default function AnalyticsDemoPage() {
  const { serviceNavigation, isLoading, error } = useServiceNavigation('ai-analytics');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="flex">
          <SmartSidebar pageType="service" currentService="ai-analytics" className="w-64" />
          <div className="flex-1 p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-white/20 rounded w-1/3"></div>
              <div className="h-4 bg-white/20 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !serviceNavigation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Error Loading Service</h1>
          <p className="text-white/70">{error || 'Service not found'}</p>
        </div>
      </div>
    );
  }

  const { service } = serviceNavigation;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="flex">
        <SmartSidebar pageType="service" currentService="ai-analytics" className="w-64" />
        
        <div className="flex-1 p-8">
          {/* Service Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🤖</span>
              <div>
                <h1 className="text-4xl font-bold text-white">{service.label}</h1>
                <p className="text-white/60 text-lg">AI-Powered Data Analytics Platform</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-blue-500/20 text-blue-300'
              }`}>
                {service.status}
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white/60">Last updated: {service.lastUpdated}</span>
              <span className="text-white/60">•</span>
              <span className="text-white/60">{service.pricing}</span>
            </div>
            
            <p className="text-xl text-white/80 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologyStack?.map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/10 rounded-lg text-white/80 border border-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{service.performance?.uptime}</div>
                <div className="text-white/60">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{service.performance?.response}</div>
                <div className="text-white/60">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{service.performance?.users}</div>
                <div className="text-white/60">Active Users</div>
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Live Demo</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Analytics Dashboard</h3>
                <p className="text-white/60 mb-6">
                  Experience the power of AI-driven analytics with real-time data visualization
                </p>
                <div className="flex justify-center gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    🚀 Launch Demo
                  </button>
                  <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-colors">
                    📚 View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-lg font-semibold text-white mb-2">Machine Learning Models</h3>
                <p className="text-white/70 text-sm">
                  Advanced ML algorithms for predictive analytics and pattern recognition
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
                <p className="text-white/70 text-sm">
                  Instant data processing and analysis for immediate insights
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-semibold text-white mb-2">Interactive Dashboards</h3>
                <p className="text-white/70 text-sm">
                  Beautiful, responsive dashboards with customizable widgets
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-white/70 text-sm">
                  SOC 2 compliant with advanced encryption and access controls
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 mb-6">
                Join thousands of businesses using AI-powered analytics to drive growth
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}