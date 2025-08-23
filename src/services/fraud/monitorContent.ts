
// Content monitoring functionality
import { FraudFlag, FraudSeverity } from '@/types/fraud';
import { analyzeContent } from './analyzeContent';
import { flagContent } from './flagContent';
import { logDebug } from '@/utils/productionLogger';

/**
 * Create a monitoring system helper to easily monitor any content
 */
export const monitorContent = async (
  userId: string,
  userEmail: string | undefined,
  contentType: FraudFlag['content_type'],
  contentId: string,
  content: string
): Promise<void> => {
  const analysis = analyzeContent(content);
  
  if (analysis.isSuspicious) {
    let severity: FraudSeverity = analysis.reasons.length > 2 ? 'dangerous' : 'suspicious';
    
    // If contains highly suspicious phrases, mark as dangerous
    if (analysis.reasons.some(r => 
      r.includes('payment') || 
      r.includes('external') || 
      r.includes('bypass')
    )) {
      severity = 'dangerous';
    }
    
    await flagContent(
      userId,
      userEmail,
      contentType,
      contentId,
      content,
      severity,
      analysis.reasons.join('; '),
      undefined // IP address would be added in a real implementation
    );
    
    // If this is a 'dangerous' flag, automatically hide content
    // This would be implemented in a real system with appropriate flags
    if (severity === 'dangerous') {
      logDebug('Auto-hiding dangerous content:', { contentId, contentType });
      // Code to hide content would go here
    }
  }
};
