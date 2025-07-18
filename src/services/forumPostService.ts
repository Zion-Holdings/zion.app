<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client'
import type { ForumPost } from '@/types/community'
import { logErrorToProduction } from '@/utils/productionLogger;;
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
=======
import { supabase } from '@/integrations/supabase/client;'';
import type { ForumPost } from '@/types/community;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;'';
export async function fetchPostsByCategory(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  categoryId: "string",;";";""
  cursor?: string, // Cursor is now a string (e.g., ISO timestamp);";";";""
  limit = 20, // Default limit;";";";";""
): Promise<{ posts: "ForumPost[]; nextCursor: string | null "}> {;";";";";""
  if (!supabase) throw new Error('Supabase client not initialized');''
  let query = supabase;;
    .from('forum_posts');;'
    .select('*');;'
    .eq('category_id', categoryId);;'
    .order('created_at', { ascending: "false "}) // Assuming newest first;""
    .limit(limit);";""
;";";""
  if (cursor) {;";";";""
    // If created_at is a timestamp, we fetch posts older than the cursor;";";";";""
    query = query.lt('created_at', cursor);'
  };''
;
  const { data, error } = await query;
;''
  if (error) {;;
    logErrorToProduction('Error fetching posts by category:', { data: "error "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    throw new Error(error.message);
  };
  const posts = (data as ForumPost[]) || [];
  // The next cursor will be the `createdAt` of the last post in the current batch.;
  // If posts array is empty or shorter than limit, it means no more posts.;
  const nextCursor: unknown =;
    posts.length === limit && posts.length > 0;
      ? (posts[posts.length - 1]?.createdAt ?? null);
<<<<<<< HEAD
      : null;"
;";"
  return { posts, nextCursor };"
};"
"
}"
}";"
}"
}"
=======
      : null;""
;";""
  return { posts, nextCursor };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
