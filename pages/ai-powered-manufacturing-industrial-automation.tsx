import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface SmartManufacturing {
  id: string
  name: string
  type: 'assembly-line' | 'machining' | 'welding' | 'packaging' | 'inspection' | 'material-handling'
  status: 'operational' | 'maintenance' | 'offline' | 'upgrading'
  location: string
  efficiency: number
  throughput: number
  qualityScore: number
  aiAnalysis: ManufacturingAnalysis
}

interface ManufacturingAnalysis {
  performanceScore: number
  optimizationPotential: number
  maintenanceNeeds: string[]
  recommendations: string[]
}

interface IndustrialAutomation {
  id: string
  name: string
  type: 'robotics' | 'plc' | 'scada' | 'motion-control' | 'vision-system' | 'sensor-network'
  status: 'active' | 'maintenance' | 'offline' | 'calibrating'
  location: string
  uptime: number
  accuracy: number
  speed: number
  aiAnalysis: AutomationAnalysis
}

interface AutomationAnalysis {
  reliabilityScore: number
  precisionLevel: number
  optimizationOpportunities: string[]
  maintenanceSchedule: string[]
}

interface QualityControl {
  id: string
  name: string
  type: 'visual-inspection' | 'dimensional-measurement' | 'material-testing' | 'defect-detection'
  status: 'active' | 'calibrating' | 'offline' | 'maintenance'
  location: string
  accuracy: number
  detectionRate: number
  falsePositiveRate: number
  aiAnalysis: QualityAnalysis
}

interface QualityAnalysis {
  defectDetectionRate: number
  qualityScore: number
  improvementAreas: string[]
  recommendations: string[]
}

interface ProductionOptimization {
  id: string
  name: string
  type: 'process-optimization' | 'resource-allocation' | 'scheduling' | 'predictive-maintenance'
  status: 'active' | 'completed' | 'scheduled'
  metrics: {
    totalProduction: number
    efficiencyGain: number
    costSavings: number
    qualityImprovement: number
  }
  aiAnalysis: OptimizationAnalysis
}

interface OptimizationAnalysis {
  insights: string[]
  trends: string[]
  recommendations: string[]
  impactScore: number
}

interface ManufacturingInsight {
  id: string
  title: string
  description: string
  category: 'production' | 'quality' | 'efficiency' | 'automation'
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number
  recommendations: string[]
}

interface ManufacturingData {
  totalProduction: number
  activeSystems: number
  averageEfficiency: number
  costSavings: number
  aiInsights: ManufacturingInsight[]
}

