import * as React from 'react';
import { ForumPost } from '@/types/community';

export const usePostsByCategory = (category: string) => {
  const [posts, setPosts] = React.useState<ForumPost[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>('');

  const fetchPosts = React.useCallback(async () => {
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - in real app, this would be an API call
      const mockPosts: ForumPost[] = [
        {
          id: '1',
          title: 'Getting Started with Zion Tech',
          content: 'Welcome to the Zion Tech community! This is your first step into a world of innovation and collaboration.',
          authorName: 'Zion Team',
          authorAvatar: '/avatars/zion-team.jpg',
          authorId: 'zion-team',
          category: 'General',
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-15T10:00:00Z',
          likes: 15,
          tags: ['welcome', 'getting-started'],
          isPinned: true,
          isLocked: false,
          replies: []
        },
        {
          id: '2',
          title: 'Best Practices for AI Development',
          content: 'Share your experiences and learn from others about developing AI applications with best practices.',
          authorName: 'AI Expert',
          authorAvatar: '/avatars/ai-expert.jpg',
          authorId: 'ai-expert',
          category: 'AI Development',
          createdAt: '2024-01-14T14:30:00Z',
          updatedAt: '2024-01-14T14:30:00Z',
          likes: 23,
          tags: ['ai', 'development', 'best-practices'],
          isPinned: false,
          isLocked: false,
          replies: []
        }
      ];
      
      setPosts(mockPosts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  }, [category]);

  const addPost = React.useCallback((newPost: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'likes' | 'replies'>) => {
    const post: ForumPost = {
      ...newPost,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: 0,
      replies: []
    };
    
    setPosts(prev => [post, ...prev]);
  }, []);

  const updatePost = React.useCallback((id: string, updates: Partial<ForumPost>) => {
    setPosts(prev => prev.map(post =>
      post.id === id
        ? { ...post, ...updates, updatedAt: new Date().toISOString() }
        : post
    ));
  }, []);

  const deletePost = React.useCallback((id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  }, []);

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    addPost,
    updatePost,
    deletePost,
    refetch: fetchPosts
  };
};