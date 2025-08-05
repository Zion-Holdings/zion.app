import type { NextPage }  from 'next';;
import ModernLayout  from '../components/layout/ModernLayout';;

import Head  from 'next/head';;
import { useState, useEffect }  from 'react';;
import Link  from 'next/link';;

interface AutonomousVehicle {
  id: string
  name: string
  type: 'passenger' | 'delivery' | 'logistics' | 'emergency' | 'agricultural'
  status: 'active' | 'maintenance' | 'offline' | 'charging' | 'in-transit'
  location: {
    latitude: number
    longitude: number
    address: string
  }
  battery: number
  speed: number
  destination: string
  eta: string
  aiScore: number
  safetyScore: number
  efficiencyScore: number
  features: string[]
  sensors: {
    lidar: boolean
    radar: boolean
    cameras: boolean
    gps: boolean
    ultrasonic: boolean
  }
}

interface TransportationRoute {
  id: string
  name: string
  type: 'optimized' | 'real-time' | 'predictive' | 'emergency'
  startLocation: string
  endLocation: string
  distance: number
  duration: number
  trafficLevel: 'low' | 'medium' | 'high' | 'severe'
  aiOptimization: {
    score: number
    fuelEfficiency: number
    timeSavings: number
    recommendations: string[]
  }
  waypoints: {
    latitude: number
    longitude: number
    name: string
    type: 'charging' | 'rest' | 'delivery' | 'pickup'
  }[]
}

interface LogisticsOperation {
  id: string
  title: string
  type: 'delivery' | 'pickup' | 'warehouse' | 'last-mile'
  status: 'scheduled' | 'in-progress' | 'completed' | 'delayed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  vehicleId: string
  routeId: string
  cargo: {
    type: string
    weight: number
    volume: number
    temperature: number
  }
  aiOptimization: {
    efficiencyScore: number
    costSavings: number
    timeOptimization: number
    recommendations: string[]
  }
}

interface TrafficAnalysis {
  id: string
  location: string
  timestamp: string
  trafficDensity: number
  averageSpeed: number
  congestionLevel: 'low' | 'medium' | 'high' | 'severe'
  aiPrediction: {
    nextHour: string
    nextDay: string
    recommendations: string[]
  }
  incidents: {
    type: string
    severity: 'low' | 'medium' | 'high'
    description: string
    impact: string
  }[]
}

interface AIInsight {
  type: 'optimization' | 'safety' | 'efficiency' | 'prediction'
  title: string
  description: string
  confidence: number
  impact: 'positive' | 'negative' | 'neutral'
  actionItems: string[]
}

