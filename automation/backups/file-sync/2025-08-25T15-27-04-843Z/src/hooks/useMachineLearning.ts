import { useState, useEffect, useCallback, useRef } from 'react';
import { useAnalytics } from './useAnalytics';

interface AIModel {
  id: string;
  name: string;
  type: 'classification' | 'regression' | 'clustering' | 'nlp' | 'computer_vision' | 'recommendation';
  framework: 'tensorflow' | 'pytorch' | 'scikit-learn' | 'custom';
  version: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  trainingDataSize: number;
  lastTrained: Date;
  status: 'training' | 'ready' | 'deployed' | 'archived';
  metadata?: Record<string, any>;
}

interface TrainingJob {
  id: string;
  modelId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  startTime: Date;
  endTime?: Date;
  hyperparameters: Record<string, any>;
  metrics: {
    loss: number[];
    accuracy: number[];
    validationLoss: number[];
    validationAccuracy: number[];
  };
  error?: string;
}

interface PredictionRequest {
  id: string;
  modelId: string;
  input: any;
  timestamp: Date;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result?: any;
  confidence?: number;
  processingTime?: number;
  error?: string;
}

interface MLMetrics {
  totalModels: number;
  activeModels: number;
  averageAccuracy: number;
  totalPredictions: number;
  successfulPredictions: number;
  averageResponseTime: number;
  trainingJobs: {
    total: number;
    running: number;
    completed: number;
    failed: number;
  };
}

interface MLConfig {
  enableAutoTraining: boolean;
  enableModelVersioning: boolean;
  enableABTesting: boolean;
  enablePerformanceMonitoring: boolean;
  maxConcurrentTrainingJobs: number;
  predictionTimeout: number;
  accuracyThreshold: number;
}

interface MachineLearningHook {
  // State
  models: AIModel[];
  trainingJobs: TrainingJob[];
  predictions: PredictionRequest[];
  metrics: MLMetrics;
  isTraining: boolean;
  isPredicting: boolean;
  
  // Actions
  createModel: (model: Omit<AIModel, 'id' | 'version' | 'accuracy' | 'precision' | 'recall' | 'f1Score' | 'trainingDataSize' | 'lastTrained' | 'status'>) => void;
  startTraining: (modelId: string, hyperparameters: Record<string, any>) => Promise<void>;
  stopTraining: (jobId: string) => void;
  deployModel: (modelId: string) => void;
  archiveModel: (modelId: string) => void;
  makePrediction: (modelId: string, input: any) => Promise<any>;
  updateModelMetrics: (modelId: string, metrics: Partial<AIModel>) => void;
  getModelPerformance: (modelId: string) => AIModel | undefined;
  exportModel: (modelId: string) => string;
  importModel: (modelData: string) => void;
  configureML: (config: Partial<MLConfig>) => void;
}

