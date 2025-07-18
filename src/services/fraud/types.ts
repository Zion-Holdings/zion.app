// Types used across fraud detection modules;
<<<<<<< HEAD
import type { FraudSeverity } from '@/types/fraud;;
'
export interface AnalysisResult {
  isSuspicious: "boolean"
  reasons: "string[]"
}"
;"
export interface MessageAnalysisResult extends AnalysisResult {;"
  severity: "FraudSeverity;";
=======
import type { FraudSeverity } from '@/types/fraud;'
;'';
export interface AnalysisResult {;;
  isSuspicious: "boolean;",;";";";";""
  reasons: "string[];";";""
};";";""
;";";";"";
export interface MessageAnalysisResult extends AnalysisResult {;";";";";""
  severity: "FraudSeverity;";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
// Email analysis extends basic analysis with additional context;
export interface EmailAnalysisResult extends AnalysisResult {;
  // Additional email-specific analysis properties can be added here;
  confidence?: number;
};
export interface FlagResult {
  success: boolean
  error?: string
}
// Signup check extends basic analysis for user registration validation;
<<<<<<< HEAD
export interface SignupCheckResult extends AnalysisResult {;"
  // Additional signup-specific validation properties can be added here;";"
  riskScore?: number;"
};"
"""""
=======
export interface SignupCheckResult extends AnalysisResult {;""
  // Additional signup-specific validation properties can be added here;";""
  riskScore?: number;";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
