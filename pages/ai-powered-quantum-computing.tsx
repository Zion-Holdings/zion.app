import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface QuantumAlgorithm {
  id: string;
  name: string;
  description: string;
  type: 'shor' | 'grover' | 'quantum_fourier' | 'quantum_phase' | 'quantum_walk' | 'variational';
  status: 'running' | 'completed' | 'failed' | 'queued' | 'cancelled';
  qubits: number;
  depth: number;
  executionTime: number;
  aiAnalysis: AlgorithmAnalysis;
}

interface AlgorithmAnalysis {
  id: string;
  efficiencyScore: number;
  accuracyScore: number;
  scalabilityScore: number;
  recommendations: string[];
}

interface QuantumOptimization {
  id: string;
  title: string;
  description: string;
  problemType: 'combinatorial' | 'continuous' | 'discrete' | 'mixed' | 'constrained' | 'multi_objective';
  status: 'active' | 'completed' | 'failed' | 'paused';
  variables: number;
  constraints: number;
  aiOptimization: OptimizationAnalysis;
}

interface OptimizationAnalysis {
  id: string;
  optimizationScore: number;
  convergenceScore: number;
  solutionQuality: number;
  recommendations: string[];
}

interface QuantumSimulation {
  id: string;
  name: string;
  description: string;
  type: 'quantum_circuit' | 'quantum_dynamics' | 'quantum_chemistry' | 'quantum_materials' | 'quantum_optics' | 'quantum_biology';
  status: 'running' | 'completed' | 'failed' | 'scheduled';
  qubits: number;
  iterations: number;
  aiAnalysis: SimulationAnalysis;
}

interface SimulationAnalysis {
  id: string;
  accuracyScore: number;
  fidelityScore: number;
  computationalScore: number;
  recommendations: string[];
}

interface QuantumCryptography {
  id: string;
  protocol: string;
  description: string;
  type: 'qkd' | 'quantum_key' | 'quantum_signature' | 'quantum_commitment' | 'quantum_zero_knowledge' | 'post_quantum';
  status: 'active' | 'inactive' | 'testing' | 'deployed';
  keyLength: number;
  securityLevel: number;
  aiAnalysis: CryptographyAnalysis;
}

interface CryptographyAnalysis {
  id: string;
  securityScore: number;
  efficiencyScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface QuantumMachineLearning {
  id: string;
  model: string;
  description: string;
  type: 'quantum_neural_network' | 'quantum_kernel' | 'quantum_feature_map' | 'quantum_boltzmann' | 'quantum_gan' | 'quantum_autoencoder';
  status: 'training' | 'trained' | 'failed' | 'evaluating';
  parameters: number;
  accuracy: number;
  aiAnalysis: MLAnalysis;
}

interface MLAnalysis {
  id: string;
  learningScore: number;
  generalizationScore: number;
  quantumAdvantage: number;
  recommendations: string[];
}

interface QuantumComputingManagement {
  id: string;
  systemId: string;
  title: string;
  description: string;
  category: 'hardware' | 'software' | 'network' | 'security' | 'performance' | 'maintenance';
  status: 'operational' | 'maintenance' | 'error' | 'offline';
  qubits: number;
  coherenceTime: number;
  aiAnalysis: ManagementAnalysis;
}

interface ManagementAnalysis {
  id: string;
  managementScore: number;
  performanceScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface QuantumComputingAnalytics {
  totalAlgorithms: number;
  activeOptimizations: number;
  runningSimulations: number;
  cryptographyProtocols: number;
  mlModels: number;
  managedSystems: number;
  averageQubits: number;
  aiOptimizationScore: number;
  aiInsights: QuantumComputingInsight[];
}

interface QuantumComputingInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredQuantumComputingPage: NextPage = () => {
  const [quantumAlgorithms, setQuantumAlgorithms] = useState<QuantumAlgorithm[]>([])
  const [quantumOptimizations, setQuantumOptimizations] = useState<QuantumOptimization[]>([])
  const [quantumSimulations, setQuantumSimulations] = useState<QuantumSimulation[]>([])
  const [quantumCryptography, setQuantumCryptography] = useState<QuantumCryptography[]>([])
  const [quantumMachineLearning, setQuantumMachineLearning] = useState<QuantumMachineLearning[]>([])
  const [quantumComputingManagement, setQuantumComputingManagement] = useState<QuantumComputingManagement[]>([])
  const [analytics, setAnalytics] = useState<QuantumComputingAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'algorithms' | 'optimization' | 'simulation' | 'cryptography' | 'machine_learning' | 'management' | 'analytics'>('algorithms')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockQuantumAlgorithms: QuantumAlgorithm[] = [
    {
      id: '1',
      name: 'Shor\'s Algorithm Implementation',
      description: 'Quantum algorithm for integer factorization using quantum Fourier transform',
      type: 'shor',
      status: 'completed',
      qubits: 15,
      depth: 1024,
      executionTime: 45,
      aiAnalysis: {
        id: '1',
        efficiencyScore: 92,
        accuracyScore: 95,
        scalabilityScore: 88,
        recommendations: ['Optimize qubit allocation', 'Reduce circuit depth']
      }
    }
  ]

