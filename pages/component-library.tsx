import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buttons');

  const components = {
    buttons: [
      { name: 'Primary Button', variant: 'primary', code: 'className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"' },
      { name: 'Secondary Button', variant: 'secondary', code: 'className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"' },
      { name: 'Success Button', variant: 'success', code: 'className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"' },
      { name: 'Danger Button', variant: 'danger', code: 'className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"' },
      { name: 'Outline Button', variant: 'outline', code: 'className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"' }
    ],
    forms: [
      { name: 'Text Input', type: 'text', placeholder: 'Enter text...' },
      { name: 'Email Input', type: 'email', placeholder: 'Enter email...' },
      { name: 'Password Input', type: 'password', placeholder: 'Enter password...' },
      { name: 'Textarea', type: 'textarea', placeholder: 'Enter description...' },
      { name: 'Select Dropdown', type: 'select', options: ['Option 1', 'Option 2', 'Option 3'] }
    ],
    cards: [
      { title: 'Feature Card', description: 'Highlight key features with this card design', icon: '🚀' },
      { title: 'Stats Card', description: 'Display important statistics and metrics', icon: '📊' },
      { title: 'Testimonial Card', description: 'Show customer feedback and reviews', icon: '💬' }
    ],
    navigation: [
      { name: 'Main Navigation', type: 'horizontal', items: ['Home', 'About', 'Services', 'Contact'] },
      { name: 'Sidebar Navigation', type: 'vertical', items: ['Dashboard', 'Reports', 'Settings', 'Profile'] },
      { name: 'Breadcrumbs', type: 'breadcrumb', items: ['Home', 'Products', 'Category', 'Item'] }
    ]
  };

  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case 'primary': return 'px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors';
      case 'secondary': return 'px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors';
      case 'success': return 'px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors';
      case 'danger': return 'px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors';
      case 'outline': return 'px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors';
      default: return 'px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Component Library - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive component library for bolt.new.zion.app design system" />
        <meta name="keywords" content="components, design system, UI, library, React" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Component Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive collection of reusable UI components for building consistent, 
              beautiful interfaces across the bolt.new.zion.app platform.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/automation" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Automation
              </Link>
              <Link href="/api-documentation" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                API Docs
              </Link>
            </div>
          </nav>

          {/* Component Categories */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Component Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.keys(components).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    activeTab === category
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-lg font-semibold capitalize">{category}</div>
                  <div className="text-sm text-gray-500">{components[category as keyof typeof components].length} components</div>
                </button>
              ))}
            </div>
          </div>

          {/* Component Display */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
              {activeTab} Components
            </h2>

            {activeTab === 'buttons' && (
              <div className="space-y-8">
                {components.buttons.map((button, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{button.name}</h3>
                    <div className="mb-4">
                      <button className={getButtonClasses(button.variant)}>
                        {button.name}
                      </button>
                    </div>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      {button.code}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'forms' && (
              <div className="space-y-8">
                {components.forms.map((form, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{form.name}</h3>
                    <div className="mb-4">
                      {form.type === 'textarea' ? (
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={form.placeholder}
                          rows={3}
                        />
                      ) : form.type === 'select' ? (
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          {form.options?.map((option, optIndex) => (
                            <option key={optIndex} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={form.type}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={form.placeholder}
                        />
                      )}
                    </div>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      {form.type === 'textarea' ? (
                        '&lt;textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"&gt;&lt;/textarea&gt;'
                      ) : form.type === 'select' ? (
                        '&lt;select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"&gt;&lt;/select&gt;'
                      ) : (
                        '&lt;input type="' + form.type + '" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /&gt;'
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'cards' && (
              <div className="grid md:grid-cols-3 gap-6">
                {components.cards.map((card, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      &lt;div className="border border-gray-200 rounded-lg p-6"&gt;...&lt;/div&gt;
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'navigation' && (
              <div className="space-y-8">
                {components.navigation.map((nav, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{nav.name}</h3>
                    <div className="mb-4">
                      {nav.type === 'horizontal' && (
                        <nav className="flex space-x-4">
                          {nav.items?.map((item, itemIndex) => (
                            <a key={itemIndex} href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                              {item}
                            </a>
                          ))}
                        </nav>
                      )}
                      {nav.type === 'vertical' && (
                        <nav className="flex flex-col space-y-2">
                          {nav.items?.map((item, itemIndex) => (
                            <a key={itemIndex} href="#" className="text-blue-600 hover:text-blue-800 font-medium py-2">
                              {item}
                            </a>
                          ))}
                        </nav>
                      )}
                      {nav.type === 'breadcrumb' && (
                        <nav className="flex items-center space-x-2 text-sm">
                          {nav.items?.map((item, itemIndex) => (
                            <React.Fragment key={itemIndex}>
                              <a href="#" className="text-blue-600 hover:text-blue-800">
                                {item}
                              </a>
                              {itemIndex < nav.items!.length - 1 && (
                                <span className="text-gray-400">/</span>
                              )}
                            </React.Fragment>
                          ))}
                        </nav>
                      )}
                    </div>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      &lt;nav className="flex space-x-4"&gt;...&lt;/nav&gt;
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Usage Guidelines */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consistency</h3>
                <p className="text-gray-600">
                  Use components consistently across your application to maintain a cohesive design language.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  All components are built with accessibility in mind, including proper ARIA labels and keyboard navigation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                  Components automatically adapt to different screen sizes using Tailwind CSS responsive utilities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customization</h3>
                <p className="text-gray-600">
                  Modify component styles using Tailwind CSS classes or extend them with custom CSS.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
            <p className="text-blue-700 mb-6">
              Explore our components and start building beautiful, consistent interfaces today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/automation" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Automation
              </Link>
              <Link href="/contact" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;