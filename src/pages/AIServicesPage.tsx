import React from 'react';
import { Link } from 'react-router-dom';

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300">
                Modern Business
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From content creation to predictive analytics, 
              our AI services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Get Started Today
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and growth across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Content Generation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
              <p className="text-gray-600 mb-4">
                Automated content creation for blogs, marketing materials, and social media posts.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$299/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Unlimited content generation</li>
                <li>• SEO optimization</li>
                <li>• Brand voice consistency</li>
                <li>• 24/7 support</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* AI Customer Support */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Customer Support</h3>
              <p className="text-gray-600 mb-4">
                Intelligent chatbots and support systems that provide 24/7 customer assistance.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">$499/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Multi-language support</li>
                <li>• Integration with CRM</li>
                <li>• Analytics dashboard</li>
                <li>• Custom training</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and forecasting to predict trends and optimize decisions.
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">$799/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Real-time data processing</li>
                <li>• Custom algorithms</li>
                <li>• Interactive dashboards</li>
                <li>• Expert consultation</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </Link>
            <a href="tel:+13024640950" className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}