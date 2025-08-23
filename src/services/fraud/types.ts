// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';

export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];
}

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

// Email analysis extends basic analysis with additional context
export interface EmailAnalysisResult extends AnalysisResult {
  // Additional email-specific analysis properties can be added here
  confidence?: number;
}

export interface FlagResult {
  success: boolean;
  error?: string;
}

// Signup check extends basic analysis for user registration validation  
export interface SignupCheckResult extends AnalysisResult {
  // Additional signup-specific validation properties can be added here
  riskScore?: number;
}
