import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import {logErrorToProduction} from '@/utils/productionLogger';


interface PricingSuggestionAnalytics {
  totalSuggestions: number;
  acceptanceRate: number;
  averagePriceGap: number;
  suggestionsByCategory: { category: string; count: number; acceptanceRate: number }[];
  recentSuggestions: {
    id: string;
    userId: string;
    suggestedMin: number;
    suggestedMax: number;
    actualValue?: number;
    accepted: boolean;
    createdAt: string;
    type: 'client' | 'talent';
  }[];
  isLoading: boolean;
  error: string | null;
}

export function usePricingSuggestionAnalytics(days = 30) {
  const [analytics, setAnalytics] = useState<PricingSuggestionAnalytics>({
    totalSuggestions: 0,
    acceptanceRate: 0,
    averagePriceGap: 0,
    suggestionsByCategory: [],
    recentSuggestions: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
        const { data, error } = await supabase
          .from('pricing_suggestions')
          .select('*')
          .gte('created_at', since);

        if (error) throw error;

        const totalSuggestions = data.length;
        const accepted = data.filter((d: any) => d.accepted).length;
        const acceptanceRate = totalSuggestions ? accepted / totalSuggestions : 0;

        const gaps = data
          .filter((d: any) => d.actual_value !== null && d.actual_value !== undefined)
          .map((d: any) => Math.abs((d.actual_value as number) - ((d.suggested_min + d.suggested_max) / 2)));
        const averagePriceGap = gaps.length ? gaps.reduce((a: number, b: number) => a + b, 0) / gaps.length : 0;

        const categoryMap: Record<string, { count: number; accepted: number }> = {};
        data.forEach((d: any) => {
          const cat = (d as any).category || 'other';
          if (!categoryMap[cat]) categoryMap[cat] = { count: 0, accepted: 0 };
          categoryMap[cat].count += 1;
          if (d.accepted) categoryMap[cat].accepted += 1;
        });
        const suggestionsByCategory = Object.entries(categoryMap).map(([category, val]) => ({
          category,
          count: val.count,
          acceptanceRate: val.count ? val.accepted / val.count : 0
        }));

        const recentSuggestions = data
          .sort((a: any, b: any) => (b.created_at as string).localeCompare(a.created_at as string))
          .slice(0, 10)
          .map((d: any) => ({
            id: d.id as string,
            userId: d.user_id as string,
            suggestedMin: d.suggested_min as number,
            suggestedMax: d.suggested_max as number,
            actualValue: d.actual_value as number | undefined,
            accepted: d.accepted as boolean,
            createdAt: d.created_at as string,
            type: d.suggestion_type as 'client' | 'talent'
          }));

        setAnalytics({
          totalSuggestions,
          acceptanceRate,
          averagePriceGap,
          suggestionsByCategory,
          recentSuggestions,
          isLoading: false,
          error: null
        });
      } catch (error) {
        logErrorToProduction('Error fetching pricing suggestion analytics:', { data: error });
        setAnalytics({
          ...analytics,
          isLoading: false,
          error: "Failed to load pricing analytics data."
        });
      }
    };

    fetchAnalytics();
  }, [days]);

  return analytics;
}