const AIAutonomousVehicleTransportationPage: NextPage = () => {
  const [vehicles, setVehicles] = useState<AutonomousVehicle[]>([])
  const [routes, setRoutes] = useState<TransportationRoute[]>([])
  const [logistics, setLogistics] = useState<LogisticsOperation[]>([])
  const [trafficAnalysis, setTrafficAnalysis] = useState<TrafficAnalysis[]>([])
  const [insights, setInsights] = useState<AIInsight[]>([])
  const [selectedView, setSelectedView] = useState<'overview' | 'vehicles' | 'routes' | 'logistics' | 'traffic' | 'insights'>('overview')
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const mockVehicles: AutonomousVehicle[] = [
    {
      id: '1',
      name: 'Zion Auto-001',
      type: 'passenger',
      status: 'active',
      location: {
        latitude: 40.7128,
        longitude: -74.0060,
        address: 'New York, NY'
      },
      battery: 85,
      speed: 35,
      destination: 'Brooklyn Bridge',
      eta: '15 min',
      aiScore: 9.2,
      safetyScore: 9.5,
      efficiencyScore: 9.1,
      features: ['L4 Autonomy', 'Advanced Safety', 'Smart Navigation'],
      sensors: {
        lidar: true,
        radar: true,
        cameras: true,
        gps: true,
        ultrasonic: true
      }
    },
    {
      id: '2',
      name: 'Zion Delivery-002',
      type: 'delivery',
      status: 'in-transit',
      location: {
        latitude: 34.0522,
        longitude: -118.2437,
        address: 'Los Angeles, CA'
      },
      battery: 72,
      speed: 28,
      destination: 'Downtown LA',
      eta: '8 min',
      aiScore: 8.9,
      safetyScore: 9.3,
      efficiencyScore: 8.8,
      features: ['Cargo Management', 'Route Optimization', 'Real-time Tracking'],
      sensors: {
        lidar: true,
        radar: true,
        cameras: true,
        gps: true,
        ultrasonic: true
      }
    },
    {
      id: '3',
      name: 'Zion Logistics-003',
      type: 'logistics',
      status: 'charging',
      location: {
        latitude: 41.8781,
        longitude: -87.6298,
        address: 'Chicago, IL'
      },
      battery: 15,
      speed: 0,
      destination: 'Warehouse District',
      eta: '45 min',
      aiScore: 9.4,
      safetyScore: 9.6,
      efficiencyScore: 9.3,
      features: ['Heavy Cargo', 'Long Distance', 'Energy Efficient'],
      sensors: {
        lidar: true,
        radar: true,
        cameras: true,
        gps: true,
        ultrasonic: true
      }
    }
  ]

  const mockRoutes: TransportationRoute[] = [
    {
      id: '1',
      name: 'NYC Express Route',
      type: 'optimized',
      startLocation: 'Manhattan',
      endLocation: 'Brooklyn',
      distance: 12.5,
      duration: 25,
      trafficLevel: 'medium',
      aiOptimization: {
        score: 9.1,
        fuelEfficiency: 94,
        timeSavings: 18,
        recommendations: ['Use alternative route during peak hours', 'Optimize speed for traffic conditions']
      },
      waypoints: [
        {
          latitude: 40.7589,
          longitude: -73.9851,
          name: 'Times Square',
          type: 'pickup'
        },
        {
          latitude: 40.7505,
          longitude: -73.9934,
          name: 'Penn Station',
          type: 'delivery'
        }
      ]
    },
    {
      id: '2',
      name: 'LA Coastal Route',
      type: 'real-time',
      startLocation: 'Santa Monica',
      endLocation: 'Venice Beach',
      distance: 8.2,
      duration: 15,
      trafficLevel: 'low',
      aiOptimization: {
        score: 9.5,
        fuelEfficiency: 97,
        timeSavings: 12,
        recommendations: ['Optimal route selected', 'Maintain current speed']
      },
      waypoints: [
        {
          latitude: 34.0195,
          longitude: -118.4912,
          name: 'Santa Monica Pier',
          type: 'pickup'
        },
        {
          latitude: 33.9850,
          longitude: -118.4695,
          name: 'Venice Beach',
          type: 'delivery'
        }
      ]
    }
  ]

  const mockLogistics: LogisticsOperation[] = [
    {
      id: '1',
      title: 'Express Delivery NYC',
      type: 'delivery',
      status: 'in-progress',
      priority: 'high',
      vehicleId: '1',
      routeId: '1',
      cargo: {
        type: 'Electronics',
        weight: 25,
        volume: 0.5,
        temperature: 22
      },
      aiOptimization: {
        efficiencyScore: 9.2,
        costSavings: 15,
        timeOptimization: 20,
        recommendations: ['Optimize route for traffic', 'Use energy-efficient mode']
      }
    },
    {
      id: '2',
      title: 'Warehouse Pickup LA',
      type: 'pickup',
      status: 'scheduled',
      priority: 'medium',
      vehicleId: '2',
      routeId: '2',
      cargo: {
        type: 'Furniture',
        weight: 150,
        volume: 3.2,
        temperature: 18
      },
      aiOptimization: {
        efficiencyScore: 8.8,
        costSavings: 12,
        timeOptimization: 15,
        recommendations: ['Schedule during off-peak hours', 'Optimize cargo loading']
      }
    }
  ]

  const mockTrafficAnalysis: TrafficAnalysis[] = [
    {
      id: '1',
      location: 'New York City',
      timestamp: '2024-01-20T15:30:00Z',
      trafficDensity: 75,
      averageSpeed: 25,
      congestionLevel: 'high',
      aiPrediction: {
        nextHour: 'Traffic will decrease by 15%',
        nextDay: 'Morning rush hour expected to be 20% lighter',
        recommendations: ['Avoid major highways during peak hours', 'Use alternative routes']
      },
      incidents: [
        {
          type: 'Accident',
          severity: 'medium',
          description: 'Minor collision on I-95',
          impact: '15 min delay'
        }
      ]
    },
    {
      id: '2',
      location: 'Los Angeles',
      timestamp: '2024-01-20T15:30:00Z',
      trafficDensity: 45,
      averageSpeed: 35,
      congestionLevel: 'medium',
      aiPrediction: {
        nextHour: 'Traffic will remain stable',
        nextDay: 'Normal traffic patterns expected',
        recommendations: ['Current routes are optimal', 'No major delays expected']
      },
      incidents: []
    }
  ]

  const mockInsights: AIInsight[] = [
    {
      type: 'optimization',
      title: 'Route Optimization Success',
      description: 'AI-optimized routes show 18% average time savings',
      confidence: 94,
      impact: 'positive',
      actionItems: ['Expand AI route optimization', 'Implement predictive routing', 'Optimize charging schedules']
    },
    {
      type: 'safety',
      title: 'Safety Performance Excellence',
      description: 'Autonomous vehicles maintain 99.2% safety record',
      confidence: 98,
      impact: 'positive',
      actionItems: ['Continue safety monitoring', 'Enhance sensor calibration', 'Update safety protocols']
    },
    {
      type: 'efficiency',
      title: 'Energy Efficiency Improvement',
      description: 'AI-driven energy management reduces consumption by 23%',
      confidence: 91,
      impact: 'positive',
      actionItems: ['Optimize battery usage', 'Implement smart charging', 'Reduce idle time']
    },
    {
      type: 'prediction',
      title: 'Traffic Pattern Analysis',
      description: 'AI predicts 15% increase in morning traffic next week',
      confidence: 87,
      impact: 'neutral',
      actionItems: ['Adjust departure times', 'Optimize route planning', 'Increase fleet capacity']
    }
  ]

  useEffect(() => {
    setIsLoading(true)
    // Simulate data loading
    setTimeout(() => {
      setVehicles(mockVehicles)
      setRoutes(mockRoutes)
      setLogistics(mockLogistics)
      setTrafficAnalysis(mockTrafficAnalysis)
      setInsights(mockInsights)
      setIsLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500'
      case 'in-transit': return 'text-blue-500'
      case 'charging': return 'text-yellow-500'
      case 'maintenance': return 'text-orange-500'
      case 'offline': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'optimization': return 'text-blue-500'
      case 'safety': return 'text-green-500'
      case 'efficiency': return 'text-purple-500'
      case 'prediction': return 'text-orange-500'
      default: return 'text-gray-500'
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'optimization': return '⚡'
      case 'safety': return '🛡️'
      case 'efficiency': return '📊'
      case 'prediction': return '🔮'
      default: return '💡'
    }
  }

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'passenger': return '🚗'
      case 'delivery': return '🚚'
      case 'logistics': return '🚛'
      case 'emergency': return '🚑'
      case 'agricultural': return '🚜'
      default: return '🚙'
    }
  }

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI Autonomous Vehicle & Transportation - Zion</title>
        <meta name="description" content="AI-powered autonomous vehicle management, intelligent transportation systems, and logistics optimization" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/marketplace" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/ai-immersive-marketplace" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Immersive
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Autonomous Vehicle</span> & Transportation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionizing transportation with AI-powered autonomous vehicles, intelligent routing, and logistics optimization
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '🏠' },
            { id: 'vehicles', label: 'Vehicles', icon: '🚗' },
            { id: 'routes', label: 'Routes', icon: '🗺️' },
            { id: 'logistics', label: 'Logistics', icon: '📦' },
            { id: 'traffic', label: 'Traffic', icon: '🚦' },
            { id: 'insights', label: 'AI Insights', icon: '🤖' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all duration-300 ${
                selectedView === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-32">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading autonomous vehicle data...</p>
          </div>
        ) : (
          <>
            {/* Overview */}
            {selectedView === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">🚗</div>
                  <div className="text-2xl font-bold text-white">{vehicles.length}</div>
                  <div className="text-gray-400">Autonomous Vehicles</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">🗺️</div>
                  <div className="text-2xl font-bold text-white">{routes.length}</div>
                  <div className="text-gray-400">Optimized Routes</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">📦</div>
                  <div className="text-2xl font-bold text-white">{logistics.length}</div>
                  <div className="text-gray-400">Logistics Operations</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="text-2xl font-bold text-white">{insights.length}</div>
                  <div className="text-gray-400">AI Insights</div>
                </div>
              </div>
            )}

            {/* Vehicles */}
            {selectedView === 'vehicles' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Autonomous Vehicle Fleet</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="text-3xl">{getVehicleIcon(vehicle.type)}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white">{vehicle.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{vehicle.type} Vehicle</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${getStatusColor(vehicle.status)}`}>
                            {vehicle.status.replace('-', ' ')}
                          </div>
                          <div className="text-gray-400 text-sm">{vehicle.battery}% Battery</div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Location:</span>
                            <div className="text-white">{vehicle.location.address}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Speed:</span>
                            <div className="text-white">{vehicle.speed} mph</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">AI Score:</span>
                            <div className="text-white">{vehicle.aiScore}/10</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Safety:</span>
                            <div className="text-white">{vehicle.safetyScore}/10</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Efficiency:</span>
                            <div className="text-white">{vehicle.efficiencyScore}/10</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3">
                          <div className="text-sm text-gray-400">Destination</div>
                          <div className="text-white font-medium">{vehicle.destination}</div>
                          <div className="text-blue-400 text-sm">ETA: {vehicle.eta}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {vehicle.features.slice(0, 2).map((feature) => (
                          <span key={feature} className="px-4 py-3 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center space-x-2">
                          <span className={vehicle.sensors.lidar ? 'text-green-400' : 'text-red-400'}>●</span>
                          <span className="text-gray-300">LiDAR</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={vehicle.sensors.radar ? 'text-green-400' : 'text-red-400'}>●</span>
                          <span className="text-gray-300">Radar</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={vehicle.sensors.cameras ? 'text-green-400' : 'text-red-400'}>●</span>
                          <span className="text-gray-300">Cameras</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={vehicle.sensors.gps ? 'text-green-400' : 'text-red-400'}>●</span>
                          <span className="text-gray-300">GPS</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Routes */}
            {selectedView === 'routes' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">AI-Optimized Transportation Routes</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {routes.map((route) => (
                    <div key={route.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{route.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{route.type} Route</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Traffic</div>
                          <div className={`text-sm font-medium ${
                            route.trafficLevel === 'low' ? 'text-green-400' :
                            route.trafficLevel === 'medium' ? 'text-yellow-400' :
                            route.trafficLevel === 'high' ? 'text-orange-400' : 'text-red-400'
                          }`}>
                            {route.trafficLevel}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Distance:</span>
                            <div className="text-white">{route.distance} miles</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Duration:</span>
                            <div className="text-white">{route.duration} min</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3">
                          <div className="text-sm text-gray-400">AI Optimization</div>
                          <div className="text-white font-medium">Score: {route.aiOptimization.score}/10</div>
                          <div className="text-blue-400 text-sm">
                            {route.aiOptimization.timeSavings}% time savings
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium text-gray-400">Route:</div>
                        <div className="text-sm text-gray-300">
                          {route.startLocation} → {route.endLocation}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium text-gray-400">Recommendations:</div>
                        {route.aiOptimization.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span className="text-gray-300">{rec}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover to-cyan-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                        🗺️ View Route
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Logistics */}
            {selectedView === 'logistics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Logistics Operations</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {logistics.map((operation) => (
                    <div key={operation.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{operation.title}</h3>
                          <p className="text-gray-300 text-sm capitalize">{operation.type} Operation</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${
                            operation.priority === 'urgent' ? 'text-red-400' :
                            operation.priority === 'high' ? 'text-orange-400' :
                            operation.priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {operation.priority} Priority
                          </div>
                          <div className="text-gray-400 text-sm capitalize">{operation.status}</div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Cargo Type:</span>
                            <div className="text-white">{operation.cargo.type}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Weight:</span>
                            <div className="text-white">{operation.cargo.weight} kg</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3">
                          <div className="text-sm text-gray-400">AI Optimization</div>
                          <div className="text-white font-medium">Efficiency: {operation.aiOptimization.efficiencyScore}/10</div>
                          <div className="text-blue-400 text-sm">
                            {operation.aiOptimization.costSavings}% cost savings
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium text-gray-400">Recommendations:</div>
                        {operation.aiOptimization.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span className="text-gray-300">{rec}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover to-cyan-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                        📦 Track Operation
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Traffic Analysis */}
            {selectedView === 'traffic' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Real-time Traffic Analysis</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {trafficAnalysis.map((analysis) => (
                    <div key={analysis.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{analysis.location}</h3>
                          <p className="text-gray-300 text-sm">{analysis.timestamp}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${
                            analysis.congestionLevel === 'low' ? 'text-green-400' :
                            analysis.congestionLevel === 'medium' ? 'text-yellow-400' :
                            analysis.congestionLevel === 'high' ? 'text-orange-400' : 'text-red-400'
                          }`}>
                            {analysis.congestionLevel} congestion
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Density:</span>
                            <div className="text-white">{analysis.trafficDensity}%</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Avg Speed:</span>
                            <div className="text-white">{analysis.averageSpeed} mph</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3">
                          <div className="text-sm text-gray-400">AI Predictions</div>
                          <div className="text-white text-sm">{analysis.aiPrediction.nextHour}</div>
                          <div className="text-blue-400 text-sm">{analysis.aiPrediction.nextDay}</div>
                        </div>
                      </div>

                      {analysis.incidents.length > 0 && (
                        <div className="space-y-2 mb-4">
                          <div className="text-sm font-medium text-gray-400">Incidents:</div>
                          {analysis.incidents.map((incident, index) => (
                            <div key={index} className="bg-red-500/10 rounded-lg p-2">
                              <div className="flex justify-between items-start">
                                <div className="text-sm">
                                  <div className="text-white font-medium">{incident.type}</div>
                                  <div className="text-gray-300 text-xs">{incident.description}</div>
                                </div>
                                <div className={`text-xs px-4 py-3 rounded ${
                                  incident.severity === 'high' ? 'bg-red-500/20 text-red-300' :
                                  incident.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                  'bg-green-500/20 text-green-300'
                                }`}>
                                  {incident.severity}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium text-gray-400">Recommendations:</div>
                        {analysis.aiPrediction.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span className="text-gray-300">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Insights */}
            {selectedView === 'insights' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">AI-Powered Insights</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {insights.map((insight, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="text-2xl">{getInsightIcon(insight.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                            <span className={`px-4 py-3 rounded-full text-xs ${getInsightColor(insight.type).replace('text-', 'bg-')} ${getInsightColor(insight.type)}`}>
                              {insight.type}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-400">Confidence:</span>
                            <span className="text-white">{insight.confidence}%</span>
                            <span className={`px-4 py-3 rounded text-xs ${
                              insight.impact === 'positive' ? 'bg-green-500/20 text-green-300' :
                              insight.impact === 'negative' ? 'bg-red-500/20 text-red-300' :
                              'bg-gray-500/20 text-gray-300'
                            }`}>
                              {insight.impact}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-400">Action Items:</div>
                        {insight.actionItems.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIAutonomousVehicleTransportationPage 