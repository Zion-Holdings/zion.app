import { supabase } from '@/integrations/supabase/client';
import { ForumPost } from '@/types/community';

export async function fetchPostsByCategory(
  categoryId: string,
  page = 1,
  limit = 20
): Promise<{ posts: ForumPost[] }> {
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .eq('category_id', categoryId)
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    throw new Error(error.message);
  }

  return { posts: (data as ForumPost[]) || [] };
}
