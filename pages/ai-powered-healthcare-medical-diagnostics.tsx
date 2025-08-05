import React, { useState, useEffect , useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/layout/PageLayout';
import { 
  Activity, 
  Heart, 
  Brain, 
  Eye, 
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  User,
  Shield
} from 'lucide-react';
import { Home, Search, User } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  medicalHistory: string[];
  currentConditions: string[];
  lastVisit: Date;
  nextAppointment?: Date;
  status: 'active' | 'inactive' | 'discharged' | 'pending';
  patientId: string;
  patientName: string;
  bloodType: string;
}

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
  const [activeTab, setActiveTab] = useState('overview');
  const [diagnostics, setDiagnostics] = useState<MedicalDiagnostic[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [monitoring, setMonitoring] = useState<PatientMonitoring[]>([]);
  const [analytics, setAnalytics] = useState<HealthcareAnalytics[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    loadHealthcareData();
  }, [selectedTimeframe]);

  const loadHealthcareData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-healthcare-medical-diagnostics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timeframe: selectedTimeframe,
          action: 'getData'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setDiagnostics(data.diagnostics || []);
        setPatients(data.patients || []);
        setMonitoring(data.monitoring || []);
        setAnalytics(data.analytics || []);
      }
    } catch (error) {
      console.error('Error loading healthcare data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      case 'stable': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Activity },
    { id: 'diagnostics', name: 'Diagnostics', icon: Brain },
    { id: 'patients', name: 'Patients', icon: User },
    { id: 'monitoring', name: 'Monitoring', icon: Heart },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp }
  ];

  return (
    <PageLayout>
      <Head>
        <title>AI-Powered Healthcare Medical Diagnostics System | Zion Tech Group</title>
        <meta name="description" content="Intelligent medical diagnostics with AI-powered patient monitoring, diagnostic analysis, and healthcare analytics." />
        <meta name="keywords" content="healthcare, medical diagnostics, patient monitoring, AI diagnostics, healthcare analytics, Zion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Heart className="h-12 w-12 text-red-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">AI-Powered Healthcare Diagnostics</h1>
              <p className="text-gray-300">Intelligent medical diagnostics and patient monitoring</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-4 text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="mb-8">
        <div className="flex space-x-8 border-b border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-3 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-400'
                    : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      {loading ? (
        <div className="flex justify-center items-center h-124">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Active Patients</p>
                                             <p className="text-2xl font-bold text-white">{patients.filter(p => p.status === 'active').length}</p>
                    </div>
                    <User className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Diagnostics</p>
                      <p className="text-2xl font-bold text-white">{diagnostics.length}</p>
                    </div>
                    <Brain className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Accuracy Rate</p>
                      <p className="text-2xl font-bold text-white">96%</p>
                    </div>
                    <CheckCircle className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Critical Alerts</p>
                      <p className="text-2xl font-bold text-white">{monitoring.filter(m => m.status === 'critical').length}</p>
                    </div>
                    <AlertTriangle className="h-12 w-12 text-red-400" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {diagnostics.slice(0, 5).map((diagnostic) => (
                    <div key={diagnostic.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(diagnostic.status)}`}></div>
                        <div>
                          <p className="text-white font-medium">{diagnostic.name}</p>
                          <p className="text-gray-400 text-sm">{diagnostic.type} • {diagnostic.status}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-sm">{diagnostic.patientName}</p>
                        <p className="text-gray-400 text-xs">{diagnostic.aiAnalysis.recommendations[0]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Diagnostics Tab */}
          {activeTab === 'diagnostics' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Medical Diagnostics</h2>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-lg transition-colors">
                  + New Diagnostic
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {diagnostics.map((diagnostic) => (
                  <div key={diagnostic.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{diagnostic.name}</h3>
                        <p className="text-gray-400 text-sm">{diagnostic.type} • {diagnostic.status}</p>
                      </div>
                      <span className={`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(diagnostic.status)}`}>
                        {diagnostic.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm">{diagnostic.result}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Confidence</p>
                          <p className="text-white">{Math.round(diagnostic.confidence * 100)}%</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Risk Level</p>
                          <p className="text-white">{diagnostic.aiAnalysis.riskLevel}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Date</p>
                          <p className="text-white">N/A</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Doctor</p>
                          <p className="text-white">N/A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Patients Tab */}
          {activeTab === 'patients' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Patient Management</h2>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-lg transition-colors">
                  + Add Patient
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {patients.map((patient) => (
                  <div key={patient.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{patient.name}</h3>
                        <p className="text-gray-400 text-sm">ID: {patient.id} • Age: {patient.age}</p>
                      </div>
                      <span className={`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Gender</p>
                          <p className="text-white">{patient.gender}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Blood Type</p>
                          <p className="text-white">{patient.gender}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Admitted</p>
                          <p className="text-white">N/A</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Room</p>
                          <p className="text-white">N/A</p>
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <p className="text-gray-400">Diagnosis</p>
                        <p className="text-white">N/A</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Monitoring Tab */}
          {activeTab === 'monitoring' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Patient Monitoring</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {monitoring.map((monitor) => (
                  <div key={monitor.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{monitor.patientName}</h3>
                        <p className="text-gray-400 text-sm">{monitor.type} • {monitor.status}</p>
                      </div>
                      <span className={`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(monitor.status)}`}>
                        {monitor.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm">Current Values: HR {monitor.currentValues.heartRate} bpm, BP {monitor.currentValues.bloodPressure}, Temp {monitor.currentValues.temperature}°C, O2 {monitor.currentValues.oxygenSaturation}%</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Risk Score</p>
                          <p className="text-white">{Math.round(monitor.aiAnalysis.riskScore * 100)}%</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Trend</p>
                          <p className="text-white">{monitor.aiAnalysis.trend}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Last Updated</p>
                          <p className="text-white">N/A</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Recommendations</p>
                          <p className="text-white">{monitor.aiAnalysis.recommendations.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Healthcare Analytics</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {analytics.map((analytic) => (
                  <div key={analytic.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{analytic.name}</h3>
                        <p className="text-gray-400 text-sm">{analytic.type} • {analytic.status}</p>
                      </div>
                      <span className={`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(analytic.status)}`}>
                        {analytic.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm">Total Patients: {analytic.metrics.totalPatients}, Success Rate: {Math.round(analytic.metrics.successRate * 100)}%, Avg Recovery: {analytic.metrics.averageRecoveryTime} days, Cost Savings: {analytic.metrics.costSavings}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Cost Savings</p>
                          <p className="text-white">{analytic.metrics.costSavings}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Impact Score</p>
                          <p className="text-white">{analytic.aiAnalysis.impactScore}/10</p>
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <p className="text-gray-400">Last Updated</p>
                        <p className="text-white">N/A</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </PageLayout>
      );
};

export default AIPoweredHealthcareMedicalDiagnosticsPage;