
// Message checking functionality
import { FraudSeverity } from '@/types/fraud';
import { analyzeContent } from './analyzeContent';
import { MessageAnalysisResult } from './types';

/**
 * Check message for suspicious content
 */
export const checkMessage = (messageContent: string): MessageAnalysisResult => {
  const analysis = analyzeContent(messageContent);
  
  // Determine severity based on number and type of issues
  let severity: FraudSeverity = 'safe';
  if (analysis.reasons.length > 0) {
    severity = analysis.reasons.length > 2 || 
              analysis.reasons.some(r => r.includes('payment') || r.includes('external')) 
      ? 'dangerous' 
      : 'suspicious';
  }
  
  return {
    ...analysis,
    severity
  };
};
