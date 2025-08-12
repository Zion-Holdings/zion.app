import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AnalyticsContainer } from "@/components/analytics/AnalyticsContainer";
import { AnalyticsSummary } from "@/components/analytics/AnalyticsSummary";
import { PageViewsTable } from "@/components/analytics/PageViewsTable";
import { UserBehaviorStats } from "@/components/analytics/UserBehaviorStats";
import { PageViewsChart } from "@/components/analytics/PageViewsChart";
import { ConversionAnalysisChart } from "@/components/analytics/ConversionAnalysisChart";
import { FeatureUsageChart } from "@/components/analytics/FeatureUsageChart";
import { ExportPanel } from "@/components/analytics/ExportPanel";
import {logErrorToProduction} from '@/utils/productionLogger';

export default function Analytics() {

  const [timeRange, setTimeRange] = useState('30d');
  
  const { data: pageViewTrends } = useQuery({
    queryKey: ['page-views-trend', timeRange],
    queryFn: async () => {
      // Get daily page views for trend chart
      const days = parseInt(timeRange.replace('d', ''));
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      
      const { data, error } = await supabase
        .from('analytics_events')
        .select('created_at, path')
        .eq('event_type', 'page_view')
        .gte('created_at', startDate.toISOString());
        
      if (error) throw error;
      
      // Group by date
      const viewsByDate: Record<string, { date: string; views: number }> = {};
      data?.forEach((item: any) => {
        const date = new Date(item.created_at).toISOString().split('T')[0] || 'unknown';
        if (!viewsByDate[date]) viewsByDate[date] = { date: date, views: 0 };
        viewsByDate[date].views++;
      });
      
      // Fill in missing dates
      const result: { date: string; views: number }[] = [];
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0] || 'unknown';
        
        if (viewsByDate[dateStr]) {
          result.push(viewsByDate[dateStr]);
        } else {
          result.push({ date: dateStr, views: 0 });
        }
      }
      
      return result.sort((a, b) => a.date.localeCompare(b.date));
    }
  });
  
  const { data: conversionData } = useQuery({
    queryKey: ['conversion-data', timeRange],
    queryFn: async () => {
      const days = parseInt(timeRange.replace('d', ''));
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      
      const { data, error } = await supabase
        .from('analytics_events')
        .select('created_at, metadata')
        .eq('event_type', 'conversion')
        .gte('created_at', startDate.toISOString());
        
      if (error) throw error;
      
      // Group by conversion type and date
      const conversionsByType: Record<string, Record<string, number>> = {};
      data?.forEach((item: any) => {
        const date = new Date(item.created_at).toISOString().split('T')[0] || 'unknown';
        const conversionType = item.metadata?.conversionType || 'unknown';
        
        if (!conversionsByType[conversionType]) {
          conversionsByType[conversionType] = {};
        }
        
        if (!conversionsByType[conversionType][date]) {
          conversionsByType[conversionType][date] = 0;
        }
        
        conversionsByType[conversionType][date]++;
      });
      
      // Get all dates in range
      const dates: string[] = [];
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dates.push(date.toISOString().split('T')[0] || 'unknown');
      }
      dates.sort();
      
      // Format data for chart
      return dates.map(date => {
        const result: Record<string, any> = { date };
        
        Object.keys(conversionsByType).forEach(type => {
          result[type] = conversionsByType[type]?.[date] || 0;
        });
        
        return result;
      });
    }
  });

  const { data: featureUsageData } = useQuery({
    queryKey: ['feature-usage-data', timeRange],
    queryFn: async () => {
      const days = parseInt(timeRange.replace('d', ''));
      const { data, error } = await supabase.rpc('get_feature_usage_stats', {
        days_back: days,
      });

      if (error) {
        logErrorToProduction('Error fetching feature usage:', { data: error });
        // fallback query
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const { data: manual, error: manualError } = await supabase
          .from('analytics_events')
          .select('created_at, metadata')
          .eq('event_type', 'feature_usage')
          .gte('created_at', startDate.toISOString());

        if (manualError) throw manualError;

        const usageByDate: Record<string, Record<string, number>> = {};
        manual?.forEach((ev: any) => {
          const date = new Date(ev.created_at).toISOString().split('T')[0] || 'unknown';
          const feature = ev.metadata?.feature || 'unknown';
          if (!usageByDate[date]) usageByDate[date] = {};
          if (!usageByDate[date][feature]) usageByDate[date][feature] = 0;
          usageByDate[date][feature]++;
        });

        return Object.entries(usageByDate).map(([date, feats]) => ({
          date,
          ...feats,
        }));
      }

      return data || [];
    },
  });

  return (
    <AnalyticsContainer>
      <AnalyticsSummary />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PageViewsChart
          data={pageViewTrends || []}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
        <PageViewsTable />
      </div>
      
      <div className="mb-6">
        <UserBehaviorStats />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ConversionAnalysisChart
          data={conversionData || []}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
        <FeatureUsageChart
          data={featureUsageData || []}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
      </div>

      <div className="mb-6">
        <ExportPanel />
      </div>
    </AnalyticsContainer>
  );
}
