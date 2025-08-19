import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComponentLibrary = () => {
  const [activeTab, setActiveTab] = useState('buttons');
  const [modalOpen, setModalOpen] = useState(false);

  const components = {
    buttons: [
      { name: 'Primary Button', variant: 'primary', code: '<Button variant="primary">Primary</Button>' },
      { name: 'Secondary Button', variant: 'secondary', code: '<Button variant="secondary">Secondary</Button>' },
      { name: 'Success Button', variant: 'success', code: '<Button variant="success">Success</Button>' },
      { name: 'Danger Button', variant: 'danger', code: '<Button variant="danger">Danger</Button>' },
      { name: 'Outline Button', variant: 'outline', code: '<Button variant="outline">Outline</Button>' },
    ],
    forms: [
      { name: 'Text Input', code: '<input type="text" placeholder="Enter text..." />' },
      { name: 'Select Dropdown', code: '<select><option>Option 1</option></select>' },
      { name: 'Checkbox', code: '<input type="checkbox" />' },
      { name: 'Radio Button', code: '<input type="radio" />' },
      { name: 'Textarea', code: '<textarea placeholder="Enter text..."></textarea>' },
    ],
    navigation: [
      { name: 'Breadcrumbs', code: '<nav aria-label="Breadcrumb"><ol><li>Home</li></ol></nav>' },
      { name: 'Pagination', code: '<nav><ul><li><a href="#">1</a></li></ul></nav>' },
      { name: 'Tabs', code: '<div role="tablist"><button role="tab">Tab 1</button></div>' },
    ],
    feedback: [
      { name: 'Alert', code: '<div role="alert">Alert message</div>' },
      { name: 'Modal', code: '<div role="dialog">Modal content</div>' },
      { name: 'Tooltip', code: '<div role="tooltip">Tooltip text</div>' },
      { name: 'Progress Bar', code: '<progress value="70" max="100">70%</progress>' },
    ]
  };

  const Button = ({ variant, children, ...props }) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
    };
    
    return (
      <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
        {children}
      </button>
    );
  };

  return (
    <>
      <Head>
        <title>Component Library - Zion App</title>
        <meta name="description" content="Explore our comprehensive component library with interactive examples and documentation." />
        <meta name="keywords" content="UI components, design system, React components, web development" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Component Library</h1>
                <p className="text-gray-600 mt-2">Design system and reusable UI components</p>
              </div>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                ← Back to Home
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {Object.keys(components).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === category
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          {/* Component Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {components[activeTab].map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{component.name}</h3>
                
                {/* Component Preview */}
                <div className="mb-4 p-4 bg-gray-50 rounded-md">
                  {activeTab === 'buttons' && (
                    <Button variant={component.variant}>
                      {component.name.split(' ')[0]}
                    </Button>
                  )}
                  {activeTab === 'forms' && (
                    <div className="space-y-2">
                      {component.name === 'Text Input' && (
                        <input type="text" placeholder="Enter text..." className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                      )}
                      {component.name === 'Select Dropdown' && (
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      )}
                      {component.name === 'Checkbox' && (
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Checkbox label</span>
                        </label>
                      )}
                      {component.name === 'Radio Button' && (
                        <label className="flex items-center">
                          <input type="radio" name="radio-group" className="mr-2" />
                          <span>Radio option</span>
                        </label>
                      )}
                      {component.name === 'Textarea' && (
                        <textarea placeholder="Enter text..." className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={3} />
                      )}
                    </div>
                  )}
                  {activeTab === 'navigation' && (
                    <div className="text-sm text-gray-600">
                      {component.name === 'Breadcrumbs' && (
                        <nav aria-label="Breadcrumb">
                          <ol className="flex space-x-2">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Home</a></li>
                            <li className="text-gray-500">/</li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Components</a></li>
                            <li className="text-gray-500">/</li>
                            <li className="text-gray-900">Library</li>
                          </ol>
                        </nav>
                      )}
                      {component.name === 'Pagination' && (
                        <nav>
                          <ul className="flex space-x-1">
                            <li><a href="#" className="px-3 py-2 border rounded-md hover:bg-gray-50">1</a></li>
                            <li><a href="#" className="px-3 py-2 border rounded-md bg-blue-600 text-white">2</a></li>
                            <li><a href="#" className="px-3 py-2 border rounded-md hover:bg-gray-50">3</a></li>
                          </ul>
                        </nav>
                      )}
                      {component.name === 'Tabs' && (
                        <div role="tablist" className="flex space-x-1">
                          <button role="tab" className="px-3 py-2 border rounded-md bg-blue-600 text-white">Tab 1</button>
                          <button role="tab" className="px-3 py-2 border rounded-md hover:bg-gray-50">Tab 2</button>
                        </div>
                      )}
                    </div>
                  )}
                  {activeTab === 'feedback' && (
                    <div className="text-sm">
                      {component.name === 'Alert' && (
                        <div role="alert" className="p-3 bg-blue-100 text-blue-800 rounded-md">
                          This is an alert message
                        </div>
                      )}
                      {component.name === 'Modal' && (
                        <button
                          onClick={() => setModalOpen(true)}
                          className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          Open Modal
                        </button>
                      )}
                      {component.name === 'Tooltip' && (
                        <div className="relative group">
                          <button className="px-3 py-2 bg-gray-600 text-white rounded-md">
                            Hover for tooltip
                          </button>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Tooltip text
                          </div>
                        </div>
                      )}
                      {component.name === 'Progress Bar' && (
                        <div className="w-full">
                          <progress value="70" max="100" className="w-full h-2">70%</progress>
                          <p className="text-xs text-gray-600 mt-1">70% complete</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Code Example */}
                <div className="bg-gray-900 text-green-400 p-3 rounded-md text-sm font-mono overflow-x-auto">
                  <code>{component.code}</code>
                </div>
              </div>
            ))}
          </div>

          {/* Usage Guidelines */}
          <div className="mt-12 bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• All interactive elements are keyboard accessible</li>
                  <li>• Proper ARIA labels and roles are implemented</li>
                  <li>• Color contrast meets WCAG AA standards</li>
                  <li>• Focus indicators are clearly visible</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Practices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use semantic HTML elements</li>
                  <li>• Maintain consistent spacing and sizing</li>
                  <li>• Follow the established design tokens</li>
                  <li>• Test across different devices and browsers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Modal Example</h3>
              <p className="text-gray-600 mb-6">
                This is an example modal component. It demonstrates proper focus management and accessibility.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ComponentLibrary;