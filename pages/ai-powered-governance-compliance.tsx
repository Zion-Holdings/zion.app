import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link from 'next/link';

interface GovernancePolicy {
  id: string;
  name: string;
  category: 'data-privacy' | 'security' | 'financial' | 'operational' | 'regulatory' | 'custom';
  status: 'active' | 'draft' | 'review' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  complianceRate: number;
  lastUpdated: Date;
  nextReview: Date;
  aiAnalysis: AIPolicyAnalysis;
}

interface AIPolicyAnalysis {
  id: string;
  complianceScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
}

interface ComplianceFramework {
  id: string;
  name: string;
  type: 'GDPR' | 'CCPA' | 'SOX' | 'HIPAA' | 'PCI-DSS' | 'ISO' | 'custom';
  status: 'active' | 'inactive' | 'maintenance';
  complianceRate: number;
  lastAudit: Date;
  nextAudit: Date;
  aiOptimization: AIComplianceOptimization;
}

interface AIComplianceOptimization {
  id: string;
  optimizationScore: number;
  riskReduction: number;
  recommendations: string[];
}

interface GovernanceComplianceAnalytics {
  totalPolicies: number;
  activeFrameworks: number;
  complianceRate: number;
  riskScore: number;
  aiOptimizationScore: number;
  aiInsights: GovernanceComplianceInsight[];
}

interface GovernanceComplianceInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredGovernanceCompliancePage: NextPage = () => {
  const [policies, setPolicies] = useState<GovernancePolicy[]>([])
  const [frameworks, setFrameworks] = useState<ComplianceFramework[]>([])
  const [analytics, setAnalytics] = useState<GovernanceComplianceAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'policies' | 'frameworks' | 'analytics'>('policies')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockPolicies: GovernancePolicy[] = [
    {
      id: '1',
      name: 'Data Privacy Policy',
      category: 'data-privacy',
      status: 'active',
      priority: 'critical',
      description: 'Comprehensive data privacy policy ensuring GDPR and CCPA compliance',
      complianceRate: 95,
      lastUpdated: new Date('2024-01-15'),
      nextReview: new Date('2024-04-15'),
      aiAnalysis: {
        id: '1',
        complianceScore: 92,
        riskLevel: 'low',
        recommendations: ['Update consent mechanisms', 'Enhance data retention tracking']
      }
    },
    {
      id: '2',
      name: 'Security Access Control Policy',
      category: 'security',
      status: 'active',
      priority: 'high',
      description: 'Multi-factor authentication and role-based access control policies',
      complianceRate: 87,
      lastUpdated: new Date('2024-01-10'),
      nextReview: new Date('2024-03-10'),
      aiAnalysis: {
        id: '2',
        complianceScore: 85,
        riskLevel: 'medium',
        recommendations: ['Complete RBAC implementation', 'Enhance audit logging']
      }
    }
  ]

  const mockFrameworks: ComplianceFramework[] = [
    {
      id: '1',
      name: 'GDPR Compliance Framework',
      type: 'GDPR',
      status: 'active',
      complianceRate: 94,
      lastAudit: new Date('2024-01-15'),
      nextAudit: new Date('2024-04-15'),
      aiOptimization: {
        id: '1',
        optimizationScore: 91,
        riskReduction: 85,
        recommendations: ['Enhance consent granularity', 'Improve DSAR automation']
      }
    },
    {
      id: '2',
      name: 'PCI-DSS Compliance Framework',
      type: 'PCI-DSS',
      status: 'active',
      complianceRate: 89,
      lastAudit: new Date('2024-01-20'),
      nextAudit: new Date('2024-07-20'),
      aiOptimization: {
        id: '2',
        optimizationScore: 87,
        riskReduction: 78,
        recommendations: ['Enhance vulnerability scanning', 'Improve patch management']
      }
    }
  ]

