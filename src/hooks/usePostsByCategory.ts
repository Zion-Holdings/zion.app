import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  category: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: number;
  views: number;
  isPinned: boolean;
  isLocked: boolean;
  tags: string[];
}

interface UsePostsByCategoryOptions {
  categoryId: string;
  page?: number;
  limit?: number;
  sortBy?: 'newest' | 'oldest' | 'mostLiked' | 'mostReplied' | 'mostViewed';
}

export function usePostsByCategory({
  categoryId,
  page = 1,
  limit = 20,
  sortBy = 'newest'
}: UsePostsByCategoryOptions) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!categoryId) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // Simulate API call - replace with actual API endpoint
        const response = await fetch(`/api/categories/${categoryId}/posts?page=${page}&limit=${limit}&sortBy=${sortBy}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        
        if (page === 1) {
          setPosts(data.posts);
        } else {
          setPosts(prev => [...prev, ...data.posts]);
        }
        
        setTotalPosts(data.total);
        setHasMore(data.posts.length === limit);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        
        // Fallback to mock data for development
        const mockPosts: Post[] = Array.from({ length: limit }, (_, i) => ({
          id: `post-${page}-${i}`,
          title: `Sample Post ${page}-${i + 1} in Category ${categoryId}`,
          content: `This is a sample post content for post ${i + 1}. It demonstrates how posts would look in this category.`,
          author: {
            id: `user-${i}`,
            name: `User ${i + 1}`,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`
          },
          category: categoryId,
          createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
          likes: Math.floor(Math.random() * 100),
          replies: Math.floor(Math.random() * 50),
          views: Math.floor(Math.random() * 1000),
          isPinned: i < 2, // First 2 posts are pinned
          isLocked: false,
          tags: ['sample', 'demo', 'category']
        }));
        
        if (page === 1) {
          setPosts(mockPosts);
        } else {
          setPosts(prev => [...prev, ...mockPosts]);
        }
        
        setTotalPosts(100); // Mock total
        setHasMore(page < 5); // Mock pagination
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [categoryId, page, limit, sortBy]);

  const refreshPosts = () => {
    setPosts([]);
    setHasMore(true);
    setTotalPosts(0);
    // This will trigger the useEffect to refetch
  };

  const addPost = (newPost: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => {
    const post: Post = {
      ...newPost,
      id: `post-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setPosts(prev => [post, ...prev]);
    setTotalPosts(prev => prev + 1);
  };

  const updatePost = (postId: string, updates: Partial<Post>) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, ...updates, updatedAt: new Date().toISOString() } : post
    ));
  };

  const deletePost = (postId: string) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
    setTotalPosts(prev => prev - 1);
  };

  const likePost = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const unlikePost = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, likes: Math.max(0, post.likes - 1) } : post
    ));
  };

  return {
    posts,
    loading,
    error,
    hasMore,
    totalPosts,
    refreshPosts,
    addPost,
    updatePost,
    deletePost,
    likePost,
    unlikePost
  };
}