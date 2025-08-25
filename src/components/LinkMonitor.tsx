import React, { useState, useEffect } from 'react';
import { LinkValidator, LinkValidationResult, LinkFix } from '../utils/linkValidator';

interface LinkMonitorProps {
  onLinkIssue?: (issue: LinkValidationResult) => void;
  autoFix?: boolean;
  showStatus?: boolean;
}

export const LinkMonitor: React.FC<LinkMonitorProps> = ({
  onLinkIssue,
  autoFix = false,
  showStatus = true
}) => {
  const [brokenLinks, setBrokenLinks] = useState<LinkValidationResult[]>([]);
  const [fixedLinks, setFixedLinks] = useState<LinkFix[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [lastScanTime, setLastScanTime] = useState<Date | null>(null);

  // Scan all links on the current page
  const scanPageLinks = async () => {
    setIsScanning(true);
    setScanProgress(0);
    
    const links = Array.from(document.querySelectorAll('a[href]'));
    const results: LinkValidationResult[] = [];
    
    for (let i = 0; i < links.length; i++) {
      const link = links[i] as HTMLAnchorElement;
      const href = link.getAttribute('href');
      
      if (href) {
        const result = LinkValidator.validateLink(href, window.location.pathname);
        if (result.status === 'broken') {
          results.push(result);
          
          if (autoFix) {
            await fixBrokenLink(href, result);
          }
        }
        
        // Update progress
        setScanProgress(((i + 1) / links.length) * 100);
        
        // Small delay to prevent overwhelming the browser
        await new Promise(resolve => setTimeout(resolve, 10));
      }
    }
    
    setBrokenLinks(results);
    setLastScanTime(new Date());
    setIsScanning(false);
    
    // Notify parent component of issues
    results.forEach(result => {
      if (onLinkIssue) {
        onLinkIssue(result);
      }
    });
  };

  // Fix a broken link
  const fixBrokenLink = async (originalUrl: string, validationResult: LinkValidationResult) => {
    if (validationResult.suggestedFix && validationResult.suggestedFix.startsWith('Redirect to:')) {
      const newUrl = validationResult.suggestedFix.replace('Redirect to: ', '');
      
      // Find and update the link
      const links = document.querySelectorAll(`a[href="${originalUrl}"]`);
      links.forEach(link => {
        (link as HTMLAnchorElement).href = newUrl;
        (link as HTMLAnchorElement).setAttribute('data-fixed', 'true');
        (link as HTMLAnchorElement).setAttribute('title', `Fixed: Redirected from ${originalUrl}`);
      });
      
      // Add to fixed links list
      const fix: LinkFix = {
        originalUrl,
        newUrl,
        type: 'redirect',
        reason: 'Automatically fixed broken internal link'
      };
      
      setFixedLinks(prev => [...prev, fix]);
    }
  };

  // Fix all broken links
  const fixAllBrokenLinks = async () => {
    for (const brokenLink of brokenLinks) {
      await fixBrokenLink(brokenLink.url, brokenLink);
    }
    setBrokenLinks([]);
  };

  // Generate redirect rules for server configuration
  const generateRedirectRules = () => {
    const rules = LinkValidator.generateRedirectRules();
    const blob = new Blob([rules], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'redirect-rules.txt';
    a.click();
    
    URL.revokeObjectURL(url);
  };

  // Export broken links report
  const exportReport = () => {
    const report = {
      scanTime: lastScanTime?.toISOString(),
      totalBrokenLinks: brokenLinks.length,
      brokenLinks: brokenLinks,
      fixedLinks: fixedLinks
    };
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'broken-links-report.json';
    a.click();
    
    URL.revokeObjectURL(url);
  };

  // Auto-scan on component mount
  useEffect(() => {
    if (autoFix) {
      scanPageLinks();
    }
  }, [autoFix]);

  return (
    <div className="link-monitor bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Link Health Monitor
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={scanPageLinks}
            disabled={isScanning}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning ? 'Scanning...' : 'Scan Links'}
          </button>
          {brokenLinks.length > 0 && (
            <button
              onClick={fixAllBrokenLinks}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Fix All ({brokenLinks.length})
            </button>
          )}
        </div>
      </div>

      {/* Scan Progress */}
      {isScanning && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Scanning links...</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {Math.round(scanProgress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${scanProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Status Summary */}
      {showStatus && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {brokenLinks.length}
            </div>
            <div className="text-sm text-red-600 dark:text-red-400">Broken Links</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {fixedLinks.length}
            </div>
            <div className="text-sm text-green-600 dark:text-green-400">Fixed Links</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {lastScanTime ? lastScanTime.toLocaleTimeString() : 'Never'}
            </div>
            <div className="text-sm text-blue-600 dark:text-blue-400">Last Scan</div>
          </div>
        </div>
      )}

      {/* Broken Links List */}
      {brokenLinks.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Broken Links Found
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {brokenLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
              >
                <div className="flex-1">
                  <div className="text-sm font-medium text-red-800 dark:text-red-200">
                    {link.url}
                  </div>
                  {link.parentPage && (
                    <div className="text-xs text-red-600 dark:text-red-400">
                      Found on: {link.parentPage}
                    </div>
                  )}
                  {link.suggestedFix && (
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {link.suggestedFix}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => fixBrokenLink(link.url, link)}
                  className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                >
                  Fix
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fixed Links List */}
      {fixedLinks.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recently Fixed Links
          </h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {fixedLinks.slice(-5).map((fix, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded-lg"
              >
                <div className="flex-1">
                  <div className="text-sm text-green-800 dark:text-green-200">
                    {fix.originalUrl} → {fix.newUrl}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    {fix.reason}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={generateRedirectRules}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Export Redirect Rules
        </button>
        <button
          onClick={exportReport}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          Export Report
        </button>
      </div>

      {/* Recommendations */}
      {brokenLinks.length > 0 && (
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Recommendations
          </h4>
          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Fix broken internal links to improve user experience</li>
            <li>• Set up 301 redirects for moved pages</li>
            <li>• Regularly monitor external links for validity</li>
            <li>• Update sitemap to exclude broken URLs</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LinkMonitor;