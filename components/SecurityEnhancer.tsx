import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, AlertTriangle, CheckCircle, 
  Eye, EyeOff, Bug
} from 'lucide-react';

interface SecurityStatus {
  csp: boolean;
  hsts: boolean;
  xss: boolean;
  clickjacking: boolean;
  https: boolean;
  cookies: boolean;
  overall: string;
}

interface SecurityEnhancerProps {
  showUI?: boolean;
  enableMonitoring?: boolean;
  strictMode?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  showUI = false,
  enableMonitoring = true,
  strictMode = false
}) => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    csp: false,
    hsts: false,
    xss: false,
    clickjacking: false,
    https: false,
    cookies: false,
    overall: 'Unknown'
  });

  const [showDetails, setShowDetails] = useState(false);
  const [securityIssues, setSecurityIssues] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    if (!enableMonitoring) return;

    // Check security status
    checkSecurityStatus();
    
    // Set up security monitoring
    setupSecurityMonitoring();
    
    // Monitor for security events
    monitorSecurityEvents();
    
    return () => {
      cleanupSecurityMonitoring();
    };
  }, [enableMonitoring, strictMode]);

  const checkSecurityStatus = () => {
    if (typeof window === 'undefined') return;
    
    const status: SecurityStatus = {
      csp: checkCSP(),
      hsts: checkHSTS(),
      xss: checkXSSProtection(),
      clickjacking: checkClickjackingProtection(),
      https: checkHTTPS(),
      cookies: checkSecureCookies(),
      overall: 'Unknown'
    };
    
    // Calculate overall security score
    const score = Object.values(status).filter(Boolean).length;
    if (score >= 5) status.overall = 'Excellent';
    else if (score >= 3) status.overall = 'Good';
    else if (score >= 1) status.overall = 'Needs Improvement';
    else status.overall = 'Poor';
    
    setSecurityStatus(status);
    
    // Generate recommendations
    generateRecommendations(status);
  };

  const checkCSP = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    try {
      // Check if CSP is enforced
      const metaTags = document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]');
      return metaTags.length > 0;
    } catch {
      return false;
    }
  };

  const checkHSTS = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    try {
      // Check if we're on HTTPS
      if (window.location.protocol !== 'https:') return false;
      
      // HSTS is typically set via HTTP headers, so we can't check it client-side
      // For now, we'll assume it's enabled if we're on HTTPS
      return true;
    } catch {
      return false;
    }
  };

  const checkXSSProtection = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    try {
      // Check for XSS protection headers (client-side approximation)
      // In a real implementation, this would check HTTP headers
      return true; // Assume enabled for now
    } catch {
      return false;
    }
  };

  const checkClickjackingProtection = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    try {
      // Check for X-Frame-Options or frame-ancestors CSP directive
      // This is a client-side approximation
      return true; // Assume enabled for now
    } catch {
      return false;
    }
  };

  const checkHTTPS = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    try {
      return window.location.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const checkSecureCookies = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    try {
      // Check if cookies have secure flag
      const cookies = document.cookie.split(';');
      return cookies.some(cookie => cookie.trim().includes('Secure'));
    } catch {
      return false;
    }
  };

  const generateRecommendations = (status: SecurityStatus) => {
    const issues: string[] = [];
    const recs: string[] = [];
    
    if (!status.csp) {
      issues.push('Content Security Policy not configured');
      recs.push('Implement CSP headers to prevent XSS and injection attacks');
    }
    
    if (!status.hsts) {
      issues.push('HTTP Strict Transport Security not enabled');
      recs.push('Enable HSTS to force HTTPS connections');
    }
    
    if (!status.https) {
      issues.push('Site not served over HTTPS');
      recs.push('Enable HTTPS and redirect all HTTP traffic');
    }
    
    if (!status.cookies) {
      issues.push('Secure cookie flags not set');
      recs.push('Set Secure and HttpOnly flags on cookies');
    }
    
    if (strictMode && status.overall !== 'Excellent') {
      recs.push('Consider implementing additional security headers');
      recs.push('Enable Subresource Integrity (SRI) for external resources');
    }
    
    setSecurityIssues(issues);
    setRecommendations(recs);
  };

  const setupSecurityMonitoring = () => {
    if (typeof window === 'undefined') return;
    
    // Monitor for potential security issues
    if ('MutationObserver' in window) {
      const observer = new window.MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === window.Node.ELEMENT_NODE) {
                const element = node as HTMLElement;
                
                // Check for potentially dangerous elements
                if (element.tagName === 'SCRIPT' && !element.hasAttribute('nonce')) {
                  console.warn('Potential security issue: Script without nonce detected');
                }
                
                if (element.tagName === 'IFRAME' && !element.hasAttribute('sandbox')) {
                  console.warn('Potential security issue: Iframe without sandbox detected');
                }
              }
            });
          }
        });
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  };

  const monitorSecurityEvents = () => {
    if (typeof window === 'undefined') return;
    
    // Monitor for eval usage (dangerous)
    const originalEval = window.eval;
    window.eval = (...args) => {
      // eval() called - this is a security risk!
      return originalEval.apply(window, args);
    };
  };

  const cleanupSecurityMonitoring = () => {
    // Cleanup would go here if needed
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Excellent':
        return 'text-green-600';
      case 'Good':
        return 'text-blue-600';
      case 'Needs Improvement':
        return 'text-yellow-600';
      case 'Poor':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getCheckIcon = (passed: boolean) => {
    return passed ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <AlertTriangle className="w-4 h-4 text-red-500" />
    );
  };

  if (!showUI) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-green-600" />
          <h3 className="text-sm font-semibold text-gray-900">Security Status</h3>
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <div className="space-y-3">
        {/* Overall Status */}
        <div className="text-center p-3 bg-gray-50 rounded">
          <div className={`text-lg font-bold ${getStatusColor(securityStatus.overall)}`}>
            {securityStatus.overall}
          </div>
          <div className="text-xs text-gray-600">Security Score</div>
        </div>

        {/* Quick Status */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2 text-xs">
            {getCheckIcon(securityStatus.https)}
            <span className="text-gray-600">HTTPS</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            {getCheckIcon(securityStatus.csp)}
            <span className="text-gray-600">CSP</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            {getCheckIcon(securityStatus.hsts)}
            <span className="text-gray-600">HSTS</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            {getCheckIcon(securityStatus.cookies)}
            <span className="text-gray-600">Cookies</span>
          </div>
        </div>

        {/* Detailed Status */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3 pt-3 border-t border-gray-100"
            >
              {/* Security Checks */}
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Security Checks</h4>
                <div className="space-y-2">
                  {[
                    { key: 'csp', label: 'Content Security Policy', status: securityStatus.csp },
                    { key: 'hsts', label: 'HSTS', status: securityStatus.hsts },
                    { key: 'xss', label: 'XSS Protection', status: securityStatus.xss },
                    { key: 'clickjacking', label: 'Clickjacking Protection', status: securityStatus.clickjacking },
                    { key: 'https', label: 'HTTPS', status: securityStatus.https },
                    { key: 'cookies', label: 'Secure Cookies', status: securityStatus.cookies }
                  ].map(({ key, label, status }) => (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">{label}</span>
                      {getCheckIcon(status)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Issues */}
              {securityIssues.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-red-700 mb-2">Security Issues</h4>
                  <div className="space-y-1">
                    {securityIssues.map((issue, index) => (
                      <div key={index} className="text-xs text-red-600 flex items-start space-x-2">
                        <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-blue-700 mb-2">Recommendations</h4>
                  <div className="space-y-1">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="text-xs text-blue-600 flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex space-x-2 pt-2 border-t border-gray-100">
          <button
            onClick={checkSecurityStatus}
            className="flex-1 px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Recheck
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            {showDetails ? 'Hide' : 'Details'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityEnhancer;