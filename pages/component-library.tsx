import React from 'react';
import Head from 'next/head';

export default function ComponentLibrary() {
  return (
    <>
      <Head>
        <title>Component Library — Zion Tech Group</title>
        <meta name="description" content="Comprehensive component library showcasing Zion Tech Group's UI components and design system." />
        <meta property="og:title" content="Component Library — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive component library showcasing Zion Tech Group's UI components and design system." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Component Library
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of reusable UI components, designed for modern web applications and automation interfaces.
            </p>
          </section>

          {/* Navigation */}
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                ← Back to Home
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Services
              </a>
              <a href="/automation" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Automation
              </a>
            </div>
          </nav>

          {/* Component Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Component Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300 text-center">Navigation</h3>
                <p className="text-white/80 text-center">
                  Navigation bars, breadcrumbs, pagination, and menu components for seamless user experience.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300 text-center">Forms</h3>
                <p className="text-white/80 text-center">
                  Input fields, buttons, checkboxes, and form validation components for data collection.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-300 text-center">Data Display</h3>
                <p className="text-white/80 text-center">
                  Tables, cards, lists, and data visualization components for presenting information.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H4a1 1 0 00-1 1v1zm0 6h6V9H4v2zm0 4h6v-2H4v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300 text-center">Layout</h3>
                <p className="text-white/80 text-center">
                  Grid systems, containers, and layout components for responsive design.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300 text-center">Feedback</h3>
                <p className="text-white/80 text-center">
                  Alerts, notifications, progress bars, and loading states for user feedback.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485-7.071 7.071" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-300 text-center">Overlays</h3>
                <p className="text-white/80 text-center">
                  Modals, tooltips, popovers, and overlay components for enhanced interactions.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Components */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Featured Components</h2>
            <div className="space-y-8">
              {/* Button Component */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Button Component</h3>
                <p className="text-white/80 mb-6">
                  Versatile button component with multiple variants, sizes, and states for consistent user interactions.
                </p>
                <div className="bg-black/30 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-cyan-300">Usage Example</h4>
                  <pre className="text-sm text-cyan-200">
{`import { Button } from '@/components/ui/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>`}
                  </pre>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-200">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-lg text-white font-semibold transition-all duration-200">
                    Danger Button
                  </button>
                </div>
              </div>

              {/* Card Component */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Card Component</h3>
                <p className="text-white/80 mb-6">
                  Flexible card component for displaying content, images, and actions in organized layouts.
                </p>
                <div className="bg-black/30 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-fuchsia-300">Usage Example</h4>
                  <pre className="text-sm text-fuchsia-200">
{`import { Card } from '@/components/ui/Card';

<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Content>Card content goes here</Card.Content>
</Card>`}
                  </pre>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-3 text-white">Feature Card</h4>
                    <p className="text-white/80 mb-4">
                      This is an example of how the card component looks with content.
                    </p>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white text-sm font-semibold transition-all duration-200">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-3 text-white">Info Card</h4>
                    <p className="text-white/80 mb-4">
                      Another example showing different content and styling options.
                    </p>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm transition-all duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Component */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">Form Components</h3>
                <p className="text-white/80 mb-6">
                  Comprehensive form components with validation, error handling, and accessibility features.
                </p>
                <div className="bg-black/30 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-green-300">Usage Example</h4>
                  <pre className="text-sm text-green-200">
{`import { Input, Label, FormField } from '@/components/ui/Form';

<FormField>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</FormField>`}
                  </pre>
                </div>
                <div className="max-w-md space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-all duration-200"
                    />
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-200">
                    Submit Form
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Design System */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Design System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">Color Palette</h3>
                <p className="text-white/80 mb-4">
                  Our carefully curated color system ensures consistency and accessibility across all components.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="w-full h-16 bg-cyan-500 rounded-lg"></div>
                  <div className="w-full h-16 bg-fuchsia-500 rounded-lg"></div>
                  <div className="w-full h-16 bg-green-500 rounded-lg"></div>
                  <div className="w-full h-16 bg-blue-500 rounded-lg"></div>
                  <div className="w-full h-16 bg-purple-500 rounded-lg"></div>
                  <div className="w-full h-16 bg-yellow-500 rounded-lg"></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-orange-300">Typography</h3>
                <p className="text-white/80 mb-4">
                  Consistent typography scale and font hierarchy for optimal readability and visual hierarchy.
                </p>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-white">Heading 1</h1>
                  <h2 className="text-xl font-semibold text-white/90">Heading 2</h2>
                  <h3 className="text-lg font-medium text-white/80">Heading 3</h3>
                  <p className="text-base text-white/70">Body text with proper contrast</p>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Getting Started</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6 text-white">Installation & Usage</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">Install Package</h4>
                    <code className="text-sm text-cyan-200 bg-black/30 px-2 py-1 rounded">
                      npm install @zion-tech/ui-components
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                  <div>
                    <h4 className="text-lg font-semibold text-fuchsia-300 mb-2">Import Components</h4>
                    <code className="text-sm text-fuchsia-200 bg-black/30 px-2 py-1 rounded">
                      import { Button, Card, Input } from '@zion-tech/ui-components'
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                  <div>
                    <h4 className="text-lg font-semibold text-green-300 mb-2">Start Building</h4>
                    <p className="text-white/80">Use components in your React applications with full TypeScript support.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support & Resources */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white/90">Need Help?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our documentation, examples, and get support for implementing our component library in your projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/api-documentation" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-200">
                View API Docs
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Contact Support
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}