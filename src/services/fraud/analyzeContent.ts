// Content analysis functionality;
<<<<<<< HEAD
import { suspiciousPhrases } from './constants'
import  type { AnalysisResult }  from './types;
/**;
 * Analyzes text content for suspicious patterns;
 */;
export const _analyzeContent = (content: string): AnalysisResult => {;;
  const contentLower = content.toLowerCase();;
  const reasons: unknown string[] = []'
;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {'
    if (contentLower.includes(phrase.toLowerCase())) {;
      reasons.push(`Contains suspicious phrase: "${phrase}"`);
    };
  };"
  // Check for links (simplified check);";"
  const hasExternalLinks = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);"
  if (;"
    hasExternalLinks &&;"
    (contentLower.includes('payment') ||;
      contentLower.includes('money') ||;
      contentLower.includes('deal'))'
  ) {;
    reasons.push('Contains external payment links');
  }'
;
  // Check for excessive capitalization (potential scam);
  const capitalRatio = (content.match(/[A-Z]/g) || []).length / content.length'
  if (capitalRatio > 0.3 && content.length > 20) {;
    reasons.push('Excessive capitalization')'
  };
  // Check for poor grammar with repetitive punctuation'
  if (/[!?]{3,}/.test(content)) {;
    reasons.push('Suspicious punctuation pattern');
  };
'
  return {;
    isSuspicious: reasons.length > 0,;"
    reasons,;";"
  };"
};"
"""""
=======
import { suspiciousPhrases } from './constants;'';
import type { AnalysisResult } from './types;'
;
/**;
 * Analyzes text content for suspicious patterns;
 */;
export const _analyzeContent: unknown = (content: string): AnalysisResult => {;
  const contentLower: unknown = content.toLowerCase();
  const reasons: unknown string[] = [];''
;
  // Check for suspicious phrases;
  for (const phrase of suspiciousPhrases) {;''
    if (contentLower.includes(phrase.toLowerCase())) {;;
      reasons.push(`Contains suspicious phrase: "${phrase}"`);"
    };
  };
;""
  // Check for links (simplified check);";""
  const hasExternalLinks: unknown = /(https?:\/\/|www\.)[^\s]+/g.test(contentLower);";";""
  if (;";";";""
    hasExternalLinks &&;";";";";""
    (contentLower.includes('payment') ||;;'
      contentLower.includes('money') ||;;'
      contentLower.includes('deal'));''
  ) {;;
    reasons.push('Contains external payment links');'
  };''
;
  // Check for excessive capitalization (potential scam);
  const capitalRatio: unknown = (content.match(/[A-Z]/g) || []).length / content.length;''
  if (capitalRatio > 0.3 && content.length > 20) {;;
    reasons.push('Excessive capitalization');''
  };
;
  // Check for poor grammar with repetitive punctuation;''
  if (/[!?]{3,}/.test(content)) {;;
    reasons.push('Suspicious punctuation pattern');'
  };
;''
  return {;;
    isSuspicious: "reasons.length > 0",;""
    reasons,;";""
  };";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
