import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Brain, Settings, Target, TrendingUp, CheckCircle, 
  AlertTriangle, X, RefreshCw, BarChart3, Cpu, HardDrive,
  Wifi, Battery, Thermometer, Gauge, Rocket, Star, Clock,
  Activity, Lightbulb, Wrench, Eye, EyeOff, Shield
} from 'lucide-react';

interface OptimizationRule {
  id: string;
  name: string;
  description: string;
  category: 'performance' | 'accessibility' | 'seo' | 'security';
  priority: 'high' | 'medium' | 'low';
  impact: number; // 0-100
  effort: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed' | 'skipped';
  estimatedSavings?: string;
  codeExample?: string;
}

interface OptimizationMetrics {
  overallScore: number;
  performance: number;
  accessibility: number;
  seo: number;
  security: number;
  recommendations: number;
  implemented: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [optimizationRules, setOptimizationRules] = useState<OptimizationRule[]>([]);
  const [metrics, setMetrics] = useState<OptimizationMetrics | null>(null);
  const [lastAnalysis, setLastAnalysis] = useState<Date | null>(null);

  const categories = [
    { id: 'all', name: 'All Rules', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
    { id: 'performance', name: 'Performance', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'accessibility', name: 'Accessibility', icon: Eye, color: 'from-emerald-500 to-teal-500' },
    { id: 'seo', name: 'SEO', icon: Target, color: 'from-yellow-500 to-orange-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-pink-500' }
  ];

  const generateOptimizationRules = useCallback(() => {
    const rules: OptimizationRule[] = [
      {
        id: 'perf-001',
        name: 'Image Optimization',
        description: 'Implement lazy loading and WebP format for images to reduce initial page load time',
        category: 'performance',
        priority: 'high',
        impact: 85,
        effort: 'medium',
        status: 'pending',
        estimatedSavings: '2-4 seconds',
        codeExample: '<img loading="lazy" src="image.webp" alt="Description" />'
      },
      {
        id: 'perf-002',
        name: 'Bundle Splitting',
        description: 'Split JavaScript bundles to load only necessary code for each route',
        category: 'performance',
        priority: 'high',
        impact: 75,
        effort: 'high',
        status: 'pending',
        estimatedSavings: '1-3 seconds',
        codeExample: '// Use dynamic imports\nconst Component = lazy(() => import("./Component"))'
      },
      {
        id: 'perf-003',
        name: 'Critical CSS Inlining',
        description: 'Inline critical CSS to eliminate render-blocking resources',
        category: 'performance',
        priority: 'medium',
        impact: 60,
        effort: 'medium',
        status: 'pending',
        estimatedSavings: '0.5-1.5 seconds'
      },
      {
        id: 'acc-001',
        name: 'ARIA Labels',
        description: 'Add proper ARIA labels and roles for better screen reader support',
        category: 'accessibility',
        priority: 'high',
        impact: 90,
        effort: 'low',
        status: 'pending',
        estimatedSavings: 'Improved accessibility score'
      },
      {
        id: 'acc-002',
        name: 'Keyboard Navigation',
        description: 'Ensure all interactive elements are keyboard accessible',
        category: 'accessibility',
        priority: 'high',
        impact: 85,
        effort: 'medium',
        status: 'pending',
        estimatedSavings: 'Better keyboard navigation'
      },
      {
        id: 'seo-001',
        name: 'Meta Tags',
        description: 'Optimize meta tags for better search engine visibility',
        category: 'seo',
        priority: 'medium',
        impact: 70,
        effort: 'low',
        status: 'pending',
        estimatedSavings: 'Improved SEO ranking'
      },
      {
        id: 'sec-001',
        name: 'Content Security Policy',
        description: 'Implement CSP headers to prevent XSS attacks',
        category: 'security',
        priority: 'high',
        impact: 95,
        effort: 'medium',
        status: 'pending',
        estimatedSavings: 'Enhanced security'
      }
    ];

    setOptimizationRules(rules);
    
    // Calculate metrics
    const totalRules = rules.length;
    const completedRules = rules.filter(rule => rule.status === 'completed').length;
    const highPriorityRules = rules.filter(rule => rule.priority === 'high').length;
    
    const metrics: OptimizationMetrics = {
      overallScore: Math.round((completedRules / totalRules) * 100),
      performance: Math.round((rules.filter(r => r.category === 'performance' && r.status === 'completed').length / rules.filter(r => r.category === 'performance').length) * 100),
      accessibility: Math.round((rules.filter(r => r.category === 'accessibility' && r.status === 'completed').length / rules.filter(r => r.category === 'accessibility').length) * 100),
      seo: Math.round((rules.filter(r => r.category === 'seo' && r.status === 'completed').length / rules.filter(r => r.category === 'seo').length) * 100),
      security: Math.round((rules.filter(r => r.category === 'security' && r.status === 'completed').length / rules.filter(r => r.category === 'security').length) * 100),
      recommendations: totalRules,
      implemented: completedRules
    };
    
    setMetrics(metrics);
    setLastAnalysis(new Date());
  }, []);

  const runAnalysis = useCallback(async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    generateOptimizationRules();
    setIsAnalyzing(false);
  }, [generateOptimizationRules]);

