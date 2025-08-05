import type { NextPage }  from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';
import { useState, useEffect, useRef }  from 'react';
import Link  from 'next/link';

interface NeuralSignal {
  id: string
  type: 'alpha' | 'beta' | 'theta' | 'delta' | 'gamma'
  frequency: number
  amplitude: number
  timestamp: string
  quality: number
  location: string
}

interface BrainActivity {
  region: string
  activity: number
  status: 'active' | 'inactive' | 'overloaded'
  function: string
  connectivity: number
}

interface CognitiveTask {
  id: string
  name: string
  type: 'memory' | 'attention' | 'creativity' | 'problem-solving' | 'learning'
  difficulty: number
  duration: number
  completion: number
  brainRegions: string[]
  performance: number
}

interface NeuralDevice {
  id: string
  name: string
  type: 'EEG' | 'ECoG' | 'fNIRS' | 'MEG' | 'invasive'
  status: 'connected' | 'disconnected' | 'calibrating' | 'error'
  battery: number
  signalQuality: number
  lastCalibration: string
  firmware: string
}

interface BCIApplication {
  id: string
  name: string
  category: 'communication' | 'control' | 'entertainment' | 'therapy' | 'research'
  description: string
  status: 'active' | 'paused' | 'stopped'
  brainRegions: string[]
  accuracy: number
  latency: number
  userRating: number
}

interface NeuralTraining {
  id: string
  name: string
  type: 'focus' | 'relaxation' | 'creativity' | 'memory' | 'motor-skills'
  duration: number
  progress: number
  targetRegions: string[]
  exercises: {
    name: string
    description: string
    duration: number
    difficulty: number
  }[]
}

