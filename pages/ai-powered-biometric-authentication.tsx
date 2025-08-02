import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface BiometricAuthentication {
  id: string;
  name: string;
  description: string;
  type: 'facial_recognition' | 'fingerprint_scanning' | 'voice_recognition' | 'iris_scanning' | 'gait_analysis' | 'behavioral_biometrics';
  status: 'active' | 'inactive' | 'training' | 'error' | 'offline';
  accuracy: number;
  falsePositiveRate: number;
  processingTime: number;
  aiAnalysis: BiometricAnalysis;
}

interface BiometricAnalysis {
  id: string;
  securityScore: number;
  accuracyScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface FacialRecognition {
  id: string;
  title: string;
  description: string;
  type: 'face_detection' | 'face_verification' | 'face_identification' | 'emotion_recognition' | 'age_estimation' | 'gender_detection';
  status: 'active' | 'inactive' | 'training' | 'error' | 'offline';
  confidence: number;
  livenessScore: number;
  aiOptimization: FacialOptimization;
}

interface FacialOptimization {
  id: string;
  recognitionScore: number;
  livenessScore: number;
  antiSpoofingScore: number;
  recommendations: string[];
}

interface FingerprintScanning {
  id: string;
  name: string;
  description: string;
  type: 'optical_scanning' | 'capacitive_scanning' | 'ultrasonic_scanning' | 'thermal_scanning' | 'pressure_scanning' | 'multispectral_scanning';
  status: 'active' | 'inactive' | 'training' | 'error' | 'offline';
  minutiaePoints: number;
  qualityScore: number;
  aiAnalysis: FingerprintAnalysis;
}

interface FingerprintAnalysis {
  id: string;
  qualityScore: number;
  matchingScore: number;
  uniquenessScore: number;
  recommendations: string[];
}

interface VoiceRecognition {
  id: string;
  voiceId: string;
  title: string;
  description: string;
  type: 'speaker_identification' | 'speaker_verification' | 'voice_biometrics' | 'emotion_detection' | 'language_detection' | 'accent_recognition';
  status: 'active' | 'inactive' | 'training' | 'error' | 'offline';
  samples: number;
  confidence: number;
  aiAnalysis: VoiceAnalysis;
}

interface VoiceAnalysis {
  id: string;
  voiceScore: number;
  clarityScore: number;
  uniquenessScore: number;
  recommendations: string[];
}

interface IrisScanning {
  id: string;
  irisId: string;
  title: string;
  description: string;
  type: 'iris_detection' | 'iris_verification' | 'iris_identification' | 'pupil_tracking' | 'eye_movement' | 'retinal_scanning';
  status: 'active' | 'inactive' | 'training' | 'error' | 'offline';
  resolution: number;
  accuracy: number;
  aiAnalysis: IrisAnalysis;
}

interface IrisAnalysis {
  id: string;
  irisScore: number;
  clarityScore: number;
  uniquenessScore: number;
  recommendations: string[];
}

interface BiometricSecurityManagement {
  id: string;
  systemId: string;
  title: string;
  description: string;
  category: 'hardware' | 'software' | 'network' | 'security' | 'performance' | 'maintenance';
  status: 'operational' | 'maintenance' | 'error' | 'offline';
  devices: number;
  securityLevel: number;
  aiAnalysis: SecurityAnalysis;
}

interface SecurityAnalysis {
  id: string;
  securityScore: number;
  performanceScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface BiometricAuthenticationAnalytics {
  totalBiometricDevices: number;
  activeFacialRecognition: number;
  fingerprintScanners: number;
  voiceRecognitionSystems: number;
  irisScanners: number;
  managedSystems: number;
  averageAccuracy: number;
  aiOptimizationScore: number;
  aiInsights: BiometricAuthenticationInsight[];
}

interface BiometricAuthenticationInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredBiometricAuthenticationPage: NextPage = () => {
  const [biometricAuthentication, setBiometricAuthentication] = useState<BiometricAuthentication[]>([])
  const [facialRecognition, setFacialRecognition] = useState<FacialRecognition[]>([])
  const [fingerprintScanning, setFingerprintScanning] = useState<FingerprintScanning[]>([])
  const [voiceRecognition, setVoiceRecognition] = useState<VoiceRecognition[]>([])
  const [irisScanning, setIrisScanning] = useState<IrisScanning[]>([])
  const [biometricSecurityManagement, setBiometricSecurityManagement] = useState<BiometricSecurityManagement[]>([])
  const [analytics, setAnalytics] = useState<BiometricAuthenticationAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'biometric' | 'facial' | 'fingerprint' | 'voice' | 'iris' | 'management' | 'overview'>('biometric')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockBiometricAuthentication: BiometricAuthentication[] = [
    {
      id: '1',
      name: 'Multi-Modal Biometric System',
      description: 'Comprehensive biometric authentication system with multiple modalities',
      type: 'facial_recognition',
      status: 'active',
      accuracy: 98.5,
      falsePositiveRate: 0.1,
      processingTime: 0.8,
      aiAnalysis: {
        id: '1',
        securityScore: 96,
        accuracyScore: 98,
        reliabilityScore: 97,
        recommendations: ['Enhance anti-spoofing measures', 'Optimize processing algorithms']
      }
    }
  ]

