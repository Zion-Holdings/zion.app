import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Autonomous Technology Guide',
      description: 'Comprehensive guide to implementing autonomous systems in your organization.',
      type: 'Guide',
      downloadCount: '2.5k',
      fileSize: '15.2 MB',
      color: 'from-blue-500 to-blue-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'AI Implementation Checklist',
      description: 'Step-by-step checklist for successful AI and automation deployment.',
      type: 'Checklist',
      downloadCount: '1.8k',
      fileSize: '2.1 MB',
      color: 'from-purple-500 to-purple-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Performance Optimization Toolkit',
      description: 'Tools and templates for optimizing autonomous system performance.',
      type: 'Toolkit',
      downloadCount: '3.2k',
      fileSize: '28.7 MB',
      color: 'from-green-500 to-green-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Security Best Practices',
      description: 'Essential security guidelines for autonomous technology systems.',
      type: 'Guide',
      downloadCount: '1.5k',
      fileSize: '8.9 MB',
      color: 'from-red-500 to-red-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'ROI Calculator Template',
      description: 'Excel template for calculating ROI of autonomous technology investments.',
      type: 'Template',
      downloadCount: '2.1k',
      fileSize: '1.8 MB',
      color: 'from-orange-500 to-orange-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Case Study Templates',
      description: 'Professional templates for documenting autonomous technology success stories.',
      type: 'Templates',
      downloadCount: '1.3k',
      fileSize: '12.4 MB',
      color: 'from-indigo-500 to-indigo-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  const webinars = [
    {
      title: 'Getting Started with Autonomous Technology',
      date: 'January 25, 2025',
      duration: '45 min',
      speaker: 'Dr. Sarah Chen',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'AI Automation ROI: Measuring Success',
      date: 'February 2, 2025',
      duration: '60 min',
      speaker: 'Mike Rodriguez',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Security in Autonomous Systems',
      date: 'February 9, 2025',
      duration: '50 min',
      speaker: 'David Kim',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - Tools & Guides</title>
        <meta name="description" content="Access free resources, guides, templates, and tools to help you implement autonomous technology solutions in your organization." />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="Free tools, guides, and templates for autonomous technology implementation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50" spacing="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            Free Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access tools, guides, templates, and insights to accelerate your autonomous technology journey
          </p>
        </div>
      </Section>

      {/* Downloadable Resources */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Downloadable Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional tools and templates to help you succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className={`w-full h-32 bg-gradient-to-br ${resource.color} rounded-lg mb-4 flex items-center justify-center`}>
                  {resource.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">{resource.fileSize}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <span>{resource.downloadCount} downloads</span>
                <span>Free</span>
              </div>
              
              <Button size="sm" className="w-full">
                Download Now
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Upcoming Webinars */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Webinars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join live sessions with industry experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <Card key={index} className="text-center group hover:shadow-2xl transition-all duration-300">
              <div className={`w-full h-32 bg-gradient-to-br ${webinar.color} rounded-lg mb-6 flex items-center justify-center`}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{webinar.title}</h3>
              
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {webinar.date}
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {webinar.duration}
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {webinar.speaker}
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                Register Now
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Resource Categories */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resource Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exactly what you need to succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Guides & Documentation</h3>
            <p className="text-gray-600">
              Comprehensive guides covering all aspects of autonomous technology implementation
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Templates & Tools</h3>
            <p className="text-gray-600">
              Ready-to-use templates and practical tools for immediate implementation
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Webinars & Training</h3>
            <p className="text-gray-600">
              Live sessions and recorded training materials from industry experts
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Case Studies</h3>
            <p className="text-gray-600">
              Real-world examples and success stories from various industries
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Security & Compliance</h3>
            <p className="text-gray-600">
              Guidelines and best practices for secure autonomous system deployment
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Performance & Optimization</h3>
            <p className="text-gray-600">
              Tools and techniques for maximizing autonomous system efficiency
            </p>
          </Card>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get New Resources First
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be notified when we release new resources, guides, and tools
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
              <Button type="submit" size="md">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Get early access to new resources and exclusive content.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to support your autonomous technology journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/contact">
              Get Expert Support
            </Button>
            <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}