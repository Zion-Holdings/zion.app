import React from 'react';
import Head from 'next/head';

export default function ComponentLibraryPage() {
  const components = [
    {
      name: "Buttons",
      description: "Primary, secondary, and tertiary button styles",
      examples: ["Primary", "Secondary", "Outline", "Ghost"]
    },
    {
      name: "Forms",
      description: "Input fields, labels, and form validation",
      examples: ["Text Input", "Select", "Checkbox", "Radio"]
    },
    {
      name: "Cards",
      description: "Content containers with various layouts",
      examples: ["Basic", "With Image", "With Actions", "Compact"]
    },
    {
      name: "Navigation",
      description: "Navigation menus and breadcrumbs",
      examples: ["Navbar", "Sidebar", "Breadcrumbs", "Pagination"]
    }
  ];

  return (
    <>
      <Head>
        <title>Component Library | Zion - UI Components</title>
        <meta name="description" content="Explore Zion's comprehensive UI component library for building consistent interfaces." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900">Component Library</h1>
            <p className="text-gray-600 mt-2">Design system and UI components for Zion applications</p>
          </div>
        </div>

        {/* Components Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{component.name}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="space-y-2">
                  {component.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-500">
                      • {example}
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Examples →
                </button>
              </div>
            ))}
          </div>

          {/* Design Tokens */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Tokens</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Colors</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                      <span className="text-sm text-gray-600">Primary Blue</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded mr-2"></div>
                      <span className="text-sm text-gray-600">Secondary Purple</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-600 rounded mr-2"></div>
                      <span className="text-sm text-gray-600">Neutral Gray</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Typography</h3>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Heading:</span> Inter, 32px
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Body:</span> Inter, 16px
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Caption:</span> Inter, 14px
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Spacing</h3>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">XS:</span> 4px
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">S:</span> 8px
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">M:</span> 16px
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}