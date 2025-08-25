import React, { useState, useEffect } from 'react';
import { LinkMonitor } from './LinkMonitor';
import { ContentOptimizer, ContentAnalysis } from '../utils/contentOptimizer';
import { SEOOptimizer, SEOData } from '../utils/seoOptimizer';
import { LinkValidator } from '../utils/linkValidator';

interface WebsiteHealthDashboardProps {
  showLinkMonitor?: boolean;
  showContentAnalysis?: boolean;
  showSEOAnalysis?: boolean;
  autoScan?: boolean;
}

export const WebsiteHealthDashboard: React.FC<WebsiteHealthDashboardProps> = ({
  showLinkMonitor = true,
  showContentAnalysis = true,
  showSEOAnalysis = true,
  autoScan = false
}) => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [contentAnalysis, setContentAnalysis] = useState<ContentAnalysis | null>(null);
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [overallHealth, setOverallHealth] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Analyze current page content
  const analyzeCurrentPage = async () => {
    setIsAnalyzing(true);
    
    try {
      // Get page content
      const pageContent = document.documentElement.outerHTML;
      
      // Analyze content quality
      if (showContentAnalysis) {
        const analysis = ContentOptimizer.analyzeContent(pageContent, currentPage);
        setContentAnalysis(analysis);
      }
      
      // Generate SEO data
      if (showSEOAnalysis) {
        const seo = SEOOptimizer.generateSEOData(currentPage);
        setSeoData(seo);
      }
      
      // Calculate overall health score
      calculateOverallHealth();
      
    } catch (error) {
      console.error('Error analyzing page:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Calculate overall website health score
  const calculateOverallHealth = () => {
    let score = 100;
    let factors = 0;
    
    // Content quality factor
    if (contentAnalysis) {
      const contentScore = (contentAnalysis.seoScore + contentAnalysis.readabilityScore) / 2;
      score += (contentScore - 50) * 0.3;
      factors++;
    }
    
    // SEO factor
    if (seoData) {
      score += 10; // Base SEO points
      factors++;
    }
    
    // Normalize score
    if (factors > 0) {
      score = Math.max(0, Math.min(100, score));
    }
    
    setOverallHealth(Math.round(score));
  };

  // Get health status color
  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  // Get health status text
  const getHealthStatus = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  // Auto-analyze on page change
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(window.location.pathname);
      if (autoScan) {
        analyzeCurrentPage();
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Initial analysis
    if (autoScan) {
      analyzeCurrentPage();
    }

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [autoScan]);

  return (
    <div className="website-health-dashboard bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Website Health Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Monitor and improve your website's performance, SEO, and content quality
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={analyzeCurrentPage}
            disabled={isAnalyzing}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <span>🔍</span>
                <span>Analyze Page</span>
              </>
            )}
          </button>
          
          <div className={`px-4 py-2 rounded-lg font-semibold ${getHealthColor(overallHealth)}`}>
            {overallHealth}/100 - {getHealthStatus(overallHealth)}
          </div>
        </div>
      </div>

      {/* Current Page Info */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Current Page: {currentPage}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Last analyzed: {contentAnalysis ? new Date().toLocaleString() : 'Never'}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              {overallHealth}%
            </div>
            <div className="text-sm text-gray-500">Overall Health</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content Quality Analysis */}
        {showContentAnalysis && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Content Quality Analysis
            </h2>
            
            {contentAnalysis ? (
              <div className="space-y-4">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {contentAnalysis.wordCount}
                    </div>
                    <div className="text-sm text-blue-600">Words</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {contentAnalysis.headingCount}
                    </div>
                    <div className="text-sm text-green-600">Headings</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {contentAnalysis.imageCount}
                    </div>
                    <div className="text-sm text-purple-600">Images</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {contentAnalysis.linkCount}
                    </div>
                    <div className="text-sm text-orange-600">Links</div>
                  </div>
                </div>

                {/* Scores */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Readability</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {contentAnalysis.readabilityScore.toFixed(1)}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">SEO Score</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {contentAnalysis.seoScore.toFixed(1)}
                    </div>
                  </div>
                </div>

                {/* Issues */}
                {contentAnalysis.issues.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Issues Found ({contentAnalysis.issues.length})
                    </h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {contentAnalysis.issues.map((issue, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded text-sm ${
                            issue.severity === 'high' 
                              ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                              : issue.severity === 'medium'
                              ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
                              : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                          }`}
                        >
                          <div className="font-medium">{issue.description}</div>
                          <div className="text-xs opacity-75">{issue.location}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggestions */}
                {contentAnalysis.suggestions.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Suggestions ({contentAnalysis.suggestions.length})
                    </h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {contentAnalysis.suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded text-sm ${
                            suggestion.priority === 'high' 
                              ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                              : suggestion.priority === 'medium'
                              ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
                              : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                          }`}
                        >
                          <div className="font-medium">{suggestion.description}</div>
                          {suggestion.example && (
                            <div className="text-xs opacity-75 mt-1">
                              Example: {suggestion.example}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Click "Analyze Page" to start content analysis
              </div>
            )}
          </div>
        )}

        {/* SEO Analysis */}
        {showSEOAnalysis && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              SEO Analysis
            </h2>
            
            {seoData ? (
              <div className="space-y-4">
                {/* SEO Data */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Page Title
                    </label>
                    <div className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                      {seoData.title}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Meta Description
                    </label>
                    <div className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                      {seoData.description}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Keywords
                    </label>
                    <div className="flex flex-wrap gap-1">
                      {seoData.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Canonical URL
                    </label>
                    <div className="text-sm text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                      {seoData.canonicalUrl}
                    </div>
                  </div>
                </div>

                {/* SEO Recommendations */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    SEO Recommendations
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Ensure all images have descriptive alt text</li>
                    <li>• Use internal linking to improve page authority</li>
                    <li>• Optimize page load speed for better rankings</li>
                    <li>• Include relevant keywords naturally in content</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Click "Analyze Page" to start SEO analysis
              </div>
            )}
          </div>
        )}
      </div>

      {/* Link Monitor */}
      {showLinkMonitor && (
        <div className="mt-8">
          <LinkMonitor autoFix={autoScan} showStatus={false} />
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              const template = ContentOptimizer.generateContentTemplate(currentPage, 'service');
              navigator.clipboard.writeText(template);
            }}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            📝 Copy Content Template
          </button>
          
          <button
            onClick={() => {
              const rules = LinkValidator.generateRedirectRules();
              navigator.clipboard.writeText(rules);
            }}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            🔗 Copy Redirect Rules
          </button>
          
          <button
            onClick={() => {
              const exclusions = LinkValidator.generateSitemapExclusions();
              navigator.clipboard.writeText(exclusions.join('\n'));
            }}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            🗺️ Copy Sitemap Exclusions
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHealthDashboard;