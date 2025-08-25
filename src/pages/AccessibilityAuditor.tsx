import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Shield, BarChart3, Users, Globe, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

const AccessibilityAuditor: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Automated Testing",
      description: "Comprehensive automated accessibility testing and validation"
    },
    {
      icon: Shield,
      title: "Compliance Checking",
      description: "WCAG 2.1, Section 508, and other accessibility standards compliance"
    },
    {
      icon: BarChart3,
      title: "Detailed Reporting",
      description: "Comprehensive reports with actionable recommendations"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Focus on real user experience and accessibility needs"
    },
    {
      icon: Globe,
      title: "Multi-platform",
      description: "Test websites, mobile apps, and desktop applications"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and alerting for accessibility issues"
    }
  ];

  const testingAreas = [
    {
      title: "Visual Accessibility",
      description: "Ensure content is accessible to users with visual impairments",
      icon: Eye,
      tests: ["Color contrast", "Text sizing", "Image alt text", "Focus indicators"]
    },
    {
      title: "Keyboard Navigation",
      description: "Verify all functionality is accessible via keyboard",
      icon: Zap,
      tests: ["Tab order", "Keyboard shortcuts", "Focus management", "Skip links"]
    },
    {
      title: "Screen Reader Support",
      description: "Optimize for screen reader and assistive technology users",
      icon: Users,
      tests: ["Semantic markup", "ARIA labels", "Content structure", "Navigation"]
    },
    {
      title: "Content Accessibility",
      description: "Ensure content is clear and understandable for all users",
      icon: CheckCircle,
      tests: ["Language clarity", "Reading level", "Multimedia alternatives", "Forms"]
    }
  ];

  const complianceStandards = [
    {
      title: "WCAG 2.1",
      description: "Web Content Accessibility Guidelines 2.1",
      levels: ["Level A", "Level AA", "Level AAA"],
      icon: Shield
    },
    {
      title: "Section 508",
      description: "Federal accessibility requirements for government websites",
      levels: ["Full compliance", "Documentation", "Testing reports"],
      icon: CheckCircle
    },
    {
      title: "ADA Compliance",
      description: "Americans with Disabilities Act compliance",
      levels: ["Legal requirements", "Risk assessment", "Remediation plans"],
      icon: AlertTriangle
    },
    {
      title: "International Standards",
      description: "Global accessibility standards and requirements",
      levels: ["EN 301 549", "ISO 9241", "Local regulations"],
      icon: Globe
    }
  ];

  const benefits = [
    {
      title: "Legal Compliance",
      description: "Meet accessibility requirements and avoid legal issues",
      metric: "100%"
    },
    {
      title: "User Reach",
      description: "Expand your audience to include users with disabilities",
      metric: "15%"
    },
    {
      title: "SEO Improvement",
      description: "Better search engine optimization through accessibility",
      metric: "20%"
    },
    {
      title: "Brand Reputation",
      description: "Demonstrate commitment to inclusive design",
      metric: "5x"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Eye className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Accessibility Auditor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ensure your digital products are accessible to everyone. Our comprehensive accessibility 
              auditing platform helps you meet compliance standards and create inclusive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Audit
              </Link>
              <Link
                to="/services/accessibility"
                className="px-8 py-4 border border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Auditing Features</h2>
            <p className="text-xl text-gray-400">Comprehensive accessibility testing and validation capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testing Areas Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Testing Areas</h2>
            <p className="text-xl text-gray-400">Comprehensive accessibility testing across all critical areas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{area.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{area.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {area.tests.map((test, testIndex) => (
                      <div key={testIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                        {test}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance Standards</h2>
            <p className="text-xl text-gray-400">Meet and exceed accessibility requirements worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{standard.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{standard.description}</p>
                  <div className="space-y-2">
                    {standard.levels.map((level, levelIndex) => (
                      <div key={levelIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                        {level}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Accessibility Benefits</h2>
            <p className="text-xl text-gray-400">See the real impact of accessibility improvements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-4xl font-bold text-indigo-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Tool Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing development and testing tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Chrome DevTools", "Firefox DevTools", "Safari Web Inspector", "Edge DevTools", "Lighthouse", "axe-core",
              "Jest", "Cypress", "Playwright", "Selenium", "GitHub Actions", "Jenkins"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-indigo-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Make Your Products Accessible?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that prioritize accessibility and inclusive design. 
            Start your accessibility journey today with our comprehensive auditing platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Audit
            </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityAuditor;