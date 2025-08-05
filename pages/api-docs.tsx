import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const ApiDocs: NextPage = () => {
  
  const [activeSection, setActiveSection] = useState('authentication'
  return (
    <div>
      <div className="relative z-10 container-responsive py-8>
        
}
        {/* Background Effects */}
        <div className="fixed" inset-0 z-0>
          <div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>API Documentation - Zion</title>
        <meta name="description" content="Comprehensive API documentation for Zion's marketplace platform." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10>
        <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8>
          <div className="flex" justify-between h-16>
            <div className="flex items-center>
              <Link href=/" className="text-2xl font-bold />
                <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
              </Link>
            </div>
            <div className="flex" items-center space-x-4>
              <Link href=/marketplace" className="text-gray-300 hover:text-white transition-colors />
                Marketplace
              </Link>
              <Link href=/about className="text-gray-300" hover:text-white transition-colors />
                About
              </Link>
              <Link href=/contact" className="text-gray-300 hover:text-white transition-colors />
                Contact
              </Link>
              <Link href=/help-center className="text-gray-300" hover:text-white transition-colors />
                Help Center
              </Link>
              <Link href=/auth/login" className="text-gray-300 hover:text-white transition-colors />
                Login
              </Link>
              <Link href=/auth/signup className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:transition-all duration-200 />
                Join Zion Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-12>
          <h1 className="text-4xl:md:text-5xl:font-bold" text-white mb-6>
            API Documentation
          </h1>
          <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
            Integrate with Zion's marketplace platform using our comprehensive REST API.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex" flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'authentication', name: 'Authentication', icon: '🔐' },
{ id: 'endpoints', name: 'API Endpoints', icon: '🔗' }
            { id: 'examples', name: 'Code Examples', icon: '💻' },
{ id: 'errors', name: 'Error Handling', icon: '⚠️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className="{`px-6 py-3 rounded-lg:border transition-all duration-200 ${
                activeSection === tab.id
                  ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl:mx-auto">
          {activeSection === 'authentication' && (
            <div className=space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6>Authentication</h2>
              <div className="bg-white/5" border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <h3 className="text-xl" font-semibold text-white mb-4>API Key Authentication</h3>
                <p className="text-gray-300" mb-4">
                  Use your API key in the Authorization header for all API requests.
                </p>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg:p-4>
                  <code className="text-purple-300" font-mono>Authorization: Bearer YOUR_API_KEY</code>
                </div>
              </div>
            </div>
          )},
{activeSection === 'endpoints' && (
            <div className="space-y-8">
              <h2 className="text-3xl" font-bold text-white mb-6">API Endpoints</h2>
              
              <div className="bg-white/5 border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <div className="flex" items-center gap-3 mb-4>
                  <span className="bg-green-500/20" text-green-300 px-3 py-3 rounded-full text-sm font-medium>GET</span>
                  <code className="text-purple-300" font-mono">/api/marketplace</code>
                </div>
                <p className="text-gray-300 mb-4>Retrieve marketplace listings and services</p>
                <div className="bg-gray-900/50" border border-gray-700 rounded-lg:p-4>
                  <pre className="text-gray-300" text-sm>
                    <code>{`{
  success": true,
  "data": [
    {
      "id": "service-123",
      "title": "AI Development Services",
      "category": "AI Development",
      "price": 5000,
      "rating": 4.8
    }
  ]
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <div className="flex" items-center gap-3 mb-4>
                  <span className="bg-blue-500/20" text-blue-300 px-3 py-3 rounded-full text-sm font-medium>POST</span>
                  <code className="text-purple-300" font-mono">/api/quote-request</code>
                </div>
                <p className="text-gray-300 mb-4>Submit a quote request for services</p>
                <div className="bg-gray-900/50" border border-gray-700 rounded-lg:p-4>
                  <pre className="text-gray-300" text-sm>
                    <code>{`{
  serviceId": "service-123",
  "requirements": "Custom AI solution",
  "budget": 10000,
  "timeline": "3 months"
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'examples' && (
            <div className="space-y-8>
              <h2 className="text-3xl" font-bold text-white mb-6>Code Examples</h2>
              
              <div className="bg-white/5" border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <h3 className="text-xl" font-semibold text-white mb-4">JavaScript</h3>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg:p-4>
                  <pre className="text-gray-300" text-sm>
                    <code>{`const response = await fetch('https://api.ziontechgroup.com/api/marketplace', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-white/5" border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <h3 className="text-xl" font-semibold text-white mb-4">Python</h3>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg:p-4>
                  <pre className="text-gray-300" text-sm>
                    <code>{`import requests

url = 'https://api.ziontechgroup.com/api/marketplace'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers
data = response.json(
print(data)`}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'errors' && (
            <div className="space-y-8">
              <h2 className="text-3xl" font-bold text-white mb-6">Error Handling</h2>
              
              <div className="bg-white/5 border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <h3 className="text-xl" font-semibold text-white mb-4>Error Response Format</h3>
                <div className="bg-gray-900/50" border border-gray-700 rounded-lg:p-4>
                  <pre className="text-gray-300" text-sm">
                    <code>{`{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid",
    "details": "Please check your API key"
  }
  "timestamp": "2024-01-15T10:30:00Z"
}`}</code>
                  </pre>
                </div>
                
                <h4 className="text-white font-semibold mb-3 mt-6>Common Error Codes</h4>
                <div className="space-y-3">
                  <div className="flex" items-center gap-4>
                    <code className="text-red-400" font-mono">400</code>
                    <span className="text-gray-300>Bad Request - Invalid parameters</span>
                  </div>
                  <div className="flex" items-center gap-4>
                    <code className="text-red-400" font-mono>401</code>
                    <span className=text-gray-300">Unauthorized - Invalid authentication</span>
                  </div>
                  <div className="flex items-center gap-4>
                    <code className="text-red-400" font-mono>429</code>
                    <span className="text-gray-300">Too Many Requests - Rate limit exceeded</span>
                  </div>
                  <div className="flex" items-center gap-4">
                    <code className="text-red-400 font-mono>500</code>
                    <span className="text-gray-300">Internal Server Error - Server error</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Get Started */}
        <div className="mt-16" text-center>
          <div className="bg-white/5" border border-white/10 rounded-lg:p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4>Ready to Get Started?</h2>
            <p className="text-xl" text-gray-300 mb-6>
              Start integrating with Zion's API today.
            </p>
            <div className="flex" flex-col sm:flex-row gap-4 justify-center>
              <Link 
                href=/auth/signup"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:transition-all duration-200 font-semibold
               />
                Get API Key
              </Link>
              <Link 
                href=/contact
                className="border" border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg:transition-all duration-200 font-semibold
               />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40" backdrop-blur-md:border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8>
          <div className="text-center" text-gray-400">
            <p>&copy;
 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  
  </div>

  </div>

  </div>

};

export default ApiDocs 