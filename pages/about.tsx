import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of autonomous technology and AI-driven innovation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
                </p>
                <p className="text-gray-600">
                  We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl text-purple-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
                </p>
                <p className="text-gray-600">
                  We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-green-600 text-center">Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
                  <p className="text-gray-600">Constantly pushing boundaries and exploring new frontiers in technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Autonomy</h3>
                  <p className="text-gray-600">Building systems that can operate independently and make intelligent decisions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Impact</h3>
                  <p className="text-gray-600">Creating technology that makes a positive difference in the world</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What We Do */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-blue-600 text-center">What We Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">AI Development</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Advanced machine learning models
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Natural language processing
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Computer vision systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Autonomous decision making
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Automation Systems</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Cloud infrastructure automation
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      CI/CD pipeline optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Self-healing applications
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Performance monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Impact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-purple-600 text-center">Our Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">227</div>
                  <div className="text-sm text-gray-600">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">2960+</div>
                  <div className="text-sm text-gray-600">Dynamic Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">Core Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">99.99%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our autonomous technology can transform your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}