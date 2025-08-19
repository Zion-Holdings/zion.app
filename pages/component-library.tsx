import React from 'react';
import Head from 'next/head';

export default function ComponentLibrary() {
  const components = [
    {
      name: 'Buttons',
      description: 'Primary, secondary, and ghost button variants',
      category: 'Interactive'
    },
    {
      name: 'Cards',
      description: 'Content containers with various layouts and styles',
      category: 'Layout'
    },
    {
      name: 'Forms',
      description: 'Input fields, selects, and form validation',
      category: 'Interactive'
    },
    {
      name: 'Navigation',
      description: 'Menus, breadcrumbs, and pagination',
      category: 'Navigation'
    },
    {
      name: 'Modals',
      description: 'Overlays, dialogs, and popups',
      category: 'Overlay'
    },
    {
      name: 'Tables',
      description: 'Data tables with sorting and filtering',
      category: 'Data Display'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Component Library - Zion App</title>
        <meta name="description" content="Browse and test our comprehensive collection of UI components" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Component Library
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of reusable UI components designed for modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {components.map((component) => (
              <div key={component.name} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{component.name}</h3>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                    {component.category}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{component.description}</p>
                <button className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                  View Component
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Design System
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Colors</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded"></div>
                    <span className="text-gray-300">Primary (Cyan)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded"></div>
                    <span className="text-gray-300">Secondary (Purple)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded"></div>
                    <span className="text-gray-300">Success (Green)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Typography</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-2xl font-bold text-white">Heading 1</h4>
                    <p className="text-gray-400 text-sm">Bold, 2rem, line-height 1.2</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Heading 2</h4>
                    <p className="text-gray-400 text-sm">Semibold, 1.5rem, line-height 1.3</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Body Text</p>
                    <p className="text-gray-400 text-sm">Regular, 1rem, line-height 1.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}