const AIPoweredManufacturingIndustrialAutomationPage: NextPage = () => {
  const [smartManufacturing, setSmartManufacturing] = useState<SmartManufacturing[]>([])
  const [industrialAutomation, setIndustrialAutomation] = useState<IndustrialAutomation[]>([])
  const [qualityControl, setQualityControl] = useState<QualityControl[]>([])
  const [productionOptimization, setProductionOptimization] = useState<ProductionOptimization[]>([])
  const [data, setData] = useState<ManufacturingData | null>(null)
  const [selectedView, setSelectedView] = useState<'overview' | 'manufacturing' | 'automation' | 'quality' | 'optimization' | 'insights'>('overview')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const mockSmartManufacturing: SmartManufacturing[] = [
    {
      id: '1',
      name: 'Assembly Line Alpha',
      type: 'assembly-line',
      status: 'operational',
      location: 'Factory A',
      efficiency: 94,
      throughput: 1200,
      qualityScore: 98,
      aiAnalysis: {
        performanceScore: 9.2,
        optimizationPotential: 0.08,
        maintenanceNeeds: ['Belt inspection monthly', 'Motor check quarterly', 'Sensor calibration'],
        recommendations: ['Optimize cycle time', 'Implement predictive maintenance', 'Enhance quality monitoring']
      }
    },
    {
      id: '2',
      name: 'CNC Machining Center',
      type: 'machining',
      status: 'operational',
      location: 'Factory B',
      efficiency: 91,
      throughput: 800,
      qualityScore: 97,
      aiAnalysis: {
        performanceScore: 8.9,
        optimizationPotential: 0.12,
        maintenanceNeeds: ['Tool change monitoring', 'Spindle inspection', 'Coolant system check'],
        recommendations: ['Optimize cutting parameters', 'Implement tool life monitoring', 'Enhance coolant management']
      }
    },
    {
      id: '3',
      name: 'Robotic Welding Station',
      type: 'welding',
      status: 'operational',
      location: 'Factory C',
      efficiency: 96,
      throughput: 600,
      qualityScore: 99,
      aiAnalysis: {
        performanceScore: 9.5,
        optimizationPotential: 0.05,
        maintenanceNeeds: ['Wire feed check weekly', 'Gas flow monitoring', 'Torch cleaning'],
        recommendations: ['Optimize welding parameters', 'Implement quality monitoring', 'Enhance safety systems']
      }
    }
  ]

  const mockIndustrialAutomation: IndustrialAutomation[] = [
    {
      id: '1',
      name: 'Robotic Assembly Cell',
      type: 'robotics',
      status: 'active',
      location: 'Production Line 1',
      uptime: 98,
      accuracy: 99.5,
      speed: 95,
      aiAnalysis: {
        reliabilityScore: 9.4,
        precisionLevel: 9.8,
        optimizationOpportunities: ['Reduce cycle time', 'Improve part handling', 'Enhance vision system'],
        maintenanceSchedule: ['Daily inspection', 'Weekly calibration', 'Monthly preventive maintenance']
      }
    },
    {
      id: '2',
      name: 'PLC Control System',
      type: 'plc',
      status: 'active',
      location: 'Control Room A',
      uptime: 99.5,
      accuracy: 99.9,
      speed: 98,
      aiAnalysis: {
        reliabilityScore: 9.7,
        precisionLevel: 9.9,
        optimizationOpportunities: ['Optimize control loops', 'Enhance fault detection', 'Improve response time'],
        maintenanceSchedule: ['Weekly backup', 'Monthly firmware check', 'Quarterly system test']
      }
    },
    {
      id: '3',
      name: 'SCADA Monitoring System',
      type: 'scada',
      status: 'active',
      location: 'Control Center',
      uptime: 99.8,
      accuracy: 99.7,
      speed: 97,
      aiAnalysis: {
        reliabilityScore: 9.6,
        precisionLevel: 9.7,
        optimizationOpportunities: ['Enhance data visualization', 'Improve alarm management', 'Optimize reporting'],
        maintenanceSchedule: ['Daily system check', 'Weekly data backup', 'Monthly performance review']
      }
    }
  ]

  const mockQualityControl: QualityControl[] = [
    {
      id: '1',
      name: 'Vision Inspection System',
      type: 'visual-inspection',
      status: 'active',
      location: 'Quality Station 1',
      accuracy: 99.2,
      detectionRate: 98.5,
      falsePositiveRate: 0.3,
      aiAnalysis: {
        defectDetectionRate: 98.5,
        qualityScore: 9.6,
        improvementAreas: ['Reduce false positives', 'Enhance defect classification', 'Improve lighting'],
        recommendations: ['Optimize camera settings', 'Update defect models', 'Enhance lighting system']
      }
    },
    {
      id: '2',
      name: 'Dimensional Measurement',
      type: 'dimensional-measurement',
      status: 'active',
      location: 'Quality Station 2',
      accuracy: 99.8,
      detectionRate: 99.1,
      falsePositiveRate: 0.1,
      aiAnalysis: {
        defectDetectionRate: 99.1,
        qualityScore: 9.8,
        improvementAreas: ['Improve measurement speed', 'Enhance precision', 'Reduce calibration time'],
        recommendations: ['Optimize measurement parameters', 'Implement auto-calibration', 'Enhance probe system']
      }
    },
    {
      id: '3',
      name: 'Material Testing Lab',
      type: 'material-testing',
      status: 'active',
      location: 'Quality Lab',
      accuracy: 99.5,
      detectionRate: 97.8,
      falsePositiveRate: 0.5,
      aiAnalysis: {
        defectDetectionRate: 97.8,
        qualityScore: 9.4,
        improvementAreas: ['Standardize test procedures', 'Enhance data analysis', 'Improve sample handling'],
        recommendations: ['Implement automated testing', 'Enhance data management', 'Optimize test procedures']
      }
    }
  ]

  const mockProductionOptimization: ProductionOptimization[] = [
    {
      id: '1',
      name: 'Process Optimization Engine',
      type: 'process-optimization',
      status: 'active',
      metrics: {
        totalProduction: 50000,
        efficiencyGain: 25,
        costSavings: 350000,
        qualityImprovement: 15
      },
      aiAnalysis: {
        insights: ['Cycle time reduced by 20% through AI optimization', 'Energy consumption decreased by 15%'],
        trends: ['Increasing production efficiency', 'Decreasing operational costs', 'Improving quality metrics'],
        recommendations: ['Expand AI optimization coverage', 'Implement predictive analytics', 'Enhance monitoring systems'],
        impactScore: 8.9
      }
    },
    {
      id: '2',
      name: 'Resource Allocation System',
      type: 'resource-allocation',
      status: 'active',
      metrics: {
        totalProduction: 45000,
        efficiencyGain: 30,
        costSavings: 420000,
        qualityImprovement: 20
      },
      aiAnalysis: {
        insights: ['Resource utilization improved by 30% with AI allocation', 'Downtime reduced by 40%'],
        trends: ['Optimizing resource usage', 'Reducing waste', 'Improving productivity'],
        recommendations: ['Expand AI allocation algorithms', 'Implement real-time monitoring', 'Enhance predictive capabilities'],
        impactScore: 9.2
      }
    },
    {
      id: '3',
      name: 'Predictive Maintenance Platform',
      type: 'predictive-maintenance',
      status: 'completed',
      metrics: {
        totalProduction: 48000,
        efficiencyGain: 22,
        costSavings: 280000,
        qualityImprovement: 18
      },
      aiAnalysis: {
        insights: ['Maintenance costs reduced by 35% with predictive analytics', 'Equipment uptime increased by 25%'],
        trends: ['Reducing unplanned downtime', 'Improving equipment reliability', 'Optimizing maintenance schedules'],
        recommendations: ['Expand predictive maintenance coverage', 'Enhance sensor networks', 'Implement IoT integration'],
        impactScore: 8.7
      }
    }
  ]

  const mockData: ManufacturingData = {
    totalProduction: 143000,
    activeSystems: 24,
    averageEfficiency: 93,
    costSavings: 1050000,
    aiInsights: [
      {
        id: '1',
        title: 'AI-Optimized Manufacturing Increasing Productivity',
        description: 'Machine learning algorithms are optimizing production processes, increasing efficiency by 25% while reducing costs and improving quality.',
        category: 'production',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Expand AI optimization coverage', 'Implement predictive maintenance', 'Enhance quality monitoring']
      },
      {
        id: '2',
        title: 'Smart Automation Reducing Operational Costs',
        description: 'AI-powered industrial automation systems are reducing operational costs by 30% while improving precision and reliability.',
        category: 'automation',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Scale automation systems', 'Optimize control algorithms', 'Enhance monitoring capabilities']
      }
    ]
  }

  useEffect(() => {
    setSmartManufacturing(mockSmartManufacturing)
    setIndustrialAutomation(mockIndustrialAutomation)
    setQualityControl(mockQualityControl)
    setProductionOptimization(mockProductionOptimization)
    setData(mockData)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'operational':
        return 'text-green-400'
      case 'maintenance':
      case 'calibrating':
        return 'text-yellow-400'
      case 'offline':
        return 'text-red-400'
      case 'upgrading':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'operational':
        return 'bg-green-500'
      case 'maintenance':
      case 'calibrating':
        return 'bg-yellow-500'
      case 'offline':
        return 'bg-red-500'
      case 'upgrading':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
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
      case 'positive': return '🏭'
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

  const filteredSmartManufacturing = useMemo(() => {
    return smartManufacturing.filter(system => {
      const typeMatch = selectedType === 'all' || system.type === selectedType
      return typeMatch
    })
  }, [smartManufacturing, selectedType])

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Manufacturing & Industrial Automation - Zion</title>
        <meta name="description" content="Advanced AI-powered manufacturing and industrial automation platform with smart manufacturing, quality control, and intelligent production optimization" />
        <meta name="keywords" content="manufacturing, industrial automation, smart manufacturing, quality control, AI manufacturing, Zion" />
      </Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/ai-powered-live-streaming-broadcasting" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Streaming
              </Link>
              <Link href="/ai-powered-voice-assistant-speech-recognition" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Voice Assistant
              </Link>
              <Link href="/ai-powered-autonomous-vehicle-transportation" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Autonomous Vehicles
              </Link>
              <Link href="/ai-powered-cryptocurrency-digital-asset-management" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Cryptocurrency
              </Link>
              <Link href="/ai-powered-space-exploration-satellite-management" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Space Exploration
              </Link>
              <Link href="/ai-powered-underwater-exploration-marine-research" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Underwater Exploration
              </Link>
              <Link href="/ai-powered-climate-change-environmental-sustainability" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Climate Change
              </Link>
              <Link href="/ai-powered-precision-agriculture-smart-farming" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Precision Agriculture
              </Link>
              <Link href="/ai-powered-healthcare-medical-diagnostics" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Healthcare
              </Link>
              <Link href="/ai-powered-energy-management-renewable-energy" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Energy Management
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered Manufacturing & Industrial Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered manufacturing and industrial automation platform with 
            smart manufacturing, quality control, and intelligent production optimization 
            for efficient and high-quality manufacturing processes.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
              Monitor Production
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
              Optimize Quality
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-black/20 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '🏭' },
            { id: 'manufacturing', label: 'Manufacturing', icon: '⚙️' },
            { id: 'automation', label: 'Automation', icon: '🤖' },
            { id: 'quality', label: 'Quality Control', icon: '🔍' },
            { id: 'optimization', label: 'Optimization', icon: '📈' },
            { id: 'insights', label: 'Insights', icon: '💡' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedView === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Smart Manufacturing Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Active Manufacturing Systems</h3>
              <div className="space-y-4">
                {smartManufacturing.slice(0, 3).map((system) => (
                  <div key={system.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{system.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(system.status)} text-white`}>
                        {system.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{system.location} • {system.type}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Efficiency: {system.efficiency}%</span>
                      <span>Quality: {system.qualityScore}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Automation Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Industrial Automation Systems</h3>
              <div className="space-y-4">
                {industrialAutomation.slice(0, 2).map((system) => (
                  <div key={system.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{system.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(system.status)} text-white`}>
                        {system.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{system.location}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Uptime: {system.uptime}%</span>
                      <span>Accuracy: {system.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'manufacturing' && (
          <div className="space-y-6">
            {/* System Type Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {['all', 'assembly-line', 'machining', 'welding', 'packaging', 'inspection', 'material-handling'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Manufacturing Systems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSmartManufacturing.map((system) => (
                <div key={system.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{system.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(system.status)} text-white`}>
                      {system.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{system.location} • {system.type}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-white">{system.efficiency}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Throughput</span>
                      <span className="text-white">{formatNumber(system.throughput)} units/hr</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Quality Score</span>
                      <span className="text-white">{system.qualityScore}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Performance</span>
                      <span className="text-white">{system.aiAnalysis.performanceScore}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'automation' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industrialAutomation.map((system) => (
                <div key={system.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{system.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(system.status)} text-white`}>
                      {system.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{system.location} • {system.type}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{system.uptime}%</div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{system.accuracy}%</div>
                      <div className="text-gray-400 text-sm">Accuracy</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Speed</span>
                      <span className="text-white">{system.speed}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Reliability</span>
                      <span className="text-white">{system.aiAnalysis.reliabilityScore}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'quality' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualityControl.map((system) => (
                <div key={system.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{system.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(system.status)} text-white`}>
                      {system.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{system.location} • {system.type}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{system.accuracy}%</div>
                      <div className="text-gray-400 text-sm">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{system.detectionRate}%</div>
                      <div className="text-gray-400 text-sm">Detection Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">False Positive</span>
                      <span className="text-white">{system.falsePositiveRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Quality Score</span>
                      <span className="text-white">{system.aiAnalysis.qualityScore}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'optimization' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productionOptimization.map((optimization) => (
                <div key={optimization.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{optimization.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(optimization.status)} text-white`}>
                      {optimization.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{optimization.type} optimization</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{formatNumber(optimization.metrics.totalProduction)}</div>
                      <div className="text-gray-400 text-sm">Units Produced</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{optimization.metrics.efficiencyGain}%</div>
                      <div className="text-gray-400 text-sm">Efficiency Gain</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cost Savings</span>
                      <span className="text-white">{formatCurrency(optimization.metrics.costSavings)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Impact Score</span>
                      <span className="text-white">{optimization.aiAnalysis.impactScore}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'insights' && data && (
          <div className="space-y-6">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{formatNumber(data.totalProduction)}</div>
                <div className="text-gray-400">Total Production</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{data.activeSystems}</div>
                <div className="text-gray-400">Active Systems</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{data.averageEfficiency}%</div>
                <div className="text-gray-400">Average Efficiency</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{formatCurrency(data.costSavings)}</div>
                <div className="text-gray-400">Cost Savings</div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">AI Manufacturing Insights</h3>
              <div className="space-y-4">
                {data.aiInsights.map((insight) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                The first free AI-powered marketplace for high-tech products, IT services, AI talents, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/ai-powered-live-streaming-broadcasting" className="hover:text-white">Live Streaming</Link></li>
                <li><Link href="/ai-powered-voice-assistant-speech-recognition" className="hover:text-white">Voice Assistant</Link></li>
                <li><Link href="/ai-powered-autonomous-vehicle-transportation" className="hover:text-white">Autonomous Vehicles</Link></li>
                <li><Link href="/ai-powered-cryptocurrency-digital-asset-management" className="hover:text-white">Cryptocurrency</Link></li>
                <li><Link href="/ai-powered-space-exploration-satellite-management" className="hover:text-white">Space Exploration</Link></li>
                <li><Link href="/ai-powered-underwater-exploration-marine-research" className="hover:text-white">Underwater Exploration</Link></li>
                <li><Link href="/ai-powered-climate-change-environmental-sustainability" className="hover:text-white">Climate Change</Link></li>
                <li><Link href="/ai-powered-precision-agriculture-smart-farming" className="hover:text-white">Precision Agriculture</Link></li>
                <li><Link href="/ai-powered-healthcare-medical-diagnostics" className="hover:text-white">Healthcare</Link></li>
                <li><Link href="/ai-powered-energy-management-renewable-energy" className="hover:text-white">Energy Management</Link></li>
                <li><Link href="/ai-powered-manufacturing-industrial-automation" className="hover:text-white">Manufacturing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/marketplace" className="hover:text-white">Marketplace</Link></li>
                <li><Link href="/services" className="hover:text-white">IT Services</Link></li>
                <li><Link href="/talents" className="hover:text-white">AI Talents</Link></li>
                <li><Link href="/equipment" className="hover:text-white">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/help-desk-support" className="hover:text-white">Help Desk</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/status" className="hover:text-white">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredManufacturingIndustrialAutomationPage 