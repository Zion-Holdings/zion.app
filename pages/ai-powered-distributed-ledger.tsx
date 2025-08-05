import type { NextPage }  from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link  from 'next/link';

interface DistributedLedger {
  id: string;
  name: string;
  description: string;
  type: 'blockchain' | 'hashgraph' | 'dag' | 'tangle' | 'holochain' | 'tempo';
  status: 'active' | 'inactive' | 'syncing' | 'error' | 'offline';
  nodes: number;
  transactions: number;
  blockTime: number;
  aiAnalysis: LedgerAnalysis;
}

interface LedgerAnalysis {
  id: string;
  performanceScore: number;
  securityScore: number;
  scalabilityScore: number;
  recommendations: string[];
}

interface ConsensusMechanism {
  id: string;
  title: string;
  description: string;
  type: 'proof_of_work' | 'proof_of_stake' | 'delegated_proof_of_stake' | 'proof_of_authority' | 'byzantine_fault_tolerance' | 'practical_byzantine_fault_tolerance';
  status: 'active' | 'inactive' | 'validating' | 'error' | 'offline';
  validators: number;
  consensusTime: number;
  aiOptimization: ConsensusOptimization;
}

interface ConsensusOptimization {
  id: string;
  consensusScore: number;
  securityScore: number;
  efficiencyScore: number;
  recommendations: string[];
}

interface SmartContract {
  id: string;
  name: string;
  description: string;
  type: 'defi' | 'nft' | 'governance' | 'oracle' | 'identity' | 'supply_chain';
  status: 'active' | 'inactive' | 'deploying' | 'error' | 'offline';
  gasUsed: number;
  complexity: number;
  aiAnalysis: ContractAnalysis;
}

interface ContractAnalysis {
  id: string;
  securityScore: number;
  efficiencyScore: number;
  auditScore: number;
  recommendations: string[];
}

interface BlockchainGovernance {
  id: string;
  governanceId: string;
  title: string;
  description: string;
  type: 'dao' | 'on_chain_governance' | 'off_chain_governance' | 'hybrid_governance' | 'consensus_governance' | 'stakeholder_governance';
  status: 'active' | 'inactive' | 'voting' | 'error' | 'offline';
  proposals: number;
  participants: number;
  aiAnalysis: GovernanceAnalysis;
}

interface GovernanceAnalysis {
  id: string;
  governanceScore: number;
  participationScore: number;
  transparencyScore: number;
  recommendations: string[];
}

interface DecentralizedApplication {
  id: string;
  appId: string;
  title: string;
  description: string;
  type: 'defi_application' | 'gaming_application' | 'social_application' | 'enterprise_application' | 'identity_application' | 'supply_chain_application';
  status: 'active' | 'inactive' | 'developing' | 'error' | 'offline';
  users: number;
  transactions: number;
  aiAnalysis: DAppAnalysis;
}

interface DAppAnalysis {
  id: string;
  adoptionScore: number;
  performanceScore: number;
  userExperienceScore: number;
  recommendations: string[];
}

interface DistributedLedgerManagement {
  id: string;
  systemId: string;
  title: string;
  description: string;
  category: 'network' | 'security' | 'performance' | 'governance' | 'development' | 'maintenance';
  status: 'operational' | 'maintenance' | 'error' | 'offline';
  networks: number;
  efficiency: number;
  aiAnalysis: ManagementAnalysis;
}

interface ManagementAnalysis {
  id: string;
  managementScore: number;
  performanceScore: number;
  reliabilityScore: number;
  recommendations: string[];
}

interface DistributedLedgerAnalytics {
  totalLedgers: number;
  activeConsensusMechanisms: number;
  smartContracts: number;
  governanceSystems: number;
  decentralizedApplications: number;
  managedNetworks: number;
  averageBlockTime: number;
  aiOptimizationScore: number;
  aiInsights: DistributedLedgerInsight[];
}

interface DistributedLedgerInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredDistributedLedgerPage: NextPage = () => {
  const [distributedLedgers, setDistributedLedgers] = useState<DistributedLedger[]>([])
  const [consensusMechanisms, setConsensusMechanisms] = useState<ConsensusMechanism[]>([])
  const [smartContracts, setSmartContracts] = useState<SmartContract[]>([])
  const [blockchainGovernance, setBlockchainGovernance] = useState<BlockchainGovernance[]>([])
  const [decentralizedApplications, setDecentralizedApplications] = useState<DecentralizedApplication[]>([])
  const [distributedLedgerManagement, setDistributedLedgerManagement] = useState<DistributedLedgerManagement[]>([])
  const [analytics, setAnalytics] = useState<DistributedLedgerAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'ledgers' | 'consensus' | 'contracts' | 'governance' | 'dapps' | 'management' | 'overview'>('ledgers')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockDistributedLedgers: DistributedLedger[] = [
    {
      id: '1',
      name: 'Enterprise Blockchain Network',
      description: 'High-performance distributed ledger for enterprise applications',
      type: 'blockchain',
      status: 'active',
      nodes: 150,
      transactions: 50000,
      blockTime: 2.5,
      aiAnalysis: {
        id: '1',
        performanceScore: 94,
        securityScore: 96,
        scalabilityScore: 92,
        recommendations: ['Optimize consensus mechanism', 'Enhance network security']
      }
    }
  ]

  const mockConsensusMechanisms: ConsensusMechanism[] = [
    {
      id: '1',
      title: 'Proof of Stake Consensus',
      description: 'Energy-efficient consensus mechanism with stake-based validation',
      type: 'proof_of_stake',
      status: 'active',
      validators: 100,
      consensusTime: 1.2,
      aiOptimization: {
        id: '1',
        consensusScore: 95,
        securityScore: 93,
        efficiencyScore: 97,
        recommendations: ['Increase validator count', 'Optimize stake distribution']
      }
    }
  ]

  const mockSmartContracts: SmartContract[] = [
    {
      id: '1',
      name: 'DeFi Lending Protocol',
      description: 'Decentralized lending and borrowing smart contract',
      type: 'defi',
      status: 'active',
      gasUsed: 150000,
      complexity: 85,
      aiAnalysis: {
        id: '1',
        securityScore: 94,
        efficiencyScore: 91,
        auditScore: 96,
        recommendations: ['Optimize gas usage', 'Enhance security measures']
      }
    }
  ]

  const mockBlockchainGovernance: BlockchainGovernance[] = [
    {
      id: '1',
      governanceId: 'BG-001',
      title: 'DAO Governance System',
      description: 'Decentralized autonomous organization for blockchain governance',
      type: 'dao',
      status: 'active',
      proposals: 25,
      participants: 500,
      aiAnalysis: {
        id: '1',
        governanceScore: 92,
        participationScore: 88,
        transparencyScore: 95,
        recommendations: ['Increase participation', 'Enhance transparency measures']
      }
    }
  ]

  const mockDecentralizedApplications: DecentralizedApplication[] = [
    {
      id: '1',
      appId: 'DAPP-001',
      title: 'DeFi Trading Platform',
      description: 'Decentralized trading and liquidity provision application',
      type: 'defi_application',
      status: 'active',
      users: 10000,
      transactions: 50000,
      aiAnalysis: {
        id: '1',
        adoptionScore: 89,
        performanceScore: 93,
        userExperienceScore: 91,
        recommendations: ['Improve user onboarding', 'Optimize transaction speed']
      }
    }
  ]

  const mockDistributedLedgerManagement: DistributedLedgerManagement[] = [
    {
      id: '1',
      systemId: 'DLM-001',
      title: 'Distributed Ledger Management',
      description: 'Comprehensive management of distributed ledger infrastructure',
      category: 'network',
      status: 'operational',
      networks: 8,
      efficiency: 96.5,
      aiAnalysis: {
        id: '1',
        managementScore: 93,
        performanceScore: 95,
        reliabilityScore: 94,
        recommendations: ['Monitor network health', 'Optimize consensus protocols']
      }
    }
  ]

