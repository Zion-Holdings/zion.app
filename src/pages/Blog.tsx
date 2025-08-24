
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Discover how artificial intelligence is transforming the way companies operate and compete in the modern marketplace.",
      category: "Technology",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainable Business Practices",
      excerpt: "Learn about eco-friendly business strategies that not only help the environment but also improve your bottom line.",
      category: "Sustainability",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Digital Transformation Strategies",
      excerpt: "Explore proven approaches to modernizing your business operations and staying ahead of the competition.",
      category: "Business",
      date: "2024-01-05",
      readTime: "6 min read"
    }
  ]);

  const categories = ['all', 'Technology', 'Business', 'Sustainability', 'Innovation'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddPost = () => {
    const newPost: BlogPost = {
      id: posts.length + 1,
      title: "New Blog Post",
      excerpt: "This is a new blog post that was added dynamically.",
      category: "Technology",
      date: new Date().toISOString().split('T')[0],
      readTime: "3 min read"
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in technology and business.
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4 w-full sm:w-auto">
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleAddPost} className="whitespace-nowrap">
            Add Post
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardDescription>
                  <span className="text-blue-600 font-medium">{post.category}</span>
                  <span className="mx-2">•</span>
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
                <Button variant="outline" className="mt-4 w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
