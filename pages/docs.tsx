import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const DocumentationPage: React.FC = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Quick start guide for new users",
      icon: "🚀",
      links: [
        { name: "Installation", href: "#installation", description: "Set up Zion App in minutes" },
        { name: "Quick Start", href: "#quick-start", description: "Build your first automation" },
        { name: "Configuration", href: "#configuration", description: "Customize your setup" }
      ]
    },
    {
      title: "Core Concepts",
      description: "Understanding the fundamentals",
      icon: "🧠",
      links: [
        { name: "Automations", href: "#automations", description: "How autonomous workflows work" },
        { name: "AI Integration", href: "#ai-integration", description: "Leveraging artificial intelligence" },
        { name: "Monitoring", href: "#monitoring", description: "Real-time system health" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      icon: "🔌",
      links: [
        { name: "REST API", href: "#rest-api", description: "HTTP endpoints and methods" },
        { name: "Webhooks", href: "#webhooks", description: "Event-driven integrations" },
        { name: "SDK", href: "#sdk", description: "Client libraries and tools" }
      ]
    },
    {
      title: "Automation Guide",
      description: "Building custom automations",
      icon: "⚙️",
      links: [
        { name: "Workflow Builder", href: "#workflow-builder", description: "Visual automation designer" },
        { name: "Triggers", href: "#triggers", description: "Event-based automation" },
        { name: "Actions", href: "#actions", description: "Available automation steps" }
      ]
    },
    {
      title: "Deployment",
      description: "Production deployment guide",
      icon: "🌐",
      links: [
        { name: "Netlify", href: "#netlify", description: "Deploy to Netlify" },
        { name: "Vercel", href: "#vercel", description: "Deploy to Vercel" },
        { name: "Docker", href: "#docker", description: "Containerized deployment" }
      ]
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: "🔧",
      links: [
        { name: "FAQ", href: "#faq", description: "Frequently asked questions" },
        { name: "Debugging", href: "#debugging", description: "Debug common issues" },
        { name: "Support", href: "#support", description: "Get help when needed" }
      ]
    }
  ];

  const codeExamples = [
    {
      title: "Basic Automation",
      language: "yaml",
      code: `name: Basic Automation
on:
  schedule:
    - cron: '*/5 * * * *'
  workflow_dispatch:

jobs:
  automation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Automation
        run: npm run automation:cloud`
    },
    {
      title: "AI Content Generation",
      language: "javascript",
      code: `// AI-powered content generation
const generateContent = async (prompt) => {
  const response = await fetch('/api/ai/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  return response.json();
};

// Usage
const content = await generateContent(
  'Create a blog post about autonomous automation'
);`
    },
    {
      title: "Performance Monitoring",
      language: "typescript",
      code: `interface PerformanceMetrics {
  lighthouseScore: number;
  loadTime: number;
  seoScore: number;
  accessibilityScore: number;
}

const monitorPerformance = async (): Promise<PerformanceMetrics> => {
  const metrics = await fetch('/api/performance/lighthouse');
  return metrics.json();
};

// Real-time monitoring
setInterval(async () => {
  const metrics = await monitorPerformance();
  console.log('Performance:', metrics);
}, 60000); // Every minute`
    }
  ];

  return (
    <>
      <Head>
        <title>Documentation - Zion App</title>
        <meta name="description" content="Comprehensive documentation for Zion App - learn how to use autonomous cloud automations, AI-powered features, and advanced monitoring." />
        <meta name="keywords" content="documentation, API, automation, AI, monitoring, deployment" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Documentation
              </h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Everything you need to know about Zion App - from getting started to building advanced automations.
              </p>
            </div>
          </div>
        </header>

        {/* Documentation Sections */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-blue-200 mb-6">{section.description}</p>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-l-2 border-blue-400 pl-4">
                      <a
                        href={link.href}
                        className="text-blue-300 hover:text-blue-100 font-medium block mb-1"
                      >
                        {link.name}
                      </a>
                      <p className="text-blue-200 text-sm">{link.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Code Examples
          </h2>
          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">{example.title}</h3>
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Quick Start Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
                    <code>npm install zion-app</code>
                  </pre>
                </div>
                <p className="text-blue-200">Install Zion App and its dependencies.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">2. Configuration</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
                    <code>npm run setup</code>
                  </pre>
                </div>
                <p className="text-blue-200">Configure your environment and API keys.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">3. First Automation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
                    <code>npm run automation:create</code>
                  </pre>
                </div>
                <p className="text-blue-200">Create your first autonomous automation.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">4. Deploy</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
                    <code>npm run deploy</code>
                  </pre>
                </div>
                <p className="text-blue-200">Deploy your application to production.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Support
              </Link>
              <Link
                href="https://github.com/Zion-Holdings/zion.app/issues"
                className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Report Issue
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-blue-200">
              <p>&copy; 2025 Zion App. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DocumentationPage;