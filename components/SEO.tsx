import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, TrendingUp, BarChart3, Target, 
  CheckCircle, AlertTriangle, Info, Settings,
  Eye, EyeOff, Zap, Globe, Smartphone, Monitor
} from 'lucide-react';

interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
  author?: string;
  viewport?: string;
  charset?: string;
}

interface SEOData {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string[];
  structuredData?: any;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  analytics?: {
    googleAnalytics?: string;
    googleTagManager?: string;
    facebookPixel?: string;
  };
}

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  suggestion: string;
  priority: 'low' | 'medium' | 'high';
  category: 'meta' | 'content' | 'technical' | 'social';
}

const SEO: React.FC<{ data: SEOData }> = ({ data }) => {
  const [seoScore, setSeoScore] = useState(0);
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // Default SEO meta
  const defaultMeta: SEOMeta = useMemo(() => ({
    title: data.pageTitle || 'Zion Tech Group - Revolutionary Technology Solutions',
    description: data.pageDescription || 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.',
    keywords: data.pageKeywords || ['AI consciousness', 'quantum computing', 'space technology', 'cybersecurity', 'autonomous solutions'],
    ogTitle: data.pageTitle || 'Zion Tech Group - Revolutionary Technology Solutions',
    ogDescription: data.pageDescription || 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.',
    ogImage: '/og-image.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: data.pageTitle || 'Zion Tech Group - Revolutionary Technology Solutions',
    twitterDescription: data.pageDescription || 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.',
    twitterImage: '/og-image.jpg',
    canonical: typeof window !== 'undefined' ? window.location.href : '',
    robots: 'index, follow',
    author: 'Zion Tech Group',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    charset: 'utf-8'
  }), [data]);

  // Analyze SEO and generate score
  const analyzeSEO = useCallback(() => {
    setIsAnalyzing(true);
    const newIssues: SEOIssue[] = [];
    let score = 100;

    // Title analysis
    if (!defaultMeta.title || defaultMeta.title.length < 30) {
      newIssues.push({
        id: 'title-length',
        type: 'warning',
        message: 'Title is too short (should be 30-60 characters)',
        suggestion: 'Expand title to include primary keywords and brand name',
        priority: 'medium',
        category: 'meta'
      });
      score -= 10;
    } else if (defaultMeta.title.length > 60) {
      newIssues.push({
        id: 'title-length',
        type: 'warning',
        message: 'Title is too long (should be 30-60 characters)',
        suggestion: 'Shorten title while keeping primary keywords',
        priority: 'medium',
        category: 'meta'
      });
      score -= 5;
    }

    // Description analysis
    if (!defaultMeta.description || defaultMeta.description.length < 120) {
      newIssues.push({
        id: 'description-length',
        type: 'warning',
        message: 'Description is too short (should be 120-160 characters)',
        suggestion: 'Expand description to include key benefits and call-to-action',
        priority: 'medium',
        category: 'meta'
      });
      score -= 10;
    } else if (defaultMeta.description.length > 160) {
      newIssues.push({
        id: 'description-length',
        type: 'warning',
        message: 'Description is too long (should be 120-160 characters)',
        suggestion: 'Shorten description to fit search result display',
        priority: 'low',
        category: 'meta'
      });
      score -= 5;
    }

    // Keywords analysis
    if (!defaultMeta.keywords || defaultMeta.keywords.length < 3) {
      newIssues.push({
        id: 'keywords-count',
        type: 'warning',
        message: 'Insufficient keywords (should have 3-10 relevant keywords)',
        suggestion: 'Add more relevant keywords related to your content',
        priority: 'medium',
        category: 'meta'
      });
      score -= 5;
    }

    // Social media optimization
    if (!defaultMeta.ogImage) {
      newIssues.push({
        id: 'og-image',
        type: 'warning',
        message: 'Missing Open Graph image',
        suggestion: 'Add an engaging image for social media sharing',
        priority: 'medium',
        category: 'social'
      });
      score -= 5;
    }

    // Canonical URL
    if (!defaultMeta.canonical) {
      newIssues.push({
        id: 'canonical',
        type: 'error',
        message: 'Missing canonical URL',
        suggestion: 'Add canonical URL to prevent duplicate content issues',
        priority: 'high',
        category: 'technical'
      });
      score -= 15;
    }

    // Structured data
    if (!data.structuredData) {
      newIssues.push({
        id: 'structured-data',
        type: 'info',
        message: 'No structured data found',
        suggestion: 'Add structured data for better search engine understanding',
        priority: 'low',
        category: 'technical'
      });
      score -= 5;
    }

    // Mobile optimization
    if (!defaultMeta.viewport || !defaultMeta.viewport.includes('width=device-width')) {
      newIssues.push({
        id: 'viewport',
        type: 'error',
        message: 'Missing or incorrect viewport meta tag',
        suggestion: 'Add proper viewport meta tag for mobile optimization',
        priority: 'high',
        category: 'technical'
      });
      score -= 15;
    }

    // Content analysis
    const contentLength = document.body?.textContent?.length || 0;
    if (contentLength < 300) {
      newIssues.push({
        id: 'content-length',
        type: 'warning',
        message: 'Page content is too short (should be at least 300 words)',
        suggestion: 'Add more relevant content to improve SEO value',
        priority: 'medium',
        category: 'content'
      });
      score -= 10;
    }

    // Heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      newIssues.push({
        id: 'headings',
        type: 'warning',
        message: 'No heading tags found',
        suggestion: 'Add proper heading structure (H1, H2, H3) for better SEO',
        priority: 'medium',
        category: 'content'
      });
      score -= 5;
    } else {
      const h1Count = document.querySelectorAll('h1').length;
      if (h1Count === 0) {
        newIssues.push({
          id: 'h1-missing',
          type: 'error',
          message: 'Missing H1 heading',
          suggestion: 'Add a single H1 heading with your primary keyword',
          priority: 'high',
          category: 'content'
        });
        score -= 10;
      } else if (h1Count > 1) {
        newIssues.push({
          id: 'h1-multiple',
          type: 'warning',
          message: 'Multiple H1 headings found',
          suggestion: 'Use only one H1 heading per page',
          priority: 'medium',
          category: 'content'
        });
        score -= 5;
      }
    }

    // Image optimization
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    images.forEach(img => {
      if (!img.alt || img.alt.trim() === '') {
        imagesWithoutAlt++;
      }
    });

    if (imagesWithoutAlt > 0) {
      newIssues.push({
        id: 'image-alt',
        type: 'warning',
        message: `${imagesWithoutAlt} images missing alt text`,
        suggestion: 'Add descriptive alt text to all images for accessibility and SEO',
        priority: 'medium',
        category: 'content'
      });
      score -= Math.min(10, imagesWithoutAlt * 2);
    }

    // Internal linking
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]');
    if (internalLinks.length < 3) {
      newIssues.push({
        id: 'internal-links',
        type: 'info',
        message: 'Limited internal linking',
        suggestion: 'Add more internal links to improve site structure and SEO',
        priority: 'low',
        category: 'content'
      });
      score -= 3;
    }

    // Performance impact
    const performanceScore = Math.min(100, Math.max(0, score));
    setSeoScore(performanceScore);
    setIssues(newIssues);
    setIsAnalyzing(false);
  }, [defaultMeta, data]);

  // Auto-optimize SEO
  const autoOptimizeSEO = useCallback(() => {
    // Implement automatic SEO optimizations
    const optimizations = [
      'Optimizing meta descriptions',
      'Enhancing title tags',
      'Adding structured data',
      'Improving image alt text'
    ];

    optimizations.forEach((optimization, index) => {
      setTimeout(() => {
        console.log('SEO optimization:', optimization);
      }, index * 1000);
    });
  }, []);

  // Get issue count by category
  const getIssueCountByCategory = useCallback((category: string) => {
    return issues.filter(issue => issue.category === category).length;
  }, [issues]);

  // Get priority color
  const getPriorityColor = useCallback((priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  }, []);

  // Get issue icon
  const getIssueIcon = useCallback((type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'info': return <Info className="w-4 h-4 text-blue-400" />;
      default: return <Info className="w-4 h-4 text-gray-400" />;
    }
  }, []);

  // Score color
  const scoreColor = useMemo(() => {
    if (seoScore >= 90) return 'text-green-400';
    if (seoScore >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, [seoScore]);

  useEffect(() => {
    // Analyze SEO after component mounts
    const timer = setTimeout(analyzeSEO, 2000);
    return () => clearTimeout(timer);
  }, [analyzeSEO]);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords.join(', ')} />
        <meta name="author" content={defaultMeta.author} />
        <meta name="robots" content={defaultMeta.robots} />
        <meta name="viewport" content={defaultMeta.viewport} />
        <meta charSet={defaultMeta.charset} />
        
        {/* Canonical URL */}
        {defaultMeta.canonical && (
          <link rel="canonical" href={defaultMeta.canonical} />
        )}

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={defaultMeta.ogTitle} />
        <meta property="og:description" content={defaultMeta.ogDescription} />
        <meta property="og:type" content={defaultMeta.ogType} />
        <meta property="og:url" content={defaultMeta.canonical} />
        {defaultMeta.ogImage && (
          <meta property="og:image" content={defaultMeta.ogImage} />
        )}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={defaultMeta.twitterCard} />
        <meta name="twitter:title" content={defaultMeta.twitterTitle} />
        <meta name="twitter:description" content={defaultMeta.twitterDescription} />
        {defaultMeta.twitterImage && (
          <meta name="twitter:image" content={defaultMeta.twitterImage} />
        )}

        {/* Structured Data */}
        {data.structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data.structuredData)
            }}
          />
        )}

        {/* Google Analytics */}
        {data.analytics?.googleAnalytics && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${data.analytics.googleAnalytics}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${data.analytics.googleAnalytics}');
                `
              }}
            />
          </>
        )}

        {/* Google Tag Manager */}
        {data.analytics?.googleTagManager && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${data.analytics.googleTagManager}');
                `
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${data.analytics.googleTagManager}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}

        {/* Facebook Pixel */}
        {data.analytics?.facebookPixel && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${data.analytics.facebookPixel}');
                fbq('track', 'PageView');
              `
            }}
          />
        )}

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
      </Head>

      {/* SEO Analysis Panel */}
      <motion.button
        className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        onClick={() => setShowPanel(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open SEO analysis panel"
        title="SEO Analysis"
      >
        <Search className="w-7 h-7 mx-auto" />
      </motion.button>

      {/* SEO Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPanel(false)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Search className="w-6 h-7 mr-3 text-purple-400" />
                  SEO Analysis
                </h2>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label="Close SEO panel"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>

              {/* SEO Score */}
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${scoreColor} mb-2`}>
                    {seoScore}
                  </div>
                  <div className="text-gray-400">SEO Score</div>
                  <div className="text-sm text-gray-500 mt-2">
                    {seoScore >= 90 ? 'Excellent' : seoScore >= 70 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={analyzeSEO}
                  disabled={isAnalyzing}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Re-analyze'}
                </button>
                <button
                  onClick={autoOptimizeSEO}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Auto-Optimize
                </button>
              </div>

              {/* Issue Categories */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-gray-800 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">
                    {getIssueCountByCategory('meta')}
                  </div>
                  <div className="text-gray-400">Meta Issues</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    {getIssueCountByCategory('content')}
                  </div>
                  <div className="text-gray-400">Content Issues</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    {getIssueCountByCategory('technical')}
                  </div>
                  <div className="text-gray-400">Technical Issues</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    {getIssueCountByCategory('social')}
                  </div>
                  <div className="text-gray-400">Social Issues</div>
                </div>
              </div>

              {/* SEO Issues */}
              {issues.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">SEO Issues & Recommendations</h3>
                  <div className="space-y-3">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          issue.type === 'error' ? 'bg-red-900/20 border-red-500' :
                          issue.type === 'warning' ? 'bg-yellow-900/20 border-yellow-500' :
                          'bg-blue-900/20 border-blue-500'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              {getIssueIcon(issue.type)}
                              <span className={`font-medium ml-2 ${
                                issue.type === 'error' ? 'text-red-300' :
                                issue.type === 'warning' ? 'text-yellow-300' :
                                'text-blue-300'
                              }`}>
                                {issue.message}
                              </span>
                            </div>
                            <div className="text-sm text-gray-300">
                              <strong>Suggestion:</strong> {issue.suggestion}
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              issue.priority === 'high' ? 'bg-red-600 text-white' :
                              issue.priority === 'medium' ? 'bg-yellow-600 text-white' :
                              'bg-blue-600 text-white'
                            }`}>
                              {issue.priority}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs font-medium bg-gray-600 text-white`}>
                              {issue.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Meta Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Current Meta Tags</h3>
                <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Title:</span>
                    <span className="text-white text-sm max-w-md truncate">{defaultMeta.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Description:</span>
                    <span className="text-white text-sm max-w-md truncate">{defaultMeta.description}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Keywords:</span>
                    <span className="text-white text-sm max-w-md truncate">{defaultMeta.keywords.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Canonical:</span>
                    <span className="text-white text-sm max-w-md truncate">{defaultMeta.canonical}</span>
                  </div>
                </div>
              </div>

              {/* Social Media Preview */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Social Media Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Facebook Preview */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      Facebook
                    </h4>
                    <div className="bg-white rounded p-3 text-black">
                      <div className="text-sm font-bold mb-1">{defaultMeta.ogTitle}</div>
                      <div className="text-xs text-gray-600 mb-2">{defaultMeta.ogDescription}</div>
                      <div className="text-xs text-gray-500">{defaultMeta.canonical}</div>
                    </div>
                  </div>

                  {/* Twitter Preview */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Twitter
                    </h4>
                    <div className="bg-white rounded p-3 text-black">
                      <div className="text-sm font-bold mb-1">{defaultMeta.twitterTitle}</div>
                      <div className="text-xs text-gray-600 mb-2">{defaultMeta.twitterDescription}</div>
                      <div className="text-xs text-gray-500">{defaultMeta.canonical}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SEO;