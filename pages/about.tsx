import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission and vision." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50" spacing="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of autonomous technology and AI-driven innovation
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
            </p>
            <p className="text-gray-600">
              We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-4">
              To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
            </p>
            <p className="text-gray-600">
              We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
            <p className="text-gray-600">
              Constantly pushing boundaries and exploring new frontiers in technology
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Autonomy</h3>
            <p className="text-gray-600">
              Building systems that can operate independently and make intelligent decisions
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Impact</h3>
            <p className="text-gray-600">
              Creating technology that makes a positive difference in the world
            </p>
          </Card>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to autonomous technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-bold mb-4 text-blue-600">AI Development</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Advanced machine learning models
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Natural language processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Computer vision systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Autonomous decision making
              </li>
            </ul>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Automation Systems</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Cloud infrastructure automation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                CI/CD pipeline optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Self-healing applications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Performance monitoring
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable results from our autonomous technology platform
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">227</div>
            <div className="text-sm text-gray-600">Active Automations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">2,960+</div>
            <div className="text-sm text-gray-600">Dynamic Pages</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Core Components</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">99.99%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the autonomous technology revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/contact">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}