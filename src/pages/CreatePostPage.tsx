
import { useState, useEffect } from "react";
import { mutate } from 'swr';
import { Link, useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import PostForm from "@/components/community/PostForm";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";

interface PostFormValues {
  title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;
}

export default function CreatePostPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!user) {
      navigate(`/login?next=${encodeURIComponent(location.pathname + location.search)}`);
    }
  }, [user, navigate, location]);
  
  // Get category from URL query params if available
  const initialCategory = searchParams.get("category") as ForumCategory | null;
  
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help"
  };

  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
      
      // Parse tags into an array
      const tagsArray = values.tags.split(",").map(tag => tag.trim());
      
      toast({
        title: "Post created",
        description: "Your post has been published successfully"
      });

      if (user?.id) {
        try {
          const res = await fetch('/api/points/increment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, amount: 5, reason: 'post' })
          });
          if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(text || `Error ${res.status}`);
          }
          mutate('user');
        } catch (err) {
          console.error('Failed to award points:', err);
        }
      }
      
      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem creating your post",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <SEO
        title="Create New Post | Community Forum | Zion AI Marketplace"
        description="Create a new discussion post in the Zion AI Marketplace community forum."
        keywords="community, forum, discussion, create post, new thread"
      />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Create Post</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
        
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </>
  );
}