const AIPoweredNeuralInterfaceBCISystem: NextPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isConnected, setIsConnected] = useState(false)
  const [isCalibrating, setIsCalibrating] = useState(false)
  const [currentSession, setCurrentSession] = useState<any>(null)
  const [neuralSignals, setNeuralSignals] = useState<NeuralSignal[]>([])
  const [brainActivity, setBrainActivity] = useState<BrainActivity[]>([])
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [sessionData, setSessionData] = useState<any>(null)
  const chartRef = useRef<HTMLDivElement>(null)

  // Mock data for demonstration
  const mockNeuralSignals: NeuralSignal[] = [
    {
      id: 'sig-001',
      type: 'alpha',
      frequency: 10.5,
      amplitude: 45.2,
      timestamp: '2025-08-03T19:00:00Z',
      quality: 92,
      location: 'occipital'
    },
    {
      id: 'sig-002',
      type: 'beta',
      frequency: 18.3,
      amplitude: 32.1,
      timestamp: '2025-08-03T19:00:01Z',
      quality: 88,
      location: 'frontal'
    },
    {
      id: 'sig-003',
      type: 'theta',
      frequency: 6.2,
      amplitude: 28.7,
      timestamp: '2025-08-03T19:00:02Z',
      quality: 85,
      location: 'temporal'
    }
  ]

  const mockBrainActivity: BrainActivity[] = [
    {
      region: 'Prefrontal Cortex',
      activity: 78,
      status: 'active',
      function: 'Decision Making',
      connectivity: 85
    },
    {
      region: 'Occipital Lobe',
      activity: 92,
      status: 'active',
      function: 'Visual Processing',
      connectivity: 91
    },
    {
      region: 'Temporal Lobe',
      activity: 65,
      status: 'active',
      function: 'Memory & Language',
      connectivity: 72
    },
    {
      region: 'Parietal Lobe',
      activity: 71,
      status: 'active',
      function: 'Spatial Awareness',
      connectivity: 78
    },
    {
      region: 'Motor Cortex',
      activity: 45,
      status: 'inactive',
      function: 'Movement Control',
      connectivity: 52
    }
  ]

  const mockCognitiveTasks: CognitiveTask[] = [
    {
      id: 'task-001',
      name: 'Memory Pattern Recognition',
      type: 'memory',
      difficulty: 7,
      duration: 300,
      completion: 85,
      brainRegions: ['Hippocampus', 'Prefrontal Cortex'],
      performance: 92
    },
    {
      id: 'task-002',
      name: 'Focus Enhancement Training',
      type: 'attention',
      difficulty: 5,
      duration: 180,
      completion: 100,
      brainRegions: ['Frontal Lobe', 'Parietal Lobe'],
      performance: 88
    },
    {
      id: 'task-003',
      name: 'Creative Problem Solving',
      type: 'creativity',
      difficulty: 8,
      duration: 600,
      completion: 60,
      brainRegions: ['Right Hemisphere', 'Default Network'],
      performance: 76
    }
  ]

  const mockNeuralDevices: NeuralDevice[] = [
    {
      id: 'device-001',
      name: 'NeuroLink Pro EEG',
      type: 'EEG',
      status: 'connected',
      battery: 87,
      signalQuality: 94,
      lastCalibration: '2025-08-03T18:30:00Z',
      firmware: 'v2.1.4'
    },
    {
      id: 'device-002',
      name: 'BrainGate ECoG Array',
      type: 'ECoG',
      status: 'calibrating',
      battery: 65,
      signalQuality: 89,
      lastCalibration: '2025-08-03T18:45:00Z',
      firmware: 'v1.8.2'
    },
    {
      id: 'device-003',
      name: 'MindReader fNIRS',
      type: 'fNIRS',
      status: 'connected',
      battery: 92,
      signalQuality: 91,
      lastCalibration: '2025-08-03T18:15:00Z',
      firmware: 'v3.0.1'
    }
  ]

  const mockBCIApplications: BCIApplication[] = [
    {
      id: 'app-001',
      name: 'Thought-to-Text Converter',
      category: 'communication',
      description: 'Convert neural signals into text for communication',
      status: 'active',
      brainRegions: ['Broca\'s Area', 'Wernicke\'s Area'],
      accuracy: 94,
      latency: 150,
      userRating: 4.8
    },
    {
      id: 'app-002',
      name: 'Mind-Controlled Cursor',
      category: 'control',
      description: 'Control computer cursor with thought patterns',
      status: 'active',
      brainRegions: ['Motor Cortex', 'Parietal Lobe'],
      accuracy: 89,
      latency: 200,
      userRating: 4.6
    },
    {
      id: 'app-003',
      name: 'Neural Gaming Interface',
      category: 'entertainment',
      description: 'Gaming control through brain-computer interface',
      status: 'paused',
      brainRegions: ['Visual Cortex', 'Motor Cortex'],
      accuracy: 82,
      latency: 300,
      userRating: 4.4
    }
  ]

  const mockNeuralTraining: NeuralTraining[] = [
    {
      id: 'training-001',
      name: 'Focus Enhancement Program',
      type: 'focus',
      duration: 1200,
      progress: 75,
      targetRegions: ['Frontal Lobe', 'Parietal Lobe'],
      exercises: [
        {
          name: 'Concentration Meditation',
          description: 'Focus on a single point while monitoring brain activity',
          duration: 300,
          difficulty: 5
        },
        {
          name: 'Attention Switching',
          description: 'Rapidly switch attention between different stimuli',
          duration: 180,
          difficulty: 7
        }
      ]
    },
    {
      id: 'training-002',
      name: 'Memory Enhancement Course',
      type: 'memory',
      duration: 1800,
      progress: 60,
      targetRegions: ['Hippocampus', 'Prefrontal Cortex'],
      exercises: [
        {
          name: 'Pattern Recognition',
          description: 'Identify and remember complex patterns',
          duration: 240,
          difficulty: 6
        },
        {
          name: 'Spatial Memory Training',
          description: 'Navigate virtual environments using memory',
          duration: 360,
          difficulty: 8
        }
      ]
    }
  ]

  useEffect(() => {
    // Initialize neural interface
    const initializeNeuralInterface = async () => {
      setIsCalibrating(true)
      try {
        // Simulate device connection and calibration
        await new Promise(resolve => setTimeout(resolve, 3000))
        setIsConnected(true)
        setSelectedDevice('device-001')
        setNeuralSignals(mockNeuralSignals)
        setBrainActivity(mockBrainActivity)
      } catch (error) {
        console.error('Error initializing neural interface:', error)
      } finally {
        setIsCalibrating(false)
      }
    }

    initializeNeuralInterface()
  }, [])

  const startRecording = async () => {
    setIsRecording(true)
    try {
      console.log('Starting neural signal recording...')
      // Simulate real-time signal recording
      const interval = setInterval(() => {
        const newSignal: NeuralSignal = {
          id: `sig-${Date.now()}`,
          type: ['alpha', 'beta', 'theta', 'delta', 'gamma'][Math.floor(Math.random() * 5)] as any,
          frequency: Math.random() * 30 + 1,
          amplitude: Math.random() * 100,
          timestamp: new Date().toISOString(),
          quality: Math.random() * 20 + 80,
          location: ['frontal', 'occipital', 'temporal', 'parietal'][Math.floor(Math.random() * 4)]
        }
        setNeuralSignals(prev => [...prev.slice(-9), newSignal])
      }, 1000)

      return (
    <ModernLayout>
      ) => clearInterval(interval)
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const stopRecording = () => {
    setIsRecording(false)
    console.log('Neural signal recording stopped')
  }

  const calibrateDevice = async (deviceId: string) => {
    setIsCalibrating(true)
    try {
      console.log(`Calibrating device ${deviceId}...`)
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Device calibration completed')
    } catch (error) {
      console.error('Error calibrating device:', error)
    } finally {
      setIsCalibrating(false)
    }
  }

  const startCognitiveTask = async (taskId: string) => {
    try {
      console.log(`Starting cognitive task ${taskId}...`)
      setCurrentSession({ taskId, startTime: new Date() })
    } catch (error) {
      console.error('Error starting cognitive task:', error)
    }
  }

  const getSignalTypeColor = (type: string) => {
    switch (type) {
      case 'alpha': return 'text-blue-500'
      case 'beta': return 'text-green-500'
      case 'theta': return 'text-yellow-500'
      case 'delta': return 'text-purple-500'
      case 'gamma': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getActivityStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500'
      case 'inactive': return 'text-gray-500'
      case 'overloaded': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getDeviceStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-500'
      case 'disconnected': return 'text-red-500'
      case 'calibrating': return 'text-yellow-500'
      case 'error': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Neural Interface & BCI System | Zion Tech</title>
        <meta name="description" content="Experience direct brain-computer interface with AI-powered neural interface system. Cognitive enhancement, thought control, and brain-computer communication." />
        <meta name="keywords" content="neural interface, brain-computer interface, BCI, cognitive enhancement, brain signals, EEG, neural technology, mind control" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🧠</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Neural Interface & BCI System</h1>
                  <p className="text-gray-300">Brain-Computer Interface Technology</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsConnected(!isConnected)}
                disabled={isCalibrating}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  isConnected 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                } disabled:opacity-50`}
              >
                {isCalibrating ? 'Calibrating...' : isConnected ? 'Connected' : 'Connect Device'}
              </button>
              
              {isConnected && (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse md animate-pulse"></div>
                  <span className="text-green-400 text-sm">Neural Interface Active</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
          
          {/* Tab Navigation */}
          <div className="mb-8">
            <nav className="flex space-x-1 bg-gray-800/50 rounded-lg p-1">
              {[
                { id: 'dashboard', label: 'Neural Dashboard', icon: '📊' },
                { id: 'signals', label: 'Brain Signals', icon: '⚡' },
                { id: 'activity', label: 'Brain Activity', icon: '🧠' },
                { id: 'tasks', label: 'Cognitive Tasks', icon: '🎯' },
                { id: 'devices', label: 'Neural Devices', icon: '🔌' },
                { id: 'applications', label: 'BCI Applications', icon: '💻' },
                { id: 'training', label: 'Neural Training', icon: '🏋️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            
            {/* Neural Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg grid-cols-3 gap-6">
                {/* Connection Status */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">🔗</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Connection Status</h3>
                      <p className="text-gray-400 text-sm">Neural Interface</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Status</span>
                      <span className={`${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                        {isConnected ? 'Connected' : 'Disconnected'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Signal Quality</span>
                      <span className="text-white">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Latency</span>
                      <span className="text-white">150ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Active Channels</span>
                      <span className="text-white">64</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Signals */}
                <div className="lg col-span-2 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Real-time Neural Signals</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={isRecording ? stopRecording : startRecording}
                        className={`px-3 py-3 rounded text-sm font-medium ${
                          isRecording 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {isRecording ? 'Stop' : 'Record'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {neuralSignals.slice(-5).map((signal) => (
                      <div key={signal.id} className="flex items-center justify-between p-2 bg-gray-700/50 rounded">
                        <div className="flex items-center space-x-3">
                          <span className={`text-sm font-medium ${getSignalTypeColor(signal.type)}`}>
                            {signal.type.toUpperCase()}
                          </span>
                          <span className="text-gray-300 text-sm">{signal.location}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm">{signal.frequency.toFixed(1)} Hz</div>
                          <div className="text-gray-400 text-xs">{signal.amplitude.toFixed(1)} μV</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="lg col-span-3 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md grid-cols-4 gap-4">
                    <button className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-white hover:from-purple-700 hover to-purple-800 transition-all duration-200">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-semibold">Start Task</div>
                    </button>
                    <button className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white hover:from-blue-700 hover to-blue-800 transition-all duration-200">
                      <div className="text-2xl mb-2">🔌</div>
                      <div className="font-semibold">Calibrate</div>
                    </button>
                    <button className="p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white hover:from-green-700 hover to-green-800 transition-all duration-200">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="font-semibold">Analytics</div>
                    </button>
                    <button className="p-4 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg text-white hover:from-orange-700 hover to-orange-800 transition-all duration-200">
                      <div className="text-2xl mb-2">🏋️</div>
                      <div className="font-semibold">Training</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Brain Signals */}
            {activeTab === 'signals' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Neural Signal Analysis</h2>
                  <div className="flex space-x-2">
                    <button className="px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover to-pink-700 transition-all duration-200">
                      Export Data
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
                  {neuralSignals.map((signal) => (
                    <div key={signal.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            signal.type === 'alpha' ? 'bg-blue-500' :
                            signal.type === 'beta' ? 'bg-green-500' :
                            signal.type === 'theta' ? 'bg-yellow-500' :
                            signal.type === 'delta' ? 'bg-purple-500' : 'bg-red-500'
                          }`}>
                            <span className="text-white text-sm">⚡</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{signal.type.toUpperCase()} Wave</h3>
                            <p className="text-gray-400 text-sm">{signal.location}</p>
                          </div>
                        </div>
                        <div className={`px-4 py-3 rounded text-xs font-medium ${
                          signal.quality > 90 ? 'bg-green-600 text-white' :
                          signal.quality > 80 ? 'bg-yellow-1200 text-white' : 'bg-red-600 text-white'
                        }`}>
                          {signal.quality}% Quality
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Frequency</span>
                          <span className="text-white">{signal.frequency.toFixed(1)} Hz</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Amplitude</span>
                          <span className="text-white">{signal.amplitude.toFixed(1)} μV</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Location</span>
                          <span className="text-white capitalize">{signal.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Timestamp</span>
                          <span className="text-white text-sm">{new Date(signal.timestamp).toLocaleTimeString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Brain Activity */}
            {activeTab === 'activity' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Brain Activity Map</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
                  {brainActivity.map((activity) => (
                    <div key={activity.region} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{activity.region}</h3>
                        <div className={`px-4 py-3 rounded text-xs font-medium ${getActivityStatusColor(activity.status)}`}>
                          {activity.status}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Activity Level</span>
                          <span className="text-white">{activity.activity}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              activity.activity > 80 ? 'bg-green-500' :
                              activity.activity > 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${activity.activity}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Function</span>
                          <span className="text-white text-sm">{activity.function}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Connectivity</span>
                          <span className="text-white">{activity.connectivity}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cognitive Tasks */}
            {activeTab === 'tasks' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Cognitive Enhancement Tasks</h2>
                  <button className="px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover to-pink-700 transition-all duration-200">
                    Create Task
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
                  {mockCognitiveTasks.map((task) => (
                    <div key={task.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{task.name}</h3>
                          <p className="text-gray-400 text-sm capitalize">{task.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{task.performance}%</div>
                          <div className="text-gray-400 text-sm">Performance</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Difficulty</span>
                          <span className="text-white">{task.difficulty}/10</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Duration</span>
                          <span className="text-white">{task.duration}s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Completion</span>
                          <span className="text-white">{task.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${task.completion}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {task.brainRegions.map((region) => (
                            <span key={region} className="px-4 py-3 bg-purple-600 text-white text-xs rounded-full">
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => startCognitiveTask(task.id)}
                        className="w-full mt-4 px-4 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover to-purple-700 transition-all duration-200"
                      >
                        Start Task
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Neural Devices */}
            {activeTab === 'devices' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Neural Interface Devices</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
                  {mockNeuralDevices.map((device) => (
                    <div key={device.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg">🔌</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{device.name}</h3>
                            <p className="text-gray-400 text-sm">{device.type}</p>
                          </div>
                        </div>
                        <div className={`px-4 py-3 rounded text-xs font-medium ${getDeviceStatusColor(device.status)}`}>
                          {device.status}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Battery</span>
                          <span className="text-white">{device.battery}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Signal Quality</span>
                          <span className="text-white">{device.signalQuality}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Firmware</span>
                          <span className="text-white text-sm">{device.firmware}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Last Calibration</span>
                          <span className="text-white text-sm">{new Date(device.lastCalibration).toLocaleTimeString()}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <button 
                          onClick={() => calibrateDevice(device.id)}
                          disabled={isCalibrating}
                          className="flex-1 px-3 py-4 bg-yellow-1200 text-white rounded-lg text-sm hover:bg-yellow-700 transition-colors disabled opacity-50"
                        >
                          Calibrate
                        </button>
                        <button className="flex-1 px-3 py-4 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                          Settings
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BCI Applications */}
            {activeTab === 'applications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">BCI Applications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
                  {mockBCIApplications.map((app) => (
                    <div key={app.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{app.name}</h3>
                          <p className="text-gray-400 text-sm capitalize">{app.category}</p>
                        </div>
                        <div className={`px-4 py-3 rounded text-xs font-medium ${
                          app.status === 'active' ? 'bg-green-600 text-white' :
                          app.status === 'paused' ? 'bg-yellow-1200 text-white' : 'bg-red-600 text-white'
                        }`}>
                          {app.status}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">{app.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Accuracy</span>
                          <span className="text-white">{app.accuracy}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Latency</span>
                          <span className="text-white">{app.latency}ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Rating</span>
                          <span className="text-white">{app.userRating}/5</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {app.brainRegions.map((region) => (
                            <span key={region} className="px-4 py-3 bg-blue-600 text-white text-xs rounded-full">
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 px-4 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover to-blue-700 transition-all duration-200">
                        Launch Application
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Neural Training */}
            {activeTab === 'training' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Neural Training Programs</h2>
                
                <div className="grid grid-cols-1 md grid-cols-2 gap-6">
                  {mockNeuralTraining.map((training) => (
                    <div key={training.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{training.name}</h3>
                          <p className="text-gray-400 text-sm capitalize">{training.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{training.progress}%</div>
                          <div className="text-gray-400 text-sm">Progress</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Duration</span>
                          <span className="text-white">{training.duration}s</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${training.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <h4 className="text-white font-semibold mb-3">Exercises</h4>
                        <div className="space-y-2">
                          {training.exercises.map((exercise, index) => (
                            <div key={index} className="p-3 bg-gray-700/50 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-white font-medium">{exercise.name}</h5>
                                <span className="text-gray-400 text-sm">{exercise.duration}s</span>
                              </div>
                              <p className="text-gray-300 text-sm mb-2">{exercise.description}</p>
                              <div className="flex justify-between">
                                <span className="text-gray-400 text-sm">Difficulty: {exercise.difficulty}/10</span>
                                <button className="px-3 py-3 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                                  Start
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {training.targetRegions.map((region) => (
                            <span key={region} className="px-4 py-3 bg-purple-600 text-white text-xs rounded-full">
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              AI-Powered Neural Interface & BCI System | Zion Tech Group
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Direct brain-computer interface, cognitive enhancement, and neural technology
            </p>
          </div>
        </div>
      </footer>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredNeuralInterfaceBCISystem 