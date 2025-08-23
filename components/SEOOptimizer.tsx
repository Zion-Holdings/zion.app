import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

      setIssues(newIssues);

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
      </Head>

      {/* SEO Status Indicator (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-50 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-white text-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${seoScore >= 80 ? 'bg-green-400' : seoScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
            <span className="font-medium">SEO Score: {seoScore}/100</span>
          </div>
          {seoIssues.length > 0 && (
            <div className="space-y-1">
              <div className="text-gray-400">Issues:</div>
              {seoIssues.slice(0, 3).map((issue, index) => (
                <div key={index} className="text-red-300">• {issue}</div>
              ))}
              {seoIssues.length > 3 && (
                <div className="text-gray-400">+{seoIssues.length - 3} more</div>
              )}
            </div>
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
  );
};

export default SEOOptimizer;