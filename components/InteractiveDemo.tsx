import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Pause, RotateCcw, Settings, Eye, EyeOff, 
  Brain, Atom, Shield, Rocket, Cpu, Database,
  Zap, Target, Star, TrendingUp, Activity
} from 'lucide-react';

interface DemoState {
  isPlaying: boolean;
  currentStep: number;
  showVisualization: boolean;
  showMetrics: boolean;
  speed: number;
}

interface DemoStep {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  duration: number;
  metrics: {
    performance: number;
    efficiency: number;
    accuracy: number;
  };
}

const InteractiveDemo: React.FC = () => {
  const [demoState, setDemoState] = useState<DemoState>({
    isPlaying: false,
    currentStep: 0,
    showVisualization: true,
    showMetrics: true,
    speed: 1
  });

  const demoSteps: DemoStep[] = useMemo(() => [
    {
      id: 1,
      title: "AI Consciousness Initialization",
      description: "Initializing neural networks and consciousness modules",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      duration: 3000,
      metrics: { performance: 85, efficiency: 92, accuracy: 88 }
    },
    {
      id: 2,
      title: "Quantum Processing Activation",
      description: "Activating quantum computing cores and hybrid systems",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      duration: 2500,
      metrics: { performance: 94, efficiency: 89, accuracy: 95 }
    },
    {
      id: 3,
      title: "Security Protocol Verification",
      description: "Verifying quantum-resistant security protocols",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      duration: 2000,
      metrics: { performance: 97, efficiency: 96, accuracy: 99 }
    },
    {
      id: 4,
      title: "Space Technology Integration",
      description: "Integrating advanced space computing systems",
      icon: Rocket,
      color: "from-pink-500 to-red-500",
      duration: 3500,
      metrics: { performance: 91, efficiency: 94, accuracy: 93 }
    },
    {
      id: 5,
      title: "Infrastructure Optimization",
      description: "Optimizing cloud infrastructure and performance",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      duration: 2800,
      metrics: { performance: 96, efficiency: 98, accuracy: 94 }
    },
    {
      id: 6,
      title: "Data Intelligence Processing",
      description: "Processing and analyzing data with AI intelligence",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      duration: 3200,
      metrics: { performance: 93, efficiency: 95, accuracy: 97 }
    }
  ], []);

  const currentStepData = useMemo(() => demoSteps[demoState.currentStep], [demoSteps, demoState.currentStep]);

  const handlePlayPause = useCallback(() => {
    setDemoState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  }, []);

  const handleReset = useCallback(() => {
    setDemoState(prev => ({ ...prev, currentStep: 0, isPlaying: false }));
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setDemoState(prev => ({ ...prev, speed: newSpeed }));
  }, []);

  const toggleVisualization = useCallback(() => {
    setDemoState(prev => ({ ...prev, showVisualization: !prev.showVisualization }));
  }, []);

  const toggleMetrics = useCallback(() => {
    setDemoState(prev => ({ ...prev, showMetrics: !prev.showMetrics }));
  }, []);

  const nextStep = useCallback(() => {
    setDemoState(prev => ({
      ...prev,
      currentStep: (prev.currentStep + 1) % demoSteps.length
    }));
  }, [demoSteps.length]);

  const prevStep = useCallback(() => {
    setDemoState(prev => ({
      ...prev,
      currentStep: prev.currentStep === 0 ? demoSteps.length - 1 : prev.currentStep - 1
    }));
  }, [demoSteps.length]);

  // Auto-advance steps when playing
  React.useEffect(() => {
    if (!demoState.isPlaying) return;

    const timer = setTimeout(() => {
      nextStep();
    }, currentStepData.duration / demoState.speed);

    return () => clearTimeout(timer);
  }, [demoState.isPlaying, demoState.currentStep, demoState.speed, currentStepData.duration, nextStep]);

  const getProgressPercentage = useCallback(() => {
    return ((demoState.currentStep + 1) / demoSteps.length) * 100;
  }, [demoState.currentStep, demoSteps.length]);

  return (
    <div className="w-full">
      {/* Demo Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Interactive Technology Demo</h3>
            <p className="text-gray-400 text-sm">Experience our revolutionary technology in action</p>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleVisualization}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              demoState.showVisualization 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
            aria-label={demoState.showVisualization ? 'Hide visualization' : 'Show visualization'}
          >
            {demoState.showVisualization ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            {demoState.showVisualization ? 'Hide' : 'Show'}
          </button>
          
          <button
            onClick={toggleMetrics}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              demoState.showMetrics 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
            aria-label={demoState.showMetrics ? 'Hide metrics' : 'Show metrics'}
          >
            <TrendingUp className="w-4 h-4" />
            {demoState.showMetrics ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      {/* Main Demo Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Visualization Panel */}
        {demoState.showVisualization && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 h-96 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-xl animate-ping"></div>
              </div>

              {/* Current Step Visualization */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <motion.div
                  key={currentStepData.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-cyan-500/25"
                >
                  <currentStepData.icon className="w-12 h-12 text-white" />
                </motion.div>

                <motion.h3
                  key={`title-${currentStepData.id}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl font-bold text-white mb-3"
                >
                  {currentStepData.title}
                </motion.h3>

                <motion.p
                  key={`desc-${currentStepData.id}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 text-lg max-w-md"
                >
                  {currentStepData.description}
                </motion.p>

                {/* Progress Indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full max-w-xs mt-6"
                >
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${getProgressPercentage()}%` }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2">
                    Step {demoState.currentStep + 1} of {demoSteps.length}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Control Panel */}
        <div className="space-y-6">
          {/* Playback Controls */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h4 className="text-lg font-semibold text-white mb-4">Playback Controls</h4>
            
            <div className="space-y-4">
              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  demoState.isPlaying
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
                aria-label={demoState.isPlaying ? 'Pause demo' : 'Play demo'}
              >
                {demoState.isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {demoState.isPlaying ? 'Pause' : 'Play'}
              </button>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                aria-label="Reset demo to beginning"
              >
                <RotateCcw className="w-5 h-5" />
                Reset
              </button>

              {/* Speed Control */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Playback Speed
                </label>
                <div className="flex gap-2">
                  {[0.5, 1, 1.5, 2].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => handleSpeedChange(speed)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        demoState.speed === speed
                          ? 'bg-cyan-600 text-white'
                          : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      }`}
                      aria-label={`Set speed to ${speed}x`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            
            <div className="flex gap-2">
              <button
                onClick={prevStep}
                disabled={demoState.isPlaying}
                className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
                aria-label="Go to previous step"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                disabled={demoState.isPlaying}
                className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
                aria-label="Go to next step"
              >
                Next
              </button>
            </div>

            {/* Step Indicators */}
            <div className="mt-4">
              <div className="flex gap-2 flex-wrap">
                {demoSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setDemoState(prev => ({ ...prev, currentStep: index }))}
                    disabled={demoState.isPlaying}
                    className={`w-8 h-8 rounded-full text-xs font-medium transition-all duration-300 ${
                      index === demoState.currentStep
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Panel */}
      {demoState.showMetrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Performance Metrics
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(currentStepData.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{value}%</div>
                  <div className="text-sm text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700/50 rounded-full h-2 mt-3">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Step Overview */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-white mb-4">Demo Overview</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                index === demoState.currentStep
                  ? 'bg-cyan-500/20 border-cyan-500/50'
                  : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50'
              }`}
              onClick={() => setDemoState(prev => ({ ...prev, currentStep: index }))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setDemoState(prev => ({ ...prev, currentStep: index }));
                }
              }}
              aria-label={`Go to ${step.title} step`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-white text-sm">{step.title}</h5>
                  <p className="text-gray-400 text-xs">{step.duration}ms</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;