import React from 'react';
import Head from 'next/head';

export default function ComponentLibrary() {
  return (
    <>
      <Head>
        <title>Component Library — Zion Tech Group</title>
        <meta name="description" content="Comprehensive UI component library for Zion Tech Group's design system and applications." />
        <meta property="og:title" content="Component Library — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive UI component library for Zion Tech Group's design system and applications." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Component Library
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive collection of reusable UI components built with modern design principles and accessibility standards.
            </p>
          </section>

          <div className="max-w-7xl mx-auto">
            {/* Navigation Components */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Navigation Components</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Navigation Bar */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Navigation Bar</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <nav className="flex items-center justify-between">
                      <div className="text-cyan-400 font-bold text-lg">Zion Tech</div>
                      <div className="flex space-x-6">
                        <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Home</a>
                        <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">About</a>
                        <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Services</a>
                        <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Contact</a>
                      </div>
                    </nav>
                  </div>
                  <p className="text-white/70 text-sm">Responsive navigation with hover effects and smooth transitions.</p>
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Breadcrumbs</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <nav className="flex items-center space-x-2 text-sm">
                      <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Home</a>
                      <span className="text-white/40">/</span>
                      <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Components</a>
                      <span className="text-white/40">/</span>
                      <span className="text-cyan-400">Library</span>
                    </nav>
                  </div>
                  <p className="text-white/70 text-sm">Hierarchical navigation showing current page location.</p>
                </div>

                {/* Sidebar Navigation */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Sidebar Navigation</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <div className="space-y-2">
                      <a href="#" className="block px-3 py-2 text-white/80 hover:bg-white/10 hover:text-cyan-400 rounded transition-colors">Dashboard</a>
                      <a href="#" className="block px-3 py-2 text-white/80 hover:bg-white/10 hover:text-cyan-400 rounded transition-colors">Analytics</a>
                      <a href="#" className="block px-3 py-2 text-white/80 hover:bg-white/10 hover:text-cyan-400 rounded transition-colors">Settings</a>
                      <a href="#" className="block px-3 py-2 text-white/80 hover:bg-white/10 hover:text-cyan-400 rounded transition-colors">Profile</a>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Vertical navigation with hover states and active indicators.</p>
                </div>

                {/* Pagination */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Pagination</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors">Previous</button>
                      <button className="px-3 py-2 bg-cyan-500 text-white rounded">1</button>
                      <button className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">2</button>
                      <button className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">3</button>
                      <button className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors">Next</button>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Page navigation with active states and hover effects.</p>
                </div>
              </div>
            </section>

            {/* Form Components */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-fuchsia-400">Form Components</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Fields */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Input Fields</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4 space-y-3">
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    <textarea 
                      placeholder="Enter your message" 
                      rows={3}
                      className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <p className="text-white/70 text-sm">Form inputs with focus states and consistent styling.</p>
                </div>

                {/* Buttons */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Buttons</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4 space-y-3">
                    <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">Primary</button>
                    <button className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-colors">Secondary</button>
                    <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">Danger</button>
                  </div>
                  <p className="text-white/70 text-sm">Button variants with hover states and consistent sizing.</p>
                </div>

                {/* Checkboxes & Radio */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Checkboxes & Radio</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4 space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-cyan-500 bg-slate-800 border-white/20 rounded focus:ring-cyan-400" />
                      <span className="text-white/80">Accept terms and conditions</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="option" className="w-4 h-4 text-cyan-500 bg-slate-800 border-white/20 focus:ring-cyan-400" />
                      <span className="text-white/80">Option 1</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="option" className="w-4 h-4 text-cyan-500 bg-slate-800 border-white/20 focus:ring-cyan-400" />
                      <span className="text-white/80">Option 2</span>
                    </label>
                  </div>
                  <p className="text-white/70 text-sm">Form controls with custom styling and focus states.</p>
                </div>

                {/* Select Dropdown */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Select Dropdown</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <select className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors">
                      <option>Select an option</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <p className="text-white/70 text-sm">Custom styled select dropdown with focus states.</p>
                </div>
              </div>
            </section>

            {/* Data Display Components */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-green-400">Data Display Components</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Cards */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Cards</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Feature Card</h4>
                      <p className="text-white/70 text-sm mb-4">This is a sample feature card with description and action button.</p>
                      <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm transition-colors">Learn More</button>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Content containers with consistent spacing and styling.</p>
                </div>

                {/* Tables */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Tables</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-2 text-white/80 font-medium">Name</th>
                          <th className="text-left py-2 text-white/80 font-medium">Status</th>
                          <th className="text-left py-2 text-white/80 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="py-2 text-white">Project Alpha</td>
                          <td className="py-2"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Active</span></td>
                          <td className="py-2"><button className="text-cyan-400 hover:text-cyan-300 text-sm">Edit</button></td>
                        </tr>
                        <tr>
                          <td className="py-2 text-white">Project Beta</td>
                          <td className="py-2"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Pending</span></td>
                          <td className="py-2"><button className="text-cyan-400 hover:text-cyan-300 text-sm">Edit</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-white/70 text-sm">Data tables with responsive design and status indicators.</p>
                </div>

                {/* Progress Bars */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Progress Bars</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4 space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Upload Progress</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>System Load</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Progress indicators with percentage display and color coding.</p>
                </div>

                {/* Badges */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Badges</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">New</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Active</span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Warning</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Error</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Status indicators with semantic colors and rounded design.</p>
                </div>
              </div>
            </section>

            {/* Feedback Components */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">Feedback Components</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Alerts */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Alerts</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4 space-y-3">
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-400 text-sm">Success! Your changes have been saved.</p>
                    </div>
                    <div className="p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                      <p className="text-yellow-400 text-sm">Warning: Please review your input before proceeding.</p>
                    </div>
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm">Error: Unable to connect to the server.</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Contextual feedback messages with appropriate colors.</p>
                </div>

                {/* Modals */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Modals</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold text-white">Confirm Action</h4>
                        <button className="text-white/60 hover:text-white">×</button>
                      </div>
                      <p className="text-white/70 text-sm mb-4">Are you sure you want to proceed with this action?</p>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm transition-colors">Confirm</button>
                        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-sm transition-colors">Cancel</button>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Overlay dialogs for user confirmation and input.</p>
                </div>

                {/* Tooltips */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Tooltips</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <div className="relative inline-block">
                      <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                        Hover me
                      </button>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg">
                        This is a helpful tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Contextual help text that appears on hover.</p>
                </div>

                {/* Loading States */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Loading States</h3>
                  <div className="bg-slate-900 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
                      <span className="text-white/80 text-sm">Loading...</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Loading indicators with smooth animations.</p>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="p-8 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Getting Started</h2>
              <p className="text-white/80 mb-6">Ready to use these components in your project?</p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                  Get Design System Access
                </a>
                <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  View Component Status
                </a>
                <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  Explore Automation
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}