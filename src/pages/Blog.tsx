import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const CATEGORIES = ["All Categories", "AI & Machine Learning", "Technology", "Business", "Innovation", "Sustainability"];

  // Mock data - replace with actual data from your API
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the coming year.",
      slug: "ai-trends-2025",
      category: "AI & Machine Learning",
      featuredImage: "/images/blog/ai-trends-2025.jpg",
      publishedDate: "January 15, 2025",
      readTime: "8 min read",
      author: {
        name: "Dr. Sarah Chen",
        avatarUrl: "/images/authors/sarah-chen.jpg"
      }
    }
  ];

  const allPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the coming year.",
      slug: "ai-trends-2025",
      category: "AI & Machine Learning",
      featuredImage: "/images/blog/ai-trends-2025.jpg",
      publishedDate: "January 15, 2025",
      readTime: "8 min read",
      author: {
        name: "Dr. Sarah Chen",
        avatarUrl: "/images/authors/sarah-chen.jpg"
      }
    },
    {
      id: 2,
      title: "How to Optimize Your AI Listings for Maximum Visibility",
      excerpt: "Learn the best practices for creating compelling AI service listings that attract the right clients and drive conversions.",
      slug: "optimize-ai-listings",
      category: "Business",
      featuredImage: "/images/blog/optimize-ai-listings.jpg",
      publishedDate: "January 10, 2025",
      readTime: "6 min read",
      author: {
        name: "Marcus Rodriguez",
        avatarUrl: "/images/authors/marcus-rodriguez.jpg"
      }
    },
    {
      id: 3,
      title: "Green IT: Building Sustainable Technology Solutions",
      excerpt: "Explore how businesses can implement eco-friendly technology practices while maintaining performance and reducing costs.",
      slug: "green-it",
      category: "Sustainability",
      featuredImage: "/images/blog/green-it.jpg",
      publishedDate: "January 5, 2025",
      readTime: "7 min read",
      author: {
        name: "Elena Petrova",
        avatarUrl: "/images/authors/elena-petrova.jpg"
      }
    }
  ];

  const filteredPosts = useMemo(() => {
    let filtered = allPosts;
    
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory && selectedCategory !== "All Categories") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEO 
        title="Blog - AI & Tech Insights" 
        description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation." 
        keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT"
        canonical="https://ziontechgroup.com/blog"
      />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
          
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={featuredPosts[0].featuredImage}
                    alt={featuredPosts[0].title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "/images/blog-placeholder.svg";
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">
                    {featuredPosts[0].category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <img
                      src={featuredPosts[0].author.avatarUrl}
                      alt={featuredPosts[0].author.name}
                      className="w-10 h-10 rounded-full mr-3"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/blog-placeholder.svg";
                      }}
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPosts[0].author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}
                      </p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit"
                  >
                    <Link to={`/blog/${featuredPosts[0].slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category} className="text-white">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/blog-placeholder.svg";
                      }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="text-xs text-zion-slate-light">
                        {post.publishedDate} • {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = "/images/blog-placeholder.svg";
                        }}
                      />
                      <span className="text-sm text-white">{post.author.name}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      variant="link" 
                      className="text-zion-cyan p-0 hover:text-zion-purple"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`}>
                        Read More →
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
