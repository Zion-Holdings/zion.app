import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BarChart3, 
  CheckCircle,
  AlertTriangle,
  X,
  RefreshCw,
  Download,
  Zap
} from 'lucide-react';

interface SEOMetrics {
  title: {
    length: number;
    optimal: boolean;
    score: number;
  };
  description: {
    length: number;
    optimal: boolean;
    score: number;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    structure: boolean;
    score: number;
  };
  images: {
    total: number;
    withAlt: number;
    score: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
    score: number;
  };
  performance: {
    loadTime: number;
    score: number;
  };
  mobile: {
    responsive: boolean;
    score: number;
  };
  overall: number;
}

interface SEORecommendation {
  id: string;
  category: 'critical' | 'important' | 'suggestion';
  title: string;
  description: string;
  impact: string;
  solution: string;
  priority: number;
}

interface StructuredData {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Article' | 'Product' | 'Service';
  data: any;
}

const EnhancedSEO: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<SEORecommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [structuredData, setStructuredData] = useState<StructuredData[]>([]);
  const [metaTags, setMetaTags] = useState<Record<string, string>>({});

  // Analyze SEO metrics
  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    
    try {
      // Wait for page to be fully loaded
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', resolve, { once: true });
        });
      }

      // Get page title
      const title = document.title;
      const titleLength = title.length;
      const titleOptimal = titleLength >= 30 && titleLength <= 60;
      const titleScore = titleOptimal ? 100 : Math.max(0, 100 - Math.abs(titleLength - 45) * 2);

      // Get meta description
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const descLength = metaDescription.length;
      const descOptimal = descLength >= 120 && descLength <= 160;
      const descScore = descOptimal ? 100 : Math.max(0, 100 - Math.abs(descLength - 140) * 1.5);

      // Analyze headings
      const h1Elements = document.querySelectorAll('h1');
      const h2Elements = document.querySelectorAll('h2');
      const h3Elements = document.querySelectorAll('h3');
      
      const h1Count = h1Elements.length;
      const h2Count = h2Elements.length;
      const h3Count = h3Elements.length;
      
      const headingStructure = h1Count === 1 && h2Count > 0;
      const headingScore = headingStructure ? 100 : Math.max(0, 100 - (h1Count > 1 ? 50 : 0) - (h1Count === 0 ? 100 : 0));

      // Analyze images
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '').length;
      const imageScore = totalImages > 0 ? (imagesWithAlt / totalImages) * 100 : 100;

      // Analyze links
      const links = document.querySelectorAll('a');
      const internalLinks = Array.from(links).filter(link => {
        const href = link.getAttribute('href');
        return href && (href.startsWith('/') || href.startsWith(window.location.origin));
      }).length;
      
      const externalLinks = Array.from(links).filter(link => {
        const href = link.getAttribute('href');
        return href && href.startsWith('http') && !href.startsWith(window.location.origin);
      }).length;

      // Check for broken links (simplified)
      let brokenLinks = 0;
      try {
        const brokenLinkCheck = await Promise.allSettled(
          Array.from(links).slice(0, 10).map(async (link) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('http')) {
              const response = await fetch(href, { method: 'HEAD', mode: 'no-cors' });
              return response.ok;
            }
            return true;
          })
        );
        brokenLinks = brokenLinkCheck.filter(result => result.status === 'rejected').length;
      } catch {
        // Skip broken link check if it fails
      }

      const linkScore = Math.max(0, 100 - (brokenLinks * 20));

      // Performance metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const performanceScore = loadTime < 3000 ? 100 : Math.max(0, 100 - (loadTime - 3000) / 100);

      // Mobile responsiveness (simplified check)
      const viewport = document.querySelector('meta[name="viewport"]');
      const mobileResponsive = !!viewport;
      const mobileScore = mobileResponsive ? 100 : 0;

      // Calculate overall score
      const overall = Math.round(
        (titleScore + descScore + headingScore + imageScore + linkScore + performanceScore + mobileScore) / 7
      );

      const seoMetrics: SEOMetrics = {
        title: { length: titleLength, optimal: titleOptimal, score: titleScore },
        description: { length: descLength, optimal: descOptimal, score: descScore },
        headings: { h1Count, h2Count, h3Count, structure: headingStructure, score: headingScore },
        images: { total: totalImages, withAlt: imagesWithAlt, score: imageScore },
        links: { internal: internalLinks, external: externalLinks, broken: brokenLinks, score: linkScore },
        performance: { loadTime, score: performanceScore },
        mobile: { responsive: mobileResponsive, score: mobileScore },
        overall
      };

      setMetrics(seoMetrics);
      generateRecommendations(seoMetrics);
      extractMetaTags();
      extractStructuredData();

    } catch {
      console.error('SEO analysis failed');
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  // Generate SEO recommendations
  const generateRecommendations = useCallback((metrics: SEOMetrics) => {
    const recs: SEORecommendation[] = [];

    // Title recommendations
    if (!metrics.title.optimal) {
      recs.push({
        id: 'title-optimization',
        category: metrics.title.length === 0 ? 'critical' : 'important',
        title: 'Title Tag Optimization',
        description: `Title length is ${metrics.title.length} characters (optimal: 30-60)`,
        impact: 'High impact on search rankings and click-through rates',
        solution: 'Optimize title to be descriptive, include primary keywords, and stay within 30-60 characters',
        priority: metrics.title.length === 0 ? 1 : 2
      });
    }

    // Description recommendations
    if (!metrics.description.optimal) {
      recs.push({
        id: 'description-optimization',
        category: metrics.description.length === 0 ? 'critical' : 'important',
        title: 'Meta Description Optimization',
        description: `Description length is ${metrics.description.length} characters (optimal: 120-160)`,
        impact: 'High impact on search result snippets and click-through rates',
        solution: 'Write compelling meta descriptions that include keywords and encourage clicks',
        priority: metrics.description.length === 0 ? 1 : 2
      });
    }

    // Heading recommendations
    if (!metrics.headings.structure) {
      recs.push({
        id: 'heading-structure',
        category: 'important',
        title: 'Heading Structure Optimization',
        description: `Found ${metrics.headings.h1Count} H1 tags (should be exactly 1)`,
        impact: 'Medium impact on search engine understanding and user experience',
        solution: 'Ensure exactly one H1 tag per page and maintain proper heading hierarchy',
        priority: 3
      });
    }

    // Image recommendations
    if (metrics.images.score < 100) {
      recs.push({
        id: 'image-alt-text',
        category: 'important',
        title: 'Image Alt Text Optimization',
        description: `${metrics.images.withAlt}/${metrics.images.total} images have alt text`,
        impact: 'Medium impact on accessibility and image search rankings',
        solution: 'Add descriptive alt text to all images for better accessibility and SEO',
        priority: 4
      });
    }

    // Link recommendations
    if (metrics.links.broken > 0) {
      recs.push({
        id: 'broken-links',
        category: 'critical',
        title: 'Fix Broken Links',
        description: `Found ${metrics.links.broken} broken links`,
        impact: 'High impact on user experience and search engine crawling',
        solution: 'Identify and fix or remove broken links to improve user experience',
        priority: 1
      });
    }

    // Performance recommendations
    if (metrics.performance.score < 80) {
      recs.push({
        id: 'performance-optimization',
        category: 'important',
        title: 'Page Performance Optimization',
        description: `Page load time is ${Math.round(metrics.performance.loadTime)}ms`,
        impact: 'High impact on user experience and search rankings',
        solution: 'Optimize images, minify CSS/JS, enable compression, and use CDN',
        priority: 2
      });
    }

    // Mobile recommendations
    if (!metrics.mobile.responsive) {
      recs.push({
        id: 'mobile-optimization',
        category: 'critical',
        title: 'Mobile Responsiveness',
        description: 'Missing viewport meta tag',
        impact: 'Critical impact on mobile search rankings and user experience',
        solution: 'Add viewport meta tag and ensure responsive design',
        priority: 1
      });
    }

    // Sort by priority
    recs.sort((a, b) => a.priority - b.priority);
    setRecommendations(recs);
  }, []);

  // Extract meta tags
  const extractMetaTags = useCallback(() => {
    const metaElements = document.querySelectorAll('meta');
    const tags: Record<string, string> = {};
    
    metaElements.forEach(meta => {
      const name = meta.getAttribute('name') || meta.getAttribute('property');
      const content = meta.getAttribute('content');
      if (name && content) {
        tags[name] = content;
      }
    });

    setMetaTags(tags);
  }, []);

  // Extract structured data
  const extractStructuredData = useCallback(() => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    const structuredData: StructuredData[] = [];
    
    scripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent || '{}');
        if (data['@type']) {
          structuredData.push({
            type: data['@type'],
            data: data
          });
        }
      } catch {
        // Skip invalid JSON
      }
    });

    setStructuredData(structuredData);
  }, []);

  // Generate structured data
  const generateStructuredData = useCallback(() => {
    const currentUrl = window.location.href;
    const currentTitle = document.title;
    
    // Organization schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Innovative AI, IT & Micro SAAS Solutions',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://github.com/Zion-Holdings'
      ]
    };

    // Website schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      description: 'Transform your business with cutting-edge AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    // WebPage schema
    const webpageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: currentTitle,
      url: currentUrl,
      description: metaTags.description || 'Zion Tech Group - Innovative Technology Solutions',
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      mainEntity: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      }
    };

    return [organizationSchema, websiteSchema, webpageSchema];
  }, [metaTags]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch {
      console.error('Failed to copy to clipboard');
    }
  }, []);

  // Download structured data
  const downloadStructuredData = useCallback(() => {
    const data = generateStructuredData();
    const blob = new window.Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'structured-data.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [generateStructuredData]);

  // Get score color
  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Get score icon
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'important': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'suggestion': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  useEffect(() => {
    if (isVisible) {
      analyzeSEO();
    }
  }, [isVisible, analyzeSEO]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-20 z-50 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="SEO analysis"
      >
        <Search className="w-6 h-6" />
      </motion.button>

      {/* SEO Analysis Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed top-0 left-0 h-full w-96 bg-gray-900 border-r border-gray-700 shadow-2xl z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Search className="w-6 h-6 text-green-400" />
                  <h2 className="text-xl font-bold text-white">SEO Analysis</h2>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close SEO panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Overall Score */}
              {metrics && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">Overall SEO Score</h3>
                    {getScoreIcon(metrics.overall)}
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${getScoreColor(metrics.overall)}`}>
                      {metrics.overall}
                    </div>
                    <div className="text-sm text-gray-400">out of 100</div>
                  </div>
                </div>
              )}

              {/* Detailed Metrics */}
              {metrics && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Detailed Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Title</span>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono ${getScoreColor(metrics.title.score)}`}>
                          {metrics.title.score}
                        </span>
                        <span className="text-xs text-gray-400">
                          ({metrics.title.length} chars)
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Description</span>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono ${getScoreColor(metrics.description.score)}`}>
                          {metrics.description.score}
                        </span>
                        <span className="text-xs text-gray-400">
                          ({metrics.description.length} chars)
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Headings</span>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono ${getScoreColor(metrics.headings.score)}`}>
                          {metrics.headings.score}
                        </span>
                        <span className="text-xs text-gray-400">
                          H1:{metrics.headings.h1Count} H2:{metrics.headings.h2Count}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Images</span>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono ${getScoreColor(metrics.images.score)}`}>
                          {metrics.images.score}
                        </span>
                        <span className="text-xs text-gray-400">
                          {metrics.images.withAlt}/{metrics.images.total}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Links</span>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono ${getScoreColor(metrics.links.score)}`}>
                          {metrics.links.score}
                        </span>
                        <span className="text-xs text-gray-400">
                          {metrics.links.internal} internal, {metrics.links.external} external
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Performance</span>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono ${getScoreColor(metrics.performance.score)}`}>
                          {metrics.performance.score}
                        </span>
                        <span className="text-xs text-gray-400">
                          {Math.round(metrics.performance.loadTime)}ms
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Mobile</span>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono ${getScoreColor(metrics.mobile.score)}`}>
                          {metrics.mobile.score}
                        </span>
                        <span className="text-xs text-gray-400">
                          {metrics.mobile.responsive ? 'Responsive' : 'Not responsive'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Meta Tags */}
              {Object.keys(metaTags).length > 0 && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Meta Tags</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {Object.entries(metaTags).map(([name, content]) => (
                      <div key={name} className="bg-gray-700 rounded-lg p-2">
                        <div className="text-xs text-gray-400 mb-1">{name}</div>
                        <div className="text-white text-xs break-all">{content}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Structured Data */}
              {structuredData.length > 0 && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Structured Data</h3>
                  <div className="space-y-2">
                    {structuredData.map((item, index) => (
                      <div key={index} className="bg-gray-700 rounded-lg p-2">
                        <div className="text-xs text-gray-400 mb-1">{item.type}</div>
                        <button
                          onClick={() => copyToClipboard(JSON.stringify(item.data, null, 2))}
                          className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                        >
                          Copy JSON
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {recommendations.map((rec) => (
                      <div key={rec.id} className={`border-l-4 border-cyan-500 pl-3 bg-gray-700 rounded-lg p-3 ${getCategoryColor(rec.category)}`}>
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-white text-sm">{rec.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded border ${getCategoryColor(rec.category)}`}>
                            {rec.category}
                          </span>
                        </div>
                        <p className="text-gray-300 text-xs mb-1">{rec.description}</p>
                        <p className="text-cyan-400 text-xs mb-1">{rec.solution}</p>
                        <p className="text-gray-400 text-xs">Impact: {rec.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={analyzeSEO}
                  disabled={isAnalyzing}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isAnalyzing ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <BarChart3 className="w-4 h-4" />
                  )}
                  <span>{isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}</span>
                </button>
              </div>

              {/* Additional Tools */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Tools</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={generateStructuredData}
                    className="flex items-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-white"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Generate Schema</span>
                  </button>
                  <button
                    onClick={downloadStructuredData}
                    className="flex items-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-white"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedSEO;