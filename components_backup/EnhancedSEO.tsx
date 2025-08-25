import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, TrendingUp, BarChart3, Target, Eye, 
  Globe, Smartphone, Monitor, Zap, CheckCircle,
  AlertTriangle, Info, ExternalLink
} from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonical: string;
  structuredData: any;
}

interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  keywordDensity: number;
  imageOptimization: number;
  mobileOptimization: number;
  overallScore: number;
}

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  impact: 'high' | 'medium' | 'low';
  fix: string;
  category: 'meta' | 'content' | 'technical' | 'performance';
}

const EnhancedSEO: React.FC = () => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: 'Zion Tech Group - Revolutionary Technology Solutions',
    description: 'Experience cutting-edge AI, quantum computing, and autonomous solutions that transform businesses worldwide. From micro SAAS to enterprise infrastructure.',
    keywords: ['AI', 'technology', 'quantum computing', 'automation', 'business solutions'],
    ogImage: '/og-image.jpg',
    canonical: 'https://ziontechgroup.com',
    structuredData: {}
  });

  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Generate structured data
  const generateStructuredData = useCallback(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Revolutionary technology solutions provider specializing in AI, quantum computing, and autonomous systems.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://github.com/Zion-Holdings",
        "https://linkedin.com/company/zion-tech-group"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Business Process Automation",
              "description": "Intelligent automation for complex business processes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure & DevOps",
              "description": "Complete cloud infrastructure management with automation"
            }
          }
        ]
      }
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    return {
      organization: organizationSchema,
      website: websiteSchema
    };
  }, []);

  // Analyze SEO metrics
  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    const newIssues: SEOIssue[] = [];

    // Analyze title
    if (seoData.title.length < 30) {
      newIssues.push({
        id: 'title-short',
        type: 'warning',
        message: 'Title is too short',
        impact: 'medium',
        fix: 'Title should be between 30-60 characters',
        category: 'meta'
      });
    } else if (seoData.title.length > 60) {
      newIssues.push({
        id: 'title-long',
        type: 'warning',
        message: 'Title is too long',
        impact: 'medium',
        fix: 'Title should be between 30-60 characters',
        category: 'meta'
      });
    }

    // Analyze description
    if (seoData.description.length < 120) {
      newIssues.push({
        id: 'description-short',
        type: 'warning',
        message: 'Description is too short',
        impact: 'medium',
        fix: 'Description should be between 120-160 characters',
        category: 'meta'
      });
    } else if (seoData.description.length > 160) {
      newIssues.push({
        id: 'description-long',
        type: 'warning',
        message: 'Description is too long',
        impact: 'medium',
        fix: 'Description should be between 120-160 characters',
        category: 'meta'
      });
    }

    // Check for missing keywords
    if (seoData.keywords.length < 3) {
      newIssues.push({
        id: 'keywords-few',
        type: 'warning',
        message: 'Too few keywords',
        impact: 'low',
        fix: 'Include 3-5 relevant keywords',
        category: 'meta'
      });
    }

    // Check for missing OG image
    if (!seoData.ogImage) {
      newIssues.push({
        id: 'og-image-missing',
        type: 'error',
        message: 'Open Graph image missing',
        impact: 'high',
        fix: 'Add an OG image for social media sharing',
        category: 'meta'
      });
    }

    // Calculate metrics
    const titleLength = seoData.title.length;
    const descriptionLength = seoData.description.length;
    const keywordDensity = seoData.keywords.length;
    const imageOptimization = seoData.ogImage ? 100 : 0;
    const mobileOptimization = 95; // Assume good mobile optimization

    const overallScore = Math.round(
      (titleLength >= 30 && titleLength <= 60 ? 20 : 10) +
      (descriptionLength >= 120 && descriptionLength <= 160 ? 20 : 10) +
      (keywordDensity >= 3 ? 20 : 10) +
      (imageOptimization / 5) +
      (mobileOptimization / 5)
    );

    setMetrics({
      titleLength,
      descriptionLength,
      keywordDensity,
      imageOptimization,
      mobileOptimization,
      overallScore
    });

    setIssues(newIssues);
    setIsAnalyzing(false);
  }, [seoData]);

  // Update SEO data
  const updateSEOData = useCallback((field: keyof SEOData, value: any) => {
    setSeoData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Generate meta tags
  const generateMetaTags = useCallback(() => {
    const structuredData = generateStructuredData();
    
    return {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords.join(', '),
      ogImage: seoData.ogImage,
      canonical: seoData.canonical,
      structuredData
    };
  }, [seoData, generateStructuredData]);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  const metaTags = generateMetaTags();

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metaTags.title} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.canonical} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTags.title} />
        <meta name="twitter:description" content={metaTags.description} />
        <meta name="twitter:image" content={metaTags.ogImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={metaTags.canonical} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaTags.structuredData.organization)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaTags.structuredData.website)
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* SEO Analysis Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-20 left-20 z-50"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl max-w-sm">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-700/50">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">SEO Analysis</h3>
              <p className="text-xs text-gray-400">Performance insights</p>
            </div>
          </div>

          {/* SEO Score */}
          {metrics && (
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">SEO Score</span>
                <span className={`text-lg font-bold ${
                  metrics.overallScore >= 90 ? 'text-green-400' : 
                  metrics.overallScore >= 70 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {metrics.overallScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className={`h-3 rounded-full ${
                    metrics.overallScore >= 90 ? 'bg-green-500' : 
                    metrics.overallScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${metrics.overallScore}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          )}

          {/* Quick Metrics */}
          {metrics && (
            <div className="p-4 border-b border-gray-700/50">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Metrics</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-800/50 p-2 rounded text-center">
                  <div className="text-gray-400">Title</div>
                  <div className="text-white font-mono">{metrics.titleLength} chars</div>
                </div>
                <div className="bg-gray-800/50 p-2 rounded text-center">
                  <div className="text-gray-400">Description</div>
                  <div className="text-white font-mono">{metrics.descriptionLength} chars</div>
                </div>
                <div className="bg-gray-800/50 p-2 rounded text-center">
                  <div className="text-gray-400">Keywords</div>
                  <div className="text-white font-mono">{metrics.keywordDensity}</div>
                </div>
                <div className="bg-gray-800/50 p-2 rounded text-center">
                  <div className="text-gray-400">Images</div>
                  <div className="text-white font-mono">{metrics.imageOptimization}%</div>
                </div>
              </div>
            </div>
          )}

          {/* Issues List */}
          {issues.length > 0 && (
            <div className="p-4 border-b border-gray-700/50">
              <h4 className="text-sm font-medium text-gray-300 mb-3">
                Found {issues.length} issue{issues.length !== 1 ? 's' : ''}
              </h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {issues.slice(0, 3).map((issue) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-2 rounded-lg border text-xs ${
                      issue.type === 'error' ? 'border-red-500/30 bg-red-500/10' :
                      issue.type === 'warning' ? 'border-yellow-500/30 bg-yellow-500/10' :
                      'border-blue-500/30 bg-blue-500/10'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Info className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white mb-1">{issue.message}</div>
                        <div className="text-gray-400">{issue.fix}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {issues.length > 3 && (
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-400">
                    +{issues.length - 3} more issues
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="p-4">
            <button
              onClick={analyzeSEO}
              disabled={isAnalyzing}
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Analyzing...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Re-analyze SEO
                </div>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-800/30 rounded-b-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                <span>Google</span>
                <span>•</span>
                <span>Bing</span>
                <span>•</span>
                <span>Social</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default EnhancedSEO;