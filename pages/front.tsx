import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Front: React.FC = () => {
  const highlights = [
    {
      icon: '🚀',
      title: 'Rapid Development',
      description: 'Build and deploy applications faster than ever with our streamlined development pipeline'
    },
    {
      icon: '🔧',
      title: 'Advanced Tooling',
      description: 'Access to cutting-edge development tools and automation systems'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Create applications that work seamlessly across all devices and platforms'
    },
    {
      icon: '⚡',
      title: 'Performance First',
      description: 'Optimized for speed and efficiency with modern web technologies'
    }
  ];

  const technologies = [
    { name: 'Next.js', description: 'React framework for production', icon: '⚛️' },
    { name: 'TypeScript', description: 'Typed JavaScript for better development', icon: '📘' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨' },
    { name: 'Node.js', description: 'JavaScript runtime for server-side development', icon: '🟢' }
  ];

  const quickActions = [
    { name: 'Start Building', href: '/playground', icon: '🏗️', color: 'bg-blue-600' },
    { name: 'View Components', href: '/component-library', icon: '🧩', color: 'bg-green-600' },
    { name: 'Explore API', href: '/api-documentation', icon: '📚', color: 'bg-purple-600' },
    { name: 'Learn More', href: '/discover', icon: '🔍', color: 'bg-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Front - bolt.new.zion.app</title>
        <meta name="description" content="Front-end development tools, components, and resources" />
        <meta name="keywords" content="front-end, development, tools, components, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Front-End Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build modern, responsive, and performant web applications with our comprehensive 
              front-end development tools and resources.
            </p>
            <div className="mt-8">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Quick Actions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link 
                  key={index} 
                  href={action.href}
                  className={`${action.color} text-white p-6 rounded-lg text-center hover:opacity-90 transition-opacity`}
                >
                  <div className="text-4xl mb-3">{action.icon}</div>
                  <h3 className="text-lg font-semibold">{action.name}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* Development Workflow */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Development Workflow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Design & Plan</h3>
                <p className="text-gray-600">
                  Start with our component library and design system to create consistent, 
                  beautiful user interfaces.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Build & Develop</h3>
                <p className="text-gray-600">
                  Use our modern tooling and automation systems to build applications 
                  faster and more efficiently.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Deploy & Optimize</h3>
                <p className="text-gray-600">
                  Deploy with confidence using our automated deployment pipeline and 
                  performance optimization tools.
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Development Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Documentation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <Link href="/api-documentation" className="hover:text-blue-600 underline">
                      API Documentation
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <Link href="/component-library" className="hover:text-blue-600 underline">
                      Component Library
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <Link href="/content-hub" className="hover:text-blue-600 underline">
                      Development Guides
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools & Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Interactive Playground</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Performance Testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Automated Deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;