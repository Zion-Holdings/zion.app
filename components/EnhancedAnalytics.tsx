import React from 'react';

const EnhancedAnalytics: React.FC<{
  trackingId?: string;
  enableHeatmap?: boolean;
  enableSessionRecording?: boolean;
  enableAITracking?: boolean;
  showDebugPanel?: boolean;
  conversionGoals?: any[];
  children?: React.ReactNode;
}> = ({ children }) => {
  // Temporary placeholder to fix build issues
  return <>{children}</>;
};

export default EnhancedAnalytics;