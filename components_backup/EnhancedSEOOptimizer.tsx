import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { 
  Search, Globe, Share2, TrendingUp, 
  Eye, Users, BarChart3, Target,
  CheckCircle, AlertTriangle, Info, X
} from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
  structuredData: any;
  socialMedia: {
    twitter: {
      card: string;
      site: string;
      creator: string;
    };
    facebook: {
      appId: string;
      type: string;
    };
  };
}

interface SEOAnalysis {
  score: number;
  issues: string[];
  recommendations: string[];
  metaTags: {
    title: boolean;
    description: boolean;
    keywords: boolean;
    ogImage: boolean;
    canonical: boolean;
    structuredData: boolean;
  };
}

const EnhancedSEOOptimizer: React.FC<{ seoData: SEOData }> = ({ seoData }) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis>({
    score: 0,
    issues: [],
    recommendations: [],
    metaTags: {
      title: false,
      description: false,
      keywords: false,
      ogImage: false,
      canonical: false,
      structuredData: false
    }
  });

  const [showAnalysis, setShowAnalysis] = useState(false);

  useEffect(() => {
    analyzeSEO();
  }, [seoData]);

  const analyzeSEO = () => {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check title
    if (seoData.title.length < 30 || seoData.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
      score -= 15;
    } else {
      recommendations.push('Title length is optimal');
    }

    // Check description
    if (seoData.description.length < 120 || seoData.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      score -= 15;
    } else {
      recommendations.push('Description length is optimal');
    }

    // Check keywords
    if (seoData.keywords.length < 3) {
      issues.push('Include at least 3-5 relevant keywords');
      score -= 10;
    } else {
      recommendations.push('Keywords are well defined');
    }

    // Check OG image
    if (!seoData.ogImage) {
      issues.push('Open Graph image is missing');
      score -= 10;
    } else {
      recommendations.push('Open Graph image is present');
    }

    // Check canonical URL
    if (!seoData.canonicalUrl) {
      issues.push('Canonical URL is missing');
      score -= 10;
    } else {
      recommendations.push('Canonical URL is present');
    }

    // Check structured data
    if (!seoData.structuredData) {
      issues.push('Structured data is missing');
      score -= 20;
    } else {
      recommendations.push('Structured data is present');
    }

    // Additional recommendations
    if (seoData.title.includes(seoData.keywords[0])) {
      recommendations.push('Primary keyword is in title');
    } else {
      issues.push('Primary keyword should be in title');
      score -= 5;
    }

    if (seoData.description.includes(seoData.keywords[0])) {
      recommendations.push('Primary keyword is in description');
    } else {
      issues.push('Primary keyword should be in description');
      score -= 5;
    }

    setAnalysis({
      score: Math.max(0, score),
      issues,
      recommendations,
      metaTags: {
        title: seoData.title.length >= 30 && seoData.title.length <= 60,
        description: seoData.description.length >= 120 && seoData.description.length <= 160,
        keywords: seoData.keywords.length >= 3,
        ogImage: !!seoData.ogImage,
        canonical: !!seoData.canonicalUrl,
        structuredData: !!seoData.structuredData
      }
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreGrade = (score: number) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <>
      {/* SEO Analysis Button */}
      <button
        onClick={() => setShowAnalysis(true)}
        className="fixed bottom-36 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        aria-label="Open SEO analysis"
      >
        <Search className="w-7 h-7 mx-auto" />
      </button>

      {/* SEO Analysis Panel */}
      {showAnalysis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                SEO Analysis
              </h2>
              <button
                onClick={() => setShowAnalysis(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg"
                aria-label="Close SEO analysis"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SEO Score */}
            <div className="mb-6 p-4 bg-gray-800 rounded-xl border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">SEO Score</h3>
                  <p className="text-gray-400 text-sm">Based on best practices and optimization</p>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getScoreColor(analysis.score)}`}>
                    {getScoreGrade(analysis.score)}
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}
                  </div>
                  <div className="text-sm text-gray-400">out of 100</div>
                </div>
              </div>
            </div>

            {/* Meta Tags Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-400" />
                  Meta Tags Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Title</span>
                    {analysis.metaTags.title ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Description</span>
                    {analysis.metaTags.description ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Keywords</span>
                    {analysis.metaTags.keywords ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">OG Image</span>
                    {analysis.metaTags.ogImage ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Canonical</span>
                    {analysis.metaTags.canonical ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Structured Data</span>
                    {analysis.metaTags.structuredData ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  Current SEO Data
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-300">Title:</span>
                    <p className="text-white font-mono text-xs break-words">
                      {seoData.title}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-300">Description:</span>
                    <p className="text-white font-mono text-xs break-words">
                      {seoData.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-300">Keywords:</span>
                    <p className="text-white font-mono text-xs">
                      {seoData.keywords.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Issues and Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Issues Found
                </h3>
                <div className="space-y-2">
                  {analysis.issues.length > 0 ? (
                    analysis.issues.map((issue, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-red-300 text-sm">{issue}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-green-400 text-sm">No issues found! Your SEO is optimized.</p>
                  )}
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Recommendations
                </h3>
                <div className="space-y-2">
                  {analysis.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-300 text-sm">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media Preview */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-pink-400" />
                Social Media Preview
              </h3>
              <div className="bg-white rounded-lg p-4 max-w-md">
                <div className="w-full h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
                  {seoData.ogImage ? (
                    <img 
                      src={seoData.ogImage} 
                      alt="Social media preview" 
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-500">No image</span>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                  {seoData.title}
                </h4>
                <p className="text-gray-600 text-xs line-clamp-2">
                  {seoData.description}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  ziontechgroup.com
                </p>
              </div>
            </div>

            {/* Action Items */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-400" />
                Action Items
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                {analysis.score < 90 && (
                  <>
                    <p>• Fix identified issues to improve SEO score</p>
                    <p>• Optimize meta tags for better search visibility</p>
                    <p>• Ensure structured data is properly implemented</p>
                    <p>• Monitor Core Web Vitals for performance</p>
                  </>
                )}
                {analysis.score >= 90 && (
                  <p className="text-green-400">Excellent SEO optimization! Continue monitoring and stay updated with best practices.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEO Meta Tags */}
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content={seoData.socialMedia.twitter.card} />
        <meta name="twitter:site" content={seoData.socialMedia.twitter.site} />
        <meta name="twitter:creator" content={seoData.socialMedia.twitter.creator} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Facebook */}
        <meta property="fb:app_id" content={seoData.socialMedia.facebook.appId} />
        <meta property="og:type" content={seoData.socialMedia.facebook.type} />
        
        {/* Canonical */}
        {seoData.canonicalUrl && (
          <link rel="canonical" href={seoData.canonicalUrl} />
        )}
        
        {/* Structured Data */}
        {seoData.structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(seoData.structuredData)
            }}
          />
        )}
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.ziontechgroup.com" />
        <link rel="dns-prefetch" href="//api.ziontechgroup.com" />
      </Head>
    </>
  );
};

export default EnhancedSEOOptimizer;