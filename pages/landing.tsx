import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Landing: React.FC = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Autonomous Automation',
      description: 'Self-running systems that operate 24/7 without human intervention'
    },
    {
      icon: '☁️',
      title: 'Cloud-Native',
      description: 'Built for the cloud with scalability and resilience at its core'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security with comprehensive threat detection'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for maximum performance and user experience'
    }
  ];

  const stats = [
    { number: '227', label: 'Active Automations' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '2,960+', label: 'Generated Pages' },
    { number: '24/7', label: 'Continuous Operation' }
  ];

  const testimonials = [
    {
      quote: "bolt.new.zion.app has revolutionized our automation workflow. The autonomous systems work flawlessly around the clock.",
      author: "Sarah Chen",
      role: "CTO, TechCorp"
    },
    {
      quote: "The platform's reliability and performance have exceeded our expectations. It's truly a game-changer for modern development.",
      author: "Mike Rodriguez",
      role: "Lead DevOps Engineer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Landing - bolt.new.zion.app</title>
        <meta name="description" content="Experience the future of autonomous automation with bolt.new.zion.app" />
        <meta name="keywords" content="landing, automation, autonomous, cloud-native, bolt.new.zion.app" />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              The Future of Automation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Experience autonomous, cloud-native automation that runs 24/7, 
              continuously optimizing and evolving your technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/automation" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/playground" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose bolt.new.zion.app?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with proven reliability 
              to deliver automation that never sleeps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of developers and organizations who have already 
            embraced the future of autonomous automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              href="/discover" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Users Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <div className="text-2xl text-blue-200 mb-4">"</div>
                <p className="text-lg text-blue-100 mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-200">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600/30 to-purple-600/30">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Automation Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the power of autonomous automation and transform 
            your development workflow forever.
          </p>
          <Link 
            href="/" 
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Platform
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-8 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-blue-300 hover:text-white transition-colors underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;