  const mockAnalytics: DistributedLedgerAnalytics = {
    totalLedgers: 45,
    activeConsensusMechanisms: 12,
    smartContracts: 89,
    governanceSystems: 15,
    decentralizedApplications: 67,
    managedNetworks: 8,
    averageBlockTime: 2.8,
    aiOptimizationScore: 94,
    aiInsights: [
      {
        id: '1',
        title: 'High Distributed Ledger Performance',
        description: 'AI-powered distributed ledger system shows 94% optimization score with optimized consensus mechanisms',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Continue AI monitoring', 'Expand distributed ledger capabilities']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setDistributedLedgers(mockDistributedLedgers)
      setConsensusMechanisms(mockConsensusMechanisms)
      setSmartContracts(mockSmartContracts)
      setBlockchainGovernance(mockBlockchainGovernance)
      setDecentralizedApplications(mockDecentralizedApplications)
      setDistributedLedgerManagement(mockDistributedLedgerManagement)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [])

  const filteredLedgers = useMemo(() => {
    let filtered = distributedLedgers
    if (selectedType !== 'all') {
      filtered = filtered.filter(ledger => ledger.type === selectedType)
    }
    return filtered
  }, [distributedLedgers, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'inactive': return 'bg-gray-500/20 text-gray-300'
      case 'syncing': return 'bg-blue-500/20 text-blue-300'
      case 'error': return 'bg-red-500/20 text-red-300'
      case 'offline': return 'bg-gray-500/20 text-gray-300'
      case 'validating': return 'bg-purple-500/20 text-purple-300'
      case 'deploying': return 'bg-yellow-500/20 text-yellow-300'
      case 'voting': return 'bg-orange-500/20 text-orange-300'
      case 'developing': return 'bg-indigo-500/20 text-indigo-300'
      case 'operational': return 'bg-green-500/20 text-green-300'
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blockchain': return 'bg-blue-500/20 text-blue-300'
      case 'hashgraph': return 'bg-green-500/20 text-green-300'
      case 'dag': return 'bg-purple-500/20 text-purple-300'
      case 'tangle': return 'bg-orange-500/20 text-orange-300'
      case 'holochain': return 'bg-red-500/20 text-red-300'
      case 'tempo': return 'bg-yellow-500/20 text-yellow-300'
      case 'proof_of_work': return 'bg-blue-500/20 text-blue-300'
      case 'proof_of_stake': return 'bg-green-500/20 text-green-300'
      case 'delegated_proof_of_stake': return 'bg-purple-500/20 text-purple-300'
      case 'proof_of_authority': return 'bg-orange-500/20 text-orange-300'
      case 'byzantine_fault_tolerance': return 'bg-red-500/20 text-red-300'
      case 'practical_byzantine_fault_tolerance': return 'bg-yellow-500/20 text-yellow-300'
      case 'defi': return 'bg-blue-500/20 text-blue-300'
      case 'nft': return 'bg-green-500/20 text-green-300'
      case 'governance': return 'bg-purple-500/20 text-purple-300'
      case 'oracle': return 'bg-orange-500/20 text-orange-300'
      case 'identity': return 'bg-red-500/20 text-red-300'
      case 'supply_chain': return 'bg-yellow-500/20 text-yellow-300'
      case 'dao': return 'bg-blue-500/20 text-blue-300'
      case 'on_chain_governance': return 'bg-green-500/20 text-green-300'
      case 'off_chain_governance': return 'bg-purple-500/20 text-purple-300'
      case 'hybrid_governance': return 'bg-orange-500/20 text-orange-300'
      case 'consensus_governance': return 'bg-red-500/20 text-red-300'
      case 'stakeholder_governance': return 'bg-yellow-500/20 text-yellow-300'
      case 'defi_application': return 'bg-blue-500/20 text-blue-300'
      case 'gaming_application': return 'bg-green-500/20 text-green-300'
      case 'social_application': return 'bg-purple-500/20 text-purple-300'
      case 'enterprise_application': return 'bg-orange-500/20 text-orange-300'
      case 'identity_application': return 'bg-red-500/20 text-red-300'
      case 'supply_chain_application': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Distributed Ledger & Consensus System | Zion Tech Group</title>
        <meta name="description" content="Distributed ledger technology, consensus mechanisms, smart contracts, blockchain governance, decentralized applications, and automated distributed ledger management powered by AI." />
        <meta name="keywords" content="distributed ledger, consensus mechanisms, smart contracts, blockchain governance, decentralized applications, AI blockchain" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-44">
          <div className="text-center">
            <h1 className="text-5xl md text-6xl font-bold text-white mb-6">
              AI-Powered Distributed Ledger & Consensus System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Distributed ledger technology, consensus mechanisms, smart contracts, 
              blockchain governance, decentralized applications, and automated distributed ledger management powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🔗 Distributed Ledger</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⚡ Consensus Mechanisms</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📜 Smart Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32">
        {isLoading ? (
          <div className="flex justify-center items-center py-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('ledgers')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'ledgers'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Distributed Ledgers ({distributedLedgers.length})
              </button>
              <button
                onClick={() => setActiveTab('consensus')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'consensus'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Consensus Mechanisms ({consensusMechanisms.length})
              </button>
              <button
                onClick={() => setActiveTab('contracts')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'contracts'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Smart Contracts ({smartContracts.length})
              </button>
              <button
                onClick={() => setActiveTab('governance')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'governance'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Blockchain Governance ({blockchainGovernance.length})
              </button>
              <button
                onClick={() => setActiveTab('dapps')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'dapps'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Decentralized Apps ({decentralizedApplications.length})
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'management'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Management ({distributedLedgerManagement.length})
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Overview
              </button>
            </div>

            {/* Distributed Ledgers Tab */}
            {activeTab === 'ledgers' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus:outline-none focus:ring-2 focus ring-indigo-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="blockchain" className="bg-slate-800">Blockchain</option>
                        <option value="hashgraph" className="bg-slate-800">Hashgraph</option>
                        <option value="dag" className="bg-slate-800">DAG</option>
                        <option value="tangle" className="bg-slate-800">Tangle</option>
                        <option value="holochain" className="bg-slate-800">Holochain</option>
                        <option value="tempo" className="bg-slate-800">Tempo</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover to-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300">
                      Create Distributed Ledger
                    </button>
                  </div>
                </div>

                {/* Distributed Ledgers Grid */}
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {filteredLedgers.map((ledger) => (
                    <div key={ledger.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{ledger.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{ledger.type.replace('_', ' ')} Ledger</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(ledger.status)}`}>
                            {ledger.status}
                          </span>
                          <div className="mt-2">
                            <span className={`px-4 py-3 rounded-full text-xs font-medium ${getTypeColor(ledger.type)}`}>
                              {ledger.nodes} nodes
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{ledger.description}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Transactions</div>
                          <div className="text-2xl font-bold text-white">{ledger.transactions.toLocaleString()}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Block Time</div>
                          <div className="text-2xl font-bold text-white">{ledger.blockTime}s</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Nodes</div>
                          <div className="text-2xl font-bold text-white">{ledger.nodes}</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Performance</div>
                              <div className="text-white font-semibold">{ledger.aiAnalysis.performanceScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Security</div>
                              <div className="text-white font-semibold">{ledger.aiAnalysis.securityScore}%</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Scalability</div>
                              <div className="text-white font-semibold">{ledger.aiAnalysis.scalabilityScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                            <div className="text-xs text-gray-300">
                              {ledger.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover to-purple-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalLedgers.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Distributed Ledgers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.averageBlockTime.toLocaleString()}s</div>
                    <div className="text-gray-400 text-sm">Avg Block Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.smartContracts.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Smart Contracts</div>
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
                      <div key={insight.id} className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4">
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
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-36">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build on Distributed Ledger Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your distributed ledger journey with our AI-powered system 
              and ensure comprehensive distributed ledger management.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 transform hover scale-105">
                Start Building
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredDistributedLedgerPage 