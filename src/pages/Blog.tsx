import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI revolution.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      title: "Micro SAAS: The New Era of Software Solutions",
      excerpt: "Explore how micro SAAS platforms are democratizing software access and enabling businesses to scale efficiently with targeted solutions.",
      author: "Kleber Santos",
      date: "2024-01-12",
      readTime: "4 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving digital threats and maintain customer trust.",
      author: "Zion Security Team",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 4,
      title: "Cloud Migration Strategies: A Comprehensive Guide",
      excerpt: "Navigate the complexities of cloud migration with proven strategies and best practices for seamless digital transformation.",
      author: "Cloud Solutions Team",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 5,
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt: "Discover how DevOps automation can accelerate your development cycles and improve code quality and deployment reliability.",
      author: "DevOps Team",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 6,
      title: "The Rise of AI-Powered Content Generation",
      excerpt: "Explore how AI is revolutionizing content creation and what it means for marketers, writers, and businesses worldwide.",
      author: "AI Content Team",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "AI & Content",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=400"
    }
  ];

  const categories = ["All", "AI & Technology", "Business", "Cybersecurity", "Cloud Computing", "DevOps", "AI & Content"];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Blog</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Insights, trends, and expert knowledge on AI, technology, and business innovation
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className={`cursor-pointer transition-all duration-200 ${
                category === "All" 
                  ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white" 
                  : "bg-white/10 text-zion-slate-light hover:bg-white/20"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-zion-cyan/90 text-white">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-lg line-clamp-2 hover:text-zion-cyan transition-colors duration-200">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Zion Tech
              </h3>
              <p className="text-zion-slate-light mb-6">
                Get the latest insights on AI, technology, and business innovation delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-md transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;