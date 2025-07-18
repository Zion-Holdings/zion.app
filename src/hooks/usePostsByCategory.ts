<<<<<<< HEAD
import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPostsByCategory } from '@/services/forumPostService'
import type { ForumPost } from '@/types/community;;
export function usePostsByCategory(): unknown {): unknown {): unknown {): unknown {): unknown {slug?: string, page = 1) {'
  return useSuspenseQuery({;
    queryKey: ['posts', 'category', slug, page],;
    queryFn: () =>;
      slug'
        ? fetchPostsByCategory(slug, page.toString());
        : Promise.resolve({ posts: "[] as ForumPost[] "}),;"
    initialData: "{ posts: [] as ForumPost[] "},;"
    select: (data) => data.posts,;"
  }) as {;"
    data: "ForumPost[] | undefined;"
    isPending: boolean;,"
    error: "unknown;"
  };"
};"
"
}"
}";"
}"
}"
=======
import { useSuspenseQuery } from '@tanstack/react-query;'';
import { fetchPostsByCategory } from '@/services/forumPostService;'';
import type { ForumPost } from '@/types/community;'
;
export function usePostsByCategory(): unknown {): unknown {): unknown {): unknown {): unknown {slug?: string, page = 1) {;''
  return useSuspenseQuery({;;
    queryKey: ['posts', 'category', slug, page],;'
    queryFn: () =>;
      slug;''
        ? fetchPostsByCategory(slug, page.toString());;
        : Promise.resolve({ posts: "[] as ForumPost[] "}),;";";";";""
    initialData: "{ posts: [] as ForumPost[] "},;";";";";""
    select: "(data) => data.posts",;";";";""
  }) as {;";";";";""
    data: "ForumPost[] | undefined;",;";";";";""
    isPending: "boolean;",";";";";""
    error: "unknown;";";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
