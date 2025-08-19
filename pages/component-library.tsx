import React from 'react';
import Head from 'next/head';

const ComponentLibrary = () => {
  return (
    <>
      <Head>
        <title>Component Library - Zion.app</title>
        <meta name="description" content="Explore our comprehensive component library for building Zion.app interfaces" />
        <meta name="keywords" content="components, UI, library, Zion, design system" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Component Library
              </h1>
              <p className="text-xl text-gray-300">
                Building blocks for creating beautiful Zion.app interfaces
              </p>
            </header>

            <div className="grid gap-8">
              {/* Navigation Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Navigation Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Navbar</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <nav className="flex items-center justify-between">
                        <div className="text-blue-400 font-bold">Zion.app</div>
                        <div className="flex space-x-4 text-sm">
                          <a href="#" className="hover:text-blue-400">Home</a>
                          <a href="#" className="hover:text-blue-400">Services</a>
                          <a href="#" className="hover:text-blue-400">About</a>
                          <a href="#" className="hover:text-blue-400">Contact</a>
                        </div>
                      </nav>
                    </div>
                    <p className="text-sm text-gray-300">Responsive navigation bar with logo and menu items</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Sidebar</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="w-48 h-32 bg-gray-800 rounded flex flex-col">
                        <div className="p-3 border-b border-gray-700">Menu</div>
                        <div className="p-2 hover:bg-gray-700 cursor-pointer">Dashboard</div>
                        <div className="p-2 hover:bg-gray-700 cursor-pointer">Projects</div>
                        <div className="p-2 hover:bg-gray-700 cursor-pointer">Settings</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Collapsible sidebar navigation component</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Breadcrumbs</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <nav className="text-sm">
                        <ol className="flex items-center space-x-2">
                          <li><a href="#" className="text-blue-400 hover:text-blue-300">Home</a></li>
                          <li className="text-gray-500">/</li>
                          <li><a href="#" className="text-blue-400 hover:text-blue-300">Services</a></li>
                          <li className="text-gray-500">/</li>
                          <li className="text-gray-300">Component Library</li>
                        </ol>
                      </nav>
                    </div>
                    <p className="text-sm text-gray-300">Breadcrumb navigation for deep page hierarchies</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Pagination</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">Previous</button>
                        <button className="px-3 py-1 bg-blue-600 rounded">1</button>
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">2</button>
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">3</button>
                        <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">Next</button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Page navigation for large datasets</p>
                  </div>
                </div>
              </section>

              {/* Form Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Form Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Input Fields</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-3">
                      <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:border-blue-500 focus:outline-none"
                      />
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <p className="text-sm text-gray-300">Styled input fields with focus states</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Buttons</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-x-3">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                        Primary
                      </button>
                      <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors">
                        Secondary
                      </button>
                      <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors">
                        Danger
                      </button>
                    </div>
                    <p className="text-sm text-gray-300">Various button styles for different actions</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Select Dropdown</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <select className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:border-blue-500 focus:outline-none">
                        <option>Choose an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <p className="text-sm text-gray-300">Custom styled dropdown select component</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Checkbox & Radio</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-600" />
                        <span>Accept terms</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="option" className="text-blue-600" />
                        <span>Option A</span>
                      </label>
                    </div>
                    <p className="text-sm text-gray-300">Form controls for user selections</p>
                  </div>
                </div>
              </section>

              {/* Data Display Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Data Display Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Cards</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="font-medium text-white mb-2">Service Title</h4>
                        <p className="text-gray-300 text-sm mb-3">Description of the service goes here.</p>
                        <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Content containers with consistent styling</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Tables</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-600">
                            <th className="text-left p-2">Name</th>
                            <th className="text-left p-2">Status</th>
                            <th className="text-left p-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-700">
                            <td className="p-2">Project A</td>
                            <td className="p-2 text-green-400">Active</td>
                            <td className="p-2">
                              <button className="text-blue-400 hover:text-blue-300">Edit</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-300">Data tables for structured information</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Progress Bars</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-3">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="text-sm text-gray-300">75% Complete</div>
                    </div>
                    <p className="text-sm text-gray-300">Visual progress indicators</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Badges</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-x-2">
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Success</span>
                      <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded-full">Warning</span>
                      <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">Error</span>
                    </div>
                    <p className="text-sm text-gray-300">Status indicators and labels</p>
                  </div>
                </div>
              </section>

              {/* Feedback Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Feedback Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Alerts</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3 space-y-3">
                      <div className="p-3 bg-green-900/50 border border-green-600 rounded text-green-300">
                        Success! Your action was completed.
                      </div>
                      <div className="p-3 bg-yellow-900/50 border border-yellow-600 rounded text-yellow-300">
                        Warning: Please check your input.
                      </div>
                      <div className="p-3 bg-red-900/50 border border-red-600 rounded text-red-300">
                        Error: Something went wrong.
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">User feedback messages</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Modals</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <h4 className="font-medium text-white mb-2">Confirm Action</h4>
                        <p className="text-gray-300 text-sm mb-3">Are you sure you want to proceed?</p>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm">Cancel</button>
                          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm">Confirm</button>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Overlay dialogs for user interactions</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Tooltips</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="relative inline-block">
                        <button className="px-3 py-1 bg-blue-600 rounded">Hover me</button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded">
                          This is a tooltip
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Contextual help information</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Loading States</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                        <span className="text-sm text-gray-300">Loading...</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Loading indicators and spinners</p>
                  </div>
                </div>
              </section>

              {/* Layout Components */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Layout Components</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Grid System</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-8 bg-blue-600 rounded"></div>
                        <div className="h-8 bg-green-600 rounded"></div>
                        <div className="h-8 bg-purple-600 rounded"></div>
                        <div className="h-8 bg-yellow-600 rounded"></div>
                        <div className="h-8 bg-red-600 rounded"></div>
                        <div className="h-8 bg-indigo-600 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Responsive grid layout system</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Container</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="max-w-4xl mx-auto p-4 border border-gray-600 rounded">
                        <p className="text-center text-gray-300">Centered container with max width</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Content width constraints</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Divider</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="space-y-4">
                        <p className="text-gray-300">Content above</p>
                        <hr className="border-gray-600" />
                        <p className="text-gray-300">Content below</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Visual content separators</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Spacer</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <div className="space-y-4">
                        <div className="h-4 bg-blue-600 rounded"></div>
                        <div className="h-8"></div>
                        <div className="h-4 bg-green-600 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">Consistent spacing utilities</p>
                  </div>
                </div>
              </section>

              {/* Usage Guidelines */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Usage Guidelines</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Installation</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <code className="text-sm text-green-400">
                        npm install @zion/components
                      </code>
                    </div>
                    <p className="text-sm text-gray-300">Install the component library package</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Import</h3>
                    <div className="bg-gray-900 p-3 rounded mb-3">
                      <code className="text-sm text-green-400">
                        import {"{ Button, Card }"} from '@zion/components'
                      </code>
                    </div>
                    <p className="text-sm text-gray-300">Import components as needed</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Customization</h3>
                    <p className="text-sm text-gray-300">
                      All components support Tailwind CSS classes for easy customization and theming.
                    </p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Accessibility</h3>
                    <p className="text-sm text-gray-300">
                      Components follow WCAG 2.1 guidelines and include proper ARIA labels and keyboard navigation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-6">
                  Explore our components and start building amazing interfaces with Zion.app
                </p>
                <div className="space-x-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="https://github.com/Zion-Holdings/zion.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentLibrary;