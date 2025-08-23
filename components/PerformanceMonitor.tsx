import React from 'react';

interface PerformanceMonitorProps {
  onToggle?: (visible: boolean) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onToggle }) => {
  // Temporary simplified version to fix build issues
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-4">
      <div className="text-white text-sm">
        Performance Monitor - Coming Soon
      </div>
    </div>
  );
};

export default PerformanceMonitor;