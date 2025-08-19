import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      title: "Autonomous Cloud Management",
      description: "Self-managing infrastructure that scales, optimizes, and maintains itself",
      icon: "☁️",
      benefits: ["Auto-scaling", "Cost optimization", "24/7 monitoring"]
    },
    {
      title: "AI Content Generation",
      description: "Intelligent content creation that learns and improves over time",
      icon: "✍️",
      benefits: ["SEO optimization", "Brand consistency", "Multi-language support"]
    },
    {
      title: "Self-Healing DevOps",
      description: "Pipelines that detect and fix issues automatically",
      icon: "🔄",
      benefits: ["Error detection", "Auto-fixing", "Deployment optimization"]
    },
    {
      title: "Intelligent Security",
      description: "Proactive threat detection and automated response systems",
      icon: "🔒",
      benefits: ["Real-time monitoring", "Auto-response", "Vulnerability scanning"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "TechCorp",
      content: "Zion's autonomous systems have transformed our cloud operations. We've seen a 40% reduction in manual intervention and 99.9% uptime.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Lead",
      company: "InnovateSoft",
      content: "The self-healing pipelines are incredible. Issues that used to take hours to resolve now fix themselves in minutes.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Watson",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "AI content generation has increased our content output by 300% while maintaining quality and brand consistency.",
      avatar: "👩‍💼"
    }
  ];

  return (
    <>
      <Head>
        <title>Zion - Autonomous Cloud Automation Platform</title>
        <meta name="description" content="Experience the future of automation with Zion's autonomous cloud systems that run themselves, learn from experience, and continuously improve." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Zion's autonomous cloud systems run themselves, learn from experience, and continuously improve without human intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/playground"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Try It Live
              </Link>
              <Link 
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">227</div>
                <div className="text-gray-600">Active Automations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Operation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Zion?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Zion Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deploy</h3>
                <p className="text-gray-600">Set up your autonomous systems with simple configuration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Automate</h3>
                <p className="text-gray-600">Watch as systems manage themselves intelligently</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize</h3>
                <p className="text-gray-600">Continuous improvement through machine learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience True Automation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already transforming their operations with autonomous systems.
          </p>
          <div className="space-x-4">
            <Link 
              href="/playground"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Try Demo
            </Link>
            <Link 
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}