  const mockFacialRecognition: FacialRecognition[] = [
    {
      id: '1',
      title: 'Advanced Facial Recognition',
      description: 'High-accuracy facial recognition system with liveness detection',
      type: 'face_verification',
      status: 'active',
      confidence: 99.2,
      livenessScore: 98.8,
      aiOptimization: {
        id: '1',
        recognitionScore: 99,
        livenessScore: 98,
        antiSpoofingScore: 97,
        recommendations: ['Improve lighting conditions', 'Enhance anti-spoofing algorithms']
      }
    }
  ]

  const mockFingerprintScanning: FingerprintScanning[] = [
    {
      id: '1',
      name: 'Ultrasonic Fingerprint Scanner',
      description: 'Advanced ultrasonic fingerprint scanning with high accuracy',
      type: 'ultrasonic_scanning',
      status: 'active',
      minutiaePoints: 45,
      qualityScore: 96.5,
      aiAnalysis: {
        id: '1',
        qualityScore: 96,
        matchingScore: 98,
        uniquenessScore: 97,
        recommendations: ['Optimize sensor sensitivity', 'Enhance image processing']
      }
    }
  ]

  const mockVoiceRecognition: VoiceRecognition[] = [
    {
      id: '1',
      voiceId: 'VR-001',
      title: 'Voice Biometric System',
      description: 'Advanced voice recognition system for speaker identification',
      type: 'speaker_identification',
      status: 'active',
      samples: 150,
      confidence: 95.8,
      aiAnalysis: {
        id: '1',
        voiceScore: 95,
        clarityScore: 94,
        uniquenessScore: 96,
        recommendations: ['Improve noise reduction', 'Enhance voice modeling']
      }
    }
  ]

  const mockIrisScanning: IrisScanning[] = [
    {
      id: '1',
      irisId: 'IS-001',
      title: 'High-Resolution Iris Scanner',
      description: 'Advanced iris scanning system with high accuracy',
      type: 'iris_verification',
      status: 'active',
      resolution: 2048,
      accuracy: 99.9,
      aiAnalysis: {
        id: '1',
        irisScore: 99,
        clarityScore: 98,
        uniquenessScore: 99,
        recommendations: ['Optimize lighting conditions', 'Enhance iris segmentation']
      }
    }
  ]