  const updateRuleStatus = useCallback((ruleId: string, status: OptimizationRule['status']) => {
    setOptimizationRules(prev => 
      prev.map(rule => 
        rule.id === ruleId ? { ...rule, status } : rule
      )
    );
    
    // Recalculate metrics
    if (metrics) {
      const updatedRules = optimizationRules.map(rule => 
        rule.id === ruleId ? { ...rule, status } : rule
      );
      
      const totalRules = updatedRules.length;
      const completedRules = updatedRules.filter(rule => rule.status === 'completed').length;
      
      setMetrics(prev => prev ? {
        ...prev,
        overallScore: Math.round((completedRules / totalRules) * 100),
        implemented: completedRules
      } : null);
    }
  }, [optimizationRules, metrics]);

  const getFilteredRules = useMemo(() => {
    if (selectedCategory === 'all') return optimizationRules;
    return optimizationRules.filter(rule => rule.category === selectedCategory);
  }, [optimizationRules, selectedCategory]);

  const getPriorityColor = useCallback((priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  }, []);

  const getEffortColor = useCallback((effort: string) => {
    switch (effort) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  }, []);

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'in-progress': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'pending': return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      case 'skipped': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  }, []);

  const getStatusIcon = useCallback((status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertTriangle className="w-4 h-4" />;
      case 'skipped': return <X className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  }, []);

  React.useEffect(() => {
    // Run initial analysis
    runAnalysis();
  }, [runAnalysis]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">AI Performance Optimizer</h3>
            <p className="text-gray-400 text-sm">Intelligent optimization recommendations</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors flex items-center gap-2"
            aria-label={showDetails ? 'Hide detailed view' : 'Show detailed view'}
          >
            <BarChart3 className="w-4 h-4" />
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          
          <button
            onClick={runAnalysis}
            disabled={isAnalyzing}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            aria-label="Run performance analysis"
          >
            <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </div>

      {/* Metrics Overview */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metrics.overallScore}%</div>
            <div className="text-indigo-300 text-sm">Overall Score</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metrics.performance}%</div>
            <div className="text-cyan-300 text-sm">Performance</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metrics.accessibility}%</div>
            <div className="text-emerald-300 text-sm">Accessibility</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metrics.seo}%</div>
            <div className="text-yellow-300 text-sm">SEO</div>
          </motion.div>
        </div>
      )}

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
            }`}
            aria-label={`Filter by ${category.name}`}
          >
            <category.icon className="w-4 h-4" />
            {category.name}
            <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
              {getFilteredRules.filter(r => category.id === 'all' || r.category === category.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Optimization Rules */}
      <div className="space-y-4">
        {getFilteredRules.map((rule, index) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-white">{rule.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(rule.priority)}`}>
                    {rule.priority.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(rule.status)}`}>
                    {getStatusIcon(rule.status)}
                    <span className="ml-1">{rule.status.replace('-', ' ')}</span>
                  </span>
                </div>
                
                <p className="text-gray-300 mb-3">{rule.description}</p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">Impact:</span>
                    <span className="text-white font-medium">{rule.impact}%</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Wrench className={`w-4 h-4 ${getEffortColor(rule.effort)}`} />
                    <span className="text-gray-400">Effort:</span>
                    <span className={`font-medium ${getEffortColor(rule.effort)}`}>{rule.effort}</span>
                  </div>
                  
                  {rule.estimatedSavings && (
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-400">Savings:</span>
                      <span className="text-white font-medium">{rule.estimatedSavings}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => updateRuleStatus(rule.id, 'completed')}
                  disabled={rule.status === 'completed'}
                  className="p-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  aria-label="Mark as completed"
                >
                  <CheckCircle className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => updateRuleStatus(rule.id, 'in-progress')}
                  disabled={rule.status === 'in-progress'}
                  className="p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  aria-label="Mark as in progress"
                >
                  <Clock className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => updateRuleStatus(rule.id, 'skipped')}
                  disabled={rule.status === 'skipped'}
                  className="p-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  aria-label="Mark as skipped"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Code Example */}
            {showDetails && rule.codeExample && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-600/50"
              >
                <h5 className="text-sm font-medium text-gray-300 mb-2">Code Example:</h5>
                <code className="text-sm text-cyan-400 bg-gray-800 px-2 py-1 rounded">
                  {rule.codeExample}
                </code>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      {metrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Optimization Summary</h4>
              <p className="text-gray-300 text-sm">
                {metrics.implemented} of {metrics.recommendations} recommendations implemented
              </p>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-indigo-400">{metrics.overallScore}%</div>
              <div className="text-sm text-gray-400">Completion Rate</div>
            </div>
          </div>
          
          {lastAnalysis && (
            <div className="mt-4 text-center text-gray-400 text-sm">
              Last analyzed: {lastAnalysis.toLocaleString()}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;