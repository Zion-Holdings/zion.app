import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface IncidentDetection {
  id: string;
  title: string;
  description: string;
  type: 'malware' | 'phishing' | 'ddos' | 'data_breach' | 'insider_threat' | 'zero_day';
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'detected' | 'investigating' | 'contained' | 'resolved' | 'false_positive';
  timestamp: Date;
  affectedSystems: string[];
  aiAnalysis: IncidentAnalysis;
}

interface IncidentAnalysis {
  id: string;
  threatScore: number;
  impactScore: number;
  urgencyScore: number;
  recommendations: string[];
}

interface ResponseCoordination {
  id: string;
  incidentId: string;
  title: string;
  description: string;
  phase: 'detection' | 'analysis' | 'containment' | 'eradication' | 'recovery' | 'lessons_learned';
  status: 'active' | 'completed' | 'paused' | 'escalated';
  assignedTeam: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  aiOptimization: ResponseOptimization;
}

interface ResponseOptimization {
  id: string;
  coordinationScore: number;
  efficiencyScore: number;
  effectivenessScore: number;
  recommendations: string[];
}

interface DigitalForensics {
  id: string;
  caseNumber: string;
  title: string;
  description: string;
  type: 'network' | 'memory' | 'disk' | 'mobile' | 'cloud' | 'malware';
  status: 'active' | 'completed' | 'pending' | 'cancelled';
  investigator: string;
  evidenceCount: number;
  aiAnalysis: ForensicsAnalysis;
}

interface ForensicsAnalysis {
  id: string;
  evidenceScore: number;
  analysisScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface BreachInvestigation {
  id: string;
  breachId: string;
  title: string;
  description: string;
  breachType: 'data_exfiltration' | 'system_compromise' | 'credential_theft' | 'ransomware' | 'insider_breach' | 'supply_chain';
  status: 'investigating' | 'contained' | 'resolved' | 'closed';
  affectedData: string[];
  impactAssessment: string;
  aiAnalysis: BreachAnalysis;
}

interface BreachAnalysis {
  id: string;
  investigationScore: number;
  containmentScore: number;
  recoveryScore: number;
  recommendations: string[];
}

interface ThreatHunting {
  id: string;
  huntId: string;
  title: string;
  description: string;
  huntType: 'proactive' | 'reactive' | 'intel_driven' | 'hypothesis_driven' | 'threat_led' | 'anomaly_based';
  status: 'active' | 'completed' | 'paused' | 'scheduled';
  hunter: string;
  findings: string[];
  aiAnalysis: HuntingAnalysis;
}

interface HuntingAnalysis {
  id: string;
  detectionScore: number;
  accuracyScore: number;
  coverageScore: number;
  recommendations: string[];
}

interface IncidentManagement {
  id: string;
  incidentId: string;
  title: string;
  description: string;
  category: 'security' | 'privacy' | 'compliance' | 'availability' | 'integrity' | 'confidentiality';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  sla: number; // Service Level Agreement in hours
  escalationLevel: number;
  aiAnalysis: ManagementAnalysis;
}

interface ManagementAnalysis {
  id: string;
  managementScore: number;
  complianceScore: number;
  efficiencyScore: number;
  recommendations: string[];
}

interface IncidentResponseAnalytics {
  totalIncidents: number;
  activeInvestigations: number;
  forensicsCases: number;
  breachInvestigations: number;
  threatHunts: number;
  managedIncidents: number;
  averageResponseTime: number;
  aiOptimizationScore: number;
  aiInsights: IncidentResponseInsight[];
}

interface IncidentResponseInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredIncidentResponsePage: NextPage = () => {
  const [incidentDetections, setIncidentDetections] = useState<IncidentDetection[]>([])
  const [responseCoordination, setResponseCoordination] = useState<ResponseCoordination[]>([])
  const [digitalForensics, setDigitalForensics] = useState<DigitalForensics[]>([])
  const [breachInvestigations, setBreachInvestigations] = useState<BreachInvestigation[]>([])
  const [threatHunting, setThreatHunting] = useState<ThreatHunting[]>([])
  const [incidentManagement, setIncidentManagement] = useState<IncidentManagement[]>([])
  const [analytics, setAnalytics] = useState<IncidentResponseAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'detections' | 'coordination' | 'forensics' | 'breaches' | 'hunting' | 'management' | 'analytics'>('detections')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockIncidentDetections: IncidentDetection[] = [
    {
      id: '1',
      title: 'Suspicious Network Activity Detected',
      description: 'Unusual network traffic patterns indicating potential data exfiltration',
      type: 'data_breach',
      severity: 'high',
      status: 'investigating',
      timestamp: new Date('2024-01-20T14:30:00'),
      affectedSystems: ['Database Server', 'Web Application', 'File Server'],
      aiAnalysis: {
        id: '1',
        threatScore: 85,
        impactScore: 78,
        urgencyScore: 92,
        recommendations: ['Isolate affected systems', 'Begin forensics analysis', 'Notify stakeholders']
      }
    }
  ]

  const mockResponseCoordination: ResponseCoordination[] = [
    {
      id: '1',
      incidentId: 'INC-001',
      title: 'Data Breach Response Coordination',
      description: 'Coordinated response to detected data breach incident',
      phase: 'containment',
      status: 'active',
      assignedTeam: 'Security Response Team',
      priority: 'high',
      aiOptimization: {
        id: '1',
        coordinationScore: 88,
        efficiencyScore: 85,
        effectivenessScore: 90,
        recommendations: ['Improve communication protocols', 'Enhance team coordination']
      }
    }
  ]

  const mockDigitalForensics: DigitalForensics[] = [
    {
      id: '1',
      caseNumber: 'FOR-2024-001',
      title: 'Network Forensics Analysis',
      description: 'Digital forensics investigation of network compromise',
      type: 'network',
      status: 'active',
      investigator: 'Dr. Sarah Chen',
      evidenceCount: 156,
      aiAnalysis: {
        id: '1',
        evidenceScore: 92,
        analysisScore: 88,
        reliabilityScore: 94,
        recommendations: ['Collect additional network logs', 'Analyze memory dumps']
      }
    }
  ]

  const mockBreachInvestigations: BreachInvestigation[] = [
    {
      id: '1',
      breachId: 'BR-2024-001',
      title: 'Customer Data Breach Investigation',
      description: 'Investigation of unauthorized access to customer database',
      breachType: 'data_exfiltration',
      status: 'investigating',
      affectedData: ['Customer PII', 'Payment Information', 'Account Details'],
      impactAssessment: 'High impact - 50,000 records potentially compromised',
      aiAnalysis: {
        id: '1',
        investigationScore: 87,
        containmentScore: 90,
        recoveryScore: 85,
        recommendations: ['Implement additional access controls', 'Enhance monitoring']
      }
    }
  ]

  const mockThreatHunting: ThreatHunting[] = [
    {
      id: '1',
      huntId: 'HUNT-2024-001',
      title: 'Advanced Persistent Threat Hunt',
      description: 'Proactive hunting for APT indicators in network',
      huntType: 'proactive',
      status: 'active',
      hunter: 'Alex Rodriguez',
      findings: ['Suspicious PowerShell activity', 'Unusual outbound connections', 'Registry modifications'],
      aiAnalysis: {
        id: '1',
        detectionScore: 91,
        accuracyScore: 88,
        coverageScore: 85,
        recommendations: ['Expand hunting scope', 'Deploy additional sensors']
      }
    }
  ]

  const mockIncidentManagement: IncidentManagement[] = [
    {
      id: '1',
      incidentId: 'IM-2024-001',
      title: 'Security Incident Management',
      description: 'Comprehensive management of security incident lifecycle',
      category: 'security',
      status: 'in_progress',
      sla: 4, // 4 hours
      escalationLevel: 2,
      aiAnalysis: {
        id: '1',
        managementScore: 89,
        complianceScore: 92,
        efficiencyScore: 86,
        recommendations: ['Improve SLA compliance', 'Enhance escalation procedures']
      }
    }
  ]

