import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, FileText, Database, Shield, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap,
  Cloud, Lock, BarChart3, Search, Copy, ExternalLink
} from 'lucide-react';

const APIDocumentationPage: React.FC = () => {
  const apiCategories = [
    {
      icon: Database,
      title: "Data APIs",
      description: "Access and manage data through our secure APIs",
      endpoints: ["GET /api/data", "POST /api/data", "PUT /api/data", "DELETE /api/data"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security APIs",
      description: "Authentication, authorization, and security management",
      endpoints: ["POST /api/auth", "GET /api/user", "POST /api/permissions", "GET /api/audit"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Infrastructure APIs",
      description: "Manage cloud resources and infrastructure",
      endpoints: ["GET /api/resources", "POST /api/deploy", "PUT /api/scale", "DELETE /api/resources"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Analytics APIs",
      description: "Retrieve analytics and performance data",
      endpoints: ["GET /api/metrics", "GET /api/reports", "POST /api/events", "GET /api/insights"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      title: "Authentication Example",
      code: `const response = await fetch('/api/auth', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
const token = data.access_token;`
    },
    {
      language: "Python",
      title: "Data Retrieval Example",
      code: `import requests

headers = {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/api/data',
    headers=headers
)

data = response.json()
print(data)`
    },
    {
      language: "cURL",
      title: "API Request Example",
      code: `curl -X GET "https://api.ziontechgroup.com/api/data" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`
    }
  ];

  const sdks = [
    {
      name: "JavaScript/Node.js",
      version: "v2.1.0",
      description: "Official SDK for JavaScript and Node.js applications",
      link: "/docs/sdks/javascript"
    },
    {
      name: "Python",
      version: "v1.8.0",
      description: "Python SDK for data science and automation",
      link: "/docs/sdks/python"
    },
    {
      name: "Java",
      version: "v1.5.0",
      description: "Java SDK for enterprise applications",
      link: "/docs/sdks/java"
    },
    {
      name: "Go",
      version: "v1.2.0",
      description: "Go SDK for high-performance applications",
      link: "/docs/sdks/go"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                API Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                API Reference
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive API documentation with examples, SDKs, and integration guides 
                to help you build powerful applications with our platform.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized API endpoints by functionality and use case
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Endpoints:</h4>
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-gray-800/50 rounded-lg p-3 font-mono text-sm text-gray-300">
                        {endpoint}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group">
                    View Details
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Code Examples
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use code examples in multiple programming languages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{example.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                      {example.language}
                    </span>
                  </div>
                  
                  <div className="bg-gray-900/80 rounded-lg p-4 mb-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  
                  <button className="w-full bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Official SDKs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Client libraries and SDKs for popular programming languages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdks.map((sdk, index) => (
                <motion.a
                  key={index}
                  href={sdk.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="block p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {sdk.name}
                    </h3>
                    <span className="inline-block text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-3">
                      {sdk.version}
                    </span>
                    <p className="text-gray-300 text-sm mb-4">{sdk.description}</p>
                    <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="text-sm font-medium">View SDK</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Authentication & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Secure your API calls with our authentication system
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">API Keys</h3>
                  <p className="text-gray-300 mb-4">
                    Use API keys for simple authentication in development and testing environments.
                  </p>
                  <div className="bg-gray-900/80 rounded-lg p-4 mb-4">
                    <pre className="text-sm text-gray-300">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">OAuth 2.0</h3>
                  <p className="text-gray-300 mb-4">
                    Use OAuth 2.0 for production applications requiring user authentication.
                  </p>
                  <div className="bg-gray-900/80 rounded-lg p-4 mb-4">
                    <pre className="text-sm text-gray-300">
                      <code>Authorization: Bearer ACCESS_TOKEN</code>
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a 
                  href="/docs/authentication"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group"
                >
                  Learn More About Authentication
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start building with our APIs today. Get your API key and begin integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/get-started"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group"
                >
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="/support"
                  className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  Get Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default APIDocumentationPage;