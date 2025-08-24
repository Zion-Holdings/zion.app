import React from 'react';
import { Link } from 'react-router-dom';

export default function IoTServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-teal-600 to-green-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
                Connected World
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge Internet of Things solutions. From device management to data analytics, 
              our IoT services deliver real-time insights and operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Get Started Today
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IoT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IoT solutions designed to drive innovation and efficiency across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IoT Device Management */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">IoT Device Management</h3>
              <p className="text-gray-600 mb-4">
                Centralized platform for managing, monitoring, and controlling IoT devices.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">$399/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Device provisioning</li>
                <li>• Remote monitoring</li>
                <li>• Firmware updates</li>
                <li>• Security management</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* IoT Data Analytics */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">IoT Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Real-time data processing and analytics for IoT sensor networks.
              </p>
              <div className="text-2xl font-bold text-teal-600 mb-4">$599/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Real-time processing</li>
                <li>• Predictive analytics</li>
                <li>• Custom dashboards</li>
                <li>• Data visualization</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* IoT Security */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">IoT Security</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions for IoT networks and devices.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$799/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Device authentication</li>
                <li>• Data encryption</li>
                <li>• Threat detection</li>
                <li>• Compliance monitoring</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
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
            Contact us today to discuss how our IoT solutions can transform your business operations and drive efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </Link>
            <a href="tel:+13024640950" className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}