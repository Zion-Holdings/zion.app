import { useState, useEffect } from 'react';
import { ForumPost } from '@/types/community';

export const usePostsByCategory = (category: string) => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - in real app, this would come from API
        const mockPosts: ForumPost[] = [
          {
            id: '1',
            title: 'Getting started with the platform',
            content: 'I\'m new here and would like to know how to get started...',
            authorId: 'user1',
            authorName: 'NewUser',
            authorAvatar: '/avatars/user1.jpg',
            category,
            tags: ['getting-started', 'help'],
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z',
            likes: 5,
            replies: [
              {
                id: 'reply1',
                content: 'Welcome! Here\'s how to get started...',
                authorId: 'admin',
                authorName: 'Admin',
                authorAvatar: '/avatars/admin.jpg',
                createdAt: '2024-01-15T11:00:00Z',
                updatedAt: '2024-01-15T11:00:00Z',
                likes: 3,
              },
            ],
            isPinned: false,
            isLocked: false,
          },
          {
            id: '2',
            title: 'Best practices for project management',
            content: 'What are some best practices you\'ve found useful...',
            authorId: 'user2',
            authorName: 'ProjectManager',
            authorAvatar: '/avatars/user2.jpg',
            category,
            tags: ['project-management', 'best-practices'],
            createdAt: '2024-01-14T15:30:00Z',
            updatedAt: '2024-01-14T15:30:00Z',
            likes: 12,
            replies: [
              {
                id: 'reply2',
                content: 'I recommend using agile methodology...',
                authorId: 'user3',
                authorName: 'AgileExpert',
                authorAvatar: '/avatars/user3.jpg',
                createdAt: '2024-01-14T16:00:00Z',
                updatedAt: '2024-01-14T16:00:00Z',
                likes: 8,
              },
            ],
            isPinned: false,
            isLocked: false,
          },
        ];

        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchPosts();
    }
  }, [category]);

  const addPost = (post: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'likes' | 'replies'>) => {
    const newPost: ForumPost = {
      ...post,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    };
    
    setPosts(prev => [newPost, ...prev]);
  };

  const updatePost = (id: string, updates: Partial<ForumPost>) => {
    setPosts(prev => prev.map(post => 
      post.id === id 
        ? { ...post, ...updates, updatedAt: new Date().toISOString() }
        : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return {
    posts,
    loading,
    error,
    addPost,
    updatePost,
    deletePost,
  };
};