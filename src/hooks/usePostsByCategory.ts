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
          title: 'Getting Started with Zion Platform',
          content: 'I\'m new to the platform and would love some tips on how to get started...',
          authorName: 'John Doe',
          authorAvatar: '/avatars/john.jpg',
          category: category,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          likes: 5,
          replies: []
        },
        {
          id: '2',
          title: 'Best Practices for Project Management',
          content: 'What are some best practices you\'ve found for managing projects on Zion?',
          authorName: 'Jane Smith',
          authorAvatar: '/avatars/jane.jpg',
          category: category,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          likes: 12,
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