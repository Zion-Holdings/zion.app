import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NewsroomPage() {
  const pressReleases = [
    {
      id: 1,
      title: "Zion Launches Revolutionary Autonomous Cloud Platform",
      date: "2025-01-17",
      summary: "Groundbreaking platform enables truly autonomous cloud management with zero human intervention, setting new industry standards.",
      category: "Product Launch",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Zion Secures $50M Series B Funding Round",
      date: "2025-01-15",
      summary: "Investment will accelerate development of next-generation AI automation technologies and expand global market presence.",
      category: "Company News",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Zion Partners with Leading Cloud Providers",
      date: "2025-01-12",
      summary: "Strategic partnerships with AWS, Azure, and Google Cloud expand Zion's reach across major cloud platforms.",
      category: "Partnership",
      readTime: "4 min read"
    }
  ];

  const mediaResources = [
    {
      title: "Zion Brand Guidelines",
      type: "PDF",
      description: "Complete brand identity and usage guidelines",
      size: "2.4 MB"
    },
    {
      title: "Product Screenshots",
      type: "ZIP",
      description: "High-resolution screenshots of Zion platform",
      size: "15.7 MB"
    },
    {
      title: "Company Logo Pack",
      type: "ZIP",
      description: "Vector logos in various formats and colors",
      size: "8.2 MB"
    },
    {
      title: "Executive Headshots",
      type: "ZIP",
      description: "Professional photos of Zion leadership team",
      size: "12.1 MB"
    }
  ];

  const contactInfo = {
    press: "press@zion.app",
    media: "media@zion.app",
    general: "hello@zion.app",
    phone: "+1 (555) 123-4567"
  };

  return (
    <>
      <Head>
        <title>Newsroom | Zion - Press & Media Resources</title>
        <meta name="description" content="Access Zion's latest press releases, media resources, and company information for journalists and media professionals." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Newsroom
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Press releases, media resources, and company information for journalists and media professionals
            </p>
          </div>
        </div>

        {/* Press Releases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Press Releases</h2>
          <div className="space-y-8">
            {pressReleases.map((release) => (
              <div key={release.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500">{release.readTime}</span>
                  </div>
                  <span className="text-sm text-gray-500">{release.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{release.title}</h3>
                <p className="text-gray-600 mb-6">{release.summary}</p>
                
                <div className="flex items-center justify-between">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Read Full Release
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Press Releases */}
          <div className="text-center mt-12">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Press Releases
            </button>
          </div>
        </div>

        {/* Media Resources */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">
                    {resource.type === 'PDF' ? '📄' : '📦'}
                  </div>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{resource.description}</p>
                
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-3">{resource.size}</div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">About Zion</h3>
                <p className="text-gray-600 mb-4">
                  Zion is a pioneering technology company focused on autonomous cloud automation. 
                  Our mission is to create systems that run themselves, learn from experience, 
                  and continuously improve without human intervention.
                </p>
                <p className="text-gray-600">
                  Founded in 2024, Zion has quickly become a leader in AI-powered automation, 
                  serving Fortune 500 companies and startups alike with innovative solutions 
                  that transform how businesses operate in the cloud.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Facts</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Founded: 2024
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Headquarters: San Francisco, CA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Employees: 150+
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Customers: 500+
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Funding: $75M Series B
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Media Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Press Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  For press releases, media interviews, and company information, 
                  please contact our press team.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 mr-2">Email:</span>
                    <a href={`mailto:${contactInfo.press}`} className="text-blue-600 hover:text-blue-800">
                      {contactInfo.press}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 mr-2">Phone:</span>
                    <span className="text-gray-600">{contactInfo.phone}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Media Resources</h3>
                <p className="text-gray-600 mb-4">
                  Need high-resolution images, company logos, or other media assets? 
                  Our media team is here to help.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 mr-2">Email:</span>
                    <a href={`mailto:${contactInfo.media}`} className="text-blue-600 hover:text-blue-800">
                      {contactInfo.media}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 mr-2">General:</span>
                    <a href={`mailto:${contactInfo.general}`} className="text-blue-600 hover:text-blue-800">
                      {contactInfo.general}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe to Press Releases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to receive press releases and company updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}