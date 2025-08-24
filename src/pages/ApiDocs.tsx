import React from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { BookOpen, Code, Webhook, AlertTriangle, Play, Key, BarChart3 } from "lucide-react";

export default function ApiDocs() {
  const apiSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of integrating with Zion's API",
      icon: Play,
      link: "/developers/docs/getting-started",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "API Reference",
      description: "Complete API endpoint documentation and parameters",
      icon: BookOpen,
      link: "/developers/docs/reference",
      color: "from-zion-purple to-zion-purple-light"
    },
    {
      title: "Webhooks",
      description: "Set up real-time notifications and integrations",
      icon: Webhook,
      link: "/developers/docs/webhooks",
      color: "from-zion-green to-zion-cyan"
    },
    {
      title: "Sample Code",
      description: "Ready-to-use code examples in multiple languages",
      icon: Code,
      link: "/developers/docs/samples",
      color: "from-zion-orange to-zion-yellow"
    },
    {
      title: "Error Codes",
      description: "Understand API errors and rate limits",
      icon: AlertTriangle,
      link: "/developers/docs/errors",
      color: "from-zion-red to-zion-orange"
    },
    {
      title: "Developer Portal",
      description: "Manage API keys, webhooks, and monitor usage",
      icon: Key,
      link: "/developers/portal",
      color: "from-zion-purple-light to-zion-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="API Documentation - Zion AI Marketplace"
        description="Comprehensive API documentation for integrating with Zion's AI marketplace platform. Get started with our REST API, webhooks, and developer tools."
        keywords="API documentation, REST API, webhooks, developer tools, Zion marketplace API"
        canonical="https://ziontechgroup.com/api-docs"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>API Documentation</GradientHeading>
            <p className="text-zion-slate-light text-xl mt-6 max-w-3xl mx-auto">
              Build powerful integrations with Zion's AI marketplace platform. Access our comprehensive 
              REST API, webhooks, and developer tools to create seamless experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/developers/portal"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                <Key className="w-5 h-5 mr-2" />
                Get API Keys
              </Link>
              <a
                href="#quick-start"
                className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple rounded-lg hover:bg-zion-purple/10 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Quick Start
              </a>
            </div>
          </div>

          {/* API Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {apiSections.map((section) => (
              <Link
                key={section.title}
                to={section.link}
                className="group block p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all hover:shadow-lg hover:shadow-zion-purple/10"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} mb-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {section.title}
                </h3>
                <p className="text-zion-slate-light group-hover:text-zion-slate transition-colors">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Quick Start Section */}
          <div id="quick-start" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Quick Start</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-4">1. Get Your API Key</h3>
                <p className="text-zion-slate-light mb-4">
                  Sign up for a developer account and generate your API key in the Developer Portal.
                </p>
                <Link
                  to="/developers/portal"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Go to Developer Portal →
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-4">2. Make Your First Request</h3>
                <div className="bg-zion-blue border border-zion-blue-light rounded p-4">
                  <code className="text-zion-slate-light text-sm">
                    curl -X GET "https://api.ziontechgroup.com/v1/jobs" \<br/>
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-4">
                <BarChart3 className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>
              <p className="text-zion-slate-light">
                Access live marketplace data including jobs, talent, and services with real-time updates.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-full mb-4">
                <Webhook className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Webhook Support</h3>
              <p className="text-zion-slate-light">
                Receive instant notifications when new opportunities or updates are available.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-green/20 rounded-full mb-4">
                <Code className="w-8 h-8 text-zion-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multiple Languages</h3>
              <p className="text-zion-slate-light">
                SDKs and examples available in JavaScript, Python, PHP, and more.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of developers building innovative solutions with Zion's API. 
              Get started today with our comprehensive documentation and developer tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/developers/portal"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                <Key className="w-5 h-5 mr-2" />
                Get API Keys
              </Link>
              <Link
                to="/developers/docs/getting-started"
                className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple rounded-lg hover:bg-zion-purple/10 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}