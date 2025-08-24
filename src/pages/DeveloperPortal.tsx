
import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  BookOpen, 
  Zap, 
  Shield, 
  Users, 
  MessageSquare, 
  Github, 
  ExternalLink,
  Terminal,
  Database,
  Webhook,
  Key,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeveloperPortal() {
  const apiFeatures = [
    {
      title: 'RESTful APIs',
      description: 'Clean, intuitive REST APIs for all major platform features',
      icon: Code,
      status: 'Stable',
      docs: '/api-docs'
    },
    {
      title: 'Webhooks',
      description: 'Real-time notifications for platform events and updates',
      icon: Webhook,
      status: 'Beta',
      docs: '/api-docs/webhooks'
    },
    {
      title: 'Authentication',
      description: 'Secure OAuth 2.0 and API key authentication',
      icon: Key,
      status: 'Stable',
      docs: '/api-docs/auth'
    },
    {
      title: 'SDKs & Libraries',
      description: 'Official SDKs for JavaScript, Python, and more',
      icon: Terminal,
      status: 'Stable',
      docs: '/api-docs/sdks'
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Get API Keys',
      description: 'Sign up and generate your API keys from the dashboard',
      action: 'Get Started'
    },
    {
      step: 2,
      title: 'Read Documentation',
      description: 'Explore our comprehensive API documentation and guides',
      action: 'View Docs'
    },
    {
      step: 3,
      title: 'Test Endpoints',
      description: 'Use our interactive API playground to test endpoints',
      action: 'Try API'
    },
    {
      step: 4,
      title: 'Build & Deploy',
      description: 'Integrate our APIs into your applications',
      action: 'View Examples'
    }
  ];

  const resources = [
    {
      title: 'API Reference',
      description: 'Complete API endpoint documentation with examples',
      icon: BookOpen,
      href: '/api-docs',
      badge: 'Complete'
    },
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step tutorial for new developers',
      icon: Zap,
      href: '/api-docs/getting-started',
      badge: 'Beginner'
    },
    {
      title: 'Code Samples',
      description: 'Ready-to-use code examples in multiple languages',
      icon: Code,
      href: '/api-docs/samples',
      badge: 'Examples'
    },
    {
      title: 'SDK Downloads',
      description: 'Official SDKs and client libraries',
      icon: Terminal,
      href: '/api-docs/sdks',
      badge: 'Download'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      icon: Users,
      href: '/community',
      badge: 'Community'
    },
    {
      title: 'Support & Help',
      description: 'Technical support and troubleshooting guides',
      icon: MessageSquare,
      href: '/help',
      badge: 'Support'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Developer Portal | Zion Tech Group" 
        description="Build powerful applications with Zion Tech Group's comprehensive APIs, SDKs, and developer tools."
        keywords="developer portal, API, SDK, documentation, Zion Tech Group, developers"
        canonical="https://ziontechgroup.com/developers"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Code className="h-16 w-16 text-zion-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Developer Portal</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-6">
            Build powerful applications and integrations with our comprehensive APIs, SDKs, and developer tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple/90">
              <Link to="/api-docs">
                <BookOpen className="h-5 w-5 mr-2" />
                View API Documentation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* API Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Powerful APIs & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="border-zion-blue-light hover:bg-zion-blue-dark/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8 text-zion-cyan" />
                      <Badge variant={feature.status === 'Stable' ? 'default' : 'secondary'}>
                        {feature.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light mb-4">
                      {feature.description}
                    </CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={feature.docs}>
                        View Docs
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Get Started in 4 Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step) => (
              <Card key={step.step} className="border-zion-blue-light text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light mb-4">
                    {step.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Developer Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.title} className="border-zion-blue-light hover:bg-zion-blue-dark/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-6 w-6 text-zion-cyan" />
                      <Badge variant="outline" className="text-xs">
                        {resource.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light mb-4">
                      {resource.description}
                    </CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={resource.href}>
                        {resource.badge === 'Download' ? 'Download' : 'Learn More'}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* API Status */}
        <Card className="mb-16 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Shield className="h-6 w-6 mr-2 text-zion-cyan" />
              API Status & Performance
            </CardTitle>
            <CardDescription className="text-zion-slate-light">
              Real-time status of our APIs and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">&lt;100ms</div>
                <div className="text-zion-slate-light">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Monitoring</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <a href="/api-status" target="_blank" rel="noopener noreferrer">
                  View Detailed Status
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Get Help */}
        <Card className="border-zion-blue-light bg-zion-blue-dark/50">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Need Developer Support?</CardTitle>
            <CardDescription className="text-zion-slate-light">
              Our developer support team is here to help you build amazing applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button asChild className="bg-zion-purple hover:bg-zion-purple/90">
                <Link to="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Developer Support
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:dev-support@ziontechgroup.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </Button>
            </div>
            <p className="text-zion-slate-light text-sm">
              Response time: Usually within 4 hours for developer inquiries
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
