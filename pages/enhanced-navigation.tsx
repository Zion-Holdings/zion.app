import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationFeatures = [
    {
      icon: '🧭',
      title: 'Smart Routing',
      description: 'Intelligent navigation that adapts to user behavior and preferences',
      benefits: ['Context-aware suggestions', 'Personalized shortcuts', 'Learning algorithms']
    },
    {
      icon: '🔍',
      title: 'Advanced Search',
      description: 'Powerful search capabilities with filters, autocomplete, and suggestions',
      benefits: ['Real-time results', 'Fuzzy matching', 'Search history']
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Optimized navigation for all device sizes and orientations',
      benefits: ['Touch-friendly', 'Responsive layouts', 'Gesture support']
    },
    {
      icon: '♿',
      title: 'Accessibility Features',
      description: 'Comprehensive accessibility support for all users',
      benefits: ['Keyboard navigation', 'Screen reader support', 'High contrast modes']
    }
  ];

  const navigationComponents = [
    { name: 'Main Navigation', description: 'Primary site navigation with dropdown menus', status: 'Active' },
    { name: 'Breadcrumbs', description: 'Hierarchical navigation showing current location', status: 'Active' },
    { name: 'Sidebar Navigation', description: 'Secondary navigation for content sections', status: 'Active' },
    { name: 'Footer Navigation', description: 'Bottom navigation with links and information', status: 'Active' },
    { name: 'Mobile Menu', description: 'Collapsible navigation for mobile devices', status: 'Active' },
    { name: 'Search Bar', description: 'Global search functionality with suggestions', status: 'Active' }
  ];

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'components', label: 'Components', icon: '🧩' },
    { id: 'implementation', label: 'Implementation', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Head>
        <title>Enhanced Navigation - bolt.new.zion.app</title>
        <meta name="description" content="Advanced navigation system with smart routing, search, and accessibility features" />
        <meta name="keywords" content="navigation, routing, search, accessibility, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Enhanced Navigation System
            </h1>
            <p className="text-xl text-gray-600">
              Experience intuitive, accessible, and intelligent navigation designed for modern web applications
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </div>

            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧭</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Navigation Philosophy</h3>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Our enhanced navigation system is built on the principle that users should never feel lost. 
                    Every interaction is designed to guide users efficiently to their destination while providing 
                    context and discoverability.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎯</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">User-Centric</h4>
                    <p className="text-gray-600">Designed around user needs and behaviors</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🚀</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Performance</h4>
                    <p className="text-gray-600">Lightning-fast navigation with minimal latency</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🔧</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Flexible</h4>
                    <p className="text-gray-600">Adaptable to different content structures</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'features' && (
              <div className="grid md:grid-cols-2 gap-8">
                {navigationFeatures.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'components' && (
              <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {navigationComponents.map((component, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">{component.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {component.status}
                        </span>
                      </div>
                      <p className="text-gray-600">{component.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'implementation' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Implementation</h3>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-medium text-gray-800 mb-2">Key Technologies:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Next.js App Router for efficient routing</li>
                      <li>• React Context for state management</li>
                      <li>• Tailwind CSS for responsive design</li>
                      <li>• Framer Motion for smooth animations</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Code Splitting</h4>
                      <p className="text-gray-600">Automatic route-based code splitting for optimal performance</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Prefetching</h4>
                      <p className="text-gray-600">Intelligent prefetching of likely navigation targets</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Experience Enhanced Navigation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Live Demo</h3>
                <p className="text-gray-600 mb-4">
                  Try out our enhanced navigation system with interactive examples.
                </p>
                <Link href="/" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Explore Site
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Component Library</h3>
                <p className="text-gray-600 mb-4">
                  View all available navigation components and their implementations.
                </p>
                <Link href="/component-library" className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  View Components
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNavigation;