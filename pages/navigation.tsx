import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationTypes = [
    {
      icon: '🧭',
      title: 'Main Navigation',
      description: 'Primary site navigation with dropdown menus and search functionality',
      status: 'Active',
      features: ['Dropdown menus', 'Search integration', 'Responsive design']
    },
    {
      icon: '🍞',
      title: 'Breadcrumbs',
      description: 'Hierarchical navigation showing current location in the site structure',
      status: 'Active',
      features: ['Location tracking', 'Quick navigation', 'SEO friendly']
    },
    {
      icon: '📱',
      title: 'Mobile Navigation',
      description: 'Optimized navigation for mobile devices with touch-friendly controls',
      status: 'Active',
      features: ['Touch optimized', 'Collapsible menu', 'Gesture support']
    },
    {
      icon: '🔍',
      title: 'Search Navigation',
      description: 'Advanced search functionality with filters and suggestions',
      status: 'Active',
      features: ['Real-time search', 'Filters', 'Search history']
    }
  ];

  const navigationFeatures = [
    {
      icon: '♿',
      title: 'Accessibility',
      description: 'Full WCAG compliance with keyboard navigation and screen reader support',
      benefits: ['Keyboard navigation', 'Screen reader support', 'High contrast modes']
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimized for speed with intelligent prefetching and caching',
      benefits: ['Fast loading', 'Prefetching', 'Minimal latency']
    },
    {
      icon: '🎯',
      title: 'User Experience',
      description: 'Intuitive design that guides users to their destination efficiently',
      benefits: ['Clear pathways', 'Visual feedback', 'Consistent patterns']
    },
    {
      icon: '🔧',
      title: 'Customization',
      description: 'Flexible navigation system that adapts to different content structures',
      benefits: ['Configurable menus', 'Dynamic routing', 'Theme integration']
    }
  ];

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'types', label: 'Navigation Types', icon: '🧭' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'implementation', label: 'Implementation', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Head>
        <title>Navigation - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive navigation system with accessibility and performance features" />
        <meta name="keywords" content="navigation, accessibility, performance, UX, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Navigation System
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive navigation solutions designed for accessibility, performance, and user experience
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
                    Our navigation system is built on the principle that users should never feel lost. 
                    Every element is designed to guide users efficiently while maintaining accessibility 
                    and performance standards.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎯</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">User-Centric Design</h4>
                    <p className="text-gray-600">Navigation designed around user needs and behaviors</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">♿</div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Accessibility First</h4>
                    <p className="text-gray-600">WCAG compliant with comprehensive accessibility support</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'types' && (
              <div className="grid md:grid-cols-2 gap-8">
                {navigationTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">{type.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {type.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Experience Navigation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Live Demo</h3>
                <p className="text-gray-600 mb-4">
                  Try out our navigation system with interactive examples.
                </p>
                <Link href="/enhanced-navigation" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Enhanced Navigation
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

export default Navigation;