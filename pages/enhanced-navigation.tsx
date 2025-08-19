import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EnhancedNavigationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigationSections = [
    {
      id: 'core',
      title: "Core Systems",
      icon: "⚙️",
      description: "Essential automation and management tools",
      color: "blue",
      items: [
        { name: "Automation Hub", path: "/automation", description: "Manage autonomous systems", tags: ["automation", "management"] },
        { name: "Live Dashboard", path: "/live-dashboard", description: "Real-time monitoring", tags: ["monitoring", "real-time"] },
        { name: "System Reports", path: "/reports", description: "Analytics and insights", tags: ["analytics", "reports"] },
        { name: "Control Center", path: "/front", description: "Main system control", tags: ["control", "dashboard"] }
      ]
    },
    {
      id: 'content',
      title: "Content & Resources",
      icon: "📚",
      description: "Knowledge base and learning materials",
      color: "green",
      items: [
        { name: "Blog", path: "/blog", description: "Latest insights and updates", tags: ["blog", "news", "insights"] },
        { name: "Content Hub", path: "/content-hub", description: "Tutorials and resources", tags: ["tutorials", "resources", "learning"] },
        { name: "Events", path: "/events", description: "Workshops and conferences", tags: ["events", "workshops", "conferences"] },
        { name: "Newsroom", path: "/newsroom", description: "Press releases and media", tags: ["press", "media", "announcements"] }
      ]
    },
    {
      id: 'interactive',
      title: "Interactive Tools",
      icon: "🎮",
      description: "Hands-on experience and testing",
      color: "purple",
      items: [
        { name: "Playground", path: "/playground", description: "Try AI automation live", tags: ["demo", "testing", "interactive"] },
        { name: "Component Library", path: "/component-library", description: "UI components and design", tags: ["ui", "components", "design"] },
        { name: "Explore", path: "/explore", description: "Discover technologies", tags: ["explore", "discover", "technologies"] },
        { name: "Discover", path: "/discover", description: "Learning paths and resources", tags: ["learning", "paths", "education"] }
      ]
    },
    {
      id: 'company',
      title: "Company & Support",
      icon: "🏢",
      description: "About Zion and getting help",
      color: "orange",
      items: [
        { name: "About", path: "/about", description: "Company information", tags: ["company", "about", "info"] },
        { name: "Services", path: "/services", description: "What we offer", tags: ["services", "offerings", "solutions"] },
        { name: "Contact", path: "/contact", description: "Get in touch", tags: ["contact", "support", "help"] },
        { name: "Privacy", path: "/privacy", description: "Privacy policy", tags: ["privacy", "policy", "legal"] }
      ]
    }
  ];

  const allItems = navigationSections.flatMap(section => 
    section.items.map(item => ({ ...item, section: section.title, sectionColor: section.color }))
  );

  const filteredItems = allItems.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
      navigationSections.find(s => s.id === selectedCategory)?.items.includes(item);
    
    return matchesSearch && matchesCategory;
  });

  const quickActions = [
    { name: "Home", path: "/", icon: "🏠", color: "blue" },
    { name: "Landing", path: "/landing", icon: "🚀", color: "green" },
    { name: "Main Front", path: "/main/front", icon: "⚙️", color: "purple" },
    { name: "Front", path: "/front", icon: "🎛️", color: "orange" }
  ];

  return (
    <>
      <Head>
        <title>Enhanced Navigation | Zion - Advanced Site Navigation</title>
        <meta name="description" content="Advanced navigation system for Zion's autonomous automation platform with search, filtering, and intelligent routing." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enhanced Navigation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Advanced navigation system with intelligent search, filtering, and smart routing
            </p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for pages, features, or content..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {navigationSections.map(section => (
                  <option key={section.id} value={section.id}>{section.title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link 
                key={index}
                href={action.path}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{action.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Search Results for "{searchQuery}" ({filteredItems.length} found)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.path}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block bg-${item.sectionColor}-100 text-${item.sectionColor}-800 text-xs font-semibold px-3 py-1 rounded-full`}>
                      {item.section}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Navigation by Category</h2>
          <div className="space-y-12">
            {navigationSections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-3xl">{section.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <p className="text-gray-600">{section.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex}
                      href={item.path}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Visit →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Recommendations */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Smart Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Personalized</h3>
                <p className="text-blue-100 text-sm">
                  Navigation adapts to your usage patterns and preferences
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Access</h3>
                <p className="text-blue-100 text-sm">
                  Quick access to frequently used features and pages
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-2">Intelligent</h3>
                <p className="text-blue-100 text-sm">
                  AI-powered suggestions based on context and behavior
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Navigation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Search</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Full-text search across all content</li>
                <li>• Tag-based filtering and categorization</li>
                <li>• Fuzzy matching for typos and variations</li>
                <li>• Search history and suggestions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Routing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Context-aware navigation suggestions</li>
                <li>• Breadcrumb navigation with shortcuts</li>
                <li>• Related page recommendations</li>
                <li>• Usage analytics and optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Help with Navigation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our enhanced navigation system is designed to be intuitive, but we're here to help if you need assistance.
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                href="/content-hub"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}