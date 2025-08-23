import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Globe, Zap, Shield, Cpu, Database, Network, Server, Monitor, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb, TrendingUp, ArrowRight, BarChart3, FileText, CheckCircle, AlertCircle, Play, Square, RotateCcw } from 'lucide-react';

const BrowserAutomationCloud: React.FC = () => {
  const features = [
    'Scalable Cloud Infrastructure',
    'Multi-browser Support',
    'Real-time Monitoring',
    'Automated Testing',
    'Performance Analytics',
    'CI/CD Integration'
  ];

  const capabilities = [
    'Web Scraping & Data Extraction',
    'Automated Testing & QA',
    'Performance Monitoring',
    'User Journey Automation',
    'Cross-browser Compatibility',
    'Load Testing & Stress Testing'
  ];

  const useCases = [
    'E-commerce Automation',
    'Content Monitoring',
    'Lead Generation',
    'Quality Assurance',
    'Performance Testing',
    'Data Collection'
  ];

  const benefits = [
    'Reduce manual testing time by 90%',
    'Improve test coverage and accuracy',
    'Scale automation across multiple browsers',
    'Real-time monitoring and alerting',
    'Cost-effective cloud-based solution',
    'Easy integration with existing workflows'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center">
                <Globe className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Browser Automation Cloud
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Scalable, cloud-based browser automation platform for testing, scraping, and monitoring web applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Automation
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature}</h3>
                  <p className="text-gray-300">
                    Enterprise-grade automation capabilities designed for scale and reliability.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Automation Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{capability}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Advanced automation features for complex web interactions.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-300">
                      Transform your web automation workflows with cloud-powered solutions.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase}</h3>
                  <p className="text-gray-300 text-sm">
                    Automate complex web workflows for your specific business needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Automate Your Web Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Scale your automation efforts with our cloud-based browser automation platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a 
                href="/solutions"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BrowserAutomationCloud;