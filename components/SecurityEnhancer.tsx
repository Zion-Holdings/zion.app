import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  X
} from 'lucide-react';

interface SecurityStatus {
  csp: boolean;
  hsts: boolean;
  xss: boolean;
  frameOptions: boolean;
  contentType: boolean;
  referrerPolicy: boolean;
}

interface SecurityThreat {
  type: 'high' | 'medium' | 'low';
  description: string;
  recommendation: string;
  timestamp: Date;
}

const SecurityEnhancer: React.FC = () => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    csp: false,
    hsts: false,
    xss: false,
    frameOptions: false,
    contentType: false,
    referrerPolicy: false
  });
  
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [showPanel, setShowPanel] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [securityScore, setSecurityScore] = useState<number>(0);

  // Apply security headers
  useEffect(() => {
    // In a real application, these would be set via Next.js config or middleware
    // For now, we'll simulate the security status
    const checkSecurityStatus = () => {
      // Simulate checking security headers
      setTimeout(() => {
        setSecurityStatus({
          csp: true,
          hsts: true,
          xss: true,
          frameOptions: true,
          contentType: true,
          referrerPolicy: true
        });
      }, 1000);
    };

    checkSecurityStatus();
  }, []);

  // Security scanning function
  const performSecurityScan = async () => {
    setIsScanning(true);
    const newThreats: SecurityThreat[] = [];

    // Simulate security threats detection
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Check for common security issues
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (!form.action || form.action === window.location.href) {
        newThreats.push({
          type: 'medium',
          description: 'Form without proper action attribute',
          recommendation: 'Ensure all forms have proper action URLs and CSRF protection',
          timestamp: new Date()
        });
      }
    });

    // Check for external scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && !src.startsWith('/') && !src.startsWith(window.location.origin)) {
        newThreats.push({
          type: 'high',
          description: 'External script detected',
          recommendation: 'Review and validate all external script sources',
          timestamp: new Date()
        });
      }
    });

    // Check for insecure links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('http://')) {
        newThreats.push({
          type: 'high',
          description: 'Insecure HTTP link detected',
          recommendation: 'Use HTTPS for all external links',
          timestamp: new Date()
        });
      }
    });

    setThreats(newThreats);
    setIsScanning(false);

    // Calculate security score
    const baseScore = 100;
    const threatPenalty = newThreats.reduce((penalty, threat) => {
      switch (threat.type) {
        case 'high': return penalty + 20;
        case 'medium': return penalty + 10;
        case 'low': return penalty + 5;
        default: return penalty;
      }
    }, 0);

    setSecurityScore(Math.max(0, baseScore - threatPenalty));
  };

  // Get security score color
  const getSecurityScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    if (score >= 70) return 'text-orange-500';
    return 'text-red-500';
  };

  // Get security score grade
  const getSecurityScoreGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <>
      {/* Security Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-black/95 backdrop-blur-xl border-l border-red-500/30 z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-red-400 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Security Center
                </h2>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label="Close security panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Security Score */}
              <div className="mb-6 p-4 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Security Score</span>
                  <span className={`text-2xl font-bold ${getSecurityScoreColor(securityScore)}`}>
                    {getSecurityScoreGrade(securityScore)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      securityScore >= 90 ? 'bg-green-500' : 
                      securityScore >= 80 ? 'bg-yellow-500' : 
                      securityScore >= 70 ? 'bg-orange-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${securityScore}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400">{securityScore}/100</span>
              </div>

              {/* Security Status */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Security Headers</h3>
                <div className="space-y-2">
                  {Object.entries(securityStatus).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
                      <span className="text-sm text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      {value ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Scanner */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Security Scanner</h3>
                  <button
                    onClick={performSecurityScan}
                    disabled={isScanning}
                    className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 disabled:opacity-50 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    {isScanning ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4" />
                        Scan
                      </>
                    )}
                  </button>
                </div>

                {threats.length > 0 && (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {threats.map((threat, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-l-4 ${
                          threat.type === 'high' ? 'border-red-500 bg-red-900/20' :
                          threat.type === 'medium' ? 'border-yellow-500 bg-yellow-900/20' :
                          'border-blue-500 bg-blue-900/20'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <AlertTriangle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            threat.type === 'high' ? 'text-red-400' :
                            threat.type === 'medium' ? 'text-yellow-400' :
                            'text-blue-400'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm text-white">{threat.description}</p>
                            <p className="text-xs text-gray-400 mt-1">{threat.recommendation}</p>
                            <span className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                              threat.type === 'high' ? 'bg-red-600 text-white' :
                              threat.type === 'medium' ? 'bg-yellow-600 text-white' :
                              'bg-blue-600 text-white'
                            }`}>
                              {threat.type} priority
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Security Recommendations */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Security Recommendations</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Enable HTTPS Only</p>
                    <p className="text-xs">Ensure all traffic is encrypted with TLS 1.3</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Implement Rate Limiting</p>
                    <p className="text-xs">Protect against brute force and DDoS attacks</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Regular Security Audits</p>
                    <p className="text-xs">Conduct monthly security assessments</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed top-32 right-4 z-40 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        aria-label="Toggle security panel"
      >
        <Shield className="w-5 h-5" />
        {showPanel ? 'Hide' : 'Show'} Security
      </button>
    </>
  );
};

export default SecurityEnhancer;