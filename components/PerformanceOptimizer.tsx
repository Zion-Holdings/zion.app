import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Settings, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Cpu, 
  Database,
  Network,
  Shield,
  Rocket,
  Target,
  BarChart3,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface Optimization {
  id: string;
  name: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  estimatedSavings: string;
  category: 'performance' | 'security' | 'scalability' | 'cost';
  icon: React.ComponentType<any>;
  priority: number;
  lastRun?: Date;
  nextRun?: Date;
}

const PerformanceOptimizer: React.FC = () => {
  const [optimizations, setOptimizations] = useState<Optimization[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [autoOptimize, setAutoOptimize] = useState(false);
  const [showCompleted, setShowCompleted] = useState(true);

  // Initialize optimizations
  useEffect(() => {
    const initialOptimizations: Optimization[] = [
      {
        id: 'cache-optimization',
        name: 'Cache Optimization',
        description: 'Implement intelligent caching strategies for improved response times',
        impact: 'high',
        effort: 'low',
        status: 'pending',
        estimatedSavings: '40-60%',
        category: 'performance',
        icon: Zap,
        priority: 1
      },
      {
        id: 'database-tuning',
        name: 'Database Tuning',
        description: 'Optimize database queries and indexing for better performance',
        impact: 'high',
        effort: 'medium',
        status: 'pending',
        estimatedSavings: '25-45%',
        category: 'performance',
        icon: Database,
        priority: 2
      },
      {
        id: 'security-hardening',
        name: 'Security Hardening',
        description: 'Implement advanced security measures and threat detection',
        impact: 'high',
        effort: 'high',
        status: 'in-progress',
        estimatedSavings: 'N/A',
        category: 'security',
        icon: Shield,
        priority: 1
      },
      {
        id: 'load-balancing',
        name: 'Load Balancing',
        description: 'Distribute traffic across multiple servers for better scalability',
        impact: 'medium',
        effort: 'medium',
        status: 'completed',
        estimatedSavings: '30-50%',
        category: 'scalability',
        icon: Network,
        priority: 3
      },
      {
        id: 'code-optimization',
        name: 'Code Optimization',
        description: 'Refactor and optimize critical code paths for better execution',
        impact: 'medium',
        effort: 'high',
        status: 'pending',
        estimatedSavings: '15-35%',
        category: 'performance',
        icon: Cpu,
        priority: 4
      },
      {
        id: 'cdn-optimization',
        name: 'CDN Optimization',
        description: 'Optimize content delivery network for global performance',
        impact: 'medium',
        effort: 'low',
        status: 'pending',
        estimatedSavings: '20-40%',
        category: 'performance',
        icon: Target, // Changed from Globe to Target as Globe is not imported
        priority: 5
      }
    ];

    setOptimizations(initialOptimizations);
  }, []);

  // Memoize filtered optimizations
  const filteredOptimizations = useMemo(() => {
    let filtered = optimizations;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(opt => opt.category === selectedCategory);
    }
    
    if (!showCompleted) {
      filtered = filtered.filter(opt => opt.status !== 'completed');
    }
    
    return filtered.sort((a, b) => a.priority - b.priority);
  }, [optimizations, selectedCategory, showCompleted]);

  // Memoize categories
  const categories = useMemo(() => [
    { id: 'all', name: 'All', icon: Settings, color: 'from-gray-500 to-gray-600' },
    { id: 'performance', name: 'Performance', icon: Zap, color: 'from-cyan-500 to-blue-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'scalability', name: 'Scalability', icon: TrendingUp, color: 'from-green-500 to-teal-600' },
    { id: 'cost', name: 'Cost', icon: Target, color: 'from-purple-500 to-pink-600' }
  ], []);

  // Memoize impact colors
  const getImpactColor = useCallback((impact: Optimization['impact']) => {
    const colors = {
      high: 'text-red-400',
      medium: 'text-yellow-400',
      low: 'text-green-400'
    };
    return colors[impact];
  }, []);

  // Memoize effort colors
  const getEffortColor = useCallback((effort: Optimization['effort']) => {
    const colors = {
      low: 'text-green-400',
      medium: 'text-yellow-400',
      high: 'text-red-400'
    };
    return colors[effort];
  }, []);

  // Memoize status colors and icons
  const getStatusInfo = useCallback((status: Optimization['status']) => {
    const statusMap = {
      pending: { color: 'text-gray-400', icon: Clock, bg: 'bg-gray-500/20' },
      'in-progress': { color: 'text-blue-400', icon: Play, bg: 'bg-blue-500/20' },
      completed: { color: 'text-green-400', icon: CheckCircle, bg: 'bg-green-500/20' },
      failed: { color: 'text-red-400', icon: AlertTriangle, bg: 'bg-red-500/20' }
    };
    return statusMap[status];
  }, []);

  // Handle optimization run
  const handleRunOptimization = useCallback(async (optimizationId: string) => {
    setIsRunning(true);
    
    // Simulate optimization process
    setOptimizations(prev => prev.map(opt => 
      opt.id === optimizationId 
        ? { ...opt, status: 'in-progress' as const }
        : opt
    ));

    // Simulate processing time
    setTimeout(() => {
      setOptimizations(prev => prev.map(opt => 
        opt.id === optimizationId 
          ? { 
              ...opt, 
              status: 'completed' as const, 
              lastRun: new Date(),
              nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
            }
          : opt
      ));
      setIsRunning(false);
    }, 3000);
  }, []);

  // Handle auto-optimization toggle
  const handleAutoOptimizeToggle = useCallback(() => {
    setAutoOptimize(!autoOptimize);
  }, [autoOptimize]);

  // Calculate optimization statistics
  const stats = useMemo(() => {
    const total = optimizations.length;
    const completed = optimizations.filter(opt => opt.status === 'completed').length;
    const inProgress = optimizations.filter(opt => opt.status === 'in-progress').length;
    const pending = optimizations.filter(opt => opt.status === 'pending').length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, inProgress, pending, completionRate };
  }, [optimizations]);

  // Get priority recommendations
  const priorityRecommendations = useMemo(() => {
    return filteredOptimizations
      .filter(opt => opt.status === 'pending')
      .slice(0, 3)
      .map(opt => ({
        ...opt,
        recommendation: `High impact optimization with ${opt.estimatedSavings} estimated savings`
      }));
  }, [filteredOptimizations]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Performance Optimizer</h3>
        <p className="text-gray-400">Intelligent optimization recommendations and automation</p>
      </div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total', value: stats.total, color: 'text-blue-400', icon: Settings },
          { label: 'Completed', value: stats.completed, color: 'text-green-400', icon: CheckCircle },
          { label: 'In Progress', value: stats.inProgress, color: 'text-yellow-400', icon: Play },
          { label: 'Success Rate', value: `${stats.completionRate}%`, color: 'text-purple-400', icon: TrendingUp }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} aria-hidden="true" />
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Auto-Optimization Toggle */}
      <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-1">Auto-Optimization</h4>
            <p className="text-xs text-gray-300">
              Automatically run optimizations based on performance thresholds
            </p>
          </div>
          <button
            onClick={handleAutoOptimizeToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
              autoOptimize ? 'bg-cyan-500' : 'bg-gray-600'
            }`}
            aria-label={`${autoOptimize ? 'Disable' : 'Enable'} auto-optimization`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                autoOptimize ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
              selectedCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
          >
            <category.icon className="w-4 h-4" aria-hidden="true" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Show Completed Toggle */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="show-completed"
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.target.checked)}
          className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500/50 focus:ring-2"
        />
        <label htmlFor="show-completed" className="text-sm text-gray-300">
          Show completed optimizations
        </label>
      </div>

      {/* Priority Recommendations */}
      {priorityRecommendations.length > 0 && (
        <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
          <h4 className="text-sm font-semibold text-yellow-400 mb-3">Priority Recommendations</h4>
          <div className="space-y-2">
            {priorityRecommendations.map((rec, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-300">{rec.name}</span>
                <span className="text-yellow-400">{rec.recommendation}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optimizations List */}
      <div className="space-y-4">
        {filteredOptimizations.map((optimization, index) => {
          const StatusIcon = getStatusInfo(optimization.status).icon;
          const statusColor = getStatusInfo(optimization.status).color;
          const statusBg = getStatusInfo(optimization.status).bg;

          return (
            <motion.div
              key={optimization.id}
              className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <optimization.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                    <h4 className="text-lg font-semibold text-white">{optimization.name}</h4>
                    <div className={`px-2 py-1 text-xs font-medium rounded-full ${statusBg} ${statusColor}`}>
                      <StatusIcon className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      {optimization.status.replace('-', ' ')}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{optimization.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <span>Impact:</span>
                      <span className={getImpactColor(optimization.impact)}>
                        {optimization.impact.charAt(0).toUpperCase() + optimization.impact.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Effort:</span>
                      <span className={getEffortColor(optimization.effort)}>
                        {optimization.effort.charAt(0).toUpperCase() + optimization.effort.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Priority:</span>
                      <span className="text-purple-400">#{optimization.priority}</span>
                    </div>
                    {optimization.estimatedSavings !== 'N/A' && (
                      <div className="flex items-center gap-1">
                        <span>Savings:</span>
                        <span className="text-green-400">{optimization.estimatedSavings}</span>
                      </div>
                    )}
                  </div>

                  {/* Last Run Info */}
                  {optimization.lastRun && (
                    <div className="mt-2 text-xs text-gray-500">
                      Last run: {optimization.lastRun.toLocaleString()}
                      {optimization.nextRun && (
                        <span className="ml-3">
                          Next run: {optimization.nextRun.toLocaleString()}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 ml-4">
                  {optimization.status === 'pending' && (
                    <button
                      onClick={() => handleRunOptimization(optimization.id)}
                      disabled={isRunning}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={`Run ${optimization.name} optimization`}
                    >
                      {isRunning ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Running...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Play className="w-4 h-4" aria-hidden="true" />
                          Run
                        </div>
                      )}
                    </button>
                  )}
                  
                  {optimization.status === 'completed' && (
                    <button
                      onClick={() => handleRunOptimization(optimization.id)}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                      aria-label={`Re-run ${optimization.name} optimization`}
                    >
                      <div className="flex items-center gap-2">
                        <RotateCcw className="w-4 h-4" aria-hidden="true" />
                        Re-run
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredOptimizations.length === 0 && (
        <div className="text-center py-8">
          <BarChart3 className="w-12 h-12 text-gray-500 mx-auto mb-4" aria-hidden="true" />
          <p className="text-gray-400">No optimizations found for the selected criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;