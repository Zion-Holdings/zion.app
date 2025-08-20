import React from 'react';
import Head from 'next/head';
import Hero from '../components/ui/Hero';
import Features from '../components/ui/Features';
import CTA from '../components/ui/CTA';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function HomePage() {
  const heroStats = [
    { value: '227+', label: 'Intelligent Automations', color: 'text-blue-600' },
    { value: '2960+', label: 'Dynamic Pages', color: 'text-purple-600' },
    { value: '12', label: 'Core Components', color: 'text-indigo-600' },
    { value: '100%', label: 'Autonomous', color: 'text-green-600' },
    { value: '99.99%', label: 'Uptime', color: 'text-orange-600' }
  ];

  const platformFeatures = [
    {
      icon: '☁️',
      title: 'Autonomous Cloud Systems',
      description: 'Self-healing CI/CD pipelines, intelligent build orchestration, and zero-downtime deployments.',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: '227+ autonomous agents handling content generation, quality assurance, and predictive maintenance.',
      color: 'bg-gradient-to-br from-purple-100 to-purple-200'
    },
    {
      icon: '🔄',
      title: 'Redundancy & Reliability',
      description: 'Multi-layer redundancy systems ensuring continuous operation and rapid recovery from failures.',
      color: 'bg-gradient-to-br from-green-100 to-green-200'
    },
    {
      icon: '📊',
      title: 'Intelligent Monitoring',
      description: 'Real-time performance tracking with automated alerts and intelligent error recovery.',
      color: 'bg-gradient-to-br from-indigo-100 to-indigo-200'
    },
    {
      icon: '🚀',
      title: 'Continuous Innovation',
      description: 'Automated content generation, SEO optimization, and performance enhancement systems.',
      color: 'bg-gradient-to-br from-orange-100 to-orange-200'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Advanced security protocols, automated threat detection, and compliance monitoring.',
      color: 'bg-gradient-to-br from-red-100 to-red-200'
    }
  ];

  const technologyStack = [
    {
      icon: '⚡',
      title: 'Next.js 14',
      description: 'Latest React framework with App Router and Server Components'
    },
    {
      icon: '🎨',
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      icon: '🔧',
      title: 'TypeScript',
      description: 'Type-safe JavaScript for better development experience'
    },
    {
      icon: '🚀',
      title: 'Vercel',
      description: 'Edge network deployment with global CDN'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Hero
        title="Zion Tech Group"
        subtitle="Autonomous Innovation Hub"
        description="The world's most advanced autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and the future of cloud-native AI infrastructure."
        primaryAction={{
          text: "Explore Our Services",
          href: "/services"
        }}
        secondaryAction={{
          text: "Learn More",
          href: "/about"
        }}
        stats={heroStats}
      />

      {/* Platform Capabilities */}
      <Features
        title="Revolutionary Platform Capabilities"
        subtitle="Discover how our autonomous systems are transforming the future of technology"
        features={platformFeatures}
        columns={3}
        className="bg-gray-50"
      />

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver exceptional performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyStack.map((tech, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tech.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our autonomous systems have achieved remarkable milestones in technology innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">227+</div>
              <div className="text-gray-600">Active Automations</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2960+</div>
              <div className="text-gray-600">Dynamic Pages</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">12</div>
              <div className="text-gray-600">Core Components</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.99%</div>
              <div className="text-gray-600">Uptime</div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our autonomous systems work seamlessly to deliver continuous innovation and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Analysis</h3>
              <p className="text-gray-600">
                Our AI systems continuously analyze performance, content quality, and user engagement patterns
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Optimization</h3>
              <p className="text-gray-600">
                Systems automatically implement improvements, content updates, and performance enhancements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Real-time monitoring ensures optimal performance and rapid response to any issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA
        title="Ready to Experience the Future?"
        description="Join us in revolutionizing technology with autonomous innovation and AI-powered solutions."
        primaryAction={{
          text: "Get Started Today",
          href: "/contact"
        }}
        secondaryAction={{
          text: "View Case Studies",
          href: "/case-studies"
        }}
      />
    </>
  );
}
