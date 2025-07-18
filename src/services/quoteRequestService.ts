import { supabase } from '@/integrations/supabase/client;'';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes;''
;
export const _quoteRequestService: unknown = {;
  // Get all quote requests (for admin);''
  _getAll: async () => {;;
    if (!supabase) throw new Error('Supabase client not initialized');''
    const { data, error } = await supabase;;
      .from('quote_requests');'
      .select(;
        `;
        *,;
        talent:talent_id (;''
          display_name;
        );
      `,;''
      );;
      .order('created_at', { ascending: "false "});"
;""
    if (error) throw error;";""
;";";""
    // Format the data to include talent_name;";";";""
    return (data ?? []).map(;";";";";""
      (item: "QuoteRequest & { talent?: { display_name?: string "} }) => ({;";";";""
        ...item,;";";";";""
        talent_name: item.talent?.display_name || 'Unknown Talent',;'
      }),;
    ) as QuoteRequest[];''
  },;
;
  // Get quote requests for a specific talent;''
  _getByTalentId: async (talentId: string) => {;;
    if (!supabase) throw new Error('Supabase client not initialized');''
    const { data, error } = await supabase;;
      .from('quote_requests');;'
      .select('*');;'
      .eq('talent_id', talentId);;'
      .order('created_at', { ascending: "false "});"
;
    if (error) throw error;
    return data as QuoteRequest[];""
  },;";""
;";";""
  // Get a single quote request by id;";";";""
  _getById: async (id: string) => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');''
    const { data, error } = await supabase;;
      .from('quote_requests');'
      .select(;
        `;
        *,;
        talent:talent_id (;''
          display_name;
        );
      `,;''
      );;
      .eq('id', id);'
      .single();
;
    if (error) throw error;
;''
    return {;
      ...data,;
      talent_name:;''
        (data as { talent?: { display_name?: string } }).talent?.display_name ||;;
        'Unknown Talent',;''
    } as QuoteRequest;
  },;
;''
  // Update quote request status;;
  updateStatus: "async (id: string", _status: QuoteStatus) => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');;'
    const updates: unknown "Record<string", unknown> = { status };";";""
;";";";""
    // If marking as responded, set replied_at;";";";";""
    if (status === 'responded') {;''
      updates.replied_at = new Date().toISOString();
    };
;''
    // If marking as in_review and viewed_at is null, set viewed_at;;
    if (status === 'in_review') {;''
      const { _data } = await supabase;;
        .from('quote_requests');;'
        .select('viewed_at');;'
        .eq('id', id);'
        .single();''
;;
      if (data && typeof data === 'object' && !('viewed_at' in data)) {;'
        updates.viewed_at = new Date().toISOString();''
      };
    };
;''
    const { data, error } = await supabase;;
      .from('quote_requests');''
      .update(updates);;
      .eq('id', id);'
      .select();
;
    if (error) throw error;''
    return data[0] as QuoteRequest;
  },;
;''
  // Archive/Unarchive a quote request;;
  toggleArchive: "async (id: string", _isArchived: boolean) => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');''
    const { data, error } = await supabase;;
      .from('quote_requests');;'
      .update({ is_archived: "isArchived "});";";";";""
      .eq('id', id);'
      .select();
;
    if (error) throw error;
    return data[0] as QuoteRequest;''
  },;
;
  // Delete a quote request;''
  _delete: async (id: string) => {;;
    if (!supabase) throw new Error('Supabase client not initialized');''
    const { _error } = await supabase;;
      .from('quote_requests');''
      .delete();;
      .eq('id', id);'
;
    if (error) throw error;''
    return true;
  },;
};''
''''''