import React, { useEffect, useState } from 'react';
import Head from 'next/head';

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

    // Check description length
    if (seoData.description.length < 120 || seoData.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      score -= 10;
    }

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= 5;
    }

    // Check heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count === 0) {
      issues.push('Missing H1 heading');
      score -= 15;
    } else if (h1Count > 1) {
      issues.push('Multiple H1 headings found');
      score -= 10;
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="https://ziontechgroup.com"]');
    if (internalLinks.length < 3) {
      issues.push('Low number of internal links');
      score -= 5;
    }

    // Check for meta viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      issues.push('Missing viewport meta tag');
      score -= 10;
    }

    // Check for language declaration
    const html = document.documentElement;
    if (!html.lang) {
      issues.push('Missing language declaration');
      score -= 5;
    }

    // Check for robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      issues.push('Missing robots meta tag');
      score -= 5;
    }

      newMetrics.images.score = Math.min(100,
        (newMetrics.images.withAlt / Math.max(newMetrics.images.total, 1)) * 100
      );

      newMetrics.links.score = Math.min(100,
        (newMetrics.links.internal / Math.max(newMetrics.links.internal + newMetrics.links.external, 1)) * 100
      );

      newMetrics.content.score = Math.min(100,
        (newMetrics.content.wordCount >= 300 ? 40 : newMetrics.content.wordCount / 7.5) +
        (newMetrics.content.keywordDensity >= 1 && newMetrics.content.keywordDensity <= 3 ? 30 : 0) +
        (newMetrics.content.readability >= 60 ? 30 : newMetrics.content.readability / 2)
      );

      // Calculate overall score
      const scores = [
        newMetrics.title.score,
        newMetrics.description.score,
        newMetrics.headings.score,
        newMetrics.images.score,
        newMetrics.links.score,
        newMetrics.content.score
      ];
      newMetrics.overall = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

      setMetrics(newMetrics);

      // Add to history
      setAnalysisHistory(prev => [
        { url: currentUrl, score: newMetrics.overall, date: new Date() },
        ...prev.slice(0, 9)
      ]);

      // Generate issues
      const newIssues: SEOIssue[] = [];
      
      if (newMetrics.title.length < 30) {
        newIssues.push({
          id: 'title-too-short',
          type: 'warning',
          category: 'meta',
          message: 'Title is too short. Aim for 30-60 characters.',
          severity: 'medium',
          fix: 'Add more descriptive words to your title',
          impact: 15
        });
      }

      if (newMetrics.title.length > 60) {
        newIssues.push({
          id: 'title-too-long',
          type: 'warning',
          category: 'meta',
          message: 'Title is too long. Keep it under 60 characters.',
          severity: 'medium',
          fix: 'Shorten your title to be more concise',
          impact: 10
        });
      }

      if (newMetrics.headings.h1Count === 0) {
        newIssues.push({
          id: 'no-h1',
          type: 'error',
          category: 'content',
          message: 'No H1 heading found. Every page should have one main heading.',
          severity: 'high',
          fix: 'Add an H1 heading to your page',
          impact: 25
        });
      }

      if (newMetrics.headings.h1Count > 1) {
        newIssues.push({
          id: 'multiple-h1',
          type: 'error',
          category: 'content',
          message: 'Multiple H1 headings found. Use only one per page.',
          severity: 'high',
          fix: 'Convert additional H1 headings to H2 or H3',
          impact: 20
        });
      }

      if (newMetrics.images.total > 0 && newMetrics.images.withAlt === 0) {
        newIssues.push({
          id: 'no-alt-text',
          type: 'error',
          category: 'accessibility',
          message: 'Images found without alt text. This affects accessibility and SEO.',
          severity: 'high',
          fix: 'Add descriptive alt text to all images',
          impact: 20
        });
      }

      if (newMetrics.content.wordCount < 300) {
        newIssues.push({
          id: 'content-too-short',
          type: 'warning',
          category: 'content',
          message: 'Content is too short. Aim for at least 300 words.',
          severity: 'medium',
          fix: 'Add more relevant content to your page',
          impact: 15
        });
      }
    };

    // Inject structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(webPageData);
    document.head.appendChild(script);

    } catch {
      // Silently handle errors
    } finally {
      setIsAnalyzing(false);
    }
  }, [currentUrl, isAnalyzing]);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
    if (isVisible) {
      setIsExpanded(false);
    }
  }, [isVisible]);

  // Toggle expansion
  const toggleExpansion = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-blue-600 dark:text-blue-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  // Get severity background
  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 dark:bg-red-900/30';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-900/30';
      case 'low': return 'bg-blue-100 dark:bg-blue-900/30';
      default: return 'bg-gray-100 dark:bg-gray-900/30';
    }
  };

  if (!isVisible) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-200 hover:shadow-xl"
        aria-label="Open SEO optimizer"
      >
        <Search className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 shadow-2xl z-40 overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">SEO Optimizer</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time SEO analysis</p>
          </div>
          <button
            onClick={toggleVisibility}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close SEO optimizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current URL */}
        <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Page</p>
          <p className="text-sm font-mono break-all">{currentUrl}</p>
        </div>

        {/* Analysis Button */}
        <div className="mb-6">
          <button
            onClick={analyzePage}
            disabled={isAnalyzing}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            aria-label="Analyze current page"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Analyze Page</span>
              </>
            )}
          </button>
        </div>

        {/* Metrics Display */}
        {metrics && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">SEO Score: {metrics.overall}/100</h3>
            
            <div className="space-y-4">
              {/* Title */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Title</span>
                  <span className={`text-sm font-bold ${metrics.title.score >= 80 ? 'text-green-600' : metrics.title.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.title.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Length: {metrics.title.length} characters</p>
                  <p>Keywords: {metrics.title.hasKeywords ? '✓' : '✗'}</p>
                  <p>Brand: {metrics.title.hasBrand ? '✓' : '✗'}</p>
                </div>
              </div>

              {/* Headings */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Headings</span>
                  <span className={`text-sm font-bold ${metrics.headings.score >= 80 ? 'text-green-600' : metrics.headings.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.headings.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>H1: {metrics.headings.h1Count}</p>
                  <p>H2: {metrics.headings.h2Count}</p>
                  <p>H3: {metrics.headings.h3Count}</p>
                </div>
              </div>

              {/* Images */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Images</span>
                  <span className={`text-sm font-bold ${metrics.images.score >= 80 ? 'text-green-600' : metrics.images.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.images.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Total: {metrics.images.total}</p>
                  <p>With Alt: {metrics.images.withAlt}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Content</span>
                  <span className={`text-sm font-bold ${metrics.content.score >= 80 ? 'text-green-600' : metrics.content.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.content.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Words: {metrics.content.wordCount}</p>
                  <p>Keyword Density: {metrics.content.keywordDensity}%</p>
                  <p>Readability: {metrics.content.readability}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Issues List */}
        {issues.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Issues Found ({issues.length})</h3>
            <div className="space-y-3">
              {issues.map((issue) => (
                <div
                  key={issue.id}
                  className={`p-3 rounded-lg border-l-4 ${getSeverityBg(issue.severity)} border-l-${issue.severity === 'high' ? 'red' : issue.severity === 'medium' ? 'yellow' : 'blue'}-500`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className={`w-4 h-4 ${getSeverityColor(issue.severity)}`} />
                        <span className={`text-sm font-medium ${getSeverityColor(issue.severity)} capitalize`}>
                          {issue.severity} {issue.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{issue.message}</p>
                      {issue.fix && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <strong>Fix:</strong> {issue.fix}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      -{issue.impact} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analysis History */}
        {analysisHistory.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Recent Analysis</h3>
            <div className="space-y-2">
              {analysisHistory.slice(0, 5).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.url}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.date.toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`text-sm font-bold ${
                    item.score >= 80 ? 'text-green-600' : 
                    item.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {item.score}/100
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <h4 className="text-gray-900 dark:text-white font-medium text-sm">Advanced SEO Tips</h4>
                
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Title Optimization</h5>
                    <p>Keep titles between 30-60 characters. Include primary keywords near the beginning.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Meta Description</h5>
                    <p>Write compelling descriptions between 120-160 characters. Include a call-to-action.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Heading Structure</h5>
                    <p>Use one H1 per page, followed by H2s and H3s. Include keywords naturally.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Image Optimization</h5>
                    <p>Always add descriptive alt text. Use relevant filenames and compress images.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Content Quality</h5>
                    <p>Aim for at least 300 words. Use keywords naturally and provide value to readers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpansion}
          className="mt-6 w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} advanced tips`}
        >
          <Settings className="w-4 h-4" />
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'Show More'}
          </span>
        </button>
      </motion.div>
    </AnimatePresence>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  );
};

export default SEOOptimizer;