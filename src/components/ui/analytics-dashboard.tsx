import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Download,
  RefreshCw,
  BarChart3,
  Eye,
  EyeOff,
  Target
} from 'lucide-react';
import { Button } from './button';

interface AnalyticsDashboardProps {
  enabled?: boolean;
  isExpanded?: boolean;
  onMetricClick?: (metricId: string) => void;
  className?: string;
}

export function AnalyticsDashboard({
  enabled = true,
  isExpanded = false,
  onMetricClick,
  className = ''
}: AnalyticsDashboardProps) {
  const [showTargets, setShowTargets] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  // Mock analytics data
  const [metrics, setMetrics] = useState({
    totalUsers: 12450,
    activeUsers: 8920,
    revenue: 456780,
    growth: 23.5
  });

  // Simulate real-time data updates
  useEffect(() => {
    if (!enabled || !isExpanded) return;

    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        revenue: prev.revenue + Math.floor(Math.random() * 1000) - 500,
        growth: prev.growth + (Math.random() * 2 - 1)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [enabled, isExpanded]);

  // Handle metric click
  const handleMetricClick = useCallback((metricId: string) => {
    setSelectedMetric(metricId);
    onMetricClick?.(metricId);
  }, [onMetricClick]);

  // Calculate progress percentage
  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  // Refresh data
  const refreshData = useCallback(async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update metrics with some randomization
    setMetrics(prev => ({
      ...prev,
      totalUsers: prev.totalUsers + Math.floor(Math.random() * 100) - 50,
      activeUsers: prev.activeUsers + Math.floor(Math.random() * 50) - 25,
      revenue: prev.revenue + Math.floor(Math.random() * 5000) - 2500,
      growth: prev.growth + (Math.random() * 2 - 1)
    }));
    
    setIsLoading(false);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div 
      className={`bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>
          <p className="text-zinc-300 text-sm">Real-time business metrics and insights</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowTargets(!showTargets)}
            className="text-zinc-400 hover:text-white p-2"
          >
            {showTargets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={refreshData}
            disabled={isLoading}
            className="border-zion-blue-light/30 text-zinc-300 hover:text-white"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-zion-blue-light/30 text-zinc-300 hover:text-white"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <motion.div 
          className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          onClick={() => handleMetricClick('totalUsers')}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{metrics.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-zinc-400">Total Users</div>
            </div>
          </div>
          {showTargets && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Target: 15,000</span>
                <span className="text-white font-medium">
                  {calculateProgress(metrics.totalUsers, 15000).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${calculateProgress(metrics.totalUsers, 15000)}%` }}
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Active Users */}
        <motion.div 
          className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          onClick={() => handleMetricClick('activeUsers')}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{metrics.activeUsers.toLocaleString()}</div>
              <div className="text-sm text-zinc-400">Active Users</div>
            </div>
          </div>
          {showTargets && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Target: 12,000</span>
                <span className="text-white font-medium">
                  {calculateProgress(metrics.activeUsers, 12000).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${calculateProgress(metrics.activeUsers, 12000)}%` }}
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Revenue */}
        <motion.div 
          className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          onClick={() => handleMetricClick('revenue')}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">${metrics.revenue.toLocaleString()}</div>
              <div className="text-sm text-zinc-400">Revenue</div>
            </div>
          </div>
          {showTargets && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Target: $500,000</span>
                <span className="text-white font-medium">
                  {calculateProgress(metrics.revenue, 500000).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${calculateProgress(metrics.revenue, 500000)}%` }}
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Growth Rate */}
        <motion.div 
          className="bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg p-4 cursor-pointer hover:border-zion-cyan/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          onClick={() => handleMetricClick('growth')}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{metrics.growth.toFixed(1)}%</div>
              <div className="text-sm text-zinc-400">Growth Rate</div>
            </div>
          </div>
          {showTargets && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Target: 25%</span>
                <span className="text-white font-medium">
                  {calculateProgress(metrics.growth, 25).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${calculateProgress(metrics.growth, 25)}%` }}
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Selected Metric Details */}
      <AnimatePresence>
        {selectedMetric && (
          <motion.div
            className="bg-zion-blue/10 border border-zion-blue-light/20 rounded-lg p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-2">Metric Details</h4>
            <p className="text-zinc-300 text-sm">
              Selected metric: {selectedMetric} - Click on any metric card above to view detailed information.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}