import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link from 'next/link';

interface CropMonitoring {
  id: string
  name: string
  type: 'wheat' | 'corn' | 'soybeans' | 'rice' | 'cotton' | 'vegetables' | 'fruits'
  status: 'growing' | 'harvesting' | 'dormant' | 'planning'
  location: string
  area: number
  healthScore: number
  yieldPrediction: number
  aiAnalysis: CropAnalysis
}

interface CropAnalysis {
  growthStage: 'seedling' | 'vegetative' | 'flowering' | 'fruiting' | 'harvest'
  diseaseRisk: 'low' | 'medium' | 'high' | 'critical'
  nutrientDeficiency: string[]
  recommendations: string[]
}

interface SoilAnalysis {
  id: string
  location: string
  type: 'sandy' | 'clay' | 'loamy' | 'silty'
  ph: number
  moisture: number
  temperature: number
  nutrients: {
    nitrogen: number
    phosphorus: number
    potassium: number
    organicMatter: number
  }
  aiAnalysis: SoilAnalysisData
}

interface SoilAnalysisData {
  fertilityScore: number
  irrigationNeeds: number
  amendmentRecommendations: string[]
  cropSuitability: string[]
}

interface IrrigationSystem {
  id: string
  name: string
  type: 'drip' | 'sprinkler' | 'flood' | 'smart'
  status: 'active' | 'maintenance' | 'offline'
  coverage: number
  efficiency: number
  waterUsage: number
  aiAnalysis: IrrigationAnalysis
}

interface IrrigationAnalysis {
  optimizationScore: number
  waterConservation: number
  scheduleRecommendations: string[]
  maintenanceNeeds: string[]
}

interface SmartFarming {
  id: string
  name: string
  type: 'automated-planting' | 'harvesting-robot' | 'drone-monitoring' | 'weather-station'
  status: 'active' | 'maintenance' | 'offline' | 'planning'
  location: string
  efficiency: number
  costSavings: number
  aiAnalysis: FarmingAnalysis
}

interface FarmingAnalysis {
  roi: number
  productivityGain: number
  sustainabilityScore: number
  recommendations: string[]
}

interface AgriculturalAnalytics {
  totalCrops: number
  activeSystems: number
  waterSavings: number
  yieldIncrease: number
  aiInsights: AgriculturalInsight[]
}

interface AgriculturalInsight {
  id: string
  title: string
  description: string
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number
  recommendations: string[]
}