export const useMachineLearning = (_initialConfig?: Partial<MLConfig>): MachineLearningHook => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [models, setModels] = useState<AIModel[]>([]);
  const [trainingJobs, setTrainingJobs] = useState<TrainingJob[]>([]);
  const [predictions, setPredictions] = useState<PredictionRequest[]>([]);
  const [metrics, setMetrics] = useState<MLMetrics>({
    totalModels: 0,
    activeModels: 0,
    averageAccuracy: 0,
    totalPredictions: 0,
    successfulPredictions: 0,
    averageResponseTime: 0,
    trainingJobs: {
      total: 0,
      running: 0,
      completed: 0,
      failed: 0
    }
  });
  const [isTraining, setIsTraining] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);

  const trainingIntervalsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  const predictionTimeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Default models
  const defaultModels: AIModel[] = [
    {
      id: 'sentiment-analysis-001',
      name: 'Sentiment Analysis Model',
      type: 'nlp',
      framework: 'tensorflow',
      version: '1.0.0',
      accuracy: 0.89,
      precision: 0.87,
      recall: 0.91,
      f1Score: 0.89,
      trainingDataSize: 10000,
      lastTrained: new Date(),
      status: 'ready'
    },
    {
      id: 'customer-segmentation-001',
      name: 'Customer Segmentation Model',
      type: 'clustering',
      framework: 'scikit-learn',
      version: '1.0.0',
      accuracy: 0.92,
      precision: 0.90,
      recall: 0.94,
      f1Score: 0.92,
      trainingDataSize: 50000,
      lastTrained: new Date(),
      status: 'deployed'
    },
    {
      id: 'demand-forecasting-001',
      name: 'Demand Forecasting Model',
      type: 'regression',
      framework: 'pytorch',
      version: '1.0.0',
      accuracy: 0.85,
      precision: 0.83,
      recall: 0.87,
      f1Score: 0.85,
      trainingDataSize: 25000,
      lastTrained: new Date(),
      status: 'ready'
    }
  ];

  // Initialize with default models
  useEffect(() => {
    if (models.length === 0) {
      setModels(defaultModels);
      updateMetrics();
    }
  }, [models.length]);

  // Update metrics when data changes
  const updateMetrics = useCallback(() => {
    const totalModels = models.length;
    const activeModels = models.filter(m => m.status === 'deployed').length;
    const averageAccuracy = models.length > 0 
      ? models.reduce((sum, m) => sum + m.accuracy, 0) / models.length 
      : 0;
    
    const totalPredictions = predictions.length;
    const successfulPredictions = predictions.filter(p => p.status === 'completed').length;
    const averageResponseTime = predictions.filter(p => p.processingTime).length > 0
      ? predictions.reduce((sum, p) => sum + (p.processingTime || 0), 0) / predictions.filter(p => p.processingTime).length
      : 0;

    const trainingJobsTotal = trainingJobs.length;
    const trainingJobsRunning = trainingJobs.filter(j => j.status === 'running').length;
    const trainingJobsCompleted = trainingJobs.filter(j => j.status === 'completed').length;
    const trainingJobsFailed = trainingJobs.filter(j => j.status === 'failed').length;

    setMetrics({
      totalModels,
      activeModels,
      averageAccuracy: Math.round(averageAccuracy * 100) / 100,
      totalPredictions,
      successfulPredictions,
      averageResponseTime: Math.round(averageResponseTime * 100) / 100,
      trainingJobs: {
        total: trainingJobsTotal,
        running: trainingJobsRunning,
        completed: trainingJobsCompleted,
        failed: trainingJobsFailed
      }
    });
  }, [models, predictions, trainingJobs]);

  // Update metrics when dependencies change
  useEffect(() => {
    updateMetrics();
  }, [updateMetrics]);

  // Create new model
  const createModel = useCallback((model: Omit<AIModel, 'id' | 'version' | 'accuracy' | 'precision' | 'recall' | 'f1Score' | 'trainingDataSize' | 'lastTrained' | 'status'>) => {
    const newModel: AIModel = {
      ...model,
      id: `model-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      version: '1.0.0',
      accuracy: 0,
      precision: 0,
      recall: 0,
      f1Score: 0,
      trainingDataSize: 0,
      lastTrained: new Date(),
      status: 'ready'
    };

    setModels(prev => [...prev, newModel]);
    trackEvent('ml', 'model', 'created', undefined, { modelType: model.type, framework: model.framework });
  }, [trackEvent]);

  // Update model metrics
  const updateModelMetrics = useCallback((modelId: string, metrics: Partial<AIModel>) => {
    setModels(prev => 
      prev.map(model => 
        model.id === modelId ? { ...model, ...metrics } : model
      )
    );
    trackEvent('ml', 'model', 'metrics_updated', undefined, { modelId });
  }, [trackEvent]);

  // Start training job
  const startTraining = useCallback(async (modelId: string, hyperparameters: Record<string, any>) => {
    const model = models.find(m => m.id === modelId);
    if (!model) {
      throw new Error('Model not found');
    }

    const trainingJob: TrainingJob = {
      id: `job-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      modelId,
      status: 'running',
      progress: 0,
      startTime: new Date(),
      hyperparameters,
      metrics: {
        loss: [],
        accuracy: [],
        validationLoss: [],
        validationAccuracy: []
      }
    };

    setTrainingJobs(prev => [...prev, trainingJob]);
    setIsTraining(true);
    trackEvent('ml', 'training', 'started', undefined, { modelId, modelType: model.type });

    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingJobs(prev => 
        prev.map(job => {
          if (job.id === trainingJob.id && job.status === 'running') {
            const newProgress = Math.min(job.progress + Math.random() * 10, 100);
            const newLoss = job.metrics.loss.length > 0 ? job.metrics.loss[job.metrics.loss.length - 1] * 0.95 : 1.0;
            const newAccuracy = job.metrics.accuracy.length > 0 ? Math.min(job.metrics.accuracy[job.metrics.accuracy.length - 1] + 0.01, 0.99) : 0.5;

            if (newProgress >= 100) {
              // Training completed
              clearInterval(interval);
              trainingIntervalsRef.current.delete(trainingJob.id);
              
              // Update model with new metrics
              const finalAccuracy = newAccuracy;
              const finalPrecision = finalAccuracy * 0.95;
              const finalRecall = finalAccuracy * 1.05;
              const finalF1Score = (2 * finalPrecision * finalRecall) / (finalPrecision + finalRecall);

              updateModelMetrics(modelId, {
                accuracy: finalAccuracy,
                precision: finalPrecision,
                recall: finalRecall,
                f1Score: finalF1Score,
                trainingDataSize: Math.floor(Math.random() * 100000) + 10000,
                lastTrained: new Date(),
                status: 'ready'
              });

              return {
                ...job,
                status: 'completed',
                progress: 100,
                endTime: new Date(),
                metrics: {
                  ...job.metrics,
                  loss: [...job.metrics.loss, newLoss],
                  accuracy: [...job.metrics.accuracy, finalAccuracy]
                }
              };
            }

            return {
              ...job,
              progress: newProgress,
              metrics: {
                ...job.metrics,
                loss: [...job.metrics.loss, newLoss],
                accuracy: [...job.metrics.accuracy, newAccuracy]
              }
            };
          }
          return job;
        })
      );
    }, 1000);

    trainingIntervalsRef.current.set(trainingJob.id, interval);

    // Simulate training completion after random time
    setTimeout(() => {
      if (trainingIntervalsRef.current.has(trainingJob.id)) {
        clearInterval(interval);
        trainingIntervalsRef.current.delete(trainingJob.id);
      }
    }, 5000 + Math.random() * 10000);
  }, [models, trackEvent, updateModelMetrics]);

  // Stop training job
  const stopTraining = useCallback((jobId: string) => {
    setTrainingJobs(prev => 
      prev.map(job => 
        job.id === jobId ? { ...job, status: 'failed', endTime: new Date() } : job
      )
    );

    const interval = trainingIntervalsRef.current.get(jobId);
    if (interval) {
      clearInterval(interval);
      trainingIntervalsRef.current.delete(jobId);
    }

    trackEvent('ml', 'training', 'stopped', undefined, { jobId });
  }, [trackEvent]);

  // Deploy model
  const deployModel = useCallback((modelId: string) => {
    setModels(prev => 
      prev.map(model => 
        model.id === modelId ? { ...model, status: 'deployed' } : model
      )
    );
    trackEvent('ml', 'model', 'deployed', undefined, { modelId });
  }, [trackEvent]);

  // Archive model
  const archiveModel = useCallback((modelId: string) => {
    setModels(prev => 
      prev.map(model => 
        model.id === modelId ? { ...model, status: 'archived' } : model
      )
    );
    trackEvent('ml', 'model', 'archived', undefined, { modelId });
  }, [trackEvent]);

  // Make prediction
  const makePrediction = useCallback(async (modelId: string, input: any) => {
    const model = models.find(m => m.id === modelId);
    if (!model) {
      throw new Error('Model not found');
    }

    if (model.status !== 'deployed') {
      throw new Error('Model is not deployed');
    }

    const predictionRequest: PredictionRequest = {
      id: `pred-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      modelId,
      input,
      timestamp: new Date(),
      status: 'pending'
    };

    setPredictions(prev => [predictionRequest, ...prev]);
    setIsPredicting(true);
    trackEvent('ml', 'prediction', 'started', undefined, { modelId, modelType: model.type });

    // Simulate prediction processing
    const startTime = Date.now();
    const processingTime = Math.random() * 1000 + 100; // 100-1100ms

    return new Promise((resolve, _reject) => {
      const timeout = setTimeout(() => {
        const result = generatePredictionResult(model, input);
        const confidence = Math.random() * 0.3 + 0.7; // 70-100% confidence

        const completedRequest: PredictionRequest = {
          ...predictionRequest,
          status: 'completed',
          result,
          confidence,
          processingTime: Date.now() - startTime
        };

        setPredictions(prev => 
          prev.map(p => p.id === predictionRequest.id ? completedRequest : p)
        );

        predictionTimeoutsRef.current.delete(predictionRequest.id);
        setIsPredicting(false);
        trackEvent('ml', 'prediction', 'completed', undefined, { modelId, processingTime });

        resolve(result);
      }, processingTime);

      predictionTimeoutsRef.current.set(predictionRequest.id, timeout);
    });
  }, [models, trackEvent]);

  // Generate prediction result based on model type
  const generatePredictionResult = (model: AIModel, _input: any) => {
    switch (model.type) {
      case 'classification':
        return {
          class: Math.random() > 0.5 ? 'positive' : 'negative',
          probability: Math.random()
        };
      case 'regression':
        return {
          value: Math.random() * 100,
          range: [Math.random() * 50, Math.random() * 50 + 50]
        };
      case 'clustering':
        return {
          cluster: Math.floor(Math.random() * 5),
          distance: Math.random()
        };
      case 'nlp':
        return {
          sentiment: Math.random() > 0.5 ? 'positive' : 'negative',
          keywords: ['keyword1', 'keyword2', 'keyword3'].slice(0, Math.floor(Math.random() * 3) + 1)
        };
      case 'computer_vision':
        return {
          objects: ['object1', 'object2'].slice(0, Math.floor(Math.random() * 2) + 1),
          confidence: Math.random()
        };
      case 'recommendation':
        return {
          items: ['item1', 'item2', 'item3'].slice(0, Math.floor(Math.random() * 3) + 1),
          scores: [Math.random(), Math.random(), Math.random()]
        };
      default:
        return { result: 'unknown' };
    }
  };

  // Get model performance
  const getModelPerformance = useCallback((modelId: string) => {
    return models.find(m => m.id === modelId);
  }, [models]);

  // Export model
  const exportModel = useCallback((modelId: string) => {
    const model = models.find(m => m.id === modelId);
    if (!model) {
      throw new Error('Model not found');
    }

    const exportData = {
      model,
      exportTimestamp: new Date().toISOString(),
      version: '1.0'
    };

    trackEvent('ml', 'model', 'exported', undefined, { modelId });
    return JSON.stringify(exportData, null, 2);
  }, [models, trackEvent]);

  // Import model
  const importModel = useCallback((modelData: string) => {
    try {
      const importData = JSON.parse(modelData);
      if (importData.model) {
        const importedModel: AIModel = {
          ...importData.model,
          id: `imported-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          status: 'ready'
        };

        setModels(prev => [...prev, importedModel]);
        trackEvent('ml', 'model', 'imported', undefined, { modelType: importedModel.type });
      }
    } catch (error) {
      throw new Error('Invalid model data format');
    }
  }, [trackEvent]);

  // Configure ML settings
  const configureML = useCallback((config: Partial<MLConfig>) => {
    trackEvent('ml', 'configuration', 'updated', undefined, { configKeys: Object.keys(config) });
  }, [trackEvent]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clear all training intervals
      trainingIntervalsRef.current.forEach(interval => clearInterval(interval));
      trainingIntervalsRef.current.clear();

      // Clear all prediction timeouts
      predictionTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      predictionTimeoutsRef.current.clear();
    };
  }, []);

  return {
    models,
    trainingJobs,
    predictions,
    metrics,
    isTraining,
    isPredicting,
    createModel,
    startTraining,
    stopTraining,
    deployModel,
    archiveModel,
    makePrediction,
    updateModelMetrics,
    getModelPerformance,
    exportModel,
    importModel,
    configureML
  };
};