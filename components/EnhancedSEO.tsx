import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, TrendingUp, BarChart3, Eye, EyeOff, Settings, 
  RefreshCw, CheckCircle, AlertTriangle, Info, X, ChevronDown,
  Globe, Tag, Link, Image, FileText, Code, Zap
} from 'lucide-react';

interface SEOMetrics {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  structuredData: any;
  metaTags: { name: string; content: string }[];
  performance: {
    titleLength: number;
    descriptionLength: number;
    keywordDensity: number;
    imageOptimization: number;
    mobileOptimization: number;
    pageSpeed: number;
  };
}

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  severity: 'high' | 'medium' | 'low';
  fix: string;
  element?: string;
}

interface SEORecommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  difficulty: 'easy' | 'medium' | 'hard';
  implementation: string;
}

const EnhancedSEO: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'issues' | 'recommendations' | 'settings'>('overview');
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [recommendations, setRecommendations] = useState<SEORecommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastAnalysis, setLastAnalysis] = useState<Date | null>(null);

  // SEO thresholds
  const thresholds = useMemo(() => ({
    titleLength: { min: 30, max: 60, optimal: 50 },
    descriptionLength: { min: 120, max: 160, optimal: 150 },
    keywordDensity: { min: 0.5, max: 2.5, optimal: 1.5 },
    imageOptimization: { min: 80, optimal: 95 },
    mobileOptimization: { min: 80, optimal: 95 },
    pageSpeed: { min: 70, optimal: 90 }
  }), []);

  // Analyze current page SEO
  const analyzeSEO = useCallback(async () => {
    if (typeof window === 'undefined') return;

    setIsAnalyzing(true);
    const newIssues: SEOIssue[] = [];
    const newRecommendations: SEORecommendation[] = [];

    try {
      // Get current page data
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content')?.split(',').map(k => k.trim()) || [];
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '';
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '';
      const twitterDescription = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || '';
      const twitterImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || '';
      const canonicalUrl = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || window.location.href;

      // Get structured data
      const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
      const structuredData = Array.from(structuredDataScripts).map(script => {
        try {
          return JSON.parse(script.textContent || '{}');
        } catch {
          return null;
        }
      }).filter(Boolean);

      // Get all meta tags
      const metaTags = Array.from(document.querySelectorAll('meta')).map(meta => ({
        name: meta.getAttribute('name') || meta.getAttribute('property') || '',
        content: meta.getAttribute('content') || ''
      }));

      // Calculate performance metrics
      const titleLength = title.length;
      const descriptionLength = description.length;
      const keywordDensity = calculateKeywordDensity(title + ' ' + description, keywords);
      const imageOptimization = calculateImageOptimization();
      const mobileOptimization = calculateMobileOptimization();
      const pageSpeed = await calculatePageSpeed();

      const newMetrics: SEOMetrics = {
        title,
        description,
        keywords,
        ogTitle,
        ogDescription,
        ogImage,
        twitterCard,
        twitterTitle,
        twitterDescription,
        twitterImage,
        canonicalUrl,
        structuredData,
        metaTags,
        performance: {
          titleLength,
          descriptionLength,
          keywordDensity,
          imageOptimization,
          mobileOptimization,
          pageSpeed
        }
      };

      setMetrics(newMetrics);

      // Analyze for issues
      analyzeForIssues(newMetrics, newIssues);
      
      // Generate recommendations
      generateRecommendations(newMetrics, newRecommendations);

      setIssues(newIssues);
      setRecommendations(newRecommendations);
      setLastAnalysis(new Date());

    } catch (error) {
      console.error('SEO analysis error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [thresholds]);

  // Calculate keyword density
  const calculateKeywordDensity = (text: string, keywords: string[]): number => {
    if (!text || keywords.length === 0) return 0;
    
    const wordCount = text.toLowerCase().split(/\s+/).length;
    const keywordCount = keywords.reduce((count, keyword) => {
      const regex = new RegExp(keyword.toLowerCase(), 'gi');
      const matches = text.toLowerCase().match(regex);
      return count + (matches ? matches.length : 0);
    }, 0);
    
    return (keywordCount / wordCount) * 100;
  };

  // Calculate image optimization score
  const calculateImageOptimization = (): number => {
    const images = document.querySelectorAll('img');
    if (images.length === 0) return 100;
    
    let optimizedCount = 0;
    images.forEach(img => {
      const hasAlt = img.hasAttribute('alt');
      const hasWidth = img.hasAttribute('width') || img.hasAttribute('style');
      const hasHeight = img.hasAttribute('height') || img.hasAttribute('style');
      const isLazy = img.hasAttribute('loading') && img.getAttribute('loading') === 'lazy';
      
      if (hasAlt && hasWidth && hasHeight && isLazy) optimizedCount++;
    });
    
    return Math.round((optimizedCount / images.length) * 100);
  };

  // Calculate mobile optimization score
  const calculateMobileOptimization = (): number => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const hasViewport = !!viewport;
    const hasResponsiveCSS = document.querySelector('link[media*="max-width"]') !== null;
    const hasTouchFriendly = document.querySelectorAll('button, a, input').length > 0;
    
    let score = 0;
    if (hasViewport) score += 30;
    if (hasResponsiveCSS) score += 40;
    if (hasTouchFriendly) score += 30;
    
    return score;
  };

  // Calculate page speed (simplified)
  const calculatePageSpeed = async (): Promise<number> => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        if (loadTime < 1000) return 95;
        if (loadTime < 2000) return 85;
        if (loadTime < 3000) return 75;
        if (loadTime < 5000) return 65;
        return 50;
      }
    }
    return 80; // Default score
  };

  // Analyze for SEO issues
  const analyzeForIssues = (metrics: SEOMetrics, issues: SEOIssue[]) => {
    // Title issues
    if (metrics.title.length < thresholds.titleLength.min) {
      issues.push({
        id: 'title-too-short',
        type: 'error',
        message: 'Title is too short',
        severity: 'high',
        fix: `Increase title length to at least ${thresholds.titleLength.min} characters`,
        element: 'title'
      });
    } else if (metrics.title.length > thresholds.titleLength.max) {
      issues.push({
        id: 'title-too-long',
        type: 'warning',
        message: 'Title is too long',
        severity: 'medium',
        fix: `Reduce title length to maximum ${thresholds.titleLength.max} characters`,
        element: 'title'
      });
    }

    // Description issues
    if (metrics.description.length < thresholds.descriptionLength.min) {
      issues.push({
        id: 'description-too-short',
        type: 'error',
        message: 'Meta description is too short',
        severity: 'high',
        fix: `Increase description length to at least ${thresholds.descriptionLength.min} characters`,
        element: 'meta[name="description"]'
      });
    } else if (metrics.description.length > thresholds.descriptionLength.max) {
      issues.push({
        id: 'description-too-long',
        type: 'warning',
        message: 'Meta description is too long',
        severity: 'medium',
        fix: `Reduce description length to maximum ${thresholds.descriptionLength.max} characters`,
        element: 'meta[name="description"]'
      });
    }

    // Missing meta tags
    if (!metrics.ogTitle) {
      issues.push({
        id: 'missing-og-title',
        type: 'warning',
        message: 'Missing Open Graph title',
        severity: 'medium',
        fix: 'Add meta property="og:title" tag',
        element: 'meta[property="og:title"]'
      });
    }

    if (!metrics.ogDescription) {
      issues.push({
        id: 'missing-og-description',
        type: 'warning',
        message: 'Missing Open Graph description',
        severity: 'medium',
        fix: 'Add meta property="og:description" tag',
        element: 'meta[property="og:description"]'
      });
    }

    if (!metrics.ogImage) {
      issues.push({
        id: 'missing-og-image',
        type: 'warning',
        message: 'Missing Open Graph image',
        severity: 'medium',
        fix: 'Add meta property="og:image" tag',
        element: 'meta[property="og:image"]'
      });
    }

    // Performance issues
    if (metrics.performance.imageOptimization < thresholds.imageOptimization.min) {
      issues.push({
        id: 'poor-image-optimization',
        type: 'warning',
        message: 'Poor image optimization',
        severity: 'medium',
        fix: 'Add alt text, dimensions, and lazy loading to images',
        element: 'img'
      });
    }

    if (metrics.performance.mobileOptimization < thresholds.mobileOptimization.min) {
      issues.push({
        id: 'poor-mobile-optimization',
        type: 'warning',
        message: 'Poor mobile optimization',
        severity: 'medium',
        fix: 'Add viewport meta tag and responsive CSS',
        element: 'meta[name="viewport"]'
      });
    }

    if (metrics.performance.pageSpeed < thresholds.pageSpeed.min) {
      issues.push({
        id: 'slow-page-speed',
        type: 'warning',
        message: 'Page speed is below recommended threshold',
        severity: 'medium',
        fix: 'Optimize images, minify CSS/JS, enable compression',
        element: 'performance'
      });
    }
  };

  // Generate SEO recommendations
  const generateRecommendations = (metrics: SEOMetrics, recommendations: SEORecommendation[]) => {
    // Title optimization
    if (metrics.title.length < thresholds.titleLength.optimal) {
      recommendations.push({
        id: 'optimize-title',
        title: 'Optimize Title Length',
        description: 'Your title could be more descriptive and engaging',
        impact: 'high',
        difficulty: 'easy',
        implementation: 'Add more descriptive keywords while keeping it under 60 characters'
      });
    }

    // Description optimization
    if (metrics.description.length < thresholds.descriptionLength.optimal) {
      recommendations.push({
        id: 'optimize-description',
        title: 'Enhance Meta Description',
        description: 'Your meta description could be more compelling',
        impact: 'high',
        difficulty: 'easy',
        implementation: 'Write a compelling description between 120-160 characters'
      });
    }

    // Social media optimization
    if (!metrics.ogTitle || !metrics.ogDescription || !metrics.ogImage) {
      recommendations.push({
        id: 'social-media-optimization',
        title: 'Social Media Optimization',
        description: 'Improve how your content appears on social media',
        impact: 'medium',
        difficulty: 'easy',
        implementation: 'Add Open Graph and Twitter Card meta tags'
      });
    }

    // Structured data
    if (metrics.structuredData.length === 0) {
      recommendations.push({
        id: 'add-structured-data',
        title: 'Add Structured Data',
        description: 'Help search engines understand your content better',
        impact: 'medium',
        difficulty: 'medium',
        implementation: 'Add JSON-LD structured data for your content type'
      });
    }

    // Performance optimization
    if (metrics.performance.pageSpeed < thresholds.pageSpeed.optimal) {
      recommendations.push({
        id: 'improve-page-speed',
        title: 'Improve Page Speed',
        description: 'Faster pages rank better and provide better user experience',
        impact: 'high',
        difficulty: 'medium',
        implementation: 'Optimize images, minify code, enable caching, use CDN'
      });
    }
  };

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(analyzeSEO, 60000); // Every minute
      return () => clearInterval(interval);
    }
  }, [autoRefresh, analyzeSEO]);

  // Initial analysis
  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  // Get score color
  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  // Get score icon
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-orange-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  // Get issue count by type
  const getIssueCount = (type: string) => issues.filter(issue => issue.type === type).length;

  // Get recommendation count by impact
  const getRecommendationCount = (impact: string) => recommendations.filter(rec => rec.impact === impact).length;

  return (
    <>
      {/* Floating SEO Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open SEO analysis"
      >
        <Search className="w-7 h-7 mx-auto" />
      </motion.button>

      {/* SEO Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed right-0 top-0 h-full w-96 bg-black/95 backdrop-blur-xl border-l border-green-500/20 shadow-2xl shadow-green-500/20 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-green-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">SEO Analysis</h2>
                  <p className="text-sm text-green-400">Search engine optimization</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                aria-label="Close SEO panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-green-500/20">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'issues', label: 'Issues', icon: AlertTriangle, count: issues.length },
                { id: 'recommendations', label: 'Tips', icon: TrendingUp, count: recommendations.length },
                { id: 'settings', label: 'Settings', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 transition-colors ${
                    activeTab === tab.id
                      ? 'text-green-400 border-b-2 border-green-400 bg-green-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  aria-label={`Switch to ${tab.label} tab`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Overall Score */}
                    {metrics && (
                      <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-green-400">Overall SEO Score</span>
                          {getScoreIcon(Math.round(
                            (metrics.performance.titleLength / thresholds.titleLength.optimal * 100 +
                             metrics.performance.descriptionLength / thresholds.descriptionLength.optimal * 100 +
                             metrics.performance.imageOptimization +
                             metrics.performance.mobileOptimization +
                             metrics.performance.pageSpeed) / 5
                          ))}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`text-3xl font-bold ${getScoreColor(Math.round(
                            (metrics.performance.titleLength / thresholds.titleLength.optimal * 100 +
                             metrics.performance.descriptionLength / thresholds.descriptionLength.optimal * 100 +
                             metrics.performance.imageOptimization +
                             metrics.performance.mobileOptimization +
                             metrics.performance.pageSpeed) / 5
                          ))}`}>
                            {Math.round(
                              (metrics.performance.titleLength / thresholds.titleLength.optimal * 100 +
                               metrics.performance.descriptionLength / thresholds.descriptionLength.optimal * 100 +
                               metrics.performance.imageOptimization +
                               metrics.performance.mobileOptimization +
                               metrics.performance.pageSpeed) / 5
                            )}
                          </div>
                          <div className="text-sm text-gray-400">/ 100</div>
                        </div>
                        {lastAnalysis && (
                          <div className="mt-2 text-xs text-gray-400">
                            Last analyzed: {lastAnalysis.toLocaleTimeString()}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Performance Metrics */}
                    {metrics && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(metrics.performance).map(([key, value]) => (
                            <div key={key} className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                              <div className="text-xs font-medium text-gray-400 uppercase mb-1">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                              </div>
                              <div className="text-lg font-bold text-white">
                                {typeof value === 'number' ? Math.round(value) : value}
                                {key.includes('Length') ? ' chars' : key.includes('Density') ? '%' : ''}
                              </div>
                              <div className="text-xs text-gray-500">
                                {key.includes('Length') && thresholds[key as keyof typeof thresholds] ? 
                                  `Target: ${thresholds[key as keyof typeof thresholds].optimal}` : 
                                  key.includes('Density') ? 'Optimal: 1.5%' : 'Optimal: 90+'
                                }
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <button
                          onClick={analyzeSEO}
                          disabled={isAnalyzing}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isAnalyzing ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                          ) : (
                            <RefreshCw className="w-4 h-4" />
                          )}
                          <span>{isAnalyzing ? 'Analyzing...' : 'Refresh Analysis'}</span>
                        </button>
                        
                        <button
                          onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors border border-gray-600/50"
                        >
                          <Globe className="w-4 h-4" />
                          <span>PageSpeed Insights</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'issues' && (
                  <motion.div
                    key="issues"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">SEO Issues</h3>
                      <div className="flex space-x-2">
                        <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">
                          {getIssueCount('error')} errors
                        </span>
                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                          {getIssueCount('warning')} warnings
                        </span>
                      </div>
                    </div>

                    {issues.length === 0 ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <p className="text-gray-400">No SEO issues found!</p>
                        <p className="text-sm text-gray-500 mt-2">Your page is well optimized.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {issues.map((issue) => (
                          <div
                            key={issue.id}
                            className={`p-4 rounded-lg border-l-4 ${
                              issue.type === 'error' ? 'border-red-500 bg-red-500/10' :
                              issue.type === 'warning' ? 'border-yellow-500 bg-yellow-500/10' :
                              'border-blue-500 bg-blue-500/10'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`mt-1 ${
                                issue.type === 'error' ? 'text-red-400' :
                                issue.type === 'warning' ? 'text-yellow-400' :
                                'text-blue-400'
                              }`}>
                                {issue.type === 'error' ? <AlertTriangle className="w-4 h-4" /> :
                                 issue.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
                                 <Info className="w-4 h-4" />}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-white mb-1">{issue.message}</h5>
                                {issue.element && (
                                  <p className="text-sm text-gray-300 mb-2">Element: {issue.element}</p>
                                )}
                                <p className="text-sm text-gray-400 mb-2">{issue.fix}</p>
                                <div className="mt-2">
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    issue.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                                    issue.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-blue-500/20 text-blue-400'
                                  }`}>
                                    {issue.severity} priority
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'recommendations' && (
                  <motion.div
                    key="recommendations"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">SEO Recommendations</h3>
                      <div className="flex space-x-2">
                        <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">
                          {getRecommendationCount('high')} high impact
                        </span>
                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                          {getRecommendationCount('medium')} medium impact
                        </span>
                      </div>
                    </div>

                    {recommendations.length === 0 ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <p className="text-gray-400">No recommendations needed!</p>
                        <p className="text-sm text-gray-500 mt-2">Your SEO is already optimized.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {recommendations.map((rec) => (
                          <div
                            key={rec.id}
                            className={`p-4 rounded-lg border-l-4 ${
                              rec.impact === 'high' ? 'border-red-500 bg-red-500/10' :
                              rec.impact === 'medium' ? 'border-yellow-500 bg-yellow-500/10' :
                              'border-blue-500 bg-blue-500/10'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`mt-1 ${
                                rec.impact === 'high' ? 'text-red-400' :
                                rec.impact === 'medium' ? 'text-yellow-400' :
                                'text-blue-400'
                              }`}>
                                <TrendingUp className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-white mb-1">{rec.title}</h5>
                                <p className="text-sm text-gray-300 mb-2">{rec.description}</p>
                                <p className="text-sm text-gray-400 mb-2">{rec.implementation}</p>
                                <div className="flex items-center space-x-2 mt-2">
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    rec.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                                    rec.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-blue-500/20 text-blue-400'
                                  }`}>
                                    {rec.impact} impact
                                  </span>
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    rec.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                                    rec.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-red-500/20 text-red-400'
                                  }`}>
                                    {rec.difficulty} difficulty
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'settings' && (
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-white">SEO Settings</h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoRefresh}
                          onChange={(e) => setAutoRefresh(e.target.checked)}
                          className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                        />
                        <span className="text-white">Auto-refresh analysis</span>
                      </label>
                      
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-white mb-2">Analysis Frequency</h4>
                        <p className="text-sm text-gray-400">SEO analysis will run automatically every minute when enabled.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedSEO;