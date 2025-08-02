import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface QualityTest {
  id: string;
  name: string;
  type: 'automated' | 'manual' | 'ai-powered' | 'performance' | 'security' | 'compliance';
  status: 'pending' | 'running' | 'passed' | 'failed' | 'blocked';
  priority: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  testCases: TestCase[];
  aiAnalysis: AITestAnalysis;
  executionTime: number;
  coverage: number;
  lastRun: Date;
  nextRun: Date;
}

interface TestCase {
  id: string;
  name: string;
  description: string;
  status: 'passed' | 'failed' | 'blocked' | 'skipped';
  executionTime: number;
  errorMessage?: string;
  screenshots?: string[];
  logs: TestLog[];
  aiInsights: AITestInsight[];
}

interface AITestAnalysis {
  id: string;
  overallScore: number;
  confidence: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
  performanceMetrics: PerformanceMetric[];
  qualityTrends: QualityTrend[];
}

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  threshold: number;
  status: 'pass' | 'fail' | 'warning';
}

interface QualityTrend {
  id: string;
  metric: string;
  trend: 'improving' | 'stable' | 'declining';
  change: number;
  period: string;
}

interface TestLog {
  id: string;
  timestamp: Date;
  level: 'info' | 'warning' | 'error' | 'debug';
  message: string;
  context: string;
}

interface AITestInsight {
  id: string;
  type: 'performance' | 'security' | 'usability' | 'reliability';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
  recommendations: string[];
}

interface ComplianceCheck {
  id: string;
  standard: string;
  category: 'security' | 'privacy' | 'accessibility' | 'performance' | 'legal';
  status: 'compliant' | 'non-compliant' | 'pending' | 'exempt';
  requirements: ComplianceRequirement[];
  lastAudit: Date;
  nextAudit: Date;
  aiAssessment: AIComplianceAssessment;
}

interface ComplianceRequirement {
  id: string;
  code: string;
  description: string;
  status: 'met' | 'not-met' | 'partial' | 'exempt';
  evidence: string;
  riskLevel: 'low' | 'medium' | 'high';
}

interface AIComplianceAssessment {
  id: string;
  overallCompliance: number;
  riskScore: number;
  confidence: number;
  recommendations: string[];
  violations: ComplianceViolation[];
}

interface ComplianceViolation {
  id: string;
  requirement: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  remediation: string;
  deadline: Date;
}

interface QualityDashboard {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  testCoverage: number;
  averageExecutionTime: number;
  complianceRate: number;
  aiAccuracy: number;
  topIssues: QualityIssue[];
  aiInsights: QualityInsight[];
}

interface QualityIssue {
  id: string;
  title: string;
  type: 'performance' | 'security' | 'usability' | 'reliability';
  severity: 'low' | 'medium' | 'high' | 'critical';
  affectedTests: number;
  impact: string;
  resolution: string;
}

interface QualityInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredQualityAssurancePage: NextPage = () => {
  const [qualityTests, setQualityTests] = useState<QualityTest[]>([])
  const [complianceChecks, setComplianceChecks] = useState<ComplianceCheck[]>([])
  const [dashboard, setDashboard] = useState<QualityDashboard | null>(null)
  const [activeTab, setActiveTab] = useState<'tests' | 'compliance' | 'dashboard'>('tests')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'priority' | 'status' | 'coverage' | 'execution'>('priority')
  const [isLoading, setIsLoading] = useState(true)

