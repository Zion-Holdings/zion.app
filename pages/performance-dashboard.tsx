import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  target: number;
}

interface PagePerformance {
  path: string;
  internalLinks: number;
  bounceRate: number;
  timeOnPage: number;
  clickThroughRate: number;
  seoScore: number;
}

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [pagePerformance, setPagePerformance] = useState<PagePerformance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for performance data
    const fetchPerformanceData = async () => {
      try {
        // In production, this would fetch from your analytics API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockMetrics: PerformanceMetric[] = [
          {
            name: 'Internal Link Density',
            value: 12.5,
            unit: 'links/page',
            change: 2.3,
            trend: 'up',
            target: 15.0
          },
          {
            name: 'Bounce Rate',
            value: 28.4,
            unit: '%',
            change: -5.2,
            trend: 'down',
            target: 25.0
          },
          {
            name: 'Time on Site',
            value: 4.2,
            unit: 'minutes',
            change: 0.8,
            trend: 'up',
            target: 5.0
          },
          {
            name: 'Page Views per Session',
            value: 3.8,
            unit: 'pages',
            change: 0.5,
            trend: 'up',
            target: 4.5
          },
          {
            name: 'Internal Link CTR',
            value: 18.7,
            unit: '%',
            change: 3.1,
            trend: 'up',
            target: 20.0
          },
          {
            name: 'SEO Score',
            value: 87.3,
            unit: '/100',
            change: 2.8,
            trend: 'up',
            target: 90.0
          }
        ];

        const mockPagePerformance: PagePerformance[] = [
          {
            path: '/',
            internalLinks: 18,
            bounceRate: 22.1,
            timeOnPage: 5.2,
            clickThroughRate: 24.3,
            seoScore: 92.1
          },
          {
            path: '/automation',
            internalLinks: 15,
            bounceRate: 18.7,
            timeOnPage: 6.8,
            clickThroughRate: 31.2,
            seoScore: 89.5
          },
          {
            path: '/reports',
            internalLinks: 12,
            bounceRate: 25.3,
            timeOnPage: 4.1,
            clickThroughRate: 19.8,
            seoScore: 85.2
          },
          {
            path: '/explore',
            internalLinks: 20,
            bounceRate: 15.2,
            timeOnPage: 7.3,
            clickThroughRate: 35.7,
            seoScore: 94.8
          },
          {
            path: '/component-library',
            internalLinks: 14,
            bounceRate: 21.4,
            timeOnPage: 5.9,
            clickThroughRate: 22.1,
            seoScore: 88.3
          }
        ];

        setMetrics(mockMetrics);
        setPagePerformance(mockPagePerformance);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      case 'stable':
        return '→';
      default:
        return '→';
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      case 'stable':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  const getPerformanceColor = (score: number, target: number) => {
    const percentage = (score / target) * 100;
    if (percentage >= 90) return 'text-green-400';
    if (percentage >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-800 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-slate-800/30 rounded-lg p-6">
                  <div className="h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="h-8 bg-slate-700 rounded mb-2"></div>
                  <div className="h-3 bg-slate-700 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Performance Dashboard | Zion Tech Group</title>
        <meta name="description" content="Monitor internal linking performance, user engagement, and SEO metrics in real-time." />
        <meta property="og:title" content="Performance Dashboard" />
        <meta property="og:description" content="Real-time performance monitoring for internal linking and user engagement." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Performance Dashboard</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Monitor internal linking performance, user engagement, and SEO metrics in real-time
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link 
            href="/site-health"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            🏥 Site Health
          </Link>
          <Link 
            href="/reports"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            📊 Reports
          </Link>
          <Link 
            href="/automation"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            🤖 Automation
          </Link>
        </div>

        {/* Key Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div key={metric.name} className="bg-slate-800/30 border border-white/10 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{metric.name}</h3>
                  <span className={`text-2xl ${getTrendColor(metric.trend)}`}>
                    {getTrendIcon(metric.trend)}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="text-3xl font-bold text-white">
                    {metric.value}
                  </span>
                  <span className="text-white/60 ml-2">{metric.unit}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${getTrendColor(metric.trend)}`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                  <span className="text-sm text-white/40">
                    Target: {metric.target}{metric.unit}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="mt-3 bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Page Performance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Page Performance Analysis</h2>
          <div className="bg-slate-800/30 border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Internal Links
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Bounce Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Time on Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      CTR
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      SEO Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {pagePerformance.map((page) => (
                    <tr key={page.path} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link 
                          href={page.path}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {page.path}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {page.internalLinks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {page.bounceRate}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {page.timeOnPage}m
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {page.clickThroughRate}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={getPerformanceColor(page.seoScore, 100)}>
                          {page.seoScore}/100
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Performance Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">✅ Strengths</h3>
              <ul className="space-y-2 text-white/80">
                <li>• High internal link density on homepage</li>
                <li>• Strong engagement on automation page</li>
                <li>• Excellent SEO scores across key pages</li>
                <li>• Low bounce rates on feature pages</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">⚠️ Areas for Improvement</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Increase internal links on reports page</li>
                <li>• Improve time on page for component library</li>
                <li>• Enhance CTR on secondary pages</li>
                <li>• Optimize bounce rate on content pages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Items */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Take Action</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/analyze:links"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              🔍 Analyze Internal Links
            </Link>
            <Link 
              href="/reports"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              📊 View Detailed Reports
            </Link>
            <Link 
              href="/site-health"
              className="border border-white/20 hover:border-cyan-400/50 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-white/5"
            >
              🏥 Check Site Health
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}