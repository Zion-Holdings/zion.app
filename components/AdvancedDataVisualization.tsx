import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Zap, 
  Target,
  RefreshCw,
  Download,
  Share2,
  Settings,
  Eye,
  EyeOff
} from 'lucide-react';

interface DataPoint {
  id: string;
  label: string;
  value: number;
  category: string;
  timestamp: string;
  change?: number;
  changeType?: 'increase' | 'decrease';
}

interface ChartData {
  id: string;
  name: string;
  data: DataPoint[];
  type: 'line' | 'bar' | 'pie' | 'area';
  color: string;
  description: string;
}

interface AdvancedDataVisualizationProps {
  title?: string;
  subtitle?: string;
  showControls?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  maxDataPoints?: number;
}

const AdvancedDataVisualization: React.FC<AdvancedDataVisualizationProps> = ({
  title = "Advanced Data Analytics",
  subtitle = "Interactive charts and real-time data visualization",
  showControls = true,
  autoRefresh = true,
  refreshInterval = 5000,
  maxDataPoints = 50
}) => {
  const [activeChart, setActiveChart] = useState<string>('performance');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showLegend, setShowLegend] = useState(true);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');

  // Generate mock data
  const generateMockData = useMemo(() => {
    const categories = ['Performance', 'Security', 'User Activity', 'System Health'];
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    
    return categories.map((category, index) => {
      const data: DataPoint[] = [];
      const now = new Date();
      
      for (let i = maxDataPoints - 1; i >= 0; i--) {
        const timestamp = new Date(now.getTime() - i * (24 * 60 * 60 * 1000) / maxDataPoints);
        const baseValue = Math.random() * 100 + 50;
        const change = Math.random() * 20 - 10;
        
        data.push({
          id: `${category}-${i}`,
          label: timestamp.toLocaleDateString(),
          value: Math.max(0, baseValue + change),
          category,
          timestamp: timestamp.toISOString(),
          change: Math.abs(change),
          changeType: change > 0 ? 'increase' : 'decrease'
        });
      }
      
      return {
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category,
        data,
        type: (index % 2 === 0 ? 'line' : 'bar') as 'line' | 'bar' | 'pie' | 'area',
        color: colors[index % colors.length],
        description: `Real-time ${category.toLowerCase()} metrics and analytics`
      };
    });
  }, [maxDataPoints]);

  useEffect(() => {
    setChartData(generateMockData);
  }, [generateMockData]);

  // Auto-refresh functionality
  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      refreshData();
    }, refreshInterval);
    
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval]);

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setChartData(prev => prev.map(chart => ({
        ...chart,
        data: chart.data.map(point => ({
          ...point,
          value: Math.max(0, point.value + (Math.random() * 20 - 10)),
          change: Math.random() * 20,
          changeType: Math.random() > 0.5 ? 'increase' : 'decrease'
        }))
      })));
      setIsRefreshing(false);
    }, 1000);
  };

  const exportData = () => {
    const csvContent = chartData.map(chart => 
      chart.data.map(point => 
        `${point.timestamp},${point.label},${point.value},${point.category}`
      ).join('\n')
    ).join('\n\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const renderChart = (chart: ChartData) => {
    const maxValue = Math.max(...chart.data.map(d => d.value));
    const minValue = Math.min(...chart.data.map(d => d.value));
    
    switch (chart.type) {
      case 'line':
        return (
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox={`0 0 400 200`}>
              <defs>
                <linearGradient id={`gradient-${chart.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={chart.color} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={chart.color} stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map(y => (
                <line
                  key={y}
                  x1="0"
                  y1={200 - (y / 100) * 200}
                  x2="400"
                  y2={200 - (y / 100) * 200}
                  stroke="#374151"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}
              
              {/* Line path */}
              <path
                d={chart.data.map((point, index) => {
                  const x = (index / (chart.data.length - 1)) * 400;
                  const y = 200 - ((point.value - minValue) / (maxValue - minValue)) * 200;
                  return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                stroke={chart.color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Area fill */}
              <path
                d={`M 0 200 ${chart.data.map((point, index) => {
                  const x = (index / (chart.data.length - 1)) * 400;
                  const y = 200 - ((point.value - minValue) / (maxValue - minValue)) * 200;
                  return `L ${x} ${y}`;
                }).join(' ')} L 400 200 Z`}
                fill={`url(#gradient-${chart.id})`}
                opacity="0.3"
              />
            </svg>
          </div>
        );
        
      case 'bar':
        return (
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox={`0 0 400 200`}>
              {chart.data.map((point, index) => {
                const x = (index / chart.data.length) * 400;
                const width = 400 / chart.data.length * 0.8;
                const height = ((point.value - minValue) / (maxValue - minValue)) * 180;
                const y = 200 - height;
                
                return (
                  <g key={point.id}>
                    <rect
                      x={x + width * 0.1}
                      y={y}
                      width={width}
                      height={height}
                      fill={chart.color}
                      opacity="0.8"
                      rx="2"
                    />
                    <text
                      x={x + width / 2}
                      y={y - 5}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#9CA3AF"
                    >
                      {Math.round(point.value)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        );
        
      case 'pie':
        const total = chart.data.reduce((sum, point) => sum + point.value, 0);
        let currentAngle = 0;
        
        return (
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox={`0 0 200 200`}>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#374151" strokeWidth="1" />
              
              {chart.data.map((point, index) => {
                const percentage = point.value / total;
                const angle = percentage * 2 * Math.PI;
                const x1 = 100 + 80 * Math.cos(currentAngle);
                const y1 = 100 + 80 * Math.sin(currentAngle);
                const x2 = 100 + 80 * Math.cos(currentAngle + angle);
                const y2 = 100 + 80 * Math.sin(currentAngle + angle);
                
                const largeArcFlag = angle > Math.PI ? 1 : 0;
                
                const pathData = [
                  `M 100 100`,
                  `L ${x1} ${y1}`,
                  `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                  'Z'
                ].join(' ');
                
                currentAngle += angle;
                
                return (
                  <path
                    key={point.id}
                    d={pathData}
                    fill={chart.color}
                    opacity="0.8"
                  />
                );
              })}
            </svg>
          </div>
        );
        
      default:
        return <div className="h-64 flex items-center justify-center text-gray-400">Chart type not supported</div>;
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-gray-800 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value as any)}
                className="bg-gray-700 text-white px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
              
              <button
                onClick={() => setShowLegend(!showLegend)}
                className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                {showLegend ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showLegend ? 'Hide' : 'Show'} Legend
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={refreshData}
                disabled={isRefreshing}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              
              <button
                onClick={exportData}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              
              <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {chartData.map((chart, index) => (
            <motion.div
              key={chart.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{chart.name}</h3>
                  <p className="text-gray-400 text-sm">{chart.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: chart.color }}
                  />
                  <span className="text-sm text-gray-300 capitalize">{chart.type}</span>
                </div>
              </div>
              
              {renderChart(chart)}
              
              {showLegend && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {chart.data.slice(0, 4).map((point) => (
                      <div key={point.id} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: chart.color }}
                        />
                        <span className="text-gray-300">{point.label}</span>
                        <span className="text-gray-500">({Math.round(point.value)})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Data updates every {refreshInterval / 1000} seconds • Last updated: {new Date().toLocaleTimeString()}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Activity className="w-4 h-4" />
            Real-time monitoring active
            {isRefreshing && <RefreshCw className="w-4 h-4 animate-spin" />}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedDataVisualization;