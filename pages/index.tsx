import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function HomePage() {
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
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50" spacing="xl">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span>227+ Active Automations Running</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 gradient-text text-balance">
            The Future of
            <br />
            Autonomous Technology
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the world's most advanced autonomous innovation hub delivering cutting-edge AI solutions, 
            intelligent automation systems, and the future of cloud-native infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" href="/contact">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" href="/about">
              Learn More
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">227+</div>
              <div className="text-sm text-gray-600">Intelligent Automations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">2,960+</div>
              <div className="text-sm text-gray-600">Dynamic Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Core Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Platform Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our autonomous systems are transforming the future of technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Autonomous Cloud Systems */}
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Cloud Systems</h3>
            <ul className="text-gray-600 text-sm space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Self-healing CI/CD pipelines
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Intelligent build orchestration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Automated dependency management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Real-time performance monitoring
              </li>
            </ul>
          </Card>

          {/* AI-Powered Automation */}
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Automation</h3>
            <ul className="text-gray-600 text-sm space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                227+ autonomous agents
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Intelligent content generation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Automated quality assurance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Smart error recovery
              </li>
            </ul>
          </Card>

          {/* Redundancy & Reliability */}
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Redundancy & Reliability</h3>
            <ul className="text-gray-600 text-sm space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Multi-layer redundancy systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Zero-downtime deployments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Automatic failover systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Predictive maintenance
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our autonomous systems work seamlessly to deliver continuous innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Analysis</h3>
            <p className="text-gray-600">
              Our AI systems continuously analyze your infrastructure, identifying opportunities for optimization and improvement.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Action</h3>
            <p className="text-gray-600">
              Systems automatically implement improvements, deploy updates, and optimize performance without human intervention.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600">
              Every action is analyzed and learned from, making future decisions smarter and more effective.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of organizations already benefiting from autonomous technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/contact">
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" href="/case-studies" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
