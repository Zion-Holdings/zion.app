import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface EdgeComputing {
  id: string;
  name: string;
  description: string;
  type: 'iot_gateway' | 'edge_server' | 'micro_data_center' | 'edge_device' | 'edge_router' | 'edge_storage';
  status: 'active' | 'inactive' | 'maintenance' | 'error' | 'offline';
  location: string;
  capacity: number;
  latency: number;
  aiAnalysis: EdgeAnalysis;
}

interface EdgeAnalysis {
  id: string;
  performanceScore: number;
  reliabilityScore: number;
  efficiencyScore: number;
  recommendations: string[];
}

interface FogComputing {
  id: string;
  title: string;
  description: string;
  type: 'fog_node' | 'fog_cluster' | 'fog_gateway' | 'fog_router' | 'fog_storage' | 'fog_processor';
  status: 'active' | 'inactive' | 'maintenance' | 'error' | 'offline';
  location: string;
  nodes: number;
  bandwidth: number;
  aiOptimization: FogOptimization;
}

interface FogOptimization {
  id: string;
  optimizationScore: number;
  connectivityScore: number;
  resourceScore: number;
  recommendations: string[];
}

interface DistributedComputing {
  id: string;
  name: string;
  description: string;
  type: 'distributed_cluster' | 'grid_computing' | 'peer_to_peer' | 'distributed_storage' | 'distributed_processing' | 'distributed_analytics';
  status: 'active' | 'inactive' | 'maintenance' | 'error' | 'offline';
  nodes: number;
  tasks: number;
  aiAnalysis: DistributedAnalysis;
}

interface DistributedAnalysis {
  id: string;
  distributionScore: number;
  loadBalanceScore: number;
  scalabilityScore: number;
  recommendations: string[];
}

interface EdgeAnalytics {
  id: string;
  analyticsId: string;
  title: string;
  description: string;
  type: 'real_time' | 'batch_processing' | 'stream_processing' | 'predictive' | 'descriptive' | 'prescriptive';
  status: 'running' | 'completed' | 'failed' | 'scheduled';
  dataPoints: number;
  processingTime: number;
  aiAnalysis: AnalyticsAnalysis;
}

interface AnalyticsAnalysis {
  id: string;
  accuracyScore: number;
  speedScore: number;
  insightScore: number;
  recommendations: string[];
}

interface FogOrchestration {
  id: string;
  orchestrationId: string;
  title: string;
  description: string;
  type: 'resource_orchestration' | 'service_orchestration' | 'workflow_orchestration' | 'network_orchestration' | 'security_orchestration' | 'data_orchestration';
  status: 'active' | 'inactive' | 'maintenance' | 'error' | 'offline';
  services: number;
  policies: number;
  aiAnalysis: OrchestrationAnalysis;
}

interface OrchestrationAnalysis {
  id: string;
  orchestrationScore: number;
  automationScore: number;
  coordinationScore: number;
  recommendations: string[];
}

interface EdgeComputingManagement {
  id: string;
  systemId: string;
  title: string;
  description: string;
  category: 'hardware' | 'software' | 'network' | 'security' | 'performance' | 'maintenance';
  status: 'operational' | 'maintenance' | 'error' | 'offline';
  devices: number;
  uptime: number;
  aiAnalysis: ManagementAnalysis;
}

interface ManagementAnalysis {
  id: string;
  managementScore: number;
  performanceScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface EdgeComputingAnalytics {
  totalEdgeDevices: number;
  activeFogNodes: number;
  distributedClusters: number;
  analyticsProcesses: number;
  orchestrationServices: number;
  managedSystems: number;
  averageLatency: number;
  aiOptimizationScore: number;
  aiInsights: EdgeComputingInsight[];
}

interface EdgeComputingInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredEdgeComputingPage: NextPage = () => {
  
