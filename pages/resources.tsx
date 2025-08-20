import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-automation-guide',
      title: 'Complete Guide to AI Automation',
      description: 'A comprehensive guide covering everything you need to know about implementing AI automation in your business.',
      type: 'Guide',
      category: 'AI & Automation',
      downloadUrl: '#',
      fileSize: '2.3 MB',
      featured: true
    },
    {
      id: 'cloud-optimization-whitepaper',
      title: 'Cloud Infrastructure Optimization Whitepaper',
      description: 'Learn the best practices for optimizing cloud infrastructure and reducing costs with autonomous systems.',
      type: 'Whitepaper',
      category: 'Cloud Computing',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      featured: false
    },
    {
      id: 'content-generation-case-study',
      title: 'Content Generation ROI Case Study',
      description: 'Real-world examples of how AI-powered content generation delivers measurable business results.',
      type: 'Case Study',
      category: 'Content Marketing',
      downloadUrl: '#',
      fileSize: '1.2 MB',
      featured: false
    },
    {
      id: 'security-automation-checklist',
      title: 'Security Automation Implementation Checklist',
      description: 'A step-by-step checklist for implementing automated security systems in your organization.',
      type: 'Checklist',
      category: 'Cybersecurity',
      downloadUrl: '#',
      fileSize: '0.8 MB',
      featured: false
    },
    {
      id: 'performance-monitoring-guide',
      title: 'Performance Monitoring Best Practices',
      description: 'Essential guidelines for setting up effective performance monitoring with AI-driven insights.',
      type: 'Guide',
      category: 'Performance',
      downloadUrl: '#',
      fileSize: '1.5 MB',
      featured: false
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator',
      description: 'Interactive tool to calculate the return on investment for your automation projects.',
      type: 'Tool',
      category: 'Business Strategy',
      downloadUrl: '#',
      fileSize: '0.5 MB',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'Content Marketing', 'Cybersecurity', 'Performance', 'Business Strategy'];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive library of guides, whitepapers, case studies, and tools to help you implement autonomous technology solutions." />
        <meta property="og:title" content="Resources" />
        <meta property="og:description" content="Comprehensive library of guides and tools for autonomous technology." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Resource Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of guides, whitepapers, case studies, and tools
          </p>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resource
            </h2>
            <p className="text-xl text-gray-600">
              Our most comprehensive guide to AI automation
            </p>
          </div>

          {resources.filter(resource => resource.featured).map(resource => (
            <Card key={resource.id} className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {resource.type}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {resource.fileSize}
                  </div>
                </div>
                <CardTitle className="text-3xl text-gray-900">{resource.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Free download • No registration required
                  </div>
                  <Button variant="gradient" size="lg">
                    Download Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete collection of guides, tools, and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.filter(resource => !resource.featured).map(resource => (
              <Card key={resource.id} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {resource.type}
                    </span>
                    <div className="text-xs text-gray-500">
                      {resource.fileSize}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{resource.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {resource.category}
                    </span>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              More ways to learn and grow with autonomous technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-gray-900">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive technical documentation for all our autonomous systems and APIs.
                </p>
                <Button variant="outline" className="w-full">
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-gray-900">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Step-by-step video tutorials covering implementation and best practices.
                </p>
                <Button variant="outline" className="w-full">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-gray-900">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our community of developers and technology professionals.
                </p>
                <Button variant="outline" className="w-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can&apos;t find what you&apos;re looking for? Our team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}