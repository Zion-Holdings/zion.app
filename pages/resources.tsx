import React from 'react';
import Head from 'next/head';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation for our platform and services.',
      icon: '📚',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      resources: [
        { name: 'Platform API Reference', type: 'PDF', size: '2.3 MB' },
        { name: 'Integration Guide', type: 'PDF', size: '1.8 MB' },
        { name: 'Best Practices', type: 'PDF', size: '3.1 MB' },
        { name: 'Troubleshooting', type: 'PDF', size: '1.5 MB' },
      ],
    },
    {
      title: 'Whitepapers',
      description: 'In-depth research and analysis on autonomous technology and industry trends.',
      icon: '📄',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
      resources: [
        { name: 'AI Automation ROI Study', type: 'PDF', size: '4.2 MB' },
        { name: 'Future of Autonomous Systems', type: 'PDF', size: '3.8 MB' },
        { name: 'Cloud-Native Architecture', type: 'PDF', size: '2.9 MB' },
        { name: 'Security in AI Systems', type: 'PDF', size: '3.5 MB' },
      ],
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples of successful autonomous technology implementations.',
      icon: '📊',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
      resources: [
        { name: 'E-commerce Transformation', type: 'PDF', size: '2.7 MB' },
        { name: 'Healthcare AI Platform', type: 'PDF', size: '3.2 MB' },
        { name: 'Financial Services Automation', type: 'PDF', size: '2.8 MB' },
        { name: 'Manufacturing IoT Solution', type: 'PDF', size: '3.0 MB' },
      ],
    },
    {
      title: 'Webinars & Videos',
      description: 'Educational content and expert insights on autonomous technology.',
      icon: '🎥',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      resources: [
        { name: 'Getting Started with AI', type: 'Video', size: '45 min' },
        { name: 'Advanced Automation', type: 'Video', size: '60 min' },
        { name: 'Cloud Migration Guide', type: 'Video', size: '30 min' },
        { name: 'Security Best Practices', type: 'Video', size: '40 min' },
      ],
    },
    {
      title: 'Templates & Tools',
      description: 'Ready-to-use templates and development tools to accelerate your projects.',
      icon: '🛠️',
      color: 'bg-gradient-to-br from-red-400 to-pink-500',
      resources: [
        { name: 'Project Planning Template', type: 'Excel', size: '156 KB' },
        { name: 'API Testing Suite', type: 'Tool', size: '2.1 MB' },
        { name: 'Performance Monitoring', type: 'Tool', size: '1.8 MB' },
        { name: 'Security Checklist', type: 'PDF', size: '890 KB' },
      ],
    },
    {
      title: 'Community Resources',
      description: 'Connect with other developers and share knowledge in our community.',
      icon: '👥',
      color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
      resources: [
        { name: 'Developer Forum', type: 'Community', size: 'Active' },
        { name: 'Code Examples', type: 'Repository', size: 'GitHub' },
        { name: 'User Groups', type: 'Community', size: 'Local' },
        { name: 'Expert Q&A', type: 'Community', size: 'Live' },
      ],
    },
  ];

  const featuredResources = [
    {
      title: 'Complete Platform Guide',
      description: 'Everything you need to know about our autonomous technology platform.',
      type: 'Comprehensive Guide',
      size: '15.2 MB',
      downloads: '2,847',
      rating: 4.9,
      icon: '📖',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
    {
      title: 'AI Implementation Playbook',
      description: 'Step-by-step guide to implementing AI automation in your organization.',
      type: 'Implementation Guide',
      size: '8.7 MB',
      downloads: '1,923',
      rating: 4.8,
      icon: '🤖',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      title: 'Performance Optimization Handbook',
      description: 'Advanced techniques for optimizing autonomous systems performance.',
      type: 'Technical Guide',
      size: '6.3 MB',
      downloads: '1,456',
      rating: 4.7,
      icon: '⚡',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
    },
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group</title>
        <meta name="description" content="Access comprehensive resources including documentation, whitepapers, case studies, and tools to help you succeed with autonomous technology." />
        <meta property="og:title" content="Resources | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive resources for autonomous technology success." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to succeed with autonomous technology - from documentation to implementation guides
            </p>
            <Button href="/contact" size="lg">
              Get Expert Help
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Resources */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most downloaded and highly-rated resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`w-full h-48 ${resource.color} flex items-center justify-center`}>
                  <span className="text-6xl">{resource.icon}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                      {resource.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-medium text-gray-900">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>{resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  
                  <Button href="/resources/download" variant="outline" className="w-full">
                    Download Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the resources you need organized by topic and type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`w-full h-32 ${category.color} flex items-center justify-center`}>
                  <span className="text-5xl">{category.icon}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {category.resources.slice(0, 3).map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">{resource.name}</span>
                        <span className="text-gray-500">{resource.size}</span>
                      </div>
                    ))}
                    {category.resources.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{category.resources.length - 3} more resources
                      </div>
                    )}
                  </div>
                  
                  <Button href={`/resources/${category.title.toLowerCase().replace(/ /g, '-')}`} variant="outline" className="w-full">
                    View All
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Access Tools */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Access Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tools and utilities to help you get started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Resources</h3>
              <p className="text-gray-600 text-sm mb-4">Find exactly what you need</p>
              <Button href="/resources/search" variant="ghost" size="sm">
                Search Now
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Center</h3>
              <p className="text-gray-600 text-sm mb-4">Access all resources</p>
              <Button href="/resources/downloads" variant="ghost" size="sm">
                Browse All
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Support</h3>
              <p className="text-gray-600 text-sm mb-4">Expert help when you need it</p>
              <Button href="/contact" variant="ghost" size="sm">
                Contact Us
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">Stay updated on new resources</p>
              <Button href="/resources/newsletter" variant="ghost" size="sm">
                Subscribe
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Help Finding Resources?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help you find the right resources for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get Expert Help
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}