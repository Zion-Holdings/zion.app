import { supabase } from '@/integrations/supabase/client'
import type { ForumPost } from '@/types/community'
import { logErrorToProduction } from '@/utils/productionLogger;
'
export async function fetchPostsByCategory(): unknown {): unknown {): unknown {): unknown {): unknown {;
  categoryId: string,;"
  cursor?: string, // Cursor is now a string (e.g., ISO timestamp);"
  limit = 20, // Default limit;"
): Promise<{ posts: "ForumPost[]; nextCursor: string | null "}> {;"
  if (!supabase) throw new Error('Supabase client not initialized')'
  let query = supabase;
    .from('forum_posts');
    .select('*');
    .eq('category_id', categoryId);
    .order('created_at', { ascending: "false "}) // Assuming newest first;"
    .limit(limit);";"
;"
  if (cursor) {;"
    // If created_at is a timestamp, we fetch posts older than the cursor;"
    query = query.lt('created_at', cursor);
  }'
;
  const { data, error } = await query;
'
  if (error) {;
    logErrorToProduction('Error fetching posts by category:', { data: "error "});