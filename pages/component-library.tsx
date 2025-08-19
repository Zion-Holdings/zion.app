import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ComponentLibraryPage() {
  return (
    <>
      <Head>
        <title>Component Library — Zion Tech Group</title>
        <meta name="description" content="Reusable UI components and design system for building modern web applications with Zion Tech Group." />
        <meta property="og:title" content="Component Library — Zion Tech Group" />
        <meta property="og:description" content="Reusable UI components and design system for building modern web applications with Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Component Library</h1>
            <p className="text-xl text-white/80">Build beautiful, consistent interfaces with our reusable UI components</p>
          </div>

          {/* Component Library Overview */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-400/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Design System Overview</h2>
              <p className="text-white/80 mb-4">
                Our component library provides a comprehensive set of reusable UI components built with modern design principles, 
                accessibility in mind, and consistent styling. Each component is thoroughly tested, documented, and optimized for performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-white/70">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400">100%</div>
                  <div className="text-white/70">Accessible</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">TypeScript</div>
                  <div className="text-white/70">Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Dark/Light</div>
                  <div className="text-white/70">Themes</div>
                </div>
              </div>
            </div>
          </section>

          {/* Component Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Component Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Layout Components</h3>
                <p className="text-white/70">Grid systems, containers, and layout utilities for responsive design.</p>
                <div className="mt-4">
                  <span className="inline-block bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded mr-2">Grid</span>
                  <span className="inline-block bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded mr-2">Container</span>
                  <span className="inline-block bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded">Stack</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-fuchsia-400/30 transition-all">
                <div className="w-12 h-12 bg-fuchsia-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.389M2.05 4.282l2.393-.777M13.95 4.282l-2.393-.777M7.172 2.239l-.777-2.389M4.282 7.172l2.389.777M2.05 13.95l-.777-2.393M4.282 2.05l2.393.777M13.95 2.05l2.393.777M7.172 7.172l-.777 2.389" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Elements</h3>
                <p className="text-white/70">Buttons, forms, modals, and other interactive components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-fuchsia-400/20 text-fuchsia-400 text-xs px-2 py-1 rounded mr-2">Button</span>
                  <span className="inline-block bg-fuchsia-400/20 text-fuchsia-400 text-xs px-2 py-1 rounded mr-2">Form</span>
                  <span className="inline-block bg-fuchsia-400/20 text-fuchsia-400 text-xs px-2 py-1 rounded">Modal</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Display</h3>
                <p className="text-white/70">Tables, cards, lists, and data visualization components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded mr-2">Table</span>
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded mr-2">Card</span>
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs px-2 py-1 rounded">Chart</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Feedback Components</h3>
                <p className="text-white/70">Alerts, notifications, progress indicators, and status messages.</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded mr-2">Alert</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded mr-2">Toast</span>
                  <span className="inline-block bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded">Progress</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485-7.071 7.071a2 2 0 01-2.828 0L2.343 15.343a2 2 0 010-2.828l5.657-5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Navigation</h3>
                <p className="text-white/70">Menus, breadcrumbs, pagination, and navigation components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded mr-2">Menu</span>
                  <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded mr-2">Breadcrumb</span>
                  <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded">Pagination</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-400/30 transition-all">
                <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Utility Components</h3>
                <p className="text-white/70">Spinners, skeletons, dividers, and other utility components.</p>
                <div className="mt-4">
                  <span className="inline-block bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded mr-2">Spinner</span>
                  <span className="inline-block bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded mr-2">Skeleton</span>
                  <span className="inline-block bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded">Divider</span>
                </div>
              </div>
            </div>
          </section>

          {/* Component Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Component Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Button Components</h3>
                <div className="space-y-4">
                  <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 border border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black font-semibold rounded-lg transition-all duration-200">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white font-semibold rounded-lg transition-all duration-200 hover:from-purple-500 hover:to-fuchsia-500">
                    Gradient Button
                  </button>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Card Components</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 border border-white/20 rounded-lg p-4 hover:border-cyan-400/30 transition-all">
                    <h4 className="font-semibold mb-2">Feature Card</h4>
                    <p className="text-white/70 text-sm">This is a sample feature card with hover effects and proper spacing.</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-400">Gradient Card</h4>
                    <p className="text-white/70 text-sm">A card with gradient background and colored accent elements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Tokens */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Design Tokens</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Color Palette</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded"></div>
                    <span className="text-white/70">Cyan 400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-fuchsia-400 rounded"></div>
                    <span className="text-white/70">Fuchsia 400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-400 rounded"></div>
                    <span className="text-white/70">Purple 400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded"></div>
                    <span className="text-white/70">Green 400</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Typography</h3>
                <div className="space-y-3">
                  <div className="text-4xl font-bold">Heading 1</div>
                  <div className="text-2xl font-semibold">Heading 2</div>
                  <div className="text-lg font-medium">Body Large</div>
                  <div className="text-sm">Body Small</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Spacing</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded"></div>
                    <span className="text-white/70">4px (1rem)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                    <span className="text-white/70">8px (2rem)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-white/70">16px (4rem)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-400 rounded"></div>
                    <span className="text-white/70">24px (6rem)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation and Usage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Installation and Usage</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Installation</h3>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <code className="text-cyan-400">npm install @zion-tech/components</code><br/>
                    <code className="text-cyan-400"># or</code><br/>
                    <code className="text-cyan-400">yarn add @zion-tech/components</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Basic Usage</h3>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <pre className="text-sm text-white/80">
{`import { Button, Card } from '@zion-tech/components';

function App() {
  return (
    <Card>
      <Button variant="primary">
        Click me
      </Button>
    </Card>
  );
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resources and Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Resources and Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Documentation</h3>
                <p className="text-white/70 mb-4">Comprehensive component documentation with examples</p>
                <Link href="/docs" className="text-cyan-400 hover:text-cyan-300">View Docs →</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Storybook</h3>
                <p className="text-white/70 mb-4">Interactive component playground and testing</p>
                <Link href="/storybook" className="text-fuchsia-400 hover:text-fuchsia-300">Open Storybook →</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-green-400">GitHub</h3>
                <p className="text-white/70 mb-4">Source code, issues, and contributions</p>
                <Link href="https://github.com/zion-tech/components" className="text-green-400 hover:text-green-300">View on GitHub →</Link>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-6 py-3 bg-purple-400 hover:bg-purple-300 text-black font-semibold rounded-lg transition-colors mr-4">
              Get Components
            </Link>
            <Link href="/services" className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-semibold rounded-lg transition-colors">
              View Services
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}