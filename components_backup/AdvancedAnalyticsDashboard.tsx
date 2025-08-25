import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Users,
  DollarSign,
  Target,
  Star,
  ArrowRight,
  Download,
  Filter,
  Search,
  Calendar,
  Clock,
  Eye,
  Zap,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  MoreHorizontal,
  FileText,
  Settings,
  Database,
  Cloud,
  Globe,
  Smartphone
} from 'lucide-react';

interface AnalyticsMetric {
  id: string;
  name: string;
  value: number;
  previousValue: number;
  change: number;
  changePercent: number;
  trend: 'up' | 'down' | 'stable';
  unit: string;
  category: 'revenue' | 'clients' | 'projects' | 'performance' | 'growth' | 'efficiency';
  period: 'today' | 'week' | 'month' | 'quarter' | 'year';
  target?: number;
  isGood: boolean;
}

interface ChartData {
  id: string;
  name: string;
  type: 'line' | 'bar' | 'pie' | 'area';
  data: any[];
  xAxis: string;
  yAxis: string;
  color: string;
  description: string;
}

interface BusinessInsight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'warning' | 'critical' | 'neutral';
  impact: 'high' | 'medium' | 'low';
  recommendation: string;
  data: any;
  createdAt: string;
}

const analyticsMetrics: AnalyticsMetric[] = [
  {
    id: '1',
    name: 'Monthly Revenue',
    value: 124500,
    previousValue: 108200,
    change: 16300,
    changePercent: 15.1,
    trend: 'up',
    unit: '$',
    category: 'revenue',
    period: 'month',
    target: 120000,
    isGood: true
  },
  {
    id: '2',
    name: 'Active Projects',
    value: 23,
    previousValue: 18,
    change: 5,
    changePercent: 27.8,
    trend: 'up',
    unit: '',
    category: 'projects',
    period: 'month',
    target: 20,
    isGood: true
  },
  {
    id: '3',
    name: 'Client Satisfaction',
    value: 4.8,
    previousValue: 4.6,
    change: 0.2,
    changePercent: 4.3,
    trend: 'up',
    unit: '/5.0',
    category: 'clients',
    period: 'quarter',
    target: 4.5,
    isGood: true
  },
  {
    id: '4',
    name: 'Team Utilization',
    value: 87,
    previousValue: 92,
    change: -5,
    changePercent: -5.4,
    trend: 'down',
    unit: '%',
    category: 'performance',
    period: 'month',
    target: 85,
    isGood: true
  },
  {
    id: '5',
    name: 'Project Delivery Rate',
    value: 94,
    previousValue: 89,
    change: 5,
    changePercent: 5.6,
    trend: 'up',
    unit: '%',
    category: 'efficiency',
    period: 'quarter',
    target: 90,
    isGood: true
  },
  {
    id: '6',
    name: 'New Clients',
    value: 8,
    previousValue: 5,
    change: 3,
    changePercent: 60.0,
    trend: 'up',
    unit: '',
    category: 'growth',
    period: 'month',
    target: 6,
    isGood: true
  }
];

const chartData: ChartData[] = [
  {
    id: '1',
    name: 'Revenue Trend',
    type: 'line',
    data: [
      { month: 'Jan', revenue: 85000, target: 80000 },
      { month: 'Feb', revenue: 92000, target: 85000 },
      { month: 'Mar', revenue: 98000, target: 90000 },
      { month: 'Apr', revenue: 105000, target: 95000 },
      { month: 'May', revenue: 115000, target: 100000 },
      { month: 'Jun', revenue: 124500, target: 120000 }
    ],
    xAxis: 'month',
    yAxis: 'revenue',
    color: 'from-blue-500 to-cyan-500',
    description: 'Monthly revenue growth compared to targets'
  },
  {
    id: '2',
    name: 'Project Distribution',
    type: 'pie',
    data: [
      { category: 'Web Development', value: 40, color: 'from-blue-500 to-cyan-500' },
      { category: 'Mobile Apps', value: 25, color: 'from-green-500 to-emerald-500' },
      { category: 'AI/ML Projects', value: 20, color: 'from-purple-500 to-pink-500' },
      { category: 'Consulting', value: 15, color: 'from-yellow-500 to-orange-500' }
    ],
    xAxis: 'category',
    yAxis: 'value',
    color: 'mixed',
    description: 'Distribution of active projects by category'
  },
  {
    id: '3',
    name: 'Team Performance',
    type: 'bar',
    data: [
      { team: 'Frontend', productivity: 92, quality: 88, satisfaction: 4.7 },
      { team: 'Backend', productivity: 89, quality: 91, satisfaction: 4.8 },
      { team: 'Mobile', productivity: 85, quality: 87, satisfaction: 4.6 },
      { team: 'AI/ML', productivity: 91, quality: 89, satisfaction: 4.9 },
      { team: 'Design', productivity: 88, quality: 93, satisfaction: 4.8 }
    ],
    xAxis: 'team',
    yAxis: 'productivity',
    color: 'from-purple-500 to-pink-500',
    description: 'Team performance metrics across different departments'
  }
];

const businessInsights: BusinessInsight[] = [
  {
    id: '1',
    title: 'Revenue Growth Accelerating',
    description: 'Monthly revenue has increased by 15.1% compared to last month, exceeding our target by $4,500. This growth is driven by new client acquisitions and project expansion.',
    type: 'positive',
    impact: 'high',
    recommendation: 'Continue current sales strategies and consider expanding the team to handle increased demand.',
    data: { revenue: 124500, target: 120000, growth: 15.1 },
    createdAt: '2025-01-27'
  },
  {
    id: '2',
    title: 'Team Utilization Declining',
    description: 'Team utilization has decreased by 5.4% this month. While still above target, this trend should be monitored to ensure optimal resource allocation.',
    type: 'warning',
    impact: 'medium',
    recommendation: 'Review project allocation and identify opportunities to optimize team capacity utilization.',
    data: { utilization: 87, target: 85, decline: -5.4 },
    createdAt: '2025-01-27'
  },
  {
    id: '3',
    title: 'Client Acquisition Surge',
    description: 'New client acquisitions have increased by 60% this month, indicating strong market demand and effective marketing strategies.',
    type: 'positive',
    impact: 'high',
    recommendation: 'Scale onboarding processes and ensure adequate resources for new client projects.',
    data: { newClients: 8, target: 6, growth: 60.0 },
    createdAt: '2025-01-26'
  }
];

const categoryColors = {
  'revenue': 'from-green-500 to-emerald-500',
  'clients': 'from-blue-500 to-cyan-500',
  'projects': 'from-purple-500 to-pink-500',
  'performance': 'from-yellow-500 to-orange-500',
  'growth': 'from-indigo-500 to-blue-500',
  'efficiency': 'from-red-500 to-pink-500'
};

const insightTypeColors = {
  'positive': 'from-green-500 to-emerald-500',
  'warning': 'from-yellow-500 to-orange-500',
  'critical': 'from-red-500 to-pink-500',
  'neutral': 'from-gray-500 to-gray-600'
};

const AdvancedAnalyticsDashboard: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'revenue' | 'performance' | 'insights'>('overview');
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [selectedMetric, setSelectedMetric] = useState<AnalyticsMetric | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMetrics = analyticsMetrics.filter(metric => {
    const matchesSearch = metric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         metric.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <CheckCircle className="w-6 h-6 text-white" />;
      case 'warning':
        return <AlertCircle className="w-6 h-6 text-white" />;
      case 'critical':
        return <AlertCircle className="w-6 h-6 text-white" />;
      default:
        return <Activity className="w-6 h-6 text-white" />;
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === '$') {
      return `$${value.toLocaleString()}`;
    } else if (unit === '%') {
      return `${value}%`;
    } else if (unit === '/5.0') {
      return `${value}/5.0`;
    }
    return `${value}${unit}`;
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
            Advanced data visualization and business intelligence. Track performance metrics, 
            analyze trends, and gain actionable insights to drive business growth.
          </p>
        </motion.div>

        {/* Quick Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+15.1%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">$124.5K</h3>
            <p className="text-gray-400 text-sm">Monthly Revenue</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+60%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">8</h3>
            <p className="text-gray-400 text-sm">New Clients</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+5.6%</div>
                <div className="text-gray-400 text-xs">vs last quarter</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">94%</h3>
            <p className="text-gray-400 text-sm">Delivery Rate</p>
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
          {(['overview', 'revenue', 'performance', 'insights'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <BarChart3 className="w-4 h-4 inline mr-2" />}
              {view === 'revenue' && <DollarSign className="w-4 h-4 inline mr-2" />}
              {view === 'performance' && <Activity className="w-4 h-4 inline mr-2" />}
              {view === 'insights' && <Eye className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search metrics and data..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as any)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Export Report
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Data
            </motion.button>
          </div>
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {filteredMetrics.map((metric) => (
                  <motion.div
                    key={metric.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => setSelectedMetric(metric)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 bg-gradient-to-r ${categoryColors[metric.category]} rounded-full`} />
                          <h4 className="text-white font-semibold">{metric.name}</h4>
                          {metric.target && metric.value >= metric.target && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">
                          {formatValue(metric.value, metric.unit)}
                        </div>
                        {metric.target && (
                          <div className="text-gray-400 text-sm mb-2">
                            Target: {formatValue(metric.target, metric.unit)}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(metric.trend)}
                        <div className={`text-sm font-medium ${metric.isGood ? 'text-green-400' : 'text-red-400'}`}>
                          {metric.changePercent >= 0 ? '+' : ''}{metric.changePercent.toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Change</span>
                        <span className={`font-medium ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {metric.change >= 0 ? '+' : ''}{formatValue(Math.abs(metric.change), metric.unit)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Period</span>
                        <span className="text-gray-300 capitalize">{metric.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'insights' && (
            <motion.div
              key="insights"
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
                className="space-y-6"
              >
                {businessInsights.map((insight) => (
                  <motion.div
                    key={insight.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-xl flex items-center justify-center`}>
                        {getInsightIcon(insight.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{insight.title}</h3>
                          <div className={`px-2 py-1 bg-gradient-to-r ${insightTypeColors[insight.type]} rounded-full text-white text-xs font-medium`}>
                            {insight.impact} impact
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{insight.description}</p>
                        
                        <div className="bg-gray-800/30 rounded-lg p-4 mb-4">
                          <div className="text-sm text-gray-400 mb-2">Recommendation</div>
                          <p className="text-white">{insight.recommendation}</p>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          Generated on {insight.createdAt}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chart Visualizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Data Visualizations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {chartData.map((chart) => (
              <div
                key={chart.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">{chart.name}</h4>
                  <div className="flex items-center gap-2">
                    {chart.type === 'line' && <LineChart className="w-5 h-5 text-blue-400" />}
                    {chart.type === 'bar' && <BarChart3 className="w-5 h-5 text-purple-400" />}
                    {chart.type === 'pie' && <PieChart className="w-5 h-5 text-green-400" />}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6">{chart.description}</p>
                
                {/* Chart Placeholder */}
                <div className="h-64 bg-gray-800/30 rounded-lg border border-gray-700/50 flex items-center justify-center">
                  <div className="text-center">
                    {chart.type === 'line' && <LineChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />}
                    {chart.type === 'bar' && <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />}
                    {chart.type === 'pie' && <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />}
                    <div className="text-gray-400 text-sm">
                      Interactive {chart.type} chart visualization
                    </div>
                    <div className="text-gray-500 text-xs mt-2">
                      Data: {chart.data.length} data points
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              Ready to Leverage Data Analytics?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you transform data into actionable insights with our 
              advanced analytics dashboard and business intelligence solutions.
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

export default AdvancedAnalyticsDashboard;