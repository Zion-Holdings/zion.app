import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Newsroom: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', count: 156 },
    { id: 'press-releases', name: 'Press Releases', count: 23 },
    { id: 'company-news', name: 'Company News', count: 45 },
    { id: 'product-updates', name: 'Product Updates', count: 34 },
    { id: 'partnerships', name: 'Partnerships', count: 18 },
    { id: 'awards', name: 'Awards & Recognition', count: 12 },
    { id: 'thought-leadership', name: 'Thought Leadership', count: 24 },
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'Zion App Named Leader in Gartner Magic Quadrant for Business Process Automation',
      category: 'awards',
      date: '2025-01-15',
      excerpt: 'Zion App has been recognized as a Leader in the 2025 Gartner Magic Quadrant for Business Process Automation, marking a significant milestone in our journey to revolutionize business automation.',
      author: 'Press Team',
      readTime: '3 min read',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Gartner', 'Leadership', 'Automation', 'Recognition']
    },
    {
      id: 2,
      title: 'Major Partnership Announcement: Zion App Joins Forces with Tech Giants',
      category: 'partnerships',
      date: '2025-01-12',
      excerpt: 'We are excited to announce a strategic partnership with leading technology companies to accelerate innovation and deliver enhanced solutions to our customers worldwide.',
      author: 'Partnership Team',
      readTime: '4 min read',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Partnership', 'Innovation', 'Technology', 'Growth']
    },
    {
      id: 3,
      title: 'Q4 2024 Financial Results: Record Growth and Market Expansion',
      category: 'company-news',
      date: '2025-01-10',
      excerpt: 'Zion App reports exceptional Q4 2024 results with 150% year-over-year growth, driven by strong demand for our automation solutions and successful market expansion.',
      author: 'Finance Team',
      readTime: '5 min read',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Financial Results', 'Growth', 'Q4 2024', 'Market Expansion']
    },
  ];

  const recentNews = [
    {
      id: 4,
      title: 'New AI-Powered Features Released in Latest Platform Update',
      category: 'product-updates',
      date: '2025-01-14',
      excerpt: 'Our latest platform update introduces advanced AI capabilities, including intelligent process optimization and predictive analytics.',
      author: 'Product Team',
      readTime: '2 min read',
      image: '/api/placeholder/300/200',
      tags: ['AI', 'Product Update', 'Innovation']
    },
    {
      id: 5,
      title: 'Zion App Expands European Operations with New Office in Berlin',
      category: 'company-news',
      date: '2025-01-13',
      excerpt: 'To better serve our growing European customer base, we are opening a new office in Berlin, Germany.',
      author: 'Expansion Team',
      readTime: '2 min read',
      image: '/api/placeholder/300/200',
      tags: ['Expansion', 'Europe', 'Berlin', 'Growth']
    },
    {
      id: 6,
      title: 'Customer Success Story: How Company X Achieved 300% Efficiency Gains',
      category: 'thought-leadership',
      date: '2025-01-11',
      excerpt: 'Discover how one of our customers transformed their business operations and achieved remarkable efficiency improvements.',
      author: 'Customer Success Team',
      readTime: '4 min read',
      image: '/api/placeholder/300/200',
      tags: ['Customer Success', 'Case Study', 'Efficiency']
    },
    {
      id: 7,
      title: 'Zion App Named Best Workplace for Innovation by Tech Magazine',
      category: 'awards',
      date: '2025-01-09',
      excerpt: 'We are honored to be recognized as the Best Workplace for Innovation, highlighting our commitment to fostering creativity and innovation.',
      author: 'HR Team',
      readTime: '2 min read',
      image: '/api/placeholder/300/200',
      tags: ['Workplace', 'Innovation', 'Recognition']
    },
    {
      id: 8,
      title: 'Industry Report: The Future of Business Automation in 2025',
      category: 'thought-leadership',
      date: '2025-01-08',
      excerpt: 'Our research team shares insights on emerging trends and predictions for the business automation industry in 2025.',
      author: 'Research Team',
      readTime: '6 min read',
      image: '/api/placeholder/300/200',
      tags: ['Research', 'Industry Report', '2025 Trends']
    },
    {
      id: 9,
      title: 'Security Enhancement: Advanced Threat Protection Now Available',
      category: 'product-updates',
      date: '2025-01-07',
      excerpt: 'Enhanced security features provide advanced threat protection and compliance capabilities for enterprise customers.',
      author: 'Security Team',
      readTime: '3 min read',
      image: '/api/placeholder/300/200',
      tags: ['Security', 'Threat Protection', 'Enterprise']
    },
  ];

  const pressReleases = [
    {
      id: 10,
      title: 'Zion App Announces Series C Funding Round of $50 Million',
      date: '2025-01-06',
      excerpt: 'Funding will accelerate product development and global expansion efforts.',
      category: 'press-releases'
    },
    {
      id: 11,
      title: 'New CEO Appointment: Industry Veteran Joins Zion App Leadership',
      date: '2025-01-05',
      excerpt: 'Experienced technology leader appointed to drive next phase of company growth.',
      category: 'press-releases'
    },
    {
      id: 12,
      title: 'Zion App Acquires AI Startup to Strengthen Machine Learning Capabilities',
      date: '2025-01-04',
      excerpt: 'Strategic acquisition enhances our AI and machine learning offerings.',
      category: 'press-releases'
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'press-releases': 'bg-blue-100 text-blue-800',
      'company-news': 'bg-green-100 text-green-800',
      'product-updates': 'bg-purple-100 text-purple-800',
      'partnerships': 'bg-orange-100 text-orange-800',
      'awards': 'bg-yellow-100 text-yellow-800',
      'thought-leadership': 'bg-indigo-100 text-indigo-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      'press-releases': 'Press Releases',
      'company-news': 'Company News',
      'product-updates': 'Product Updates',
      'partnerships': 'Partnerships',
      'awards': 'Awards & Recognition',
      'thought-leadership': 'Thought Leadership',
    };
    return names[category] || category;
  };

  const filteredNews = recentNews.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Newsroom - Zion App</title>
        <meta name="description" content="Latest news, press releases, and company updates from Zion App" />
        <meta name="keywords" content="news, press releases, company news, Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Newsroom
            </h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest news, announcements, and insights from Zion App
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Featured News */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredNews.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Featured</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {getCategoryName(item.category)}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>By {item.author}</span>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent News */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent News</h2>
              <div className="space-y-6">
                {filteredNews.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-xs">{getCategoryName(item.category)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {getCategoryName(item.category)}
                          </span>
                          <span className="text-gray-500 text-sm">{item.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-3">{item.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <span>By {item.author}</span>
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Releases */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Press Releases</h2>
                <div className="space-y-4">
                  {pressReleases.map((item) => (
                    <div key={item.id} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.excerpt}</p>
                      <div className="text-gray-500 text-xs">{new Date(item.date).toLocaleDateString()}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All Press Releases
                  </button>
                </div>
              </div>

              {/* Media Kit */}
              <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Media Kit</h2>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-gray-800">Company Logo</div>
                    <div className="text-sm text-gray-600">High-resolution logos and brand assets</div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-gray-800">Executive Bios</div>
                    <div className="text-sm text-gray-600">Leadership team information and photos</div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-gray-800">Fact Sheet</div>
                    <div className="text-sm text-gray-600">Key company statistics and information</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-4">Stay in the Loop</h2>
            <p className="text-blue-100 mb-6">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Media Inquiries?</h2>
            <p className="text-gray-600 mb-6">
              Our PR team is here to help with media requests, interviews, and press opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact PR Team
              </Link>
              <a href="mailto:press@zion.app" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                press@zion.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;