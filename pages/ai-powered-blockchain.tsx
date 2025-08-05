import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface SmartContract {
  id: string;
  name: string;
  type: 'defi' | 'nft' | 'dao' | 'gaming' | 'supply-chain' | 'identity';
  status: 'deployed' | 'testing' | 'failed' | 'archived' | 'updating';
  address: string;
  network: 'ethereum' | 'polygon' | 'binance' | 'arbitrum' | 'optimism';
  gasUsed: number;
  gasPrice: number;
  transactions: number;
  lastUpdated: Date;
  aiOptimized: boolean;
  autoUpgrade: boolean;
  version: string;
  performance: {
    executionTime: number;
    gasEfficiency: number;
    securityScore: number;
    complexity: number;
  };
}

interface BlockchainTransaction {
  id: string;
  hash: string;
  type: 'transfer' | 'contract-interaction' | 'mint' | 'burn' | 'swap';
  status: 'pending' | 'confirmed' | 'failed' | 'reverted';
  from: string;
  to: string;
  value: number;
  gasUsed: number;
  gasPrice: number;
  timestamp: Date;
  blockNumber: number;
  aiAssisted: boolean;
  network: string;
  fee: number;
}

interface DApp {
  id: string;
  name: string;
  category: 'defi' | 'nft' | 'gaming' | 'social' | 'utility' | 'governance';
  description: string;
  status: 'active' | 'development' | 'maintenance' | 'archived';
  users: number;
  tvl: number;
  transactions: number;
  lastUpdated: Date;
  aiGenerated: boolean;
  smartContracts: number;
  networks: string[];
  features: {
    name: string;
    status: 'implemented' | 'planned' | 'testing';
    aiOptimized: boolean;
  }[];
}

interface BlockchainAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;
  improvement: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

const AIPoweredBlockchainPage: NextPage = () => {
  const [contracts, setContracts] = useState<SmartContract[]>([]);
  const [transactions, setTransactions] = useState<BlockchainTransaction[]>([]);
  const [dapps, setDapps] = useState<DApp[]>([]);
  const [analytics, setAnalytics] = useState<BlockchainAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'contracts' | 'transactions' | 'dapps' | 'analytics'>('overview');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'gas-efficiency' | 'security' | 'value'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered blockchain data
    setTimeout(() => {
      const mockContracts: SmartContract[] = [
        {
          id: '1',
          name: 'Zion DeFi Protocol',
          type: 'defi',
          status: 'deployed',
          address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          network: 'ethereum',
          gasUsed: 125000,
          gasPrice: 25,
          transactions: 15420,
          lastUpdated: new Date('2024-01-20T15:30:00'),
          aiOptimized: true,
          autoUpgrade: true,
          version: '2.1.0',
          performance: {
            executionTime: 0.8,
            gasEfficiency: 94.2,
            securityScore: 98.5,
            complexity: 7.8
          }
        },
        {
          id: '2',
          name: 'Zion NFT Marketplace',
          type: 'nft',
          status: 'deployed',
          address: '0x8ba1f109551bA432bD7337349BdF8b4E7d4bC1d5',
          network: 'polygon',
          gasUsed: 89000,
          gasPrice: 15,
          transactions: 8920,
          lastUpdated: new Date('2024-01-20T15:25:00'),
          aiOptimized: true,
          autoUpgrade: true,
          version: '1.8.2',
          performance: {
            executionTime: 0.6,
            gasEfficiency: 96.8,
            securityScore: 97.2,
            complexity: 6.5
          }
        },
        {
          id: '3',
          name: 'Zion DAO Governance',
          type: 'dao',
          status: 'deployed',
          address: '0x3a5A5c4b8E9F2a1B3C4D5E6F7A8B9C0D1E2F3A4',
          network: 'ethereum',
          gasUsed: 156000,
          gasPrice: 30,
          transactions: 2340,
          lastUpdated: new Date('2024-01-20T15:20:00'),
          aiOptimized: true,
          autoUpgrade: false,
          version: '3.0.1',
          performance: {
            executionTime: 1.2,
            gasEfficiency: 91.5,
            securityScore: 99.1,
            complexity: 8.9
          }
        },
        {
          id: '4',
          name: 'Zion Gaming Protocol',
          type: 'gaming',
          status: 'testing',
          address: '0x7c8B9C2D3E4F5A6B7C8D9E0F1A2B3C4D5E6F7A8',
          network: 'arbitrum',
          gasUsed: 67000,
          gasPrice: 8,
          transactions: 0,
          lastUpdated: new Date('2024-01-20T15:15:00'),
          aiOptimized: false,
          autoUpgrade: true,
          version: '1.2.0',
          performance: {
            executionTime: 0.4,
            gasEfficiency: 98.3,
            securityScore: 95.8,
            complexity: 5.2
          }
        },
        {
          id: '5',
          name: 'Zion Supply Chain',
          type: 'supply-chain',
          status: 'failed',
          address: '0x9d8E7F6G5H4I3J2K1L0M9N8O7P6Q5R4S3T2U1',
          network: 'binance',
          gasUsed: 0,
          gasPrice: 0,
          transactions: 0,
          lastUpdated: new Date('2024-01-20T14:45:00'),
          aiOptimized: false,
          autoUpgrade: false,
          version: '0.9.1',
          performance: {
            executionTime: 0,
            gasEfficiency: 0,
            securityScore: 0,
            complexity: 0
          }
        }
      ];

      const mockTransactions: BlockchainTransaction[] = [
        {
          id: '1',
          hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
          type: 'contract-interaction',
          status: 'confirmed',
          from: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          to: '0x8ba1f109551bA432bD7337349BdF8b4E7d4bC1d5',
          value: 0.5,
          gasUsed: 125000,
          gasPrice: 25,
          timestamp: new Date('2024-01-20T15:30:00'),
          blockNumber: 18456789,
          aiAssisted: true,
          network: 'ethereum',
          fee: 0.003125
        },
        {
          id: '2',
          hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
          type: 'transfer',
          status: 'confirmed',
          from: '0x3a5A5c4b8E9F2a1B3C4D5E6F7A8B9C0D1E2F3A4',
          to: '0x7c8B9C2D3E4F5A6B7C8D9E0F1A2B3C4D5E6F7A8',
          value: 2.5,
          gasUsed: 21000,
          gasPrice: 20,
          timestamp: new Date('2024-01-20T15:25:00'),
          blockNumber: 18456788,
          aiAssisted: true,
          network: 'ethereum',
          fee: 0.00042
        },
        {
          id: '3',
          hash: '0x567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234',
          type: 'mint',
          status: 'pending',
          from: '0x8ba1f109551bA432bD7337349BdF8b4E7d4bC1d5',
          to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          value: 0,
          gasUsed: 89000,
          gasPrice: 15,
          timestamp: new Date('2024-01-20T15:20:00'),
          blockNumber: 18456787,
          aiAssisted: true,
          network: 'polygon',
          fee: 0.001335
        },
        {
          id: '4',
          hash: '0xdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abc',
          type: 'swap',
          status: 'confirmed',
          from: '0x7c8B9C2D3E4F5A6B7C8D9E0F1A2B3C4D5E6F7A8',
          to: '0x3a5A5c4b8E9F2a1B3C4D5E6F7A8B9C0D1E2F3A4',
          value: 1.8,
          gasUsed: 156000,
          gasPrice: 30,
          timestamp: new Date('2024-01-20T15:15:00'),
          blockNumber: 18456786,
          aiAssisted: true,
          network: 'arbitrum',
          fee: 0.00468
        },
        {
          id: '5',
          hash: '0x7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef123456',
          type: 'burn',
          status: 'failed',
          from: '0x9d8E7F6G5H4I3J2K1L0M9N8O7P6Q5R4S3T2U1',
          to: '0x0000000000000000000000000000000000000000',
          value: 0.1,
          gasUsed: 0,
          gasPrice: 0,
          timestamp: new Date('2024-01-20T15:10:00'),
          blockNumber: 0,
          aiAssisted: false,
          network: 'binance',
          fee: 0
        }
      ];

      const mockDapps: DApp[] = [
        {
          id: '1',
          name: 'Zion DeFi Platform',
          category: 'defi',
          description: 'Comprehensive DeFi platform with lending, borrowing, and yield farming',
          status: 'active',
          users: 12500,
          tvl: 2500000,
          transactions: 15420,
          lastUpdated: new Date('2024-01-20T15:30:00'),
          aiGenerated: true,
          smartContracts: 8,
          networks: ['ethereum', 'polygon', 'arbitrum'],
          features: [
            {
              name: 'Lending Protocol',
              status: 'implemented',
              aiOptimized: true
            },
            {
              name: 'Yield Farming',
              status: 'implemented',
              aiOptimized: true
            },
            {
              name: 'Cross-chain Bridge',
              status: 'planned',
              aiOptimized: false
            }
          ]
        },
        {
          id: '2',
          name: 'Zion NFT Gallery',
          category: 'nft',
          description: 'Digital art marketplace with AI-powered curation and discovery',
          status: 'active',
          users: 8900,
          tvl: 450000,
          transactions: 8920,
          lastUpdated: new Date('2024-01-20T15:25:00'),
          aiGenerated: true,
          smartContracts: 5,
          networks: ['ethereum', 'polygon'],
          features: [
            {
              name: 'NFT Marketplace',
              status: 'implemented',
              aiOptimized: true
            },
            {
              name: 'AI Curation',
              status: 'implemented',
              aiOptimized: true
            },
            {
              name: 'Royalty System',
              status: 'testing',
              aiOptimized: true
            }
          ]
        },
        {
          id: '3',
          name: 'Zion Gaming Metaverse',
          category: 'gaming',
          description: 'Blockchain gaming platform with AI-powered gameplay and rewards',
          status: 'development',
          users: 3400,
          tvl: 180000,
          transactions: 2340,
          lastUpdated: new Date('2024-01-20T15:20:00'),
          aiGenerated: true,
          smartContracts: 12,
          networks: ['ethereum', 'arbitrum', 'polygon'],
          features: [
            {
              name: 'Game Engine',
              status: 'implemented',
              aiOptimized: true
            },
            {
              name: 'AI Opponents',
              status: 'testing',
              aiOptimized: true
            },
            {
              name: 'Reward System',
              status: 'planned',
              aiOptimized: false
            }
          ]
        }
      ];

      const mockAnalytics: BlockchainAnalytics[] = [
        {
          id: '1',
          metric: 'Gas Efficiency',
          current: 94.2,
          target: 96.0,
          improvement: -1.9,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '2',
          metric: 'Transaction Speed',
          current: 2.8,
          target: 2.0,
          improvement: -40.0,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '3',
          metric: 'Security Score',
          current: 97.8,
          target: 99.0,
          improvement: -1.2,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '4',
          metric: 'AI Optimization',
          current: 78.3,
          target: 85.0,
          improvement: -7.9,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '5',
          metric: 'Smart Contract Success',
          current: 91.5,
          target: 95.0,
          improvement: -3.7,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '6',
          metric: 'DApp Performance',
          current: 86.7,
          target: 92.0,
          improvement: -5.8,
          trend: 'down',
          period: 'This Month'
        }
      ];

      setContracts(mockContracts);
      setTransactions(mockTransactions);
      setDapps(mockDapps);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredContracts = useMemo(() => {
    let filtered = contracts.filter(contract => {
      if (filterType !== 'all' && contract.type !== filterType) return false;
      if (filterStatus !== 'all' && contract.status !== filterStatus) return false;
      if (searchTerm && !contract.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'gas-efficiency':
          return b.performance.gasEfficiency - a.performance.gasEfficiency;
        case 'security':
          return b.performance.securityScore - a.performance.securityScore;
        case 'value':
          return b.transactions - a.transactions;
        case 'recent':
        default:
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

    return filtered;
  }, [contracts, filterType, filterStatus, searchTerm, sortBy]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'text-green-400 bg-green-500/20';
      case 'testing': return 'text-blue-400 bg-blue-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'archived': return 'text-gray-400 bg-gray-500/20';
      case 'updating': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'defi': return '💰';
      case 'nft': return '🎨';
      case 'dao': return '🏛️';
      case 'gaming': return '🎮';
      case 'supply-chain': return '📦';
      case 'identity': return '🆔';
      default: return '🔗';
    }
  };

  const getNetworkIcon = (network: string) => {
    switch (network) {
      case 'ethereum': return '🔷';
      case 'polygon': return '🟣';
      case 'binance': return '🟡';
      case 'arbitrum': return '🔵';
      case 'optimism': return '🔴';
      default: return '⚫';
    }
  };

  const getTransactionStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-400 bg-green-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'reverted': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTransactionTypeIcon = (type: string) => {
    switch (type) {
      case 'transfer': return '💸';
      case 'contract-interaction': return '🤝';
      case 'mint': return '🪙';
      case 'burn': return '🔥';
      case 'swap': return '🔄';
      default: return '📝';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const shortenHash = (hash: string) => {
    return `${hash.slice(0, 8)}...${hash.slice(-6)}`;
  };

  if (loading) {
    return (
  <ModernLayout>
    return (
  <ModernLayout>
    return (
  <ModernLayout>
    return (
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading AI-Powered Blockchain...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>AI-Powered Blockchain - Zion</title>
        <meta name="description" content="Intelligent smart contracts, decentralized applications, blockchain analytics, and AI-driven blockchain optimization" />
        <meta name="keywords" content="AI blockchain, smart contracts, dapps, blockchain analytics, Zion" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/ai-powered-machine-learning" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                ML
              </Link>
              <Link href="/ai-powered-data-analytics" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Analytics
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Blockchain
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent smart contracts, decentralized applications, blockchain analytics, 
            and AI-driven blockchain optimization with advanced blockchain capabilities.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'contracts', name: 'Smart Contracts', icon: '📜' },
              { id: 'transactions', name: 'Transactions', icon: '💸' },
              { id: 'dapps', name: 'DApps', icon: '🖥️' },
              { id: 'analytics', name: 'Analytics', icon: '📈' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Overview */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {analytics.map((metric) => (
              <div key={metric.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                  <span className="text-2xl">{getTrendIcon(metric.trend)}</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-2">{metric.current}</div>
                  <p className="text-sm text-gray-400">Target: {metric.target}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className={`${metric.improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.improvement > 0 ? '+' : ''}{metric.improvement.toFixed(1)}%
                  </span>
                  <span className="text-gray-400">{metric.period}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Smart Contracts */}
        {selectedView === 'contracts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContracts.map((contract) => (
              <div key={contract.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getTypeIcon(contract.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{contract.name}</h3>
                      <p className="text-gray-300 text-sm capitalize">{contract.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                      {contract.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-4 py-3 rounded text-xs font-medium ${contract.aiOptimized ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {contract.aiOptimized ? 'AI OPTIMIZED' : 'AI DISABLED'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-400">Network:</span>
                    <span className="text-lg">{getNetworkIcon(contract.network)}</span>
                    <span className="text-sm text-white capitalize">{contract.network}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Address:</p>
                  <p className="text-sm text-purple-400 font-mono">{shortenAddress(contract.address)}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Gas Used</p>
                    <p className="text-lg font-semibold text-green-400">{contract.gasUsed.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Gas Price</p>
                    <p className="text-lg font-semibold text-blue-400">{contract.gasPrice} Gwei</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Transactions</p>
                    <p className="text-lg font-semibold text-orange-400">{contract.transactions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Version</p>
                    <p className="text-lg font-semibold text-purple-400">{contract.version}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Performance Metrics:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Gas Efficiency:</span>
                      <span className="text-white">{contract.performance.gasEfficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Security Score:</span>
                      <span className="text-white">{contract.performance.securityScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Execution Time:</span>
                      <span className="text-white">{contract.performance.executionTime}s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Complexity:</span>
                      <span className="text-white">{contract.performance.complexity}/10</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Auto-Upgrade: {contract.autoUpgrade ? '✅' : '❌'}</span>
                  <span>Updated: {contract.lastUpdated.toLocaleString()}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Contract
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Monitor
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blockchain Transactions */}
        {selectedView === 'transactions' && (
          <div className="space-y-6">
            {transactions.map((tx) => (
              <div key={tx.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getTransactionTypeIcon(tx.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{tx.type.toUpperCase()}</h3>
                      <p className="text-gray-300 text-sm">{shortenHash(tx.hash)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-3 rounded-full text-xs font-medium ${getTransactionStatusColor(tx.status)}`}>
                      {tx.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-4 py-3 rounded text-xs font-medium ${tx.aiAssisted ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {tx.aiAssisted ? 'AI ASSISTED' : 'MANUAL'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">From</p>
                    <p className="text-sm font-semibold text-white font-mono">{shortenAddress(tx.from)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">To</p>
                    <p className="text-sm font-semibold text-white font-mono">{shortenAddress(tx.to)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Value</p>
                    <p className="text-lg font-semibold text-green-400">{tx.value} ETH</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Fee</p>
                    <p className="text-lg font-semibold text-orange-400">{tx.fee} ETH</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Gas Used</p>
                    <p className="text-sm font-semibold text-blue-400">{tx.gasUsed.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Gas Price</p>
                    <p className="text-sm font-semibold text-purple-400">{tx.gasPrice} Gwei</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Block</p>
                    <p className="text-sm font-semibold text-gray-400">{tx.blockNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Network</p>
                    <p className="text-sm font-semibold text-white capitalize">{tx.network}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Time: {tx.timestamp.toLocaleString()}</span>
                  <span>ID: {tx.id}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View on Explorer
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Copy Hash
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DApps */}
        {selectedView === 'dapps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dapps.map((dapp) => (
              <div key={dapp.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{dapp.name}</h3>
                    <p className="text-gray-300 text-sm">{dapp.description}</p>
                    <p className="text-gray-400 text-sm capitalize">{dapp.category}</p>
                  </div>
                  <span className={`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(dapp.status)}`}>
                    {dapp.status.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Users</p>
                    <p className="text-lg font-semibold text-white">{dapp.users.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">TVL</p>
                    <p className="text-lg font-semibold text-green-400">${dapp.tvl.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Transactions</p>
                    <p className="text-lg font-semibold text-blue-400">{dapp.transactions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Contracts</p>
                    <p className="text-lg font-semibold text-orange-400">{dapp.smartContracts}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Networks:</p>
                  <div className="flex flex-wrap gap-2">
                    {dapp.networks.map((network, index) => (
                      <span key={index} className="px-4 py-3 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30 capitalize">
                        {network}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Features:</p>
                  <div className="space-y-2">
                    {dapp.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded">
                        <span className="text-sm text-white">{feature.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-4 py-3 rounded text-xs font-medium ${getStatusColor(feature.status)}`}>
                            {feature.status}
                          </span>
                          <span className={`px-4 py-3 rounded text-xs font-medium ${feature.aiOptimized ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                            {feature.aiOptimized ? 'AI' : 'Manual'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>AI Generated: {dapp.aiGenerated ? '✅' : '❌'}</span>
                  <span>Updated: {dapp.lastUpdated.toLocaleString()}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    Launch DApp
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Build with Blockchain Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent blockchain technology to create smart contracts, 
              DApps, and decentralized solutions with AI-driven optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Deploy Contract
              </button>
              <Link href="/service-marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Services
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

export default AIPoweredBlockchainPage 