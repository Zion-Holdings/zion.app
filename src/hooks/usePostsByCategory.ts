import { useState, useEffect } from 'react';
import { ForumPost } from '@/types/community';

export function usePostsByCategory(categoryId: string) {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
              const mockPosts: ForumPost[] = [
          {
            id: '1',
            title: 'Sample Post 1',
            content: 'This is a sample post content...',
            author: {
              id: '1',
              name: 'John Doe',
              avatar: '/avatars/john.jpg',
              role: 'user'
            },
            authorId: '1',
            category: categoryId,
            categoryId: categoryId,
            tags: ['sample', 'post'],
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z',
            replies: [],
            likes: 5,
            views: 25,
            upvotes: 5,
            downvotes: 0,
            replyCount: 0,
            isPinned: false,
            isLocked: false,
            isAnswered: false,
            authorName: 'John Doe',
            authorAvatar: '/avatars/john.jpg',
            authorRole: 'user'
          }
        ];
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, [categoryId]);

  return { posts, loading };
}