  const mockAnalytics: IncidentResponseAnalytics = {
    totalIncidents: 45,
    activeInvestigations: 12,
    forensicsCases: 8,
    breachInvestigations: 6,
    threatHunts: 15,
    managedIncidents: 38,
    averageResponseTime: 2.5, // hours
    aiOptimizationScore: 89,
    aiInsights: [
      {
        id: '1',
        title: 'Improved Incident Response Time',
        description: 'AI-powered incident response system shows 2.5-hour average response time with optimized coordination',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Continue AI monitoring', 'Expand response capabilities']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setIncidentDetections(mockIncidentDetections)
      setResponseCoordination(mockResponseCoordination)
      setDigitalForensics(mockDigitalForensics)
      setBreachInvestigations(mockBreachInvestigations)
      setThreatHunting(mockThreatHunting)
      setIncidentManagement(mockIncidentManagement)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockIncidentDetections, mockResponseCoordination, mockDigitalForensics, mockBreachInvestigations, mockThreatHunting, mockIncidentManagement, mockAnalytics])

  const filteredDetections = useMemo(() => {
    let filtered = incidentDetections
    if (selectedType !== 'all') {
      filtered = filtered.filter(detection => detection.type === selectedType)
    }
    return filtered
  }, [incidentDetections, selectedType])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-300'
      case 'high': return 'bg-orange-500/20 text-orange-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'low': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-500/20 text-blue-300'
      case 'completed': return 'bg-green-500/20 text-green-300'
      case 'investigating': return 'bg-yellow-500/20 text-yellow-300'
      case 'resolved': return 'bg-green-500/20 text-green-300'
      case 'contained': return 'bg-orange-500/20 text-orange-300'
      case 'detected': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'detection': return 'bg-red-500/20 text-red-300'
      case 'analysis': return 'bg-yellow-500/20 text-yellow-300'
      case 'containment': return 'bg-orange-500/20 text-orange-300'
      case 'eradication': return 'bg-purple-500/20 text-purple-300'
      case 'recovery': return 'bg-blue-500/20 text-blue-300'
      case 'lessons_learned': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Head>
        <title>AI-Powered Incident Response & Digital Forensics System | Zion Tech Group</title>
        <meta name="description" content="Incident detection, response coordination, digital forensics, breach investigation, threat hunting, and automated incident management powered by AI." />
        <meta name="keywords" content="incident response, digital forensics, breach investigation, threat hunting, cybersecurity, AI incident" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Incident Response & Digital Forensics System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Incident detection, response coordination, digital forensics, 
              breach investigation, threat hunting, and automated incident management powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🚨 Incident Detection</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🕵️ Digital Forensics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🔍 Threat Hunting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('detections')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'detections'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Detections ({incidentDetections.length})
              </button>
              <button
                onClick={() => setActiveTab('coordination')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'coordination'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Coordination ({responseCoordination.length})
              </button>
              <button
                onClick={() => setActiveTab('forensics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'forensics'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Forensics ({digitalForensics.length})
              </button>
              <button
                onClick={() => setActiveTab('breaches')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'breaches'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Breaches ({breachInvestigations.length})
              </button>
              <button
                onClick={() => setActiveTab('hunting')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'hunting'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Hunting ({threatHunting.length})
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'management'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Management ({incidentManagement.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Detections Tab */}
            {activeTab === 'detections' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="malware" className="bg-slate-800">Malware</option>
                        <option value="phishing" className="bg-slate-800">Phishing</option>
                        <option value="ddos" className="bg-slate-800">DDoS</option>
                        <option value="data_breach" className="bg-slate-800">Data Breach</option>
                        <option value="insider_threat" className="bg-slate-800">Insider Threat</option>
                        <option value="zero_day" className="bg-slate-800">Zero Day</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Detection
                    </button>
                  </div>
                </div>

                {/* Detections Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredDetections.map((detection) => (
                    <div key={detection.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{detection.title}</h3>
                          <p className="text-gray-300 text-sm capitalize">{detection.type.replace('_', ' ')} Incident</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(detection.severity)}`}>
                            {detection.severity}
                          </span>
                          <div className="mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(detection.status)}`}>
                              {detection.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{detection.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Detected</div>
                          <div className="text-sm font-bold text-white">
                            {detection.timestamp.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Affected Systems</div>
                          <div className="text-sm font-bold text-white">{detection.affectedSystems.length}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Threat Score</div>
                              <div className="text-white font-semibold">{detection.aiAnalysis.threatScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Impact Score</div>
                              <div className="text-white font-semibold">{detection.aiAnalysis.impactScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Urgency Score</div>
                              <div className="text-white font-semibold">{detection.aiAnalysis.urgencyScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {detection.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Respond
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
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalIncidents.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Incidents</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeInvestigations.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Investigations</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.averageResponseTime}h</div>
                    <div className="text-gray-400 text-sm">Avg Response Time</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Respond to Incidents?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your incident response journey with our AI-powered system 
              and ensure comprehensive cybersecurity incident management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
                Start Responding
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

export default AIPoweredIncidentResponsePage 