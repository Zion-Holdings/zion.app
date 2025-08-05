import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

interface AnalysisData {
  id: string;
  type: 'performance' | 'trend' | 'prediction' | 'optimization';
  title: string;
  description: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  confidence: number;
}

const AIPoweredAnalysisPage: NextPage = () => {
  const [analysisData, setAnalysisData] = useState<AnalysisData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    // Simulate loading analysis data
    setTimeout(() => {
      const mockData: AnalysisData[] = [
        {
          id: '1',
          type: 'performance',
          title: 'System Performance',
          description: 'Overall system performance metrics',
          value: 94.2,
          unit: '%',
          trend: 'up',
          confidence: 95
        },
        {
          id: '2',
          type: 'trend',
          title: 'User Growth',
          description: 'Monthly user growth rate',
          value: 12.5,
          unit: '%',
          trend: 'up',
          confidence: 87
        },
        {
          id: '3',
          type: 'prediction',
          title: 'Revenue Forecast',
          description: 'Next quarter revenue prediction',
          value: 1250000,
          unit: '$',
          trend: 'up',
          confidence: 92
        },
        {
          id: '4',
          type: 'optimization',
          title: 'Resource Utilization',
          description: 'Current resource optimization level',
          value: 78.3,
          unit: '%',
          trend: 'stable',
          confidence: 89
        }
      ];

      setAnalysisData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'stable': return '→';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'performance': return 'bg-blue-100 text-blue-800';
      case 'trend': return 'bg-green-100 text-green-800';
      case 'prediction': return 'bg-purple-100 text-purple-800';
      case 'optimization': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Head>
        <title>AI Powered Analysis - Zion App</title>
        <meta name="description" content="Comprehensive AI-driven analysis tools that provide deep insights into your data and operations" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Powered Analysis</h1>
            <p className="text-gray-600">Comprehensive AI-driven analysis tools that provide deep insights into your data and operations</p>
          </div>

          {/* Filter */}
          <div className="mb-6">
            <div className="flex space-x-2">
              {['all', 'performance', 'trend', 'prediction', 'optimization'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                Loading analysis data...
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisData
                .filter(item => selectedType === 'all' || item.type === selectedType)
                .map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <span className={`text-sm ${getTrendColor(item.trend)}`}>
                        {getTrendIcon(item.trend)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    
                    <div className="flex items-baseline mb-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {item.value.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">{item.unit}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Confidence:</span>
                      <span className="font-medium">{item.confidence}%</span>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Features Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Analysis Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analysis</h3>
                <p className="text-gray-600 text-sm">Monitor system performance and identify bottlenecks</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trend Analysis</h3>
                <p className="text-gray-600 text-sm">Track patterns and trends in your data</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600 text-sm">Forecast future outcomes using AI models</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm">Optimize processes and resource allocation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPoweredAnalysisPage;