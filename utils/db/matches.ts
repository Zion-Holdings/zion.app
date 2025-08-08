import { createClient } from '@supabase/supabase-js';
import { SuggestedMatch } from '../types/job';

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !serviceKey) {
    throw new Error('Supabase env not configured');
  }
  return createClient(url, serviceKey);
}

export async function storeSuggestedMatches(jobId: string, matches: { slug: string; score: number }[]) {
  const supabase = getAdminClient();
  const rows: SuggestedMatch[] = matches.map(m => ({
    jobId,
    talentSlug: m.slug,
    score: m.score,
    createdAt: new Date().toISOString(),
  }));
  const { error } = await supabase.from('suggested_matches').insert(rows);
  if (error) throw error;
}

export async function getSuggestedMatches(jobId: string) {
  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from('suggested_matches')
    .select('*')
    .eq('jobId', jobId)
    .order('score', { ascending: false })
    .limit(5);
  if (error) throw error;
  return data as SuggestedMatch[];
}