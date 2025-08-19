import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NavigationPage() {
  const navigationCategories = [
    {
      title: "Core Systems",
      description: "Essential automation and management tools",
      items: [
        { name: "Automation Hub", path: "/automation", description: "Manage autonomous systems" },
        { name: "Live Dashboard", path: "/live-dashboard", description: "Real-time monitoring" },
        { name: "System Reports", path: "/reports", description: "Analytics and insights" },
        { name: "Control Center", path: "/front", description: "Main system control" }
      ]
    },
    {
      title: "Content & Resources",
      description: "Knowledge base and learning materials",
      items: [
        { name: "Blog", path: "/blog", description: "Latest insights and updates" },
        { name: "Content Hub", path: "/content-hub", description: "Tutorials and resources" },
        { name: "Events", path: "/events", description: "Workshops and conferences" },
        { name: "Newsroom", path: "/newsroom", description: "Press releases and media" }
      ]
    },
    {
      title: "Interactive Tools",
      description: "Hands-on experience and testing",
      items: [
        { name: "Playground", path: "/playground", description: "Try AI automation live" },
        { name: "Component Library", path: "/component-library", description: "UI components and design" },
        { name: "Explore", path: "/explore", description: "Discover technologies" },
        { name: "Discover", path: "/discover", description: "Learning paths and resources" }
      ]
    },
    {
      title: "Company & Support",
      description: "About Zion and getting help",
      items: [
        { name: "About", path: "/about", description: "Company information" },
        { name: "Services", path: "/services", description: "What we offer" },
        { name: "Contact", path: "/contact", description: "Get in touch" },
        { name: "Privacy", path: "/privacy", description: "Privacy policy" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Landing", path: "/landing", icon: "🚀" },
    { name: "Main Front", path: "/main/front", icon: "⚙️" },
    { name: "Front", path: "/front", icon: "🎛️" }
  ];

  return (
    <>
      <Head>
        <title>Navigation | Zion - Site Navigation Guide</title>
        <meta name="description" content="Complete navigation guide for Zion's website and autonomous automation platform." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Site Navigation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Complete guide to navigating Zion's autonomous automation platform
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.path}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{link.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{link.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Navigation by Category</h2>
          <div className="space-y-12">
            {navigationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex}
                      href={item.path}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <div className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Visit →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Site Map */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Site Map</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Main Pages</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
                  <li><Link href="/landing" className="text-blue-600 hover:text-blue-800">Landing</Link></li>
                  <li><Link href="/front" className="text-blue-600 hover:text-blue-800">Front</Link></li>
                  <li><Link href="/main/front" className="text-blue-600 hover:text-blue-800">Main Front</Link></li>
                  <li><Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link></li>
                  <li><Link href="/services" className="text-blue-600 hover:text-blue-800">Services</Link></li>
                  <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Core Features</h3>
                <ul className="space-y-2">
                  <li><Link href="/automation" className="text-blue-600 hover:text-blue-800">Automation</Link></li>
                  <li><Link href="/live-dashboard" className="text-blue-600 hover:text-blue-800">Live Dashboard</Link></li>
                  <li><Link href="/reports" className="text-blue-600 hover:text-blue-800">Reports</Link></li>
                  <li><Link href="/playground" className="text-blue-600 hover:text-blue-800">Playground</Link></li>
                  <li><Link href="/component-library" className="text-blue-600 hover:text-blue-800">Component Library</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Content & Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link></li>
                  <li><Link href="/content-hub" className="text-blue-600 hover:text-blue-800">Content Hub</Link></li>
                  <li><Link href="/events" className="text-blue-600 hover:text-blue-800">Events</Link></li>
                  <li><Link href="/newsroom" className="text-blue-600 hover:text-blue-800">Newsroom</Link></li>
                  <li><Link href="/explore" className="text-blue-600 hover:text-blue-800">Explore</Link></li>
                  <li><Link href="/discover" className="text-blue-600 hover:text-blue-800">Discover</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Search Functionality */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Use our search functionality to quickly find pages, features, or information.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search for pages, features, or content..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Navigating?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you find what you need and get the most out of Zion.
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                href="/content-hub"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors"
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