import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, TrendingUp, BarChart3, Target, CheckCircle, 
  AlertTriangle, Info, Settings, X, Eye, Globe, 
  Smartphone, Monitor, Zap, FileText, Link
} from 'lucide-react';

interface SEOProps {
  showPanel?: boolean;
  autoOptimize?: boolean;
}

interface SEOReport {
  score: number;
  title: {
    length: number;
    optimal: boolean;
    hasKeywords: boolean;
  };
  description: {
    length: number;
    optimal: boolean;
    hasKeywords: boolean;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    structure: boolean;
  };
  images: {
    total: number;
    withAlt: number;
    optimized: boolean;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
  };
  performance: {
    loadTime: number;
    score: number;
  };
  mobile: {
    responsive: boolean;
    viewport: boolean;
  };
  structuredData: {
    present: boolean;
    valid: boolean;
  };
}

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  fix?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  showPanel = false, 
  autoOptimize = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [report, setReport] = useState<SEOReport | null>(null);
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [metaTags, setMetaTags] = useState<Record<string, string>>({});
  const [structuredData, setStructuredData] = useState<any>(null);
  
  const analysisRef = useRef<HTMLDivElement>(null);

  // Extract keywords from content
  const extractKeywords = useCallback(() => {
    if (typeof window === 'undefined') return [];

    const text = document.body.innerText.toLowerCase();
    const words = text.split(/\s+/);
    const wordCount: Record<string, number> = {};
    
    // Filter out common words and count frequency
    const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those'];
    
    words.forEach(word => {
      const cleanWord = word.replace(/[^a-z]/g, '');
      if (cleanWord.length > 3 && !commonWords.includes(cleanWord)) {
        wordCount[cleanWord] = (wordCount[cleanWord] || 0) + 1;
      }
    });
    
    // Sort by frequency and return top 10
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  }, []);

  // Extract meta tags
  const extractMetaTags = useCallback(() => {
    if (typeof window === 'undefined') return {};

    const metaTags: Record<string, string> = {};
    const metas = document.querySelectorAll('meta');
    
    metas.forEach(meta => {
      const name = meta.getAttribute('name') || meta.getAttribute('property');
      const content = meta.getAttribute('content');
      if (name && content) {
        metaTags[name] = content;
      }
    });
    
    return metaTags;
  }, []);

  // Extract structured data
  const extractStructuredData = useCallback(() => {
    if (typeof window === 'undefined') return null;

    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    if (scripts.length > 0) {
      try {
        const data = JSON.parse(scripts[0].textContent || '{}');
        return data;
      } catch (error) {
        console.warn('Failed to parse structured data:', error);
        return null;
      }
    }
    
    return null;
  }, []);

  // Enhanced SEO analysis
  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    
    try {
      const newKeywords = extractKeywords();
      const newMetaTags = extractMetaTags();
      const newStructuredData = extractStructuredData();
      
      setKeywords(newKeywords);
      setMetaTags(newMetaTags);
      setStructuredData(newStructuredData);
      
      const newIssues: SEOIssue[] = [];
      let score = 100;
      
      // Analyze title
      const title = document.title;
      const titleLength = title.length;
      const titleOptimal = titleLength >= 30 && titleLength <= 60;
      const titleHasKeywords = newKeywords.some(keyword => 
        title.toLowerCase().includes(keyword)
      );
      
      if (!titleOptimal) {
        newIssues.push({
          type: 'warning',
          message: `Title length is ${titleLength} characters. Optimal length is 30-60 characters.`,
          fix: 'Adjust title length for better SEO'
        });
        score -= 10;
      }
      
      if (!titleHasKeywords) {
        newIssues.push({
          type: 'warning',
          message: 'Title does not contain target keywords',
          fix: 'Include relevant keywords in the title'
        });
        score -= 5;
      }
      
      // Analyze description
      const description = newMetaTags.description || '';
      const descLength = description.length;
      const descOptimal = descLength >= 120 && descLength <= 160;
      const descHasKeywords = newKeywords.some(keyword => 
        description.toLowerCase().includes(keyword)
      );
      
      if (!descOptimal) {
        newIssues.push({
          type: 'warning',
          message: `Description length is ${descLength} characters. Optimal length is 120-160 characters.`,
          fix: 'Adjust description length for better SEO'
        });
        score -= 10;
      }
      
      if (!descHasKeywords) {
        newIssues.push({
          type: 'warning',
          message: 'Description does not contain target keywords',
          fix: 'Include relevant keywords in the description'
        });
        score -= 5;
      }
      
      // Analyze headings
      const h1s = document.querySelectorAll('h1');
      const h2s = document.querySelectorAll('h2');
      const h1Count = h1s.length;
      const h2Count = h2s.length;
      const headingStructure = h1Count === 1 && h2Count > 0;
      
      if (h1Count !== 1) {
        newIssues.push({
          type: 'error',
          message: `Found ${h1Count} H1 tags. Should have exactly 1 H1 tag.`,
          fix: 'Ensure only one H1 tag per page'
        });
        score -= 15;
      }
      
      if (!headingStructure) {
        newIssues.push({
          type: 'warning',
          message: 'Heading structure could be improved',
          fix: 'Use proper heading hierarchy (H1 > H2 > H3)'
        });
        score -= 5;
      }
      
      // Analyze images
      const images = document.querySelectorAll('img');
      const imagesWithAlt = Array.from(images).filter(img => img.alt);
      const imagesOptimized = Array.from(images).every(img => 
        img.alt && img.loading === 'lazy'
      );
      
      if (imagesWithAlt.length < images.length) {
        newIssues.push({
          type: 'error',
          message: `${images.length - imagesWithAlt.length} images missing alt text`,
          fix: 'Add descriptive alt text to all images'
        });
        score -= 15;
      }
      
      if (!imagesOptimized) {
        newIssues.push({
          type: 'warning',
          message: 'Images could be better optimized',
          fix: 'Add lazy loading and optimize image sizes'
        });
        score -= 5;
      }
      
      // Analyze links
      const links = document.querySelectorAll('a[href]');
      const internalLinks = Array.from(links).filter(link => {
        const linkElement = link as HTMLAnchorElement;
        return linkElement.href.startsWith(window.location.origin);
      });
      const externalLinks = Array.from(links).filter(link => {
        const linkElement = link as HTMLAnchorElement;
        return !linkElement.href.startsWith(window.location.origin);
      });
      
      // Check for broken links (basic check)
      let brokenLinks = 0;
      externalLinks.forEach(link => {
        const linkElement = link as HTMLAnchorElement;
        if (!linkElement.href.includes('http') || linkElement.href.includes('javascript:')) {
          brokenLinks++;
        }
      });
      
      if (brokenLinks > 0) {
        newIssues.push({
          type: 'error',
          message: `${brokenLinks} potentially broken links detected`,
          fix: 'Check and fix broken external links'
        });
        score -= 10;
      }
      
      // Analyze mobile optimization
      const viewport = document.querySelector('meta[name="viewport"]');
      const responsive = window.innerWidth <= 768 ? 
        document.body.scrollWidth <= window.innerWidth : true;
      
      if (!viewport) {
        newIssues.push({
          type: 'error',
          message: 'Missing viewport meta tag',
          fix: 'Add viewport meta tag for mobile optimization'
        });
        score -= 10;
      }
      
      if (!responsive) {
        newIssues.push({
          type: 'warning',
          message: 'Page may not be fully responsive',
          fix: 'Ensure responsive design across all screen sizes'
        });
        score -= 5;
      }
      
      // Analyze structured data
      const hasStructuredData = !!newStructuredData;
      const structuredDataValid = hasStructuredData && 
        newStructuredData['@type'] && 
        newStructuredData['@context'];
      
      if (!hasStructuredData) {
        newIssues.push({
          type: 'info',
          message: 'No structured data found',
          fix: 'Consider adding structured data for better search results'
        });
        score -= 5;
      } else if (!structuredDataValid) {
        newIssues.push({
          type: 'warning',
          message: 'Structured data may be invalid',
          fix: 'Validate structured data format'
        });
        score -= 5;
      }
      
      // Performance analysis
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const performanceScore = loadTime < 3000 ? 100 : loadTime < 5000 ? 80 : 60;
      
      score = Math.max(0, score);
      
      const newReport: SEOReport = {
        score,
        title: {
          length: titleLength,
          optimal: titleOptimal,
          hasKeywords: titleHasKeywords
        },
        description: {
          length: descLength,
          optimal: descOptimal,
          hasKeywords: descHasKeywords
        },
        headings: {
          h1Count: h1Count,
          h2Count: h2Count,
          structure: headingStructure
        },
        images: {
          total: images.length,
          withAlt: imagesWithAlt.length,
          optimized: imagesOptimized
        },
        links: {
          internal: internalLinks.length,
          external: externalLinks.length,
          broken: brokenLinks
        },
        performance: {
          loadTime: Math.round(loadTime),
          score: performanceScore
        },
        mobile: {
          responsive,
          viewport: !!viewport
        },
        structuredData: {
          present: hasStructuredData,
          valid: structuredDataValid
        }
      };
      
      setReport(newReport);
      setIssues(newIssues);
      
      // Auto-optimize if enabled
      if (autoOptimize) {
        applySEOOptimizations(newReport, newIssues);
      }
    } catch (error) {
      console.warn('SEO analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [extractKeywords, extractMetaTags, extractStructuredData, autoOptimize]);

  // Apply SEO optimizations
  const applySEOOptimizations = useCallback((currentReport: SEOReport, currentIssues: SEOIssue[]) => {
    // Auto-fix missing alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (!imgElement.alt) {
        const fileName = imgElement.src.split('/').pop()?.split('.')[0] || 'image';
        imgElement.alt = `${fileName} - image description needed`;
        imgElement.setAttribute('data-seo-fix', 'true');
      }
    });
    
    // Auto-fix missing viewport meta tag
    if (!currentReport.mobile.viewport) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
    
    // Auto-fix missing description if title exists
    if (!metaTags.description && document.title) {
      const description = document.createElement('meta');
      description.name = 'description';
      description.content = `Learn more about ${document.title.toLowerCase()}. Discover our services and solutions.`;
      document.head.appendChild(description);
    }
    
    // Add lazy loading to images
    const imagesForLazyLoading = document.querySelectorAll('img:not([loading])');
    imagesForLazyLoading.forEach(img => {
      const imgElement = img as HTMLImageElement;
      imgElement.loading = 'lazy';
    });
  }, [metaTags]);

  // Generate SEO report
  const generateReport = useCallback(() => {
    if (!report) return;
    
    const reportData = {
      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString(),
      ...report,
      issues: issues.map(issue => ({
        type: issue.type,
        message: issue.message,
        fix: issue.fix
      }))
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [report, issues]);

  // Initialize component
  useEffect(() => {
    if (showPanel) {
      setIsVisible(true);
      
      if (autoOptimize) {
        analyzeSEO();
      }
    }
  }, [showPanel, autoOptimize, analyzeSEO]);

  // Continuous monitoring
  useEffect(() => {
    if (!showPanel || !autoOptimize) return;

    const interval = setInterval(() => {
      analyzeSEO();
    }, 60000); // Every minute

    return () => clearInterval(interval);
  }, [showPanel, autoOptimize, analyzeSEO]);

  if (!showPanel || !isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'info': return <Info className="w-4 h-4 text-blue-400" />;
      default: return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed top-4 left-4 z-50"
      >
        <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl max-w-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-cyan-400" />
              SEO Analyzer
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* SEO Score */}
          {report && (
            <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white">SEO Score</h4>
                <div className={`flex items-center gap-2 ${getScoreColor(report.score)}`}>
                  {getScoreIcon(report.score)}
                  <span className="text-lg font-bold">{report.score}/100</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-400">Title:</span>
                  <div className={`text-white ${report.title.optimal ? 'text-green-400' : 'text-yellow-400'}`}>
                    {report.title.length} chars
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Description:</span>
                  <div className={`text-white ${report.description.optimal ? 'text-green-400' : 'text-yellow-400'}`}>
                    {report.description.length} chars
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">H1 Tags:</span>
                  <div className={`text-white ${report.headings.h1Count === 1 ? 'text-green-400' : 'text-red-400'}`}>
                    {report.headings.h1Count}
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Images:</span>
                  <div className={`text-white ${report.images.optimized ? 'text-green-400' : 'text-yellow-400'}`}>
                    {report.images.withAlt}/{report.images.total}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Keywords */}
          {keywords.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Top Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {keywords.slice(0, 6).map((keyword, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-lg border border-cyan-500/30"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Issues */}
          {issues.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Issues ({issues.length})</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {issues.slice(0, 5).map((issue, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-gray-800/30 rounded-lg">
                    {getIssueIcon(issue.type)}
                    <div className="flex-1">
                      <div className="text-sm text-white">{issue.message}</div>
                      {issue.fix && (
                        <div className="text-xs text-gray-400">Fix: {issue.fix}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={analyzeSEO}
              disabled={isAnalyzing}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}
            </button>
            <button
              onClick={generateReport}
              disabled={!report}
              className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              Report
            </button>
          </div>

          {/* Quick Stats */}
          {report && (
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg">
              <h5 className="text-xs font-medium text-gray-300 mb-2">Quick Stats</h5>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                <div>Load Time: {report.performance.loadTime}ms</div>
                <div>Performance: {report.performance.score}/100</div>
                <div>Internal Links: {report.links.internal}</div>
                <div>External Links: {report.links.external}</div>
                <div>Mobile: {report.mobile.responsive ? '✓' : '✗'}</div>
                <div>Structured Data: {report.structuredData.present ? '✓' : '✗'}</div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SEO;