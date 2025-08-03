import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface MedicalDiagnostic {
  id: string
  name: string
  type: 'imaging' | 'lab-test' | 'vital-signs' | 'genetic' | 'pathology' | 'cardiology'
  status: 'pending' | 'in-progress' | 'completed' | 'reviewed'
  patientId: string
  patientName: string
  result: string
  confidence: number
  aiAnalysis: DiagnosticAnalysis
}

interface DiagnosticAnalysis {
  accuracy: number
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
  recommendations: string[]
  followUpRequired: boolean
}

interface PatientMonitoring {
  id: string
  patientId: string
  patientName: string
  type: 'vital-signs' | 'cardiac' | 'respiratory' | 'neurological' | 'metabolic'
  status: 'stable' | 'warning' | 'critical' | 'improving'
  currentValues: {
    heartRate: number
    bloodPressure: string
    temperature: number
    oxygenSaturation: number
    respiratoryRate: number
  }
  aiAnalysis: MonitoringAnalysis
}

interface MonitoringAnalysis {
  trend: 'improving' | 'stable' | 'declining' | 'critical'
  riskScore: number
  alerts: string[]
  recommendations: string[]
}

interface HealthcareAnalytics {
  id: string
  name: string
  type: 'patient-outcomes' | 'treatment-effectiveness' | 'resource-utilization' | 'quality-metrics'
  status: 'active' | 'completed' | 'scheduled'
  metrics: {
    totalPatients: number
    successRate: number
    averageRecoveryTime: number
    costSavings: number
  }
  aiAnalysis: AnalyticsAnalysis
}

interface AnalyticsAnalysis {
  insights: string[]
  trends: string[]
  recommendations: string[]
  impactScore: number
}

interface MedicalInsight {
  id: string
  title: string
  description: string
  category: 'diagnostic' | 'treatment' | 'prevention' | 'research'
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number
  recommendations: string[]
}

interface HealthcareData {
  totalPatients: number
  activeDiagnostics: number
  monitoringSystems: number
  analyticsProjects: number
  aiInsights: MedicalInsight[]
}

