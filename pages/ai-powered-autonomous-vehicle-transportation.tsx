import type { NextPage }  from 'next';;import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';;
import { useState, useEffect, useMemo }  from 'react';;
import Link  from 'next/link';;

interface AutonomousVehicle {
  id: string
  name: string
  type: 'passenger' | 'cargo' | 'emergency' | 'delivery'
  status: 'active' | 'maintenance' | 'offline' | 'charging'
  location: {
    lat: number
    lng: number
    address: string
  }
  battery: number
  speed: number
  destination: string
  eta: number
  aiAnalysis: VehicleAnalysis
}

interface VehicleAnalysis {
  performanceScore: number
  safetyScore: number
  efficiencyScore: number
  recommendations: string[]
}

interface TrafficOptimization {
  id: string
  location: string
  currentFlow: number
  optimizedFlow: number
  congestionLevel: 'low' | 'medium' | 'high' | 'critical'
  optimizationType: 'signal' | 'route' | 'speed' | 'lane'
  impact: number
  aiAnalysis: TrafficAnalysis
}

interface TrafficAnalysis {
  accuracy: number
  predictionScore: number
  optimizationEfficiency: number
  recommendations: string[]
}

interface RoutePlanning {
  id: string
  origin: string
  destination: string
  distance: number
  duration: number
  trafficConditions: string
  routeType: 'fastest' | 'shortest' | 'eco' | 'scenic'
  waypoints: string[]
  aiAnalysis: RouteAnalysis
}

interface RouteAnalysis {
  efficiency: number
  reliability: number
  safetyScore: number
  recommendations: string[]
}

interface LogisticsOrder {
  id: string
  customer: string
  origin: string
  destination: string
  cargo: string
  weight: number
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled'
  assignedVehicle: string
  eta: number
  aiAnalysis: LogisticsAnalysis
}

interface LogisticsAnalysis {
  optimizationScore: number
  costEfficiency: number
  deliveryReliability: number
  recommendations: string[]
}

interface TransportationAnalytics {
  totalVehicles: number
  activeRoutes: number
  averageSpeed: number
  deliverySuccessRate: number
  aiInsights: TransportationInsight[]
}

interface TransportationInsight {
  id: string
  title: string
  description: string
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number
  recommendations: string[]
}

