import Link from 'next/link';

export default function NewsPage() {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary Quantum Neural Network Platform',
      excerpt: 'Our latest quantum computing breakthrough delivers unprecedented performance for AI applications, marking a new era in computational power.',
      category: 'Product Launch',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/images/news/quantum-launch.jpg',
      featured: true
    },
    {
      title: 'AI Autonomous Systems Achieve 99.9% Accuracy in Enterprise Deployments',
      excerpt: 'Real-world results show our autonomous AI solutions consistently outperform human operators across multiple industries.',
      category: 'Research & Development',
      date: '2025-01-10',
      readTime: '4 min read',
      image: '/images/news/ai-accuracy.jpg',
      featured: false
    },
    {
      title: 'Zion Tech Group Partners with Leading Universities for AI Research',
      excerpt: 'Strategic partnerships with MIT, Stanford, and Oxford accelerate breakthrough research in artificial intelligence and quantum computing.',
      category: 'Partnerships',
      date: '2025-01-05',
      readTime: '3 min read',
      image: '/images/news/university-partnerships.jpg',
      featured: false
    },
    {
      title: 'New AI-Powered Enterprise Security Suite Prevents 99.9% of Cyber Threats',
      excerpt: 'Advanced threat detection and response capabilities protect enterprise networks with unprecedented accuracy and speed.',
      category: 'Product Update',
      date: '2024-12-28',
      readTime: '6 min read',
      image: '/images/news/security-suite.jpg',
      featured: false
    },
    {
      title: 'Zion Tech Group Named Top AI Company by Industry Analysts',
      excerpt: 'Recognition as the leading AI technology provider underscores our commitment to innovation and customer success.',
      category: 'Company News',
      date: '2024-12-20',
      readTime: '2 min read',
      image: '/images/news/top-ai-company.jpg',
      featured: false
    },
    {
      title: 'Breakthrough in AI Consciousness Simulation Research',
      excerpt: 'Our research team achieves significant progress in understanding and simulating human consciousness using advanced AI systems.',
      category: 'Research & Development',
      date: '2024-12-15',
      readTime: '7 min read',
      image: '/images/news/consciousness-research.jpg',
      featured: false
    },
    {
      title: 'AI Content Generation Platform Surpasses Human Quality Standards',
      excerpt: 'Independent testing shows our AI content creation tools consistently produce higher quality content than human writers.',
      category: 'Product Update',
      date: '2024-12-10',
      readTime: '4 min read',
      image: '/images/news/content-generation.jpg',
      featured: false
    },
    {
      title: 'Global Expansion: Zion Tech Group Opens Offices in Asia and Europe',
      excerpt: 'Strategic expansion brings our AI solutions closer to international clients and strengthens our global presence.',
      category: 'Company News',
      date: '2024-12-05',
      readTime: '3 min read',
      image: '/images/news/global-expansion.jpg',
      featured: false
    }
  ];

  const categories = [
    'All News',
    'Product Launch',
    'Product Update',
    'Research & Development',
    'Partnerships',
    'Company News',
    'Industry Insights'
  ];

  const featuredArticle = newsArticles.find(article => article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">News</span> & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest developments in AI technology, company updates, 
            and industry insights from Zion Tech Group.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-black/20 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Story</h2>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-black/40 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-6xl">📰</div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span className="text-gray-400 text-sm">{formatDate(featuredArticle.date)}</span>
                    <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
                <div className="bg-black/40 rounded-lg p-4 flex items-center justify-center mb-4">
                  <div className="text-4xl">📰</div>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-xs">{formatDate(article.date)}</span>
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                
                <Link
                  href="/contact"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest AI insights, product updates, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Press Resources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Press Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-white mb-3">Press Releases</h3>
              <p className="text-gray-300 text-sm mb-4">Official company announcements and news releases</p>
              <Link
                href="/contact"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-200"
              >
                View Press Releases →
              </Link>
            </div>
            
            <div className="bg-black/20 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Media Kit</h3>
              <p className="text-gray-300 text-sm mb-4">Company logos, images, and brand assets</p>
              <Link
                href="/contact"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-200"
              >
                Download Media Kit →
              </Link>
            </div>
            
            <div className="bg-black/20 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-white mb-3">Media Contact</h3>
              <p className="text-gray-300 text-sm mb-4">Get in touch with our PR team for interviews and inquiries</p>
              <Link
                href="/contact"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-200"
              >
                Contact PR Team →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Our Latest Developments?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn more about how our AI solutions can transform your business and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}