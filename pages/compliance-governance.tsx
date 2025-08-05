import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link from 'next/link';
import { motion, AnimatePresence }  from 'framer-motion';

interface ComplianceFramework {
  id: string;
  name: string;
  type: 'GDPR' | 'CCPA' | 'SOX' | 'HIPAA' | 'PCI-DSS' | 'ISO27001' | 'NIST' | 'SOC2' | 'custom';
  description: string;
  status: 'compliant' | 'non-compliant' | 'at-risk' | 'pending' | 'exempt';
  complianceRate: number;
  lastAssessment: Date;
  nextAssessment: Date;
  requirements: ComplianceRequirement[];
  risks: ComplianceRisk[];
  actions: ComplianceAction[];
}

interface ComplianceRequirement {
  id: string;
  title: string;
  description: string;
  category: 'data-privacy' | 'security' | 'financial' | 'operational' | 'regulatory';
  status: 'implemented' | 'in-progress' | 'not-started' | 'failed';
  priority: 'critical' | 'high' | 'medium' | 'low';
  dueDate: Date;
  assignedTo: string;
  evidence: string[];
}

interface ComplianceRisk {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  probability: number;
  impact: number;
  riskScore: number;
  mitigation: string;
  status: 'open' | 'mitigated' | 'accepted' | 'transferred';
  owner: string;
  dueDate: Date;
}

interface ComplianceAction {
  id: string;
  title: string;
  description: string;
  type: 'remediation' | 'assessment' | 'training' | 'documentation' | 'audit';
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  priority: 'critical' | 'high' | 'medium' | 'low';
  assignedTo: string;
  dueDate: Date;
  completionDate?: Date;
  progress: number;
}

interface GovernancePolicy {
  id: string;
  name: string;
  category: 'data-privacy' | 'security' | 'financial' | 'operational' | 'regulatory' | 'custom';
  description: string;
  version: string;
  effectiveDate: Date;
  reviewDate: Date;
  status: 'active' | 'draft' | 'archived' | 'under-review';
  complianceRate: number;
  owner: string;
  stakeholders: string[];
  documents: PolicyDocument[];
}

interface PolicyDocument {
  id: string;
  name: string;
  type: 'policy' | 'procedure' | 'guideline' | 'template' | 'form';
  version: string;
  lastUpdated: Date;
  status: 'current' | 'draft' | 'archived';
  url: string;
}

interface AuditTrail {
  id: string;
  action: string;
  description: string;
  user: string;
  timestamp: Date;
  category: 'compliance' | 'governance' | 'security' | 'data-privacy';
  severity: 'info' | 'warning' | 'error' | 'critical';
  relatedEntity: string;
  details: Record<string, any>;
}

interface ComplianceAnalytics {
  overallComplianceRate: number;
  frameworksCount: number;
  activeRisks: number;
  pendingActions: number;
  upcomingAssessments: number;
  recentViolations: number;
  complianceTrend: 'improving' | 'declining' | 'stable';
  topRisks: ComplianceRisk[];
  complianceByCategory: Record<string, number>;
  assessmentSchedule: Array<{
    framework: string;
    nextAssessment: Date;
    status: 'upcoming' | 'overdue' | 'completed';
  }>;
}