const AIPoweredAutonomousVehicleTransportationPage: NextPage = () => {
  const [vehicles, setVehicles] = useState<AutonomousVehicle[]>([])
  const [trafficOptimizations, setTrafficOptimizations] = useState<TrafficOptimization[]>([])
  const [routes, setRoutes] = useState<RoutePlanning[]>([])
  const [logistics, setLogistics] = useState<LogisticsOrder[]>([])
  const [analytics, setAnalytics] = useState<TransportationAnalytics | null>(null)
  const [selectedView, setSelectedView] = useState<'overview' | 'vehicles' | 'traffic' | 'routes' | 'logistics' | 'analytics'>('overview')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const mockVehicles: AutonomousVehicle[] = [
    {
      id: '1',
      name: 'AV-001',
      type: 'passenger',
      status: 'active',
      location: {
        lat: 40.7128,
        lng: -74.0060,
        address: 'New York, NY'
      },
      battery: 85,
      speed: 35,
      destination: 'Brooklyn Bridge',
      eta: 12,
      aiAnalysis: {
        performanceScore: 9.2,
        safetyScore: 9.5,
        efficiencyScore: 8.8,
        recommendations: ['Optimize route for better efficiency', 'Consider traffic patterns', 'Monitor battery usage']
      }
    },
    {
      id: '2',
      name: 'AV-002',
      type: 'cargo',
      status: 'active',
      location: {
        lat: 34.0522,
        lng: -118.2437,
        address: 'Los Angeles, CA'
      },
      battery: 72,
      speed: 28,
      destination: 'Port of Los Angeles',
      eta: 25,
      aiAnalysis: {
        performanceScore: 8.9,
        safetyScore: 9.3,
        efficiencyScore: 9.1,
        recommendations: ['Adjust speed for cargo safety', 'Optimize loading sequence', 'Monitor weather conditions']
      }
    },
    {
      id: '3',
      name: 'AV-003',
      type: 'emergency',
      status: 'active',
      location: {
        lat: 41.8781,
        lng: -87.6298,
        address: 'Chicago, IL'
      },
      battery: 95,
      speed: 45,
      destination: 'Emergency Response Center',
      eta: 8,
      aiAnalysis: {
        performanceScore: 9.7,
        safetyScore: 9.8,
        efficiencyScore: 9.4,
        recommendations: ['Maintain high priority routing', 'Ensure clear communication', 'Monitor emergency protocols']
      }
    }
  ]

  const mockTrafficOptimizations: TrafficOptimization[] = [
    {
      id: '1',
      location: 'Manhattan Downtown',
      currentFlow: 1200,
      optimizedFlow: 1800,
      congestionLevel: 'high',
      optimizationType: 'signal',
      impact: 50,
      aiAnalysis: {
        accuracy: 0.94,
        predictionScore: 0.91,
        optimizationEfficiency: 0.88,
        recommendations: ['Implement dynamic signal timing', 'Add traffic sensors', 'Optimize intersection design']
      }
    },
    {
      id: '2',
      location: 'Los Angeles Freeway',
      currentFlow: 800,
      optimizedFlow: 1200,
      congestionLevel: 'medium',
      optimizationType: 'route',
      impact: 40,
      aiAnalysis: {
        accuracy: 0.89,
        predictionScore: 0.87,
        optimizationEfficiency: 0.85,
        recommendations: ['Reroute through alternative highways', 'Implement carpool lanes', 'Add real-time updates']
      }
    }
  ]

  const mockRoutes: RoutePlanning[] = [
    {
      id: '1',
      origin: 'Times Square, NY',
      destination: 'JFK Airport',
      distance: 15.2,
      duration: 25,
      trafficConditions: 'Moderate',
      routeType: 'fastest',
      waypoints: ['Queens Boulevard', 'Van Wyck Expressway'],
      aiAnalysis: {
        efficiency: 0.92,
        reliability: 0.89,
        safetyScore: 0.94,
        recommendations: ['Consider alternative routes during peak hours', 'Monitor construction updates', 'Optimize departure time']
      }
    },
    {
      id: '2',
      origin: 'Downtown LA',
      destination: 'Santa Monica Pier',
      distance: 12.8,
      duration: 20,
      trafficConditions: 'Light',
      routeType: 'eco',
      waypoints: ['Venice Boulevard', 'Ocean Avenue'],
      aiAnalysis: {
        efficiency: 0.88,
        reliability: 0.91,
        safetyScore: 0.89,
        recommendations: ['Use eco-friendly driving mode', 'Consider public transit options', 'Plan for parking availability']
      }
    }
  ]

  const mockLogistics: LogisticsOrder[] = [
    {
      id: '1',
      customer: 'TechCorp Inc.',
      origin: 'Silicon Valley, CA',
      destination: 'Seattle, WA',
      cargo: 'Electronics',
      weight: 500,
      priority: 'high',
      status: 'in-transit',
      assignedVehicle: 'AV-002',
      eta: 18,
      aiAnalysis: {
        optimizationScore: 0.91,
        costEfficiency: 0.88,
        deliveryReliability: 0.94,
        recommendations: ['Optimize loading sequence', 'Monitor weather conditions', 'Consider alternative routes']
      }
    },
    {
      id: '2',
      customer: 'MedSupply Co.',
      origin: 'Phoenix, AZ',
      destination: 'Denver, CO',
      cargo: 'Medical Supplies',
      weight: 200,
      priority: 'urgent',
      status: 'in-transit',
      assignedVehicle: 'AV-003',
      eta: 6,
      aiAnalysis: {
        optimizationScore: 0.95,
        costEfficiency: 0.92,
        deliveryReliability: 0.97,
        recommendations: ['Maintain temperature control', 'Prioritize delivery route', 'Monitor security protocols']
      }
    }
  ]

  const mockAnalytics: TransportationAnalytics = {
    totalVehicles: 156,
    activeRoutes: 89,
    averageSpeed: 32,
    deliverySuccessRate: 98.5,
    aiInsights: [
      {
        id: '1',
        title: 'High Delivery Success Rate',
        description: '98.5% delivery success rate exceeds industry standards with AI-optimized routing',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Maintain current optimization algorithms', 'Expand autonomous fleet', 'Implement predictive maintenance']
      },
      {
        id: '2',
        title: 'Traffic Optimization Impact',
        description: 'AI-powered traffic optimization reduces congestion by 40% on average',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Deploy more traffic sensors', 'Expand optimization zones', 'Implement real-time updates']
      }
    ]
  }

  useEffect(() => {
    setVehicles(mockVehicles)
    setTrafficOptimizations(mockTrafficOptimizations)
    setRoutes(mockRoutes)
    setLogistics(mockLogistics)
    setAnalytics(mockAnalytics)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'in-transit':
        return 'text-green-400'
      case 'maintenance':
      case 'pending':
        return 'text-yellow-400'
      case 'offline':
      case 'cancelled':
        return 'text-red-400'
      case 'charging':
      case 'delivered':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'in-transit':
        return 'bg-green-500'
      case 'maintenance':
      case 'pending':
        return 'bg-yellow-500'
      case 'offline':
      case 'cancelled':
        return 'bg-red-500'
      case 'charging':
      case 'delivered':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getCongestionColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400'
      case 'medium': return 'text-yellow-400'
      case 'high': return 'text-orange-400'
      case 'critical': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-400'
      case 'high': return 'text-orange-400'
      case 'medium': return 'text-yellow-400'
      case 'low': return 'text-green-400'
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
      case 'positive': return '📈'
      case 'negative': return '📉'
      case 'neutral': return '📊'
      default: return '📊'
    }
  }

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      const typeMatch = selectedType === 'all' || vehicle.type === selectedType
      return typeMatch
    })
  }, [vehicles, selectedType])

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Autonomous Vehicle & Transportation - Zion</title>
        <meta name="description" content="Advanced AI-powered autonomous vehicle and transportation system with traffic optimization, route planning, and intelligent logistics management" />
        <meta name="keywords" content="autonomous vehicles, transportation, traffic optimization, route planning, logistics, AI transportation, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/ai-powered-live-streaming-broadcasting" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Streaming
              </Link>
              <Link href="/ai-powered-voice-assistant-speech-recognition" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Voice Assistant
              </Link>
              <Link href="/ai-powered-holographic-display" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Holographic
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-4 rounded-lg text-sm font-medium hover:from-blue-700 hover to-cyan-700 transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered Autonomous Vehicle & Transportation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of transportation with AI-powered autonomous vehicles, 
            intelligent traffic optimization, and advanced route planning. Revolutionize 
            mobility with cutting-edge technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover to-cyan-700 transition-all duration-200">
              Deploy Vehicle
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:from-green-700 hover to-emerald-700 transition-all duration-200">
              Optimize Traffic
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-black/20 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'vehicles', label: 'Autonomous Vehicles', icon: '🚗' },
            { id: 'traffic', label: 'Traffic Optimization', icon: '🚦' },
            { id: 'routes', label: 'Route Planning', icon: '🗺️' },
            { id: 'logistics', label: 'Logistics', icon: '📦' },
            { id: 'analytics', label: 'Analytics', icon: '📈' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedView === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
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
            {/* Autonomous Vehicles Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Autonomous Vehicles</h3>
              <div className="space-y-4">
                {vehicles.slice(0, 3).map((vehicle) => (
                  <div key={vehicle.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{vehicle.name}</h4>
                      <span className={`px-4 py-3 rounded text-xs font-medium ${getStatusBgColor(vehicle.status)} text-white`}>
                        {vehicle.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{vehicle.type} • {vehicle.location.address}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{vehicle.battery}% battery</span>
                      <span>{vehicle.speed} mph</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Optimization Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Traffic Optimization</h3>
              <div className="space-y-4">
                {trafficOptimizations.slice(0, 2).map((optimization) => (
                  <div key={optimization.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{optimization.location}</h4>
                      <span className={`px-4 py-3 rounded text-xs font-medium ${getCongestionColor(optimization.congestionLevel)}`}>
                        {optimization.congestionLevel}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{optimization.optimizationType} optimization</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{optimization.impact}% improvement</span>
                      <span>{optimization.optimizedFlow} vehicles/hr</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'vehicles' && (
          <div className="space-y-6">
            {/* Vehicle Type Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {['all', 'passenger', 'cargo', 'emergency', 'delivery'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-4 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Vehicles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{vehicle.name}</h3>
                    <span className={`px-4 py-3 rounded text-xs font-medium ${getStatusBgColor(vehicle.status)} text-white`}>
                      {vehicle.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{vehicle.type} • {vehicle.location.address}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Battery</span>
                      <span className="text-white">{vehicle.battery}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Speed</span>
                      <span className="text-white">{vehicle.speed} mph</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ETA</span>
                      <span className="text-white">{vehicle.eta} min</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Performance</span>
                      <span className="text-white">{vehicle.aiAnalysis.performanceScore}/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Safety</span>
                      <span className="text-white">{vehicle.aiAnalysis.safetyScore}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'traffic' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md grid-cols-2 gap-6">
              {trafficOptimizations.map((optimization) => (
                <div key={optimization.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{optimization.location}</h3>
                    <span className={`px-3 py-3 rounded-full text-sm ${getCongestionColor(optimization.congestionLevel)}`}>
                      {optimization.congestionLevel}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{optimization.optimizationType} optimization</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{optimization.impact}%</div>
                      <div className="text-gray-400 text-sm">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{optimization.optimizedFlow}</div>
                      <div className="text-gray-400 text-sm">Vehicles/hr</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-white">{Math.round(optimization.aiAnalysis.accuracy * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-white">{Math.round(optimization.aiAnalysis.optimizationEfficiency * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'routes' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md grid-cols-2 gap-6">
              {routes.map((route) => (
                <div key={route.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{route.origin} → {route.destination}</h3>
                    <span className="px-3 py-3 rounded-full text-sm bg-blue-500/20 text-blue-400">
                      {route.routeType}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{route.trafficConditions} traffic</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{route.distance} mi</div>
                      <div className="text-gray-400 text-sm">Distance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{route.duration} min</div>
                      <div className="text-gray-400 text-sm">Duration</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-white">{Math.round(route.aiAnalysis.efficiency * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Safety</span>
                      <span className="text-white">{Math.round(route.aiAnalysis.safetyScore * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'logistics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md grid-cols-2 gap-6">
              {logistics.map((order) => (
                <div key={order.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{order.customer}</h3>
                    <span className={`px-3 py-3 rounded-full text-sm ${getStatusBgColor(order.status)} text-white`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{order.cargo} • {order.weight} lbs</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{order.eta} min</div>
                      <div className="text-gray-400 text-sm">ETA</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </div>
                      <div className="text-gray-400 text-sm">Priority</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Optimization</span>
                      <span className="text-white">{Math.round(order.aiAnalysis.optimizationScore * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Reliability</span>
                      <span className="text-white">{Math.round(order.aiAnalysis.deliveryReliability * 100)}%</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-5 gap-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.totalVehicles}</div>
                <div className="text-gray-400">Total Vehicles</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.activeRoutes}</div>
                <div className="text-gray-400">Active Routes</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.averageSpeed} mph</div>
                <div className="text-gray-400">Avg Speed</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.deliverySuccessRate}%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Operation</div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">AI Insights</h3>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
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
                <li><Link href="/ai-powered-holographic-display" className="hover text-white">Holographic Display</Link></li>
                <li><Link href="/ai-powered-autonomous-vehicle-transportation" className="hover text-white">Autonomous Vehicles</Link></li>
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
}

export default AIPoweredAutonomousVehicleTransportationPage 