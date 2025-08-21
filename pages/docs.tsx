import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function DocsPage() {
  const docCategories = [
    {
      icon: '🚀',
      title: 'Getting Started',
      description: 'Quick start guides and tutorials to get you up and running.',
      href: '#getting-started',
      color: 'text-blue-400',
    },
    {
      icon: '🔧',
      title: 'API Reference',
      description: 'Complete API documentation with examples and endpoints.',
      href: '#api-reference',
      color: 'text-green-400',
    },
    {
      icon: '📖',
      title: 'Tutorials',
      description: 'Step-by-step guides for common use cases and integrations.',
      href: '#tutorials',
      color: 'text-purple-400',
    },
    {
      icon: '⚙️',
      title: 'Configuration',
      description: 'Detailed configuration options and environment setup.',
      href: '#configuration',
      color: 'text-orange-400',
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Security best practices and authentication methods.',
      href: '#security',
      color: 'text-red-400',
    },
    {
      icon: '📊',
      title: 'Monitoring',
      description: 'How to monitor and troubleshoot your applications.',
      href: '#monitoring',
      color: 'text-cyan-400',
    },
  ];

  const quickStartSteps = [
    {
      step: '1',
      title: 'Install Dependencies',
      description: 'Install the required packages and dependencies for your project.',
      code: 'npm install zion-tech-sdk',
    },
    {
      step: '2',
      title: 'Configure API Keys',
      description: 'Set up your API keys and environment variables.',
      code: 'ZION_API_KEY=your_api_key_here',
    },
    {
      step: '3',
      title: 'Initialize Client',
      description: 'Create and configure your Zion Tech client instance.',
      code: 'const client = new ZionTech(apiKey);',
    },
    {
      step: '4',
      title: 'Make Your First Request',
      description: 'Start using the API with a simple request.',
      code: 'const result = await client.automation.create();',
    },
  ];

  return (
    <>
      <Head>
        <title>Documentation | Zion Tech Group</title>
        <meta name="description" content="Complete documentation for Zion Tech Group services - API reference, tutorials, and guides." />
        <meta property="og:title" content="Documentation | Zion Tech Group" />
        <meta property="og:description" content="Complete documentation for Zion Tech Group services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cursor-darker via-cursor-dark to-cursor-darker overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        
        <div className="relative z-10 container-cursor text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text">
            Documentation
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Everything you need to build amazing applications with our platform
          </p>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Explore Our Documentation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find the information you need to build, deploy, and scale your applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <Card
                key={index}
                className="text-center group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className={`text-4xl mb-6 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cursor-blue transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {category.description}
                </p>
                <Button
                  href={category.href}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  View Docs
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section id="getting-started" className="py-24 bg-gradient-to-b from-cursor-darker to-cursor-dark">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get up and running with Zion Tech Group in just a few minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {quickStartSteps.map((step, index) => (
              <Card
                key={index}
                className="hover:border-cursor-blue/30"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-cursor-blue rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="bg-cursor-darker border border-cursor-lighter rounded-lg p-4">
                      <code className="text-cursor-blue font-mono text-sm">
                        {step.code}
                      </code>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference Preview */}
      <section id="api-reference" className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              API Reference
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete API documentation with examples and interactive testing
            </p>
          </div>

          <Card className="max-w-4xl mx-auto hover:border-cursor-blue/30">
            <h3 className="text-2xl font-bold mb-6 text-cursor-blue">
              Authentication
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              All API requests require authentication using your API key. Include it in the Authorization header:
            </p>
            <div className="bg-cursor-darker border border-cursor-lighter rounded-lg p-4 mb-6">
              <code className="text-cursor-blue font-mono text-sm">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
            <p className="text-gray-400 leading-relaxed">
              You can find your API key in your dashboard under Settings → API Keys.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cursor-blue to-blue-600">
        <div className="container-cursor text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Explore our comprehensive documentation and start building amazing applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Get Support
            </Button>
            <Button
              href="/resources"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Resources
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}