  const [edgeComputing, setEdgeComputing] = useState<EdgeComputing[]>([]
  const [fogComputing, setFogComputing] = useState<FogComputing[]>([]
  const [distributedComputing, setDistributedComputing] = useState<DistributedComputing[]>([]
  const [edgeAnalytics, setEdgeAnalytics] = useState<EdgeAnalytics[]>([]
  const [fogOrchestration, setFogOrchestration] = useState<FogOrchestration[]>([]
  const [edgeComputingManagement, setEdgeComputingManagement] = useState<EdgeComputingManagement[]>([]
  const [analytics, setAnalytics] = useState<EdgeComputingAnalytics | null>(null
  const [activeTab, setActiveTab] = useState<'edge' | 'fog' | 'distributed' | 'analytics' | 'orchestration' | 'management' | 'overview'>('edge'
  const [selectedType, setSelectedType] = useState<string>('all'
  const [isLoading, setIsLoading] = useState(true
  // Mock data
  const mockEdgeComputing: EdgeComputing[] = [
    {
      id: '1',
      name: 'IoT Gateway Edge Server',
      description: 'Edge computing server for IoT device management and data processing',
      type: 'iot_gateway',
      status: 'active',
      location: 'New York, NY',
      capacity: 1024,
      latency: 5,
      aiAnalysis: {
        id: '1',
        performanceScore: 94,
        reliabilityScore: 96,
        efficiencyScore: 92,
        recommendations: ['Optimize data processing', 'Enhance connectivity']
}
      }
    }
  ]

  const mockFogComputing: FogComputing[] = [
    {
      id: '1',
      title: 'Fog Computing Cluster',
      description: 'Distributed fog computing cluster for edge device coordination',
      type: 'fog_cluster',
      status: 'active',
      location: 'Los Angeles, CA',
      nodes: 8,
      bandwidth: 1000,
      aiOptimization: {
        id: '1',
        optimizationScore: 91,
        connectivityScore: 94,
        resourceScore: 89,
        recommendations: ['Improve node coordination', 'Optimize bandwidth usage']
      }
    }
  ]

  const mockDistributedComputing: DistributedComputing[] = [
    {
      id: '1',
      name: 'Distributed Processing Cluster',
      description: 'Distributed computing cluster for parallel processing tasks',
      type: 'distributed_cluster',
      status: 'active',
      nodes: 16,
      tasks: 128,
      aiAnalysis: {
        id: '1',
        distributionScore: 93,
        loadBalanceScore: 91,
        scalabilityScore: 95,
        recommendations: ['Optimize task distribution', 'Improve load balancing']
      }
    }
  ]

  const mockEdgeAnalytics: EdgeAnalytics[] = [
    {
      id: '1',
      analyticsId: 'EA-001',
      title: 'Real-time Edge Analytics',
      description: 'Real-time analytics processing at the edge for immediate insights',
      type: 'real_time',
      status: 'running',
      dataPoints: 10000,
      processingTime: 2,
      aiAnalysis: {
        id: '1',
        accuracyScore: 96,
        speedScore: 94,
        insightScore: 92,
        recommendations: ['Optimize processing algorithms', 'Enhance data quality']
      }
    }
  ]

  const mockFogOrchestration: FogOrchestration[] = [
    {
      id: '1',
      orchestrationId: 'FO-001',
      title: 'Resource Orchestration Service',
      description: 'Automated resource orchestration across fog computing nodes',
      type: 'resource_orchestration',
      status: 'active',
      services: 12,
      policies: 8,
      aiAnalysis: {
        id: '1',
        orchestrationScore: 93,
        automationScore: 91,
        coordinationScore: 94,
        recommendations: ['Enhance automation policies', 'Improve service coordination']
      }
    }
  ]

  const mockEdgeComputingManagement: EdgeComputingManagement[] = [
    {
      id: '1',
      systemId: 'EC-001',
      title: 'Edge Computing Management',
      description: 'Comprehensive management of edge computing infrastructure',
      category: 'hardware',
      status: 'operational',
      devices: 50,
      uptime: 99.8,
      aiAnalysis: {
        id: '1',
        managementScore: 92,
        performanceScore: 94,
        reliabilityScore: 96,
        recommendations: ['Monitor device health', 'Optimize resource allocation']
      }
    }
  ]

  const mockAnalytics: EdgeComputingAnalytics = {
    totalEdgeDevices: 156,
    activeFogNodes: 24,
    distributedClusters: 8,
    analyticsProcesses: 32,
    orchestrationServices: 18,
    managedSystems: 12,
    averageLatency: 3.2,
    aiOptimizationScore: 93,
    aiInsights: [
      {
        id: '1',
        title: 'High Edge Computing Performance',
        description: 'AI-powered edge computing system shows 94% performance score with optimized edge devices',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Continue AI monitoring', 'Expand edge capabilities']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setEdgeComputing(mockEdgeComputing
      setFogComputing(mockFogComputing
      setDistributedComputing(mockDistributedComputing
      setEdgeAnalytics(mockEdgeAnalytics
      setFogOrchestration(mockFogOrchestration
      setEdgeComputingManagement(mockEdgeComputingManagement
      setAnalytics(mockAnalytics
      setIsLoading(false
    } 1000
  } []
  const filteredEdgeDevices = useMemo(() => {
    let filtered = edgeComputing
    if (selectedType !== 'all') {
      filtered = filtered.filter(device => device.type === selectedType
    }
    return filtered
  } [edgeComputing, selectedType]
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'inactive': return 'bg-gray-500/20 text-gray-300'
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-300'
      case 'error': return 'bg-red-500/20 text-red-300'
      case 'offline': return 'bg-gray-500/20 text-gray-300'
      case 'running': return 'bg-blue-500/20 text-blue-300'
      case 'completed': return 'bg-green-500/20 text-green-300'
      case 'failed': return 'bg-red-500/20 text-red-300'
      case 'scheduled': return 'bg-purple-500/20 text-purple-300'
      case 'operational': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'iot_gateway': return 'bg-blue-500/20 text-blue-300'
      case 'edge_server': return 'bg-green-500/20 text-green-300'
      case 'micro_data_center': return 'bg-purple-500/20 text-purple-300'
      case 'edge_device': return 'bg-orange-500/20 text-orange-300'
      case 'edge_router': return 'bg-red-500/20 text-red-300'
      case 'edge_storage': return 'bg-yellow-500/20 text-yellow-300'
      case 'fog_node': return 'bg-blue-500/20 text-blue-300'
      case 'fog_cluster': return 'bg-green-500/20 text-green-300'
      case 'fog_gateway': return 'bg-purple-500/20 text-purple-300'
      case 'fog_router': return 'bg-orange-500/20 text-orange-300'
      case 'fog_storage': return 'bg-red-500/20 text-red-300'
      case 'fog_processor': return 'bg-yellow-500/20 text-yellow-300'
      case 'distributed_cluster': return 'bg-blue-500/20 text-blue-300'
      case 'grid_computing': return 'bg-green-500/20 text-green-300'
      case 'peer_to_peer': return 'bg-purple-500/20 text-purple-300'
      case 'distributed_storage': return 'bg-orange-500/20 text-orange-300'
      case 'distributed_processing': return 'bg-red-500/20 text-red-300'
      case 'distributed_analytics': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div>
      <div className="relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        <div className="fixed" inset-0 z-0>
          <div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Edge & Fog Computing System | Zion Tech Group</title>
        <meta name="description" content="Edge computing, fog computing, distributed computing, edge analytics, fog orchestration, and automated edge computing management powered by AI." />
        <meta name="keywords" content="edge computing, fog computing, distributed computing, edge analytics, AI edge" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="relative overflow-hidden>
        <div className="absolute" inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20></div>
        <div className="relative" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44>
          <div className=text-center">
            <h1 className="text-5xl:md:text-6xl:font-bold text-white mb-6>
              AI-Powered Edge & Fog Computing System
            </h1>
            <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
              Edge computing, fog computing, distributed computing, 
              edge analytics, fog orchestration, and automated edge computing management powered by AI.
            </p>
            <div className="flex" flex-wrap justify-center gap-4>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg:px-6 py-3">
                <span className="text-white font-semibold>🌐 Edge Computing</span>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg:px-6 py-3>
                <span className="text-white" font-semibold>☁️ Fog Computing</span>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg:px-6 py-3">
                <span className="text-white font-semibold>🔗 Distributed Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-32>
        {isLoading ? (
          <div className="flex" justify-center items-center py-40>
            <div className="animate-spin" rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8>
              <button
                onClick={() => setActiveTab('edge')}
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'edge'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Edge Computing ({edgeComputing.length}
              </button>
              <button
                onClick={() => setActiveTab('fog')}
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'fog'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Fog Computing ({fogComputing.length}
              </button>
              <button
                onClick={() => setActiveTab('distributed')}
                className={`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'distributed'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Distributed Computing ({distributedComputing.length}
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className="{`px-6 py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Edge Analytics ({edgeAnalytics.length}
              </button>
              <button
                onClick={() => setActiveTab('orchestration')}
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'orchestration'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Fog Orchestration ({fogOrchestration.length}
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'management'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Management ({edgeComputingManagement.length}
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Overview
              </button>
            </div>

            {/* Edge Computing Tab */},
{activeTab === 'edge' && (
              <div className="space-y-8>
                {/* Controls */}
                <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6>
                  <div className="flex" flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0>
                    <div className="flex" items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg:px-3 py-4 text-white focus outline-none focus ring-2 focus ring-blue-500
                      >
                        <option value=all className="bg-slate-800">All Types</option>
                        <option value=iot_gateway" className="bg-slate-800>IoT Gateway</option>
                        <option value=edge_server className="bg-slate-800">Edge Server</option>
                        <option value=micro_data_center" className="bg-slate-800>Micro Data Center</option>
                        <option value=edge_device className="bg-slate-800">Edge Device</option>
                        <option value=edge_router" className="bg-slate-800>Edge Router</option>
                        <option value=edge_storage className="bg-slate-800">Edge Storage</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r" from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-4 rounded-lg:font-medium transition-all duration-300">
                      Create Edge Device
                    </button>
                  </div>
                </div>

                {/* Edge Devices Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6>
                  {filteredEdgeDevices.map((device) => (
                    <div key={device.id} className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                      <div className="flex" items-start justify-between mb-4>
                        <div>
                          <h3 className="text-xl" font-semibold text-white mb-2">{device.name}</h3>
                          <p className="text-gray-300 text-sm:capitalize>{device.type.replace('_', ' ')} Device</p>
                        </div>
                        <div className="text-right">
                          <span className="{`px-3" py-3 rounded-full text-sm font-medium ${getStatusColor(device.status)}`}>
                            {device.status}
                          </span>
                          <div className=mt-2">
                            <span className="{`px-4 py-3 rounded-full text-xs font-medium ${getTypeColor(device.type)}`}>
                              {device.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300" text-sm>{device.description}</p>
                      </div>

                      <div className="grid" grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg:p-4>
                          <div className="text-sm:text-gray-400" mb-1>Capacity</div>
                          <div className="text-2xl" font-bold text-white>{device.capacity}GB</div>
                        </div>
                        <div className="bg-white/5" rounded-lg:p-4">
                          <div className="text-sm:text-gray-400 mb-1>Latency</div>
                          <div className="text-2xl" font-bold text-white>{device.latency}ms</div>
                        </div>
                        <div className="bg-white/5" rounded-lg:p-4>
                          <div className="text-sm:text-gray-400" mb-1">Location</div>
                          <div className="text-sm:font-bold text-white truncate>{device.location}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg" font-semibold text-white mb-3>AI Analysis</h4>
                        <div className="bg-gradient-to-r" from-blue-600/20 to-cyan-600/20 rounded-lg:p-4">
                          <div className="grid grid-cols-3 gap-4 text-sm>
                            <div>
                              <div className="text-gray-400" mb-1>Performance</div>
                              <div className="text-white" font-semibold>{device.aiAnalysis.performanceScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400" mb-1">Reliability</div>
                              <div className="text-white font-semibold>{device.aiAnalysis.reliabilityScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400" mb-1>Efficiency</div>
                              <div className="text-white" font-semibold>{device.aiAnalysis.efficiencyScore}%</div>
                            </div>
                          </div>
                          <div className=mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1>Recommendations:</div>
                            <div className="text-xs" text-gray-300>
                              {device.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex" space-x-2>
                        <button className="flex-1" bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-4 rounded-lg:font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-4 px-4 rounded-lg:font-medium transition-all duration-300>
                          Configure
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview Tab */},
{activeTab === 'overview' && analytics && (
              <div className="space-y-8">
                <div className="grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2>{analytics.totalEdgeDevices.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm>Total Edge Devices</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    <div className="text-3xl" font-bold text-white mb-2">{analytics.averageLatency.toLocaleString()}ms</div>
                    <div className="text-gray-400 text-sm>Avg Latency</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    <div className="text-3xl" font-bold text-white mb-2>{analytics.activeFogNodes.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm">Active Fog Nodes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    <div className="text-3xl" font-bold text-white mb-2>{analytics.aiOptimizationScore}%</div>
                    <div className="text-gray-400" text-sm>AI Optimization Score</div>
                  </div>
                </div>

                <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6>AI Insights</h3>
                  <div className="space-y-4">
                    {analytics.aiInsights.map((insight) => (
                      <div key={insight.id} className="bg-gradient-to-r" from-blue-600/20 to-cyan-600/20 rounded-lg:p-4>
                        <div className="flex" items-start justify-between mb-2">
                          <h4 className="text-white font-semibold>{insight.title}</h4>
                          <span className="{`px-4" py-3 rounded-full text-xs font-medium ${
                            insight.impact === 'positive' ? 'bg-green-500/20 text-green-300' :
                            insight.impact === 'negative' ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {insight.impact}
                          </span>
                        </div>
                        <p className="text-gray-300" text-sm:mb-3>{insight.description}</p>
                        <div className="text-xs" text-gray-400 mb-2">
                          Confidence: {Math.round(insight.confidence * 100)}%
                        </div>
                        <div className="text-xs text-gray-400>
                          <strong>Recommendations:</strong> {insight.recommendations.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r" from-blue-600/20 to-cyan-600/20 mt-16>
        <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-36>
          <div className=text-center">
            <h2 className="text-3xl font-bold text-white mb-4>
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-xl" text-gray-300 mb-8 max-w-2xl:mx-auto>
              Start your edge computing journey with our AI-powered system 
              and ensure comprehensive edge and fog computing management.
            </p>
            <div className="flex" flex-col sm:flex-row gap-4 justify-center>
              <Link href=/ai-service-matcher" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-blue-500/25 transform hover:scale-105 />
                Start Deploying
              </Link>
              <Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 backdrop-blur-sm" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>

};

export default AIPoweredEdgeComputingPage 