  const mockBiometricSecurityManagement: BiometricSecurityManagement[] = [
    {
      id: '1',
      systemId: 'BSM-001',
      title: 'Biometric Security Management',
      description: 'Comprehensive management of biometric security infrastructure',
      category: 'security',
      status: 'operational',
      devices: 24,
      securityLevel: 99.5,
      aiAnalysis: {
        id: '1',
        securityScore: 98,
        performanceScore: 96,
        reliabilityScore: 97,
        recommendations: ['Monitor device health', 'Optimize security protocols']
      }
    }
  ]

  const mockAnalytics: BiometricAuthenticationAnalytics = {
    totalBiometricDevices: 89,
    activeFacialRecognition: 32,
    fingerprintScanners: 28,
    voiceRecognitionSystems: 15,
    irisScanners: 14,
    managedSystems: 6,
    averageAccuracy: 98.2,
    aiOptimizationScore: 97,
    aiInsights: [
      {
        id: '1',
        title: 'High Biometric Authentication Accuracy',
        description: 'AI-powered biometric authentication system shows 98.2% accuracy score with optimized security measures',
        impact: 'positive',
        confidence: 0.97,
        recommendations: ['Continue AI monitoring', 'Expand biometric capabilities']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setBiometricAuthentication(mockBiometricAuthentication)
      setFacialRecognition(mockFacialRecognition)
      setFingerprintScanning(mockFingerprintScanning)
      setVoiceRecognition(mockVoiceRecognition)
      setIrisScanning(mockIrisScanning)
      setBiometricSecurityManagement(mockBiometricSecurityManagement)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockBiometricAuthentication, mockFacialRecognition, mockFingerprintScanning, mockVoiceRecognition, mockIrisScanning, mockBiometricSecurityManagement, mockAnalytics])

  const filteredBiometricDevices = useMemo(() => {
    let filtered = biometricAuthentication
    if (selectedType !== 'all') {
      filtered = filtered.filter(device => device.type === selectedType)
    }
    return filtered
  }, [biometricAuthentication, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'inactive': return 'bg-gray-500/20 text-gray-300'
      case 'training': return 'bg-blue-500/20 text-blue-300'
      case 'error': return 'bg-red-500/20 text-red-300'
      case 'offline': return 'bg-gray-500/20 text-gray-300'
      case 'operational': return 'bg-green-500/20 text-green-300'
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'facial_recognition': return 'bg-blue-500/20 text-blue-300'
      case 'fingerprint_scanning': return 'bg-green-500/20 text-green-300'
      case 'voice_recognition': return 'bg-purple-500/20 text-purple-300'
      case 'iris_scanning': return 'bg-orange-500/20 text-orange-300'
      case 'gait_analysis': return 'bg-red-500/20 text-red-300'
      case 'behavioral_biometrics': return 'bg-yellow-500/20 text-yellow-300'
      case 'face_detection': return 'bg-blue-500/20 text-blue-300'
      case 'face_verification': return 'bg-green-500/20 text-green-300'
      case 'face_identification': return 'bg-purple-500/20 text-purple-300'
      case 'emotion_recognition': return 'bg-orange-500/20 text-orange-300'
      case 'age_estimation': return 'bg-red-500/20 text-red-300'
      case 'gender_detection': return 'bg-yellow-500/20 text-yellow-300'
      case 'optical_scanning': return 'bg-blue-500/20 text-blue-300'
      case 'capacitive_scanning': return 'bg-green-500/20 text-green-300'
      case 'ultrasonic_scanning': return 'bg-purple-500/20 text-purple-300'
      case 'thermal_scanning': return 'bg-orange-500/20 text-orange-300'
      case 'pressure_scanning': return 'bg-red-500/20 text-red-300'
      case 'multispectral_scanning': return 'bg-yellow-500/20 text-yellow-300'
      case 'speaker_identification': return 'bg-blue-500/20 text-blue-300'
      case 'speaker_verification': return 'bg-green-500/20 text-green-300'
      case 'voice_biometrics': return 'bg-purple-500/20 text-purple-300'
      case 'emotion_detection': return 'bg-orange-500/20 text-orange-300'
      case 'language_detection': return 'bg-red-500/20 text-red-300'
      case 'accent_recognition': return 'bg-yellow-500/20 text-yellow-300'
      case 'iris_detection': return 'bg-blue-500/20 text-blue-300'
      case 'iris_verification': return 'bg-green-500/20 text-green-300'
      case 'iris_identification': return 'bg-purple-500/20 text-purple-300'
      case 'pupil_tracking': return 'bg-orange-500/20 text-orange-300'
      case 'eye_movement': return 'bg-red-500/20 text-red-300'
      case 'retinal_scanning': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Head>
        <title>AI-Powered Biometric Authentication & Facial Recognition System | Zion Tech Group</title>
        <meta name="description" content="Biometric authentication, facial recognition, fingerprint scanning, voice recognition, iris scanning, and automated biometric security management powered by AI." />
        <meta name="keywords" content="biometric authentication, facial recognition, fingerprint scanning, voice recognition, iris scanning, AI biometric" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Biometric Authentication & Facial Recognition System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Biometric authentication, facial recognition, fingerprint scanning, 
              voice recognition, iris scanning, and automated biometric security management powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🔐 Biometric Authentication</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">👤 Facial Recognition</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">👆 Fingerprint Scanning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('biometric')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'biometric'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Biometric Authentication ({biometricAuthentication.length})
              </button>
              <button
                onClick={() => setActiveTab('facial')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'facial'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Facial Recognition ({facialRecognition.length})
              </button>
              <button
                onClick={() => setActiveTab('fingerprint')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'fingerprint'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Fingerprint Scanning ({fingerprintScanning.length})
              </button>
              <button
                onClick={() => setActiveTab('voice')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'voice'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Voice Recognition ({voiceRecognition.length})
              </button>
              <button
                onClick={() => setActiveTab('iris')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'iris'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Iris Scanning ({irisScanning.length})
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'management'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Management ({biometricSecurityManagement.length})
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Overview
              </button>
            </div>

            {/* Biometric Authentication Tab */}
            {activeTab === 'biometric' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="facial_recognition" className="bg-slate-800">Facial Recognition</option>
                        <option value="fingerprint_scanning" className="bg-slate-800">Fingerprint Scanning</option>
                        <option value="voice_recognition" className="bg-slate-800">Voice Recognition</option>
                        <option value="iris_scanning" className="bg-slate-800">Iris Scanning</option>
                        <option value="gait_analysis" className="bg-slate-800">Gait Analysis</option>
                        <option value="behavioral_biometrics" className="bg-slate-800">Behavioral Biometrics</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Biometric Device
                    </button>
                  </div>
                </div>

                {/* Biometric Devices Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredBiometricDevices.map((device) => (
                    <div key={device.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{device.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{device.type.replace('_', ' ')} Device</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(device.status)}`}>
                            {device.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(device.type)}`}>
                              {device.accuracy}% accuracy
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{device.description}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Accuracy</div>
                          <div className="text-2xl font-bold text-white">{device.accuracy}%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">False Positive</div>
                          <div className="text-2xl font-bold text-white">{device.falsePositiveRate}%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Processing</div>
                          <div className="text-2xl font-bold text-white">{device.processingTime}s</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Security</div>
                              <div className="text-white font-semibold">{device.aiAnalysis.securityScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Accuracy</div>
                              <div className="text-white font-semibold">{device.aiAnalysis.accuracyScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Reliability</div>
                              <div className="text-white font-semibold">{device.aiAnalysis.reliabilityScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {device.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
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
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalBiometricDevices.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Biometric Devices</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.averageAccuracy.toLocaleString()}%</div>
                    <div className="text-gray-400 text-sm">Avg Accuracy</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeFacialRecognition.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Facial Recognition</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure with Biometric Authentication?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your biometric authentication journey with our AI-powered system 
              and ensure comprehensive biometric security management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105">
                Start Securing
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

export default AIPoweredBiometricAuthenticationPage 