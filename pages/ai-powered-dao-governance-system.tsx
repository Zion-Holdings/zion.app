import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head";
import { useState, useEffect, useRef }  from 'react";
import Link from 'next/link";

interface DAOProposal {
  id: string
  title: string'
  description: string
  category: 'governance' | 'treasury' | 'development' | 'partnership' | 'emergency
  status: 'active' | 'passed' | 'rejected' | 'executed' | 'expired
  creator: string
  createdAt: string
  endDate: string
  votesFor: number
  votesAgainst: number
  votesAbstain: number
  quorum: number
  requiredQuorum: number'
  executionDelay: number
  proposalType: 'standard' | 'emergency' | 'parameter' | 'upgrade
  actions: {
    target: string
    value: string
    data: string
    description: string
  }[]}
interface DAOToken {
  symbol: string
  name: string
  totalSupply: number
  circulatingSupply: number
  holders: number
  price: number
  marketCap: number
  treasuryBalance: number
  votingPower: number}
interface DAOMember {
  address: string
  username: string
  avatar: string
  tokens: number
  votingPower: number
  reputation: number
  joinDate: string
  proposalsCreated: number
  proposalsPassed: number
  lastActive: string
  badges: string[]}
interface DAOTreasury {
  totalBalance: number
  tokens: {
    symbol: string
    balance: number
    value: number
    allocation: number
  }[]
  recentTransactions: {'
    id: string
    type: 'deposit' | 'withdrawal' | 'transfer' | 'investment
    amount: number
    token: string
    description: string
    timestamp: string
    txHash: string
  }[]
  allocations: {
    category: string
    amount: number
    percentage: number
    description: string
  }[]}
interface DAOGovernance {
  votingPeriod: number
  executionDelay: number
  quorum: number
  threshold: number
  timelock: number
  emergencyThreshold: number
  proposalThreshold: number
  minVotingPower: number}
const AIPoweredDAOGovernanceSystem: NextPage = () => {'
  const [activeTab, setActiveTab] = useState('overview
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null
  const [isLoading, setIsLoading] = useState(false
  const [userVotingPower, setUserVotingPower] = useState(0
  const [userTokens, setUserTokens] = useState(0
  const [isConnected, setIsConnected] = useState(false
  const [daoMetrics, setDaoMetrics] = useState<any>(null
  const chartRef = useRef<HTMLDivElement>(null
  // Mock data for demonstration
  const $1: $2[] = [
    {
      id: 'prop-001',
      title: 'Implement AI-Powered Marketplace Matching Algorithm',
      description: 'Proposal to integrate advanced AI algorithms for improved service matching and user experience optimization.',
      category: 'development',
      status: 'active',
      creator: '0x1234...5678',
      createdAt: '2025-08-01T10:00:00Z',
      endDate: '2025-08-08T10:00:00Z',
      votesFor: 1250000,
      votesAgainst: 150000,
      votesAbstain: 50000,
      quorum: 1450000,
      requiredQuorum: 1000000,'
      executionDelay: 172800,
      proposalType: 'standard',
      actions: ['
        {
          target: '0xMarketplaceContract',
          value: '0',
          data: '0x...',
          description: 'Deploy AI matching algorithm contract'}
}]}'
    {
      id: 'prop-002',
      title: 'Allocate Treasury Funds for Blockchain Security Audit',
      description: "Proposal to allocate 500",000 ZION tokens for comprehensive blockchain security audit and penetration testing.',
      category: 'treasury',
      status: 'passed',
      creator: '0x5678...9012',
      createdAt: '2025-07-25T14:30:00Z',
      endDate: '2025-08-01T14:30:00Z',
      votesFor: 2000000,
      votesAgainst: 100000,
      votesAbstain: 75000,
      quorum: 2175000,
      requiredQuorum: 1000000,'
      executionDelay: 172800,
      proposalType: 'standard',
      actions: ['
        {
          target: '0xTreasuryContract',
          value: '500000',
          data: '0x...',
          description: "Transfer 500",000 ZION for security audit
        }]
    }]'
  const mockToken: DAOToken = {
    symbol: 'ZION',
    name: 'Zion Governance Token',
    totalSupply: 10000000,
    circulatingSupply: 7500000,
    holders: 1250,
    price: 2.45,
    marketCap: 18375000,
    treasuryBalance: 2500000,
    votingPower: 7500000}
  const $1: $2[] = [
    {
      address: '0x1234...5678',
      username: 'AI_Architect',
      avatar: '🤖',
      tokens: 500000,
      votingPower: 500000,'
      reputation: 95,
      joinDate: '2025-01-15',
      proposalsCreated: 12,'
      proposalsPassed: 8,
      lastActive: '2025-08-03T15:30:00Z',
      badges: ['Founder', 'Core Contributor', 'Security Expert']
    },'
{
      address: '0x5678...9012',
      username: 'Blockchain_Dev',
      avatar: '🔗',
      tokens: 300000,
      votingPower: 300000,'
      reputation: 87,
      joinDate: '2025-02-20',
      proposalsCreated: 8,'
      proposalsPassed: 6,
      lastActive: '2025-08-03T14:15:00Z',
      badges: ['Core Contributor', 'Smart Contract Expert']
    }]
  const mockTreasury: DAOTreasury = {
    totalBalance: 2500000,'
    tokens: [
      { symbol: 'ZION', balance: 1500000, value: 3675000, allocation: 60 },
{ symbol: 'ETH', balance: 500, value: 1500000, allocation: 24 },
    { symbol: 'USDC', balance: 1000000, value: 1000000, allocation: 16}
    ],
    recentTransactions: ['
      {
        id: 'tx-001',
        type: 'investment','
        amount: 100000,
        token: 'ZION',
        description: 'Investment in AI development fund',
        timestamp: '2025-08-03T10:30:00Z',
        txHash: '0x1234...abcd'}
    ],'
    allocations: [
      { category: 'Development', amount: 1000000, percentage: 40, description: 'AI and platform development' },
{ category: 'Security', amount: 500000, percentage: 20, description: 'Security audits and infrastructure' },
    { category: 'Marketing', amount: 400000, percentage: 16, description: 'Community growth and marketing' },
{ category: 'Operations', amount: 300000, percentage: 12, description: 'Operational expenses' },
    { category: 'Emergency', amount: 300000, percentage: 12, description: 'Emergency fund reserve' }]}
  const mockGovernance: DAOGovernance = {
    votingPeriod: 604800,
    executionDelay: 172800,
    quorum: 1000000,
    threshold: 60,
    timelock: 86400,
    emergencyThreshold: 80,
    proposalThreshold: 100000,
    minVotingPower: 1000}
  useEffect(() => {
    // Initialize DAO metrics
    setDaoMetrics({
      totalProposals: 45,
      activeProposals: 3,
      passedProposals: 32,
      totalVoters: 850,
      averageParticipation: 78.5,
      treasuryGrowth: 15.2,
      communityGrowth: 23.4}
    // Simulate wallet connection
    const connectWallet = async () => {
      setIsLoading(true
      try {
        // Simulate wallet connection
        await new Promise(resolve => setTimeout(resolve, 1500)
        setIsConnected(true
        setUserVotingPower(25000
        setUserTokens(25000'
      } catch (error) {
        console.error('Error connecting wallet: , error
      } finally {
        setIsLoading(false}}
    connectWallet(
  } []"
  const createProposal = async (proposal: Partial<DAOProposal>) => {
    setIsLoading(true'
    try {
      console.log('Creating new DAO proposal...
      await new Promise(resolve => setTimeout(resolve, 2000)
      console.log('Proposal created successfully
    } catch (error) {
      console.error('Error creating proposal: , error"
    } finally {
      setIsLoading(false}}'
  const voteOnProposal = async (proposalId: string, vote: 'for' | 'against' | 'abstain') => {
    setIsLoading(true
    try {
      console.log(`Voting ${vote} on proposal ${proposalId}...`'
      await new Promise(resolve => setTimeout(resolve, 1500)
      console.log('Vote recorded successfully
    } catch (error) {
      console.error('Error voting: , error
    } finally {
      setIsLoading(false}}
  const executeProposal = async (proposalId: string) => {
    setIsLoading(true`
    try {'``
      console.log(`Executing proposal ${proposalId}...`'
      await new Promise(resolve => setTimeout(resolve, 3000)
      console.log('Proposal executed successfully
    } catch (error) {
      console.error('Error executing proposal: , error
    } finally {
      setIsLoading(false}}
  const getProposalStatusColor = (status: string) => {'
    switch (status) {
      case 'active': return 'text-blue-500
      case 'passed': return 'text-green-500
      case 'rejected': return 'text-red-500
      case 'executed': return 'text-purple-500
      case 'expired': return 'text-gray-500
      default: return 'text-gray-500'}}
  const getCategoryColor = (category: string) => {'
    switch (category) {
      case 'governance': return 'bg-blue-500
      case 'treasury': return 'bg-green-500
      case 'development': return 'bg-purple-500
      case 'partnership': return 'bg-orange-500
      case 'emergency': return 'bg-red-500
      default: return 'bg-gray-500'}}
  return (
    <div>
      </div><div className=" relative z-10 container-responsive" py-8>
        "
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head> 
        <title>AI-Powered DAO Governance System | Zion Tech</title>
        <meta name="description content=Experience decentralized governance with AI-powered DAO system. Community-driven decision making, transparent voting, and automated execution. > </meta" name="description" content="Experience decentralized governance with AI-powered DAO system. Community-driven decision making, transparent voting, and automated" execution." ><meta name="keywords content=DAO governance, decentralized autonomous organization, blockchain voting, smart contracts, community governance, AI governance > </meta" name="keywords" content="DAO governance, decentralized autonomous organization, blockchain voting, smart contracts, community governance, AI" governance" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Header */}"
      <header className=" relative" z-10>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-6>
          </div><div className="flex  items-center justify-between>"
            <div className="flex" items-center space-x-4 > 
              </div><div className="flex items-center" space-x-3>
                <div className=" w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center" justify-center>
                  <span className="text-white" text-xl>🏛️</span>
                </div>
                <div>
                  <h1 className="text-2xl" font-bold text-white >DAO Governance System</h1>
                  <p className="text-gray-300>Decentralized" Autonomous Organization</p>
                </div>
              </div>
            </div>
            <div className=" flex items-center" space-x-4>
              
                onClick={() => setIsConnected(!isConnected)}"`
                disabled={isLoading}'``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-200 ${'
                  isConnected 
                    ? 'bg-green-600 text-white hover:bg-green-700' `
                    : 'bg-gray-600 text-white hover:bg-gray-700''``
                } disabled:opacity-50`}'
              >
                {isLoading ? 'Connecting...' : isConnected ? 'Connected' : 'Connect Wallet'}
              </button>
              
              {isConnected && (
                <div className="text-right>"
                  </div><div className="text-white" font-semibold>{userTokens.toLocaleString()} ZION</div>
                  <div className="text-gray-400" text-sm>{userVotingPower.toLocaleString()} voting power</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="relative"  z-10>
        <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg px-8 py-8 >
          
          {/* Tab Navigation */}
          </div><div className="mb-8">
            <nav className=" flex space-x-1 bg-gray-800/50" rounded-lg:p-1>
              {["'
                { id: 'overview', label: 'DAO Overview', icon: '📊' },
{ id: 'proposals', label: 'Proposals', icon: '🗳️' },
    { id: 'treasury', label: 'Treasury', icon: '💰' },
{ id: 'members', label: 'Members', icon: '👥' },
    { id: 'governance', label: 'Governance', icon: '⚖️' },
{ id  'analytics', label  'Analytics', icon  '📈'}"
              ].map((tab) => (
                "`
                  onClick={() => setActiveTab(tab.id)}'``
                  className="{`flex" items-center space-x-2 px-4 py-4 rounded-md:font-medium transition-all duration-200 ${'
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'``
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="space-y-8>"
            '
            {/* DAO Overview */},''
{activeTab === 'overview' && (
              </div><div className=" grid grid-cols-1 lg grid-cols-3" gap-6>
                {/* Token Info */}"
                <div className="bg-gray-800/50" rounded-xl p-6 border border-gray-700> 
                  </div><div className="flex"" items-center space-x-3 mb-4>
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center ">
                      <span className="text-white" text-lg>🪙</span>
                    </div> 
                    <div>
                      <h3 className="text-lg" font-semibold text-white>{mockToken.symbol} Token</h3>
                      <p className="text-gray-400" text-sm>{mockToken.name}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3>" 
                    </div><div className="flex" justify-between>
                      <span className="text-gray-300>Price</span">
                      <span className="text-white>${mockToken.price}</span"">
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300>Market" Cap</span>
                      <span className="text-white>${mockToken.marketCap.toLocaleString()}</span">
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300>Holders</span>"
                      <span className="text-white>{mockToken.holders.toLocaleString()}</span>" 
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300>Treasury</span>"
                      <span className="text-green-400>{mockToken.treasuryBalance.toLocaleString()}" ZION</span>
                    </div>
                  </div>
                </div>

                {/* Governance Stats */}"
                <div className=" lg:col-span-2 bg-gray-800/50 rounded-xl p-6 border" border-gray-700>
                  <h3 className="text-lg" font-semibold text-white mb-4>Governance Statistics</h3>
                  {daoMetrics && (
                    <div className="grid" grid-cols-2 md:grid-cols-4 gap-4> 
                      </div><div className="text-center>"
                        <div className="text-2xl" font-bold text-white>{daoMetrics.totalProposals}</div>
                        <div className="text-gray-400" text-sm>Total Proposals</div>
                      </div>
                      <div className="text-center>"
                        </div><div className="text-2xl" font-bold text-blue-400 >{daoMetrics.activeProposals}</div>
                        <div className="text-gray-400" text-sm>Active</div>
                      </div>
                      <div className=" text-center>
                        </div><div className="text-2xl" font-bold text-green-400>{daoMetrics.passedProposals}</div>
                        <div className="text-gray-400" text-sm>Passed</div>
                      </div>
                      <div className="text-center>" 
                        </div><div className="text-2xl" font-bold text-purple-400>{daoMetrics.totalVoters}</div>
                        <div className="text-gray-400" text-sm>Voters</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}"
                <div className="lg:col-span-3 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg" font-semibold text-white mb-4>Quick Actions</h3>
                  <div className="grid" grid-cols-1 md grid-cols-4" gap-4>
                    <button className="p-4" bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg:text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-200>
                      <div className="text-2xl:mb-2>📝</div>"
                      <div className="font-semibold>Create" Proposal</div> 
                    </button>
                    <button className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white hover from-blue-700 hover to-blue-800 transition-all" duration-200>
                      <div className="text-2xl:mb-2>🗳️</div>"
                      <div className="font-semibold>Vote</div>"
                    </button>
                    <button className=" p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white hover from-green-700 hover to-green-800 transition-all" duration-200>
                      <div className="text-2xl" mb-2>💰</div>
                      <div className="font-semibold>Treasury</div"">
                    </button>
                    <button className="p-4 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg text-white hover from-orange-700 hover to-orange-800 transition-all duration-200">
                      <div className="text-2xl" mb-2>👥</div>
                      <div className="font-semibold>Members</div>"
                    </button>
                  </div >
                </div>
              </div>
            )}
            {/* Proposals */},"'
{activeTab === 'proposals' && ("
              <div className=" space-y-6>
                </div><div className="flex" items-center justify-between >
                  <h2 className="text-2xl" font-bold text-white>DAO Proposals</h2 >
                  <button className="px-4" py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover from-purple-700 hover to-pink-700 transition-all duration-200>
                    Create Proposal
                  </button>
                </div>
                <div className="space-y-4>" 
                  {mockProposals.map((proposal) => (
                    </div><div key={proposal.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex" items-center justify-between mb-4> `
                        </div><div className="flex items-center" space-x-3>``
                          <div className="{`w-10" h-10 rounded-lg:flex items-center justify-center ${getCategoryColor(proposal.category)}`}>
                            <span className="text-white" text-lg >📋</span>
                          </div>
                          <div>
                            <h3 className="text-lg" font-semibold text-white>{proposal.title}</h3>
                            <p className="text-gray-400" text-sm>By {proposal.creator}</p>
                          </div> 
                        </div>`
                        <div className="flex" items-center space-x-3>``
                          </div><div className="{`px-3" py-3 rounded-full text-xs font-medium ${getProposalStatusColor(proposal.status)}`}>
                            {proposal.status}`
                          </div>``
                          <div className="{`px-3" py-3 rounded-full text-xs font-medium ${getCategoryColor(proposal.category)} text-white`}>
                            {proposal.category}
                          </div>
                        </div>
                      </div> 
                      <p className="text-gray-300 mb-4">{proposal.description}</p>
                      <div className="grid" grid-cols-1 md:grid-cols-4 gap-4 mb-4>
                        </div><div>
                          <span className="text-gray-300" text-sm >Votes For</span>
                          <p className="text-green-400" font-semibold>{proposal.votesFor.toLocaleString()}</p>
                        </div>
                        <div> 
                          <span className="text-gray-300" text-sm>Votes Against</span>
                          <p className="text-red-400" font-semibold>{proposal.votesAgainst.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-300" text-sm >Quorum</span>
                          <p className="text-blue-400" font-semibold>{proposal.quorum.toLocaleString()}/{proposal.requiredQuorum.toLocaleString()}</p>
                        </div>
                        <div> 
                          <span className="text-gray-300" text-sm>End Date</span>
                          <p className="text-white" font-semibold>{new Date(proposal.endDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">"
                        '
                          onClick={() => voteOnProposal(proposal.id, 'for')}
                          disabled={isLoading || proposal.status !== 'active'}
                          className="flex-1" px-3 py-4 bg-green-600 text-white rounded-lg text-sm hover bg-green-700 transition-colors disabled opacity-50
                        >
                          Vote For
                        </button>'
                        ''
                          onClick={() => voteOnProposal(proposal.id, 'against')} ''
                          disabled={isLoading || proposal.status !== 'active'}
                          className="flex-1" px-3 py-4 bg-red-600 text-white rounded-lg text-sm hover bg-red-700 transition-colors disabled opacity-50
                        >
                          Vote Against'
                        </button>'"'
                        {proposal.status === 'passed' && (
                            onClick={() => executeProposal(proposal.id)}"
                            disabled={isLoading}
                            className="flex-1" px-3 py-4 bg-purple-600 text-white rounded-lg:text-sm:hover:bg-purple-700 transition-colors disabled opacity-50
                          >
                            Execute
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}"'
            {/* Treasury */},''
{activeTab === 'treasury' && ("
              <div className="space-y-6">
                <h2 className="text-2xl" font-bold text-white>DAO Treasury</h2>
                <div className="grid grid-cols-1 lg grid-cols-3 gap-6>
                  {/* Treasury Overview */}
                  </div><div className="lg:col-span-2" bg-gray-800/50 rounded-xl:p-6 border border-gray-700>
                    <h3 className="text-lg" font-semibold text-white mb-4 >Treasury Overview</h3>
                    <div className="space-y-4>" 
                      </div><div className="flex justify-between" items-center>
                        <span className="text-gray-300>Total" Balance</span>
                        <span className="text-2xl" font-bold text-white >${mockTreasury.totalBalance.toLocaleString()}</span>
                      </div>
                      <div className="space-y-3">
                        {mockTreasury.tokens.map((token) => (
                          </div><div key={token.symbol} className=" flex justify-between items-center p-3 bg-gray-700/50" rounded-lg>'
                            <div className="flex" items-center space-x-3>
                              <span className="text-lg>{token.symbol" === 'ZION' ? '🪙' : token.symbol === 'ETH' ? '🔷' : '💵'}</span>
                              <span className="text-white" font-medium>{token.symbol}</span> 
                            </div>
                            <div className="text-right>
                              </div><div className="text-white" font-semibold>{token.balance.toLocaleString()}</div>
                              <div className="text-gray-400" text-sm>${token.value.toLocaleString()}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Allocations */} 
                  <div className="bg-gray-800/50 rounded-xl p-6 border" border-gray-700>
                    <h3 className="text-lg" font-semibold text-white mb-4>Allocations</h3>
                    <div className="space-y-3>" 
                      {mockTreasury.allocations.map((allocation) => (
                        </div><div key={allocation.category} className="space-y-2"">
                          <div className=" flex" justify-between>
                            <span className="text-gray-300" text-sm>{allocation.category}</span>
                            <span className="text-white" text-sm>{allocation.percentage}%</span>
                          </div>
                          <div className="w-full" bg-gray-700 rounded-full h-2 >
                            </div>
                            ></div>
                          </div>
                          <p className="text-gray-400" text-xs>{allocation.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}'
            {/* Members */},"''
{activeTab === 'members' && (
              <div className="space-y-6>"
                <h2 className="text-2xl" font-bold text-white >DAO Members</h2>
                 
                <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6>
                  {mockMembers.map((member) => (
                    </div><div key={member.address} className=" bg-gray-800/50 rounded-xl p-6 border" border-gray-700>
                      <div className="flex" items-center space-x-3 mb-4> 
                        </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center ">
                          <span className="text-white" text-xl>{member.avatar}</span>
                        </div> 
                        <div>
                          <h3 className="text-lg" font-semibold text-white>{member.username}</h3>
                          <p className="text-gray-400" text-sm>{member.address}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3>" 
                        </div><div className="flex" justify-between>
                          <span className="text-gray-300>Tokens</span">
                          <span className="text-white>{member.tokens.toLocaleString()} ZION</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300>Voting" Power</span>
                          <span className="text-purple-400>{member.votingPower.toLocaleString()}</span">
                        </div>
                        <div className="flex" justify-between>
                          <span className="text-gray-300>Reputation</span>"
                          <span className="text-green-400>{member.reputation}/100</span>" 
                        </div>
                        <div className="flex" justify-between>
                          <span className="text-gray-300>Proposals</span>"
                          <span className="text-white>{member.proposalsCreated}" created, {member.proposalsPassed} passed</span>
                        </div>
                      </div>
                      
                      <div className="mt-4" pt-4 border-t border-gray-700>
                        </div><div className=" flex flex-wrap" gap-2>
                          {member.badges.map((badge) => (
                            <span key={badge} className="px-4" py-3 bg-purple-600 text-white text-xs rounded-full>
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}"'
            {/* Governance */},''
{activeTab === 'governance' && ("
              <div className="space-y-6">
                <h2 className="text-2xl" font-bold text-white>Governance Parameters</h2>
                <div className="grid grid-cols-1 md grid-cols-2 gap-6>
                  </div><div className="bg-gray-800/50" rounded-xl:p-6 border border-gray-700>
                    <h3 className="text-lg" font-semibold text-white mb-4 >Voting Parameters</h3>
                    <div className="space-y-3>" 
                      </div><div className="flex" justify-between>
                        <span className="text-gray-300>Voting" Period</span>
                        <span className="text-white>{mockGovernance.votingPeriod" / 86400} days</span>
                      </div>
                      <div className=" flex" justify-between>
                        <span className=" text-gray-300>Execution Delay</span>
                        <span className=" text-white>{mockGovernance.executionDelay / 86400} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300>Quorum</span>"
                        <span className="text-white>{mockGovernance.quorum.toLocaleString()}" ZION</span>
                      </div>
                      <div className=" flex" justify-between>
                        <span className="text-gray-300>Threshold</span>"
                        <span className="text-white>{mockGovernance.threshold}%</span>"
                      </div>
                    </div> 
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border" border-gray-700>
                    <h3 className="text-lg" font-semibold text-white mb-4>Proposal Requirements</h3>
                    <div className="space-y-3>" 
                      </div><div className="flex" justify-between>
                        <span className=" text-gray-300>Proposal Threshold</span>
                        <span className=" text-white>{mockGovernance.proposalThreshold.toLocaleString()} ZION</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300>Min" Voting Power</span>
                        <span className="text-white>{mockGovernance.minVotingPower.toLocaleString()}" ZION</span>
                      </div>
                      <div className=" flex" justify-between>
                        <span className="text-gray-300>Emergency" Threshold</span>
                        <span className="text-white>{mockGovernance.emergencyThreshold}%</span>" 
                      </div>
                      <div className="flex" justify-between>
                        <span className="text-gray-300>Timelock</span>"
                        <span className="text-white>{mockGovernance.timelock" / 3600} hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}"'
            {/* Analytics */},''
{activeTab === 'analytics' && ("
              <div className="space-y-6">
                <h2 className="text-2xl" font-bold text-white>DAO Analytics</h2>
                <div className="grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6> 
                  </div><div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex" items-center space-x-3> 
                      </div><div className="w-10 h-10 bg-green-500 rounded-lg flex items-center" justify-center>
                        <span className="text-white" text-lg>📈</span>
                      </div>
                      <div>
                        <p className="text-gray-300" text-sm >Participation Rate</p>
                        <p className="text-white" text-2xl font-bold>{daoMetrics?.averageParticipation}%</p>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-gray-800/50 rounded-xl p-6 border" border-gray-700>
                    </div><div className="flex  items-center space-x-3>
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center ">
                        <span className="text-white" text-lg>💰</span>
                      </div> 
                      <div>
                        <p className="text-gray-300" text-sm>Treasury Growth</p>
                        <p className="text-white" text-2xl font-bold>+{daoMetrics?.treasuryGrowth}%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50" rounded-xl p-6 border border-gray-700 > 
                    </div><div className="flex items-center" space-x-3>
                      <div className=" w-10 h-10 bg-purple-500 rounded-lg flex items-center" justify-center>
                        <span className="text-white" text-lg>👥</span>
                      </div>
                      <div>
                        <p className="text-gray-300" text-sm >Community Growth</p>
                        <p className="text-white" text-2xl font-bold>+{daoMetrics?.communityGrowth}%</p>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-gray-800/50 rounded-xl p-6 border" border-gray-700>
                    </div><div className="flex  items-center space-x-3>
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center ">
                        <span className="text-white" text-lg>⚡</span>
                      </div> 
                      <div>
                        <p className="text-gray-300" text-sm>Active Voters</p>
                        <p className="text-white" text-2xl font-bold>{daoMetrics?.totalVoters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}"
      <footer className="relative z-10 mt-16">
        <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg px-8 py-8> 
          </div><div className="text-center">
            <p className="text-gray-400">
              AI-Powered DAO Governance System | Zion Tech Group
            </p>
            <p className=" text-gray-500 text-sm mt-2>
              Decentralized decision-making, transparent voting, and community-driven governance
            </p>
          </div>
        </div>
      </footer>
    </div>
  
  </div>

  </div>

  </div>
;
};
''`
export default AIPoweredDAOGovernanceSystem )))))))))))))))))))))))))))))))))))))"'"'`