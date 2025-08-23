import React from 'react';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import { LoadingContent, HeroSkeleton } from '../components/LoadingStates';

const SimpleIndex: React.FC = () => {
  return (
    <AccessibilityEnhancer>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Zion Tech Group
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto text-center leading-relaxed">
            Leading technology solutions provider with cutting-edge accessibility and performance features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• High Contrast Mode</li>
                <li>• Reduced Motion</li>
                <li>• Large Text</li>
                <li>• Increased Spacing</li>
                <li>• Focus Indicators</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4">Performance Monitoring</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Core Web Vitals</li>
                <li>• Real-time Metrics</li>
                <li>• Performance Scoring</li>
                <li>• Visual Indicators</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Use the accessibility button (top-right) and performance monitor (bottom-right) to test the features.
            </p>
          </div>
        </div>
        
        <PerformanceMonitor />
      </div>
    </AccessibilityEnhancer>
  );
};

export default SimpleIndex;