  const mockQuantumOptimizations: QuantumOptimization[] = [
    {
      id: '1',
      title: 'Portfolio Optimization',
      description: 'Quantum optimization for financial portfolio management',
      problemType: 'combinatorial',
      status: 'active',
      variables: 50,
      constraints: 10,
      aiOptimization: {
        id: '1',
        optimizationScore: 89,
        convergenceScore: 92,
        solutionQuality: 94,
        recommendations: ['Increase iteration count', 'Adjust annealing schedule']
      }
    }
  ]

  const mockQuantumSimulations: QuantumSimulation[] = [
    {
      id: '1',
      name: 'Molecular Energy Simulation',
      description: 'Quantum simulation for molecular energy calculations',
      type: 'quantum_chemistry',
      status: 'running',
      qubits: 20,
      iterations: 1000,
      aiAnalysis: {
        id: '1',
        accuracyScore: 94,
        fidelityScore: 91,
        computationalScore: 87,
        recommendations: ['Improve error correction', 'Optimize measurement strategy']
      }
    }
  ]

  const mockQuantumCryptography: QuantumCryptography[] = [
    {
      id: '1',
      protocol: 'BB84 Quantum Key Distribution',
      description: 'Quantum key distribution protocol for secure communication',
      type: 'qkd',
      status: 'active',
      keyLength: 256,
      securityLevel: 128,
      aiAnalysis: {
        id: '1',
        securityScore: 98,
        efficiencyScore: 92,
        reliabilityScore: 95,
        recommendations: ['Enhance error correction', 'Optimize key generation rate']
      }
    }
  ]

  const mockQuantumMachineLearning: QuantumMachineLearning[] = [
    {
      id: '1',
      model: 'Quantum Neural Network',
      description: 'Quantum neural network for pattern recognition',
      type: 'quantum_neural_network',
      status: 'training',
      parameters: 1024,
      accuracy: 87,
      aiAnalysis: {
        id: '1',
        learningScore: 89,
        generalizationScore: 85,
        quantumAdvantage: 92,
        recommendations: ['Increase training epochs', 'Optimize parameter initialization']
      }
    }
  ]

  const mockQuantumComputingManagement: QuantumComputingManagement[] = [
    {
      id: '1',
      systemId: 'QC-001',
      title: 'Quantum Hardware Management',
      description: 'Comprehensive management of quantum computing hardware',
      category: 'hardware',
      status: 'operational',
      qubits: 50,
      coherenceTime: 100,
      aiAnalysis: {
        id: '1',
        managementScore: 91,
        performanceScore: 88,
        reliabilityScore: 94,
        recommendations: ['Monitor temperature stability', 'Optimize qubit calibration']
      }
    }
  ]

