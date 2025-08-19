import React from 'react';
import Head from 'next/head';

export default function ComponentLibraryPage() {
  return (
    <>
      <Head>
        <title>Component Library — Zion Tech Group</title>
        <meta name="description" content="Reusable UI components and design system for Zion Tech Group applications." />
        <meta property="og:title" content="Component Library — Zion Tech Group" />
        <meta property="og:description" content="Reusable UI components and design system for Zion Tech Group applications." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Component Library
              </h1>
              <p className="text-xl text-white/80">
                Reusable UI components and design system for consistent user experiences
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">🎨 Design System</h3>
                <p className="text-white/80">
                  Consistent color schemes, typography, and spacing guidelines for unified design.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">🧩 Reusable Components</h3>
                <p className="text-white/80">
                  Modular components that can be easily integrated into any application.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-green-400">📱 Responsive Design</h3>
                <p className="text-white/80">
                  Mobile-first components that adapt seamlessly across all device sizes.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Design Tokens</h2>
                <p className="text-white/80 mb-4">
                  Our design system is built on a foundation of consistent design tokens for colors, typography, spacing, and more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Color Palette</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-cyan-400 rounded"></div>
                        <span className="text-white/80 text-sm">cyan-400</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-fuchsia-400 rounded"></div>
                        <span className="text-white/80 text-sm">fuchsia-400</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-400 rounded"></div>
                        <span className="text-white/80 text-sm">green-400</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-400 rounded"></div>
                        <span className="text-white/80 text-sm">blue-400</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Typography Scale</h4>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-white">Heading 1</div>
                      <div className="text-2xl font-semibold text-white/90">Heading 2</div>
                      <div className="text-lg font-medium text-white/80">Body Large</div>
                      <div className="text-base text-white/70">Body Regular</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-fuchsia-400">Button Components</h2>
                <p className="text-white/80 mb-4">
                  Versatile button components with multiple variants and states for different use cases.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Primary Buttons</h4>
                      <div className="space-y-3">
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                          Primary Button
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg opacity-50 cursor-not-allowed">
                          Disabled
                        </button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-green-400">Secondary Buttons</h4>
                      <div className="space-y-3">
                        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                          Secondary Button
                        </button>
                        <button className="px-6 py-3 border border-white/20 rounded-lg text-white/50 cursor-not-allowed">
                          Disabled
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">Form Components</h2>
                <p className="text-white/80 mb-4">
                  Accessible form components with validation states and consistent styling.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Text Inputs</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                          <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Password</label>
                          <input 
                            type="password" 
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Select Dropdown</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Country</label>
                          <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-colors">
                            <option value="">Select a country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Checkbox</label>
                          <div className="flex items-center gap-2">
                            <input 
                              type="checkbox" 
                              id="newsletter"
                              className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-400/50"
                            />
                            <label htmlFor="newsletter" className="text-white/80">Subscribe to newsletter</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Card Components</h2>
                <p className="text-white/80 mb-4">
                  Flexible card components for displaying content in organized, visually appealing layouts.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20 backdrop-blur-xl">
                      <h4 className="text-lg font-semibold mb-2 text-cyan-400">Feature Card</h4>
                      <p className="text-white/80 text-sm mb-3">
                        Highlight key features and capabilities with this versatile card component.
                      </p>
                      <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded transition-colors">
                        Learn More
                      </button>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20 backdrop-blur-xl">
                      <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Info Card</h4>
                      <p className="text-white/80 text-sm mb-3">
                        Display information, statistics, or brief content in a clean, organized format.
                      </p>
                      <div className="text-2xl font-bold text-fuchsia-400">24/7</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20 backdrop-blur-xl">
                      <h4 className="text-lg font-semibold mb-2 text-green-400">Action Card</h4>
                      <p className="text-white/80 text-sm mb-3">
                        Cards designed for user interaction with clear call-to-action elements.
                      </p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors">
                          Accept
                        </button>
                        <button className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-sm rounded transition-colors">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Navigation Components</h2>
                <p className="text-white/80 mb-4">
                  Navigation components for creating intuitive user interfaces and seamless user experiences.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Breadcrumb Navigation</h4>
                      <nav className="flex items-center space-x-2 text-sm">
                        <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Home</a>
                        <span className="text-white/40">/</span>
                        <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Components</a>
                        <span className="text-white/40">/</span>
                        <span className="text-white">Library</span>
                      </nav>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Pagination</h4>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-white transition-colors">
                          Previous
                        </button>
                        <button className="px-3 py-2 bg-cyan-500 text-white rounded">1</button>
                        <button className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-white transition-colors">2</button>
                        <button className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-white transition-colors">3</button>
                        <button className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-white transition-colors">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Feedback Components</h2>
                <p className="text-white/80 mb-4">
                  Components for providing user feedback, notifications, and status updates.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Alert Messages</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                          Success! Your changes have been saved.
                        </div>
                        <div className="p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-300">
                          Warning: Please review your input before submitting.
                        </div>
                        <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                          Error: Unable to connect to the server.
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Progress Indicators</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm text-white/80 mb-1">
                            <span>Upload Progress</span>
                            <span>75%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
                          <span className="text-white/80">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Data Display Components</h2>
                <p className="text-white/80 mb-4">
                  Components for displaying data in organized, readable formats including tables, lists, and charts.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Data Table</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-white/20">
                              <th className="text-left py-2 text-white/80 font-medium">Name</th>
                              <th className="text-left py-2 text-white/80 font-medium">Status</th>
                              <th className="text-left py-2 text-white/80 font-medium">Last Updated</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/10">
                              <td className="py-2 text-white">Project Alpha</td>
                              <td className="py-2"><span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Active</span></td>
                              <td className="py-2 text-white/60">2 hours ago</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="py-2 text-white">Project Beta</td>
                              <td className="py-2"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Pending</span></td>
                              <td className="py-2 text-white/60">1 day ago</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Statistics Cards</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                          <div className="text-2xl font-bold text-cyan-400">1,234</div>
                          <div className="text-white/60 text-sm">Total Users</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                          <div className="text-2xl font-bold text-fuchsia-400">567</div>
                          <div className="text-white/60 text-sm">Active Projects</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                          <div className="text-2xl font-bold text-green-400">89%</div>
                          <div className="text-white/60 text-sm">Success Rate</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                          <div className="text-2xl font-bold text-blue-400">24/7</div>
                          <div className="text-white/60 text-sm">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-teal-400">Getting Started</h2>
                <p className="text-white/80 mb-4">
                  Learn how to integrate these components into your projects and customize them for your needs.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Installation</h4>
                      <div className="bg-black/30 p-3 rounded font-mono text-sm text-cyan-300">
                        npm install @zion-tech/components
                      </div>
                      <p className="text-white/80 text-sm mt-2">
                        Install our component library via npm or yarn.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Usage</h4>
                      <div className="bg-black/30 p-3 rounded font-mono text-sm text-cyan-300">
                        {`import { Button, Card } from '@zion-tech/components'`}
                      </div>
                      <p className="text-white/80 text-sm mt-2">
                        Import components and start building your UI.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="text-center mt-12">
              <a href="/" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                Return to Homepage
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}