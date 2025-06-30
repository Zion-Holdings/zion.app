import { SupabaseClient } from '@supabase/supabase-js';
import { ProductListing } from '@/types/listings';
import { generateRandomEquipment } from './generateRandomEquipment';
import { ALL_FEATURES, Feature } from '@/data/features';
import {logErrorToProduction} from '@/utils/productionLogger';

export async function recommendEquipment(
  userId: string,
  supabase: SupabaseClient,
  limit = 5
): Promise<ProductListing[]> {
  try {
    const { data: favorites, error } = await supabase
      .from('favorites')
      .select('item_id')
      .eq('user_id', userId)
      .eq('item_type', 'product');
    if (error) throw error;

    const ids = (favorites ?? []).map((f) => f.item_id);

    if (ids.length > 0) {
      const { data: products, error: prodErr } = await supabase
        .from('product_listings')
        .select('id, category')
        .in('id', ids);
      if (prodErr) throw prodErr;

      const categoryCounts: Record<string, number> = {};
      (products ?? []).forEach((p) => {
        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
      });

      const [topCategory] = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([cat]) => cat);

      if (topCategory) {
        const { data: recommended, error: recErr } = await supabase
          .from('product_listings')
          .select('*')
          .eq('category', topCategory)
          .limit(limit);
        if (recErr) throw recErr;
        if (recommended && recommended.length) return recommended;
      }
    }
  } catch (err) {
    logErrorToProduction('equipment recommendation error', { data: err });
  }

  // Fallback to random equipment
  return Array.from({ length: limit }, () => generateRandomEquipment());
}

export async function recommendFeatures(
  userId: string,
  supabase: SupabaseClient,
  limit = 3
): Promise<Feature[]> {
  try {
    const { data: usedEvents, error: usedErr } = await supabase
      .from('analytics_events')
      .select('metadata')
      .eq('event_type', 'feature_usage')
      .eq('user_id', userId);
    if (usedErr) throw usedErr;

    const usedFeatures = new Set<string>(
      (usedEvents ?? [])
        .map((e) => e.metadata?.feature as string)
        .filter(Boolean)
    );

    const { data: globalEvents, error: globalErr } = await supabase
      .from('analytics_events')
      .select('metadata')
      .eq('event_type', 'feature_usage');
    if (globalErr) throw globalErr;

    const counts: Record<string, number> = {};
    (globalEvents ?? []).forEach((e) => {
      const feature = e.metadata?.feature as string | undefined;
      if (feature) counts[feature] = (counts[feature] || 0) + 1;
    });

    const sorted = Object.keys(counts)
      .sort((a, b) => (counts[b] || 0) - (counts[a] || 0))
      .filter((f) => !usedFeatures.has(f));

    const recommendedIds = sorted.slice(0, limit);
    if (recommendedIds.length > 0) {
      return ALL_FEATURES.filter((f) => recommendedIds.includes(f.id));
    }

    const fallback = ALL_FEATURES.filter((f) => !usedFeatures.has(f.id));
    return fallback.slice(0, limit);
  } catch (err) {
    logErrorToProduction('feature recommendation error', { data: err });
  }

  return ALL_FEATURES.slice(0, limit);
}
