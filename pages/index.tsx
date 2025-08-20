import React from 'react';
import Head from 'next/head';
import Hero from '../components/ui/Hero';
import FeaturesGrid from '../components/ui/FeaturesGrid';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

export default function HomePage() {
  const heroStats = [
    { value: '227+', label: 'Intelligent Automations', color: 'text-cyan-600' },
    { value: '2960+', label: 'Dynamic Pages', color: 'text-fuchsia-600' },
    { value: '12', label: 'Core Components', color: 'text-blue-600' },
    { value: '100%', label: 'Autonomous', color: 'text-green-600' },
    { value: '99.99%', label: 'Uptime', color: 'text-yellow-600' },
  ];

  const platformFeatures = [
    {
      icon: '☁️',
      title: 'Autonomous Cloud Systems',
      description: 'Self-healing CI/CD pipelines, intelligent build orchestration, and zero-downtime deployments.',
      color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: '227+ autonomous agents with intelligent content generation and predictive maintenance.',
      color: 'bg-gradient-to-br from-fuchsia-400 to-purple-500',
    },
    {
      icon: '🔄',
      title: 'Redundancy & Reliability',
      description: 'Multi-layer redundancy systems ensuring continuous operation and rapid recovery.',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Real-time monitoring, automated scaling, and intelligent resource management.',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Advanced threat detection, automated security updates, and compliance monitoring.',
      color: 'bg-gradient-to-br from-red-400 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting, performance metrics, and actionable business intelligence.',
      color: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    },
  ];

  const technologyStack = [
    { name: 'Next.js', description: 'React framework for production', icon: '⚛️' },
    { name: 'TypeScript', description: 'Type-safe JavaScript development', icon: '🔷' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨' },
    { name: 'Node.js', description: 'Server-side JavaScript runtime', icon: '🟢' },
    { name: 'PostgreSQL', description: 'Advanced open-source database', icon: '🐘' },
    { name: 'Redis', description: 'In-memory data structure store', icon: '🔴' },
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group — World&apos;s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World&apos;s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <Hero
        subtitle="Autonomous Innovation Hub"
        title="              The World&apos;s Most Advanced AI-Powered Cloud Platform"
        description="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
        stats={heroStats}
        background="gradient"
      />

      {/* Platform Capabilities */}
      <FeaturesGrid
        title="Revolutionary Platform Capabilities"
        subtitle="Built for the future of autonomous technology"
        features={platformFeatures}
        columns={3}
        className="bg-gray-50"
      />

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver unmatched performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((tech, index) => (
              <Card key={index} className="text-center group">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already leveraging our autonomous technology platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Start Your Journey
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform powers mission-critical systems for organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10M+</div>
              <div className="text-gray-300">API Calls/Day</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
