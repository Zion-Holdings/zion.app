import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Dispute {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'mediation' | 'arbitration' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  type: 'payment' | 'service' | 'quality' | 'delivery' | 'communication';
  parties: {
    complainant: string;
    respondent: string;
  };
  amount: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
  assignedMediator?: string;
  resolution?: string;
  evidence: Evidence[];
  timeline: TimelineEvent[];
}

interface Evidence {
  id: string;
  type: 'document' | 'image' | 'video' | 'audio' | 'testimony';
  title: string;
  description: string;
  uploadedBy: string;
  uploadedAt: Date;
  url: string;
}

interface TimelineEvent {
  id: string;
  type: 'created' | 'assigned' | 'mediation_started' | 'evidence_submitted' | 'arbitration_requested' | 'resolution_proposed' | 'resolved' | 'closed';
  title: string;
  description: string;
  timestamp: Date;
  actor: string;
}

interface Mediator {
  id: string;
  name: string;
  specialization: string[];
  rating: number;
  casesResolved: number;
  availability: 'available' | 'busy' | 'unavailable';
  hourlyRate: number;
}

interface ResolutionProposal {
  id: string;
  disputeId: string;
  proposedBy: string;
  type: 'refund' | 'partial_refund' | 'service_redo' | 'compensation' | 'apology' | 'other';
  amount?: number;
  description: string;
  status: 'pending' | 'accepted' | 'rejected' | 'modified';
  createdAt: Date;
  responses: ResolutionResponse[];
}

interface ResolutionResponse {
  id: string;
  proposalId: string;
  partyId: string;
  response: 'accept' | 'reject' | 'modify';
  comment?: string;
  timestamp: Date;
}

const DisputeResolutionPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('disputes')
  const [selectedDispute, setSelectedDispute] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterType, setFilterType] = useState<string>('all')
  
  const [disputes, setDisputes] = useState<Dispute[]>([
    {
      id: 'DISP-001',
      title: 'Service Quality Dispute',
      description: 'Client claims the delivered AI solution does not meet the agreed specifications and performance benchmarks.',
      status: 'mediation',
      priority: 'high',
      type: 'service',
      parties: {
        complainant: 'TechCorp Solutions',
        respondent: 'AI Development Pro'
      },
      amount: 15000,
      currency: 'USD',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-20'),
      assignedMediator: 'Sarah Johnson',
      evidence: [
        {
          id: 'EVID-001',
          type: 'document',
          title: 'Service Agreement',
          description: 'Original service agreement with specifications',
          uploadedBy: 'TechCorp Solutions',
          uploadedAt: new Date('2024-01-15'),
          url: '#'
        },
        {
          id: 'EVID-002',
          type: 'document',
          title: 'Performance Test Results',
          description: 'Test results showing performance issues',
          uploadedBy: 'TechCorp Solutions',
          uploadedAt: new Date('2024-01-16'),
          url: '#'
        }
      ],
      timeline: [
        {
          id: 'TIMELINE-001',
          type: 'created',
          title: 'Dispute Created',
          description: 'Dispute filed by TechCorp Solutions',
          timestamp: new Date('2024-01-15'),
          actor: 'TechCorp Solutions'
        },
        {
          id: 'TIMELINE-002',
          type: 'assigned',
          title: 'Mediator Assigned',
          description: 'Sarah Johnson assigned as mediator',
          timestamp: new Date('2024-01-16'),
          actor: 'System'
        },
        {
          id: 'TIMELINE-003',
          type: 'mediation_started',
          title: 'Mediation Started',
          description: 'Initial mediation session scheduled',
          timestamp: new Date('2024-01-17'),
          actor: 'Sarah Johnson'
        }
      ]
    },
    {
      id: 'DISP-002',
      title: 'Payment Dispute',
      description: 'Seller claims payment was not received for completed work.',
      status: 'open',
      priority: 'urgent',
      type: 'payment',
      parties: {
        complainant: 'Freelance Developer',
        respondent: 'Startup Inc'
      },
      amount: 5000,
      currency: 'USD',
      createdAt: new Date('2024-01-18'),
      updatedAt: new Date('2024-01-18'),
      evidence: [
        {
          id: 'EVID-003',
          type: 'document',
          title: 'Work Completion Certificate',
          description: 'Certificate of completed work',
          uploadedBy: 'Freelance Developer',
          uploadedAt: new Date('2024-01-18'),
          url: '#'
        }
      ],
      timeline: [
        {
          id: 'TIMELINE-004',
          type: 'created',
          title: 'Dispute Created',
          description: 'Payment dispute filed',
          timestamp: new Date('2024-01-18'),
          actor: 'Freelance Developer'
        }
      ]
    },
    {
      id: 'DISP-003',
      title: 'Delivery Timeline Dispute',
      description: 'Client claims project was delivered late and requests compensation.',
      status: 'resolved',
      priority: 'medium',
      type: 'delivery',
      parties: {
        complainant: 'Marketing Agency',
        respondent: 'Web Development Studio'
      },
      amount: 8000,
      currency: 'USD',
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-14'),
      assignedMediator: 'Michael Chen',
      resolution: 'Partial refund of $2,000 for delayed delivery',
      evidence: [
        {
          id: 'EVID-004',
          type: 'document',
          title: 'Project Timeline',
          description: 'Original project timeline and milestones',
          uploadedBy: 'Marketing Agency',
          uploadedAt: new Date('2024-01-10'),
          url: '#'
        }
      ],
      timeline: [
        {
          id: 'TIMELINE-005',
          type: 'created',
          title: 'Dispute Created',
          description: 'Delivery dispute filed',
          timestamp: new Date('2024-01-10'),
          actor: 'Marketing Agency'
        },
        {
          id: 'TIMELINE-006',
          type: 'resolved',
          title: 'Dispute Resolved',
          description: 'Partial refund agreed upon',
          timestamp: new Date('2024-01-14'),
          actor: 'Michael Chen'
        }
      ]
    }
  ])

  const [mediators, setMediators] = useState<Mediator[]>([
    {
      id: 'MED-001',
      name: 'Sarah Johnson',
      specialization: ['Technology', 'AI Services', 'Software Development'],
      rating: 4.8,
      casesResolved: 45,
      availability: 'available',
      hourlyRate: 150
    },
    {
      id: 'MED-002',
      name: 'Michael Chen',
      specialization: ['Business', 'Marketing', 'Project Management'],
      rating: 4.9,
      casesResolved: 67,
      availability: 'busy',
      hourlyRate: 140
    },
    {
      id: 'MED-003',
      name: 'Dr. Emily Rodriguez',
      specialization: ['Legal', 'Contract Law', 'Intellectual Property'],
      rating: 4.7,
      casesResolved: 38,
      availability: 'available',
      hourlyRate: 180
    }
  ])

  const [resolutionProposals, setResolutionProposals] = useState<ResolutionProposal[]>([
    {
      id: 'PROP-001',
      disputeId: 'DISP-001',
      proposedBy: 'Sarah Johnson',
      type: 'partial_refund',
      amount: 5000,
      description: 'Partial refund of $5,000 for performance issues, with option to redo the work',
      status: 'pending',
      createdAt: new Date('2024-01-19'),
      responses: [
        {
          id: 'RESP-001',
          proposalId: 'PROP-001',
          partyId: 'TechCorp Solutions',
          response: 'accept',
          comment: 'This is a fair resolution',
          timestamp: new Date('2024-01-19')
        },
        {
          id: 'RESP-002',
          proposalId: 'PROP-001',
          partyId: 'AI Development Pro',
          response: 'modify',
          comment: 'Would prefer to redo the work instead of refund',
          timestamp: new Date('2024-01-20')
        }
      ]
    }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'mediation': return 'text-blue-400 bg-blue-500/20 border-blue-500/30'
      case 'arbitration': return 'text-purple-400 bg-purple-500/20 border-purple-500/30'
      case 'resolved': return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'closed': return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'high': return 'text-orange-400 bg-orange-500/20 border-orange-500/30'
      case 'urgent': return 'text-red-400 bg-red-500/20 border-red-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'payment': return '💰'
      case 'service': return '⚙️'
      case 'quality': return '📊'
      case 'delivery': return '📦'
      case 'communication': return '💬'
      default: return '❓'
    }
  }

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount)
  }

  const filteredDisputes = disputes.filter(dispute => {
    const statusMatch = filterStatus === 'all' || dispute.status === filterStatus
    const typeMatch = filterType === 'all' || dispute.type === filterType
    return statusMatch && typeMatch
  })

  const getDisputeStats = () => {
    const total = disputes.length
    const open = disputes.filter(d => d.status === 'open').length
    const inProgress = disputes.filter(d => d.status === 'mediation' || d.status === 'arbitration').length
    const resolved = disputes.filter(d => d.status === 'resolved').length
    const totalAmount = disputes.reduce((sum, d) => sum + d.amount, 0)
    
    return { total, open, inProgress, resolved, totalAmount }
  }

  const stats = getDisputeStats()

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Dispute Resolution Center - Zion Marketplace</title>
        <meta name="description" content="Comprehensive dispute resolution center for marketplace conflicts. Professional mediation, arbitration, and fair resolution services." />
        <meta name="keywords" content="dispute resolution, mediation, arbitration, conflict resolution, marketplace disputes" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/escrow-services" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Escrow
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Dispute Resolution Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional dispute resolution services for marketplace conflicts. 
            Fair mediation, arbitration, and conflict resolution to ensure all parties reach satisfactory outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#disputes" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
              View Disputes
            </Link>
            <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              File Dispute
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.total}</div>
            <p className="text-gray-300 text-sm">Total Disputes</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.open}</div>
            <p className="text-gray-300 text-sm">Open Cases</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.inProgress}</div>
            <p className="text-gray-300 text-sm">In Progress</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.resolved}</div>
            <p className="text-gray-300 text-sm">Resolved</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">{formatCurrency(stats.totalAmount)}</div>
            <p className="text-gray-300 text-sm">Total Value</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'disputes', label: 'Disputes' },
            { id: 'mediators', label: 'Mediators' },
            { id: 'proposals', label: 'Resolutions' },
            { id: 'resources', label: 'Resources' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        {activeTab === 'disputes' && (
          <div className="flex flex-wrap gap-4 mb-8">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="mediation">Mediation</option>
              <option value="arbitration">Arbitration</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Types</option>
              <option value="payment">Payment</option>
              <option value="service">Service</option>
              <option value="quality">Quality</option>
              <option value="delivery">Delivery</option>
              <option value="communication">Communication</option>
            </select>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === 'disputes' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Disputes</h2>
              <Link href="/marketplace" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                File New Dispute
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDisputes.map((dispute) => (
                <div key={dispute.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getTypeIcon(dispute.type)}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{dispute.title}</h3>
                        <p className="text-gray-300 text-sm">{dispute.id}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getStatusColor(dispute.status)}`}>
                        {dispute.status.toUpperCase()}
                      </span>
                      <span className={`px-3 py-3 rounded-full text-xs font-medium border ${getPriorityColor(dispute.priority)}`}>
                        {dispute.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <p className="text-gray-300 text-sm line-clamp-2">{dispute.description}</p>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Amount:</span>
                      <span className="text-white font-semibold">{formatCurrency(dispute.amount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Parties:</span>
                      <span className="text-white text-sm">{dispute.parties.complainant} vs {dispute.parties.respondent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Created:</span>
                      <span className="text-white">{dispute.createdAt.toLocaleDateString()}</span>
                    </div>
                    {dispute.assignedMediator && (
                      <div className="flex justify-between">
                        <span className="text-gray-300">Mediator:</span>
                        <span className="text-white">{dispute.assignedMediator}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/10 text-white hover:bg-white/20 px-3 py-4 rounded text-sm transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-3 py-4 rounded text-sm transition-colors">
                      Update Status
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mediators' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Professional Mediators</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediators.map((mediator) => (
                <div key={mediator.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{mediator.name}</h3>
                      <p className="text-gray-300 text-sm">Professional Mediator</p>
                    </div>
                    <span className={`px-3 py-3 rounded-full text-xs font-medium border ${
                      mediator.availability === 'available' 
                        ? 'text-green-400 bg-green-500/20 border-green-500/30'
                        : mediator.availability === 'busy'
                        ? 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                        : 'text-red-400 bg-red-500/20 border-red-500/30'
                    }`}>
                      {mediator.availability.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Rating:</span>
                      <span className="text-white">⭐ {mediator.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Cases Resolved:</span>
                      <span className="text-white">{mediator.casesResolved}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Hourly Rate:</span>
                      <span className="text-white">{formatCurrency(mediator.hourlyRate)}</span>
                    </div>
                    <div>
                      <span className="text-gray-300 text-sm">Specializations:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mediator.specialization.map((spec, index) => (
                          <span key={index} className="px-4 py-3 bg-white/10 rounded text-xs text-white">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/10 text-white hover:bg-white/20 px-3 py-4 rounded text-sm transition-colors">
                      View Profile
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-3 py-4 rounded text-sm transition-colors">
                      Request Assignment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'proposals' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Resolution Proposals</h2>
            
            <div className="space-y-6">
              {resolutionProposals.map((proposal) => (
                <div key={proposal.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Resolution Proposal</h3>
                      <p className="text-gray-300 text-sm">Dispute: {proposal.disputeId}</p>
                    </div>
                    <span className={`px-3 py-3 rounded-full text-xs font-medium border ${
                      proposal.status === 'pending' 
                        ? 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                        : proposal.status === 'accepted'
                        ? 'text-green-400 bg-green-500/20 border-green-500/30'
                        : 'text-red-400 bg-red-500/20 border-red-500/30'
                    }`}>
                      {proposal.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Proposed By:</span>
                      <span className="text-white">{proposal.proposedBy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Type:</span>
                      <span className="text-white capitalize">{proposal.type.replace('_', ' ')}</span>
                    </div>
                    {proposal.amount && (
                      <div className="flex justify-between">
                        <span className="text-gray-300">Amount:</span>
                        <span className="text-white font-semibold">{formatCurrency(proposal.amount)}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-300">Description:</span>
                      <p className="text-white mt-1">{proposal.description}</p>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Created:</span>
                      <span className="text-white">{proposal.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Responses:</h4>
                    {proposal.responses.map((response) => (
                      <div key={response.id} className="bg-white/5 rounded p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{response.partyId}</span>
                          <span className={`px-4 py-3 rounded text-xs font-medium ${
                            response.response === 'accept'
                              ? 'text-green-400 bg-green-500/20'
                              : response.response === 'reject'
                              ? 'text-red-400 bg-red-500/20'
                              : 'text-yellow-400 bg-yellow-500/20'
                          }`}>
                            {response.response.toUpperCase()}
                          </span>
                        </div>
                        {response.comment && (
                          <p className="text-gray-300 text-sm">{response.comment}</p>
                        )}
                        <p className="text-gray-400 text-xs mt-1">{response.timestamp.toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-white/10 text-white hover:bg-white/20 px-3 py-4 rounded text-sm transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-3 py-4 rounded text-sm transition-colors">
                      Respond
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Dispute Resolution Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">How to File a Dispute</h3>
                <div className="space-y-3 text-gray-300">
                  <p>1. Gather all relevant documentation and evidence</p>
                  <p>2. Contact the other party to attempt direct resolution</p>
                  <p>3. If unresolved, submit a formal dispute through our platform</p>
                  <p>4. Provide detailed description and supporting evidence</p>
                  <p>5. Choose your preferred resolution method</p>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-4 rounded text-sm transition-colors">
                  File Dispute
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Resolution Methods</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Mediation:</strong> Neutral third-party facilitates discussion</p>
                  <p><strong>Arbitration:</strong> Binding decision by neutral arbitrator</p>
                  <p><strong>Negotiation:</strong> Direct discussion between parties</p>
                  <p><strong>Expert Review:</strong> Technical assessment by specialists</p>
                </div>
                <button className="w-full mt-4 bg-white/10 text-white hover:bg-white/20 px-4 py-4 rounded text-sm transition-colors">
                  Learn More
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Evidence Guidelines</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• Contracts and agreements</p>
                  <p>• Communication records</p>
                  <p>• Payment receipts and invoices</p>
                  <p>• Screenshots and documentation</p>
                  <p>• Witness statements</p>
                </div>
                <button className="w-full mt-4 bg-white/10 text-white hover:bg-white/20 px-4 py-4 rounded text-sm transition-colors">
                  View Guidelines
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Success Stories</h3>
                <div className="space-y-3 text-gray-300">
                  <p>• 85% resolution rate through mediation</p>
                  <p>• Average resolution time: 14 days</p>
                  <p>• 92% satisfaction rate from parties</p>
                  <p>• $2.3M in disputes resolved this year</p>
                </div>
                <button className="w-full mt-4 bg-white/10 text-white hover:bg-white/20 px-4 py-4 rounded text-sm transition-colors">
                  Read Stories
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fair Resolution for All
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Professional dispute resolution services ensure fair outcomes for all marketplace participants. 
              Our experienced mediators and comprehensive processes help resolve conflicts efficiently and fairly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#disputes" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
                Get Started
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Marketplace</h3>
              <p className="text-gray-300 text-sm">
                The first free AI-powered marketplace for high-tech products, services, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Dispute Resolution</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/dispute-resolution" className="text-gray-400 hover:text-white transition-colors">Dispute Center</Link></li>
                <li><Link href="/escrow-services" className="text-gray-400 hover:text-white transition-colors">Escrow Services</Link></li>
                <li><Link href="/warranty-protection" className="text-gray-400 hover:text-white transition-colors">Warranty Protection</Link></li>
                <li><Link href="/invoice-billing" className="text-gray-400 hover:text-white transition-colors">Invoice & Billing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/real-time-chat" className="text-gray-400 hover:text-white transition-colors">Live Chat</Link></li>
                <li><Link href="/notifications" className="text-gray-400 hover:text-white transition-colors">Notifications</Link></li>
                <li><Link href="/ai-powered-contract-legal" className="text-gray-400 hover:text-white transition-colors">Legal Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/auth/signup" className="text-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href="/auth/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
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

export default DisputeResolutionPage 