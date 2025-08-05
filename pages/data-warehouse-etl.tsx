import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'stream';
  status: 'connected' | 'disconnected' | 'error';
  recordCount: number;
  size: number;
  lastSync?: Date;
}

interface ETLPipeline {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'running' | 'error';
  schedule: 'manual' | 'hourly' | 'daily' | 'weekly';
  lastRun?: Date;
  performance: {
    recordsProcessed: number;
    processingTime: number;
    successRate: number;
  };
}

interface DataWarehouse {
  id: string;
  name: string;
  type: 'snowflake' | 'redshift' | 'bigquery';
  status: 'active' | 'inactive';
  size: number;
  recordCount: number;
  tables: number;
}

const DataWarehouseETL: NextPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sources' | 'pipelines' | 'warehouse'>('overview')
  const [loading, setLoading] = useState(true)
  const [dataSources, setDataSources] = useState<DataSource[]>([])
  const [etlPipelines, setEtlPipelines] = useState<ETLPipeline[]>([])
  const [dataWarehouses, setDataWarehouses] = useState<DataWarehouse[]>([])

  useEffect(() => {
    const mockDataSources: DataSource[] = [
      {
        id: '1',
        name: 'PostgreSQL Production DB',
        type: 'database',
        status: 'connected',
        recordCount: 2450000,
        size: 1560000000,
        lastSync: new Date(Date.now() - 3600000)
      },
      {
        id: '2',
        name: 'Salesforce CRM API',
        type: 'api',
        status: 'connected',
        recordCount: 890000,
        size: 450000000,
        lastSync: new Date(Date.now() - 7200000)
      }
    ]

    const mockPipelines: ETLPipeline[] = [
      {
        id: '1',
        name: 'User Data Pipeline',
        status: 'active',
        schedule: 'hourly',
        lastRun: new Date(Date.now() - 1800000),
        performance: {
          recordsProcessed: 125000,
          processingTime: 45,
          successRate: 99.8
        }
      }
    ]

    const mockWarehouses: DataWarehouse[] = [
      {
        id: '1',
        name: 'Zion Analytics Warehouse',
        type: 'snowflake',
        status: 'active',
        size: 2500000000,
        recordCount: 2500000,
        tables: 15
      }
    ]

    setDataSources(mockDataSources)
    setEtlPipelines(mockPipelines)
    setDataWarehouses(mockWarehouses)
    setLoading(false)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'connected':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'running':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'error':
      case 'disconnected':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  if (loading) {
    return (
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>Data Warehouse & ETL Platform - Zion Tech Group</title>
        <meta name="description" content="Comprehensive data warehouse and ETL platform for enterprise data integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                Zion Tech Group
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Data Warehouse & ETL Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            Comprehensive data integration, transformation, and warehousing platform for enterprise analytics. 
            Connect multiple data sources, build ETL pipelines, and maintain data quality across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Data Sources</p>
                <p className="text-2xl font-bold text-white">{dataSources.length}</p>
              </div>
              <div className="text-3xl">🔗</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">ETL Pipelines</p>
                <p className="text-2xl font-bold text-white">{etlPipelines.length}</p>
              </div>
              <div className="text-3xl">⚙️</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Data Warehouses</p>
                <p className="text-2xl font-bold text-white">{dataWarehouses.length}</p>
              </div>
              <div className="text-3xl">🏢</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Data Size</p>
                <p className="text-2xl font-bold text-white">{formatBytes(dataWarehouses.reduce((acc, dw) => acc + dw.size, 0))}</p>
              </div>
              <div className="text-3xl">💾</div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'overview', name: 'Overview', icon: '📊' },
            { id: 'sources', name: 'Data Sources', icon: '🔗' },
            { id: 'pipelines', name: 'ETL Pipelines', icon: '⚙️' },
            { id: 'warehouse', name: 'Data Warehouse', icon: '🏢' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {etlPipelines.map((pipeline) => (
                    <div key={pipeline.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(pipeline.status).split(' ')[0]}`}></div>
                        <div>
                          <p className="text-white font-medium">{pipeline.name}</p>
                          <p className="text-gray-400 text-sm">Last run: {pipeline.lastRun?.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{pipeline.performance.recordsProcessed.toLocaleString()} records</p>
                        <p className="text-gray-400 text-sm">{pipeline.performance.processingTime}s</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'sources' && (
            <motion.div
              key="sources"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataSources.map((source) => (
                  <motion.div
                    key={source.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{source.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(source.status)}`}>
                        {source.status}
                      </span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Type:</span>
                        <span className="text-white capitalize">{source.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Records:</span>
                        <span className="text-white">{source.recordCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Size:</span>
                        <span className="text-white">{formatBytes(source.size)}</span>
                      </div>
                      {source.lastSync && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Last Sync:</span>
                          <span className="text-white">{source.lastSync.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'pipelines' && (
            <motion.div
              key="pipelines"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {etlPipelines.map((pipeline) => (
                  <motion.div
                    key={pipeline.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{pipeline.name}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pipeline.status)}`}>
                        {pipeline.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm">Schedule</p>
                        <p className="text-white font-medium capitalize">{pipeline.schedule}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Records Processed</p>
                        <p className="text-white font-medium">{pipeline.performance.recordsProcessed.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Success Rate</p>
                        <p className="text-white font-medium">{pipeline.performance.successRate}%</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'warehouse' && (
            <motion.div
              key="warehouse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                {dataWarehouses.map((warehouse) => (
                  <motion.div
                    key={warehouse.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{warehouse.name}</h4>
                        <p className="text-gray-400 capitalize">{warehouse.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(warehouse.status)}`}>
                        {warehouse.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm">Total Size</p>
                        <p className="text-white font-medium">{formatBytes(warehouse.size)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Total Records</p>
                        <p className="text-white font-medium">{warehouse.recordCount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Tables</p>
                        <p className="text-white font-medium">{warehouse.tables}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default DataWarehouseETL 