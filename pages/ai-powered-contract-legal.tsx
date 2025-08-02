import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface Contract {
  id: string;
  title: string;
  type: 'service' | 'employment' | 'partnership' | 'nda' | 'licensing' | 'custom';
  status: 'draft' | 'pending' | 'active' | 'completed' | 'disputed' | 'terminated';
  parties: ContractParty[];
  terms: ContractTerm[];
  value: number;
  currency: string;
  startDate: Date;
  endDate?: Date;
  aiGenerated: boolean;
  complianceScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  legalReview: LegalReview;
  signatures: Signature[];
  attachments: Attachment[];
}

interface ContractParty {
  id: string;
  name: string;
  type: 'client' | 'provider' | 'both';
  email: string;
  phone?: string;
  address: string;
  verified: boolean;
  signature?: Signature;
}

interface ContractTerm {
  id: string;
  section: string;
  title: string;
  content: string;
  aiGenerated: boolean;
  compliance: boolean;
  riskLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
}

interface LegalReview {
  id: string;
  reviewer: string;
  status: 'pending' | 'approved' | 'rejected' | 'needs-revision';
  comments: string[];
  complianceIssues: string[];
  recommendations: string[];
  reviewDate: Date;
  aiAssisted: boolean;
}

interface Signature {
  id: string;
  partyId: string;
  signature: string;
  timestamp: Date;
  ipAddress: string;
  verified: boolean;
}

interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: Date;
  aiAnalyzed: boolean;
}

interface Dispute {
  id: string;
  contractId: string;
  type: 'payment' | 'delivery' | 'quality' | 'timeline' | 'other';
  status: 'open' | 'mediation' | 'arbitration' | 'resolved' | 'closed';
  description: string;
  evidence: Evidence[];
  aiAnalysis: DisputeAnalysis;
  resolution?: DisputeResolution;
  createdAt: Date;
  updatedAt: Date;
}

interface Evidence {
  id: string;
  type: 'document' | 'image' | 'video' | 'audio' | 'testimony';
  title: string;
  description: string;
  uploadedAt: Date;
  aiAnalyzed: boolean;
  relevance: number;
}

interface DisputeAnalysis {
  strength: number;
  weakness: number;
  recommendation: string;
  predictedOutcome: string;
  confidence: number;
  legalBasis: string[];
}

interface DisputeResolution {
  id: string;
  type: 'mediation' | 'arbitration' | 'settlement' | 'court';
  outcome: string;
  amount?: number;
  currency?: string;
  resolvedAt: Date;
  mediator?: string;
}

interface LegalTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  aiOptimized: boolean;
  complianceScore: number;
  usageCount: number;
  lastUpdated: Date;
  preview: string;
}

interface ComplianceCheck {
  id: string;
  contractId: string;
  checkType: string;
  status: 'pass' | 'fail' | 'warning';
  description: string;
  recommendation: string;
  aiGenerated: boolean;
  checkedAt: Date;
}

const AIPoweredContractLegalPage: NextPage = () => {
  const [contracts, setContracts] = useState<Contract[]>([])
  const [disputes, setDisputes] = useState<Dispute[]>([])
  const [templates, setTemplates] = useState<LegalTemplate[]>([])
  const [complianceChecks, setComplianceChecks] = useState<ComplianceCheck[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'date' | 'value' | 'risk' | 'compliance'>('date')
  const [activeTab, setActiveTab] = useState<'contracts' | 'disputes' | 'templates' | 'compliance'>('contracts')
  const [isLoading, setIsLoading] = useState(true)

  // Mock contracts
  const mockContracts: Contract[] = [
    {
      id: '1',
      title: 'AI Development Service Agreement',
      type: 'service',
      status: 'active',
      parties: [
        {
          id: '1',
          name: 'TechCorp Solutions',
          type: 'provider',
          email: 'contact@techcorp.com',
          address: '123 Tech Street, San Francisco, CA',
          verified: true
        },
        {
          id: '2',
          name: 'InnovateStartup Inc',
          type: 'client',
          email: 'legal@innovatestartup.com',
          address: '456 Innovation Ave, New York, NY',
          verified: true
        }
      ],
      terms: [
        {
          id: '1',
          section: 'Services',
          title: 'AI Development Services',
          content: 'Provider shall develop and implement AI-powered features including machine learning models, natural language processing, and computer vision capabilities.',
          aiGenerated: true,
          compliance: true,
          riskLevel: 'low',
          recommendations: ['Add specific performance metrics', 'Include data privacy clauses']
        },
        {
          id: '2',
          section: 'Payment',
          title: 'Payment Terms',
          content: 'Client shall pay $25,000 in three installments: 40% upon signing, 30% at project midpoint, 30% upon completion.',
          aiGenerated: false,
          compliance: true,
          riskLevel: 'medium',
          recommendations: ['Add late payment penalties', 'Include milestone verification']
        }
      ],
      value: 25000,
      currency: 'USD',
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-06-15'),
      aiGenerated: true,
      complianceScore: 85,
      riskLevel: 'medium',
      legalReview: {
        id: '1',
        reviewer: 'AI Legal Assistant',
        status: 'approved',
        comments: ['Contract structure is sound', 'Payment terms are clear'],
        complianceIssues: ['Missing force majeure clause'],
        recommendations: ['Add dispute resolution clause', 'Include data protection terms'],
        reviewDate: new Date('2024-01-14'),
        aiAssisted: true
      },
      signatures: [
        {
          id: '1',
          partyId: '1',
          signature: 'TechCorp_Signature_2024',
          timestamp: new Date('2024-01-15'),
          ipAddress: '192.168.1.100',
          verified: true
        }
      ],
      attachments: [
        {
          id: '1',
          name: 'Technical_Specifications.pdf',
          type: 'application/pdf',
          size: 2048576,
          uploadedAt: new Date('2024-01-15'),
          aiAnalyzed: true
        }
      ]
    },
    {
      id: '2',
      title: 'Talent Employment Contract',
      type: 'employment',
      status: 'pending',
      parties: [
        {
          id: '3',
          name: 'Sarah Chen',
          type: 'provider',
          email: 'sarah.chen@email.com',
          address: '789 Talent Lane, Remote',
          verified: true
        },
        {
          id: '4',
          name: 'AI Startup Co',
          type: 'client',
          email: 'hr@aistartup.com',
          address: '321 Startup Blvd, Silicon Valley, CA',
          verified: true
        }
      ],
      terms: [
        {
          id: '3',
          section: 'Employment',
          title: 'AI Engineer Position',
          content: 'Employee shall serve as Senior AI Engineer with responsibilities including model development, algorithm optimization, and team leadership.',
          aiGenerated: true,
          compliance: true,
          riskLevel: 'low',
          recommendations: ['Add non-compete clause', 'Include IP assignment terms']
        }
      ],
      value: 120000,
      currency: 'USD',
      startDate: new Date('2024-02-01'),
      aiGenerated: true,
      complianceScore: 92,
      riskLevel: 'low',
      legalReview: {
        id: '2',
        reviewer: 'AI Legal Assistant',
        status: 'pending',
        comments: ['Employment terms are standard', 'Compensation is competitive'],
        complianceIssues: [],
        recommendations: ['Add remote work policies', 'Include performance metrics'],
        reviewDate: new Date('2024-01-20'),
        aiAssisted: true
      },
      signatures: [],
      attachments: []
    }
  ]

  // Mock disputes
  const mockDisputes: Dispute[] = [
    {
      id: '1',
      contractId: '1',
      type: 'payment',
      status: 'mediation',
      description: 'Client disputes final payment due to alleged quality issues with delivered AI models',
      evidence: [
        {
          id: '1',
          type: 'document',
          title: 'Quality Assessment Report',
          description: 'Third-party assessment of AI model performance',
          uploadedAt: new Date('2024-01-25'),
          aiAnalyzed: true,
          relevance: 0.85
        },
        {
          id: '2',
          type: 'testimony',
          title: 'Client Testimony',
          description: 'Client statement regarding model performance issues',
          uploadedAt: new Date('2024-01-26'),
          aiAnalyzed: true,
          relevance: 0.72
        }
      ],
      aiAnalysis: {
        strength: 0.65,
        weakness: 0.35,
        recommendation: 'Consider partial payment with performance guarantees',
        predictedOutcome: 'Likely settlement with 70-80% payment',
        confidence: 0.78,
        legalBasis: ['Contract performance terms', 'Industry standards', 'Precedent cases']
      },
      createdAt: new Date('2024-01-24'),
      updatedAt: new Date('2024-01-28')
    }
  ]

  // Mock templates
  const mockTemplates: LegalTemplate[] = [
    {
      id: '1',
      name: 'AI Service Agreement Template',
      category: 'Service Contracts',
      description: 'Comprehensive template for AI development and consulting services',
      aiOptimized: true,
      complianceScore: 88,
      usageCount: 156,
      lastUpdated: new Date('2024-01-10'),
      preview: 'This agreement governs the provision of AI development services...'
    },
    {
      id: '2',
      name: 'Employment Contract Template',
      category: 'Employment',
      description: 'Standard employment agreement with AI-specific clauses',
      aiOptimized: true,
      complianceScore: 92,
      usageCount: 89,
      lastUpdated: new Date('2024-01-15'),
      preview: 'This employment agreement establishes the terms of employment...'
    },
    {
      id: '3',
      name: 'NDA Template',
      category: 'Confidentiality',
      description: 'Non-disclosure agreement for AI projects and trade secrets',
      aiOptimized: true,
      complianceScore: 95,
      usageCount: 234,
      lastUpdated: new Date('2024-01-08'),
      preview: 'This non-disclosure agreement protects confidential information...'
    }
  ]

  // Mock compliance checks
  const mockComplianceChecks: ComplianceCheck[] = [
    {
      id: '1',
      contractId: '1',
      checkType: 'Data Privacy',
      status: 'pass',
      description: 'Contract includes appropriate data protection clauses',
      recommendation: 'Consider adding GDPR compliance if applicable',
      aiGenerated: true,
      checkedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      contractId: '1',
      checkType: 'Payment Terms',
      status: 'warning',
      description: 'Payment terms are clear but missing late payment penalties',
      recommendation: 'Add late payment interest rates and penalties',
      aiGenerated: true,
      checkedAt: new Date('2024-01-15')
    },
    {
      id: '3',
      contractId: '2',
      checkType: 'Employment Law',
      status: 'pass',
      description: 'Contract complies with local employment regulations',
      recommendation: 'Consider adding remote work policies',
      aiGenerated: true,
      checkedAt: new Date('2024-01-20')
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setContracts(mockContracts)
      setDisputes(mockDisputes)
      setTemplates(mockTemplates)
      setComplianceChecks(mockComplianceChecks)
      setIsLoading(false)
    }, 1000)
  }, [mockContracts, mockDisputes, mockTemplates, mockComplianceChecks])

  const filteredContracts = useMemo(() => {
    let filtered = contracts

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(c => c.status === selectedStatus)
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(c => c.type === selectedType)
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        case 'value':
          return b.value - a.value
        case 'risk':
          return getRiskLevelValue(b.riskLevel) - getRiskLevelValue(a.riskLevel)
        case 'compliance':
          return b.complianceScore - a.complianceScore
        default:
          return 0
      }
    })
  }, [contracts, selectedStatus, selectedType, sortBy])

  const getRiskLevelValue = (risk: string) => {
    switch (risk) {
      case 'low': return 1
      case 'medium': return 2
      case 'high': return 3
      default: return 1
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-500/20 text-gray-300'
      case 'pending': return 'bg-yellow-500/20 text-yellow-300'
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'completed': return 'bg-blue-500/20 text-blue-300'
      case 'disputed': return 'bg-red-500/20 text-red-300'
      case 'terminated': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-500/20 text-green-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'high': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getComplianceColor = (score: number) => {
    if (score >= 90) return 'bg-green-500/20 text-green-300'
    if (score >= 70) return 'bg-yellow-500/20 text-yellow-300'
    return 'bg-red-500/20 text-red-300'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Contract & Legal Management | Zion Tech Group</title>
        <meta name="description" content="Generate contracts, ensure legal compliance, resolve disputes, and manage legal aspects with AI-powered assistance." />
        <meta name="keywords" content="contract management, legal compliance, dispute resolution, AI legal assistant, contract generation" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Contract & Legal Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate contracts, ensure legal compliance, resolve disputes, and manage all legal aspects 
              of your marketplace transactions with intelligent AI assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📄 Generate Contracts</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⚖️ Legal Compliance</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤝 Dispute Resolution</span>
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
                onClick={() => setActiveTab('contracts')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'contracts'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Contracts ({contracts.length})
              </button>
              <button
                onClick={() => setActiveTab('disputes')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'disputes'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Disputes ({disputes.length})
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'templates'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Templates ({templates.length})
              </button>
              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'compliance'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Compliance Checks
              </button>
            </div>

            {/* Contracts Tab */}
            {activeTab === 'contracts' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="all" className="bg-slate-800">All Status</option>
                        <option value="draft" className="bg-slate-800">Draft</option>
                        <option value="pending" className="bg-slate-800">Pending</option>
                        <option value="active" className="bg-slate-800">Active</option>
                        <option value="completed" className="bg-slate-800">Completed</option>
                        <option value="disputed" className="bg-slate-800">Disputed</option>
                      </select>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="service" className="bg-slate-800">Service</option>
                        <option value="employment" className="bg-slate-800">Employment</option>
                        <option value="partnership" className="bg-slate-800">Partnership</option>
                        <option value="nda" className="bg-slate-800">NDA</option>
                      </select>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="date" className="bg-slate-800">Date</option>
                        <option value="value" className="bg-slate-800">Value</option>
                        <option value="risk" className="bg-slate-800">Risk Level</option>
                        <option value="compliance" className="bg-slate-800">Compliance</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Contract
                    </button>
                  </div>
                </div>

                {/* Contracts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredContracts.map((contract) => (
                    <div key={contract.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{contract.title}</h3>
                        <div className="flex space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                            {contract.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(contract.riskLevel)}`}>
                            {contract.riskLevel} risk
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Value:</span>
                          <span className="text-white">{contract.currency} {contract.value.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Parties:</span>
                          <span className="text-white">{contract.parties.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Compliance Score:</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplianceColor(contract.complianceScore)}`}>
                            {contract.complianceScore}%
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">AI Generated:</span>
                          <span className="text-white">{contract.aiGenerated ? 'Yes' : 'No'}</span>
                        </div>
                      </div>

                      {/* Parties */}
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-400 mb-2">Parties:</div>
                        <div className="space-y-2">
                          {contract.parties.map((party) => (
                            <div key={party.id} className="flex items-center justify-between text-sm">
                              <span className="text-white">{party.name}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                party.verified ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                              }`}>
                                {party.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Legal Review */}
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-400 mb-2">Legal Review:</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Status:</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              contract.legalReview.status === 'approved' ? 'bg-green-500/20 text-green-300' :
                              contract.legalReview.status === 'rejected' ? 'bg-red-500/20 text-red-300' :
                              'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {contract.legalReview.status}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Reviewer:</span>
                            <span className="text-white">{contract.legalReview.reviewer}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disputes Tab */}
            {activeTab === 'disputes' && (
              <div className="space-y-6">
                {disputes.map((dispute) => (
                  <div key={dispute.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Dispute #{dispute.id}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dispute.status === 'resolved' ? 'bg-green-500/20 text-green-300' :
                        dispute.status === 'closed' ? 'bg-gray-500/20 text-gray-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {dispute.status}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-1">Type:</div>
                        <div className="text-white capitalize">{dispute.type}</div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-1">Description:</div>
                        <div className="text-white">{dispute.description}</div>
                      </div>

                      {/* AI Analysis */}
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="text-sm font-medium text-gray-400 mb-2">AI Analysis:</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Strength:</span>
                            <span className="text-white">{Math.round(dispute.aiAnalysis.strength * 100)}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Weakness:</span>
                            <span className="text-white">{Math.round(dispute.aiAnalysis.weakness * 100)}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Confidence:</span>
                            <span className="text-white">{Math.round(dispute.aiAnalysis.confidence * 100)}%</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendation:</div>
                          <div className="text-white text-sm">{dispute.aiAnalysis.recommendation}</div>
                        </div>
                      </div>

                      {/* Evidence */}
                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-2">Evidence ({dispute.evidence.length}):</div>
                        <div className="space-y-2">
                          {dispute.evidence.map((evidence) => (
                            <div key={evidence.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                              <div>
                                <div className="text-white font-semibold">{evidence.title}</div>
                                <div className="text-gray-400 text-sm">{evidence.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-400">Relevance: {Math.round(evidence.relevance * 100)}%</div>
                                <div className="text-xs text-gray-500">{evidence.uploadedAt.toLocaleDateString()}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Add Evidence
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Templates Tab */}
            {activeTab === 'templates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                      {template.aiOptimized && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                          AI Optimized
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{template.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white">{template.category}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Compliance Score:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplianceColor(template.complianceScore)}`}>
                          {template.complianceScore}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Usage Count:</span>
                        <span className="text-white">{template.usageCount}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-400 mb-2">Preview:</div>
                      <div className="text-xs text-gray-300 bg-white/5 rounded-lg p-3">
                        {template.preview}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                      Use Template
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Compliance Tab */}
            {activeTab === 'compliance' && (
              <div className="space-y-6">
                {complianceChecks.map((check) => (
                  <div key={check.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{check.checkType}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        check.status === 'pass' ? 'bg-green-500/20 text-green-300' :
                        check.status === 'fail' ? 'bg-red-500/20 text-red-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {check.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-1">Description:</div>
                        <div className="text-white">{check.description}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-1">Recommendation:</div>
                        <div className="text-white">{check.recommendation}</div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">AI Generated:</span>
                        <span className="text-white">{check.aiGenerated ? 'Yes' : 'No'}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Checked:</span>
                        <span className="text-white">{check.checkedAt.toLocaleDateString()}</span>
                      </div>
                    </div>

                    <button className="w-full border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                      View Details
                    </button>
                  </div>
                ))}
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
              Ready to Manage Your Legal Affairs?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating contracts, ensuring compliance, and resolving disputes 
              with our AI-powered legal management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Create Contract
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Legal Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredContractLegalPage 