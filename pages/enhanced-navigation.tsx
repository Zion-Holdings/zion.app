import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationFeatures = [
    {
      title: 'Smart Search',
      description: 'Intelligent search with autocomplete, filters, and recent searches',
      icon: '🔍',
      benefits: ['Faster content discovery', 'Relevant results', 'Search history']
    },
    {
      title: 'Breadcrumb Navigation',
      description: 'Clear path indicators showing user location within the site',
      icon: '🍞',
      benefits: ['Easy navigation back', 'Context awareness', 'SEO friendly']
    },
    {
      title: 'Mega Menus',
      description: 'Rich dropdown menus with categorized content and quick actions',
      icon: '📋',
      benefits: ['Reduced clicks', 'Better organization', 'Visual hierarchy']
    },
    {
      title: 'Mobile-First Design',
      description: 'Responsive navigation that works seamlessly across all devices',
      icon: '📱',
      benefits: ['Touch-friendly', 'Adaptive layouts', 'Consistent experience']
    },
    {
      title: 'Keyboard Navigation',
      description: 'Full keyboard support for accessibility and power users',
      icon: '⌨️',
      benefits: ['Accessibility compliance', 'Faster navigation', 'No mouse required']
    },
    {
      title: 'Analytics Integration',
      description: 'Track navigation patterns to continuously improve user experience',
      icon: '📊',
      benefits: ['Data-driven decisions', 'User behavior insights', 'Performance metrics']
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Audit Current Navigation',
      description: 'Analyze existing navigation structure and identify pain points',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Design New Structure',
      description: 'Create wireframes and user flows for improved navigation',
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Implement Core Features',
      description: 'Build the main navigation components and functionality',
      duration: '1-2 weeks'
    },
    {
      step: 4,
      title: 'Add Advanced Features',
      description: 'Implement search, filters, and interactive elements',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Testing & Optimization',
      description: 'User testing, performance optimization, and accessibility checks',
      duration: '3-5 days'
    }
  ];

  const codeExamples = {
    search: `// Smart search component
const SmartSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = async (searchTerm) => {
    const searchResults = await searchAPI(searchTerm);
    setResults(searchResults);
  };
  
  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map(result => (
            <SearchResult key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
};`,
    
    breadcrumbs: `// Breadcrumb navigation
const Breadcrumbs = ({ path }) => {
  const breadcrumbItems = path.split('/').filter(Boolean);
  
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li><Link href="/">Home</Link></li>
        {breadcrumbItems.map((item, index) => (
          <li key={index}>
            {index === breadcrumbItems.length - 1 ? (
              <span className="current-page">{item}</span>
            ) : (
              <Link href={\`/\${breadcrumbItems.slice(0, index + 1).join('/')}\`}>
                {item}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};`,
    
    megaMenu: `// Mega menu component
const MegaMenu = ({ isOpen, onClose }) => {
  return (
    <div className={\`mega-menu \${isOpen ? 'open' : ''}\`}>
      <div className="mega-menu-content">
        <div className="menu-section">
          <h3>Products</h3>
          <ul>
            <li><Link href="/products/automation">Automation</Link></li>
            <li><Link href="/products/analytics">Analytics</Link></li>
            <li><Link href="/products/security">Security</Link></li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Resources</h3>
          <ul>
            <li><Link href="/documentation">Documentation</Link></li>
            <li><Link href="/tutorials">Tutorials</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Enhanced Navigation - Zion App</title>
        <meta name="description" content="Advanced navigation solutions to improve user experience and site usability" />
        <meta name="keywords" content="navigation, UX, user experience, web design, Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Enhanced Navigation
            </h1>
            <p className="text-xl text-gray-600">
              Transform your website's navigation into an intuitive, user-friendly experience
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {['overview', 'features', 'implementation', 'code', 'benefits'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">The Problem</h3>
                    <p className="text-blue-700">
                      Poor navigation leads to frustrated users, high bounce rates, and lost conversions. 
                      Traditional navigation often fails to guide users effectively through complex content structures.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">The Solution</h3>
                    <p className="text-green-700">
                      Enhanced navigation combines intelligent search, clear visual hierarchy, and 
                      intuitive user flows to create seamless browsing experiences.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <div className="text-2xl font-bold">40%</div>
                      <div className="text-sm">Faster page discovery</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">25%</div>
                      <div className="text-sm">Reduced bounce rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">60%</div>
                      <div className="text-sm">Improved user satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Section */}
            {activeSection === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {navigationFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Implementation Section */}
            {activeSection === 'implementation' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Implementation Timeline</h3>
                    <div className="space-y-4">
                      {implementationSteps.map((step) => (
                        <div key={step.step} className="flex items-start gap-4">
                          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{step.title}</h4>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                            <span className="text-blue-600 text-xs font-medium">{step.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">Best Practices</h3>
                    <ul className="space-y-2 text-yellow-700 text-sm">
                      <li>• Keep navigation consistent across all pages</li>
                      <li>• Use clear, descriptive labels</li>
                      <li>• Implement progressive disclosure</li>
                      <li>• Test with real users</li>
                      <li>• Monitor analytics and iterate</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Code Section */}
            {activeSection === 'code' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Smart Search</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                      {codeExamples.search}
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Breadcrumbs</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                      {codeExamples.breadcrumbs}
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Mega Menu</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                      {codeExamples.megaMenu}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {activeSection === 'benefits' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">User Experience</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Intuitive navigation reduces learning curve</li>
                      <li>• Faster access to desired content</li>
                      <li>• Reduced cognitive load</li>
                      <li>• Improved accessibility</li>
                      <li>• Better mobile experience</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Impact</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Higher conversion rates</li>
                      <li>• Increased time on site</li>
                      <li>• Better SEO performance</li>
                      <li>• Reduced support requests</li>
                      <li>• Competitive advantage</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
                  <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Navigation?</h3>
                  <p className="mb-6">
                    Let our team help you implement enhanced navigation that delights your users and drives results.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                      Get Started
                    </Link>
                    <Link href="/services" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNavigation;