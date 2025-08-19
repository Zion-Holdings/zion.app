import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ComponentLibraryPage() {
  return (
    <>
      <Head>
        <title>Component Library — Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive component library for building modern, accessible web applications." />
        <meta property="og:title" content="Component Library — Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive component library for building modern, accessible web applications." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Component Library
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Build beautiful, accessible web applications with our comprehensive collection of reusable UI components.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Component Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Layout Components</h3>
              <p className="text-white/70">Grids, containers, and layout utilities for responsive design.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-fuchsia-400/30 transition-all">
              <div className="text-fuchsia-400 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Form Components</h3>
              <p className="text-white/70">Inputs, buttons, and form validation components.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all">
              <div className="text-purple-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Data Display</h3>
              <p className="text-white/70">Tables, charts, and data visualization components.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Feedback Components</h3>
              <p className="text-white/70">Alerts, notifications, and progress indicators.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all">
              <div className="text-green-400 text-3xl mb-4">🧭</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Navigation</h3>
              <p className="text-white/70">Menus, breadcrumbs, and navigation components.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all">
              <div className="text-blue-400 text-3xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Overlay Components</h3>
              <p className="text-white/70">Modals, tooltips, and overlay components.</p>
            </div>
          </div>

          {/* Component Examples */}
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Buttons */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Button Components
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                  Primary Button
                </button>
                <button className="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-lg transition-colors">
                  Secondary Button
                </button>
                <button className="px-6 py-3 bg-transparent border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-colors">
                  Outline Button
                </button>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                  Ghost Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Card Components
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Feature Card</h3>
                  <p className="text-white/70 mb-4">A versatile card component for displaying features, products, or content.</p>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</button>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-fuchsia-400/30 transition-all">
                  <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Stats Card</h3>
                  <p className="text-white/70 mb-4">Perfect for displaying metrics, statistics, or key performance indicators.</p>
                  <div className="text-2xl font-bold text-fuchsia-400">99.9%</div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Testimonial Card</h3>
                  <p className="text-white/70 mb-4">Ideal for customer reviews, testimonials, or user feedback.</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Form Components */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Form Components
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400/50 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-fuchsia-400/50 focus:outline-none transition-colors"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-cyan-400" />
                    <span className="text-white/80">Subscribe to newsletter</span>
                  </label>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all">
                  Submit Form
                </button>
              </div>
            </div>

            {/* Navigation Components */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Navigation Components
              </h2>
              
              <div className="space-y-6">
                {/* Breadcrumbs */}
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Breadcrumbs</h3>
                  <nav className="flex items-center space-x-2 text-sm">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300">Home</a>
                    <span className="text-white/50">/</span>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300">Components</a>
                    <span className="text-white/50">/</span>
                    <span className="text-white/70">Library</span>
                  </nav>
                </div>

                {/* Tabs */}
                <div>
                  <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Tabs</h3>
                  <div className="border-b border-white/20">
                    <nav className="flex space-x-8">
                      <button className="px-1 py-4 text-fuchsia-400 border-b-2 border-fuchsia-400 font-medium">
                        Overview
                      </button>
                      <button className="px-1 py-4 text-white/70 hover:text-white border-b-2 border-transparent hover:border-white/20 font-medium">
                        Components
                      </button>
                      <button className="px-1 py-4 text-white/70 hover:text-white border-b-2 border-transparent hover:border-white/20 font-medium">
                        Examples
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Installation and Usage */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mt-12 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Installation and Usage
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Installation</h3>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <span className="text-purple-400">npm</span> install zion-components
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Basic Usage</h3>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <span className="text-purple-400">import</span> { <span className="text-cyan-400">Button</span>, <span className="text-cyan-400">Card</span> } <span className="text-purple-400">from</span> <span className="text-yellow-400">'zion-components'</span>;
                  <br /><br />
                  <span className="text-purple-400">function</span> <span className="text-green-400">App</span>() {
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> (
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">&lt;Card&gt;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">&lt;Button</span> variant=<span className="text-yellow-400">"primary"</span><span className="text-cyan-400">&gt;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">&lt;/Button&gt;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">&lt;/Card&gt;</span>
                  <br />
                  &nbsp;&nbsp;);
                  <br />}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Customization</h3>
                <p className="text-white/80">
                  All components are built with Tailwind CSS and can be easily customized using utility classes or CSS custom properties.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-white/70 mb-6">
              Explore our component library, view live examples, and start building amazing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                View Documentation
              </a>
              <a href="#" className="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-lg transition-colors">
                Download Package
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}