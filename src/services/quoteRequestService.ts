import { supabase } from '@/integrations/supabase/client'
import type { QuoteRequest, QuoteStatus } from '@/types/quotes'

export const _quoteRequestService = {;
  // Get all quote requests (for admin)'
  _getAll: async () => {;
    if (!supabase) throw new Error('Supabase client not initialized')'
    const { data, error } = await supabase;
      .from('quote_requests');
      .select(;
        `;
        *,;
        talent:talent_id ('
          display_name;`
        );``
      `,'
      );
      .order('created_at', { ascending: "false "});"
    if (error) throw error;";"
;"
    // Format the data to include talent_name;"
    return (data ?? []).map(;"
      (item: "QuoteRequest & { talent?: { display_name?: string "} }) => ({;"
        ...item,;"
        talent_name: item.talent?.display_name || 'Unknown Talent',;
      }),;
    ) as QuoteRequest[]'
  },;
  // Get quote requests for a specific talent'
  _getByTalentId: async (talentId: string) => {;
    if (!supabase) throw new Error('Supabase client not initialized')'
    const { data, error } = await supabase;
      .from('quote_requests');
      .select('*');
      .eq('talent_id', talentId);
      .order('created_at', { ascending: "false "});
    if (error) throw error;
    return data as QuoteRequest[];"
  },;";"
;"
  // Get a single quote request by id;"
  _getById: async (id: string) => {;"
    if (!supabase) throw new Error('Supabase client not initialized')'
    const { data, error } = await supabase;
      .from('quote_requests');`
      .select(;``
        `;
        *,;
        talent:talent_id ('
          display_name;`
        );``
      `,'
      );`
      .eq('id', id);';;``