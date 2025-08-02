import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface HolographicDisplay {
  id: string;
  name: string;
  description: string;
  type: 'volumetric' | 'light_field' | 'holographic_projection' | 'spatial_computing' | 'mixed_reality' | 'augmented_reality';
  status: 'active' | 'inactive' | 'rendering' | 'error' | 'offline';
  resolution: number;
  refreshRate: number;
  fieldOfView: number;
  aiAnalysis: DisplayAnalysis;
}

interface DisplayAnalysis {
  id: string;
  performanceScore: number;
  qualityScore: number;
  immersionScore: number;
  recommendations: string[];
}

interface ThreeDVisualization {
  id: string;
  title: string;
  description: string;
  type: '3d_modeling' | '3d_rendering' | '3d_animation' | '3d_simulation' | '3d_interaction' | '3d_visualization';
  status: 'active' | 'inactive' | 'processing' | 'error' | 'offline';
  polygons: number;
  textures: number;
  aiOptimization: VisualizationOptimization;
}

interface VisualizationOptimization {
  id: string;
  renderingScore: number;
  qualityScore: number;
  performanceScore: number;
  recommendations: string[];
}

interface SpatialComputing {
  id: string;
  name: string;
  description: string;
  type: 'spatial_mapping' | 'spatial_tracking' | 'spatial_interaction' | 'spatial_audio' | 'spatial_gestures' | 'spatial_environment';
  status: 'active' | 'inactive' | 'mapping' | 'error' | 'offline';
  sensors: number;
  accuracy: number;
  aiAnalysis: SpatialAnalysis;
}

interface SpatialAnalysis {
  id: string;
  mappingScore: number;
  trackingScore: number;
  interactionScore: number;
  recommendations: string[];
}

interface HolographicProjection {
  id: string;
  projectionId: string;
  title: string;
  description: string;
  type: 'laser_projection' | 'led_projection' | 'lcd_projection' | 'dlp_projection' | 'lcos_projection' | 'microled_projection';
  status: 'active' | 'inactive' | 'projecting' | 'error' | 'offline';
  brightness: number;
  contrast: number;
  aiAnalysis: ProjectionAnalysis;
}

interface ProjectionAnalysis {
  id: string;
  brightnessScore: number;
  contrastScore: number;
  clarityScore: number;
  recommendations: string[];
}

interface VolumetricDisplay {
  id: string;
  displayId: string;
  title: string;
  description: string;
  type: 'volumetric_rendering' | 'volumetric_capture' | 'volumetric_interaction' | 'volumetric_audio' | 'volumetric_haptics' | 'volumetric_environment';
  status: 'active' | 'inactive' | 'rendering' | 'error' | 'offline';
  voxels: number;
  depth: number;
  aiAnalysis: VolumetricAnalysis;
}

interface VolumetricAnalysis {
  id: string;
  volumetricScore: number;
  depthScore: number;
  interactionScore: number;
  recommendations: string[];
}

interface HolographicSystemManagement {
  id: string;
  systemId: string;
  title: string;
  description: string;
  category: 'hardware' | 'software' | 'network' | 'performance' | 'maintenance' | 'optimization';
  status: 'operational' | 'maintenance' | 'error' | 'offline';
  displays: number;
  efficiency: number;
  aiAnalysis: ManagementAnalysis;
}

