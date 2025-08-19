import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ComponentLibraryPage() {
  return (
    <>
      <Head>
        <title>Component Library — Zion Tech Group</title>
        <meta name="description" content="Comprehensive component library showcasing reusable UI components and design patterns." />
        <meta property="og:title" content="Component Library — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive component library showcasing reusable UI components and design patterns." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Navigation */}
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Component Library
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive collection of reusable UI components, design patterns, and interactive examples
            </p>
          </header>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Overview */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Overview</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Our component library provides a comprehensive set of reusable UI components built with modern web technologies. 
                  Each component is designed with accessibility, performance, and customization in mind.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-white/80 text-sm">Components</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-fuchsia-400 mb-2">100%</div>
                    <div className="text-white/80 text-sm">Accessible</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-2">TypeScript</div>
                    <div className="text-white/80 text-sm">Supported</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation Components */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-300">Navigation Components</h2>
              <div className="space-y-6">
                
                {/* Navbar */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Navbar</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <nav className="flex items-center justify-between">
                      <div className="text-cyan-400 font-bold text-xl">Zion Tech</div>
                      <div className="flex space-x-6">
                        <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
                        <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
                        <a href="#" className="text-white/80 hover:text-white transition-colors">Services</a>
                        <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
                      </div>
                    </nav>
                  </div>
                  <p className="text-white/80 text-sm">
                    Responsive navigation bar with mobile menu support and customizable styling.
                  </p>
                </div>

                {/* Breadcrumbs */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Breadcrumbs</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <nav className="flex items-center space-x-2 text-sm">
                      <a href="#" className="text-cyan-400 hover:text-cyan-300">Home</a>
                      <span className="text-white/40">/</span>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300">Components</a>
                      <span className="text-white/40">/</span>
                      <span className="text-white/60">Navigation</span>
                    </nav>
                  </div>
                  <p className="text-white/80 text-sm">
                    Hierarchical navigation component for showing current page location.
                  </p>
                </div>

                {/* Pagination */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Pagination</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <nav className="flex items-center space-x-2">
                      <button className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        Previous
                      </button>
                      <button className="px-3 py-2 bg-cyan-500 text-white rounded-lg">1</button>
                      <button className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">2</button>
                      <button className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">3</button>
                      <button className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        Next
                      </button>
                    </nav>
                  </div>
                  <p className="text-white/80 text-sm">
                    Navigation component for paginated content with customizable styling.
                  </p>
                </div>
              </div>
            </section>

            {/* Form Components */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-green-300">Form Components</h2>
              <div className="space-y-6">
                
                {/* Input Fields */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Input Fields</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 space-y-4">
                    <div>
                      <label className="block text-sm text-white/80 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/80 mb-2">Password</label>
                      <input 
                        type="password" 
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Accessible form inputs with focus states and validation support.
                  </p>
                </div>

                {/* Buttons */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Buttons</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white transition-colors">
                      Primary Button
                    </button>
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                      Secondary Button
                    </button>
                    <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors">
                      Danger Button
                    </button>
                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white transition-colors">
                      Success Button
                    </button>
                  </div>
                  <p className="text-white/80 text-sm">
                    Various button styles with hover effects and state management.
                  </p>
                </div>

                {/* Checkboxes & Radio */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Checkboxes & Radio Buttons</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 space-y-4">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="checkbox1" className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-400" />
                      <label htmlFor="checkbox1" className="text-white/80">Accept terms and conditions</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="radio" id="radio1" name="radio" className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 focus:ring-cyan-400" />
                      <label htmlFor="radio1" className="text-white/80">Option 1</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="radio" id="radio2" name="radio" className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 focus:ring-cyan-400" />
                      <label htmlFor="radio2" className="text-white/80">Option 2</label>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Accessible form controls with proper labeling and focus management.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Display Components */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Data Display Components</h2>
              <div className="space-y-6">
                
                {/* Cards */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Cards</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Feature Card</h4>
                        <p className="text-white/80 text-sm mb-3">
                          This is a sample feature card with description and action button.
                        </p>
                        <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-sm transition-colors">
                          Learn More
                        </button>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Info Card</h4>
                        <p className="text-white/80 text-sm mb-3">
                          Another card example showing different content layout.
                        </p>
                        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Flexible card components for displaying content in organized layouts.
                  </p>
                </div>

                {/* Tables */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Tables</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left p-2 text-white/80 font-semibold">Name</th>
                          <th className="text-left p-2 text-white/80 font-semibold">Status</th>
                          <th className="text-left p-2 text-white/80 font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">Component A</td>
                          <td className="p-2"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Active</span></td>
                          <td className="p-2">
                            <button className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 rounded text-white text-xs transition-colors">
                              Edit
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">Component B</td>
                          <td className="p-2"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Pending</span></td>
                          <td className="p-2">
                            <button className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 rounded text-white text-xs transition-colors">
                              Edit
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-white/80 text-sm">
                    Responsive table component with sorting and pagination support.
                  </p>
                </div>

                {/* Progress Bars */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Progress Indicators</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-2">
                        <span>Upload Progress</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-2">
                        <span>Task Completion</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-fuchsia-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Progress bars and loading indicators for user feedback.
                  </p>
                </div>
              </div>
            </section>

            {/* Feedback Components */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Feedback Components</h2>
              <div className="space-y-6">
                
                {/* Alerts */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Alerts & Notifications</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4 space-y-4">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="text-green-400 mr-3">✓</div>
                        <div className="text-green-300">Success! Your action was completed successfully.</div>
                      </div>
                    </div>
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="text-yellow-400 mr-3">⚠</div>
                        <div className="text-yellow-300">Warning: Please review your input before proceeding.</div>
                      </div>
                    </div>
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="text-red-400 mr-3">✗</div>
                        <div className="text-red-300">Error: Something went wrong. Please try again.</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Contextual alert components for user feedback and system messages.
                  </p>
                </div>

                {/* Modals */}
                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-3">Modal Dialogs</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <div className="bg-white/5 border border-white/20 rounded-lg p-6 max-w-md mx-auto">
                      <h4 className="text-lg font-semibold text-white mb-3">Confirm Action</h4>
                      <p className="text-white/80 text-sm mb-4">
                        Are you sure you want to perform this action? This cannot be undone.
                      </p>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm transition-colors">
                          Cancel
                        </button>
                        <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white text-sm transition-colors">
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Modal dialogs for confirmations, forms, and content overlays.
                  </p>
                </div>
              </div>
            </section>

            {/* Usage Guidelines */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Usage Guidelines</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">Installation</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <pre className="text-white text-sm">
{`npm install @zion-tech/components
# or
yarn add @zion-tech/components`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">Basic Usage</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <pre className="text-white text-sm">
{`import { Button, Card, Input } from '@zion-tech/components';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">Customization</h3>
                  <p className="text-white/80 text-sm">
                    All components support extensive customization through CSS variables, 
                    theme props, and className overrides for consistent branding.
                  </p>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-indigo-300">Get Started</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Ready to start building with our component library? Explore the components, 
                  download the package, and integrate them into your projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white transition-colors">
                    Get Support
                  </Link>
                  <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    View Services
                  </Link>
                  <a href="https://github.com/zion-tech/components" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}