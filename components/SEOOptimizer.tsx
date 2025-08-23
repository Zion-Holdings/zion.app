import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  AlertTriangle, 
  Info, 
  X, 
  Settings,
  ExternalLink
} from 'lucide-react';

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'meta' | 'content' | 'performance' | 'accessibility' | 'technical';
  message: string;
  element?: HTMLElement;
  severity: 'low' | 'medium' | 'high';
  fix?: string;
  impact: number; // 0-100
}

interface SEOMetrics {
  title: {
    length: number;
    hasKeywords: boolean;
    hasBrand: boolean;
    score: number;
  };
  description: {
    length: number;
    hasKeywords: boolean;
    hasCallToAction: boolean;
    score: number;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    hasKeywords: boolean;
    score: number;
  };
  images: {
    total: number;
    withAlt: number;
    optimized: number;
    score: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
    score: number;
  };
  content: {
    wordCount: number;
    keywordDensity: number;
    readability: number;
    score: number;
  };
  overall: number;
}

const SEOOptimizer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [issues, setIssues] = useState<SEOIssue[]>([]);

  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [analysisHistory, setAnalysisHistory] = useState<{ url: string; score: number; date: Date }[]>([]);

  // Common SEO keywords for tech companies
  const defaultKeywords = [
    'technology', 'innovation', 'digital transformation', 'AI', 'machine learning',
    'cloud computing', 'cybersecurity', 'software development', 'IT services',
    'digital solutions', 'enterprise software', 'web development', 'mobile apps'
  ];

  // Load analysis history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('seo-analysis-history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAnalysisHistory(parsed.map((item: { url: string; score: number; date: string }) => ({
          ...item,
          date: new Date(item.date)
        })));
      } catch {
        // Silently handle parsing errors
      }
    }
  }, []);

  // Save analysis history to localStorage
  useEffect(() => {
    if (analysisHistory.length > 0) {
      localStorage.setItem('seo-analysis-history', JSON.stringify(analysisHistory));
    }
  }, [analysisHistory]);

  // Get current page URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Analyze page content
  const analyzePage = useCallback(async () => {
    setIsAnalyzing(true);
    setIssues([]);
    
    try {
      const newIssues: SEOIssue[] = [];
      let newMetrics: SEOMetrics = {
        title: { length: 0, hasKeywords: false, hasBrand: false, score: 0 },
        description: { length: 0, hasKeywords: false, hasCallToAction: false, score: 0 },
        headings: { h1Count: 0, h2Count: 0, h3Count: 0, hasKeywords: false, score: 0 },
        images: { total: 0, withAlt: 0, optimized: 0, score: 0 },
        links: { internal: 0, external: 0, broken: 0, score: 0 },
        content: { wordCount: 0, keywordDensity: 0, readability: 0, score: 0 },
        overall: 0
      };

      // Analyze title
      const title = document.title;
      newMetrics.title.length = title.length;
      newMetrics.title.hasKeywords = defaultKeywords.some(keyword => 
        title.toLowerCase().includes(keyword.toLowerCase())
      );
      newMetrics.title.hasBrand = title.toLowerCase().includes('zion') || title.toLowerCase().includes('tech');
      
      // Title score calculation
      if (title.length >= 30 && title.length <= 60) newMetrics.title.score += 40;
      if (newMetrics.title.hasKeywords) newMetrics.title.score += 30;
      if (newMetrics.title.hasBrand) newMetrics.title.score += 30;
      
      if (title.length < 30) {
        newIssues.push({
          id: 'title-too-short',
          type: 'warning',
          category: 'meta',
          message: 'Title is too short (should be 30-60 characters)',
          severity: 'medium',
          fix: 'Add more descriptive content to your title',
          impact: 15
        });
      } else if (title.length > 60) {
        newIssues.push({
          id: 'title-too-long',
          type: 'warning',
          category: 'meta',
          message: 'Title is too long (should be 30-60 characters)',
          severity: 'medium',
          fix: 'Shorten your title to fit within 60 characters',
          impact: 10
        });
      }

      if (!newMetrics.title.hasKeywords) {
        newIssues.push({
          id: 'title-no-keywords',
          type: 'warning',
          category: 'meta',
          message: 'Title doesn\'t contain target keywords',
          severity: 'medium',
          fix: 'Include relevant keywords in your title',
          impact: 20
        });
      }

      // Analyze meta description
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      newMetrics.description.length = metaDescription.length;
      newMetrics.description.hasKeywords = defaultKeywords.some(keyword => 
        metaDescription.toLowerCase().includes(keyword.toLowerCase())
      );
      newMetrics.description.hasCallToAction = /(learn more|get started|contact us|call now|visit|explore)/i.test(metaDescription);
      
      // Description score calculation
      if (metaDescription.length >= 120 && metaDescription.length <= 160) newMetrics.description.score += 40;
      if (newMetrics.description.hasKeywords) newMetrics.description.score += 30;
      if (newMetrics.description.hasCallToAction) newMetrics.description.score += 30;

      if (metaDescription.length < 120) {
        newIssues.push({
          id: 'description-too-short',
          type: 'warning',
          category: 'meta',
          message: 'Meta description is too short (should be 120-160 characters)',
          severity: 'medium',
          fix: 'Add more descriptive content to your meta description',
          impact: 10
        });
      } else if (metaDescription.length > 160) {
        newIssues.push({
          id: 'description-too-long',
          type: 'warning',
          category: 'meta',
          message: 'Meta description is too long (should be 120-160 characters)',
          severity: 'medium',
          fix: 'Shorten your meta description to fit within 160 characters',
          impact: 5
        });
      }

      // Analyze headings
      const h1s = document.querySelectorAll('h1');
      const h2s = document.querySelectorAll('h2');
      const h3s = document.querySelectorAll('h3');
      
      newMetrics.headings.h1Count = h1s.length;
      newMetrics.headings.h2Count = h2s.length;
      newMetrics.headings.h3Count = h3s.length;
      
      // Check if headings contain keywords
      const allHeadings = [...h1s, ...h2s, ...h3s];
      newMetrics.headings.hasKeywords = allHeadings.some(heading => 
        defaultKeywords.some(keyword => 
          heading.textContent?.toLowerCase().includes(keyword.toLowerCase())
        )
      );

      // Headings score calculation
      if (h1s.length === 1) newMetrics.headings.score += 30;
      if (h2s.length >= 2) newMetrics.headings.score += 20;
      if (newMetrics.headings.hasKeywords) newMetrics.headings.score += 50;

      if (h1s.length === 0) {
        newIssues.push({
          id: 'no-h1',
          type: 'error',
          category: 'content',
          message: 'Page is missing an H1 heading',
          severity: 'high',
          fix: 'Add a single H1 heading to your page',
          impact: 25
        });
      } else if (h1s.length > 1) {
        newIssues.push({
          id: 'multiple-h1',
          type: 'error',
          category: 'content',
          message: 'Page has multiple H1 headings (should have only one)',
          severity: 'high',
          fix: 'Ensure only one H1 heading exists on the page',
          impact: 20
        });
      }

      // Analyze images
      const images = document.querySelectorAll('img');
      newMetrics.images.total = images.length;
      
      images.forEach(img => {
        if (img.alt && img.alt.trim() !== '') newMetrics.images.withAlt++;
        if (img.width && img.height) newMetrics.images.optimized++;
      });

      // Images score calculation
      if (newMetrics.images.total > 0) {
        newMetrics.images.score = Math.round(
          (newMetrics.images.withAlt / newMetrics.images.total) * 50 +
          (newMetrics.images.optimized / newMetrics.images.total) * 50
        );
      }

      const imagesWithoutAlt = newMetrics.images.total - newMetrics.images.withAlt;
      if (imagesWithoutAlt > 0) {
        newIssues.push({
          id: 'images-no-alt',
          type: 'warning',
          category: 'accessibility',
          message: `${imagesWithoutAlt} image(s) missing alt text`,
          severity: 'medium',
          fix: 'Add descriptive alt text to all images',
          impact: 15
        });
      }

      // Analyze links
      const links = document.querySelectorAll('a[href]');
      let internalLinks = 0;
      let externalLinks = 0;
      let brokenLinks = 0;

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          if (href.startsWith('/') || href.startsWith(window.location.origin)) {
            internalLinks++;
          } else if (href.startsWith('http')) {
            externalLinks++;
          }
        }
      });

      newMetrics.links.internal = internalLinks;
      newMetrics.links.external = externalLinks;
      newMetrics.links.broken = brokenLinks;

      // Links score calculation
      if (internalLinks >= 3) newMetrics.links.score += 40;
      if (externalLinks >= 1) newMetrics.links.score += 30;
      if (internalLinks + externalLinks >= 5) newMetrics.links.score += 30;

      if (internalLinks < 3) {
        newIssues.push({
          id: 'few-internal-links',
          type: 'info',
          category: 'content',
          message: 'Consider adding more internal links for better site structure',
          severity: 'low',
          fix: 'Add relevant internal links to other pages on your site',
          impact: 5
        });
      }

      // Analyze content
      const textContent = document.body.textContent || '';
      const words = textContent.trim().split(/\s+/).filter(word => word.length > 0);
      newMetrics.content.wordCount = words.length;

      // Calculate keyword density
      let keywordCount = 0;
      defaultKeywords.forEach(keyword => {
        const regex = new RegExp(keyword.toLowerCase(), 'gi');
        const matches = textContent.toLowerCase().match(regex);
        if (matches) keywordCount += matches.length;
      });
      
      newMetrics.content.keywordDensity = words.length > 0 ? (keywordCount / words.length) * 100 : 0;

      // Simple readability score (Flesch Reading Ease approximation)
      const sentences = textContent.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
      const avgWordsPerSentence = words.length / sentences.length;
      newMetrics.content.readability = Math.max(0, Math.min(100, 100 - (avgWordsPerSentence - 15) * 2));

      // Content score calculation
      if (newMetrics.content.wordCount >= 300) newMetrics.content.score += 30;
      if (newMetrics.content.keywordDensity >= 0.5 && newMetrics.content.keywordDensity <= 2.5) newMetrics.content.score += 40;
      if (newMetrics.content.readability >= 60) newMetrics.content.score += 30;

      if (newMetrics.content.wordCount < 300) {
        newIssues.push({
          id: 'content-too-short',
          type: 'warning',
          category: 'content',
          message: 'Page content is too short (should have at least 300 words)',
          severity: 'medium',
          fix: 'Add more relevant content to your page',
          impact: 20
        });
      }

      if (newMetrics.content.keywordDensity < 0.5) {
        newIssues.push({
          id: 'low-keyword-density',
          type: 'info',
          category: 'content',
          message: 'Keyword density is low - consider adding more relevant keywords naturally',
          severity: 'low',
          fix: 'Naturally incorporate target keywords throughout your content',
          impact: 10
        });
      } else if (newMetrics.content.keywordDensity > 2.5) {
        newIssues.push({
          id: 'keyword-stuffing',
          type: 'warning',
          category: 'content',
          message: 'Keyword density is too high (may be considered keyword stuffing)',
          severity: 'medium',
          fix: 'Reduce keyword usage to natural levels',
          impact: 15
        });
      }

      // Calculate overall score
      newMetrics.overall = Math.round(
        (newMetrics.title.score * 0.2) +
        (newMetrics.description.score * 0.15) +
        (newMetrics.headings.score * 0.15) +
        (newMetrics.images.score * 0.1) +
        (newMetrics.links.score * 0.1) +
        (newMetrics.content.score * 0.3)
      );

      setMetrics(newMetrics);
      setIssues(newIssues);

      // Add to analysis history
      setAnalysisHistory(prev => [
        { url: currentUrl, score: newMetrics.overall, date: new Date() },
        ...prev.slice(0, 9)
      ]);

          } catch {
        // Silently handle analysis errors
      } finally {
      setIsAnalyzing(false);
    }
  }, [currentUrl]);

  // Get SEO grade
  const getSEOGrade = useMemo(() => {
    if (!metrics) return { grade: 'N/A', color: 'text-gray-400', bgColor: 'bg-gray-100' };
    
    if (metrics.overall >= 90) return { grade: 'A+', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (metrics.overall >= 80) return { grade: 'A', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (metrics.overall >= 70) return { grade: 'B', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (metrics.overall >= 60) return { grade: 'C', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    if (metrics.overall >= 50) return { grade: 'D', color: 'text-orange-600', bgColor: 'bg-orange-100' };
    return { grade: 'F', color: 'text-red-600', bgColor: 'bg-red-100' };
  }, [metrics]);

  // Get issue count by severity
  const getIssueCounts = useMemo(() => {
    const counts = { error: 0, warning: 0, info: 0 };
    issues.forEach(issue => {
      counts[issue.type]++;
    });
    return counts;
  }, [issues]);

  // Get total impact score
  const getTotalImpact = useMemo(() => {
    return issues.reduce((total, issue) => total + issue.impact, 0);
  }, [issues]);

  // Auto-analyze when component becomes visible
  useEffect(() => {
    if (isVisible && !metrics) {
      analyzePage();
    }
  }, [isVisible, metrics, analyzePage]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 300 }}
        className="fixed bottom-4 left-4 z-50"
      >
        {/* Main SEO Panel */}
        <motion.div
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-green-500/20 rounded-2xl shadow-2xl shadow-green-500/10 overflow-hidden max-w-md"
          layout
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-green-500/20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-sm">SEO Analysis</h3>
                <div className="flex items-center gap-2">
                  {metrics && (
                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${getSEOGrade.bgColor} ${getSEOGrade.color}`}>
                      {getSEOGrade.grade}
                    </div>
                  )}
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    {currentUrl ? new URL(currentUrl).hostname : 'Current page'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 p-1"
                aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 p-1"
                aria-label="Close SEO panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SEO Score */}
          {metrics && (
            <div className="p-4">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {metrics.overall}/100
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${metrics.overall}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Content</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{metrics.content.wordCount}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">words</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Images</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{metrics.images.withAlt}/{metrics.images.total}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">with alt text</div>
                </div>
              </div>

              {/* Issues Summary */}
              {issues.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Issues Found</span>
                    <span className="text-red-500 font-bold">{getTotalImpact} pts impact</span>
                  </div>
                  <div className="flex gap-2">
                    {getIssueCounts.error > 0 && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs">
                        <AlertTriangle className="w-3 h-3" />
                        {getIssueCounts.error} errors
                      </div>
                    )}
                    {getIssueCounts.warning > 0 && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs">
                        <AlertTriangle className="w-3 h-3" />
                        {getIssueCounts.warning} warnings
                      </div>
                    )}
                    {getIssueCounts.info > 0 && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                        <Info className="w-3 h-3" />
                        {getIssueCounts.info} info
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-green-500/20 overflow-hidden"
              >
                <div className="p-4 space-y-4">
                  {/* Detailed Metrics */}
                  {metrics && (
                    <div className="space-y-4">
                      <h4 className="text-gray-900 dark:text-white font-medium text-sm">Detailed Analysis</h4>
                      
                      {/* Title Analysis */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 dark:text-gray-300">Title</span>
                          <span className={`text-sm font-bold ${
                            metrics.title.score >= 80 ? 'text-green-600' :
                            metrics.title.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {metrics.title.score}/100
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                          "{document.title}"
                        </div>
                      </div>

                      {/* Content Analysis */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 dark:text-gray-300">Content</span>
                          <span className={`text-sm font-bold ${
                            metrics.content.score >= 80 ? 'text-green-600' :
                            metrics.content.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {metrics.content.score}/100
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="font-bold text-gray-900 dark:text-white">{metrics.content.wordCount}</div>
                            <div className="text-gray-500 dark:text-gray-400">Words</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="font-bold text-gray-900 dark:text-white">{metrics.content.keywordDensity.toFixed(1)}%</div>
                            <div className="text-gray-500 dark:text-gray-400">Keywords</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <div className="font-bold text-gray-900 dark:text-white">{Math.round(metrics.content.readability)}</div>
                            <div className="text-gray-500 dark:text-gray-400">Readability</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Issues List */}
                  {issues.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-gray-900 dark:text-white font-medium text-sm">Issues & Recommendations</h4>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {issues.map((issue) => (
                          <div key={issue.id} className={`p-3 rounded-lg border-l-4 ${
                            issue.type === 'error' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                            issue.type === 'warning' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                            'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          }`}>
                            <div className="flex items-start gap-2">
                              {issue.type === 'error' && <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />}
                              {issue.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />}
                              {issue.type === 'info' && <Info className="w-4 h-4 text-blue-500 mt-0.5" />}
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                  {issue.message}
                                </div>
                                {issue.fix && (
                                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                    <strong>Fix:</strong> {issue.fix}
                                  </div>
                                )}
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                    {issue.category}
                                  </span>
                                  <span className={`text-xs font-medium ${
                                    issue.severity === 'high' ? 'text-red-600' :
                                    issue.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                                  }`}>
                                    {issue.impact} pts impact
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Analysis History */}
                  {analysisHistory.length > 0 && (
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-gray-700 dark:text-gray-300 text-sm mb-2">Recent Analysis</h5>
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {analysisHistory.map((item, index) => (
                          <div key={index} className="flex items-center justify-between text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                            <span className="text-gray-600 dark:text-gray-400 truncate">
                              {new URL(item.url).pathname}
                            </span>
                            <span className={`font-bold ${
                              item.score >= 80 ? 'text-green-600' :
                              item.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {item.score}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700 space-y-2">
                    <button
                      onClick={analyzePage}
                      disabled={isAnalyzing}
                      className="w-full p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Re-analyze page"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4" />
                          Re-analyze
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
                      className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      aria-label="Open PageSpeed Insights"
                    >
                      <ExternalLink className="w-4 h-4" />
                      PageSpeed Insights
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Toggle Button */}
        <motion.button
          onClick={() => setIsVisible(false)}
          className="mt-2 w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Hide SEO panel"
        >
          <Search className="w-4 h-4" />
          <span className="text-sm font-medium">Hide Panel</span>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default SEOOptimizer;