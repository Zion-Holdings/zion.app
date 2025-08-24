import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Blog: NextPage = () => {
  const featuredPosts = [
    {
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Explore the latest developments in artificial intelligence and how they're reshaping enterprise technology landscapes.",
      category: "AI & Machine Learning",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/blog/ai-enterprise-2024.jpg",
      slug: "ai-enterprise-2024"
    },
    {
      title: "Cloud-Native Architecture: Best Practices for Modern Applications",
      excerpt: "Learn the essential principles and practices for building scalable, resilient cloud-native applications.",
      category: "Cloud Computing",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
      image: "/blog/cloud-native-architecture.jpg",
      slug: "cloud-native-architecture"
    },
    {
      title: "Blockchain Beyond Cryptocurrency: Real-World Business Applications",
      excerpt: "Discover how blockchain technology is revolutionizing industries beyond digital currencies.",
      category: "Blockchain",
      author: "David Kim",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "/blog/blockchain-business-applications.jpg",
      slug: "blockchain-business-applications"
    }
  ];

  const recentPosts = [
    {
      title: "Data Analytics in Digital Transformation: A Complete Guide",
      excerpt: "How data analytics is driving digital transformation across industries and what it means for your business.",
      category: "Data Analytics",
      author: "Emily Rodriguez",
      date: "February 28, 2024",
      readTime: "15 min read",
      slug: "data-analytics-digital-transformation"
    },
    {
      title: "Cybersecurity Trends for 2024: What Businesses Need to Know",
      excerpt: "Stay ahead of emerging cybersecurity threats with our comprehensive analysis of 2024 security trends.",
      category: "Cybersecurity",
      author: "Alex Thompson",
      date: "February 20, 2024",
      readTime: "11 min read",
      slug: "cybersecurity-trends-2024"
    },
    {
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Understanding how edge computing is transforming IoT deployments and enabling real-time processing.",
      category: "IoT & Edge Computing",
      author: "Lisa Wang",
      date: "February 15, 2024",
      readTime: "9 min read",
      slug: "edge-computing-iot-applications"
    },
    {
      title: "DevOps Automation Strategies for Modern Development Teams",
      excerpt: "Streamline your development workflow with proven DevOps automation strategies and tools.",
      category: "DevOps",
      author: "Ryan Martinez",
      date: "February 10, 2024",
      readTime: "13 min read",
      slug: "devops-automation-strategies"
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      excerpt: "Real-world examples of how machine learning is being integrated into enterprise applications.",
      category: "Machine Learning",
      author: "Jennifer Lee",
      date: "February 5, 2024",
      readTime: "14 min read",
      slug: "machine-learning-enterprise-software"
    },
    {
      title: "Sustainable Technology: Green Computing Solutions for Businesses",
      excerpt: "How businesses can reduce their environmental impact through sustainable technology practices.",
      category: "Sustainability",
      author: "Carlos Rodriguez",
      date: "January 30, 2024",
      readTime: "10 min read",
      slug: "sustainable-technology-green-computing"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Cloud Computing",
    "Blockchain",
    "Data Analytics",
    "Cybersecurity",
    "IoT & Edge Computing",
    "DevOps",
    "Machine Learning",
    "Sustainability"
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest technology trends, industry insights, and thought leadership content from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI trends, cloud computing, blockchain, data analytics, cybersecurity insights" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Technology Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and thought leadership content from our technology experts
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth analysis and insights on the most important technology trends and developments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-sm">Featured Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh insights and analysis on emerging technology trends and industry developments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest technology insights and industry trends delivered directly to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Authors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technology experts and thought leaders sharing their insights and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">AI & Business Strategy Expert</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Michael Chen</h3>
              <p className="text-purple-600 font-medium mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Cloud Architecture Specialist</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Emily Rodriguez</h3>
              <p className="text-green-600 font-medium mb-2">Head of Design</p>
              <p className="text-gray-600 text-sm">UX & Digital Innovation</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">David Kim</h3>
              <p className="text-indigo-600 font-medium mb-2">Head of Engineering</p>
              <p className="text-gray-600 text-sm">Blockchain & Systems Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Contribute?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have insights to share? We're always looking for industry experts to contribute to our blog.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Write for Us
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Suggest Topics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;