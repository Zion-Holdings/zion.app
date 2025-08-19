import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Newsroom: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Autonomous Automation Platform',
      date: '2025-01-17',
      category: 'product-launch',
      summary: 'New platform sets industry standard for autonomous automation with 99.9% uptime guarantee',
      featured: true
    },
    {
      id: 2,
      title: 'Strategic Partnership with CloudTech Solutions Announced',
      date: '2025-01-13',
      category: 'partnership',
      summary: 'Collaboration to deliver enhanced cloud automation services to enterprise clients',
      featured: false
    },
    {
      id: 3,
      title: 'Zion Tech Group Achieves SOC 2 Type II Compliance',
      date: '2025-01-10',
      category: 'compliance',
      summary: 'Security milestone demonstrates commitment to enterprise-grade security standards',
      featured: false
    },
    {
      id: 4,
      title: 'New AI-Powered Content Generation Features Released',
      date: '2025-01-08',
      category: 'product-update',
      summary: 'Advanced AI capabilities revolutionize content creation and management',
      featured: false
    }
  ];

  const mediaResources = [
    {
      name: 'Company Logo',
      type: 'Logo',
      format: 'SVG, PNG',
      description: 'High-resolution company logo in various formats'
    },
    {
      name: 'Product Screenshots',
      type: 'Images',
      format: 'PNG, JPG',
      description: 'Screenshots of our platform and key features'
    },
    {
      name: 'Executive Headshots',
      type: 'Photos',
      format: 'JPG',
      description: 'Professional headshots of key team members'
    },
    {
      name: 'Brand Guidelines',
      type: 'Document',
      format: 'PDF',
      description: 'Complete brand style guide and usage guidelines'
    }
  ];

  const contactInfo = {
    pressEmail: 'press@zion.holdings',
    generalEmail: 'info@zion.holdings',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive, Tech City, TC 12345'
  };

  const filters = [
    { id: 'all', label: 'All Press', icon: '📰' },
    { id: 'product-launch', label: 'Product Launches', icon: '🚀' },
    { id: 'partnership', label: 'Partnerships', icon: '🤝' },
    { id: 'compliance', label: 'Compliance', icon: '✅' },
    { id: 'product-update', label: 'Product Updates', icon: '🔄' }
  ];

  const filteredPress = activeFilter === 'all' 
    ? pressReleases 
    : pressReleases.filter(release => release.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Newsroom - bolt.new.zion.app</title>
        <meta name="description" content="Press releases, media resources, and company information from Zion Tech Group" />
        <meta name="keywords" content="newsroom, press, media, company, Zion Tech Group, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Newsroom
            </h1>
            <p className="text-xl text-gray-600">
              Press releases, media resources, and company information for journalists and media professionals
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Press Release</h2>
            {pressReleases.filter(release => release.featured).map((release) => (
              <div key={release.id} className="border border-gray-200 rounded-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full capitalize">
                    {release.category.replace('-', ' ')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{release.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{release.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{release.date}</span>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Read Full Release
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {filteredPress.map((release) => (
                <div key={release.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                      {release.category.replace('-', ' ')}
                    </span>
                    <span className="text-sm text-gray-500">{release.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{release.title}</h3>
                  <p className="text-gray-600 mb-4">{release.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Press Release</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Media Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaResources.map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{resource.name}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Format: {resource.format}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Media Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Press Inquiries</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-800">Press Email:</span>
                    <p className="text-blue-600">{contactInfo.pressEmail}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">General Email:</span>
                    <p className="text-blue-600">{contactInfo.generalEmail}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Phone:</span>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Company Address</h3>
                <p className="text-gray-700 mb-4">{contactInfo.address}</p>
                <h4 className="font-medium text-gray-800 mb-2">Response Time</h4>
                <p className="text-gray-600">We typically respond to press inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;