import React from 'react';

<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { BlogPost } from "@/types/blog";
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Search } from "lucide-react";

// Categories for filtering
const CATEGORIES = [
  "All Categories",
  "Trends",
  "Marketing",
  "Sustainability",
  "Ethics",
  "Recruitment",
  "Infrastructure"
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [posts, setPosts] = useState<BlogPost[]>([...BLOG_POSTS]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosts(prev => [...prev, generateRandomBlogPost()]);
    }, 120000); // every 2 minutes
    return () => clearInterval(interval);
  }, []);

  // Filter blog posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured);
  
=======
export default function EquipmentDetail() {
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
  return (
    <div className="min-h-screen bg-zion-blue-dark py-8 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">EquipmentDetail</h1>
        <p>EquipmentDetail page content will go here.</p>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default Blog;
=======
}
>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274