  // Mock quality tests
  const mockQualityTests: QualityTest[] = [
    {
      id: '1',
      name: 'AI-Powered Performance Testing',
      type: 'ai-powered',
      status: 'passed',
      priority: 'high',
      description: 'Comprehensive performance testing using AI to identify bottlenecks and optimization opportunities',
      testCases: [
        {
          id: '1',
          name: 'Load Testing - 1000 Concurrent Users',
          description: 'Test system performance under high load conditions',
          status: 'passed',
          executionTime: 45,
          logs: [
            {
              id: '1',
              timestamp: new Date('2024-01-20T10:00:00'),
              level: 'info',
              message: 'Test started with 1000 concurrent users',
              context: 'Load Test'
            }
          ],
          aiInsights: [
            {
              id: '1',
              type: 'performance',
              title: 'Response Time Optimization',
              description: 'Average response time improved by 15%',
              severity: 'low',
              confidence: 0.92,
              recommendations: ['Consider caching strategies', 'Optimize database queries']
            }
          ]
        },
        {
          id: '2',
          name: 'Stress Testing - Maximum Capacity',
          description: 'Test system behavior under extreme conditions',
          status: 'passed',
          executionTime: 120,
          logs: [
            {
              id: '2',
              timestamp: new Date('2024-01-20T10:02:00'),
              level: 'info',
              message: 'System maintained stability under stress',
              context: 'Stress Test'
            }
          ],
          aiInsights: [
            {
              id: '2',
              type: 'reliability',
              title: 'System Resilience',
              description: 'System gracefully handles peak loads',
              severity: 'low',
              confidence: 0.88,
              recommendations: ['Monitor resource usage', 'Implement auto-scaling']
            }
          ]
        }
      ],
      aiAnalysis: {
        id: '1',
        overallScore: 94,
        confidence: 0.92,
        riskLevel: 'low',
        recommendations: ['Implement caching layer', 'Optimize database queries', 'Add monitoring'],
        performanceMetrics: [
          {
            id: '1',
            name: 'Response Time',
            value: 250,
            unit: 'ms',
            threshold: 500,
            status: 'pass'
          },
          {
            id: '2',
            name: 'Throughput',
            value: 1500,
            unit: 'req/s',
            threshold: 1000,
            status: 'pass'
          }
        ],
        qualityTrends: [
          {
            id: '1',
            metric: 'Response Time',
            trend: 'improving',
            change: -15,
            period: 'Last 30 days'
          }
        ]
      },
      executionTime: 165,
      coverage: 95,
      lastRun: new Date('2024-01-20T10:00:00'),
      nextRun: new Date('2024-01-21T10:00:00')
    },
    {
      id: '2',
      name: 'Security Vulnerability Assessment',
      type: 'security',
      status: 'running',
      priority: 'critical',
      description: 'AI-powered security testing to identify vulnerabilities and compliance issues',
      testCases: [
        {
          id: '3',
          name: 'SQL Injection Testing',
          description: 'Test for SQL injection vulnerabilities',
          status: 'passed',
          executionTime: 30,
          logs: [
            {
              id: '3',
              timestamp: new Date('2024-01-20T11:00:00'),
              level: 'info',
              message: 'No SQL injection vulnerabilities detected',
              context: 'Security Test'
            }
          ],
          aiInsights: [
            {
              id: '3',
              type: 'security',
              title: 'Input Validation',
              description: 'All inputs properly validated and sanitized',
              severity: 'low',
              confidence: 0.95,
              recommendations: ['Maintain current validation', 'Regular security audits']
            }
          ]
        }
      ],
      aiAnalysis: {
        id: '2',
        overallScore: 87,
        confidence: 0.89,
        riskLevel: 'medium',
        recommendations: ['Implement additional input validation', 'Add rate limiting', 'Enable 2FA'],
        performanceMetrics: [
          {
            id: '3',
            name: 'Vulnerability Score',
            value: 2.3,
            unit: 'CVSS',
            threshold: 5.0,
            status: 'pass'
          }
        ],
        qualityTrends: [
          {
            id: '2',
            metric: 'Security Score',
            trend: 'improving',
            change: 8,
            period: 'Last 30 days'
          }
        ]
      },
      executionTime: 30,
      coverage: 88,
      lastRun: new Date('2024-01-20T11:00:00'),
      nextRun: new Date('2024-01-20T12:00:00')
    }
  ]

