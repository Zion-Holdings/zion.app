import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Activity, 
  Target,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

interface AnalyticsData {
  period: string;
  visitors: number;
  pageViews: number;
  conversionRate: number;
  revenue: number;
  bounceRate: number;
  avgSessionDuration: number;
}

interface DeviceData {
  device: string;
  percentage: number;
  color: string;
}

interface TrafficSource {
  source: string;
  visitors: number;
  conversionRate: number;
  color: string;
}

const analyticsData: AnalyticsData[] = [
  { period: 'Jan', visitors: 12500, pageViews: 45000, conversionRate: 3.2, revenue: 45000, bounceRate: 42, avgSessionDuration: 4.2 },
  { period: 'Feb', visitors: 13800, pageViews: 52000, conversionRate: 3.8, revenue: 52000, bounceRate: 38, avgSessionDuration: 4.8 },
  { period: 'Mar', visitors: 15200, pageViews: 61000, conversionRate: 4.1, revenue: 61000, bounceRate: 35, avgSessionDuration: 5.1 },
  { period: 'Apr', visitors: 16800, pageViews: 72000, conversionRate: 4.5, revenue: 72000, bounceRate: 32, avgSessionDuration: 5.5 },
  { period: 'May', visitors: 18500, pageViews: 85000, conversionRate: 4.9, revenue: 85000, bounceRate: 29, avgSessionDuration: 5.9 },
  { period: 'Jun', visitors: 20300, pageViews: 98000, conversionRate: 5.3, revenue: 98000, bounceRate: 26, avgSessionDuration: 6.3 }
];

const deviceData: DeviceData[] = [
  { device: 'Desktop', percentage: 58, color: 'from-blue-500 to-cyan-500' },
  { device: 'Mobile', percentage: 35, color: 'from-purple-500 to-pink-500' },
  { device: 'Tablet', percentage: 7, color: 'from-green-500 to-emerald-500' }
];

const trafficSources: TrafficSource[] = [
  { source: 'Organic Search', visitors: 45000, conversionRate: 4.2, color: 'from-blue-500 to-cyan-500' },
  { source: 'Direct Traffic', visitors: 28000, conversionRate: 3.8, color: 'from-purple-500 to-pink-500' },
  { source: 'Social Media', visitors: 22000, conversionRate: 2.9, color: 'from-green-500 to-emerald-500' },
  { source: 'Referral', visitors: 15000, conversionRate: 3.5, color: 'from-yellow-500 to-orange-500' },
  { source: 'Email', visitors: 12000, conversionRate: 5.1, color: 'from-red-500 to-pink-500' }
];

const timeRanges = [
  { id: '7d', label: 'Last 7 Days' },
  { id: '30d', label: 'Last 30 Days' },
  { id: '90d', label: 'Last 90 Days' },
  { id: '1y', label: 'Last Year' }
];

const AdvancedAnalytics: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('visitors');

  const currentData = analyticsData[analyticsData.length - 1];
  const previousData = analyticsData[analyticsData.length - 2];
  
  // Guard clause to ensure data exists
  if (!currentData || !previousData) {
    return null;
  }
  
  const calculateChange = (current: number, previous: number): { value: number; isPositive: boolean } => {
    const change = ((current - previous) / previous) * 100;
    return { value: Math.abs(change), isPositive: change >= 0 };
  };

  const visitorsChange = calculateChange(currentData.visitors, previousData.visitors);
  const revenueChange = calculateChange(currentData.revenue, previousData.revenue);
  const conversionChange = calculateChange(currentData.conversionRate, previousData.conversionRate);
  const bounceChange = calculateChange(currentData.bounceRate, previousData.bounceRate);

  const handleRefresh = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

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
            Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights into your website performance, user behavior, and business metrics. 
            Track growth, identify opportunities, and make data-driven decisions.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
        >
          {/* Time Range Selector */}
          <div className="flex items-center gap-2 bg-gray-800/50 rounded-xl p-2 border border-gray-700/50">
            {timeRanges.map((range) => (
              <motion.button
                key={range.id}
                onClick={() => setSelectedTimeRange(range.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedTimeRange === range.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {range.label}
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={handleRefresh}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Refreshing...' : 'Refresh'}
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Export Report
            </motion.button>
          </div>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* Visitors */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    visitorsChange.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {visitorsChange.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  +{visitorsChange.value.toFixed(1)}%
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{currentData.visitors.toLocaleString()}</h3>
              <p className="text-gray-400 text-sm">Total Visitors</p>
            </div>
          </motion.div>

          {/* Revenue */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    revenueChange.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {revenueChange.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  +{revenueChange.value.toFixed(1)}%
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">${currentData.revenue.toLocaleString()}</h3>
              <p className="text-gray-400 text-sm">Total Revenue</p>
            </div>
          </motion.div>

          {/* Conversion Rate */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    conversionChange.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {conversionChange.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  +{conversionChange.value.toFixed(1)}%
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{currentData.conversionRate}%</h3>
              <p className="text-gray-400 text-sm">Conversion Rate</p>
            </div>
          </motion.div>

          {/* Bounce Rate */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    bounceChange.isPositive ? 'text-red-400' : 'text-green-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {bounceChange.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {bounceChange.isPositive ? '+' : '-'}{bounceChange.value.toFixed(1)}%
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{currentData.bounceRate}%</h3>
              <p className="text-gray-400 text-sm">Bounce Rate</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Traffic Trend Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Traffic Trends</h3>
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">Last 6 Months</span>
              </div>
            </div>
            
            {/* Simple Chart Visualization */}
            <div className="h-64 flex items-end justify-between gap-2">
              {analyticsData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded-t-lg relative group cursor-pointer"
                       style={{ height: `${(data.visitors / 25000) * 200}px` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {data.visitors.toLocaleString()}
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs mt-2">{data.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Device Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Device Distribution</h3>
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400 text-sm">Traffic by Device</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {deviceData.map((device, index) => (
                <div key={device.device} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 bg-gradient-to-r ${device.color} rounded-full`} />
                    <span className="text-gray-300">{device.device}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${device.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${device.percentage}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                      />
                    </div>
                    <span className="text-white font-medium w-12 text-right">{device.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Traffic Sources Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Traffic Sources</h3>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-400" />
              <span className="text-gray-400 text-sm">Performance by Source</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left text-gray-400 font-medium py-3">Source</th>
                  <th className="text-left text-gray-400 font-medium py-3">Visitors</th>
                  <th className="text-left text-gray-400 font-medium py-3">Conversion Rate</th>
                  <th className="text-left text-gray-400 font-medium py-3">Performance</th>
                </tr>
              </thead>
              <tbody>
                {trafficSources.map((source, index) => (
                  <motion.tr
                    key={source.source}
                    className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${source.color} rounded-full`} />
                        <span className="text-white font-medium">{source.source}</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-300">{source.visitors.toLocaleString()}</td>
                    <td className="py-4 text-gray-300">{source.conversionRate}%</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${source.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(source.conversionRate / 6) * 100}%` }}
                            transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                          />
                        </div>
                        <span className="text-gray-400 text-sm">{source.conversionRate}%</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

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
              Get Deeper Insights
            </h3>
            <p className="text-gray-300 mb-6">
              Unlock advanced analytics, custom reports, and real-time monitoring 
              to optimize your digital presence and drive growth.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Analytics
              <TrendingUp className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;