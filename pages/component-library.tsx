import React, { useState } from 'react';
import Head from 'next/head';

const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buttons');
  const [theme, setTheme] = useState('dark');

  const components = {
    buttons: [
      { name: 'Primary Button', className: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Secondary Button', className: 'bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Success Button', className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Danger Button', className: 'bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Outline Button', className: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Ghost Button', className: 'text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
    ],
    forms: [
      { name: 'Text Input', className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' },
      { name: 'Textarea', className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none' },
      { name: 'Select', className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' },
      { name: 'Checkbox', className: 'w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' },
      { name: 'Radio', className: 'w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500' },
    ],
    cards: [
      { name: 'Basic Card', className: 'bg-white rounded-lg shadow-md p-6 border border-gray-200' },
      { name: 'Elevated Card', className: 'bg-white rounded-lg shadow-lg p-6 border border-gray-200 transform hover:scale-105 transition-transform' },
      { name: 'Dark Card', className: 'bg-gray-800 text-white rounded-lg shadow-md p-6 border border-gray-700' },
      { name: 'Gradient Card', className: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md p-6' },
    ],
    alerts: [
      { name: 'Info Alert', className: 'bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg' },
      { name: 'Success Alert', className: 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg' },
      { name: 'Warning Alert', className: 'bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg' },
      { name: 'Error Alert', className: 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg' },
    ],
    navigation: [
      { name: 'Primary Nav', className: 'bg-gray-800 text-white px-6 py-4 rounded-lg' },
      { name: 'Secondary Nav', className: 'bg-gray-100 text-gray-800 px-6 py-4 rounded-lg' },
      { name: 'Pill Nav', className: 'bg-blue-600 text-white px-6 py-2 rounded-full' },
    ],
    data: [
      { name: 'Table', className: 'w-full border-collapse border border-gray-300' },
      { name: 'Badge', className: 'inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full' },
      { name: 'Progress Bar', className: 'w-full bg-gray-200 rounded-full h-2' },
      { name: 'Avatar', className: 'w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center' },
    ]
  };

  const tabs = [
    { id: 'buttons', name: 'Buttons', icon: '🔘' },
    { id: 'forms', name: 'Forms', icon: '📝' },
    { id: 'cards', name: 'Cards', icon: '🃏' },
    { id: 'alerts', name: 'Alerts', icon: '⚠️' },
    { id: 'navigation', name: 'Navigation', icon: '🧭' },
    { id: 'data', name: 'Data Display', icon: '📊' },
  ];

  return (
    <>
      <Head>
        <title>Component Library - Zion AI Marketplace</title>
        <meta name="description" content="Explore our comprehensive component library for building beautiful UI interfaces" />
        <meta name="keywords" content="components, UI, design system, Zion AI, marketplace" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Component Library
                </h1>
                <p className="text-xl text-gray-300 mt-4">
                  Build beautiful interfaces with our comprehensive UI components
                </p>
              </div>
              
              {/* Theme Toggle */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Theme:</span>
                <select 
                  value={theme} 
                  onChange={(e) => setTheme(e.target.value)}
                  className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded-lg"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Component Display */}
          <div className="space-y-8">
            {activeTab === 'buttons' && (
              <section>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Button Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {components.buttons.map((button, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                      <h3 className="text-lg font-semibold text-white mb-4">{button.name}</h3>
                      <button className={button.className}>
                        {button.name}
                      </button>
                      <div className="mt-4 bg-gray-900 rounded p-3 font-mono text-sm overflow-x-auto">
                        <code className="text-green-400 text-xs">
                          className="{button.className}"
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'forms' && (
              <section>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Form Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {components.forms.map((form, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                      <h3 className="text-lg font-semibold text-white mb-4">{form.name}</h3>
                      {form.name === 'Text Input' && (
                        <input type="text" placeholder="Enter text..." className={form.className} />
                      )}
                      {form.name === 'Textarea' && (
                        <textarea placeholder="Enter text..." rows={3} className={form.className}></textarea>
                      )}
                      {form.name === 'Select' && (
                        <select className={form.className}>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      )}
                      {form.name === 'Checkbox' && (
                        <input type="checkbox" className={form.className} />
                      )}
                      {form.name === 'Radio' && (
                        <input type="radio" name="radio-group" className={form.className} />
                      )}
                      <div className="mt-4 bg-gray-900 rounded p-3 font-mono text-sm overflow-x-auto">
                        <code className="text-green-400 text-xs">
                          className="{form.className}"
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'cards' && (
              <section>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Card Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {components.cards.map((card, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                      <h3 className="text-lg font-semibold text-white mb-4">{card.name}</h3>
                      <div className={card.className}>
                        <h4 className="font-semibold mb-2">Card Title</h4>
                        <p className="text-sm opacity-80">This is a sample card component with some content.</p>
                      </div>
                      <div className="mt-4 bg-gray-900 rounded p-3 font-mono text-sm overflow-x-auto">
                        <code className="text-green-400 text-xs">
                          className="{card.className}"
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'alerts' && (
              <section>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Alert Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {components.alerts.map((alert, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                      <h3 className="text-lg font-semibold text-white mb-4">{alert.name}</h3>
                      <div className={alert.className}>
                        This is a sample {alert.name.toLowerCase()} message.
                      </div>
                      <div className="mt-4 bg-gray-900 rounded p-3 font-mono text-sm overflow-x-auto">
                        <code className="text-green-400 text-xs">
                          className="{alert.className}"
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'navigation' && (
              <section>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Navigation Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {components.navigation.map((nav, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                      <h3 className="text-lg font-semibold text-white mb-4">{nav.name}</h3>
                      <div className={nav.className}>
                        Navigation Item
                      </div>
                      <div className="mt-4 bg-gray-900 rounded p-3 font-mono text-sm overflow-x-auto">
                        <code className="text-green-400 text-xs">
                          className="{nav.className}"
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'data' && (
              <section>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Data Display Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {components.data.map((data, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                      <h3 className="text-lg font-semibold text-white mb-4">{data.name}</h3>
                      {data.name === 'Table' && (
                        <table className={data.className}>
                          <thead>
                            <tr>
                              <th className="border border-gray-300 px-4 py-2">Header 1</th>
                              <th className="border border-gray-300 px-4 py-2">Header 2</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">Data 1</td>
                              <td className="border border-gray-300 px-4 py-2">Data 2</td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                      {data.name === 'Badge' && (
                        <span className={data.className}>Badge</span>
                      )}
                      {data.name === 'Progress Bar' && (
                        <div className={data.className}>
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      )}
                      {data.name === 'Avatar' && (
                        <div className={data.className}>
                          <span className="text-gray-600 font-semibold">JD</span>
                        </div>
                      )}
                      <div className="mt-4 bg-gray-900 rounded p-3 font-mono text-sm overflow-x-auto">
                        <code className="text-green-400 text-xs">
                          className="{data.className}"
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Usage Guidelines */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Usage Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Accessibility</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• All components include proper ARIA labels</li>
                  <li>• Keyboard navigation support</li>
                  <li>• High contrast ratios for visibility</li>
                  <li>• Screen reader compatibility</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Responsive Design</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Mobile-first approach</li>
                  <li>• Flexible grid systems</li>
                  <li>• Touch-friendly interactions</li>
                  <li>• Adaptive layouts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Download & Installation */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Get Started</h2>
            <div className="bg-gray-800/50 rounded-lg p-8 border border-blue-500/30 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Ready to use our components?</h3>
              <p className="text-gray-300 mb-6">
                Download our component library or integrate directly into your project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Download Library
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View on GitHub
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Need help with components? Check our documentation</p>
              <p className="mt-2">
                <a href="/api-documentation" className="text-blue-400 hover:text-blue-300">
                  View API Docs →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ComponentLibrary;