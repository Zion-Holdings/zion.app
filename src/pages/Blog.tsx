
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { BlogPost } from "@/types/blog";
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost";
import { Search } from "lucide-react";

// Sample blog data - in a real app this would come from an API or CMS
const BLOG_POSTS: BlogPost[] = [
  {
    id: "ai-trends-2025",
    title: "10 Emerging AI Trends to Watch in 2025",
    slug: "ai-trends-2025",
    excerpt: "From multimodal AI to neuromorphic computing, discover the technologies that will shape the artificial intelligence landscape in 2025.",
    content: `<p>As we move further into 2025, artificial intelligence continues to evolve at an unprecedented pace. This article explores the most significant trends that are reshaping the AI landscape this year.</p>

<h2>1. Multimodal AI Systems</h2>
<p>Unlike traditional AI models that process single data types (text, images, or audio), multimodal systems can handle and interpret multiple data formats simultaneously. This creates more human-like understanding capabilities and enables more sophisticated applications across industries.</p>

<h2>2. Neuromorphic Computing</h2>
<p>Taking inspiration from the human brain's neural structure, neuromorphic computing represents a fundamental shift in how AI processes information. These systems consume significantly less power while delivering enhanced performance for complex tasks.</p>

<h2>3. Federated Learning at Scale</h2>
<p>Privacy concerns continue to drive adoption of federated learning approaches, where models are trained across multiple devices without exchanging raw data. In 2025, we're seeing enterprise-scale deployments that maintain privacy while delivering powerful insights.</p>

<h2>4. Quantum AI</h2>
<p>The convergence of quantum computing and AI is beginning to yield practical applications. While still in early stages, quantum-enhanced machine learning algorithms are demonstrating superior performance for specific optimization and pattern recognition problems.</p>

<h2>5. AI for Climate Solutions</h2>
<p>AI systems designed specifically to address climate challenges are gaining traction. From optimizing energy networks to modeling climate scenarios, these specialized tools are becoming essential in sustainability efforts.</p>`,
    author: {
      name: "Dr. Alicia Zhang",
      title: "AI Research Director",
      avatarUrl: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200"
    },
    publishedDate: "Apr 15, 2025",
    readTime: "5 min read",
    category: "Trends",
    tags: ["AI", "Technology Trends", "Machine Learning", "Future Tech"],
    featuredImage: "https://images.unsplash.com/photo-1677442135026-f00ef565c4be?auto=format&fit=crop&w=1200&h=630",
    isFeatured: true
  },
  {
    id: "optimize-ai-listings",
    title: "How to Optimize Your AI Service Listings for Maximum Visibility",
    slug: "optimize-ai-listings",
    excerpt: "Learn the key strategies for optimizing your AI products and services on Zion marketplace to attract more potential clients.",
    content: `<p>In the competitive AI marketplace, standing out is essential. This comprehensive guide shares proven strategies to optimize your AI service listings and attract more qualified leads.</p>

<h2>Crafting an Irresistible Service Title</h2>
<p>Your title is the first element potential clients see. It should be specific, include relevant keywords, and clearly communicate your unique value proposition. Avoid generic terms and focus on the specific problems you solve or results you deliver.</p>

<h2>Compelling Service Descriptions That Convert</h2>
<p>Beyond explaining features, your description should emphasize benefits and outcomes. Use client-centered language, incorporate relevant technical terms for searchability, and structure your content with headers and bullet points for easy scanning.</p>

<h2>Showcase Your Expertise with Case Studies</h2>
<p>Nothing builds credibility like proven results. Include mini case studies that highlight specific problems you've solved, the approach you took, and quantifiable outcomes you achieved. This transforms abstract services into concrete value.</p>

<h2>Strategic Pricing and Package Structure</h2>
<p>Consider offering tiered packages that cater to different client needs and budgets. Clearly differentiate what's included in each tier, and consider adding value-based pricing elements that tie your compensation to client results.</p>

<h2>Leveraging Reviews and Testimonials</h2>
<p>Social proof is powerful. Actively request detailed reviews from satisfied clients, and feature the most compelling testimonials prominently in your listing. Respond professionally to all feedback, including any critical reviews.</p>`,
    author: {
      name: "Marcus Johnson",
      title: "Marketing Strategist",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"
    },
    publishedDate: "Apr 10, 2025",
    readTime: "8 min read",
    category: "Marketing",
    tags: ["Marketing", "AI Services", "Visibility", "SEO"],
    featuredImage: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?auto=format&fit=crop&w=1200&h=630"
  },
  {
    id: "green-it",
    title: "Green IT: Reducing Your Data Center's Carbon Footprint",
    slug: "green-it",
    excerpt: "Practical steps for implementing sustainable practices in your IT infrastructure while maintaining performance and reliability.",
    content: `<p>As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers. This article explores practical approaches to make your IT infrastructure more sustainable without compromising performance.</p>

<h2>Energy-Efficient Hardware Selection</h2>
<p>The foundation of any green IT strategy begins with your hardware choices. Modern processors, storage solutions, and networking equipment can deliver significant performance improvements while consuming less power. Look for Energy Star ratings and power usage effectiveness (PUE) metrics when evaluating options.</p>

<h2>Optimizing Cooling Systems</h2>
<p>Cooling typically represents 40% of data center energy consumption. Implementing hot/cold aisle containment, raising ambient temperature setpoints within ASHRAE guidelines, and deploying liquid cooling for high-density racks can dramatically reduce this energy burden.</p>

<h2>Renewable Energy Integration</h2>
<p>Many organizations are now leveraging on-site renewable generation or virtual power purchase agreements (VPPAs) to offset their carbon footprint. These approaches not only reduce emissions but can provide long-term cost stability as energy markets fluctuate.</p>

<h2>Workload Optimization and Consolidation</h2>
<p>Right-sizing infrastructure and implementing dynamic workload management ensures computing resources are used efficiently. Modern orchestration tools can automatically balance workloads to maximize utilization while powering down unused capacity.</p>

<h2>Measuring and Reporting Impact</h2>
<p>Implementing comprehensive monitoring and establishing environmental KPIs creates accountability and identifies opportunities for improvement. Many organizations now include sustainability metrics in their regular performance reporting alongside traditional IT measurements.</p>`,
    author: {
      name: "Sophia Chen",
      title: "Sustainability Engineer",
      avatarUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&h=200"
    },
    publishedDate: "Apr 5, 2025",
    readTime: "6 min read",
    category: "Sustainability",
    tags: ["Green IT", "Sustainability", "Data Centers", "Energy Efficiency"],
    featuredImage: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=1200&h=630"
  },
  {
    id: "ai-ethics-frameworks",
    title: "Implementing Ethical AI Frameworks in Enterprise Applications",
    slug: "ai-ethics-frameworks",
    excerpt: "A comprehensive guide to integrating ethical considerations into your AI development lifecycle.",
    content: `<p>As AI systems become more prevalent in critical decision-making, organizations must implement robust ethical frameworks to ensure responsible deployment. This article provides a practical roadmap for embedding ethics throughout your AI development lifecycle.</p>

<h2>Establishing Ethical Principles</h2>
<p>Begin by defining clear ethical principles that align with your organization's values and industry requirements. These typically include fairness, transparency, accountability, privacy, and human oversight. These principles should be documented and socialized across all teams involved in AI development.</p>

<h2>Data Ethics and Governance</h2>
<p>Ethical AI begins with ethical data practices. Establish robust data governance policies that address collection consent, proper anonymization techniques, representation biases, and appropriate usage limitations. Regular data audits should verify adherence to these standards.</p>

<h2>Model Development and Testing</h2>
<p>Implement bias testing throughout the development process, not just at the end. Use diverse test datasets that represent different demographics and edge cases. Document model limitations and potential risks in model cards that accompany each deployed system.</p>

<h2>Deployment with Human Oversight</h2>
<p>Even highly accurate AI systems require human oversight mechanisms. Implement appropriate appeal processes, confidence thresholds that trigger human review, and ongoing monitoring for performance drift that might introduce new ethical concerns.</p>

<h2>Continuous Ethical Evaluation</h2>
<p>Ethics isn't a one-time consideration. Establish regular review cycles that evaluate both technical performance and ethical implications of deployed systems. Create channels for stakeholder feedback, including affected users and communities.</p>`,
    author: {
      name: "Dr. James Peterson",
      title: "AI Ethics Officer",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200"
    },
    publishedDate: "Mar 30, 2025",
    readTime: "7 min read",
    category: "Ethics",
    tags: ["AI Ethics", "Enterprise AI", "Responsible AI", "Governance"],
    featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630"
  },
  {
    id: "ai-talent-acquisition",
    title: "Winning the AI Talent War: Recruitment Strategies for 2025",
    slug: "ai-talent-acquisition",
    excerpt: "How forward-thinking companies are attracting and retaining scarce AI talent in an increasingly competitive market.",
    content: `<p>The demand for skilled AI professionals continues to outpace supply, creating intense competition among employers. This article examines effective strategies for attracting and retaining top AI talent in today's challenging market.</p>

<h2>Beyond Compensation: What AI Talent Really Wants</h2>
<p>While competitive salaries are essential, today's AI professionals are equally motivated by challenging problems, access to cutting-edge infrastructure, and opportunities to publish and contribute to the field. Creating an environment that balances practical applications with research opportunities can be a major differentiator.</p>

<h2>Building Internal Talent Pipelines</h2>
<p>Forward-thinking organizations are creating robust upskilling programs to develop AI capabilities within their existing workforce. Structured mentorship, educational stipends, and dedicated learning time can transform motivated employees into valuable AI contributors.</p>

<h2>Creating Compelling AI Missions</h2>
<p>Top AI talent is increasingly mission-driven, seeking roles where their work creates meaningful impact. Articulating how your AI initiatives address important challenges—whether in sustainability, healthcare, education, or other domains—can be a powerful recruitment tool.</p>

<h2>Remote-First Talent Strategies</h2>
<p>The most successful AI employers have embraced truly global talent strategies, creating distributed teams that leverage expertise regardless of location. This approach requires investing in collaboration tools, asynchronous workflows, and inclusive management practices.</p>

<h2>Retention Through Growth Paths</h2>
<p>Create clear advancement opportunities that don't force technical experts into management tracks. Dual-ladder career paths that equally value technical depth and leadership skills ensure AI professionals can progress while playing to their strengths.</p>`,
    author: {
      name: "Elena Rodriguez",
      title: "Head of AI Talent",
      avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200"
    },
    publishedDate: "Mar 22, 2025",
    readTime: "9 min read",
    category: "Recruitment",
    tags: ["AI Talent", "Recruitment", "Tech Hiring", "Retention"],
    featuredImage: "https://images.unsplash.com/photo-1542744173-8659239358d7?auto=format&fit=crop&w=1200&h=630"
  },
  {
    id: "ai-compute-optimization",
    title: "AI Compute Optimization: Balancing Performance and Cost",
    slug: "ai-compute-optimization",
    excerpt: "Strategies for optimizing AI infrastructure costs while maintaining model performance and development velocity.",
    content: `<p>As AI models grow in complexity, so do their computational requirements. This practical guide explores strategies for optimizing AI infrastructure for the optimal balance between performance, cost, and development efficiency.</p>

<h2>Right-sizing Compute Resources</h2>
<p>Many organizations overprovision computing resources for AI workloads. Implementing proper benchmarking and profiling helps identify true requirements and eliminate waste. Consider different compute profiles for development, training, and inference stages.</p>

<h2>Model Compression Techniques</h2>
<p>Recent advances in quantization, pruning, and knowledge distillation allow teams to reduce model size without significant performance loss. These compressed models require less compute for inference and can often run on less expensive hardware.</p>

<h2>Strategic Cloud vs. On-Premise Decisions</h2>
<p>While cloud platforms offer flexibility, organizations with consistent AI workloads often benefit from hybrid approaches. Analyze workload patterns to determine which components should remain in the cloud and which warrant dedicated hardware investments.</p>

<h2>Training Efficiency Optimization</h2>
<p>Implementing techniques like mixed precision training, gradient accumulation, and efficient hyperparameter optimization can significantly reduce training time and costs. Modern frameworks provide many of these optimizations with minimal configuration.</p>

<h2>Inference Serving Architecture</h2>
<p>The deployment architecture for AI models dramatically impacts both performance and cost. Consider batching strategies, hardware acceleration options, and scaling policies that align with your application's latency requirements and traffic patterns.</p>`,
    author: {
      name: "Michael Wong",
      title: "ML Infrastructure Architect",
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200"
    },
    publishedDate: "Mar 15, 2025",
    readTime: "6 min read",
    category: "Infrastructure",
    tags: ["AI Infrastructure", "Cost Optimization", "Machine Learning", "Computing"],
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630"
  }
];

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
  
  return (
    <>
      <SEO 
        title="Blog - AI & Tech Insights" 
        description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation." 
        keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT"
        canonical="https://app.ziontechgroup.com/blog"
      />
      <Header />
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
      <Footer />
    </>
  );
}