const AIPoweredPrecisionAgricultureSmartFarmingPage: NextPage = () => {
  const [cropMonitoring, setCropMonitoring] = useState<CropMonitoring[]>([])
  const [soilAnalysis, setSoilAnalysis] = useState<SoilAnalysis[]>([])
  const [irrigationSystems, setIrrigationSystems] = useState<IrrigationSystem[]>([])
  const [smartFarming, setSmartFarming] = useState<SmartFarming[]>([])
  const [analytics, setAnalytics] = useState<AgriculturalAnalytics | null>(null)
  const [selectedView, setSelectedView] = useState<'overview' | 'crops' | 'soil' | 'irrigation' | 'farming' | 'analytics'>('overview')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const mockCropMonitoring: CropMonitoring[] = [
    {
      id: '1',
      name: 'Wheat Field A',
      type: 'wheat',
      status: 'growing',
      location: 'Kansas',
      area: 500,
      healthScore: 8.5,
      yieldPrediction: 85,
      aiAnalysis: {
        growthStage: 'flowering',
        diseaseRisk: 'low',
        nutrientDeficiency: ['potassium'],
        recommendations: ['Apply potassium fertilizer', 'Monitor for rust disease', 'Optimize irrigation schedule']
      }
    },
    {
      id: '2',
      name: 'Corn Field B',
      type: 'corn',
      status: 'growing',
      location: 'Iowa',
      area: 750,
      healthScore: 9.2,
      yieldPrediction: 92,
      aiAnalysis: {
        growthStage: 'vegetative',
        diseaseRisk: 'medium',
        nutrientDeficiency: [],
        recommendations: ['Monitor for corn borer', 'Apply nitrogen fertilizer', 'Check soil moisture']
      }
    },
    {
      id: '3',
      name: 'Soybean Field C',
      type: 'soybeans',
      status: 'harvesting',
      location: 'Illinois',
      area: 300,
      healthScore: 7.8,
      yieldPrediction: 78,
      aiAnalysis: {
        growthStage: 'harvest',
        diseaseRisk: 'low',
        nutrientDeficiency: [],
        recommendations: ['Begin harvest operations', 'Monitor weather conditions', 'Prepare storage facilities']
      }
    }
  ]

  const mockSoilAnalysis: SoilAnalysis[] = [
    {
      id: '1',
      location: 'Field A-1',
      type: 'loamy',
      ph: 6.8,
      moisture: 65,
      temperature: 18,
      nutrients: {
        nitrogen: 45,
        phosphorus: 32,
        potassium: 28,
        organicMatter: 3.2
      },
      aiAnalysis: {
        fertilityScore: 8.7,
        irrigationNeeds: 0.3,
        amendmentRecommendations: ['Add potassium fertilizer', 'Increase organic matter', 'Maintain pH levels'],
        cropSuitability: ['wheat', 'corn', 'soybeans']
      }
    },
    {
      id: '2',
      location: 'Field B-2',
      type: 'clay',
      ph: 7.2,
      moisture: 72,
      temperature: 20,
      nutrients: {
        nitrogen: 52,
        phosphorus: 38,
        potassium: 35,
        organicMatter: 2.8
      },
      aiAnalysis: {
        fertilityScore: 9.1,
        irrigationNeeds: 0.2,
        amendmentRecommendations: ['Reduce irrigation frequency', 'Add phosphorus fertilizer', 'Monitor drainage'],
        cropSuitability: ['corn', 'wheat', 'vegetables']
      }
    },
    {
      id: '3',
      location: 'Field C-3',
      type: 'sandy',
      ph: 6.5,
      moisture: 58,
      temperature: 22,
      nutrients: {
        nitrogen: 38,
        phosphorus: 25,
        potassium: 30,
        organicMatter: 1.5
      },
      aiAnalysis: {
        fertilityScore: 6.8,
        irrigationNeeds: 0.7,
        amendmentRecommendations: ['Increase organic matter', 'Add nitrogen fertilizer', 'Improve water retention'],
        cropSuitability: ['vegetables', 'fruits', 'cotton']
      }
    }
  ]

  const mockIrrigationSystems: IrrigationSystem[] = [
    {
      id: '1',
      name: 'Smart Drip System A',
      type: 'drip',
      status: 'active',
      coverage: 85,
      efficiency: 92,
      waterUsage: 1200,
      aiAnalysis: {
        optimizationScore: 9.4,
        waterConservation: 0.25,
        scheduleRecommendations: ['Optimize timing for early morning', 'Reduce frequency during rain', 'Adjust for crop growth stage'],
        maintenanceNeeds: ['Check filters monthly', 'Inspect emitters quarterly', 'Calibrate sensors']
      }
    },
    {
      id: '2',
      name: 'Automated Sprinkler B',
      type: 'sprinkler',
      status: 'active',
      coverage: 95,
      efficiency: 78,
      waterUsage: 2100,
      aiAnalysis: {
        optimizationScore: 7.8,
        waterConservation: 0.15,
        scheduleRecommendations: ['Reduce overlap zones', 'Adjust spray patterns', 'Optimize pressure settings'],
        maintenanceNeeds: ['Clean nozzles weekly', 'Check pressure monthly', 'Inspect pumps quarterly']
      }
    },
    {
      id: '3',
      name: 'Smart Irrigation C',
      type: 'smart',
      status: 'maintenance',
      coverage: 90,
      efficiency: 88,
      waterUsage: 1500,
      aiAnalysis: {
        optimizationScore: 8.9,
        waterConservation: 0.30,
        scheduleRecommendations: ['Update weather integration', 'Optimize zone programming', 'Enhance sensor network'],
        maintenanceNeeds: ['Replace sensors', 'Update software', 'Calibrate weather station']
      }
    }
  ]

  const mockSmartFarming: SmartFarming[] = [
    {
      id: '1',
      name: 'Automated Planting Robot',
      type: 'automated-planting',
      status: 'active',
      location: 'Field A',
      efficiency: 95,
      costSavings: 25000,
      aiAnalysis: {
        roi: 0.85,
        productivityGain: 0.40,
        sustainabilityScore: 9.2,
        recommendations: ['Expand to additional fields', 'Optimize planting patterns', 'Integrate with weather data']
      }
    },
    {
      id: '2',
      name: 'Drone Monitoring System',
      type: 'drone-monitoring',
      status: 'active',
      location: 'All Fields',
      efficiency: 88,
      costSavings: 15000,
      aiAnalysis: {
        roi: 0.72,
        productivityGain: 0.25,
        sustainabilityScore: 8.8,
        recommendations: ['Increase flight frequency', 'Enhance image analysis', 'Expand coverage area']
      }
    },
    {
      id: '3',
      name: 'Smart Weather Station',
      type: 'weather-station',
      status: 'active',
      location: 'Central Farm',
      efficiency: 92,
      costSavings: 8000,
      aiAnalysis: {
        roi: 0.65,
        productivityGain: 0.15,
        sustainabilityScore: 9.5,
        recommendations: ['Add more sensors', 'Integrate with irrigation', 'Enhance forecasting']
      }
    }
  ]

  const mockAnalytics: AgriculturalAnalytics = {
    totalCrops: 12,
    activeSystems: 8,
    waterSavings: 35,
    yieldIncrease: 28,
    aiInsights: [
      {
        id: '1',
        title: 'Precision Irrigation Reducing Water Usage',
        description: 'AI-powered irrigation systems have reduced water consumption by 35% while maintaining crop health.',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Expand smart irrigation coverage', 'Optimize scheduling algorithms', 'Integrate weather forecasting']
      },
      {
        id: '2',
        title: 'Crop Disease Detection Improving',
        description: 'Early detection systems are preventing 40% of potential crop losses through AI analysis.',
        impact: 'positive',
        confidence: 0.87,
        recommendations: ['Enhance drone monitoring', 'Improve image recognition', 'Expand sensor network']
      }
    ]
  }

  useEffect(() => {
    setCropMonitoring(mockCropMonitoring)
    setSoilAnalysis(mockSoilAnalysis)
    setIrrigationSystems(mockIrrigationSystems)
    setSmartFarming(mockSmartFarming)
    setAnalytics(mockAnalytics)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'growing':
        return 'text-green-400'
      case 'maintenance':
      case 'planning':
        return 'text-yellow-400'
      case 'offline':
      case 'dormant':
        return 'text-red-400'
      case 'harvesting':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'growing':
        return 'bg-green-500'
      case 'maintenance':
      case 'planning':
        return 'bg-yellow-500'
      case 'offline':
      case 'dormant':
        return 'bg-red-500'
      case 'harvesting':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400'
      case 'medium': return 'text-yellow-400'
      case 'high': return 'text-orange-400'
      case 'critical': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const getInsightColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'text-green-400'
      case 'negative': return 'text-red-400'
      case 'neutral': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  const getInsightIcon = (impact: string) => {
    switch (impact) {
      case 'positive': return '🌾'
      case 'negative': return '⚠️'
      case 'neutral': return '📊'
      default: return '📊'
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value)
  }

  const filteredCropMonitoring = useMemo(() => {
    return cropMonitoring.filter(crop => {
      const typeMatch = selectedType === 'all' || crop.type === selectedType
      return typeMatch
    })
  }, [cropMonitoring, selectedType])

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Precision Agriculture & Smart Farming - Zion</title>
        <meta name="description" content="Advanced AI-powered precision agriculture and smart farming platform with crop monitoring, soil analysis, irrigation management, and intelligent agricultural optimization" />
        <meta name="keywords" content="precision agriculture, smart farming, crop monitoring, soil analysis, irrigation, AI farming, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/ai-powered-live-streaming-broadcasting" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Streaming
              </Link>
              <Link href="/ai-powered-voice-assistant-speech-recognition" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Voice Assistant
              </Link>
              <Link href="/ai-powered-autonomous-vehicle-transportation" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Autonomous Vehicles
              </Link>
              <Link href="/ai-powered-cryptocurrency-digital-asset-management" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Cryptocurrency
              </Link>
              <Link href="/ai-powered-space-exploration-satellite-management" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Space Exploration
              </Link>
              <Link href="/ai-powered-underwater-exploration-marine-research" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Underwater Exploration
              </Link>
              <Link href="/ai-powered-climate-change-environmental-sustainability" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Climate Change
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-4 rounded-lg text-sm font-medium hover from-green-700 hover to-emerald-700 transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered Precision Agriculture & Smart Farming
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Optimize agricultural operations with AI-powered precision farming, 
            smart irrigation, crop monitoring, and intelligent agricultural analytics 
            for maximum yield and sustainability.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover from-green-700 hover to-emerald-700 transition-all duration-200">
              Monitor Crops
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-medium hover from-teal-700 hover to-cyan-700 transition-all duration-200">
              Analyze Soil
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-black/20 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '🌾' },
            { id: 'crops', label: 'Crops', icon: '🌱' },
            { id: 'soil', label: 'Soil', icon: '🌍' },
            { id: 'irrigation', label: 'Irrigation', icon: '💧' },
            { id: 'farming', label: 'Smart Farming', icon: '🤖' },
            { id: 'analytics', label: 'Analytics', icon: '📊' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedView === tab.id
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 lg grid-cols-2 gap-8">
            {/* Crop Monitoring Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Active Crop Monitoring</h3>
              <div className="space-y-4">
                {cropMonitoring.slice(0, 3).map((crop) => (
                  <div key={crop.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{crop.name}</h4>
                      <span className={`px-4 py-3 rounded text-xs font-medium ${getStatusBgColor(crop.status)} text-white`}>
                        {crop.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{crop.location} • {crop.type}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Health: {crop.healthScore}/10</span>
                      <span>Yield: {crop.yieldPrediction}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Farming Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Farming Systems</h3>
              <div className="space-y-4">
                {smartFarming.slice(0, 2).map((system) => (
                  <div key={system.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{system.name}</h4>
                      <span className={`px-4 py-3 rounded text-xs font-medium ${getStatusBgColor(system.status)} text-white`}>
                        {system.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{system.location}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Efficiency: {system.efficiency}%</span>
                      <span>Savings: {formatCurrency(system.costSavings)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'crops' && (
          <div className="space-y-6">
            {/* Crop Type Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {['all', 'wheat', 'corn', 'soybeans', 'rice', 'cotton', 'vegetables', 'fruits'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-4 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Crops Grid */}
            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3 gap-6">
              {filteredCropMonitoring.map((crop) => (
                <div key={crop.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{crop.name}</h3>
                    <span className={`px-3 py-3 rounded-full text-sm ${getStatusBgColor(crop.status)} text-white`}>
                      {crop.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{crop.location} • {crop.type}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Area</span>
                      <span className="text-white">{formatNumber(crop.area)} acres</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Health Score</span>
                      <span className="text-white">{crop.healthScore}/10</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Yield Prediction</span>
                      <span className="text-white">{crop.yieldPrediction}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Disease Risk</span>
                      <span className={getRiskColor(crop.aiAnalysis.diseaseRisk)}>
                        {crop.aiAnalysis.diseaseRisk}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'soil' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3 gap-6">
              {soilAnalysis.map((soil) => (
                <div key={soil.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{soil.location}</h3>
                    <span className="text-gray-400 text-sm">{soil.type}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{soil.ph}</div>
                      <div className="text-gray-400 text-sm">pH Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{soil.moisture}%</div>
                      <div className="text-gray-400 text-sm">Moisture</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Fertility Score</span>
                      <span className="text-white">{soil.aiAnalysis.fertilityScore}/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Irrigation Needs</span>
                      <span className="text-white">{Math.round(soil.aiAnalysis.irrigationNeeds * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'irrigation' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3 gap-6">
              {irrigationSystems.map((system) => (
                <div key={system.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{system.name}</h3>
                    <span className={`px-3 py-3 rounded-full text-sm ${getStatusBgColor(system.status)} text-white`}>
                      {system.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{system.type} system</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{system.coverage}%</div>
                      <div className="text-gray-400 text-sm">Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{system.efficiency}%</div>
                      <div className="text-gray-400 text-sm">Efficiency</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Water Usage</span>
                      <span className="text-white">{formatNumber(system.waterUsage)} gal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Optimization</span>
                      <span className="text-white">{system.aiAnalysis.optimizationScore}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'farming' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3 gap-6">
              {smartFarming.map((system) => (
                <div key={system.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{system.name}</h3>
                    <span className={`px-3 py-3 rounded-full text-sm ${getStatusBgColor(system.status)} text-white`}>
                      {system.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{system.location}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{system.efficiency}%</div>
                      <div className="text-gray-400 text-sm">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{formatCurrency(system.costSavings)}</div>
                      <div className="text-gray-400 text-sm">Savings</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ROI</span>
                      <span className="text-white">{Math.round(system.aiAnalysis.roi * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Productivity Gain</span>
                      <span className="text-white">{Math.round(system.aiAnalysis.productivityGain * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'analytics' && analytics && (
          <div className="space-y-6">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.totalCrops}</div>
                <div className="text-gray-400">Total Crops</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.activeSystems}</div>
                <div className="text-gray-400">Active Systems</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.waterSavings}%</div>
                <div className="text-gray-400">Water Savings</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.yieldIncrease}%</div>
                <div className="text-gray-400">Yield Increase</div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">AI Agricultural Insights</h3>
              <div className="space-y-4">
                {analytics.aiInsights.map((insight) => (
                  <div key={insight.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{getInsightIcon(insight.impact)}</span>
                      <h4 className={`text-lg font-medium ${getInsightColor(insight.impact)}`}>
                        {insight.title}
                      </h4>
                      <span className="text-sm text-gray-400">{Math.round(insight.confidence * 100)}% confidence</span>
                    </div>
                    <p className="text-gray-300 mb-3">{insight.description}</p>
                    <div className="space-y-2">
                      {insight.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>•</span>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/20 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-8">
          <div className="grid grid-cols-1 md grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                The first free AI-powered marketplace for high-tech products, IT services, AI talents, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/ai-powered-live-streaming-broadcasting" className="hover text-white">Live Streaming</Link></li>
                <li><Link href="/ai-powered-voice-assistant-speech-recognition" className="hover text-white">Voice Assistant</Link></li>
                <li><Link href="/ai-powered-autonomous-vehicle-transportation" className="hover text-white">Autonomous Vehicles</Link></li>
                <li><Link href="/ai-powered-cryptocurrency-digital-asset-management" className="hover text-white">Cryptocurrency</Link></li>
                <li><Link href="/ai-powered-space-exploration-satellite-management" className="hover text-white">Space Exploration</Link></li>
                <li><Link href="/ai-powered-underwater-exploration-marine-research" className="hover text-white">Underwater Exploration</Link></li>
                <li><Link href="/ai-powered-climate-change-environmental-sustainability" className="hover text-white">Climate Change</Link></li>
                <li><Link href="/ai-powered-precision-agriculture-smart-farming" className="hover text-white">Precision Agriculture</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/marketplace" className="hover text-white">Marketplace</Link></li>
                <li><Link href="/services" className="hover text-white">IT Services</Link></li>
                <li><Link href="/talents" className="hover text-white">AI Talents</Link></li>
                <li><Link href="/equipment" className="hover text-white">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/help-desk-support" className="hover text-white">Help Desk</Link></li>
                <li><Link href="/contact" className="hover text-white">Contact</Link></li>
                <li><Link href="/docs" className="hover text-white">Documentation</Link></li>
                <li><Link href="/status" className="hover text-white">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
};

export default AIPoweredPrecisionAgricultureSmartFarmingPage 