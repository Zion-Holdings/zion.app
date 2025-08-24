
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Blog = () => {
  const featuredPosts = [
    {
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      date: "January 15, 2024",
      image: "🤖",
      href: "/blog/ai-enterprise-trends-2024"
    },
    {
      title: "Cloud Migration Strategies: A Comprehensive Guide for Businesses",
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.",
      category: "Cloud Computing",
      readTime: "12 min read",
      date: "January 10, 2024",
      image: "☁️",
      href: "/blog/cloud-migration-strategies-guide"
    },
    {
      title: "Blockchain Beyond Cryptocurrency: Real-World Business Applications",
      excerpt: "Explore how blockchain technology is revolutionizing industries beyond finance, from supply chain to healthcare.",
      category: "Blockchain",
      readTime: "10 min read",
      date: "January 5, 2024",
      image: "🔗",
      href: "/blog/blockchain-business-applications"
    }
  ];

  const recentPosts = [
    {
      title: "5G Technology and Its Impact on IoT Applications",
      excerpt: "How the next generation of wireless technology is enabling new IoT possibilities.",
      category: "IoT",
      readTime: "6 min read",
      date: "January 12, 2024",
      href: "/blog/5g-technology-iot-impact"
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of emerging threats with our analysis of cybersecurity trends.",
      category: "Cybersecurity",
      readTime: "7 min read",
      date: "January 8, 2024",
      href: "/blog/cybersecurity-trends-2024"
    },
    {
      title: "Data Analytics in Digital Transformation",
      excerpt: "Leverage data analytics to drive successful digital transformation initiatives.",
      category: "Data Analytics",
      readTime: "9 min read",
      date: "January 3, 2024",
      href: "/blog/data-analytics-digital-transformation"
    },
    {
      title: "DevOps Automation Strategies for Modern Teams",
      excerpt: "Streamline your development workflow with proven DevOps automation techniques.",
      category: "DevOps",
      readTime: "11 min read",
      date: "December 28, 2023",
      href: "/blog/devops-automation-strategies"
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      excerpt: "Real-world examples of how ML is transforming enterprise applications.",
      category: "Machine Learning",
      readTime: "8 min read",
      date: "December 25, 2023",
      href: "/blog/machine-learning-enterprise-applications"
    },
    {
      title: "Microservices Architecture: Benefits and Challenges",
      excerpt: "Understanding the trade-offs of microservices and when to adopt them.",
      category: "Architecture",
      readTime: "10 min read",
      date: "December 20, 2023",
      href: "/blog/microservices-architecture-benefits-challenges"
    }
  ];

  const categories = [
    { name: "Artificial Intelligence", count: 15, icon: "🤖" },
    { name: "Cloud Computing", count: 12, icon: "☁️" },
    { name: "Blockchain", count: 8, icon: "🔗" },
    { name: "Cybersecurity", count: 10, icon: "🛡️" },
    { name: "Data Analytics", count: 9, icon: "📊" },
    { name: "DevOps", count: 7, icon: "⚙️" },
    { name: "IoT", count: 6, icon: "🌐" },
    { name: "Machine Learning", count: 11, icon: "🧠" }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group. Expert analysis on AI, cloud computing, blockchain, and more." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion Tech Group Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and expert analysis on the latest technology developments 
            that are shaping the future of business and innovation.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={post.href} className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                        <Link href={post.href}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Link 
                    key={index} 
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{category.icon}</span>
                      <span className="text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-900 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest tech insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                />
                <button className="w-full bg-white text-blue-900 py-2 px-4 rounded font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Have a Story to Share?</h2>
          <p className="text-gray-300 mb-6">
            We're always looking for guest contributors and industry experts to share their insights.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Submit a Guest Post
          </Link>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Blog;