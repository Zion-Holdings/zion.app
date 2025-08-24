import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Copy, ExternalLink, BookOpen, Zap, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ApiDocs() {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/talent',
      description: 'Retrieve a list of talent profiles',
      auth: 'Optional',
      params: ['page', 'limit', 'skills', 'location']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/talent',
      description: 'Create a new talent profile',
      auth: 'Required',
      params: ['name', 'email', 'skills', 'bio']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/services',
      description: 'Get available services',
      auth: 'Optional',
      params: ['category', 'price_range', 'availability']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/services',
      description: 'Create a new service listing',
      auth: 'Required',
      params: ['title', 'description', 'price', 'category']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/ai-match',
      description: 'Get AI-powered recommendations',
      auth: 'Required',
      params: ['requirements', 'budget', 'timeline']
    }
  ];

  const codeExamples = {
    authentication: `// Get your API key from the dashboard
const API_KEY = 'your_api_key_here';

// Include in headers
const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};`,
    
    getTalent: `// Fetch talent profiles
const response = await fetch('/api/v1/talent?skills=react&location=remote', {
  headers: headers
});

const talent = await response.json();
console.log(talent);`,
    
    createService: `// Create a new service
const serviceData = {
  title: 'Web Development',
  description: 'Full-stack web development services',
  price: 75,
  category: 'development'
};

const response = await fetch('/api/v1/services', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(serviceData)
});`
  };

  const sdkExamples = [
    {
      name: 'JavaScript/Node.js',
      description: 'Official SDK for JavaScript and Node.js applications',
      icon: '🔷',
      href: '/api-docs/javascript'
    },
    {
      name: 'Python',
      description: 'Python SDK for building AI-powered applications',
      icon: '🐍',
      href: '/api-docs/python'
    },
    {
      name: 'React',
      description: 'React hooks and components for Zion integration',
      icon: '⚛️',
      href: '/api-docs/react'
    },
    {
      name: 'Mobile SDKs',
      description: 'iOS and Android SDKs for mobile applications',
      icon: '📱',
      href: '/api-docs/mobile'
    }
  ];

  return (
    <>
      <SEO
        title="API Documentation | Zion Tech Group"
        description="Comprehensive API documentation for integrating with the Zion Tech Group platform. Get started with our developer tools and SDKs."
        canonical="https://ziontechgroup.com/api-docs"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>API Documentation</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Integrate with our platform using our comprehensive APIs and developer tools
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                <Link to="/dashboard/api-keys">Get API Key</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/ziontechgroup/api-examples" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Examples
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">99.9%</div>
                <p className="text-zion-slate-light">Uptime</p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-zion-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">256-bit</div>
                <p className="text-zion-slate-light">Encryption</p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="p-6 text-center">
                <Database className="w-8 h-8 text-zion-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">&lt;100ms</div>
                <p className="text-zion-slate-light">Response Time</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Navigation */}
            <div className="lg:col-span-1">
              <Card className="bg-zion-blue-dark border-zion-purple/20 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="#authentication" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                    Authentication
                  </a>
                  <a href="#endpoints" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    API Endpoints
                  </a>
                  <a href="#sdks" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    SDKs & Libraries
                  </a>
                  <a href="#examples" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Code Examples
                  </a>
                  <a href="#webhooks" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Webhooks
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Authentication */}
              <section id="authentication">
                <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="p-6">
                    <p className="text-zion-slate-light mb-4">
                      All API requests require authentication using API keys. You can generate API keys from your dashboard.
                    </p>
                    <div className="bg-zion-blue-darker p-4 rounded-lg">
                      <pre className="text-zion-cyan text-sm overflow-x-auto">
                        <code>{codeExamples.authentication}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* API Endpoints */}
              <section id="endpoints">
                <h2 className="text-2xl font-bold text-white mb-4">API Endpoints</h2>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'}>
                              {endpoint.method}
                            </Badge>
                            <code className="text-zion-cyan font-mono">{endpoint.endpoint}</code>
                          </div>
                          <Badge variant="outline">{endpoint.auth}</Badge>
                        </div>
                        <p className="text-zion-slate-light mb-3">{endpoint.description}</p>
                        {endpoint.params.length > 0 && (
                          <div>
                            <span className="text-zion-slate-light text-sm">Parameters: </span>
                            <span className="text-zion-cyan text-sm">{endpoint.params.join(', ')}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* SDKs */}
              <section id="sdks">
                <h2 className="text-2xl font-bold text-white mb-4">SDKs & Libraries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sdkExamples.map((sdk) => (
                    <Card key={sdk.name} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl">{sdk.icon}</span>
                          <h3 className="font-semibold text-white">{sdk.name}</h3>
                        </div>
                        <p className="text-zion-slate-light text-sm mb-4">{sdk.description}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link to={sdk.href}>View Docs</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Code Examples */}
              <section id="examples">
                <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
                <Tabs defaultValue="get-talent" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark border-zion-purple/20">
                    <TabsTrigger value="get-talent">Get Talent</TabsTrigger>
                    <TabsTrigger value="create-service">Create Service</TabsTrigger>
                    <TabsTrigger value="ai-match">AI Match</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get-talent" className="mt-4">
                    <Card className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <div className="bg-zion-blue-darker p-4 rounded-lg">
                          <pre className="text-zion-cyan text-sm overflow-x-auto">
                            <code>{codeExamples.getTalent}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="create-service" className="mt-4">
                    <Card className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <div className="bg-zion-blue-darker p-4 rounded-lg">
                          <pre className="text-zion-cyan text-sm overflow-x-auto">
                            <code>{codeExamples.createService}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="ai-match" className="mt-4">
                    <Card className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <p className="text-zion-slate-light">AI matching examples coming soon...</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Getting Started */}
              <section>
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="p-8 text-center">
                    <BookOpen className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Ready to Get Started?</h3>
                    <p className="text-zion-slate-light mb-6">
                      Start building with our APIs today. Get your API key and explore our comprehensive documentation.
                    </p>
                    <div className="space-x-4">
                      <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                        <Link to="/dashboard/api-keys">Get API Key</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/help">Need Help?</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}