const AIPoweredHealthcareMedicalDiagnosticsPage: NextPage = () => {
  const [diagnostics, setDiagnostics] = useState<MedicalDiagnostic[]>([])
  const [patientMonitoring, setPatientMonitoring] = useState<PatientMonitoring[]>([])
  const [healthcareAnalytics, setHealthcareAnalytics] = useState<HealthcareAnalytics[]>([])
  const [data, setData] = useState<HealthcareData | null>(null)
  const [selectedView, setSelectedView] = useState<'overview' | 'diagnostics' | 'monitoring' | 'analytics' | 'insights'>('overview')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const mockDiagnostics: MedicalDiagnostic[] = [
    {
      id: '1',
      name: 'Chest X-Ray Analysis',
      type: 'imaging',
      status: 'completed',
      patientId: 'P001',
      patientName: 'John Smith',
      result: 'Normal chest X-ray, no significant findings',
      confidence: 0.95,
      aiAnalysis: {
        accuracy: 0.94,
        riskLevel: 'low',
        recommendations: ['Continue routine monitoring', 'Schedule follow-up in 6 months', 'Maintain current treatment plan'],
        followUpRequired: false
      }
    },
    {
      id: '2',
      name: 'Blood Test Panel',
      type: 'lab-test',
      status: 'reviewed',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      result: 'Elevated cholesterol levels detected',
      confidence: 0.92,
      aiAnalysis: {
        accuracy: 0.91,
        riskLevel: 'medium',
        recommendations: ['Implement dietary changes', 'Consider statin therapy', 'Monitor lipid levels monthly'],
        followUpRequired: true
      }
    },
    {
      id: '3',
      name: 'ECG Analysis',
      type: 'cardiology',
      status: 'in-progress',
      patientId: 'P003',
      patientName: 'Michael Brown',
      result: 'Irregular heart rhythm detected',
      confidence: 0.88,
      aiAnalysis: {
        accuracy: 0.87,
        riskLevel: 'high',
        recommendations: ['Immediate cardiology consultation', 'Continuous monitoring required', 'Consider medication adjustment'],
        followUpRequired: true
      }
    }
  ]

  const mockPatientMonitoring: PatientMonitoring[] = [
    {
      id: '1',
      patientId: 'P001',
      patientName: 'John Smith',
      type: 'vital-signs',
      status: 'stable',
      currentValues: {
        heartRate: 72,
        bloodPressure: '120/80',
        temperature: 98.6,
        oxygenSaturation: 98,
        respiratoryRate: 16
      },
      aiAnalysis: {
        trend: 'stable',
        riskScore: 0.15,
        alerts: [],
        recommendations: ['Continue current monitoring', 'Maintain healthy lifestyle', 'Schedule routine checkup']
      }
    },
    {
      id: '2',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      type: 'cardiac',
      status: 'warning',
      currentValues: {
        heartRate: 95,
        bloodPressure: '140/90',
        temperature: 99.2,
        oxygenSaturation: 96,
        respiratoryRate: 18
      },
      aiAnalysis: {
        trend: 'declining',
        riskScore: 0.65,
        alerts: ['Elevated blood pressure', 'Increased heart rate'],
        recommendations: ['Immediate blood pressure medication', 'Reduce sodium intake', 'Increase physical activity']
      }
    },
    {
      id: '3',
      patientId: 'P003',
      patientName: 'Michael Brown',
      type: 'respiratory',
      status: 'critical',
      currentValues: {
        heartRate: 110,
        bloodPressure: '160/100',
        temperature: 101.5,
        oxygenSaturation: 92,
        respiratoryRate: 24
      },
      aiAnalysis: {
        trend: 'critical',
        riskScore: 0.85,
        alerts: ['Low oxygen saturation', 'High respiratory rate', 'Elevated temperature'],
        recommendations: ['Immediate oxygen therapy', 'Antibiotic treatment', 'Continuous monitoring']
      }
    }
  ]

  const mockHealthcareAnalytics: HealthcareAnalytics[] = [
    {
      id: '1',
      name: 'Cardiac Treatment Outcomes',
      type: 'patient-outcomes',
      status: 'active',
      metrics: {
        totalPatients: 150,
        successRate: 0.87,
        averageRecoveryTime: 45,
        costSavings: 250000
      },
      aiAnalysis: {
        insights: ['Early intervention improves outcomes by 35%', 'Personalized treatment plans increase success rates'],
        trends: ['Decreasing readmission rates', 'Improving patient satisfaction scores'],
        recommendations: ['Expand early screening programs', 'Implement predictive analytics'],
        impactScore: 8.5
      }
    },
    {
      id: '2',
      name: 'Resource Utilization Analysis',
      type: 'resource-utilization',
      status: 'active',
      metrics: {
        totalPatients: 500,
        successRate: 0.92,
        averageRecoveryTime: 28,
        costSavings: 180000
      },
      aiAnalysis: {
        insights: ['AI scheduling reduces wait times by 40%', 'Predictive staffing improves efficiency'],
        trends: ['Optimizing bed utilization', 'Reducing emergency room wait times'],
        recommendations: ['Implement AI-powered scheduling', 'Expand predictive analytics'],
        impactScore: 9.1
      }
    },
    {
      id: '3',
      name: 'Quality Metrics Dashboard',
      type: 'quality-metrics',
      status: 'completed',
      metrics: {
        totalPatients: 1000,
        successRate: 0.94,
        averageRecoveryTime: 32,
        costSavings: 420000
      },
      aiAnalysis: {
        insights: ['AI diagnostics improve accuracy by 25%', 'Automated alerts reduce medical errors'],
        trends: ['Improving diagnostic accuracy', 'Reducing medical errors'],
        recommendations: ['Expand AI diagnostic tools', 'Implement automated alert systems'],
        impactScore: 9.3
      }
    }
  ]

  const mockData: HealthcareData = {
    totalPatients: 1250,
    activeDiagnostics: 45,
    monitoringSystems: 12,
    analyticsProjects: 8,
    aiInsights: [
      {
        id: '1',
        title: 'AI-Powered Early Detection Improving Outcomes',
        description: 'Machine learning algorithms are detecting diseases 30% earlier than traditional methods, leading to significantly better treatment outcomes.',
        category: 'diagnostic',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Expand AI diagnostic coverage', 'Train staff on new AI tools', 'Implement predictive screening']
      },
      {
        id: '2',
        title: 'Personalized Treatment Plans Reducing Recovery Time',
        description: 'AI-generated personalized treatment plans are reducing average recovery time by 25% while improving patient satisfaction.',
        category: 'treatment',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Scale personalized treatment programs', 'Enhance AI treatment algorithms', 'Monitor long-term outcomes']
      }
    ]
  }

  useEffect(() => {
    setDiagnostics(mockDiagnostics)
    setPatientMonitoring(mockPatientMonitoring)
    setHealthcareAnalytics(mockHealthcareAnalytics)
    setData(mockData)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'stable':
        return 'text-green-400'
      case 'in-progress':
      case 'warning':
        return 'text-yellow-400'
      case 'pending':
      case 'improving':
        return 'text-blue-400'
      case 'critical':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'stable':
        return 'bg-green-500'
      case 'in-progress':
      case 'warning':
        return 'bg-yellow-500'
      case 'pending':
      case 'improving':
        return 'bg-blue-500'
      case 'critical':
        return 'bg-red-500'
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
      case 'positive': return '🏥'
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

  const filteredDiagnostics = useMemo(() => {
    return diagnostics.filter(diagnostic => {
      const typeMatch = selectedType === 'all' || diagnostic.type === selectedType
      return typeMatch
    })
  }, [diagnostics, selectedType])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Head>
        <title>AI-Powered Healthcare & Medical Diagnostics - Zion</title>
        <meta name="description" content="Advanced AI-powered healthcare and medical diagnostics platform with patient monitoring, healthcare analytics, and intelligent medical insights" />
        <meta name="keywords" content="healthcare, medical diagnostics, patient monitoring, healthcare analytics, AI medical, Zion" />
      </Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Zion</span>
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
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
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
            AI-Powered Healthcare & Medical Diagnostics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered healthcare platform with medical diagnostics, 
            patient monitoring, healthcare analytics, and intelligent medical insights 
            for improved patient outcomes and healthcare efficiency.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
              Run Diagnostics
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-200">
              Monitor Patients
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-black/20 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '🏥' },
            { id: 'diagnostics', label: 'Diagnostics', icon: '🔬' },
            { id: 'monitoring', label: 'Monitoring', icon: '📊' },
            { id: 'analytics', label: 'Analytics', icon: '📈' },
            { id: 'insights', label: 'Insights', icon: '💡' }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Medical Diagnostics Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Active Medical Diagnostics</h3>
              <div className="space-y-4">
                {diagnostics.slice(0, 3).map((diagnostic) => (
                  <div key={diagnostic.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{diagnostic.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(diagnostic.status)} text-white`}>
                        {diagnostic.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{diagnostic.patientName} • {diagnostic.type}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Confidence: {Math.round(diagnostic.confidence * 100)}%</span>
                      <span className={getRiskColor(diagnostic.aiAnalysis.riskLevel)}>
                        {diagnostic.aiAnalysis.riskLevel} risk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Monitoring Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Patient Monitoring</h3>
              <div className="space-y-4">
                {patientMonitoring.slice(0, 2).map((patient) => (
                  <div key={patient.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{patient.patientName}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(patient.status)} text-white`}>
                        {patient.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{patient.type} monitoring</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>HR: {patient.currentValues.heartRate} bpm</span>
                      <span>BP: {patient.currentValues.bloodPressure}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'diagnostics' && (
          <div className="space-y-6">
            {/* Diagnostic Type Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {['all', 'imaging', 'lab-test', 'vital-signs', 'genetic', 'pathology', 'cardiology'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Diagnostics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDiagnostics.map((diagnostic) => (
                <div key={diagnostic.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{diagnostic.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(diagnostic.status)} text-white`}>
                      {diagnostic.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{diagnostic.patientName} • {diagnostic.type}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Confidence</span>
                      <span className="text-white">{Math.round(diagnostic.confidence * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-white">{Math.round(diagnostic.aiAnalysis.accuracy * 100)}%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Risk Level</span>
                      <span className={getRiskColor(diagnostic.aiAnalysis.riskLevel)}>
                        {diagnostic.aiAnalysis.riskLevel}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Follow-up</span>
                      <span className="text-white">{diagnostic.aiAnalysis.followUpRequired ? 'Required' : 'Not needed'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'monitoring' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patientMonitoring.map((patient) => (
                <div key={patient.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{patient.patientName}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(patient.status)} text-white`}>
                      {patient.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{patient.type} monitoring</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{patient.currentValues.heartRate}</div>
                      <div className="text-gray-400 text-sm">Heart Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{patient.currentValues.bloodPressure}</div>
                      <div className="text-gray-400 text-sm">Blood Pressure</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Risk Score</span>
                      <span className="text-white">{Math.round(patient.aiAnalysis.riskScore * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Trend</span>
                      <span className={getStatusColor(patient.aiAnalysis.trend)}>
                        {patient.aiAnalysis.trend}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareAnalytics.map((analytics) => (
                <div key={analytics.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{analytics.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(analytics.status)} text-white`}>
                      {analytics.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{analytics.type} analysis</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{formatNumber(analytics.metrics.totalPatients)}</div>
                      <div className="text-gray-400 text-sm">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{Math.round(analytics.metrics.successRate * 100)}%</div>
                      <div className="text-gray-400 text-sm">Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cost Savings</span>
                      <span className="text-white">{formatCurrency(analytics.metrics.costSavings)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Impact Score</span>
                      <span className="text-white">{analytics.aiAnalysis.impactScore}/10</span>
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
                <div className="text-3xl font-bold text-white">{formatNumber(data.totalPatients)}</div>
                <div className="text-gray-400">Total Patients</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{data.activeDiagnostics}</div>
                <div className="text-gray-400">Active Diagnostics</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{data.monitoringSystems}</div>
                <div className="text-gray-400">Monitoring Systems</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{data.analyticsProjects}</div>
                <div className="text-gray-400">Analytics Projects</div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">AI Medical Insights</h3>
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

export default AIPoweredHealthcareMedicalDiagnosticsPage 