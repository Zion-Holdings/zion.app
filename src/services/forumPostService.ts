import { supabase } from '@/integrations/supabase/client';
import { ForumPost } from '@/types/community';

function mapForumPost(row: any): ForumPost {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    authorId: row.author_id,
    authorName: row.author_name,
    authorAvatar: row.author_avatar ?? undefined,
    authorRole: row.author_role ?? undefined,
    categoryId: row.category_id,
    tags: row.tags ?? [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    upvotes: row.upvotes,
    downvotes: row.downvotes,
    replyCount: row.reply_count,
    isAnswered: row.is_answered ?? undefined,
    isPinned: row.is_pinned ?? undefined,
    isLocked: row.is_locked ?? undefined,
    isFeatured: row.is_featured ?? undefined,
  };
}

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

  const posts = (data as any[] | null)?.map(mapForumPost) ?? [];
  // The next cursor will be the 'createdAt' of the last post in the current batch
  // If posts array is empty or shorter than limit, it means no more posts.
  const nextCursor = posts.length === limit && posts.length > 0 ? posts[posts.length - 1].createdAt : null;

  return { posts, nextCursor };
}