  const mockAnalytics: GovernanceComplianceAnalytics = {
    totalPolicies: 18,
    activeFrameworks: 6,
    complianceRate: 91.5,
    riskScore: 12,
    aiOptimizationScore: 89,
    aiInsights: [
      {
        id: '1',
        title: 'High Compliance Rate',
        description: 'Overall compliance rate improved by 8% with AI optimization',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Continue AI monitoring', 'Implement predictive compliance']
      },
      {
        id: '2',
        title: 'Regulatory Risk Reduction',
        description: 'AI analysis reduced regulatory risk by 15% through proactive monitoring',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Expand monitoring coverage', 'Enhance risk assessment']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setPolicies(mockPolicies)
      setFrameworks(mockFrameworks)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [])

  const filteredPolicies = useMemo(() => {
    let filtered = policies
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(policy => policy.category === selectedCategory)
    }
    return filtered
  }, [policies, selectedCategory])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'draft': return 'bg-yellow-500/20 text-yellow-300'
      case 'review': return 'bg-blue-500/20 text-blue-300'
      case 'archived': return 'bg-gray-500/20 text-gray-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-300'
      case 'high': return 'bg-orange-500/20 text-orange-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'low': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical': return 'bg-red-500/20 text-red-300'
      case 'high': return 'bg-orange-500/20 text-orange-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'low': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Governance & Compliance Management System | Zion Tech Group</title>
        <meta name="description" content="Governance policies, compliance monitoring, regulatory adherence, and certification tracking powered by AI." />
        <meta name="keywords" content="governance, compliance, policy, regulation, audit, monitoring, AI compliance" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-44">
          <div className="text-center">
            <h1 className="text-5xl md text-6xl font-bold text-white mb-6">
              AI-Powered Governance & Compliance Management System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Governance policies, compliance monitoring, regulatory adherence, 
              and certification tracking powered by AI for comprehensive oversight.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📋 Governance Policies</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">✅ Compliance Monitoring</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Regulatory Adherence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-32">
        {isLoading ? (
          <div className="flex justify-center items-center py-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('policies')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'policies'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Governance Policies ({policies.length})
              </button>
              <button
                onClick={() => setActiveTab('frameworks')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'frameworks'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Compliance Frameworks ({frameworks.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Policies Tab */}
            {activeTab === 'policies' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md flex-row justify-between items-center space-y-4 md space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-blue-500"
                      >
                        <option value="all" className="bg-slate-800">All Categories</option>
                        <option value="data-privacy" className="bg-slate-800">Data Privacy</option>
                        <option value="security" className="bg-slate-800">Security</option>
                        <option value="financial" className="bg-slate-800">Financial</option>
                        <option value="operational" className="bg-slate-800">Operational</option>
                        <option value="regulatory" className="bg-slate-800">Regulatory</option>
                        <option value="custom" className="bg-slate-800">Custom</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover from-blue-700 hover to-indigo-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300">
                      Create Policy
                    </button>
                  </div>
                </div>

                {/* Policies Grid */}
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {filteredPolicies.map((policy) => (
                    <div key={policy.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{policy.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{policy.category} • {policy.priority} priority</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(policy.status)}`}>
                            {policy.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(policy.priority)}`}>
                              {policy.priority}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{policy.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Compliance Rate</div>
                          <div className="text-2xl font-bold text-white">{policy.complianceRate}%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">AI Score</div>
                          <div className="text-2xl font-bold text-white">{policy.aiAnalysis.complianceScore}%</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Compliance Score</div>
                              <div className="text-white font-semibold">{policy.aiAnalysis.complianceScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Risk Level</div>
                              <span className={`px-4 py-3 rounded-full text-xs font-medium ${getRiskColor(policy.aiAnalysis.riskLevel)}`}>
                                {policy.aiAnalysis.riskLevel}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {policy.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover from-blue-700 hover to-indigo-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          Edit Policy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Frameworks Tab */}
            {activeTab === 'frameworks' && (
              <div className="space-y-8">
                {frameworks.map((framework) => (
                  <div key={framework.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{framework.name}</h3>
                        <p className="text-gray-300 text-sm capitalize">{framework.type} Framework</p>
                      </div>
                      <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(framework.status)}`}>
                        {framework.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Compliance Rate</div>
                        <div className="text-2xl font-bold text-white">{framework.complianceRate}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Optimization Score</div>
                        <div className="text-2xl font-bold text-white">{framework.aiOptimization.optimizationScore}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Risk Reduction</div>
                        <div className="text-2xl font-bold text-white">{framework.aiOptimization.riskReduction}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Next Audit</div>
                        <div className="text-white font-semibold">{framework.nextAudit.toLocaleDateString()}</div>
                      </div>
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {framework.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && analytics && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalPolicies.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Policies</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeFrameworks.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Frameworks</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.complianceRate}%</div>
                    <div className="text-gray-400 text-sm">Compliance Rate</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold">{insight.title}</h4>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
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
      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-36">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Governance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your governance and compliance journey with our AI-powered management system 
              and ensure comprehensive oversight and regulatory adherence.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-blue-500/25 transform hover scale-105">
                Start Governance
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>
)
};

export default AIPoweredGovernanceCompliancePage 