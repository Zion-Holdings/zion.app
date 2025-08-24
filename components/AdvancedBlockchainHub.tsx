import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Link, 
  Shield, 
  Zap, 
  Target, 
  ArrowRight, 
  Plus, 
  Search, 
  Settings, 
  Download, 
  Upload, 
  RefreshCw, 
  Activity,
  Users,
  Database,
  Network,
  Server,
  Smartphone,
  Globe,
  TrendingUp,
  AlertCircle,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Eye,
  Lock,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare
} from 'lucide-react';

interface SmartContract {
  id: string;
  name: string;
  address: string;
  network: 'Ethereum' | 'Polygon' | 'Binance' | 'Solana' | 'Cardano';
  status: 'active' | 'paused' | 'upgrading' | 'error';
  gasUsed: number;
  transactions: number;
  lastDeployed: string;
  version: string;
  functions: string[];
}

interface BlockchainTransaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  value: number;
  gas: number;
  status: 'pending' | 'confirmed' | 'failed';
  blockNumber: number;
  timestamp: string;
  network: string;
}

interface DeFiProtocol {
  id: string;
  name: string;
  type: 'DEX' | 'Lending' | 'Yield Farming' | 'Staking' | 'Insurance';
  totalValueLocked: number;
  dailyVolume: number;
  users: number;
  apy: number;
  risk: 'low' | 'medium' | 'high';
  lastUpdated: string;
}

const smartContracts: SmartContract[] = [
  {
    id: '1',
    name: 'Zion Token Contract',
    address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    network: 'Ethereum',
    status: 'active',
    gasUsed: 45000,
    transactions: 1250,
    lastDeployed: '2025-01-27 15:00',
    version: '2.1.0',
    functions: ['transfer', 'approve', 'balanceOf', 'totalSupply']
  },
  {
    id: '2',
    name: 'Staking Contract',
    address: '0x8f2a559d370bade97bdb2c5db0a0cbb3c6f7b50e',
    network: 'Polygon',
    status: 'active',
    gasUsed: 32000,
    transactions: 890,
    lastDeployed: '2025-01-26 10:00',
    version: '1.5.0',
    functions: ['stake', 'unstake', 'claimRewards', 'getStakeInfo']
  }
];

const blockchainTransactions: BlockchainTransaction[] = [
  {
    id: '1',
    hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    from: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    to: '0x8f2a559d370bade97bdb2c5db0a0cbb3c6f7b50e',
    value: 1000,
    gas: 21000,
    status: 'confirmed',
    blockNumber: 18500000,
    timestamp: '2025-01-27 16:00',
    network: 'Ethereum'
  },
  {
    id: '2',
    hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
    from: '0x8f2a559d370bade97bdb2c5db0a0cbb3c6f7b50e',
    to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    value: 500,
    gas: 18000,
    status: 'pending',
    blockNumber: 18500001,
    timestamp: '2025-01-27 16:05',
    network: 'Polygon'
  }
];

const defiProtocols: DeFiProtocol[] = [
  {
    id: '1',
    name: 'ZionSwap DEX',
    type: 'DEX',
    totalValueLocked: 2500000,
    dailyVolume: 125000,
    users: 4500,
    apy: 12.5,
    risk: 'medium',
    lastUpdated: '2025-01-27 16:00'
  },
  {
    id: '2',
    name: 'Zion Lending',
    type: 'Lending',
    totalValueLocked: 1800000,
    dailyVolume: 75000,
    users: 3200,
    apy: 8.2,
    risk: 'low',
    lastUpdated: '2025-01-27 16:00'
  }
];

const networkColors = {
  'Ethereum': 'from-blue-500 to-cyan-500',
  'Polygon': 'from-purple-500 to-pink-500',
  'Binance': 'from-yellow-500 to-orange-500',
  'Solana': 'from-green-500 to-emerald-500',
  'Cardano': 'from-indigo-500 to-purple-500'
};

const statusColors = {
  'active': 'from-green-500 to-emerald-500',
  'paused': 'from-yellow-500 to-orange-500',
  'upgrading': 'from-blue-500 to-cyan-500',
  'error': 'from-red-500 to-pink-500'
};

const transactionStatusColors = {
  'pending': 'from-yellow-500 to-orange-500',
  'confirmed': 'from-green-500 to-emerald-500',
  'failed': 'from-red-500 to-pink-500'
};

const defiTypeColors = {
  'DEX': 'from-blue-500 to-cyan-500',
  'Lending': 'from-green-500 to-emerald-500',
  'Yield Farming': 'from-purple-500 to-pink-500',
  'Staking': 'from-yellow-500 to-orange-500',
  'Insurance': 'from-indigo-500 to-purple-500'
};

const AdvancedBlockchainHub: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'contracts' | 'transactions' | 'defi'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blockchain Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced blockchain integration hub with smart contracts, decentralized applications, 
            and comprehensive blockchain analytics for the future of finance.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Link className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+22%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{smartContracts.length}</h3>
            <p className="text-gray-400 text-sm">Smart Contracts</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+35%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{blockchainTransactions.length}</h3>
            <p className="text-gray-400 text-sm">Transactions</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">$4.3M</h3>
            <p className="text-gray-400 text-sm">Total Value Locked</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">7.7K</h3>
            <p className="text-gray-400 text-sm">Active Users</p>
          </div>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1 max-w-lg mx-auto"
        >
          {(['overview', 'contracts', 'transactions', 'defi'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Link className="w-4 h-4 inline mr-2" />}
              {view === 'contracts' && <Shield className="w-4 h-4 inline mr-2" />}
              {view === 'transactions' && <Activity className="w-4 h-4 inline mr-2" />}
              {view === 'defi' && <Zap className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Smart Contracts Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Smart Contracts</h3>
                  {smartContracts.map((contract) => (
                    <motion.div
                      key={contract.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[contract.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{contract.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${networkColors[contract.network]} rounded-full text-white text-xs font-medium`}>
                              {contract.network}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3 font-mono">{contract.address}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{contract.transactions}</div>
                          <div className="text-gray-400 text-sm">Transactions</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Gas Used</div>
                          <div className="text-white font-medium">{contract.gasUsed.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Version</div>
                          <div className="text-white font-medium">{contract.version}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Functions</div>
                        <div className="flex flex-wrap gap-2">
                          {contract.functions.map((func, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                            >
                              {func}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Last deployed: {contract.lastDeployed}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* DeFi Protocols Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">DeFi Protocols</h3>
                  {defiProtocols.map((protocol) => (
                    <motion.div
                      key={protocol.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-white font-semibold">{protocol.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${defiTypeColors[protocol.type]} rounded-full text-white text-xs font-medium`}>
                              {protocol.type}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-3 h-3 bg-gradient-to-r ${protocol.risk === 'low' ? 'from-green-500 to-emerald-500' : protocol.risk === 'medium' ? 'from-yellow-500 to-orange-500' : 'from-red-500 to-pink-500'} rounded-full`} />
                            <span className="text-gray-400 text-sm capitalize">{protocol.risk} risk</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{protocol.apy}%</div>
                          <div className="text-gray-400 text-sm">APY</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">TVL</div>
                          <div className="text-white font-medium">${(protocol.totalValueLocked / 1000000).toFixed(1)}M</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Daily Volume</div>
                          <div className="text-white font-medium">${(protocol.dailyVolume / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Users</div>
                          <div className="text-white font-medium">{protocol.users.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Updated: {protocol.lastUpdated}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build the Future of Finance?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you implement cutting-edge blockchain solutions 
              that revolutionize your business and create new opportunities.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedBlockchainHub;