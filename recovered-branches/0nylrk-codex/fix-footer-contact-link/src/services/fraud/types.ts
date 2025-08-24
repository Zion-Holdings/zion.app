
// Types used across fraud detection modules
import { FraudSeverity } from '@/types/fraud';

export interface AnalysisResult {
  isSuspicious: boolean;
  reasons: string[];
}

export interface MessageAnalysisResult extends AnalysisResult {
  severity: FraudSeverity;
}

export interface EmailAnalysisResult extends AnalysisResult {}

export interface FlagResult {
  success: boolean;
  error?: string;
}

export interface SignupCheckResult extends AnalysisResult {}
