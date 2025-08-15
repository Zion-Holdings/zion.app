import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ReportUpdate {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  url: string;
}

interface DynamicReportLinksProps {
  category?: string;
  limit?: number;
  showCategory?: boolean;
  className?: string;
}

export default function DynamicReportLinks({ 
  category, 
  limit = 6, 
  showCategory = true,
  className = '' 
}: DynamicReportLinksProps) {
  const [reports, setReports] = useState<ReportUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Fetch from the reports directory or API
        const response = await fetch('/api/reports/updates');
        if (response.ok) {
          const data = await response.json();
          let filteredReports = data.reports || [];
          
          if (category) {
            filteredReports = filteredReports.filter(
              (report: ReportUpdate) => report.category === category
            );
          }
          
          // Sort by date and limit results
          filteredReports = filteredReports
            .sort((a: ReportUpdate, b: ReportUpdate) => 
              new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .slice(0, limit);
          
          setReports(filteredReports);
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
        // Fallback to sample data
        setReports(getSampleReports());
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [category, limit]);

  const getSampleReports = (): ReportUpdate[] => {
    return [
      {
        id: '1',
        title: 'AI Automation Trends Q4 2024',
        date: '2024-12-15',
        category: 'AI',
        summary: 'Latest developments in autonomous AI systems and cloud automation',
        url: '/reports/updates/ai-automation-trends-q4-2024'
      },
      {
        id: '2',
        title: 'Cloud Infrastructure Optimization Guide',
        date: '2024-12-14',
        category: 'Cloud',
        summary: 'Best practices for optimizing cloud costs and performance',
        url: '/reports/updates/cloud-infrastructure-optimization-guide'
      },
      {
        id: '3',
        title: 'Next.js Performance Optimization',
        date: '2024-12-13',
        category: 'Development',
        summary: 'Advanced techniques for improving Next.js application performance',
        url: '/reports/updates/nextjs-performance-optimization'
      }
    ].slice(0, limit);
  };

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="bg-slate-800/30 rounded-lg p-4">
              <div className="h-4 bg-slate-700 rounded mb-2"></div>
              <div className="h-3 bg-slate-700 rounded mb-2"></div>
              <div className="h-3 bg-slate-700 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-white/60">No reports available at the moment.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report) => (
          <Link
            key={report.id}
            href={report.url}
            className="group bg-slate-800/30 border border-white/10 rounded-lg p-4 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              {showCategory && (
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                  {report.category}
                </span>
              )}
              <span className="text-xs text-white/40">
                {new Date(report.date).toLocaleDateString()}
              </span>
            </div>
            
            <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {report.title}
            </h3>
            
            <p className="text-sm text-white/70 line-clamp-3">
              {report.summary}
            </p>
            
            <div className="mt-3 flex items-center text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
              Read More
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}