import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Playground: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('automation');

  const demos = [
    {
      id: 'automation',
      name: 'Automation Demo',
      icon: '⚙️',
      description: 'Experience our automation platform in action',
      status: 'Live'
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      icon: '🤖',
      description: 'Generate content using our AI-powered tools',
      status: 'Live'
    },
    {
      id: 'performance',
      name: 'Performance Testing',
      icon: '⚡',
      description: 'Test and optimize your applications',
      status: 'Live'
    },
    {
      id: 'security',
      name: 'Security Scanner',
      icon: '🔒',
      description: 'Scan your code for security vulnerabilities',
      status: 'Live'
    }
  ];

  const automationFeatures = [
    { name: 'Workflow Builder', description: 'Visual workflow creation tool', status: 'Active' },
    { name: 'Task Scheduler', description: 'Automated task scheduling system', status: 'Active' },
    { name: 'Monitoring Dashboard', description: 'Real-time system monitoring', status: 'Active' },
    { name: 'Alert System', description: 'Intelligent alerting and notifications', status: 'Active' }
  ];

  const aiContentExamples = [
    { type: 'Blog Post', prompt: 'Write a blog post about automation trends', status: 'Ready' },
    { type: 'Product Description', prompt: 'Create a product description for an automation tool', status: 'Ready' },
    { type: 'Technical Documentation', prompt: 'Generate API documentation', status: 'Ready' },
    { type: 'Marketing Copy', prompt: 'Write marketing copy for a tech product', status: 'Ready' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Head>
        <title>Playground - bolt.new.zion.app</title>
        <meta name="description" content="Interactive playground to test and explore our automation and AI tools" />
        <meta name="keywords" content="playground, demo, automation, AI, testing, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Playground
            </h1>
            <p className="text-xl text-gray-600">
              Test, explore, and experience our cutting-edge automation and AI tools in real-time
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Demos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`p-6 border rounded-lg text-center transition-all ${
                    activeDemo === demo.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-3">{demo.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{demo.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{demo.description}</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {demo.status}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {activeDemo === 'automation' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Automation Platform Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Live Features</h3>
                    <div className="space-y-4">
                      {automationFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-800">{feature.name}</h4>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            {feature.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Interactive Demo</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-4">⚙️</div>
                        <p className="text-gray-600">Automation Platform</p>
                        <p className="text-sm text-gray-500">Click to interact</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Start Workflow
                      </button>
                      <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                        View Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'ai-content' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Content Generation Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Content Types</h3>
                    <div className="space-y-4">
                      {aiContentExamples.map((example, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-800">{example.type}</h4>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              {example.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{example.prompt}</p>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Generate
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Generated Content</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-4">📝</div>
                        <p>Generated content will appear here</p>
                        <p className="text-sm">Select a content type to get started</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'performance' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Performance Testing Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Test Options</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Load Testing</h4>
                        <p className="text-sm text-gray-600 mb-3">Test your application under various load conditions</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Start Test
                        </button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Performance Analysis</h4>
                        <p className="text-sm text-gray-600 mb-3">Analyze performance metrics and bottlenecks</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Analyze
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Test Results</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-4">📊</div>
                        <p>Performance test results will appear here</p>
                        <p className="text-sm">Run a test to see metrics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'security' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Security Scanner Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Scan Options</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Code Analysis</h4>
                        <p className="text-sm text-gray-600 mb-3">Scan your code for security vulnerabilities</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Scan Code
                        </button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Dependency Check</h4>
                        <p className="text-sm text-gray-600 mb-3">Check for vulnerable dependencies</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Check Dependencies
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Scan Results</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-4">🔍</div>
                        <p>Security scan results will appear here</p>
                        <p className="text-sm">Run a scan to see findings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get Started</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to use our tools effectively with comprehensive documentation and tutorials.
                </p>
                <Link href="/api-documentation" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Docs
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Support</h3>
                <p className="text-gray-600 mb-4">
                  Need help? Our support team is available to assist you with any questions.
                </p>
                <Link href="/contact" className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;