const ComplianceGovernancePage: NextPage = () => {
  const [frameworks, setFrameworks] = useState<ComplianceFramework[]>([]);
  const [policies, setPolicies] = useState<GovernancePolicy[]>([]);
  const [auditTrail, setAuditTrail] = useState<AuditTrail[]>([]);
  const [analytics, setAnalytics] = useState<ComplianceAnalytics | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'frameworks' | 'policies' | 'risks' | 'actions' | 'audit'>('overview');
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading compliance data
    setTimeout(() => {
      const mockFrameworks: ComplianceFramework[] = [
        {
          id: '1',
          name: 'GDPR Compliance',
          type: 'GDPR',
          description: 'General Data Protection Regulation compliance framework for EU data protection',
          status: 'compliant',
          complianceRate: 92,
          lastAssessment: new Date('2024-07-15'),
          nextAssessment: new Date('2024-10-15'),
          requirements: [
            {
              id: '1',
              title: 'Data Processing Consent',
              description: 'Ensure explicit consent for data processing activities',
              category: 'data-privacy',
              status: 'implemented',
              priority: 'critical',
              dueDate: new Date('2024-08-30'),
              assignedTo: 'Legal Team',
              evidence: ['Consent forms updated', 'Privacy policy revised']
            },
            {
              id: '2',
              title: 'Data Breach Notification',
              description: 'Implement 72-hour breach notification process',
              category: 'security',
              status: 'implemented',
              priority: 'critical',
              dueDate: new Date('2024-08-15'),
              assignedTo: 'Security Team',
              evidence: ['Incident response plan', 'Notification procedures']
            }
          ],
          risks: [
            {
              id: '1',
              title: 'Data Processing Without Consent',
              description: 'Risk of processing personal data without proper consent',
              severity: 'high',
              probability: 0.3,
              impact: 0.8,
              riskScore: 0.24,
              mitigation: 'Implement consent management system',
              status: 'mitigated',
              owner: 'Legal Team',
              dueDate: new Date('2024-08-30')
            }
          ],
          actions: [
            {
              id: '1',
              title: 'Update Privacy Policy',
              description: 'Review and update privacy policy for GDPR compliance',
              type: 'documentation',
              status: 'completed',
              priority: 'high',
              assignedTo: 'Legal Team',
              dueDate: new Date('2024-08-15'),
              completionDate: new Date('2024-08-10'),
              progress: 100
            }
          ]
        },
        {
          id: '2',
          name: 'SOC 2 Type II',
          type: 'SOC2',
          description: 'Service Organization Control 2 Type II compliance for security controls',
          status: 'at-risk',
          complianceRate: 78,
          lastAssessment: new Date('2024-06-20'),
          nextAssessment: new Date('2024-12-20'),
          requirements: [
            {
              id: '3',
              title: 'Access Control Implementation',
              description: 'Implement comprehensive access control measures',
              category: 'security',
              status: 'in-progress',
              priority: 'critical',
              dueDate: new Date('2024-09-30'),
              assignedTo: 'IT Security',
              evidence: ['IAM system deployed', 'Access reviews scheduled']
            }
          ],
          risks: [
            {
              id: '2',
              title: 'Insufficient Access Controls',
              description: 'Lack of proper access controls may lead to security breaches',
              severity: 'critical',
              probability: 0.5,
              impact: 0.9,
              riskScore: 0.45,
              mitigation: 'Implement multi-factor authentication',
              status: 'open',
              owner: 'IT Security',
              dueDate: new Date('2024-09-30')
            }
          ],
          actions: [
            {
              id: '2',
              title: 'Deploy MFA System',
              description: 'Implement multi-factor authentication across all systems',
              type: 'remediation',
              status: 'in-progress',
              priority: 'critical',
              assignedTo: 'IT Security',
              dueDate: new Date('2024-09-30'),
              progress: 65
            }
          ]
        },
        {
          id: '3',
          name: 'PCI-DSS Compliance',
          type: 'PCI-DSS',
          description: 'Payment Card Industry Data Security Standard compliance',
          status: 'compliant',
          complianceRate: 95,
          lastAssessment: new Date('2024-05-10'),
          nextAssessment: new Date('2024-11-10'),
          requirements: [
            {
              id: '4',
              title: 'Card Data Encryption',
              description: 'Encrypt all cardholder data in transit and at rest',
              category: 'security',
              status: 'implemented',
              priority: 'critical',
              dueDate: new Date('2024-08-30'),
              assignedTo: 'Security Team',
              evidence: ['Encryption implemented', 'Key management in place']
            }
          ],
          risks: [],
          actions: [
            {
              id: '3',
              title: 'Annual PCI Assessment',
              description: 'Complete annual PCI-DSS compliance assessment',
              type: 'assessment',
              status: 'pending',
              priority: 'high',
              assignedTo: 'Compliance Team',
              dueDate: new Date('2024-11-10'),
              progress: 0
            }
          ]
        }
      ];

      const mockPolicies: GovernancePolicy[] = [
        {
          id: '1',
          name: 'Data Privacy Policy',
          category: 'data-privacy',
          description: 'Comprehensive data privacy policy covering all aspects of data handling',
          version: '2.1',
          effectiveDate: new Date('2024-01-01'),
          reviewDate: new Date('2024-12-31'),
          status: 'active',
          complianceRate: 94,
          owner: 'Legal Team',
          stakeholders: ['HR', 'IT', 'Marketing'],
          documents: [
            {
              id: '1',
              name: 'Data Privacy Policy v2.1',
              type: 'policy',
              version: '2.1',
              lastUpdated: new Date('2024-01-01'),
              status: 'current',
              url: '/documents/data-privacy-policy-v2.1.pdf'
            }
          ]
        },
        {
          id: '2',
          name: 'Information Security Policy',
          category: 'security',
          description: 'Comprehensive information security policy and procedures',
          version: '1.8',
          effectiveDate: new Date('2024-03-01'),
          reviewDate: new Date('2024-09-01'),
          status: 'active',
          complianceRate: 87,
          owner: 'IT Security',
          stakeholders: ['IT', 'HR', 'Operations'],
          documents: [
            {
              id: '2',
              name: 'Information Security Policy v1.8',
              type: 'policy',
              version: '1.8',
              lastUpdated: new Date('2024-03-01'),
              status: 'current',
              url: '/documents/information-security-policy-v1.8.pdf'
            }
          ]
        }
      ];

      const mockAuditTrail: AuditTrail[] = [
        {
          id: '1',
          action: 'Policy Updated',
          description: 'Data Privacy Policy updated to version 2.1',
          user: 'legal.team@company.com',
          timestamp: new Date('2024-08-01 14:30:00'),
          category: 'data-privacy',
          severity: 'info',
          relatedEntity: 'Data Privacy Policy',
          details: {
            previousVersion: '2.0',
            newVersion: '2.1',
            changes: ['Updated consent requirements', 'Added data retention policies']
          }
        },
        {
          id: '2',
          action: 'Compliance Violation',
          description: 'SOC 2 access control requirement not met',
          user: 'system@company.com',
          timestamp: new Date('2024-08-01 10:15:00'),
          category: 'compliance',
          severity: 'warning',
          relatedEntity: 'SOC 2 Type II',
          details: {
            requirement: 'Access Control Implementation',
            dueDate: '2024-09-30',
            status: 'in-progress'
          }
        }
      ];

      const mockAnalytics: ComplianceAnalytics = {
        overallComplianceRate: 88,
        frameworksCount: 3,
        activeRisks: 2,
        pendingActions: 5,
        upcomingAssessments: 2,
        recentViolations: 1,
        complianceTrend: 'improving',
        topRisks: [
          {
            id: '2',
            title: 'Insufficient Access Controls',
            description: 'Lack of proper access controls may lead to security breaches',
            severity: 'critical',
            probability: 0.5,
            impact: 0.9,
            riskScore: 0.45,
            mitigation: 'Implement multi-factor authentication',
            status: 'open',
            owner: 'IT Security',
            dueDate: new Date('2024-09-30')
          }
        ],
        complianceByCategory: {
          'data-privacy': 92,
          'security': 78,
          'financial': 95,
          'operational': 85
        },
        assessmentSchedule: [
          {
            framework: 'GDPR',
            nextAssessment: new Date('2024-10-15'),
            status: 'upcoming'
          },
          {
            framework: 'SOC 2 Type II',
            nextAssessment: new Date('2024-12-20'),
            status: 'upcoming'
          }
        ]
      };

      setFrameworks(mockFrameworks);
      setPolicies(mockPolicies);
      setAuditTrail(mockAuditTrail);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-400';
      case 'non-compliant': return 'text-red-400';
      case 'at-risk': return 'text-yellow-400';
      case 'pending': return 'text-blue-400';
      case 'exempt': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-1200';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-1200';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const calculateRiskScore = (probability: number, impact: number) => {
    return probability * impact;
  };

  if (loading) {
    return (
    <div>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>Compliance & Governance Center - Zion Marketplace</title>
        <meta name="description" content="Comprehensive compliance and governance center for managing regulatory frameworks, policies, and risk assessments." />
        <meta name="keywords" content="compliance, governance, regulatory, GDPR, SOC2, PCI-DSS, risk management, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Compliance & Governance Center</h1>
              <p className="text-gray-300 mt-2">Centralized compliance management and regulatory oversight</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                Generate Report
              </button>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 hover from-green-700 hover to-blue-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                New Assessment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-8">
        {/* Key Metrics Overview */}
        {analytics && (
          <div className="grid grid-cols-2 md grid-cols-4 lg grid-cols-7 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="text-2xl font-bold text-white">{analytics.overallComplianceRate}%</div>
              <div className="text-gray-400 text-sm">Overall Compliance</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="text-2xl font-bold text-white">{analytics.frameworksCount}</div>
              <div className="text-gray-400 text-sm">Active Frameworks</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="text-2xl font-bold text-red-400">{analytics.activeRisks}</div>
              <div className="text-gray-400 text-sm">Active Risks</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="text-2xl font-bold text-yellow-400">{analytics.pendingActions}</div>
              <div className="text-gray-400 text-sm">Pending Actions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="text-2xl font-bold text-blue-400">{analytics.upcomingAssessments}</div>
              <div className="text-gray-400 text-sm">Upcoming Assessments</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="text-2xl font-bold text-orange-400">{analytics.recentViolations}</div>
              <div className="text-gray-400 text-sm">Recent Violations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="text-2xl font-bold text-green-400">↗️</div>
              <div className="text-gray-400 text-sm">Trend</div>
            </motion.div>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 mb-8">
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'overview'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'frameworks'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Frameworks
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'policies'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Policies
            </button>
            <button
              onClick={() => setActiveTab('risks')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'risks'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Risks
            </button>
            <button
              onClick={() => setActiveTab('actions')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'actions'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Actions
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'audit'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Audit Trail
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg grid-cols-2 gap-8">
                {/* Compliance by Category */}
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Compliance by Category</h3>
                  {analytics && (
                    <div className="space-y-4">
                      {Object.entries(analytics.complianceByCategory).map(([category, rate]) => (
                        <div key={category} className="flex items-center justify-between">
                          <span className="text-gray-400 capitalize">{category.replace('-', ' ')}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: `${rate}%` }}
                              ></div>
                            </div>
                            <span className="text-white font-semibold">{rate}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Assessment Schedule */}
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Assessment Schedule</h3>
                  {analytics && (
                    <div className="space-y-3">
                      {analytics.assessmentSchedule.map((assessment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white font-medium">{assessment.framework}</p>
                            <p className="text-gray-400 text-sm">{formatDate(assessment.nextAssessment)}</p>
                          </div>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                            assessment.status === 'upcoming' ? 'bg-blue-600' :
                            assessment.status === 'overdue' ? 'bg-red-600' : 'bg-green-600'
                          } text-white`}>
                            {assessment.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'frameworks' && (
              <div className="space-y-6">
                {frameworks.map((framework, index) => (
                  <motion.div
                    key={framework.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{framework.name}</h3>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(framework.status)}`}>
                            {framework.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-gray-300">{framework.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{framework.complianceRate}%</div>
                        <div className="text-gray-400 text-sm">Compliance Rate</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3" gap-4 mb-4">
                      <div>
                        <span className="text-gray-400 text-sm">Last Assessment</span>
                        <p className="text-white font-medium">{formatDate(framework.lastAssessment)}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Next Assessment</span>
                        <p className="text-white font-medium">{formatDate(framework.nextAssessment)}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Requirements</span>
                        <p className="text-white font-medium">{framework.requirements.length}</p>
                      </div>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" 
                        style={{ width: `${framework.complianceRate}%` }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Requirements</h4>
                        <div className="space-y-2">
                          {framework.requirements.slice(0, 3).map((req) => (
                            <div key={req.id} className="flex items-center justify-between p-2 bg-white/5 rounded">
                              <span className="text-gray-300 text-sm">{req.title}</span>
                              <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(req.priority)}`}>
                                {req.status.replace('-', ' ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Risks</h4>
                        <div className="space-y-2">
                          {framework.risks.slice(0, 3).map((risk) => (
                            <div key={risk.id} className="flex items-center justify-between p-2 bg-white/5 rounded">
                              <span className="text-gray-300 text-sm">{risk.title}</span>
                              <span className={`px-4 py-3 rounded-full text-xs font-medium ${getSeverityColor(risk.severity)}`}>
                                {risk.severity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'policies' && (
              <div className="space-y-6">
                {policies.map((policy, index) => (
                  <motion.div
                    key={policy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{policy.name}</h3>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                            policy.status === 'active' ? 'bg-green-600' :
                            policy.status === 'draft' ? 'bg-yellow-1200' : 'bg-gray-600'
                          } text-white`}>
                            {policy.status}
                          </span>
                        </div>
                        <p className="text-gray-300">{policy.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{policy.complianceRate}%</div>
                        <div className="text-gray-400 text-sm">Compliance Rate</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-4 gap-4 mb-4">
                      <div>
                        <span className="text-gray-400 text-sm">Version</span>
                        <p className="text-white font-medium">{policy.version}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Effective Date</span>
                        <p className="text-white font-medium">{formatDate(policy.effectiveDate)}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Review Date</span>
                        <p className="text-white font-medium">{formatDate(policy.reviewDate)}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Owner</span>
                        <p className="text-white font-medium">{policy.owner}</p>
                      </div>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" 
                        style={{ width: `${policy.complianceRate}%` }}
                      ></div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Documents</h4>
                      <div className="space-y-2">
                        {policy.documents.map((doc) => (
                          <div key={doc.id} className="flex items-center justify-between p-2 bg-white/5 rounded">
                            <div>
                              <span className="text-white font-medium">{doc.name}</span>
                              <p className="text-gray-400 text-sm">v{doc.version} • {formatDate(doc.lastUpdated)}</p>
                            </div>
                            <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                              doc.status === 'current' ? 'bg-green-600' : 'bg-gray-600'
                            } text-white`}>
                              {doc.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'risks' && (
              <div className="space-y-6">
                {frameworks.flatMap(f => f.risks).map((risk, index) => (
                  <motion.div
                    key={risk.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{risk.title}</h3>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${getSeverityColor(risk.severity)}`}>
                            {risk.severity}
                          </span>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                            risk.status === 'open' ? 'bg-red-600' :
                            risk.status === 'mitigated' ? 'bg-green-600' : 'bg-gray-600'
                          } text-white`}>
                            {risk.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{risk.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Probability: {(risk.probability * 100).toFixed(0)}%</span>
                          <span>Impact: {(risk.impact * 100).toFixed(0)}%</span>
                          <span>Risk Score: {(risk.riskScore * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{(risk.riskScore * 100).toFixed(0)}%</div>
                        <div className="text-gray-400 text-sm">Risk Score</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3" gap-4 mb-4">
                      <div>
                        <span className="text-gray-400 text-sm">Owner</span>
                        <p className="text-white font-medium">{risk.owner}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Due Date</span>
                        <p className="text-white font-medium">{formatDate(risk.dueDate)}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Mitigation</span>
                        <p className="text-white font-medium">{risk.mitigation}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'actions' && (
              <div className="space-y-6">
                {frameworks.flatMap(f => f.actions).map((action, index) => (
                  <motion.div
                    key={action.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{action.title}</h3>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(action.priority)}`}>
                            {action.priority}
                          </span>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                            action.status === 'completed' ? 'bg-green-600' :
                            action.status === 'in-progress' ? 'bg-blue-600' :
                            action.status === 'overdue' ? 'bg-red-600' : 'bg-yellow-1200'
                          } text-white`}>
                            {action.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-gray-300">{action.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{action.progress}%</div>
                        <div className="text-gray-400 text-sm">Progress</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3" gap-4 mb-4">
                      <div>
                        <span className="text-gray-400 text-sm">Type</span>
                        <p className="text-white font-medium capitalize">{action.type}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Assigned To</span>
                        <p className="text-white font-medium">{action.assignedTo}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Due Date</span>
                        <p className="text-white font-medium">{formatDate(action.dueDate)}</p>
                      </div>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" 
                        style={{ width: `${action.progress}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="space-y-4">
                {auditTrail.map((audit, index) => (
                  <motion.div
                    key={audit.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-semibold">{audit.action}</h3>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                            audit.severity === 'critical' ? 'bg-red-600' :
                            audit.severity === 'warning' ? 'bg-yellow-1200' :
                            audit.severity === 'error' ? 'bg-orange-600' : 'bg-blue-600'
                          } text-white`}>
                            {audit.severity}
                          </span>
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                            audit.category === 'compliance' ? 'bg-purple-600' :
                            audit.category === 'governance' ? 'bg-green-600' :
                            audit.category === 'security' ? 'bg-red-600' : 'bg-blue-600'
                          } text-white`}>
                            {audit.category}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-2">{audit.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>User: {audit.user}</span>
                          <span>Entity: {audit.relatedEntity}</span>
                          <span>{audit.timestamp.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
                            </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceGovernancePage;