import React from 'react';
import Head from 'next/head';

export default function ComponentLibraryPage() {
  return (
    <>
      <Head>
        <title>Component Library | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive component library with reusable UI components and design patterns." />
        <meta property="og:title" content="Component Library - Zion Tech Group" />
        <meta property="og:description" content="Reusable UI components and design system." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Component Library
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Reusable UI components and design patterns for building consistent, beautiful interfaces
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/automation-health" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Health Status
              </a>
              <a href="/live-dashboard" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Live Dashboard
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Design System</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2">Color Palette</h3>
                  <p className="text-white/70 text-sm">Consistent color scheme across all components</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔤</div>
                  <h3 className="text-xl font-semibold mb-2">Typography</h3>
                  <p className="text-white/70 text-sm">Unified font hierarchy and spacing</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📐</div>
                  <h3 className="text-xl font-semibold mb-2">Spacing</h3>
                  <p className="text-white/70 text-sm">Consistent spacing and layout system</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Core Components</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Buttons</h3>
                  <div className="space-y-3 mb-4">
                    <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white transition-colors">
                      Primary Button
                    </button>
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                      Secondary Button
                    </button>
                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white transition-colors">
                      Success Button
                    </button>
                  </div>
                  <p className="text-white/70 text-sm">
                    Versatile button components with multiple variants and states
                  </p>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Cards</h3>
                  <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-white mb-2">Card Title</h4>
                    <p className="text-white/70 text-sm">Card content with backdrop blur effect</p>
                  </div>
                  <p className="text-white/70 text-sm">
                    Flexible card components with various content layouts
                  </p>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Forms</h3>
                  <div className="space-y-3 mb-4">
                    <input 
                      type="text" 
                      placeholder="Enter text..." 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
                    />
                    <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
                      <option>Select option...</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>
                  <p className="text-white/70 text-sm">
                    Form components with consistent styling and focus states
                  </p>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Navigation</h3>
                  <div className="flex gap-2 mb-4">
                    <a href="#" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                      Home
                    </a>
                    <a href="#" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                      About
                    </a>
                    <a href="#" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                      Contact
                    </a>
                  </div>
                  <p className="text-white/70 text-sm">
                    Navigation components for consistent site navigation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Layout Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Grid System</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="h-8 bg-cyan-500/30 rounded"></div>
                    <div className="h-8 bg-fuchsia-500/30 rounded"></div>
                    <div className="h-8 bg-green-500/30 rounded"></div>
                    <div className="h-8 bg-blue-500/30 rounded"></div>
                    <div className="h-8 bg-purple-500/30 rounded"></div>
                    <div className="h-8 bg-yellow-500/30 rounded"></div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Responsive grid system for consistent layouts
                  </p>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Container</h3>
                  <div className="bg-white/5 border border-white/20 rounded-lg p-4 mb-4">
                    <div className="text-center text-white/70">
                      Container with max-width and centered content
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Container components for content width management
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Interactive Components</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Modals</h3>
                  <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <p className="text-white/70 text-sm">Modal dialog component</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Modal components for overlays and dialogs
                  </p>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Tooltips</h3>
                  <div className="relative inline-block mb-4">
                    <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                      Hover me
                    </button>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg">
                      Tooltip content
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Tooltip components for additional information
                  </p>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Loading States</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>
                    <span className="text-white/70">Loading...</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Loading and skeleton components
                  </p>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Notifications</h3>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="text-green-400">✅</div>
                      <span className="text-white/90 text-sm">Success notification</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Notification and alert components
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Usage Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Best Practices</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Use consistent spacing and sizing</li>
                    <li>• Maintain accessibility standards</li>
                    <li>• Follow responsive design principles</li>
                    <li>• Test across different devices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Customization</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Extend base components as needed</li>
                    <li>• Use CSS custom properties for theming</li>
                    <li>• Maintain component API consistency</li>
                    <li>• Document any modifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}