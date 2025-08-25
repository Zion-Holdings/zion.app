import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Play,
  Square,
  Download,
  Upload,
  BarChart3,
  TrendingUp,
  Activity,
  Zap,
  Target,
  CheckCircle,
  XCircle,
  Loader2,
  Plus,
  Eye,
  Trash2
} from 'lucide-react';
import { useMachineLearning } from '../hooks/useMachineLearning';
import { useAnalytics } from '../hooks/useAnalytics';

interface MLDashboardProps {
  className?: string;
}

export const MachineLearningDashboard: React.FC<MLDashboardProps> = ({ className = '' }) => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [activeTab, setActiveTab] = useState<'overview' | 'models' | 'training' | 'predictions' | 'analytics'>('overview');
  const [showCreateModel, setShowCreateModel] = useState(false);
  const [showImportModel, setShowImportModel] = useState(false);

  const {
    models,
    trainingJobs,
    predictions,
    metrics,
    isPredicting,
    createModel,
    startTraining,
    stopTraining,
    deployModel,
    archiveModel,
    makePrediction,
    exportModel,
    importModel
  } = useMachineLearning();

  const [newModelForm, setNewModelForm] = useState({
    name: '',
    type: 'classification' as const,
    framework: 'tensorflow' as const
  });

  const [predictionForm, setPredictionForm] = useState({
    modelId: '',
    input: ''
  });

  const handleCreateModel = useCallback(() => {
    if (newModelForm.name.trim()) {
      createModel({
        name: newModelForm.name,
        type: newModelForm.type,
        framework: newModelForm.framework
      });
      setNewModelForm({ name: '', type: 'classification', framework: 'tensorflow' });
      setShowCreateModel(false);
      trackEvent('ml', 'dashboard', 'model_created');
    }
  }, [newModelForm, createModel, trackEvent]);

  const handleStartTraining = useCallback(async (modelId: string) => {
    const hyperparameters = {
      learningRate: 0.001,
      batchSize: 32,
      epochs: 100,
      optimizer: 'adam'
    };
    
    try {
      await startTraining(modelId, hyperparameters);
      trackEvent('ml', 'dashboard', 'training_started');
    } catch (error) {
      console.error('Training failed:', error);
    }
  }, [startTraining, trackEvent]);

  const handleStopTraining = useCallback((jobId: string) => {
    stopTraining(jobId);
    trackEvent('ml', 'dashboard', 'training_stopped');
  }, [stopTraining, trackEvent]);

  const handleDeployModel = useCallback((modelId: string) => {
    deployModel(modelId);
    trackEvent('ml', 'dashboard', 'model_deployed');
  }, [deployModel, trackEvent]);

  const handleArchiveModel = useCallback((modelId: string) => {
    archiveModel(modelId);
    trackEvent('ml', 'dashboard', 'model_archived');
  }, [archiveModel, trackEvent]);

  const handleMakePrediction = useCallback(async () => {
    if (predictionForm.modelId && predictionForm.input.trim()) {
      try {
        const input = JSON.parse(predictionForm.input);
        const result = await makePrediction(predictionForm.modelId, input);
        console.log('Prediction result:', result);
        setPredictionForm({ modelId: '', input: '' });
        trackEvent('ml', 'dashboard', 'prediction_made');
      } catch (error) {
        console.error('Prediction failed:', error);
      }
    }
  }, [predictionForm, makePrediction, trackEvent]);

  const handleExportModel = useCallback((modelId: string) => {
          try {
        const modelData = exportModel(modelId);
        navigator.clipboard.writeText(modelData);
        trackEvent('ml', 'dashboard', 'model_exported');
      } catch (error) {
        console.error('Export failed:', error);
      }
  }, [exportModel, trackEvent]);

  const handleImportModel = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const modelData = e.target?.result as string;
          importModel(modelData);
          setShowImportModel(false);
          trackEvent('ml', 'dashboard', 'model_imported');
        } catch (error) {
          console.error('Import failed:', error);
        }
      };
      reader.readAsText(file);
    }
  }, [importModel, trackEvent]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'text-green-600 bg-green-100';
      case 'ready': return 'text-blue-600 bg-blue-100';
      case 'training': return 'text-yellow-600 bg-yellow-100';
      case 'archived': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getJobStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getModelTypeIcon = (type: string) => {
    switch (type) {
      case 'classification': return <Target className="w-4 h-4" />;
      case 'regression': return <TrendingUp className="w-4 h-4" />;
      case 'clustering': return <Activity className="w-4 h-4" />;
      case 'nlp': return <Brain className="w-4 h-4" />;
      case 'computer_vision': return <Eye className="w-4 h-4" />;
      case 'recommendation': return <Zap className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Machine Learning
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              AI Model Management & Training
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowImportModel(!showImportModel)}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Upload className="w-4 h-4" />
            <span>Import</span>
          </button>
          
          <button
            onClick={() => setShowCreateModel(!showCreateModel)}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            <Plus className="w-4 h-4" />
            <span>New Model</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'models', label: 'Models', icon: Brain },
          { id: 'training', label: 'Training', icon: Activity },
          { id: 'predictions', label: 'Predictions', icon: Target },
          { id: 'analytics', label: 'Analytics', icon: TrendingUp }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === id
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Models</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.totalModels}</p>
                    </div>
                    <Brain className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Models</p>
                      <p className="text-2xl font-bold text-green-600">{metrics.activeModels}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Accuracy</p>
                      <p className="text-2xl font-bold text-blue-600">{(metrics.averageAccuracy * 100).toFixed(1)}%</p>
                    </div>
                    <Target className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Predictions</p>
                      <p className="text-2xl font-bold text-orange-600">{metrics.totalPredictions}</p>
                    </div>
                    <Zap className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Training Jobs Status */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Training Jobs</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.trainingJobs.total}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{metrics.trainingJobs.running}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Running</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{metrics.trainingJobs.completed}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{metrics.trainingJobs.failed}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Failed</p>
                  </div>
                </div>
              </div>

              {/* Recent Models */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Models</h3>
                <div className="space-y-3">
                  {models.slice(0, 3).map((model) => (
                    <div key={model.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                          {getModelTypeIcon(model.type)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{model.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {model.type} • {model.framework}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(model.status)}`}>
                          {model.status}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {(model.accuracy * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'models' && (
            <motion.div
              key="models"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Models</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowCreateModel(!showCreateModel)}
                    className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                  >
                    <Plus className="w-4 h-4 inline mr-2" />
                    New Model
                  </button>
                </div>
              </div>

              {/* Create Model Form */}
              <AnimatePresence>
                {showCreateModel && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Create New Model</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Model Name"
                        value={newModelForm.name}
                        onChange={(e) => setNewModelForm(prev => ({ ...prev, name: e.target.value }))}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      <select
                        value={newModelForm.type}
                        onChange={(e) => setNewModelForm(prev => ({ ...prev, type: e.target.value as any }))}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="classification">Classification</option>
                        <option value="regression">Regression</option>
                        <option value="clustering">Clustering</option>
                        <option value="nlp">NLP</option>
                        <option value="computer_vision">Computer Vision</option>
                        <option value="recommendation">Recommendation</option>
                      </select>
                      <select
                        value={newModelForm.framework}
                        onChange={(e) => setNewModelForm(prev => ({ ...prev, framework: e.target.value as any }))}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="tensorflow">TensorFlow</option>
                        <option value="pytorch">PyTorch</option>
                        <option value="scikit-learn">Scikit-learn</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <button
                        onClick={handleCreateModel}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                      >
                        Create Model
                      </button>
                      <button
                        onClick={() => setShowCreateModel(false)}
                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Import Model */}
              <AnimatePresence>
                {showImportModel && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Import Model</h4>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportModel}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                    <button
                      onClick={() => setShowImportModel(false)}
                      className="mt-3 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Models List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {models.map((model) => (
                  <div key={model.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                          {getModelTypeIcon(model.type)}
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(model.status)}`}>
                          {model.status}
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleExportModel(model.id)}
                          className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          title="Export"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleArchiveModel(model.id)}
                          className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                          title="Archive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">{model.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {model.type} • {model.framework} • v{model.version}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Accuracy:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {(model.accuracy * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Precision:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {(model.precision * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Recall:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {(model.recall * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {model.status === 'ready' && (
                        <>
                          <button
                            onClick={() => handleStartTraining(model.id)}
                            className="flex-1 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                          >
                            <Play className="w-4 h-4 inline mr-2" />
                            Train
                          </button>
                          <button
                            onClick={() => handleDeployModel(model.id)}
                            className="flex-1 px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                          >
                            Deploy
                          </button>
                        </>
                      )}
                      {model.status === 'deployed' && (
                        <button
                          onClick={() => handleArchiveModel(model.id)}
                          className="w-full px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                        >
                          Archive
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'training' && (
            <motion.div
              key="training"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Training Jobs</h3>
              
              <div className="space-y-4">
                {trainingJobs.map((job) => {
                  const model = models.find(m => m.id === job.modelId);
                  return (
                    <div key={job.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                            {model ? getModelTypeIcon(model.type) : <Brain className="w-4 h-4" />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {model?.name || 'Unknown Model'}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Started: {job.startTime.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getJobStatusColor(job.status)}`}>
                          {job.status}
                        </span>
                      </div>
                      
                      {job.status === 'running' && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500 dark:text-gray-400">Progress</span>
                            <span className="font-medium text-gray-900 dark:text-white">{job.progress.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${job.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {job.metrics.accuracy.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Latest Accuracy</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {(job.metrics.accuracy[job.metrics.accuracy.length - 1] * 100).toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Latest Loss</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {job.metrics.loss[job.metrics.loss.length - 1]?.toFixed(4) || 'N/A'}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex space-x-2">
                        {job.status === 'running' && (
                          <button
                            onClick={() => handleStopTraining(job.id)}
                            className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                          >
                            <Square className="w-4 h-4 inline mr-2" />
                            Stop
                          </button>
                        )}
                        {job.status === 'completed' && (
                          <div className="text-sm text-green-600 dark:text-green-400 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Training completed successfully
                          </div>
                        )}
                        {job.status === 'failed' && (
                          <div className="text-sm text-red-600 dark:text-red-400 flex items-center">
                            <XCircle className="w-4 h-4 mr-2" />
                            Training failed
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                {trainingJobs.length === 0 && (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <Activity className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p>No training jobs found</p>
                    <p className="text-sm">Start training a model to see jobs here</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'predictions' && (
            <motion.div
              key="predictions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Make Predictions</h3>
              
              {/* Prediction Form */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <select
                    value={predictionForm.modelId}
                    onChange={(e) => setPredictionForm(prev => ({ ...prev, modelId: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a deployed model</option>
                    {models.filter(m => m.status === 'deployed').map(model => (
                      <option key={model.id} value={model.id}>
                        {model.name} ({model.type})
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleMakePrediction}
                    disabled={!predictionForm.modelId || !predictionForm.input.trim() || isPredicting}
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50"
                  >
                    {isPredicting ? (
                      <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                    ) : (
                      <Target className="w-4 h-4 inline mr-2" />
                    )}
                    Make Prediction
                  </button>
                </div>
                <textarea
                  placeholder="Enter input data (JSON format)"
                  value={predictionForm.input}
                  onChange={(e) => setPredictionForm(prev => ({ ...prev, input: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Recent Predictions */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Recent Predictions</h4>
                <div className="space-y-3">
                  {predictions.slice(0, 5).map((prediction) => {
                    const model = models.find(m => m.id === prediction.modelId);
                    return (
                      <div key={prediction.id} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {model?.name || 'Unknown Model'}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              prediction.status === 'completed' ? 'text-green-600 bg-green-100' :
                              prediction.status === 'failed' ? 'text-red-600 bg-red-100' :
                              'text-yellow-600 bg-yellow-100'
                            }`}>
                              {prediction.status}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {prediction.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        
                        {prediction.status === 'completed' && prediction.result && (
                          <div className="text-sm text-gray-700 dark:text-gray-300">
                            <p><strong>Result:</strong> {JSON.stringify(prediction.result)}</p>
                            {prediction.confidence && (
                              <p><strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(1)}%</p>
                            )}
                            {prediction.processingTime && (
                              <p><strong>Processing Time:</strong> {prediction.processingTime}ms</p>
                            )}
                          </div>
                        )}
                        
                        {prediction.status === 'failed' && prediction.error && (
                          <div className="text-sm text-red-600 dark:text-red-400">
                            <strong>Error:</strong> {prediction.error}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  
                  {predictions.length === 0 && (
                    <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                      <Target className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p>No predictions yet</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Analytics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Model Performance</h4>
                  <div className="space-y-3">
                    {models.map((model) => (
                      <div key={model.id} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{model.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {(model.accuracy * 100).toFixed(1)}%
                          </span>
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${model.accuracy * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Prediction Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Success Rate</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {metrics.totalPredictions > 0 
                          ? ((metrics.successfulPredictions / metrics.totalPredictions) * 100).toFixed(1)
                          : 0}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Avg Response Time</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {metrics.averageResponseTime.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Total Predictions</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {metrics.totalPredictions}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};