  // Mock compliance checks
  const mockComplianceChecks: ComplianceCheck[] = [
    {
      id: '1',
      standard: 'GDPR Compliance',
      category: 'privacy',
      status: 'compliant',
      requirements: [
        {
          id: '1',
          code: 'GDPR-001',
          description: 'Data processing consent',
          status: 'met',
          evidence: 'Consent forms implemented and tested',
          riskLevel: 'low'
        },
        {
          id: '2',
          code: 'GDPR-002',
          description: 'Data retention policies',
          status: 'met',
          evidence: 'Automated data deletion after 30 days',
          riskLevel: 'low'
        }
      ],
      lastAudit: new Date('2024-01-15'),
      nextAudit: new Date('2024-04-15'),
      aiAssessment: {
        id: '1',
        overallCompliance: 95,
        riskScore: 12,
        confidence: 0.94,
        recommendations: ['Regular privacy audits', 'Update consent mechanisms'],
        violations: []
      }
    },
    {
      id: '2',
      standard: 'WCAG 2.1 AA',
      category: 'accessibility',
      status: 'compliant',
      requirements: [
        {
          id: '3',
          code: 'WCAG-001',
          description: 'Color contrast ratios',
          status: 'met',
          evidence: 'All text meets 4.5:1 contrast ratio',
          riskLevel: 'low'
        },
        {
          id: '4',
          code: 'WCAG-002',
          description: 'Keyboard navigation',
          status: 'met',
          evidence: 'All interactive elements keyboard accessible',
          riskLevel: 'low'
        }
      ],
      lastAudit: new Date('2024-01-10'),
      nextAudit: new Date('2024-04-10'),
      aiAssessment: {
        id: '2',
        overallCompliance: 92,
        riskScore: 8,
        confidence: 0.91,
        recommendations: ['Add ARIA labels', 'Improve focus indicators'],
        violations: []
      }
    }
  ]

  // Mock dashboard
  const mockDashboard: QualityDashboard = {
    totalTests: 1240,
    passedTests: 1180,
    failedTests: 45,
    testCoverage: 94,
    averageExecutionTime: 45,
    complianceRate: 96,
    aiAccuracy: 0.94,
    topIssues: [
      {
        id: '1',
        title: 'Performance Degradation',
        type: 'performance',
        severity: 'medium',
        affectedTests: 12,
        impact: '15% increase in response time',
        resolution: 'Optimize database queries and implement caching'
      },
      {
        id: '2',
        title: 'Security Vulnerability',
        type: 'security',
        severity: 'high',
        affectedTests: 3,
        impact: 'Potential XSS vulnerability detected',
        resolution: 'Implement input sanitization and CSP headers'
      }
    ],
    aiInsights: [
      {
        id: '1',
        title: 'Quality Improvement Trend',
        description: 'Overall quality score improved by 8% over the last 30 days',
        impact: 'positive',
        confidence: 0.92,
        recommendations: ['Continue current testing practices', 'Expand AI-powered testing coverage']
      },
      {
        id: '2',
        title: 'Performance Optimization Opportunity',
        description: 'AI analysis suggests 20% performance improvement potential',
        impact: 'positive',
        confidence: 0.88,
        recommendations: ['Implement caching strategies', 'Optimize database queries', 'Add CDN']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setQualityTests(mockQualityTests)
      setComplianceChecks(mockComplianceChecks)
      setDashboard(mockDashboard)
      setIsLoading(false)
    }, 1000)
  }, [mockQualityTests, mockComplianceChecks, mockDashboard])

  const filteredTests = useMemo(() => {
    let filtered = qualityTests

    if (selectedType !== 'all') {
      filtered = filtered.filter(test => test.type === selectedType)
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 }
          return priorityOrder[b.priority] - priorityOrder[a.priority]
        case 'status':
          const statusOrder = { failed: 4, running: 3, blocked: 2, passed: 1, pending: 0 }
          return statusOrder[b.status] - statusOrder[a.status]
        case 'coverage':
          return b.coverage - a.coverage
        case 'execution':
          return a.executionTime - b.executionTime
        default:
          return 0
      }
    })
  }, [qualityTests, selectedType, sortBy])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'bg-green-500/20 text-green-300'
      case 'failed': return 'bg-red-500/20 text-red-300'
      case 'running': return 'bg-blue-500/20 text-blue-300'
      case 'blocked': return 'bg-yellow-500/20 text-yellow-300'
      case 'pending': return 'bg-gray-500/20 text-gray-300'
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-300'
      case 'high': return 'bg-orange-500/20 text-orange-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'low': return 'bg-green-500/20 text-green-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Quality Assurance & Testing System | Zion Tech Group</title>
        <meta name="description" content="Automated testing, quality monitoring, compliance validation, and performance optimization powered by AI." />
        <meta name="keywords" content="quality assurance, testing, compliance, validation, AI testing, performance" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Quality Assurance & Testing System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automated testing, quality monitoring, compliance validation, 
              and performance optimization powered by advanced AI for marketplace reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤖 AI Testing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Quality Monitoring</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">✅ Compliance Validation</span>
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
                onClick={() => setActiveTab('tests')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'tests'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Quality Tests ({qualityTests.length})
              </button>
              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'compliance'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Compliance Checks ({complianceChecks.length})
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'dashboard'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Quality Dashboard
              </button>
            </div>

            {/* Tests Tab */}
            {activeTab === 'tests' && (
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
                        <option value="automated" className="bg-slate-800">Automated</option>
                        <option value="ai-powered" className="bg-slate-800">AI-Powered</option>
                        <option value="performance" className="bg-slate-800">Performance</option>
                        <option value="security" className="bg-slate-800">Security</option>
                        <option value="compliance" className="bg-slate-800">Compliance</option>
                      </select>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="priority" className="bg-slate-800">Priority</option>
                        <option value="status" className="bg-slate-800">Status</option>
                        <option value="coverage" className="bg-slate-800">Coverage</option>
                        <option value="execution" className="bg-slate-800">Execution Time</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Test
                    </button>
                  </div>
                </div>

                {/* Tests Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredTests.map((test) => (
                    <div key={test.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{test.name}</h3>
                          <p className="text-gray-300 text-sm">{test.description}</p>
                        </div>
                        <div className="flex space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(test.status)}`}>
                            {test.status}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(test.priority)}`}>
                            {test.priority}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Coverage</div>
                          <div className="text-2xl font-bold text-white">{test.coverage}%</div>
                          <div className="text-gray-300 text-sm">{test.testCases.length} test cases</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Execution Time</div>
                          <div className="text-2xl font-bold text-white">{test.executionTime}s</div>
                          <div className="text-gray-300 text-sm">Last run: {test.lastRun.toLocaleDateString()}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Overall Score</div>
                              <div className="text-white font-semibold">{test.aiAnalysis.overallScore}/100</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">AI Confidence</div>
                              <div className="text-white font-semibold">{Math.round(test.aiAnalysis.confidence * 100)}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Risk Level</div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(test.aiAnalysis.riskLevel)}`}>
                                {test.aiAnalysis.riskLevel}
                              </span>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Performance</div>
                              <div className="text-white font-semibold">
                                {test.aiAnalysis.performanceMetrics.filter(m => m.status === 'pass').length}/{test.aiAnalysis.performanceMetrics.length} passed
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-2">Recommendations:</div>
                            <ul className="text-sm text-gray-300 space-y-1">
                              {test.aiAnalysis.recommendations.slice(0, 2).map((rec, index) => (
                                <li key={index}>• {rec}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Test Cases */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Test Cases</h4>
                        <div className="space-y-2">
                          {test.testCases.slice(0, 3).map((testCase) => (
                            <div key={testCase.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                              <div>
                                <div className="text-white font-semibold text-sm">{testCase.name}</div>
                                <div className="text-gray-400 text-xs">{testCase.description}</div>
                              </div>
                              <div className="text-right">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(testCase.status)}`}>
                                  {testCase.status}
                                </span>
                                <div className="text-xs text-gray-400 mt-1">
                                  {testCase.executionTime}s
                                </div>
                              </div>
                            </div>
                          ))}
                          {test.testCases.length > 3 && (
                            <div className="text-gray-400 text-sm text-center">
                              +{test.testCases.length - 3} more test cases
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Run Test
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compliance Tab */}
            {activeTab === 'compliance' && (
              <div className="space-y-8">
                {complianceChecks.map((check) => (
                  <div key={check.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{check.standard}</h3>
                        <p className="text-gray-300 text-sm capitalize">{check.category} Compliance</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        check.status === 'compliant' ? 'bg-green-500/20 text-green-300' :
                        check.status === 'non-compliant' ? 'bg-red-500/20 text-red-300' :
                        check.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {check.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Compliance Rate</div>
                        <div className="text-2xl font-bold text-white">{check.aiAssessment.overallCompliance}%</div>
                        <div className="text-gray-300 text-sm">Risk Score: {check.aiAssessment.riskScore}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Requirements</div>
                        <div className="text-2xl font-bold text-white">{check.requirements.length}</div>
                        <div className="text-gray-300 text-sm">
                          {check.requirements.filter(r => r.status === 'met').length} met
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Next Audit</div>
                        <div className="text-white font-semibold">{check.nextAudit.toLocaleDateString()}</div>
                        <div className="text-gray-300 text-sm">AI Confidence: {Math.round(check.aiAssessment.confidence * 100)}%</div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <div className="space-y-3">
                        {check.requirements.map((req) => (
                          <div key={req.id} className="bg-white/5 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="text-white font-semibold">{req.code}</div>
                                <div className="text-gray-300 text-sm">{req.description}</div>
                              </div>
                              <div className="text-right">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  req.status === 'met' ? 'bg-green-500/20 text-green-300' :
                                  req.status === 'not-met' ? 'bg-red-500/20 text-red-300' :
                                  req.status === 'partial' ? 'bg-yellow-500/20 text-yellow-300' :
                                  'bg-gray-500/20 text-gray-300'
                                }`}>
                                  {req.status}
                                </span>
                                <div className="text-xs text-gray-400 mt-1">
                                  Risk: {req.riskLevel}
                                </div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-400">
                              <strong>Evidence:</strong> {req.evidence}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Assessment */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Assessment</h4>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="text-sm text-gray-300 mb-3">
                          {check.aiAssessment.recommendations.length > 0 ? 
                            check.aiAssessment.recommendations[0] : 
                            'No specific recommendations at this time'
                          }
                        </div>
                        {check.aiAssessment.violations.length > 0 && (
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-2">Violations:</div>
                            <div className="space-y-2">
                              {check.aiAssessment.violations.map((violation) => (
                                <div key={violation.id} className="text-xs text-red-300">
                                  • {violation.description}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && dashboard && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{dashboard.totalTests.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Tests</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{dashboard.passedTests.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Passed Tests</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{dashboard.testCoverage}%</div>
                    <div className="text-gray-400 text-sm">Test Coverage</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{dashboard.complianceRate}%</div>
                    <div className="text-gray-400 text-sm">Compliance Rate</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Quality Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Success Rate</span>
                          <span className="text-white">{Math.round((dashboard.passedTests / dashboard.totalTests) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                            style={{ width: `${(dashboard.passedTests / dashboard.totalTests) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">AI Accuracy</span>
                          <span className="text-white">{(dashboard.aiAccuracy * 100).toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                            style={{ width: `${dashboard.aiAccuracy * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Top Issues</h3>
                    <div className="space-y-3">
                      {dashboard.topIssues.map((issue) => (
                        <div key={issue.id} className="bg-white/5 rounded-lg p-3">
                          <div className="flex items-start justify-between mb-2">
                            <div className="text-white font-semibold text-sm">{issue.title}</div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                              {issue.severity}
                            </span>
                          </div>
                          <div className="text-gray-300 text-xs mb-2">{issue.impact}</div>
                          <div className="text-gray-400 text-xs">{issue.resolution}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">AI Insights</h3>
                  <div className="space-y-4">
                    {dashboard.aiInsights.map((insight) => (
                      <div key={insight.id} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Ensure Quality?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your quality assurance journey with our AI-powered testing system 
              and ensure reliability across all marketplace services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Start Testing
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

export default AIPoweredQualityAssurancePage 