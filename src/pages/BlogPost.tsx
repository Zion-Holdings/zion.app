import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  Heart,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Link
} from 'lucide-react';

const BlogPost = () => {
  const blogPost = {
    id: 1,
    title: "The Future of AI in Business: 2024 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI revolution.",
    content: `
      <p class="mb-6">Artificial Intelligence has evolved from a futuristic concept to a fundamental business tool that's transforming industries across the globe. As we move through 2024, the pace of AI adoption is accelerating, and businesses that fail to adapt risk being left behind.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key AI Trends Shaping 2024</h2>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">1. Generative AI Goes Mainstream</h3>
      <p class="mb-4">Generative AI tools like ChatGPT, DALL-E, and Midjourney have moved beyond novelty to become essential business tools. Companies are now integrating these technologies into their workflows for content creation, design, and customer service.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">2. AI-Powered Decision Making</h3>
      <p class="mb-4">Businesses are increasingly relying on AI to make data-driven decisions. From predictive analytics to automated reporting, AI is helping executives make better, faster decisions based on comprehensive data analysis.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">3. Hyper-Personalization</h3>
      <p class="mb-4">AI is enabling unprecedented levels of personalization in customer experiences. From product recommendations to marketing campaigns, businesses can now deliver highly targeted content that resonates with individual customers.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Implementation Strategies for Businesses</h2>
      
      <p class="mb-4">Successfully implementing AI requires a strategic approach. Here are key considerations for businesses looking to adopt AI technologies:</p>
      
      <ul class="list-disc list-inside space-y-2 mb-6 text-zion-slate-light">
        <li>Start with clear business objectives and use cases</li>
        <li>Invest in data quality and infrastructure</li>
        <li>Focus on employee training and change management</li>
        <li>Ensure ethical AI practices and transparency</li>
        <li>Measure ROI and iterate based on results</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Challenges and Considerations</h2>
      
      <p class="mb-4">While AI offers tremendous opportunities, businesses must also navigate several challenges:</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Data Privacy and Security</h3>
      <p class="mb-4">As AI systems process vast amounts of data, ensuring privacy and security becomes paramount. Businesses must implement robust data protection measures and comply with relevant regulations.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Ethical AI Development</h3>
      <p class="mb-4">AI systems must be developed and deployed ethically, avoiding bias and ensuring fairness. This requires careful consideration of training data and algorithm design.</p>
      
      <h3 class="text-xl font-bold text-white mb-3 mt-6">Workforce Transformation</h3>
      <p class="mb-4">AI will change the nature of work, requiring businesses to reskill employees and adapt organizational structures. Success depends on managing this transition effectively.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead: 2025 and Beyond</h2>
      
      <p class="mb-6">As we look to the future, AI will continue to evolve and become even more integrated into business operations. The key to success will be staying informed about emerging technologies while maintaining focus on business value and customer needs.</p>
      
      <p class="mb-6">Businesses that embrace AI strategically and ethically will be well-positioned to thrive in the increasingly competitive digital landscape.</p>
    `,
    author: {
      name: "Zion Tech Team",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      bio: "Our team of AI experts and business strategists share insights on emerging technologies and their business applications."
    },
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    tags: ["AI", "Business", "Technology", "Innovation", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400"
  };

  const relatedPosts = [
    {
      title: "Micro SAAS: The New Era of Software Solutions",
      excerpt: "Explore how micro SAAS platforms are democratizing software access and enabling businesses to scale efficiently.",
      date: "2024-01-12",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving digital threats.",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Cloud Migration Strategies: A Comprehensive Guide",
      excerpt: "Navigate the complexities of cloud migration with proven strategies and best practices.",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=250"
    }
  ];

  const comments = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=50&h=50",
      content: "Great insights on AI trends! We've been implementing AI in our customer service and the results are impressive.",
      date: "2024-01-16",
      replies: 2
    },
    {
      id: 2,
      author: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50&h=50",
      content: "The section on ethical AI development is crucial. Many companies are rushing into AI without considering the implications.",
      date: "2024-01-16",
      replies: 1
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>
            <p className="text-zion-slate-light text-lg mb-8">
              {blogPost.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-zion-slate-light mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blogPost.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Heart className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-zion-cyan border-zion-cyan/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
              <CardContent className="p-8">
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-medium mb-2">About {blogPost.author.name}</h3>
                    <p className="text-zion-slate-light">{blogPost.author.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
              <CardHeader>
                <CardTitle className="text-white">Comments ({comments.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-zion-cyan/10 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-white font-medium">{comment.author}</span>
                            <span className="text-zion-slate-light text-sm">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-zion-slate-light mb-3">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <button className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                              Reply
                            </button>
                            <button className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                              Like
                            </button>
                            {comment.replies > 0 && (
                              <span className="text-zion-slate-light text-sm">
                                {comment.replies} replies
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                  <h4 className="text-white font-medium mb-4">Leave a Comment</h4>
                  <textarea
                    rows={4}
                    placeholder="Share your thoughts..."
                    className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none resize-none"
                  />
                  <Button className="mt-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Post Comment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Post
              </Button>
              <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                Next Post
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Share */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-lg">Share This Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Facebook className="h-4 w-4 mr-2" />
                    Share on Facebook
                  </Button>
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Twitter className="h-4 w-4 mr-2" />
                    Share on Twitter
                  </Button>
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Share on LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <Link className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Related Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="border-b border-zion-cyan/10 pb-4 last:border-b-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="text-white font-medium mb-2 line-clamp-2">{post.title}</h4>
                      <p className="text-zion-slate-light text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-zion-slate-light">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
