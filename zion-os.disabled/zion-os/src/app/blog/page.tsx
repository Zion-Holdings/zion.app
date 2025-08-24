import Link from 'next/link';

export const metadata = {
  title: 'Blog & News - Zion Tech Group',
  description: 'Stay updated with the latest insights, news, and thought leadership from Zion Tech Group in AI, quantum computing, and technology innovation.',
};

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 'ai-consciousness-breakthrough',
      title: 'Breakthrough in AI Consciousness Research: What It Means for the Future',
      excerpt: 'Our research team has made significant progress in understanding artificial consciousness, opening new possibilities for human-AI collaboration.',
      category: 'Research & Development',
      author: 'Dr. Emily Watson',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/blog/ai-consciousness.jpg',
      featured: true
    },
    {
      id: 'quantum-computing-finance',
      title: 'Quantum Computing Revolutionizing Financial Trading: A Deep Dive',
      excerpt: 'Discover how our quantum algorithms are transforming financial markets and creating new opportunities for investors and institutions.',
      category: 'Quantum Computing',
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      image: '/blog/quantum-finance.jpg',
      featured: true
    },
    {
      id: 'ai-autonomous-systems-future',
      title: 'The Future of Autonomous AI Systems in Business Operations',
      excerpt: 'Explore how autonomous AI systems are reshaping business operations and what organizations need to know to stay competitive.',
      category: 'AI Solutions',
      author: 'Dr. Kleber Santos',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/blog/autonomous-ai.jpg',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 'cybersecurity-ai-trends',
      title: 'AI-Powered Cybersecurity: Trends and Best Practices for 2024',
      excerpt: 'Stay ahead of evolving cyber threats with the latest AI-powered security solutions and best practices.',
      category: 'Cybersecurity',
      author: 'Dr. James Wilson',
      date: '2024-01-12',
      readTime: '6 min read',
      image: '/blog/ai-cybersecurity.jpg'
    },
    {
      id: 'data-science-business-intelligence',
      title: 'Transforming Business Intelligence with Advanced Data Science',
      excerpt: 'Learn how advanced data science techniques are revolutionizing business intelligence and decision-making processes.',
      category: 'Data Science',
      author: 'Dr. Maria Garcia',
      date: '2024-01-08',
      readTime: '7 min read',
      image: '/blog/data-science-bi.jpg'
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning: The Next Frontier in AI',
      excerpt: 'Explore the intersection of quantum computing and machine learning, and how it\'s accelerating AI development.',
      category: 'Quantum Computing',
      author: 'Dr. Lisa Park',
      date: '2024-01-03',
      readTime: '9 min read',
      image: '/blog/quantum-ml.jpg'
    },
    {
      id: 'ai-ethics-responsibility',
      title: 'AI Ethics and Responsible Development: Our Commitment',
      excerpt: 'Understanding the importance of ethical AI development and how we ensure our solutions benefit humanity.',
      category: 'AI Ethics',
      author: 'Dr. Emily Watson',
      date: '2023-12-28',
      readTime: '5 min read',
      image: '/blog/ai-ethics.jpg'
    },
    {
      id: 'cloud-infrastructure-ai',
      title: 'Building Scalable AI Infrastructure in the Cloud',
      excerpt: 'Best practices for designing and implementing scalable AI infrastructure using modern cloud technologies.',
      category: 'Infrastructure',
      author: 'Michael Rodriguez',
      date: '2023-12-20',
      readTime: '8 min read',
      image: '/blog/cloud-ai.jpg'
    },
    {
      id: 'ai-content-marketing',
      title: 'AI in Content Marketing: Personalization at Scale',
      excerpt: 'How AI is revolutionizing content marketing through intelligent personalization and automated optimization.',
      category: 'Content Marketing',
      author: 'Dr. David Kim',
      date: '2023-12-15',
      readTime: '6 min read',
      image: '/blog/ai-marketing.jpg'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 12, active: true },
    { name: 'Research & Development', count: 3, active: false },
    { name: 'AI Solutions', count: 2, active: false },
    { name: 'Quantum Computing', count: 2, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'Data Science', count: 1, active: false },
    { name: 'AI Ethics', count: 1, active: false },
    { name: 'Infrastructure', count: 1, active: false },
    { name: 'Content Marketing', count: 1, active: false }
  ];

  const tags = [
    'AI Consciousness', 'Quantum Computing', 'Machine Learning', 'Cybersecurity',
    'Data Science', 'Autonomous Systems', 'Business Intelligence', 'Cloud Computing',
    'AI Ethics', 'Research', 'Innovation', 'Technology Trends'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, breakthroughs, and thought leadership 
            from our team of AI and technology experts.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep insights and breakthrough research from our leading experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Tags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                      category.active
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="bg-white text-gray-700 px-3 py-2 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay current with the latest developments in AI, quantum computing, and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights, research updates, and industry news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Authors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights from our team of researchers, engineers, and thought leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                KS
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. Kleber Santos</h3>
              <p className="text-blue-600 text-sm mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">AI Research & Business Strategy</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SC
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. Sarah Chen</h3>
              <p className="text-blue-600 text-sm mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Quantum Computing & Architecture</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                EW
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. Emily Watson</h3>
              <p className="text-blue-600 text-sm mb-2">Chief Research Officer</p>
              <p className="text-gray-600 text-sm">AI Consciousness & Ethics</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DK
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dr. David Kim</h3>
              <p className="text-blue-600 text-sm mb-2">Senior AI Researcher</p>
              <p className="text-gray-600 text-sm">Machine Learning & Neural Networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our services, research, and solutions to see how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Services
            </Link>
            <Link
              href="/research-development"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}