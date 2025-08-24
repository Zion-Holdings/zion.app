import React from 'react';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import { LoadingContent, HeroSkeleton } from '../components/LoadingStates';

const TestNewComponents: React.FC = () => {
  return (
    <AccessibilityEnhancer>
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">
          Test Page for New Components
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-4">Loading States Test</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <LoadingContent type="spinner" text="Spinner" />
              <LoadingContent type="dots" text="Dots" />
              <LoadingContent type="wave" text="Wave" />
              <LoadingContent type="pulse" text="Pulse" />
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-4">Skeleton Test</h2>
            <HeroSkeleton />
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            <p className="text-gray-300 mb-4">
              Use the accessibility button in the top-right corner to test:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• High Contrast Mode</li>
              <li>• Reduced Motion</li>
              <li>• Large Text</li>
              <li>• Increased Spacing</li>
              <li>• Focus Indicators</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-4">Performance Monitor</h2>
            <p className="text-gray-300 mb-4">
              Use the performance monitor button in the bottom-right corner to test:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Core Web Vitals tracking</li>
              <li>• Performance scoring</li>
              <li>• Real-time metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </AccessibilityEnhancer>
  );
};

export default TestNewComponents;