interface ManagementAnalysis {
  id: string;
  managementScore: number;
  performanceScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface HolographicDisplayAnalytics {
  totalDisplays: number;
  activeVisualizations: number;
  spatialSystems: number;
  projectionSystems: number;
  volumetricDisplays: number;
  managedSystems: number;
  averageResolution: number;
  aiOptimizationScore: number;
  aiInsights: HolographicDisplayInsight[];
}

interface HolographicDisplayInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredHolographicDisplayPage: NextPage = () => {
  const [holographicDisplays, setHolographicDisplays] = useState<HolographicDisplay[]>([])
  const [threeDVisualizations, setThreeDVisualizations] = useState<ThreeDVisualization[]>([])
  const [spatialComputing, setSpatialComputing] = useState<SpatialComputing[]>([])
  const [holographicProjections, setHolographicProjections] = useState<HolographicProjection[]>([])
  const [volumetricDisplays, setVolumetricDisplays] = useState<VolumetricDisplay[]>([])
  const [holographicSystemManagement, setHolographicSystemManagement] = useState<HolographicSystemManagement[]>([])
  const [analytics, setAnalytics] = useState<HolographicDisplayAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'displays' | 'visualization' | 'spatial' | 'projection' | 'volumetric' | 'management' | 'overview'>('displays')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockHolographicDisplays: HolographicDisplay[] = [
    {
      id: '1',
      name: 'Advanced Volumetric Display',
      description: 'High-resolution volumetric holographic display for immersive experiences',
      type: 'volumetric',
      status: 'active',
      resolution: 4096,
      refreshRate: 120,
      fieldOfView: 180,
      aiAnalysis: {
        id: '1',
        performanceScore: 95,
        qualityScore: 98,
        immersionScore: 96,
        recommendations: ['Optimize rendering pipeline', 'Enhance spatial tracking']
      }
    }
  ]

  const mockThreeDVisualizations: ThreeDVisualization[] = [
    {
      id: '1',
      title: '3D Product Visualization',
      description: 'High-quality 3D product visualization with real-time rendering',
      type: '3d_rendering',
      status: 'active',
      polygons: 5000000,
      textures: 2048,
      aiOptimization: {
        id: '1',
        renderingScore: 94,
        qualityScore: 97,
        performanceScore: 93,
        recommendations: ['Optimize polygon count', 'Enhance texture quality']
      }
    }
  ]

  const mockSpatialComputing: SpatialComputing[] = [
    {
      id: '1',
      name: 'Spatial Mapping System',
      description: 'Advanced spatial computing with real-time environment mapping',
      type: 'spatial_mapping',
      status: 'active',
      sensors: 24,
      accuracy: 99.5,
      aiAnalysis: {
        id: '1',
        mappingScore: 96,
        trackingScore: 95,
        interactionScore: 94,
        recommendations: ['Increase sensor density', 'Optimize mapping algorithms']
      }
    }
  ]

  const mockHolographicProjections: HolographicProjection[] = [
    {
      id: '1',
      projectionId: 'HP-001',
      title: 'Laser Holographic Projector',
      description: 'High-brightness laser holographic projection system',
      type: 'laser_projection',
      status: 'active',
      brightness: 5000,
      contrast: 10000,
      aiAnalysis: {
        id: '1',
        brightnessScore: 98,
        contrastScore: 96,
        clarityScore: 97,
        recommendations: ['Optimize laser alignment', 'Enhance contrast ratio']
      }
    }
  ]

  const mockVolumetricDisplays: VolumetricDisplay[] = [
    {
      id: '1',
      displayId: 'VD-001',
      title: 'Volumetric Rendering Display',
      description: 'Advanced volumetric display with high voxel density',
      type: 'volumetric_rendering',
      status: 'active',
      voxels: 1000000000,
      depth: 512,
      aiAnalysis: {
        id: '1',
        volumetricScore: 95,
        depthScore: 97,
        interactionScore: 94,
        recommendations: ['Increase voxel density', 'Optimize depth resolution']
      }
    }
  ]

  const mockHolographicSystemManagement: HolographicSystemManagement[] = [
    {
      id: '1',
      systemId: 'HSM-001',
      title: 'Holographic System Management',
      description: 'Comprehensive management of holographic display infrastructure',
      category: 'hardware',
      status: 'operational',
      displays: 12,
      efficiency: 97.5,
      aiAnalysis: {
        id: '1',
        managementScore: 94,
        performanceScore: 96,
        reliabilityScore: 95,
        recommendations: ['Monitor display health', 'Optimize rendering performance']
      }
    }
  ]

  const mockAnalytics: HolographicDisplayAnalytics = {
    totalDisplays: 67,
    activeVisualizations: 23,
    spatialSystems: 15,
    projectionSystems: 18,
    volumetricDisplays: 11,
    managedSystems: 8,
    averageResolution: 3072,
    aiOptimizationScore: 95,
    aiInsights: [
      {
        id: '1',
        title: 'High Holographic Display Performance',
        description: 'AI-powered holographic display system shows 95% optimization score with optimized rendering and spatial tracking',
        impact: 'positive',
        confidence: 0.95,
        recommendations: ['Continue AI monitoring', 'Expand holographic capabilities']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setHolographicDisplays(mockHolographicDisplays)
      setThreeDVisualizations(mockThreeDVisualizations)
      setSpatialComputing(mockSpatialComputing)
      setHolographicProjections(mockHolographicProjections)
      setVolumetricDisplays(mockVolumetricDisplays)
      setHolographicSystemManagement(mockHolographicSystemManagement)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockHolographicDisplays, mockThreeDVisualizations, mockSpatialComputing, mockHolographicProjections, mockVolumetricDisplays, mockHolographicSystemManagement, mockAnalytics])

  const filteredDisplays = useMemo(() => {
    let filtered = holographicDisplays
    if (selectedType !== 'all') {
      filtered = filtered.filter(display => display.type === selectedType)
    }
    return filtered
  }, [holographicDisplays, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'inactive': return 'bg-gray-500/20 text-gray-300'
      case 'rendering': return 'bg-blue-500/20 text-blue-300'
      case 'error': return 'bg-red-500/20 text-red-300'
      case 'offline': return 'bg-gray-500/20 text-gray-300'
      case 'processing': return 'bg-purple-500/20 text-purple-300'
      case 'mapping': return 'bg-yellow-500/20 text-yellow-300'
      case 'projecting': return 'bg-orange-500/20 text-orange-300'
      case 'operational': return 'bg-green-500/20 text-green-300'
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'volumetric': return 'bg-blue-500/20 text-blue-300'
      case 'light_field': return 'bg-green-500/20 text-green-300'
      case 'holographic_projection': return 'bg-purple-500/20 text-purple-300'
      case 'spatial_computing': return 'bg-orange-500/20 text-orange-300'
      case 'mixed_reality': return 'bg-red-500/20 text-red-300'
      case 'augmented_reality': return 'bg-yellow-500/20 text-yellow-300'
      case '3d_modeling': return 'bg-blue-500/20 text-blue-300'
      case '3d_rendering': return 'bg-green-500/20 text-green-300'
      case '3d_animation': return 'bg-purple-500/20 text-purple-300'
      case '3d_simulation': return 'bg-orange-500/20 text-orange-300'
      case '3d_interaction': return 'bg-red-500/20 text-red-300'
      case '3d_visualization': return 'bg-yellow-500/20 text-yellow-300'
      case 'spatial_mapping': return 'bg-blue-500/20 text-blue-300'
      case 'spatial_tracking': return 'bg-green-500/20 text-green-300'
      case 'spatial_interaction': return 'bg-purple-500/20 text-purple-300'
      case 'spatial_audio': return 'bg-orange-500/20 text-orange-300'
      case 'spatial_gestures': return 'bg-red-500/20 text-red-300'
      case 'spatial_environment': return 'bg-yellow-500/20 text-yellow-300'
      case 'laser_projection': return 'bg-blue-500/20 text-blue-300'
      case 'led_projection': return 'bg-green-500/20 text-green-300'
      case 'lcd_projection': return 'bg-purple-500/20 text-purple-300'
      case 'dlp_projection': return 'bg-orange-500/20 text-orange-300'
      case 'lcos_projection': return 'bg-red-500/20 text-red-300'
      case 'microled_projection': return 'bg-yellow-500/20 text-yellow-300'
      case 'volumetric_rendering': return 'bg-blue-500/20 text-blue-300'
      case 'volumetric_capture': return 'bg-green-500/20 text-green-300'
      case 'volumetric_interaction': return 'bg-purple-500/20 text-purple-300'
      case 'volumetric_audio': return 'bg-orange-500/20 text-orange-300'
      case 'volumetric_haptics': return 'bg-red-500/20 text-red-300'
      case 'volumetric_environment': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Head>
        <title>AI-Powered Holographic Display & 3D Visualization System | Zion Tech Group</title>
        <meta name="description" content="Holographic displays, 3D visualization, spatial computing, holographic projection, volumetric displays, and automated holographic system management powered by AI." />
        <meta name="keywords" content="holographic display, 3D visualization, spatial computing, holographic projection, volumetric displays, AI holographic" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Holographic Display & 3D Visualization System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Holographic displays, 3D visualization, spatial computing, 
              holographic projection, volumetric displays, and automated holographic system management powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🌟 Holographic Display</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🎨 3D Visualization</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🌐 Spatial Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('displays')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'displays'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Holographic Displays ({holographicDisplays.length})
              </button>
              <button
                onClick={() => setActiveTab('visualization')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'visualization'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                3D Visualization ({threeDVisualizations.length})
              </button>
              <button
                onClick={() => setActiveTab('spatial')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'spatial'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Spatial Computing ({spatialComputing.length})
              </button>
              <button
                onClick={() => setActiveTab('projection')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'projection'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Holographic Projection ({holographicProjections.length})
              </button>
              <button
                onClick={() => setActiveTab('volumetric')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'volumetric'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Volumetric Displays ({volumetricDisplays.length})
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'management'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Management ({holographicSystemManagement.length})
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Overview
              </button>
            </div>

            {/* Holographic Displays Tab */}
            {activeTab === 'displays' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="volumetric" className="bg-slate-800">Volumetric</option>
                        <option value="light_field" className="bg-slate-800">Light Field</option>
                        <option value="holographic_projection" className="bg-slate-800">Holographic Projection</option>
                        <option value="spatial_computing" className="bg-slate-800">Spatial Computing</option>
                        <option value="mixed_reality" className="bg-slate-800">Mixed Reality</option>
                        <option value="augmented_reality" className="bg-slate-800">Augmented Reality</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Holographic Display
                    </button>
                  </div>
                </div>

                {/* Holographic Displays Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredDisplays.map((display) => (
                    <div key={display.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{display.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{display.type.replace('_', ' ')} Display</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(display.status)}`}>
                            {display.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(display.type)}`}>
                              {display.resolution}p resolution
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{display.description}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Resolution</div>
                          <div className="text-2xl font-bold text-white">{display.resolution}p</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Refresh Rate</div>
                          <div className="text-2xl font-bold text-white">{display.refreshRate}Hz</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Field of View</div>
                          <div className="text-2xl font-bold text-white">{display.fieldOfView}°</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Performance</div>
                              <div className="text-white font-semibold">{display.aiAnalysis.performanceScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Quality</div>
                              <div className="text-white font-semibold">{display.aiAnalysis.qualityScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Immersion</div>
                              <div className="text-white font-semibold">{display.aiAnalysis.immersionScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {display.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Configure
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && analytics && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalDisplays.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Holographic Displays</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.averageResolution.toLocaleString()}p</div>
                    <div className="text-gray-400 text-sm">Avg Resolution</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeVisualizations.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Visualizations</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.aiOptimizationScore}%</div>
                    <div className="text-gray-400 text-sm">AI Optimization Score</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">AI Insights</h3>
                  <div className="space-y-4">
                    {analytics.aiInsights.map((insight) => (
                      <div key={insight.id} className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold">{insight.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            insight.impact === 'positive' ? 'bg-green-500/20 text-green-300' :
                            insight.impact === 'negative' ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {insight.impact}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                        <div className="text-xs text-gray-400 mb-2">
                          Confidence: {Math.round(insight.confidence * 100)}%
                        </div>
                        <div className="text-xs text-gray-400">
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
      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Holographic Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your holographic journey with our AI-powered system 
              and ensure comprehensive holographic display management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
                Start Experiencing
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredHolographicDisplayPage 