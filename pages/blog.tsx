import React from 'react';
import Layout from '../components/layout/Layout';
import { FileText, Calendar, User, ArrowRight, Brain, Atom, Shield, Rocket, Cpu, Target } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI Consciousness: Beyond Machine Learning',
      excerpt: 'Exploring the next frontier in artificial intelligence where machines develop true consciousness and self-awareness.',
      author: 'AI Research Team',
      date: '2025-01-15',
      category: 'AI & Consciousness',
      readTime: '8 min read',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Breakthroughs: What\'s Next?',
      excerpt: 'Discover the latest developments in quantum computing and how they\'re reshaping the technology landscape.',
      author: 'Quantum Team',
      date: '2025-01-10',
      category: 'Quantum Technology',
      readTime: '6 min read',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions.',
      author: 'Security Team',
      date: '2025-01-05',
      category: 'Cybersecurity',
      readTime: '7 min read',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Space Technology: The Next Frontier for Business',
      excerpt: 'Exploring how space technology is creating new opportunities for businesses on Earth and beyond.',
      author: 'Space Team',
      date: '2024-12-28',
      category: 'Space Technology',
      readTime: '9 min read',
      icon: Rocket,
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Micro SAAS Revolution: Building the Future of Software',
      excerpt: 'How micro SAAS solutions are transforming industries and creating new business opportunities.',
      author: 'Business Solutions Team',
      date: '2024-12-20',
      category: 'Business Solutions',
      readTime: '5 min read',
      icon: Target,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'The Evolution of IT Infrastructure: Cloud to Edge',
      excerpt: 'Understanding the shift from traditional cloud computing to edge computing and its implications.',
      author: 'Infrastructure Team',
      date: '2024-12-15',
      category: 'IT Infrastructure',
      readTime: '6 min read',
      icon: Cpu,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = [
    { name: 'All', count: 6, active: true },
    { name: 'AI & Consciousness', count: 1 },
    { name: 'Quantum Technology', count: 1 },
    { name: 'Cybersecurity', count: 1 },
    { name: 'Space Technology', count: 1 },
    { name: 'Business Solutions', count: 1 },
    { name: 'IT Infrastructure', count: 1 }
  ];

  return (
    <Layout
      title="Blog | Zion Tech Group"
      description="Latest insights and updates in AI consciousness, quantum computing, cybersecurity, space technology, and business solutions. Stay ahead with cutting-edge technology insights."
      keywords="blog, technology insights, AI consciousness, quantum computing, cybersecurity, space technology, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/blog"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <FileText className="mx-auto h-20 w-20 text-indigo-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Stay ahead of the curve with the latest insights in AI consciousness, 
                quantum computing, cybersecurity, and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${post.color} rounded-xl flex items-center justify-center mb-4`}>
                      <post.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest technology insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our services and discover how we can transform your business 
              with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Explore Services
              </button>
              <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;