  const mockAnalytics: QuantumComputingAnalytics = {
    totalAlgorithms: 24,
    activeOptimizations: 8,
    runningSimulations: 12,
    cryptographyProtocols: 6,
    mlModels: 15,
    managedSystems: 10,
    averageQubits: 32,
    aiOptimizationScore: 91,
    aiInsights: [
      {
        id: '1',
        title: 'High Quantum Algorithm Efficiency',
        description: 'AI-powered quantum computing system shows 92% efficiency score with optimized algorithms',
        impact: 'positive',
        confidence: 0.93,
        recommendations: ['Continue AI monitoring', 'Expand quantum capabilities']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setQuantumAlgorithms(mockQuantumAlgorithms)
      setQuantumOptimizations(mockQuantumOptimizations)
      setQuantumSimulations(mockQuantumSimulations)
      setQuantumCryptography(mockQuantumCryptography)
      setQuantumMachineLearning(mockQuantumMachineLearning)
      setQuantumComputingManagement(mockQuantumComputingManagement)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockQuantumAlgorithms, mockQuantumOptimizations, mockQuantumSimulations, mockQuantumCryptography, mockQuantumMachineLearning, mockQuantumComputingManagement, mockAnalytics])

  const filteredAlgorithms = useMemo(() => {
    let filtered = quantumAlgorithms
    if (selectedType !== 'all') {
      filtered = filtered.filter(algorithm => algorithm.type === selectedType)
    }
    return filtered
  }, [quantumAlgorithms, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-blue-500/20 text-blue-300'
      case 'completed': return 'bg-green-500/20 text-green-300'
      case 'failed': return 'bg-red-500/20 text-red-300'
      case 'queued': return 'bg-yellow-500/20 text-yellow-300'
      case 'cancelled': return 'bg-gray-500/20 text-gray-300'
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'paused': return 'bg-orange-500/20 text-orange-300'
      case 'training': return 'bg-purple-500/20 text-purple-300'
      case 'trained': return 'bg-green-500/20 text-green-300'
      case 'evaluating': return 'bg-blue-500/20 text-blue-300'
      case 'operational': return 'bg-green-500/20 text-green-300'
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-300'
      case 'error': return 'bg-red-500/20 text-red-300'
      case 'offline': return 'bg-gray-500/20 text-gray-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'shor': return 'bg-purple-500/20 text-purple-300'
      case 'grover': return 'bg-blue-500/20 text-blue-300'
      case 'quantum_fourier': return 'bg-green-500/20 text-green-300'
      case 'quantum_phase': return 'bg-yellow-500/20 text-yellow-300'
      case 'quantum_walk': return 'bg-orange-500/20 text-orange-300'
      case 'variational': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getProblemTypeColor = (problemType: string) => {
    switch (problemType) {
      case 'combinatorial': return 'bg-purple-500/20 text-purple-300'
      case 'continuous': return 'bg-blue-500/20 text-blue-300'
      case 'discrete': return 'bg-green-500/20 text-green-300'
      case 'mixed': return 'bg-yellow-500/20 text-yellow-300'
      case 'constrained': return 'bg-orange-500/20 text-orange-300'
      case 'multi_objective': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Quantum Computing & Optimization System | Zion Tech Group</title>
        <meta name="description" content="Quantum algorithms, quantum optimization, quantum simulation, quantum cryptography, quantum machine learning, and automated quantum computing management powered by AI." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum optimization, quantum simulation, quantum cryptography, AI quantum" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Quantum Computing & Optimization System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Quantum algorithms, quantum optimization, quantum simulation, 
              quantum cryptography, quantum machine learning, and automated quantum computing management powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⚛️ Quantum Algorithms</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🔬 Quantum Simulation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🔐 Quantum Cryptography</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('algorithms')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'algorithms'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Algorithms ({quantumAlgorithms.length})
              </button>
              <button
                onClick={() => setActiveTab('optimization')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'optimization'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Optimization ({quantumOptimizations.length})
              </button>
              <button
                onClick={() => setActiveTab('simulation')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'simulation'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Simulation ({quantumSimulations.length})
              </button>
              <button
                onClick={() => setActiveTab('cryptography')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'cryptography'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Cryptography ({quantumCryptography.length})
              </button>
              <button
                onClick={() => setActiveTab('machine_learning')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'machine_learning'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Machine Learning ({quantumMachineLearning.length})
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'management'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Management ({quantumComputingManagement.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Algorithms Tab */}
            {activeTab === 'algorithms' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="shor" className="bg-slate-800">Shor</option>
                        <option value="grover" className="bg-slate-800">Grover</option>
                        <option value="quantum_fourier" className="bg-slate-800">Quantum Fourier</option>
                        <option value="quantum_phase" className="bg-slate-800">Quantum Phase</option>
                        <option value="quantum_walk" className="bg-slate-800">Quantum Walk</option>
                        <option value="variational" className="bg-slate-800">Variational</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Algorithm
                    </button>
                  </div>
                </div>

                {/* Algorithms Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredAlgorithms.map((algorithm) => (
                    <div key={algorithm.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{algorithm.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{algorithm.type.replace('_', ' ')} Algorithm</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(algorithm.status)}`}>
                            {algorithm.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(algorithm.type)}`}>
                              {algorithm.qubits} qubits
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{algorithm.description}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Depth</div>
                          <div className="text-2xl font-bold text-white">{algorithm.depth}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Execution</div>
                          <div className="text-2xl font-bold text-white">{algorithm.executionTime}s</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Qubits</div>
                          <div className="text-2xl font-bold text-white">{algorithm.qubits}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Efficiency</div>
                              <div className="text-white font-semibold">{algorithm.aiAnalysis.efficiencyScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Accuracy</div>
                              <div className="text-white font-semibold">{algorithm.aiAnalysis.accuracyScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Scalability</div>
                              <div className="text-white font-semibold">{algorithm.aiAnalysis.scalabilityScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {algorithm.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Execute
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && analytics && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalAlgorithms.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Algorithms</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.averageQubits.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Avg Qubits</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.runningSimulations.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Running Simulations</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your quantum computing journey with our AI-powered system 
              and ensure comprehensive quantum optimization and management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Start Computing
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

export default AIPoweredQuantumComputingPage 