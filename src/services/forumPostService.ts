import { supabase } from '@/integrations/supabase/client';
import { ForumPost } from '@/types/community';

export async function fetchPostsByCategory(
  categoryId: string,
  cursor?: string, // Cursor is now a string (e.g., ISO timestamp)
  limit = 20 // Default limit
): Promise<{ posts: ForumPost[]; nextCursor: string | null }> {
  let query = supabase
    .from('forum_posts')
    .select('*')
    .eq('category_id', categoryId)
    .order('created_at', { ascending: false }) // Assuming newest first
    .limit(limit);

  if (cursor) {
    // If created_at is a timestamp, we fetch posts older than the cursor
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching posts by category:', error);
    throw new Error(error.message);
  }

  const posts = (data as ForumPost[]) || [];
  // The next cursor will be the 'created_at' of the last post in the current batch
  // If posts array is empty or shorter than limit, it means no more posts.
  const nextCursor = posts.length === limit && posts.length > 0 ? posts[posts.length - 1].created_at : null;

  return { posts, nextCursor };
}
