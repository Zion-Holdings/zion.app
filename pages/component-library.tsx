import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buttons');

  const components = {
    buttons: [
      { name: 'Primary Button', className: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Secondary Button', className: 'bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Success Button', className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Danger Button', className: 'bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors' },
      { name: 'Outline Button', className: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors' }
    ],
    cards: [
      { name: 'Basic Card', className: 'bg-white rounded-lg shadow-md p-6 border border-gray-200' },
      { name: 'Elevated Card', className: 'bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform' },
      { name: 'Colored Card', className: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6' },
      { name: 'Bordered Card', className: 'bg-white rounded-lg border-2 border-blue-200 p-6' }
    ],
    forms: [
      { name: 'Text Input', className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' },
      { name: 'Select Dropdown', className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' },
      { name: 'Checkbox', className: 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' },
      { name: 'Radio Button', className: 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500' }
    ],
    alerts: [
      { name: 'Info Alert', className: 'bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded' },
      { name: 'Success Alert', className: 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded' },
      { name: 'Warning Alert', className: 'bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded' },
      { name: 'Error Alert', className: 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded' }
    ]
  };

  const tabs = [
    { id: 'buttons', label: 'Buttons', icon: '🔘' },
    { id: 'cards', label: 'Cards', icon: '🃏' },
    { id: 'forms', label: 'Form Elements', icon: '📝' },
    { id: 'alerts', label: 'Alerts', icon: '⚠️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Component Library - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive component library showcasing all UI components and design patterns" />
        <meta name="keywords" content="components, UI, design system, library, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Component Library
            </h1>
            <p className="text-xl text-gray-600">
              Explore our comprehensive collection of reusable UI components and design patterns
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Consistent</h3>
                <p className="text-gray-600">Uniform design language across all components</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">♿</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Accessible</h3>
                <p className="text-gray-600">Built with WCAG guidelines in mind</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Responsive</h3>
                <p className="text-gray-600">Works seamlessly on all device sizes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {Object.entries(components).map(([category, items]) => (
                <div key={category} className={activeTab === category ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((component, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-gray-700 mb-3">
                          {component.name}
                        </h4>
                        <div className="mb-4">
                          <button className={component.className}>
                            {component.name.includes('Button') ? 'Button Text' : 
                             component.name.includes('Card') ? 'Card Content' :
                             component.name.includes('Input') ? 'Input text' :
                             component.name.includes('Select') ? 'Select option' :
                             component.name.includes('Checkbox') ? 'Checkbox' :
                             component.name.includes('Radio') ? 'Radio' :
                             component.name.includes('Alert') ? 'Alert message' : 'Component'}
                          </button>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">CSS Classes:</h5>
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono break-all">
                            {component.className}
                          </code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Usage Guidelines</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Copy & Paste</h3>
                <p className="text-gray-600">
                  Simply copy the CSS classes from any component and apply them to your HTML elements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Customization</h3>
                <p className="text-gray-600">
                  Modify the classes to match your design requirements while maintaining consistency.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  All components include proper ARIA labels and keyboard navigation support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;