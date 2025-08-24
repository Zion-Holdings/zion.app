
// Content analysis functionality
import { suspiciousPhrases } from './constants';
import { AnalysisResult } from './types';

/**
 * Analyzes text content for suspicious patterns
 */
export const analyzeContent = (content: string): AnalysisResult => {
  const contentLower = content.toLowerCase();
  const reasons: string[] = [];
  
  // Check for suspicious phrases
  for (const phrase of suspiciousPhrases) {
    if (contentLower.includes(phrase.toLowerCase())) {
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    }
  }
  
  // Check for links (simplified check)
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);
  if (hasExternalLinks && (
    contentLower.includes('payment') || 
    contentLower.includes('money') || 
    contentLower.includes('deal')
  )) {
    reasons.push('Contains external payment links');
  }
  
  // Check for excessive capitalization (potential scam)
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length;
  if (capitalRatio > 0.3 && content.length > 20) {
    reasons.push('Excessive capitalization');
  }
  
  // Check for poor grammar with repetitive punctuation
  if (/[!?]{3,}/.test(content)) {
    reasons.push('Suspicious punctuation pattern');
  }
  
  return {
    isSuspicious: reasons.length > 0,
    reasons
  };
};
