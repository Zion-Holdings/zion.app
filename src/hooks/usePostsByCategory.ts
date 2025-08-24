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
          title: 'Getting Started with AI Development',
          content: 'I\'m new to AI development and looking for guidance on where to start. Any recommendations for beginners?',
          authorId: 'user1',
          authorName: 'Alex Chen',
          authorAvatar: '/avatars/alex.jpg',
          category: 'AI Development',
          tags: ['AI', 'Beginner', 'Development'],
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-15T10:00:00Z',
          likes: 12,
          isPinned: false,
          isLocked: false,
          replies: []
        },
        {
          id: '2',
          title: 'Best Practices for Cybersecurity',
          content: 'What are the current best practices for implementing cybersecurity in small businesses?',
          authorId: 'user2',
          authorName: 'Sarah Johnson',
          authorAvatar: '/avatars/sarah.jpg',
          category: 'Cybersecurity',
          tags: ['Security', 'Business', 'Best Practices'],
          createdAt: '2024-01-14T14:30:00Z',
          updatedAt: '2024-01-14T14:30:00Z',
          likes: 8,
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