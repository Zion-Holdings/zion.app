import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, CheckCircle, AlertTriangle, BarChart3, ArrowRight, Shield, Users, Zap } from 'lucide-react';

export default function AccessibilityAuditor() {
  const features = [
    {
      icon: Eye,
      title: "Comprehensive Auditing",
      description: "Complete accessibility assessment across all digital touchpoints"
    },
    {
      icon: CheckCircle,
      title: "Compliance Checking",
      description: "WCAG 2.1, Section 508, and international accessibility standards"
    },
    {
      icon: AlertTriangle,
      title: "Issue Detection",
      description: "AI-powered detection of accessibility barriers and violations"
    },
    {
      icon: BarChart3,
      title: "Detailed Reporting",
      description: "Comprehensive reports with actionable recommendations"
    }
  ];

  const capabilities = [
    "Automated Accessibility Testing",
    "Manual Accessibility Auditing",
    "WCAG 2.1 Compliance",
    "Section 508 Compliance",
    "Mobile Accessibility Testing",
    "Screen Reader Compatibility",
    "Keyboard Navigation Testing",
    "Color Contrast Analysis"
  ];

  const benefits = [
    "Ensure digital accessibility compliance",
    "Improve user experience for all users",
    "Reduce legal accessibility risks",
    "Increase market reach and inclusion",
    "Enhance brand reputation",
    "Meet regulatory requirements",
    "Improve SEO and usability",
    "Demonstrate social responsibility"
  ];

  const testingAreas = [
    "Web Applications",
    "Mobile Apps",
    "Digital Documents",
    "E-commerce Sites",
    "Government Portals",
    "Educational Platforms",
    "Healthcare Systems",
    "Financial Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Accessibility Auditor
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ensure your digital products are accessible to everyone with our comprehensive 
            accessibility auditing and compliance platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/accessibility"
              className="inline-flex items-center px-8 py-4 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Accessibility Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that ensure your digital products 
              meet accessibility standards and serve all users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-emerald-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Complete Accessibility Testing
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our platform provides comprehensive accessibility testing and auditing 
                to ensure compliance with all major accessibility standards.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Audit Benefits</h3>
                  <p className="text-gray-300">Ensure accessibility compliance</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Testing for All Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our accessibility auditor works across all digital platforms and industries, 
              ensuring comprehensive coverage and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {testingAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Ensure Digital Accessibility?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading organizations that have already made their digital products 
            accessible to everyone with our comprehensive auditing platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}