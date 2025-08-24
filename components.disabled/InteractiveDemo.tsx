import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Zap, Brain, Shield, Rocket, Cpu, Database, Atom } from 'lucide-react';

interface DemoStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  duration: number;
  features: string[];
}

const InteractiveDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const demoSteps: DemoStep[] = [
    {
      id: 1,
      title: "AI Consciousness Evolution",
      description: "Experience the next generation of AI with emotional intelligence and consciousness",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      duration: 4000,
      features: [
        "Emotional Intelligence Integration",
        "Consciousness Awareness",
        "Adaptive Learning",
        "Human-like Reasoning"
      ]
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Witness quantum-powered AI that transcends classical computing limitations",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      duration: 4000,
      features: [
        "Quantum Entanglement",
        "Superposition States",
        "Quantum Speedup",
        "Parallel Processing"
      ]
    },
    {
      id: 3,
      title: "Quantum Cybersecurity",
      description: "See quantum-resistant security systems in action",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      duration: 4000,
      features: [
        "Post-Quantum Cryptography",
        "Quantum Key Distribution",
        "Threat Detection",
        "Zero-Trust Security"
      ]
    },
    {
      id: 4,
      title: "Space Resource Intelligence",
      description: "Explore AI-powered space exploration and resource management",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      duration: 4000,
      features: [
        "Autonomous Navigation",
        "Resource Detection",
        "Environmental Analysis",
        "Mission Planning"
      ]
    },
    {
      id: 5,
      title: "Autonomous Business Intelligence",
      description: "Watch fully autonomous AI business operations",
      icon: Cpu,
      color: "from-emerald-500 to-teal-500",
      duration: 4000,
      features: [
        "Predictive Analytics",
        "Automated Decision Making",
        "Process Optimization",
        "Real-time Insights"
      ]
    },
    {
      id: 6,
      title: "Quantum Cloud Infrastructure",
      description: "Experience quantum-powered cloud computing",
      icon: Database,
      color: "from-yellow-500 to-orange-500",
      duration: 4000,
      features: [
        "Quantum Computing Nodes",
        "Hybrid Classical-Quantum",
        "Scalable Architecture",
        "Energy Efficiency"
      ]
    }
  ];

  const totalSteps = demoSteps.length;

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % totalSteps);
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  }, [totalSteps]);

  const resetDemo = useCallback(() => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
    setIsAutoPlaying(false);
  }, []);

  const togglePlayPause = useCallback(() => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setIsPlaying(false);
    } else {
      setIsAutoPlaying(true);
      setIsPlaying(true);
    }
  }, [isAutoPlaying]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextStep();
            return 0;
          }
          return prev + (100 / (demoSteps[currentStep].duration / 100));
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentStep, demoSteps, nextStep]);

  const currentDemoStep = demoSteps[currentStep];

  return (
    <div className="space-y-8">
      {/* Demo Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Interactive Technology Demonstration
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience our revolutionary 2044 technology solutions through an interactive, step-by-step demonstration
        </p>
      </div>

      {/* Demo Container */}
      <div className="relative">
        {/* Main Demo Area */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl p-8">
          {/* Step Header */}
          <div className="text-center mb-8">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-4"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${currentDemoStep.color} rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]`}>
                <currentDemoStep.icon className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h4
              key={`title-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-white mb-3"
            >
              {currentDemoStep.title}
            </motion.h4>
            
            <motion.p
              key={`desc-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              {currentDemoStep.description}
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentDemoStep.features.map((feature, index) => (
              <motion.div
                key={`${currentStep}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gray-800/40 rounded-xl border border-gray-700/30"
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${currentDemoStep.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
              <span>Step {currentStep + 1} of {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-3">
              <motion.div
                className="h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="p-3 bg-gray-800/60 text-gray-300 rounded-xl hover:bg-gray-700/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={togglePlayPause}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center space-x-2"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            onClick={resetDemo}
            className="p-3 bg-gray-800/60 text-gray-300 rounded-xl hover:bg-gray-700/60 transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === totalSteps - 1}
            className="p-3 bg-gray-800/60 text-gray-300 rounded-xl hover:bg-gray-700/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          {demoSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStep(index);
                setProgress(0);
                setIsAutoPlaying(false);
                setIsPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentStep
                  ? 'bg-cyan-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Demo Info */}
      <div className="text-center text-sm text-gray-400">
        <p>
          Use the controls above to navigate through our revolutionary technology stack, or let the demo auto-play to see all features in action.
        </p>
      </div>
    </div>
  );
};

export default InteractiveDemo;