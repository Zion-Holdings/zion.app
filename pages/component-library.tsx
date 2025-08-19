import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buttons');
  const [modalOpen, setModalOpen] = useState(false);

  const components = {
    buttons: [
      { name: 'Primary Button', variant: 'primary', className: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Secondary Button', variant: 'secondary', className: 'bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Success Button', variant: 'success', className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
      { name: 'Danger Button', variant: 'danger', className: 'bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors' },
    ],
    forms: [
      { name: 'Text Input', type: 'text', placeholder: 'Enter text...' },
      { name: 'Email Input', type: 'email', placeholder: 'Enter email...' },
      { name: 'Password Input', type: 'password', placeholder: 'Enter password...' },
      { name: 'Textarea', type: 'textarea', placeholder: 'Enter description...' },
    ],
    cards: [
      { title: 'Feature Card', description: 'This is a feature description with supporting text.', icon: '🚀' },
      { title: 'Info Card', description: 'Information card with details and context.', icon: 'ℹ️' },
      { title: 'Success Card', description: 'Success message with confirmation details.', icon: '✅' },
    ],
  };

  return (
    <>
      <Head>
        <title>Component Library - Zion App</title>
        <meta name="description" content="Explore our comprehensive component library with interactive examples and code snippets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  Zion App
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                  <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
                  <Link href="/reports" className="text-gray-600 hover:text-blue-600 transition-colors">Reports</Link>
                  <Link href="/component-library" className="text-blue-600 font-medium">Component Library</Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Library</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of reusable UI components designed for modern web applications.
              Each component includes interactive examples and implementation details.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.keys(components).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Component Examples */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === 'buttons' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {components.buttons.map((button, index) => (
                    <div key={index} className="text-center">
                      <button className={button.className}>
                        {button.name}
                      </button>
                      <p className="text-sm text-gray-600 mt-2">{button.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'forms' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {components.forms.map((input, index) => (
                    <div key={index} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">{input.name}</label>
                      {input.type === 'textarea' ? (
                        <textarea
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={input.placeholder}
                          rows={4}
                        />
                      ) : (
                        <input
                          type={input.type}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={input.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'cards' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Card Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {components.cards.map((card, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-4">{card.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Demo Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h2>
            <div className="text-center">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Open Modal Demo
              </button>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Principles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Consistent spacing and typography</li>
                  <li>• Accessible color contrast ratios</li>
                  <li>• Responsive design patterns</li>
                  <li>• Interactive feedback states</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Copy component code directly</li>
                  <li>• Customize props and styling</li>
                  <li>• Follow accessibility guidelines</li>
                  <li>• Test across different devices</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion App</h3>
                <p className="text-gray-400">Autonomous, cloud-native app with self-running automations.</p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/reports" className="hover:text-white transition-colors">Reports</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/component-library" className="hover:text-white transition-colors">Component Library</Link></li>
                  <li><Link href="/automation" className="hover:text-white transition-colors">Automation</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion App. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modal Demo</h3>
              <p className="text-gray-600 mb-6">This is an example of a modal component that can be used for dialogs, confirmations, and more.</p>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComponentLibrary;