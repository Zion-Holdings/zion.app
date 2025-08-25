
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
      content: "Artificial intelligence is revolutionizing the way businesses operate...",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI & Technology",
      tags: ["AI", "Business", "Innovation"]
    },
    {
      id: 2,
      title: "Micro-SaaS: The New Business Model",
      excerpt: "Learn about the emerging trend of micro-SaaS platforms and how they're changing the software industry landscape.",
      content: "Micro-SaaS platforms are becoming increasingly popular...",
      author: "Zion Tech Team",
      date: "2024-01-10",
      category: "Business",
      tags: ["SaaS", "Business Model", "Software"]
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential security measures every business should implement to protect against evolving cyber threats.",
      content: "As cyber threats continue to evolve...",
      author: "Zion Tech Team",
      date: "2024-01-05",
      category: "Security",
      tags: ["Cybersecurity", "Best Practices", "Security"]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: ''
  });

  const categories = ['All', 'AI & Technology', 'Business', 'Security', 'Development', 'Cloud'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title && newPost.excerpt && newPost.content && newPost.author && newPost.category) {
      const post: BlogPost = {
        id: posts.length + 1,
        title: newPost.title,
        excerpt: newPost.excerpt,
        content: newPost.content,
        author: newPost.author,
        date: new Date().toISOString().split('T')[0],
        category: newPost.category,
        tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };
      setPosts([...posts, post]);
      setNewPost({ title: '', excerpt: '', content: '', author: '', category: '', tags: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, updates, and thought leadership on technology, business, and innovation.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-white hover:text-cyan-400 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">By {post.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add New Post Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Add New Blog Post</h2>
            <form onSubmit={handleAddPost} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Post Title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
                <Input
                  type="text"
                  placeholder="Author"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
              </div>
              <Input
                type="text"
                placeholder="Category"
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
              />
              <Input
                type="text"
                placeholder="Tags (comma-separated)"
                value={newPost.tags}
                onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
              />
              <textarea
                placeholder="Excerpt"
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Add Post
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

